import type { JsonFormatConverter } from '../../converter.ts'
import { matchesV8HeapSnapshot } from './matches.ts'
import { parseV8HeapSnapshot } from './parse.ts'
import type { V8HeapSnapshot } from './parse.ts'

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
