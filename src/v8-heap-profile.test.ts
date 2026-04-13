import { test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { readFixture } from './testing/fixtures.ts'
import { v8HeapProfileToMd } from './v8-heap-profile.ts'

const makeProfile = (head: object, samples: object[]) =>
  JSON.stringify({ head, samples })

const root = (children: object[]) => ({
  callFrame: {
    functionName: `(root)`,
    scriptId: `0`,
    url: ``,
    lineNumber: -1,
    columnNumber: -1,
  },
  selfSize: 0,
  id: 1,
  children,
})

test(`v8HeapProfileToMd merges nodes with the same identity`, () => {
  // `funcB` is called from both `funcA` and funcC`. With identical call frames,
  // they should be merged into one row with combined self size.
  const profile = makeProfile(
    root([
      {
        callFrame: {
          functionName: `funcA`,
          scriptId: `1`,
          url: `file:///project/src/a.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        selfSize: 0,
        id: 2,
        children: [
          {
            callFrame: {
              functionName: `funcB`,
              scriptId: `1`,
              url: `file:///project/src/b.ts`,
              lineNumber: 0,
              columnNumber: 0,
            },
            selfSize: 0,
            id: 4,
            children: [],
          },
        ],
      },
      {
        callFrame: {
          functionName: `funcC`,
          scriptId: `1`,
          url: `file:///project/src/c.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        selfSize: 0,
        id: 3,
        children: [
          {
            callFrame: {
              functionName: `funcB`,
              scriptId: `1`,
              url: `file:///project/src/b.ts`,
              lineNumber: 0,
              columnNumber: 0,
            },
            selfSize: 0,
            id: 5,
            children: [],
          },
        ],
      },
    ]),
    [
      { size: 200, nodeId: 4, ordinal: 1 },
      { size: 200, nodeId: 4, ordinal: 2 },
      { size: 100, nodeId: 5, ordinal: 3 },
    ],
  )

  const markdown = v8HeapProfileToMd(profile, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# Heap profile

    Allocated 500 B over 3 samples (167 B per sample).

    | Category | Total % | Total |
    | -------- | ------- | ----- |
    | ours     | 100.0%  | 500 B |

    ## Hottest functions

    ### Self size

    Functions ranked by bytes allocated directly in the function body, excluding callees.

    | Self % |  Self | Total % | Total | Function | Location     |
    | -----: | ----: | ------: | ----: | -------- | ------------ |
    | 100.0% | 500 B |  100.0% | 500 B | \`funcB\`  | src/b.ts:1:1 |
    |   0.0% |   0 B |   20.0% | 100 B | \`funcC\`  | src/c.ts:1:1 |
    |   0.0% |   0 B |   80.0% | 400 B | \`funcA\`  | src/a.ts:1:1 |

    #### Callers

    Callers ranked by contribution to each function's self size.

    ##### \`funcB\` (src/b.ts:1:1)

    | Self % |  Self | Caller  | Location     |
    | -----: | ----: | ------- | ------------ |
    |  80.0% | 400 B | \`funcA\` | src/a.ts:1:1 |
    |  20.0% | 100 B | \`funcC\` | src/c.ts:1:1 |

    ### Total size

    Functions ranked by total bytes allocated in the function and all its callees.

    | Total % | Total | Self % |  Self | Function | Location     |
    | ------: | ----: | -----: | ----: | -------- | ------------ |
    |  100.0% | 500 B | 100.0% | 500 B | \`funcB\`  | src/b.ts:1:1 |
    |   80.0% | 400 B |   0.0% |   0 B | \`funcA\`  | src/a.ts:1:1 |
    |   20.0% | 100 B |   0.0% |   0 B | \`funcC\`  | src/c.ts:1:1 |

    #### Callees

    Callees ranked by contribution to each function's total size.

    ##### \`funcA\` (src/a.ts:1:1)

    | Total % | Total | Callee  | Location     |
    | ------: | ----: | ------- | ------------ |
    |  100.0% | 400 B | \`funcB\` | src/b.ts:1:1 |

    ##### \`funcC\` (src/c.ts:1:1)

    | Total % | Total | Callee  | Location     |
    | ------: | ----: | ------- | ------------ |
    |  100.0% | 100 B | \`funcB\` | src/b.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by bytes allocated in their top frame.

    | Self % |  Self | Call stack                                      |
    | -----: | ----: | ----------------------------------------------- |
    |  80.0% | 400 B | \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    |  20.0% | 100 B | \`funcB\` (src/b.ts:1:1) ← \`funcC\` (src/c.ts:1:1) |
    "
  `)
})

