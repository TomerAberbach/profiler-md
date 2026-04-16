import prettyBytes from 'pretty-bytes'
import prettyMilliseconds from 'pretty-ms'

export const formatCount = (count: number, unit?: string): string =>
  count.toLocaleString(`en-US`) +
  (unit ? ` ${unit}${count === 1 ? `` : `s`}` : ``)

export const formatMicroseconds = (microseconds: number): string =>
  prettyMilliseconds(microseconds / 1000, {
    secondsDecimalDigits: 2,
    millisecondsDecimalDigits: 1,
    unitCount: 2,
  })

export const formatMicrosecondsExact = (microseconds: number): string =>
  `${microseconds.toFixed(1)}µs`

export const formatBytes = (bytes: number): string =>
  prettyBytes(bytes, { nonBreakingSpace: true })

export const formatPercent = (fraction: number): string =>
  `${(fraction * 100).toFixed(1)}%`
