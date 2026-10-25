import { categorizeGenericEntry } from '../categorize.ts'
import type { OriginSpec } from '../spec.ts'

/**
 * The TypeScript compiler's `--generateTrace`, which traces the compiler
 * building one program.
 *
 * Its events have no marker. A trace states its writer in the `process_name`
 * metadata event, which the Trace Event Format parser passes on as an origin
 * hint.
 */
export const tscOriginSpec = {
  id: `tsc`,
  title: `TypeScript compiler`,
  formats: [`trace-event`],
  isMarkerEntry: () => false,
  categorizeEntry: categorizeGenericEntry,
  // The compiler states each event's phase as its category. Every phase but
  // parsing is the compiler's own work on the parsed program.
  categorizeTraceEvent: ({ declaredCategories }) =>
    declaredCategories?.includes(`parse`) ? `parsing` : `compilation`,
} as const satisfies OriginSpec
