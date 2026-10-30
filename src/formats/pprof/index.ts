import type { BinaryFormatSpec } from '../spec.ts'
import { matchesPprof } from './matches.ts'
import { parsePprof } from './parse.ts'

export const pprofFormatSpec = {
  id: `pprof`,
  title: `pprof`,
  extension: `pprof`,
  languages: [
    `c`,
    `fortran`,
    `go`,
    `javascript`,
    `julia`,
    `ruby`,
    `rust`,
    `swift`,
    `zig`,
  ],
  // The pprof project defines `profile.proto`, not the profilers that emit it,
  // so no emitting origin is canonical.
  fallbackOrigin: `unknown`,
  type: `binary`,
  matches: matchesPprof,
  parse: parsePprof,
} as const satisfies BinaryFormatSpec
