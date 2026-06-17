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
  const magnitude = formatPercent(Math.abs(change))
  return magnitude === `<0.1%`
    ? // A signed below-resolution bound (i.e. `+<0.1%`) would read awkwardly.
      `~0%`
    : formatDelta(change, magnitude)
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

/**
 * The ` (Δ, %)` suffix annotating a base-to-current change, or an empty string
 * when the value is unchanged. A zero delta reads as a measurement rather than a
 * change, so it's omitted alongside the arrow that has already collapsed to a
 * single value.
 */
export const formatChange = (
  base: number,
  current: number,
  format: (magnitude: number) => string,
): string => {
  if (base === current) {
    return ``
  }
  const delta = current - base
  return ` (${formatDelta(delta, format(Math.abs(delta)))}, ${formatPercentChange(
    base,
    current,
  )})`
}

export const formatPercent = (fraction: number): string => {
  const formatted = `${(fraction * 100).toFixed(1)}%`
  // A nonzero value that rounds to `0.0%` would read as absent, so clamp it to
  // the display resolution instead.
  return fraction > 0 && formatted === `0.0%` ? `<0.1%` : formatted
}

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
