import { describe, expect, test } from 'vitest'
import {
  selfTimeTables,
  totalTimeTables,
} from '../../../modalities/call-stack-profile/testing.ts'
import { normalizeProfileToMdOptions } from '../../../options.ts'
import {
  callersTables,
  categoryTables,
  expectLogs,
  linesTables,
  summaryLines,
} from '../../../testing.ts'
import { profileToMd } from '../../index.ts'
import { convertJsonToMd } from '../../testing.ts'
import { v8CpuProfileFormatSpec } from './index.ts'
import type { V8CpuProfile } from './parse.ts'
import { makeV8CallFrame, makeV8CpuProfileRoot } from './testing.ts'

describe(`matches`, () => {
  test.each([
    { scenario: `a start time`, times: { startTime: 0 } },
    { scenario: `time deltas`, times: { timeDeltas: [] } },
  ])(`accepts nodes with $scenario`, ({ times }) => {
    expect(v8CpuProfileFormatSpec.matches({ nodes: [], ...times })).toBe(true)
  })

  test(`rejects null`, () => {
    expect(v8CpuProfileFormatSpec.matches(null)).toBe(false)
  })

  test(`rejects non-objects`, () => {
    expect(v8CpuProfileFormatSpec.matches(`string`)).toBe(false)
  })

  test(`rejects missing nodes`, () => {
    expect(v8CpuProfileFormatSpec.matches({ timeDeltas: [] })).toBe(false)
  })

  test(`rejects nodes with neither a start time nor time deltas`, () => {
    expect(v8CpuProfileFormatSpec.matches({ nodes: [] })).toBe(false)
  })
})

