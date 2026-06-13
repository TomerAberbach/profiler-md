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
import { MICROSECONDS } from './metric.ts'
import type { Metric } from './metric.ts'

const makeProfile = (
  metrics: Metric[],
  functions: {
    name: string
    url?: string
    line?: number
    sampleCount: number
    value: number
  }[],
) => {
  const options = normalizeProfileToMdOptions({ baseURL: `/project` })
  const aggregator = new ProfileAggregator(
    {
      metrics,
      functionKey: (node: { id: number }) => node.id,
      functionInput: (node: {
        id: number
        name: string
        url?: string
        line?: number
      }) => ({
        name: node.name,
        location: node.url
          ? { urlOrPath: node.url, line: node.line }
          : undefined,
      }),
    },
    options,
  )

  for (const [index, func] of functions.entries()) {
    const node = {
      id: index + 1,
      name: func.name,
      url: func.url,
      line: func.line,
    }
    for (let i = 0; i < func.sampleCount; i++) {
      aggregator.addSample({
        values: [func.value / func.sampleCount],
        nodes: [node],
      })
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
          value: 100,
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
          value: 200,
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
          value: 100,
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
          value: 200,
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
          value: 100,
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
          value: 200,
        },
      ],
    )

    const diff = diffAggregatedProfiles(base, current, defaultOptions)
    const md = formatProfileDiff(diff, defaultOptions)

    const tables = categoryTables(md)
    expect(tables).toHaveLength(1)
    expect(tables[0]![0]).toHaveProperty(`Category`)
    expect(tables[0]![0]).toHaveProperty(`Base`)
    expect(tables[0]![0]).toHaveProperty(`Current`)
    expect(tables[0]![0]).toHaveProperty(`Delta`)
    expect(tables[0]![0]).toHaveProperty(`Change`)
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
          value: 100,
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          line: 20,
          sampleCount: 3,
          value: 60,
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
          value: 200,
        },
        {
          name: `funcC`,
          url: `file:///project/src/c.ts`,
          line: 30,
          sampleCount: 2,
          value: 40,
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
        Base: `0.1ms`,
        Current: `0.2ms`,
        Function: `funcA`,
        Location: `src/a.ts:10`,
      },
      {
        Change: `new`,
        Delta: `+0ms`,
        Base: `0ms`,
        Current: `0ms`,
        Function: `funcC`,
        Location: `src/c.ts:30`,
      },
    ]
    const expectedProgressions = [
      {
        Change: `removed`,
        Delta: `-0.1ms`,
        Base: `0.1ms`,
        Current: `0ms`,
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
          value: 100,
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          line: 20,
          sampleCount: 3,
          value: 60,
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
          value: 200,
        },
        {
          name: `funcC`,
          url: `file:///project/src/c.ts`,
          line: 30,
          sampleCount: 2,
          value: 40,
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
          Base: `0.1ms`,
          Current: `0.2ms`,
          Function: `funcA`,
          Location: `src/a.ts:10`,
        },
        {
          Change: `new`,
          Delta: `+0ms`,
          Base: `0ms`,
          Current: `0ms`,
          Function: `funcC`,
          Location: `src/c.ts:30`,
        },
      ],
    ])
    expect(progressionsTables(md, `Self time`)).toEqual([])
  })

  test(`omits the function sections when nothing changed`, () => {
    const profile = makeProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          sampleCount: 5,
          value: 100,
        },
      ],
    )

    const diff = diffAggregatedProfiles(profile, profile, defaultOptions)
    const md = formatProfileDiff(diff, defaultOptions)

    expect(md).not.toMatch(/Hottest functions/u)
    expect(regressionsTables(md, `Self time`)).toEqual([])
    expect(progressionsTables(md, `Self time`)).toEqual([])

    // The category table still renders with a zero delta.
    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `ours`,
          Change: `0.0%`,
          Delta: `0ms`,
          Base: `0.1ms`,
          Current: `0.1ms`,
        },
      ],
    ])
  })
})
