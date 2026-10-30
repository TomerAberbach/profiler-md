import type { BinaryFormatSpec } from '../../spec.ts'
import { matchesGhcEventlog } from './matches.ts'
import { parseGhcEventlog } from './parse.ts'

export const ghcEventlogFormatSpec = {
  id: `ghc-eventlog`,
  title: `GHC eventlog`,
  extension: `eventlog`,
  languages: [`haskell`],
  fallbackOrigin: `ghc`,
  type: `binary`,
  matches: matchesGhcEventlog,
  parse: parseGhcEventlog,
} as const satisfies BinaryFormatSpec