describe(`convert`, () => {
  test(`merges nodes with the same identity`, () => {
    // `funcB` is called from both `funcA` and `funcC`.
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
      startTime: 0,
      endTime: 300,
      samples: [4, 4, 5],
      timeDeltas: [100, 100, 100],
    }

    const md = convertJsonToMd(
      v8CpuProfileFormatSpec,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    expect(selfTimeTables(md)).toStrictEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `3`,
          Function: `funcB`,
          Location: `./src/b.ts:1:1`,
        },
      ],
    ])
    expect(callersTables(md, `funcB`)).toStrictEqual([
      [
        {
          '%': `66.7%`,
          Time: `0.2ms`,
          Samples: `2`,
          Caller: `funcA`,
          Location: `./src/a.ts:1:1`,
        },
        {
          '%': `33.3%`,
          Time: `0.1ms`,
          Samples: `1`,
          Caller: `funcC`,
          Location: `./src/c.ts:1:1`,
        },
      ],
    ])
  })

  test(`merges positionTicks across nodes with the same identity`, () => {
    // Node 4 has ticks on line 5 (1 tick), node 5 has ticks on line 8 (2 ticks).
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
      startTime: 0,
      endTime: 300,
      samples: [4, 4, 5],
      timeDeltas: [100, 100, 100],
    }

    const md = convertJsonToMd(
      v8CpuProfileFormatSpec,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    expect(linesTables(md, `funcB`)).toStrictEqual([
      [
        { '%': `66.7%`, Time: `0.2ms`, Samples: `2`, Location: `./src/b.ts:8` },
        { '%': `33.3%`, Time: `0.1ms`, Samples: `1`, Location: `./src/b.ts:5` },
      ],
    ])
  })

  test(`sums positionTicks on the same line across merged nodes`, () => {
    // Node 4 has ticks on lines 8 (1) and 5 (1). Node 5 has ticks on line 5 (1).
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
      startTime: 0,
      endTime: 300,
      samples: [4, 4, 5],
      timeDeltas: [100, 100, 100],
    }

    const md = convertJsonToMd(
      v8CpuProfileFormatSpec,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    expect(linesTables(md, `funcB`)).toStrictEqual([
      [
        { '%': `66.7%`, Time: `0.2ms`, Samples: `2`, Location: `./src/b.ts:5` },
        { '%': `33.3%`, Time: `0.1ms`, Samples: `1`, Location: `./src/b.ts:8` },
      ],
    ])
  })

  test(`deduplicates total time for recursive functions`, () => {
    // `funcA` calls itself recursively (two nodes, same identity).
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
      startTime: 0,
      endTime: 100,
      samples: [3],
      timeDeltas: [100],
    }

    const md = convertJsonToMd(
      v8CpuProfileFormatSpec,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    expect(totalTimeTables(md)).toStrictEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.1ms`,
          Samples: `1`,
          Function: `funcA`,
          Location: `./src/a.ts:1:1`,
        },
      ],
    ])
  })

  test(`anonymous functions at different lines stay separate`, () => {
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
      startTime: 0,
      endTime: 100,
      samples: [4],
      timeDeltas: [100],
    }

    const md = convertJsonToMd(
      v8CpuProfileFormatSpec,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    expect(
      totalTimeTables(md).map(table =>
        table
          .filter(row => row.Function === `(anonymous)`)
          .map(row => row.Location),
      ),
    ).toStrictEqual([[`./src/a.ts:21:1`, `./src/a.ts:11:1`]])
    expect(
      totalTimeTables(md).map(
        table => table.filter(row => row.Function === `(anonymous)`).length,
      ),
    ).toStrictEqual([2])
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
      startTime: 0,
      endTime: 100,
      samples: [2],
      timeDeltas: [100],
    }

    const md = convertJsonToMd(
      v8CpuProfileFormatSpec,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Location)),
    ).toStrictEqual([[`./src/a.ts`]])
  })

  // V8 records a sample at each deoptimization too, which is no tick. `foo`
  // has three such samples here, and one tick.
  test(`times a node by its hits, whatever its samples' time deltas sum to`, () => {
    const profile = {
      nodes: [
        makeV8CpuProfileRoot([2, 3]),
        {
          id: 2,
          hitCount: 1,
          callFrame: makeV8CallFrame(`foo`, `file:///project/a.js`),
        },
        {
          id: 3,
          hitCount: 3,
          callFrame: makeV8CallFrame(`bar`, `file:///project/b.js`),
        },
      ],
      startTime: 0,
      endTime: 4000,
      samples: [2, 2, 3, 2, 3, 2, 3],
      timeDeltas: [1000, 600, 400, 600, 400, 600, 400],
    }

    const md = convertJsonToMd(
      v8CpuProfileFormatSpec,
      profile,
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    )

    expect(summaryLines(md)).toStrictEqual([
      `Took 4.0ms over 4 samples (1.0ms per sample).`,
    ])
    expect(selfTimeTables(md)).toStrictEqual([
      [
        {
          '%': `75.0%`,
          Time: `3.0ms`,
          Samples: `3`,
          Function: `bar`,
          Location: `./b.js:1:1`,
        },
        {
          '%': `25.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `foo`,
          Location: `./a.js:1:1`,
        },
      ],
    ])
  })

  test(`times a line by its ticks, so a node's lines sum to its self time`, () => {
    const profile = {
      nodes: [
        makeV8CpuProfileRoot([2]),
        {
          id: 2,
          hitCount: 4,
          callFrame: makeV8CallFrame(`foo`, `file:///project/a.js`),
          positionTicks: [
            { line: 3, ticks: 3 },
            { line: 5, ticks: 1 },
          ],
        },
      ],
      startTime: 0,
      endTime: 4000,
      samples: [2, 2, 2, 2, 2, 2],
      timeDeltas: [1000, 1000, 500, 500, 500, 500],
    }

    const md = convertJsonToMd(
      v8CpuProfileFormatSpec,
      profile,
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    )

    expect(linesTables(md, `foo`)).toStrictEqual([
      [
        { '%': `75.0%`, Time: `3.0ms`, Samples: `3`, Location: `./a.js:3` },
        { '%': `25.0%`, Time: `1.0ms`, Samples: `1`, Location: `./a.js:5` },
      ],
    ])
  })

  test(`categorizes ours, third-party, and stdlib code`, () => {
    const profile = {
      nodes: [
        makeV8CpuProfileRoot([2]),
        {
          id: 2,
          hitCount: 4,
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
          hitCount: 2,
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
      startTime: 0,
      endTime: 1750,
      samples: [2, 2, 2, 2, 3, 3, 4],
      timeDeltas: [250, 250, 250, 250, 250, 250, 250],
    }

    const md = convertJsonToMd(
      v8CpuProfileFormatSpec,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    expect(categoryTables(md)).toStrictEqual([
      [
        { Category: `Ours`, '%': `71.4%`, Time: `1.3ms`, Samples: `5` },
        { Category: `Third-party`, '%': `28.6%`, Time: `0.5ms`, Samples: `2` },
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
    startTime: 0,
    endTime: 400,
    samples: [2, 4, 4, 6],
    timeDeltas: [100, 100, 100, 100],
  }

  test(`categorizeFunctions overrides the detected categories`, () => {
    const md = convertJsonToMd(
      v8CpuProfileFormatSpec,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: `/project`,
        categorizeFunctions: entries =>
          entries.map(entry =>
            entry.name === `funcA` ? `ours` : `third-party`,
          ),
      }),
    )

    expect(categoryTables(md)).toStrictEqual([
      [
        { Category: `Third-party`, '%': `75.0%`, Time: `0.3ms`, Samples: `3` },
        { Category: `Ours`, '%': `25.0%`, Time: `0.1ms`, Samples: `1` },
      ],
    ])
  })
})

describe(`malformed profiles`, () => {
  const node = {
    id: 1,
    hitCount: 1,
    callFrame: makeV8CallFrame(`foo`, `file:///project/a.js`),
  }

  test(`rejects a profile that states no start and end time`, () => {
    expect(() =>
      convertJsonToMd(
        v8CpuProfileFormatSpec,
        { nodes: [node], samples: [1], timeDeltas: [5] },
        normalizeProfileToMdOptions(),
      ),
    ).toThrow(`startTime and endTime must be numbers`)
  })

  test.each([
    { scenario: `a hit count of 0`, hits: { hitCount: 0 } },
    { scenario: `no hit count`, hits: {} },
  ])(
    `skips the position ticks of a node with $scenario, with a warning`,
    ({ hits }) => {
      const md = convertJsonToMd(
        v8CpuProfileFormatSpec,
        {
          nodes: [
            makeV8CpuProfileRoot([2, 3]),
            {
              id: 2,
              callFrame: node.callFrame,
              ...hits,
              positionTicks: [{ line: 3, ticks: 1 }],
            },
            {
              id: 3,
              hitCount: 1,
              callFrame: makeV8CallFrame(`bar`, `file:///project/b.js`),
            },
          ],
          startTime: 0,
          endTime: 5,
        },
        normalizeProfileToMdOptions({ baseURL: `/project` }),
      )

      expect(selfTimeTables(md)).toStrictEqual([
        [
          {
            '%': `100.0%`,
            Time: `5.0µs`,
            Samples: `1`,
            Function: `bar`,
            Location: `./b.js:1:1`,
          },
        ],
      ])
      expectLogs([
        `debug: origin candidates, in priority order: deno, bun, node, chrome`,
        `info: fallback origin: chrome`,
        `debug: no entry marked another origin`,
        `warn: skipped 1 position tick on a node with no hits`,
      ])
    },
  )

  test(`skips a child reference to a missing node, with a warning`, () => {
    const makeProfile = (rootChildren: number[]): V8CpuProfile => ({
      nodes: [makeV8CpuProfileRoot(rootChildren), { ...node, id: 2 }],
      startTime: 0,
      endTime: 5,
      samples: [2],
      timeDeltas: [5],
    })

    const md = convertJsonToMd(
      v8CpuProfileFormatSpec,
      makeProfile([2, 9]),
      normalizeProfileToMdOptions(),
    )

    expect(md).toBe(
      convertJsonToMd(
        v8CpuProfileFormatSpec,
        makeProfile([2]),
        normalizeProfileToMdOptions(),
      ),
    )
    const originLogs = [
      `debug: origin candidates, in priority order: deno, bun, node, chrome`,
      `info: fallback origin: chrome`,
      `debug: no entry marked another origin`,
    ]
    expectLogs([
      ...originLogs,
      `warn: skipped 1 child reference to a missing node`,
      ...originLogs,
    ])
  })
})

describe(`a profile whose nodes state no hit count`, () => {
  const makeProfile = (samples: number[]): V8CpuProfile => ({
    nodes: [
      { id: 1, callFrame: makeV8CallFrame(`(root)`, ``), children: [2, 3] },
      { id: 2, callFrame: makeV8CallFrame(`foo`, `file:///project/a.js`) },
      { id: 3, callFrame: makeV8CallFrame(`bar`, `file:///project/b.js`) },
    ],
    startTime: 0,
    endTime: 4000,
    samples,
    timeDeltas: samples.map(() => 5),
  })

  test(`counts each node's samples as its hits`, () => {
    const md = convertJsonToMd(
      v8CpuProfileFormatSpec,
      makeProfile([2, 3, 2, 2]),
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    )

    expect(selfTimeTables(md)).toStrictEqual([
      [
        {
          '%': `75.0%`,
          Time: `3.0ms`,
          Samples: `3`,
          Function: `foo`,
          Location: `./a.js:1:1`,
        },
        {
          '%': `25.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `bar`,
          Location: `./b.js:1:1`,
        },
      ],
    ])
  })

  test(`skips samples referencing a missing node, with a warning`, () => {
    const md = convertJsonToMd(
      v8CpuProfileFormatSpec,
      makeProfile([2, 9, 9]),
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    )

    expect(summaryLines(md)).toStrictEqual([
      `Took 4.0ms over 1 sample (4.0ms per sample).`,
    ])
    expectLogs([
      `debug: origin candidates, in priority order: deno, bun, node, chrome`,
      `info: fallback origin: chrome`,
      `debug: no entry marked another origin`,
      `warn: skipped 2 samples referencing a missing node`,
    ])
  })

  test(`rejects a profile whose samples all reference a missing node`, () => {
    expect(() =>
      profileToMd({
        data: JSON.stringify(makeProfile([9, 9])),
        format: `v8-cpu-profile`,
      }),
    ).toThrow(
      `v8-cpu-profile: no usable records because the parser skipped 2 samples referencing a missing node`,
    )
  })
})
