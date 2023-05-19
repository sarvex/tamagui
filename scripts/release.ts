/* eslint-disable no-console */
import * as proc from 'node:child_process'
import { join } from 'node:path'
import { promisify } from 'node:util'
import path from 'path'

import fs, { readJSON, writeJSON } from 'fs-extra'
import _ from 'lodash'
import pMap from 'p-map'
import prompts from 'prompts'

import { spawnify } from './spawnify'

// avoid emitter error
process.setMaxListeners(0)

// --resume would be cool here where it stores the last failed step somewhere and tries resuming

const exec = promisify(proc.exec)
export const spawn = proc.spawn

// for failed publishes that need to re-run
const confirmFinalPublish = process.argv.includes('--confirm-final-publish')
const rePublish = process.argv.includes('--republish')
const finish = process.argv.includes('--finish')

const canary = process.argv.includes('--canary')
const skipVersion = rePublish || process.argv.includes('--skip-version')
const patch = process.argv.includes('--patch')
const dirty = process.argv.includes('--dirty')
const skipPublish = process.argv.includes('--skip-publish')
const skipTest =
  rePublish ||
  process.argv.includes('--skip-test') ||
  process.argv.includes('--skip-tests')
const skipBuild = rePublish || process.argv.includes('--skip-build')
const dryRun = process.argv.includes('--dry-run')
const tamaguiGitUser = process.argv.includes('--tamagui-git-user')
const isCI = process.argv.includes('--ci')

const curVersion = fs.readJSONSync('./packages/tamagui/package.json').version

const nextVersion = (() => {
  const plusVersion = skipVersion ? 0 : 1
  const curPatch = +curVersion.split('.')[2] || 0
  const patchVersion = patch ? curPatch + plusVersion : 0
  const curMinor = +curVersion.split('.')[1] || 0
  const minorVersion = curMinor + (patch || canary ? 0 : plusVersion)
  const next = `1.${minorVersion}.${patchVersion}`

  if (canary) {
    return `${next}-${Date.now()}`
  }

  return next
})()

const sleep = (ms) => {
  // rome-ignore lint/nursery/noConsoleLog: <explanation>
  console.log(`Sleeping ${ms}ms`)
  return new Promise((res) => setTimeout(res, ms))
}

if (!finish) {
  if (!skipVersion) {
    console.log('Publishing version:', nextVersion, '\n')
  } else {
    console.log(`Re-publishing ${curVersion}`)
  }
}

