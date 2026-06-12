import { describe, expect, test } from 'vitest'
import { defaultShowEntry, normalizeProfileToMdOptions } from '../../options.ts'
import {
  callersTables,
  categoryTables,
  linesTables,
  selfTimeTables,
  summaryLines,
  totalTimeTables,
} from '../../testing/markdown.ts'
import { convertToMd } from '../testing/convert.ts'
import { webkitTimelineRecordingConverter } from './index.ts'
import { makeWebKitFrame, makeWebKitRecording } from './testing.ts'

describe(`matches`, () => {
  test(`accepts valid recording`, () => {
    expect(
      webkitTimelineRecordingConverter.matches({
        version: 1,
        recording: { sampleStackTraces: [], sampleDurations: [] },
      }),
    ).toBe(true)
  })

  test(`rejects null`, () => {
    expect(webkitTimelineRecordingConverter.matches(null)).toBe(false)
  })

  test(`rejects non-objects`, () => {
    expect(webkitTimelineRecordingConverter.matches(42)).toBe(false)
  })

  test(`rejects wrong version`, () => {
    expect(
      webkitTimelineRecordingConverter.matches({
        version: 2,
        recording: { sampleStackTraces: [], sampleDurations: [] },
      }),
    ).toBe(false)
  })

  test(`rejects missing version`, () => {
    expect(
      webkitTimelineRecordingConverter.matches({
        recording: { sampleStackTraces: [], sampleDurations: [] },
      }),
    ).toBe(false)
  })

  test(`rejects null recording`, () => {
    expect(
      webkitTimelineRecordingConverter.matches({ version: 1, recording: null }),
    ).toBe(false)
  })

  test(`rejects missing sampleStackTraces`, () => {
    expect(
      webkitTimelineRecordingConverter.matches({
        version: 1,
        recording: { sampleDurations: [] },
      }),
    ).toBe(false)
  })
})

