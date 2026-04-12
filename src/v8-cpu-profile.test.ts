import { test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { readFixture } from './testing/fixtures.ts'
import { v8CpuProfileToMd } from './v8-cpu-profile.ts'

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

    | Category | Total % | Total |
    | -------- | ------- | ----- |
    | ours     | 100.0%  | 0.3ms |

    ## Hottest functions

    ### Self time

    Functions ranked by time in the function body, excluding callees.

    | Self % |  Self | Total % | Total | Function | Location     | Hottest line |
    | -----: | ----: | ------: | ----: | -------- | ------------ | ------------ |
    | 100.0% | 0.3ms |  100.0% | 0.3ms | \`funcB\`  | src/b.ts:1:1 | [unknown]    |
    |   0.0% | 0.0ms |   66.7% | 0.2ms | \`funcA\`  | src/a.ts:1:1 | [unknown]    |
    |   0.0% | 0.0ms |   33.3% | 0.1ms | \`funcC\`  | src/c.ts:1:1 | [unknown]    |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.

    ##### \`funcB\` (src/b.ts:1:1)

    | Self % |  Self | Caller  | Location     |
    | -----: | ----: | ------- | ------------ |
    |  66.7% | 0.2ms | \`funcA\` | src/a.ts:1:1 |
    |  33.3% | 0.1ms | \`funcC\` | src/c.ts:1:1 |

    ### Total time

    Functions ranked by total time in the function and all its callees.

    | Total % | Total | Self % |  Self | Function | Location     |
    | ------: | ----: | -----: | ----: | -------- | ------------ |
    |  100.0% | 0.3ms | 100.0% | 0.3ms | \`funcB\`  | src/b.ts:1:1 |
    |   66.7% | 0.2ms |   0.0% | 0.0ms | \`funcA\`  | src/a.ts:1:1 |
    |   33.3% | 0.1ms |   0.0% | 0.0ms | \`funcC\`  | src/c.ts:1:1 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.

    ##### \`funcA\` (src/a.ts:1:1)

    | Total % | Total | Callee  | Location     |
    | ------: | ----: | ------- | ------------ |
    |  100.0% | 0.2ms | \`funcB\` | src/b.ts:1:1 |

    ##### \`funcC\` (src/c.ts:1:1)

    | Total % | Total | Callee  | Location     |
    | ------: | ----: | ------- | ------------ |
    |  100.0% | 0.1ms | \`funcB\` | src/b.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    | Self % |  Self | Call stack                                      |
    | -----: | ----: | ----------------------------------------------- |
    |  66.7% | 0.2ms | \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    |  33.3% | 0.1ms | \`funcB\` (src/b.ts:1:1) ← \`funcC\` (src/c.ts:1:1) |
    "
  `)
})

