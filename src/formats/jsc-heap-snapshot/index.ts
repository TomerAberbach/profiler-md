import type { JsonFormatSpec } from '../spec.ts'
import { matchesJSCHeapSnapshot } from './matches.ts'
import { parseJSCHeapSnapshot } from './parse.ts'
import type { JSCHeapSnapshot } from './parse.ts'

export const jscHeapSnapshotFormatSpec = {
  id: `jsc-heap-snapshot`,
  title: `JSC heap snapshot`,
  extension: `jsc-heap-snapshot.json`,
  languages: [`javascript`],
  // WebKit's Web Inspector defines the format, and Bun writes it to be openable
  // there.
  fallbackOrigin: `safari`,
  type: `json`,
  matches: matchesJSCHeapSnapshot,
  parse: (json, recordTally) =>
    parseJSCHeapSnapshot(json as JSCHeapSnapshot, recordTally),
} as const satisfies JsonFormatSpec
