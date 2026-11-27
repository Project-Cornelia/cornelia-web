import { mkdir, writeFile } from 'node:fs/promises'
import { chromium } from '@playwright/test'

const baseURL = process.env.BASE_URL || 'http://localhost:3001'
const outputDir = new URL('../playwright-output/screenshots/', import.meta.url)
await mkdir(outputDir, { recursive: true })

const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
})
const errors = []
page.on('pageerror', (error) => errors.push(error.message))
page.on('console', (message) => {
  if (message.type() === 'error') errors.push(message.text())
})

const capture = async (name, options = {}) => {
  await page.screenshot({
    path: new URL(`${name}.png`, outputDir).pathname,
    fullPage: options.fullPage ?? false,
  })
}

await page.goto(baseURL, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(900)
await capture('01-loader')
await page.waitForTimeout(2200)
await capture('02-home-desktop')

for (const chapter of ['impact', 'approach', 'partners', 'cornelia', 'founder', 'faq']) {
  await page.locator(`#${chapter}`).scrollIntoViewIfNeeded()
  await page.waitForTimeout(500)
  await capture(`home-${chapter}`)
}

await page.goto(`${baseURL}/resources`, { waitUntil: 'networkidle' })
await page.waitForTimeout(700)
await capture('resources-from-our-desk-desktop')
await page.getByRole('tab', { name: /^Research Reports/ }).click()
await page.waitForTimeout(700)
await capture('resources-research-reports-desktop')
await page.getByRole('tab', { name: /^Toolkits/ }).click()
await page.waitForTimeout(900)
await capture('resources-toolkits-desktop')

await page.setViewportSize({ width: 390, height: 844 })
await page.goto(baseURL, { waitUntil: 'networkidle' })
await page.waitForTimeout(700)
await capture('home-mobile')
await page.goto(`${baseURL}/resources`, { waitUntil: 'networkidle' })
await page.getByRole('tab', { name: /^Toolkits/ }).click()
await page.waitForTimeout(700)
await capture('resources-toolkits-mobile')

await writeFile(
  new URL('report.json', outputDir),
  JSON.stringify({ baseURL, capturedAt: new Date().toISOString(), errors }, null, 2),
)
console.log(`Screenshots saved to ${outputDir.pathname}`)
console.log(JSON.stringify({ errors }, null, 2))
await browser.close()
if (errors.length) process.exitCode = 1