test(`v8CpuProfileToMd merges positionTicks across nodes with the same identity`, () => {
  // Node 4 has ticks on line 5 (2 ticks), node 5 has ticks on line 8 (3 ticks).
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
        positionTicks: [{ line: 5, ticks: 2 }],
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
        positionTicks: [{ line: 8, ticks: 3 }],
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

    | Category | Total % | Total |
    | -------- | ------- | ----- |
    | ours     | 100.0%  | 0.3ms |

    ## Hottest functions

    ### Self time

    Functions ranked by time in the function body, excluding callees.

    | Self % |  Self | Total % | Total | Function | Location     | Hottest line |
    | -----: | ----: | ------: | ----: | -------- | ------------ | ------------ |
    | 100.0% | 0.3ms |  100.0% | 0.3ms | \`funcB\`  | src/b.ts:1:1 | 8            |
    |   0.0% | 0.0ms |   66.7% | 0.2ms | \`funcA\`  | src/a.ts:1:1 | [unknown]    |
    |   0.0% | 0.0ms |   33.3% | 0.1ms | \`funcC\`  | src/c.ts:1:1 | [unknown]    |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.

    ##### \`funcB\` (src/b.ts:1:1)

    | Self % |  Self | Caller  | Location     |
    | -----: | ----: | ------- | ------------ |
    |  66.7% | 0.2ms | \`funcA\` | src/a.ts:1:1 |
    |  33.3% | 0.1ms | \`funcC\` | src/c.ts:1:1 |

    ### Total time

    Functions ranked by total time in the function and all its callees.

    | Total % | Total | Self % |  Self | Function | Location     |
    | ------: | ----: | -----: | ----: | -------- | ------------ |
    |  100.0% | 0.3ms | 100.0% | 0.3ms | \`funcB\`  | src/b.ts:1:1 |
    |   66.7% | 0.2ms |   0.0% | 0.0ms | \`funcA\`  | src/a.ts:1:1 |
    |   33.3% | 0.1ms |   0.0% | 0.0ms | \`funcC\`  | src/c.ts:1:1 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.

    ##### \`funcA\` (src/a.ts:1:1)

    | Total % | Total | Callee  | Location     |
    | ------: | ----: | ------- | ------------ |
    |  100.0% | 0.2ms | \`funcB\` | src/b.ts:1:1 |

    ##### \`funcC\` (src/c.ts:1:1)

    | Total % | Total | Callee  | Location     |
    | ------: | ----: | ------- | ------------ |
    |  100.0% | 0.1ms | \`funcB\` | src/b.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    | Self % |  Self | Call stack                                      |
    | -----: | ----: | ----------------------------------------------- |
    |  66.7% | 0.2ms | \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    |  33.3% | 0.1ms | \`funcB\` (src/b.ts:1:1) ← \`funcC\` (src/c.ts:1:1) |
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

    | Category | Total % | Total |
    | -------- | ------- | ----- |
    | ours     | 100.0%  | 0.1ms |

    ## Hottest functions

    ### Self time

    Functions ranked by time in the function body, excluding callees.

    | Self % |  Self | Total % | Total | Function | Location     | Hottest line |
    | -----: | ----: | ------: | ----: | -------- | ------------ | ------------ |
    | 100.0% | 0.1ms |  100.0% | 0.1ms | \`funcA\`  | src/a.ts:1:1 | [unknown]    |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.

    ##### \`funcA\` (src/a.ts:1:1)

    | Self % |  Self | Caller  | Location     |
    | -----: | ----: | ------- | ------------ |
    | 100.0% | 0.1ms | \`funcA\` | src/a.ts:1:1 |

    ### Total time

    Functions ranked by total time in the function and all its callees.

    | Total % | Total | Self % |  Self | Function | Location     |
    | ------: | ----: | -----: | ----: | -------- | ------------ |
    |  100.0% | 0.1ms | 100.0% | 0.1ms | \`funcA\`  | src/a.ts:1:1 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.

    ##### \`funcA\` (src/a.ts:1:1)

    | Total % | Total | Callee  | Location     |
    | ------: | ----: | ------- | ------------ |
    |  100.0% | 0.1ms | \`funcA\` | src/a.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    | Self % |  Self | Call stack                             |
    | -----: | ----: | -------------------------------------- |
    | 100.0% | 0.1ms | \`funcA\` (src/a.ts:1:1) ← \`funcA\` (1:1) |
    "
  `)
})

