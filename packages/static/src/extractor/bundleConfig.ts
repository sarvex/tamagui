import { readFileSync } from 'fs'
import path, { basename, dirname, extname, join, relative, sep } from 'path'

import generate from '@babel/generator'
import traverse from '@babel/traverse'
import * as t from '@babel/types'
import { Color, colorLog } from '@tamagui/cli-color'
import type { StaticConfigParsed, TamaguiInternalConfig } from '@tamagui/web'
import esbuild from 'esbuild'
import { ensureDir, removeSync, writeFileSync } from 'fs-extra'

import { registerRequire } from '../require'
import { TamaguiOptions } from '../types'
import { babelParse } from './babelParse'
import { bundle } from './bundle'

let loggedOutputInfo = false

type NameToPaths = {
  [key: string]: Set<string>
}

export type LoadedComponents = {
  moduleName: string
  nameToInfo: Record<
    string,
    {
      staticConfig: StaticConfigParsed
    }
  >
}

export type TamaguiProjectInfo = {
  components: LoadedComponents[]
  tamaguiConfig: TamaguiInternalConfig
  nameToPaths: NameToPaths
}

const external = [
  '@tamagui/core',
  '@tamagui/web',
  '@tamagui/core-node',
  'react',
  'react-dom',
  'react-native-svg',
]

export const esbuildOptions = {
  loader: 'tsx',
  target: 'es2018',
  format: 'cjs',
  jsx: 'transform',
  platform: 'node',
} as const

export type BundledConfig = Awaited<ReturnType<typeof bundleConfig>>

// will use cached one if watching
let currentBundle: BundledConfig | null = null
let isBundling = false
let lastBundle: BundledConfig | null = null
const waitForBundle = new Set<Function>()

export async function hasBundledConfigChanged() {
  if (lastBundle === currentBundle) {
    return false
  }
  lastBundle = currentBundle
  return true
}

export async function getBundledConfig(props: TamaguiOptions, rebuild = false) {
  if (isBundling) {
    await new Promise((res) => {
      waitForBundle.add(res)
    })
  } else if (!currentBundle || rebuild) {
    return await bundleConfig(props)
  }
  return currentBundle
}

export async function bundleConfig(props: TamaguiOptions) {
  try {
    isBundling = true

    const configEntry = props.config ? join(process.cwd(), props.config) : ''
    const tmpDir = join(process.cwd(), '.tamagui')
    const configOutPath = join(tmpDir, `tamagui.config.cjs`)
    const baseComponents = props.components.filter((x) => x !== '@tamagui/core')
    const componentOutPaths = baseComponents.map((componentModule) =>
      join(
        tmpDir,
        `${componentModule
          .split(sep)
          .join('-')
          .replace(/[^a-z0-9]+/gi, '')}-components.config.cjs`
      )
    )

    if (
      process.env.NODE_ENV === 'development' &&
      process.env.DEBUG?.startsWith('tamagui')
    ) {
      // rome-ignore lint/nursery/noConsoleLog: <explanation>
      console.log(`Building config entry`, configEntry)
    }

    // build them to node-compat versions
    try {
      await ensureDir(tmpDir)
    } catch {
      //
    }

    const start = Date.now()

    await Promise.all([
      props.config
        ? bundle({
            entryPoints: [configEntry],
            external,
            outfile: configOutPath,
            target: 'node16',
          })
        : null,
      ...baseComponents.map((componentModule, i) => {
        return bundle({
          entryPoints: [componentModule],
          resolvePlatformSpecificEntries: true,
          external,
          outfile: componentOutPaths[i],
          target: 'node16',
        })
      }),
    ])

    if (!loggedOutputInfo) {
      loggedOutputInfo = true
      colorLog(
        Color.FgYellow,
        `
        Tamagui built config and components (${Date.now() - start}ms):`
      )
      colorLog(
        Color.Dim,
        `
          Config     .${sep}${relative(process.cwd(), configOutPath)}
          Components ${[
            ...componentOutPaths.map((p) => `.${sep}${relative(process.cwd(), p)}`),
          ].join('\n             ')}
          `
      )
    }

    // get around node.js's module cache to get the new config...
    delete require.cache[path.resolve(configOutPath)]

    let out
    const unregister = registerRequire()
    try {
      out = require(configOutPath)
    } catch (err) {
      // rome-ignore lint/complexity/noUselessCatch: <explanation>
      throw err
    } finally {
      unregister()
    }
    const config = out.default || out

    if (!config) {
      throw new Error(`No config: ${config}`)
    }

    let components = loadComponents({
      ...props,
      components: componentOutPaths,
    })

    if (!components) {
      throw new Error(`No components found: ${componentOutPaths.join(', ')}`)
    }

    // map from built back to original module names
    for (const component of components) {
      component.moduleName =
        baseComponents[componentOutPaths.indexOf(component.moduleName)]

      if (!component.moduleName) {
        console.warn(
          `⚠️ no module name found: ${component.moduleName} ${JSON.stringify(
            baseComponents
          )} in ${JSON.stringify(componentOutPaths)}`
        )
      }
    }

    // always load core so we can optimize if directly importing
    const coreComponents = loadComponents({
      ...props,
      components: ['@tamagui/core-node'],
    })
    if (coreComponents) {
      coreComponents[0].moduleName = '@tamagui/core'
      components = [...components, ...coreComponents]
    }

    if (
      process.env.NODE_ENV === 'development' &&
      process.env.DEBUG?.startsWith('tamagui')
    ) {
      // rome-ignore lint/nursery/noConsoleLog: <explanation>
      console.log('Loaded components', components)
    }

    const res = {
      components,
      nameToPaths: {},
      tamaguiConfig: config,
    }

    currentBundle = res

    return res
  } catch (err: any) {
    console.error(
      `Error bundling tamagui config: ${err?.message} (run with DEBUG=tamagui to see stack)`
    )
    if (process.env.DEBUG?.includes('tamagui')) {
      console.error(err.stack)
    }
  } finally {
    isBundling = false
    waitForBundle.forEach((cb) => cb())
    waitForBundle.clear()
  }
}

