import '@expo/match-media'

import { act, render } from '@testing-library/react'
import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { beforeAll, describe, expect, test } from 'vitest'

import { preTest } from './lib/preTest'

/**
 * disabled for now but we really need to bring this back
 */

process.env.IS_STATIC = ''

const context: any = {}

describe('webpack-tests', () => {
  beforeAll(async () => {
    await preTest()
    const app = require('./spec/out/out-webpack')
    console.log('got app', app)
    await Promise.all([
      Object.keys(app).map((key) => {
        return act(() => {
          const App = app[key]
          const Provider = app.Provider
          context[key.toLowerCase()] = {
            Element: (props) => (
              <Provider>
                <App {...props} />
              </Provider>
            ),
            renderer: TestRenderer.create(
              <Provider>
                <App conditional={true} />
              </Provider>
            ),
            rendererFalse: TestRenderer.create(
              <Provider>
                <App conditional={false} />
              </Provider>
            ),
          }
        })
      }),
    ])
  })

  //
  // test styles
  //
  // testStyles(test)

  test('1. extracts to a div for simple views, flat transforms', () => {
    const { test1 } = context
    const out = test1.renderer.toJSON()!
    expect(out).toMatchSnapshot()
  })

  test('2. extracts className for complex views but keeps other props', () => {
    const { test2 } = context
    const out = test2.renderer.toJSON()!
    expect(out).toMatchSnapshot()
    const outFalse = test2.rendererFalse.toJSON()
    expect(outFalse).toMatchSnapshot()
  })

  test('3. places className correctly given a single spread', async () => {
    const {
      test3: { Element },
    } = context
    const out = render(<Element />)
    const list = [...out.container.firstChild?.['classList']]
    expect(list).toMatchSnapshot()
  })

  test('4. leaves dynamic variables', async () => {
    const {
      test4: { renderer, Element },
    } = context
    const out = render(<Element />)
    const firstChild = out.container.firstChild!
    const classList = [...firstChild['classList']]
    expect(classList).toMatchSnapshot()
    const r = renderer.toJSON()
    expect(r).toMatchSnapshot()
  })

  test('5. spread conditional', async () => {
    const { test5 } = context
    const out = test5.renderer.toJSON()
    expect(out).toMatchSnapshot()
  })

  test('6. spread ternary', async () => {
    const { test6 } = context
    expect(test6.renderer.toJSON()).toMatchSnapshot()
    expect(test6.rendererFalse.toJSON()).toMatchSnapshot()
  })

  test('7. ternary + data-is', async () => {
    const { test7 } = context
    const out = test7.renderer.toJSON()
    expect(out).toMatchSnapshot()
  })

  test('8. styleExpansions', async () => {
    const { test8 } = context
    const out = test8.renderer.toJSON()
    expect(out).toMatchSnapshot()
  })

  test('9. combines with classname', async () => {
    const { test9 } = context
    const out = test9.renderer.toJSON()
    expect(out).toMatchSnapshot()
  })

  test('10. extracts Text', async () => {
    const { test10 } = context
    const out = test10.renderer.toJSON()
    expect(out).toMatchSnapshot()
  })

  test('11. combines everything', async () => {
    const {
      test11: { Element },
    } = context
    const out = render(<Element conditional={false} />)
    const firstChild = out.container.firstChild!
    const classList = [...firstChild['classList']]
    expect(classList).toMatchSnapshot()
  })

  test('12. ternary multiple on same key', async () => {
    const { test12 } = context
    expect(test12.renderer.toJSON()).toMatchSnapshot()
  })

  // test('13. text with complex conditional and local vars', async () => {
  //   const { test13 } = context
  //   // console.log('test13', test13.renderer!.toTree())
  //   t.is(1, 1)
  // })

  test('14. extracts pseudo styles and evaluates constants', async () => {
    const { test14 } = context
    const out = test14.renderer.toJSON()
    expect(out).toMatchSnapshot()
  })

  test('15. extracts spacer (complex expansion)', () => {
    const { test15 } = context
    const out = test15.renderer.toJSON()
    expect(out).toMatchSnapshot()
  })

  test('16. deopt when spreading multiple', () => {
    const { test16 } = context
    const out = test16.renderer.toJSON()
    expect(out).toMatchSnapshot()
  })
})
