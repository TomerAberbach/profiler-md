/* eslint-disable no-irregular-whitespace */

import { test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { defaultIncludeEntry } from '../../../options.ts'
import { diffMd } from '../../../testing/fixtures.ts'
import { v8HeapProfileToMd } from './index.ts'

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

    Allocated 500 B over 3 samples (167 B per sample).

    | Category |      % |  Size | Samples |
    | -------- | -----: | ----: | ------: |
    | ours     | 100.0% | 500 B |       3 |

    ## Hottest functions

    ### Self size

    Functions ranked by bytes allocated directly in the function body, excluding callees.

    |      % |  Size | Samples | Function | Location     |
    | -----: | ----: | ------: | -------- | ------------ |
    | 100.0% | 500 B |       3 | \`funcB\`  | src/b.ts:1:1 |

    #### Callers

    Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

    ##### \`funcB\` (src/b.ts:1:1)

    |     % |  Size | Samples | Caller  | Location     |
    | ----: | ----: | ------: | ------- | ------------ |
    | 80.0% | 400 B |       2 | \`funcA\` | src/a.ts:1:1 |
    | 20.0% | 100 B |       1 | \`funcC\` | src/c.ts:1:1 |

    ### Total size

    Functions ranked by total bytes allocated in the function and all its callees.

    |      % |  Size | Samples | Function | Location     |
    | -----: | ----: | ------: | -------- | ------------ |
    | 100.0% | 500 B |       3 | \`funcB\`  | src/b.ts:1:1 |
    |  80.0% | 400 B |       2 | \`funcA\`  | src/a.ts:1:1 |
    |  20.0% | 100 B |       1 | \`funcC\`  | src/c.ts:1:1 |

    #### Callees

    Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

    ##### \`funcA\` (src/a.ts:1:1)

    |      % |  Size | Samples | Callee  | Location     |
    | -----: | ----: | ------: | ------- | ------------ |
    | 100.0% | 400 B |       2 | \`funcB\` | src/b.ts:1:1 |

    ##### \`funcC\` (src/c.ts:1:1)

    |      % |  Size | Samples | Callee  | Location     |
    | -----: | ----: | ------: | ------- | ------------ |
    | 100.0% | 100 B |       1 | \`funcB\` | src/b.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by bytes allocated in their top frame.

    |     % |  Size | Samples | Call stack                                      |
    | ----: | ----: | ------: | ----------------------------------------------- |
    | 80.0% | 400 B |       2 | \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    | 20.0% | 100 B |       1 | \`funcB\` (src/b.ts:1:1) ← \`funcC\` (src/c.ts:1:1) |
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

    Allocated 100 B over 1 sample (100 B per sample).

    | Category |      % |  Size | Samples |
    | -------- | -----: | ----: | ------: |
    | ours     | 100.0% | 100 B |       1 |

    ## Hottest functions

    ### Self size

    Functions ranked by bytes allocated directly in the function body, excluding callees.

    |      % |  Size | Samples | Function   | Location      |
    | -----: | ----: | ------: | ---------- | ------------- |
    | 100.0% | 100 B |       1 | \`allocate\` | src/a.ts:31:1 |

    #### Callers

    Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

    ##### \`allocate\` (src/a.ts:31:1)

    |      % |  Size | Samples | Caller        | Location      |
    | -----: | ----: | ------: | ------------- | ------------- |
    | 100.0% | 100 B |       1 | \`(anonymous)\` | src/a.ts:21:1 |

    ### Total size

    Functions ranked by total bytes allocated in the function and all its callees.

    |      % |  Size | Samples | Function      | Location      |
    | -----: | ----: | ------: | ------------- | ------------- |
    | 100.0% | 100 B |       1 | \`allocate\`    | src/a.ts:31:1 |
    | 100.0% | 100 B |       1 | \`(anonymous)\` | src/a.ts:21:1 |
    | 100.0% | 100 B |       1 | \`(anonymous)\` | src/a.ts:11:1 |

    #### Callees

    Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

    ##### \`(anonymous)\` (src/a.ts:21:1)

    |      % |  Size | Samples | Callee     | Location      |
    | -----: | ----: | ------: | ---------- | ------------- |
    | 100.0% | 100 B |       1 | \`allocate\` | src/a.ts:31:1 |

    ##### \`(anonymous)\` (src/a.ts:11:1)

    |      % |  Size | Samples | Callee        | Location      |
    | -----: | ----: | ------: | ------------- | ------------- |
    | 100.0% | 100 B |       1 | \`(anonymous)\` | src/a.ts:21:1 |

    ## Hottest call stacks

    Call stacks ranked by bytes allocated in their top frame.

    |      % |  Size | Samples | Call stack                                                               |
    | -----: | ----: | ------: | ------------------------------------------------------------------------ |
    | 100.0% | 100 B |       1 | \`allocate\` (src/a.ts:31:1) ← \`(anonymous)\` (21:1) ← \`(anonymous)\` (11:1) |
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

    Allocated 100 B over 1 sample (100 B per sample).

    | Category |      % |  Size | Samples |
    | -------- | -----: | ----: | ------: |
    | ours     | 100.0% | 100 B |       1 |

    ## Hottest functions

    ### Self size

    Functions ranked by bytes allocated directly in the function body, excluding callees.

    |      % |  Size | Samples | Function | Location     |
    | -----: | ----: | ------: | -------- | ------------ |
    | 100.0% | 100 B |       1 | \`funcA\`  | src/a.ts:1:1 |

    #### Callers

    Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

    ##### \`funcA\` (src/a.ts:1:1)

    |      % |  Size | Samples | Caller  | Location     |
    | -----: | ----: | ------: | ------- | ------------ |
    | 100.0% | 100 B |       1 | \`funcA\` | src/a.ts:1:1 |

    ### Total size

    Functions ranked by total bytes allocated in the function and all its callees.

    |      % |  Size | Samples | Function | Location     |
    | -----: | ----: | ------: | -------- | ------------ |
    | 100.0% | 100 B |       1 | \`funcA\`  | src/a.ts:1:1 |

    #### Callees

    Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

    ##### \`funcA\` (src/a.ts:1:1)

    |      % |  Size | Samples | Callee  | Location     |
    | -----: | ----: | ------: | ------- | ------------ |
    | 100.0% | 100 B |       1 | \`funcA\` | src/a.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by bytes allocated in their top frame.

    |      % |  Size | Samples | Call stack                             |
    | -----: | ----: | ------: | -------------------------------------- |
    | 100.0% | 100 B |       1 | \`funcA\` (src/a.ts:1:1) ← \`funcA\` (1:1) |
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

    Allocated 1.75 kB over 3 samples (583 B per sample).

    | Category    |     % |    Size | Samples |
    | ----------- | ----: | ------: | ------: |
    | ours        | 71.4% | 1.25 kB |       2 |
    | third-party | 28.6% |   500 B |       1 |

    ## Hottest functions

    ### Self size

    Functions ranked by bytes allocated directly in the function body, excluding callees.

    |     % |  Size | Samples | Function     | Location                      |
    | ----: | ----: | ------: | ------------ | ----------------------------- |
    | 57.1% |  1 kB |       1 | \`ownFunc\`    | src/index.ts:1:1              |
    | 28.6% | 500 B |       1 | \`thirdParty\` | node_modules/lib/index.js:1:1 |
    | 14.3% | 250 B |       1 | \`allocate\`   | src/util.ts:1:1               |

    #### Callers

    Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

    ##### \`thirdParty\` (node_modules/lib/index.js:1:1)

    |      % |  Size | Samples | Caller    | Location         |
    | -----: | ----: | ------: | --------- | ---------------- |
    | 100.0% | 500 B |       1 | \`ownFunc\` | src/index.ts:1:1 |

    ##### \`allocate\` (src/util.ts:1:1)

    |      % |  Size | Samples | Caller       | Location                      |
    | -----: | ----: | ------: | ------------ | ----------------------------- |
    | 100.0% | 250 B |       1 | \`thirdParty\` | node_modules/lib/index.js:1:1 |

    ### Total size

    Functions ranked by total bytes allocated in the function and all its callees.

    |      % |    Size | Samples | Function     | Location                      |
    | -----: | ------: | ------: | ------------ | ----------------------------- |
    | 100.0% | 1.75 kB |       3 | \`ownFunc\`    | src/index.ts:1:1              |
    |  42.9% |   750 B |       2 | \`thirdParty\` | node_modules/lib/index.js:1:1 |
    |  14.3% |   250 B |       1 | \`allocate\`   | src/util.ts:1:1               |

    #### Callees

    Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

    ##### \`ownFunc\` (src/index.ts:1:1)

    |     % |  Size | Samples | Callee       | Location                      |
    | ----: | ----: | ------: | ------------ | ----------------------------- |
    | 42.9% | 750 B |       2 | \`thirdParty\` | node_modules/lib/index.js:1:1 |

    ##### \`thirdParty\` (node_modules/lib/index.js:1:1)

    |     % |  Size | Samples | Callee     | Location        |
    | ----: | ----: | ------: | ---------- | --------------- |
    | 33.3% | 250 B |       1 | \`allocate\` | src/util.ts:1:1 |

    ## Hottest call stacks

    Call stacks ranked by bytes allocated in their top frame.

    Common call stack: \`ownFunc\` (src/index.ts:1:1)

    |     % |  Size | Samples | Call stack                                                                  |
    | ----: | ----: | ------: | --------------------------------------------------------------------------- |
    | 28.6% | 500 B |       1 | \`thirdParty\` (node_modules/lib/index.js:1:1)                                |
    | 14.3% | 250 B |       1 | \`allocate\` (src/util.ts:1:1) ← \`thirdParty\` (node_modules/lib/index.js:1:1) |
    "
  `)
})

