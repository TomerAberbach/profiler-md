import { describe, expect, test } from 'vitest'
import { resolveProfileToMdOptions } from '../../options.ts'
import { openingParagraphs, summaryLines } from '../../testing.ts'
import { countMetricOf } from '../metric.ts'
import {
  headings,
  instant,
  makeAggregatedTrace,
  reading,
  span,
  summaryTables,
  tablesAt,
  tablesBySubheading,
  traceDiffMd,
} from './testing.ts'

/**
 * One direction of a span measure's ranking, whose spans all fall in the
 * `other` category.
 */
const spanRanking = (md: string, measure: string, ranking: string) =>
  tablesAt(md, [`Longest thread spans`, measure, ranking, `Other`])

const spanBreakdown = (md: string, breakdown: string) =>
  tablesBySubheading(md, [`Longest thread spans`, `Total time`, breakdown])

const repeat = <T>(count: number, make: () => T): T[] =>
  Array.from({ length: count }, make)

describe(`summary`, () => {
  test(`states each side's event count and recorded duration`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([
        span(`a`, { start: 0, duration: 100 }),
        instant(`mark`, { time: 50 }),
      ]),
      makeAggregatedTrace([
        span(`a`, { start: 0, duration: 150 }),
        instant(`mark`, { time: 50 }),
        instant(`mark`, { time: 60 }),
      ]),
    )

    expect(summaryLines(md)).toStrictEqual([
      `Recorded 2 → 3 events (+1, +50.0%) over 100.0ms → 150.0ms (+50.00ms, +50.0%).`,
    ])
  })

  test(`states no duration when a side times nothing`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([span(`a`, { duration: 100 })]),
      makeAggregatedTrace([span(`a`, { start: 0, duration: 100 })]),
    )

    expect(summaryLines(md)).toStrictEqual([`Recorded 1 event.`])
  })

  test(`diffs each category and each thread`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace(
        [
          span(`run`, {
            category: `script`,
            thread: 0,
            start: 0,
            duration: 50,
          }),
          span(`read`, { category: `io`, thread: 0, start: 50, duration: 50 }),
        ],
        { threads: [`main`] },
      ),
      makeAggregatedTrace(
        [
          span(`run`, {
            category: `script`,
            thread: 0,
            start: 0,
            duration: 80,
          }),
          span(`read`, { category: `io`, thread: 1, start: 80, duration: 20 }),
        ],
        { threads: [`main`, `worker`] },
      ),
    )

    expect(summaryTables(md)).toStrictEqual([
      [
        {
          Category: `Script`,
          Change: `+60.0%`,
          Delta: `+30.00ms`,
          '%': `50.0% → 80.0%`,
          Time: `50.0ms → 80.0ms`,
          Count: `1`,
        },
        {
          Category: `I/O`,
          Change: `-60.0%`,
          Delta: `-30.00ms`,
          '%': `50.0% → 20.0%`,
          Time: `50.0ms → 20.0ms`,
          Count: `1`,
        },
      ],
    ])
    expect(tablesAt(md, [`Threads`])).toStrictEqual([
      [
        {
          Thread: `main`,
          Change: `-20.0%`,
          Delta: `-20.00ms`,
          '%': `100.0% → 80.0%`,
          Time: `100.0ms → 80.0ms`,
          Count: `2 → 1`,
        },
        {
          Thread: `worker`,
          Change: `new`,
          Delta: `+20.00ms`,
          '%': `0.0% → 20.0%`,
          Time: `0ms → 20.0ms`,
          Count: `0 → 1`,
        },
      ],
    ])
  })

  test(`sorts categories by time when no side times a start`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([
        span(`read`, { category: `io`, duration: 90 }),
        ...repeat(5, () => span(`run`, { category: `script`, duration: 2 })),
      ]),
      makeAggregatedTrace([
        span(`read`, { category: `io`, duration: 60 }),
        ...repeat(5, () => span(`run`, { category: `script`, duration: 2 })),
      ]),
    )

    expect(summaryTables(md)).toStrictEqual([
      [
        {
          Category: `I/O`,
          Change: `-33.3%`,
          Delta: `-30.00ms`,
          Time: `90.0ms → 60.0ms`,
          Count: `1`,
        },
        {
          Category: `Script`,
          Change: `0.0%`,
          Delta: `0ms`,
          Time: `10.0ms`,
          Count: `5`,
        },
      ],
    ])
  })

  test(`sorts a category by its base side when only the current side has a duration`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([
        span(`read`, { category: `io`, duration: 95 }),
        ...repeat(5, () => span(`run`, { category: `script`, duration: 1 })),
      ]),
      makeAggregatedTrace([
        ...repeat(5, () =>
          span(`run`, { category: `script`, start: 0, duration: 2 }),
        ),
        span(`parse`, { category: `parsing`, start: 10, duration: 90 }),
      ]),
    )

    expect(summaryTables(md)).toStrictEqual([
      [
        {
          Category: `I/O`,
          Change: `removed`,
          Delta: `-95.00ms`,
          '%': `0.0%`,
          Time: `95.0ms → 0ms`,
          Count: `1 → 0`,
        },
        {
          Category: `Parsing`,
          Change: `new`,
          Delta: `+90.00ms`,
          '%': `0.0% → 90.0%`,
          Time: `0ms → 90.0ms`,
          Count: `0 → 1`,
        },
        {
          Category: `Script`,
          Change: `+100.0%`,
          Delta: `+5.00ms`,
          '%': `0.0% → 10.0%`,
          Time: `5.0ms → 10.0ms`,
          Count: `5`,
        },
      ],
    ])
  })

  test(`sorts categories of instants by their larger side's share of events`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([
        ...repeat(60, () => instant(`run`, { category: `script` })),
        ...repeat(40, () => instant(`read`, { category: `io` })),
      ]),
      makeAggregatedTrace([
        ...repeat(9, () => instant(`read`, { category: `io` })),
        instant(`parse`, { category: `parsing` }),
      ]),
    )

    expect(summaryTables(md)).toStrictEqual([
      [
        {
          Category: `I/O`,
          Change: `-77.5%`,
          Delta: `-31`,
          Count: `40 → 9`,
        },
        {
          Category: `Script`,
          Change: `removed`,
          Delta: `-60`,
          Count: `60 → 0`,
        },
        {
          Category: `Parsing`,
          Change: `new`,
          Delta: `+1`,
          Count: `0 → 1`,
        },
      ],
    ])
  })
})

