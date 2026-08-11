import { describe, expect, test } from 'vitest'
import { mdastToMarkdown } from '../../helpers/markdown.ts'
import {
  callersTables,
  categoryRankingTables,
  categorySectionTables,
  categoryTables,
  diffRankingTable,
  profileTitles,
  rankingTable,
  rankingTables,
  resolveProfileToMdOptions,
  summaryLines,
} from '../../testing.ts'
import { countMetricOf } from '../metric.ts'
import type { Metric } from '../metric.ts'
import {
  BYTES_METRIC,
  MEGABYTES_METRIC,
  MICROSECONDS_METRIC,
  parseMetric,
  RETAINED_HEAP_METRIC,
} from '../metrics.ts'
import { diffAggregatedCallStackProfiles } from './diff.ts'
import { formatCallStackProfile, formatCallStackProfileDiff } from './format.ts'
import {
  callStackTables,
  makeAggregatedCallStackProfile,
  selfTimeTables,
  totalTimeTables,
} from './testing.ts'

const defaultOptions = resolveProfileToMdOptions({ baseURL: `/project` })

/**
 * The note explaining the ellipsis, shown only when a displayed call stack
 * contains a hidden frame.
 */
const ELLIPSIS_NOTE = `\`…\` stands for frames the entry filter hides.`

/**
 * A diff in {@link metric} of one function whose value doubled and one whose
 * value fell, so both of its rankings have a row.
 */
const formatDiffOfMetric = (metric: Metric): string => {
  const profileOf = (funcAValue: number, funcBValue: number) =>
    makeAggregatedCallStackProfile(
      [metric],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfCount: funcAValue / 20,
          selfValues: [funcAValue],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          line: 20,
          selfCount: funcBValue / 20,
          selfValues: [funcBValue],
        },
      ],
    )

  return mdastToMarkdown(
    formatCallStackProfileDiff(
      diffAggregatedCallStackProfiles(
        profileOf(100, 60),
        profileOf(200, 20),
        defaultOptions,
      ),
      defaultOptions,
    ),
  )
}

