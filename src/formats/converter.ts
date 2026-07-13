import type { LanguageId } from '../cli/languages.ts'
import type { AggregatedProfile, Profile } from '../modalities/profile/index.ts'
import type {
  AggregatedHeapSnapshot,
  HeapSnapshot,
} from '../modalities/snapshot/index.ts'

/**
 * The uniform parsed form of a profile or snapshot, discriminated by its
 * `type` literal. The framework aggregates each through its modality's
 * pipeline.
 */
export type ParsedInput = Profile | HeapSnapshot

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
 * Converts a format's input into the uniform {@link ParsedInput}s (one per
 * profile or snapshot the format yields, in the format's order; a format may
 * yield a mix of modalities).
 *
 * This is a format's only custom step: it both reads the format and produces
 * the {@link Profile}s and {@link HeapSnapshot}s, taking no options or
 * context, since everything semantic (aggregation, origin detection,
 * categorization) is the framework's uniform job and anything that only
 * affects the Markdown output resolves at formatting time. JSON formats
 * receive the generically-parsed JSON; binary formats receive the raw bytes.
 *
 * Authoritative: it runs both when a user forces the format and (after
 * {@link Detect.matches} gates it) during auto-detection, so it should accept
 * any genuine instance and throw on input that isn't really this format,
 * including spec invariants only parsing can check (e.g. pprof's empty first
 * string-table entry). A cheap {@link Detect.matches} may be a loose prefilter
 * because `parse` is the real check.
 */
type Parse<Input> = {
  parse: (input: Input) => ParsedInput[]
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
   * the authoritative check is expensive ({@link Parse.parse}
   * re-validates and throws, so detection moves on), or stricter than `parse`
   * to keep ambiguous input (e.g. text a user could force) from being claimed
   * automatically.
   */
  matches: (input: Input) => boolean
}

export type JsonFormatConverter = FormatMeta &
  Detect<unknown> & { type: `json` } & Parse<unknown>

export type BinaryFormatConverter = FormatMeta &
  Detect<Uint8Array> & {
    type: `binary`

    /**
     * Parses a byte stream, the streaming analogue of
     * {@link Parse.parse}. Formats that can stream (e.g. line-based
     * text) should consume the stream incrementally; formats whose parser needs
     * all bytes at once can buffer the stream and delegate.
     */
    parseAsync: (stream: ReadableStream<Uint8Array>) => Promise<ParsedInput[]>
  } & Parse<Uint8Array>

export type FormatConverter = JsonFormatConverter | BinaryFormatConverter
