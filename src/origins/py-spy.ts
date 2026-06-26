import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import { locationlessStdlibCategory } from './categorize.ts'
import { someEntry } from './origin.ts'
import type { OriginSpec } from './origin.ts'

export const pySpyOriginSpec = {
  id: `py-spy`,
  language: `python`,
  formats: [`collapsed`],
  matches: context => someEntry(context, entry => isPySpyFrame(entry.name)),
  categorize: entry =>
    pythonThirdPartyCategory(entry) ??
    pythonStdlibCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    `ours`,
  normalizeFrame: input => {
    if (input.location) {
      return input
    }

    const frame = FRAME.exec(input.name ?? ``)
    if (!frame) {
      return input
    }

    return {
      ...input,
      name: frame.groups!.func!,
      location: { urlOrPath: frame.groups!.file! },
      line: Number(frame.groups!.line),
    }
  },
} as const satisfies OriginSpec

/**
 * Whether a raw frame name is py-spy-shaped: a `function (file:line)` frame, a
 * `<frozen ...>` bootstrap module, or a synthetic per-thread `tid:<id>` frame.
 */
const isPySpyFrame = (name: string | undefined): boolean =>
  name !== undefined &&
  (FRAME.test(name) || name.includes(`<frozen `) || name.startsWith(`tid:`))

/**
 * A py-spy `function (file:line)` frame, e.g. `parse (black/parsing.py:42)`. The
 * `func` and `file` are greedy so a name or path containing spaces or
 * parentheses stays intact, anchored by the trailing `:line)`.
 */
const FRAME = /^(?<func>.+) \((?<file>.+):(?<line>\d+)\)$/u

/**
 * Categorizes CPython standard-library frames, frozen bootstrap modules
 * (`<frozen ...>`) and the interpreter's `lib/pythonX.Y/` sources, as `stdlib`.
 */
const pythonStdlibCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined => {
  if (!location) {
    return undefined
  }
  const path = fileReferencePath(location)
  return path.startsWith(`<frozen `) || /\/lib\/python\d/u.test(path)
    ? `stdlib`
    : undefined
}

/** Categorizes frames from an installed-package directory as `third-party`. */
const pythonThirdPartyCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined => {
  if (!location) {
    return undefined
  }
  const path = fileReferencePath(location)
  return path.includes(`/site-packages/`) || path.includes(`/dist-packages/`)
    ? `third-party`
    : undefined
}
