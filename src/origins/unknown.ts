import {
  locationlessStdlibCategory,
  syntheticFrameCategory,
  systemDirectoryCategory,
} from './categorize.ts'
import type { OriginSpec } from './origin.ts'

/**
 * The fallback origin for any profile or snapshot whose generating runtime
 * couldn't be detected.
 *
 * NEVER add another origin's logic here (a profiler's categorization or match
 * rules), even when an undetected profile could plausibly come from that
 * ecosystem: the fix for a profile resolving to `unknown` is better detection,
 * not smearing origin-specific behavior over every undetected profile. Only
 * truly generic rules belong here.
 */
export const unknownOriginSpec = {
  id: `unknown`,
  formats: [],
  isMarkerEntry: () => false,
  categorizeEntry: entry =>
    syntheticFrameCategory(entry) ??
    systemDirectoryCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    `ours`,
} as const satisfies OriginSpec
