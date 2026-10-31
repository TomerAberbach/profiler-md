import type { DeepReadonly } from '../../helpers/types.ts'
import { sourceReferencePathOrName } from '../../location.ts'
import type { FunctionCategory } from '../../modalities/category-sets.ts'
import type { ProfileEntry } from '../../options.ts'
import { categorizeCPythonEntry } from '../cpython.ts'
import type { OriginSpec } from '../spec.ts'

/**
 * Pyinstrument, a Python sampling profiler whose speedscope export stores each
 * frame's location separately and records the function's definition line, so
 * the line needs no reinterpreting.
 *
 * A `[self]` frame appears only when a run leaves it beside sibling calls, so
 * detection also relies on the speedscope parser's origin hint from the file's
 * `exporter` field.
 */
export const pyinstrumentOriginSpec = {
  id: `pyinstrument`,
  formats: [`speedscope`],
  isMarkerEntry: entry =>
    isSelfTimeFrame(entry.name) || builtInCategory(entry) !== undefined,
  categorizeEntry: entry =>
    builtInCategory(entry) ?? categorizeCPythonEntry(entry),
  normalizeStackFrame: input => {
    const { name, definition } = input
    if (!definition) {
      // Dropping a `[self]` frame returns its time to the frame it was split
      // from.
      return isSelfTimeFrame(name) ? null : input
    }
    if (
      definition.type !== `file` ||
      definition.urlOrPath !== BUILT_IN_FILE ||
      definition.position?.line !== 0
    ) {
      return input
    }
    // Pyinstrument writes the placeholder line 0 for a C function, which names
    // no line of any file.
    const { position: _, ...reference } = definition
    return { ...input, definition: reference }
  },
} as const satisfies OriginSpec

const isSelfTimeFrame = (name: string | undefined): boolean =>
  name === SELF_TIME_FRAME

/**
 * The pseudo-frame pyinstrument writes as a frame's callee to hold that frame's
 * own execution time.
 */
const SELF_TIME_FRAME = `[self]`

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
