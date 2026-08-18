import type { JsonFormatConverter } from '../../converter.ts'
import { matchesV8HeapProfile } from './matches.ts'
import { parseV8HeapProfile } from './parse.ts'
import type { V8HeapProfile } from './parse.ts'

export const v8HeapProfileConverter = {
  format: `v8-heap-profile`,
  title: `V8 heap profile`,
  extension: `heapprofile`,
  languages: [`javascript`],
  // Chrome DevTools defines the format, and Node writes it to be openable
  // there.
  fallbackOrigin: `chrome`,
  type: `json`,
  matches: matchesV8HeapProfile,
  parse: json => parseV8HeapProfile(json as V8HeapProfile),
} as const satisfies JsonFormatConverter
