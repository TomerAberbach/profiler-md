import type { StackFrame } from '../../modalities/stack-frame.ts'
import { categorizeCPythonEntry, pythonStdlibCategory } from '../cpython.ts'
import {
  normalizeSpeedscopeExecutingLine,
  packedLocationNormalizer,
  placeholderPathNormalizer,
} from '../origin.ts'
import type { OriginSpec } from '../origin.ts'

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
  // Py-spy emits one frame per executing line in both shapes: packed into a
  // collapsed name, or as a located speedscope frame whose `line` needs
  // reinterpreting as the executing line.
  normalizeStackFrame: (input, format) =>
    dropPlaceholderLine(
      dropPlaceholderPath(
        normalizePackedStackFrame(
          normalizeSpeedscopeExecutingLine(input, format),
        ),
      ),
    ),
} as const satisfies OriginSpec

/**
 * A py-spy `function (file:line)` frame, e.g. `parse (black/parsing.py:42)`. The
 * `func` and `file` are greedy so a name or path containing spaces or
 * parentheses stays intact, anchored by the trailing `:line)`.
 */
const FRAME = /^(?<func>.+) \((?<file>.+):(?<line>\d+)\)$/u

/**
 * Drops the executing line 0 py-spy writes for a `--native` frame with no line
 * information. The collapsed export omits the line, and the speedscope export
 * writes the 0.
 */
const dropPlaceholderLine = (input: StackFrame): StackFrame => {
  if (input.line !== 0) {
    return input
  }
  const { line: _, ...frame } = input
  return frame
}

/**
 * The path py-spy writes for a `--native` frame it could not symbolicate,
 * named by its address (`0x7f3a1b2c`). A frame it symbolicated to a symbol
 * with no name keeps the module path instead.
 */
const UNKNOWN_PATHS: ReadonlySet<string> = new Set([`?`])

const dropPlaceholderPath = placeholderPathNormalizer(UNKNOWN_PATHS)

// A frame `FRAME` split is located, so `normalizeLinelessStackFrame` passes it
// through.
const normalizePackedStackFrame = (input: StackFrame): StackFrame =>
  normalizeLinelessStackFrame(normalizeLinedStackFrame(input))

/**
 * The `function (file)` shape py-spy writes when the line is its placeholder
 * 0: a `--native` frame it symbolicated to a module or source file with no
 * line, e.g. `PyObject_Call (/usr/lib/libpython3.12.so.1.0)`, or one it could
 * not symbolicate, e.g. `0x7f3a1b2c (?)`.
 */
const LINELESS_FRAME = /^(?<func>.+) \((?<file>.+)\)$/u

const normalizeLinelessStackFrame = packedLocationNormalizer(LINELESS_FRAME)

const normalizeLinedStackFrame = packedLocationNormalizer(FRAME)
