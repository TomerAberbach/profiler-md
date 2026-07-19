import { categorizeGenericEntry } from '../categorize.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * The gperftools CPU profiler for native programs.
 *
 * Markerless: its stacks are native symbols with system source paths that any
 * native profiler could emit. Detection instead relies on the pprof parser's
 * origin hint from the `drop_frames`/`keep_frames` regexes gperftools' writer
 * fills with its own internal function names.
 */
export const gperftoolsOriginSpec = {
  id: `gperftools`,
  formats: [`pprof`],
  isMarkerEntry: () => false,
  categorizeEntry: categorizeGenericEntry,
} as const satisfies OriginSpec
