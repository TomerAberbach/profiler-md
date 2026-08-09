import type { DeepReadonly } from '../../helpers/types.ts'
import { sourceReferencePathOrName } from '../../location.ts'
import type { FunctionCategory, ProfileEntry } from '../../options.ts'
import { categorizeCPythonEntry } from '../cpython.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * Pyinstrument, a Python sampling profiler whose speedscope export stores each
 * frame's location separately and records the function's definition line, so
 * the line needs no reinterpreting.
 *
 * Its markers are the frame shapes pyinstrument invents. A C function gets the
 * synthetic file `<built-in>` and the placeholder line 0, since the interpreter
 * attributes it to no Python source. `normalizeStackFrame` drops that line,
 * which names no line of any file. A frame's own execution time gets a `[self]`
 * child, which is not a function, so `normalizeStackFrame` drops it and that
 * time returns to the frame it was split from. A `[self]` frame appears only
 * when a run leaves it beside sibling calls, so detection also relies on the
 * speedscope parser's origin hint from the file's `exporter` field.
 */
export const pyinstrumentOriginSpec = {
  id: `pyinstrument`,
  formats: [`speedscope`],
  isMarkerEntry: entry =>
    isSelfTimeFrame(entry.name) || builtInCategory(entry) !== undefined,
  categorizeEntry: entry =>
    builtInCategory(entry) ?? categorizeCPythonEntry(entry),
  normalizeStackFrame: input => {
    const { name, location } = input
    if (!location) {
      return isSelfTimeFrame(name) ? null : input
    }
    if (
      location.type !== `file` ||
      location.urlOrPath !== BUILT_IN_FILE ||
      location.line !== 0
    ) {
      return input
    }
    const { line: _, ...located } = location
    return { ...input, location: located }
  },
} as const satisfies OriginSpec

/**
 * Categorizes a C function as `native`. pyinstrument gives it the synthetic
 * file `<built-in>`, which marks the function as compiled interpreter code
 * rather than naming a Python library, so it is no evidence for `stdlib`.
 */
const builtInCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  location && sourceReferencePathOrName(location) === BUILT_IN_FILE
    ? `native`
    : undefined

/** Pyinstrument's synthetic file for a frame executing a C function. */
const BUILT_IN_FILE = `<built-in>`

/** Whether a frame is pyinstrument's split-out self time rather than a function. */
const isSelfTimeFrame = (name: string | undefined): boolean =>
  name === SELF_TIME_FRAME

/** Pyinstrument's synthetic frame holding a frame's own execution time. */
const SELF_TIME_FRAME = `[self]`
