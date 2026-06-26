import { streamToUint8Array } from '../../helpers/bytes.ts'
import type { BinaryFormatConverter } from '../converter.ts'
import { parsePprof } from './parse.ts'

const matchesPprof = (bytes: Uint8Array): boolean =>
  // A pprof leads with its `sample_type` field (field 1, length-delimited), so
  // the first byte is its tag, `(1 << 3) | 2 === 0x0a`. A cheap prefilter to
  // avoid attempting a full protobuf decode of input that obviously isn't
  // pprof; `decodePprof` is the authoritative check.
  bytes.length > 0 && bytes[0] === 0x0a

export const pprofConverter = {
  title: `pprof`,
  type: `binary`,
  shape: `profile`,
  matches: matchesPprof,
  parse: bytes => parsePprof(bytes),
  // `pprof-format` needs all bytes at once, so buffer the stream then delegate
  // to the sync decode rather than streaming.
  parseAsync: async stream => parsePprof(await streamToUint8Array(stream)),
} satisfies BinaryFormatConverter
