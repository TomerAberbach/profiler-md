import { categorizeGenericEntry } from '../categorize.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * The fallback origin for any profile or snapshot whose generating runtime
 * couldn't be detected.
 *
 * NEVER add another origin's logic here (a profiler's categorization or match
 * rules), even when an undetected profile could plausibly come from that
 * ecosystem: the fix for a profile resolving to `unknown` is better detection,
 * not applying origin-specific behavior to every undetected profile. Only
 * truly generic rules belong here.
 */
export const unknownOriginSpec = {
  id: `unknown`,
  formats: [],
  isMarkerEntry: () => false,
  categorizeEntry: categorizeGenericEntry,
} as const satisfies OriginSpec
