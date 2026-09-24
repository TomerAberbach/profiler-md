import { streamToUint8Array } from '../../helpers/bytes.ts'
import type { BinaryFormatConverter } from '../converter.ts'
import { matchesPprof } from './matches.ts'
import { parsePprof } from './parse.ts'

export const pprofConverter = {
  format: `pprof`,
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
  parse: bytes => parsePprof(bytes),
  // `pprof-format` decodes only a complete buffer.
  parseAsync: async stream => parsePprof(await streamToUint8Array(stream)),
} as const satisfies BinaryFormatConverter
