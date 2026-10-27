import { describe, expect, test } from 'vitest'
import { summaryTables, tablesAt } from '../../modalities/trace/testing.ts'
import { expectLogs, summaryLines } from '../../testing.ts'
import { traceEventFormatSpec } from './index.ts'
import {
  breakdownTables,
  convertTraceEvents,
  gaugeTables,
  instantTables,
  processName,
  spanTables,
  threadName,
} from './testing.ts'

/** The lines logged when no entry or hint selects an origin. */
const FALLBACK_ORIGIN_LOGS = [
  `debug: origin candidates, in priority order: node, chrome, clang, tsc`,
  `info: fallback origin: chrome`,
  `debug: no entry marked another origin`,
]

/** The lines logged when the `process_name` metadata selects {@link origin}. */
const hintedOriginLogs = (origin: string) => [
  `debug: origin candidates, in priority order: node, chrome, clang, tsc`,
  `info: detected origin: ${origin}`,
  `debug: ${origin} is named by the format's metadata`,
]

describe(`matches`, () => {
  test(`accepts an array whose first element is an event`, () => {
    expect(traceEventFormatSpec.matches([{ ph: `X`, name: `a` }])).toBe(true)
  })

  test(`accepts an object with a traceEvents array`, () => {
    expect(traceEventFormatSpec.matches({ traceEvents: [] })).toBe(true)
  })

  test(`rejects an empty array`, () => {
    expect(traceEventFormatSpec.matches([])).toBe(false)
  })

  test(`rejects an array of something other than events`, () => {
    expect(traceEventFormatSpec.matches([{ name: `a` }])).toBe(false)
    expect(traceEventFormatSpec.matches([1, 2])).toBe(false)
    expect(traceEventFormatSpec.matches([null])).toBe(false)
  })

  test(`rejects an object whose traceEvents is not an array`, () => {
    expect(traceEventFormatSpec.matches({ traceEvents: {} })).toBe(false)
    expect(traceEventFormatSpec.matches({ nodes: [] })).toBe(false)
  })

  test(`rejects null and non-objects`, () => {
    expect(traceEventFormatSpec.matches(null)).toBe(false)
    expect(traceEventFormatSpec.matches(`string`)).toBe(false)
  })
})