async function run() {
  try {
    let version = curVersion

    if (!finish) {
      // ensure we are up to date
      // ensure we are on master
      if (!canary) {
        if ((await exec(`git rev-parse --abbrev-ref HEAD`)).stdout.trim() !== 'master') {
          throw new Error(`Not on master`)
        }
        if (!dirty) {
          await spawnify(`git pull --rebase origin master`)
        }
      }

      const workspaces = (await exec(`yarn workspaces list --json`)).stdout
        .trim()
        .split('\n')
      const packagePaths = workspaces.map((p) => JSON.parse(p)) as {
        name: string
        location: string
      }[]

      const allPackageJsons = await Promise.all(
        packagePaths
          .filter((i) => i.location !== '.' && !i.name.startsWith('@takeout'))
          .map(async ({ name, location }) => {
            const cwd = path.join(process.cwd(), location)
            return {
              name,
              cwd,
              json: await fs.readJSON(path.join(cwd, 'package.json')),
              path: path.join(cwd, 'package.json'),
              directory: location,
            }
          })
      )

      const packageJsons = allPackageJsons
        .filter((x) => {
          return !x.json.private
        })
        // slow things last
        .sort((a, b) => {
          if (a.name.includes('font-') || a.name.includes('-icons')) {
            return 1
          }
          return -1
        })

      // rome-ignore lint/nursery/noConsoleLog: <explanation>
      console.log(`Publishing in order:\n\n${packageJsons.map((x) => x.name).join('\n')}`)

      async function checkDistDirs() {
        await Promise.all(
          packageJsons.map(async ({ cwd, json }) => {
            const distDir = join(cwd, 'dist')
            if (!json.scripts || json.scripts.build === 'true') {
              return
            }
            if (!(await fs.pathExists(distDir))) {
              console.warn('no dist dir!', distDir)
              process.exit(1)
            }
          })
        )
      }
      if (tamaguiGitUser) {
        await spawnify(`git config --global user.name 'Tamagui'`)
        await spawnify(`git config --global user.email 'tamagui@users.noreply.github.com`)
      }

      const answer =
        isCI || skipVersion
          ? { version: nextVersion }
          : await prompts({
              type: 'text',
              name: 'version',
              message: 'Version?',
              initial: nextVersion,
            })

      version = answer.version

      // rome-ignore lint/nursery/noConsoleLog: <explanation>
      console.log('install and build')

      if (!rePublish) {
        await spawnify(`yarn install`)
      }

      if (!skipBuild) {
        await spawnify(`yarn build`)
        await checkDistDirs()
      }

      // rome-ignore lint/nursery/noConsoleLog: <explanation>
      console.log('run checks')

      if (!skipTest) {
        await spawnify(`yarn fix`)
        await spawnify(`yarn lint`)
        await spawnify(`yarn check`)
        await spawnify(`yarn test`)
      }

      if (!dirty && !dryRun && !rePublish) {
        const out = await exec(`git status --porcelain`)
        if (out.stdout) {
          throw new Error(`Has unsaved git changes: ${out.stdout}`)
        }
      }

      if (!skipVersion) {
        await Promise.all(
          allPackageJsons.map(async ({ json, path }) => {
            const next = { ...json }

            next.version = version

            for (const field of [
              'dependencies',
              'devDependencies',
              'optionalDependencies',
              'peerDependencies',
            ]) {
              const nextDeps = next[field]
              if (!nextDeps) continue
              for (const depName in nextDeps) {
                if (packageJsons.some((p) => p.name === depName)) {
                  nextDeps[depName] = version
                }
              }
            }

            await writeJSON(path, next, { spaces: 2 })
          })
        )
      }

      if (dryRun) {
        // rome-ignore lint/nursery/noConsoleLog: <explanation>
        console.log(`Dry run, exiting before publish`)
        return
      }

      if (!rePublish) {
        await spawnify(`git diff`)
      }

      if (!isCI) {
        const { confirmed } = await prompts({
          type: 'confirm',
          name: 'confirmed',
          message: 'Ready to publish?',
        })

        if (!confirmed) {
          process.exit(0)
        }
      }

      if (!skipPublish && !rePublish) {
        const erroredPackages: { name: string }[] = []

        // publish with tag

        await pMap(
          packageJsons,
          async (pkg) => {
            const { cwd, name } = pkg
            // rome-ignore lint/nursery/noConsoleLog: <explanation>
            console.log(`Publish ${name}`)

            // check if already published first as its way faster for re-runs
            let versionsOut = ''
            try {
              versionsOut = await spawnify(`npm view ${name} versions --json`, {
                avoidLog: true,
              })
              const allVersions = JSON.parse(versionsOut.trim().replaceAll(`\n`, ''))
              const latest = allVersions[allVersions.length - 1]

              if (latest === nextVersion) {
                console.log(`Already published, skipping`)
                return
              }
            } catch (err) {
              if (`${err}`.includes(`404`)) {
                // fails if never published before, ok
              } else {
                if (`${err}`.includes(`Unexpected token`)) {
                  console.log(`Bad JSON? ${versionsOut}`)
                }
                throw err
              }
            }

            try {
              await spawnify(`npm publish --tag prepub`, {
                cwd,
                avoidLog: true,
              })
              console.log(` 📢 pre-published ${name}`)
            } catch (err: any) {
              // @ts-ignore
              if (err.includes(`403`)) {
                console.log('Already published, skipping')
                return
              }
              console.log(`Error publishing!`, `${err}`)
            }
          },
          {
            concurrency: 5,
          }
        )

        // rome-ignore lint/nursery/noConsoleLog: <explanation>
        console.log(
          `✅ Published under dist-tag "prepub" (${erroredPackages.length} errors)\n`
        )
      }

      if (confirmFinalPublish) {
        const { confirmed } = await prompts({
          type: 'confirm',
          name: 'confirmed',
          message: 'Ready to publish?',
        })
        if (!confirmed) {
          console.log(`Not confirmed, can re-run with --republish to try again`)
          process.exit(0)
        }
      }

      await sleep(4 * 1000)

      if (rePublish) {
        // if all successful, re-tag as latest
        await pMap(
          packageJsons,
          async ({ name, cwd }) => {
            const tag = canary ? ` --tag canary` : ''

            console.log(`Publishing ${name}${tag}`)

            await spawnify(`npm publish${tag}`, {
              cwd,
            }).catch((err) => console.error(err))
          },
          {
            concurrency: 15,
          }
        )
      } else {
        const distTag = canary ? 'canary' : 'latest'

        // if all successful, re-tag as latest (try and be fast)
        await pMap(
          packageJsons,
          async ({ name, cwd }) => {
            await spawnify(`npm dist-tag add ${name}@${version} ${distTag}`, {
              cwd,
            }).catch((err) => console.error(err))
          },
          {
            concurrency: 20,
          }
        )
      }

      // rome-ignore lint/nursery/noConsoleLog: <explanation>
      console.log(`✅ Published\n`)
    }

    // then git tag, commit, push
    await spawnify(`yarn fix`)
    await spawnify(`yarn install`)

    if (!finish) {
      await sleep(4 * 1000)
    }

    await spawnify(`yarn upgrade:starters`)
    await spawnify(`yarn fix`)
    await spawnify(`yarn fix`, {
      cwd: join(process.cwd(), 'starters/next-expo-solito'),
    })

    const tagPrefix = canary ? 'canary' : 'v'
    const gitTag = `${tagPrefix}${version}`

    if (!rePublish) {
      await spawnify(`git add -A`)
      await spawnify(`git commit -m ${gitTag}`)
      await spawnify(`git tag ${gitTag}`)
      await spawnify(`git push origin head`)
      await spawnify(`git push origin ${gitTag}`)
      // rome-ignore lint/nursery/noConsoleLog: <explanation>
      console.log(`✅ Pushed and versioned\n`)
    }

    // just leave it
    // console.log(`All done, cleanup up in...`)
    // await sleep(2 * 1000)
    // // then remove old prepub tag
    // await pMap(
    //   packageJsons,
    //   async ({ name, cwd }) => {
    //     await spawnify(`npm dist-tag remove ${name}@${version} prepub`, {
    //       cwd,
    //     }).catch((err) => console.error(err))
    //   },
    //   {
    //     concurrency: 20,
    //   }
    // )

    // rome-ignore lint/nursery/noConsoleLog: <explanation>
    console.log(`✅ Done\n`)
  } catch (err) {
    // rome-ignore lint/nursery/noConsoleLog: <explanation>
    console.log('\nError:\n', err)
    process.exit(1)
  }
}

run()
