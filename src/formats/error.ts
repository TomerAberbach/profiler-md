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
