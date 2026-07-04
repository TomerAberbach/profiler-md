import { describe, expect, test } from 'vitest'
import { normalizeProfileToMdOptions } from '../options.ts'
import {
  callStackTables,
  categoryTables,
  improvementsTables,
  profileTitles,
  regressionsTables,
  summaryLines,
  totalTimeTables,
} from '../testing/markdown.ts'
import { ProfileAggregator } from './aggregate.ts'
import { diffAggregatedProfiles } from './diff.ts'
import { formatProfile, formatProfileDiff } from './format.ts'
import { determineMetric, MEGABYTES, MICROSECONDS } from './metric.ts'
import type { Metric } from './metric.ts'

const makeProfile = (
  metrics: Metric[],
  functions: {
    name: string
    url?: string
    line?: number
    sampleCount: number
    values: number[]
    /** Leaf-to-caller frame indices of each sample; defaults to the function alone. */
    stack?: number[]
  }[],
) => {
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
    for (let i = 0; i < func.sampleCount; i++) {
      aggregator.addSample({
        values: func.values.map(value => value / func.sampleCount),
        frameIndices: func.stack ?? [index],
      })
    }
  }

  return aggregator.aggregate()
}

const defaultOptions = normalizeProfileToMdOptions({ baseURL: `/project` })

/** The gperftools in-use metric, all zeros when nothing was live at dump time. */
const RETAINED_BYTES = determineMetric({ name: `inuse_space`, unit: `bytes` })

describe(`formatProfile`, () => {
  test(`omits zero-valued call stacks from the hottest call stacks table`, () => {
    const profile = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `hotLeaf`,
          url: `file:///project/src/a.ts`,
          sampleCount: 5,
          values: [300],
          stack: [0, 1],
        },
        {
          name: `hotCaller`,
          url: `file:///project/src/b.ts`,
          sampleCount: 0,
          values: [0],
        },
        {
          name: `coldLeaf`,
          url: `file:///project/src/c.ts`,
          sampleCount: 5,
          values: [0],
          stack: [2, 3],
        },
        {
          name: `coldCaller`,
          url: `file:///project/src/d.ts`,
          sampleCount: 0,
          values: [0],
        },
      ],
    )

    const md = formatProfile(profile, defaultOptions)

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

  test(`shows an external function directly called by ours even when it has no self samples`, () => {
    // Main (ours) → extMid (stdlib, never a leaf) → extLeaf (stdlib). The
    // default filter hides external implementation details (extLeaf, called
    // only by stdlib) but must keep extMid: it's the external API surface ours
    // code calls directly, even though it has zero self samples.
    const profile = makeProfile(
      [MICROSECONDS],
      [
        { name: `extLeaf`, sampleCount: 5, values: [300], stack: [0, 1, 2] },
        { name: `extMid`, sampleCount: 0, values: [0] },
        {
          name: `main`,
          url: `file:///project/src/main.ts`,
          sampleCount: 0,
          values: [0],
        },
      ],
    )

    const md = formatProfile(profile, defaultOptions)

    expect(totalTimeTables(md)).toEqual([
      [
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
    expect(md).not.toContain(`extLeaf`)
  })

  test(`merges call stacks that differ only in hidden frames into one row`, () => {
    // Two stacks share the visible suffix extApi ← main but end in different
    // hidden stdlib leaves. Without merging they'd render as two identical
    // rows, each carrying only its own slice of the value.
    const profile = makeProfile(
      [MICROSECONDS],
      [
        { name: `extLeafA`, sampleCount: 3, values: [180], stack: [0, 2, 3] },
        { name: `extLeafB`, sampleCount: 2, values: [120], stack: [1, 2, 3] },
        { name: `extApi`, sampleCount: 0, values: [0] },
        {
          name: `main`,
          url: `file:///project/src/main.ts`,
          sampleCount: 0,
          values: [0],
        },
      ],
    )

    const md = formatProfile(profile, defaultOptions)

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

  test(`shows all functions when the default filter would hide every one`, () => {
    // A profile sampled entirely inside external code, with no frame of ours
    // anywhere (e.g. a runtime dump or a lock profile parked in the JDK). The
    // default filter would hide everything, emptying the body, so it is
    // disabled with a note instead.
    const profile = makeProfile(
      [MICROSECONDS],
      [
        { name: `extLeaf`, sampleCount: 5, values: [300], stack: [0, 1] },
        { name: `extRoot`, sampleCount: 0, values: [0] },
      ],
    )

    const md = formatProfile(profile, defaultOptions)

    expect(md).toContain(
      `The entry filter hides every sampled function, so all functions are shown.`,
    )
    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          'Call stack': `extLeaf ← extRoot`,
        },
      ],
    ])
  })

  test(`shows all functions when a custom showEntry would hide every one`, () => {
    const profile = makeProfile(
      [MICROSECONDS],
      [
        { name: `funcA`, sampleCount: 5, values: [300], stack: [0, 1] },
        { name: `funcB`, sampleCount: 0, values: [0] },
      ],
    )
    const options = normalizeProfileToMdOptions({
      baseURL: `/project`,
      showEntry: () => false,
    })

    const md = formatProfile(profile, options)

    expect(md).toContain(
      `The entry filter hides every sampled function, so all functions are shown.`,
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
    const profile = makeProfile(
      [MICROSECONDS, RETAINED_BYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          sampleCount: 5,
          values: [300, 0],
        },
      ],
    )

    const md = formatProfile(profile, defaultOptions)

    expect(md).toMatch(/^## CPU$/mu)
    expect(md).toContain(`## Retained heap\n\nNo bytes retained in any sample.`)
  })

  test(`notes a single metric with no recorded values in place of all sections`, () => {
    const profile = makeProfile(
      [RETAINED_BYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          sampleCount: 5,
          values: [0],
        },
      ],
    )

    const md = formatProfile(profile, defaultOptions)

    expect(md).toContain(`No bytes retained in any sample.`)
    expect(md).not.toContain(`Hottest`)
  })
})

