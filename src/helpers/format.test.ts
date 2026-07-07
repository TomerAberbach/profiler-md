import { expect, test } from 'vitest'
import {
  formatBytes,
  formatBytesDelta,
  formatMicroseconds,
  formatMilliseconds,
  formatMillisecondsDelta,
  formatPercent,
  formatPercentChange,
} from './format.ts'

test.each([
  [0, `0ms`],
  [0.000_01, `<0.1µs`],
  [0.0004, `0.4µs`],
  [0.028, `28.0µs`],
  [0.049, `49.0µs`],
  [0.09, `0.1ms`],
  [0.55, `0.6ms`],
  [1.4, `1.4ms`],
  [1500, `1.50s`],
])(`formatMilliseconds formats %f as %s`, (milliseconds, expected) => {
  expect(formatMilliseconds(milliseconds)).toBe(expected)
})

test.each([
  [0, `0.0µs`],
  [0.01, `<0.1µs`],
  [28, `28.0µs`],
  [1000, `1.0ms`],
])(`formatMicroseconds formats %f as %s`, (microseconds, expected) => {
  expect(formatMicroseconds(microseconds)).toBe(expected)
})

test.each([
  [0, `0ms`],
  [0.000_001, `<0.01µs`],
  [0.000_01, `0.01µs`],
  [0.0004, `0.40µs`],
  [0.004, `4.00µs`],
  [0.09, `0.09ms`],
  [0.55, `0.55ms`],
  [1.4, `1.40ms`],
  [1560, `1.560s`],
])(`formatMillisecondsDelta formats %f as %s`, (milliseconds, expected) => {
  expect(formatMillisecondsDelta(milliseconds)).toBe(expected)
})

test.each([
  [0, `0\u00A0B`, `0\u00A0B`],
  [42, `42\u00A0B`, `42\u00A0B`],
  [1337, `1.34\u00A0kB`, `1.337\u00A0kB`],
  [1999, `2\u00A0kB`, `1.999\u00A0kB`],
  [133_712, `134\u00A0kB`, `133.712\u00A0kB`],
])(
  `formatBytes and formatBytesDelta format %d as %s and %s`,
  (bytes, expected, expectedDelta) => {
    expect(formatBytes(bytes)).toBe(expected)
    expect(formatBytesDelta(bytes)).toBe(expectedDelta)
  },
)

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
