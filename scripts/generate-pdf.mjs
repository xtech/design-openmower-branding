/**
 * Generates a brand guide PDF by rendering the demo page with headless Chrome.
 * Requires the Vite app to be built first (`npm run build`) and
 * a preview server running on PORT (default 4173).
 *
 * Usage:
 *   npm run build
 *   npm run preview &
 *   node scripts/generate-pdf.mjs
 */
import puppeteer from 'puppeteer'
import { mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const PORT = process.env.PORT ?? 4173
const BASE = process.env.BASE_URL ?? `http://localhost:${PORT}`
const OUT  = join(root, 'dist', 'openmower-brand-guide.pdf')

async function waitForServer(url, retries = 20, delay = 500) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url)
      if (res.ok) return
    } catch {
      // not ready yet
    }
    await new Promise(r => setTimeout(r, delay))
  }
  throw new Error(`Server at ${url} did not become ready in time`)
}

async function main() {
  console.log(`Waiting for server at ${BASE}...`)
  await waitForServer(BASE)

  console.log('Launching browser...')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })

  console.log(`Navigating to ${BASE}...`)
  await page.goto(BASE, { waitUntil: 'networkidle0', timeout: 60_000 })

  // Let fonts and deferred renders settle
  await new Promise(r => setTimeout(r, 2000))

  mkdirSync(join(root, 'dist'), { recursive: true })

  console.log(`Generating PDF → ${OUT}`)
  await page.pdf({
    path: OUT,
    format: 'A4',
    printBackground: true,
    margin: { top: '16mm', bottom: '16mm', left: '12mm', right: '12mm' },
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `
      <div style="width:100%;font-family:sans-serif;font-size:9px;color:#666;padding:0 12mm;display:flex;justify-content:space-between;">
        <span>OpenMower — Brand Identity System v1.0</span>
        <span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
      </div>`,
  })

  await browser.close()
  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
