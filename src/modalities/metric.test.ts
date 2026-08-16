import { describe, expect, it } from 'vitest'
import { countMetricOf, metricsEqual } from './metric.ts'
import {
  ALLOCATED_HEAP_METRIC,
  BYTES_METRIC,
  NANOSECONDS_METRIC,
  RETAINED_HEAP_METRIC,
  SECONDS_METRIC,
} from './metrics.ts'

describe(`metricsEqual`, () => {
  it.each([
    {
      scenario: `identical metrics`,
      left: NANOSECONDS_METRIC,
      right: NANOSECONDS_METRIC,
    },
    {
      scenario: `distinct objects with the same type, unit, and phrases`,
      left: ALLOCATED_HEAP_METRIC,
      right: ALLOCATED_HEAP_METRIC,
    },
    {
      scenario: `custom metrics with the same unit and phrases`,
      left: countMetricOf(`widget`, { improvement: `decrease` }),
      right: countMetricOf(`widget`, { improvement: `decrease` }),
    },
  ])(`returns true for $scenario`, ({ left, right }) => {
    expect(metricsEqual(left, right)).toBe(true)
  })

  it.each([
    {
      scenario: `different types`,
      left: NANOSECONDS_METRIC,
      right: BYTES_METRIC,
    },
    {
      scenario: `the same type but a different unit scale`,
      left: NANOSECONDS_METRIC,
      right: SECONDS_METRIC,
    },
    {
      scenario: `the same type and unit but different phrases`,
      left: ALLOCATED_HEAP_METRIC,
      right: RETAINED_HEAP_METRIC,
    },
    {
      scenario: `custom metrics with different units`,
      left: countMetricOf(`widget`, { improvement: `decrease` }),
      right: countMetricOf(`gadget`, { improvement: `decrease` }),
    },
    {
      scenario: `the same unit and phrases but different improvement directions`,
      left: countMetricOf(`widget`, { improvement: `decrease` }),
      right: countMetricOf(`widget`, { improvement: `increase` }),
    },
  ])(`returns false for $scenario`, ({ left, right }) => {
    expect(metricsEqual(left, right)).toBe(false)
  })
})