describe(`longest spans`, () => {
  const base = () =>
    makeAggregatedTrace([
      span(`outer`, { start: 0, duration: 100 }),
      span(`slow`, { start: 0, duration: 40, parent: 0 }),
      span(`gone`, { start: 50, duration: 10, parent: 0 }),
    ])
  const current = () =>
    makeAggregatedTrace([
      span(`outer`, { start: 0, duration: 120 }),
      span(`slow`, { start: 0, duration: 70, parent: 0 }),
      span(`added`, { start: 80, duration: 10, parent: 0 }),
    ])

  test(`ranks each time measure, then the count`, () => {
    expect(headings(traceDiffMd(base(), current()), 3)).toStrictEqual([
      `# Trace diff`,
      `## Longest thread spans`,
      `### Self time`,
      `### Total time`,
      `### Count`,
    ])
  })

  test(`ranks self time regressions and improvements, with new and removed spans`, () => {
    const md = traceDiffMd(base(), current())

    expect(spanRanking(md, `Self time`, `Regressions`)).toStrictEqual([
      [
        {
          Change: `+75.0%`,
          Delta: `+30.00ms`,
          '%': `40.0% → 58.3%`,
          Time: `40.0ms → 70.0ms`,
          Count: `1`,
          Mean: `40.0ms → 70.0ms`,
          Max: `40.0ms → 70.0ms`,
          Span: `slow`,
        },
        {
          Change: `new`,
          Delta: `+10.00ms`,
          '%': `0.0% → 8.3%`,
          Time: `0ms → 10.0ms`,
          Count: `0 → 1`,
          Mean: `0ms → 10.0ms`,
          Max: `0ms → 10.0ms`,
          Span: `added`,
        },
      ],
    ])
    expect(spanRanking(md, `Self time`, `Improvements`)).toStrictEqual([
      [
        {
          Change: `-20.0%`,
          Delta: `-10.00ms`,
          '%': `50.0% → 33.3%`,
          Time: `50.0ms → 40.0ms`,
          Count: `1`,
          Mean: `50.0ms → 40.0ms`,
          Max: `50.0ms → 40.0ms`,
          Span: `outer`,
        },
        {
          Change: `removed`,
          Delta: `-10.00ms`,
          '%': `10.0% → 0.0%`,
          Time: `10.0ms → 0ms`,
          Count: `1 → 0`,
          Mean: `10.0ms → 0ms`,
          Max: `10.0ms → 0ms`,
          Span: `gone`,
        },
      ],
    ])
  })

  test(`ranks total time with each side's mean and longest`, () => {
    const md = traceDiffMd(base(), current())

    expect(spanRanking(md, `Total time`, `Regressions`)).toStrictEqual([
      [
        {
          Change: `+75.0%`,
          Delta: `+30.00ms`,
          '%': `40.0% → 58.3%`,
          Time: `40.0ms → 70.0ms`,
          Count: `1`,
          Mean: `40.0ms → 70.0ms`,
          Max: `40.0ms → 70.0ms`,
          Span: `slow`,
        },
        {
          Change: `+20.0%`,
          Delta: `+20.00ms`,
          '%': `100.0%`,
          Time: `100.0ms → 120.0ms`,
          Count: `1`,
          Mean: `100.0ms → 120.0ms`,
          Max: `100.0ms → 120.0ms`,
          Span: `outer`,
        },
        {
          Change: `new`,
          Delta: `+10.00ms`,
          '%': `0.0% → 8.3%`,
          Time: `0ms → 10.0ms`,
          Count: `0 → 1`,
          Mean: `0ms → 10.0ms`,
          Max: `0ms → 10.0ms`,
          Span: `added`,
        },
      ],
    ])
    expect(spanRanking(md, `Total time`, `Improvements`)).toStrictEqual([
      [
        {
          Change: `removed`,
          Delta: `-10.00ms`,
          '%': `10.0% → 0.0%`,
          Time: `10.0ms → 0ms`,
          Count: `1 → 0`,
          Mean: `10.0ms → 0ms`,
          Max: `10.0ms → 0ms`,
          Span: `gone`,
        },
      ],
    ])
  })

  test(`ranks the count, which shows a span the input never ends`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([
        span(`wait`, { start: 0 }),
        span(`gone`, { start: 0, duration: 10 }),
      ]),
      makeAggregatedTrace([
        span(`wait`, { start: 0 }),
        span(`wait`, { start: 5 }),
        span(`wait`, { start: 10, duration: 1 }),
      ]),
    )

    expect(spanRanking(md, `Count`, `Regressions`)).toStrictEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+2`,
          '%': `50.0% → 100.0%`,
          Count: `1 → 3`,
          Span: `wait`,
        },
      ],
    ])
    expect(spanRanking(md, `Count`, `Improvements`)).toStrictEqual([
      [
        {
          Change: `removed`,
          Delta: `-1`,
          '%': `50.0% → 0.0%`,
          Count: `1 → 0`,
          Span: `gone`,
        },
      ],
    ])
  })

  test(`ranks CPU time when both sides record a thread clock`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([
        span(`work`, { start: 0, duration: 100, cpuDuration: 10 }),
      ]),
      makeAggregatedTrace([
        span(`work`, { start: 0, duration: 100, cpuDuration: 30 }),
      ]),
    )

    expect(headings(md, 3)).toStrictEqual([
      `# Trace diff`,
      `## Longest thread spans`,
      `### Total time`,
      `### Total CPU time`,
      `### Count`,
    ])
    expect(spanRanking(md, `Total CPU time`, `Regressions`)).toStrictEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+20.00ms`,
          '%': `10.0% → 30.0%`,
          'CPU time': `10.0ms → 30.0ms`,
          Count: `1`,
          Mean: `10.0ms → 30.0ms`,
          Max: `10.0ms → 30.0ms`,
          Span: `work`,
        },
      ],
    ])
  })

  test(`ranks no CPU time when one side records no thread clock`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([
        span(`work`, { start: 0, duration: 100, cpuDuration: 10 }),
      ]),
      makeAggregatedTrace([span(`work`, { start: 0, duration: 110 })]),
    )

    expect(headings(md, 3)).toStrictEqual([
      `# Trace diff`,
      `## Longest thread spans`,
      `### Total time`,
      `### Count`,
    ])
  })

  test(`ranks async spans by elapsed time, apart from a thread span sharing their name`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([
        span(`request`, { start: 0, duration: 50, async: true }),
        span(`request`, { start: 0, duration: 10 }),
      ]),
      makeAggregatedTrace([
        span(`request`, { start: 0, duration: 20, async: true }),
        span(`request`, { start: 0, duration: 15 }),
      ]),
    )

    expect(headings(md, 3)).toStrictEqual([
      `# Trace diff`,
      `## Longest thread spans`,
      `### Total time`,
      `### Count`,
      `## Longest async spans`,
      `### Elapsed time`,
      `### Count`,
    ])
    expect(spanRanking(md, `Total time`, `Regressions`)).toStrictEqual([
      [
        {
          Change: `+50.0%`,
          Delta: `+5.00ms`,
          '%': `20.0% → 75.0%`,
          Time: `10.0ms → 15.0ms`,
          Count: `1`,
          Mean: `10.0ms → 15.0ms`,
          Max: `10.0ms → 15.0ms`,
          Span: `request`,
        },
      ],
    ])
    expect(
      tablesAt(md, [`Longest async spans`, `Elapsed time`, `Improvements`]),
    ).toStrictEqual([
      [
        {
          Change: `-60.0%`,
          Delta: `-30.00ms`,
          Time: `50.0ms → 20.0ms`,
          Count: `1`,
          Mean: `50.0ms → 20.0ms`,
          Max: `50.0ms → 20.0ms`,
          Span: `request`,
        },
      ],
    ])
  })

  test(`states that no span differed when the sides match`, () => {
    const trace = () =>
      makeAggregatedTrace([span(`a`, { start: 0, duration: 10 })])
    const md = traceDiffMd(trace(), trace())

    expect(summaryLines(md)).toStrictEqual([`Recorded 1 event over 10.0ms.`])
    expect(openingParagraphs(md, `Total time`)).toStrictEqual([
      `No thread span differed in time.`,
    ])
    expect(openingParagraphs(md, `Count`)).toStrictEqual([
      `No thread span differed in occurrences recorded.`,
    ])
  })
})

