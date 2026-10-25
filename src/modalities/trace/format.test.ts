import { describe, expect, test } from 'vitest'
import { resolveProfileToMdOptions } from '../../options.ts'
import {
  categorySubsectionTables,
  expectLogs,
  openingParagraphs,
  rankingTable,
  summaryLines,
} from '../../testing.ts'
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
  traceMd,
} from './testing.ts'

/** The ranking of a section whose spans all fall in the `other` category. */
const spanRanking = (md: string, measure: string) =>
  tablesAt(md, [`Longest thread spans`, measure, `Categories`, `Other`])

const spanBreakdown = (md: string, measure: string, breakdown: string) =>
  tablesBySubheading(md, [`Longest thread spans`, measure, breakdown])

describe(`summary`, () => {
  test(`states the recorded duration from the earliest to the latest time`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`a`, { start: 5, duration: 10 }),
        instant(`mark`, { time: 35 }),
      ]),
    )

    expect(summaryLines(md)).toEqual([`Recorded 2 events over 30.0ms.`])
  })

  test(`states no duration for a trace that times nothing`, () => {
    const md = traceMd(makeAggregatedTrace([span(`a`, { duration: 10 })]))

    expect(summaryLines(md)).toEqual([`Recorded 1 event.`])
    expect(summaryTables(md)).toEqual([
      [{ Category: `Other`, Time: `10.0ms`, Count: `1` }],
    ])
  })

  test(`a category's share is its self time over the recorded duration`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`collect`, {
          category: `garbage-collection-pause`,
          start: 0,
          duration: 25,
        }),
        span(`run`, { category: `script`, start: 25, duration: 75 }),
        instant(`mark`, { category: `script`, time: 100 }),
      ]),
    )

    expect(summaryTables(md)).toEqual([
      [
        { Category: `Script`, '%': `75.0%`, Time: `75.0ms`, Count: `2` },
        {
          Category: `Garbage collection pause`,
          '%': `25.0%`,
          Time: `25.0ms`,
          Count: `1`,
        },
      ],
    ])
  })

  test(`a trace of instants alone counts each category`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        instant(`a`, { category: `script`, time: 0 }),
        instant(`a`, { category: `script`, time: 5 }),
        instant(`b`, { category: `io`, time: 5 }),
      ]),
    )

    expect(summaryTables(md)).toEqual([
      [
        { Category: `Script`, Count: `2` },
        { Category: `I/O`, Count: `1` },
      ],
    ])
  })

  test(`threads sharing a name are one row, and an unused thread has none`, () => {
    const md = traceMd(
      makeAggregatedTrace(
        [
          span(`a`, { thread: 0, start: 0, duration: 60 }),
          span(`b`, { thread: 1, start: 0, duration: 30 }),
          span(`c`, { thread: 2, start: 10, duration: 40 }),
        ],
        { threads: [`main`, `worker`, `worker`, `idle`] },
      ),
    )

    expect(summaryTables(md)).toEqual([
      [{ Category: `Other`, '%': `216.7%`, Time: `130.0ms`, Count: `3` }],
    ])
    expect(tablesAt(md, [`Threads`])).toEqual([
      [
        { Thread: `worker`, '%': `116.7%`, Time: `70.0ms`, Count: `2` },
        { Thread: `main`, '%': `100.0%`, Time: `60.0ms`, Count: `1` },
      ],
    ])
  })

  test(`the thread table shows the top N threads by time`, () => {
    const md = traceMd(
      makeAggregatedTrace(
        [
          span(`a`, { thread: 0, start: 0, duration: 60 }),
          span(`b`, { thread: 1, start: 0, duration: 30 }),
        ],
        { threads: [`main`, `worker`] },
      ),
      resolveProfileToMdOptions({ topN: 1 }),
    )

    expect(tablesAt(md, [`Threads`])).toEqual([
      [{ '%': `100.0%`, Time: `60.0ms`, Count: `1`, Thread: `main` }],
    ])
  })

  test(`a trace on one thread has no thread table`, () => {
    const md = traceMd(
      makeAggregatedTrace([span(`a`, { thread: 0, start: 0, duration: 60 })], {
        threads: [`main`],
      }),
    )

    expect(summaryTables(md)).toEqual([
      [{ Category: `Other`, '%': `100.0%`, Time: `60.0ms`, Count: `1` }],
    ])
  })
})

