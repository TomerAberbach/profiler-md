import { categorizeCPythonEntry } from '../cpython.ts'
import { packedLocationNormalizer } from '../origin.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * Matches tachyon's folded `file:func:line` frame strings (e.g.
 * `script.py:main:10`), capturing a greedy `func` so C++ `Foo::bar` names stay
 * intact. The trailing `:<digits>` anchor keeps `tid:140234` (single colon) and
 * `func_[k]` suffixes as plain names.
 *
 * The regex consumes an optional leading drive-letter prefix (`C:\`, `D:/`)
 * into `file` so a Windows path keeps its drive colon; splitting there would
 * leave `file` as the bare drive letter.
 */
const TACHYON_FRAME =
  /^(?<file>(?:[A-Za-z]:[\\/])?[^;]+?):(?<func>.+):(?<line>\d+)$/u

/**
 * Tachyon, a Python sampling profiler whose collapsed stacks pack each frame's
 * location into the name as `file:func:line` (e.g. `script.py:main:10`), unlike
 * py-spy's `func (file:line)`. Both observe CPython, so they share
 * standard-library and installed-package categorization.
 */
export const tachyonOriginSpec = {
  id: `tachyon`,
  formats: [`collapsed`],
  isMarkerEntry: entry => isTachyonFrame(entry.name),
  categorizeEntry: categorizeCPythonEntry,
  normalizeFrame: packedLocationNormalizer(TACHYON_FRAME),
} as const satisfies OriginSpec

/**
 * Whether a raw frame name is a tachyon marker: a synthetic per-thread
 * `tid:<id>` frame, or a `<frozen ...>` CPython bootstrap module in tachyon's
 * `file:func:line` shape. A plain `file:func:line` frame is *not* a marker;
 * that shape is generic, so a marker-free folded stack stays `unknown`.
 */
const isTachyonFrame = (name: string | undefined): boolean =>
  name !== undefined &&
  (/^tid:\d+$/u.test(name) ||
    (name.startsWith(`<frozen `) && TACHYON_FRAME.test(name)))