describe(`span breakdowns`, () => {
  test(`attributes show the values and amounts that changed`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([
        span(`load`, { duration: 30, attributes: { path: `a`, read: 1024 } }),
        span(`load`, { duration: 20, attributes: { path: `b` } }),
      ]),
      makeAggregatedTrace([
        span(`load`, { duration: 30, attributes: { path: `a`, read: 1024 } }),
        span(`load`, { duration: 50, attributes: { path: `b`, read: 3072 } }),
        span(`load`, { duration: 5, attributes: { path: `c` } }),
      ]),
    )

    expect(spanBreakdown(md, `Attribute values`)).toStrictEqual({
      load: [
        [
          {
            Change: `+150.0%`,
            Delta: `+30.00ms`,
            '%': `40.0% → 58.8%`,
            Time: `20.0ms → 50.0ms`,
            Count: `1`,
            Mean: `20.0ms → 50.0ms`,
            Max: `20.0ms → 50.0ms`,
            Attribute: `path`,
            Value: `b`,
          },
          {
            Change: `new`,
            Delta: `+5.00ms`,
            '%': `0.0% → 5.9%`,
            Time: `0ms → 5.0ms`,
            Count: `0 → 1`,
            Mean: `0ms → 5.0ms`,
            Max: `0ms → 5.0ms`,
            Attribute: `path`,
            Value: `c`,
          },
        ],
      ],
    })
    expect(spanBreakdown(md, `Attribute amounts`)).toStrictEqual({
      load: [
        [
          {
            '%': `60.0% → 94.1%`,
            Time: `30.0ms → 80.0ms`,
            Count: `1 → 2`,
            Attribute: `read`,
            Change: `+300.0%`,
            Delta: `+3 KiB`,
            Total: `1 KiB → 4 KiB`,
            Mean: `1 KiB → 2 KiB`,
            Max: `1 KiB → 3 KiB`,
          },
        ],
      ],
    })
  })

  test(`amounts show those whose total changed the most`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([
        span(`load`, { duration: 10, attributes: { read: 1000, sent: 10 } }),
      ]),
      makeAggregatedTrace([
        span(`load`, { duration: 20, attributes: { read: 1500, sent: 30 } }),
      ]),
      resolveProfileToMdOptions({ topN: 4 }),
    )

    expect(spanBreakdown(md, `Attribute amounts`)).toStrictEqual({
      load: [
        [
          {
            '%': `100.0%`,
            Time: `10.0ms → 20.0ms`,
            Count: `1`,
            Attribute: `sent`,
            Change: `+200.0%`,
            Delta: `+20 B`,
            Total: `10 B → 30 B`,
            Mean: `10 B → 30 B`,
            Max: `10 B → 30 B`,
          },
        ],
      ],
    })
  })

  test(`attributes show time for a span only the current side ends`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([span(`job`, { attributes: { kind: `slow` } })]),
      makeAggregatedTrace([
        span(`job`, { duration: 10, attributes: { kind: `slow` } }),
      ]),
    )

    expect(spanBreakdown(md, `Attribute values`)).toStrictEqual({
      job: [
        [
          {
            Change: `new`,
            Delta: `+10.00ms`,
            '%': `0.0% → 100.0%`,
            Time: `0ms → 10.0ms`,
            Count: `1`,
            Mean: `0ms → 10.0ms`,
            Max: `0ms → 10.0ms`,
            Attribute: `kind`,
            Value: `slow`,
          },
        ],
      ],
    })
  })

  test(`threads show the change in each thread's share`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace(
        [
          span(`job`, { thread: 0, duration: 30 }),
          span(`job`, { thread: 1, duration: 10 }),
        ],
        { threads: [`main`, `worker`] },
      ),
      makeAggregatedTrace(
        [
          span(`job`, { thread: 0, duration: 30 }),
          span(`job`, { thread: 1, duration: 30 }),
          span(`job`, { thread: 1, duration: 30 }),
        ],
        { threads: [`main`, `worker`] },
      ),
    )

    expect(spanBreakdown(md, `Threads`)).toStrictEqual({
      job: [
        [
          {
            Change: `+500.0%`,
            Delta: `+50.00ms`,
            '%': `25.0% → 66.7%`,
            Time: `10.0ms → 60.0ms`,
            Count: `1 → 2`,
            Mean: `10.0ms → 30.0ms`,
            Max: `10.0ms → 30.0ms`,
            Thread: `worker`,
          },
        ],
      ],
    })
  })

  test(`threads break down no span recorded on one thread`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace(
        [
          span(`job`, { thread: 0, duration: 30 }),
          span(`other`, { thread: 1, duration: 10 }),
        ],
        { threads: [`main`, `worker`] },
      ),
      makeAggregatedTrace(
        [
          span(`job`, { thread: 0, duration: 60 }),
          span(`other`, { thread: 1, duration: 10 }),
        ],
        { threads: [`main`, `worker`] },
      ),
    )

    expect(spanBreakdown(md, `Threads`)).toStrictEqual({})
  })

  test(`parents and children show the change in each nested span's share`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([
        span(`root`, { start: 0, duration: 100 }),
        span(`step`, { start: 0, duration: 20, parent: 0 }),
      ]),
      makeAggregatedTrace([
        span(`root`, { start: 0, duration: 100 }),
        span(`step`, { start: 0, duration: 50, parent: 0 }),
      ]),
    )

    expect(
      tablesBySubheading(md, [`Longest thread spans`, `Self time`, `Parents`]),
    ).toStrictEqual({
      step: [
        [
          {
            Change: `+150.0%`,
            Delta: `+30.00ms`,
            '%': `100.0%`,
            Time: `20.0ms → 50.0ms`,
            Count: `1`,
            Mean: `20.0ms → 50.0ms`,
            Max: `20.0ms → 50.0ms`,
            Parent: `root`,
          },
        ],
      ],
    })
    expect(spanBreakdown(md, `Parents`)).toStrictEqual({
      step: [
        [
          {
            Change: `+150.0%`,
            Delta: `+30.00ms`,
            '%': `100.0%`,
            Time: `20.0ms → 50.0ms`,
            Count: `1`,
            Mean: `20.0ms → 50.0ms`,
            Max: `20.0ms → 50.0ms`,
            Parent: `root`,
          },
        ],
      ],
    })
    // The root's total time did not change, so no ranking shows it.
    expect(spanBreakdown(md, `Children`)).toStrictEqual({})
  })

  test(`children break down a span whose total time changed`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([
        span(`root`, { start: 0, duration: 100 }),
        span(`step`, { start: 0, duration: 20, parent: 0 }),
      ]),
      makeAggregatedTrace([
        span(`root`, { start: 0, duration: 200 }),
        span(`step`, { start: 0, duration: 50, parent: 0 }),
        span(`extra`, { start: 50, duration: 40, parent: 0 }),
      ]),
    )

    expect(spanBreakdown(md, `Children`)).toStrictEqual({
      root: [
        [
          {
            Change: `new`,
            Delta: `+40.00ms`,
            '%': `0.0% → 20.0%`,
            Time: `0ms → 40.0ms`,
            Count: `0 → 1`,
            Mean: `0ms → 40.0ms`,
            Max: `0ms → 40.0ms`,
            Child: `extra`,
          },
          {
            Change: `+150.0%`,
            Delta: `+30.00ms`,
            '%': `20.0% → 25.0%`,
            Time: `20.0ms → 50.0ms`,
            Count: `1`,
            Mean: `20.0ms → 50.0ms`,
            Max: `20.0ms → 50.0ms`,
            Child: `step`,
          },
        ],
      ],
    })
  })
})

