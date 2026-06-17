import { readFileSync, writeFileSync } from 'node:fs'
import { argv, exit } from 'node:process'

import { generateHeapSnapshot } from 'bun'

const [jsonPath, out] = argv.slice(2)
if (!jsonPath || !out) {
  console.error(`usage: bun-jsc-heap-snapshot.mjs <json-file> <out.json>`)
  exit(2)
}

const data = JSON.parse(readFileSync(jsonPath, `utf8`))

// Build a couple of derived structures (an id index and a flat list of hashtag
// strings) so the snapshot has Maps, arrays, and lots of small objects/strings —
// a realistic retained graph, not one giant blob.
const statuses = Array.isArray(data.statuses) ? data.statuses : []
const byId = new Map()
const hashtags = []
for (const status of statuses) {
  byId.set(status.id_str, status)
  for (const tag of status.entities?.hashtags ?? []) {
    hashtags.push(tag.text)
  }
}

// Retain everything on a global so it's live when the snapshot is generated.
globalThis.__retained = { data, byId, hashtags }

// `generateHeapSnapshot("jsc")` returns a JSC `Inspector`-format object (version
// 3), the same flavor Safari's Web Inspector exports — but without needing a
// GUI. (`generateHeapSnapshot("v8")` would instead return a V8-format string.)
writeFileSync(out, JSON.stringify(generateHeapSnapshot(`jsc`)))
