import { normalizeProfileToMdOptions } from '../../common.ts'
import type {
  NormalizedProfileToMdOptions,
  ProfileEntry,
  ProfileToMdOptions,
} from '../../common.ts'

export const normalizeSpeedscopeToMdOptions = (
  options?: ProfileToMdOptions,
): NormalizedProfileToMdOptions =>
  normalizeProfileToMdOptions(options, {
    defaultIncludeEntry: defaultIncludeSpeedscopeEntry,
  })

/**
 * Returns whether to include the given speedscope profile entry in the Markdown
 * output.
 */
export const defaultIncludeSpeedscopeEntry = ({
  name,
}: ProfileEntry): boolean => !!name
