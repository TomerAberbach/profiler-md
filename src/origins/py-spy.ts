import { categorizeCPythonEntry } from './categorize.ts'
import { packedLocationNormalizer } from './origin.ts'
import type { OriginSpec } from './origin.ts'

/**
 * A py-spy `function (file:line)` frame, e.g. `parse (black/parsing.py:42)`. The
 * `func` and `file` are greedy so a name or path containing spaces or
 * parentheses stays intact, anchored by the trailing `:line)`.
 */
const FRAME = /^(?<func>.+) \((?<file>.+):(?<line>\d+)\)$/u

export const pySpyOriginSpec = {
  id: `py-spy`,
  language: `python`,
  formats: [`collapsed`],
  matchesEntry: entry => FRAME.test(entry.name ?? ``),
  categorize: categorizeCPythonEntry,
  normalizeFrame: packedLocationNormalizer(FRAME),
} as const satisfies OriginSpec
