import { describe, expect, test } from 'vitest'
import { normalizeProfileToMdOptions } from '../options.ts'
import {
  categoryTables,
  profileTitles,
  progressionsTables,
  regressionsTables,
  summaryLines,
} from '../testing/markdown.ts'
import { ProfileAggregator } from './aggregate.ts'
import { diffAggregatedProfiles } from './diff.ts'
import { formatProfileDiff } from './format.ts'
import { MEGABYTES, MICROSECONDS } from './metric.ts'
import type { Metric } from './metric.ts'

const makeProfile = (
  metrics: Metric[],
  functions: {
    name: string
    url?: string
    line?: number
    sampleCount: number
    values: number[]
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
    const values = func.values.map(value => value / func.sampleCount)
    for (let i = 0; i < func.sampleCount; i++) {
      aggregator.addSample({ values, frameIndices: [index] })
    }
  }

  return aggregator.aggregate()
}

const defaultOptions = normalizeProfileToMdOptions({ baseURL: `/project` })

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
        Delta: `+0ms`,
        '%': `0.0% → 16.7%`,
        Time: `0ms`,
        Samples: `0 → 2`,
        Function: `funcC`,
        Location: `src/c.ts:30`,
      },
    ]
    const expectedProgressions = [
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
    expect(progressionsTables(md, `Self time`)).toEqual([expectedProgressions])
    expect(regressionsTables(md, `Total time`)).toEqual([expectedRegressions])
    expect(progressionsTables(md, `Total time`)).toEqual([expectedProgressions])
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
          Delta: `+0ms`,
          '%': `0.0% → 16.7%`,
          Time: `0ms`,
          Samples: `0 → 2`,
          Function: `funcC`,
          Location: `src/c.ts:30`,
        },
      ],
    ])
    expect(progressionsTables(md, `Self time`)).toEqual([])
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

    // The unchanged total reads as a measurement, so it omits the change suffix
    // a zero delta would otherwise produce.
    expect(summaryLines(md)).toEqual([
      `Took 0.1ms over 5 samples (20.0µs per sample).`,
    ])

    // The sections are still formatted, with a note in place of empty tables so
    // the output doesn't look broken.
    expect(md).toMatch(/^## Hottest functions$/mu)
    expect(regressionsTables(md, `Self time`)).toEqual([])
    expect(progressionsTables(md, `Self time`)).toEqual([])
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
      ],
    )
    // Hiding the only function leaves nothing active, so a non-diff profile
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
})
