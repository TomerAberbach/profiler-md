import { metricWithPhrases } from './metric.ts'
import type { CountMetric, Metric, MetricPhrases } from './metric.ts'

/** What one count measures for a profiler that samples the call stack. */
export const SAMPLES: CountMetric = {
  type: `count`,
  proseUnit: `sample`,
  phrases: {
    titleNoun: `sampling`,
    columnNoun: `samples`,
    pastTenseVerb: `collected`,
    pastParticipleVerbPhrase: `samples taken`,
  },
}

/** A count of occurrences the emitter leaves unnamed, speedscope's `none`. */
const OCCURRENCES_METRIC: CountMetric = {
  type: `count`,
  proseUnit: `time`,
  phrases: {
    titleNoun: `count`,
    columnNoun: `counts`,
    pastTenseVerb: `recorded`,
    pastParticipleVerbPhrase: `count recorded`,
  },
}

const CPU_TIME_PHRASES: MetricPhrases = {
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
const HEAP_PHRASES: MetricPhrases = {
  titleNoun: `heap`,
  columnNoun: `size`,
  pastTenseVerb: `allocated`,
  pastParticipleVerbPhrase: `bytes allocated`,
}

export const NANOSECONDS_METRIC: Metric = {
  type: `time`,
  milliseconds: 1e-6,
  phrases: CPU_TIME_PHRASES,
}
export const MICROSECONDS_METRIC: Metric = {
  type: `time`,
  milliseconds: 0.001,
  phrases: CPU_TIME_PHRASES,
}
export const MILLISECONDS_METRIC: Metric = {
  type: `time`,
  milliseconds: 1,
  phrases: CPU_TIME_PHRASES,
}
export const SECONDS_METRIC: Metric = {
  type: `time`,
  milliseconds: 1000,
  phrases: CPU_TIME_PHRASES,
}

export const BYTES_METRIC: Metric = {
  type: `size`,
  bytes: 1,
  phrases: HEAP_PHRASES,
}
const KILOBYTES_METRIC: Metric = {
  type: `size`,
  bytes: 1 << 10,
  phrases: HEAP_PHRASES,
}
export const MEGABYTES_METRIC: Metric = {
  type: `size`,
  bytes: 1 << 20,
  phrases: HEAP_PHRASES,
}
const GIGABYTES_METRIC: Metric = {
  type: `size`,
  bytes: 1 << 30,
  phrases: HEAP_PHRASES,
}

/**
 * Wall-clock time, named because a bare time unit titles a profile `sampling`.
 */
export const WALL_TIME_METRIC: Metric = metricWithPhrases(MICROSECONDS_METRIC, {
  titleNoun: `wall time`,
  columnNoun: `time`,
  pastTenseVerb: `took`,
  pastParticipleVerbPhrase: `wall time spent`,
})

/** Time spent blocked acquiring a lock. */
export const LOCK_CONTENTION_TIME_METRIC: Metric = metricWithPhrases(
  NANOSECONDS_METRIC,
  {
    titleNoun: `lock contention`,
    columnNoun: `time`,
    pastTenseVerb: `blocked`,
    pastParticipleVerbPhrase: `time blocked`,
  },
)

/** Time spent blocked in contention, as Go's block and mutex profiles record. */
const CONTENTION_TIME_METRIC: Metric = metricWithPhrases(NANOSECONDS_METRIC, {
  titleNoun: `contention`,
  columnNoun: `time`,
  pastTenseVerb: `blocked`,
  pastParticipleVerbPhrase: `time blocked`,
})

/** Bytes allocated over the profile. */
export const ALLOCATED_HEAP_METRIC: Metric = metricWithPhrases(BYTES_METRIC, {
  titleNoun: `allocated heap`,
  columnNoun: `size`,
  pastTenseVerb: `allocated`,
  pastParticipleVerbPhrase: `bytes allocated`,
})

/** Bytes allocated and still retained when the profile was captured. */
export const RETAINED_HEAP_METRIC: Metric = metricWithPhrases(BYTES_METRIC, {
  titleNoun: `retained heap`,
  columnNoun: `size`,
  pastTenseVerb: `retained`,
  pastParticipleVerbPhrase: `bytes retained`,
})

/** Bytes allocated outside the managed heap. */
export const ALLOCATED_NATIVE_MEMORY_METRIC: Metric = metricWithPhrases(
  BYTES_METRIC,
  {
    titleNoun: `allocated native memory`,
    columnNoun: `size`,
    pastTenseVerb: `allocated`,
    pastParticipleVerbPhrase: `native bytes allocated`,
  },
)

/** Bytes live at the moment the profile's total memory was highest. */
export const PEAK_MEMORY_METRIC: Metric = metricWithPhrases(BYTES_METRIC, {
  titleNoun: `peak memory`,
  columnNoun: `size`,
  pastTenseVerb: `held`,
  pastParticipleVerbPhrase: `bytes held at peak memory`,
})

/** Bytes still live when the profile ended. */
export const LEAKED_MEMORY_METRIC: Metric = metricWithPhrases(BYTES_METRIC, {
  titleNoun: `leaked memory`,
  columnNoun: `size`,
  pastTenseVerb: `leaked`,
  pastParticipleVerbPhrase: `bytes never freed`,
})

/**
 * CPU cycles, counted rather than timed, because converting cycles to time
 * needs a clock frequency the profile omits.
 */
export const CPU_CYCLES_METRIC: CountMetric = {
  type: `count`,
  proseUnit: `cycle`,
  phrases: {
    titleNoun: `CPU cycles`,
    columnNoun: `CPU cycles`,
    pastTenseVerb: `recorded`,
    pastParticipleVerbPhrase: `CPU cycles recorded`,
  },
}

/** Threads entering uninterruptible sleep, counted per entry. */
export const UNINTERRUPTIBLE_SLEEPS_METRIC: CountMetric = {
  type: `count`,
  proseUnit: `time`,
  phrases: {
    titleNoun: `uninterruptible sleep`,
    columnNoun: `sleeps`,
    pastTenseVerb: `slept`,
    pastParticipleVerbPhrase: `uninterruptible sleeps entered`,
  },
}

/** Threads entering interruptible sleep, counted per entry. */
export const INTERRUPTIBLE_SLEEPS_METRIC: CountMetric = {
  type: `count`,
  proseUnit: `time`,
  phrases: {
    titleNoun: `interruptible sleep`,
    columnNoun: `sleeps`,
    pastTenseVerb: `slept`,
    pastParticipleVerbPhrase: `interruptible sleeps entered`,
  },
}

/**
 * The metric for an emitter's own value-type name and unit.
 *
 * The unit selects the scale from {@link UNIT_METRICS}. The name selects
 * phrases from {@link NAME_PHRASES} where that table contains it. A unit
 * missing from {@link UNIT_METRICS} becomes a count in that unit, named
 * verbatim, because a string the emitter chose states no grammatical number to
 * inflect from.
 */
export const parseMetric = ({
  name,
  unit,
}: {
  name: string
  unit: string
}): Metric => {
  const metric = UNIT_METRICS.get(unit.toLowerCase()) ?? {
    type: `count`,
    proseUnit: unit,
    phrases: {
      titleNoun: name,
      columnNoun: name,
      pastTenseVerb: `recorded`,
      pastParticipleVerbPhrase: `${name} recorded`,
    },
  }
  const phrases = NAME_PHRASES.get(metric.type)?.get(name.toLowerCase())
  return phrases ? metricWithPhrases(metric, phrases) : metric
}

/**
 * The metric, with its default phrases, for each spelling of a unit that a
 * supported format's emitters write. Add a spelling when a committed input
 * writes it. What the value measures beyond its unit comes from the name.
 */
const UNIT_METRICS: ReadonlyMap<string, Metric> = new Map<string, Metric>([
  [`nanoseconds`, NANOSECONDS_METRIC],
  [`nanosecond`, NANOSECONDS_METRIC],
  [`nanos`, NANOSECONDS_METRIC],
  [`ns`, NANOSECONDS_METRIC],

  [`microseconds`, MICROSECONDS_METRIC],
  [`microsecond`, MICROSECONDS_METRIC],
  [`micros`, MICROSECONDS_METRIC],
  [`us`, MICROSECONDS_METRIC],
  [`μs`, MICROSECONDS_METRIC],

  [`milliseconds`, MILLISECONDS_METRIC],
  [`millisecond`, MILLISECONDS_METRIC],
  [`millis`, MILLISECONDS_METRIC],
  [`ms`, MILLISECONDS_METRIC],

  [`seconds`, SECONDS_METRIC],
  [`second`, SECONDS_METRIC],
  [`secs`, SECONDS_METRIC],
  [`sec`, SECONDS_METRIC],
  [`s`, SECONDS_METRIC],

  [`bytes`, BYTES_METRIC],
  [`byte`, BYTES_METRIC],
  [`b`, BYTES_METRIC],

  [`kilobytes`, KILOBYTES_METRIC],
  [`kilobyte`, KILOBYTES_METRIC],
  [`kbytes`, KILOBYTES_METRIC],
  [`kbyte`, KILOBYTES_METRIC],
  [`kb`, KILOBYTES_METRIC],

  [`megabytes`, MEGABYTES_METRIC],
  [`megabyte`, MEGABYTES_METRIC],
  [`mbytes`, MEGABYTES_METRIC],
  [`mbyte`, MEGABYTES_METRIC],
  [`mb`, MEGABYTES_METRIC],

  [`gigabytes`, GIGABYTES_METRIC],
  [`gigabyte`, GIGABYTES_METRIC],
  [`gbytes`, GIGABYTES_METRIC],
  [`gbyte`, GIGABYTES_METRIC],
  [`gb`, GIGABYTES_METRIC],

  [`none`, OCCURRENCES_METRIC],
])

/**
 * The phrases for the value-type names emitters write, for a name that states
 * more than its unit does (e.g. `alloc_space` states what the bytes are). Add a
 * name when a committed input writes it and its unit's default phrases misstate
 * it. Keyed by the metric type the phrases fit, so a name matches only the
 * units of that type. Within that type it matches every unit (e.g.
 * `alloc_space` in kilobytes keeps kilobytes).
 */
const NAME_PHRASES: ReadonlyMap<
  Metric[`type`],
  ReadonlyMap<string, MetricPhrases>
> = new Map([
  [
    `time`,
    new Map<string, MetricPhrases>([
      // A name that is only a time unit states nothing about what was
      // measured, so call it a "sampling" profile.
      ...[...UNIT_METRICS]
        .filter(([, metric]) => metric.type === `time`)
        .map(([alias]) => [alias, SAMPLING_TIME_PHRASES] as const),
      [`block_time`, LOCK_CONTENTION_TIME_METRIC.phrases],
      [`delay`, CONTENTION_TIME_METRIC.phrases],
      [`wall`, WALL_TIME_METRIC.phrases],
    ]),
  ],
  [
    `size`,
    new Map<string, MetricPhrases>([
      [`alloc_space`, ALLOCATED_HEAP_METRIC.phrases],
      [`inuse_space`, RETAINED_HEAP_METRIC.phrases],
    ]),
  ],
])
