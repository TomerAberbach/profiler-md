/**
 * Thrown when a caller's input or options are unusable: an unrecognized
 * format, a malformed profile, an invalid option.
 *
 * A failure the caller cannot fix throws a plain `Error` instead, because such
 * a failure is a bug in this package.
 */
export class ProfilerMdError extends Error {
  public constructor(message: string, options?: ErrorOptions) {
    super(message, options)
    // eslint-disable-next-line stylistic/quotes
    this.name = 'ProfilerMdError'
  }
}
