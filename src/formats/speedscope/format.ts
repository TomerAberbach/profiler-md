import type { NormalizedProfileToMdOptions } from '../../options.ts'
import { formatProfile } from '../../profile/index.ts'
import type { Profile } from '../../profile/index.ts'

export const formatSpeedscope = (
  profile: Profile,
  options: NormalizedProfileToMdOptions,
): string => formatProfile(profile, options)
