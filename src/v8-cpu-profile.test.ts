import fs from 'node:fs/promises'
import path from 'node:path'
import { test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { v8CpuProfileToMd } from './v8-cpu-profile.ts'

const readFixture = (name: string): Promise<string> =>
  fs.readFile(path.join(import.meta.dirname, `fixtures/${name}`), `utf8`)

test(`v8CpuProfileToMd merges nodes with the same identity`, () => {
  const profile = JSON.stringify({
    nodes: [
      {
        id: 1,
        hitCount: 0,
        callFrame: {
          functionName: `(root)`,
          scriptId: 0,
          url: ``,
          lineNumber: -1,
          columnNumber: -1,
        },
        children: [2, 3],
      },
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
    startTime: 0,
    endTime: 300,
    samples: [4, 4, 5],
    timeDeltas: [100, 100, 100],
  })

  const markdown = v8CpuProfileToMd(profile, { cwd: `/project` })

  // `funcB` appears as two separate nodes (called from `funcA` and `funcC`), so
  // it should be merged into a single row with combined times.
  expect(markdown).toMatchInlineSnapshot(`
    "# CPU Profile

    Took 0.3ms (100.0% ours, 0.0% third-party, 0.0% native) over 3 samples (100.0µs per sample).

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
  const profile = JSON.stringify({
    nodes: [
      {
        id: 1,
        hitCount: 0,
        callFrame: {
          functionName: `(root)`,
          scriptId: 0,
          url: ``,
          lineNumber: -1,
          columnNumber: -1,
        },
        children: [2, 3],
      },
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
    startTime: 0,
    endTime: 300,
    samples: [4, 4, 5],
    timeDeltas: [100, 100, 100],
  })

  const markdown = v8CpuProfileToMd(profile, { cwd: `/project` })

  // Node 4 has ticks on line 5 (2 ticks), node 5 has ticks on line 8 (3 ticks).
  // After merging, hottest line should be 8.
  expect(markdown).toMatchInlineSnapshot(`
    "# CPU Profile

    Took 0.3ms (100.0% ours, 0.0% third-party, 0.0% native) over 3 samples (100.0µs per sample).

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
  const profile = JSON.stringify({
    nodes: [
      {
        id: 1,
        hitCount: 0,
        callFrame: {
          functionName: `(root)`,
          scriptId: 0,
          url: ``,
          lineNumber: -1,
          columnNumber: -1,
        },
        children: [2],
      },
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
    startTime: 0,
    endTime: 100,
    samples: [3],
    timeDeltas: [100],
  })

  const markdown = v8CpuProfileToMd(profile, { cwd: `/project` })

  // `funcA` calls itself recursively (two nodes, same identity). Total time
  // should be counted once per sample, not twice.
  expect(markdown).toMatchInlineSnapshot(`
    "# CPU Profile

    Took 0.1ms (100.0% ours, 0.0% third-party, 0.0% native) over 1 sample (100.0µs per sample).

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
  const profile = JSON.stringify({
    nodes: [
      {
        id: 1,
        hitCount: 0,
        callFrame: {
          functionName: `(root)`,
          scriptId: 0,
          url: ``,
          lineNumber: -1,
          columnNumber: -1,
        },
        children: [2, 3],
      },
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
    startTime: 0,
    endTime: 300,
    samples: [4, 4, 5],
    timeDeltas: [100, 100, 100],
  })

  const markdown = v8CpuProfileToMd(profile, { cwd: `/project` })

  // Node 4 has ticks on lines 8 (3) and 5 (1). Node 5 has ticks on lines 5 (3)
  // and 6 (1). Line 5's ticks must be summed (1+3=4), making line 5 the
  // hottest. Without summing, line 8 (ticks=3) would incorrectly win.
  expect(markdown).toMatchInlineSnapshot(`
    "# CPU Profile

    Took 0.3ms (100.0% ours, 0.0% third-party, 0.0% native) over 3 samples (100.0µs per sample).

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

test(`v8CpuProfileToMd displays empty functionName as (anonymous)`, () => {
  const profile = JSON.stringify({
    nodes: [
      {
        id: 1,
        hitCount: 0,
        callFrame: {
          functionName: `(root)`,
          scriptId: 0,
          url: ``,
          lineNumber: -1,
          columnNumber: -1,
        },
        children: [2],
      },
      {
        id: 2,
        hitCount: 1,
        callFrame: {
          functionName: ``,
          scriptId: 1,
          url: `file:///project/src/a.ts`,
          lineNumber: 10,
          columnNumber: 5,
        },
      },
    ],
    startTime: 0,
    endTime: 100,
    samples: [2],
    timeDeltas: [100],
  })

  const markdown = v8CpuProfileToMd(profile, { cwd: `/project` })

  // A node with an empty functionName should display as `(anonymous)`.
  expect(markdown).toMatchInlineSnapshot(`
    "# CPU Profile

    Took 0.1ms (100.0% ours, 0.0% third-party, 0.0% native) over 1 sample (100.0µs per sample).

    ## Hottest functions

    ### Self time

    Functions ranked by time in the function body, excluding callees.

    | Self % |  Self | Total % | Total | Function      | Location      | Hottest line |
    | -----: | ----: | ------: | ----: | ------------- | ------------- | ------------ |
    | 100.0% | 0.1ms |  100.0% | 0.1ms | \`(anonymous)\` | src/a.ts:11:6 | [unknown]    |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.

    ##### \`(anonymous)\` (src/a.ts:11:6)

    | Self % |  Self | Caller   | Location  |
    | -----: | ----: | -------- | --------- |
    | 100.0% | 0.1ms | \`(root)\` | [unknown] |

    ### Total time

    Functions ranked by total time in the function and all its callees.

    | Total % | Total | Self % |  Self | Function      | Location      |
    | ------: | ----: | -----: | ----: | ------------- | ------------- |
    |  100.0% | 0.1ms | 100.0% | 0.1ms | \`(anonymous)\` | src/a.ts:11:6 |
    "
  `)
})

test(`v8CpuProfileToMd fixture`, async () => {
  const cpuProfile = await readFixture(`example.cpuprofile`)

  const markdown = v8CpuProfileToMd(cpuProfile, {
    cwd: `/Users/tomer/Documents/work/code/uneval`,
  })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU Profile

    Took 6176.2ms (91.0% ours, 1.5% third-party, 7.5% native) over 47806 samples (129.2µs per sample).

    ## Hottest functions

    ### Self time

    Functions ranked by time in the function body, excluding callees.

    | Self % |    Self | Total % |    Total | Function                                         | Location                                                                                          | Hottest line |
    | -----: | ------: | ------: | -------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------ |
    |  15.6% | 966.3ms |   23.7% | 1464.1ms | \`traverseObject\`                                 | src/index.ts:204:26                                                                               | 210          |
    |  15.0% | 926.9ms |   48.6% | 3001.9ms | \`unevalObjectLike\`                               | src/internal/object.ts:103:26                                                                     | 128          |
    |   8.5% | 527.0ms |   63.0% | 3893.0ms | \`unevalObjectInternal\`                           | src/internal/object.ts:68:30                                                                      | 78           |
    |   8.5% | 524.1ms |   14.7% |  907.7ms | \`unevalWithoutCustom\`                            | src/internal/index.ts:14:37                                                                       | 17           |
    |   8.4% | 517.7ms |    8.4% |  517.7ms | \`unevalLiteral\`                                  | src/internal/primitive.ts:139:23                                                                  | 146          |
    |   6.6% | 404.6ms |    6.6% |  404.6ms | \`unevalNumber\`                                   | src/internal/primitive.ts:12:29                                                                   | 22           |
    |   6.0% | 372.6ms |   25.2% | 1554.5ms | \`traverse\`                                       | src/index.ts:164:20                                                                               | 178          |
    |   5.8% | 359.6ms |   28.0% | 1730.2ms | \`unevalArray\`                                    | src/internal/collection.ts:7:47                                                                   | 86           |
    |   4.3% | 266.6ms |   64.4% | 3978.1ms | \`unevalInternal\`                                 | src/internal/index.ts:25:32                                                                       | 33           |
    |   3.5% | 217.0ms |    3.5% |  217.0ms | \`getType\`                                        | src/internal/type.ts:4:24                                                                         | 17           |
    |   2.7% | 165.8ms |   19.4% | 1200.9ms | \`unevalObjectLiteralKey\`                         | src/internal/object.ts:384:32                                                                     | 406          |
    |   2.5% | 154.6ms |   27.7% | 1709.1ms | \`createState\`                                    | src/index.ts:144:21                                                                               | 332          |
    |   2.1% | 127.4ms |    2.1% |  127.4ms | \`RegExp: ^[$_\\p{ID_Start}][$_\\p{ID_Continue}]*$\` | [unknown]                                                                                         | [unknown]    |
    |   1.7% | 106.3ms |    1.7% |  106.3ms | \`(garbage collector)\`                            | [unknown]                                                                                         | [unknown]    |
    |   1.7% | 104.4ms |    1.7% |  104.4ms | \`(program)\`                                      | [unknown]                                                                                         | [unknown]    |
    |   0.9% |  53.3ms |    9.2% |  571.0ms | \`unevalString\`                                   | src/internal/primitive.ts:133:29                                                                  | 134          |
    |   0.7% |  44.8ms |   63.3% | 3912.5ms | \`unevalObject\`                                   | src/internal/object.ts:20:29                                                                      | 25           |
    |   0.7% |  40.9ms |   92.6% | 5720.4ms | \`uneval\`                                         | src/index.ts:75:16                                                                                | 77           |
    |   0.6% |  39.5ms |    0.6% |   39.5ms | \`isObject\`                                       | src/internal/object.ts:434:25                                                                     | 436          |
    |   0.3% |  20.5ms |    0.3% |   20.8ms | \`uniformIntInternal\`                             | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28 | 11           |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.

    ##### \`traverseObject\` (src/index.ts:204:26)

    | Self % |    Self | Caller           | Location               |
    | -----: | ------: | ---------------- | ---------------------- |
    |  99.7% | 963.3ms | \`traverse\`       | src/index.ts:164:20    |
    |   0.1% |   1.2ms | \`traverseObject\` | src/index.ts:204:26    |
    |   0.1% |   1.0ms | \`(root)\`         | [unknown]              |
    |   0.1% |   0.6ms | \`(anonymous)\`    | scripts/profile.ts:1:1 |
    |   0.0% |   0.1ms | \`uneval\`         | src/index.ts:75:16     |

    ##### \`unevalObjectLike\` (src/internal/object.ts:103:26)

    | Self % |    Self | Caller                 | Location                     |
    | -----: | ------: | ---------------------- | ---------------------------- |
    |  99.8% | 925.3ms | \`unevalObjectInternal\` | src/internal/object.ts:68:30 |
    |   0.1% |   0.8ms | \`unevalObject\`         | src/internal/object.ts:20:29 |
    |   0.1% |   0.8ms | \`(root)\`               | [unknown]                    |

    ##### \`unevalObjectInternal\` (src/internal/object.ts:68:30)

    | Self % |    Self | Caller                 | Location                      |
    | -----: | ------: | ---------------------- | ----------------------------- |
    |  99.4% | 524.1ms | \`unevalObject\`         | src/internal/object.ts:20:29  |
    |   0.3% |   1.8ms | \`(root)\`               | [unknown]                     |
    |   0.1% |   0.5ms | \`uneval\`               | src/index.ts:75:16            |
    |   0.1% |   0.4ms | \`unevalObjectLike\`     | src/internal/object.ts:103:26 |
    |   0.0% |   0.3ms | \`unevalObjectInternal\` | src/internal/object.ts:68:30  |

    ##### \`unevalWithoutCustom\` (src/internal/index.ts:14:37)

    | Self % |    Self | Caller                   | Location                      |
    | -----: | ------: | ------------------------ | ----------------------------- |
    | 100.0% | 524.1ms | \`unevalObjectLiteralKey\` | src/internal/object.ts:384:32 |

    ##### \`unevalLiteral\` (src/internal/primitive.ts:139:23)

    | Self % |    Self | Caller         | Location                         |
    | -----: | ------: | -------------- | -------------------------------- |
    | 100.0% | 517.7ms | \`unevalString\` | src/internal/primitive.ts:133:29 |

    ##### \`unevalNumber\` (src/internal/primitive.ts:12:29)

    | Self % |    Self | Caller           | Location                    |
    | -----: | ------: | ---------------- | --------------------------- |
    | 100.0% | 404.6ms | \`unevalInternal\` | src/internal/index.ts:25:32 |

    ##### \`traverse\` (src/index.ts:164:20)

    | Self % |    Self | Caller           | Location            |
    | -----: | ------: | ---------------- | ------------------- |
    |  75.3% | 280.4ms | \`traverseObject\` | src/index.ts:204:26 |
    |  24.7% |  92.2ms | \`createState\`    | src/index.ts:144:21 |

    ##### \`unevalArray\` (src/internal/collection.ts:7:47)

    | Self % |    Self | Caller                 | Location                     |
    | -----: | ------: | ---------------------- | ---------------------------- |
    |  99.6% | 358.1ms | \`unevalObjectInternal\` | src/internal/object.ts:68:30 |
    |   0.3% |   0.9ms | \`unevalObject\`         | src/internal/object.ts:20:29 |
    |   0.1% |   0.5ms | \`(root)\`               | [unknown]                    |

    ##### \`unevalInternal\` (src/internal/index.ts:25:32)

    | Self % |    Self | Caller                 | Location                        |
    | -----: | ------: | ---------------------- | ------------------------------- |
    |  40.3% | 107.6ms | \`unevalObjectLike\`     | src/internal/object.ts:103:26   |
    |  33.3% |  88.9ms | \`unevalArray\`          | src/internal/collection.ts:7:47 |
    |   8.9% |  23.8ms | \`uneval\`               | src/index.ts:75:16              |
    |   7.3% |  19.5ms | \`unevalWithoutCustom\`  | src/internal/index.ts:14:37     |
    |   6.9% |  18.4ms | \`unevalObjectInternal\` | src/internal/object.ts:68:30    |

    ##### \`getType\` (src/internal/type.ts:4:24)

    | Self % |    Self | Caller           | Location            |
    | -----: | ------: | ---------------- | ------------------- |
    |  99.9% | 216.8ms | \`traverseObject\` | src/index.ts:204:26 |
    |   0.1% |   0.1ms | \`traverse\`       | src/index.ts:164:20 |

    ##### \`unevalObjectLiteralKey\` (src/internal/object.ts:384:32)

    | Self % |    Self | Caller             | Location                      |
    | -----: | ------: | ------------------ | ----------------------------- |
    | 100.0% | 165.8ms | \`unevalObjectLike\` | src/internal/object.ts:103:26 |

    ##### \`createState\` (src/index.ts:144:21)

    | Self % |    Self | Caller   | Location           |
    | -----: | ------: | -------- | ------------------ |
    | 100.0% | 154.6ms | \`uneval\` | src/index.ts:75:16 |

    ##### \`RegExp: ^[$_\\p{ID_Start}][$_\\p{ID_Continue}]*$\` ([unknown])

    | Self % |    Self | Caller                   | Location                      |
    | -----: | ------: | ------------------------ | ----------------------------- |
    | 100.0% | 127.4ms | \`unevalObjectLiteralKey\` | src/internal/object.ts:384:32 |

    ##### \`(garbage collector)\` ([unknown])

    | Self % |    Self | Caller   | Location  |
    | -----: | ------: | -------- | --------- |
    | 100.0% | 106.3ms | \`(root)\` | [unknown] |

    ##### \`(program)\` ([unknown])

    | Self % |    Self | Caller   | Location  |
    | -----: | ------: | -------- | --------- |
    | 100.0% | 104.4ms | \`(root)\` | [unknown] |

    ##### \`unevalString\` (src/internal/primitive.ts:133:29)

    | Self % |   Self | Caller           | Location                    |
    | -----: | -----: | ---------------- | --------------------------- |
    | 100.0% | 53.3ms | \`unevalInternal\` | src/internal/index.ts:25:32 |

    ##### \`unevalObject\` (src/internal/object.ts:20:29)

    | Self % |   Self | Caller           | Location                    |
    | -----: | -----: | ---------------- | --------------------------- |
    | 100.0% | 44.8ms | \`unevalInternal\` | src/internal/index.ts:25:32 |

    ##### \`uneval\` (src/index.ts:75:16)

    | Self % |   Self | Caller        | Location                             |
    | -----: | -----: | ------------- | ------------------------------------ |
    |  97.5% | 39.9ms | \`(anonymous)\` | scripts/profile.ts:1:1               |
    |   1.3% |  0.5ms | \`(root)\`      | [unknown]                            |
    |   1.3% |  0.5ms | \`run\`         | node:internal/modules/esm/module_job |

    ##### \`isObject\` (src/internal/object.ts:434:25)

    | Self % |   Self | Caller           | Location                    |
    | -----: | -----: | ---------------- | --------------------------- |
    | 100.0% | 39.5ms | \`unevalInternal\` | src/internal/index.ts:25:32 |

    ##### \`uniformIntInternal\` (node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28)

    | Self % |   Self | Caller                    | Location                                                                                            |
    | -----: | -----: | ------------------------- | --------------------------------------------------------------------------------------------------- |
    |  96.7% | 19.8ms | \`uniformInt\`              | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:127:20 |
    |   3.3% |  0.7ms | \`uniformArrayIntInternal\` | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:83:33  |

    ### Total time

    Functions ranked by total time in the function and all its callees.

    | Total % |    Total | Self % |    Self | Function                                         | Location                                                                              |
    | ------: | -------: | -----: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
    |   94.3% | 5824.7ms |   0.2% |  13.9ms | \`(anonymous)\`                                    | scripts/profile.ts:1:1                                                                |
    |   92.6% | 5720.4ms |   0.7% |  40.9ms | \`uneval\`                                         | src/index.ts:75:16                                                                    |
    |   64.4% | 3978.1ms |   4.3% | 266.6ms | \`unevalInternal\`                                 | src/internal/index.ts:25:32                                                           |
    |   63.3% | 3912.5ms |   0.7% |  44.8ms | \`unevalObject\`                                   | src/internal/object.ts:20:29                                                          |
    |   63.0% | 3893.0ms |   8.5% | 527.0ms | \`unevalObjectInternal\`                           | src/internal/object.ts:68:30                                                          |
    |   48.6% | 3001.9ms |  15.0% | 926.9ms | \`unevalObjectLike\`                               | src/internal/object.ts:103:26                                                         |
    |   28.0% | 1730.2ms |   5.8% | 359.6ms | \`unevalArray\`                                    | src/internal/collection.ts:7:47                                                       |
    |   27.7% | 1709.1ms |   2.5% | 154.6ms | \`createState\`                                    | src/index.ts:144:21                                                                   |
    |   25.2% | 1554.5ms |   6.0% | 372.6ms | \`traverse\`                                       | src/index.ts:164:20                                                                   |
    |   23.7% | 1464.1ms |  15.6% | 966.3ms | \`traverseObject\`                                 | src/index.ts:204:26                                                                   |
    |   19.4% | 1200.9ms |   2.7% | 165.8ms | \`unevalObjectLiteralKey\`                         | src/internal/object.ts:384:32                                                         |
    |   14.7% |  907.7ms |   8.5% | 524.1ms | \`unevalWithoutCustom\`                            | src/internal/index.ts:14:37                                                           |
    |    9.2% |  571.0ms |   0.9% |  53.3ms | \`unevalString\`                                   | src/internal/primitive.ts:133:29                                                      |
    |    8.4% |  517.7ms |   8.4% | 517.7ms | \`unevalLiteral\`                                  | src/internal/primitive.ts:139:23                                                      |
    |    6.6% |  404.6ms |   6.6% | 404.6ms | \`unevalNumber\`                                   | src/internal/primitive.ts:12:29                                                       |
    |    3.5% |  217.0ms |   3.5% | 217.0ms | \`getType\`                                        | src/internal/type.ts:4:24                                                             |
    |    2.1% |  127.4ms |   2.1% | 127.4ms | \`RegExp: ^[$_\\p{ID_Start}][$_\\p{ID_Continue}]*$\` | [unknown]                                                                             |
    |    1.7% |  106.3ms |   1.7% | 106.3ms | \`(garbage collector)\`                            | [unknown]                                                                             |
    |    1.7% |  104.4ms |   1.7% | 104.4ms | \`(program)\`                                      | [unknown]                                                                             |
    |    1.4% |   87.1ms |   0.0% |   0.0ms | \`sample\`                                         | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.

    ##### \`(anonymous)\` (scripts/profile.ts:1:1)

    | Total % |    Total | Callee           | Location                                                                              |
    | ------: | -------: | ---------------- | ------------------------------------------------------------------------------------- |
    |   98.2% | 5719.3ms | \`uneval\`         | src/index.ts:75:16                                                                    |
    |    1.5% |   87.1ms | \`sample\`         | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |
    |    0.0% |    2.1ms | \`anything\`       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:8168:18 |
    |    0.0% |    1.7ms | \`unevalInternal\` | src/internal/index.ts:25:32                                                           |
    |    0.0% |    0.6ms | \`traverseObject\` | src/index.ts:204:26                                                                   |

    ##### \`uneval\` (src/index.ts:75:16)

    | Total % |    Total | Callee                 | Location                     |
    | ------: | -------: | ---------------------- | ---------------------------- |
    |   69.4% | 3969.6ms | \`unevalInternal\`       | src/internal/index.ts:25:32  |
    |   29.9% | 1709.1ms | \`createState\`          | src/index.ts:144:21          |
    |    0.0% |    0.5ms | \`unevalObjectInternal\` | src/internal/object.ts:68:30 |
    |    0.0% |    0.1ms | \`traverseObject\`       | src/index.ts:204:26          |

    ##### \`unevalInternal\` (src/internal/index.ts:25:32)

    | Total % |    Total | Callee          | Location                         |
    | ------: | -------: | --------------- | -------------------------------- |
    |   98.4% | 3912.5ms | \`unevalObject\`  | src/internal/object.ts:20:29     |
    |   14.4% |  571.0ms | \`unevalString\`  | src/internal/primitive.ts:133:29 |
    |   10.2% |  404.6ms | \`unevalNumber\`  | src/internal/primitive.ts:12:29  |
    |    1.0% |   39.5ms | \`isObject\`      | src/internal/object.ts:434:25    |
    |    0.1% |    5.5ms | \`unevalBoolean\` | src/internal/primitive.ts:8:30   |

    ##### \`unevalObject\` (src/internal/object.ts:20:29)

    | Total % |    Total | Callee                 | Location                        |
    | ------: | -------: | ---------------------- | ------------------------------- |
    |   99.4% | 3890.7ms | \`unevalObjectInternal\` | src/internal/object.ts:68:30    |
    |    0.0% |    0.9ms | \`unevalArray\`          | src/internal/collection.ts:7:47 |
    |    0.0% |    0.8ms | \`unevalObjectLike\`     | src/internal/object.ts:103:26   |

    ##### \`unevalObjectInternal\` (src/internal/object.ts:68:30)

    | Total % |    Total | Callee                 | Location                        |
    | ------: | -------: | ---------------------- | ------------------------------- |
    |   77.1% | 3000.5ms | \`unevalObjectLike\`     | src/internal/object.ts:103:26   |
    |   44.4% | 1729.2ms | \`unevalArray\`          | src/internal/collection.ts:7:47 |
    |    0.5% |   18.4ms | \`unevalInternal\`       | src/internal/index.ts:25:32     |
    |    0.0% |    0.3ms | \`unevalObjectInternal\` | src/internal/object.ts:68:30    |

    ##### \`unevalObjectLike\` (src/internal/object.ts:103:26)

    | Total % |    Total | Callee                     | Location                      |
    | ------: | -------: | -------------------------- | ----------------------------- |
    |   50.4% | 1513.1ms | \`unevalInternal\`           | src/internal/index.ts:25:32   |
    |   40.0% | 1200.9ms | \`unevalObjectLiteralKey\`   | src/internal/object.ts:384:32 |
    |    0.4% |   13.3ms | \`isRegularDataDescriptor\`  | src/internal/object.ts:287:33 |
    |    0.1% |    2.2ms | \`(anonymous)\`              | src/internal/object.ts:201:30 |
    |    0.0% |    0.9ms | \`isDefaultObjectPrototype\` | src/internal/object.ts:429:41 |

    ##### \`unevalArray\` (src/internal/collection.ts:7:47)

    | Total % |    Total | Callee               | Location                         |
    | ------: | -------: | -------------------- | -------------------------------- |
    |   85.2% | 1474.1ms | \`unevalInternal\`     | src/internal/index.ts:25:32      |
    |    0.1% |    2.6ms | \`unevalObjectAssign\` | src/internal/collection.ts:89:28 |

    ##### \`createState\` (src/index.ts:144:21)

    | Total % |    Total | Callee     | Location            |
    | ------: | -------: | ---------- | ------------------- |
    |   91.0% | 1554.5ms | \`traverse\` | src/index.ts:164:20 |

    ##### \`traverse\` (src/index.ts:164:20)

    | Total % |    Total | Callee           | Location                  |
    | ------: | -------: | ---------------- | ------------------------- |
    |   94.1% | 1462.3ms | \`traverseObject\` | src/index.ts:204:26       |
    |    0.0% |    0.1ms | \`getType\`        | src/internal/type.ts:4:24 |

    ##### \`traverseObject\` (src/index.ts:204:26)

    | Total % |   Total | Callee                     | Location                      |
    | ------: | ------: | -------------------------- | ----------------------------- |
    |   60.5% | 886.0ms | \`traverse\`                 | src/index.ts:164:20           |
    |   14.8% | 216.8ms | \`getType\`                  | src/internal/type.ts:4:24     |
    |    0.1% |   1.2ms | \`traverseObject\`           | src/index.ts:204:26           |
    |    0.0% |   0.5ms | \`isDefaultObjectPrototype\` | src/internal/object.ts:429:41 |

    ##### \`unevalObjectLiteralKey\` (src/internal/object.ts:384:32)

    | Total % |   Total | Callee                                           | Location                    |
    | ------: | ------: | ------------------------------------------------ | --------------------------- |
    |   75.6% | 907.7ms | \`unevalWithoutCustom\`                            | src/internal/index.ts:14:37 |
    |   10.6% | 127.4ms | \`RegExp: ^[$_\\p{ID_Start}][$_\\p{ID_Continue}]*$\` | [unknown]                   |

    ##### \`unevalWithoutCustom\` (src/internal/index.ts:14:37)

    | Total % |   Total | Callee           | Location                    |
    | ------: | ------: | ---------------- | --------------------------- |
    |   42.3% | 383.7ms | \`unevalInternal\` | src/internal/index.ts:25:32 |

    ##### \`unevalString\` (src/internal/primitive.ts:133:29)

    | Total % |   Total | Callee          | Location                         |
    | ------: | ------: | --------------- | -------------------------------- |
    |   90.7% | 517.7ms | \`unevalLiteral\` | src/internal/primitive.ts:139:23 |

    ##### \`sample\` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16)

    | Total % |  Total | Callee         | Location                                                                              |
    | ------: | -----: | -------------- | ------------------------------------------------------------------------------------- |
    |   99.7% | 86.8ms | \`mapHelper\`    | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20   |
    |    0.3% |  0.3ms | \`streamSample\` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2524:22 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    Common call stack: \`uneval\` (src/index.ts:75:16) ← \`(anonymous)\` (scripts/profile.ts:1:1)

    | Self % |    Self | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    |   7.5% | 465.0ms | \`traverseObject\` (src/index.ts:204:26) ← \`traverse\` (164:20) ← \`createState\` (144:21)                                                                                                                                                                                                                                                                                                                                                       |
    |   7.0% | 434.9ms | \`unevalObjectLike\` (src/internal/object.ts:103:26) ← \`unevalObjectInternal\` (68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                               |
    |   5.9% | 365.8ms | \`traverseObject\` (src/index.ts:204:26) ← \`traverse\` (164:20) ← \`traverseObject\` (204:26) ← \`traverse\` (164:20) ← \`createState\` (144:21)                                                                                                                                                                                                                                                                                                     |
    |   4.0% | 245.3ms | \`unevalWithoutCustom\` (src/internal/index.ts:14:37) ← \`unevalObjectLiteralKey\` (src/internal/object.ts:384:32) ← \`unevalObjectLike\` (103:26) ← \`unevalObjectInternal\` (68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32)                                                                                                                                                                                     |
    |   3.9% | 239.1ms | \`unevalObjectInternal\` (src/internal/object.ts:68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                                                             |
    |   3.0% | 185.6ms | \`unevalObjectLike\` (src/internal/object.ts:103:26) ← \`unevalObjectInternal\` (68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32) ← \`unevalObjectLike\` (src/internal/object.ts:103:26) ← \`unevalObjectInternal\` (68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32)                                                                                                               |
    |   2.9% | 177.4ms | \`unevalObjectLike\` (src/internal/object.ts:103:26) ← \`unevalObjectInternal\` (68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32) ← \`unevalArray\` (src/internal/collection.ts:7:47) ← \`unevalObjectInternal\` (src/internal/object.ts:68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32)                                                                                           |
    |   2.8% | 170.3ms | \`unevalArray\` (src/internal/collection.ts:7:47) ← \`unevalObjectInternal\` (src/internal/object.ts:68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32)                                                                                                                                                                                                                                                           |
    |   2.5% | 155.0ms | \`traverse\` (src/index.ts:164:20) ← \`traverseObject\` (204:26) ← \`traverse\` (164:20) ← \`createState\` (144:21)                                                                                                                                                                                                                                                                                                                                 |
    |   2.5% | 154.6ms | \`createState\` (src/index.ts:144:21)                                                                                                                                                                                                                                                                                                                                                                                                         |
    |   2.5% | 152.7ms | \`unevalLiteral\` (src/internal/primitive.ts:139:23) ← \`unevalString\` (133:29) ← \`unevalInternal\` (src/internal/index.ts:25:32) ← \`unevalWithoutCustom\` (14:37) ← \`unevalObjectLiteralKey\` (src/internal/object.ts:384:32) ← \`unevalObjectLike\` (103:26) ← \`unevalObjectInternal\` (68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32)                                                                           |
    |   1.8% | 113.0ms | \`traverseObject\` (src/index.ts:204:26) ← \`traverse\` (164:20) ← \`traverseObject\` (204:26) ← \`traverse\` (164:20) ← \`traverseObject\` (204:26) ← \`traverse\` (164:20) ← \`createState\` (144:21)                                                                                                                                                                                                                                                   |
    |   1.8% | 110.9ms | \`getType\` (src/internal/type.ts:4:24) ← \`traverseObject\` (src/index.ts:204:26) ← \`traverse\` (164:20) ← \`createState\` (144:21)                                                                                                                                                                                                                                                                                                               |
    |   1.8% | 110.8ms | \`unevalObjectInternal\` (src/internal/object.ts:68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32) ← \`unevalObjectLike\` (src/internal/object.ts:103:26) ← \`unevalObjectInternal\` (68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32)                                                                                                                                             |
    |   1.7% | 106.6ms | \`unevalWithoutCustom\` (src/internal/index.ts:14:37) ← \`unevalObjectLiteralKey\` (src/internal/object.ts:384:32) ← \`unevalObjectLike\` (103:26) ← \`unevalObjectInternal\` (68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32) ← \`unevalArray\` (src/internal/collection.ts:7:47) ← \`unevalObjectInternal\` (src/internal/object.ts:68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32) |
    |   1.6% | 100.6ms | \`unevalObjectInternal\` (src/internal/object.ts:68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32) ← \`unevalArray\` (src/internal/collection.ts:7:47) ← \`unevalObjectInternal\` (src/internal/object.ts:68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32)                                                                                                                         |
    |   1.6% |  99.4ms | \`unevalWithoutCustom\` (src/internal/index.ts:14:37) ← \`unevalObjectLiteralKey\` (src/internal/object.ts:384:32) ← \`unevalObjectLike\` (103:26) ← \`unevalObjectInternal\` (68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32) ← \`unevalObjectLike\` (src/internal/object.ts:103:26) ← \`unevalObjectInternal\` (68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32)                     |
    |   1.6% |  96.8ms | \`traverse\` (src/index.ts:164:20) ← \`traverseObject\` (204:26) ← \`traverse\` (164:20) ← \`traverseObject\` (204:26) ← \`traverse\` (164:20) ← \`createState\` (144:21)                                                                                                                                                                                                                                                                               |
    |   1.5% |  92.2ms | \`traverse\` (src/index.ts:164:20) ← \`createState\` (144:21)                                                                                                                                                                                                                                                                                                                                                                                   |
    |   1.4% |  83.4ms | \`unevalNumber\` (src/internal/primitive.ts:12:29) ← \`unevalInternal\` (src/internal/index.ts:25:32) ← \`unevalObjectLike\` (src/internal/object.ts:103:26) ← \`unevalObjectInternal\` (68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32)                                                                                                                                                                           |
    "
  `)
})
