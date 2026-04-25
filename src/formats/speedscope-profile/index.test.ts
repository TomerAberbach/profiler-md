import { expect, test } from 'vitest'
import { parseJson } from '../../helpers/json.ts'
import {
  defaultIncludeSpeedscopeEntry,
  detectSpeedscopeProfile,
  speedscopeProfileToMd,
} from './index.ts'

const makeProfile = (
  profiles: object[],
  frames: object[],
  extra?: object,
): string =>
  JSON.stringify({
    $schema: `https://www.speedscope.app/file-format-schema.json`,
    profiles,
    shared: { frames },
    ...extra,
  })

const makeSampled = (
  samples: number[][],
  weights: number[],
  unit = `milliseconds`,
  name = `profile`,
): object => ({
  type: `sampled`,
  name,
  unit,
  startValue: 0,
  endValue: weights.reduce((weight1, weight2) => weight1 + weight2, 0),
  samples,
  weights,
})

const makeEvented = (
  events: object[],
  unit = `milliseconds`,
  name = `profile`,
): object => ({
  type: `evented`,
  name,
  unit,
  startValue: 0,
  endValue: 0,
  events,
})

test(`detectSpeedscope accepts valid speedscope file`, () => {
  const json = parseJson(
    makeProfile([makeSampled([[0]], [1])], [{ name: `main` }]),
  )
  expect(detectSpeedscopeProfile(json)).toBeDefined()
})

test(`detectSpeedscope rejects non-speedscope JSON`, () => {
  expect(detectSpeedscopeProfile({ nodes: [], timeDeltas: [] })).toBeUndefined()
  expect(detectSpeedscopeProfile(null)).toBeUndefined()
  expect(detectSpeedscopeProfile(42)).toBeUndefined()
  expect(
    detectSpeedscopeProfile({
      $schema: `https://other.app/schema.json`,
      profiles: [],
      shared: { frames: [] },
    }),
  ).toBeUndefined()
})

test(`defaultIncludeSpeedscopeEntry includes named frames`, () => {
  expect(defaultIncludeSpeedscopeEntry({ name: `main` })).toBe(true)
  expect(defaultIncludeSpeedscopeEntry({ name: `` })).toBe(false)
})

test(`speedscopeProfileToMd sampled profile — basic two-function stack`, () => {
  const profile = makeProfile(
    [makeSampled([[0, 1], [0, 1], [0]], [10, 20, 5])],
    [
      { name: `main`, file: `/project/src/index.ts`, line: 1 },
      { name: `work`, file: `/project/src/index.ts`, line: 10 },
    ],
  )
  expect(speedscopeProfileToMd(profile, { cwd: `/project/` }))
    .toMatchInlineSnapshot(`
      "# CPU profile

      Took 35.0ms over 3 samples (11666.7µs per sample).

      | Category |      % |   Time | Samples |
      | -------- | -----: | -----: | ------: |
      | ours     | 100.0% | 35.0ms |       3 |

      ## Hottest functions

      ### Self time

      Functions ranked by time spent directly in the function body, excluding callees.

      |     % |   Time | Samples | Function | Location        |
      | ----: | -----: | ------: | -------- | --------------- |
      | 85.7% | 30.0ms |       2 | \`work\`   | src/index.ts:10 |
      | 14.3% |  5.0ms |       1 | \`main\`   | src/index.ts:1  |

      #### Callers

      Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

      ##### \`work\` (src/index.ts:10)

      |      % |   Time | Samples | Caller | Location       |
      | -----: | -----: | ------: | ------ | -------------- |
      | 100.0% | 30.0ms |       2 | \`main\` | src/index.ts:1 |

      ### Total time

      Functions ranked by total time spent in the function and all its callees.

      |      % |   Time | Samples | Function | Location        |
      | -----: | -----: | ------: | -------- | --------------- |
      | 100.0% | 35.0ms |       3 | \`main\`   | src/index.ts:1  |
      |  85.7% | 30.0ms |       2 | \`work\`   | src/index.ts:10 |

      #### Callees

      Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

      ##### \`main\` (src/index.ts:1)

      |     % |   Time | Samples | Callee | Location        |
      | ----: | -----: | ------: | ------ | --------------- |
      | 85.7% | 30.0ms |       2 | \`work\` | src/index.ts:10 |

      ## Hottest call stacks

      Call stacks ranked by time spent in their top frame.

      |     % |   Time | Samples | Call stack                            |
      | ----: | -----: | ------: | ------------------------------------- |
      | 85.7% | 30.0ms |       2 | \`work\` (src/index.ts:10) ← \`main\` (1) |
      "
    `)
})

