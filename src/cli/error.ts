import packageJson from '../../package.json' with { type: 'json' }
import { ProfilerMdError, reasonOf } from '../error.ts'
import { unclassifiedParseFailures } from '../formats/error.ts'
import { getUsageHint } from './help.ts'

export class CliError extends ProfilerMdError {
  public readonly exitCode: 1 | 2

  public constructor(message: string, exitCode: 1 | 2, options?: ErrorOptions) {
    super(message, options)
    // eslint-disable-next-line stylistic/quotes
    this.name = 'CliError'
    this.exitCode = exitCode
  }
}

export const reportError = (error: unknown): never => {
  if (error instanceof ProfilerMdError) {
    process.stderr.write(`error: ${error.message}\n`)
    const parseFailures = unclassifiedParseFailures(error)
    if (parseFailures.length > 0) {
      process.stderr.write(
        bugReport(
          `If the input opens in its profiler, report this as a bug in ${packageJson.name}:`,
          parseFailures,
        ),
      )
    }
    const exitCode = error instanceof CliError ? error.exitCode : 1
    // Exit code 2 is an invocation error, which the synopsis helps correct
    if (exitCode === 2) {
      process.stderr.write(getUsageHint())
    }
    process.exit(exitCode)
  }

  process.stderr.write(`error: ${reasonOf(error)}\n`)
  process.stderr.write(
    bugReport(`This is a bug in ${packageJson.name}. Report it:`, [error]),
  )
  process.exit(1)
}

/** The bug report request that follows an error line, with the given traces. */
const bugReport = (request: string, errors: readonly unknown[]): string =>
  [
    request,
    `${packageJson.bugs.url}/new`,
    `Include the command you ran, the input if you can share it, and this trace:`,
    ...errors.map(stackOf),
    ``,
  ].join(`\n`)

/** An error's stack trace, or its description when it has none. */
const stackOf = (error: unknown): string =>
  error instanceof Error
    ? (error.stack ?? `${error.name}: ${error.message}`)
    : `error: ${String(error)}`

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