describe(`most frequent instants`, () => {
  test(`ranks the change in count and breaks down the attributes`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([
        instant(`deopt`, { attributes: { reason: `a` } }),
        instant(`deopt`, { attributes: { reason: `a` } }),
        instant(`old`),
      ]),
      makeAggregatedTrace([
        instant(`deopt`, { attributes: { reason: `a` } }),
        instant(`deopt`, { attributes: { reason: `a` } }),
        instant(`deopt`, { attributes: { reason: `b` } }),
        instant(`deopt`, { attributes: { reason: `b` } }),
        instant(`deopt`, { attributes: { reason: `b` } }),
      ]),
    )

    const section = [`Most frequent instants`, `Count`]
    expect(tablesAt(md, [...section, `Regressions`, `Other`])).toStrictEqual([
      [
        {
          Change: `+150.0%`,
          Delta: `+3`,
          '%': `66.7% → 100.0%`,
          Count: `2 → 5`,
          Instant: `deopt`,
        },
      ],
    ])
    expect(tablesAt(md, [...section, `Improvements`, `Other`])).toStrictEqual([
      [
        {
          Change: `removed`,
          Delta: `-1`,
          '%': `33.3% → 0.0%`,
          Count: `1 → 0`,
          Instant: `old`,
        },
      ],
    ])
    expect(
      tablesBySubheading(md, [...section, `Attribute values`]),
    ).toStrictEqual({
      deopt: [
        [
          {
            Change: `new`,
            Delta: `+3`,
            '%': `0.0% → 60.0%`,
            Count: `0 → 3`,
            Attribute: `reason`,
            Value: `b`,
          },
        ],
      ],
    })
  })
})

