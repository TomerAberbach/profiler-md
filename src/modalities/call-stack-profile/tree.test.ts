import { describe, expect, test } from 'vitest'
import { mdastToMarkdown } from '../../helpers/markdown.ts'
import { resolveProfileToMdOptions } from '../../options.ts'
import type { ProfileToMdOptions } from '../../options.ts'
import { expectLogs } from '../../testing.ts'
import { countMetricOf } from '../metric.ts'
import { BYTES_METRIC, MICROSECONDS_METRIC } from '../metrics.ts'
import { formatCallStackProfile } from './format.ts'
import { callTreeLines, makeAggregatedCallStackProfile } from './testing.ts'

const markdownUnder = (
  options: ProfileToMdOptions,
  ...args: Parameters<typeof makeAggregatedCallStackProfile>
): string =>
  mdastToMarkdown(
    formatCallStackProfile(
      makeAggregatedCallStackProfile(...args),
      resolveProfileToMdOptions({ baseURL: `/project`, ...options }),
    ),
  )

const treesUnder = (
  options: ProfileToMdOptions,
  ...args: Parameters<typeof makeAggregatedCallStackProfile>
): string[][] => callTreeLines(markdownUnder(options, ...args))

const treesOf = (
  ...args: Parameters<typeof makeAggregatedCallStackProfile>
): string[][] => treesUnder({}, ...args)

/** A function recorded executing for {@link ms} milliseconds over {@link callStack}. */
const executing = (
  name: string,
  file: string,
  line: number,
  ms: number,
  callStack?: number[],
) => ({
  name,
  url: `file:///project/src/${file}`,
  line,
  selfCount: ms,
  selfValues: [ms * 1000],
  callStack,
})

/** A caller that was never recorded executing, so it is no function's path end. */
const passThrough = (name: string, line: number) => ({
  name,
  url: `file:///project/src/main.ts`,
  line,
  selfCount: 0,
  selfValues: [0],
})

/**
 * Main → hotA and main → hotB, each recorded executing, and main → wide →
 * three callees, which together outweigh either hot function.
 */
const WIDE_BESIDE_HOT: Parameters<typeof makeAggregatedCallStackProfile> = [
  [MICROSECONDS_METRIC],
  [
    passThrough(`main`, 1),
    executing(`hotA`, `main.ts`, 10, 3, [1, 0]),
    executing(`hotB`, `main.ts`, 11, 3, [2, 0]),
    passThrough(`wide`, 20),
    executing(`x1`, `x.ts`, 1, 2, [4, 3, 0]),
    executing(`x2`, `x.ts`, 2, 2, [5, 3, 0]),
    executing(`x3`, `x.ts`, 3, 2, [6, 3, 0]),
  ],
]

