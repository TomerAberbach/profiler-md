import { expect, test } from 'vitest'
import { formatPercentChange } from './change.ts'

test.each([
  [0, 0, `—`],
  [0, 5, `new`],
  [5, 0, `removed`],
  [100, 150, `+50.0%`],
  [100, 50, `-50.0%`],
  [100, 100, `0.0%`],
  [10_000, 10_001, `~0%`],
  [10_000, 9999, `~0%`],
])(`formatPercentChange formats %d to %d as %s`, (base, current, expected) => {
  expect(formatPercentChange(base, current)).toBe(expected)
})
