import { expect, test } from 'vitest'
import { detectSpeedscopeProfile, speedscopeProfileToMd } from './index.ts'
import type {
  SpeedscopeEvent,
  SpeedscopeEventedProfile,
  SpeedscopeFrame,
  SpeedscopeProfile,
  SpeedscopeSampledProfile,
  SpeedscopeValueUnit,
} from './parse.ts'

const makeProfile = ({
  profiles,
  frames,
}: {
  profiles: (SpeedscopeSampledProfile | SpeedscopeEventedProfile)[]
  frames: SpeedscopeFrame[]
}): string =>
  JSON.stringify({
    $schema: `https://www.speedscope.app/file-format-schema.json`,
    profiles,
    shared: { frames },
  } satisfies SpeedscopeProfile)

const makeSampledProfile = ({
  name = `Profile`,
  unit = `milliseconds`,
  samples,
  weights,
}: {
  name?: string
  unit?: SpeedscopeValueUnit
  samples: number[][]
  weights: number[]
}): SpeedscopeSampledProfile => ({
  type: `sampled`,
  name,
  unit,
  samples,
  weights,
})

const makeEventedProfile = (
  events: SpeedscopeEvent[],
  {
    name = `Profile`,
    unit = `milliseconds`,
  }: {
    name?: string
    unit?: SpeedscopeValueUnit
  } = {},
): SpeedscopeEventedProfile => ({ type: `evented`, name, unit, events })

test(`detectSpeedscope accepts valid speedscope file`, () => {
  const json = JSON.parse(
    makeProfile({
      profiles: [makeSampledProfile({ samples: [[0]], weights: [1] })],
      frames: [{ name: `main` }],
    }),
  ) as unknown

  expect(detectSpeedscopeProfile(json)).toBeDefined()
})

test(`detectSpeedscope rejects null`, () => {
  expect(detectSpeedscopeProfile(null)).toBeUndefined()
})

test(`detectSpeedscope rejects non-objects`, () => {
  expect(detectSpeedscopeProfile(42)).toBeUndefined()
})

test(`detectSpeedscope rejects wrong $schema`, () => {
  expect(
    detectSpeedscopeProfile({
      $schema: `https://other.app/schema.json`,
      profiles: [],
      shared: { frames: [] },
    }),
  ).toBeUndefined()
})

test(`detectSpeedscope rejects missing $schema`, () => {
  expect(detectSpeedscopeProfile({ nodes: [], timeDeltas: [] })).toBeUndefined()
})

test(`detectSpeedscope rejects null shared`, () => {
  expect(
    detectSpeedscopeProfile({
      $schema: `https://www.speedscope.app/file-format-schema.json`,
      profiles: [],
      shared: null,
    }),
  ).toBeUndefined()
})

