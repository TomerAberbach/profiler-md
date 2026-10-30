import { formatPercent } from '../helpers/format.ts'

/**
 * The ` (Δ, %)` suffix annotating a base-to-current change, or an empty string
 * when the value is unchanged. A zero delta reads as a measurement rather than a
 * change, so it's omitted alongside the arrow that has already collapsed to a
 * single value.
 *
 * {@link formatDeltaMagnitude} should format at delta precision (e.g.
 * `formatBytesDelta`) rather than at endpoint precision.
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
