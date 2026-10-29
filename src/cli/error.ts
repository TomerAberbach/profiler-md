import packageJson from '../../package.json' with { type: 'json' }
import { ProfilerMdError } from '../error.ts'

/** Each status the CLI exits with, and what it means. */
export const EXIT_STATUSES = {
  0: `Success`,
  1: `The input or a file could not be read, converted, or written, or ${packageJson.name} failed with a bug`,
  2: `The flags or arguments are invalid`,
} as const

type ErrorExitCode = Exclude<keyof typeof EXIT_STATUSES, 0>

export class CliError extends ProfilerMdError {
  public readonly exitCode: ErrorExitCode

  public constructor(
    message: string,
    exitCode: ErrorExitCode,
    options?: ErrorOptions,
  ) {
    super(message, options)
    this.name = `CliError`
    this.exitCode = exitCode
  }
}

/**
 * Whether a write failed because the reader closed its end of the pipe.
 *
 * The code is `EPIPE` on every platform. On macOS, Node creates a child's
 * pipes as unix-domain socketpairs, so the kernel returns `ENOTCONN` instead
 * when the peer closes while the write is between its connection check and its
 * send.
 */
export const isClosedReaderError = (error: NodeJS.ErrnoException): boolean =>
  error.code === `EPIPE` || error.code === `ENOTCONN`