describe(`longest spans`, () => {
  test(`self time excludes nested spans and total time includes them`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`outer`, { start: 0, duration: 100 }),
        span(`inner`, { start: 10, duration: 30, parent: 0 }),
      ]),
    )

    expect(headings(md, 3)).toEqual([
      `# Trace`,
      `## Longest thread spans`,
      `### Self time`,
      `### Total time`,
    ])
    expect(spanRanking(md, `Self time`)).toEqual([
      [
        {
          '%': `70.0%`,
          Time: `70.0ms`,
          Count: `1`,
          Mean: `70.0ms`,
          Max: `70.0ms`,
          Span: `outer`,
        },
        {
          '%': `30.0%`,
          Time: `30.0ms`,
          Count: `1`,
          Mean: `30.0ms`,
          Max: `30.0ms`,
          Span: `inner`,
        },
      ],
    ])
    expect(spanRanking(md, `Total time`)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `100.0ms`,
          Count: `1`,
          Mean: `100.0ms`,
          Max: `100.0ms`,
          Span: `outer`,
        },
        {
          '%': `30.0%`,
          Time: `30.0ms`,
          Count: `1`,
          Mean: `30.0ms`,
          Max: `30.0ms`,
          Span: `inner`,
        },
      ],
    ])
  })

  test(`a span nested in one its origin drops is nested in that span's parent`, () => {
    // Clang's origin drops the `Total <name>` rollup event.
    const md = traceMd(
      makeAggregatedTrace(
        [
          span(`outer`, { start: 0, duration: 100 }),
          span(`Total inner`, {
            start: 0,
            duration: 60,
            parent: 0,
            arguments: { count: 1, 'avg ms': 60 },
          }),
          span(`inner`, { start: 10, duration: 40, parent: 1 }),
        ],
        { context: { format: `trace-event`, origin: `clang` } },
      ),
    )

    expect(categorySubsectionTables(md, `Self time`)).toEqual({
      Compilation: [
        {
          '%': `60.0%`,
          Time: `60.0ms`,
          Count: `1`,
          Mean: `60.0ms`,
          Max: `60.0ms`,
          Span: `outer`,
        },
        {
          '%': `40.0%`,
          Time: `40.0ms`,
          Count: `1`,
          Mean: `40.0ms`,
          Max: `40.0ms`,
          Span: `inner`,
        },
      ],
    })
  })

  test(`a trace with no nesting has no self time section`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`a`, { start: 0, duration: 10 }),
        span(`b`, { start: 10, duration: 10 }),
      ]),
    )

    expect(headings(md, 3)).toEqual([
      `# Trace`,
      `## Longest thread spans`,
      `### Total time`,
    ])
  })

  test(`a span nested in a span of its own name adds nothing to total time`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`f`, { start: 0, duration: 100 }),
        span(`f`, { start: 10, duration: 50, parent: 0 }),
        span(`f`, { start: 20, duration: 10, parent: 1 }),
      ]),
    )

    expect(spanRanking(md, `Self time`)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `100.0ms`,
          Count: `3`,
          Mean: `33.3ms`,
          Max: `50.0ms`,
          Span: `f`,
        },
      ],
    ])
    expect(spanRanking(md, `Total time`)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `100.0ms`,
          Count: `3`,
          Mean: `53.3ms`,
          Max: `100.0ms`,
          Span: `f`,
        },
      ],
    ])
  })

  test(`a child outlasting its parent leaves the parent no self time`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`parent`, { start: 0, duration: 10 }),
        span(`child`, { start: 5, duration: 20, parent: 0 }),
      ]),
    )

    expect(spanRanking(md, `Self time`)).toEqual([
      [
        {
          '%': `80.0%`,
          Time: `20.0ms`,
          Count: `1`,
          Mean: `20.0ms`,
          Max: `20.0ms`,
          Span: `child`,
        },
      ],
    ])
  })

  test(`a span the input never ends counts with no time`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`done`, { start: 0, duration: 10 }),
        span(`open`, { start: 5 }),
      ]),
    )

    expect(summaryLines(md)).toEqual([`Recorded 2 events over 10.0ms.`])
    expect(summaryTables(md)).toEqual([
      [{ Category: `Other`, '%': `100.0%`, Time: `10.0ms`, Count: `2` }],
    ])
    expect(spanRanking(md, `Total time`)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `10.0ms`,
          Count: `1`,
          Mean: `10.0ms`,
          Max: `10.0ms`,
          Span: `done`,
        },
      ],
    ])
  })

  test(`ranks CPU time where spans record a thread clock`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`outer`, { start: 0, duration: 100, cpuDuration: 60 }),
        span(`inner`, { start: 10, duration: 30, cpuDuration: 20, parent: 0 }),
      ]),
    )

    expect(headings(md, 3)).toEqual([
      `# Trace`,
      `## Longest thread spans`,
      `### Self time`,
      `### Total time`,
      `### Self CPU time`,
      `### Total CPU time`,
    ])
    expect(spanRanking(md, `Self CPU time`)).toEqual([
      [
        {
          '%': `40.0%`,
          'CPU time': `40.0ms`,
          Count: `1`,
          Mean: `40.0ms`,
          Max: `40.0ms`,
          Span: `outer`,
        },
        {
          '%': `20.0%`,
          'CPU time': `20.0ms`,
          Count: `1`,
          Mean: `20.0ms`,
          Max: `20.0ms`,
          Span: `inner`,
        },
      ],
    ])
    expect(spanRanking(md, `Total CPU time`)).toEqual([
      [
        {
          '%': `60.0%`,
          'CPU time': `60.0ms`,
          Count: `1`,
          Mean: `60.0ms`,
          Max: `60.0ms`,
          Span: `outer`,
        },
        {
          '%': `20.0%`,
          'CPU time': `20.0ms`,
          Count: `1`,
          Mean: `20.0ms`,
          Max: `20.0ms`,
          Span: `inner`,
        },
      ],
    ])
  })

  test(`ranks async spans by elapsed time, apart from the spans on a thread`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`task`, { start: 0, duration: 50 }),
        span(`request`, { start: 0, duration: 80, async: true }),
        span(`request`, { start: 10, duration: 80, async: true }),
        span(`request`, { start: 50, duration: 10 }),
      ]),
    )

    expect(headings(md, 3)).toEqual([
      `# Trace`,
      `## Longest thread spans`,
      `### Total time`,
      `## Longest async spans`,
      `### Elapsed time`,
    ])
    expect(openingParagraphs(md, `Longest thread spans`)).toEqual([
      `Spans recorded on one thread. A span's time includes time its thread spent waiting.`,
    ])
    expect(openingParagraphs(md, `Longest async spans`)).toEqual([
      `Spans of operations that stay pending while threads do other work. Async spans overlap one another, so their times can sum to more than the trace's duration.`,
    ])
    expect(openingParagraphs(md, `Total time`)).toEqual([
      `Thread spans with the most time.`,
    ])
    expect(openingParagraphs(md, `Elapsed time`)).toEqual([
      `Async spans with the most time elapsed from start to end.`,
    ])
    // An async span's time is no thread's, so it adds to no category's time.
    expect(summaryTables(md)).toEqual([
      [{ Category: `Other`, '%': `66.7%`, Time: `60.0ms`, Count: `4` }],
    ])
    expect(spanRanking(md, `Total time`)).toEqual([
      [
        {
          '%': `55.6%`,
          Time: `50.0ms`,
          Count: `1`,
          Mean: `50.0ms`,
          Max: `50.0ms`,
          Span: `task`,
        },
        {
          '%': `11.1%`,
          Time: `10.0ms`,
          Count: `1`,
          Mean: `10.0ms`,
          Max: `10.0ms`,
          Span: `request`,
        },
      ],
    ])
    expect(rankingTable(md, `Elapsed time`)).toEqual([
      {
        Time: `160.0ms`,
        Count: `2`,
        Mean: `80.0ms`,
        Max: `80.0ms`,
        Span: `request`,
      },
    ])
  })

  test(`nested async spans give thread spans no self time section`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`task`, { start: 0, duration: 50 }),
        span(`outer`, { start: 0, duration: 40, async: true }),
        span(`inner`, { start: 10, duration: 10, async: true, parent: 1 }),
      ]),
    )

    expect(headings(md, 3)).toEqual([
      `# Trace`,
      `## Longest thread spans`,
      `### Total time`,
      `## Longest async spans`,
      `### Elapsed time`,
    ])
    expect(openingParagraphs(md, `Total time`)).toEqual([
      `Thread spans with the most time.`,
    ])
  })

  test(`a span nested in a collector's pause counts toward the pause`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`pause`, {
          start: 0,
          duration: 50,
          category: `garbage-collection-pause`,
        }),
        span(`sweep`, {
          start: 10,
          duration: 20,
          parent: 0,
          category: `garbage-collection`,
        }),
        span(`sweep`, {
          start: 60,
          duration: 5,
          category: `garbage-collection`,
        }),
      ]),
    )

    expect(summaryTables(md)).toEqual([
      [
        {
          Category: `Garbage collection pause`,
          '%': `76.9%`,
          Time: `50.0ms`,
          Count: `2`,
        },
        {
          Category: `Garbage collection`,
          '%': `7.7%`,
          Time: `5.0ms`,
          Count: `1`,
        },
      ],
    ])
  })

  test(`an async span nested in another adds no self time`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`outer`, { start: 0, duration: 40, async: true }),
        span(`inner`, { start: 10, duration: 10, async: true, parent: 0 }),
      ]),
    )

    expect(headings(md, 3)).toEqual([
      `# Trace`,
      `## Longest async spans`,
      `### Elapsed time`,
    ])
    expect(summaryTables(md)).toEqual([
      [{ Category: `Other`, '%': `0.0%`, Time: `0ms`, Count: `2` }],
    ])
  })

  test(`shows the top N spans`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`a`, { start: 0, duration: 10 }),
        span(`b`, { start: 10, duration: 30 }),
        span(`c`, { start: 40, duration: 20 }),
      ]),
      resolveProfileToMdOptions({ topN: 2 }),
    )

    expect(spanRanking(md, `Total time`)).toEqual([
      [
        {
          '%': `50.0%`,
          Time: `30.0ms`,
          Count: `1`,
          Mean: `30.0ms`,
          Max: `30.0ms`,
          Span: `b`,
        },
        {
          '%': `33.3%`,
          Time: `20.0ms`,
          Count: `1`,
          Mean: `20.0ms`,
          Max: `20.0ms`,
          Span: `c`,
        },
      ],
    ])
  })

  test(`breaks down only the categories meeting the minimum share`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`run`, { category: `script`, start: 0, duration: 99 }),
        span(`read`, { category: `io`, start: 99, duration: 1 }),
      ]),
      resolveProfileToMdOptions({ minCategoryShare: 0.05 }),
    )

    const run = {
      '%': `99.0%`,
      Time: `99.0ms`,
      Count: `1`,
      Mean: `99.0ms`,
      Max: `99.0ms`,
      Span: `run`,
    }
    expect(rankingTable(md, `Total time`)).toEqual([
      run,
      {
        '%': `1.0%`,
        Time: `1.0ms`,
        Count: `1`,
        Mean: `1.0ms`,
        Max: `1.0ms`,
        Span: `read`,
      },
    ])
    expect(categorySubsectionTables(md, `Total time`)).toEqual({
      Script: [run],
    })
  })
})

