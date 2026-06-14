import plur from 'plur'
import prettyBytes from 'pretty-bytes'
import prettyMilliseconds from 'pretty-ms'

export const formatCount = (count: number, unit?: string): string =>
  count.toLocaleString(`en-US`) + (unit ? ` ${plur(unit, count)}` : ``)

export const formatMicroseconds = (microseconds: number): string =>
  microseconds >= 1000
    ? formatMilliseconds(microseconds / 1000)
    : `${microseconds.toFixed(1)}µs`

export const formatMilliseconds = (milliseconds: number): string =>
  prettyMilliseconds(milliseconds, {
    secondsDecimalDigits: 2,
    millisecondsDecimalDigits: 1,
    unitCount: 2,
  })

export const formatBytes = (bytes: number): string =>
  prettyBytes(bytes, { nonBreakingSpace: true })

export const formatPercentChange = (base: number, current: number): string => {
  if (base === 0) {
    return current === 0 ? `—` : `new`
  }
  if (current === 0) {
    return `removed`
  }
  const change = (current - base) / base
  return formatDelta(change, formatPercent(Math.abs(change)))
}

export const formatDelta = (value: number, formatted: string): string => {
  switch (Math.sign(value)) {
    case -1:
      return `-${formatted}`
    case 1:
      return `+${formatted}`
    default:
      return formatted
  }
}

export const formatPercent = (fraction: number): string =>
  `${(fraction * 100).toFixed(1)}%`

export const formatArrow = (left: string, right: string): string =>
  left === right ? left : `${left} → ${right}`

export const formatConjunction = (strings: Iterable<string>): string =>
  (conjunctionFormatter ??= new Intl.ListFormat(`en`, {
    style: `long`,
    type: `conjunction`,
  })).format(strings)

let conjunctionFormatter: Intl.ListFormat | undefined

export const capitalizeFirst = (string: string): string =>
  string.length === 0 ? string : string[0]!.toUpperCase() + string.slice(1)
