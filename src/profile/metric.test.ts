import { describe, expect, it } from 'vitest'
import { determineMetric } from './metric.ts'

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

  it(`returns custom metric for unknown name and unit`, () => {
    const metric = determineMetric({ name: `my_metric`, unit: `widgets` })

    expect(metric).toMatchObject({
      type: `custom`,
      unit: `widgets`,
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
      unit: `count`,
      phrases: { titleNoun: `count`, columnNoun: `count` },
    })
  })
})