test(`speedscopeProfileToMd evented profile — durations computed from open/close events`, () => {
  // Main (0-15): calls work (5-10), then continues (10-15)
  const profile = makeProfile(
    [
      makeEvented([
        { type: `O`, at: 0, frame: 0 },
        { type: `O`, at: 5, frame: 1 },
        { type: `C`, at: 10, frame: 1 },
        { type: `C`, at: 15, frame: 0 },
      ]),
    ],
    [
      { name: `main`, file: `/project/src/index.ts`, line: 1 },
      { name: `work`, file: `/project/src/index.ts`, line: 10 },
    ],
  )
  const md = speedscopeProfileToMd(profile, { cwd: `/project/` })
  // Main: self=10ms, total=15ms; work: self=5ms, total=5ms
  expect(md).toMatchInlineSnapshot(`
    "# CPU profile

    Took 15.0ms over 3 samples (5000.0µs per sample).

    | Category |      % |   Time | Samples |
    | -------- | -----: | -----: | ------: |
    | ours     | 100.0% | 15.0ms |       3 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |     % |   Time | Samples | Function | Location        |
    | ----: | -----: | ------: | -------- | --------------- |
    | 66.7% | 10.0ms |       2 | \`main\`   | src/index.ts:1  |
    | 33.3% |  5.0ms |       1 | \`work\`   | src/index.ts:10 |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

    ##### \`work\` (src/index.ts:10)

    |      % |  Time | Samples | Caller | Location       |
    | -----: | ----: | ------: | ------ | -------------- |
    | 100.0% | 5.0ms |       1 | \`main\` | src/index.ts:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |   Time | Samples | Function | Location        |
    | -----: | -----: | ------: | -------- | --------------- |
    | 100.0% | 15.0ms |       3 | \`main\`   | src/index.ts:1  |
    |  33.3% |  5.0ms |       1 | \`work\`   | src/index.ts:10 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

    ##### \`main\` (src/index.ts:1)

    |     % |  Time | Samples | Callee | Location        |
    | ----: | ----: | ------: | ------ | --------------- |
    | 33.3% | 5.0ms |       1 | \`work\` | src/index.ts:10 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    |     % |  Time | Samples | Call stack                            |
    | ----: | ----: | ------: | ------------------------------------- |
    | 33.3% | 5.0ms |       1 | \`work\` (src/index.ts:10) ← \`main\` (1) |
    "
  `)
})

test(`speedscopeProfileToMd multi-profile file — both profiles appear separated by ---`, () => {
  const profile = makeProfile(
    [
      makeSampled([[0]], [100], `milliseconds`, `Profile A`),
      makeSampled([[1]], [200], `milliseconds`, `Profile B`),
    ],
    [
      { name: `funcA`, file: `/project/src/a.ts`, line: 1 },
      { name: `funcB`, file: `/project/src/b.ts`, line: 1 },
    ],
  )
  const md = speedscopeProfileToMd(profile, { cwd: `/project/` })
  expect(md).toContain(`---`)
  expect(md).toMatchInlineSnapshot(`
    "# CPU profile

    Took 100.0ms over 1 sample (100000.0µs per sample).

    | Category |      % |    Time | Samples |
    | -------- | -----: | ------: | ------: |
    | ours     | 100.0% | 100.0ms |       1 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |      % |    Time | Samples | Function | Location   |
    | -----: | ------: | ------: | -------- | ---------- |
    | 100.0% | 100.0ms |       1 | \`funcA\`  | src/a.ts:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |    Time | Samples | Function | Location   |
    | -----: | ------: | ------: | -------- | ---------- |
    | 100.0% | 100.0ms |       1 | \`funcA\`  | src/a.ts:1 |




    ---

    # CPU profile

    Took 200.0ms over 1 sample (200000.0µs per sample).

    | Category |      % |    Time | Samples |
    | -------- | -----: | ------: | ------: |
    | ours     | 100.0% | 200.0ms |       1 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |      % |    Time | Samples | Function | Location   |
    | -----: | ------: | ------: | -------- | ---------- |
    | 100.0% | 200.0ms |       1 | \`funcB\`  | src/b.ts:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |    Time | Samples | Function | Location   |
    | -----: | ------: | ------: | -------- | ---------- |
    | 100.0% | 200.0ms |       1 | \`funcB\`  | src/b.ts:1 |


    "
  `)
})

