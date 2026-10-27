import { describe, expect, test } from 'vitest'
import { countMetricOf } from './metric.ts'
import { NANOSECONDS_METRIC, parseMetric, SAMPLES } from './metrics.ts'

describe(`parseMetric`, () => {
  test(`returns named size metric for alloc_space`, () => {
    const metric = parseMetric({ name: `alloc_space`, unit: `bytes` })

    expect(metric).toMatchObject({
      type: `size`,
      bytes: 1,
      phrases: { titleNoun: `allocated heap`, pastTenseVerb: `allocated` },
    })
  })

  test(`returns named size metric for inuse_space`, () => {
    const metric = parseMetric({ name: `inuse_space`, unit: `bytes` })

    expect(metric).toMatchObject({
      type: `size`,
      bytes: 1,
      phrases: {
        titleNoun: `retained heap`,
        pastTenseVerb: `retained`,
        pastParticipleVerbPhrase: `bytes retained`,
      },
    })
  })

  test(`derives byte scale from unit, phrases from value-type name`, () => {
    const metric = parseMetric({ name: `alloc_space`, unit: `kilobytes` })

    expect(metric).toMatchObject({
      type: `size`,
      bytes: 1024,
      phrases: { titleNoun: `allocated heap`, pastTenseVerb: `allocated` },
    })
  })

  test(`returns default size metric for unknown value-type name`, () => {
    const metric = parseMetric({ name: `foo`, unit: `bytes` })

    expect(metric).toMatchObject({
      type: `size`,
      bytes: 1,
      phrases: { titleNoun: `heap`, pastTenseVerb: `allocated` },
    })
  })

  test(`returns time metric for known time unit`, () => {
    const metric = parseMetric({ name: `foo`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
    })
  })

  test(`returns contention phrases for pprof block/mutex delay`, () => {
    const metric = parseMetric({ name: `delay`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
      phrases: { titleNoun: `contention`, pastTenseVerb: `blocked` },
    })
  })

  test(`returns wall time phrases for the wall metric name`, () => {
    const metric = parseMetric({ name: `wall`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
      phrases: { titleNoun: `wall time`, pastTenseVerb: `took` },
    })
  })

  test(`returns generic sampling phrases when the name is just a time unit`, () => {
    const metric = parseMetric({ name: `nanoseconds`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
      phrases: { titleNoun: `sampling`, pastTenseVerb: `took` },
    })
  })

  test(`keeps CPU phrases for the cpu metric name`, () => {
    const metric = parseMetric({ name: `cpu`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
      phrases: { titleNoun: `CPU`, pastTenseVerb: `took` },
    })
  })

  test(`returns custom metric for unknown name and unit`, () => {
    const metric = parseMetric({ name: `my_metric`, unit: `widgets` })

    expect(metric).toMatchObject({
      type: `count`,
      proseUnit: `widgets`,
      phrases: {
        titleNoun: `my_metric`,
        columnNoun: `my_metric`,
        pastTenseVerb: `recorded`,
        pastParticipleVerbPhrase: `my_metric recorded`,
      },
    })
  })

  test(`returns count metric for "none" unit`, () => {
    const metric = parseMetric({ name: `foo`, unit: `none` })

    expect(metric).toMatchObject({
      type: `count`,
      proseUnit: `occurrence`,
      phrases: { titleNoun: `count`, columnNoun: `occurrences` },
    })
  })

  test.each([
    { scenario: `a time unit`, unit: `nanoseconds`, improvement: `decrease` },
    { scenario: `a size unit`, unit: `bytes`, improvement: `decrease` },
    {
      scenario: `an unrecognized unit`,
      unit: `widgets`,
      improvement: `unknown`,
    },
    { scenario: `the "none" unit`, unit: `none`, improvement: `unknown` },
  ])(
    `derives $improvement as the improvement for $scenario`,
    ({ unit, improvement }) => {
      expect(parseMetric({ name: `foo`, unit }).improvement).toBe(improvement)
    },
  )

  test(`takes the improvement direction the caller states over the unit's`, () => {
    const metric = parseMetric({
      name: `cache hit`,
      unit: `hit`,
      improvement: `increase`,
    })

    expect(metric.improvement).toBe(`increase`)
  })
})

describe(`improvement direction`, () => {
  test(`is a decrease for a count of what a profiler recorded`, () => {
    expect(
      countMetricOf(`contention`, { improvement: `decrease` }).improvement,
    ).toBe(`decrease`)
    expect(SAMPLES.improvement).toBe(`decrease`)
    expect(NANOSECONDS_METRIC.improvement).toBe(`decrease`)
  })
})