describe(`formatCallStackProfile`, () => {
  test(`omits zero-valued call stacks from the hottest call stacks table`, () => {
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `hotLeaf`,
          url: `file:///project/src/a.ts`,
          selfCount: 5,
          selfValues: [300],
          stack: [0, 1],
        },
        {
          name: `hotCaller`,
          url: `file:///project/src/b.ts`,
          selfCount: 0,
          selfValues: [0],
        },
        {
          name: `coldLeaf`,
          url: `file:///project/src/c.ts`,
          selfCount: 5,
          selfValues: [0],
          stack: [2, 3],
        },
        {
          name: `coldCaller`,
          url: `file:///project/src/d.ts`,
          selfCount: 0,
          selfValues: [0],
        },
      ],
    )

    const md = mdastToMarkdown(formatCallStackProfile(profile, defaultOptions))

    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          'Call stack': `hotLeaf (src/a.ts) ← hotCaller (src/b.ts)`,
        },
      ],
    ])
  })

  test(`ranks a function with no self samples by its callees' time`, () => {
    // Main (ours) → extMid (stdlib, never a leaf) → extLeaf (stdlib). extMid
    // is sampled in no leaf frame, so only its callee's time places it.
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `extLeaf`,
          selfCount: 5,
          selfValues: [300],
          stack: [0, 1, 2],
        },
        { name: `extMid`, selfCount: 0, selfValues: [0] },
        {
          name: `main`,
          url: `file:///project/src/main.ts`,
          selfCount: 0,
          selfValues: [0],
        },
      ],
    )

    const md = mdastToMarkdown(formatCallStackProfile(profile, defaultOptions))

    expect(totalTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          Function: `extLeaf`,
          Location: `<unknown>`,
        },
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          Function: `extMid`,
          Location: `<unknown>`,
        },
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          Function: `main`,
          Location: `src/main.ts`,
        },
      ],
    ])
  })

  test(`merges call stacks that differ only in hidden frames into one row`, () => {
    // Two stacks share the visible suffix extApi ← main but end in different
    // leaves the entry filter hides. Without merging they'd render as two
    // identical rows, each carrying only its own slice of the value.
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `extLeafA`,
          selfCount: 3,
          selfValues: [180],
          stack: [0, 2, 3],
        },
        {
          name: `extLeafB`,
          selfCount: 2,
          selfValues: [120],
          stack: [1, 2, 3],
        },
        { name: `extApi`, selfCount: 0, selfValues: [0] },
        {
          name: `main`,
          url: `file:///project/src/main.ts`,
          selfCount: 0,
          selfValues: [0],
        },
      ],
    )
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => !entry.name?.startsWith(`extLeaf`),
    })

    const md = mdastToMarkdown(formatCallStackProfile(profile, options))

    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          'Call stack': `extApi ← main (src/main.ts)`,
        },
      ],
    ])
  })

  test(`marks hidden frames between two shown frames with an ellipsis`, () => {
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 5,
          selfValues: [300],
          stack: [0, 1, 2],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          selfCount: 0,
          selfValues: [0],
        },
        {
          name: `funcC`,
          url: `file:///project/src/c.ts`,
          selfCount: 0,
          selfValues: [0],
        },
      ],
    )
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `funcB`,
    })

    const md = mdastToMarkdown(formatCallStackProfile(profile, options))

    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          'Call stack': `funcA (src/a.ts) ← … ← funcC (src/c.ts)`,
        },
      ],
    ])
    expect(md).toContain(ELLIPSIS_NOTE)
  })

  test(`ends a row with an ellipsis when hidden frames precede the common call stack`, () => {
    // One stack reaches funcC through a hidden frame and the other calls it
    // directly, so the ellipsis prints on the row instead of in the common
    // call stack.
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 6,
          selfValues: [360],
          stack: [0, 1, 2],
        },
        {
          name: `hiddenMid`,
          url: `file:///project/src/mid.ts`,
          selfCount: 0,
          selfValues: [0],
        },
        {
          name: `funcC`,
          url: `file:///project/src/c.ts`,
          selfCount: 0,
          selfValues: [0],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          selfCount: 3,
          selfValues: [180],
          stack: [3, 2],
        },
      ],
    )
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => !entry.name?.startsWith(`hidden`),
    })

    const md = mdastToMarkdown(formatCallStackProfile(profile, options))

    expect(md).toContain(`Common call stack: \`funcC\` (\`src/c.ts\`)`)
    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `66.7%`,
          Time: `0.4ms`,
          Samples: `6`,
          'Call stack': `funcA (src/a.ts) ← …`,
        },
        {
          '%': `33.3%`,
          Time: `0.2ms`,
          Samples: `3`,
          'Call stack': `funcB (src/b.ts)`,
        },
      ],
    ])
    expect(md).toContain(ELLIPSIS_NOTE)
  })

  test(`shortens a location across an ellipsis`, () => {
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfCount: 5,
          selfValues: [300],
          stack: [0, 1, 2],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          selfCount: 0,
          selfValues: [0],
        },
        {
          name: `funcC`,
          url: `file:///project/src/a.ts`,
          line: 42,
          selfCount: 0,
          selfValues: [0],
        },
      ],
    )
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `funcB`,
    })

    const md = mdastToMarkdown(formatCallStackProfile(profile, options))

    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          'Call stack': `funcA (src/a.ts:10) ← … ← funcC (42)`,
        },
      ],
    ])
  })

  test(`drops hidden frames below the leaf and above the root without an ellipsis`, () => {
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `hiddenLeaf`,
          url: `file:///project/src/leaf.ts`,
          selfCount: 5,
          selfValues: [300],
          stack: [0, 1, 2, 3],
        },
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 0,
          selfValues: [0],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          selfCount: 0,
          selfValues: [0],
        },
        {
          name: `hiddenRoot`,
          url: `file:///project/src/root.ts`,
          selfCount: 0,
          selfValues: [0],
        },
      ],
    )
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => !entry.name?.startsWith(`hidden`),
    })

    const md = mdastToMarkdown(formatCallStackProfile(profile, options))

    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          'Call stack': `funcA (src/a.ts) ← funcB (src/b.ts)`,
        },
      ],
    ])
    expect(md).not.toContain(ELLIPSIS_NOTE)
  })

  test(`shows all functions when the entry filter would hide every one`, () => {
    // A filter matching no sampled function would empty the body, so it is
    // disabled with a note instead.
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        { name: `funcA`, selfCount: 5, selfValues: [300], stack: [0, 1] },
        { name: `funcB`, selfCount: 0, selfValues: [0] },
      ],
    )
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: () => false,
    })

    const md = mdastToMarkdown(formatCallStackProfile(profile, options))

    expect(md).toContain(
      `The entry filter hides every recorded function, so all functions are shown.`,
    )
    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          'Call stack': `funcA ← funcB`,
        },
      ],
    ])
  })

  test(`notes a metric with no recorded values in place of its sections`, () => {
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC, RETAINED_HEAP_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 5,
          selfValues: [300, 0],
        },
      ],
    )

    const md = mdastToMarkdown(formatCallStackProfile(profile, defaultOptions))

    expect(md).toMatch(/^## CPU$/mu)
    expect(md).toContain(`## Retained heap\n\nNo bytes retained in any sample.`)
  })

  test(`notes a single metric with no recorded values in place of all sections`, () => {
    const profile = makeAggregatedCallStackProfile(
      [RETAINED_HEAP_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 5,
          selfValues: [0],
        },
      ],
    )

    const md = mdastToMarkdown(formatCallStackProfile(profile, defaultOptions))

    expect(md).toContain(`No bytes retained in any sample.`)
    expect(md).not.toContain(`Hottest`)
  })

  test(`keeps a call stack's module location after a file of the same name`, () => {
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `leaf`,
          url: `lists`,
          selfCount: 5,
          selfValues: [200],
          stack: [0, 1],
        },
        {
          name: `caller`,
          logicalName: `lists`,
          selfCount: 0,
          selfValues: [0],
        },
      ],
    )

    const md = mdastToMarkdown(formatCallStackProfile(profile, defaultOptions))

    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.2ms`,
          Samples: `5`,
          'Call stack': `leaf (lists) ← caller (lists)`,
        },
      ],
    ])
  })

  test(`keeps a function in a file and one in a module of the same name apart`, () => {
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `sort`,
          url: `lists`,
          selfCount: 5,
          selfValues: [200],
        },
        {
          name: `sort`,
          logicalName: `lists`,
          selfCount: 5,
          selfValues: [100],
        },
      ],
    )

    const md = mdastToMarkdown(formatCallStackProfile(profile, defaultOptions))

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `66.7%`,
          Time: `0.2ms`,
          Samples: `5`,
          Function: `sort`,
          Location: `lists`,
        },
        {
          '%': `33.3%`,
          Time: `0.1ms`,
          Samples: `5`,
          Function: `sort`,
          Location: `lists`,
        },
      ],
    ])
  })

  describe(`category subsections`, () => {
    /**
     * A profile whose time splits between the project's own code and a
     * dependency, with a third function too small to account for a hundredth of
     * it.
     */
    const makeMixedProfile = () =>
      makeAggregatedCallStackProfile(
        [MICROSECONDS_METRIC],
        [
          {
            name: `ourFunc`,
            url: `file:///project/src/a.ts`,
            selfCount: 60,
            selfValues: [600],
          },
          {
            name: `libFunc`,
            url: `file:///project/node_modules/lib/index.js`,
            selfCount: 39,
            selfValues: [390],
            stack: [1, 0],
          },
          {
            name: `nativeCall`,
            selfCount: 1,
            selfValues: [1],
            stack: [2, 0],
          },
        ],
        // Aggregated as `node` so a `node_modules/` location categorizes as
        // `third-party`, which is a JavaScript ecosystem convention.
        { format: `v8-cpu-profile`, origin: `node` },
      )

    test(`splits a ranking into a subsection per qualifying category`, () => {
      const md = mdastToMarkdown(
        formatCallStackProfile(makeMixedProfile(), defaultOptions),
      )

      expect(rankingTable(md, `Self time`)).toEqual([
        {
          '%': `60.5%`,
          Time: `0.6ms`,
          Samples: `60`,
          Function: `ourFunc`,
          Location: `src/a.ts`,
        },
        {
          '%': `39.4%`,
          Time: `0.4ms`,
          Samples: `39`,
          Function: `libFunc`,
          Location: `node_modules/lib/index.js`,
        },
        {
          '%': `0.1%`,
          Time: `1.0µs`,
          Samples: `1`,
          Function: `nativeCall`,
          Location: `<unknown>`,
        },
      ])
      expect(categorySectionTables(md, `Self time`)).toEqual({
        Ours: [
          {
            '%': `60.5%`,
            Time: `0.6ms`,
            Samples: `60`,
            Function: `ourFunc`,
            Location: `src/a.ts`,
          },
        ],
        'Third-party': [
          {
            '%': `39.4%`,
            Time: `0.4ms`,
            Samples: `39`,
            Function: `libFunc`,
            Location: `node_modules/lib/index.js`,
          },
        ],
      })
    })

    test(`drops a category below minCategoryShare`, () => {
      // `nativeCall` has no location, so it is `native`, and accounts for 0.1%
      // of the profile.
      const md = mdastToMarkdown(
        formatCallStackProfile(makeMixedProfile(), defaultOptions),
      )

      expect(Object.keys(categorySectionTables(md, `Self time`))).toEqual([
        `Ours`,
        `Third-party`,
      ])
      expect(md).toContain(`nativeCall`)
    })

    test(`breaks down a function only a category subsection ranks`, () => {
      const md = mdastToMarkdown(
        formatCallStackProfile(
          makeMixedProfile(),
          resolveProfileToMdOptions({ baseURL: `/project`, topN: 1 }),
        ),
      )

      // The overall ranking shows `ourFunc` alone, so `libFunc` reaches the
      // output through its category's subsection and must be broken down too.
      expect(selfTimeTables(md)).toEqual([
        [
          {
            '%': `60.5%`,
            Time: `0.6ms`,
            Samples: `60`,
            Function: `ourFunc`,
            Location: `src/a.ts`,
          },
        ],
      ])
      expect(callersTables(md, `libFunc`)).toEqual([
        [
          {
            '%': `100.0%`,
            Time: `0.4ms`,
            Samples: `39`,
            Caller: `ourFunc`,
            Location: `src/a.ts`,
          },
        ],
      ])
    })

    test(`splits a ranking whose entries all fall in one category`, () => {
      const profile = makeAggregatedCallStackProfile(
        [MICROSECONDS_METRIC],
        [
          {
            name: `ourFunc`,
            url: `file:///project/src/a.ts`,
            selfCount: 100,
            selfValues: [1000],
          },
        ],
      )

      const md = mdastToMarkdown(
        formatCallStackProfile(profile, defaultOptions),
      )

      expect(rankingTable(md, `Self time`)).toBeUndefined()
      expect(categorySectionTables(md, `Self time`)).toEqual({
        Ours: [
          {
            '%': `100.0%`,
            Time: `1.0ms`,
            Samples: `100`,
            Function: `ourFunc`,
            Location: `src/a.ts`,
          },
        ],
      })
    })

    test(`minCategoryShare of 0 keeps every category`, () => {
      const md = mdastToMarkdown(
        formatCallStackProfile(
          makeMixedProfile(),
          resolveProfileToMdOptions({
            baseURL: `/project`,
            minCategoryShare: 0,
          }),
        ),
      )

      expect(Object.keys(categorySectionTables(md, `Self time`))).toEqual([
        `Ours`,
        `Third-party`,
        `Native`,
      ])
    })
  })

  test(`names a profile's counts by what one of them is`, () => {
    const profile = makeAggregatedCallStackProfile(
      [MEGABYTES_METRIC],
      [
        {
          name: `allocate`,
          url: `file:///project/src/a.ts`,
          selfCount: 4,
          selfValues: [8],
        },
      ],
      undefined,
      countMetricOf(`entry`, { improvement: `decrease` }),
    )

    const md = mdastToMarkdown(formatCallStackProfile(profile, defaultOptions))

    expect(summaryLines(md)).toEqual([
      `Allocated 8\u00A0MiB over 4 entries (2\u00A0MiB per entry).`,
    ])
    expect(categoryTables(md)).toEqual([
      [{ Category: `Ours`, '%': `100.0%`, Size: `8 MiB`, Entries: `4` }],
    ])
  })

  test(`ranks a metric-less profile by its counts`, () => {
    const profile = makeAggregatedCallStackProfile(
      [],
      [
        {
          name: `spawn`,
          url: `file:///project/src/a.ts`,
          selfCount: 3,
          selfValues: [],
        },
      ],
      undefined,
      countMetricOf(`goroutine`, { improvement: `decrease` }),
    )

    const md = mdastToMarkdown(formatCallStackProfile(profile, defaultOptions))

    expect(profileTitles(md)).toEqual([`Goroutine profile`])
    expect(summaryLines(md)).toEqual([`Recorded 3 goroutines.`])
    expect(categoryTables(md)).toEqual([
      [{ Category: `Ours`, '%': `100.0%`, Goroutines: `3` }],
    ])
  })

  test(`omits the count column and the rate when the counts measure nothing`, () => {
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 5,
          selfValues: [300],
        },
      ],
      undefined,
      null,
    )

    const md = mdastToMarkdown(formatCallStackProfile(profile, defaultOptions))

    expect(summaryLines(md)).toEqual([`Took 0.3ms.`])
    expect(categoryTables(md)).toEqual([
      [{ Category: `Ours`, '%': `100.0%`, Time: `0.3ms` }],
    ])
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Function: `funcA`,
          Location: `src/a.ts`,
        },
      ],
    ])
  })
})

