import type { NormalizedProfileToMdOptions } from '../options.ts'
import type { AggregatedProfile } from '../profile/index.ts'
import type { AggregatedHeapSnapshot } from '../snapshot/index.ts'

/** The aggregated form of a profile or snapshot. */
export type AggregatedInput = AggregatedProfile | AggregatedHeapSnapshot

type Aggregate<Parsed> = (
  parsed: Parsed,
  options: NormalizedProfileToMdOptions,
) => AggregatedInput[]

/** Whether a format aggregates to profiles or snapshots. */
export type FormatShape = AggregatedInput[`type`]

export type JsonFormatConverter<Parsed = unknown> = {
  type: `json`
  shape: FormatShape
  title: string
  matches: (json: unknown) => boolean
  aggregate: Aggregate<Parsed>
}

export type BinaryFormatConverter<Parsed = unknown> = {
  type: `binary`
  shape: FormatShape
  title: string
  parse: (bytes: Uint8Array) => Parsed
  matches: (parsed: Parsed) => boolean
  aggregate: Aggregate<Parsed>
}

export type FormatConverter<Parsed = unknown> =
  | JsonFormatConverter<Parsed>
  | BinaryFormatConverter<Parsed>