test(`v8HeapProfileToMd handles anonymous functions`, () => {
  // Two anonymous functions at different lines. They should stay separate nodes
  // and both be labeled `(anonymous)` in the output.
  const profile = makeProfile(
    root([
      {
        callFrame: {
          functionName: ``,
          scriptId: `1`,
          url: `file:///project/src/a.ts`,
          lineNumber: 10,
          columnNumber: 0,
        },
        selfSize: 0,
        id: 2,
        children: [
          {
            callFrame: {
              functionName: ``,
              scriptId: `1`,
              url: `file:///project/src/a.ts`,
              lineNumber: 20,
              columnNumber: 0,
            },
            selfSize: 0,
            id: 3,
            children: [
              {
                callFrame: {
                  functionName: `allocate`,
                  scriptId: `1`,
                  url: `file:///project/src/a.ts`,
                  lineNumber: 30,
                  columnNumber: 0,
                },
                selfSize: 0,
                id: 4,
                children: [],
              },
            ],
          },
        ],
      },
    ]),
    [{ size: 100, nodeId: 4, ordinal: 1 }],
  )

  const markdown = v8HeapProfileToMd(profile, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# Heap profile

    Allocated 100 B over 1 sample (100 B per sample).

    | Category | Total % | Total |
    | -------- | ------- | ----- |
    | ours     | 100.0%  | 100 B |

    ## Hottest functions

    ### Self size

    Functions ranked by bytes allocated directly in the function body, excluding callees.

    | Self % |  Self | Total % | Total | Function      | Location      |
    | -----: | ----: | ------: | ----: | ------------- | ------------- |
    | 100.0% | 100 B |  100.0% | 100 B | \`allocate\`    | src/a.ts:31:1 |
    |   0.0% |   0 B |  100.0% | 100 B | \`(anonymous)\` | src/a.ts:11:1 |
    |   0.0% |   0 B |  100.0% | 100 B | \`(anonymous)\` | src/a.ts:21:1 |

    #### Callers

    Callers ranked by contribution to each function's self size.

    ##### \`allocate\` (src/a.ts:31:1)

    | Self % |  Self | Caller        | Location      |
    | -----: | ----: | ------------- | ------------- |
    | 100.0% | 100 B | \`(anonymous)\` | src/a.ts:21:1 |

    ### Total size

    Functions ranked by total bytes allocated in the function and all its callees.

    | Total % | Total | Self % |  Self | Function      | Location      |
    | ------: | ----: | -----: | ----: | ------------- | ------------- |
    |  100.0% | 100 B |   0.0% |   0 B | \`(anonymous)\` | src/a.ts:11:1 |
    |  100.0% | 100 B |   0.0% |   0 B | \`(anonymous)\` | src/a.ts:21:1 |
    |  100.0% | 100 B | 100.0% | 100 B | \`allocate\`    | src/a.ts:31:1 |

    #### Callees

    Callees ranked by contribution to each function's total size.

    ##### \`(anonymous)\` (src/a.ts:11:1)

    | Total % | Total | Callee        | Location      |
    | ------: | ----: | ------------- | ------------- |
    |  100.0% | 100 B | \`(anonymous)\` | src/a.ts:21:1 |

    ##### \`(anonymous)\` (src/a.ts:21:1)

    | Total % | Total | Callee     | Location      |
    | ------: | ----: | ---------- | ------------- |
    |  100.0% | 100 B | \`allocate\` | src/a.ts:31:1 |

    ## Hottest call stacks

    Call stacks ranked by bytes allocated in their top frame.

    | Self % |  Self | Call stack                                                               |
    | -----: | ----: | ------------------------------------------------------------------------ |
    | 100.0% | 100 B | \`allocate\` (src/a.ts:31:1) ← \`(anonymous)\` (21:1) ← \`(anonymous)\` (11:1) |
    "
  `)
})

