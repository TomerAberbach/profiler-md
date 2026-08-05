import { describe, expect, test } from 'vitest'
import { resolveProfileToMdOptions } from '../../testing.ts'
import { BYTES, MICROSECONDS, MILLISECONDS } from '../metric.ts'
import { diffAggregatedSamplingProfiles } from './diff.ts'
import { makeAggregatedSamplingProfile } from './testing.ts'

const defaultOptions = resolveProfileToMdOptions({ baseURL: `/project` })

describe(`diffAggregatedSamplingProfiles`, () => {
  test(`identical profiles produce zero deltas`, () => {
    const profile = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfValues: [100],
          selfSampleCount: 10,
        },
      ],
    )

    const diff = diffAggregatedSamplingProfiles(
      profile,
      profile,
      defaultOptions,
    )

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
    const base = makeAggregatedSamplingProfile(
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
    const current = makeAggregatedSamplingProfile([MICROSECONDS], [])

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)

    const funcA = diff.functions.find(fn => fn.name === `funcA`)!
    expect(funcA.base?.selfSampleCount).toBe(5)
    expect(funcA.current).toBeUndefined()
  })

  test(`function only in current has no base side`, () => {
    const base = makeAggregatedSamplingProfile([MICROSECONDS], [])
    const current = makeAggregatedSamplingProfile(
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

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)

    const funcB = diff.functions.find(fn => fn.name === `funcB`)!
    expect(funcB.base).toBeUndefined()
    expect(funcB.current?.selfSampleCount).toBe(10)
  })

  test(`intersects metrics with partial overlap`, () => {
    const base = makeAggregatedSamplingProfile(
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
    const current = makeAggregatedSamplingProfile(
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

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)

    expect(diff.metrics).toHaveLength(1)
    expect(diff.metrics[0]!.metric.type).toBe(`time`)
  })

  test(`throws on no matching metrics`, () => {
    const base = makeAggregatedSamplingProfile(
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
    const current = makeAggregatedSamplingProfile(
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

    expect(() =>
      diffAggregatedSamplingProfiles(base, current, defaultOptions),
    ).toThrow(`no matching metrics`)
  })

  test(`matches functions by name + URL ignoring line/column`, () => {
    const base = makeAggregatedSamplingProfile(
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
    const current = makeAggregatedSamplingProfile(
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

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(1)
    expect(diff.functions[0]!.base?.selfSampleCount).toBe(5)
    expect(diff.functions[0]!.current?.selfSampleCount).toBe(10)
  })

  test(`matches functions whose locations differ only by a build hash under the pprof-rs origin`, () => {
    const context = { format: `pprof`, origin: `pprof-rs` } as const
    const cargo = (hash: string) =>
      `file:///app/target/release/build/web-compiler-${hash}/out/parser.rs`
    const rustc = (hash: string) =>
      `file:///rustc/${hash}/library/std/src/rt.rs`
    const base = makeAggregatedSamplingProfile(
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
      context,
    )
    const current = makeAggregatedSamplingProfile(
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
      context,
    )

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(2)
    for (const name of [`parse`, `rt`]) {
      const fn = diff.functions.find(func => func.name === name)!
      expect(fn.base?.selfSampleCount).toBe(5)
      expect(fn.current?.selfSampleCount).toBe(10)
    }
  })

  test(`does not strip a build hash under an unrelated origin`, () => {
    const cargo = (hash: string) =>
      `file:///app/target/release/build/web-compiler-${hash}/out/parser.rs`
    const context = { format: `v8-cpu-profile`, origin: `node` } as const
    const base = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `parse`,
          url: cargo(`a`.repeat(16)),
          selfValues: [100],
          selfSampleCount: 5,
        },
      ],
      context,
    )
    const current = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `parse`,
          url: cargo(`b`.repeat(16)),
          selfValues: [200],
          selfSampleCount: 10,
        },
      ],
      context,
    )

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(2)
    expect(
      diff.functions.map(func => ({
        base: func.base?.selfSampleCount,
        current: func.current?.selfSampleCount,
      })),
    ).toEqual(
      expect.arrayContaining([
        { base: 5, current: undefined },
        { base: undefined, current: 10 },
      ]),
    )
  })

  test(`pairs same-key functions across sides instead of dropping them`, () => {
    const methods = (counts: [number, number]) => [
      {
        name: `+`,
        url: `file:///julia/base/int.jl`,
        line: 87,
        selfValues: [counts[0]],
        selfSampleCount: counts[0],
      },
      {
        name: `+`,
        url: `file:///julia/base/int.jl`,
        line: 1013,
        selfValues: [counts[1]],
        selfSampleCount: counts[1],
      },
    ]
    const base = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      methods([322, 50]),
    )
    const current = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      methods([333, 60]),
    )

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(2)
    expect(
      diff.functions.map(func => ({
        line: func.location?.line,
        base: func.base?.selfSampleCount,
        current: func.current?.selfSampleCount,
      })),
    ).toEqual(
      expect.arrayContaining([
        { line: 87, base: 322, current: 333 },
        { line: 1013, base: 50, current: 60 },
      ]),
    )
  })

  test(`pairs exact-line matches first when same-key groups are asymmetric`, () => {
    // Base saw one method (line 36); current saw two (36 and 35). Line 36 must
    // pair with line 36, leaving line 35 as genuinely new — not pair 36 with
    // 35 by order and report 36 as removed.
    const method = (line: number, sampleCount: number) => ({
      name: `mapfoldl_impl`,
      url: `file:///julia/base/reduce.jl`,
      line,
      selfValues: [sampleCount],
      selfSampleCount: sampleCount,
    })
    const base = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [method(36, 5514)],
    )
    const current = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [method(36, 5680), method(35, 12)],
    )

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)

    expect(
      diff.functions.map(func => ({
        line: func.location?.line,
        base: func.base?.selfSampleCount,
        current: func.current?.selfSampleCount,
      })),
    ).toEqual(
      expect.arrayContaining([
        { line: 36, base: 5514, current: 5680 },
        { line: 35, base: undefined, current: 12 },
      ]),
    )
    expect(diff.functions).toHaveLength(2)
  })

  test(`matches JVM lambda and JIT-adapter frames across runs`, () => {
    // Hidden lambda classes and HotSpot transition stubs embed a per-run
    // runtime address; the default `matchEntry` strips it so the same frame
    // matches across runs instead of diffing as a removed+new pair.
    const base = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `apply(Object, Object)`,
          url: `JavaKMeans$$Lambda.0x000000b801205218`,
          selfValues: [100],
          selfSampleCount: 5,
        },
        {
          name: `I2C/C2I adapters(0xba)`,
          selfValues: [100],
          selfSampleCount: 5,
        },
      ],
      { format: `jfr`, origin: `jdk` },
    )
    const current = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `apply(Object, Object)`,
          url: `JavaKMeans$$Lambda.0x000000c001204fd0`,
          selfValues: [200],
          selfSampleCount: 10,
        },
        {
          name: `I2C/C2I adapters(0xaabb)`,
          selfValues: [200],
          selfSampleCount: 10,
        },
      ],
      { format: `jfr`, origin: `jdk` },
    )

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(2)
    for (const func of diff.functions) {
      expect(func.base?.selfSampleCount).toBe(5)
      expect(func.current?.selfSampleCount).toBe(10)
    }
  })

  test(`matches functions without locations by name`, () => {
    const base = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `(garbage collector)`,
          selfValues: [100],
          selfSampleCount: 5,
        },
      ],
    )
    const current = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `(garbage collector)`,
          selfValues: [50],
          selfSampleCount: 3,
        },
      ],
    )

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(1)
    expect(diff.functions[0]!.name).toBe(`(garbage collector)`)
    expect(diff.functions[0]!.base?.selfSampleCount).toBe(5)
    expect(diff.functions[0]!.current?.selfSampleCount).toBe(3)
  })

  test(`merges category metrics from both profiles`, () => {
    const base = makeAggregatedSamplingProfile(
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
    const current = makeAggregatedSamplingProfile(
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

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)

    expect(diff.categoryToMetrics.size).toBeGreaterThan(0)
    const ours = diff.categoryToMetrics.get(`ours`)
    expect(ours).toBeDefined()
    expect(ours!.base?.sampleCount).toBe(5)
    expect(ours!.current?.sampleCount).toBe(10)
  })

  test(`throws on metrics with matching types but different units`, () => {
    const base = makeAggregatedSamplingProfile(
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
    const current = makeAggregatedSamplingProfile(
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

    expect(() =>
      diffAggregatedSamplingProfiles(base, current, defaultOptions),
    ).toThrow(`no matching metrics`)
  })
})
