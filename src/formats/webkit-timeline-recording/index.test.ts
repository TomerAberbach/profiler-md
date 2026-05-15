import { expect, test } from 'vitest'
import {
  detectWebKitTimelineRecording,
  webkitTimelineRecordingToMd,
} from './index.ts'
import type { WebKitStackFrame, WebKitTimelineRecording } from './parse.ts'

const makeRecording = (
  sampleStackTraces: { stackFrames: WebKitStackFrame[] }[],
  sampleDurations: number[],
): string =>
  JSON.stringify({
    version: 1,
    recording: { sampleStackTraces, sampleDurations },
  } satisfies WebKitTimelineRecording)

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

test(`detectWebKitTimelineRecording accepts valid recording`, () => {
  const json = JSON.parse(
    makeRecording(
      [
        {
          stackFrames: [
            makeFrame({ name: `main`, url: `file:///project/src/index.ts` }),
          ],
        },
      ],
      [0.01],
    ),
  ) as unknown

  expect(detectWebKitTimelineRecording(json)).toBeDefined()
})

test(`detectWebKitTimelineRecording rejects null`, () => {
  expect(detectWebKitTimelineRecording(null)).toBeUndefined()
})

test(`detectWebKitTimelineRecording rejects non-objects`, () => {
  expect(detectWebKitTimelineRecording(42)).toBeUndefined()
})

test(`detectWebKitTimelineRecording rejects wrong version`, () => {
  expect(
    detectWebKitTimelineRecording({
      version: 2,
      recording: { sampleStackTraces: [], sampleDurations: [] },
    }),
  ).toBeUndefined()
})

test(`detectWebKitTimelineRecording rejects missing version`, () => {
  expect(
    detectWebKitTimelineRecording({
      recording: { sampleStackTraces: [], sampleDurations: [] },
    }),
  ).toBeUndefined()
})

test(`detectWebKitTimelineRecording rejects null recording`, () => {
  expect(
    detectWebKitTimelineRecording({ version: 1, recording: null }),
  ).toBeUndefined()
})

test(`detectWebKitTimelineRecording rejects missing sampleStackTraces`, () => {
  expect(
    detectWebKitTimelineRecording({
      version: 1,
      recording: { sampleDurations: [] },
    }),
  ).toBeUndefined()
})

test(`detectWebKitTimelineRecording rejects missing sampleDurations`, () => {
  expect(
    detectWebKitTimelineRecording({
      version: 1,
      recording: { sampleStackTraces: [] },
    }),
  ).toBeUndefined()
})

test(`webkitTimelineRecordingToMd basic two-function stack`, () => {
  // Main calls work; 2 samples of work+main, 1 sample of main alone
  const recording = makeRecording(
    [
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
    [0.01, 0.02, 0.005],
  )

  const markdown = webkitTimelineRecordingToMd(recording, { cwd: `/project/` })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU profile

    Took 35.0ms over 3 samples (11.7ms per sample).

    | Category |      % |   Time | Samples |
    | -------- | -----: | -----: | ------: |
    | ours     | 100.0% | 35.0ms |       3 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |     % |   Time | Samples | Function | Location          |
    | ----: | -----: | ------: | -------- | ----------------- |
    | 85.7% | 30.0ms |       2 | \`work\`   | src/index.ts:10:1 |
    | 14.3% |  5.0ms |       1 | \`main\`   | src/index.ts:1:1  |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

    ##### \`work\` (src/index.ts:10:1)

    |      % |   Time | Samples | Caller | Location         |
    | -----: | -----: | ------: | ------ | ---------------- |
    | 100.0% | 30.0ms |       2 | \`main\` | src/index.ts:1:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |   Time | Samples | Function | Location          |
    | -----: | -----: | ------: | -------- | ----------------- |
    | 100.0% | 35.0ms |       3 | \`main\`   | src/index.ts:1:1  |
    |  85.7% | 30.0ms |       2 | \`work\`   | src/index.ts:10:1 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

    ##### \`main\` (src/index.ts:1:1)

    |     % |   Time | Samples | Callee | Location          |
    | ----: | -----: | ------: | ------ | ----------------- |
    | 85.7% | 30.0ms |       2 | \`work\` | src/index.ts:10:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their leaf frame.

    |     % |   Time | Samples | Call stack                                |
    | ----: | -----: | ------: | ----------------------------------------- |
    | 85.7% | 30.0ms |       2 | \`work\` (src/index.ts:10:1) ← \`main\` (1:1) |
    "
  `)
})

