import { describe, expect, test } from 'vitest'
import { mdastToMarkdown } from '../../helpers/markdown.ts'
import { resolveProfileToMdOptions } from '../../options.ts'
import { categoryRankingTables, linesTables } from '../../testing.ts'
import { countMetricOf } from '../metric.ts'
import {
  BYTES_METRIC,
  MICROSECONDS_METRIC,
  MILLISECONDS_METRIC,
  SAMPLES,
} from '../metrics.ts'
import { diffAggregatedCallStackProfiles } from './diff.ts'
import { formatCallStackProfileDiff } from './format.ts'
import { makeAggregatedCallStackProfile } from './testing.ts'

const defaultOptions = resolveProfileToMdOptions({ baseURL: `/project` })

const ZIG_ALLOCATOR = `file:///opt/zig/lib/std/mem/Allocator.zig`
const ZIG_CONTEXT = { format: `pprof`, origin: `gperftools` } as const

/** A function sampled `count` times at a microsecond each. */
const sampledFunc = (
  name: string,
  url: string,
  { line, column, count }: { line?: number; column?: number; count: number },
) => ({ name, url, line, column, selfValues: [count], selfCount: count })

/**
 * The self time rankings of the two profiles' diff, whose rows show which base
 * function each current function paired with.
 */
const pairingTables = (
  base: ReturnType<typeof sampledFunc>[],
  current: ReturnType<typeof sampledFunc>[],
  context?: typeof ZIG_CONTEXT,
) => {
  const md = mdastToMarkdown(
    formatCallStackProfileDiff(
      diffAggregatedCallStackProfiles(
        makeAggregatedCallStackProfile([MICROSECONDS_METRIC], base, context),
        makeAggregatedCallStackProfile([MICROSECONDS_METRIC], current, context),
        defaultOptions,
      ),
      defaultOptions,
    ),
  )
  return {
    regressions: categoryRankingTables(md, `Self time`, `Regressions`),
    improvements: categoryRankingTables(md, `Self time`, `Improvements`),
  }
}