describe(`convert`, () => {
  describe(`duration events`, () => {
    test(`ends the innermost span begun on the end event's thread`, () => {
      const md = convertTraceEvents([
        threadName(1, 1, `Main`),
        threadName(1, 2, `Worker`),
        { ph: `B`, name: `outer`, pid: 1, tid: 1, ts: 0 },
        { ph: `B`, name: `work`, pid: 1, tid: 2, ts: 1000 },
        { ph: `B`, name: `inner`, pid: 1, tid: 1, ts: 2000 },
        { ph: `E`, pid: 1, tid: 2, ts: 3000 },
        { ph: `E`, pid: 1, tid: 1, ts: 5000 },
        { ph: `E`, pid: 1, tid: 1, ts: 10_000 },
      ])

      expect(summaryLines(md)).toStrictEqual([`Recorded 3 events over 10.0ms.`])
      expect(spanTables(md, `Self time`)).toStrictEqual([
        [
          {
            '%': `70.0%`,
            Time: `7.0ms`,
            Count: `1`,
            Mean: `7.0ms`,
            Max: `7.0ms`,
            Span: `outer`,
          },
          {
            '%': `30.0%`,
            Time: `3.0ms`,
            Count: `1`,
            Mean: `3.0ms`,
            Max: `3.0ms`,
            Span: `inner`,
          },
          {
            '%': `20.0%`,
            Time: `2.0ms`,
            Count: `1`,
            Mean: `2.0ms`,
            Max: `2.0ms`,
            Span: `work`,
          },
        ],
      ])
      expect(breakdownTables(md, `Children`, `outer`)).toStrictEqual([
        [
          {
            '%': `30.0%`,
            Time: `3.0ms`,
            Count: `1`,
            Mean: `3.0ms`,
            Max: `3.0ms`,
            Child: `inner`,
          },
        ],
      ])
    })

    test(`nests a span in the one begun before it when both begin and end together`, () => {
      const md = convertTraceEvents([
        { ph: `B`, name: `outer`, pid: 1, tid: 1, ts: 0 },
        { ph: `B`, name: `inner`, pid: 1, tid: 1, ts: 0 },
        { ph: `E`, pid: 1, tid: 1, ts: 2000 },
        { ph: `E`, pid: 1, tid: 1, ts: 2000 },
      ])

      expect(breakdownTables(md, `Parents`, `inner`)).toStrictEqual([
        [
          {
            '%': `100.0%`,
            Time: `2.0ms`,
            Count: `1`,
            Mean: `2.0ms`,
            Max: `2.0ms`,
            Parent: `outer`,
          },
        ],
      ])
      expect(breakdownTables(md, `Parents`, `outer`)).toStrictEqual([])
    })

    test(`merges an end event's args over its begin event's`, () => {
      const md = convertTraceEvents([
        {
          ph: `B`,
          name: `request`,
          pid: 1,
          tid: 1,
          ts: 0,
          args: { phase: `begin`, method: `GET` },
        },
        {
          ph: `E`,
          pid: 1,
          tid: 1,
          ts: 4000,
          args: { phase: `end`, status: `ok` },
        },
      ])

      expect(breakdownTables(md, `Attribute values`, `request`)).toStrictEqual([
        [
          {
            '%': `100.0%`,
            Time: `4.0ms`,
            Count: `1`,
            Mean: `4.0ms`,
            Max: `4.0ms`,
            Attribute: `phase`,
            Value: `end`,
          },
          {
            '%': `100.0%`,
            Time: `4.0ms`,
            Count: `1`,
            Mean: `4.0ms`,
            Max: `4.0ms`,
            Attribute: `method`,
            Value: `GET`,
          },
          {
            '%': `100.0%`,
            Time: `4.0ms`,
            Count: `1`,
            Mean: `4.0ms`,
            Max: `4.0ms`,
            Attribute: `status`,
            Value: `ok`,
          },
        ],
      ])
    })

    test(`skips an end event that ends nothing begun`, () => {
      const md = convertTraceEvents([
        { ph: `X`, name: `task`, pid: 1, tid: 1, ts: 0, dur: 2000 },
        { ph: `E`, pid: 1, tid: 1, ts: 3000 },
        { ph: `E`, pid: 1, tid: 2, ts: 4000 },
      ])

      expect(spanTables(md, `Total time`)).toStrictEqual([
        [
          {
            '%': `100.0%`,
            Time: `2.0ms`,
            Count: `1`,
            Mean: `2.0ms`,
            Max: `2.0ms`,
            Span: `task`,
          },
        ],
      ])
      expectLogs([
        ...FALLBACK_ORIGIN_LOGS,
        `warn: skipped 2 end events ending nothing begun`,
      ])
    })

    test(`counts a span that never ends, with no time`, () => {
      const md = convertTraceEvents([
        { ph: `X`, name: `task`, pid: 1, tid: 1, ts: 0, dur: 2000 },
        { ph: `B`, name: `unended`, pid: 1, tid: 1, ts: 1000 },
      ])

      expect(summaryLines(md)).toStrictEqual([`Recorded 2 events over 2.0ms.`])
      expect(summaryTables(md)).toStrictEqual([
        [{ Category: `Other`, '%': `100.0%`, Time: `2.0ms`, Count: `2` }],
      ])
      expect(spanTables(md, `Total time`)).toStrictEqual([
        [
          {
            '%': `100.0%`,
            Time: `2.0ms`,
            Count: `1`,
            Mean: `2.0ms`,
            Max: `2.0ms`,
            Span: `task`,
          },
        ],
      ])
      expect(breakdownTables(md, `Children`, `task`)).toStrictEqual([
        [
          {
            '%': `0.0%`,
            Time: `0ms`,
            Count: `1`,
            Mean: `0ms`,
            Max: `0ms`,
            Child: `unended`,
          },
        ],
      ])
    })
  })

  describe(`complete events`, () => {
    test(`nests spans by containment whatever order they are written in`, () => {
      const md = convertTraceEvents([
        { ph: `X`, name: `leaf`, pid: 1, tid: 1, ts: 2000, dur: 1000 },
        { ph: `X`, name: `mid`, pid: 1, tid: 1, ts: 1000, dur: 5000 },
        { ph: `X`, name: `root`, pid: 1, tid: 1, ts: 0, dur: 10_000 },
      ])

      expect(spanTables(md, `Self time`)).toStrictEqual([
        [
          {
            '%': `50.0%`,
            Time: `5.0ms`,
            Count: `1`,
            Mean: `5.0ms`,
            Max: `5.0ms`,
            Span: `root`,
          },
          {
            '%': `40.0%`,
            Time: `4.0ms`,
            Count: `1`,
            Mean: `4.0ms`,
            Max: `4.0ms`,
            Span: `mid`,
          },
          {
            '%': `10.0%`,
            Time: `1.0ms`,
            Count: `1`,
            Mean: `1.0ms`,
            Max: `1.0ms`,
            Span: `leaf`,
          },
        ],
      ])
      expect(breakdownTables(md, `Parents`, `leaf`)).toStrictEqual([
        [
          {
            '%': `100.0%`,
            Time: `1.0ms`,
            Count: `1`,
            Mean: `1.0ms`,
            Max: `1.0ms`,
            Parent: `mid`,
          },
        ],
      ])
      expect(breakdownTables(md, `Parents`, `mid`)).toStrictEqual([
        [
          {
            '%': `100.0%`,
            Time: `4.0ms`,
            Count: `1`,
            Mean: `4.0ms`,
            Max: `4.0ms`,
            Parent: `root`,
          },
        ],
      ])
    })

    test(`nests a span on another thread in nothing`, () => {
      const md = convertTraceEvents([
        { ph: `X`, name: `root`, pid: 1, tid: 1, ts: 0, dur: 10_000 },
        { ph: `X`, name: `elsewhere`, pid: 1, tid: 2, ts: 1000, dur: 1000 },
      ])

      // No span is nested, so no ranking by self time is shown.
      expect(spanTables(md, `Self time`)).toStrictEqual([])
      expect(spanTables(md, `Total time`)).toStrictEqual([
        [
          {
            '%': `100.0%`,
            Time: `10.0ms`,
            Count: `1`,
            Mean: `10.0ms`,
            Max: `10.0ms`,
            Span: `root`,
          },
          {
            '%': `10.0%`,
            Time: `1.0ms`,
            Count: `1`,
            Mean: `1.0ms`,
            Max: `1.0ms`,
            Span: `elsewhere`,
          },
        ],
      ])
    })

    test(`nests a span overlapping another in the innermost span containing it`, () => {
      // `overlap` starts inside `mid` and ends after it, inside `root`.
      const md = convertTraceEvents([
        { ph: `X`, name: `root`, pid: 1, tid: 1, ts: 0, dur: 10_000 },
        { ph: `X`, name: `mid`, pid: 1, tid: 1, ts: 1000, dur: 5000 },
        { ph: `X`, name: `overlap`, pid: 1, tid: 1, ts: 4000, dur: 4000 },
        { ph: `X`, name: `later`, pid: 1, tid: 1, ts: 5000, dur: 500 },
      ])

      expect(breakdownTables(md, `Parents`, `overlap`)).toStrictEqual([
        [
          {
            '%': `100.0%`,
            Time: `3.5ms`,
            Count: `1`,
            Mean: `3.5ms`,
            Max: `3.5ms`,
            Parent: `root`,
          },
        ],
      ])
      // The span it overlaps contains no later span, so one within both nests
      // in the overlapping span.
      expect(breakdownTables(md, `Parents`, `later`)).toStrictEqual([
        [
          {
            '%': `100.0%`,
            Time: `0.5ms`,
            Count: `1`,
            Mean: `0.5ms`,
            Max: `0.5ms`,
            Parent: `overlap`,
          },
        ],
      ])
      expect(spanTables(md, `Self time`)).toStrictEqual([
        [
          {
            '%': `50.0%`,
            Time: `5.0ms`,
            Count: `1`,
            Mean: `5.0ms`,
            Max: `5.0ms`,
            Span: `mid`,
          },
          {
            '%': `35.0%`,
            Time: `3.5ms`,
            Count: `1`,
            Mean: `3.5ms`,
            Max: `3.5ms`,
            Span: `overlap`,
          },
          {
            '%': `10.0%`,
            Time: `1.0ms`,
            Count: `1`,
            Mean: `1.0ms`,
            Max: `1.0ms`,
            Span: `root`,
          },
          {
            '%': `5.0%`,
            Time: `0.5ms`,
            Count: `1`,
            Mean: `0.5ms`,
            Max: `0.5ms`,
            Span: `later`,
          },
        ],
      ])
    })

    test(`nests a span of no duration at its parent's start or end`, () => {
      const md = convertTraceEvents([
        { ph: `X`, name: `root`, pid: 1, tid: 1, ts: 0, dur: 10_000 },
        { ph: `X`, name: `atStart`, pid: 1, tid: 1, ts: 0, dur: 0 },
        { ph: `X`, name: `atEnd`, pid: 1, tid: 1, ts: 10_000, dur: 0 },
      ])

      expect(breakdownTables(md, `Children`, `root`)).toStrictEqual([
        [
          {
            '%': `0.0%`,
            Time: `0ms`,
            Count: `1`,
            Mean: `0ms`,
            Max: `0ms`,
            Child: `atStart`,
          },
          {
            '%': `0.0%`,
            Time: `0ms`,
            Count: `1`,
            Mean: `0ms`,
            Max: `0ms`,
            Child: `atEnd`,
          },
        ],
      ])
    })

    test(`starts a sibling where the span before it ends`, () => {
      const md = convertTraceEvents([
        { ph: `X`, name: `root`, pid: 1, tid: 1, ts: 0, dur: 10_000 },
        { ph: `X`, name: `first`, pid: 1, tid: 1, ts: 0, dur: 4000 },
        { ph: `X`, name: `second`, pid: 1, tid: 1, ts: 4000, dur: 4000 },
      ])

      expect(breakdownTables(md, `Parents`, `second`)).toStrictEqual([
        [
          {
            '%': `100.0%`,
            Time: `4.0ms`,
            Count: `1`,
            Mean: `4.0ms`,
            Max: `4.0ms`,
            Parent: `root`,
          },
        ],
      ])
      expect(breakdownTables(md, `Children`, `first`)).toStrictEqual([])
    })
  })

  test(`reads thread CPU time from tdur and from a duration event's tts`, () => {
    const md = convertTraceEvents([
      {
        ph: `X`,
        name: `complete`,
        pid: 1,
        tid: 1,
        ts: 0,
        dur: 8000,
        tdur: 2000,
      },
      { ph: `B`, name: `duration`, pid: 1, tid: 1, ts: 1000, tts: 500 },
      { ph: `E`, pid: 1, tid: 1, ts: 5000, tts: 1500 },
    ])

    expect(spanTables(md, `Total CPU time`)).toStrictEqual([
      [
        {
          '%': `25.0%`,
          'CPU time': `2.0ms`,
          Count: `1`,
          Mean: `2.0ms`,
          Max: `2.0ms`,
          Span: `complete`,
        },
        {
          '%': `12.5%`,
          'CPU time': `1.0ms`,
          Count: `1`,
          Mean: `1.0ms`,
          Max: `1.0ms`,
          Span: `duration`,
        },
      ],
    ])
    expect(spanTables(md, `Self CPU time`)).toStrictEqual([
      [
        {
          '%': `12.5%`,
          'CPU time': `1.0ms`,
          Count: `1`,
          Mean: `1.0ms`,
          Max: `1.0ms`,
          Span: `complete`,
        },
        {
          '%': `12.5%`,
          'CPU time': `1.0ms`,
          Count: `1`,
          Mean: `1.0ms`,
          Max: `1.0ms`,
          Span: `duration`,
        },
      ],
    ])
  })

  describe(`threads`, () => {
    test(`names a thread from its thread_name metadata, or as unnamed`, () => {
      const md = convertTraceEvents([
        threadName(1, 1, `Main`),
        // Clang names its only thread with an empty string.
        threadName(1, 3, ``),
        { ph: `X`, name: `a`, pid: 1, tid: 1, ts: 0, dur: 4000 },
        { ph: `X`, name: `b`, pid: 1, tid: 2, ts: 0, dur: 2000 },
        { ph: `X`, name: `c`, pid: 1, tid: 3, ts: 0, dur: 1000 },
      ])

      // Threads sharing a name are one thread.
      expect(summaryTables(md)).toStrictEqual([
        [{ Category: `Other`, '%': `175.0%`, Time: `7.0ms`, Count: `3` }],
      ])
      expect(tablesAt(md, [`Threads`])).toStrictEqual([
        [
          { Thread: `Main`, '%': `100.0%`, Time: `4.0ms`, Count: `1` },
          { Thread: `(unnamed)`, '%': `75.0%`, Time: `3.0ms`, Count: `2` },
        ],
      ])
    })

    test(`qualifies a thread by its process when several record events`, () => {
      const md = convertTraceEvents([
        processName(1, `Browser`),
        threadName(1, 1, `Main`),
        threadName(2, 1, `Main`),
        { ph: `X`, name: `a`, pid: 1, tid: 1, ts: 0, dur: 4000 },
        { ph: `X`, name: `b`, pid: 2, tid: 1, ts: 0, dur: 2000 },
        { ph: `X`, name: `c`, pid: 2, tid: 2, ts: 0, dur: 1000 },
      ])

      expect(summaryTables(md)).toStrictEqual([
        [{ Category: `Other`, '%': `175.0%`, Time: `7.0ms`, Count: `3` }],
      ])
      expect(tablesAt(md, [`Threads`])).toStrictEqual([
        [
          {
            Thread: `Browser / Main`,
            '%': `100.0%`,
            Time: `4.0ms`,
            Count: `1`,
          },
          {
            Thread: `(unnamed) / Main`,
            '%': `50.0%`,
            Time: `2.0ms`,
            Count: `1`,
          },
          {
            Thread: `(unnamed) / (unnamed)`,
            '%': `25.0%`,
            Time: `1.0ms`,
            Count: `1`,
          },
        ],
      ])
    })

    test(`shows no thread table for a trace recorded on one thread`, () => {
      const md = convertTraceEvents([
        { ph: `X`, name: `a`, pid: 1, tid: 1, ts: 0, dur: 4000 },
      ])

      expect(summaryTables(md)).toStrictEqual([
        [{ Category: `Other`, '%': `100.0%`, Time: `4.0ms`, Count: `1` }],
      ])
    })
  })

  test(`reads i, I, and R events as instants`, () => {
    const md = convertTraceEvents([
      { ph: `i`, name: `mark`, pid: 1, tid: 1, ts: 0, scope: `g` },
      { ph: `I`, name: `mark`, pid: 1, tid: 1, ts: 1000 },
      { ph: `R`, name: `navigationStart`, pid: 1, tid: 1, ts: 2000 },
      { ph: `i`, name: `mark`, pid: 1, tid: 1, ts: 3000, args: { why: `x` } },
    ])

    expect(summaryLines(md)).toStrictEqual([`Recorded 4 events over 3.0ms.`])
    expect(summaryTables(md)).toStrictEqual([
      [{ Category: `Other`, Count: `4` }],
    ])
    expect(instantTables(md)).toStrictEqual([
      [
        { '%': `75.0%`, Count: `3`, Instant: `mark` },
        { '%': `25.0%`, Count: `1`, Instant: `navigationStart` },
      ],
    ])
    expect(
      breakdownTables(md, `Attribute values`, `mark`, `Most frequent instants`),
    ).toStrictEqual([
      [{ '%': `33.3%`, Count: `1`, Attribute: `why`, Value: `x` }],
    ])
  })

  describe(`counter events`, () => {
    test(`reads a counter's single series as a gauge`, () => {
      const md = convertTraceEvents([
        { ph: `C`, name: `queue`, pid: 1, ts: 0, args: { length: 2 } },
        { ph: `C`, name: `queue`, pid: 1, ts: 1000, args: { length: 8 } },
        { ph: `C`, name: `queue`, pid: 1, ts: 4000, args: { length: 4 } },
      ])

      expect(summaryLines(md)).toStrictEqual([`Recorded 0 events over 4.0ms.`])
      // The mean weighs 2 for 1ms and 8 for 3ms.
      expect(gaugeTables(md)).toStrictEqual([
        [
          {
            Gauge: `queue`,
            Readings: `3`,
            Min: `2 at 0ms`,
            Mean: `6.5`,
            Max: `8 at 1.0ms`,
            First: `2`,
            Last: `4`,
            Trend: `▁▁▁▁▁██████████████▃`,
          },
        ],
      ])
    })

    test(`keeps each process's counter apart when the trace records several`, () => {
      const md = convertTraceEvents([
        processName(1, `Browser`),
        processName(2, `Renderer`),
        { ph: `C`, name: `queue`, pid: 1, ts: 0, args: { length: 2 } },
        { ph: `C`, name: `queue`, pid: 2, ts: 0, args: { length: 8 } },
      ])

      expect(gaugeTables(md)).toStrictEqual([
        [
          {
            Gauge: `Browser / queue`,
            Readings: `1`,
            Min: `2 at 0ms`,
            Mean: `2`,
            Max: `2 at 0ms`,
            First: `2`,
            Last: `2`,
            Trend: `▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄`,
          },
          {
            Gauge: `Renderer / queue`,
            Readings: `1`,
            Min: `8 at 0ms`,
            Mean: `8`,
            Max: `8 at 0ms`,
            First: `8`,
            Last: `8`,
            Trend: `▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄`,
          },
        ],
      ])
    })

    test(`reads each of several series as a gauge, told apart by the counter's id`, () => {
      const md = convertTraceEvents([
        {
          ph: `C`,
          name: `memory`,
          pid: 1,
          ts: 0,
          id: 7,
          args: { used: 10, free: 90, label: `ignored` },
        },
        {
          ph: `C`,
          name: `memory`,
          pid: 1,
          ts: 1000,
          id: 7,
          args: { used: 30, free: 70 },
        },
      ])

      expect(gaugeTables(md)).toStrictEqual([
        [
          {
            Gauge: `memory[7] used`,
            Readings: `2`,
            Min: `10 at 0ms`,
            Mean: `10`,
            Max: `30 at 1.0ms`,
            First: `10`,
            Last: `30`,
            Trend: `▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█`,
          },
          {
            Gauge: `memory[7] free`,
            Readings: `2`,
            Min: `70 at 1.0ms`,
            Mean: `90`,
            Max: `90 at 0ms`,
            First: `90`,
            Last: `70`,
            Trend: `███████████████████▁`,
          },
        ],
      ])
    })

    test(`names a counter's series alike whichever of its events state one series`, () => {
      const md = convertTraceEvents([
        { ph: `C`, name: `mem`, pid: 1, ts: 0, args: { heap: 1 } },
        { ph: `C`, name: `mem`, pid: 1, ts: 1000, args: { heap: 2, stack: 3 } },
      ])

      expect(gaugeTables(md)).toStrictEqual([
        [
          {
            Gauge: `mem heap`,
            Readings: `2`,
            Min: `1 at 0ms`,
            Mean: `1`,
            Max: `2 at 1.0ms`,
            First: `1`,
            Last: `2`,
            Trend: `▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█`,
          },
          {
            Gauge: `mem stack`,
            Readings: `1`,
            Min: `3 at 1.0ms`,
            Mean: `3`,
            Max: `3 at 1.0ms`,
            First: `3`,
            Last: `3`,
            Trend: `···················▄`,
          },
        ],
      ])
    })
  })

  describe(`async events`, () => {
    test(`pairs and nests a tree's events in timestamp order`, () => {
      // Clang writes both of a span's events when the span ends, so the inner
      // span's events precede the outer's.
      const md = convertTraceEvents([
        { ph: `b`, name: `Source`, cat: `Source`, pid: 1, id: 0, ts: 1000 },
        { ph: `e`, name: `Source`, cat: `Source`, pid: 1, id: 0, ts: 3000 },
        { ph: `b`, name: `Source`, cat: `Source`, pid: 1, id: 0, ts: 0 },
        { ph: `e`, name: `Source`, cat: `Source`, pid: 1, id: 0, ts: 10_000 },
        { ph: `b`, name: `request`, cat: `net`, pid: 1, id: 0, ts: 2000 },
        { ph: `e`, name: `request`, cat: `net`, pid: 1, id: 0, ts: 6000 },
      ])

      // A span nested in one of its name adds nothing to the name's time.
      expect(spanTables(md, `Elapsed time`)).toStrictEqual([
        [
          {
            Time: `10.0ms`,
            Count: `2`,
            Mean: `6.0ms`,
            Max: `10.0ms`,
            Span: `Source`,
          },
          {
            Time: `4.0ms`,
            Count: `1`,
            Mean: `4.0ms`,
            Max: `4.0ms`,
            Span: `request`,
          },
        ],
      ])
      expect(
        breakdownTables(md, `Parents`, `Source`, `Longest async spans`),
      ).toStrictEqual([
        [
          {
            '%': `16.7%`,
            Time: `2.0ms`,
            Count: `1`,
            Mean: `2.0ms`,
            Max: `2.0ms`,
            Parent: `Source`,
          },
        ],
      ])
      // A span of another category's tree is nested in nothing.
      expect(
        breakdownTables(md, `Parents`, `request`, `Longest async spans`),
      ).toStrictEqual([])
      // Async spans have no self time, so they add no time to a category.
      expect(summaryTables(md)).toStrictEqual([
        [{ Category: `Other`, '%': `0.0%`, Time: `0ms`, Count: `3` }],
      ])
      expect(spanTables(md, `Total time`)).toStrictEqual([])
    })

    test(`tells trees apart by scope and by a local id's process`, () => {
      const md = convertTraceEvents([
        { ph: `b`, name: `a`, cat: `c`, pid: 1, id2: { local: 1 }, ts: 0 },
        { ph: `b`, name: `a`, cat: `c`, pid: 2, id2: { local: 1 }, ts: 1000 },
        { ph: `e`, name: `a`, cat: `c`, pid: 1, id2: { local: 1 }, ts: 5000 },
        { ph: `e`, name: `a`, cat: `c`, pid: 2, id2: { local: 1 }, ts: 9000 },
        { ph: `b`, name: `s`, cat: `c`, pid: 1, id: 1, scope: `x`, ts: 0 },
        { ph: `b`, name: `s`, cat: `c`, pid: 1, id: 1, scope: `y`, ts: 1000 },
        { ph: `e`, name: `s`, cat: `c`, pid: 1, id: 1, scope: `x`, ts: 2000 },
        { ph: `e`, name: `s`, cat: `c`, pid: 1, id: 1, scope: `y`, ts: 4000 },
      ])

      expect(spanTables(md, `Elapsed time`)).toStrictEqual([
        [
          {
            Time: `13.0ms`,
            Count: `2`,
            Mean: `6.5ms`,
            Max: `8.0ms`,
            Span: `a`,
          },
          { Time: `5.0ms`, Count: `2`, Mean: `2.5ms`, Max: `3.0ms`, Span: `s` },
        ],
      ])
      expect(
        breakdownTables(md, `Parents`, `a`, `Longest async spans`),
      ).toStrictEqual([])
      expect(
        breakdownTables(md, `Parents`, `s`, `Longest async spans`),
      ).toStrictEqual([])
    })

    test(`counts an unended span with no time and skips an end with nothing begun`, () => {
      const md = convertTraceEvents([
        { ph: `b`, name: `PROMISE`, cat: `c`, pid: 1, id: `0x1`, ts: 0 },
        { ph: `e`, name: `PROMISE`, cat: `c`, pid: 1, id: `0x1`, ts: 2000 },
        { ph: `b`, name: `PROMISE`, cat: `c`, pid: 1, id: `0x2`, ts: 1000 },
        { ph: `e`, name: `Timeout`, cat: `c`, pid: 1, id: `0x2`, ts: 3000 },
      ])

      expect(spanTables(md, `Elapsed time`)).toStrictEqual([
        [
          {
            Time: `2.0ms`,
            Count: `2`,
            Mean: `2.0ms`,
            Max: `2.0ms`,
            Span: `PROMISE`,
          },
        ],
      ])
      expectLogs([
        ...FALLBACK_ORIGIN_LOGS,
        `warn: skipped 1 end event ending nothing begun`,
      ])
    })

    test(`reads the legacy S and F events as an async span`, () => {
      const md = convertTraceEvents([
        { ph: `S`, name: `load`, cat: `c`, pid: 1, id: 1, ts: 0 },
        { ph: `F`, name: `load`, cat: `c`, pid: 1, id: 1, ts: 2000 },
      ])

      expect(spanTables(md, `Elapsed time`)).toStrictEqual([
        [
          {
            Time: `2.0ms`,
            Count: `1`,
            Mean: `2.0ms`,
            Max: `2.0ms`,
            Span: `load`,
          },
        ],
      ])
    })

    test(`reads an n event as an instant`, () => {
      const md = convertTraceEvents([
        { ph: `n`, name: `headers`, cat: `c`, pid: 1, id: 1, ts: 0 },
        { ph: `n`, name: `headers`, cat: `c`, pid: 1, id: 2, ts: 1000 },
      ])

      expect(instantTables(md)).toStrictEqual([
        [{ '%': `100.0%`, Count: `2`, Instant: `headers` }],
      ])
    })
  })

  test(`skips an event in a phase the parser leaves unread`, () => {
    const md = convertTraceEvents([
      { ph: `X`, name: `task`, pid: 1, tid: 1, ts: 0, dur: 2000 },
      { ph: `s`, name: `flow`, pid: 1, tid: 1, ts: 0, id: 1 },
      { ph: `N`, name: `object`, pid: 1, tid: 1, ts: 0, id: 1 },
      { ph: `P`, name: `sample`, pid: 1, tid: 1, ts: 0 },
      // Perfetto tolerates an empty trailing event.
      {},
    ])

    expect(summaryLines(md)).toStrictEqual([`Recorded 1 event over 2.0ms.`])
    expectLogs([
      ...FALLBACK_ORIGIN_LOGS,
      `warn: skipped 4 events in a phase this format's parser leaves unread`,
    ])
  })

  test(`reads a string argument as an attribute, and no other argument`, () => {
    const md = convertTraceEvents([
      {
        ph: `X`,
        name: `Source`,
        pid: 1,
        tid: 1,
        ts: 0,
        dur: 3000,
        args: {
          detail: `a.h`,
          count: 3,
          cached: true,
          data: { url: `nested` },
        },
      },
      {
        ph: `X`,
        name: `Source`,
        pid: 1,
        tid: 1,
        ts: 3000,
        dur: 1000,
        args: { detail: `b.h` },
      },
    ])

    expect(breakdownTables(md, `Attribute values`, `Source`)).toStrictEqual([
      [
        {
          '%': `75.0%`,
          Time: `3.0ms`,
          Count: `1`,
          Mean: `3.0ms`,
          Max: `3.0ms`,
          Attribute: `detail`,
          Value: `a.h`,
        },
        {
          '%': `25.0%`,
          Time: `1.0ms`,
          Count: `1`,
          Mean: `1.0ms`,
          Max: `1.0ms`,
          Attribute: `detail`,
          Value: `b.h`,
        },
      ],
    ])
    expect(breakdownTables(md, `Longest instances`, `Source`)).toStrictEqual([
      [
        {
          '%': `75.0%`,
          Start: `0ms`,
          Thread: `(unnamed)`,
          Time: `3.0ms`,
          Attributes: `detail=a.h`,
        },
        {
          '%': `25.0%`,
          Start: `3.0ms`,
          Thread: `(unnamed)`,
          Time: `1.0ms`,
          Attributes: `detail=b.h`,
        },
      ],
    ])
  })

  test(`passes an event's categories to its origin's categorization`, () => {
    const md = convertTraceEvents({
      traceEvents: [
        processName(1, `node`),
        {
          ph: `X`,
          name: `fs.sync.read`,
          cat: `node,node.fs,node.fs.sync`,
          pid: 1,
          tid: 1,
          ts: 0,
          dur: 3000,
        },
        { ph: `X`, name: `fs.sync.read`, pid: 1, tid: 1, ts: 3000, dur: 1000 },
        {
          ph: `X`,
          name: `other`,
          cat: `node`,
          pid: 1,
          tid: 1,
          ts: 4000,
          dur: 1000,
        },
      ],
    })

    // Events sharing a name are one span, categorized by its first event.
    expect(summaryTables(md)).toStrictEqual([
      [
        { Category: `I/O`, '%': `80.0%`, Time: `4.0ms`, Count: `2` },
        { Category: `Other`, '%': `20.0%`, Time: `1.0ms`, Count: `1` },
      ],
    ])
  })

  describe(`origin`, () => {
    test.each([`node`, `clang`, `tsc`])(
      `a process named %s hints its origin`,
      name => {
        convertTraceEvents([
          processName(1, name),
          { ph: `X`, name: `task`, pid: 1, tid: 1, ts: 0, dur: 1000 },
        ])

        expectLogs(hintedOriginLogs(name))
      },
    )

    test(`a process name is matched whatever its case`, () => {
      convertTraceEvents([
        processName(1, `Node`),
        { ph: `X`, name: `task`, pid: 1, tid: 1, ts: 0, dur: 1000 },
      ])

      expectLogs(hintedOriginLogs(`node`))
    })

    test(`a process named for no origin falls back to chrome`, () => {
      convertTraceEvents([
        processName(1, `Renderer`),
        { ph: `X`, name: `task`, pid: 1, tid: 1, ts: 0, dur: 1000 },
      ])

      expectLogs(FALLBACK_ORIGIN_LOGS)
    })

    test(`a trace naming no process falls back to chrome`, () => {
      convertTraceEvents([
        { ph: `X`, name: `task`, pid: 1, tid: 1, ts: 0, dur: 1000 },
      ])

      expectLogs(FALLBACK_ORIGIN_LOGS)
    })
  })
})
