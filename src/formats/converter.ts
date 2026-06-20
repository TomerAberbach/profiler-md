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

  /**
   * Returns whether generically-parsed JSON appears to be this format, rather
   * than JSON that resembles it by coincidence.
   *
   * This only drives format auto-detection and should be strict to avoid false
   * positives. JSON has no per-format parse step (it's parsed generically), so
   * when a user forces a JSON format this check is skipped and
   * {@link aggregate} runs directly.
   */
  matches: (json: unknown) => boolean

  aggregate: Aggregate<Parsed>
}

export type BinaryFormatConverter<Parsed = unknown> = {
  type: `binary`
  shape: FormatShape
  title: string

  /**
   * Parses raw bytes into this format's typed representation.
   *
   * Lenient by design: it should succeed whenever the bytes are *generally*
   * parseable as this format, throwing only when they genuinely cannot be (e.g.
   * undecodable bytes, or input missing the structure needed to produce the
   * typed value). This is what runs when a user explicitly forces this format,
   * so it must not reject input that merely fails a detection heuristic. Those
   * "does this really look like the format?" checks belong in
   * {@link BinaryFormatConverter.matches}.
   */
  parse: (bytes: Uint8Array) => Parsed

  /**
   * Parses a byte stream into this format's typed representation. Same contract
   * as {@link parse} (lenient; only throws on genuinely unparseable input) and
   * returns the same `Parsed`, so {@link matches}/{@link aggregate} are reused.
   *
   * Formats that can stream (e.g. line-based text) should consume the stream
   * incrementally to avoid buffering the whole input; formats whose parser needs
   * all bytes at once can buffer the stream and delegate to {@link parse}.
   * Used on the async path with an explicitly-forced format.
   */
  parseAsync: (stream: ReadableStream<Uint8Array>) => Promise<Parsed>

  /**
   * Returns whether a successfully {@link BinaryFormatConverter.parse}d value
   * actually appears to be this format, rather than something that parsed by
   * coincidence.
   *
   * Only used for format auto-detection, and skipped when the user forces the
   * format, so it should be strict to avoid false positives during detection.
   */
  matches: (parsed: Parsed) => boolean

  aggregate: Aggregate<Parsed>
}

export type FormatConverter<Parsed = unknown> =
  | JsonFormatConverter<Parsed>
  | BinaryFormatConverter<Parsed>
