import type { NormalizedProfileToMdOptions } from '../../options.ts'
import type { Profile } from '../../profile/index.ts'
import { formatProfile } from '../../profile/index.ts'

export const formatPythonProfile = (
  profile: Profile,
  options: NormalizedProfileToMdOptions,
): string => formatProfile(profile, options)
