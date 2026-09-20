import { ProfilerMdError } from '../error.ts'

/**
 * Thrown by a converter's parse when the input isn't a valid instance of its
 * format. The conversion pipeline prefixes the format's ID before the
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
 * Thrown when a format rejected the input: the one the caller specified, or
 * the only one auto-detection recognized.
 *
 * The message is `<format>: <reason>`, where the format is
 * {@link FormatRejectionError.format}, and {@link FormatRejectionError.cause}
 * is the error the format's parse threw.
 */
export class FormatRejectionError extends ProfilerMdError {
  /** The rejecting format's ID. */
  public readonly format: string

  public constructor(format: string, reason: string, options: ErrorOptions) {
    super(`${format}: ${reason}`, options)
    // eslint-disable-next-line stylistic/quotes
    this.name = 'FormatRejectionError'
    this.format = format
  }
}

/**
 * Thrown when auto-detection resolves no format.
 *
 * {@link FormatDetectError.rejections} contains the rejection from each format
 * that recognized the input and then rejected it, in detection order. It is
 * empty when no format recognized the input. When it contains one rejection,
 * the input is that format, so the error repeats the rejection's message and
 * wraps it as the cause.
 */
export class FormatDetectError extends ProfilerMdError {
  public readonly rejections: readonly FormatRejectionError[]

  public constructor(
    message: string,
    rejections: readonly FormatRejectionError[],
    options?: ErrorOptions,
  ) {
    super(message, options)
    // eslint-disable-next-line stylistic/quotes
    this.name = 'FormatDetectError'
    this.rejections = rejections
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
 *
 * An error that only restates another, such as one naming the input a failure
 * came from, resolves to its cause.
 */
export const unclassifiedParseFailures = (error: unknown): unknown[] => {
  if (error instanceof FormatDetectError) {
    return error.rejections.flatMap(unclassifiedParseFailure)
  }
  if (error instanceof FormatRejectionError) {
    return unclassifiedParseFailure(error)
  }
  if (error instanceof Error && error.cause !== undefined) {
    return unclassifiedParseFailures(error.cause)
  }
  return []
}

const unclassifiedParseFailure = ({
  cause,
}: FormatRejectionError): unknown[] =>
  cause instanceof FormatParseError ? [] : [cause]
