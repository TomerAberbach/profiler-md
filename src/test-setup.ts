import { afterEach, beforeEach, vi } from 'vitest'
import { recordLog, takeUnassertedLogs } from './testing.ts'

// Every conversion resolves its logger through `normalizeLogger`, so wrapping
// it records every line the library logs, at every level and whatever
// `logger` and `logLevel` the test passed. The caller's logger still receives
// only what its options enable.
vi.mock(import(`./logger.ts`), async importOriginal => {
  const actual = await importOriginal()
  return {
    ...actual,
    normalizeLogger: (logger, logLevel) => {
      const normalized = actual.normalizeLogger(logger, logLevel)
      const recording: typeof normalized = {}
      for (const level of actual.LOG_LEVELS) {
        if (level === `none`) {
          continue
        }
        recording[level] = message => {
          // Called at call time: its module is mid-import while this factory
          // runs.
          recordLog(level, message)
          normalized[level]?.(message)
        }
      }
      return recording
    },
  }
})

const failOnUnassertedLogs = (message: string) => () => {
  const lines = takeUnassertedLogs()
  if (lines.length > 0) {
    throw new Error(`${message}, got: ${lines.join(`, `)}`)
  }
}

beforeEach(
  failOnUnassertedLogs(
    `a conversion logged warn or error lines outside a test`,
  ),
)
afterEach(
  failOnUnassertedLogs(
    `the test did not pass every warn or error line a conversion logged to expectLogs`,
  ),
)
