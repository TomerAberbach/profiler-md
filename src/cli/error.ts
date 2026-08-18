import { inspect } from 'node:util'
import packageJson from '../../package.json' with { type: 'json' }
import { ProfilerMdError, reasonOf } from '../error.ts'
import { unclassifiedParseFailures } from '../formats/error.ts'
import { normalizeLogger } from '../logger.ts'
import type { Logger, LogLevel } from '../logger.ts'
import { stderrSupportsColor } from './ansis.ts'
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

export type ReportErrorOptions = {
  logger: Logger
  logLevel: LogLevel
}

/**
 * Reports the failure at `error` through the logger and exits. At `debug`,
 * also prints the cause chain, which the message omits. A level below `error`
 * silences the report, including the bug report and usage hint that follow it.
 */
export const reportError = (
  error: unknown,
  { logger, logLevel }: ReportErrorOptions,
): never => {
  const log = normalizeLogger(logger, logLevel)
  const logCause = (): void => {
    if (error instanceof Error && error.cause !== undefined) {
      log.debug?.(`caused by: ${inspect(error.cause)}`)
    }
  }

  if (error instanceof ProfilerMdError) {
    log.error?.(error.message)
    logCause()
    const exitCode = error instanceof CliError ? error.exitCode : 1
    if (log.error) {
      const parseFailures = unclassifiedParseFailures(error)
      if (parseFailures.length > 0) {
        process.stderr.write(
          bugReport(
            `If the input opens in its profiler, report this as a bug in ${packageJson.name}:`,
            parseFailures,
          ),
        )
      }
      // Exit code 2 is an invocation error, which the synopsis helps correct
      if (exitCode === 2) {
        process.stderr.write(getUsageHint({ colors: stderrSupportsColor() }))
      }
    }
    process.exit(exitCode)
  }

  log.error?.(reasonOf(error))
  logCause()
  if (log.error) {
    process.stderr.write(
      bugReport(`This is a bug in ${packageJson.name}. Report it:`, [error]),
    )
  }
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
