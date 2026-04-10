export const formatPercent = (fraction: number): string =>
  `${(fraction * 100).toFixed(1)}%`

export const formatMilliseconds = (microseconds: number): string =>
  `${(microseconds / 1000).toFixed(1)}ms`

export const formatMicroseconds = (microseconds: number): string =>
  `${microseconds.toFixed(1)}µs`
