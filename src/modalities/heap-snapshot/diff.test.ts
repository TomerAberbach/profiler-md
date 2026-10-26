import { describe, expect, test } from 'vitest'
import { mdastToMarkdown } from '../../helpers/markdown.ts'
import { makeFileReference } from '../../location.ts'
import type { SourceLocation } from '../../location.ts'
import { resolveProfileToMdOptions } from '../../options.ts'
import {
  categoryTables,
  openingParagraphs,
  paragraphsUnderTitle,
  rankingTables,
} from '../../testing.ts'
import type {
  AggregatedHeapSnapshotNode,
  RetainerPathEdge,
  RetainerPathStep,
} from './aggregate.ts'
import { diffAggregatedHeapSnapshots } from './diff.ts'
import { formatHeapSnapshotDiff } from './format.ts'
import {
  makeAggregatedHeapSnapshot,
  makeAggregatedHeapSnapshotConstructor,
  makeAggregatedHeapSnapshotFunction,
  makeAggregatedHeapSnapshotString,
  makeRetainerHops,
  makeSourceLocation,
  retainedNodeTables,
  retainedSizeRetainerPathTables,
  selfSizeRetainerPathTables,
  SEVERAL_PATHS_NOTE,
} from './testing.ts'
import type { HeapSnapshotNodeCategory } from './type.ts'

const defaultOptions = resolveProfileToMdOptions({ baseURL: `/project` })

const JDK_CONTEXT = { format: `hprof`, origin: `jdk` } as const

const jdkLambda = (address: string, selfSize: number) =>
  makeAggregatedHeapSnapshotConstructor({
    name: `JavaKMeans$$Lambda+0x${address}`,
    selfSize,
    retainedSize: selfSize,
    instanceCount: 1,
  })

