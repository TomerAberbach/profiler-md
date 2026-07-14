import type { JsonFormatConverter } from '../../converter.ts'
import { parseV8HeapSnapshot } from './parse.ts'
import type { V8HeapSnapshot } from './parse.ts'

const matchesV8HeapSnapshot = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const { snapshot, edges } = json as Record<string, unknown>
  if (typeof snapshot !== `object` || snapshot === null) {
    return false
  }

  const { meta } = snapshot as Record<string, unknown>
  if (
    typeof meta !== `object` ||
    meta === null ||
    !Array.isArray((meta as Record<string, unknown>).node_fields)
  ) {
    return false
  }

  if (!Array.isArray(edges)) {
    return false
  }

  return true
}

export const v8HeapSnapshotConverter = {
  title: `V8 heap snapshot`,
  extension: `heapsnapshot`,
  languages: [
    `javascript`,
    // Julia's `Profile` stdlib writes heap snapshots in this format natively.
    `julia`,
  ],
  fallbackOrigin: `node`,
  type: `json`,
  matches: matchesV8HeapSnapshot,
  parse: json => parseV8HeapSnapshot(json as V8HeapSnapshot),
} as const satisfies JsonFormatConverter