describe(`formatCallStackProfileDiff`, () => {
  test(`produces expected title`, () => {
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 5,
          selfValues: [100],
        },
      ],
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 10,
          selfValues: [200],
        },
      ],
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatCallStackProfileDiff(diff, defaultOptions))

    expect(profileTitles(md)).toEqual([`CPU profile diff`])
  })

  test(`includes base and current summary lines`, () => {
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 5,
          selfValues: [100],
        },
      ],
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 10,
          selfValues: [200],
        },
      ],
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatCallStackProfileDiff(diff, defaultOptions))

    const lines = summaryLines(md)
    expect(lines).toHaveLength(1)
    expect(lines[0]).toMatch(/^Took/u)
    expect(lines[0]).toMatch(/→/u)
  })

  test(`dashes the rate of a side that counted nothing`, () => {
    const base = makeAggregatedCallStackProfile(
      [BYTES_METRIC],
      [],
      undefined,
      countMetricOf(`object`, { improvement: `decrease` }),
    )
    const current = makeAggregatedCallStackProfile(
      [BYTES_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 2,
          selfValues: [512],
        },
      ],
      undefined,
      countMetricOf(`object`, { improvement: `decrease` }),
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatCallStackProfileDiff(diff, defaultOptions))

    expect(summaryLines(md)).toEqual([
      `Allocated 0\u00A0B → 512\u00A0B (+512\u00A0B, new) over 0 objects → 2 objects (— → 256\u00A0B per object).`,
    ])
  })

  test(`includes category table with delta and change`, () => {
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 5,
          selfValues: [100],
        },
      ],
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 10,
          selfValues: [200],
        },
      ],
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatCallStackProfileDiff(diff, defaultOptions))

    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `Ours`,
          Change: `+100.0%`,
          Delta: `+0.10ms`,
          '%': `100.0%`,
          Time: `0.1ms → 0.2ms`,
          Samples: `5 → 10`,
        },
      ],
    ])
  })

  test(`lists regressions and improvements per direction`, () => {
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfCount: 5,
          selfValues: [100],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          line: 20,
          selfCount: 3,
          selfValues: [60],
        },
      ],
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfCount: 10,
          selfValues: [200],
        },
        {
          name: `funcC`,
          url: `file:///project/src/c.ts`,
          line: 30,
          selfCount: 2,
          selfValues: [40],
        },
      ],
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatCallStackProfileDiff(diff, defaultOptions))

    // FuncA grew (regression); funcC is new (regression); funcB was removed
    // (improvement). funcA and funcB are leaves, so self and total match.
    const expectedRegressions = [
      {
        Change: `+100.0%`,
        Delta: `+0.10ms`,
        '%': `62.5% → 83.3%`,
        Time: `0.1ms → 0.2ms`,
        Samples: `5 → 10`,
        Function: `funcA`,
        Location: `src/a.ts:10`,
      },
      {
        Change: `new`,
        Delta: `+0.04ms`,
        '%': `0.0% → 16.7%`,
        Time: `0ms → 40.0µs`,
        Samples: `0 → 2`,
        Function: `funcC`,
        Location: `src/c.ts:30`,
      },
    ]
    const expectedImprovements = [
      {
        Change: `removed`,
        Delta: `-0.06ms`,
        '%': `37.5% → 0.0%`,
        Time: `0.1ms → 0ms`,
        Samples: `3 → 0`,
        Function: `funcB`,
        Location: `src/b.ts:20`,
      },
    ]

    expect(rankingTables(md, `Self time`, `Regressions`)).toEqual([
      expectedRegressions,
    ])
    expect(rankingTables(md, `Self time`, `Improvements`)).toEqual([
      expectedImprovements,
    ])
    expect(rankingTables(md, `Total time`, `Regressions`)).toEqual([
      expectedRegressions,
    ])
    expect(rankingTables(md, `Total time`, `Improvements`)).toEqual([
      expectedImprovements,
    ])
  })

  test(`names each ranking after its change when the metric's improvement direction is unknown`, () => {
    const md = formatDiffOfMetric(
      parseMetric({ name: `weight`, unit: `weight` }),
    )

    expect(rankingTables(md, `Self weight`, `Increases`)).toEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+100`,
          '%': `62.5% → 90.9%`,
          Weight: `100 → 200`,
          Samples: `5 → 10`,
          Function: `funcA`,
          Location: `src/a.ts:10`,
        },
      ],
    ])
    expect(rankingTables(md, `Self weight`, `Decreases`)).toEqual([
      [
        {
          Change: `-66.7%`,
          Delta: `-40`,
          '%': `37.5% → 9.1%`,
          Weight: `60 → 20`,
          Samples: `3 → 1`,
          Function: `funcB`,
          Location: `src/b.ts:20`,
        },
      ],
    ])
    expect(rankingTables(md, `Self weight`, `Regressions`)).toEqual([])
    expect(rankingTables(md, `Self weight`, `Improvements`)).toEqual([])
    expect(md).toContain(
      `Functions with the largest increase in weight recorded directly in the function body, excluding callees.`,
    )
    expect(md.indexOf(`#### Increases`)).toBeLessThan(
      md.indexOf(`#### Decreases`),
    )
  })

  test(`ranks a decrease as a regression when a higher value is an improvement`, () => {
    const md = formatDiffOfMetric(
      parseMetric({
        name: `request`,
        unit: `request`,
        improvement: `increase`,
      }),
    )

    expect(rankingTables(md, `Self request`, `Regressions`)).toEqual([
      [
        {
          Change: `-66.7%`,
          Delta: `-40`,
          '%': `37.5% → 9.1%`,
          Request: `60 → 20`,
          Samples: `3 → 1`,
          Function: `funcB`,
          Location: `src/b.ts:20`,
        },
      ],
    ])
    expect(rankingTables(md, `Self request`, `Improvements`)).toEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+100`,
          '%': `62.5% → 90.9%`,
          Request: `100 → 200`,
          Samples: `5 → 10`,
          Function: `funcA`,
          Location: `src/a.ts:10`,
        },
      ],
    ])
    expect(md).toContain(
      `Functions with the largest decrease in request recorded directly in the function body, excluding callees.`,
    )
    expect(md.indexOf(`#### Regressions`)).toBeLessThan(
      md.indexOf(`#### Improvements`),
    )
  })

  test(`omits functions hidden by showEntry without hiding functions from the other profile`, () => {
    // FuncB exists only in the base profile and funcC only in the current
    // profile, so they have the same profile-local function ID; hiding funcB
    // must not hide funcC.
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfCount: 5,
          selfValues: [100],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          line: 20,
          selfCount: 3,
          selfValues: [60],
        },
      ],
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfCount: 10,
          selfValues: [200],
        },
        {
          name: `funcC`,
          url: `file:///project/src/c.ts`,
          line: 30,
          selfCount: 2,
          selfValues: [40],
        },
      ],
    )
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `funcB`,
    })

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatCallStackProfileDiff(diff, options))

    expect(md).not.toContain(`funcB`)
    expect(rankingTables(md, `Self time`, `Regressions`)).toEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+0.10ms`,
          '%': `62.5% → 83.3%`,
          Time: `0.1ms → 0.2ms`,
          Samples: `5 → 10`,
          Function: `funcA`,
          Location: `src/a.ts:10`,
        },
        {
          Change: `new`,
          Delta: `+0.04ms`,
          '%': `0.0% → 16.7%`,
          Time: `0ms → 40.0µs`,
          Samples: `0 → 2`,
          Function: `funcC`,
          Location: `src/c.ts:30`,
        },
      ],
    ])
    expect(rankingTables(md, `Self time`, `Improvements`)).toEqual([])
  })

  test(`notes that each function section is unchanged when nothing changed`, () => {
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfCount: 5,
          selfValues: [100],
        },
      ],
    )

    const diff = diffAggregatedCallStackProfiles(
      profile,
      profile,
      defaultOptions,
    )
    const md = mdastToMarkdown(formatCallStackProfileDiff(diff, defaultOptions))

    // The unchanged total reads as a measurement, so it omits the change suffix
    // a zero delta would otherwise produce.
    expect(summaryLines(md)).toEqual([
      `Took 0.1ms over 5 samples (20.0µs per sample).`,
    ])

    // The sections are still formatted, with a note in place of empty tables so
    // the output doesn't look broken.
    expect(md).toMatch(/^## Hottest functions$/mu)
    expect(rankingTables(md, `Self time`, `Regressions`)).toEqual([])
    expect(rankingTables(md, `Self time`, `Improvements`)).toEqual([])
    expect(md).toContain(
      `No function differed in time spent directly in the function body, excluding callees.`,
    )
    expect(md).toContain(
      `No function differed in total time spent in the function and all its callees.`,
    )

    // The category table is still formatted with a zero delta.
    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `Ours`,
          Change: `0.0%`,
          Delta: `0ms`,
          '%': `100.0%`,
          Time: `0.1ms`,
          Samples: `5`,
        },
      ],
    ])
  })

  test(`omits each function section a non-diff profile would omit instead of noting it`, () => {
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfCount: 5,
          selfValues: [100],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          line: 10,
          selfCount: 5,
          selfValues: [0],
        },
      ],
    )
    // Hiding the only active function leaves nothing to rank while funcB
    // keeps the filter from emptying the whole profile, so a non-diff profile
    // would omit the function sections entirely.
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `funcA`,
    })

    const diff = diffAggregatedCallStackProfiles(
      profile,
      profile,
      defaultOptions,
    )
    const md = mdastToMarkdown(formatCallStackProfileDiff(diff, options))

    expect(md).not.toMatch(/^## Hottest functions$/mu)
    expect(md).not.toContain(`No function differed`)
  })

  test(`notes the unchanged metric while detailing the changed one in a multi-metric diff`, () => {
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC, MEGABYTES_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfCount: 5,
          selfValues: [100, 100],
        },
      ],
    )
    // Only the CPU metric changes; the heap metric is identical on both sides.
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC, MEGABYTES_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfCount: 5,
          selfValues: [200, 100],
        },
      ],
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatCallStackProfileDiff(diff, defaultOptions))

    expect(md).toMatch(/^## CPU$/mu)
    expect(md).toMatch(/^## Heap$/mu)
    expect(rankingTables(md, `Self time`, `Regressions`)).not.toEqual([])
    expect(md).toContain(
      `No function differed in bytes allocated directly in the function body, excluding callees.`,
    )
    expect(md).toContain(
      `No function differed in total bytes allocated in the function and all its callees.`,
    )
  })

  test(`notes a metric with no recorded values on either side in place of its sections`, () => {
    const base = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC, RETAINED_HEAP_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 5,
          selfValues: [100, 0],
        },
      ],
    )
    const current = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC, RETAINED_HEAP_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 5,
          selfValues: [200, 0],
        },
      ],
    )

    const diff = diffAggregatedCallStackProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatCallStackProfileDiff(diff, defaultOptions))

    expect(md).toMatch(/^## CPU$/mu)
    expect(md).toContain(`## Retained heap\n\nNo bytes retained in any sample.`)
    expect(md).not.toContain(`No function differed in bytes retained`)
  })

  test(`omits a metric's heading when hidden entries leave it without sections`, () => {
    const profile = makeAggregatedCallStackProfile(
      [MICROSECONDS_METRIC, MEGABYTES_METRIC],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfCount: 5,
          selfValues: [100, 100],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          selfCount: 5,
          selfValues: [0, 100],
        },
      ],
    )
    // Hiding funcA leaves the CPU metric with no active shown function, so
    // its heading should not dangle without sections, while the heap metric
    // still renders via funcB.
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `funcA`,
    })

    const diff = diffAggregatedCallStackProfiles(
      profile,
      profile,
      defaultOptions,
    )
    const md = mdastToMarkdown(formatCallStackProfileDiff(diff, options))

    expect(md).not.toMatch(/^## CPU$/mu)
    expect(md).toMatch(/^## Heap$/mu)
  })

  describe(`category subsections`, () => {
    /**
     * A profile whose time splits between the project's own code and a
     * dependency, with a third function too small to account for a hundredth of
     * it.
     */
    const makeMixedProfile = (selfValues: [number, number, number]) =>
      makeAggregatedCallStackProfile(
        [MICROSECONDS_METRIC],
        [
          {
            name: `ourFunc`,
            url: `file:///project/src/a.ts`,
            selfCount: selfValues[0],
            selfValues: [selfValues[0] * 10],
          },
          {
            name: `libFunc`,
            url: `file:///project/node_modules/lib/index.js`,
            selfCount: selfValues[1],
            selfValues: [selfValues[1] * 10],
            stack: [1, 0],
          },
          {
            name: `nativeCall`,
            selfCount: selfValues[2],
            selfValues: [selfValues[2] * 10],
            stack: [2, 0],
          },
        ],
        // Aggregated as `node` so a `node_modules/` location categorizes as
        // `third-party`, which is a JavaScript ecosystem convention.
        { format: `v8-cpu-profile`, origin: `node` },
      )

    const diffMixedProfiles = (
      base: [number, number, number],
      current: [number, number, number],
    ) =>
      mdastToMarkdown(
        formatCallStackProfileDiff(
          diffAggregatedCallStackProfiles(
            makeMixedProfile(base),
            makeMixedProfile(current),
            defaultOptions,
          ),
          defaultOptions,
        ),
      )

    test(`splits each ranking into a subsection per qualifying category`, () => {
      const md = diffMixedProfiles([60, 39, 1], [30, 70, 1])

      expect(categoryRankingTables(md, `Self time`, `Regressions`)).toEqual({
        'Third-party': [
          {
            '%': `39.0% → 69.3%`,
            Change: `+79.5%`,
            Delta: `+0.31ms`,
            Time: `0.4ms → 0.7ms`,
            Samples: `39 → 70`,
            Function: `libFunc`,
            Location: `node_modules/lib/index.js`,
          },
        ],
      })
      expect(categoryRankingTables(md, `Self time`, `Improvements`)).toEqual({
        Ours: [
          {
            '%': `60.0% → 29.7%`,
            Change: `-50.0%`,
            Delta: `-0.30ms`,
            Time: `0.6ms → 0.3ms`,
            Samples: `60 → 30`,
            Function: `ourFunc`,
            Location: `src/a.ts`,
          },
        ],
      })
    })

    test(`ranks a diff's entries above their category subsections`, () => {
      const md = diffMixedProfiles([60, 39, 1], [30, 70, 10])

      expect(diffRankingTable(md, `Self time`, `Regressions`)).toEqual([
        {
          '%': `39.0% → 63.6%`,
          Change: `+79.5%`,
          Delta: `+0.31ms`,
          Time: `0.4ms → 0.7ms`,
          Samples: `39 → 70`,
          Function: `libFunc`,
          Location: `node_modules/lib/index.js`,
        },
        {
          '%': `1.0% → 9.1%`,
          Change: `+900.0%`,
          Delta: `+0.09ms`,
          Time: `10.0µs → 0.1ms`,
          Samples: `1 → 10`,
          Function: `nativeCall`,
          Location: `<unknown>`,
        },
      ])
      expect(
        Object.keys(categoryRankingTables(md, `Self time`, `Regressions`)),
      ).toEqual([`Third-party`, `Native`])
    })

    test(`admits a category by its larger side`, () => {
      // The dependency's share drops from 39.0% to under 1%, so only its base
      // side meets the threshold.
      const md = diffMixedProfiles([60, 39, 1], [100, 1, 1])

      expect(
        Object.keys(categoryRankingTables(md, `Self time`, `Improvements`)),
      ).toEqual([`Third-party`])
    })

    test(`splits a ranking whose entries all fall in one category`, () => {
      const md = diffMixedProfiles([100, 0, 0], [50, 0, 0])

      expect(diffRankingTable(md, `Self time`, `Improvements`)).toBeUndefined()
      expect(categoryRankingTables(md, `Self time`, `Improvements`)).toEqual({
        Ours: [
          {
            '%': `100.0%`,
            Change: `-50.0%`,
            Delta: `-0.50ms`,
            Time: `1.0ms → 0.5ms`,
            Samples: `100 → 50`,
            Function: `ourFunc`,
            Location: `src/a.ts`,
          },
        ],
      })
    })

    test(`drops a category below the threshold on both sides`, () => {
      // The dependency's two functions swap which one runs, so it accounts for
      // 0.7% of each side while its functions' larger shares add up to more
      // than the threshold.
      const churning = (firstSamples: number, secondSamples: number) =>
        makeAggregatedCallStackProfile(
          [MICROSECONDS_METRIC],
          [
            {
              name: `ourFunc`,
              url: `file:///project/src/a.ts`,
              selfCount: 994,
              selfValues: [9940],
            },
            {
              name: `libFirst`,
              url: `file:///project/node_modules/lib/first.js`,
              selfCount: firstSamples,
              selfValues: [firstSamples * 10],
              stack: [1, 0],
            },
            {
              name: `libSecond`,
              url: `file:///project/node_modules/lib/second.js`,
              selfCount: secondSamples,
              selfValues: [secondSamples * 10],
              stack: [2, 0],
            },
          ],
          { format: `v8-cpu-profile`, origin: `node` },
        )

      const md = mdastToMarkdown(
        formatCallStackProfileDiff(
          diffAggregatedCallStackProfiles(
            churning(6, 1),
            churning(1, 6),
            defaultOptions,
          ),
          defaultOptions,
        ),
      )

      expect(categoryRankingTables(md, `Self time`, `Regressions`)).toEqual({})
    })
  })
})
