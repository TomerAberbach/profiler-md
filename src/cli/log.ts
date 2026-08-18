import { LOG_LEVELS, normalizeLogger } from '../logger.ts'
import type { Logger, LogLevel } from '../logger.ts'
import { stderrSupportsColor } from './ansis.ts'
import { highlightLogLabel } from './highlight-help.ts'
import type { LogLabel } from './highlight-help.ts'

export const LOG_LEVEL_ENV = `PROFILER_MD_LOG`

/**
 * The log level the environment sets, or the default `warn` when it sets none
 * or an unrecognized one. An empty value counts as unset.
 */
export const defaultLogLevel = (): LogLevel =>
  parseLogLevelEnv(process.env[LOG_LEVEL_ENV]) ?? `warn`

export const warnInvalidLogLevelEnv = (
  logger: Logger,
  logLevel: LogLevel,
): void => {
  const raw = process.env[LOG_LEVEL_ENV]
  if (!raw?.trim() || parseLogLevelEnv(raw) !== undefined) {
    return
  }
  normalizeLogger(logger, logLevel).warn?.(
    `ignoring $${LOG_LEVEL_ENV}, which is not a log level: expected one of ${LOG_LEVELS.join(`, `)}, got: ${raw}`,
  )
}

const parseLogLevelEnv = (raw: string | undefined): LogLevel | undefined => {
  const level = raw?.trim().toLowerCase()
  return level !== undefined && LOG_LEVELS.includes(level as LogLevel)
    ? (level as LogLevel)
    : undefined
}

/**
 * A logger that writes each message to stderr as `<level>: <message>`, styled
 * when stderr supports color. It writes every level, because
 * {@link normalizeLogger} applies the log level.
 */
export const makeCliLogger = (): Required<Logger> => {
  const colors = stderrSupportsColor()
  const write =
    (label: LogLabel) =>
    (message: string): void => {
      process.stderr.write(
        `${highlightLogLabel(label, { colors })} ${message}\n`,
      )
    }
  return {
    error: write(`error`),
    warn: write(`warning`),
    info: write(`info`),
    debug: write(`debug`),
  }
}
