import { streamToUint8Array } from '../../helpers/bytes.ts'
import type { BinaryFormatConverter } from '../converter.ts'
import { matchesPprof } from './matches.ts'
import { parsePprof } from './parse.ts'

export const pprofConverter = {
  title: `pprof`,
  extension: `pprof`,
  languages: [`c`, `go`, `javascript`, `julia`, `ruby`, `rust`],
  fallbackOrigin: `unknown`,
  type: `binary`,
  matches: matchesPprof,
  parse: bytes => parsePprof(bytes),
  // `pprof-format` needs all bytes at once, so buffer the stream then delegate
  // to the sync decode rather than streaming.
  parseAsync: async stream => parsePprof(await streamToUint8Array(stream)),
} as const satisfies BinaryFormatConverter
