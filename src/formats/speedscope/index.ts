import type { JsonFormatConverter } from '../converter.ts'
import { parseSpeedscope } from './parse.ts'
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
  type: `json`,
  shape: `profile`,
  matches: matchesSpeedscopeProfile,
  parse: json => parseSpeedscope(json as SpeedscopeProfile),
} satisfies JsonFormatConverter
