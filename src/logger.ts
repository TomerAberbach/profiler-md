/**
 * The verbosity of a conversion's diagnostics, from `none` (the default) to
 * `debug`. A level enables its own messages and every level before it.
 */
export type LogLevel = (typeof LOG_LEVELS)[number]

/** Every {@link LogLevel}, least to most verbose. */
export const LOG_LEVELS = [`none`, `error`, `warn`, `info`, `debug`] as const

/**
 * Receives a conversion's diagnostics, one message per call.
 *
 * Only defined methods are called, so `console` qualifies as a logger, and so
 * does `{ warn: console.warn }`.
 */
export type Logger = Partial<
  Record<Exclude<LogLevel, `none`>, (message: string) => void>
>

/**
 * A {@link Logger} filtered to a {@link LogLevel}: a method is defined only if
 * the logger defines it and the level enables it. Test for the method before
 * building an expensive message.
 */
export type NormalizedLogger = Logger

export const normalizeLogger = (
  logger: Logger | undefined,
  logLevel: LogLevel,
): NormalizedLogger => {
  if (!logger) {
    return {}
  }

  const threshold = LOG_LEVELS.indexOf(logLevel)
  const normalized: NormalizedLogger = {}
  for (const level of LOG_LEVELS) {
    if (level === `none`) {
      continue
    }
    const log = logger[level]
    if (log && LOG_LEVELS.indexOf(level) <= threshold) {
      normalized[level] = message => log.call(logger, message)
    }
  }
  return normalized
}
