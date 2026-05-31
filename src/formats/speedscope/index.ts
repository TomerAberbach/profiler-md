import type { NormalizedProfileToMdOptions } from '../../options.ts'
import { aggregateSpeedscopeProfile } from './aggregate.ts'
import { formatSpeedscope } from './format.ts'
import type { SpeedscopeProfile } from './parse.ts'

export const matchesSpeedscopeProfile = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const object = json as Record<string, unknown>
  if (
    object.$schema !== `https://www.speedscope.app/file-format-schema.json` ||
    !Array.isArray(object.profiles) ||
    typeof object.shared !== `object` ||
    object.shared === null
  ) {
    return false
  }

  return true
}

export const speedscopeProfileToMd = (
  profile: SpeedscopeProfile,
  options: NormalizedProfileToMdOptions,
): string =>
  aggregateSpeedscopeProfile(profile, options)
    .map(profile => formatSpeedscope(profile, options))
    .join(`\n\n`)