describe(`diffAggregatedCallStackProfiles`, () => {
  test(`identical profiles produce zero deltas`, () => {
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfValues: [100],
          selfCount: 10,
        },
      ],
    )

    const diff = diffAggregatedCallStackProfiles(
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
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [100],
          selfCount: 5,
        },
      ],
    )
    const current = makeAggregatedCallStackProfile([MICROSECONDS_METRIC], [])

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)

    const funcA = diff.functions.find(fn => fn.name === `funcA`)!
    expect(funcA.base?.selfCount).toBe(5)
    expect(funcA.current).toBeUndefined()
  })

  test(`function in a file does not match one in a module of the same name`, () => {
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [{ name: `sort`, url: `lists`, selfValues: [100], selfCount: 5 }],
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `sort`,
          logicalName: `lists`,
          selfValues: [100],
          selfCount: 5,
        },
      ],
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(2)
    expect(diff.functions.map(fn => [!!fn.base, !!fn.current])).toEqual(
      expect.arrayContaining([
        [true, false],
        [false, true],
      ]),
    )
  })

  test(`function only in current has no base side`, () => {
    const base = makeAggregatedCallStackProfile([MICROSECONDS_METRIC], [])
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          selfValues: [200],
          selfCount: 10,
        },
      ],
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)

    const funcB = diff.functions.find(fn => fn.name === `funcB`)!
    expect(funcB.base).toBeUndefined()
    expect(funcB.current?.selfCount).toBe(10)
  })

  test(`intersects metrics with partial overlap`, () => {
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC, BYTES_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [100, 500],
          selfCount: 5,
        },
      ],
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [200],
          selfCount: 10,
        },
      ],
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)

    expect(diff.metrics).toHaveLength(1)
    expect(diff.metrics[0]!.metric.type).toBe(`time`)
  })

  test(`throws on no matching metrics`, () => {
    const base = makeAggregatedCallStackProfile(
      [BYTES_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [500],
          selfCount: 5,
        },
      ],
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [200],
          selfCount: 10,
        },
      ],
    )

    expect(() =>
      diffAggregatedCallStackProfiles(base, current, defaultOptions),
    ).toThrow(`no metrics in common`)
  })

  test(`throws on metric-less profiles counting different things`, () => {
    const func = {
      name: `funcA`,
      url: `file:///project/src/a.ts`,
      selfValues: [],
      selfCount: 5,
    }
    const base = makeAggregatedCallStackProfile([], [func], undefined, SAMPLES)
    const current = makeAggregatedCallStackProfile(
      [],
      [func],
      undefined,
      countMetricOf(`entry`, { improvement: `decrease` }),
    )

    expect(() =>
      diffAggregatedCallStackProfiles(base, current, defaultOptions),
    ).toThrow(`count different things, got: samples and entries`)
  })

  test(`drops the count metric of metric-ful profiles counting different things`, () => {
    const func = {
      name: `funcA`,
      url: `file:///project/src/a.ts`,
      selfValues: [100],
      selfCount: 5,
    }
    const base = makeAggregatedCallStackProfile(
      [BYTES_METRIC],
      [func],
      undefined,
      SAMPLES,
    )
    const current = makeAggregatedCallStackProfile(
      [BYTES_METRIC],
      [func],
      undefined,
      countMetricOf(`entry`, { improvement: `decrease` }),
    )

    expect(
      diffAggregatedCallStackProfiles(base, current, defaultOptions)
        .countMetric,
    ).toBeNull()
  })

  test(`matches functions by name + URL ignoring line/column`, () => {
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfValues: [100],
          selfCount: 5,
        },
      ],
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 20,
          selfValues: [200],
          selfCount: 10,
        },
      ],
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(1)
    expect(diff.functions[0]!.base?.selfCount).toBe(5)
    expect(diff.functions[0]!.current?.selfCount).toBe(10)
  })

  test(`matches functions whose locations differ only by a build hash under the pprof-rs origin`, () => {
    const context = { format: `pprof`, origin: `pprof-rs` } as const
    const cargo = (hash: string) =>
      `file:///app/target/release/build/web-compiler-${hash}/out/parser.rs`
    const rustc = (hash: string) =>
      `file:///rustc/${hash}/library/std/src/rt.rs`
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `parse`,
          url: cargo(`a`.repeat(16)),
          selfValues: [100],
          selfCount: 5,
        },
        {
          name: `rt`,
          url: rustc(`a`.repeat(40)),
          selfValues: [100],
          selfCount: 5,
        },
      ],
      context,
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `parse`,
          url: cargo(`b`.repeat(16)),
          selfValues: [200],
          selfCount: 10,
        },
        {
          name: `rt`,
          url: rustc(`b`.repeat(40)),
          selfValues: [200],
          selfCount: 10,
        },
      ],
      context,
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(2)
    for (const name of [`parse`, `rt`]) {
      const fn = diff.functions.find(func => func.name === name)!
      expect(fn.base?.selfCount).toBe(5)
      expect(fn.current?.selfCount).toBe(10)
    }
  })

  test(`does not strip a build hash under an unrelated origin`, () => {
    const cargo = (hash: string) =>
      `file:///app/target/release/build/web-compiler-${hash}/out/parser.rs`
    const context = { format: `v8-cpu-profile`, origin: `node` } as const
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `parse`,
          url: cargo(`a`.repeat(16)),
          selfValues: [100],
          selfCount: 5,
        },
      ],
      context,
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `parse`,
          url: cargo(`b`.repeat(16)),
          selfValues: [200],
          selfCount: 10,
        },
      ],
      context,
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(2)
    expect(
      diff.functions.map(func => ({
        base: func.base?.selfCount,
        current: func.current?.selfCount,
      })),
    ).toEqual(
      expect.arrayContaining([
        { base: 5, current: undefined },
        { base: undefined, current: 10 },
      ]),
    )
  })

  test(`pairs same-key functions across sides instead of dropping them`, () => {
    const method = (line: number, count: number) =>
      sampledFunc(`+`, `file:///julia/base/int.jl`, { line, count })

    expect(
      pairingTables(
        [method(87, 322), method(1013, 50)],
        [method(87, 333), method(1013, 60)],
      ),
    ).toEqual({
      regressions: {
        Ours: [
          {
            Change: `+3.4%`,
            Delta: `+0.01ms`,
            '%': `86.6% → 84.7%`,
            Time: `0.3ms`,
            Samples: `322 → 333`,
            Function: `+`,
            Location: `../julia/base/int.jl:87`,
          },
          {
            Change: `+20.0%`,
            Delta: `+0.01ms`,
            '%': `13.4% → 15.3%`,
            Time: `0.1ms`,
            Samples: `50 → 60`,
            Function: `+`,
            Location: `../julia/base/int.jl:1013`,
          },
        ],
      },
      improvements: {},
    })
  })

  test(`pairs the same-key function at an unchanged line when the other side has one more`, () => {
    const method = (line: number, count: number) =>
      sampledFunc(`mapfoldl_impl`, `file:///julia/base/reduce.jl`, {
        line,
        count,
      })

    expect(
      pairingTables([method(36, 5514)], [method(36, 5680), method(35, 12)]),
    ).toEqual({
      regressions: {
        Ours: [
          {
            Change: `+3.0%`,
            Delta: `+0.17ms`,
            '%': `100.0% → 99.8%`,
            Time: `5.5ms → 5.7ms`,
            Samples: `5,514 → 5,680`,
            Function: `mapfoldl_impl`,
            Location: `../julia/base/reduce.jl:36`,
          },
          {
            Change: `new`,
            Delta: `+0.01ms`,
            '%': `0.0% → 0.2%`,
            Time: `0ms → 12.0µs`,
            Samples: `0 → 12`,
            Function: `mapfoldl_impl`,
            Location: `../julia/base/reduce.jl:35`,
          },
        ],
      },
      improvements: {},
    })
  })

  test.each([
    {
      name: `moved down below one added above them`,
      currentLines: [5, 14, 24, 34],
      expected: {
        regressions: {
          Ours: [
            {
              Change: `+10.0%`,
              Delta: `+0.01ms`,
              '%': `94.3% → 90.2%`,
              Time: `0.1ms`,
              Samples: `100 → 110`,
              Function: `(anonymous)`,
              Location: `src/a.js:10 → 14`,
            },
            {
              Change: `+40.0%`,
              Delta: `+2.00µs`,
              '%': `4.7% → 5.7%`,
              Time: `5.0µs → 7.0µs`,
              Samples: `5 → 7`,
              Function: `(anonymous)`,
              Location: `src/a.js:20 → 24`,
            },
            {
              Change: `+200.0%`,
              Delta: `+2.00µs`,
              '%': `0.9% → 2.5%`,
              Time: `1.0µs → 3.0µs`,
              Samples: `1 → 3`,
              Function: `(anonymous)`,
              Location: `src/a.js:30 → 34`,
            },
            {
              Change: `new`,
              Delta: `+2.00µs`,
              '%': `0.0% → 1.6%`,
              Time: `0ms → 2.0µs`,
              Samples: `0 → 2`,
              Function: `(anonymous)`,
              Location: `src/a.js:5`,
            },
          ],
        },
        improvements: {},
      },
    },
    {
      name: `moved onto each other's old lines below one added above them`,
      currentLines: [5, 20, 30, 40],
      expected: {
        regressions: {
          Ours: [
            {
              Change: `+10.0%`,
              Delta: `+0.01ms`,
              '%': `94.3% → 90.2%`,
              Time: `0.1ms`,
              Samples: `100 → 110`,
              Function: `(anonymous)`,
              Location: `src/a.js:10 → 20`,
            },
            {
              Change: `+40.0%`,
              Delta: `+2.00µs`,
              '%': `4.7% → 5.7%`,
              Time: `5.0µs → 7.0µs`,
              Samples: `5 → 7`,
              Function: `(anonymous)`,
              Location: `src/a.js:20 → 30`,
            },
            {
              Change: `+200.0%`,
              Delta: `+2.00µs`,
              '%': `0.9% → 2.5%`,
              Time: `1.0µs → 3.0µs`,
              Samples: `1 → 3`,
              Function: `(anonymous)`,
              Location: `src/a.js:30 → 40`,
            },
            {
              Change: `new`,
              Delta: `+2.00µs`,
              '%': `0.0% → 1.6%`,
              Time: `0ms → 2.0µs`,
              Samples: `0 → 2`,
              Function: `(anonymous)`,
              Location: `src/a.js:5`,
            },
          ],
        },
        improvements: {},
      },
    },
  ])(`pairs same-key functions that $name`, ({ currentLines, expected }) => {
    const closure = (line: number, count: number) =>
      sampledFunc(`(anonymous)`, `file:///project/src/a.js`, { line, count })
    const [added, ...moved] = currentLines

    expect(
      pairingTables(
        [closure(10, 100), closure(20, 5), closure(30, 1)],
        [
          closure(added!, 2),
          closure(moved[0]!, 110),
          closure(moved[1]!, 7),
          closure(moved[2]!, 3),
        ],
      ),
    ).toEqual(expected)
  })

  test(`pairs same-key functions on one line that moved along it`, () => {
    // A minified bundle defines every function on line 1, so code inserted
    // before them moves their columns alone.
    const closure = (column: number, count: number) =>
      sampledFunc(`(anonymous)`, `file:///project/dist/bundle.min.js`, {
        line: 1,
        column,
        count,
      })

    expect(
      pairingTables(
        [closure(100, 7), closure(200, 3)],
        [closure(50, 2), closure(140, 9), closure(240, 4)],
      ),
    ).toEqual({
      regressions: {
        Ours: [
          {
            Change: `+28.6%`,
            Delta: `+2.00µs`,
            '%': `70.0% → 60.0%`,
            Time: `7.0µs → 9.0µs`,
            Samples: `7 → 9`,
            Function: `(anonymous)`,
            Location: `dist/bundle.min.js:1:100 → 1:140`,
          },
          {
            Change: `new`,
            Delta: `+2.00µs`,
            '%': `0.0% → 13.3%`,
            Time: `0ms → 2.0µs`,
            Samples: `0 → 2`,
            Function: `(anonymous)`,
            Location: `dist/bundle.min.js:1:50`,
          },
          {
            Change: `+33.3%`,
            Delta: `+1.00µs`,
            '%': `30.0% → 26.7%`,
            Time: `3.0µs → 4.0µs`,
            Samples: `3 → 4`,
            Function: `(anonymous)`,
            Location: `dist/bundle.min.js:1:200 → 1:240`,
          },
        ],
      },
      improvements: {},
    })
  })

  test(`leaves unpaired a same-key function that moved while its neighbors did not`, () => {
    const closure = (line: number, column: number, count: number) =>
      sampledFunc(`(anonymous)`, `file:///project/src/a.js`, {
        line,
        column,
        count,
      })

    expect(
      pairingTables(
        [closure(10, 5, 7), closure(20, 5, 3), closure(30, 5, 1)],
        [closure(10, 5, 8), closure(20, 9, 4), closure(30, 5, 2)],
      ),
    ).toEqual({
      regressions: {
        Ours: [
          {
            Change: `new`,
            Delta: `+4.00µs`,
            '%': `0.0% → 28.6%`,
            Time: `0ms → 4.0µs`,
            Samples: `0 → 4`,
            Function: `(anonymous)`,
            Location: `src/a.js:20:9`,
          },
          {
            Change: `+14.3%`,
            Delta: `+1.00µs`,
            '%': `63.6% → 57.1%`,
            Time: `7.0µs → 8.0µs`,
            Samples: `7 → 8`,
            Function: `(anonymous)`,
            Location: `src/a.js:10:5`,
          },
          {
            Change: `+100.0%`,
            Delta: `+1.00µs`,
            '%': `9.1% → 14.3%`,
            Time: `1.0µs → 2.0µs`,
            Samples: `1 → 2`,
            Function: `(anonymous)`,
            Location: `src/a.js:30:5`,
          },
        ],
      },
      improvements: {
        Ours: [
          {
            Change: `removed`,
            Delta: `-3.00µs`,
            '%': `27.3% → 0.0%`,
            Time: `3.0µs → 0ms`,
            Samples: `3 → 0`,
            Function: `(anonymous)`,
            Location: `src/a.js:20:5`,
          },
        ],
      },
    })
  })

  test(`matches JVM lambda and JIT-adapter frames across runs`, () => {
    // Hidden lambda classes and HotSpot transition stubs embed a per-run
    // runtime address; the default `matchEntry` strips it so the same frame
    // matches across runs instead of diffing as a removed+new pair.
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `apply(Object, Object)`,
          url: `JavaKMeans$$Lambda.0x000000b801205218`,
          selfValues: [100],
          selfCount: 5,
        },
        {
          name: `I2C/C2I adapters(0xba)`,
          selfValues: [100],
          selfCount: 5,
        },
      ],
      { format: `jfr`, origin: `jdk` },
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `apply(Object, Object)`,
          url: `JavaKMeans$$Lambda.0x000000c001204fd0`,
          selfValues: [200],
          selfCount: 10,
        },
        {
          name: `I2C/C2I adapters(0xaabb)`,
          selfValues: [200],
          selfCount: 10,
        },
      ],
      { format: `jfr`, origin: `jdk` },
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(2)
    for (const func of diff.functions) {
      expect(func.base?.selfCount).toBe(5)
      expect(func.current?.selfCount).toBe(10)
    }
  })

  test(`pairs functions by their own keys before their colliding normalized keys`, () => {
    const free = (id: number, count: number) =>
      sampledFunc(`mem.Allocator.free__anon_${id}`, ZIG_ALLOCATOR, { count })

    expect(
      pairingTables(
        [free(1, 5), free(2, 7), free(3, 9)],
        [free(4, 18), free(2, 14), free(1, 10)],
        ZIG_CONTEXT,
      ),
    ).toEqual({
      regressions: {
        'Standard library': [
          {
            Change: `+100.0%`,
            Delta: `+0.01ms`,
            '%': `42.9%`,
            Time: `9.0µs → 18.0µs`,
            Samples: `9 → 18`,
            Function: `mem.Allocator.free__anon_4`,
            Location: `../opt/zig/lib/std/mem/Allocator.zig`,
          },
          {
            Change: `+100.0%`,
            Delta: `+0.01ms`,
            '%': `33.3%`,
            Time: `7.0µs → 14.0µs`,
            Samples: `7 → 14`,
            Function: `mem.Allocator.free__anon_2`,
            Location: `../opt/zig/lib/std/mem/Allocator.zig`,
          },
          {
            Change: `+100.0%`,
            Delta: `+0.01ms`,
            '%': `23.8%`,
            Time: `5.0µs → 10.0µs`,
            Samples: `5 → 10`,
            Function: `mem.Allocator.free__anon_1`,
            Location: `../opt/zig/lib/std/mem/Allocator.zig`,
          },
        ],
      },
      improvements: {},
    })
  })

  test(`leaves unpaired a function its own key's pass left unpaired, whatever else shares its normalized key`, () => {
    // The first pass aligns the `free__anon_1` functions and leaves the one at
    // line 20, which moved alone, unpaired. `free__anon_2` shares the
    // normalized key, and must not undo that decision.
    const free = (id: number, line: number, count: number) =>
      sampledFunc(`mem.Allocator.free__anon_${id}`, ZIG_ALLOCATOR, {
        line,
        count,
      })

    expect(
      pairingTables(
        [free(1, 10, 100), free(1, 20, 5), free(1, 30, 1), free(2, 40, 9)],
        [free(1, 10, 110), free(1, 25, 7), free(1, 30, 3)],
        ZIG_CONTEXT,
      ),
    ).toEqual({
      regressions: {
        'Standard library': [
          {
            Change: `+10.0%`,
            Delta: `+0.01ms`,
            '%': `87.0% → 91.7%`,
            Time: `0.1ms`,
            Samples: `100 → 110`,
            Function: `mem.Allocator.free__anon_1`,
            Location: `../opt/zig/lib/std/mem/Allocator.zig:10`,
          },
          {
            Change: `new`,
            Delta: `+0.01ms`,
            '%': `0.0% → 5.8%`,
            Time: `0ms → 7.0µs`,
            Samples: `0 → 7`,
            Function: `mem.Allocator.free__anon_1`,
            Location: `../opt/zig/lib/std/mem/Allocator.zig:25`,
          },
          {
            Change: `+200.0%`,
            Delta: `+2.00µs`,
            '%': `0.9% → 2.5%`,
            Time: `1.0µs → 3.0µs`,
            Samples: `1 → 3`,
            Function: `mem.Allocator.free__anon_1`,
            Location: `../opt/zig/lib/std/mem/Allocator.zig:30`,
          },
        ],
      },
      improvements: {
        'Standard library': [
          {
            Change: `removed`,
            Delta: `-0.01ms`,
            '%': `7.8% → 0.0%`,
            Time: `9.0µs → 0ms`,
            Samples: `9 → 0`,
            Function: `mem.Allocator.free__anon_2`,
            Location: `../opt/zig/lib/std/mem/Allocator.zig:40`,
          },
          {
            Change: `removed`,
            Delta: `-0.01ms`,
            '%': `4.3% → 0.0%`,
            Time: `5.0µs → 0ms`,
            Samples: `5 → 0`,
            Function: `mem.Allocator.free__anon_1`,
            Location: `../opt/zig/lib/std/mem/Allocator.zig:20`,
          },
        ],
      },
    })
  })

  test(`pairs by its normalized key a function its own key's pass left over because the other side had fewer`, () => {
    const free = (id: number, line: number, count: number) =>
      sampledFunc(`mem.Allocator.free__anon_${id}`, ZIG_ALLOCATOR, {
        line,
        count,
      })

    expect(
      pairingTables(
        [free(1, 10, 100), free(1, 20, 5)],
        [free(1, 10, 110), free(3, 20, 7)],
        ZIG_CONTEXT,
      ),
    ).toEqual({
      regressions: {
        'Standard library': [
          {
            Change: `+10.0%`,
            Delta: `+0.01ms`,
            '%': `95.2% → 94.0%`,
            Time: `0.1ms`,
            Samples: `100 → 110`,
            Function: `mem.Allocator.free__anon_1`,
            Location: `../opt/zig/lib/std/mem/Allocator.zig:10`,
          },
          {
            Change: `+40.0%`,
            Delta: `+2.00µs`,
            '%': `4.8% → 6.0%`,
            Time: `5.0µs → 7.0µs`,
            Samples: `5 → 7`,
            Function: `mem.Allocator.free__anon_3`,
            Location: `../opt/zig/lib/std/mem/Allocator.zig:20`,
          },
        ],
      },
      improvements: {},
    })
  })

  test(`pairs the leftover same-key functions when each side has one and one has no line`, () => {
    const method = (line: number | undefined, count: number) =>
      sampledFunc(`#write#80`, `file:///julia/JSON3/src/write.jl`, {
        line,
        count,
      })

    expect(
      pairingTables(
        [method(187, 3052), method(200, 37)],
        [method(187, 3048), method(undefined, 40)],
      ),
    ).toEqual({
      regressions: {
        Ours: [
          {
            Change: `+8.1%`,
            Delta: `+3.00µs`,
            '%': `1.2% → 1.3%`,
            Time: `37.0µs → 40.0µs`,
            Samples: `37 → 40`,
            Function: `#write#80`,
            Location: `../julia/JSON3/src/write.jl:200 → ?`,
          },
        ],
      },
      improvements: {
        Ours: [
          {
            Change: `-0.1%`,
            Delta: `-4.00µs`,
            '%': `98.8% → 98.7%`,
            Time: `3.1ms → 3.0ms`,
            Samples: `3,052 → 3,048`,
            Function: `#write#80`,
            Location: `../julia/JSON3/src/write.jl:187`,
          },
        ],
      },
    })
  })

  test(`pairs a same-key function whose line is not a number like one without a line`, () => {
    const method = (line: number, count: number) =>
      sampledFunc(`typeparser`, `file:///julia/Parsers/src/floats.jl`, {
        line,
        count,
      })

    expect(
      pairingTables(
        [method(10, 100), method(Number.NaN, 5)],
        [method(10, 110), method(20, 7)],
      ),
    ).toEqual({
      regressions: {
        Ours: [
          {
            Change: `+10.0%`,
            Delta: `+0.01ms`,
            '%': `95.2% → 94.0%`,
            Time: `0.1ms`,
            Samples: `100 → 110`,
            Function: `typeparser`,
            Location: `../julia/Parsers/src/floats.jl:10`,
          },
          {
            Change: `+40.0%`,
            Delta: `+2.00µs`,
            '%': `4.8% → 6.0%`,
            Time: `5.0µs → 7.0µs`,
            Samples: `5 → 7`,
            Function: `typeparser`,
            Location: `../julia/Parsers/src/floats.jl:? → 20`,
          },
        ],
      },
      improvements: {},
    })
  })

  test(`matches functions without locations by name`, () => {
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `(garbage collector)`,
          selfValues: [100],
          selfCount: 5,
        },
      ],
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `(garbage collector)`,
          selfValues: [50],
          selfCount: 3,
        },
      ],
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)

    expect(diff.functions).toHaveLength(1)
    expect(diff.functions[0]!.name).toBe(`(garbage collector)`)
    expect(diff.functions[0]!.base?.selfCount).toBe(5)
    expect(diff.functions[0]!.current?.selfCount).toBe(3)
  })

  test(`merges category metrics from both profiles`, () => {
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [100],
          selfCount: 5,
        },
      ],
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [200],
          selfCount: 10,
        },
      ],
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)

    expect(diff.categoryToMetrics.size).toBeGreaterThan(0)
    const ours = diff.categoryToMetrics.get(`ours`)
    expect(ours).toBeDefined()
    expect(ours!.base?.count).toBe(5)
    expect(ours!.current?.count).toBe(10)
  })

  test(`throws on metrics with matching types but different units`, () => {
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [100],
          selfCount: 5,
        },
      ],
    )
    const current = makeAggregatedCallStackProfile(
      [MILLISECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfValues: [100],
          selfCount: 5,
        },
      ],
    )

    expect(() =>
      diffAggregatedCallStackProfiles(base, current, defaultOptions),
    ).toThrow(`no metrics in common`)
  })
})

