import type { LanguageId } from '../cli/languages.ts'
import type {
  AggregatedCallGraph,
  CallGraph,
} from '../modalities/call-graph/index.ts'
import type {
  AggregatedHeapSnapshot,
  HeapSnapshot,
} from '../modalities/heap-snapshot/index.ts'
import type {
  AggregatedSamplingProfile,
  SamplingProfile,
} from '../modalities/sampling-profile/index.ts'

export type ParsedInput = SamplingProfile | CallGraph | HeapSnapshot

export type AggregatedInput =
  AggregatedSamplingProfile | AggregatedCallGraph | AggregatedHeapSnapshot

type FormatMeta = {
  /** The format's display name. */
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
   * The origin to resolve to when no specific origin matches any input entry:
   * the format's canonical origin, the tool or runtime whose definition of the
   * format the other emitters write to match. `unknown` when no emitting origin
   * is canonical.
   */
  fallbackOrigin: string
}

/**
 * Converts a format's input into its uniform {@link ParsedInput}s.
 *
 * Runs both when a user forces the format and during auto-detection (after
 * {@link Detect.matches} returns true), so it should accept any valid instance
 * and throw a `FormatParseError` on input that isn't this format, including
 * spec invariants only parsing can check.
 *
 * A cheap {@link Detect.matches} may be a loose prefilter because `parse` is
 * the real check.
 */
type Parse<Input> = {
  parse: (input: Input) => ParsedInput[]
}

/**
 * Returns whether the input should be auto-detected as this format.
 *
 * Skipped when the user forces a format.
 *
 * It must be **cheap**. Because it's detection-only, it need not agree exactly
 * with what {@link Parse.parse} accepts. It may be a loose prefilter that
 * admits a few non-instances when the real check is expensive (`parse`
 * re-validates and throws, so detection moves on), or stricter than `parse` to
 * keep ambiguous input (e.g. text a user could force) from being auto-detected
 * as this format.
 */
type Detect<Input> = {
  matches: (input: Input) => boolean
}

export type JsonFormatConverter = FormatMeta &
  Detect<unknown> & { type: `json` } & Parse<unknown>

export type BinaryFormatConverter = FormatMeta &
  Detect<Uint8Array> & {
    type: `binary`

    /**
     * Parses a byte stream, the streaming analogue of {@link Parse.parse}.
     *
     * Formats that can stream (e.g. line-based text) should consume the stream
     * incrementally; formats whose parser needs all bytes at once can buffer
     * the stream and delegate.
     */
    parseAsync: (stream: ReadableStream<Uint8Array>) => Promise<ParsedInput[]>
  } & Parse<Uint8Array>

export type FormatConverter = JsonFormatConverter | BinaryFormatConverter