describe(`span breakdowns`, () => {
  test(`attributes show each key's top values by time, and each amount`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`load`, {
          duration: 30,
          attributes: { kind: `x`, path: `a`, read: 1024 },
        }),
        span(`load`, {
          duration: 10,
          attributes: { kind: `x`, path: `a`, read: 3072 },
        }),
        span(`load`, { duration: 20, attributes: { kind: `x`, path: `b` } }),
        span(`load`, { duration: 5, attributes: { kind: `x`, path: `c` } }),
      ]),
      // A breakdown shows a quarter of the top N, rounded up.
      resolveProfileToMdOptions({ topN: 8 }),
    )

    expect(spanBreakdown(md, `Total time`, `Attribute values`)).toEqual({
      load: [
        [
          {
            '%': `100.0%`,
            Time: `65.0ms`,
            Count: `4`,
            Mean: `16.3ms`,
            Max: `30.0ms`,
            Attribute: `kind`,
            Value: `x`,
          },
          {
            '%': `61.5%`,
            Time: `40.0ms`,
            Count: `2`,
            Mean: `20.0ms`,
            Max: `30.0ms`,
            Attribute: `path`,
            Value: `a`,
          },
          {
            '%': `30.8%`,
            Time: `20.0ms`,
            Count: `1`,
            Mean: `20.0ms`,
            Max: `20.0ms`,
            Attribute: `path`,
            Value: `b`,
          },
        ],
      ],
    })
    expect(spanBreakdown(md, `Total time`, `Attribute amounts`)).toEqual({
      load: [
        [
          {
            '%': `61.5%`,
            Time: `40.0ms`,
            Count: `2`,
            Attribute: `read`,
            Total: `4 KiB`,
            Mean: `2 KiB`,
            Max: `3 KiB`,
          },
        ],
      ],
    })
  })

  test(`attributes show a breakdown's limit of keys and of amounts`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`load`, {
          duration: 30,
          attributes: { path: `a`, kind: `x`, read: 1024, sent: 5 },
        }),
        span(`load`, {
          duration: 20,
          attributes: { path: `b`, kind: `x`, read: 1024 },
        }),
      ]),
      resolveProfileToMdOptions({ topN: 4 }),
    )

    expect(spanBreakdown(md, `Total time`, `Attribute values`)).toEqual({
      load: [
        [
          {
            '%': `100.0%`,
            Time: `50.0ms`,
            Count: `2`,
            Mean: `25.0ms`,
            Max: `30.0ms`,
            Attribute: `kind`,
            Value: `x`,
          },
        ],
      ],
    })
    expect(spanBreakdown(md, `Total time`, `Attribute amounts`)).toEqual({
      load: [
        [
          {
            '%': `100.0%`,
            Time: `50.0ms`,
            Count: `2`,
            Attribute: `read`,
            Total: `2 KiB`,
            Mean: `1 KiB`,
            Max: `1 KiB`,
          },
        ],
      ],
    })
  })

  test(`a breakdown shows one row for a top N of four`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`load`, { duration: 30, attributes: { path: `a` } }),
        span(`load`, { duration: 20, attributes: { path: `b` } }),
      ]),
      resolveProfileToMdOptions({ topN: 4 }),
    )

    expect(spanBreakdown(md, `Total time`, `Attribute values`)).toEqual({
      load: [
        [
          {
            '%': `60.0%`,
            Time: `30.0ms`,
            Count: `1`,
            Mean: `30.0ms`,
            Max: `30.0ms`,
            Attribute: `path`,
            Value: `a`,
          },
        ],
      ],
    })
  })

  test(`threads break down a span recorded on several`, () => {
    const md = traceMd(
      makeAggregatedTrace(
        [
          span(`job`, { thread: 0, duration: 30 }),
          span(`job`, { thread: 1, duration: 10 }),
          span(`job`, { thread: 1, duration: 10 }),
          span(`solo`, { thread: 0, duration: 5 }),
        ],
        { threads: [`main`, `worker`] },
      ),
    )

    expect(spanBreakdown(md, `Total time`, `Threads`)).toEqual({
      job: [
        [
          {
            '%': `60.0%`,
            Time: `30.0ms`,
            Count: `1`,
            Mean: `30.0ms`,
            Max: `30.0ms`,
            Thread: `main`,
          },
          {
            '%': `40.0%`,
            Time: `20.0ms`,
            Count: `2`,
            Mean: `10.0ms`,
            Max: `10.0ms`,
            Thread: `worker`,
          },
        ],
      ],
    })
  })

  test(`parents and children show the spans nested directly`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`root`, { start: 0, duration: 100 }),
        span(`first`, { start: 0, duration: 40, parent: 0 }),
        span(`second`, { start: 10, duration: 10, parent: 1 }),
        span(`second`, { start: 50, duration: 30, parent: 0 }),
      ]),
    )

    expect(spanBreakdown(md, `Self time`, `Parents`)).toEqual({
      first: [
        [
          {
            '%': `100.0%`,
            Time: `30.0ms`,
            Count: `1`,
            Mean: `30.0ms`,
            Max: `30.0ms`,
            Parent: `root`,
          },
        ],
      ],
      second: [
        [
          {
            '%': `75.0%`,
            Time: `30.0ms`,
            Count: `1`,
            Mean: `30.0ms`,
            Max: `30.0ms`,
            Parent: `root`,
          },
          {
            '%': `25.0%`,
            Time: `10.0ms`,
            Count: `1`,
            Mean: `10.0ms`,
            Max: `10.0ms`,
            Parent: `first`,
          },
        ],
      ],
    })
    expect(spanBreakdown(md, `Self time`, `Children`)).toEqual({})
    expect(spanBreakdown(md, `Total time`, `Parents`)).toEqual({
      first: [
        [
          {
            '%': `100.0%`,
            Time: `40.0ms`,
            Count: `1`,
            Mean: `40.0ms`,
            Max: `40.0ms`,
            Parent: `root`,
          },
        ],
      ],
      second: [
        [
          {
            '%': `75.0%`,
            Time: `30.0ms`,
            Count: `1`,
            Mean: `30.0ms`,
            Max: `30.0ms`,
            Parent: `root`,
          },
          {
            '%': `25.0%`,
            Time: `10.0ms`,
            Count: `1`,
            Mean: `10.0ms`,
            Max: `10.0ms`,
            Parent: `first`,
          },
        ],
      ],
    })
    expect(spanBreakdown(md, `Total time`, `Children`)).toEqual({
      root: [
        [
          {
            '%': `40.0%`,
            Time: `40.0ms`,
            Count: `1`,
            Mean: `40.0ms`,
            Max: `40.0ms`,
            Child: `first`,
          },
          {
            '%': `30.0%`,
            Time: `30.0ms`,
            Count: `1`,
            Mean: `30.0ms`,
            Max: `30.0ms`,
            Child: `second`,
          },
        ],
      ],
      first: [
        [
          {
            '%': `25.0%`,
            Time: `10.0ms`,
            Count: `1`,
            Mean: `10.0ms`,
            Max: `10.0ms`,
            Child: `second`,
          },
        ],
      ],
    })
  })

  test(`longest instances state when each started, its thread, and its attributes`, () => {
    const md = traceMd(
      makeAggregatedTrace(
        [
          span(`query`, {
            thread: 0,
            start: 1100,
            duration: 5,
            attributes: { sql: `A` },
          }),
          span(`query`, {
            thread: 1,
            start: 1010,
            duration: 50,
            attributes: { sql: `B`, rows: 2048 },
          }),
          span(`query`, { start: 1000, duration: 1 }),
          span(`query`, { thread: 0, start: 1200, duration: 0.5 }),
        ],
        { threads: [`main`, `worker`] },
      ),
      resolveProfileToMdOptions({ topN: 12 }),
    )

    expect(spanBreakdown(md, `Total time`, `Longest instances`)).toEqual({
      query: [
        [
          {
            '%': `88.5%`,
            Start: `10.0ms`,
            Time: `50.0ms`,
            Thread: `worker`,
            Attributes: `sql=B, rows=2 KiB`,
          },
          {
            '%': `8.8%`,
            Start: `100.0ms`,
            Time: `5.0ms`,
            Thread: `main`,
            Attributes: `sql=A`,
          },
          {
            '%': `1.8%`,
            Start: `0ms`,
            Time: `1.0ms`,
            Thread: ``,
            Attributes: ``,
          },
        ],
      ],
    })
  })

  test(`longest instances state the CPU time of those that record it`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`work`, { start: 0, duration: 30, cpuDuration: 10 }),
        span(`work`, { start: 50, duration: 10 }),
      ]),
    )

    expect(spanBreakdown(md, `Total time`, `Longest instances`)).toEqual({
      work: [
        [
          { '%': `75.0%`, Time: `30.0ms`, 'CPU time': `10.0ms`, Start: `0ms` },
          { '%': `25.0%`, Time: `10.0ms`, 'CPU time': ``, Start: `50.0ms` },
        ],
      ],
    })
  })

  test(`untimed instances state their time alone, and a lone one is omitted`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        span(`twice`, { duration: 5 }),
        span(`twice`, { duration: 9 }),
        span(`once`, { duration: 7 }),
      ]),
    )

    expect(spanBreakdown(md, `Total time`, `Longest instances`)).toEqual({
      twice: [
        [
          { '%': `64.3%`, Time: `9.0ms` },
          { '%': `35.7%`, Time: `5.0ms` },
        ],
      ],
    })
  })
})

