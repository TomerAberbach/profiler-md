import { expect, test, vi } from 'vitest'
import type * as logger from './logger.ts'
import type { LogLevel } from './logger.ts'

// The test setup mocks `normalizeLogger` to record every line, so these tests
// import the real one.
const { LOG_LEVELS, normalizeLogger } =
  await vi.importActual<typeof logger>(`./logger.ts`)

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

test(`normalizeLogger calls the logger's methods on the logger`, () => {
  const logger = {
    messages: [] as string[],
    info(message: string) {
      this.messages.push(`info: ${message}`)
    },
  }

  normalizeLogger(logger, `info` satisfies LogLevel).info!(`hello`)

  expect(logger.messages).toStrictEqual([`info: hello`])
})
