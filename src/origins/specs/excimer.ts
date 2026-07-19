import { categorizeGenericEntry } from '../categorize.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * The Excimer sampling profiler for PHP.
 *
 * Markerless: its speedscope output carries plain file paths with no
 * interpreter-specific evidence. Detection instead relies on the speedscope
 * parser's origin hint from the file's self-identifying `exporter` field.
 */
export const excimerOriginSpec = {
  id: `excimer`,
  title: `Excimer`,
  formats: [`speedscope`],
  isMarkerEntry: () => false,
  categorizeEntry: categorizeGenericEntry,
} as const satisfies OriginSpec