export function loadComponents(props: TamaguiOptions): null | LoadedComponents[] {
  const componentsModules = props.components
  const key = componentsModules.join('')
  if (cacheComponents[key]) {
    return cacheComponents[key]
  }

  const unregister = registerRequire()

  try {
    const info: LoadedComponents[] = componentsModules.flatMap((name) => {
      const extension = extname(name)
      const isLocal = Boolean(extension)
      // during props.config pass we are passing in pre-bundled stuff
      const isDynamic = isLocal && !props.config

      if (isDynamic && !process.env.TAMAGUI_ENABLE_DYNAMIC_LOAD) {
        return []
      }

      const fileContents = isDynamic ? readFileSync(name, 'utf-8') : ''
      const loadModule = isDynamic
        ? join(dirname(name), `.tamagui-dynamic-eval-${basename(name)}.tsx`)
        : name
      let writtenContents = fileContents
      let didBabel = false

      function attemptLoad({ forceExports = false } = {}) {
        // need to write to tsx to enable reading it properly (:/ esbuild-register)
        if (isDynamic) {
          writtenContents = forceExports
            ? esbuildit(
                transformAddExports(babelParse(esbuildit(fileContents, 'modern')))
              )
            : esbuildit(fileContents)

          writeFileSync(loadModule, writtenContents)
        }

        if (process.env.DEBUG === 'tamagui') {
          // rome-ignore lint/nursery/noConsoleLog: <explanation>
          console.log(`loadModule`, loadModule, require.resolve(loadModule))
        }

        const nameToInfo = getComponentStaticConfigByName(
          name,
          interopDefaultExport(require(loadModule))
        )

        return {
          moduleName: name,
          nameToInfo,
        }
      }

      const dispose = () => {
        isDynamic && removeSync(loadModule)
      }

      try {
        const res = attemptLoad({
          forceExports: true,
        })
        didBabel = true
        return res
      } catch (err) {
        // rome-ignore lint/nursery/noConsoleLog: <explanation>
        console.log('babel err', err, writtenContents)
        // ok
        writtenContents = fileContents
        if (process.env.DEBUG?.startsWith('tamagui')) {
          // rome-ignore lint/nursery/noConsoleLog: <explanation>
          console.log(`Error parsing babel likely`, err)
        }
      } finally {
        dispose()
      }

      try {
        return attemptLoad({
          forceExports: false,
        })
      } catch (err) {
        if (!process.env.TAMAGUI_DISABLE_WARN_DYNAMIC_LOAD) {
          // rome-ignore lint/nursery/noConsoleLog: <explanation>
          console.log(`

Tamagui attempted but failed to dynamically load components in:
  ${name}

This will leave some styled() tags unoptimized.
Disable this file (or dynamic loading altogether):

  disableExtractFoundComponents: ['${name}'] | true

Quiet this warning with environment variable:
      
  TAMAGUI_DISABLE_WARN_DYNAMIC_LOAD=1

`)
          // rome-ignore lint/nursery/noConsoleLog: <explanation>
          console.log(err)
          // rome-ignore lint/nursery/noConsoleLog: <explanation>
          console.log(
            `At: ${loadModule}`,
            `\ndidBabel: ${didBabel}`,
            `\nIn:`,
            writtenContents,
            `\nisDynamic: `,
            isDynamic
          )
        }
        return []
      } finally {
        dispose()
      }
    })
    cacheComponents[key] = info
    return info
  } catch (err: any) {
    // rome-ignore lint/nursery/noConsoleLog: <explanation>
    console.log(`Tamagui error bundling components`, err.message, err.stack)
    return null
  } finally {
    unregister()
  }
}

