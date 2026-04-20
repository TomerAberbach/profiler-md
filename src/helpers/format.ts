import plur from 'plur'
import prettyBytes from 'pretty-bytes'
import prettyMilliseconds from 'pretty-ms'

export const formatCount = (count: number, unit?: string): string =>
  count.toLocaleString(`en-US`) + (unit ? ` ${plur(unit, count)}` : ``)

export const formatMilliseconds = (milliseconds: number): string =>
  prettyMilliseconds(milliseconds, {
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

export const formatConjunction = (strings: Iterable<string>): string =>
  conjunctionFormatter.format(strings)

const conjunctionFormatter = new Intl.ListFormat(`en`, {
  style: `long`,
  type: `conjunction`,
})