describe(`gauges`, () => {
  test(`pairs gauges by name`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([
        reading(`heap`, 10, { time: 0 }),
        reading(`heap`, 20, { time: 10 }),
      ]),
      makeAggregatedTrace([
        reading(`heap`, 10, { time: 0 }),
        reading(`heap`, 40, { time: 10 }),
      ]),
    )

    expect(tablesAt(md, [`Gauges`])).toStrictEqual([
      [
        {
          Gauge: `heap`,
          Change: `+100.0%`,
          Delta: `+20 B`,
          Readings: `2`,
          Min: `10 B`,
          Mean: `10 B`,
          Max: `20 B → 40 B`,
          First: `10 B`,
          Last: `20 B → 40 B`,
          Trend: `▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▃ → ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█`,
        },
      ],
    ])
  })

  test(`leaves a gauge unpaired when its sides measure different things`, () => {
    const requests = countMetricOf(`request`, { improvement: `increase` })
    const md = traceDiffMd(
      makeAggregatedTrace([reading(`load`, 2048)]),
      makeAggregatedTrace([reading(`load`, 7, { metric: requests })]),
    )

    expect(tablesAt(md, [`Gauges`])).toStrictEqual([
      [
        {
          Gauge: `load`,
          Change: `new`,
          Delta: `+7`,
          Readings: `0 → 1`,
          Min: `0 → 7`,
          Max: `0 → 7`,
          First: `0 → 7`,
          Last: `0 → 7`,
          Trend: `▄`,
        },
        {
          Gauge: `load`,
          Change: `removed`,
          Delta: `-2 KiB`,
          Readings: `1 → 0`,
          Min: `2 KiB → 0 B`,
          Max: `2 KiB → 0 B`,
          First: `2 KiB → 0 B`,
          Last: `2 KiB → 0 B`,
          Trend: `▄`,
        },
      ],
    ])
  })

  test(`pairs a thread's gauge with that thread's, whichever side has several`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([reading(`heap`, 100, { thread: 0 })], {
        threads: [`main`],
      }),
      makeAggregatedTrace(
        [
          reading(`heap`, 150, { thread: 0 }),
          reading(`heap`, 30, { thread: 1 }),
        ],
        { threads: [`main`, `worker`] },
      ),
    )

    expect(tablesAt(md, [`Gauges`])).toStrictEqual([
      [
        {
          Gauge: `worker / heap`,
          Change: `new`,
          Delta: `+30 B`,
          Readings: `0 → 1`,
          Min: `0 B → 30 B`,
          Max: `0 B → 30 B`,
          First: `0 B → 30 B`,
          Last: `0 B → 30 B`,
          Trend: `▄`,
        },
        {
          Gauge: `main / heap`,
          Change: `+50.0%`,
          Delta: `+50 B`,
          Readings: `1`,
          Min: `100 B → 150 B`,
          Max: `100 B → 150 B`,
          First: `100 B → 150 B`,
          Last: `100 B → 150 B`,
          Trend: `▁ → █`,
        },
      ],
    ])
  })

  test(`shows the top N gauges whose last level changed the most`, () => {
    const md = traceDiffMd(
      makeAggregatedTrace([reading(`heap`, 100), reading(`stack`, 10)]),
      makeAggregatedTrace([reading(`heap`, 150), reading(`stack`, 30)]),
      resolveProfileToMdOptions({ topN: 1 }),
    )

    expect(tablesAt(md, [`Gauges`])).toStrictEqual([
      [
        {
          Gauge: `stack`,
          Change: `+200.0%`,
          Delta: `+20 B`,
          Readings: `1`,
          Min: `10 B → 30 B`,
          Max: `10 B → 30 B`,
          First: `10 B → 30 B`,
          Last: `10 B → 30 B`,
          Trend: `▁ → █`,
        },
      ],
    ])
  })
})
