import { expect, test } from '@playwright/test'

test('shows the portfolio and changes language', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await page.getByLabel('Language').selectOption('pt-BR')
  await expect(page.getByRole('heading', { name: 'Experiência profissional' })).toBeVisible()
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR')
})

test('persists an explicit dark theme', async ({ page }) => {
  await page.goto('/')
  await page.getByLabel('Theme').selectOption('dark')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
})
