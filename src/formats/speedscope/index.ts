import type { JsonFormatConverter } from '../converter.ts'
import { matchesSpeedscope } from './matches.ts'
import { parseSpeedscope } from './parse.ts'
import type { SpeedscopeProfile } from './parse.ts'

export const speedscopeConverter = {
  title: `Speedscope`,
  extension: `speedscope.json`,
  languages: [`csharp`, `php`, `python`, `ruby`],
  fallbackOrigin: `unknown`,
  type: `json`,
  matches: matchesSpeedscope,
  parse: json => parseSpeedscope(json as SpeedscopeProfile),
} as const satisfies JsonFormatConverter
