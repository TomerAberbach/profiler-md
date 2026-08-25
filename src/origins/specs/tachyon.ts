import type { StackFrame } from '../../modalities/stack-frame.ts'
import { syntheticFrameCategory } from '../categorize.ts'
import { categorizeCPythonEntry } from '../cpython.ts'
import { packedLocationNormalizer } from '../origin.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * Matches tachyon's folded `file:func:line` frame strings (e.g.
 * `script.py:main:10`), capturing a greedy `func` so C++ `Foo::bar` names stay
 * intact. The trailing `:<digits>` anchor keeps `tid:140234` (single colon) and
 * `func_[k]` suffixes as plain names. The line may be the `-1` tachyon writes
 * for a frame whose line it could not resolve.
 *
 * The regex consumes an optional leading drive-letter prefix (`C:\`, `D:/`)
 * into `file` so a Windows path keeps its drive colon; splitting there would
 * leave `file` as the bare drive letter.
 */
const TACHYON_FRAME =
  /^(?<file>(?:[A-Za-z]:[\\/])?[^;]+?):(?<func>.+):(?<line>-?\d+)$/u

/**
 * Tachyon, the sampling profiler CPython 3.15 ships as `profiling.sampling`.
 * Its collapsed stacks pack each frame's location into the name as
 * `file:func:line` (e.g. `script.py:main:10`), unlike py-spy's
 * `func (file:line)`. Both observe CPython, so they share standard-library and
 * installed-package categorization.
 */
export const tachyonOriginSpec = {
  id: `tachyon`,
  formats: [`collapsed`],
  isMarkerEntry: entry => isTachyonStackFrame(entry.name),
  categorizeEntry: entry =>
    syntheticFrameCategory(entry) ?? categorizeCPythonEntry(entry),
  normalizeStackFrame: input => {
    if (THREAD_FRAME.test(input.name ?? ``)) {
      return null
    }
    const label = input.name && SPECIAL_FRAME_LABELS.get(input.name)
    if (label) {
      return { ...input, name: label }
    }
    return dropUnresolvedLine(normalizePackedStackFrame(input))
  },
} as const satisfies OriginSpec

const normalizePackedStackFrame = packedLocationNormalizer(TACHYON_FRAME)

/** Drops the `-1` line tachyon writes for a frame whose line it could not resolve. */
const dropUnresolvedLine = (input: StackFrame): StackFrame => {
  if (input.line === undefined || input.line >= 0) {
    return input
  }
  const { line: _, ...frame } = input
  return frame
}

/**
 * Whether a raw frame name is a tachyon marker: a synthetic per-thread
 * `tid:<id>` frame, or a `<frozen ...>` CPython bootstrap module in tachyon's
 * `file:func:line` shape. A plain `file:func:line` frame is *not* a marker;
 * that shape is generic, so a marker-free folded stack stays `unknown`.
 */
const isTachyonStackFrame = (name: string | undefined): boolean =>
  name !== undefined &&
  (THREAD_FRAME.test(name) ||
    (name.startsWith(`<frozen `) && TACHYON_FRAME.test(name)))

/** The pseudo-frame tachyon roots every stack at, containing the sampled thread's ID. */
const THREAD_FRAME = /^tid:\d+$/u

/**
 * The label for each "special" frame tachyon writes without a file or line:
 * the `<GC>` leaf of a sample taken while the interpreter was collecting
 * garbage, and the `<native>` frame marking where it was running non-Python
 * code under `--native`. Each label is parenthesized, the form of a synthetic
 * entry. {@link syntheticFrameCategory} categorizes `(garbage collector)`, and
 * `(native)` is `native` because it lacks a location.
 */
const SPECIAL_FRAME_LABELS: ReadonlyMap<string, string> = new Map([
  [`<GC>`, `(garbage collector)`],
  [`<native>`, `(native)`],
])
