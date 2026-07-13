import type { LanguageId } from '../cli/languages.ts'
import type { AggregatedProfile, Profile } from '../modalities/profile/index.ts'
import type { AggregatedHeapSnapshot } from '../modalities/snapshot/index.ts'

/** The aggregated form of a profile or snapshot. */
export type AggregatedInput = AggregatedProfile | AggregatedHeapSnapshot

type FormatMeta = {
  /** The format's display name in the readme matrix and `--help`. */
  title: string

  /**
   * The filename extension of the format's `examples/input/` files.
   *
   * Multi-segment extensions (e.g. `speedscope.json`) are allowed. Must be
   * unique across formats.
   */
  extension: string

  /** The languages whose profilers emit this format. */
  languages: readonly LanguageId[]

  /**
   * The origin to resolve to when no specific origin matches any of the input's
   * entries: the runtime origin for a single-runtime format, else `unknown`.
   */
  fallbackOrigin: string
}

/**
 * Converts a profile format's input into the uniform {@link Profile} (one per
 * profile the format yields).
 *
 * This is a format's only custom step: it both reads the format and produces
 * the {@link Profile}, taking no options or context, since everything semantic
 * (origin, normalization, categorization) is the framework's uniform job. JSON
 * formats receive the generically-parsed JSON; binary formats receive the raw
 * bytes.
 *
 * Authoritative: it runs both when a user forces the format and (after
 * {@link Detect.matches} gates it) during auto-detection, so it should accept
 * any genuine instance and throw on input that isn't really this format,
 * including spec invariants only parsing can check (e.g. pprof's empty first
 * string-table entry). A cheap {@link Detect.matches} may be a loose prefilter
 * because `parse` is the real check.
 */
type ParseProfile<Input> = {
  modality: `profile`
  parse: (input: Input) => Profile[]
}

/**
 * Aggregates a snapshot format's input directly into aggregated heap snapshots.
 * Snapshots have no frames or samples, so they skip the profile pipeline. Like
 * {@link ParseProfile.parse}, aggregation takes no options or context: origin
 * detection and categorization run uniformly in the framework afterwards (see
 * {@link categorizeAggregatedHeapSnapshot}), and the framework resolves
 * anything that only affects the Markdown output (labels, base URLs) at
 * formatting time.
 */
type AggregateSnapshot<Input> = {
  modality: `snapshot`
  aggregate: (input: Input) => AggregatedHeapSnapshot[]
}

type Detect<Input> = {
  /**
   * Returns whether the input should be auto-detected as this format. Used only
   * for auto-detection (skipped when the user forces the format), inspecting
   * the same raw input the production member receives (the generically-parsed
   * JSON, or the raw bytes).
   *
   * Keep it **cheap**: it shouldn't redo the production member's work. Because
   * it's detection-only, it does not need to agree exactly with what `parse`
   * accepts. It may be a loose prefilter that admits a few non-instances when
   * the authoritative check is expensive ({@link ParseProfile.parse}
   * re-validates and throws, so detection moves on), or stricter than `parse`
   * to keep ambiguous input (e.g. text a user could force) from being claimed
   * automatically.
   */
  matches: (input: Input) => boolean
}

export type JsonFormatConverter = FormatMeta &
  Detect<unknown> & { type: `json` } & (
    | ParseProfile<unknown>
    | AggregateSnapshot<unknown>
  )

export type BinaryFormatConverter = FormatMeta &
  Detect<Uint8Array> & {
    type: `binary`

    /**
     * Parses a byte stream, the streaming analogue of
     * {@link ParseProfile.parse}. Formats that can stream (e.g. line-based
     * text) should consume the stream incrementally; formats whose parser needs
     * all bytes at once can buffer the stream and delegate.
     */
    parseAsync: (stream: ReadableStream<Uint8Array>) => Promise<Profile[]>
  } & ParseProfile<Uint8Array>

export type FormatConverter = JsonFormatConverter | BinaryFormatConverter
