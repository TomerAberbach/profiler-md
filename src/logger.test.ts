import { expect, test } from 'vitest'
import { LOG_LEVELS, normalizeLogger } from './logger.ts'
import type { LogLevel } from './logger.ts'

const LEVEL_METHODS = LOG_LEVELS.filter(level => level !== `none`)

test.each(LOG_LEVELS)(
  `normalizeLogger keeps the methods at or before %s`,
  logLevel => {
    const logger = Object.fromEntries(
      LEVEL_METHODS.map(level => [level, () => {}]),
    )

    const normalized = normalizeLogger(logger, logLevel)

    expect(Object.keys(normalized)).toStrictEqual(
      LEVEL_METHODS.filter(
        level => LOG_LEVELS.indexOf(level) <= LOG_LEVELS.indexOf(logLevel),
      ),
    )
  },
)

test(`normalizeLogger omits the methods the logger lacks`, () => {
  const normalized = normalizeLogger({ warn: () => {} }, `debug`)

  expect(Object.keys(normalized)).toStrictEqual([`warn`])
})

test(`normalizeLogger returns no methods without a logger`, () => {
  expect(normalizeLogger(undefined, `debug`)).toStrictEqual({})
})

test(`normalizeLogger calls the logger's methods with the message`, () => {
  const messages: string[] = []
  const normalized = normalizeLogger(
    { info: message => messages.push(`info: ${message}`) },
    `info` satisfies LogLevel,
  )

  normalized.info!(`hello`)

  expect(messages).toStrictEqual([`info: hello`])
})
