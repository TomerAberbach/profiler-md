import { describe, expect, test } from 'vitest'
import { defaultShowEntry } from '../../options.ts'
import {
  callersTables,
  categoryTables,
  linesTables,
  selfTimeTables,
  summaryLines,
  totalTimeTables,
} from '../../testing/markdown.ts'
import {
  detectWebKitTimelineRecording,
  webkitTimelineRecordingToMd,
} from './index.ts'
import type { WebKitStackFrame, WebKitTimelineRecording } from './parse.ts'

const makeWebKitRecording = ({
  sampleStackTraces,
  sampleDurations,
}: {
  sampleStackTraces: { stackFrames: WebKitStackFrame[] }[]
  sampleDurations: number[]
}): WebKitTimelineRecording => ({
  version: 1,
  recording: { sampleStackTraces, sampleDurations },
})

const makeFrame = ({
  name,
  url,
  line = 1,
  column = 1,
  expressionLocation,
}: {
  name: string
  url: string
  line?: number
  column?: number
  expressionLocation?: { line: number; column: number }
}): WebKitStackFrame => ({
  sourceID: `1`,
  name,
  line,
  column,
  url,
  expressionLocation,
})

describe(`detect`, () => {
  test(`accepts valid recording`, () => {
    expect(
      detectWebKitTimelineRecording({
        version: 1,
        recording: { sampleStackTraces: [], sampleDurations: [] },
      }),
    ).toBeDefined()
  })

  test(`rejects null`, () => {
    expect(detectWebKitTimelineRecording(null)).toBeUndefined()
  })

  test(`rejects non-objects`, () => {
    expect(detectWebKitTimelineRecording(42)).toBeUndefined()
  })

  test(`rejects wrong version`, () => {
    expect(
      detectWebKitTimelineRecording({
        version: 2,
        recording: { sampleStackTraces: [], sampleDurations: [] },
      }),
    ).toBeUndefined()
  })

  test(`rejects missing version`, () => {
    expect(
      detectWebKitTimelineRecording({
        recording: { sampleStackTraces: [], sampleDurations: [] },
      }),
    ).toBeUndefined()
  })

  test(`rejects null recording`, () => {
    expect(
      detectWebKitTimelineRecording({ version: 1, recording: null }),
    ).toBeUndefined()
  })

  test(`rejects missing sampleStackTraces`, () => {
    expect(
      detectWebKitTimelineRecording({
        version: 1,
        recording: { sampleDurations: [] },
      }),
    ).toBeUndefined()
  })
})