test(`webkitTimelineRecordingToMd empty stack samples are skipped`, () => {
  // Only the non-empty sample (50ms) is counted, not the empty-stack ones
  const recording = makeRecording(
    [
      { stackFrames: [] },
      {
        stackFrames: [
          makeFrame({ name: `main`, url: `file:///project/src/index.ts` }),
        ],
      },
      { stackFrames: [] },
    ],
    [0.1, 0.05, 0.1],
  )

  const markdown = webkitTimelineRecordingToMd(recording, { cwd: `/project/` })

  expect(markdown).toContain(`50.0ms over 1 sample`)
})

test(`webkitTimelineRecordingToMd frame with empty URL renders as <native>`, () => {
  const recording = makeRecording(
    [
      {
        stackFrames: [
          { sourceID: `0`, name: `nativeFunc`, line: -1, column: -1, url: `` },
        ],
      },
    ],
    [0.01],
  )

  const markdown = webkitTimelineRecordingToMd(recording, {
    showEntry: () => true,
  })

  expect(markdown).toContain(`\`<native>\``)
})

test(`webkitTimelineRecordingToMd recursive function`, () => {
  // Factorial calls itself; 1 sample with 2-frame recursive stack, 1 alone
  const recording = makeRecording(
    [
      {
        stackFrames: [
          makeFrame({ name: `factorial`, url: `file:///project/src/index.ts` }),
          makeFrame({ name: `factorial`, url: `file:///project/src/index.ts` }),
        ],
      },
      {
        stackFrames: [
          makeFrame({ name: `factorial`, url: `file:///project/src/index.ts` }),
        ],
      },
    ],
    [0.005, 0.01],
  )

  const markdown = webkitTimelineRecordingToMd(recording, { cwd: `/project/` })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU profile

    Took 15.0ms over 2 samples (7.5ms per sample).

    | Category |      % |   Time | Samples |
    | -------- | -----: | -----: | ------: |
    | ours     | 100.0% | 15.0ms |       2 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |      % |   Time | Samples | Function    | Location         |
    | -----: | -----: | ------: | ----------- | ---------------- |
    | 100.0% | 15.0ms |       2 | \`factorial\` | src/index.ts:1:1 |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

    ##### \`factorial\` (src/index.ts:1:1)

    |     % |  Time | Samples | Caller      | Location         |
    | ----: | ----: | ------: | ----------- | ---------------- |
    | 33.3% | 5.0ms |       1 | \`factorial\` | src/index.ts:1:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |   Time | Samples | Function    | Location         |
    | -----: | -----: | ------: | ----------- | ---------------- |
    | 100.0% | 15.0ms |       2 | \`factorial\` | src/index.ts:1:1 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

    ##### \`factorial\` (src/index.ts:1:1)

    |     % |  Time | Samples | Callee      | Location         |
    | ----: | ----: | ------: | ----------- | ---------------- |
    | 33.3% | 5.0ms |       1 | \`factorial\` | src/index.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their leaf frame.

    |     % |  Time | Samples | Call stack                                         |
    | ----: | ----: | ------: | -------------------------------------------------- |
    | 33.3% | 5.0ms |       1 | \`factorial\` (src/index.ts:1:1) ← \`factorial\` (1:1) |
    "
  `)
})

