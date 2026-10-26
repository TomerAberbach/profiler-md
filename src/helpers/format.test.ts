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
  [0.00001, `<0.1µs`],
  [0.0004, `0.4µs`],
  [0.028, `28.0µs`],
  [0.049, `49.0µs`],
  [0.09, `0.1ms`],
  [0.55, `0.6ms`],
  [1.4, `1.4ms`],
  [1500, `1.50s`],
  [1239, `1.23s`],
  [9599.999999999982, `9.60s`],
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
  [0.000001, `<0.01µs`],
  [0.00001, `0.01µs`],
  [0.0004, `0.40µs`],
  [0.004, `4.00µs`],
  [0.09, `0.09ms`],
  [0.55, `0.55ms`],
  [1.4, `1.40ms`],
  [1560, `1.560s`],
  [1559.9999999999998, `1.560s`],
])(`formatMillisecondsDelta formats %f as %s`, (milliseconds, expected) => {
  expect(formatMillisecondsDelta(milliseconds)).toBe(expected)
})

test.each([
  [0, `0\u{A0}B`, `0\u{A0}B`],
  [42, `42\u{A0}B`, `42\u{A0}B`],
  [1337, `1.31\u{A0}KiB`, `1.305\u{A0}KiB`],
  [1999, `1.95\u{A0}KiB`, `1.952\u{A0}KiB`],
  [133_712, `131\u{A0}KiB`, `130.578\u{A0}KiB`],
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
  [0.00049, `<0.1%`],
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