test(`v8HeapProfileToMd deduplicates total size for recursive functions`, () => {
  // `funcA` calls itself recursively (two nodes, same identity). Total size
  // should be counted once, not twice.
  const profile = makeProfile(
    root([
      {
        callFrame: {
          functionName: `funcA`,
          scriptId: `1`,
          url: `file:///project/src/a.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        selfSize: 0,
        id: 2,
        children: [
          {
            callFrame: {
              functionName: `funcA`,
              scriptId: `1`,
              url: `file:///project/src/a.ts`,
              lineNumber: 0,
              columnNumber: 0,
            },
            selfSize: 0,
            id: 3,
            children: [],
          },
        ],
      },
    ]),
    [{ size: 100, nodeId: 3, ordinal: 1 }],
  )

  const markdown = v8HeapProfileToMd(profile, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# Heap profile

    Allocated 100 B over 1 sample (100 B per sample).

    | Category | Total % | Total |
    | -------- | ------- | ----- |
    | ours     | 100.0%  | 100 B |

    ## Hottest functions

    ### Self size

    Functions ranked by bytes allocated directly in the function body, excluding callees.

    | Self % |  Self | Total % | Total | Function | Location     |
    | -----: | ----: | ------: | ----: | -------- | ------------ |
    | 100.0% | 100 B |  100.0% | 100 B | \`funcA\`  | src/a.ts:1:1 |

    #### Callers

    Callers ranked by contribution to each function's self size.

    ##### \`funcA\` (src/a.ts:1:1)

    | Self % |  Self | Caller  | Location     |
    | -----: | ----: | ------- | ------------ |
    | 100.0% | 100 B | \`funcA\` | src/a.ts:1:1 |

    ### Total size

    Functions ranked by total bytes allocated in the function and all its callees.

    | Total % | Total | Self % |  Self | Function | Location     |
    | ------: | ----: | -----: | ----: | -------- | ------------ |
    |  100.0% | 100 B | 100.0% | 100 B | \`funcA\`  | src/a.ts:1:1 |

    #### Callees

    Callees ranked by contribution to each function's total size.

    ##### \`funcA\` (src/a.ts:1:1)

    | Total % | Total | Callee  | Location     |
    | ------: | ----: | ------- | ------------ |
    |  100.0% | 100 B | \`funcA\` | src/a.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by bytes allocated in their top frame.

    | Self % |  Self | Call stack                             |
    | -----: | ----: | -------------------------------------- |
    | 100.0% | 100 B | \`funcA\` (src/a.ts:1:1) ← \`funcA\` (1:1) |
    "
  `)
})

