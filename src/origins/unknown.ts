import {
  locationlessStdlibCategory,
  syntheticFrameCategory,
  systemDirectoryCategory,
} from './categorize.ts'
import type { OriginSpec } from './origin.ts'

/**
 * The fallback origin for any profile or snapshot whose generating runtime
 * couldn't be detected.
 */
export const unknownOriginSpec = {
  id: `unknown`,
  formats: [],
  matchesEntry: () => false,
  categorize: entry =>
    syntheticFrameCategory(entry) ??
    systemDirectoryCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    `ours`,
} as const satisfies OriginSpec