describe(`convert`, () => {
  test(`basic two-function call stack`, () => {
    // Main calls work; 2 samples of work+main, 1 sample of main alone
    const recording = makeWebKitRecording({
      sampleStackTraces: [
        {
          stackFrames: [
            makeFrame({
              name: `work`,
              url: `file:///project/src/index.ts`,
              line: 10,
            }),
            makeFrame({ name: `main`, url: `file:///project/src/index.ts` }),
          ],
        },
        {
          stackFrames: [
            makeFrame({
              name: `work`,
              url: `file:///project/src/index.ts`,
              line: 10,
            }),
            makeFrame({ name: `main`, url: `file:///project/src/index.ts` }),
          ],
        },
        {
          stackFrames: [
            makeFrame({ name: `main`, url: `file:///project/src/index.ts` }),
          ],
        },
      ],
      sampleDurations: [0.01, 0.02, 0.005],
    })

    const md = webkitTimelineRecordingToMd(JSON.stringify(recording), {
      cwd: `/project/`,
    })

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `85.7%`,
          Time: `30.0ms`,
          Samples: `2`,
          Function: `work`,
          Location: `src/index.ts:10:1`,
        },
        {
          '%': `14.3%`,
          Time: `5.0ms`,
          Samples: `1`,
          Function: `main`,
          Location: `src/index.ts:1:1`,
        },
      ],
    ])
    expect(totalTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `35.0ms`,
          Samples: `3`,
          Function: `main`,
          Location: `src/index.ts:1:1`,
        },
        {
          '%': `85.7%`,
          Time: `30.0ms`,
          Samples: `2`,
          Function: `work`,
          Location: `src/index.ts:10:1`,
        },
      ],
    ])
  })

  test(`empty stack samples are skipped`, () => {
    // Only the non-empty sample (50ms) is counted, not the empty-stack ones.
    const recording = makeWebKitRecording({
      sampleStackTraces: [
        { stackFrames: [] },
        {
          stackFrames: [
            makeFrame({ name: `main`, url: `file:///project/src/index.ts` }),
          ],
        },
        { stackFrames: [] },
      ],
      sampleDurations: [0.1, 0.05, 0.1],
    })

    const md = webkitTimelineRecordingToMd(JSON.stringify(recording), {
      cwd: `/project/`,
    })

    expect(summaryLines(md)).toEqual([
      expect.stringContaining(`50.0ms over 1 sample`),
    ])
  })

  test(`frame with empty URL renders as native`, () => {
    const recording = makeWebKitRecording({
      sampleStackTraces: [
        {
          stackFrames: [
            {
              sourceID: `0`,
              name: `nativeFunc`,
              line: -1,
              column: -1,
              url: ``,
            },
          ],
        },
      ],
      sampleDurations: [0.01],
    })

    const md = webkitTimelineRecordingToMd(JSON.stringify(recording), {
      showEntry: () => true,
    })

    expect(selfTimeTables(md)).toEqual([
      [expect.objectContaining({ Location: `<native>` })],
    ])
  })

  test(`recursive function deduplicates total time`, () => {
    // Factorial calls itself; 1 sample with 2-frame recursive stack, 1 alone
    const recording = makeWebKitRecording({
      sampleStackTraces: [
        {
          stackFrames: [
            makeFrame({
              name: `factorial`,
              url: `file:///project/src/index.ts`,
            }),
            makeFrame({
              name: `factorial`,
              url: `file:///project/src/index.ts`,
            }),
          ],
        },
        {
          stackFrames: [
            makeFrame({
              name: `factorial`,
              url: `file:///project/src/index.ts`,
            }),
          ],
        },
      ],
      sampleDurations: [0.005, 0.01],
    })

    const md = webkitTimelineRecordingToMd(JSON.stringify(recording), {
      cwd: `/project/`,
    })

    // Recursive: total deduplicated (2 samples, not 3)
    expect(totalTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `15.0ms`,
          Samples: `2`,
          Function: `factorial`,
          Location: `src/index.ts:1:1`,
        },
      ],
    ])
  })

  test(`categorizes third-party and URL frames`, () => {
    // ThirdParty is from node_modules (third-party); anon is from an https URL
    const recording = makeWebKitRecording({
      sampleStackTraces: [
        {
          stackFrames: [
            makeFrame({
              name: `anon`,
              url: `https://example.com/app.js`,
              column: 244,
            }),
            makeFrame({ name: `main`, url: `file:///project/src/index.ts` }),
          ],
        },
        {
          stackFrames: [
            makeFrame({
              name: `thirdParty`,
              url: `file:///project/node_modules/lib/index.js`,
            }),
            makeFrame({ name: `main`, url: `file:///project/src/index.ts` }),
          ],
        },
      ],
      sampleDurations: [0.01, 0.02],
    })

    const md = webkitTimelineRecordingToMd(JSON.stringify(recording), {
      cwd: `/project/`,
    })

    expect(categoryTables(md)).toEqual([
      [
        { Category: `third-party`, '%': `66.7%`, Time: `20.0ms`, Samples: `1` },
        { Category: `ours`, '%': `33.3%`, Time: `10.0ms`, Samples: `1` },
      ],
    ])
  })

  test(`uses expressionLocation for line breakdown`, () => {
    // `main` calls `work`; samples hit different lines within `work`'s body
    const recording = makeWebKitRecording({
      sampleStackTraces: [
        {
          stackFrames: [
            makeFrame({
              name: `work`,
              url: `file:///project/src/index.ts`,
              line: 10,
              expressionLocation: { line: 12, column: 1 },
            }),
            makeFrame({ name: `main`, url: `file:///project/src/index.ts` }),
          ],
        },
        {
          stackFrames: [
            makeFrame({
              name: `work`,
              url: `file:///project/src/index.ts`,
              line: 10,
              expressionLocation: { line: 15, column: 1 },
            }),
            makeFrame({ name: `main`, url: `file:///project/src/index.ts` }),
          ],
        },
      ],
      sampleDurations: [0.01, 0.02],
    })

    const md = webkitTimelineRecordingToMd(JSON.stringify(recording), {
      cwd: `/project/`,
    })

    // Line 15 has more time (20ms), line 12 has less (10ms)
    expect(linesTables(md, `work`)).toEqual([
      [
        {
          '%': `66.7%`,
          Time: `20.0ms`,
          Samples: `1`,
          Location: `src/index.ts:15`,
        },
        {
          '%': `33.3%`,
          Time: `10.0ms`,
          Samples: `1`,
          Location: `src/index.ts:12`,
        },
      ],
    ])
  })
})

