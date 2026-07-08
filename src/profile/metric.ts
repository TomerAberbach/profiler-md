/** Phrases that can be used in prose related to a metric. */
type MetricPhrases = {
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
      /**
       * A metric in a unit with no known scale, formatted as a bare count.
       * {@link MetricPhrases.columnNoun} (a plural noun, e.g. `instructions`)
       * names the unit where no column header does.
       */
      type: `custom`
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
const SAMPLING_TIME_PHRASES: MetricPhrases = {
  titleNoun: `sampling`,
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
const KILOBYTES: Metric = {
  type: `size`,
  bytes: 1 << 10,
  phrases: SIZE_PHRASES,
}
export const MEGABYTES: Metric = {
  type: `size`,
  bytes: 1 << 20,
  phrases: SIZE_PHRASES,
}
const GIGABYTES: Metric = {
  type: `size`,
  bytes: 1 << 30,
  phrases: SIZE_PHRASES,
}

/** Returns whether two metrics measure the same thing in the same unit. */
export const metricsEqual = (left: Metric, right: Metric): boolean => {
  if (left.type !== right.type || !phrasesEqual(left.phrases, right.phrases)) {
    return false
  }

  switch (left.type) {
    case `time`:
      return left.milliseconds === (right as typeof left).milliseconds
    case `size`:
      return left.bytes === (right as typeof left).bytes
    case `custom`:
      // The phrases (already compared above) carry a custom metric's unit noun.
      return true
  }
}

const phrasesEqual = (left: MetricPhrases, right: MetricPhrases): boolean =>
  left.titleNoun === right.titleNoun &&
  left.columnNoun === right.columnNoun &&
  left.pastTenseVerb === right.pastTenseVerb &&
  left.pastParticipleVerbPhrase === right.pastParticipleVerbPhrase

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
      phrases: {
        titleNoun: `count`,
        columnNoun: `counts`,
        pastTenseVerb: `recorded`,
        pastParticipleVerbPhrase: `counts recorded`,
      },
    },
  ],
])

const METRIC_TYPE_AND_NAME_TO_PHRASES: ReadonlyMap<
  Metric[`type`],
  ReadonlyMap<string, MetricPhrases>
> = new Map([
  [
    `time`,
    new Map<string, MetricPhrases>([
      // A name that is just a time unit says nothing about what was measured,
      // so just call it a "sampling" profile.
      ...[...UNIT_TO_METRIC]
        .filter(([, metric]) => metric.type === `time`)
        .map(([alias]) => [alias, SAMPLING_TIME_PHRASES] as const),
      [
        `block_time`,
        {
          titleNoun: `lock contention`,
          columnNoun: `time`,
          pastTenseVerb: `blocked`,
          pastParticipleVerbPhrase: `time blocked`,
        },
      ],
      [
        `delay`,
        {
          titleNoun: `contention`,
          columnNoun: `time`,
          pastTenseVerb: `blocked`,
          pastParticipleVerbPhrase: `time blocked`,
        },
      ],
      [
        `wall`,
        {
          titleNoun: `wall time`,
          columnNoun: `time`,
          pastTenseVerb: `took`,
          pastParticipleVerbPhrase: `wall time spent`,
        },
      ],
    ]),
  ],
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
      [
        `nativemem_space`,
        {
          titleNoun: `allocated native memory`,
          columnNoun: `size`,
          pastTenseVerb: `allocated`,
          pastParticipleVerbPhrase: `native bytes allocated`,
        },
      ],
    ]),
  ],
])
