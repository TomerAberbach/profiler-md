export const matchesPprof = (bytes: Uint8Array): boolean =>
  // A pprof begins with the tag byte of one of `Profile`'s fields. The check
  // rejects an input that is obviously not pprof before a full protobuf decode.
  bytes.length > 0 && profileFieldWireTypes[bytes[0]! >> 3] === (bytes[0]! & 7)

// The wire type of each top-level `Profile` field, indexed by field number,
// see https://protobuf.dev/programming-guides/encoding/. Encoders may emit
// fields in any order (e.g. Go's runtime/pprof leads with `time_nanos` or
// `period_type` rather than `sample_type`), so any field's tag is a valid first
// byte.
// https://github.com/google/pprof/blob/main/proto/profile.proto
const profileFieldWireTypes: readonly number[] = [
  /* (no field 0) */ -1, /* Sample_type */ 2, /* Sample */ 2, /* Mapping */ 2,
  /* Location */ 2, /* Function */ 2, /* String_table */ 2, /* Drop_frames */ 0,
  /* Keep_frames */ 0, /* Time_nanos */ 0, /* Duration_nanos */ 0,
  /* Period_type */ 2, /* Period */ 0, /* Comment (packed) */ 2,
  /* Default_sample_type */ 0, /* Doc_url */ 0,
]
