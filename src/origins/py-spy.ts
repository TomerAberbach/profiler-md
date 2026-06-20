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
  matches: context =>
    someEntry(
      context,
      entry =>
        isThreadFrame(entry) || pythonStdlibCategory(entry) !== undefined,
    ),
  categorize: entry =>
    pythonThirdPartyCategory(entry) ??
    pythonStdlibCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    `ours`,
} as const satisfies OriginSpec

/** Whether the entry is py-spy's synthetic per-thread `tid:<id>` frame. */
const isThreadFrame = ({ name }: DeepReadonly<ProfileEntry>): boolean =>
  name?.startsWith(`tid:`) === true

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