describe(`call tree`, () => {
  test(`branches from the outermost caller, hottest callee first`, () => {
    // Main → slow, and main → fast.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          executing(`fast`, `main.ts`, 20, 1, [1, 0]),
          executing(`slow`, `main.ts`, 30, 3, [2, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 4.0ms (100.0%) main at ./src/main.ts:1`,
        `    ├── 3.0ms (75.0%) slow at 30`,
        `    └── 1.0ms (25.0%) fast at 20`,
      ],
    ])
  })

  test(`draws every caller where the tree has lines to spare`, () => {
    // Main → mid1 → mid2 → mid3 → leaf, and main → other, where only leaf and
    // other were recorded executing.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`mid1`, 10),
          passThrough(`mid2`, 11),
          passThrough(`mid3`, 12),
          executing(`leaf`, `leaf.ts`, 5, 99, [4, 3, 2, 1, 0]),
          executing(`other`, `other.ts`, 7, 1, [5, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 100.0ms (100.0%) main at ./src/main.ts:1`,
        `    ├── 99.0ms (99.0%) mid1 at 10`,
        `    │   └── 99.0ms (99.0%) mid2 at 11`,
        `    │       └── 99.0ms (99.0%) mid3 at 12`,
        `    │           └── 99.0ms (99.0%) leaf at ./src/leaf.ts:5`,
        `    └── 1.0ms (1.0%) other at ./src/other.ts:7`,
      ],
    ])
  })

  test(`omits the outermost callers between two named frames that the line budget has no room for`, () => {
    // The same profile, with a budget of four lines.
    expect(
      treesUnder(
        { topN: 2 },
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`mid1`, 10),
          passThrough(`mid2`, 11),
          passThrough(`mid3`, 12),
          executing(`leaf`, `leaf.ts`, 5, 99, [4, 3, 2, 1, 0]),
          executing(`other`, `other.ts`, 7, 1, [5, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 100.0ms (100.0%) main at ./src/main.ts:1`,
        `    ├── … 99.0ms (99.0%) mid3 at ./src/main.ts:12`,
        `    │   └── 99.0ms (99.0%) leaf at ./src/leaf.ts:5`,
        `    └── 1.0ms (1.0%) other at ./src/other.ts:7`,
      ],
    ])
  })

  test(`draws every caller of a smaller run before some callers of a larger one`, () => {
    // Main → a1 → … → a6 → big, and main → b1 → … → b4 → small, with a budget
    // of eight lines: five more than both runs omitting their callers, enough
    // for all of b's but not all of a's.
    expect(
      treesUnder(
        { topN: 4 },
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`a1`, 10),
          passThrough(`a2`, 11),
          passThrough(`a3`, 12),
          passThrough(`a4`, 13),
          passThrough(`a5`, 14),
          passThrough(`a6`, 15),
          executing(`big`, `big.ts`, 5, 90, [7, 6, 5, 4, 3, 2, 1, 0]),
          passThrough(`b1`, 20),
          passThrough(`b2`, 21),
          passThrough(`b3`, 22),
          passThrough(`b4`, 23),
          executing(`small`, `small.ts`, 7, 10, [12, 11, 10, 9, 8, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 100.0ms (100.0%) main at ./src/main.ts:1`,
        `    ├── … 90.0ms (90.0%) a6 at ./src/main.ts:15`,
        `    │   └── 90.0ms (90.0%) big at ./src/big.ts:5`,
        `    └── 10.0ms (10.0%) b1 at 20`,
        `        └── 10.0ms (10.0%) b2 at 21`,
        `            └── 10.0ms (10.0%) b3 at 22`,
        `                └── 10.0ms (10.0%) b4 at 23`,
        `                    └── 10.0ms (10.0%) small at ./src/small.ts:7`,
      ],
    ])
  })

  test(`names a lone caller rather than spending a line to omit it`, () => {
    // Main → mid → leaf, where mid was never recorded executing.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          executing(`main`, `main.ts`, 1, 1),
          passThrough(`mid`, 10),
          executing(`leaf`, `leaf.ts`, 5, 99, [2, 1, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 100.0ms (100.0%, self 1.0%) main at ./src/main.ts:1`,
        `    └── 99.0ms (99.0%) mid at 10`,
        `        └── 99.0ms (99.0%) leaf at ./src/leaf.ts:5`,
      ],
    ])
  })

  test(`omits a frame the entry filter hides between its caller and callee`, () => {
    // Main → (module) → leaf, where the profiler's synthetic `(module)` frame
    // is one the entry filter hides.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          executing(`main`, `main.ts`, 1, 1),
          passThrough(`(module)`, 5),
          executing(`leaf`, `leaf.ts`, 5, 99, [2, 1, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 100.0ms (100.0%, self 1.0%) main at ./src/main.ts:1`,
        `    └── … 99.0ms (99.0%) leaf at ./src/leaf.ts:5`,
      ],
    ])
  })

  test(`states a function's self value across call stacks where its drawn path holds part`, () => {
    // Main → parse → leaf, and main → load → leaf, where the second leaf
    // frame is the same function reached by another path.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`parse`, 10),
          passThrough(`load`, 20),
          executing(`leaf`, `leaf.ts`, 5, 60, [3, 1, 0]),
          executing(`leaf`, `leaf.ts`, 5, 40, [4, 2, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 100.0ms (100.0%) main at ./src/main.ts:1`,
        `    ├── 60.0ms (60.0%) parse at 10`,
        `    │   └── 60.0ms (60.0%, self 100.0% globally) leaf at ./src/leaf.ts:5`,
        `    └── 40.0ms (40.0%) load at 20`,
        `        └── 40.0ms (40.0%) leaf at ./src/leaf.ts:5`,
      ],
    ])
  })

  test(`states a frame's self value apart from its function's across call stacks`, () => {
    // Main → parse → leaf → callee, and main → load → leaf, where leaf was
    // recorded executing on both paths.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`parse`, 10),
          passThrough(`load`, 20),
          executing(`leaf`, `leaf.ts`, 5, 50, [3, 1, 0]),
          executing(`callee`, `leaf.ts`, 9, 20, [4, 3, 1, 0]),
          executing(`leaf`, `leaf.ts`, 5, 30, [5, 2, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 100.0ms (100.0%) main at ./src/main.ts:1`,
        `    ├── 70.0ms (70.0%) parse at 10`,
        `    │   └── 70.0ms (70.0%, self 50.0%, self 80.0% globally) leaf at ./src/leaf.ts:5`,
        `    │       └── 20.0ms (20.0%) callee at 9`,
        `    └── 30.0ms (30.0%) load at 20`,
        `        └── 30.0ms (30.0%) leaf at ./src/leaf.ts:5`,
      ],
    ])
  })

  test(`draws the hottest functions before the callees around them`, () => {
    // Main calls a deep path to a hot leaf and 3 shallow cold functions.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`mid`, 10),
          executing(`hot`, `hot.ts`, 5, 970, [2, 1, 0]),
          ...Array.from({ length: 3 }, (_unused, index) => ({
            name: `cold${index}`,
            url: `file:///project/src/cold.ts`,
            line: 10 + index,
            selfCount: 10,
            selfValues: [10_000],
            callStack: [index + 3, 0],
          })),
        ],
      ),
    ).toEqual([
      [
        `└── 1s (100.0%) main at ./src/main.ts:1`,
        `    ├── 970.0ms (97.0%) mid at 10`,
        `    │   └── 970.0ms (97.0%) hot at ./src/hot.ts:5`,
        `    ├── 10.0ms (1.0%) cold0 at ./src/cold.ts:10`,
        `    ├── 10.0ms (1.0%) cold1 at ./src/cold.ts:11`,
        `    └── 10.0ms (1.0%) cold2 at ./src/cold.ts:12`,
      ],
    ])
  })

  test(`stays within two lines per topN entry and summarizes the branches it leaves out`, () => {
    // Main calls 200 functions, more than the budget can draw a path to, and
    // each of them calls one more.
    const functions = [
      passThrough(`main`, 1),
      ...Array.from({ length: 200 }, (_unused, index) => ({
        name: `each${index}`,
        url: `file:///project/src/main.ts`,
        line: 100 + index,
        selfCount: 100 + index,
        selfValues: [(100 + index) * 1000],
        callStack: [index + 1, 0],
      })),
      ...Array.from({ length: 200 }, (_unused, index) => ({
        name: `tail${index}`,
        url: `file:///project/src/tail.ts`,
        line: 100 + index,
        selfCount: 1,
        selfValues: [1000],
        callStack: [index + 201, index + 1, 0],
      })),
    ]

    const trees = treesUnder({ topN: 2 }, [MICROSECONDS_METRIC], functions)

    // Each branch left out stands for the callee it leads to as well.
    expect(trees).toEqual([
      [
        `└── 40.10s (100.0%) main at ./src/main.ts:1`,
        `    ├── 300.0ms (0.7%, self 0.7%) each199 at 299`,
        `    ├── 299.0ms (0.7%, self 0.7%) each198 at 298`,
        `    └── 39.50s (98.5%) 198 more callees, led by (0.7%) each197 at 297`,
      ],
    ])
  })

  test(`counts the call stacks ending in a function that differ only in frames the entry filter hides`, () => {
    // Main → (module) → leaf twice, through two distinct `(module)` frames the
    // entry filter hides, and main → other → leaf.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`(module)`, 5),
          passThrough(`(module)`, 6),
          passThrough(`other`, 20),
          executing(`leaf`, `leaf.ts`, 5, 50, [4, 1, 0]),
          executing(`leaf`, `leaf.ts`, 5, 40, [5, 2, 0]),
          executing(`leaf`, `leaf.ts`, 5, 10, [6, 3, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 100.0ms (100.0%) main at ./src/main.ts:1`,
        `    ├── … 90.0ms (90.0%, self 100.0% globally) leaf at ./src/leaf.ts:5`,
        `    └── 10.0ms (10.0%) other at 20`,
        `        └── 10.0ms (10.0%) leaf at ./src/leaf.ts:5`,
      ],
    ])
  })

  test(`states the full location of a frame below omitted callers`, () => {
    // Main → mid1 → mid2 → mid3 → leaf, where mid1 to mid3 are in another
    // source than main and leaf, and a budget of two lines omits them.
    const elsewhere = (name: string, line: number) => ({
      ...passThrough(name, line),
      url: `file:///project/src/elsewhere.ts`,
    })
    expect(
      treesUnder(
        { topN: 1 },
        [MICROSECONDS_METRIC],
        [
          executing(`main`, `main.ts`, 1, 1),
          elsewhere(`mid1`, 10),
          elsewhere(`mid2`, 11),
          elsewhere(`mid3`, 12),
          executing(`leaf`, `main.ts`, 5, 1, [4, 3, 2, 1, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 2.0ms (100.0%, self 50.0%) main at ./src/main.ts:1`,
        `    └── … 1.0ms (50.0%) leaf at ./src/main.ts:5`,
      ],
    ])
  })

  test(`draws truncated call stacks under a line of their own`, () => {
    // Main → leaf, and a truncated stack whose outermost recorded frame is mid.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`mid`, 10),
          executing(`leaf`, `leaf.ts`, 5, 3, [2, 0]),
          { ...executing(`deep`, `deep.ts`, 7, 1, [3, 1]), truncated: true },
        ],
      ),
    ).toEqual([
      [
        `├── 3.0ms (75.0%) main at ./src/main.ts:1`,
        `│   └── 3.0ms (75.0%) leaf at ./src/leaf.ts:5`,
        `└── 1.0ms (25.0%) truncated`,
        `    └── 1.0ms (25.0%) mid at ./src/main.ts:10`,
        `        └── 1.0ms (25.0%) deep at ./src/deep.ts:7`,
      ],
    ])
  })

  test(`draws truncated call stacks from their outermost recorded frames`, () => {
    // Truncated stacks a → shared → leaf, b → shared → leaf, and a → other,
    // whose outermost recorded frames are where the profiler cut them.
    const markdown = markdownUnder(
      {},
      [MICROSECONDS_METRIC],
      [
        passThrough(`a`, 1),
        passThrough(`b`, 2),
        passThrough(`shared`, 3),
        { ...executing(`leaf`, `leaf.ts`, 5, 2, [3, 2, 0]), truncated: true },
        { ...executing(`leaf`, `leaf.ts`, 5, 2, [3, 2, 1]), truncated: true },
        { ...executing(`other`, `other.ts`, 7, 1, [5, 0]), truncated: true },
      ],
    )

    expect(callTreeLines(markdown)).toEqual([
      [
        `└── 5.0ms (100.0%) truncated`,
        `    ├── 3.0ms (60.0%) a at ./src/main.ts:1`,
        `    │   ├── 2.0ms (40.0%) shared at 3`,
        `    │   │   └── 2.0ms (40.0%) leaf at ./src/leaf.ts:5`,
        `    │   └── 1.0ms (20.0%) other at ./src/other.ts:7`,
        `    └── 2.0ms (40.0%) b at ./src/main.ts:2`,
        `        └── 2.0ms (40.0%) shared at 3`,
        `            └── 2.0ms (40.0%, self 80.0% globally) leaf at ./src/leaf.ts:5`,
      ],
    ])
    expect(markdown).toContain(
      `\n\n\`truncated\` stands for missing outermost callers.\n\n`,
    )
  })

  test(`draws the path to the node holding a function's self value among nodes of equal value`, () => {
    // Main → a → leaf, and main → b → leaf → callee, where the entry filter
    // hides callee, so both leaf nodes hold 2ms but only the first holds leaf's
    // self value. A budget of four lines draws one of the two paths.
    expect(
      treesUnder(
        { topN: 2, showEntry: ({ name }) => name !== `callee` },
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`a`, 2),
          passThrough(`b`, 3),
          executing(`callee`, `callee.ts`, 1, 2, [3, 4, 2, 0]),
          executing(`leaf`, `leaf.ts`, 5, 2, [4, 1, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 4.0ms (100.0%) main at ./src/main.ts:1`,
        `    ├── 2.0ms (50.0%) a at 2`,
        `    │   └── 2.0ms (50.0%) leaf at ./src/leaf.ts:5`,
        `    └── 2.0ms (50.0%) b at 3 …`,
      ],
    ])
  })

  test(`draws a lone undrawn callee as its frame among its siblings, omitting its callees`, () => {
    expect(treesUnder({ topN: 2 }, ...WIDE_BESIDE_HOT)).toEqual([
      [
        `└── 12.0ms (100.0%) main at ./src/main.ts:1`,
        `    ├── 6.0ms (50.0%) wide at 20 …`,
        `    ├── 3.0ms (25.0%) hotA at 10`,
        `    └── 3.0ms (25.0%) hotB at 11`,
      ],
    ])
  })

  test(`notes the ellipsis only when a line omits frames`, () => {
    const notesEllipsis = (topN: number): boolean =>
      markdownUnder({ topN }, ...WIDE_BESIDE_HOT).includes(
        `\n\n\`…\` stands for omitted frames.\n\n`,
      )

    expect(notesEllipsis(1)).toBe(false)
    expect(notesEllipsis(2)).toBe(true)
  })

  test(`draws the largest callee a summary line stands for with the lines the hottest paths leave`, () => {
    // Main → hot, main → wide → each of 10 functions colder than hot, and
    // main → tiny, whose value is too small to state.
    expect(
      treesUnder(
        { topN: 2 },
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          executing(`hot`, `main.ts`, 2, 500, [1, 0]),
          passThrough(`wide`, 3),
          executing(`tiny`, `main.ts`, 4, 2, [3, 0]),
          ...Array.from({ length: 10 }, (_unused, index) =>
            executing(`each${index}`, `each.ts`, index + 1, 50, [
              index + 4,
              2,
              0,
            ]),
          ),
        ],
      ),
    ).toEqual([
      [
        `└── 1s (100.0%) main at ./src/main.ts:1`,
        `    ├── 500.0ms (49.9%) hot at 2`,
        `    └── 500.0ms (49.9%) wide at 3`,
        `        └── 500.0ms (49.9%) 10 more callees, led by (5.0%) each0 at ./src/each.ts:1`,
      ],
    ])
  })

  test(`draws a recursion collapse of a function called again below itself into its outermost call`, () => {
    // Main → parse → visit → parse → leaf, and main → visit → other, where the
    // inner parse call is taken into the outer one by a recursion collapse.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`parse`, 2),
          passThrough(`visit`, 3),
          executing(`leaf`, `leaf.ts`, 5, 5, [3, 1, 2, 1, 0]),
          executing(`other`, `other.ts`, 7, 1, [4, 2, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 6.0ms (100.0%) main at ./src/main.ts:1`,
        `    ├── 5.0ms (83.3%) parse at 2`,
        `    │   └── … 5.0ms (83.3%) leaf at ./src/leaf.ts:5`,
        `    └── 1.0ms (16.7%) visit at 3`,
        `        └── 1.0ms (16.7%) other at ./src/other.ts:7`,
      ],
    ])
  })

  test(`merges calls made after a recursion collapse with direct calls, omitting their callers`, () => {
    // Main → parse → leaf directly, and main → parse → visit → parse → leaf and
    // main → parse → walk → visit → parse → leaf, whose inner parse calls
    // are taken into the outer one by a recursion collapse after skipping 2 and
    // 3 frames, which hold enough of leaf to state.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`parse`, 2),
          passThrough(`visit`, 3),
          passThrough(`walk`, 4),
          executing(`leaf`, `leaf.ts`, 5, 4, [5, 1, 0]),
          executing(`leaf`, `leaf.ts`, 5, 2, [5, 1, 2, 1, 0]),
          executing(`leaf`, `leaf.ts`, 5, 1, [5, 1, 2, 3, 1, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 7.0ms (100.0%) main at ./src/main.ts:1`,
        `    └── 7.0ms (100.0%) parse at 2`,
        `        └── … 7.0ms (100.0%) leaf at ./src/leaf.ts:5`,
      ],
    ])
  })

  test(`omits the frames a recursion collapse skipped among the callers`, () => {
    // Main → mid1 → mid2 → mid1 → leaf, where a recursion collapse takes the
    // inner mid1 call into the outer one, which the run to leaf omits.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`mid1`, 2),
          passThrough(`mid2`, 3),
          executing(`leaf`, `leaf.ts`, 5, 1, [3, 1, 2, 1, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 1.0ms (100.0%) main at ./src/main.ts:1`,
        `    └── 1.0ms (100.0%) mid1 at 2`,
        `        └── … 1.0ms (100.0%) leaf at ./src/leaf.ts:5`,
      ],
    ])
  })

  test(`names a frame before omitted callers leave enough of its value undrawn to state`, () => {
    // Main → mid1 → mid2 → mid3 → mid4 → leaf, where each mid calls a function
    // too small to state on its own, but the four together are not.
    expect(
      treesUnder(
        { topN: 2 },
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`mid1`, 2),
          passThrough(`mid2`, 3),
          passThrough(`mid3`, 4),
          passThrough(`mid4`, 5),
          executing(`leaf`, `leaf.ts`, 5, 980, [5, 4, 3, 2, 1, 0]),
          executing(`aside1`, `aside.ts`, 1, 4, [6, 1, 0]),
          executing(`aside2`, `aside.ts`, 2, 4, [7, 2, 1, 0]),
          executing(`aside3`, `aside.ts`, 3, 4, [8, 3, 2, 1, 0]),
          executing(`aside4`, `aside.ts`, 4, 4, [9, 4, 3, 2, 1, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── … 992.0ms (99.6%) mid2 at ./src/main.ts:3`,
        `    └── 988.0ms (99.2%) mid3 at 4`,
        `        └── 984.0ms (98.8%) mid4 at 5`,
        `            └── 980.0ms (98.4%) leaf at ./src/leaf.ts:5`,
      ],
    ])
  })

  test(`draws no path to a function spread too thin for any path to state`, () => {
    // Main → hot, and main → each of 40 callers → thin, where thin's self value
    // ranks second but no call path to it holds more than 0.01%.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          executing(`hot`, `hot.ts`, 1, 9960, [1, 0]),
          ...Array.from({ length: 40 }, (_unused, index) =>
            passThrough(`caller${index}`, index + 10),
          ),
          ...Array.from({ length: 40 }, (_unused, index) =>
            executing(`thin`, `thin.ts`, 1, 1, [42, index + 2, 0]),
          ),
        ],
      ),
    ).toEqual([
      [
        `└── 10s (100.0%) main at ./src/main.ts:1`,
        `    └── 9.96s (99.6%) hot at ./src/hot.ts:1`,
      ],
    ])
  })

  test(`draws no branch too small for its line to state more than <0.1%`, () => {
    // Main → hot, and main → each of 20 tiny functions, which hold 0.04% each
    // and 0.8% together.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          executing(`hot`, `hot.ts`, 1, 9920, [1, 0]),
          ...Array.from({ length: 20 }, (_unused, index) =>
            executing(`tiny${index}`, `tiny.ts`, index + 1, 4, [index + 2, 0]),
          ),
        ],
      ),
    ).toEqual([
      [
        `└── 10s (100.0%) main at ./src/main.ts:1`,
        `    ├── 9.92s (99.2%) hot at ./src/hot.ts:1`,
        `    └── 80.0ms (0.8%) 20 more callees, led by (<0.1%) tiny0 at ./src/tiny.ts:1`,
      ],
    ])
  })

  test(`names the largest branch when no hottest function is in it`, () => {
    // Main → wide → 60 functions of 1ms each, and main → 10 functions of 3ms
    // each, so every hottest function is outside the largest branch.
    expect(
      treesUnder(
        { topN: 4 },
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`wide`, 2),
          ...Array.from({ length: 60 }, (_unused, index) =>
            executing(`tiny${index}`, `tiny.ts`, index + 1, 1, [
              index + 2,
              1,
              0,
            ]),
          ),
          ...Array.from({ length: 10 }, (_unused, index) =>
            executing(`hot${index}`, `hot.ts`, index + 1, 3, [index + 62, 0]),
          ),
        ],
      ),
    ).toEqual([
      [
        `└── 90.0ms (100.0%) main at ./src/main.ts:1`,
        `    ├── 60.0ms (66.7%) wide at 2`,
        `    │   └── 60.0ms (66.7%) 60 more callees, led by (1.1%) tiny0 at ./src/tiny.ts:1`,
        `    ├── 3.0ms (3.3%) hot0 at ./src/hot.ts:1`,
        `    ├── 3.0ms (3.3%) hot1 at ./src/hot.ts:2`,
        `    ├── 3.0ms (3.3%) hot2 at ./src/hot.ts:3`,
        `    ├── 3.0ms (3.3%) hot3 at ./src/hot.ts:4`,
        `    └── 18.0ms (20.0%) 6 more callees, led by (3.3%) hot4 at ./src/hot.ts:5`,
      ],
    ])
  })

  test(`draws a name with a line ending on one line`, () => {
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [executing(`first\nsecond`, `only.ts`, 1, 1)],
      ),
    ).toEqual([[`└── 1.0ms (100.0%) first second at ./src/only.ts:1`]])
  })

  test(`names the unit of a count beside each value`, () => {
    expect(
      treesOf(
        [],
        [
          {
            name: `only`,
            url: `file:///project/src/only.ts`,
            line: 1,
            selfCount: 2,
            selfValues: [],
          },
        ],
        undefined,
        countMetricOf(`goroutine`, { improvement: `decrease` }),
      ),
    ).toEqual([[`└── 2 goroutines (100.0%) only at ./src/only.ts:1`]])
  })

  test(`draws every function when the entry filter would hide them all`, () => {
    const trees = treesUnder(
      { showEntry: () => false },
      [MICROSECONDS_METRIC],
      [executing(`only`, `only.ts`, 1, 1)],
    )

    expectLogs([
      `warn: entry filter ignored because it hides every function, so all functions are shown`,
    ])
    expect(trees).toEqual([[`└── 1.0ms (100.0%) only at ./src/only.ts:1`]])
  })

  test(`counts a function's direct call and its call after a recursion collapse as one branch`, () => {
    // Parse calls leaf directly and through visit → parse, a recursion collapse, so
    // parse has two nodes for leaf, neither of them drawn. The summary states
    // the larger node's full location, since it is below the recursion collapse.
    expect(
      treesUnder(
        { topN: 2 },
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          executing(`parse`, `main.ts`, 2, 50, [1, 0]),
          passThrough(`visit`, 3),
          executing(`leaf`, `main.ts`, 5, 1, [3, 1, 0]),
          executing(`leaf`, `main.ts`, 5, 2, [3, 1, 2, 1, 0]),
          executing(`other`, `other.ts`, 7, 4, [5, 1, 0]),
          executing(`extra`, `extra.ts`, 9, 1, [6, 1, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 58.0ms (100.0%) main at ./src/main.ts:1`,
        `    └── 58.0ms (100.0%, self 86.2%) parse at 2`,
        `        ├── 4.0ms (6.9%) other at ./src/other.ts:7`,
        `        └── 4.0ms (6.9%) 2 more callees, led by (5.2%) leaf at ./src/main.ts:5`,
      ],
    ])
  })

  test(`omits the callees the entry filter hides below a frame`, () => {
    expect(
      treesUnder(
        { showEntry: ({ name }) => name !== `lib` },
        [MICROSECONDS_METRIC],
        [
          executing(`main`, `main.ts`, 1, 1),
          executing(`lib`, `lib.ts`, 5, 99, [1, 0]),
        ],
      ),
    ).toEqual([[`└── 100.0ms (100.0%, self 1.0%) main at ./src/main.ts:1 …`]])
  })

  test(`draws the call stacks the entry filter hides whole on a line of their own`, () => {
    // Main, and lib → lib2, both of which the entry filter hides.
    expect(
      treesUnder(
        { showEntry: ({ name }) => !name?.startsWith(`lib`) },
        [MICROSECONDS_METRIC],
        [
          executing(`main`, `main.ts`, 1, 70),
          passThrough(`lib`, 5),
          executing(`lib2`, `lib.ts`, 6, 30, [1, 2]),
        ],
      ),
    ).toEqual([
      [`├── 70.0ms (70.0%) main at ./src/main.ts:1`, `└── 30.0ms (30.0%) …`],
    ])
  })

  test(`notes the truncated call stacks wherever a line names them`, () => {
    // Main holds most of the value, and a budget of two lines leaves the
    // truncated stacks as the root's lone undrawn callee.
    const markdown = markdownUnder(
      { topN: 1 },
      [MICROSECONDS_METRIC],
      [
        executing(`main`, `main.ts`, 1, 90),
        passThrough(`mid`, 10),
        { ...executing(`deep`, `deep.ts`, 7, 10, [2, 1]), truncated: true },
      ],
    )

    expect(callTreeLines(markdown)).toEqual([
      [
        `├── 90.0ms (90.0%) main at ./src/main.ts:1`,
        `└── 10.0ms (10.0%) truncated …`,
      ],
    ])
    expect(markdown).toContain(
      `\n\n\`…\` stands for omitted frames. \`truncated\` stands for missing outermost callers.\n\n`,
    )
  })

  test(`ranks the tree by the first measure with a value`, () => {
    expect(
      treesOf(
        [MICROSECONDS_METRIC, BYTES_METRIC],
        [
          { ...executing(`main`, `main.ts`, 1, 1), selfValues: [0, 0] },
          {
            ...executing(`leaf`, `leaf.ts`, 5, 1, [1, 0]),
            selfValues: [0, 2048],
          },
        ],
      ),
    ).toEqual([
      [
        `└── 2\u00A0KiB (100.0%) main at ./src/main.ts:1`,
        `    └── 2\u00A0KiB (100.0%) leaf at ./src/leaf.ts:5`,
      ],
    ])
  })

  test(`shows the one frame of a profile with no nested call stacks`, () => {
    expect(
      treesOf([MICROSECONDS_METRIC], [executing(`only`, `only.ts`, 1, 1)]),
    ).toEqual([[`└── 1.0ms (100.0%) only at ./src/only.ts:1`]])
  })
})
