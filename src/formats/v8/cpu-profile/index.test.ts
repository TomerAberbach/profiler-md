import { test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { defaultIncludeEntry } from '../../../options.ts'
import { diffMd } from '../../../testing/fixtures.ts'
import { v8CpuProfileToMd } from './index.ts'

const makeProfile = (
  nodes: object[],
  endTime: number,
  samples: number[],
  timeDeltas: number[],
) => JSON.stringify({ nodes, startTime: 0, endTime, samples, timeDeltas })

const root = (children: number[]) => ({
  id: 1,
  hitCount: 0,
  callFrame: {
    functionName: `(root)`,
    scriptId: 0,
    url: ``,
    lineNumber: -1,
    columnNumber: -1,
  },
  children,
})

test(`v8CpuProfileToMd merges nodes with the same identity`, () => {
  // `funcB` is called from both `funcA` and `funcC`. With identical call frames,
  // they should be merged into one row with combined times.
  const profile = makeProfile(
    [
      root([2, 3]),
      {
        id: 2,
        hitCount: 0,
        callFrame: {
          functionName: `funcA`,
          scriptId: 1,
          url: `file:///project/src/a.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        children: [4],
      },
      {
        id: 3,
        hitCount: 0,
        callFrame: {
          functionName: `funcC`,
          scriptId: 1,
          url: `file:///project/src/c.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        children: [5],
      },
      {
        id: 4,
        hitCount: 2,
        callFrame: {
          functionName: `funcB`,
          scriptId: 1,
          url: `file:///project/src/b.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
      },
      {
        id: 5,
        hitCount: 1,
        callFrame: {
          functionName: `funcB`,
          scriptId: 1,
          url: `file:///project/src/b.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
      },
    ],
    300,
    [4, 4, 5],
    [100, 100, 100],
  )

  const markdown = v8CpuProfileToMd(profile, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU profile

    Took 0.3ms over 3 samples (100.0µs per sample).

    | Category |      % |  Time | Samples |
    | -------- | -----: | ----: | ------: |
    | ours     | 100.0% | 0.3ms |       3 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |      % |  Time | Samples | Function | Location     |
    | -----: | ----: | ------: | -------- | ------------ |
    | 100.0% | 0.3ms |       3 | \`funcB\`  | src/b.ts:1:1 |
    |   0.0% |   0ms |       0 | \`funcA\`  | src/a.ts:1:1 |
    |   0.0% |   0ms |       0 | \`funcC\`  | src/c.ts:1:1 |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

    ##### \`funcB\` (src/b.ts:1:1)

    |     % |  Time | Samples | Caller  | Location     |
    | ----: | ----: | ------: | ------- | ------------ |
    | 66.7% | 0.2ms |       2 | \`funcA\` | src/a.ts:1:1 |
    | 33.3% | 0.1ms |       1 | \`funcC\` | src/c.ts:1:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |  Time | Samples | Function | Location     |
    | -----: | ----: | ------: | -------- | ------------ |
    | 100.0% | 0.3ms |       3 | \`funcB\`  | src/b.ts:1:1 |
    |  66.7% | 0.2ms |       2 | \`funcA\`  | src/a.ts:1:1 |
    |  33.3% | 0.1ms |       1 | \`funcC\`  | src/c.ts:1:1 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

    ##### \`funcA\` (src/a.ts:1:1)

    |      % |  Time | Samples | Callee  | Location     |
    | -----: | ----: | ------: | ------- | ------------ |
    | 100.0% | 0.2ms |       2 | \`funcB\` | src/b.ts:1:1 |

    ##### \`funcC\` (src/c.ts:1:1)

    |      % |  Time | Samples | Callee  | Location     |
    | -----: | ----: | ------: | ------- | ------------ |
    | 100.0% | 0.1ms |       1 | \`funcB\` | src/b.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    |     % |  Time | Samples | Call stack                                      |
    | ----: | ----: | ------: | ----------------------------------------------- |
    | 66.7% | 0.2ms |       2 | \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    | 33.3% | 0.1ms |       1 | \`funcB\` (src/b.ts:1:1) ← \`funcC\` (src/c.ts:1:1) |
    "
  `)
})

test(`v8CpuProfileToMd merges positionTicks across nodes with the same identity`, () => {
  // Node 4 has ticks on line 5 (1 tick), node 5 has ticks on line 8 (2 ticks).
  // After merging, hottest line should be 8.
  const profile = makeProfile(
    [
      root([2, 3]),
      {
        id: 2,
        hitCount: 0,
        callFrame: {
          functionName: `funcA`,
          scriptId: 1,
          url: `file:///project/src/a.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        children: [4],
      },
      {
        id: 3,
        hitCount: 0,
        callFrame: {
          functionName: `funcC`,
          scriptId: 1,
          url: `file:///project/src/c.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        children: [5],
      },
      {
        id: 4,
        hitCount: 2,
        callFrame: {
          functionName: `funcB`,
          scriptId: 1,
          url: `file:///project/src/b.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        positionTicks: [{ line: 5, ticks: 1 }],
      },
      {
        id: 5,
        hitCount: 1,
        callFrame: {
          functionName: `funcB`,
          scriptId: 1,
          url: `file:///project/src/b.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        positionTicks: [{ line: 8, ticks: 2 }],
      },
    ],
    300,
    [4, 4, 5],
    [100, 100, 100],
  )

  const markdown = v8CpuProfileToMd(profile, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU profile

    Took 0.3ms over 3 samples (100.0µs per sample).

    | Category |      % |  Time | Samples |
    | -------- | -----: | ----: | ------: |
    | ours     | 100.0% | 0.3ms |       3 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |      % |  Time | Samples | Function | Location     |
    | -----: | ----: | ------: | -------- | ------------ |
    | 100.0% | 0.3ms |       3 | \`funcB\`  | src/b.ts:1:1 |
    |   0.0% |   0ms |       0 | \`funcA\`  | src/a.ts:1:1 |
    |   0.0% |   0ms |       0 | \`funcC\`  | src/c.ts:1:1 |

    #### Lines

    Lines ranked by contribution to each function's self time.

    ##### \`funcB\` (src/b.ts:1:1)

    |     % |  Time | Samples | Location   |
    | ----: | ----: | ------: | ---------- |
    | 66.7% | 0.2ms |       2 | src/b.ts:8 |
    | 33.3% | 0.1ms |       1 | src/b.ts:5 |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

    ##### \`funcB\` (src/b.ts:1:1)

    |     % |  Time | Samples | Caller  | Location     |
    | ----: | ----: | ------: | ------- | ------------ |
    | 66.7% | 0.2ms |       2 | \`funcA\` | src/a.ts:1:1 |
    | 33.3% | 0.1ms |       1 | \`funcC\` | src/c.ts:1:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |  Time | Samples | Function | Location     |
    | -----: | ----: | ------: | -------- | ------------ |
    | 100.0% | 0.3ms |       3 | \`funcB\`  | src/b.ts:1:1 |
    |  66.7% | 0.2ms |       2 | \`funcA\`  | src/a.ts:1:1 |
    |  33.3% | 0.1ms |       1 | \`funcC\`  | src/c.ts:1:1 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

    ##### \`funcA\` (src/a.ts:1:1)

    |      % |  Time | Samples | Callee  | Location     |
    | -----: | ----: | ------: | ------- | ------------ |
    | 100.0% | 0.2ms |       2 | \`funcB\` | src/b.ts:1:1 |

    ##### \`funcC\` (src/c.ts:1:1)

    |      % |  Time | Samples | Callee  | Location     |
    | -----: | ----: | ------: | ------- | ------------ |
    | 100.0% | 0.1ms |       1 | \`funcB\` | src/b.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    |     % |  Time | Samples | Call stack                                      |
    | ----: | ----: | ------: | ----------------------------------------------- |
    | 66.7% | 0.2ms |       2 | \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    | 33.3% | 0.1ms |       1 | \`funcB\` (src/b.ts:1:1) ← \`funcC\` (src/c.ts:1:1) |
    "
  `)
})

test(`v8CpuProfileToMd deduplicates total time for recursive functions`, () => {
  // `funcA` calls itself recursively (two nodes, same identity). Total time
  // should be counted once per sample, not twice.
  const profile = makeProfile(
    [
      root([2]),
      {
        id: 2,
        hitCount: 0,
        callFrame: {
          functionName: `funcA`,
          scriptId: 1,
          url: `file:///project/src/a.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        children: [3],
      },
      {
        id: 3,
        hitCount: 1,
        callFrame: {
          functionName: `funcA`,
          scriptId: 1,
          url: `file:///project/src/a.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
      },
    ],
    100,
    [3],
    [100],
  )

  const markdown = v8CpuProfileToMd(profile, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU profile

    Took 0.1ms over 1 sample (100.0µs per sample).

    | Category |      % |  Time | Samples |
    | -------- | -----: | ----: | ------: |
    | ours     | 100.0% | 0.1ms |       1 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |      % |  Time | Samples | Function | Location     |
    | -----: | ----: | ------: | -------- | ------------ |
    | 100.0% | 0.1ms |       1 | \`funcA\`  | src/a.ts:1:1 |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

    ##### \`funcA\` (src/a.ts:1:1)

    |      % |  Time | Samples | Caller  | Location     |
    | -----: | ----: | ------: | ------- | ------------ |
    | 100.0% | 0.1ms |       1 | \`funcA\` | src/a.ts:1:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |  Time | Samples | Function | Location     |
    | -----: | ----: | ------: | -------- | ------------ |
    | 100.0% | 0.1ms |       1 | \`funcA\`  | src/a.ts:1:1 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

    ##### \`funcA\` (src/a.ts:1:1)

    |      % |  Time | Samples | Callee  | Location     |
    | -----: | ----: | ------: | ------- | ------------ |
    | 100.0% | 0.1ms |       1 | \`funcA\` | src/a.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    |      % |  Time | Samples | Call stack                             |
    | -----: | ----: | ------: | -------------------------------------- |
    | 100.0% | 0.1ms |       1 | \`funcA\` (src/a.ts:1:1) ← \`funcA\` (1:1) |
    "
  `)
})

test(`v8CpuProfileToMd sums positionTicks on the same line across merged nodes`, () => {
  // Node 4 has ticks on lines 8 (1) and 5 (1). Node 5 has ticks on line 5 (1).
  // Line 5's ticks must be summed (1+1=2), making line 5 the hottest. Without
  // summing, line 8 and line 5 would tie on node 4 alone.
  const profile = makeProfile(
    [
      root([2, 3]),
      {
        id: 2,
        hitCount: 0,
        callFrame: {
          functionName: `funcA`,
          scriptId: 1,
          url: `file:///project/src/a.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        children: [4],
      },
      {
        id: 3,
        hitCount: 0,
        callFrame: {
          functionName: `funcC`,
          scriptId: 1,
          url: `file:///project/src/c.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        children: [5],
      },
      {
        id: 4,
        hitCount: 2,
        callFrame: {
          functionName: `funcB`,
          scriptId: 1,
          url: `file:///project/src/b.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        positionTicks: [
          { line: 8, ticks: 1 },
          { line: 5, ticks: 1 },
        ],
      },
      {
        id: 5,
        hitCount: 1,
        callFrame: {
          functionName: `funcB`,
          scriptId: 1,
          url: `file:///project/src/b.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        positionTicks: [{ line: 5, ticks: 1 }],
      },
    ],
    300,
    [4, 4, 5],
    [100, 100, 100],
  )

  const markdown = v8CpuProfileToMd(profile, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU profile

    Took 0.3ms over 3 samples (100.0µs per sample).

    | Category |      % |  Time | Samples |
    | -------- | -----: | ----: | ------: |
    | ours     | 100.0% | 0.3ms |       3 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |      % |  Time | Samples | Function | Location     |
    | -----: | ----: | ------: | -------- | ------------ |
    | 100.0% | 0.3ms |       3 | \`funcB\`  | src/b.ts:1:1 |
    |   0.0% |   0ms |       0 | \`funcA\`  | src/a.ts:1:1 |
    |   0.0% |   0ms |       0 | \`funcC\`  | src/c.ts:1:1 |

    #### Lines

    Lines ranked by contribution to each function's self time.

    ##### \`funcB\` (src/b.ts:1:1)

    |     % |  Time | Samples | Location   |
    | ----: | ----: | ------: | ---------- |
    | 66.7% | 0.2ms |       2 | src/b.ts:5 |
    | 33.3% | 0.1ms |       1 | src/b.ts:8 |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

    ##### \`funcB\` (src/b.ts:1:1)

    |     % |  Time | Samples | Caller  | Location     |
    | ----: | ----: | ------: | ------- | ------------ |
    | 66.7% | 0.2ms |       2 | \`funcA\` | src/a.ts:1:1 |
    | 33.3% | 0.1ms |       1 | \`funcC\` | src/c.ts:1:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |  Time | Samples | Function | Location     |
    | -----: | ----: | ------: | -------- | ------------ |
    | 100.0% | 0.3ms |       3 | \`funcB\`  | src/b.ts:1:1 |
    |  66.7% | 0.2ms |       2 | \`funcA\`  | src/a.ts:1:1 |
    |  33.3% | 0.1ms |       1 | \`funcC\`  | src/c.ts:1:1 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

    ##### \`funcA\` (src/a.ts:1:1)

    |      % |  Time | Samples | Callee  | Location     |
    | -----: | ----: | ------: | ------- | ------------ |
    | 100.0% | 0.2ms |       2 | \`funcB\` | src/b.ts:1:1 |

    ##### \`funcC\` (src/c.ts:1:1)

    |      % |  Time | Samples | Callee  | Location     |
    | -----: | ----: | ------: | ------- | ------------ |
    | 100.0% | 0.1ms |       1 | \`funcB\` | src/b.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    |     % |  Time | Samples | Call stack                                      |
    | ----: | ----: | ------: | ----------------------------------------------- |
    | 66.7% | 0.2ms |       2 | \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    | 33.3% | 0.1ms |       1 | \`funcB\` (src/b.ts:1:1) ← \`funcC\` (src/c.ts:1:1) |
    "
  `)
})

test(`v8CpuProfileToMd handles anonymous functions`, () => {
  // Two anonymous functions at different lines. They should stay separate nodes
  // and both be labeled `(anonymous)` in the output.
  const profile = makeProfile(
    [
      root([2]),
      {
        id: 2,
        hitCount: 0,
        callFrame: {
          functionName: ``,
          scriptId: 1,
          url: `file:///project/src/a.ts`,
          lineNumber: 10,
          columnNumber: 0,
        },
        children: [3],
      },
      {
        id: 3,
        hitCount: 0,
        callFrame: {
          functionName: ``,
          scriptId: 1,
          url: `file:///project/src/a.ts`,
          lineNumber: 20,
          columnNumber: 0,
        },
        children: [4],
      },
      {
        id: 4,
        hitCount: 1,
        callFrame: {
          functionName: `allocate`,
          scriptId: 1,
          url: `file:///project/src/a.ts`,
          lineNumber: 30,
          columnNumber: 0,
        },
      },
    ],
    100,
    [4],
    [100],
  )

  const markdown = v8CpuProfileToMd(profile, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU profile

    Took 0.1ms over 1 sample (100.0µs per sample).

    | Category |      % |  Time | Samples |
    | -------- | -----: | ----: | ------: |
    | ours     | 100.0% | 0.1ms |       1 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |      % |  Time | Samples | Function      | Location      |
    | -----: | ----: | ------: | ------------- | ------------- |
    | 100.0% | 0.1ms |       1 | \`allocate\`    | src/a.ts:31:1 |
    |   0.0% |   0ms |       0 | \`(anonymous)\` | src/a.ts:21:1 |
    |   0.0% |   0ms |       0 | \`(anonymous)\` | src/a.ts:11:1 |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

    ##### \`allocate\` (src/a.ts:31:1)

    |      % |  Time | Samples | Caller        | Location      |
    | -----: | ----: | ------: | ------------- | ------------- |
    | 100.0% | 0.1ms |       1 | \`(anonymous)\` | src/a.ts:21:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |  Time | Samples | Function      | Location      |
    | -----: | ----: | ------: | ------------- | ------------- |
    | 100.0% | 0.1ms |       1 | \`allocate\`    | src/a.ts:31:1 |
    | 100.0% | 0.1ms |       1 | \`(anonymous)\` | src/a.ts:21:1 |
    | 100.0% | 0.1ms |       1 | \`(anonymous)\` | src/a.ts:11:1 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

    ##### \`(anonymous)\` (src/a.ts:21:1)

    |      % |  Time | Samples | Callee     | Location      |
    | -----: | ----: | ------: | ---------- | ------------- |
    | 100.0% | 0.1ms |       1 | \`allocate\` | src/a.ts:31:1 |

    ##### \`(anonymous)\` (src/a.ts:11:1)

    |      % |  Time | Samples | Callee        | Location      |
    | -----: | ----: | ------: | ------------- | ------------- |
    | 100.0% | 0.1ms |       1 | \`(anonymous)\` | src/a.ts:21:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    |      % |  Time | Samples | Call stack                                                               |
    | -----: | ----: | ------: | ------------------------------------------------------------------------ |
    | 100.0% | 0.1ms |       1 | \`allocate\` (src/a.ts:31:1) ← \`(anonymous)\` (21:1) ← \`(anonymous)\` (11:1) |
    "
  `)
})

test(`v8CpuProfileToMd categorizes own, third-party, and native code`, () => {
  const profile = makeProfile(
    [
      root([2]),
      {
        id: 2,
        hitCount: 1,
        callFrame: {
          functionName: `ownFunc`,
          scriptId: 1,
          url: `file:///project/src/index.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        children: [3],
      },
      {
        id: 3,
        hitCount: 1,
        callFrame: {
          functionName: `thirdParty`,
          scriptId: 1,
          url: `file:///project/node_modules/lib/index.js`,
          lineNumber: 0,
          columnNumber: 0,
        },
        children: [4],
      },
      {
        id: 4,
        hitCount: 1,
        callFrame: {
          functionName: `allocate`,
          scriptId: 1,
          url: `file:///project/src/util.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
      },
    ],
    1750,
    [2, 3, 4],
    [1000, 500, 250],
  )

  const markdown = v8CpuProfileToMd(profile, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU profile

    Took 1.8ms over 3 samples (583.3µs per sample).

    | Category    |     % |  Time | Samples |
    | ----------- | ----: | ----: | ------: |
    | ours        | 71.4% | 1.3ms |       2 |
    | third-party | 28.6% | 0.5ms |       1 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |     % |  Time | Samples | Function     | Location                      |
    | ----: | ----: | ------: | ------------ | ----------------------------- |
    | 57.1% | 1.0ms |       1 | \`ownFunc\`    | src/index.ts:1:1              |
    | 28.6% | 0.5ms |       1 | \`thirdParty\` | node_modules/lib/index.js:1:1 |
    | 14.3% | 0.3ms |       1 | \`allocate\`   | src/util.ts:1:1               |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

    ##### \`thirdParty\` (node_modules/lib/index.js:1:1)

    |      % |  Time | Samples | Caller    | Location         |
    | -----: | ----: | ------: | --------- | ---------------- |
    | 100.0% | 0.5ms |       1 | \`ownFunc\` | src/index.ts:1:1 |

    ##### \`allocate\` (src/util.ts:1:1)

    |      % |  Time | Samples | Caller       | Location                      |
    | -----: | ----: | ------: | ------------ | ----------------------------- |
    | 100.0% | 0.3ms |       1 | \`thirdParty\` | node_modules/lib/index.js:1:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |  Time | Samples | Function     | Location                      |
    | -----: | ----: | ------: | ------------ | ----------------------------- |
    | 100.0% | 1.8ms |       3 | \`ownFunc\`    | src/index.ts:1:1              |
    |  42.9% | 0.8ms |       2 | \`thirdParty\` | node_modules/lib/index.js:1:1 |
    |  14.3% | 0.3ms |       1 | \`allocate\`   | src/util.ts:1:1               |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

    ##### \`ownFunc\` (src/index.ts:1:1)

    |     % |  Time | Samples | Callee       | Location                      |
    | ----: | ----: | ------: | ------------ | ----------------------------- |
    | 42.9% | 0.8ms |       2 | \`thirdParty\` | node_modules/lib/index.js:1:1 |

    ##### \`thirdParty\` (node_modules/lib/index.js:1:1)

    |     % |  Time | Samples | Callee     | Location        |
    | ----: | ----: | ------: | ---------- | --------------- |
    | 33.3% | 0.3ms |       1 | \`allocate\` | src/util.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    Common call stack: \`ownFunc\` (src/index.ts:1:1)

    |     % |  Time | Samples | Call stack                                                                  |
    | ----: | ----: | ------: | --------------------------------------------------------------------------- |
    | 28.6% | 0.5ms |       1 | \`thirdParty\` (node_modules/lib/index.js:1:1)                                |
    | 14.3% | 0.3ms |       1 | \`allocate\` (src/util.ts:1:1) ← \`thirdParty\` (node_modules/lib/index.js:1:1) |
    "
  `)
})

// Shared profile for all diffing tests:
//   root -> funcA (1 sample) -> funcB -> funcC (2 samples)
//   root -> readFileSync (node:fs) -> internalLoader (node:internal/, 1 sample)
const baseProfile = makeProfile(
  [
    root([2, 5]),
    {
      id: 2,
      hitCount: 1,
      callFrame: {
        functionName: `funcA`,
        scriptId: 1,
        url: `file:///project/src/a.ts`,
        lineNumber: 0,
        columnNumber: 0,
      },
      children: [3],
    },
    {
      id: 3,
      hitCount: 0,
      callFrame: {
        functionName: `funcB`,
        scriptId: 1,
        url: `file:///project/src/b.ts`,
        lineNumber: 0,
        columnNumber: 0,
      },
      children: [4],
    },
    {
      id: 4,
      hitCount: 2,
      callFrame: {
        functionName: `funcC`,
        scriptId: 1,
        url: `file:///project/src/c.ts`,
        lineNumber: 0,
        columnNumber: 0,
      },
    },
    {
      id: 5,
      hitCount: 0,
      callFrame: {
        functionName: `readFileSync`,
        scriptId: 0,
        url: `node:fs`,
        lineNumber: 0,
        columnNumber: 0,
      },
      children: [6],
    },
    {
      id: 6,
      hitCount: 1,
      callFrame: {
        functionName: `internalLoader`,
        scriptId: 0,
        url: `node:internal/modules/esm/loader`,
        lineNumber: 0,
        columnNumber: 0,
      },
    },
  ],
  400,
  [2, 4, 4, 6],
  [100, 100, 100, 100],
)
const baseMd = v8CpuProfileToMd(baseProfile, { cwd: `/project` })

test(`v8CpuProfileToMd excludes frames from display when includeCallFrame returns false`, () => {
  // `funcB` is excluded via `includeCallFrame`. Its hit count is zero, but it
  // is in `funcC`'s call stack. `funcA`'s total still includes `funcC`'s time
  // because metrics are not affected by `includeCallFrame`. `funcC`'s callers
  // section is omitted because its only direct caller (`funcB`) is excluded.
  // The call stack shows `funcC <- funcA` with `funcB` removed.
  const markdown = v8CpuProfileToMd(baseProfile, {
    cwd: `/project`,
    includeEntry: row => defaultIncludeEntry(row) && row.name !== `funcB`,
  })

  expect(diffMd(baseMd, markdown)).toMatchInlineSnapshot(`
    "--- base
    +++ modified
    @@ -20,1 +19,0 @@
    -|  0.0% |   0ms |       0 | \`funcB\`        | src/b.ts:1:1 |
    @@ -23,10 +21,0 @@
    -#### Callers
    -
    -Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.
    -
    -##### \`funcC\` (src/c.ts:1:1)
    -
    -|      % |  Time | Samples | Caller  | Location     |
    -| -----: | ----: | ------: | ------- | ------------ |
    -| 100.0% | 0.2ms |       2 | \`funcB\` | src/b.ts:1:1 |
    -
    @@ -41,1 +29,0 @@
    -| 50.0% | 0.2ms |       2 | \`funcB\`        | src/b.ts:1:1 |
    @@ -44,16 +31,0 @@
    -#### Callees
    -
    -Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.
    -
    -##### \`funcA\` (src/a.ts:1:1)
    -
    -|     % |  Time | Samples | Callee  | Location     |
    -| ----: | ----: | ------: | ------- | ------------ |
    -| 66.7% | 0.2ms |       2 | \`funcB\` | src/b.ts:1:1 |
    -
    -##### \`funcB\` (src/b.ts:1:1)
    -
    -|      % |  Time | Samples | Callee  | Location     |
    -| -----: | ----: | ------: | ------- | ------------ |
    -| 100.0% | 0.2ms |       2 | \`funcC\` | src/c.ts:1:1 |
    -
    @@ -64,3 +36,3 @@
    -|     % |  Time | Samples | Call stack                                                               |
    -| ----: | ----: | ------: | ------------------------------------------------------------------------ |
    -| 50.0% | 0.2ms |       2 | \`funcC\` (src/c.ts:1:1) ← \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    +|     % |  Time | Samples | Call stack                                      |
    +| ----: | ----: | ------: | ----------------------------------------------- |
    +| 50.0% | 0.2ms |       2 | \`funcC\` (src/c.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    "
  `)
})

test(`v8CpuProfileToMd filters node:internal/ frames by default`, () => {
  // `node:internal/` frames are excluded from display by default.
  // Their time still counts toward the category summary (as `native`).
  // The `node:fs` frame (non-internal Node built-in) is NOT filtered.
  // Diff is vs. a baseline that shows all frames (includeCallFrame: () => true).
  const allFrames = v8CpuProfileToMd(baseProfile, {
    cwd: `/project`,
    includeEntry: () => true,
  })

  expect(diffMd(allFrames, baseMd)).toMatchInlineSnapshot(`
    "--- base
    +++ modified
    @@ -16,8 +16,6 @@
    -|     % |  Time | Samples | Function         | Location                             |
    -| ----: | ----: | ------: | ---------------- | ------------------------------------ |
    -| 50.0% | 0.2ms |       2 | \`funcC\`          | src/c.ts:1:1                         |
    -| 25.0% | 0.1ms |       1 | \`funcA\`          | src/a.ts:1:1                         |
    -| 25.0% | 0.1ms |       1 | \`internalLoader\` | node:internal/modules/esm/loader:1:1 |
    -|  0.0% |   0ms |       0 | \`(root)\`         | \`<native>\`                           |
    -|  0.0% |   0ms |       0 | \`funcB\`          | src/b.ts:1:1                         |
    -|  0.0% |   0ms |       0 | \`readFileSync\`   | node:fs:1:1                          |
    +|     % |  Time | Samples | Function       | Location     |
    +| ----: | ----: | ------: | -------------- | ------------ |
    +| 50.0% | 0.2ms |       2 | \`funcC\`        | src/c.ts:1:1 |
    +| 25.0% | 0.1ms |       1 | \`funcA\`        | src/a.ts:1:1 |
    +|  0.0% |   0ms |       0 | \`funcB\`        | src/b.ts:1:1 |
    +|  0.0% |   0ms |       0 | \`readFileSync\` | node:fs:1:1  |
    @@ -35,12 +32,0 @@
    -##### \`funcA\` (src/a.ts:1:1)
    -
    -|      % |  Time | Samples | Caller   | Location   |
    -| -----: | ----: | ------: | -------- | ---------- |
    -| 100.0% | 0.1ms |       1 | \`(root)\` | \`<native>\` |
    -
    -##### \`internalLoader\` (node:internal/modules/esm/loader:1:1)
    -
    -|      % |  Time | Samples | Caller         | Location    |
    -| -----: | ----: | ------: | -------------- | ----------- |
    -| 100.0% | 0.1ms |       1 | \`readFileSync\` | node:fs:1:1 |
    -
    @@ -51,8 +37,6 @@
    -|      % |  Time | Samples | Function         | Location                             |
    -| -----: | ----: | ------: | ---------------- | ------------------------------------ |
    -| 100.0% | 0.4ms |       4 | \`(root)\`         | \`<native>\`                           |
    -|  75.0% | 0.3ms |       3 | \`funcA\`          | src/a.ts:1:1                         |
    -|  50.0% | 0.2ms |       2 | \`funcC\`          | src/c.ts:1:1                         |
    -|  50.0% | 0.2ms |       2 | \`funcB\`          | src/b.ts:1:1                         |
    -|  25.0% | 0.1ms |       1 | \`internalLoader\` | node:internal/modules/esm/loader:1:1 |
    -|  25.0% | 0.1ms |       1 | \`readFileSync\`   | node:fs:1:1                          |
    +|     % |  Time | Samples | Function       | Location     |
    +| ----: | ----: | ------: | -------------- | ------------ |
    +| 75.0% | 0.3ms |       3 | \`funcA\`        | src/a.ts:1:1 |
    +| 50.0% | 0.2ms |       2 | \`funcC\`        | src/c.ts:1:1 |
    +| 50.0% | 0.2ms |       2 | \`funcB\`        | src/b.ts:1:1 |
    +| 25.0% | 0.1ms |       1 | \`readFileSync\` | node:fs:1:1  |
    @@ -64,7 +47,0 @@
    -##### \`(root)\` (\`<native>\`)
    -
    -|     % |  Time | Samples | Callee         | Location     |
    -| ----: | ----: | ------: | -------------- | ------------ |
    -| 75.0% | 0.3ms |       3 | \`funcA\`        | src/a.ts:1:1 |
    -| 25.0% | 0.1ms |       1 | \`readFileSync\` | node:fs:1:1  |
    -
    @@ -83,6 +59,0 @@
    -##### \`readFileSync\` (node:fs:1:1)
    -
    -|      % |  Time | Samples | Callee           | Location                             |
    -| -----: | ----: | ------: | ---------------- | ------------------------------------ |
    -| 100.0% | 0.1ms |       1 | \`internalLoader\` | node:internal/modules/esm/loader:1:1 |
    -
    @@ -93,7 +64,3 @@
    -Common call stack: \`(root)\`
    -
    -|     % |  Time | Samples | Call stack                                                                             |
    -| ----: | ----: | ------: | -------------------------------------------------------------------------------------- |
    -| 50.0% | 0.2ms |       2 | \`funcC\` (src/c.ts:1:1) ← \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1)               |
    -| 25.0% | 0.1ms |       1 | \`funcA\` (src/a.ts:1:1)                                                                 |
    -| 25.0% | 0.1ms |       1 | \`internalLoader\` (node:internal/modules/esm/loader:1:1) ← \`readFileSync\` (node:fs:1:1) |
    +|     % |  Time | Samples | Call stack                                                               |
    +| ----: | ----: | ------: | ------------------------------------------------------------------------ |
    +| 50.0% | 0.2ms |       2 | \`funcC\` (src/c.ts:1:1) ← \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    "
  `)
})

test(`v8CpuProfileToMd categorizes sentinel and RegExp functions`, () => {
  // Sentinel functions like `(garbage collector)` and `(program)` have no URL
  // and are categorized by their name without the surrounding parentheses.
  // Functions starting with `RegExp: ` are categorized as `regexp`.
  const profile = makeProfile(
    [
      root([2, 3, 4]),
      {
        id: 2,
        hitCount: 3,
        callFrame: {
          functionName: `(garbage collector)`,
          scriptId: 0,
          url: ``,
          lineNumber: -1,
          columnNumber: -1,
        },
      },
      {
        id: 3,
        hitCount: 2,
        callFrame: {
          functionName: `(program)`,
          scriptId: 0,
          url: ``,
          lineNumber: -1,
          columnNumber: -1,
        },
      },
      {
        id: 4,
        hitCount: 1,
        callFrame: {
          functionName: `RegExp: /foo/`,
          scriptId: 0,
          url: ``,
          lineNumber: -1,
          columnNumber: -1,
        },
      },
    ],
    600,
    [2, 2, 2, 3, 3, 4],
    [100, 100, 100, 100, 100, 100],
  )

  const markdown = v8CpuProfileToMd(profile, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU profile

    Took 0.6ms over 6 samples (100.0µs per sample).

    | Category          |     % |  Time | Samples |
    | ----------------- | ----: | ----: | ------: |
    | garbage collector | 50.0% | 0.3ms |       3 |
    | program           | 33.3% | 0.2ms |       2 |
    | regexp            | 16.7% | 0.1ms |       1 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |     % |  Time | Samples | Function              | Location   |
    | ----: | ----: | ------: | --------------------- | ---------- |
    | 50.0% | 0.3ms |       3 | \`(garbage collector)\` | \`<native>\` |
    | 33.3% | 0.2ms |       2 | \`(program)\`           | \`<native>\` |
    | 16.7% | 0.1ms |       1 | \`RegExp: /foo/\`       | \`<native>\` |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |     % |  Time | Samples | Function              | Location   |
    | ----: | ----: | ------: | --------------------- | ---------- |
    | 50.0% | 0.3ms |       3 | \`(garbage collector)\` | \`<native>\` |
    | 33.3% | 0.2ms |       2 | \`(program)\`           | \`<native>\` |
    | 16.7% | 0.1ms |       1 | \`RegExp: /foo/\`       | \`<native>\` |


    "
  `)
})

test(`v8CpuProfileToMd respects topN option`, () => {
  const markdown = v8CpuProfileToMd(baseProfile, {
    cwd: `/project`,
    topN: 2,
  })

  expect(diffMd(baseMd, markdown)).toMatchInlineSnapshot(`
    "--- base
    +++ modified
    @@ -16,6 +16,4 @@
    -|     % |  Time | Samples | Function       | Location     |
    -| ----: | ----: | ------: | -------------- | ------------ |
    -| 50.0% | 0.2ms |       2 | \`funcC\`        | src/c.ts:1:1 |
    -| 25.0% | 0.1ms |       1 | \`funcA\`        | src/a.ts:1:1 |
    -|  0.0% |   0ms |       0 | \`funcB\`        | src/b.ts:1:1 |
    -|  0.0% |   0ms |       0 | \`readFileSync\` | node:fs:1:1  |
    +|     % |  Time | Samples | Function | Location     |
    +| ----: | ----: | ------: | -------- | ------------ |
    +| 50.0% | 0.2ms |       2 | \`funcC\`  | src/c.ts:1:1 |
    +| 25.0% | 0.1ms |       1 | \`funcA\`  | src/a.ts:1:1 |
    @@ -37,6 +35,4 @@
    -|     % |  Time | Samples | Function       | Location     |
    -| ----: | ----: | ------: | -------------- | ------------ |
    -| 75.0% | 0.3ms |       3 | \`funcA\`        | src/a.ts:1:1 |
    -| 50.0% | 0.2ms |       2 | \`funcC\`        | src/c.ts:1:1 |
    -| 50.0% | 0.2ms |       2 | \`funcB\`        | src/b.ts:1:1 |
    -| 25.0% | 0.1ms |       1 | \`readFileSync\` | node:fs:1:1  |
    +|     % |  Time | Samples | Function | Location     |
    +| ----: | ----: | ------: | -------- | ------------ |
    +| 75.0% | 0.3ms |       3 | \`funcA\`  | src/a.ts:1:1 |
    +| 50.0% | 0.2ms |       2 | \`funcC\`  | src/c.ts:1:1 |
    @@ -54,6 +49,0 @@
    -##### \`funcB\` (src/b.ts:1:1)
    -
    -|      % |  Time | Samples | Callee  | Location     |
    -| -----: | ----: | ------: | ------- | ------------ |
    -| 100.0% | 0.2ms |       2 | \`funcC\` | src/c.ts:1:1 |
    -
    "
  `)
})

test(`v8CpuProfileToMd shows absolute paths when cwd is null`, () => {
  // With cwd: null, file paths are shown absolute rather than relative.
  const markdown = v8CpuProfileToMd(baseProfile, { cwd: null })

  expect(diffMd(baseMd, markdown)).toMatchInlineSnapshot(`
    "--- base
    +++ modified
    @@ -16,6 +16,6 @@
    -|     % |  Time | Samples | Function       | Location     |
    -| ----: | ----: | ------: | -------------- | ------------ |
    -| 50.0% | 0.2ms |       2 | \`funcC\`        | src/c.ts:1:1 |
    -| 25.0% | 0.1ms |       1 | \`funcA\`        | src/a.ts:1:1 |
    -|  0.0% |   0ms |       0 | \`funcB\`        | src/b.ts:1:1 |
    -|  0.0% |   0ms |       0 | \`readFileSync\` | node:fs:1:1  |
    +|     % |  Time | Samples | Function       | Location              |
    +| ----: | ----: | ------: | -------------- | --------------------- |
    +| 50.0% | 0.2ms |       2 | \`funcC\`        | /project/src/c.ts:1:1 |
    +| 25.0% | 0.1ms |       1 | \`funcA\`        | /project/src/a.ts:1:1 |
    +|  0.0% |   0ms |       0 | \`funcB\`        | /project/src/b.ts:1:1 |
    +|  0.0% |   0ms |       0 | \`readFileSync\` | node:fs:1:1           |
    @@ -27,1 +27,1 @@
    -##### \`funcC\` (src/c.ts:1:1)
    +##### \`funcC\` (/project/src/c.ts:1:1)
    @@ -29,3 +29,3 @@
    -|      % |  Time | Samples | Caller  | Location     |
    -| -----: | ----: | ------: | ------- | ------------ |
    -| 100.0% | 0.2ms |       2 | \`funcB\` | src/b.ts:1:1 |
    +|      % |  Time | Samples | Caller  | Location              |
    +| -----: | ----: | ------: | ------- | --------------------- |
    +| 100.0% | 0.2ms |       2 | \`funcB\` | /project/src/b.ts:1:1 |
    @@ -37,6 +37,6 @@
    -|     % |  Time | Samples | Function       | Location     |
    -| ----: | ----: | ------: | -------------- | ------------ |
    -| 75.0% | 0.3ms |       3 | \`funcA\`        | src/a.ts:1:1 |
    -| 50.0% | 0.2ms |       2 | \`funcC\`        | src/c.ts:1:1 |
    -| 50.0% | 0.2ms |       2 | \`funcB\`        | src/b.ts:1:1 |
    -| 25.0% | 0.1ms |       1 | \`readFileSync\` | node:fs:1:1  |
    +|     % |  Time | Samples | Function       | Location              |
    +| ----: | ----: | ------: | -------------- | --------------------- |
    +| 75.0% | 0.3ms |       3 | \`funcA\`        | /project/src/a.ts:1:1 |
    +| 50.0% | 0.2ms |       2 | \`funcC\`        | /project/src/c.ts:1:1 |
    +| 50.0% | 0.2ms |       2 | \`funcB\`        | /project/src/b.ts:1:1 |
    +| 25.0% | 0.1ms |       1 | \`readFileSync\` | node:fs:1:1           |
    @@ -48,1 +48,1 @@
    -##### \`funcA\` (src/a.ts:1:1)
    +##### \`funcA\` (/project/src/a.ts:1:1)
    @@ -50,3 +50,3 @@
    -|     % |  Time | Samples | Callee  | Location     |
    -| ----: | ----: | ------: | ------- | ------------ |
    -| 66.7% | 0.2ms |       2 | \`funcB\` | src/b.ts:1:1 |
    +|     % |  Time | Samples | Callee  | Location              |
    +| ----: | ----: | ------: | ------- | --------------------- |
    +| 66.7% | 0.2ms |       2 | \`funcB\` | /project/src/b.ts:1:1 |
    @@ -54,1 +54,1 @@
    -##### \`funcB\` (src/b.ts:1:1)
    +##### \`funcB\` (/project/src/b.ts:1:1)
    @@ -56,3 +56,3 @@
    -|      % |  Time | Samples | Callee  | Location     |
    -| -----: | ----: | ------: | ------- | ------------ |
    -| 100.0% | 0.2ms |       2 | \`funcC\` | src/c.ts:1:1 |
    +|      % |  Time | Samples | Callee  | Location              |
    +| -----: | ----: | ------: | ------- | --------------------- |
    +| 100.0% | 0.2ms |       2 | \`funcC\` | /project/src/c.ts:1:1 |
    @@ -64,3 +64,3 @@
    -|     % |  Time | Samples | Call stack                                                               |
    -| ----: | ----: | ------: | ------------------------------------------------------------------------ |
    -| 50.0% | 0.2ms |       2 | \`funcC\` (src/c.ts:1:1) ← \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    +|     % |  Time | Samples | Call stack                                                                                          |
    +| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------- |
    +| 50.0% | 0.2ms |       2 | \`funcC\` (/project/src/c.ts:1:1) ← \`funcB\` (/project/src/b.ts:1:1) ← \`funcA\` (/project/src/a.ts:1:1) |
    "
  `)
})
