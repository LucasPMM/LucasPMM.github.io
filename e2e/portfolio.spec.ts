import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const localeCases = [
  {
    locale: 'en',
    languageLabel: 'Language',
    languageOption: 'English',
    experienceHeading: 'Professional experience',
    pageTitle: 'Lucas Mariz — Senior Software Engineer',
    openGraphLocale: 'en_US',
  },
  {
    locale: 'pt-BR',
    languageLabel: 'Language',
    languageOption: 'Português',
    experienceHeading: 'Experiência profissional',
    pageTitle: 'Lucas Mariz — Engenheiro de Software Sênior',
    openGraphLocale: 'pt_BR',
  },
  {
    locale: 'fr',
    languageLabel: 'Language',
    languageOption: 'Français',
    experienceHeading: 'Expérience professionnelle',
    pageTitle: 'Lucas Mariz — Ingénieur logiciel senior',
    openGraphLocale: 'fr_FR',
  },
] as const

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    const resetMarker = 'portfolio.test-storage-reset'
    if (window.sessionStorage.getItem(resetMarker)) return
    window.localStorage.clear()
    window.sessionStorage.setItem(resetMarker, 'true')
  })
})

test('renders without automated accessibility violations', async ({ page }) => {
  await page.goto('/')
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
})

test('uses browser language and color-scheme defaults on the first visit', async ({ browser }) => {
  const context = await browser.newContext({ locale: 'pt-BR', colorScheme: 'dark' })
  const page = await context.newPage()
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await expect(page.getByRole('heading', { name: 'Experiência profissional' })).toBeVisible()
  await expect(page.getByRole('combobox', { name: 'Idioma: Português' })).toHaveAttribute(
    'data-value',
    'pt-BR',
  )
  await expect(page.getByRole('combobox', { name: 'Tema: Sistema' })).toHaveAttribute(
    'data-value',
    'auto',
  )
  await page.getByRole('combobox', { name: 'Idioma: Português' }).click()
  await expect(page.getByRole('option', { name: 'Português' })).toHaveAttribute(
    'aria-selected',
    'true',
  )
  await context.close()
})

localeCases.forEach(
  ({ locale, languageLabel, languageOption, experienceHeading, pageTitle, openGraphLocale }) => {
    test(`synchronizes content and metadata for ${locale}`, async ({ page }) => {
      await page.goto('/')
      await page.getByRole('combobox', { name: new RegExp(`${languageLabel}:`) }).click()
      await page.getByRole('option', { name: languageOption }).click()
      await expect(page.getByRole('heading', { name: experienceHeading })).toBeVisible()
      await expect(page.locator('html')).toHaveAttribute('lang', locale)
      await expect(page).toHaveTitle(pageTitle)
      await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
        'content',
        openGraphLocale,
      )
    })
  },
)

test('persists an explicit dark theme', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('combobox', { name: 'Theme: System' }).click()
  await page.getByRole('option', { name: 'Dark' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
})

test('falls back to the local avatar when GitHub is unavailable', async ({ page }) => {
  await page.route('**/LucasPMM.png**', (route) =>
    route.fulfill({ status: 503, contentType: 'text/plain', body: 'Unavailable' }),
  )
  await page.goto('/')
  await expect(page.getByRole('img', { name: 'Lucas Mariz' })).toHaveAttribute(
    'src',
    /avatar-fallback\.svg$/,
  )
})

test('loads the primary project evidence and exposes only public project links', async ({
  page,
}) => {
  await page.goto('/')
  const projectImage = page.locator('#projects .product-frame img')
  await projectImage.scrollIntoViewIfNeeded()
  await expect
    .poll(() =>
      projectImage.evaluate((image) => image instanceof HTMLImageElement && image.naturalWidth > 0),
    )
    .toBe(true)

  await expect(page.getByRole('link', { name: 'Open jigsolver.app' })).toHaveAttribute(
    'href',
    'https://jigsolver.app/',
  )
  const plannerCard = page
    .locator('article')
    .filter({ has: page.getByRole('heading', { name: 'Planner', exact: true }) })
  await expect(plannerCard.getByRole('link')).toHaveCount(0)

  const publicRepositories = [
    'https://github.com/LucasPMM/simplex',
    'https://github.com/LucasPMM/Pokemon-Base',
    'https://github.com/LucasPMM/greedy-kmeans',
    'https://github.com/LucasPMM/lz78-compression',
  ]
  for (const repository of publicRepositories) {
    await expect(page.locator(`a[href="${repository}"]`)).toHaveAttribute('target', '_blank')
  }
})

test('keeps the page free of horizontal overflow at representative widths', async ({ page }) => {
  const widths = [320, 768, 1440]
  await page.goto('/')
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 })
    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    )
    expect(hasOverflow).toBe(false)
  }
})

test('supports keyboard entry and reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('#main-content')).toBeInViewport()
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto')
})

test('remains usable with text enlarged to 200 percent', async ({ page }) => {
  await page.setViewportSize({ width: 640, height: 900 })
  await page.goto('/')
  await page.evaluate(() => {
    document.documentElement.style.fontSize = '200%'
  })
  const overflowingElements = await page.locator('body *').evaluateAll((elements) =>
    elements
      .filter((element) => {
        const bounds = element.getBoundingClientRect()
        return bounds.right > document.documentElement.clientWidth || bounds.left < 0
      })
      .map((element) => ({
        bounds: {
          left: Math.round(element.getBoundingClientRect().left),
          right: Math.round(element.getBoundingClientRect().right),
        },
        className: element.getAttribute('class') ?? '',
        tagName: element.tagName,
        text: element.textContent?.trim().slice(0, 40),
      })),
  )
  expect(overflowingElements).toEqual([])
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})
