import type { JsonFormatConverter } from '../converter.ts'
import { aggregateSpeedscopeProfile } from './aggregate.ts'
import type { SpeedscopeProfile } from './parse.ts'

const matchesSpeedscopeProfile = (json: unknown): boolean => {
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

export const speedscopeConverter = {
  title: `Speedscope`,
  kind: `json`,
  matches: matchesSpeedscopeProfile,
  aggregate: aggregateSpeedscopeProfile,
} satisfies JsonFormatConverter<SpeedscopeProfile>
