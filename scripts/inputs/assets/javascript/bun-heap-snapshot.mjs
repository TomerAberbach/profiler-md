import { readFileSync } from 'node:fs'
import { argv, exit } from 'node:process'

const [jsonPath] = argv.slice(2)
if (!jsonPath) {
  console.error(`usage: bun-heap-snapshot.mjs <json-file>`)
  exit(2)
}

const data = JSON.parse(readFileSync(jsonPath, `utf8`))

// Derived structures, an id index and a flat list of hashtag strings, give the
// snapshot Maps, arrays, and many small objects and strings, a realistic
// retained graph rather than one large blob.
const statuses = Array.isArray(data.statuses) ? data.statuses : []
const byId = new Map()
const hashtags = []
for (const status of statuses) {
  byId.set(status.id_str, status)
  for (const tag of status.entities?.hashtags ?? []) {
    hashtags.push(tag.text)
  }
}

// Retain everything on a global so it survives until Bun writes the snapshot on
// exit (`bun --heap-prof` dumps a V8 heap snapshot when the process exits).
globalThis.__retained = { data, byId, hashtags }
