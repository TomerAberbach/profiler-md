import type { JsonFormatConverter } from '../../converter.ts'
import { matchesGhcJsonProfile } from './matches.ts'
import { parseGhcJsonProfile } from './parse.ts'
import type { GhcJsonProfile } from './parse.ts'

export const ghcJsonProfileConverter = {
  format: `ghc-json-profile`,
  title: `GHC JSON profile`,
  // The runtime writes the JSON report to `<program>.prof`, the same name it
  // uses for the text report, so the examples spell the JSON out.
  extension: `prof.json`,
  languages: [`haskell`],
  fallbackOrigin: `ghc`,
  type: `json`,
  matches: matchesGhcJsonProfile,
  parse: json => parseGhcJsonProfile(json as GhcJsonProfile),
} as const satisfies JsonFormatConverter