describe(`formatProfileDiff`, () => {
  test(`produces expected title`, () => {
    const base = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          sampleCount: 5,
          values: [100],
        },
      ],
    )
    const current = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          sampleCount: 10,
          values: [200],
        },
      ],
    )

    const diff = diffAggregatedProfiles(base, current, defaultOptions)
    const md = formatProfileDiff(diff, defaultOptions)

    expect(profileTitles(md)).toEqual([`CPU profile diff`])
  })

  test(`includes base and current summary lines`, () => {
    const base = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          sampleCount: 5,
          values: [100],
        },
      ],
    )
    const current = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          sampleCount: 10,
          values: [200],
        },
      ],
    )

    const diff = diffAggregatedProfiles(base, current, defaultOptions)
    const md = formatProfileDiff(diff, defaultOptions)

    const lines = summaryLines(md)
    expect(lines).toHaveLength(1)
    expect(lines[0]).toMatch(/^Took/u)
    expect(lines[0]).toMatch(/→/u)
  })

  test(`includes category table with delta and change`, () => {
    const base = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          sampleCount: 5,
          values: [100],
        },
      ],
    )
    const current = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          sampleCount: 10,
          values: [200],
        },
      ],
    )

    const diff = diffAggregatedProfiles(base, current, defaultOptions)
    const md = formatProfileDiff(diff, defaultOptions)

    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `ours`,
          Change: `+100.0%`,
          Delta: `+0.1ms`,
          '%': `100.0%`,
          Time: `0.1ms → 0.2ms`,
          Samples: `5 → 10`,
        },
      ],
    ])
  })

  test(`lists regressions and progressions per direction`, () => {
    const base = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          sampleCount: 5,
          values: [100],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          line: 20,
          sampleCount: 3,
          values: [60],
        },
      ],
    )
    const current = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          sampleCount: 10,
          values: [200],
        },
        {
          name: `funcC`,
          url: `file:///project/src/c.ts`,
          line: 30,
          sampleCount: 2,
          values: [40],
        },
      ],
    )

    const diff = diffAggregatedProfiles(base, current, defaultOptions)
    const md = formatProfileDiff(diff, defaultOptions)

    // FuncA grew (regression); funcC is new (regression); funcB was removed
    // (progression). funcA and funcB are leaves, so self and total match.
    const expectedRegressions = [
      {
        Change: `+100.0%`,
        Delta: `+0.1ms`,
        '%': `62.5% → 83.3%`,
        Time: `0.1ms → 0.2ms`,
        Samples: `5 → 10`,
        Function: `funcA`,
        Location: `src/a.ts:10`,
      },
      {
        Change: `new`,
        Delta: `+40.0µs`,
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
        Delta: `-0.1ms`,
        '%': `37.5% → 0.0%`,
        Time: `0.1ms → 0ms`,
        Samples: `3 → 0`,
        Function: `funcB`,
        Location: `src/b.ts:20`,
      },
    ]

    expect(regressionsTables(md, `Self time`)).toEqual([expectedRegressions])
    expect(improvementsTables(md, `Self time`)).toEqual([expectedImprovements])
    expect(regressionsTables(md, `Total time`)).toEqual([expectedRegressions])
    expect(improvementsTables(md, `Total time`)).toEqual([expectedImprovements])
  })

  test(`omits functions hidden by showEntry without hiding functions from the other profile`, () => {
    // FuncB exists only in the base profile and funcC only in the current
    // profile, so they have the same profile-local function ID; hiding funcB
    // must not hide funcC.
    const base = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          sampleCount: 5,
          values: [100],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          line: 20,
          sampleCount: 3,
          values: [60],
        },
      ],
    )
    const current = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          sampleCount: 10,
          values: [200],
        },
        {
          name: `funcC`,
          url: `file:///project/src/c.ts`,
          line: 30,
          sampleCount: 2,
          values: [40],
        },
      ],
    )
    const options = normalizeProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `funcB`,
    })

    const diff = diffAggregatedProfiles(base, current, defaultOptions)
    const md = formatProfileDiff(diff, options)

    expect(md).not.toContain(`funcB`)
    expect(regressionsTables(md, `Self time`)).toEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+0.1ms`,
          '%': `62.5% → 83.3%`,
          Time: `0.1ms → 0.2ms`,
          Samples: `5 → 10`,
          Function: `funcA`,
          Location: `src/a.ts:10`,
        },
        {
          Change: `new`,
          Delta: `+40.0µs`,
          '%': `0.0% → 16.7%`,
          Time: `0ms → 40.0µs`,
          Samples: `0 → 2`,
          Function: `funcC`,
          Location: `src/c.ts:30`,
        },
      ],
    ])
    expect(improvementsTables(md, `Self time`)).toEqual([])
  })

  test(`notes that each function section is unchanged when nothing changed`, () => {
    const profile = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          sampleCount: 5,
          values: [100],
        },
      ],
    )

    const diff = diffAggregatedProfiles(profile, profile, defaultOptions)
    const md = formatProfileDiff(diff, defaultOptions)

    // The unchanged total would read as a single measurement rather than a
    // comparison, so it's marked explicitly.
    expect(summaryLines(md)).toEqual([
      `Took 0.1ms over 5 samples (20.0µs per sample) (unchanged).`,
    ])

    // The sections are still formatted, with a note in place of empty tables so
    // the output doesn't look broken.
    expect(md).toMatch(/^## Hottest functions$/mu)
    expect(regressionsTables(md, `Self time`)).toEqual([])
    expect(improvementsTables(md, `Self time`)).toEqual([])
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
          Category: `ours`,
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
    const profile = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          sampleCount: 5,
          values: [100],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          line: 10,
          sampleCount: 5,
          values: [0],
        },
      ],
    )
    // Hiding the only active function leaves nothing to rank while funcB
    // keeps the filter from emptying the whole profile, so a non-diff profile
    // would omit the function sections entirely.
    const options = normalizeProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `funcA`,
    })

    const diff = diffAggregatedProfiles(profile, profile, defaultOptions)
    const md = formatProfileDiff(diff, options)

    expect(md).not.toMatch(/^## Hottest functions$/mu)
    expect(md).not.toContain(`No function differed`)
  })

  test(`notes the unchanged metric while detailing the changed one in a multi-metric diff`, () => {
    const base = makeProfile(
      [MICROSECONDS, MEGABYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          sampleCount: 5,
          values: [100, 100],
        },
      ],
    )
    // Only the CPU metric changes; the heap metric is identical on both sides.
    const current = makeProfile(
      [MICROSECONDS, MEGABYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          sampleCount: 5,
          values: [200, 100],
        },
      ],
    )

    const diff = diffAggregatedProfiles(base, current, defaultOptions)
    const md = formatProfileDiff(diff, defaultOptions)

    expect(md).toMatch(/^## CPU$/mu)
    expect(md).toMatch(/^## Heap$/mu)
    expect(regressionsTables(md, `Self time`)).not.toEqual([])
    expect(md).toContain(
      `No function differed in bytes allocated directly in the function body, excluding callees.`,
    )
    expect(md).toContain(
      `No function differed in total bytes allocated in the function and all its callees.`,
    )
  })

  test(`notes a metric with no recorded values on either side in place of its sections`, () => {
    const base = makeProfile(
      [MICROSECONDS, RETAINED_BYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          sampleCount: 5,
          values: [100, 0],
        },
      ],
    )
    const current = makeProfile(
      [MICROSECONDS, RETAINED_BYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          sampleCount: 5,
          values: [200, 0],
        },
      ],
    )

    const diff = diffAggregatedProfiles(base, current, defaultOptions)
    const md = formatProfileDiff(diff, defaultOptions)

    expect(md).toMatch(/^## CPU$/mu)
    expect(md).toContain(`## Retained heap\n\nNo bytes retained in any sample.`)
    expect(md).not.toContain(`No function differed in bytes retained`)
  })

  test(`omits a metric's heading when hidden entries leave it without sections`, () => {
    const profile = makeProfile(
      [MICROSECONDS, MEGABYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          sampleCount: 5,
          values: [100, 100],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          sampleCount: 5,
          values: [0, 100],
        },
      ],
    )
    // Hiding funcA leaves the CPU metric with no active shown function, so
    // its heading should not dangle without sections, while the heap metric
    // still renders via funcB.
    const options = normalizeProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `funcA`,
    })

    const diff = diffAggregatedProfiles(profile, profile, defaultOptions)
    const md = formatProfileDiff(diff, options)

    expect(md).not.toMatch(/^## CPU$/mu)
    expect(md).toMatch(/^## Heap$/mu)
  })
})
