import type { NormalizedProfileToMdOptions } from '../../options.ts'
import { renderProfile } from '../../profile/index.ts'
import type { Profile } from '../../profile/index.ts'

export const renderPprof = (
  profile: Profile,
  options: NormalizedProfileToMdOptions,
): string => renderProfile(profile, options)