test(`v8CpuProfileToMd sums positionTicks on the same line across merged nodes`, () => {
  // Node 4 has ticks on lines 8 (3) and 5 (1). Node 5 has ticks on lines 5 (3)
  // and 6 (1). Line 5's ticks must be summed (1+3=4), making line 5 the
  // hottest. Without summing, line 8 (ticks=3) would incorrectly win.
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
          { line: 8, ticks: 3 },
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
        positionTicks: [
          { line: 5, ticks: 3 },
          { line: 6, ticks: 1 },
        ],
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

    | Category | Total % | Total |
    | -------- | ------- | ----- |
    | ours     | 100.0%  | 0.3ms |

    ## Hottest functions

    ### Self time

    Functions ranked by time in the function body, excluding callees.

    | Self % |  Self | Total % | Total | Function | Location     | Hottest line |
    | -----: | ----: | ------: | ----: | -------- | ------------ | ------------ |
    | 100.0% | 0.3ms |  100.0% | 0.3ms | \`funcB\`  | src/b.ts:1:1 | 5            |
    |   0.0% | 0.0ms |   66.7% | 0.2ms | \`funcA\`  | src/a.ts:1:1 | [unknown]    |
    |   0.0% | 0.0ms |   33.3% | 0.1ms | \`funcC\`  | src/c.ts:1:1 | [unknown]    |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.

    ##### \`funcB\` (src/b.ts:1:1)

    | Self % |  Self | Caller  | Location     |
    | -----: | ----: | ------- | ------------ |
    |  66.7% | 0.2ms | \`funcA\` | src/a.ts:1:1 |
    |  33.3% | 0.1ms | \`funcC\` | src/c.ts:1:1 |

    ### Total time

    Functions ranked by total time in the function and all its callees.

    | Total % | Total | Self % |  Self | Function | Location     |
    | ------: | ----: | -----: | ----: | -------- | ------------ |
    |  100.0% | 0.3ms | 100.0% | 0.3ms | \`funcB\`  | src/b.ts:1:1 |
    |   66.7% | 0.2ms |   0.0% | 0.0ms | \`funcA\`  | src/a.ts:1:1 |
    |   33.3% | 0.1ms |   0.0% | 0.0ms | \`funcC\`  | src/c.ts:1:1 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.

    ##### \`funcA\` (src/a.ts:1:1)

    | Total % | Total | Callee  | Location     |
    | ------: | ----: | ------- | ------------ |
    |  100.0% | 0.2ms | \`funcB\` | src/b.ts:1:1 |

    ##### \`funcC\` (src/c.ts:1:1)

    | Total % | Total | Callee  | Location     |
    | ------: | ----: | ------- | ------------ |
    |  100.0% | 0.1ms | \`funcB\` | src/b.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    | Self % |  Self | Call stack                                      |
    | -----: | ----: | ----------------------------------------------- |
    |  66.7% | 0.2ms | \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    |  33.3% | 0.1ms | \`funcB\` (src/b.ts:1:1) ← \`funcC\` (src/c.ts:1:1) |
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

    | Category | Total % | Total |
    | -------- | ------- | ----- |
    | ours     | 100.0%  | 0.1ms |

    ## Hottest functions

    ### Self time

    Functions ranked by time in the function body, excluding callees.

    | Self % |  Self | Total % | Total | Function      | Location      | Hottest line |
    | -----: | ----: | ------: | ----: | ------------- | ------------- | ------------ |
    | 100.0% | 0.1ms |  100.0% | 0.1ms | \`allocate\`    | src/a.ts:31:1 | [unknown]    |
    |   0.0% | 0.0ms |  100.0% | 0.1ms | \`(anonymous)\` | src/a.ts:11:1 | [unknown]    |
    |   0.0% | 0.0ms |  100.0% | 0.1ms | \`(anonymous)\` | src/a.ts:21:1 | [unknown]    |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.

    ##### \`allocate\` (src/a.ts:31:1)

    | Self % |  Self | Caller        | Location      |
    | -----: | ----: | ------------- | ------------- |
    | 100.0% | 0.1ms | \`(anonymous)\` | src/a.ts:21:1 |

    ### Total time

    Functions ranked by total time in the function and all its callees.

    | Total % | Total | Self % |  Self | Function      | Location      |
    | ------: | ----: | -----: | ----: | ------------- | ------------- |
    |  100.0% | 0.1ms |   0.0% | 0.0ms | \`(anonymous)\` | src/a.ts:11:1 |
    |  100.0% | 0.1ms |   0.0% | 0.0ms | \`(anonymous)\` | src/a.ts:21:1 |
    |  100.0% | 0.1ms | 100.0% | 0.1ms | \`allocate\`    | src/a.ts:31:1 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.

    ##### \`(anonymous)\` (src/a.ts:11:1)

    | Total % | Total | Callee        | Location      |
    | ------: | ----: | ------------- | ------------- |
    |  100.0% | 0.1ms | \`(anonymous)\` | src/a.ts:21:1 |

    ##### \`(anonymous)\` (src/a.ts:21:1)

    | Total % | Total | Callee     | Location      |
    | ------: | ----: | ---------- | ------------- |
    |  100.0% | 0.1ms | \`allocate\` | src/a.ts:31:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    | Self % |  Self | Call stack                                                               |
    | -----: | ----: | ------------------------------------------------------------------------ |
    | 100.0% | 0.1ms | \`allocate\` (src/a.ts:31:1) ← \`(anonymous)\` (21:1) ← \`(anonymous)\` (11:1) |
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

    | Category    | Total % | Total |
    | ----------- | ------- | ----- |
    | ours        | 71.4%   | 1.3ms |
    | third-party | 28.6%   | 0.5ms |

    ## Hottest functions

    ### Self time

    Functions ranked by time in the function body, excluding callees.

    | Self % |  Self | Total % | Total | Function     | Location                      | Hottest line |
    | -----: | ----: | ------: | ----: | ------------ | ----------------------------- | ------------ |
    |  57.1% | 1.0ms |  100.0% | 1.8ms | \`ownFunc\`    | src/index.ts:1:1              | [unknown]    |
    |  28.6% | 0.5ms |   42.9% | 0.8ms | \`thirdParty\` | node_modules/lib/index.js:1:1 | [unknown]    |
    |  14.3% | 0.3ms |   14.3% | 0.3ms | \`allocate\`   | src/util.ts:1:1               | [unknown]    |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.

    ##### \`thirdParty\` (node_modules/lib/index.js:1:1)

    | Self % |  Self | Caller    | Location         |
    | -----: | ----: | --------- | ---------------- |
    | 100.0% | 0.5ms | \`ownFunc\` | src/index.ts:1:1 |

    ##### \`allocate\` (src/util.ts:1:1)

    | Self % |  Self | Caller       | Location                      |
    | -----: | ----: | ------------ | ----------------------------- |
    | 100.0% | 0.3ms | \`thirdParty\` | node_modules/lib/index.js:1:1 |

    ### Total time

    Functions ranked by total time in the function and all its callees.

    | Total % | Total | Self % |  Self | Function     | Location                      |
    | ------: | ----: | -----: | ----: | ------------ | ----------------------------- |
    |  100.0% | 1.8ms |  57.1% | 1.0ms | \`ownFunc\`    | src/index.ts:1:1              |
    |   42.9% | 0.8ms |  28.6% | 0.5ms | \`thirdParty\` | node_modules/lib/index.js:1:1 |
    |   14.3% | 0.3ms |  14.3% | 0.3ms | \`allocate\`   | src/util.ts:1:1               |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.

    ##### \`ownFunc\` (src/index.ts:1:1)

    | Total % | Total | Callee       | Location                      |
    | ------: | ----: | ------------ | ----------------------------- |
    |   42.9% | 0.8ms | \`thirdParty\` | node_modules/lib/index.js:1:1 |

    ##### \`thirdParty\` (node_modules/lib/index.js:1:1)

    | Total % | Total | Callee     | Location        |
    | ------: | ----: | ---------- | --------------- |
    |   33.3% | 0.3ms | \`allocate\` | src/util.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    Common call stack: \`ownFunc\` (src/index.ts:1:1)

    | Self % |  Self | Call stack                                                                  |
    | -----: | ----: | --------------------------------------------------------------------------- |
    |  28.6% | 0.5ms | \`thirdParty\` (node_modules/lib/index.js:1:1)                                |
    |  14.3% | 0.3ms | \`allocate\` (src/util.ts:1:1) ← \`thirdParty\` (node_modules/lib/index.js:1:1) |
    "
  `)
})