describe(`options`, () => {
  // Main calls work; 2 samples of work+main, 1 sample of main alone
  const baseRecording = makeWebKitRecording({
    sampleStackTraces: [
      {
        stackFrames: [
          makeFrame({
            name: `work`,
            url: `file:///project/src/index.ts`,
            line: 10,
          }),
          makeFrame({ name: `main`, url: `file:///project/src/index.ts` }),
        ],
      },
      {
        stackFrames: [
          makeFrame({
            name: `work`,
            url: `file:///project/src/index.ts`,
            line: 10,
          }),
          makeFrame({ name: `main`, url: `file:///project/src/index.ts` }),
        ],
      },
      {
        stackFrames: [
          makeFrame({ name: `main`, url: `file:///project/src/index.ts` }),
        ],
      },
    ],
    sampleDurations: [0.01, 0.02, 0.005],
  })

  test(`showEntry hides entries while preserving metrics`, () => {
    // `work` is excluded; `main`'s total still includes `work`'s time
    const md = webkitTimelineRecordingToMd(JSON.stringify(baseRecording), {
      cwd: `/project/`,
      showEntry: row => defaultShowEntry(row) && row.name !== `work`,
    })

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Function)),
    ).toEqual([expect.not.arrayContaining([`work`])])
    expect(callersTables(md, `work`)).toHaveLength(0)
  })

  test(`topN limits functions shown`, () => {
    const md = webkitTimelineRecordingToMd(JSON.stringify(baseRecording), {
      cwd: `/project/`,
      topN: 1,
    })

    expect(selfTimeTables(md).map(table => table.length)).toEqual([1])
    expect(totalTimeTables(md).map(table => table.length)).toEqual([1])
  })

  test(`cwd: null shows absolute paths`, () => {
    const md = webkitTimelineRecordingToMd(JSON.stringify(baseRecording), {
      cwd: null,
    })

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Location)),
    ).toEqual([[expect.stringMatching(/^\//u), expect.stringMatching(/^\//u)]])
  })

  test(`categorizeEntry groups entries by custom category`, () => {
    const md = webkitTimelineRecordingToMd(JSON.stringify(baseRecording), {
      cwd: `/project/`,
      categorizeEntry: entry => (entry.name === `main` ? `core` : `workers`),
    })

    expect(categoryTables(md)).toEqual([
      [
        { Category: `workers`, '%': `85.7%`, Time: `30.0ms`, Samples: `2` },
        { Category: `core`, '%': `14.3%`, Time: `5.0ms`, Samples: `1` },
      ],
    ])
  })
})
