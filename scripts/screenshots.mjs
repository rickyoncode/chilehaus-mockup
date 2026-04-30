import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(__dirname, '../screenshots')
mkdirSync(outDir, { recursive: true })

const URL = process.env.URL ?? 'http://localhost:5174/chilehaus-mockup/'
const LABEL = process.env.LABEL ?? 'current'

const SECTIONS = [
  { id: '#hero', label: 'hero', scroll: 0 },
  { id: '#manifiesto', label: 'manifesto' },
  { id: '#proceso', label: 'process' },
  { id: '#proyectos', label: 'projects' },
  { id: '#servicios', label: 'services' },
  { id: '#carbono', label: 'carbon', scroll: null }, // no anchor — find by section
  { id: '#contacto', label: 'contact' },
  { id: '#footer', label: 'footer' },
]

async function captureViewport(page, label, name) {
  const path = resolve(outDir, `${label}-${name}.png`)
  await page.screenshot({ path, fullPage: false })
  console.log(`  · ${name} → ${path}`)
}

async function captureFullPage(page, label, name) {
  const path = resolve(outDir, `${label}-${name}-full.png`)
  await page.screenshot({ path, fullPage: true })
  console.log(`  · ${name} (full) → ${path}`)
}

async function run() {
  const browser = await chromium.launch()

  // Desktop 1440
  console.log(`\n[${LABEL}] desktop 1440×900`)
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const dpage = await desktop.newPage()
  await dpage.goto(URL, { waitUntil: 'networkidle' })
  await dpage.waitForTimeout(1500)

  // Hero (top of page)
  await captureViewport(dpage, LABEL, 'desktop-01-hero')

  // Scroll through anchored sections
  const anchors = ['manifiesto', 'proceso', 'proyectos', 'servicios', 'contacto']
  for (let i = 0; i < anchors.length; i++) {
    await dpage.evaluate((id) => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
    }, anchors[i])
    await dpage.waitForTimeout(700)
    await captureViewport(dpage, LABEL, `desktop-0${i + 2}-${anchors[i]}`)
  }

  // Carbon section sits between projects and services (no id) — find by heading
  await dpage.evaluate(() => {
    const headings = [...document.querySelectorAll('h2')]
    const carbon = headings.find((h) => /captura\s+carbono/i.test(h.textContent ?? ''))
    if (carbon) carbon.closest('section')?.scrollIntoView({ behavior: 'instant', block: 'start' })
  })
  await dpage.waitForTimeout(700)
  await captureViewport(dpage, LABEL, 'desktop-07-carbon')

  // Footer
  await dpage.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await dpage.waitForTimeout(700)
  await captureViewport(dpage, LABEL, 'desktop-08-footer')

  // Full page
  await dpage.goto(URL, { waitUntil: 'networkidle' })
  await dpage.waitForTimeout(1500)
  await captureFullPage(dpage, LABEL, 'desktop')

  await desktop.close()

  // Mobile 390 (iPhone 14 width)
  console.log(`\n[${LABEL}] mobile 390×844`)
  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  })
  const mpage = await mobile.newPage()
  await mpage.goto(URL, { waitUntil: 'networkidle' })
  await mpage.waitForTimeout(1500)
  await captureFullPage(mpage, LABEL, 'mobile')
  await captureViewport(mpage, LABEL, 'mobile-01-hero')

  await mobile.close()

  await browser.close()
  console.log(`\nDone. Screenshots in ${outDir}`)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
