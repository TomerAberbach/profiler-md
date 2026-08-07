import { categorizeCPythonEntry } from '../cpython.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * Memray, Bloomberg's Python memory profiler, which writes the capture files
 * its own reporters read.
 *
 * Markerless: a capture's frames are the traced program's own Python
 * functions, with their locations stored separately, so nothing in them points
 * back at memray. A capture resolves to memray as the format's fallback origin
 * instead.
 */
export const memrayOriginSpec = {
  id: `memray`,
  formats: [`memray`],
  isMarkerEntry: () => false,
  categorizeEntry: categorizeCPythonEntry,
} as const satisfies OriginSpec