describe(`diffAggregatedHeapSnapshots`, () => {
  test(`reports a constructor only in base as removed`, () => {
    const base = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `MyClass`,
          selfSize: 200,
          retainedSize: 250,
          instanceCount: 2,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot()

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(rankingTables(md, `Self size`, `Regressions`)).toStrictEqual([])
    expect(rankingTables(md, `Self size`, `Improvements`)).toStrictEqual([
      [
        {
          Change: `removed`,
          Delta: `-200 B`,
          '%': `100.0% → 0.0%`,
          Size: `200 B → 0 B`,
          Instances: `2 → 0`,
          Constructor: `MyClass`,
        },
      ],
    ])
  })

  test(`reports a constructor only in current as new`, () => {
    const base = makeAggregatedHeapSnapshot()
    const current = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `MyClass`,
          selfSize: 200,
          retainedSize: 250,
          instanceCount: 2,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(rankingTables(md, `Self size`, `Regressions`)).toStrictEqual([
      [
        {
          Change: `new`,
          Delta: `+200 B`,
          '%': `0.0% → 100.0%`,
          Size: `0 B → 200 B`,
          Instances: `0 → 2`,
          Constructor: `MyClass`,
        },
      ],
    ])
    expect(rankingTables(md, `Self size`, `Improvements`)).toStrictEqual([])
  })

  test(`matches constructors whose definition shifted between builds`, () => {
    const base = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `MyClass`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 1, 1),
          selfSize: 100,
          retainedSize: 100,
          instanceCount: 1,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `MyClass`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 9, 9),
          selfSize: 200,
          retainedSize: 200,
          instanceCount: 2,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(rankingTables(md, `Self size`, `Regressions`)).toStrictEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+100 B`,
          '%': `100.0%`,
          Size: `100 B → 200 B`,
          Instances: `1 → 2`,
          Constructor: `MyClass`,
          Location: `./src/a.ts:1:1 → 9:9`,
        },
      ],
    ])
    expect(rankingTables(md, `Self size`, `Improvements`)).toStrictEqual([])
  })

  test(`merges and matches constructors whose names differ by a per-run address`, () => {
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      matchEntry: ({ name }) => ({
        name: (name ?? ``).replace(/@0x[0-9a-f]+$/u, ``),
      }),
    })
    const base = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `MyClass@0x1003a68`,
          selfSize: 100,
          retainedSize: 100,
          instanceCount: 1,
        }),
        makeAggregatedHeapSnapshotConstructor({
          name: `MyClass@0x117f9d8`,
          selfSize: 100,
          retainedSize: 100,
          instanceCount: 1,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `MyClass@0x10d95b8`,
          selfSize: 300,
          retainedSize: 300,
          instanceCount: 3,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current, options)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, options))

    expect(rankingTables(md, `Self size`, `Regressions`)).toStrictEqual([
      [
        {
          Change: `+50.0%`,
          Delta: `+100 B`,
          '%': `100.0%`,
          Size: `200 B → 300 B`,
          Instances: `2 → 3`,
          Constructor: `MyClass`,
        },
      ],
    ])
    expect(rankingTables(md, `Self size`, `Improvements`)).toStrictEqual([])
  })

  test(`matches functions by name and file despite differing line and column`, () => {
    const base = makeAggregatedHeapSnapshot({
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `myFn`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 5, 10),
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `myFn`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 25, 3),
          selfSize: 128,
          retainedSize: 300,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(rankingTables(md, `Largest functions`, `Regressions`)).toStrictEqual(
      [
        [
          {
            Change: `+200.0%`,
            Delta: `+200 B`,
            '%': `156.3% → 234.4%`,
            Retained: `100 B → 300 B`,
            Instances: `1`,
            Paths: `1`,
            Name: `myFn`,
            Location: `./src/a.ts:5:10 → 25:3`,
            'Example path': `(unknown) ← (GC root)`,
          },
        ],
      ],
    )
    expect(
      rankingTables(md, `Largest functions`, `Improvements`),
    ).toStrictEqual([])
  })

  test(`keys each side's functions under that snapshot's own context`, () => {
    // The origin normalizes match keys.
    const observedKeyings = new Set<string>()
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      matchEntry: (entry, { format, origin }) => {
        observedKeyings.add(`${entry.name} as ${format} from ${origin}`)
        return undefined
      },
    })
    const base = makeAggregatedHeapSnapshot({
      context: { format: `v8-heap-snapshot`, origin: `node` },
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `baseFn`,
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      context: { format: `jsc-heap-snapshot`, origin: `safari` },
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `currentFn`,
          selfSize: 128,
          retainedSize: 300,
        }),
      ],
    })

    diffAggregatedHeapSnapshots(base, current, options)

    expect(observedKeyings).toStrictEqual(
      new Set([
        `baseFn as v8-heap-snapshot from node`,
        `currentFn as jsc-heap-snapshot from safari`,
      ]),
    )
  })

  test(`does not match functions with the same name in different files`, () => {
    const base = makeAggregatedHeapSnapshot({
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `myFn`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 5, 10),
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `myFn`,
          location: makeSourceLocation(`file:///project/src/b.ts`, 5, 10),
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(rankingTables(md, `Largest functions`, `Regressions`)).toStrictEqual(
      [
        [
          {
            Change: `new`,
            Delta: `+100 B`,
            '%': `0.0% → 156.3%`,
            Retained: `0 B → 100 B`,
            Instances: `0 → 1`,
            Paths: `0 → 1`,
            Name: `myFn`,
            Location: `./src/b.ts:5:10`,
            'Example path': `(unknown) ← (GC root)`,
          },
        ],
      ],
    )
    expect(
      rankingTables(md, `Largest functions`, `Improvements`),
    ).toStrictEqual([
      [
        {
          Change: `removed`,
          Delta: `-100 B`,
          '%': `156.3% → 0.0%`,
          Retained: `100 B → 0 B`,
          Instances: `1 → 0`,
          Paths: `1 → 0`,
          Name: `myFn`,
          Location: `./src/a.ts:5:10`,
          'Example path': `(unknown) ← (GC root)`,
        },
      ],
    ])
  })

  test(`keeps same-side functions at different lines of a file apart`, () => {
    const base = makeAggregatedHeapSnapshot({
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `myFn`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 5, 10),
          selfSize: 64,
          retainedSize: 100,
          instanceCount: 2,
        }),
        makeAggregatedHeapSnapshotFunction({
          name: `myFn`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 25, 3),
          selfSize: 36,
          retainedSize: 50,
          instanceCount: 1,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot()

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(rankingTables(md, `Largest functions`, `Regressions`)).toStrictEqual(
      [],
    )
    expect(
      rankingTables(md, `Largest functions`, `Improvements`),
    ).toStrictEqual([
      [
        {
          Change: `removed`,
          Delta: `-100 B`,
          '%': `100.0% → 0.0%`,
          Retained: `100 B → 0 B`,
          Instances: `2 → 0`,
          Paths: `1 → 0`,
          Name: `myFn`,
          Location: `./src/a.ts:5:10`,
          'Example path': `(unknown) ← (GC root)`,
        },
        {
          Change: `removed`,
          Delta: `-50 B`,
          '%': `50.0% → 0.0%`,
          Retained: `50 B → 0 B`,
          Instances: `1 → 0`,
          Paths: `1 → 0`,
          Name: `myFn`,
          Location: `./src/a.ts:25:3`,
          'Example path': `(unknown) ← (GC root)`,
        },
      ],
    ])
  })

  test(`merges same-side constructors with no line that share a match key`, () => {
    const base = makeAggregatedHeapSnapshot({
      context: JDK_CONTEXT,
      constructors: [
        jdkLambda(`000000b801205218`, 40),
        jdkLambda(`000000b801205400`, 60),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      context: JDK_CONTEXT,
      constructors: [jdkLambda(`000000c8012a0000`, 30)],
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(rankingTables(md, `Self size`, `Improvements`)).toStrictEqual([
      [
        {
          Change: `-70.0%`,
          Delta: `-70 B`,
          '%': `100.0%`,
          Size: `100 B → 30 B`,
          Instances: `2 → 1`,
          Constructor: `JavaKMeans$$Lambda`,
        },
      ],
    ])
  })

  test(`pairs same-side constructors with no line that both sides have with themselves`, () => {
    const base = makeAggregatedHeapSnapshot({
      context: JDK_CONTEXT,
      constructors: [
        jdkLambda(`000000b801205218`, 40),
        jdkLambda(`000000b801205400`, 60),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      context: JDK_CONTEXT,
      constructors: [
        jdkLambda(`000000b801205218`, 30),
        jdkLambda(`000000b801205400`, 60),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(rankingTables(md, `Self size`, `Improvements`)).toStrictEqual([
      [
        {
          Change: `-25.0%`,
          Delta: `-10 B`,
          '%': `40.0% → 33.3%`,
          Size: `40 B → 30 B`,
          Instances: `1`,
          Constructor: `JavaKMeans$$Lambda+0x000000b801205218`,
        },
      ],
    ])
  })

  test.each([
    [
      `a URL`,
      (name: string) => name.replace(/\.[a-z]+\.js$/u, `.js`),
      `./chunk.js`,
    ],
    [`a name`, () => `chunk`, `chunk`],
  ])(
    `names a merged constructor named by a URL by an entry match naming %s`,
    (_, matchName, expectedConstructor) => {
      const chunk = (hash: string, selfSize: number) =>
        makeAggregatedHeapSnapshotConstructor({
          name: `file:///project/chunk.${hash}.js`,
          nameLocation: makeFileReference(`file:///project/chunk.${hash}.js`),
          selfSize,
          retainedSize: selfSize,
          instanceCount: 1,
        })
      const base = makeAggregatedHeapSnapshot({
        constructors: [chunk(`abc`, 40), chunk(`def`, 60)],
      })
      const current = makeAggregatedHeapSnapshot({
        constructors: [chunk(`ghi`, 30)],
      })
      const options = resolveProfileToMdOptions({
        baseURL: `/project`,
        matchEntry: entry => ({ name: matchName(entry.name!) }),
      })

      const diff = diffAggregatedHeapSnapshots(base, current, options)
      const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, options))

      expect(rankingTables(md, `Self size`, `Improvements`)).toStrictEqual([
        [
          {
            Change: `-70.0%`,
            Delta: `-70 B`,
            '%': `100.0%`,
            Size: `100 B → 30 B`,
            Instances: `2 → 1`,
            Constructor: expectedConstructor,
          },
        ],
      ])
    },
  )

  test(`matches functions without locations by name`, () => {
    const base = makeAggregatedHeapSnapshot({
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `myFn`,
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `myFn`,
          selfSize: 128,
          retainedSize: 200,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(rankingTables(md, `Largest functions`, `Regressions`)).toStrictEqual(
      [
        [
          {
            Change: `+100.0%`,
            Delta: `+100 B`,
            '%': `156.3%`,
            Retained: `100 B → 200 B`,
            Instances: `1`,
            Paths: `1`,
            Name: `myFn`,
            'Example path': `(unknown) ← (GC root)`,
          },
        ],
      ],
    )
    expect(
      rankingTables(md, `Largest functions`, `Improvements`),
    ).toStrictEqual([])
  })

  test(`groups strings by value, merging duplicates and excluding unnamed strings`, () => {
    const base = makeAggregatedHeapSnapshot({
      strings: [
        makeAggregatedHeapSnapshotString({ value: `hello`, selfSize: 50 }),
        makeAggregatedHeapSnapshotString({ value: `hello`, selfSize: 30 }),
        makeAggregatedHeapSnapshotString({ selfSize: 999 }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      strings: [
        makeAggregatedHeapSnapshotString({ value: `hello`, selfSize: 50 }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(rankingTables(md, `Largest strings`, `Regressions`)).toStrictEqual(
      [],
    )
    expect(rankingTables(md, `Largest strings`, `Improvements`)).toStrictEqual([
      [
        {
          Change: `-37.5%`,
          Delta: `-30 B`,
          '%': `7.4% → 100.0%`,
          Size: `80 B → 50 B`,
          Value: `hello`,
          Path: `(unknown) ← (GC root)`,
        },
      ],
    ])
  })

  test(`reports a category present on one side only as new or removed`, () => {
    const base = makeAggregatedHeapSnapshot({
      heldSize: 200,
      nodeCategoryToStats: new Map([
        [`object`, { size: 150, nodeCount: 2 }],
        [`array`, { size: 50, nodeCount: 1 }],
      ]),
    })
    const current = makeAggregatedHeapSnapshot({
      heldSize: 50,
      nodeCategoryToStats: new Map([[`string`, { size: 50, nodeCount: 1 }]]),
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(categoryTables(md)).toStrictEqual([
      [
        {
          Category: `String`,
          Change: `new`,
          Delta: `+50 B`,
          '%': `0.0% → 100.0%`,
          Size: `0 B → 50 B`,
          Nodes: `0 → 1`,
        },
        {
          Category: `Object`,
          Change: `removed`,
          Delta: `-150 B`,
          '%': `75.0% → 0.0%`,
          Size: `150 B → 0 B`,
          Nodes: `2 → 0`,
        },
        {
          Category: `Array`,
          Change: `removed`,
          Delta: `-50 B`,
          '%': `25.0% → 0.0%`,
          Size: `50 B → 0 B`,
          Nodes: `1 → 0`,
        },
      ],
    ])
  })

  test(`sorts categories by their larger side's share`, () => {
    const base = makeAggregatedHeapSnapshot({
      heldSize: 200,
      nodeCategoryToStats: new Map([
        [`object`, { size: 180, nodeCount: 9 }],
        [`string`, { size: 20, nodeCount: 1 }],
      ]),
    })
    const current = makeAggregatedHeapSnapshot({
      heldSize: 50,
      nodeCategoryToStats: new Map([
        [`string`, { size: 40, nodeCount: 2 }],
        [`object`, { size: 10, nodeCount: 1 }],
      ]),
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(categoryTables(md)).toStrictEqual([
      [
        {
          Category: `Object`,
          Change: `-94.4%`,
          Delta: `-170 B`,
          '%': `90.0% → 20.0%`,
          Size: `180 B → 10 B`,
          Nodes: `9 → 1`,
        },
        {
          Category: `String`,
          Change: `+100.0%`,
          Delta: `+20 B`,
          '%': `10.0% → 80.0%`,
          Size: `20 B → 40 B`,
          Nodes: `1 → 2`,
        },
      ],
    ])
  })
})

/** A step through the property {@link name} of a retainer. */
const propertyStep = (
  name: string,
  retainer: string,
  location?: SourceLocation,
): RetainerPathStep => ({
  edge: { type: `property`, name },
  retainer: { id: 0, name: retainer, location },
})

describe(`formatHeapSnapshotDiff instances`, () => {
  /** A snapshot of `Foo` instances, each of a size and at a retainer path. */
  const snapshotOf = (
    instances: { size: number; steps: RetainerPathStep[] }[],
  ) => {
    const constructor = makeAggregatedHeapSnapshotConstructor({
      name: `Foo`,
      selfSize: instances.reduce((sum, { size }) => sum + size, 0),
      retainedSize: instances.reduce((sum, { size }) => sum + size, 0),
      instanceCount: 0,
    })
    constructor.instances = instances.map(({ size }, id) => ({
      type: `node`,
      id,
      name: `Foo`,
      category: `object`,
      selfSize: size,
      retainedSize: size,
    }))
    return {
      ...makeAggregatedHeapSnapshot({ constructors: [constructor] }),
      ...makeRetainerHops(instances.map(({ steps }) => steps)),
    }
  }

  const instanceTablesOf = (
    base: { size: number; steps: RetainerPathStep[] }[],
    current: { size: number; steps: RetainerPathStep[] }[],
  ) => {
    const md = mdastToMarkdown(
      formatHeapSnapshotDiff(
        diffAggregatedHeapSnapshots(
          snapshotOf(base),
          snapshotOf(current),
          defaultOptions,
        ),
        defaultOptions,
      ),
    )
    const tables = selfSizeRetainerPathTables(md, `Foo`)
    expect(retainedSizeRetainerPathTables(md, `Foo`)).toStrictEqual(tables)
    return tables
  }

  test(`pairs each constructor's instance groups by retainer path`, () => {
    expect(
      instanceTablesOf(
        [
          { size: 100, steps: [propertyStep(`a`, `Holder`)] },
          { size: 50, steps: [propertyStep(`b`, `Holder`)] },
        ],
        [
          { size: 100, steps: [propertyStep(`a`, `Holder`)] },
          { size: 300, steps: [propertyStep(`b`, `Holder`)] },
          { size: 40, steps: [propertyStep(`c`, `Holder`)] },
        ],
      ),
    ).toStrictEqual([
      [
        {
          Change: `+500.0%`,
          Delta: `+250 B`,
          '%': `33.3% → 68.2%`,
          Size: `50 B → 300 B`,
          Instances: `1`,
          Path: `Foo ←.b– Holder`,
        },
        {
          Change: `new`,
          Delta: `+40 B`,
          '%': `0.0% → 9.1%`,
          Size: `0 B → 40 B`,
          Instances: `0 → 1`,
          Path: `Foo ←.c– Holder`,
        },
      ],
    ])
  })

  test(`pairs the groups whose retainers an edit moved along their file`, () => {
    const stepAt = (column: number) =>
      propertyStep(
        `context`,
        `l`,
        makeSourceLocation(`/project/d3.js`, 2, column),
      )

    expect(
      instanceTablesOf(
        [
          { size: 10, steps: [stepAt(100)] },
          { size: 20, steps: [stepAt(200)] },
        ],
        [
          { size: 30, steps: [stepAt(80)] },
          { size: 60, steps: [stepAt(180)] },
        ],
      ),
    ).toStrictEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+40 B`,
          '%': `66.7%`,
          Size: `20 B → 60 B`,
          Instances: `1`,
          Path: `Foo ←.context– l (./d3.js:2:180)`,
        },
        {
          Change: `+200.0%`,
          Delta: `+20 B`,
          '%': `33.3%`,
          Size: `10 B → 30 B`,
          Instances: `1`,
          Path: `Foo ←.context– l (./d3.js:2:80)`,
        },
      ],
    ])
  })

  test(`pairs the groups with one path before pairing by position`, () => {
    const pathTo = (column: number) => [
      propertyStep(`context`, `l`, makeSourceLocation(`/project/d3.js`, 2, 10)),
      propertyStep(
        `context`,
        `t`,
        makeSourceLocation(`/project/d3.js`, 2, column),
      ),
    ]

    expect(
      instanceTablesOf(
        [
          { size: 10, steps: pathTo(100) },
          { size: 20, steps: pathTo(200) },
        ],
        [
          { size: 40, steps: pathTo(200) },
          { size: 30, steps: pathTo(100) },
        ],
      ),
    ).toStrictEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+20 B`,
          '%': `33.3% → 42.9%`,
          Size: `10 B → 30 B`,
          Instances: `1`,
          Path: `Foo ←.context– l (./d3.js:2:10) ←.context– t (./d3.js:2:100)`,
        },
        {
          Change: `+100.0%`,
          Delta: `+20 B`,
          '%': `66.7% → 57.1%`,
          Size: `20 B → 40 B`,
          Instances: `1`,
          Path: `Foo ←.context– l (./d3.js:2:10) ←.context– t (./d3.js:2:200)`,
        },
      ],
    ])
  })

  test(`pairs the groups by the step an edit moved past a step it did not`, () => {
    const pathTo = (column: number) => [
      propertyStep(`context`, `l`, makeSourceLocation(`/project/d3.js`, 2, 10)),
      propertyStep(
        `context`,
        `t`,
        makeSourceLocation(`/project/d3.js`, 2, column),
      ),
    ]

    expect(
      instanceTablesOf(
        [
          { size: 10, steps: pathTo(100) },
          { size: 20, steps: pathTo(200) },
        ],
        [
          { size: 60, steps: pathTo(180) },
          { size: 30, steps: pathTo(80) },
        ],
      ),
    ).toStrictEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+40 B`,
          '%': `66.7%`,
          Size: `20 B → 60 B`,
          Instances: `1`,
          Path: `Foo ←.context– l (./d3.js:2:10) ←.context– t (./d3.js:2:180)`,
        },
        {
          Change: `+200.0%`,
          Delta: `+20 B`,
          '%': `33.3%`,
          Size: `10 B → 30 B`,
          Instances: `1`,
          Path: `Foo ←.context– l (./d3.js:2:10) ←.context– t (./d3.js:2:80)`,
        },
      ],
    ])
  })

  test(`pairs the groups whose jQuery data property differs per page load`, () => {
    expect(
      instanceTablesOf(
        [
          {
            size: 10,
            steps: [propertyStep(`jQuery371070616879042118561`, `HTMLElement`)],
          },
        ],
        [
          {
            size: 30,
            steps: [propertyStep(`jQuery37102850593049792911`, `HTMLElement`)],
          },
        ],
      ),
    ).toStrictEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+20 B`,
          '%': `100.0%`,
          Size: `10 B → 30 B`,
          Instances: `1`,
          Path: `Foo ←.jQuery37102850593049792911– HTMLElement`,
        },
      ],
    ])
  })
})

const SEVERAL_RETAINERS: RetainerPathEdge = { type: `several-retainers` }

describe(`formatHeapSnapshotDiff retained nodes`, () => {
  type RetainedNode = {
    name: string
    size: number
    category?: HeapSnapshotNodeCategory
    location?: SourceLocation

    /** The steps from the node to an instance of `fn`, held by the instance. */
    steps: RetainerPathStep[]

    /** The index of the instance in {@link SnapshotFunction.instanceSteps}. */
    instance?: number
  }

  type SnapshotFunction = {
    location?: SourceLocation
    retainedSize: number
    nodes: RetainedNode[]

    /**
     * Each instance's steps to the GC root, or to the instance before it when
     * {@link nestsInstances} is set.
     */
    instanceSteps?: RetainerPathStep[][]
    nestsInstances?: boolean
  }

  /**
   * A snapshot of `fn`, whose instances retain the nodes, or of no function
   * when {@link fn} is undefined.
   */
  const snapshotOf = (fn: SnapshotFunction | undefined) => {
    const nodes = fn?.nodes ?? []
    const instanceSteps = fn?.instanceSteps ?? [[]]
    const instanceOrdinals = instanceSteps.map(
      (_, index) => nodes.length + index,
    )
    return {
      ...makeAggregatedHeapSnapshot({
        functions: fn
          ? [
              {
                ...makeAggregatedHeapSnapshotFunction({
                  name: `fn`,
                  selfSize: 10,
                  retainedSize: fn.retainedSize,
                  location: fn.location,
                }),
                largestInstanceOrdinal: instanceOrdinals[0]!,
                instanceOrdinals,
              },
            ]
          : [],
      }),
      // The nodes come first, then the instances, so each path's ordinal is
      // its node's.
      ...makeRetainerHops(
        [...nodes.map(({ steps }) => steps), ...instanceSteps],
        [
          ...nodes.map(({ instance = 0 }) => instanceOrdinals[instance]),
          ...instanceSteps.map((_, index) =>
            fn?.nestsInstances && index > 0
              ? instanceOrdinals[index - 1]
              : undefined,
          ),
        ],
      ),
      // An instance retains its own nodes, and those of the instances it
      // dominates.
      retainedNodesOf: (instanceOrdinal: number) =>
        nodes.flatMap(
          (
            { name, size, category = `object`, location, instance = 0 },
            id,
          ): AggregatedHeapSnapshotNode[] =>
            fn?.nestsInstances || instanceOrdinals[instance] === instanceOrdinal
              ? [
                  {
                    type: `node`,
                    id,
                    name,
                    category,
                    selfSize: size,
                    retainedSize: size,
                    location,
                  },
                ]
              : [],
        ),
    }
  }

  const retainedMdOf = (
    base: SnapshotFunction | undefined,
    current: SnapshotFunction | undefined,
    options = defaultOptions,
  ) =>
    mdastToMarkdown(
      formatHeapSnapshotDiff(
        diffAggregatedHeapSnapshots(
          snapshotOf(base),
          snapshotOf(current),
          options,
        ),
        options,
      ),
    )

  const retainedTablesOf = (
    base: SnapshotFunction | undefined,
    current: SnapshotFunction | undefined,
    options = defaultOptions,
  ) => retainedNodeTables(retainedMdOf(base, current, options), `fn`)

  const fnStep = (name: string) => propertyStep(name, `fn`)

  describe(`retainer path notes`, () => {
    const OPENING = `Retained nodes with the largest change in contribution to each function's retained size.`

    test.each([
      {
        notation: `no notation`,
        steps: [fnStep(`p`)],
        hasSeveralPathsNote: false,
        opening: OPENING,
      },
      {
        notation: `a step through several retainers`,
        steps: [{ edge: SEVERAL_RETAINERS, retainer: { id: 0, name: `fn` } }],
        hasSeveralPathsNote: true,
        opening: OPENING,
      },
      {
        notation: `an array element`,
        steps: [
          {
            edge: { type: `element`, index: 0 } as const,
            retainer: { id: 0, name: `Array` },
          },
          fnStep(`items`),
        ],
        hasSeveralPathsNote: false,
        opening: `${OPENING} \`[]\` stands for any element of an array.`,
      },
    ])(
      `explains the notation of shown paths with $notation`,
      ({ steps, hasSeveralPathsNote, opening }) => {
        const base = {
          retainedSize: 100,
          nodes: [{ name: `Buf`, size: 10, steps }],
        }
        const current = {
          retainedSize: 200,
          nodes: [{ name: `Buf`, size: 30, steps }],
        }

        const md = retainedMdOf(base, current)

        expect(paragraphsUnderTitle(md).includes(SEVERAL_PATHS_NOTE)).toBe(
          hasSeveralPathsNote,
        )
        expect(openingParagraphs(md, `Retained nodes`)).toStrictEqual([opening])
      },
    )
  })

  test(`pairs each function's retained nodes by name and retainer path`, () => {
    const pPath = [fnStep(`p`)]
    const qPath = [fnStep(`q`)]

    expect(
      retainedTablesOf(
        {
          retainedSize: 200,
          nodes: [
            { name: `Buf`, size: 100, steps: pPath },
            { name: `Buf`, size: 50, steps: pPath },
            { name: `Str`, size: 30, steps: qPath },
          ],
        },
        {
          retainedSize: 220,
          nodes: [
            { name: `Buf`, size: 100, steps: pPath },
            { name: `Str`, size: 90, steps: qPath },
          ],
        },
      ),
    ).toStrictEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+60 B`,
          '%': `15.0% → 40.9%`,
          Self: `30 B → 90 B`,
          Name: `Str`,
          'Path to function': `Str ←.q– fn`,
        },
        {
          Change: `-33.3%`,
          Delta: `-50 B`,
          '%': `75.0% → 45.5%`,
          Self: `150 B → 100 B`,
          Name: `Buf`,
          'Path to function': `Buf ←.p– fn`,
        },
      ],
    ])
  })

  test(`pairs the retained nodes of a function whose own retainer changed`, () => {
    const steps = [propertyStep(`buf`, `Holder`), fnStep(`holder`)]

    expect(
      retainedTablesOf(
        {
          retainedSize: 100,
          nodes: [{ name: `Buf`, size: 10, steps }],
          instanceSteps: [[propertyStep(`fn`, `system / Context`)]],
        },
        {
          retainedSize: 200,
          nodes: [{ name: `Buf`, size: 30, steps }],
          instanceSteps: [[propertyStep(`fn`, `Window`)]],
        },
      ),
    ).toStrictEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+20 B`,
          '%': `10.0% → 15.0%`,
          Self: `10 B → 30 B`,
          Name: `Buf`,
          'Path to function': `Buf ←.buf– Holder ←.holder– fn`,
        },
      ],
    ])
  })

  test(`groups the elements of an array`, () => {
    const elementsOf = (count: number): RetainedNode[] =>
      Array.from({ length: count }, (_, index) => ({
        name: `Foo`,
        size: 10,
        steps: [
          {
            edge: { type: `element`, index },
            retainer: { id: 0, name: `Array` },
          },
          fnStep(`items`),
        ],
      }))

    expect(
      retainedTablesOf(
        { retainedSize: 100, nodes: elementsOf(2) },
        { retainedSize: 200, nodes: elementsOf(5) },
      ),
    ).toStrictEqual([
      [
        {
          Change: `+150.0%`,
          Delta: `+30 B`,
          '%': `20.0% → 25.0%`,
          Self: `20 B → 50 B`,
          Name: `Foo`,
          'Path to function': `Foo ←[]– Array ←.items– fn`,
        },
      ],
    ])
  })

  test(`separates the retained nodes of one name by location and category`, () => {
    const steps = [fnStep(`p`)]
    const at = (column: number) =>
      makeSourceLocation(`/project/d3.js`, 2, column)

    expect(
      retainedTablesOf(
        {
          location: at(1),
          retainedSize: 100,
          nodes: [
            { name: `f`, size: 10, steps, location: at(10) },
            { name: `f`, size: 30, steps, location: at(20) },
            { name: `f`, size: 5, steps, category: `string` },
          ],
        },
        {
          location: at(1),
          retainedSize: 200,
          nodes: [
            { name: `f`, size: 30, steps, location: at(10) },
            { name: `f`, size: 10, steps, location: at(20) },
            { name: `f`, size: 5, steps, category: `array` },
          ],
        },
      ),
    ).toStrictEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+20 B`,
          '%': `10.0% → 15.0%`,
          Self: `10 B → 30 B`,
          Name: `f`,
          Location: `./d3.js:2:10`,
          'Path to function': `f ←.p– fn`,
        },
        {
          Change: `-66.7%`,
          Delta: `-20 B`,
          '%': `30.0% → 5.0%`,
          Self: `30 B → 10 B`,
          Name: `f`,
          Location: `./d3.js:2:20`,
          'Path to function': `f ←.p– fn`,
        },
        {
          Change: `removed`,
          Delta: `-5 B`,
          '%': `5.0% → 0.0%`,
          Self: `5 B → 0 B`,
          Name: `f`,
          Location: `<unknown>`,
          'Path to function': `f ←.p– fn`,
        },
        {
          Change: `new`,
          Delta: `+5 B`,
          '%': `0.0% → 2.5%`,
          Self: `0 B → 5 B`,
          Name: `f`,
          Location: `<unknown>`,
          'Path to function': `f ←.p– fn`,
        },
      ],
    ])
  })

  test(`hides the retained nodes whose location the entry filter hides`, () => {
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: ({ location }) => location === undefined,
    })
    const nodes = [
      { name: `Shown`, size: 10, steps: [fnStep(`p`)] },
      {
        name: `Hidden`,
        size: 20,
        steps: [fnStep(`q`)],
        location: makeSourceLocation(`/project/vendor.js`, 1, 1),
      },
    ]

    const tables = retainedTablesOf(
      { retainedSize: 100, nodes },
      {
        retainedSize: 200,
        nodes: nodes.map(node => ({ ...node, size: node.size * 2 })),
      },
      options,
    )

    expect(tables).toStrictEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+10 B`,
          '%': `10.0%`,
          Self: `10 B → 20 B`,
          Name: `Shown`,
          'Path to function': `Shown ←.p– fn`,
        },
      ],
    ])
  })

  test(`pairs the nodes whose retainers an edit moved along their file`, () => {
    const stepsAt = (column: number) => [
      propertyStep(
        `buf`,
        `Holder`,
        makeSourceLocation(`/project/d3.js`, 2, column),
      ),
      fnStep(`holder`),
    ]

    expect(
      retainedTablesOf(
        {
          retainedSize: 100,
          nodes: [
            { name: `Buf`, size: 10, steps: stepsAt(100) },
            { name: `Buf`, size: 20, steps: stepsAt(200) },
          ],
        },
        {
          retainedSize: 200,
          nodes: [
            { name: `Buf`, size: 30, steps: stepsAt(80) },
            { name: `Buf`, size: 60, steps: stepsAt(180) },
          ],
        },
      ),
    ).toStrictEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+40 B`,
          '%': `20.0% → 30.0%`,
          Self: `20 B → 60 B`,
          Name: `Buf`,
          'Path to function': `Buf ←.buf– Holder (./d3.js:2:180) ←.holder– fn`,
        },
        {
          Change: `+200.0%`,
          Delta: `+20 B`,
          '%': `10.0% → 15.0%`,
          Self: `10 B → 30 B`,
          Name: `Buf`,
          'Path to function': `Buf ←.buf– Holder (./d3.js:2:80) ←.holder– fn`,
        },
      ],
    ])
  })

  test(`pairs the nodes whose names differ by a per-run address`, () => {
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      matchEntry: ({ name }) => ({
        name: (name ?? ``).replace(/@0x[0-9a-f]+$/u, ``),
      }),
    })
    const steps = [fnStep(`p`)]

    expect(
      retainedTablesOf(
        {
          retainedSize: 100,
          nodes: [{ name: `Buf@0x1003a68`, size: 10, steps }],
        },
        {
          retainedSize: 200,
          nodes: [{ name: `Buf@0x117f9d8`, size: 30, steps }],
        },
        options,
      ),
    ).toStrictEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+20 B`,
          '%': `10.0% → 15.0%`,
          Self: `10 B → 30 B`,
          Name: `Buf@0x117f9d8`,
          'Path to function': `Buf@0x117f9d8 ←.p– fn`,
        },
      ],
    ])
  })

  test(`counts the nodes of an instance another instance dominates once`, () => {
    const nodes: RetainedNode[] = [
      { name: `Buf`, size: 10, steps: [fnStep(`outer`)] },
      { name: `Buf`, size: 20, steps: [fnStep(`inner`)], instance: 1 },
    ]
    const instanceSteps = [[], [fnStep(`next`)]]

    expect(
      retainedTablesOf(
        { retainedSize: 100, nodes, instanceSteps, nestsInstances: true },
        {
          retainedSize: 200,
          nodes: nodes.map(node => ({ ...node, size: node.size * 2 })),
          instanceSteps,
          nestsInstances: true,
        },
      ),
    ).toStrictEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+20 B`,
          '%': `20.0%`,
          Self: `20 B → 40 B`,
          Name: `Buf`,
          'Path to function': `Buf ←.inner– fn ←.next– fn`,
        },
        {
          Change: `+100.0%`,
          Delta: `+10 B`,
          '%': `10.0%`,
          Self: `10 B → 20 B`,
          Name: `Buf`,
          'Path to function': `Buf ←.outer– fn`,
        },
      ],
    ])
  })

  test(`marks each retainer that holds no edge to the node it retains`, () => {
    const steps = [
      { edge: SEVERAL_RETAINERS, retainer: { id: 0, name: `Holder` } },
      propertyStep(`holder`, `fn`),
      { edge: SEVERAL_RETAINERS, retainer: { id: 0, name: `fn` } },
    ]
    expect(
      retainedTablesOf(
        { retainedSize: 100, nodes: [{ name: `Buf`, size: 10, steps }] },
        { retainedSize: 200, nodes: [{ name: `Buf`, size: 30, steps }] },
      ),
    ).toStrictEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+20 B`,
          '%': `10.0% → 15.0%`,
          Self: `10 B → 30 B`,
          Name: `Buf`,
          'Path to function': `Buf ←(several paths)– Holder ←.holder– fn ←(several paths)– fn`,
        },
      ],
    ])
  })

  test(`reports the retained nodes of a function only in base as removed`, () => {
    expect(
      retainedTablesOf(
        {
          retainedSize: 100,
          nodes: [{ name: `Buf`, size: 10, steps: [fnStep(`p`)] }],
        },
        undefined,
      ),
    ).toStrictEqual([
      [
        {
          Change: `removed`,
          Delta: `-10 B`,
          '%': `10.0% → 0.0%`,
          Self: `10 B → 0 B`,
          Name: `Buf`,
          'Path to function': `Buf ←.p– fn`,
        },
      ],
    ])
  })

  test(`reports the retained nodes of a function only in current as new`, () => {
    expect(
      retainedTablesOf(undefined, {
        retainedSize: 200,
        nodes: [{ name: `Buf`, size: 10, steps: [fnStep(`p`)] }],
      }),
    ).toStrictEqual([
      [
        {
          Change: `new`,
          Delta: `+10 B`,
          '%': `0.0% → 5.0%`,
          Self: `0 B → 10 B`,
          Name: `Buf`,
          'Path to function': `Buf ←.p– fn`,
        },
      ],
    ])
  })
})
