import packageJson from '../../package.json' with { type: 'json' }
import { causeChainOf, messageOf, ProfilerMdError } from '../error.ts'
import {
  FormatDetectError,
  unclassifiedParseFailures,
} from '../formats/error.ts'
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
 * Reports the failure at `error` through the logger and exits. The message's
 * continuation lines state each cause, and each format that rejected the input
 * under auto-detection. A level below `error` silences the report, including
 * the bug report and usage hint that follow it.
 */
export const reportError = (
  error: unknown,
  { logger, logLevel }: ReportErrorOptions,
): never => {
  const log = normalizeLogger(logger, logLevel)

  if (error instanceof ProfilerMdError) {
    log.error?.(describeError(error))
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

  log.error?.(describeError(error))
  if (log.error) {
    process.stderr.write(
      bugReport(`This is a bug in ${packageJson.name}. Report it:`, [error]),
    )
  }
  process.exit(1)
}

/**
 * An error's message, followed by one indented `caused by:` line per cause. A
 * cause whose message its parent already ends with is skipped, so a layer that
 * states its cause is not repeated. An auto-detection's rejections are listed
 * under the line that states it, each described the same way and indented,
 * skipping a rejection the line already ends with by the same rule.
 */
const describeError = (error: unknown): string =>
  describeErrorLines(error).join(`\n`)

const describeErrorLines = (error: unknown): string[] => {
  const lines: string[] = []
  let parent: string | undefined
  for (const link of causeChainOf(error)) {
    const message = messageOf(link)
    if (parent === undefined) {
      lines.push(message)
    } else if (!parent.endsWith(message)) {
      lines.push(indent(`caused by: ${message}`))
    }
    if (link instanceof FormatDetectError) {
      for (const rejection of link.rejections) {
        if (!message.endsWith(rejection.message)) {
          lines.push(...describeErrorLines(rejection).map(indent))
        }
      }
    }
    parent = message
  }
  return lines
}

const indent = (line: string): string => `  ${line}`

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
