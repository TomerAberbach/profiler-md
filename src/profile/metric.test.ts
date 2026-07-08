import { describe, expect, it } from 'vitest'
import {
  BYTES,
  determineMetric,
  metricsEqual,
  NANOSECONDS,
  SECONDS,
} from './metric.ts'

describe(`determineMetric`, () => {
  it(`returns named size metric for alloc_space`, () => {
    const metric = determineMetric({ name: `alloc_space`, unit: `bytes` })

    expect(metric).toMatchObject({
      type: `size`,
      bytes: 1,
      phrases: { titleNoun: `allocated heap`, pastTenseVerb: `allocated` },
    })
  })

  it(`returns named size metric for inuse_space`, () => {
    const metric = determineMetric({ name: `inuse_space`, unit: `bytes` })

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

  it(`derives byte scale from unit, phrases from value-type name`, () => {
    const metric = determineMetric({ name: `alloc_space`, unit: `kilobytes` })

    expect(metric).toMatchObject({
      type: `size`,
      bytes: 1024,
      phrases: { titleNoun: `allocated heap`, pastTenseVerb: `allocated` },
    })
  })

  it(`returns default size metric for unknown value-type name`, () => {
    const metric = determineMetric({ name: `foo`, unit: `bytes` })

    expect(metric).toMatchObject({
      type: `size`,
      bytes: 1,
      phrases: { titleNoun: `heap`, pastTenseVerb: `allocated` },
    })
  })

  it(`returns time metric for known time unit`, () => {
    const metric = determineMetric({ name: `foo`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
    })
  })

  it(`returns contention phrases for pprof block/mutex delay`, () => {
    const metric = determineMetric({ name: `delay`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
      phrases: { titleNoun: `contention`, pastTenseVerb: `blocked` },
    })
  })

  it(`returns wall time phrases for wall value type`, () => {
    const metric = determineMetric({ name: `wall`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
      phrases: { titleNoun: `wall time`, pastTenseVerb: `took` },
    })
  })

  it(`returns generic sampling phrases when the name is just a time unit`, () => {
    const metric = determineMetric({ name: `nanoseconds`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
      phrases: { titleNoun: `sampling`, pastTenseVerb: `took` },
    })
  })

  it(`keeps CPU phrases for the cpu value type`, () => {
    const metric = determineMetric({ name: `cpu`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
      phrases: { titleNoun: `CPU`, pastTenseVerb: `took` },
    })
  })

  it(`returns custom metric for unknown name and unit`, () => {
    const metric = determineMetric({ name: `my_metric`, unit: `widgets` })

    expect(metric).toMatchObject({
      type: `custom`,
      phrases: {
        titleNoun: `my_metric`,
        columnNoun: `my_metric`,
        pastTenseVerb: `recorded`,
        pastParticipleVerbPhrase: `my_metric recorded`,
      },
    })
  })

  it(`returns count metric for "none" unit`, () => {
    const metric = determineMetric({ name: `foo`, unit: `none` })

    expect(metric).toMatchObject({
      type: `custom`,
      phrases: { titleNoun: `count`, columnNoun: `counts` },
    })
  })
})

describe(`metricsEqual`, () => {
  it.each([
    {
      scenario: `identical metrics`,
      left: NANOSECONDS,
      right: NANOSECONDS,
    },
    {
      scenario: `distinct objects with the same type, unit, and phrases`,
      left: determineMetric({ name: `alloc_space`, unit: `bytes` }),
      right: determineMetric({ name: `alloc_space`, unit: `bytes` }),
    },
    {
      scenario: `custom metrics with the same unit and phrases`,
      left: determineMetric({ name: `widgets`, unit: `widgets` }),
      right: determineMetric({ name: `widgets`, unit: `widgets` }),
    },
  ])(`returns true for $scenario`, ({ left, right }) => {
    expect(metricsEqual(left, right)).toBe(true)
  })

  it.each([
    {
      scenario: `different types`,
      left: NANOSECONDS,
      right: BYTES,
    },
    {
      scenario: `the same type but a different unit scale`,
      left: NANOSECONDS,
      right: SECONDS,
    },
    {
      scenario: `the same type and unit but different phrases`,
      left: determineMetric({ name: `alloc_space`, unit: `bytes` }),
      right: determineMetric({ name: `inuse_space`, unit: `bytes` }),
    },
    {
      scenario: `custom metrics with different units`,
      left: determineMetric({ name: `widgets`, unit: `widgets` }),
      right: determineMetric({ name: `gadgets`, unit: `gadgets` }),
    },
  ])(`returns false for $scenario`, ({ left, right }) => {
    expect(metricsEqual(left, right)).toBe(false)
  })
})
