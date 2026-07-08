import type { JsonFormatConverter } from '../converter.ts'
import { matchesJSCHeapSnapshot } from './matches.ts'
import { parseJSCHeapSnapshot } from './parse.ts'
import type { JSCHeapSnapshot } from './parse.ts'

export const jscHeapSnapshotConverter = {
  title: `JSC heap snapshot`,
  extension: `jsc-heap-snapshot.json`,
  languages: [`javascript`],
  // WebKit's Web Inspector defines the format, and Bun writes it to be openable
  // there.
  fallbackOrigin: `safari`,
  type: `json`,
  matches: matchesJSCHeapSnapshot,
  parse: json => parseJSCHeapSnapshot(json as JSCHeapSnapshot),
} as const satisfies JsonFormatConverter
