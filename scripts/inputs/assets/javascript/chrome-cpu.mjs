import { readFileSync, writeFileSync } from 'node:fs'
import { argv, exit } from 'node:process'
import puppeteer from 'puppeteer'
import { runInPage } from './chrome-workload.mjs'

const [jsonPath, out] = argv.slice(2)
if (!jsonPath || !out) {
  console.error(`usage: chrome-cpu.mjs <json-file> <out.cpuprofile>`)
  exit(2)
}

const data = JSON.parse(readFileSync(jsonPath, `utf8`))

// Headless Chrome's `Profiler` domain produces a `.cpuprofile` byte-identical to
// the DevTools Performance-panel export, but driven over CDP with no GUI.
const browser = await puppeteer.launch({
  headless: true,
  args: [`--no-sandbox`],
})
try {
  const page = await browser.newPage()
  const client = await page.createCDPSession()

  await client.send(`Profiler.enable`)
  // 1 kHz, matching the Node CPU capture (`cpuprofile-run.mjs`).
  await client.send(`Profiler.setSamplingInterval`, { interval: 1000 })
  await client.send(`Profiler.start`)

  // Loop many passes for a few thousand samples. `resetEachPass` keeps the live
  // DOM bounded so JS frames stay visible instead of being swamped by the native
  // layout cost of an ever-growing document.
  await runInPage(page, data, 2000, { resetEachPass: true })

  const { profile } = await client.send(`Profiler.stop`)
  writeFileSync(out, JSON.stringify(profile))
} finally {
  await browser.close()
}
