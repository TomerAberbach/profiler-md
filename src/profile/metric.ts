/** A metric sampled over time in a profile. */
export type Metric =
  | {
      type: `time`

      /** The number of milliseconds this time unit takes up. */
      milliseconds: number
    }
  | {
      type: `size`

      /** The number of bytes this size unit takes up. */
      bytes: number
    }
  | {
      type: `custom`

      /** A name describing the metric. */
      name: string

      /** The unit of measurement for the metric. */
      unit: string
    }

export const determineMetric = ({
  name,
  unit,
}: {
  name: string
  unit: string
}): Metric => METRICS.get(unit.toLowerCase()) ?? { type: `custom`, name, unit }

export const NANOSECONDS: Metric = { type: `time`, milliseconds: 1e-6 }
export const MICROSECONDS: Metric = { type: `time`, milliseconds: 0.001 }
export const MILLISECONDS: Metric = { type: `time`, milliseconds: 1 }
export const SECONDS: Metric = { type: `time`, milliseconds: 1000 }

export const BYTES: Metric = { type: `size`, bytes: 1 }
export const KILOBYTES: Metric = { type: `size`, bytes: 1 << 10 }
export const MEGABYTES: Metric = { type: `size`, bytes: 1 << 20 }
export const GIGABYTES: Metric = { type: `size`, bytes: 1 << 30 }

const METRICS: ReadonlyMap<string, Metric> = new Map<string, Metric>([
  [`nanoseconds`, NANOSECONDS],
  [`nanosecond`, NANOSECONDS],
  [`nanos`, NANOSECONDS],
  [`ns`, NANOSECONDS],

  [`microseconds`, MICROSECONDS],
  [`microsecond`, MICROSECONDS],
  [`micros`, MICROSECONDS],
  [`us`, MICROSECONDS],
  [`μs`, MICROSECONDS],

  [`milliseconds`, MILLISECONDS],
  [`millisecond`, MILLISECONDS],
  [`millis`, MILLISECONDS],
  [`ms`, MILLISECONDS],

  [`seconds`, SECONDS],
  [`second`, SECONDS],
  [`secs`, SECONDS],
  [`sec`, SECONDS],
  [`s`, SECONDS],

  [`bytes`, BYTES],
  [`byte`, BYTES],
  [`b`, BYTES],

  [`kilobytes`, KILOBYTES],
  [`kilobyte`, KILOBYTES],
  [`kbytes`, KILOBYTES],
  [`kbyte`, KILOBYTES],
  [`kb`, KILOBYTES],

  [`megabytes`, MEGABYTES],
  [`megabyte`, MEGABYTES],
  [`mbytes`, MEGABYTES],
  [`mbyte`, MEGABYTES],
  [`mb`, MEGABYTES],

  [`gigabytes`, GIGABYTES],
  [`gigabyte`, GIGABYTES],
  [`gbytes`, GIGABYTES],
  [`gbyte`, GIGABYTES],
  [`gb`, GIGABYTES],
])