const esbuildit = (src: string, target?: 'modern') => {
  return esbuild.transformSync(src, {
    ...esbuildOptions,
    ...(target === 'modern' && {
      target: 'es2022',
      jsx: 'transform',
      loader: 'tsx',
      platform: 'neutral',
      format: 'esm',
    }),
  }).code
}

function getComponentStaticConfigByName(name: string, exported: any) {
  const components: Record<string, { staticConfig: StaticConfigParsed }> = {}
  try {
    if (!exported || typeof exported !== 'object' || Array.isArray(exported)) {
      throw new Error(`Invalid export from package ${name}: ${typeof exported}`)
    }
    for (const key in exported) {
      const found = getTamaguiComponent(key, exported[key])
      if (found) {
        // remove non-stringifyable
        const { Component, ...sc } = found.staticConfig
        components[key] = { staticConfig: sc }
      }
    }
  } catch (err) {
    if (process.env.TAMAGUI_DISABLE_WARN_DYNAMIC_LOAD !== '1') {
      console.error(
        `Tamagui failed getting from ${name} (Disable error by setting environment variable TAMAGUI_DISABLE_WARN_DYNAMIC_LOAD=1)`
      )
      console.error(err)
    }
  }
  return components
}

function getTamaguiComponent(
  name: string,
  Component: any
): undefined | { staticConfig: StaticConfigParsed } {
  if (name[0].toUpperCase() !== name[0]) {
    return
  }
  const staticConfig = Component?.staticConfig as StaticConfigParsed | undefined
  if (staticConfig) {
    return Component
  }
}

function interopDefaultExport(mod: any) {
  return mod?.default ?? mod
}

const cacheComponents: Record<string, LoadedComponents[]> = {}

function transformAddExports(ast: t.File) {
  const usedNames = new Set<string>()

  // avoid clobbering
  // @ts-ignore
  traverse(ast, {
    ExportNamedDeclaration(nodePath) {
      if (nodePath.node.specifiers) {
        for (const spec of nodePath.node.specifiers) {
          usedNames.add(
            t.isIdentifier(spec.exported) ? spec.exported.name : spec.exported.value
          )
        }
      }
    },
  })

  // @ts-ignore
  traverse(ast, {
    VariableDeclaration(nodePath) {
      // top level only
      if (!t.isProgram(nodePath.parent)) return
      const decs = nodePath.node.declarations
      if (decs.length > 1) return
      const [dec] = decs
      if (!t.isIdentifier(dec.id)) return
      if (!dec.init) return
      if (usedNames.has(dec.id.name)) return
      usedNames.add(dec.id.name)
      nodePath.replaceWith(
        t.exportNamedDeclaration(t.variableDeclaration('let', [dec]), [
          t.exportSpecifier(t.identifier(dec.id.name), t.identifier(dec.id.name)),
        ])
      )
    },
  })

  // @ts-ignore
  return generate(ast as any, {
    concise: false,
    filename: 'test.tsx',
    retainLines: false,
    sourceMaps: false,
  }).code
}
