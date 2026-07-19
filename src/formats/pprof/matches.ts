export const matchesPprof = (bytes: Uint8Array): boolean =>
  // A pprof leads with the tag byte of one of `Profile`'s fields,
  // `(fieldNumber << 3) | wireType`. A cheap prefilter to avoid attempting a
  // full protobuf decode of input that obviously isn't pprof; `decodePprof` is
  // the real check.
  bytes.length > 0 && profileFieldWireTypes[bytes[0]! >> 3] === (bytes[0]! & 7)

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
