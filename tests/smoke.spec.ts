import { expect, test } from '@playwright/test'

const routes = ['/', '/ai/', '/portfolio/', '/about/', '/case-studies/global-ag-platform/', '/contact/leadership/']

const viewports = [
  { name: 'phone', width: 390, height: 844 },
  { name: 'phone-landscape', width: 844, height: 390 },
  { name: 'tablet', width: 1024, height: 768 },
  { name: 'desktop', width: 1440, height: 900 },
]

for (const route of routes) {
  for (const viewport of viewports) {
    test(`${route} renders cleanly at ${viewport.name}`, async ({ page }) => {
      const consoleErrors: string[] = []
      page.on('console', message => {
        if (message.type() === 'error') consoleErrors.push(message.text())
      })
      page.on('pageerror', error => consoleErrors.push(error.message))

      await page.setViewportSize({ width: viewport.width, height: viewport.height })
      const response = await page.goto(route)
      expect(response?.status()).toBe(200)

      // Exactly one page-level h1; the header identity is not a heading.
      await expect(page.locator('h1')).toHaveCount(1)

      // No horizontal overflow and no heading spilling out of its box.
      const metrics = await page.evaluate(() => {
        const h1 = document.querySelector('h1') as HTMLElement
        return {
          docWidth: document.documentElement.scrollWidth,
          viewportWidth: document.documentElement.clientWidth,
          h1Overflow: h1.scrollWidth - h1.clientWidth,
          headerHeight: (document.querySelector('.site-header') as HTMLElement).offsetHeight,
          headerSticky: getComputedStyle(document.querySelector('.site-header') as HTMLElement).position === 'sticky',
          anchorOffset: parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop),
        }
      })
      expect(metrics.docWidth).toBeLessThanOrEqual(metrics.viewportWidth)
      expect(metrics.h1Overflow).toBeLessThanOrEqual(0)
      // Sticky header must not cover anchored sections (landscape phones use a static header).
      if (metrics.headerSticky) expect(metrics.anchorOffset).toBeGreaterThanOrEqual(metrics.headerHeight)

      // Every page carries the Person schema and an og:image.
      await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1)
      await expect(page.locator('meta[property="og:image"]')).toHaveCount(1)

      expect(consoleErrors).toEqual([])
    })
  }
}

// The film is 16:9 with small type, so on phones it must fit on one screen; landscape phones get a static header.
for (const viewport of [viewports[0], viewports[1]]) {
  test(`home film fits the screen at ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height })
    await page.goto('/')
    const film = await page.evaluate(() => {
      const frame = (document.querySelector('.film__frame') as HTMLElement).getBoundingClientRect()
      const video = document.querySelector('.film video') as HTMLVideoElement
      return {
        height: frame.height,
        width: frame.width,
        preload: video.getAttribute('preload'),
        playsinline: video.hasAttribute('playsinline'),
        headerPosition: getComputedStyle(document.querySelector('.site-header') as HTMLElement).position,
      }
    })
    expect(film.height).toBeLessThanOrEqual(viewport.height)
    expect(film.width).toBeGreaterThan(viewport.width * 0.7)
    // metadata (not none): Chrome ignores clicks on the poster until metadata has loaded
    expect(film.preload).toBe('metadata')
    expect(film.playsinline).toBe(true)
    if (viewport.height < 500) expect(film.headerPosition).toBe('static')
  })
}

// The case-study film is square; it must fit one screen on phones too.
for (const viewport of [viewports[0], viewports[1]]) {
  test(`case-study film fits the screen at ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height })
    await page.goto('/case-studies/global-ag-platform/')
    const film = await page.evaluate(() => {
      const frame = (document.querySelector('.case-film__frame') as HTMLElement).getBoundingClientRect()
      const video = document.querySelector('.case-film video') as HTMLVideoElement
      return {
        width: frame.width,
        height: frame.height,
        preload: video.getAttribute('preload'),
        playsinline: video.hasAttribute('playsinline'),
        textItems: document.querySelectorAll('#case-film-text li').length,
      }
    })
    expect(film.height).toBeLessThanOrEqual(viewport.height)
    expect(Math.abs(film.width - film.height)).toBeLessThanOrEqual(2)
    if (viewport.height > viewport.width) expect(film.width).toBeGreaterThan(viewport.width * 0.7)
    expect(film.preload).toBe('metadata')
    expect(film.playsinline).toBe(true)
    // the film has no narration, so its text version must be on the page
    expect(film.textItems).toBeGreaterThan(0)
  })
}

test('local images referenced by pages resolve', async ({ page, request }) => {
  const seen = new Set<string>()
  for (const route of routes) {
    await page.goto(route)
    const urls = await page.evaluate(() => {
      const out: string[] = []
      document.querySelectorAll('img[src], link[rel="preload"][href], meta[property="og:image"]').forEach(el => {
        const value = el.getAttribute('src') ?? el.getAttribute('href') ?? el.getAttribute('content') ?? ''
        out.push(value)
      })
      return out
    })
    for (const url of urls) {
      const path = url.replace(/^https?:\/\/[^/]+/, '')
      if (path.startsWith('/')) seen.add(path)
    }
  }
  expect(seen.size).toBeGreaterThan(0)
  for (const path of seen) {
    const response = await request.get(path)
    expect(response.status(), path).toBe(200)
  }
})

test('admin UI is not shipped', async ({ request }) => {
  const response = await request.get('/admin/')
  expect(response.status()).toBe(404)
})

// Cloudflare Pages serves dist/404.html with a 404 status; without it, unknown paths fall back to the home page with 200.
test('unknown paths get the 404 page with a 404 status', async ({ page }) => {
  const consoleErrors: string[] = []
  page.on('console', message => {
    // the browser logs the document's own 404 status; anything else is a real error
    if (message.type() === 'error' && !/status of 404/.test(message.text())) consoleErrors.push(message.text())
  })
  await page.setViewportSize({ width: 390, height: 844 })
  const response = await page.goto('/no-such-page/')
  expect(response?.status()).toBe(404)
  await expect(page.locator('h1')).toHaveCount(1)
  await expect(page.locator('h1')).toHaveText('Page not found')
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex')
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  expect(overflow).toBeLessThanOrEqual(0)
  expect(consoleErrors).toEqual([])
})
