import { describe, expect, test } from 'vitest'
import { normalizeProfileToMdOptions } from '../options.ts'
import type { AggregatedProfile } from './aggregate.ts'
import { ProfileAggregator } from './aggregate.ts'
import { diffAggregatedProfiles } from './diff.ts'
import { BYTES, MICROSECONDS, MILLISECONDS } from './metric.ts'
import type { Metric } from './metric.ts'

const defaultOptions = normalizeProfileToMdOptions({ baseURL: `/project` })

const makeProfile = (
  metrics: Metric[],
  functions: {
    name: string
    url?: string
    line?: number
    selfValues: number[]
    selfSampleCount: number
  }[],
): AggregatedProfile => {
  const options = normalizeProfileToMdOptions({ baseURL: `/project` })
  const normalized = functions.map(func => ({
    name: func.name,
    location: func.url ? { urlOrPath: func.url, line: func.line } : undefined,
  }))
  const aggregator = new ProfileAggregator(
    metrics,
    normalized,
    options,
    // The forced origin is immaterial since these entries have no
    // origin-specific signal.
    { format: `v8-cpu-profile`, origin: `unknown` },
  )

  for (const [index, func] of functions.entries()) {
    for (let i = 0; i < func.selfSampleCount; i++) {
      aggregator.addSample({
        values: func.selfValues.map(val => val / func.selfSampleCount),
        frameIndices: [index],
      })
    }
  }

  return aggregator.aggregate()
}

const simpleProfile = (
  selfValue: number,
  sampleCount: number,
): AggregatedProfile =>
  makeProfile(
    [MICROSECONDS],
    [
      {
        name: `funcA`,
        url: `file:///project/src/a.ts`,
        line: 10,
        selfValues: [selfValue],
        selfSampleCount: sampleCount,
      },
    ],
  )

describe(`diffAggregatedProfiles`, () => {
  test(`identical profiles produce zero deltas`, () => {
    const profile = simpleProfile(100, 10)
    const diff = diffAggregatedProfiles(profile, profile, defaultOptions)

    expect(diff.metrics).toHaveLength(1)
    expect(diff.functions).toHaveLength(1)
    const { baseIndex, currentIndex } = diff.metrics[0]!
    const { base, current } = diff.functions[0]!
    expect(current!.selfValues[currentIndex]).toBe(base!.selfValues[baseIndex])
    expect(current!.totalValues[currentIndex]).toBe(
      base!.totalValues[baseIndex],
    )
  })

  test(`function only in base has no current side`, () => {
    const base = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [100],
          selfSampleCount: 5,
        },
      ],
    )
    const current = makeProfile([MICROSECONDS], [])

    const diff = diffAggregatedProfiles(base, current, defaultOptions)
    const funcA = diff.functions.find(fn => fn.name === `funcA`)!

    expect(funcA.base?.selfSampleCount).toBe(5)
    expect(funcA.current).toBeUndefined()
  })

  test(`function only in current has no base side`, () => {
    const base = makeProfile([MICROSECONDS], [])
    const current = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          selfValues: [200],
          selfSampleCount: 10,
        },
      ],
    )

    const diff = diffAggregatedProfiles(base, current, defaultOptions)
    const funcB = diff.functions.find(fn => fn.name === `funcB`)!

    expect(funcB.base).toBeUndefined()
    expect(funcB.current?.selfSampleCount).toBe(10)
  })

  test(`intersects metrics with partial overlap`, () => {
    const base = makeProfile(
      [MICROSECONDS, BYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [100, 500],
          selfSampleCount: 5,
        },
      ],
    )
    const current = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [200],
          selfSampleCount: 10,
        },
      ],
    )

    const diff = diffAggregatedProfiles(base, current, defaultOptions)

    expect(diff.metrics).toHaveLength(1)
    expect(diff.metrics[0]!.metric.type).toBe(`time`)
  })

  test(`throws on no matching metrics`, () => {
    const base = makeProfile(
      [BYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [500],
          selfSampleCount: 5,
        },
      ],
    )
    const current = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [200],
          selfSampleCount: 10,
        },
      ],
    )

    expect(() => diffAggregatedProfiles(base, current, defaultOptions)).toThrow(
      `no matching metrics`,
    )
  })

  test(`matches functions by name + URL ignoring line/column`, () => {
    const base = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfValues: [100],
          selfSampleCount: 5,
        },
      ],
    )
    const current = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 20,
          selfValues: [200],
          selfSampleCount: 10,
        },
      ],
    )

    const diff = diffAggregatedProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(1)
    expect(diff.functions[0]!.base?.selfSampleCount).toBe(5)
    expect(diff.functions[0]!.current?.selfSampleCount).toBe(10)
  })

  test(`matches functions whose locations differ only by a build hash`, () => {
    // The default `matchEntry` strips Cargo build-script and rustc commit hashes
    // so the same function matches across builds even though its path embeds a
    // per-build hash.
    const cargo = (hash: string) =>
      `file:///app/target/release/build/web-compiler-${hash}/out/parser.rs`
    const rustc = (hash: string) =>
      `file:///rustc/${hash}/library/std/src/rt.rs`
    const base = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `parse`,
          url: cargo(`a`.repeat(16)),
          selfValues: [100],
          selfSampleCount: 5,
        },
        {
          name: `rt`,
          url: rustc(`a`.repeat(40)),
          selfValues: [100],
          selfSampleCount: 5,
        },
      ],
    )
    const current = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `parse`,
          url: cargo(`b`.repeat(16)),
          selfValues: [200],
          selfSampleCount: 10,
        },
        {
          name: `rt`,
          url: rustc(`b`.repeat(40)),
          selfValues: [200],
          selfSampleCount: 10,
        },
      ],
    )

    const diff = diffAggregatedProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(2)
    for (const name of [`parse`, `rt`]) {
      const fn = diff.functions.find(func => func.name === name)!
      expect(fn.base?.selfSampleCount).toBe(5)
      expect(fn.current?.selfSampleCount).toBe(10)
    }
  })

  test(`matches functions without locations by name`, () => {
    const base = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `(garbage collector)`,
          selfValues: [100],
          selfSampleCount: 5,
        },
      ],
    )
    const current = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `(garbage collector)`,
          selfValues: [50],
          selfSampleCount: 3,
        },
      ],
    )

    const diff = diffAggregatedProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(1)
    expect(diff.functions[0]!.name).toBe(`(garbage collector)`)
    expect(diff.functions[0]!.base?.selfSampleCount).toBe(5)
    expect(diff.functions[0]!.current?.selfSampleCount).toBe(3)
  })

  test(`merges category metrics from both profiles`, () => {
    const base = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [100],
          selfSampleCount: 5,
        },
      ],
    )
    const current = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [200],
          selfSampleCount: 10,
        },
      ],
    )

    const diff = diffAggregatedProfiles(base, current, defaultOptions)

    expect(diff.categoryToMetrics.size).toBeGreaterThan(0)
    const ours = diff.categoryToMetrics.get(`ours`)
    expect(ours).toBeDefined()
    expect(ours!.base?.sampleCount).toBe(5)
    expect(ours!.current?.sampleCount).toBe(10)
  })

  test(`throws on metrics with matching types but different units`, () => {
    const base = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [100],
          selfSampleCount: 5,
        },
      ],
    )
    const current = makeProfile(
      [MILLISECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [100],
          selfSampleCount: 5,
        },
      ],
    )

    expect(() => diffAggregatedProfiles(base, current, defaultOptions)).toThrow(
      `no matching metrics`,
    )
  })
})
