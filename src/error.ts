/**
 * Thrown when a caller's input or options are unusable: an unrecognized
 * format, a malformed profile, an invalid option.
 *
 * A failure the caller cannot fix throws a plain `Error` instead, because such
 * a failure is a bug in this package. The exception is a parser failing on an
 * error it did not classify, which is either an input violating the format in
 * a way the parser does not check or a parser bug. That failure throws a
 * `ProfilerMdError` too, and `mayBeParserBug` identifies it.
 */
export class ProfilerMdError extends Error {
  public constructor(message: string, options?: ErrorOptions) {
    super(message, options)
    // eslint-disable-next-line stylistic/quotes
    this.name = 'ProfilerMdError'
  }
}

/** An error's message on one line, for embedding in another message. */
export const reasonOf = (error: unknown): string =>
  (error instanceof Error ? error.message : String(error))
    .replaceAll(/\s+/gu, ` `)
    .trim()