test(`webkitTimelineRecordingToMd categorizes third-party and URL frames`, () => {
  // ThirdParty is from node_modules (third-party); anon is from an https URL
  const recording = makeRecording(
    [
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
    [0.01, 0.02],
  )

  const markdown = webkitTimelineRecordingToMd(recording, { cwd: `/project/` })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU profile

    Took 30.0ms over 2 samples (15.0ms per sample).

    | Category    |     % |   Time | Samples |
    | ----------- | ----: | -----: | ------: |
    | third-party | 66.7% | 20.0ms |       1 |
    | ours        | 33.3% | 10.0ms |       1 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |     % |   Time | Samples | Function     | Location                         |
    | ----: | -----: | ------: | ------------ | -------------------------------- |
    | 66.7% | 20.0ms |       1 | \`thirdParty\` | node_modules/lib/index.js:1:1    |
    | 33.3% | 10.0ms |       1 | \`anon\`       | https://example.com/app.js:1:244 |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

    ##### \`thirdParty\` (node_modules/lib/index.js:1:1)

    |      % |   Time | Samples | Caller | Location         |
    | -----: | -----: | ------: | ------ | ---------------- |
    | 100.0% | 20.0ms |       1 | \`main\` | src/index.ts:1:1 |

    ##### \`anon\` (https://example.com/app.js:1:244)

    |      % |   Time | Samples | Caller | Location         |
    | -----: | -----: | ------: | ------ | ---------------- |
    | 100.0% | 10.0ms |       1 | \`main\` | src/index.ts:1:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |   Time | Samples | Function     | Location                         |
    | -----: | -----: | ------: | ------------ | -------------------------------- |
    | 100.0% | 30.0ms |       2 | \`main\`       | src/index.ts:1:1                 |
    |  66.7% | 20.0ms |       1 | \`thirdParty\` | node_modules/lib/index.js:1:1    |
    |  33.3% | 10.0ms |       1 | \`anon\`       | https://example.com/app.js:1:244 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

    ##### \`main\` (src/index.ts:1:1)

    |     % |   Time | Samples | Callee       | Location                         |
    | ----: | -----: | ------: | ------------ | -------------------------------- |
    | 66.7% | 20.0ms |       1 | \`thirdParty\` | node_modules/lib/index.js:1:1    |
    | 33.3% | 10.0ms |       1 | \`anon\`       | https://example.com/app.js:1:244 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their leaf frame.

    Common call stack: \`main\` (src/index.ts:1:1)

    |     % |   Time | Samples | Call stack                                   |
    | ----: | -----: | ------: | -------------------------------------------- |
    | 66.7% | 20.0ms |       1 | \`thirdParty\` (node_modules/lib/index.js:1:1) |
    | 33.3% | 10.0ms |       1 | \`anon\` (https://example.com/app.js:1:244)    |
    "
  `)
})

test(`webkitTimelineRecordingToMd uses expressionLocation for line breakdown`, () => {
  // `main` calls `work`; samples hit different lines within `work`'s body
  const recording = makeRecording(
    [
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
    [0.01, 0.02],
  )

  const markdown = webkitTimelineRecordingToMd(recording, { cwd: `/project/` })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU profile

    Took 30.0ms over 2 samples (15.0ms per sample).

    | Category |      % |   Time | Samples |
    | -------- | -----: | -----: | ------: |
    | ours     | 100.0% | 30.0ms |       2 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |      % |   Time | Samples | Function | Location          |
    | -----: | -----: | ------: | -------- | ----------------- |
    | 100.0% | 30.0ms |       2 | \`work\`   | src/index.ts:10:1 |

    #### Lines

    Lines ranked by contribution to each function's self time.

    ##### \`work\` (src/index.ts:10:1)

    |     % |   Time | Samples | Location        |
    | ----: | -----: | ------: | --------------- |
    | 66.7% | 20.0ms |       1 | src/index.ts:15 |
    | 33.3% | 10.0ms |       1 | src/index.ts:12 |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

    ##### \`work\` (src/index.ts:10:1)

    |      % |   Time | Samples | Caller | Location         |
    | -----: | -----: | ------: | ------ | ---------------- |
    | 100.0% | 30.0ms |       2 | \`main\` | src/index.ts:1:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |   Time | Samples | Function | Location          |
    | -----: | -----: | ------: | -------- | ----------------- |
    | 100.0% | 30.0ms |       2 | \`work\`   | src/index.ts:10:1 |
    | 100.0% | 30.0ms |       2 | \`main\`   | src/index.ts:1:1  |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

    ##### \`main\` (src/index.ts:1:1)

    |      % |   Time | Samples | Callee | Location          |
    | -----: | -----: | ------: | ------ | ----------------- |
    | 100.0% | 30.0ms |       2 | \`work\` | src/index.ts:10:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their leaf frame.

    |      % |   Time | Samples | Call stack                                |
    | -----: | -----: | ------: | ----------------------------------------- |
    | 100.0% | 30.0ms |       2 | \`work\` (src/index.ts:10:1) ← \`main\` (1:1) |
    "
  `)
})