describe(`most frequent instants`, () => {
  test(`ranks instants by count and breaks down their attributes`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        instant(`deopt`, { attributes: { reason: `wrong map` } }),
        instant(`deopt`, { attributes: { reason: `not a Smi` } }),
        instant(`deopt`, { attributes: { reason: `wrong map` } }),
        instant(`mark`),
      ]),
    )

    expect(headings(md, 3)).toEqual([
      `# Trace`,
      `## Most frequent instants`,
      `### Count`,
    ])
    expect(
      tablesAt(md, [`Most frequent instants`, `Count`, `Categories`, `Other`]),
    ).toEqual([
      [
        {
          '%': `75.0%`,
          Count: `3`,
          Instant: `deopt`,
        },
        {
          '%': `25.0%`,
          Count: `1`,
          Instant: `mark`,
        },
      ],
    ])
    expect(
      tablesBySubheading(md, [
        `Most frequent instants`,
        `Count`,
        `Attribute values`,
      ]),
    ).toEqual({
      deopt: [
        [
          {
            '%': `66.7%`,
            Count: `2`,
            Attribute: `reason`,
            Value: `wrong map`,
          },
          {
            '%': `33.3%`,
            Count: `1`,
            Attribute: `reason`,
            Value: `not a Smi`,
          },
        ],
      ],
    })
  })

  test(`threads break down an instant recorded on several`, () => {
    const md = traceMd(
      makeAggregatedTrace(
        [
          instant(`tick`, { thread: 0 }),
          instant(`tick`, { thread: 1 }),
          instant(`tick`, { thread: 1 }),
        ],
        { threads: [`main`, `worker`] },
      ),
    )

    expect(
      tablesBySubheading(md, [`Most frequent instants`, `Count`, `Threads`]),
    ).toEqual({
      tick: [
        [
          {
            '%': `66.7%`,
            Count: `2`,
            Thread: `worker`,
          },
          {
            '%': `33.3%`,
            Count: `1`,
            Thread: `main`,
          },
        ],
      ],
    })
  })
})

