/** Phrases that can be used in prose related to a metric. */
export type MetricPhrases = {
  /** A noun to use in headings, like "CPU", "heap", etc. */
  titleNoun: string

  /** A noun to use in columns like "time", "size", etc. */
  columnNoun: string

  /** A verb to use in prose like "took", "allocated", etc. */
  pastTenseVerb: string

  /** A verb phrase to use in prose like "time spent", "bytes allocated", etc. */
  pastParticipleVerbPhrase: string
}

/** A metric sampled over time in a profile. */
export type Metric = (
  | {
      type: `time`

      /** The number of milliseconds this time unit takes up. */
      milliseconds: number
    }
  | {
      type: `size`

      /** The number of bytes this space unit takes up. */
      bytes: number
    }
  | {
      type: `custom`

      /** The unit for the metric. */
      unit: string
    }
) & { phrases: MetricPhrases }

export const determineMetric = ({
  name,
  unit,
}: {
  name: string
  unit: string
}): Metric => {
  const metric = UNIT_TO_METRIC.get(unit.toLowerCase()) ?? {
    type: `custom`,
    unit,
    phrases: {
      titleNoun: name,
      columnNoun: name,
      pastTenseVerb: `recorded`,
      pastParticipleVerbPhrase: `${name} recorded`,
    },
  }

  const phrases = METRIC_TYPE_AND_NAME_TO_PHRASES.get(metric.type)?.get(
    name.toLowerCase(),
  )
  if (phrases) {
    return { ...metric, phrases }
  }

  return metric
}

const TIME_PHRASES: MetricPhrases = {
  titleNoun: `CPU`,
  columnNoun: `time`,
  pastTenseVerb: `took`,
  pastParticipleVerbPhrase: `time spent`,
}
const SIZE_PHRASES: MetricPhrases = {
  titleNoun: `heap`,
  columnNoun: `size`,
  pastTenseVerb: `allocated`,
  pastParticipleVerbPhrase: `bytes allocated`,
}

export const NANOSECONDS: Metric = {
  type: `time`,
  milliseconds: 1e-6,
  phrases: TIME_PHRASES,
}
export const MICROSECONDS: Metric = {
  type: `time`,
  milliseconds: 0.001,
  phrases: TIME_PHRASES,
}
export const MILLISECONDS: Metric = {
  type: `time`,
  milliseconds: 1,
  phrases: TIME_PHRASES,
}
export const SECONDS: Metric = {
  type: `time`,
  milliseconds: 1000,
  phrases: TIME_PHRASES,
}

export const BYTES: Metric = {
  type: `size`,
  bytes: 1,
  phrases: SIZE_PHRASES,
}
export const KILOBYTES: Metric = {
  type: `size`,
  bytes: 1 << 10,
  phrases: SIZE_PHRASES,
}
export const MEGABYTES: Metric = {
  type: `size`,
  bytes: 1 << 20,
  phrases: SIZE_PHRASES,
}
export const GIGABYTES: Metric = {
  type: `size`,
  bytes: 1 << 30,
  phrases: SIZE_PHRASES,
}

const UNIT_TO_METRIC: ReadonlyMap<string, Metric> = new Map<string, Metric>([
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

  [
    `none`,
    {
      type: `custom`,
      unit: `count`,
      phrases: {
        titleNoun: `count`,
        columnNoun: `count`,
        pastTenseVerb: `recorded`,
        pastParticipleVerbPhrase: `count recorded`,
      },
    },
  ],
])

const METRIC_TYPE_AND_NAME_TO_PHRASES: ReadonlyMap<
  Metric[`type`],
  ReadonlyMap<string, MetricPhrases>
> = new Map([
  [
    `size`,
    new Map<string, MetricPhrases>([
      [
        `alloc_space`,
        {
          titleNoun: `allocated heap`,
          columnNoun: `size`,
          pastTenseVerb: `allocated`,
          pastParticipleVerbPhrase: `bytes allocated`,
        },
      ],
      [
        `inuse_space`,
        {
          titleNoun: `retained heap`,
          columnNoun: `size`,
          pastTenseVerb: `retained`,
          pastParticipleVerbPhrase: `bytes retained`,
        },
      ],
    ]),
  ],
])