test(`speedscopeProfileToMd sampled profile with basic two-function stack`, () => {
  const profile = makeProfile({
    profiles: [
      makeSampledProfile({
        samples: [[0, 1], [0, 1], [0]],
        weights: [10, 20, 5],
      }),
    ],
    frames: [
      { name: `main`, file: `/project/src/index.ts`, line: 1 },
      { name: `work`, file: `/project/src/index.ts`, line: 10 },
    ],
  })

  const markdown = speedscopeProfileToMd(profile, { cwd: `/project/` })

  expect(markdown).toMatchInlineSnapshot(`
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

test(`speedscopeProfileToMd evented profile with durations computed from open/close events`, () => {
  // Main (0-15): calls work (5-10), then continues (10-15)
  const profile = makeProfile({
    profiles: [
      makeEventedProfile([
        { type: `O`, at: 0, frame: 0 },
        { type: `O`, at: 5, frame: 1 },
        { type: `C`, at: 10, frame: 1 },
        { type: `C`, at: 15, frame: 0 },
      ]),
    ],
    frames: [
      { name: `main`, file: `/project/src/index.ts`, line: 1 },
      { name: `work`, file: `/project/src/index.ts`, line: 10 },
    ],
  })

  const markdown = speedscopeProfileToMd(profile, { cwd: `/project/` })

  // Main: self=10ms, total=15ms; work: self=5ms, total=5ms
  expect(markdown).toMatchInlineSnapshot(`
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

test(`speedscopeProfileToMd multi-profile file`, () => {
  const profile = makeProfile({
    profiles: [
      makeSampledProfile({ samples: [[0]], weights: [100] }),
      makeSampledProfile({ samples: [[1]], weights: [200] }),
    ],
    frames: [
      { name: `funcA`, file: `/project/src/a.ts`, line: 1 },
      { name: `funcB`, file: `/project/src/b.ts`, line: 1 },
    ],
  })

  const markdown = speedscopeProfileToMd(profile, { cwd: `/project/` })

  expect(markdown).toMatchInlineSnapshot(`
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

test(`speedscopeProfileToMd sampled profile with zero-weight samples are skipped`, () => {
  const profile = makeProfile({
    profiles: [
      makeSampledProfile({
        samples: [[0], [0], [0]],
        weights: [10, 0, 20],
      }),
    ],
    frames: [{ name: `main`, file: `/project/src/index.ts`, line: 1 }],
  })

  const markdown = speedscopeProfileToMd(profile, { cwd: `/project/` })

  // Total should be 30ms, not 30ms from 3 samples
  expect(markdown).toMatchInlineSnapshot(`
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

test(`speedscopeProfileToMd evented profile with recursive function`, () => {
  // Factorial calls itself: factorial(0-15) → factorial(5-10)
  const profile = makeProfile({
    profiles: [
      makeEventedProfile([
        { type: `O`, at: 0, frame: 0 },
        { type: `O`, at: 5, frame: 0 },
        { type: `C`, at: 10, frame: 0 },
        { type: `C`, at: 15, frame: 0 },
      ]),
    ],
    frames: [{ name: `factorial`, file: `/project/src/index.ts`, line: 1 }],
  })

  const markdown = speedscopeProfileToMd(profile, { cwd: `/project/` })

  expect(markdown).toMatchInlineSnapshot(`
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
  const profile = makeProfile({
    profiles: [
      makeSampledProfile({
        unit: `microseconds`,
        samples: [[0]],
        weights: [1000],
      }),
    ],
    frames: [{ name: `main`, file: `/project/src/index.ts`, line: 1 }],
  })

  const markdown = speedscopeProfileToMd(profile, { cwd: `/project/` })

  expect(markdown).toContain(`ms`)
})

test(`speedscopeProfileToMd sampled profile with empty-stack samples are skipped`, () => {
  const profile = makeProfile({
    profiles: [
      makeSampledProfile({
        samples: [[], [0], []],
        weights: [100, 50, 100],
      }),
    ],
    frames: [{ name: `main`, file: `/project/src/index.ts`, line: 1 }],
  })

  const markdown = speedscopeProfileToMd(profile, { cwd: `/project/` })

  // Only the non-empty sample (50ms) is counted, not the empty-stack ones (100ms + 100ms)
  expect(markdown).toContain(`50.0ms over 1 sample`)
})

test(`speedscopeProfileToMd with frame without file location renders as <native>`, () => {
  const profile = makeProfile({
    profiles: [makeSampledProfile({ samples: [[0]], weights: [10] })],
    frames: [{ name: `nativeFunc` }],
  })

  const markdown = speedscopeProfileToMd(profile)

  expect(markdown).toContain(`\`<native>\``)
})

test(`speedscopeProfileToMd bytes unit produces heap profile with size formatting`, () => {
  const profile = makeProfile({
    profiles: [
      makeSampledProfile({
        unit: `bytes`,
        samples: [[0, 1], [0]],
        weights: [1024, 512],
      }),
    ],
    frames: [
      { name: `allocMain`, file: `/project/src/index.ts`, line: 1 },
      { name: `allocWork`, file: `/project/src/index.ts`, line: 10 },
    ],
  })

  const markdown = speedscopeProfileToMd(profile, { cwd: `/project/` })

  expect(markdown).toContain(`# Heap profile`)
  expect(markdown).toContain(`Allocated`)
  expect(markdown).toContain(`kB`)
})

test(`speedscopeProfileToMd none unit falls back to custom metric`, () => {
  const profile = makeProfile({
    profiles: [
      makeSampledProfile({ unit: `none`, samples: [[0]], weights: [42] }),
    ],
    frames: [{ name: `main`, file: `/project/src/index.ts`, line: 1 }],
  })

  const markdown = speedscopeProfileToMd(profile, { cwd: `/project/` })

  expect(markdown).toContain(`# Count profile`)
  expect(markdown).toContain(`Recorded`)
  expect(markdown).toContain(`42 counts`)
})
