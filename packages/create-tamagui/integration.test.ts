import { execSync } from 'child_process'
/* eslint-disable no-console */
import { platform, tmpdir } from 'os'
import { join } from 'path'

import { expect, test } from '@playwright/test'
import { existsSync, remove } from 'fs-extra'
import waitPort from 'wait-port'
import { $, ProcessPromise, cd, fetch, fs, sleep } from 'zx'

let server: ProcessPromise | null = null

const PACKAGE_ROOT = __dirname
const PACKAGES_ROOT = join(PACKAGE_ROOT, '..')

// if (process.env.NODE_ENV === 'test') {
//   if (execSync(`git status --porcelain`).toString().trim()) {
//     throw new Error(`-- ⚠️ Must commit changes to git repo before running test --`)
//   }
// }

process.env.NODE_ENV = 'test'
$.env.NODE_ENV = 'test'

const isLocalDev = platform() === 'darwin'
const dir = isLocalDev ? `/tmp/test` : join(tmpdir(), `cta-test-${Date.now()}`)

const oneMinute = 1000 * 60

let didFailInBeforeAll = false

test.beforeAll(async () => {
  try {
    // 15 m
    test.setTimeout(oneMinute * 15)

    const tamaguiBin = join(PACKAGE_ROOT, `dist`, `index.js`)

    console.log(`Making test app in`, dir)

    // clear it from old tests
    await fs.remove(dir)
    await fs.ensureDir(dir)

    cd(dir)

    await $`node ${tamaguiBin} test-app --template next-expo-solito`

    cd(`test-app`)

    server = $`yarn web:extract`

    server.catch((err) => {
      console.warn(`server err ${err}`)
    })

    await waitPort({
      port: 3000,
      host: 'localhost',
    })

    // pre-warm
    await fetch(`http://localhost:3000`)
    await sleep(2000)
  } catch (err) {
    didFailInBeforeAll = true
    throw err
  }
})

test.afterAll(async () => {
  test.setTimeout(oneMinute * 3)
  console.log(`Killing server...`)

  await Promise.race([
    server?.kill(),
    sleep(oneMinute).then(() => console.log(`timed out server kill`)),
  ])

  if (didFailInBeforeAll) {
    console.log(`\n ⚠️ Failed during test, leaving behind tmp dir for debugging\n`)
    return
  }

  if (isLocalDev && !process.env.TAMAGUI_AVOID_TEST_CLEANUP) {
    // next complains if we delete too soon i think
    await sleep(1000)
    await Promise.race([
      $`rm -rf ${dir}`,
      sleep(oneMinute).then(() => console.log(`timed out cleanup`)),
    ])

    console.log(`Done cleaning`)
  }
})

// TODO run these tests in prod and dev

test(`Loads home screen that opens drawer`, async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page.locator('text=Welcome to Tamagui.')).toBeVisible()

  // open drawer (TODO make attr for better selector)
  await page.locator('.is_Button').nth(1).click()
  await expect(page.locator('.is_Sheet').first()).toBeVisible()

  // TODO add label to inner close button
  // TODO add visual test for sheet opening
})

test(`Navigates to user page`, async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page.locator('a[role="link"]:has-text("Link to user")')).toBeVisible()
  await page.locator('a[role="link"]:has-text("Link to user")').click()
  await expect(page.locator('text=User ID: nate')).toBeVisible()
  await expect(page).toHaveURL('http://localhost:3000/user/nate')
})