test(`speedscopeProfileToMd sampled profile — zero-weight samples are skipped`, () => {
  const profile = makeProfile(
    [makeSampled([[0], [0], [0]], [10, 0, 20])],
    [{ name: `main`, file: `/project/src/index.ts`, line: 1 }],
  )
  const md = speedscopeProfileToMd(profile, { cwd: `/project/` })
  // Total should be 30ms, not 30ms from 3 samples
  expect(md).toMatchInlineSnapshot(`
    "# CPU profile

    Took 30.0ms over 2 samples (15000.0µs per sample).

    | Category |      % |   Time | Samples |
    | -------- | -----: | -----: | ------: |
    | ours     | 100.0% | 30.0ms |       2 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |      % |   Time | Samples | Function | Location       |
    | -----: | -----: | ------: | -------- | -------------- |
    | 100.0% | 30.0ms |       2 | \`main\`   | src/index.ts:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |   Time | Samples | Function | Location       |
    | -----: | -----: | ------: | -------- | -------------- |
    | 100.0% | 30.0ms |       2 | \`main\`   | src/index.ts:1 |


    "
  `)
})

test(`speedscopeProfileToMd evented profile — recursive function`, () => {
  // Factorial calls itself: factorial(0-15) → factorial(5-10)
  const profile = makeProfile(
    [
      makeEvented([
        { type: `O`, at: 0, frame: 0 },
        { type: `O`, at: 5, frame: 0 },
        { type: `C`, at: 10, frame: 0 },
        { type: `C`, at: 15, frame: 0 },
      ]),
    ],
    [{ name: `factorial`, file: `/project/src/index.ts`, line: 1 }],
  )
  expect(speedscopeProfileToMd(profile, { cwd: `/project/` }))
    .toMatchInlineSnapshot(`
      "# CPU profile

      Took 15.0ms over 3 samples (5000.0µs per sample).

      | Category |      % |   Time | Samples |
      | -------- | -----: | -----: | ------: |
      | ours     | 100.0% | 15.0ms |       3 |

      ## Hottest functions

      ### Self time

      Functions ranked by time spent directly in the function body, excluding callees.

      |      % |   Time | Samples | Function    | Location       |
      | -----: | -----: | ------: | ----------- | -------------- |
      | 100.0% | 15.0ms |       3 | \`factorial\` | src/index.ts:1 |

      #### Callers

      Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

      ##### \`factorial\` (src/index.ts:1)

      |     % |  Time | Samples | Caller      | Location       |
      | ----: | ----: | ------: | ----------- | -------------- |
      | 33.3% | 5.0ms |       1 | \`factorial\` | src/index.ts:1 |

      ### Total time

      Functions ranked by total time spent in the function and all its callees.

      |      % |   Time | Samples | Function    | Location       |
      | -----: | -----: | ------: | ----------- | -------------- |
      | 100.0% | 15.0ms |       3 | \`factorial\` | src/index.ts:1 |

      #### Callees

      Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

      ##### \`factorial\` (src/index.ts:1)

      |     % |  Time | Samples | Callee      | Location       |
      | ----: | ----: | ------: | ----------- | -------------- |
      | 33.3% | 5.0ms |       1 | \`factorial\` | src/index.ts:1 |

      ## Hottest call stacks

      Call stacks ranked by time spent in their top frame.

      |     % |  Time | Samples | Call stack                                     |
      | ----: | ----: | ------: | ---------------------------------------------- |
      | 33.3% | 5.0ms |       1 | \`factorial\` (src/index.ts:1) ← \`factorial\` (1) |
      "
    `)
})

test(`speedscopeProfileToMd microseconds unit is formatted as time`, () => {
  const profile = makeProfile(
    [makeSampled([[0]], [1000], `microseconds`)],
    [{ name: `main`, file: `/project/src/index.ts`, line: 1 }],
  )
  const md = speedscopeProfileToMd(profile, { cwd: `/project/` })
  expect(md).toContain(`ms`)
})
