import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('login page has no accessibility violations', async ({ page }) => {
  await page.goto('/')
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
})

test('user can log in and reach the dashboard', async ({ page }) => {
  await page.goto('/')

  await page.fill('#username', 'testuser')
  await page.fill('#password', 'password123')
  await page.click('button[type="submit"]')

  await expect(page.locator('text=Total Filings')).toBeVisible()
})
