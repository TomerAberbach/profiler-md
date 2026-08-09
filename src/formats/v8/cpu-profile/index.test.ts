import { describe, expect, test } from 'vitest'
import {
  selfTimeTables,
  totalTimeTables,
} from '../../../modalities/sampling-profile/testing.ts'
import {
  defaultShowEntry,
  normalizeProfileToMdOptions,
} from '../../../options.ts'
import { callersTables, categoryTables, linesTables } from '../../../testing.ts'
import { convertJsonToMd } from '../../testing.ts'
import { v8CpuProfileConverter } from './index.ts'
import { makeV8CpuProfileRoot } from './testing.ts'

describe(`matches`, () => {
  test(`accepts valid profile`, () => {
    expect(v8CpuProfileConverter.matches({ nodes: [], timeDeltas: [] })).toBe(
      true,
    )
  })

  test(`rejects null`, () => {
    expect(v8CpuProfileConverter.matches(null)).toBe(false)
  })

  test(`rejects non-objects`, () => {
    expect(v8CpuProfileConverter.matches(`string`)).toBe(false)
  })

  test(`rejects missing nodes`, () => {
    expect(v8CpuProfileConverter.matches({ timeDeltas: [] })).toBe(false)
  })

  test(`rejects missing timeDeltas`, () => {
    expect(v8CpuProfileConverter.matches({ nodes: [] })).toBe(false)
  })
})