describe(`gauges`, () => {
  test(`weighs the mean by the time each reading held, and orders by time`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        reading(`heap`, 30, { time: 10 }),
        reading(`heap`, 20, { time: 40 }),
        reading(`heap`, 10, { time: 0 }),
      ]),
    )

    expect(headings(md, 3)).toEqual([`# Trace`, `## Gauges`])
    expect(summaryLines(md)).toEqual([`Recorded 0 events over 40.0ms.`])
    expect(tablesAt(md, [`Gauges`])).toEqual([
      [
        {
          Gauge: `heap`,
          Readings: `3`,
          Min: `10 B at 0ms`,
          Mean: `25 B`,
          Max: `30 B at 10.0ms`,
          First: `10 B`,
          Last: `20 B`,
          Trend: `▁▁▁▁▁██████████████▅`,
        },
      ],
    ])
  })

  test(`shows the top N gauges with the most readings`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        reading(`stack`, 5),
        reading(`heap`, 30),
        reading(`heap`, 10),
      ]),
      resolveProfileToMdOptions({ topN: 1 }),
    )

    expect(tablesAt(md, [`Gauges`])).toEqual([
      [
        {
          Gauge: `heap`,
          Readings: `2`,
          Min: `10 B`,
          Max: `30 B`,
          First: `30 B`,
          Last: `10 B`,
          Trend: `█▁`,
        },
      ],
    ])
  })

  test(`tells apart the gauges of one name that are several threads'`, () => {
    const collection = (thread: number, before: number, after: number) =>
      span(`MinorGC`, {
        thread,
        arguments: { usedHeapSizeBefore: before, usedHeapSizeAfter: after },
      })
    const md = traceMd(
      makeAggregatedTrace([collection(0, 100, 40), collection(1, 9000, 8000)], {
        threads: [`main`, `worker`],
        context: { format: `trace-event`, origin: `node` },
      }),
    )

    expect(tablesAt(md, [`Gauges`])).toEqual([
      [
        {
          Gauge: `main / Heap used before collection`,
          Readings: `1`,
          Min: `100 B`,
          Max: `100 B`,
          First: `100 B`,
          Last: `100 B`,
          Trend: `▄`,
        },
        {
          Gauge: `main / Heap used after collection`,
          Readings: `1`,
          Min: `40 B`,
          Max: `40 B`,
          First: `40 B`,
          Last: `40 B`,
          Trend: `▄`,
        },
        {
          Gauge: `worker / Heap used before collection`,
          Readings: `1`,
          Min: `8.79 KiB`,
          Max: `8.79 KiB`,
          First: `8.79 KiB`,
          Last: `8.79 KiB`,
          Trend: `▄`,
        },
        {
          Gauge: `worker / Heap used after collection`,
          Readings: `1`,
          Min: `7.81 KiB`,
          Max: `7.81 KiB`,
          First: `7.81 KiB`,
          Last: `7.81 KiB`,
          Trend: `▄`,
        },
      ],
    ])
  })

  test(`untimed readings have no mean, and keep their order`, () => {
    const md = traceMd(
      makeAggregatedTrace([reading(`heap`, 30), reading(`heap`, 10)]),
    )

    expect(tablesAt(md, [`Gauges`])).toEqual([
      [
        {
          Gauge: `heap`,
          Readings: `2`,
          Min: `10 B`,
          Max: `30 B`,
          First: `30 B`,
          Last: `10 B`,
          Trend: `█▁`,
        },
      ],
    ])
  })

  test(`a trend draws the level across the trace, and an extreme states its first time`, () => {
    const md = traceMd(
      makeAggregatedTrace([
        instant(`start`, { time: 0 }),
        reading(`heap`, 10, { time: 50 }),
        reading(`heap`, 30, { time: 100 }),
        reading(`heap`, 10, { time: 150 }),
        reading(`heap`, 30, { time: 200 }),
      ]),
    )

    // The level is unknown before the first reading, and holds from each
    // reading until the next.
    expect(tablesAt(md, [`Gauges`])).toEqual([
      [
        {
          Gauge: `heap`,
          Readings: `4`,
          Min: `10 B at 50.0ms`,
          Mean: `16.7 B`,
          Max: `30 B at 100.0ms`,
          First: `10 B`,
          Last: `30 B`,
          Trend: `·····▁▁▁▁▁█████▁▁▁▁█`,
        },
      ],
    ])
  })

  test(`an untimed gauge states no mean beside a timed one`, () => {
    const requests = countMetricOf(`request`, { improvement: `increase` })
    const md = traceMd(
      makeAggregatedTrace([
        reading(`heap`, 10, { time: 0 }),
        reading(`heap`, 30, { time: 10 }),
        reading(`served`, 4, { metric: requests }),
      ]),
    )

    expect(tablesAt(md, [`Gauges`])).toEqual([
      [
        {
          Gauge: `heap`,
          Readings: `2`,
          Min: `10 B at 0ms`,
          Mean: `10 B`,
          Max: `30 B at 10.0ms`,
          First: `10 B`,
          Last: `30 B`,
          Trend: `▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█`,
        },
        {
          Gauge: `served`,
          Readings: `1`,
          Min: `4`,
          Mean: ``,
          Max: `4`,
          First: `4`,
          Last: `4`,
          Trend: `▄`,
        },
      ],
    ])
  })
})

