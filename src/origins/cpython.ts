/**
 * CPython interpreter conventions shared by the origins that observe Python
 * code, each carrying them in differently-shaped frame strings.
 */

import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferencePathOrName } from '../location.ts'
import type { FunctionCategory, ProfileEntry } from '../options.ts'
import { locationlessCategory } from './categorize.ts'

/** The full categorization shared by the CPython-observing origins. */
export const categorizeCPythonEntry = (
  entry: DeepReadonly<ProfileEntry>,
): FunctionCategory =>
  pythonThirdPartyCategory(entry) ??
  pythonStdlibCategory(entry) ??
  locationlessCategory(entry) ??
  `ours`

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
