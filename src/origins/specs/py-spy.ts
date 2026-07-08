import { categorizeCPythonEntry, pythonStdlibCategory } from '../cpython.ts'
import {
  normalizeSpeedscopeExecutingLine,
  packedLocationNormalizer,
} from '../origin.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * A py-spy `function (file:line)` frame, e.g. `parse (black/parsing.py:42)`. The
 * `func` and `file` are greedy so a name or path containing spaces or
 * parentheses stays intact, anchored by the trailing `:line)`.
 */
const FRAME = /^(?<func>.+) \((?<file>.+):(?<line>\d+)\)$/u

const normalizePackedStackFrame = packedLocationNormalizer(FRAME)

export const pySpyOriginSpec = {
  id: `py-spy`,
  formats: [`collapsed`, `speedscope`],
  // Collapsed frames pack the location into the name; speedscope exports of
  // the same profiles carry the location separately, so the marker there is a
  // CPython install-layout location (`<frozen ...>` bootstrap modules, the
  // interpreter's `lib/pythonX.Y/` sources). Tachyon observes the same
  // interpreter with the same categorization, so resolving those frames here
  // categorizes them correctly regardless of which CPython profiler sampled
  // them.
  isMarkerEntry: entry =>
    FRAME.test(entry.name ?? ``) || pythonStdlibCategory(entry) !== undefined,
  categorizeEntry: categorizeCPythonEntry,
  // Py-spy emits one frame per sampled line in both shapes: packed into a
  // collapsed name, or as a located speedscope frame whose `line` needs
  // reinterpreting as the executing line.
  normalizeStackFrame: (input, format) =>
    normalizePackedStackFrame(normalizeSpeedscopeExecutingLine(input, format)),
} as const satisfies OriginSpec