describe(`convert`, () => {
  test(`basic two-function call stack`, () => {
    // Main calls work; 2 samples of work+main, 1 sample of main alone
    const recording = makeWebKitRecording({
      sampleStackTraces: [
        {
          stackFrames: [
            makeWebKitFrame({
              name: `work`,
              url: `file:///project/src/index.ts`,
              line: 10,
            }),
            makeWebKitFrame({
              name: `main`,
              url: `file:///project/src/index.ts`,
            }),
          ],
        },
        {
          stackFrames: [
            makeWebKitFrame({
              name: `work`,
              url: `file:///project/src/index.ts`,
              line: 10,
            }),
            makeWebKitFrame({
              name: `main`,
              url: `file:///project/src/index.ts`,
            }),
          ],
        },
        {
          stackFrames: [
            makeWebKitFrame({
              name: `main`,
              url: `file:///project/src/index.ts`,
            }),
          ],
        },
      ],
      sampleDurations: [0.01, 0.02, 0.005],
    })

    const md = convertToMd(
      webkitTimelineRecordingConverter,
      recording,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

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
            makeWebKitFrame({
              name: `main`,
              url: `file:///project/src/index.ts`,
            }),
          ],
        },
        { stackFrames: [] },
      ],
      sampleDurations: [0.1, 0.05, 0.1],
    })

    const md = convertToMd(
      webkitTimelineRecordingConverter,
      recording,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    expect(summaryLines(md)).toEqual([
      expect.stringContaining(`50.0ms over 1 sample`),
    ])
  })

  test(`frame with empty URL renders as unknown`, () => {
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

    const md = convertToMd(
      webkitTimelineRecordingConverter,
      recording,
      normalizeProfileToMdOptions({
        showEntry: () => true,
      }),
    )

    expect(selfTimeTables(md)).toEqual([
      [expect.objectContaining({ Location: `<unknown>` })],
    ])
  })

  test(`recursive function deduplicates total time`, () => {
    // Factorial calls itself; 1 sample with 2-frame recursive stack, 1 alone
    const recording = makeWebKitRecording({
      sampleStackTraces: [
        {
          stackFrames: [
            makeWebKitFrame({
              name: `factorial`,
              url: `file:///project/src/index.ts`,
            }),
            makeWebKitFrame({
              name: `factorial`,
              url: `file:///project/src/index.ts`,
            }),
          ],
        },
        {
          stackFrames: [
            makeWebKitFrame({
              name: `factorial`,
              url: `file:///project/src/index.ts`,
            }),
          ],
        },
      ],
      sampleDurations: [0.005, 0.01],
    })

    const md = convertToMd(
      webkitTimelineRecordingConverter,
      recording,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

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
            makeWebKitFrame({
              name: `anon`,
              url: `https://example.com/app.js`,
              column: 244,
            }),
            makeWebKitFrame({
              name: `main`,
              url: `file:///project/src/index.ts`,
            }),
          ],
        },
        {
          stackFrames: [
            makeWebKitFrame({
              name: `thirdParty`,
              url: `file:///project/node_modules/lib/index.js`,
            }),
            makeWebKitFrame({
              name: `main`,
              url: `file:///project/src/index.ts`,
            }),
          ],
        },
      ],
      sampleDurations: [0.01, 0.02],
    })

    const md = convertToMd(
      webkitTimelineRecordingConverter,
      recording,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

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
            makeWebKitFrame({
              name: `work`,
              url: `file:///project/src/index.ts`,
              line: 10,
              expressionLocation: { line: 12, column: 1 },
            }),
            makeWebKitFrame({
              name: `main`,
              url: `file:///project/src/index.ts`,
            }),
          ],
        },
        {
          stackFrames: [
            makeWebKitFrame({
              name: `work`,
              url: `file:///project/src/index.ts`,
              line: 10,
              expressionLocation: { line: 15, column: 1 },
            }),
            makeWebKitFrame({
              name: `main`,
              url: `file:///project/src/index.ts`,
            }),
          ],
        },
      ],
      sampleDurations: [0.01, 0.02],
    })

    const md = convertToMd(
      webkitTimelineRecordingConverter,
      recording,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

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
          makeWebKitFrame({
            name: `work`,
            url: `file:///project/src/index.ts`,
            line: 10,
          }),
          makeWebKitFrame({
            name: `main`,
            url: `file:///project/src/index.ts`,
          }),
        ],
      },
      {
        stackFrames: [
          makeWebKitFrame({
            name: `work`,
            url: `file:///project/src/index.ts`,
            line: 10,
          }),
          makeWebKitFrame({
            name: `main`,
            url: `file:///project/src/index.ts`,
          }),
        ],
      },
      {
        stackFrames: [
          makeWebKitFrame({
            name: `main`,
            url: `file:///project/src/index.ts`,
          }),
        ],
      },
    ],
    sampleDurations: [0.01, 0.02, 0.005],
  })

  test(`showEntry hides entries while preserving metrics`, () => {
    // `work` is excluded; `main`'s total still includes `work`'s time
    const md = convertToMd(
      webkitTimelineRecordingConverter,
      structuredClone(baseRecording),
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
        showEntry: row => defaultShowEntry(row) && row.name !== `work`,
      }),
    )

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Function)),
    ).toEqual([expect.not.arrayContaining([`work`])])
    expect(callersTables(md, `work`)).toHaveLength(0)
  })

  test(`topN limits functions shown`, () => {
    const md = convertToMd(
      webkitTimelineRecordingConverter,
      structuredClone(baseRecording),
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
        topN: 1,
      }),
    )

    expect(selfTimeTables(md).map(table => table.length)).toEqual([1])
    expect(totalTimeTables(md).map(table => table.length)).toEqual([1])
  })

  test(`baseURL: null shows absolute paths`, () => {
    const md = convertToMd(
      webkitTimelineRecordingConverter,
      structuredClone(baseRecording),
      normalizeProfileToMdOptions({
        baseURL: null,
      }),
    )

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Location)),
    ).toEqual([[expect.stringMatching(/^\//u), expect.stringMatching(/^\//u)]])
  })

  test(`categorizeEntry groups entries by custom category`, () => {
    const md = convertToMd(
      webkitTimelineRecordingConverter,
      structuredClone(baseRecording),
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
        categorizeEntry: entry => (entry.name === `main` ? `core` : `workers`),
      }),
    )

    expect(categoryTables(md)).toEqual([
      [
        { Category: `workers`, '%': `85.7%`, Time: `30.0ms`, Samples: `2` },
        { Category: `core`, '%': `14.3%`, Time: `5.0ms`, Samples: `1` },
      ],
    ])
  })
})
