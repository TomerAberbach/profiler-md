import type { LanguageId } from '../cli/languages.ts'
import type { ParsedInput } from '../modalities/registry.ts'

type FormatMeta = {
  /**
   * The format's ID: the `--format` value and `--help` topic that select it.
   * Must be unique across formats.
   */
  id: string

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
 * Records why a parse used only part of its input, so the pipeline warns about
 * the partial result, or rejects an input that produced no records.
 */
export type RecordTally = {
  /**
   * Records that the parser skipped `count` records of `unit` (e.g. `sample`)
   * for `reason`, a participle phrase (e.g. `referencing a missing node`).
   */
  skipped: (unit: string, reason: string, count?: number) => void

  /**
   * Records that the input ends before `missing` (e.g.
   * `the end-of-data marker`), which a complete input contains.
   */
  endsBefore: (missing: string) => void
}

/**
 * Converts a format's input into its uniform {@link ParsedInput}s.
 *
 * Runs both when a user forces the format and during auto-detection (after
 * {@link Detect.matches} returns true), so it should accept any valid instance
 * and throw a `FormatParseError` on input that isn't this format, including
 * spec invariants only parsing can check.
 *
 * Record on `recordTally` only data the spec forbids, data of a part of the spec
 * the parser doesn't support, or an input cut short, never a record the parser
 * reads. The parsed inputs' lazy iterables may record on it too.
 */
export type Parse<Input> = {
  parse: (input: Input, recordTally: RecordTally) => ParsedInput[]
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
export type Detect<Input> = {
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
    parseAsync: (
      stream: ReadableStream<Uint8Array>,
      recordTally: RecordTally,
    ) => Promise<ParsedInput[]>
  } & Parse<Uint8Array>

export type FormatConverter = JsonFormatConverter | BinaryFormatConverter
