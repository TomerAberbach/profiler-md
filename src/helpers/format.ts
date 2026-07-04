import plur from 'plur'
import prettyBytes from 'pretty-bytes'
import prettyMilliseconds from 'pretty-ms'

export const formatCount = (count: number, unit?: string): string =>
  count.toLocaleString(`en-US`) + (unit ? ` ${plur(unit, count)}` : ``)

export const formatMicroseconds = (microseconds: number): string => {
  if (microseconds >= 1000) {
    return formatMilliseconds(microseconds / 1000)
  }
  const formatted = `${microseconds.toFixed(1)}µs`
  // A nonzero time that rounds to `0.0µs` would read as absent, so clamp it to
  // the display resolution instead.
  return microseconds > 0 && formatted === `0.0µs` ? `<0.1µs` : formatted
}

export const formatMilliseconds = (milliseconds: number): string =>
  // A nonzero time that pretty-ms would round to `0ms` reads as absent, so
  // drop down to microseconds instead.
  milliseconds > 0 && milliseconds < 0.05
    ? formatMicroseconds(milliseconds * 1000)
    : prettyMilliseconds(milliseconds, {
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
 *
 * The delta is computed from the endpoints as displayed (when both format to a
 * single shared unit), not from the raw values: `101.6ms → 102.2ms (+0.5ms)`
 * would read as an arithmetic error even though the raw delta rounds to 0.5.
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
  let magnitude = format(Math.abs(delta))

  const displayedBase = parseSingleUnit(format(base))
  const displayedCurrent = parseSingleUnit(format(current))
  if (displayedBase && displayedBase.unit === displayedCurrent?.unit) {
    const decimals = Math.max(displayedBase.decimals, displayedCurrent.decimals)
    const displayedDelta = Number(
      (displayedCurrent.value - displayedBase.value).toFixed(decimals),
    )
    if (displayedDelta === 0) {
      return ``
    }
    magnitude = `${Math.abs(displayedDelta).toLocaleString(`en-US`, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${displayedBase.unit}`
  }

  return ` (${formatDelta(delta, magnitude)}, ${formatPercentChange(
    base,
    current,
  )})`
}

/**
 * Parses a single-unit formatted value like `101.6ms`, `3.29 GB`, or `1,650`
 * into its numeric part, displayed decimal places, and unit suffix. Returns
 * `undefined` for multi-unit (`1m 5s`) or clamped (`<0.1µs`) renderings, whose
 * displayed arithmetic can't be reconstructed.
 */
const parseSingleUnit = (
  formatted: string,
): { value: number; decimals: number; unit: string } | undefined => {
  const match =
    /^(?<integer>\d{1,3}(?:,\d{3})*)(?:\.(?<fraction>\d+))?(?<unit>[\s ]?[a-zA-Zµ%]*)$/u.exec(
      formatted,
    )
  if (!match) {
    return undefined
  }
  const { integer, fraction, unit } = match.groups!
  return {
    value: Number(`${integer!.replaceAll(`,`, ``)}.${fraction ?? `0`}`),
    decimals: fraction?.length ?? 0,
    unit: unit!,
  }
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
