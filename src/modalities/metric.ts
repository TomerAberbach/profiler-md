import plur from 'plur'

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

/**
 * Which direction of change in a metric's value is an improvement.
 *
 * A profiler records what a program consumed, so a smaller value is a better
 * one for every unit this package recognizes. `increase` is for a metric
 * measuring something a program produces, and `unknown` for a metric whose
 * emitter named a unit this package cannot classify, where a diff states the
 * direction of each change and calls neither better or worse.
 */
export type MetricImprovement = `decrease` | `increase` | `unknown`

/** A metric measured in a profile. */
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
       * names the unit in table headers.
       */
      type: `count`

      /**
       * The singular noun following a count in prose, pluralized by the count
       * (e.g. `cycle` → "84 cycles"). For a metric counting occurrences of the
       * event its verb already names, use `time` → "slept 84 times".
       */
      proseUnit: string
    }
) & {
  phrases: MetricPhrases

  /** Which direction of change in this metric's value is an improvement. */
  improvement: MetricImprovement
}

/** A metric formatted as a bare count. */
export type CountMetric = Extract<Metric, { type: `count` }>

/** Returns {@link metric} rephrased, keeping its type and unit. */
export const metricWithPhrases = <M extends Metric>(
  metric: M,
  phrases: MetricPhrases,
): M => ({ ...metric, phrases })

/** Options for {@link countMetricOf}. */
export type CountMetricOptions = {
  /**
   * Which direction of change in the count is an improvement.
   *
   * What one occurrence is decides it: an occurrence the profiled program
   * incurs is a cost, so fewer of them is an improvement, while an occurrence
   * it achieves (a cache hit, a completed request) improves as it grows.
   */
  improvement: MetricImprovement
}

/**
 * The metric for a count of things, named by the singular noun for one of them
 * (e.g. `entry`, `object`, `contention`), phrased as "recorded".
 *
 * A profiler that counts occurrences of a named event instead of sampling the
 * call stack records them under that event's noun, so the output states no
 * rate per a sample the profiler never took.
 */
export const countMetricOf = (
  noun: string,
  { improvement }: CountMetricOptions,
): CountMetric => {
  const plural = plur(noun, 2)
  return {
    type: `count`,
    proseUnit: noun,
    improvement,
    phrases: {
      titleNoun: noun,
      columnNoun: plural,
      pastTenseVerb: `recorded`,
      pastParticipleVerbPhrase: `${plural} recorded`,
    },
  }
}

/**
 * Returns whether two metrics measure the same thing in the same unit, and rank
 * a change in it the same way.
 *
 * Two metrics disagreeing on which direction is an improvement measure
 * different things, whatever their units, since a diff pairing them would rank
 * every change by one side's direction alone.
 */
export const metricsEqual = (left: Metric, right: Metric): boolean => {
  if (
    left.type !== right.type ||
    left.improvement !== right.improvement ||
    !phrasesEqual(left.phrases, right.phrases)
  ) {
    return false
  }

  switch (left.type) {
    case `time`:
      return left.milliseconds === (right as typeof left).milliseconds
    case `size`:
      return left.bytes === (right as typeof left).bytes
    case `count`:
      return left.proseUnit === (right as typeof left).proseUnit
  }
}

const phrasesEqual = (left: MetricPhrases, right: MetricPhrases): boolean =>
  left.titleNoun === right.titleNoun &&
  left.columnNoun === right.columnNoun &&
  left.pastTenseVerb === right.pastTenseVerb &&
  left.pastParticipleVerbPhrase === right.pastParticipleVerbPhrase

/** A metric measured in both the base and current profiles. */
export type DiffMetric = {
  /** The metric common to both profiles. */
  metric: Metric

  /** The metric's index in the base profile's metrics. */
  baseIndex: number

  /** The metric's index in the current profile's metrics. */
  currentIndex: number
}

/**
 * Returns the metrics present in both {@link baseMetrics} and
 * {@link currentMetrics}, along with each metric's index in both arrays.
 */
export const matchDiffedMetrics = (
  baseMetrics: Metric[],
  currentMetrics: Metric[],
): DiffMetric[] => {
  const matchedMetrics: DiffMetric[] = []
  for (let baseIndex = 0; baseIndex < baseMetrics.length; baseIndex++) {
    for (
      let currentIndex = 0;
      currentIndex < currentMetrics.length;
      currentIndex++
    ) {
      if (
        metricsEqual(baseMetrics[baseIndex]!, currentMetrics[currentIndex]!)
      ) {
        matchedMetrics.push({
          metric: baseMetrics[baseIndex]!,
          baseIndex,
          currentIndex,
        })
        break
      }
    }
  }
  return matchedMetrics
}
