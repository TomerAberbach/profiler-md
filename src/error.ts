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

/**
 * An error's message and each of its causes' messages, joined with `: ` for a
 * log line. An empty message is skipped, as is a cause whose message its
 * parent already ends with, so a layer that states its cause is not repeated.
 */
export const reasonOf = (error: unknown): string => {
  const messages: string[] = []
  for (const message of causeChainOf(error).map(messageOf)) {
    if (message && !messages.at(-1)?.endsWith(message)) {
      messages.push(message)
    }
  }
  return messages.join(`: `)
}

/**
 * An error followed by its causes, outermost first. Stops at a cause already
 * in the chain, so a cycle ends it.
 */
export const causeChainOf = (error: unknown): unknown[] => {
  const chain: unknown[] = []
  const seen = new Set<unknown>()
  while (!seen.has(error)) {
    seen.add(error)
    chain.push(error)
    if (!(error instanceof Error) || error.cause === undefined) {
      break
    }
    error = error.cause
  }
  return chain
}

/** An error's own message on one line, without its causes. */
export const messageOf = (error: unknown): string =>
  (error instanceof Error ? error.message : String(error))
    .replaceAll(/\s+/gu, ` `)
    .trim()
