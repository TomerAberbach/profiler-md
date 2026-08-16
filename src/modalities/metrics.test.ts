import { describe, expect, it } from 'vitest'
import { parseMetric } from './metrics.ts'

describe(`parseMetric`, () => {
  it(`returns named size metric for alloc_space`, () => {
    const metric = parseMetric({ name: `alloc_space`, unit: `bytes` })

    expect(metric).toMatchObject({
      type: `size`,
      bytes: 1,
      phrases: { titleNoun: `allocated heap`, pastTenseVerb: `allocated` },
    })
  })

  it(`returns named size metric for inuse_space`, () => {
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

  it(`derives byte scale from unit, phrases from value-type name`, () => {
    const metric = parseMetric({ name: `alloc_space`, unit: `kilobytes` })

    expect(metric).toMatchObject({
      type: `size`,
      bytes: 1024,
      phrases: { titleNoun: `allocated heap`, pastTenseVerb: `allocated` },
    })
  })

  it(`returns default size metric for unknown value-type name`, () => {
    const metric = parseMetric({ name: `foo`, unit: `bytes` })

    expect(metric).toMatchObject({
      type: `size`,
      bytes: 1,
      phrases: { titleNoun: `heap`, pastTenseVerb: `allocated` },
    })
  })

  it(`returns time metric for known time unit`, () => {
    const metric = parseMetric({ name: `foo`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
    })
  })

  it(`returns contention phrases for pprof block/mutex delay`, () => {
    const metric = parseMetric({ name: `delay`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
      phrases: { titleNoun: `contention`, pastTenseVerb: `blocked` },
    })
  })

  it(`returns wall time phrases for wall value type`, () => {
    const metric = parseMetric({ name: `wall`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
      phrases: { titleNoun: `wall time`, pastTenseVerb: `took` },
    })
  })

  it(`returns generic sampling phrases when the name is just a time unit`, () => {
    const metric = parseMetric({ name: `nanoseconds`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
      phrases: { titleNoun: `sampling`, pastTenseVerb: `took` },
    })
  })

  it(`keeps CPU phrases for the cpu value type`, () => {
    const metric = parseMetric({ name: `cpu`, unit: `nanoseconds` })

    expect(metric).toMatchObject({
      type: `time`,
      milliseconds: 1e-6,
      phrases: { titleNoun: `CPU`, pastTenseVerb: `took` },
    })
  })

  it(`returns custom metric for unknown name and unit`, () => {
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

  it(`returns count metric for "none" unit`, () => {
    const metric = parseMetric({ name: `foo`, unit: `none` })

    expect(metric).toMatchObject({
      type: `count`,
      proseUnit: `time`,
      phrases: { titleNoun: `count`, columnNoun: `counts` },
    })
  })
})
