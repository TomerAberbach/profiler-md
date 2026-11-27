import { choice, normalizeInput } from '@optique/core/valueparser'
import type { ValueParser } from '@optique/core/valueparser'
import { createEnvContext } from '@optique/env'
import { LOG_LEVELS, normalizeLogger } from '../logger.ts'
import type { Logger, LogLevel } from '../logger.ts'
import { stderrSupportsColor } from './ansis.ts'
import { makeKindlingPalette } from './theme-kindling.ts'
import type { KindlingPalette } from './theme-kindling.ts'

export const DEFAULT_LOG_LEVEL: LogLevel = `warn`

export const LOG_LEVEL_ENV = `PROFILER_MD_LOG`

export const envContext = createEnvContext()

export const warnInvalidLogLevelEnv = (
  logger: Logger,
  logLevel: LogLevel,
): void => {
  const raw = envContext.source(LOG_LEVEL_ENV)
  if (!raw?.trim() || recognizedLogLevel.parse(raw).success) {
    return
  }
  normalizeLogger(logger, logLevel).warn?.(
    `ignoring $${LOG_LEVEL_ENV}, which is not a log level: expected one of ${LOG_LEVELS.join(`, `)}, got: ${raw}`,
  )
}

const recognizedLogLevel = normalizeInput(
  choice(LOG_LEVELS, { caseInsensitive: true }),
  input => input.trim(),
)

/** Parses an empty or unrecognized level as the default. */
export const logLevelEnvParser: ValueParser<`sync`, LogLevel> = {
  ...recognizedLogLevel,
  parse: input => {
    const result = recognizedLogLevel.parse(input)
    return result.success ? result : { success: true, value: DEFAULT_LOG_LEVEL }
  },
}

type CliLogger = Required<Logger> & {
  /**
   * Writes an empty line to stderr if the logger wrote a line since the last
   * separation, so output that follows on the same terminal starts apart from
   * the log lines.
   */
  separate: () => void
}

/**
 * A logger that writes each message to stderr as `<level>: <message>`, styled
 * when stderr supports color. It writes every level, because
 * {@link normalizeLogger} applies the log level.
 */
export const makeCliLogger = (): CliLogger => {
  const { log } = makeKindlingPalette({ colors: stderrSupportsColor() })
  let wrote = false
  const write =
    (label: keyof KindlingPalette[`log`]) =>
    (message: string): void => {
      // eslint-disable-next-line local/no-standard-stream-write -- this is the logger
      process.stderr.write(`${log[label](`${label}:`)} ${message}\n`)
      wrote = true
    }
  return {
    error: write(`error`),
    warn: write(`warning`),
    info: write(`info`),
    debug: write(`debug`),
    separate: () => {
      if (wrote) {
        // eslint-disable-next-line local/no-standard-stream-write -- this is the logger
        process.stderr.write(`\n`)
        wrote = false
      }
    },
  }
}
