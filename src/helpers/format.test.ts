import { expect, test } from 'vitest'
import { formatPercent, formatPercentChange } from './format.ts'

test.each([
  [0, `0.0%`],
  [0.0004, `<0.1%`],
  [0.000_49, `<0.1%`],
  [0.0006, `0.1%`],
  [0.001, `0.1%`],
  [0.123, `12.3%`],
  [1, `100.0%`],
])(`formatPercent formats %f as %s`, (fraction, expected) => {
  expect(formatPercent(fraction)).toBe(expected)
})

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
