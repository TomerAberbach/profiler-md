import { ProfilerMdError } from '../error.ts'

/**
 * Thrown by a converter's parse when the input isn't a valid instance of its
 * format. The conversion pipeline prefixes the format's title before the
 * message reaches the caller, so the message states the reason alone.
 */
export class FormatParseError extends ProfilerMdError {
  public constructor(reason: string, options?: ErrorOptions) {
    super(reason, options)
    // eslint-disable-next-line stylistic/quotes
    this.name = 'FormatParseError'
  }
}

/**
 * Thrown when auto-detection resolves no format.
 *
 * {@link FormatDetectError.errors} contains the error from each format that
 * recognized the input and then rejected it, in detection order. It is empty
 * when no format recognized the input.
 */
export class FormatDetectError extends ProfilerMdError {
  public readonly errors: readonly unknown[]

  public constructor(
    message: string,
    errors: readonly unknown[],
    options?: ErrorOptions,
  ) {
    super(message, options)
    // eslint-disable-next-line stylistic/quotes
    this.name = 'FormatDetectError'
    this.errors = errors
  }
}

/**
 * Thrown when the format the caller specified rejected the input.
 *
 * {@link FormatRejectionError.cause} is the error the format's parse threw.
 */
export class FormatRejectionError extends ProfilerMdError {
  public constructor(message: string, options: ErrorOptions) {
    super(message, options)
    // eslint-disable-next-line stylistic/quotes
    this.name = 'FormatRejectionError'
  }
}

/**
 * Whether a conversion error may be a bug in this package rather than an
 * unusable input.
 *
 * A parse that throws a {@link FormatParseError} identified the violation. One
 * that throws anything else failed on an error it did not classify: either the
 * input violates the format in a way the parser does not check, or the parser
 * has a bug. The pipeline reports both as unusable input, because the parser's
 * input is the only variable on its code path. A caller whose input opens in
 * its profiler has the evidence that distinguishes the two.
 */
export const mayBeParserBug = (error: unknown): boolean =>
  unclassifiedParseFailures(error).length > 0

/**
 * The errors a conversion error wraps that a parser threw without classifying
 * them, in detection order. Empty when the error is not a conversion error, or
 * when every wrapped error is a {@link FormatParseError}.
 */
export const unclassifiedParseFailures = (error: unknown): unknown[] => {
  if (error instanceof FormatDetectError) {
    return error.errors.filter(isUnclassifiedParseFailure)
  }
  if (error instanceof FormatRejectionError) {
    return isUnclassifiedParseFailure(error.cause) ? [error.cause] : []
  }
  return []
}

const isUnclassifiedParseFailure = (error: unknown): boolean =>
  !(error instanceof FormatParseError)
