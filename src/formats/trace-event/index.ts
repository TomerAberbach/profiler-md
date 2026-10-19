import type { JsonFormatSpec } from '../spec.ts'
import { matchesTraceEvent } from './matches.ts'
import { parseTraceEvent } from './parse.ts'
import type { TraceEventFile } from './parse.ts'

export const traceEventFormatSpec = {
  id: `trace-event`,
  title: `Trace Event Format`,
  extension: `trace-event.json`,
  languages: [`c`, `javascript`],
  // Chromium's trace viewer defines the format, and the other origins write it
  // to be openable there.
  fallbackOrigin: `chrome`,
  type: `json`,
  matches: matchesTraceEvent,
  parse: (json, recordTally) =>
    parseTraceEvent(json as TraceEventFile, recordTally),
} as const satisfies JsonFormatSpec
