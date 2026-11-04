import { readFileSync, writeFileSync } from 'node:fs'
import { argv, exit } from 'node:process'
import { generateHeapSnapshot } from 'bun'

const [jsonPath, out, copies] = argv.slice(2)
if (!jsonPath || !out || !copies) {
  console.error(
    `usage: bun-jsc-heap-snapshot.mjs <json-file> <out.json> <copies>`,
  )
  exit(2)
}

const documents = []
for (let i = 0; i < Number(copies); i++) {
  documents.push(JSON.parse(readFileSync(jsonPath, `utf8`)))
}

// Derived structures, an id index and a flat list of hashtag strings, give the
// snapshot Maps, arrays, and many small objects and strings, a realistic
// retained graph rather than one large blob.
const statuses = documents.flatMap(data => data.statuses)
const byId = new Map()
const hashtags = []
for (const status of statuses) {
  byId.set(status.id_str, status)
  for (const tag of status.entities?.hashtags ?? []) {
    hashtags.push(tag.text)
  }
}

// Retain everything on a global so it's live when the snapshot is generated.
globalThis.__retained = { documents, byId, hashtags }

// `generateHeapSnapshot("jsc")` returns a JSC Inspector snapshot object
// (version 3), the format Safari's Web Inspector exports.
// `generateHeapSnapshot("v8")` would return a V8 snapshot string instead.
writeFileSync(out, JSON.stringify(generateHeapSnapshot(`jsc`)))
