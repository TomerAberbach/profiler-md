import {
  locationlessStdlibCategory,
  syntheticFrameCategory,
} from './categorize.ts'
import type { OriginSpec } from './origin.ts'

/**
 * The fallback origin for any profile or snapshot whose generating runtime
 * couldn't be detected.
 */
export const unknownOriginSpec = {
  id: `unknown`,
  language: null,
  formats: [],
  matches: () => false,
  categorize: entry =>
    syntheticFrameCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    `ours`,
  normalizeFrame: input => {
    if (input.location) {
      return input
    }

    const frame = FRAME_LOCATION.exec(input.name ?? ``)
    if (!frame) {
      return input
    }

    const { file, func, line } = frame.groups!
    return {
      ...input,
      name: func!,
      location: { urlOrPath: file!, line: Number(line) },
    }
  },
} as const satisfies OriginSpec

/**
 * Matches frame strings of the shape `file:func:line` (e.g. Python tachyon's
 * `script.py:main:10`), capturing a greedy `func` so C++ `Foo::bar` names stay
 * intact. The trailing `:<digits>` anchor keeps `tid:140234` (single colon) and
 * `func_[k]` suffixes as plain names.
 *
 * The optional leading drive-letter prefix (`C:\`, `D:/`) is consumed as part
 * of `file` so a Windows path isn't split at its drive colon, which would
 * otherwise leave `file` as the bare drive letter.
 */
const FRAME_LOCATION =
  /^(?<file>(?:[A-Za-z]:[\\/])?[^;]+?):(?<func>.+):(?<line>\d+)$/u
