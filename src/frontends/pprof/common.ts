import { normalizeProfileToMdOptions } from '../../common.ts'
import type {
  NormalizedProfileToMdOptions,
  ProfileEntry,
  ProfileToMdOptions,
} from '../../common.ts'

export const normalizePprofToMdOptions = (
  options?: ProfileToMdOptions,
): NormalizedProfileToMdOptions =>
  normalizeProfileToMdOptions(options, {
    defaultIncludeEntry: defaultPprofIncludeEntry,
  })

/** Returns whether to include the given pprof entry in the Markdown output. */
export const defaultPprofIncludeEntry = ({
  name,
  location,
}: ProfileEntry): boolean => !!(name || location)
