import plur from 'plur'
import prettyBytes from 'pretty-bytes'
import type { Options as PrettyBytesOptions } from 'pretty-bytes'
import prettyMilliseconds from 'pretty-ms'

export const formatCount = (count: number, unit?: string): string =>
  count.toLocaleString(`en-US`) + (unit ? ` ${plur(unit, count)}` : ``)

export const formatMicroseconds = (microseconds: number): string =>
  formatMicrosecondsToDigits(microseconds, 1)

export const formatMilliseconds = (milliseconds: number): string =>
  formatMillisecondsToDigits(milliseconds, 1)

/**
 * Formats a delta magnitude with one more decimal digit than
 * {@link formatMilliseconds}. Deltas are smaller than the endpoints they
 * relate, so they warrant finer resolution, and the differing precision
 * signals that endpoints and delta are rounded independently and may not sum
 * exactly.
 */
export const formatMillisecondsDelta = (milliseconds: number): string =>
  formatMillisecondsToDigits(milliseconds, 2)

const formatMicrosecondsToDigits = (
  microseconds: number,
  decimalDigits: number,
): string => {
  if (microseconds >= 1000) {
    return formatMillisecondsToDigits(microseconds / 1000, decimalDigits)
  }
  const formatted = `${microseconds.toFixed(decimalDigits)}µs`
  // A nonzero time that rounds to zero would read as absent, so clamp it to
  // the display resolution instead.
  return microseconds > 0 && formatted === `${(0).toFixed(decimalDigits)}µs`
    ? `<${10 ** -decimalDigits}µs`
    : formatted
}

const formatMillisecondsToDigits = (
  milliseconds: number,
  decimalDigits: number,
): string =>
  // A nonzero time that pretty-ms would round to `0ms` reads as absent, so
  // drop down to microseconds instead.
  milliseconds > 0 && milliseconds < 0.5 * 10 ** -decimalDigits
    ? formatMicrosecondsToDigits(milliseconds * 1000, decimalDigits)
    : prettyMilliseconds(milliseconds, {
        secondsDecimalDigits: decimalDigits + 1,
        millisecondsDecimalDigits: decimalDigits,
        unitCount: 2,
      })

export const formatBytes = (bytes: number): string =>
  prettyBytes(bytes, prettyBytesOptions)

/**
 * Formats a delta magnitude exactly at the unit pretty-bytes picks for it,
 * rather than at {@link formatBytes}' three significant digits. Deltas are
 * smaller than the endpoints they relate, so they warrant finer resolution,
 * and the differing precision signals that endpoints and delta are rounded
 * independently and may not sum exactly.
 */
export const formatBytesDelta = (bytes: number): string =>
  prettyBytes(bytes, { ...prettyBytesOptions, maximumFractionDigits: 3 })

const prettyBytesOptions: PrettyBytesOptions = {
  nonBreakingSpace: true,
  binary: true,
}

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
    : formatSigned(change, magnitude)
}

export const formatSigned = (value: number, formatted: string): string => {
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
 *
 * {@link formatDeltaMagnitude} should format at delta precision (e.g.
 * {@link formatBytesDelta}) rather than at endpoint precision.
 */
export const formatChange = (
  base: number,
  current: number,
  formatDeltaMagnitude: (magnitude: number) => string,
): string => {
  if (base === current) {
    return ``
  }
  const delta = current - base
  return ` (${formatSigned(delta, formatDeltaMagnitude(Math.abs(delta)))}, ${formatPercentChange(
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

export const uncapitalizeFirst = (string: string): string =>
  string.length === 0 ? string : string[0]!.toLowerCase() + string.slice(1)
