import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferencePathOrName } from '../location.ts'
import type { FunctionCategory, ProfileEntry } from '../options.ts'
import { locationlessCategory, nativeLibraryCategory } from './categorize.ts'

/**
 * The full categorization of a CPython entry.
 *
 * A compiled extension module keeps its package's category, so the
 * shared-library rule applies after the third-party and standard-library
 * rules. It categorizes a library outside both, such as `libc.so.6` or the
 * interpreter's own `libpython3.12.so.1.0`, as `native`.
 */
export const categorizeCPythonEntry = (
  entry: DeepReadonly<ProfileEntry>,
): FunctionCategory =>
  pythonThirdPartyCategory(entry) ??
  pythonStdlibCategory(entry) ??
  nativeLibraryCategory(entry) ??
  locationlessCategory(entry) ??
  `ours`

/** Categorizes Python frames from an installed-package directory as `third-party`. */
export const pythonThirdPartyCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined => {
  if (!location) {
    return undefined
  }
  const path = sourceReferencePathOrName(location)
  return path.includes(`/site-packages/`) || path.includes(`/dist-packages/`)
    ? `third-party`
    : undefined
}

/**
 * Categorizes CPython standard-library frames, frozen bootstrap modules
 * (`<frozen ...>`) and the interpreter's `lib/pythonX.Y/` sources, as `stdlib`.
 */
export const pythonStdlibCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined => {
  if (!location) {
    return undefined
  }
  const path = sourceReferencePathOrName(location)
  return path.startsWith(`<frozen `) || /\/lib\/python\d/u.test(path)
    ? `stdlib`
    : undefined
}
