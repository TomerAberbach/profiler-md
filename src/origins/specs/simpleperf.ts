import { categorizeLinuxEntry } from '../linux.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * Android's simpleperf, which records the same `perf.data` layout the Linux
 * kernel's `perf_event` counters produce, for native and managed Android code.
 *
 * Markerless in its frame data like the `perf` origin, since both record
 * addresses and the files they were mapped from. The parser detects it from the
 * feature sections simpleperf adds to the format, which it numbers from a range
 * Linux's `perf` leaves free.
 */
export const simpleperfOriginSpec = {
  id: `simpleperf`,
  formats: [`perf`],
  isMarkerEntry: () => false,
  categorizeEntry: categorizeLinuxEntry,
} as const satisfies OriginSpec
