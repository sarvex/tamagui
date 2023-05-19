import { expect, test } from '@playwright/test'

import { getPressStyle } from './utils'

test.beforeEach(async ({ page }) => {
  await page.goto('/?test=StyledButtonVariantPseudoMerge')
})

test(`pseudo + variant with pseudo should merge`, async ({ page }) => {
  const button = page.locator('button#test')
  const pressStyles = await getPressStyle(button, { delay: 3000 })
  expect(pressStyles.backgroundColor).toBe(`rgb(255, 0, 0)`)
  expect(pressStyles.transform).toBe(`matrix(0.5, 0, 0, 0.5, 0, 0)`)
})

test(`animation + pseudo + variant with pseudo should merge`, async ({ page }) => {
  const button = page.locator('#animated')
  const pressStyles = await getPressStyle(button, { delay: 3000 })
  expect(pressStyles.backgroundColor).toBe(`rgb(255, 0, 0)`)
  expect(pressStyles.transform).toBe(`matrix(0.5, 0, 0, 0.5, 0, 0)`)
})

test(`styled without variants HOC of HOC + pseudo`, async ({ page }) => {
  const button = page.locator('#double-styled')
  const pressStyles = await getPressStyle(button, { delay: 3000 })
  expect(pressStyles.backgroundColor).toBe(`rgb(255, 0, 0)`)
  expect(pressStyles.transform).toBe(`matrix(0.5, 0, 0, 0.5, 0, 0)`)
})
