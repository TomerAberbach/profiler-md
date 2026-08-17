import { describe, expect, test } from 'vitest'
import { mdastToMarkdown } from '../../helpers/markdown.ts'
import { resolveProfileToMdOptions } from '../../options.ts'
import type { ProfileToMdOptions } from '../../options.ts'
import { countMetricOf } from '../metric.ts'
import { MICROSECONDS_METRIC } from '../metrics.ts'
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

/** A function recorded executing for {@link ms} milliseconds over {@link stack}. */
const executing = (
  name: string,
  file: string,
  line: number,
  ms: number,
  stack?: number[],
) => ({
  name,
  url: `file:///project/src/${file}`,
  line,
  selfCount: ms,
  selfValues: [ms * 1000],
  stack,
})

/** A caller that was never recorded executing, so it is no function's path end. */
const passThrough = (name: string, line: number) => ({
  name,
  url: `file:///project/src/main.ts`,
  line,
  selfCount: 0,
  selfValues: [0],
})

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
        `└── 4.0ms (100.0%) main  src/main.ts:1`,
        `    ├── 3.0ms (75.0%) slow  :30`,
        `    └── 1.0ms (25.0%) fast  :20`,
      ],
    ])
  })

  test(`hides the callers between two named frames on one line`, () => {
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
        `└── 100.0ms (100.0%) main  src/main.ts:1`,
        `    ├── 99.0ms (99.0%) [[3 frames hidden in 1 source]]`,
        `    │   └── 99.0ms (99.0%) leaf  src/leaf.ts:5`,
        `    └── 1.0ms (1.0%) other  src/other.ts:7`,
      ],
    ])
  })

  test(`hides callers on one line however long their names`, () => {
    // Main → three middleware → leaf, whose names together run long.
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`ActionDispatch::Session::AbstractSecureStore#call`, 10),
          passThrough(`Rack::Session::Abstract::Persisted#context`, 11),
          passThrough(
            `ActionDispatch::Routing::RouteSet::Dispatcher#serve`,
            12,
          ),
          executing(`leaf`, `leaf.ts`, 5, 1, [4, 3, 2, 1, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 1.0ms (100.0%) [[4 frames hidden in 1 source]]`,
        `    └── 1.0ms (100.0%) leaf  src/leaf.ts:5`,
      ],
    ])
  })

  test(`names a lone skipped caller rather than spending a line to hide it`, () => {
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
        `└── 100.0ms (100.0%) main  src/main.ts:1`,
        `    └── 99.0ms (99.0%) mid  :10`,
        `        └── 99.0ms (99.0%) leaf  src/leaf.ts:5`,
      ],
    ])
  })

  test(`counts the frames the entry filter hides below a frame`, () => {
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
        `└── 100.0ms (100.0%) main  src/main.ts:1 +1 hidden frame`,
        `    └── 99.0ms (99.0%) leaf  src/leaf.ts:5`,
      ],
    ])
  })

  test(`states a function's self value across call paths where its drawn path holds part`, () => {
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
        `└── 100.0ms (100.0%) main  src/main.ts:1`,
        `    ├── 60.0ms (60.0%) parse  :10`,
        `    │   └── 60.0ms (60.0%) leaf  src/leaf.ts:5  (100.0% self across 2 call paths)`,
        `    └── 40.0ms (40.0%) load  :20`,
        `        └── 40.0ms (40.0%) leaf  src/leaf.ts:5`,
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
            stack: [index + 3, 0],
          })),
        ],
      ),
    ).toEqual([
      [
        `└── 1s (100.0%) main  src/main.ts:1`,
        `    ├── 970.0ms (97.0%) mid  :10`,
        `    │   └── 970.0ms (97.0%) hot  src/hot.ts:5`,
        `    ├── 10.0ms (1.0%) cold0  src/cold.ts:10`,
        `    ├── 10.0ms (1.0%) cold1  src/cold.ts:11`,
        `    └── 10.0ms (1.0%) cold2  src/cold.ts:12`,
      ],
    ])
  })

  test(`stays within two lines per topN entry and totals the branches it leaves out`, () => {
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
        stack: [index + 1, 0],
      })),
      ...Array.from({ length: 200 }, (_unused, index) => ({
        name: `tail${index}`,
        url: `file:///project/src/tail.ts`,
        line: 100 + index,
        selfCount: 1,
        selfValues: [1000],
        stack: [index + 201, index + 1, 0],
      })),
    ]

    const trees = treesUnder({ topN: 2 }, [MICROSECONDS_METRIC], functions)

    // Each branch left out stands for the callee it leads to as well.
    expect(trees).toEqual([
      [
        `└── 40.10s (100.0%) main  src/main.ts:1`,
        `    ├── 300.0ms (0.7%) each199  :299`,
        `    ├── 299.0ms (0.7%) each198  :298`,
        `    └── 39.50s (98.5%) 198 more branches, hottest each197  :297`,
      ],
    ])
  })

  test(`counts the call paths to a function that differ only in frames the entry filter hides`, () => {
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
        `└── 100.0ms (100.0%) main  src/main.ts:1 +2 hidden frames`,
        `    ├── 90.0ms (90.0%) leaf  src/leaf.ts:5  (100.0% self across 3 call paths)`,
        `    └── 10.0ms (10.0%) other  :20`,
        `        └── 10.0ms (10.0%) leaf  src/leaf.ts:5`,
      ],
    ])
  })

  test(`states the full location of a frame below hidden callers`, () => {
    // Main → mid1 → mid2 → mid3 → leaf, where mid1 to mid3 are in another
    // source than main and leaf.
    const hidden = (name: string, line: number) => ({
      ...passThrough(name, line),
      url: `file:///project/src/hidden.ts`,
    })
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          executing(`main`, `main.ts`, 1, 1),
          hidden(`mid1`, 10),
          hidden(`mid2`, 11),
          hidden(`mid3`, 12),
          executing(`leaf`, `main.ts`, 5, 1, [4, 3, 2, 1, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 2.0ms (100.0%) main  src/main.ts:1`,
        `    └── 1.0ms (50.0%) [[3 frames hidden in 1 source]]`,
        `        └── 1.0ms (50.0%) leaf  src/main.ts:5`,
      ],
    ])
  })

  test(`counts the sources of only the hidden callers that have a location`, () => {
    // Main → mid1 → mid2 → mid3 → leaf, where mid2 and mid3 have no location.
    const unlocated = (name: string) => ({
      name,
      selfCount: 0,
      selfValues: [0],
    })
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [
          passThrough(`main`, 1),
          passThrough(`mid1`, 10),
          unlocated(`mid2`),
          unlocated(`mid3`),
          executing(`leaf`, `leaf.ts`, 5, 1, [4, 3, 2, 1, 0]),
        ],
      ),
    ).toEqual([
      [
        `└── 1.0ms (100.0%) [[4 frames hidden, 2 in 1 source]]`,
        `    └── 1.0ms (100.0%) leaf  src/leaf.ts:5`,
      ],
    ])
  })

  test(`draws a name with a line ending on one line`, () => {
    expect(
      treesOf(
        [MICROSECONDS_METRIC],
        [executing(`first\nsecond`, `only.ts`, 1, 1)],
      ),
    ).toEqual([[`└── 1.0ms (100.0%) first second  src/only.ts:1`]])
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
    ).toEqual([[`└── 2 goroutines (100.0%) only  src/only.ts:1`]])
  })

  test(`notes that the entry filter is disabled above a tree it would hide entirely`, () => {
    const md = markdownUnder(
      { showEntry: () => false },
      [MICROSECONDS_METRIC],
      [executing(`only`, `only.ts`, 1, 1)],
    )

    expect(md).toContain(
      `## Call tree\n\nThe entry filter hides every recorded function, so all functions are shown.\n\n`,
    )
  })

  test(`shows the one frame of a profile with no nested call stacks`, () => {
    expect(
      treesOf([MICROSECONDS_METRIC], [executing(`only`, `only.ts`, 1, 1)]),
    ).toEqual([[`└── 1.0ms (100.0%) only  src/only.ts:1`]])
  })
})
