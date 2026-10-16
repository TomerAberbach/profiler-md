import { categorizeGenericEntry } from '../categorize.ts'
import type { OriginSpec } from '../spec.ts'

/**
 * The fallback origin for any input whose origin couldn't be detected.
 *
 * NEVER add another origin's logic here (a profiler's categorization or match
 * rules), even when an undetected input could plausibly come from that
 * ecosystem: the fix for an input resolving to `unknown` is better detection,
 * not applying origin-specific behavior to every undetected input. Only
 * generic rules belong here.
 */
export const unknownOriginSpec = {
  id: `unknown`,
  formats: [],
  isMarkerEntry: () => false,
  categorizeEntry: categorizeGenericEntry,
} as const satisfies OriginSpec
