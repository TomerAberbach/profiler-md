import type { BinaryFormatSpec } from '../../spec.ts'
import { matchesGhcEventlog } from './matches.ts'
import { parseGhcEventlog, parseGhcEventlogAsync } from './parse.ts'

export const ghcEventlogFormatSpec = {
  id: `ghc-eventlog`,
  title: `GHC eventlog`,
  extension: `eventlog`,
  languages: [`haskell`],
  fallbackOrigin: `ghc`,
  type: `binary`,
  matches: matchesGhcEventlog,
  parse: parseGhcEventlog,
  parseAsync: parseGhcEventlogAsync,
} as const satisfies BinaryFormatSpec