describe(`entry filter`, () => {
  const trace = () =>
    makeAggregatedTrace([
      span(`shown`, { start: 0, duration: 10 }),
      span(`hidden`, { start: 10, duration: 30 }),
    ])

  test(`hides an event from the rankings and keeps it in the summary`, () => {
    const md = traceMd(
      trace(),
      resolveProfileToMdOptions({ showEntry: ({ name }) => name !== `hidden` }),
    )

    expect(summaryTables(md)).toEqual([
      [{ Category: `Other`, '%': `100.0%`, Time: `40.0ms`, Count: `2` }],
    ])
    expect(spanRanking(md, `Total time`)).toEqual([
      [
        {
          '%': `25.0%`,
          Time: `10.0ms`,
          Count: `1`,
          Mean: `10.0ms`,
          Max: `10.0ms`,
          Span: `shown`,
        },
      ],
    ])
  })

  test(`is ignored with a warning when it hides every event`, () => {
    const md = traceMd(
      trace(),
      resolveProfileToMdOptions({ showEntry: () => false }),
    )

    expectLogs([
      `warn: entry filter ignored because it hides every event, so all events are shown`,
    ])
    expect(spanRanking(md, `Total time`)).toEqual([
      [
        {
          '%': `75.0%`,
          Time: `30.0ms`,
          Count: `1`,
          Mean: `30.0ms`,
          Max: `30.0ms`,
          Span: `hidden`,
        },
        {
          '%': `25.0%`,
          Time: `10.0ms`,
          Count: `1`,
          Mean: `10.0ms`,
          Max: `10.0ms`,
          Span: `shown`,
        },
      ],
    ])
  })

  test(`is ignored with an info line when the default hides every event`, () => {
    const md = traceMd(
      makeAggregatedTrace([span(`(root)`, { start: 0, duration: 10 })]),
    )

    expectLogs([
      `info: default entry filter ignored because it hides every event, so all events are shown`,
    ])
    expect(spanRanking(md, `Total time`)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `10.0ms`,
          Count: `1`,
          Mean: `10.0ms`,
          Max: `10.0ms`,
          Span: `(root)`,
        },
      ],
    ])
  })
})