describe(`formatCallStackProfileDiff lines`, () => {
  /** A function at `a.ts` sampled a microsecond per record at each line. */
  const funcWithLines = (
    line: number,
    executingLines: { line: number; count: number }[],
  ) => {
    const count = executingLines.reduce((sum, { count }) => sum + count, 0)
    return {
      name: `funcA`,
      url: `file:///project/src/a.ts`,
      line,
      selfValues: [count],
      selfCount: count,
      executingLines,
    }
  }

  const linesOf = (
    base: ReturnType<typeof funcWithLines>,
    current: ReturnType<typeof funcWithLines>,
  ) =>
    linesTables(
      mdastToMarkdown(
        formatCallStackProfileDiff(
          diffAggregatedCallStackProfiles(
            makeAggregatedCallStackProfile([MICROSECONDS_METRIC], [base]),
            makeAggregatedCallStackProfile([MICROSECONDS_METRIC], [current]),
            defaultOptions,
          ),
          defaultOptions,
        ),
      ),
      `funcA`,
    )

  test(`pairs the lines of a function an edit above it moved`, () => {
    expect(
      linesOf(
        funcWithLines(10, [
          { line: 12, count: 5 },
          { line: 15, count: 3 },
        ]),
        funcWithLines(20, [
          { line: 22, count: 8 },
          { line: 25, count: 3 },
        ]),
      ),
    ).toEqual([
      [
        {
          Change: `+60.0%`,
          Delta: `+3.00µs`,
          '%': `62.5% → 72.7%`,
          Time: `5.0µs → 8.0µs`,
          Samples: `5 → 8`,
          Location: `src/a.ts:12 → 22`,
        },
      ],
    ])
  })

  test(`pairs a run of lines an edit inside the function moved`, () => {
    expect(
      linesOf(
        funcWithLines(10, [
          { line: 11, count: 1 },
          { line: 13, count: 2 },
          { line: 15, count: 3 },
          { line: 17, count: 4 },
        ]),
        funcWithLines(10, [
          { line: 11, count: 2 },
          { line: 16, count: 2 },
          { line: 18, count: 3 },
          { line: 20, count: 4 },
        ]),
      ),
    ).toEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+1.00µs`,
          '%': `10.0% → 18.2%`,
          Time: `1.0µs → 2.0µs`,
          Samples: `1 → 2`,
          Location: `src/a.ts:11`,
        },
      ],
    ])
  })

  test(`leaves a line unpaired that moved apart from the others`, () => {
    expect(
      linesOf(
        funcWithLines(10, [
          { line: 11, count: 4 },
          { line: 14, count: 2 },
        ]),
        funcWithLines(10, [
          { line: 11, count: 6 },
          { line: 19, count: 2 },
        ]),
      ),
    ).toEqual([
      [
        {
          Change: `+50.0%`,
          Delta: `+2.00µs`,
          '%': `66.7% → 75.0%`,
          Time: `4.0µs → 6.0µs`,
          Samples: `4 → 6`,
          Location: `src/a.ts:11`,
        },
        {
          Change: `removed`,
          Delta: `-2.00µs`,
          '%': `33.3% → 0.0%`,
          Time: `2.0µs → 0ms`,
          Samples: `2 → 0`,
          Location: `src/a.ts:14`,
        },
        {
          Change: `new`,
          Delta: `+2.00µs`,
          '%': `0.0% → 25.0%`,
          Time: `0ms → 2.0µs`,
          Samples: `0 → 2`,
          Location: `src/a.ts:19`,
        },
      ],
    ])
  })
})