test(`v8HeapProfileToMd categorizes own, third-party, and native code`, () => {
  const profile = makeProfile(
    root([
      {
        callFrame: {
          functionName: `ownFunc`,
          scriptId: `1`,
          url: `file:///project/src/index.ts`,
          lineNumber: 0,
          columnNumber: 0,
        },
        selfSize: 0,
        id: 2,
        children: [
          {
            callFrame: {
              functionName: `thirdParty`,
              scriptId: `1`,
              url: `file:///project/node_modules/lib/index.js`,
              lineNumber: 0,
              columnNumber: 0,
            },
            selfSize: 0,
            id: 3,
            children: [
              {
                callFrame: {
                  functionName: `allocate`,
                  scriptId: `1`,
                  url: `file:///project/src/util.ts`,
                  lineNumber: 0,
                  columnNumber: 0,
                },
                selfSize: 0,
                id: 4,
                children: [],
              },
            ],
          },
        ],
      },
    ]),
    [
      { size: 1000, nodeId: 2, ordinal: 1 },
      { size: 500, nodeId: 3, ordinal: 2 },
      { size: 250, nodeId: 4, ordinal: 3 },
    ],
  )

  const markdown = v8HeapProfileToMd(profile, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# Heap profile

    Allocated 1.75 kB over 3 samples (583 B per sample).

    | Category    | Total % | Total   |
    | ----------- | ------- | ------- |
    | ours        | 71.4%   | 1.25 kB |
    | third-party | 28.6%   | 500 B   |

    ## Hottest functions

    ### Self size

    Functions ranked by bytes allocated directly in the function body, excluding callees.

    | Self % |  Self | Total % |   Total | Function     | Location                      |
    | -----: | ----: | ------: | ------: | ------------ | ----------------------------- |
    |  57.1% |  1 kB |  100.0% | 1.75 kB | \`ownFunc\`    | src/index.ts:1:1              |
    |  28.6% | 500 B |   42.9% |   750 B | \`thirdParty\` | node_modules/lib/index.js:1:1 |
    |  14.3% | 250 B |   14.3% |   250 B | \`allocate\`   | src/util.ts:1:1               |

    #### Callers

    Callers ranked by contribution to each function's self size.

    ##### \`thirdParty\` (node_modules/lib/index.js:1:1)

    | Self % |  Self | Caller    | Location         |
    | -----: | ----: | --------- | ---------------- |
    | 100.0% | 500 B | \`ownFunc\` | src/index.ts:1:1 |

    ##### \`allocate\` (src/util.ts:1:1)

    | Self % |  Self | Caller       | Location                      |
    | -----: | ----: | ------------ | ----------------------------- |
    | 100.0% | 250 B | \`thirdParty\` | node_modules/lib/index.js:1:1 |

    ### Total size

    Functions ranked by total bytes allocated in the function and all its callees.

    | Total % |   Total | Self % |  Self | Function     | Location                      |
    | ------: | ------: | -----: | ----: | ------------ | ----------------------------- |
    |  100.0% | 1.75 kB |  57.1% |  1 kB | \`ownFunc\`    | src/index.ts:1:1              |
    |   42.9% |   750 B |  28.6% | 500 B | \`thirdParty\` | node_modules/lib/index.js:1:1 |
    |   14.3% |   250 B |  14.3% | 250 B | \`allocate\`   | src/util.ts:1:1               |

    #### Callees

    Callees ranked by contribution to each function's total size.

    ##### \`ownFunc\` (src/index.ts:1:1)

    | Total % | Total | Callee       | Location                      |
    | ------: | ----: | ------------ | ----------------------------- |
    |   42.9% | 750 B | \`thirdParty\` | node_modules/lib/index.js:1:1 |

    ##### \`thirdParty\` (node_modules/lib/index.js:1:1)

    | Total % | Total | Callee     | Location        |
    | ------: | ----: | ---------- | --------------- |
    |   33.3% | 250 B | \`allocate\` | src/util.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by bytes allocated in their top frame.

    Common call stack: \`ownFunc\` (src/index.ts:1:1)

    | Self % |  Self | Call stack                                                                  |
    | -----: | ----: | --------------------------------------------------------------------------- |
    |  28.6% | 500 B | \`thirdParty\` (node_modules/lib/index.js:1:1)                                |
    |  14.3% | 250 B | \`allocate\` (src/util.ts:1:1) ← \`thirdParty\` (node_modules/lib/index.js:1:1) |
    "
  `)
})

