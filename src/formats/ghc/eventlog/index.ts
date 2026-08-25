import type { BinaryFormatConverter } from '../../converter.ts'
import { matchesGhcEventlog } from './matches.ts'
import { parseGhcEventlog, parseGhcEventlogAsync } from './parse.ts'

export const ghcEventlogConverter = {
  format: `ghc-eventlog`,
  title: `GHC eventlog`,
  extension: `eventlog`,
  languages: [`haskell`],
  fallbackOrigin: `ghc`,
  type: `binary`,
  matches: matchesGhcEventlog,
  parse: parseGhcEventlog,
  parseAsync: parseGhcEventlogAsync,
} as const satisfies BinaryFormatConverter