describe(`convert`, () => {
  test(`merges nodes with the same identity`, () => {
    // `funcB` is called from both `funcA` and `funcC`. With identical call
    // frames, they should be merged into one row with combined times.
    const profile = {
      nodes: [
        makeV8CpuProfileRoot([2, 3]),
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
      samples: [4, 4, 5],
      timeDeltas: [100, 100, 100],
    }

    const md = convertJsonToMd(
      v8CpuProfileConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    // Two funcB nodes -> one row with 3 combined samples
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `3`,
          Function: `funcB`,
          Location: `src/b.ts:1:1`,
        },
      ],
    ])
    expect(callersTables(md, `funcB`)).toEqual([
      [
        {
          '%': `66.7%`,
          Time: `0.2ms`,
          Samples: `2`,
          Caller: `funcA`,
          Location: `src/a.ts:1:1`,
        },
        {
          '%': `33.3%`,
          Time: `0.1ms`,
          Samples: `1`,
          Caller: `funcC`,
          Location: `src/c.ts:1:1`,
        },
      ],
    ])
  })

  test(`merges positionTicks across nodes with the same identity`, () => {
    // Node 4 has ticks on line 5 (1 tick), node 5 has ticks on line 8 (2 ticks).
    // After merging, hottest line should be 8.
    const profile = {
      nodes: [
        makeV8CpuProfileRoot([2, 3]),
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
      samples: [4, 4, 5],
      timeDeltas: [100, 100, 100],
    }

    const md = convertJsonToMd(
      v8CpuProfileConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    // Line 8 hottest (2 ticks from node 5), line 5 second (1 tick from node 4)
    expect(linesTables(md, `funcB`)).toEqual([
      [
        { '%': `66.7%`, Time: `0.2ms`, Samples: `2`, Location: `src/b.ts:8` },
        { '%': `33.3%`, Time: `0.1ms`, Samples: `1`, Location: `src/b.ts:5` },
      ],
    ])
  })

  test(`sums positionTicks on the same line across merged nodes`, () => {
    // Node 4 has ticks on lines 8 (1) and 5 (1). Node 5 has ticks on line 5 (1).
    // Line 5's ticks must be summed (1+1=2), making line 5 the hottest.
    const profile = {
      nodes: [
        makeV8CpuProfileRoot([2, 3]),
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
      samples: [4, 4, 5],
      timeDeltas: [100, 100, 100],
    }

    const md = convertJsonToMd(
      v8CpuProfileConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    // Line 5 has 2 ticks total (summed), line 8 has 1 tick
    expect(linesTables(md, `funcB`)).toEqual([
      [
        { '%': `66.7%`, Time: `0.2ms`, Samples: `2`, Location: `src/b.ts:5` },
        { '%': `33.3%`, Time: `0.1ms`, Samples: `1`, Location: `src/b.ts:8` },
      ],
    ])
  })

  test(`deduplicates total time for recursive functions`, () => {
    // `funcA` calls itself recursively (two nodes, same identity). Total time
    // should be counted once per sample, not twice.
    const profile = {
      nodes: [
        makeV8CpuProfileRoot([2]),
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
      samples: [3],
      timeDeltas: [100],
    }

    const md = convertJsonToMd(
      v8CpuProfileConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    // FuncA total = 1 sample, not 2
    expect(totalTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.1ms`,
          Samples: `1`,
          Function: `funcA`,
          Location: `src/a.ts:1:1`,
        },
      ],
    ])
  })

  test(`anonymous functions at different lines stay separate`, () => {
    // Two anonymous functions at different lines. They should stay separate
    // nodes and both be labeled `(anonymous)` in the output.
    const profile = {
      nodes: [
        makeV8CpuProfileRoot([2]),
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
      samples: [4],
      timeDeltas: [100],
    }

    const md = convertJsonToMd(
      v8CpuProfileConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    // Two distinct (anonymous) entries at different lines
    expect(
      totalTimeTables(md).map(table =>
        table
          .filter(row => row.Function === `(anonymous)`)
          .map(row => row.Location),
      ),
    ).toEqual([[`src/a.ts:21:1`, `src/a.ts:11:1`]])
    expect(
      totalTimeTables(md).map(
        table => table.filter(row => row.Function === `(anonymous)`).length,
      ),
    ).toEqual([2])
  })

  test(`unknown (-1) line and column are dropped from a located frame`, () => {
    const profile = {
      nodes: [
        makeV8CpuProfileRoot([2]),
        {
          id: 2,
          hitCount: 1,
          callFrame: {
            functionName: `evaluate`,
            scriptId: 1,
            url: `file:///project/src/a.ts`,
            lineNumber: -1,
            columnNumber: -1,
          },
        },
      ],
      samples: [2],
      timeDeltas: [100],
    }

    const md = convertJsonToMd(
      v8CpuProfileConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Location)),
    ).toEqual([[`src/a.ts`]])
  })

  test(`categorizes ours, third-party, and stdlib code`, () => {
    const profile = {
      nodes: [
        makeV8CpuProfileRoot([2]),
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
      samples: [2, 3, 4],
      timeDeltas: [1000, 500, 250],
    }

    const md = convertJsonToMd(
      v8CpuProfileConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    expect(categoryTables(md)).toEqual([
      [
        { Category: `Ours`, '%': `71.4%`, Time: `1.3ms`, Samples: `2` },
        { Category: `Third-party`, '%': `28.6%`, Time: `0.5ms`, Samples: `1` },
      ],
    ])
  })
})

describe(`options`, () => {
  // Root -> funcA (1 sample) -> funcB -> funcC (2 samples)
  // root -> readFileSync (node:fs) -> internalLoader (node:internal/, 1 sample)
  const baseProfile = {
    nodes: [
      makeV8CpuProfileRoot([2, 5]),
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
    samples: [2, 4, 4, 6],
    timeDeltas: [100, 100, 100, 100],
  }

  test(`showEntry hides entries while preserving metrics`, () => {
    // `funcB` is excluded via `showEntry`. Its hit count is zero, but it
    // is in `funcC`'s call stack. `funcC`'s callers section is omitted because
    // its only direct caller (`funcB`) is excluded.
    const md = convertJsonToMd(
      v8CpuProfileConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: `/project`,
        showEntry: row => defaultShowEntry(row) && row.name !== `funcB`,
      }),
    )

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Function)),
    ).toEqual([expect.not.arrayContaining([`funcB`])])
    expect(callersTables(md, `funcC`)).toHaveLength(0)
  })

  test(`topN limits functions shown`, () => {
    const md = convertJsonToMd(
      v8CpuProfileConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: `/project`,
        topN: 2,
      }),
    )

    expect(selfTimeTables(md).map(table => table.length)).toEqual([2])
    expect(totalTimeTables(md).map(table => table.length)).toEqual([2])
  })

  test(`baseURL: null shows absolute paths`, () => {
    const md = convertJsonToMd(
      v8CpuProfileConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({ baseURL: null }),
    )

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Location)),
    ).toEqual([[expect.stringMatching(/^\//u), expect.stringMatching(/^\//u)]])
  })

  test(`categorizeFunctions overrides the detected categories`, () => {
    const md = convertJsonToMd(
      v8CpuProfileConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: `/project`,
        categorizeFunctions: entries =>
          entries.map(entry =>
            entry.name === `funcA` ? `ours` : `third-party`,
          ),
      }),
    )

    expect(categoryTables(md)).toEqual([
      [
        { Category: `Third-party`, '%': `75.0%`, Time: `0.3ms`, Samples: `3` },
        { Category: `Ours`, '%': `25.0%`, Time: `0.1ms`, Samples: `1` },
      ],
    ])
  })
})
