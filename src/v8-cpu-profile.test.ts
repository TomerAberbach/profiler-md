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

    Took 0.3ms over 3 samples (100.0µs per sample).

    ## Hottest functions

    ### Self time

    | Self % | Self time | Total % | Total | Function | Location     | Hottest line |
    | -----: | --------: | ------: | ----: | -------- | ------------ | ------------ |
    | 100.0% |     0.3ms |  100.0% | 0.3ms | funcB    | src/b.ts:1:1 | [unknown]    |
    |   0.0% |     0.0ms |   66.7% | 0.2ms | funcA    | src/a.ts:1:1 | [unknown]    |
    |   0.0% |     0.0ms |   33.3% | 0.1ms | funcC    | src/c.ts:1:1 | [unknown]    |

    ### Total time

    | Total % | Total | Self % |  Self | Function | Location     |
    | ------: | ----: | -----: | ----: | -------- | ------------ |
    |  100.0% | 0.3ms | 100.0% | 0.3ms | funcB    | src/b.ts:1:1 |
    |   66.7% | 0.2ms |   0.0% | 0.0ms | funcA    | src/a.ts:1:1 |
    |   33.3% | 0.1ms |   0.0% | 0.0ms | funcC    | src/c.ts:1:1 |

    ## Hottest call paths

    |      % |  Time | Call path                                   |
    | -----: | ----: | ------------------------------------------- |
    |  66.7% | 0.2ms | funcA (src/a.ts:1:1) → funcB (src/b.ts:1:1) |
    |  33.3% | 0.1ms | funcC (src/c.ts:1:1) → funcB (src/b.ts:1:1) |
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

    Took 0.3ms over 3 samples (100.0µs per sample).

    ## Hottest functions

    ### Self time

    | Self % | Self time | Total % | Total | Function | Location     | Hottest line |
    | -----: | --------: | ------: | ----: | -------- | ------------ | ------------ |
    | 100.0% |     0.3ms |  100.0% | 0.3ms | funcB    | src/b.ts:1:1 | 8            |
    |   0.0% |     0.0ms |   66.7% | 0.2ms | funcA    | src/a.ts:1:1 | [unknown]    |
    |   0.0% |     0.0ms |   33.3% | 0.1ms | funcC    | src/c.ts:1:1 | [unknown]    |

    ### Total time

    | Total % | Total | Self % |  Self | Function | Location     |
    | ------: | ----: | -----: | ----: | -------- | ------------ |
    |  100.0% | 0.3ms | 100.0% | 0.3ms | funcB    | src/b.ts:1:1 |
    |   66.7% | 0.2ms |   0.0% | 0.0ms | funcA    | src/a.ts:1:1 |
    |   33.3% | 0.1ms |   0.0% | 0.0ms | funcC    | src/c.ts:1:1 |

    ## Hottest call paths

    |      % |  Time | Call path                                   |
    | -----: | ----: | ------------------------------------------- |
    |  66.7% | 0.2ms | funcA (src/a.ts:1:1) → funcB (src/b.ts:1:1) |
    |  33.3% | 0.1ms | funcC (src/c.ts:1:1) → funcB (src/b.ts:1:1) |
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

    Took 0.1ms over 1 samples (100.0µs per sample).

    ## Hottest functions

    ### Self time

    | Self % | Self time | Total % | Total | Function | Location     | Hottest line |
    | -----: | --------: | ------: | ----: | -------- | ------------ | ------------ |
    | 100.0% |     0.1ms |  100.0% | 0.1ms | funcA    | src/a.ts:1:1 | [unknown]    |

    ### Total time

    | Total % | Total | Self % |  Self | Function | Location     |
    | ------: | ----: | -----: | ----: | -------- | ------------ |
    |  100.0% | 0.1ms | 100.0% | 0.1ms | funcA    | src/a.ts:1:1 |

    ## Hottest call paths

    |      % |  Time | Call path                                   |
    | -----: | ----: | ------------------------------------------- |
    | 100.0% | 0.1ms | funcA (src/a.ts:1:1) → funcA (src/a.ts:1:1) |
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

    Took 0.3ms over 3 samples (100.0µs per sample).

    ## Hottest functions

    ### Self time

    | Self % | Self time | Total % | Total | Function | Location     | Hottest line |
    | -----: | --------: | ------: | ----: | -------- | ------------ | ------------ |
    | 100.0% |     0.3ms |  100.0% | 0.3ms | funcB    | src/b.ts:1:1 | 5            |
    |   0.0% |     0.0ms |   66.7% | 0.2ms | funcA    | src/a.ts:1:1 | [unknown]    |
    |   0.0% |     0.0ms |   33.3% | 0.1ms | funcC    | src/c.ts:1:1 | [unknown]    |

    ### Total time

    | Total % | Total | Self % |  Self | Function | Location     |
    | ------: | ----: | -----: | ----: | -------- | ------------ |
    |  100.0% | 0.3ms | 100.0% | 0.3ms | funcB    | src/b.ts:1:1 |
    |   66.7% | 0.2ms |   0.0% | 0.0ms | funcA    | src/a.ts:1:1 |
    |   33.3% | 0.1ms |   0.0% | 0.0ms | funcC    | src/c.ts:1:1 |

    ## Hottest call paths

    |      % |  Time | Call path                                   |
    | -----: | ----: | ------------------------------------------- |
    |  66.7% | 0.2ms | funcA (src/a.ts:1:1) → funcB (src/b.ts:1:1) |
    |  33.3% | 0.1ms | funcC (src/c.ts:1:1) → funcB (src/b.ts:1:1) |
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

    Took 0.1ms over 1 samples (100.0µs per sample).

    ## Hottest functions

    ### Self time

    | Self % | Self time | Total % | Total | Function    | Location      | Hottest line |
    | -----: | --------: | ------: | ----: | ----------- | ------------- | ------------ |
    | 100.0% |     0.1ms |  100.0% | 0.1ms | (anonymous) | src/a.ts:11:6 | [unknown]    |

    ### Total time

    | Total % | Total | Self % |  Self | Function    | Location      |
    | ------: | ----: | -----: | ----: | ----------- | ------------- |
    |  100.0% | 0.1ms | 100.0% | 0.1ms | (anonymous) | src/a.ts:11:6 |
    "
  `)
})

test(`v8CpuProfileToMd fixture`, async () => {
  const cpuProfile = await readFixture(`example.cpuprofile`)

  const markdown = v8CpuProfileToMd(cpuProfile, {
    cwd: `/Users/tomer/Documents/work/code/uneval`,
    topN: 50,
  })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU Profile

    Took 6176.2ms over 47806 samples (129.2µs per sample).

    ## Hottest functions

    ### Self time

    | Self % | Self time | Total % |    Total | Function                                       | Location                                                                                            | Hottest line |
    | -----: | --------: | ------: | -------: | ---------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------ |
    |  15.6% |   966.3ms |   23.7% | 1464.1ms | traverseObject                                 | src/index.ts:204:26                                                                                 | 210          |
    |  15.0% |   926.9ms |   48.6% | 3001.9ms | unevalObjectLike                               | src/internal/object.ts:103:26                                                                       | 128          |
    |   8.5% |   527.0ms |   63.0% | 3893.0ms | unevalObjectInternal                           | src/internal/object.ts:68:30                                                                        | 78           |
    |   8.5% |   524.1ms |   14.7% |  907.7ms | unevalWithoutCustom                            | src/internal/index.ts:14:37                                                                         | 17           |
    |   8.4% |   517.7ms |    8.4% |  517.7ms | unevalLiteral                                  | src/internal/primitive.ts:139:23                                                                    | 146          |
    |   6.6% |   404.6ms |    6.6% |  404.6ms | unevalNumber                                   | src/internal/primitive.ts:12:29                                                                     | 22           |
    |   6.0% |   372.6ms |   25.2% | 1554.5ms | traverse                                       | src/index.ts:164:20                                                                                 | 178          |
    |   5.8% |   359.6ms |   28.0% | 1730.2ms | unevalArray                                    | src/internal/collection.ts:7:47                                                                     | 86           |
    |   4.3% |   266.6ms |   64.4% | 3978.1ms | unevalInternal                                 | src/internal/index.ts:25:32                                                                         | 33           |
    |   3.5% |   217.0ms |    3.5% |  217.0ms | getType                                        | src/internal/type.ts:4:24                                                                           | 17           |
    |   2.7% |   165.8ms |   19.4% | 1200.9ms | unevalObjectLiteralKey                         | src/internal/object.ts:384:32                                                                       | 406          |
    |   2.5% |   154.6ms |   27.7% | 1709.1ms | createState                                    | src/index.ts:144:21                                                                                 | 332          |
    |   2.1% |   127.4ms |    2.1% |  127.4ms | RegExp: ^[$_\\p{ID_Start}][$_\\p{ID_Continue}]*$ | [native code]                                                                                       | [unknown]    |
    |   1.7% |   106.3ms |    1.7% |  106.3ms | (garbage collector)                            | [native code]                                                                                       | [unknown]    |
    |   1.7% |   104.4ms |    1.7% |  104.4ms | (program)                                      | [native code]                                                                                       | [unknown]    |
    |   0.9% |    53.3ms |    9.2% |  571.0ms | unevalString                                   | src/internal/primitive.ts:133:29                                                                    | 134          |
    |   0.7% |    44.8ms |   63.3% | 3912.5ms | unevalObject                                   | src/internal/object.ts:20:29                                                                        | 25           |
    |   0.7% |    40.9ms |   92.6% | 5720.4ms | uneval                                         | src/index.ts:75:16                                                                                  | 77           |
    |   0.6% |    39.5ms |    0.6% |   39.5ms | isObject                                       | src/internal/object.ts:434:25                                                                       | 436          |
    |   0.3% |    20.5ms |    0.3% |   20.8ms | uniformIntInternal                             | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28   | 11           |
    |   0.2% |    14.3ms |    0.2% |   14.3ms | keyValuePairsToObjectMapper                    | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3928:37               | 3930         |
    |   0.2% |    13.9ms |   94.3% | 5824.7ms | (anonymous)                                    | scripts/profile.ts:1:1                                                                              | 16           |
    |   0.2% |    13.3ms |    0.2% |   13.3ms | isRegularDataDescriptor                        | src/internal/object.ts:287:33                                                                       | 290          |
    |   0.1% |     5.8ms |    0.1% |    5.8ms | safePush                                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:707:18                | 708          |
    |   0.1% |     5.5ms |    0.1% |    5.5ms | unevalBoolean                                  | src/internal/primitive.ts:8:30                                                                      | 10           |
    |   0.1% |     5.0ms |    0.1% |    5.0ms | readSync                                       | node:fs                                                                                             | 731          |
    |   0.1% |     4.7ms |    0.1% |    4.7ms | Module                                         | [native code]                                                                                       | 549          |
    |   0.1% |     3.9ms |    0.1% |    4.7ms | Value                                          | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:323:13                | 323          |
    |   0.1% |     3.5ms |    0.1% |    3.5ms | safeJoin                                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:688:18                | 689          |
    |   0.0% |     3.0ms |    0.0% |    3.0ms | (idle)                                         | [native code]                                                                                       | [unknown]    |
    |   0.0% |     2.6ms |    0.0% |    2.6ms | unevalObjectAssign                             | src/internal/collection.ts:89:28                                                                    | 89           |
    |   0.0% |     2.2ms |    0.0% |    2.2ms | (anonymous)                                    | src/internal/object.ts:201:30                                                                       | 201          |
    |   0.0% |     2.1ms |    0.0% |    2.1ms | build                                          | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:5391:10               | 5391         |
    |   0.0% |     2.1ms |    0.0% |    2.1ms | indexToDouble                                  | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:5868:23               | 5874         |
    |   0.0% |     2.0ms |    0.3% |   20.7ms | generate                                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2868:10               | 2868         |
    |   0.0% |     2.0ms |    1.3% |   81.8ms | safeGenerateForIndex                           | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4070:22               | 4073         |
    |   0.0% |     1.8ms |    0.0% |    2.2ms | computeGenerateRange                           | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2884:22               | 2886         |
    |   0.0% |     1.8ms |    0.0% |    1.8ms | next                                           | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/generator/xorshift128plus.js:12:6 | 21           |
    |   0.0% |     1.7ms |    0.3% |   20.4ms | wasm-function[92]                              | wasm://wasm/009f676a                                                                                | 1            |
    |   0.0% |     1.7ms |    1.3% |   82.7ms | generate                                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10               | 4011         |
    |   0.0% |     1.7ms |    0.4% |   26.9ms | valueMapper                                    | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:474:13                | 476          |
    |   0.0% |     1.6ms |    1.2% |   75.3ms | generate                                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3132:10               | 3136         |
    |   0.0% |     1.5ms |    0.0% |    2.8ms | wasm-function[184]                             | wasm://wasm/009f676a                                                                                | 1            |
    |   0.0% |     1.4ms |    0.0% |    1.4ms | isDefaultObjectPrototype                       | src/internal/object.ts:429:41                                                                       | 430          |
    |   0.0% |     1.4ms |    1.2% |   72.3ms | next                                           | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2973:6                | 2974         |
    |   0.0% |     1.4ms |    0.0% |    2.8ms | tupleWrapper                                   | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1023:22               | 1024         |
    |   0.0% |     1.3ms |    0.1% |    4.0ms | wrapper                                        | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3113:9                | 3118         |
    |   0.0% |     1.3ms |    1.2% |   74.7ms | generate                                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10                | 449          |
    |   0.0% |     1.3ms |    0.8% |   48.3ms | safeGenerateNItems                             | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3104:20               | 3105         |
    |   0.0% |     1.1ms |    0.4% |   22.0ms | uniformInt                                     | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:127:20 | 129          |

    ### Total time

    | Total % |    Total | Self % |    Self | Function                                       | Location                                                                                            |
    | ------: | -------: | -----: | ------: | ---------------------------------------------- | --------------------------------------------------------------------------------------------------- |
    |   94.3% | 5824.7ms |   0.2% |  13.9ms | (anonymous)                                    | scripts/profile.ts:1:1                                                                              |
    |   92.6% | 5720.4ms |   0.7% |  40.9ms | uneval                                         | src/index.ts:75:16                                                                                  |
    |   64.4% | 3978.1ms |   4.3% | 266.6ms | unevalInternal                                 | src/internal/index.ts:25:32                                                                         |
    |   63.3% | 3912.5ms |   0.7% |  44.8ms | unevalObject                                   | src/internal/object.ts:20:29                                                                        |
    |   63.0% | 3893.0ms |   8.5% | 527.0ms | unevalObjectInternal                           | src/internal/object.ts:68:30                                                                        |
    |   48.6% | 3001.9ms |  15.0% | 926.9ms | unevalObjectLike                               | src/internal/object.ts:103:26                                                                       |
    |   28.0% | 1730.2ms |   5.8% | 359.6ms | unevalArray                                    | src/internal/collection.ts:7:47                                                                     |
    |   27.7% | 1709.1ms |   2.5% | 154.6ms | createState                                    | src/index.ts:144:21                                                                                 |
    |   25.2% | 1554.5ms |   6.0% | 372.6ms | traverse                                       | src/index.ts:164:20                                                                                 |
    |   23.7% | 1464.1ms |  15.6% | 966.3ms | traverseObject                                 | src/index.ts:204:26                                                                                 |
    |   19.4% | 1200.9ms |   2.7% | 165.8ms | unevalObjectLiteralKey                         | src/internal/object.ts:384:32                                                                       |
    |   14.7% |  907.7ms |   8.5% | 524.1ms | unevalWithoutCustom                            | src/internal/index.ts:14:37                                                                         |
    |    9.2% |  571.0ms |   0.9% |  53.3ms | unevalString                                   | src/internal/primitive.ts:133:29                                                                    |
    |    8.4% |  517.7ms |   8.4% | 517.7ms | unevalLiteral                                  | src/internal/primitive.ts:139:23                                                                    |
    |    6.6% |  404.6ms |   6.6% | 404.6ms | unevalNumber                                   | src/internal/primitive.ts:12:29                                                                     |
    |    3.5% |  217.0ms |   3.5% | 217.0ms | getType                                        | src/internal/type.ts:4:24                                                                           |
    |    2.1% |  127.4ms |   2.1% | 127.4ms | RegExp: ^[$_\\p{ID_Start}][$_\\p{ID_Continue}]*$ | [native code]                                                                                       |
    |    1.7% |  106.3ms |   1.7% | 106.3ms | (garbage collector)                            | [native code]                                                                                       |
    |    1.7% |  104.4ms |   1.7% | 104.4ms | (program)                                      | [native code]                                                                                       |
    |    1.4% |   87.1ms |   0.0% |   0.0ms | sample                                         | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16               |
    |    1.4% |   86.8ms |   0.0% |   0.3ms | mapHelper                                      | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20                 |
    |    1.4% |   86.5ms |   0.0% |   0.6ms | takeNHelper                                    | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22                 |
    |    1.4% |   86.0ms |   0.0% |   0.0ms | toss                                           | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2274:15               |
    |    1.4% |   85.8ms |   0.0% |   0.2ms | tossNext                                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2269:18               |
    |    1.4% |   84.4ms |   0.0% |   0.0ms | tracePromise                                   | node:diagnostics_channel                                                                            |
    |    1.3% |   83.1ms |   0.0% |   0.4ms | generate                                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1282:10               |
    |    1.3% |   82.7ms |   0.0% |   1.7ms | generate                                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10               |
    |    1.3% |   81.8ms |   0.0% |   2.0ms | safeGenerateForIndex                           | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4070:22               |
    |    1.3% |   79.7ms |   0.0% |   0.5ms | generate                                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:6919:10               |
    |    1.2% |   75.3ms |   0.0% |   1.6ms | generate                                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3132:10               |
    |    1.2% |   74.7ms |   0.0% |   1.3ms | generate                                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10                |
    |    1.2% |   72.3ms |   0.0% |   1.4ms | next                                           | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2973:6                |
    |    1.0% |   60.0ms |   0.0% |   0.9ms | generate                                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1060:10               |
    |    1.0% |   58.7ms |   0.0% |   0.5ms | safeGenerateNItemsNoDuplicates                 | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3088:32               |
    |    0.9% |   58.2ms |   0.0% |   0.4ms | generateNItemsNoDuplicates                     | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3077:28               |
    |    0.8% |   48.3ms |   0.0% |   1.3ms | safeGenerateNItems                             | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3104:20               |
    |    0.8% |   47.7ms |   0.0% |   0.6ms | generateNItems                                 | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3097:16               |
    |    0.6% |   39.5ms |   0.6% |  39.5ms | isObject                                       | src/internal/object.ts:434:25                                                                       |
    |    0.4% |   26.9ms |   0.0% |   1.7ms | valueMapper                                    | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:474:13                |
    |    0.4% |   24.2ms |   0.0% |   0.5ms | mapperWithCloneIfNeeded                        | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:468:25                |
    |    0.4% |   22.6ms |   0.0% |   0.7ms | nextInt                                        | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2237:9                |
    |    0.4% |   22.0ms |   0.0% |   1.1ms | uniformInt                                     | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:127:20 |
    |    0.3% |   21.4ms |   0.0% |   0.8ms | js-to-wasm                                     | [native code]                                                                                       |
    |    0.3% |   20.8ms |   0.0% |   0.4ms | wasm-function[2783]                            | wasm://wasm/009f676a                                                                                |
    |    0.3% |   20.8ms |   0.3% |  20.5ms | uniformIntInternal                             | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28   |
    |    0.3% |   20.7ms |   0.0% |   2.0ms | generate                                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2868:10               |
    |    0.3% |   20.4ms |   0.0% |   1.7ms | wasm-function[92]                              | wasm://wasm/009f676a                                                                                |
    |    0.2% |   15.2ms |   0.0% |   0.4ms | wasm-function[63]                              | wasm://wasm/009f676a                                                                                |
    |    0.2% |   14.3ms |   0.2% |  14.3ms | keyValuePairsToObjectMapper                    | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3928:37               |
    |    0.2% |   13.3ms |   0.2% |  13.3ms | isRegularDataDescriptor                        | src/internal/object.ts:287:33                                                                       |

    ## Hottest call paths

    |      % |    Time | Call path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    |   9.9% | 614.0ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26)                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    |   7.5% | 465.0ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → createState (src/index.ts:144:21) → traverse (src/index.ts:164:20) → traverseObject (204:26)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    |   5.9% | 365.8ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → createState (src/index.ts:144:21) → traverse (src/index.ts:164:20) → traverseObject (204:26) → traverse (164:20) → traverseObject (204:26)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    |   4.9% | 305.2ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalObjectLiteralKey (384:32) → RegExp: ^[$_\\p{ID_Start}][$_\\p{ID_Continue}]*$ ([native code])                                                                                                                                                                                                                                                                                                                                            |
    |   4.3% | 266.4ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → createState (src/index.ts:144:21) → traverse (src/index.ts:164:20) → traverseObject (204:26) → getType (src/internal/type.ts:4:24)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
    |   4.3% | 262.7ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalObjectLike (src/internal/object.ts:103:26)                                                                                                                                                                                                                                                                                       |
    |   4.0% | 245.8ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26)                                                                                                                                                                                                                                                                   |
    |   3.9% | 239.9ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    |   2.9% | 179.1ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → createState (src/index.ts:144:21)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    |   2.8% | 175.0ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → createState (src/index.ts:144:21) → traverse (src/index.ts:164:20) → traverseObject (204:26) → traverse (164:20) → traverseObject (204:26) → traverse (164:20)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    |   2.5% | 152.7ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalObjectLiteralKey (384:32) → unevalWithoutCustom (src/internal/index.ts:14:37) → unevalInternal (src/internal/index.ts:25:32) → unevalString (src/internal/primitive.ts:133:29) → unevalLiteral (src/internal/primitive.ts:139:23)                                                                                                                                                                                                     |
    |   2.1% | 131.8ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                                                                                                                                                |
    |   2.1% | 130.7ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalObjectLiteralKey (384:32) → unevalWithoutCustom (src/internal/index.ts:14:37)                                                                                                                                                                             |
    |   2.0% | 125.7ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalObjectLiteralKey (384:32) → unevalWithoutCustom (src/internal/index.ts:14:37)                                                                                                                                                                                                 |
    |   1.8% | 113.1ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → createState (src/index.ts:144:21) → traverse (src/index.ts:164:20) → traverseObject (204:26) → traverse (164:20) → traverseObject (204:26) → traverse (164:20) → traverseObject (204:26)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    |   1.8% | 111.0ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30)                                                                                                                                                                                                                                                                                                                                          |
    |   1.7% | 107.0ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalBoolean (src/internal/primitive.ts:8:30)                                                                                                                                                                                                                                                                                                                                               |
    |   1.7% | 103.1ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalString (src/internal/primitive.ts:133:29)                                                                                                                                                                                                                                                                                                                                                 |
    |   1.6% | 101.1ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30)                                                                                                                                                                                                                                                                                                                      |
    |   1.5% |  92.2ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → createState (src/index.ts:144:21) → traverse (src/index.ts:164:20)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
    |   1.1% |  68.0ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalObjectLiteralKey (384:32) → unevalWithoutCustom (src/internal/index.ts:14:37) → unevalInternal (src/internal/index.ts:25:32) → unevalString (src/internal/primitive.ts:133:29) → unevalLiteral (src/internal/primitive.ts:139:23)                                             |
    |   1.0% |  63.9ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalObjectLiteralKey (384:32) → unevalWithoutCustom (src/internal/index.ts:14:37) → unevalInternal (src/internal/index.ts:25:32) → unevalString (src/internal/primitive.ts:133:29) → unevalLiteral (src/internal/primitive.ts:139:23)                         |
    |   1.0% |  60.9ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32)                                                                                                                                                                                                                                        |
    |   1.0% |  59.1ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32)                                                                                                                                                                                                                    |
    |   0.8% |  50.4ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalNumber (src/internal/primitive.ts:12:29)                                                                                                                                                                   |
    |   0.8% |  50.4ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalString (src/internal/primitive.ts:133:29)                                                                                                                                                                                         |
    |   0.8% |  48.1ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → createState (src/index.ts:144:21) → traverse (src/index.ts:164:20) → traverseObject (204:26) → traverse (164:20) → traverseObject (204:26) → traverse (164:20) → traverseObject (204:26) → getType (src/internal/type.ts:4:24)                                                                                                                                                                                                                                                                                                                                                                                                                    |
    |   0.8% |  47.3ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    |   0.8% |  46.4ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → isObject (434:25)                                                                                                                                                                                                                    |
    |   0.7% |  45.2ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47)                                                                                                              |
    |   0.7% |  43.1ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalString (src/internal/primitive.ts:133:29) → unevalLiteral (src/internal/primitive.ts:139:23)                                                                                                                                                                                                                                                                                              |
    |   0.7% |  42.2ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
    |   0.7% |  40.6ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalString (src/internal/primitive.ts:133:29)                                                                                                                                                                     |
    |   0.6% |  39.7ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                                                                                                                                                   |
    |   0.6% |  38.8ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalArray (src/internal/collection.ts:7:47)                                                                                                              |
    |   0.6% |  38.0ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26)                                                                                       |
    |   0.6% |  34.5ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalObjectLike (src/internal/object.ts:103:26)                                                                                                                               |
    |   0.5% |  33.0ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalString (src/internal/primitive.ts:133:29) → unevalLiteral (src/internal/primitive.ts:139:23)                                                                                                                                                                                                                                                                                           |
    |   0.4% |  25.3ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalObjectLiteralKey (384:32) → unevalWithoutCustom (src/internal/index.ts:14:37)                     |
    |   0.4% |  21.7ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalString (src/internal/primitive.ts:133:29) → unevalLiteral (src/internal/primitive.ts:139:23)                                                                                                                                   |
    |   0.3% |  20.5ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalString (src/internal/primitive.ts:133:29) → unevalLiteral (src/internal/primitive.ts:139:23)                                                                                                                                      |
    |   0.3% |  19.3ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32)                                                                                                                                                                                                                       |
    |   0.3% |  19.0ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32)                                                                                                                                                                                                                                           |
    |   0.3% |  18.8ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalObjectLiteralKey (384:32) → unevalWithoutCustom (src/internal/index.ts:14:37) |
    |   0.3% |  17.9ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30)                                                                                                                                                              |
    |   0.3% |  17.8ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalObjectLiteralKey (384:32) → unevalWithoutCustom (src/internal/index.ts:14:37)                     |
    |   0.3% |  17.6ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalObjectLiteralKey (384:32) → unevalWithoutCustom (src/internal/index.ts:14:37)                                         |
    |   0.3% |  17.3ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → createState (src/index.ts:144:21) → traverse (src/index.ts:164:20) → traverseObject (204:26) → traverse (164:20) → traverseObject (204:26) → traverse (164:20) → traverseObject (204:26) → traverse (164:20) → traverseObject (204:26)                                                                                                                                                                                                                                                                                                                                                                                                            |
    |   0.3% |  17.3ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalArray (src/internal/collection.ts:7:47) → unevalInternal (src/internal/index.ts:25:32) → unevalString (src/internal/primitive.ts:133:29) → unevalLiteral (src/internal/primitive.ts:139:23)                                                                                                                  |
    |   0.3% |  15.7ms | (anonymous) (scripts/profile.ts:1:1) → uneval (src/index.ts:75:16) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (src/internal/object.ts:20:29) → unevalObjectInternal (src/internal/object.ts:68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30) → unevalObjectLike (src/internal/object.ts:103:26) → unevalInternal (src/internal/index.ts:25:32) → unevalObject (20:29) → unevalObjectInternal (68:30)                                                                                                                                                                                  |
    "
  `)
})
