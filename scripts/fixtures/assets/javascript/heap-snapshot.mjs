import { readFileSync } from 'node:fs'
import { argv, exit } from 'node:process'
import { writeHeapSnapshot } from 'node:v8'

const [jsonPath, out] = argv.slice(2)
if (!jsonPath || !out) {
  console.error(`usage: heap-snapshot.mjs <json-file> <out.heapsnapshot>`)
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

// Retain everything on a global so it survives until the snapshot is written.
globalThis.__retained = { data, byId, hashtags }

writeHeapSnapshot(out)