test(`v8HeapProfileToMd with real fixture`, async () => {
  const text = await readFixture(`example.heapprofile`)
  const markdown = v8HeapProfileToMd(text, {
    cwd: `/Users/tomer/Documents/work/code/uneval`,
    topN: 5,
  })
  expect(markdown).toMatchInlineSnapshot(`
    "# Heap profile

    Allocated 4.91 MB over 2,844 samples (1.73 kB per sample).

    | Category          | Total % | Total   |
    | ----------------- | ------- | ------- |
    | native            | 78.9%   | 3.88 MB |
    | IDLE              | 9.3%    | 458 kB  |
    | third-party       | 8.1%    | 400 kB  |
    | ours              | 3.1%    | 152 kB  |
    | BYTECODE_COMPILER | 0.2%    | 12.2 kB |
    | PARSER            | 0.2%    | 10.2 kB |
    | V8 API            | 0.1%    | 4.27 kB |

    ## Hottest functions

    ### Self size

    Functions ranked by bytes allocated directly in the function body, excluding callees.

    | Self % |    Self | Total % |   Total | Function          | Location                                                                          |
    | -----: | ------: | ------: | ------: | ----------------- | --------------------------------------------------------------------------------- |
    |   9.3% |  458 kB |    9.3% |  458 kB | \`(IDLE)\`          | [unknown]                                                                         |
    |   3.0% |  148 kB |    3.2% |  157 kB | \`(anonymous)\`     | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1 |
    |   2.3% |  113 kB |    2.4% |  116 kB | \`js-to-wasm:iii:\` | wasm://wasm/009f676a                                                              |
    |   1.5% | 73.1 kB |    1.5% | 73.1 kB | \`push\`            | [unknown]                                                                         |
    |   1.3% | 65.6 kB |    1.3% | 65.6 kB | \`unevalNumber\`    | src/internal/primitive.ts:12:29                                                   |

    #### Callers

    Callers ranked by contribution to each function's self size.

    ##### \`(anonymous)\` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1)

    | Self % |   Self | Caller | Location  |
    | -----: | -----: | ------ | --------- |
    |  74.4% | 110 kB | \`next\` | [unknown] |

    ##### \`push\` ([unknown])

    | Self % |    Self | Caller             | Location                                                                             |
    | -----: | ------: | ------------------ | ------------------------------------------------------------------------------------ |
    |  38.6% | 28.2 kB | \`unevalObjectLike\` | src/internal/object.ts:103:26                                                        |
    |  34.4% | 25.2 kB | \`wrapper\`          | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3113:9 |

    ##### \`unevalNumber\` (src/internal/primitive.ts:12:29)

    | Self % |    Self | Caller           | Location                    |
    | -----: | ------: | ---------------- | --------------------------- |
    | 100.0% | 65.6 kB | \`unevalInternal\` | src/internal/index.ts:25:32 |

    ### Total size

    Functions ranked by total bytes allocated in the function and all its callees.

    | Total % |   Total | Self % |    Self | Function       | Location                 |
    | ------: | ------: | -----: | ------: | -------------- | ------------------------ |
    |   55.8% | 2.74 MB |   0.1% |  6.3 kB | \`(anonymous)\`  | [unknown]                |
    |   36.1% | 1.77 MB |   0.0% | 1.01 kB | \`tracePromise\` | node:diagnostics_channel |
    |   13.1% |  643 kB |   0.0% | 1.08 kB | \`next\`         | [unknown]                |
    |   10.3% |  507 kB |   0.1% | 2.54 kB | \`(anonymous)\`  | scripts/profile.ts:1:1   |
    |    9.3% |  458 kB |   9.3% |  458 kB | \`(IDLE)\`       | [unknown]                |

    #### Callees

    Callees ranked by contribution to each function's total size.

    ##### \`(anonymous)\` ([unknown])

    | Total % |   Total | Callee                | Location  |
    | ------: | ------: | --------------------- | --------- |
    |    1.8% | 49.9 kB | \`createGlobalConsole\` | [unknown] |

    ##### \`next\` ([unknown])

    | Total % |  Total | Callee        | Location                                                                            |
    | ------: | -----: | ------------- | ----------------------------------------------------------------------------------- |
    |   78.7% | 506 kB | \`(anonymous)\` | scripts/profile.ts:1:1                                                              |
    |   31.7% | 204 kB | \`takeNHelper\` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22 |

    ##### \`(anonymous)\` (scripts/profile.ts:1:1)

    | Total % |  Total | Callee   | Location                                                                              |
    | ------: | -----: | -------- | ------------------------------------------------------------------------------------- |
    |   44.5% | 226 kB | \`uneval\` | src/index.ts:75:16                                                                    |
    |   40.9% | 208 kB | \`sample\` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |

    ## Hottest call stacks

    Call stacks ranked by bytes allocated in their top frame.

    Common call stack: \`(anonymous)\`

    | Self % |    Self | Call stack                                                                                                                                                                                                                                                                                                                                          |
    | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    |  31.7% | 1.56 MB | \`tracePromise\` (node:diagnostics_channel)                                                                                                                                                                                                                                                                                                           |
    |   2.4% |  116 kB | \`js-to-wasm:iii:\` (wasm://wasm/009f676a) ← \`tracePromise\` (node:diagnostics_channel)                                                                                                                                                                                                                                                                |
    |   2.2% |  110 kB | \`(anonymous)\` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1) ← \`next\`                                                                                                                                                                                                                                          |
    |   1.3% | 65.6 kB | \`unevalNumber\` (src/internal/primitive.ts:12:29) ← \`unevalInternal\` (src/internal/index.ts:25:32) ← \`unevalObjectLike\` (src/internal/object.ts:103:26) ← \`unevalObjectInternal\` (68:30) ← \`unevalObject\` (20:29) ← \`unevalInternal\` (src/internal/index.ts:25:32) ← \`uneval\` (src/index.ts:75:16) ← \`(anonymous)\` (scripts/profile.ts:1:1) ← \`next\` |
    |   1.3% | 61.5 kB | \`exec\` ← \`tracePromise\` (node:diagnostics_channel)                                                                                                                                                                                                                                                                                                  |
    "
  `)
})
