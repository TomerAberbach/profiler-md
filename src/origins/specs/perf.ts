import { categorizeLinuxEntry } from '../linux.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * Linux's `perf`, the sampling profiler built on the kernel's `perf_event`
 * counters, which writes the `perf.data` file the format is named for.
 *
 * Markerless: a `perf.data` file holds addresses and the files they were mapped
 * from, which any profiler of the same machine would record the same way. It is
 * the format's fallback origin, so its files resolve to it regardless.
 *
 * Categorization is by the mapped file, because `perf` profiles native binaries
 * of any language and resolves an address no further than the file it fell in.
 */
export const perfOriginSpec = {
  id: `perf`,
  formats: [`perf`],
  isMarkerEntry: () => false,
  categorizeEntry: categorizeLinuxEntry,
} as const satisfies OriginSpec
