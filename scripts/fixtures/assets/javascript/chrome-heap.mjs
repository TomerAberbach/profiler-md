import { readFileSync, writeFileSync } from 'node:fs'
import { argv, exit } from 'node:process'

import puppeteer from 'puppeteer'

import { runInPage } from './chrome-workload.mjs'

const [jsonPath, out] = argv.slice(2)
if (!jsonPath || !out) {
  console.error(`usage: chrome-heap.mjs <json-file> <out.heapprofile>`)
  exit(2)
}

const data = JSON.parse(readFileSync(jsonPath, `utf8`))

// Headless Chrome's `HeapProfiler` sampling profiler produces a `.heapprofile`
// byte-identical to the DevTools Memory-panel "Allocation sampling" export.
const browser = await puppeteer.launch({
  headless: true,
  args: [`--no-sandbox`],
})
try {
  const page = await browser.newPage()
  const client = await page.createCDPSession()

  await client.send(`HeapProfiler.enable`)
  // A small interval (vs Node's 512 KB) so the modest DOM build still yields a
  // dense set of allocation samples.
  await client.send(`HeapProfiler.startSampling`, { samplingInterval: 16384 })

  await runInPage(page, data, 400)

  const { profile } = await client.send(`HeapProfiler.stopSampling`)
  writeFileSync(out, JSON.stringify(profile))
} finally {
  await browser.close()
}
