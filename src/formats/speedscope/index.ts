import type { JsonFormatConverter } from '../converter.ts'
import { matchesSpeedscope } from './matches.ts'
import { parseSpeedscope } from './parse.ts'
import type { SpeedscopeProfile } from './parse.ts'

export const speedscopeConverter = {
  id: `speedscope`,
  title: `Speedscope`,
  extension: `speedscope.json`,
  languages: [`csharp`, `php`, `python`, `ruby`],
  // The speedscope viewer defines the format and profiles nothing itself, so no
  // emitting origin is canonical. The parser detects emitters from the file's
  // `exporter` field and sets an origin hint.
  fallbackOrigin: `unknown`,
  type: `json`,
  matches: matchesSpeedscope,
  parse: (json, recordTally) =>
    parseSpeedscope(json as SpeedscopeProfile, recordTally),
} as const satisfies JsonFormatConverter