// Shared profile for all diffing tests:
//   root -> funcA (1 sample, 100 B direct) -> funcB -> funcC (2 samples, 200 B each)
//   root -> readFileSync (node:fs) -> internalLoader (node:internal/, 1 sample, 100 B)
const baseProfile = makeProfile(
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
          id: 3,
          children: [
            {
              callFrame: {
                functionName: `funcC`,
                scriptId: `1`,
                url: `file:///project/src/c.ts`,
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
    {
      callFrame: {
        functionName: `readFileSync`,
        scriptId: `0`,
        url: `node:fs`,
        lineNumber: 0,
        columnNumber: 0,
      },
      selfSize: 0,
      id: 5,
      children: [
        {
          callFrame: {
            functionName: `internalLoader`,
            scriptId: `0`,
            url: `node:internal/modules/esm/loader`,
            lineNumber: 0,
            columnNumber: 0,
          },
          selfSize: 0,
          id: 6,
          children: [],
        },
      ],
    },
  ]),
  [
    { size: 100, nodeId: 2, ordinal: 1 },
    { size: 200, nodeId: 4, ordinal: 2 },
    { size: 200, nodeId: 4, ordinal: 3 },
    { size: 100, nodeId: 6, ordinal: 4 },
  ],
)
const baseMd = v8HeapProfileToMd(baseProfile, { cwd: `/project` })

test(`v8HeapProfileToMd excludes frames from display when includeCallFrame returns false`, () => {
  // `funcB` is excluded via `includeCallFrame`. Its self size is zero but it is
  // in `funcC`'s call stack. `funcA`'s total still includes `funcC`'s
  // allocation because metrics are not affected by `includeCallFrame`. `funcC`'s
  // callers section is omitted because its only direct caller (`funcB`) is
  // excluded. The call stack shows `funcC <- funcA` with `funcB` removed.
  const markdown = v8HeapProfileToMd(baseProfile, {
    cwd: `/project`,
    includeEntry: row => defaultIncludeEntry(row) && row.name !== `funcB`,
  })

  expect(diffMd(baseMd, markdown)).toMatchInlineSnapshot(`
    "--- base
    +++ modified
    @@ -21,10 +20,0 @@
    -#### Callers
    -
    -Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.
    -
    -##### \`funcC\` (src/c.ts:1:1)
    -
    -|      % |  Size | Samples | Caller  | Location     |
    -| -----: | ----: | ------: | ------- | ------------ |
    -| 100.0% | 400 B |       2 | \`funcB\` | src/b.ts:1:1 |
    -
    @@ -39,1 +28,0 @@
    -| 66.7% | 400 B |       2 | \`funcB\`        | src/b.ts:1:1 |
    @@ -42,16 +30,0 @@
    -#### Callees
    -
    -Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.
    -
    -##### \`funcA\` (src/a.ts:1:1)
    -
    -|     % |  Size | Samples | Callee  | Location     |
    -| ----: | ----: | ------: | ------- | ------------ |
    -| 80.0% | 400 B |       2 | \`funcB\` | src/b.ts:1:1 |
    -
    -##### \`funcB\` (src/b.ts:1:1)
    -
    -|      % |  Size | Samples | Callee  | Location     |
    -| -----: | ----: | ------: | ------- | ------------ |
    -| 100.0% | 400 B |       2 | \`funcC\` | src/c.ts:1:1 |
    -
    @@ -62,3 +35,3 @@
    -|     % |  Size | Samples | Call stack                                                               |
    -| ----: | ----: | ------: | ------------------------------------------------------------------------ |
    -| 66.7% | 400 B |       2 | \`funcC\` (src/c.ts:1:1) ← \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    +|     % |  Size | Samples | Call stack                                      |
    +| ----: | ----: | ------: | ----------------------------------------------- |
    +| 66.7% | 400 B |       2 | \`funcC\` (src/c.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    "
  `)
})

test(`v8HeapProfileToMd filters node:internal/ frames by default`, () => {
  // `node:internal/` frames are excluded from display by default.
  // Their allocations still count toward the category summary (as `native`).
  // The `node:fs` frame (non-internal Node built-in) is NOT filtered.
  // Diff is vs. a baseline that shows all frames (includeCallFrame: () => true).
  const allFrames = v8HeapProfileToMd(baseProfile, {
    cwd: `/project`,
    includeEntry: () => true,
  })

  expect(diffMd(allFrames, baseMd)).toMatchInlineSnapshot(`
    "--- base
    +++ modified
    @@ -16,5 +16,4 @@
    -|     % |  Size | Samples | Function         | Location                             |
    -| ----: | ----: | ------: | ---------------- | ------------------------------------ |
    -| 66.7% | 400 B |       2 | \`funcC\`          | src/c.ts:1:1                         |
    -| 16.7% | 100 B |       1 | \`funcA\`          | src/a.ts:1:1                         |
    -| 16.7% | 100 B |       1 | \`internalLoader\` | node:internal/modules/esm/loader:1:1 |
    +|     % |  Size | Samples | Function | Location     |
    +| ----: | ----: | ------: | -------- | ------------ |
    +| 66.7% | 400 B |       2 | \`funcC\`  | src/c.ts:1:1 |
    +| 16.7% | 100 B |       1 | \`funcA\`  | src/a.ts:1:1 |
    @@ -32,12 +30,0 @@
    -##### \`funcA\` (src/a.ts:1:1)
    -
    -|      % |  Size | Samples | Caller   | Location   |
    -| -----: | ----: | ------: | -------- | ---------- |
    -| 100.0% | 100 B |       1 | \`(root)\` | \`<native>\` |
    -
    -##### \`internalLoader\` (node:internal/modules/esm/loader:1:1)
    -
    -|      % |  Size | Samples | Caller         | Location    |
    -| -----: | ----: | ------: | -------------- | ----------- |
    -| 100.0% | 100 B |       1 | \`readFileSync\` | node:fs:1:1 |
    -
    @@ -48,8 +35,6 @@
    -|      % |  Size | Samples | Function         | Location                             |
    -| -----: | ----: | ------: | ---------------- | ------------------------------------ |
    -| 100.0% | 600 B |       4 | \`(root)\`         | \`<native>\`                           |
    -|  83.3% | 500 B |       3 | \`funcA\`          | src/a.ts:1:1                         |
    -|  66.7% | 400 B |       2 | \`funcC\`          | src/c.ts:1:1                         |
    -|  66.7% | 400 B |       2 | \`funcB\`          | src/b.ts:1:1                         |
    -|  16.7% | 100 B |       1 | \`internalLoader\` | node:internal/modules/esm/loader:1:1 |
    -|  16.7% | 100 B |       1 | \`readFileSync\`   | node:fs:1:1                          |
    +|     % |  Size | Samples | Function       | Location     |
    +| ----: | ----: | ------: | -------------- | ------------ |
    +| 83.3% | 500 B |       3 | \`funcA\`        | src/a.ts:1:1 |
    +| 66.7% | 400 B |       2 | \`funcC\`        | src/c.ts:1:1 |
    +| 66.7% | 400 B |       2 | \`funcB\`        | src/b.ts:1:1 |
    +| 16.7% | 100 B |       1 | \`readFileSync\` | node:fs:1:1  |
    @@ -61,7 +45,0 @@
    -##### \`(root)\` (\`<native>\`)
    -
    -|     % |  Size | Samples | Callee         | Location     |
    -| ----: | ----: | ------: | -------------- | ------------ |
    -| 83.3% | 500 B |       3 | \`funcA\`        | src/a.ts:1:1 |
    -| 16.7% | 100 B |       1 | \`readFileSync\` | node:fs:1:1  |
    -
    @@ -80,6 +57,0 @@
    -##### \`readFileSync\` (node:fs:1:1)
    -
    -|      % |  Size | Samples | Callee           | Location                             |
    -| -----: | ----: | ------: | ---------------- | ------------------------------------ |
    -| 100.0% | 100 B |       1 | \`internalLoader\` | node:internal/modules/esm/loader:1:1 |
    -
    @@ -90,7 +62,3 @@
    -Common call stack: \`(root)\`
    -
    -|     % |  Size | Samples | Call stack                                                                             |
    -| ----: | ----: | ------: | -------------------------------------------------------------------------------------- |
    -| 66.7% | 400 B |       2 | \`funcC\` (src/c.ts:1:1) ← \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1)               |
    -| 16.7% | 100 B |       1 | \`funcA\` (src/a.ts:1:1)                                                                 |
    -| 16.7% | 100 B |       1 | \`internalLoader\` (node:internal/modules/esm/loader:1:1) ← \`readFileSync\` (node:fs:1:1) |
    +|     % |  Size | Samples | Call stack                                                               |
    +| ----: | ----: | ------: | ------------------------------------------------------------------------ |
    +| 66.7% | 400 B |       2 | \`funcC\` (src/c.ts:1:1) ← \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    "
  `)
})

test(`v8HeapProfileToMd categorizes sentinel and RegExp functions`, () => {
  // Sentinel functions like `(garbage collector)` and `(program)` have no URL.
  // Their category is their name without the surrounding parentheses.
  // Functions starting with `RegExp: ` are categorized as `regexp`.
  const profile = makeProfile(
    root([
      {
        callFrame: {
          functionName: `(garbage collector)`,
          scriptId: `0`,
          url: ``,
          lineNumber: -1,
          columnNumber: -1,
        },
        selfSize: 0,
        id: 2,
        children: [],
      },
      {
        callFrame: {
          functionName: `(program)`,
          scriptId: `0`,
          url: ``,
          lineNumber: -1,
          columnNumber: -1,
        },
        selfSize: 0,
        id: 3,
        children: [],
      },
      {
        callFrame: {
          functionName: `RegExp: /foo/`,
          scriptId: `0`,
          url: ``,
          lineNumber: -1,
          columnNumber: -1,
        },
        selfSize: 0,
        id: 4,
        children: [],
      },
    ]),
    [
      { size: 300, nodeId: 2, ordinal: 1 },
      { size: 200, nodeId: 3, ordinal: 2 },
      { size: 100, nodeId: 4, ordinal: 3 },
    ],
  )

  const markdown = v8HeapProfileToMd(profile, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# Heap profile

    Allocated 600 B over 3 samples (200 B per sample).

    | Category          |     % |  Size | Samples |
    | ----------------- | ----: | ----: | ------: |
    | garbage collector | 50.0% | 300 B |       1 |
    | program           | 33.3% | 200 B |       1 |
    | regexp            | 16.7% | 100 B |       1 |

    ## Hottest functions

    ### Self size

    Functions ranked by bytes allocated directly in the function body, excluding callees.

    |     % |  Size | Samples | Function              | Location   |
    | ----: | ----: | ------: | --------------------- | ---------- |
    | 50.0% | 300 B |       1 | \`(garbage collector)\` | \`<native>\` |
    | 33.3% | 200 B |       1 | \`(program)\`           | \`<native>\` |
    | 16.7% | 100 B |       1 | \`RegExp: /foo/\`       | \`<native>\` |

    ### Total size

    Functions ranked by total bytes allocated in the function and all its callees.

    |     % |  Size | Samples | Function              | Location   |
    | ----: | ----: | ------: | --------------------- | ---------- |
    | 50.0% | 300 B |       1 | \`(garbage collector)\` | \`<native>\` |
    | 33.3% | 200 B |       1 | \`(program)\`           | \`<native>\` |
    | 16.7% | 100 B |       1 | \`RegExp: /foo/\`       | \`<native>\` |


    "
  `)
})

test(`v8HeapProfileToMd respects topN option`, () => {
  const markdown = v8HeapProfileToMd(baseProfile, {
    cwd: `/project`,
    topN: 2,
  })

  expect(diffMd(baseMd, markdown)).toMatchInlineSnapshot(`
    "--- base
    +++ modified
    @@ -35,6 +35,4 @@
    -|     % |  Size | Samples | Function       | Location     |
    -| ----: | ----: | ------: | -------------- | ------------ |
    -| 83.3% | 500 B |       3 | \`funcA\`        | src/a.ts:1:1 |
    -| 66.7% | 400 B |       2 | \`funcC\`        | src/c.ts:1:1 |
    -| 66.7% | 400 B |       2 | \`funcB\`        | src/b.ts:1:1 |
    -| 16.7% | 100 B |       1 | \`readFileSync\` | node:fs:1:1  |
    +|     % |  Size | Samples | Function | Location     |
    +| ----: | ----: | ------: | -------- | ------------ |
    +| 83.3% | 500 B |       3 | \`funcA\`  | src/a.ts:1:1 |
    +| 66.7% | 400 B |       2 | \`funcC\`  | src/c.ts:1:1 |
    @@ -52,6 +49,0 @@
    -##### \`funcB\` (src/b.ts:1:1)
    -
    -|      % |  Size | Samples | Callee  | Location     |
    -| -----: | ----: | ------: | ------- | ------------ |
    -| 100.0% | 400 B |       2 | \`funcC\` | src/c.ts:1:1 |
    -
    "
  `)
})

test(`v8HeapProfileToMd shows absolute paths when cwd is null`, () => {
  // With cwd: null, file paths are shown absolute rather than relative.
  const markdown = v8HeapProfileToMd(baseProfile, { cwd: null })

  expect(diffMd(baseMd, markdown)).toMatchInlineSnapshot(`
    "--- base
    +++ modified
    @@ -16,4 +16,4 @@
    -|     % |  Size | Samples | Function | Location     |
    -| ----: | ----: | ------: | -------- | ------------ |
    -| 66.7% | 400 B |       2 | \`funcC\`  | src/c.ts:1:1 |
    -| 16.7% | 100 B |       1 | \`funcA\`  | src/a.ts:1:1 |
    +|     % |  Size | Samples | Function | Location              |
    +| ----: | ----: | ------: | -------- | --------------------- |
    +| 66.7% | 400 B |       2 | \`funcC\`  | /project/src/c.ts:1:1 |
    +| 16.7% | 100 B |       1 | \`funcA\`  | /project/src/a.ts:1:1 |
    @@ -25,1 +25,1 @@
    -##### \`funcC\` (src/c.ts:1:1)
    +##### \`funcC\` (/project/src/c.ts:1:1)
    @@ -27,3 +27,3 @@
    -|      % |  Size | Samples | Caller  | Location     |
    -| -----: | ----: | ------: | ------- | ------------ |
    -| 100.0% | 400 B |       2 | \`funcB\` | src/b.ts:1:1 |
    +|      % |  Size | Samples | Caller  | Location              |
    +| -----: | ----: | ------: | ------- | --------------------- |
    +| 100.0% | 400 B |       2 | \`funcB\` | /project/src/b.ts:1:1 |
    @@ -35,6 +35,6 @@
    -|     % |  Size | Samples | Function       | Location     |
    -| ----: | ----: | ------: | -------------- | ------------ |
    -| 83.3% | 500 B |       3 | \`funcA\`        | src/a.ts:1:1 |
    -| 66.7% | 400 B |       2 | \`funcC\`        | src/c.ts:1:1 |
    -| 66.7% | 400 B |       2 | \`funcB\`        | src/b.ts:1:1 |
    -| 16.7% | 100 B |       1 | \`readFileSync\` | node:fs:1:1  |
    +|     % |  Size | Samples | Function       | Location              |
    +| ----: | ----: | ------: | -------------- | --------------------- |
    +| 83.3% | 500 B |       3 | \`funcA\`        | /project/src/a.ts:1:1 |
    +| 66.7% | 400 B |       2 | \`funcC\`        | /project/src/c.ts:1:1 |
    +| 66.7% | 400 B |       2 | \`funcB\`        | /project/src/b.ts:1:1 |
    +| 16.7% | 100 B |       1 | \`readFileSync\` | node:fs:1:1           |
    @@ -46,1 +46,1 @@
    -##### \`funcA\` (src/a.ts:1:1)
    +##### \`funcA\` (/project/src/a.ts:1:1)
    @@ -48,3 +48,3 @@
    -|     % |  Size | Samples | Callee  | Location     |
    -| ----: | ----: | ------: | ------- | ------------ |
    -| 80.0% | 400 B |       2 | \`funcB\` | src/b.ts:1:1 |
    +|     % |  Size | Samples | Callee  | Location              |
    +| ----: | ----: | ------: | ------- | --------------------- |
    +| 80.0% | 400 B |       2 | \`funcB\` | /project/src/b.ts:1:1 |
    @@ -52,1 +52,1 @@
    -##### \`funcB\` (src/b.ts:1:1)
    +##### \`funcB\` (/project/src/b.ts:1:1)
    @@ -54,3 +54,3 @@
    -|      % |  Size | Samples | Callee  | Location     |
    -| -----: | ----: | ------: | ------- | ------------ |
    -| 100.0% | 400 B |       2 | \`funcC\` | src/c.ts:1:1 |
    +|      % |  Size | Samples | Callee  | Location              |
    +| -----: | ----: | ------: | ------- | --------------------- |
    +| 100.0% | 400 B |       2 | \`funcC\` | /project/src/c.ts:1:1 |
    @@ -62,3 +62,3 @@
    -|     % |  Size | Samples | Call stack                                                               |
    -| ----: | ----: | ------: | ------------------------------------------------------------------------ |
    -| 66.7% | 400 B |       2 | \`funcC\` (src/c.ts:1:1) ← \`funcB\` (src/b.ts:1:1) ← \`funcA\` (src/a.ts:1:1) |
    +|     % |  Size | Samples | Call stack                                                                                          |
    +| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------- |
    +| 66.7% | 400 B |       2 | \`funcC\` (/project/src/c.ts:1:1) ← \`funcB\` (/project/src/b.ts:1:1) ← \`funcA\` (/project/src/a.ts:1:1) |
    "
  `)
})
