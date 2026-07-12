import { streamToUint8Array } from '../../helpers/bytes.ts'
import type { BinaryFormatConverter } from '../converter.ts'
import { parsePprof } from './parse.ts'

// The wire type of each top-level `Profile` field's tag byte, indexed by field
// number (0 for varint fields, 2 for length-delimited fields). Encoders may
// emit fields in any order (e.g. Go's runtime/pprof leads with `time_nanos` or
// `period_type` rather than `sample_type`), so any field's tag is a valid
// first byte.
// https://github.com/google/pprof/blob/main/proto/profile.proto
const profileFieldWireTypes: readonly number[] = [
  /* (no field 0) */ -1, /* Sample_type */ 2, /* Sample */ 2, /* Mapping */ 2,
  /* Location */ 2, /* Function */ 2, /* String_table */ 2, /* Drop_frames */ 0,
  /* Keep_frames */ 0, /* Time_nanos */ 0, /* Duration_nanos */ 0,
  /* Period_type */ 2, /* Period */ 0, /* Comment (packed) */ 2,
  /* Default_sample_type */ 0, /* Doc_url */ 0,
]

const matchesPprof = (bytes: Uint8Array): boolean =>
  // A pprof leads with the tag byte of one of `Profile`'s fields,
  // `(fieldNumber << 3) | wireType`. A cheap prefilter to avoid attempting a
  // full protobuf decode of input that obviously isn't pprof; `decodePprof` is
  // the authoritative check.
  bytes.length > 0 && profileFieldWireTypes[bytes[0]! >> 3] === (bytes[0]! & 7)

export const pprofConverter = {
  title: `pprof`,
  extension: `pprof`,
  languages: [`c`, `go`, `javascript`, `julia`, `ruby`, `rust`],
  fallbackOrigin: `unknown`,
  type: `binary`,
  modality: `profile`,
  matches: matchesPprof,
  parse: bytes => parsePprof(bytes),
  // `pprof-format` needs all bytes at once, so buffer the stream then delegate
  // to the sync decode rather than streaming.
  parseAsync: async stream => parsePprof(await streamToUint8Array(stream)),
} as const satisfies BinaryFormatConverter
