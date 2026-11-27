import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  timeout: 45000,
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:3001',
    viewport: { width: 1440, height: 1000 },
    headless: true,
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npm run dev -- -p 3001',
    url: 'http://localhost:3001',
    reuseExistingServer: true,
    timeout: 120000,
  },
})
