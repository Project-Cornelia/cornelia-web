import { test, expect } from '@playwright/test'

test('home carousel, impact and FAQ remain interactive', async ({ page }) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))

  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).not.toBeEmpty()
  await page.getByRole('button', { name: 'Pause automatic slideshow' }).click()
  await page.getByRole('button', { name: 'Show image 2' }).click()
  await expect(page.getByText('02 / 03')).toBeVisible()

  await page.locator('#faq').scrollIntoViewIfNeeded()
  await page.getByRole('button', { name: /Is Cornelia a registered entity/ }).click()
  await expect(page.getByText(/registered as a trust under the name AINA Foundation/)).toBeVisible()
  expect(errors).toEqual([])
})

test('all resource tabs share the same library layout and links', async ({ page }) => {
  await page.goto('/resources')
  await expect(page.getByText('Featured resource')).toBeVisible()
  await expect(page.getByRole('link', { name: /Read article/ }).first()).toHaveAttribute('href', /^\/resources\//)

  await page.getByRole('tab', { name: /^Research Reports/ }).click()
  await expect(page.getByText('Featured resource')).toBeVisible()
  await expect(page.getByRole('link', { name: /Read report/ }).first()).toHaveAttribute('href', /^\/resources\//)
  await expect(page.getByRole('link', { name: /Open PDF/ }).first()).toHaveAttribute('target', '_blank')

  await page.getByRole('tab', { name: /^Toolkits/ }).click()
  await expect(page.getByText('Featured resource')).toBeVisible()
  await expect(page.getByRole('link', { name: /Download/ }).first()).toHaveAttribute('target', '_blank')
})

test('resource tabs and toolkit filters work', async ({ page }) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))

  await page.goto('/resources')
  await page.getByRole('tab', { name: /^Toolkits/ }).click()
  await expect(page.getByText('Featured resource')).toBeVisible()
  await expect(page.getByRole('link', { name: /Download/ }).first()).toHaveAttribute('target', '_blank')
  await page.getByRole('button', { name: 'Policy', exact: true }).click()
  await expect(page.locator('output')).toContainText('1')
  await expect(page.locator('output')).toContainText('resource')
  expect(errors).toEqual([])
})
