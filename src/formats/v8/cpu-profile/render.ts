import type { NormalizedProfileToMdOptions } from '../../../options.ts'
import type { Profile } from '../../../profile/index.ts'
import { renderProfile } from '../../../profile/index.ts'

export const renderV8CpuProfile = (
  profile: Profile,
  options: NormalizedProfileToMdOptions,
): string => renderProfile(profile, options)
