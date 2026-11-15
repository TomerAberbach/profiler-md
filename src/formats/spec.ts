import type { LanguageId } from '../languages.ts'
import type { ParsedInput } from '../modalities/registry.ts'

export type FormatSpec = JsonFormatSpec | BinaryFormatSpec

export type JsonFormatSpec = FormatMeta &
  Detect<unknown> & { type: `json` } & Parse<unknown>

export type BinaryFormatSpec = FormatMeta &
  Detect<Uint8Array> & {
    type: `binary`

    /**
     * Parses a byte stream, the streaming analogue of {@link Parse.parse}, for
     * a format that can consume its stream incrementally (e.g. line-based
     * text). Omit it when the parser needs all the bytes at once, and the
     * pipeline buffers the stream for {@link Parse.parse}.
     */
    parseAsync?: (
      stream: ReadableStream<Uint8Array>,
      recordTally: RecordTally,
    ) => Promise<ParsedInput[]>
  } & Parse<Uint8Array>

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
   * format the other origins write to match. `unknown` when no origin that
   * writes the format is canonical.
   */
  fallbackOrigin: string
}

/**
 * Returns whether the input should be auto-detected as this format.
 *
 * Skipped when the user specifies a format.
 *
 * Keep it **cheap**. Recognize the format's canonical structure (a magic
 * number, a header, a well-formed first record), and accept every version or
 * variant of it, including one {@link Parse.parse} rejects, so detection
 * reports the parser's reason. Never throw, because detection runs every
 * format's `matches` on each input it can't otherwise identify.
 */
export type Detect<Input> = {
  matches: (input: Input) => boolean
}

/**
 * Converts a format's input into its uniform {@link ParsedInput}s.
 *
 * Runs both when a user specifies the format and during auto-detection (after
 * {@link Detect.matches} returns true), so accept every valid instance of the
 * format, and throw a `FormatParseError` on input that isn't this format.
 *
 * Record on `recordTally` only data the specification forbids, data of a part
 * of the specification the parser doesn't support, or an input cut short,
 * never a record the parser reads. The parsed inputs' lazy iterables may record
 * on it too.
 */
export type Parse<Input> = {
  parse: (input: Input, recordTally: RecordTally) => ParsedInput[]
}

/**
 * Records why a parse used only part of its input, so the pipeline warns about
 * the partial result, or rejects an input that produced no records.
 */
export type RecordTally = {
  /**
   * Records that the parser skipped `count` records of `unit` (e.g. `sample`)
   * for `reason`, a participle phrase (e.g. `referencing a missing node`). A
   * `count` of `0` records nothing.
   */
  skipped: (unit: string, reason: string, count?: number) => void

  /**
   * Records that the input ends before `missing` (e.g.
   * `the end-of-data marker`), which a complete input contains.
   */
  endsBefore: (missing: string) => void
}
