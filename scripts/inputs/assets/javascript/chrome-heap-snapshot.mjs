import { readFileSync, writeFileSync } from 'node:fs'
import { argv, exit } from 'node:process'
import { launchWorkloadPage, runInPage } from './chrome-workload.mjs'

const [jsonPath, out] = argv.slice(2)
if (!jsonPath || !out) {
  console.error(
    `usage: chrome-heap-snapshot.mjs <json-file> <out.heapsnapshot>`,
  )
  exit(2)
}

const data = JSON.parse(readFileSync(jsonPath, `utf8`))

// Headless Chrome's `HeapProfiler.takeHeapSnapshot` produces a `.heapsnapshot`
// byte-identical to the DevTools Memory panel's "Heap snapshot" export, and,
// unlike a Node snapshot, of a real browser heap with DOM and Detached nodes.
const { browser, page } = await launchWorkloadPage()
try {
  const client = await page.createCDPSession()

  await client.send(`HeapProfiler.enable`)

  await runInPage(page, data, 1)

  const chunks = []
  client.on(`HeapProfiler.addHeapSnapshotChunk`, ({ chunk }) =>
    chunks.push(chunk),
  )
  await client.send(`HeapProfiler.takeHeapSnapshot`, {
    reportProgress: false,
    captureNumericValue: true,
  })

  writeFileSync(out, chunks.join(``))
} finally {
  await browser.close()
}
