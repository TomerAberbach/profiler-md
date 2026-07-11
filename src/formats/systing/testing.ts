/** A valid version-1 header with cpu-clock sampling provenance. */
export const systingHeader = {
  systing_profile_export: 1,
  producer: `systing 1.11.4`,
  trace_id: `trace`,
  source_schema_version: 12,
  source_systing_version: `1.11.4`,
  sample_event: `cpu-clock`,
  sample_period: 1_000_000,
  event_types: {
    '0': `uninterruptible_sleep`,
    '1': `cpu`,
    '2': `interruptible_sleep`,
  },
  stack_order: `leaf_first`,
  start_ts: 1_000_000_000,
  end_ts: 2_000_000_000,
  system: { sysname: `Linux`, release: `6.12.0`, machine: `x86_64` },
}

/**
 * Encodes a systing profile export from a header object and record arrays,
 * one JSON value per line.
 */
export const makeSysting = (
  records: unknown[],
  header: object = systingHeader,
): Uint8Array =>
  new TextEncoder().encode(
    [header, ...records].map(value => JSON.stringify(value)).join(`\n`),
  )
