import { describe, expect, test } from 'vitest'
import { metricColumnNouns } from './measure.ts'
import { countMetricOf, metricWithPhrases } from './metric.ts'
import { ALLOCATED_HEAP_METRIC, RETAINED_HEAP_METRIC } from './metrics.ts'

describe(`metricColumnNouns`, () => {
  test(`heads metrics sharing a noun by their verbs`, () => {
    expect(
      metricColumnNouns([ALLOCATED_HEAP_METRIC, RETAINED_HEAP_METRIC]),
    ).toStrictEqual([`Allocated`, `Retained`])
  })

  test(`heads a metric by its verb when only a metric headed by its noun shares the verb`, () => {
    const objects = metricWithPhrases(
      countMetricOf(`object`, { improvement: `decrease` }),
      {
        titleNoun: `allocated objects`,
        columnNoun: `objects`,
        pastTenseVerb: `allocated`,
        pastParticipleVerbPhrase: `objects allocated`,
      },
    )

    expect(
      metricColumnNouns([ALLOCATED_HEAP_METRIC, RETAINED_HEAP_METRIC, objects]),
    ).toStrictEqual([`Allocated`, `Retained`, `Objects`])
  })
})
