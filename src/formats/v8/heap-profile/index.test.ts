import { describe, expect, test } from 'vitest'
import {
  selfSizeTables,
  totalSizeTables,
} from '../../../modalities/snapshot/testing.ts'
import {
  defaultShowEntry,
  normalizeProfileToMdOptions,
} from '../../../options.ts'
import { callersTables, categoryTables } from '../../../testing.ts'
import { convertJsonToMd } from '../../testing.ts'
import { v8HeapProfileConverter } from './index.ts'
import { makeV8HeapProfileRoot } from './testing.ts'

// Shared profile for all diffing tests:
//   root -> funcA (1 sample, 100 B direct) -> funcB -> funcC (2 samples, 200 B each)
//   root -> readFileSync (node:fs) -> internalLoader (node:internal/, 1 sample, 100 B)
const baseProfile = {
  head: makeV8HeapProfileRoot([
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
  samples: [
    { size: 100, nodeId: 2, ordinal: 1 },
    { size: 200, nodeId: 4, ordinal: 2 },
    { size: 200, nodeId: 4, ordinal: 3 },
    { size: 100, nodeId: 6, ordinal: 4 },
  ],
}

describe(`matches`, () => {
  test(`accepts valid profile`, () => {
    expect(
      v8HeapProfileConverter.matches({
        head: { callFrame: {}, selfSize: 0, id: 1, children: [] },
        samples: [],
      }),
    ).toBe(true)
  })

  test(`rejects null`, () => {
    expect(v8HeapProfileConverter.matches(null)).toBe(false)
  })

  test(`rejects non-objects`, () => {
    expect(v8HeapProfileConverter.matches(42)).toBe(false)
  })

  test(`rejects missing head`, () => {
    expect(v8HeapProfileConverter.matches({ samples: [] })).toBe(false)
  })

  test(`rejects head: null`, () => {
    expect(v8HeapProfileConverter.matches({ head: null, samples: [] })).toBe(
      false,
    )
  })

  test(`rejects missing samples`, () => {
    expect(
      v8HeapProfileConverter.matches({
        head: { callFrame: {}, selfSize: 0, id: 1, children: [] },
      }),
    ).toBe(false)
  })
})

describe(`convert`, () => {
  test(`merges nodes with the same identity`, () => {
    // `funcB` is called from both `funcA` and funcC`. With identical call
    // frames, they should be merged into one row with combined self size.
    const profile = {
      head: makeV8HeapProfileRoot([
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
      samples: [
        { size: 200, nodeId: 4, ordinal: 1 },
        { size: 200, nodeId: 4, ordinal: 2 },
        { size: 100, nodeId: 5, ordinal: 3 },
      ],
    }

    const md = convertJsonToMd(
      v8HeapProfileConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    // Two funcB nodes -> one row with combined size
    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `500 B`,
          Samples: `3`,
          Function: `funcB`,
          Location: `src/b.ts:1:1`,
        },
      ],
    ])
    expect(callersTables(md, `funcB`)).toEqual([
      [
        {
          '%': `80.0%`,
          Size: `400 B`,
          Samples: `2`,
          Caller: `funcA`,
          Location: `src/a.ts:1:1`,
        },
        {
          '%': `20.0%`,
          Size: `100 B`,
          Samples: `1`,
          Caller: `funcC`,
          Location: `src/c.ts:1:1`,
        },
      ],
    ])
  })

  test(`anonymous functions at different lines stay separate`, () => {
    // Two anonymous functions at different lines. They should stay separate
    // nodes and both be labeled `(anonymous)` in the output.
    const profile = {
      head: makeV8HeapProfileRoot([
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
      samples: [{ size: 100, nodeId: 4, ordinal: 1 }],
    }

    const md = convertJsonToMd(
      v8HeapProfileConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    expect(
      totalSizeTables(md).map(table =>
        table
          .filter(row => row.Function === `(anonymous)`)
          .map(row => row.Location),
      ),
    ).toEqual([[`src/a.ts:21:1`, `src/a.ts:11:1`]])
    expect(
      totalSizeTables(md).map(
        table => table.filter(row => row.Function === `(anonymous)`).length,
      ),
    ).toEqual([2])
  })

  test(`deduplicates total size for recursive functions`, () => {
    // `funcA` calls itself recursively (two nodes, same identity). Total size
    // should be counted once, not twice.
    const profile = {
      head: makeV8HeapProfileRoot([
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
      samples: [{ size: 100, nodeId: 3, ordinal: 1 }],
    }

    const md = convertJsonToMd(
      v8HeapProfileConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    // FuncA total = 1 sample, not 2
    expect(totalSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `100 B`,
          Samples: `1`,
          Function: `funcA`,
          Location: `src/a.ts:1:1`,
        },
      ],
    ])
  })

  test(`categorizes ours, third-party, and stdlib code`, () => {
    const profile = {
      head: makeV8HeapProfileRoot([
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
      samples: [
        { size: 1000, nodeId: 2, ordinal: 1 },
        { size: 500, nodeId: 3, ordinal: 2 },
        { size: 250, nodeId: 4, ordinal: 3 },
      ],
    }

    const md = convertJsonToMd(
      v8HeapProfileConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    expect(categoryTables(md)).toEqual([
      [
        { Category: `ours`, '%': `71.4%`, Size: `1.22 KiB`, Samples: `2` },
        { Category: `third-party`, '%': `28.6%`, Size: `500 B`, Samples: `1` },
      ],
    ])
  })

  test(`categorizes sentinel and RegExp functions`, () => {
    // Sentinel functions like `(garbage collector)` and `(program)` have no URL.
    // Their category is their name without the surrounding parentheses.
    // Functions starting with `RegExp: ` are categorized as `regexp`.
    const profile = {
      head: makeV8HeapProfileRoot([
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
      samples: [
        { size: 300, nodeId: 2, ordinal: 1 },
        { size: 200, nodeId: 3, ordinal: 2 },
        { size: 100, nodeId: 4, ordinal: 3 },
      ],
    }

    const md = convertJsonToMd(
      v8HeapProfileConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `garbage collector`,
          '%': `50.0%`,
          Size: `300 B`,
          Samples: `1`,
        },
        { Category: `program`, '%': `33.3%`, Size: `200 B`, Samples: `1` },
        { Category: `regexp`, '%': `16.7%`, Size: `100 B`, Samples: `1` },
      ],
    ])
  })

  test(`maps raw VMState frame tags to the CPU profiler's lowercase labels`, () => {
    // V8's sampling heap profiler labels allocations made outside JS execution
    // with the raw `VMState` tag, e.g. `(V8 API)` or `(BYTECODE_COMPILER)`.
    const profile = {
      head: makeV8HeapProfileRoot([
        {
          callFrame: {
            functionName: `(V8 API)`,
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
            functionName: `(BYTECODE_COMPILER)`,
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
            functionName: `(GC)`,
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
      samples: [
        { size: 300, nodeId: 2, ordinal: 1 },
        { size: 200, nodeId: 3, ordinal: 2 },
        { size: 100, nodeId: 4, ordinal: 3 },
      ],
    }

    const md = convertJsonToMd(
      v8HeapProfileConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    expect(categoryTables(md)).toEqual([
      [
        { Category: `v8 api`, '%': `50.0%`, Size: `300 B`, Samples: `1` },
        {
          Category: `bytecode compiler`,
          '%': `33.3%`,
          Size: `200 B`,
          Samples: `1`,
        },
        {
          Category: `garbage collector`,
          '%': `16.7%`,
          Size: `100 B`,
          Samples: `1`,
        },
      ],
    ])
  })

  test(`node:internal/ frames filtered by default`, () => {
    // `node:internal/` frames are excluded from display by default. Their
    // allocations still count toward the category summary. The `node:fs` frame
    // (non-internal Node built-in) is NOT filtered.
    const defaultOutput = convertJsonToMd(
      v8HeapProfileConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    // InternalLoader and readFileSync are absent; only funcC and funcA appear
    expect(selfSizeTables(defaultOutput)).toEqual([
      [
        {
          '%': `66.7%`,
          Size: `400 B`,
          Samples: `2`,
          Function: `funcC`,
          Location: `src/c.ts:1:1`,
        },
        {
          '%': `16.7%`,
          Size: `100 B`,
          Samples: `1`,
          Function: `funcA`,
          Location: `src/a.ts:1:1`,
        },
      ],
    ])
  })
})

describe(`options`, () => {
  test(`showEntry hides entries while preserving metrics`, () => {
    // `funcB` is excluded via `showEntry`. `funcC`'s callers section is omitted
    // because its only direct caller (`funcB`) is excluded.
    const md = convertJsonToMd(
      v8HeapProfileConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: `/project`,
        showEntry: row => defaultShowEntry(row) && row.name !== `funcB`,
      }),
    )

    expect(
      selfSizeTables(md).map(table => table.map(row => row.Function)),
    ).toEqual([expect.not.arrayContaining([`funcB`])])
    expect(callersTables(md, `funcC`)).toHaveLength(0)
  })

  test(`topN limits functions shown`, () => {
    const md = convertJsonToMd(
      v8HeapProfileConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: `/project`,
        topN: 2,
      }),
    )

    expect(selfSizeTables(md).map(table => table.length)).toEqual([2])
    expect(totalSizeTables(md).map(table => table.length)).toEqual([2])
  })

  test(`baseURL: null shows absolute paths`, () => {
    const md = convertJsonToMd(
      v8HeapProfileConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: null,
      }),
    )

    expect(
      selfSizeTables(md).map(table => table.map(row => row.Location)),
    ).toEqual([[expect.stringMatching(/^\//u), expect.stringMatching(/^\//u)]])
  })

  test(`categorizeEntries groups entries by custom category`, () => {
    const md = convertJsonToMd(
      v8HeapProfileConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: `/project`,
        categorizeEntries: entries =>
          entries.map(entry => (entry.name === `funcA` ? `team-a` : `team-b`)),
      }),
    )

    expect(categoryTables(md)).toEqual([
      [
        { Category: `team-b`, '%': `83.3%`, Size: `500 B`, Samples: `3` },
        { Category: `team-a`, '%': `16.7%`, Size: `100 B`, Samples: `1` },
      ],
    ])
  })
})