test(`v8CpuProfileToMd with real fixture`, async () => {
  const cpuProfile = await readFixture(`example.cpuprofile`)

  const markdown = v8CpuProfileToMd(cpuProfile, {
    cwd: `/Users/tomer/Documents/work/code/uneval`,
    topN: 5,
  })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU profile

    Took 6176.2ms over 47806 samples (129.2µs per sample).

    | Category          | Total % | Total    |
    | ----------------- | ------- | -------- |
    | ours              | 91.0%   | 5620.4ms |
    | regexp            | 2.1%    | 127.4ms  |
    | native            | 2.0%    | 124.6ms  |
    | garbage collector | 1.7%    | 106.3ms  |
    | program           | 1.7%    | 104.4ms  |
    | third-party       | 1.5%    | 90.2ms   |
    | idle              | 0.0%    | 3.0ms    |

    ## Hottest functions

    ### Self time

    Functions ranked by time in the function body, excluding callees.

    | Self % |    Self | Total % |    Total | Function               | Location                         | Hottest line |
    | -----: | ------: | ------: | -------: | ---------------------- | -------------------------------- | ------------ |
    |  15.6% | 966.3ms |   23.7% | 1464.1ms | \`traverseObject\`       | src/index.ts:204:26              | 210          |
    |  15.0% | 926.9ms |   48.6% | 3001.9ms | \`unevalObjectLike\`     | src/internal/object.ts:103:26    | 128          |
    |   8.5% | 527.0ms |   63.0% | 3893.0ms | \`unevalObjectInternal\` | src/internal/object.ts:68:30     | 78           |
    |   8.5% | 524.1ms |   14.7% |  907.7ms | \`unevalWithoutCustom\`  | src/internal/index.ts:14:37      | 17           |
    |   8.4% | 517.7ms |    8.4% |  517.7ms | \`unevalLiteral\`        | src/internal/primitive.ts:139:23 | 146          |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.

    ##### \`traverseObject\` (src/index.ts:204:26)

    | Self % |    Self | Caller           | Location            |
    | -----: | ------: | ---------------- | ------------------- |
    |  99.7% | 963.3ms | \`traverse\`       | src/index.ts:164:20 |
    |   0.1% |   1.2ms | \`traverseObject\` | src/index.ts:204:26 |

    ##### \`unevalObjectLike\` (src/internal/object.ts:103:26)

    | Self % |    Self | Caller                 | Location                     |
    | -----: | ------: | ---------------------- | ---------------------------- |
    |  99.8% | 925.3ms | \`unevalObjectInternal\` | src/internal/object.ts:68:30 |
    |   0.1% |   0.8ms | \`unevalObject\`         | src/internal/object.ts:20:29 |

    ##### \`unevalObjectInternal\` (src/internal/object.ts:68:30)

    | Self % |    Self | Caller         | Location                     |
    | -----: | ------: | -------------- | ---------------------------- |
    |  99.4% | 524.1ms | \`unevalObject\` | src/internal/object.ts:20:29 |
    |   0.1% |   0.5ms | \`uneval\`       | src/index.ts:75:16           |

    ##### \`unevalWithoutCustom\` (src/internal/index.ts:14:37)

    | Self % |    Self | Caller                   | Location                      |
    | -----: | ------: | ------------------------ | ----------------------------- |
    | 100.0% | 524.1ms | \`unevalObjectLiteralKey\` | src/internal/object.ts:384:32 |

    ##### \`unevalLiteral\` (src/internal/primitive.ts:139:23)

    | Self % |    Self | Caller         | Location                         |
    | -----: | ------: | -------------- | -------------------------------- |
    | 100.0% | 517.7ms | \`unevalString\` | src/internal/primitive.ts:133:29 |

    ### Total time

    Functions ranked by total time in the function and all its callees.

    | Total % |    Total | Self % |    Self | Function               | Location                     |
    | ------: | -------: | -----: | ------: | ---------------------- | ---------------------------- |
    |   94.3% | 5824.7ms |   0.2% |  13.9ms | \`(anonymous)\`          | scripts/profile.ts:1:1       |
    |   92.6% | 5720.4ms |   0.7% |  40.9ms | \`uneval\`               | src/index.ts:75:16           |
    |   64.4% | 3978.1ms |   4.3% | 266.6ms | \`unevalInternal\`       | src/internal/index.ts:25:32  |
    |   63.3% | 3912.5ms |   0.7% |  44.8ms | \`unevalObject\`         | src/internal/object.ts:20:29 |
    |   63.0% | 3893.0ms |   8.5% | 527.0ms | \`unevalObjectInternal\` | src/internal/object.ts:68:30 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.

    ##### \`(anonymous)\` (scripts/profile.ts:1:1)

    | Total % |    Total | Callee   | Location                                                                              |
    | ------: | -------: | -------- | ------------------------------------------------------------------------------------- |
    |   98.2% | 5719.3ms | \`uneval\` | src/index.ts:75:16                                                                    |
    |    1.5% |   87.1ms | \`sample\` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |

    ##### \`uneval\` (src/index.ts:75:16)

    | Total % |    Total | Callee           | Location                    |
    | ------: | -------: | ---------------- | --------------------------- |
    |   69.4% | 3969.6ms | \`unevalInternal\` | src/internal/index.ts:25:32 |
    |   29.9% | 1709.1ms | \`createState\`    | src/index.ts:144:21         |

    ##### \`unevalInternal\` (src/internal/index.ts:25:32)

    | Total % |    Total | Callee         | Location                         |
    | ------: | -------: | -------------- | -------------------------------- |
    |   98.4% | 3912.5ms | \`unevalObject\` | src/internal/object.ts:20:29     |
    |   14.4% |  571.0ms | \`unevalString\` | src/internal/primitive.ts:133:29 |

    ##### \`unevalObject\` (src/internal/object.ts:20:29)

    | Total % |    Total | Callee                 | Location                        |
    | ------: | -------: | ---------------------- | ------------------------------- |
    |   99.4% | 3890.7ms | \`unevalObjectInternal\` | src/internal/object.ts:68:30    |
    |    0.0% |    0.9ms | \`unevalArray\`          | src/internal/collection.ts:7:47 |

    ##### \`unevalObjectInternal\` (src/internal/object.ts:68:30)

    | Total % |    Total | Callee             | Location                        |
    | ------: | -------: | ------------------ | ------------------------------- |
    |   77.1% | 3000.5ms | \`unevalObjectLike\` | src/internal/object.ts:103:26   |
    |   44.4% | 1729.2ms | \`unevalArray\`      | src/internal/collection.ts:7:47 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    Common call stack: \`uneval\` (src/index.ts:75:16) ← \`(anonymous)\` (scripts/profile.ts:1:1)

    | Self % |    Self | Call stack                                                                                                                                                                                                                                              |
    | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    |   7.5% | 465.0ms | \`traverseObject\` (src/index.ts:204:26) ← \`traverse\` (164:20) ← \`createState\` (144:21)                                                                                                                                                                   |
    |   7.0% | 434.9ms | \`unevalObjectLike\` (src/internal/object.ts:103:26) ← \`unevalObjectInternal\` (68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32)                                                                                           |
    |   5.9% | 365.8ms | \`traverseObject\` (src/index.ts:204:26) ← \`traverse\` (164:20) ← \`traverseObject\` (204:26) ← \`traverse\` (164:20) ← \`createState\` (144:21)                                                                                                                 |
    |   4.0% | 245.3ms | \`unevalWithoutCustom\` (src/internal/index.ts:14:37) ← \`unevalObjectLiteralKey\` (src/internal/object.ts:384:32) ← \`unevalObjectLike\` (103:26) ← \`unevalObjectInternal\` (68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32) |
    |   3.9% | 239.1ms | \`unevalObjectInternal\` (src/internal/object.ts:68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32)                                                                                                                         |
    "
  `)
})
