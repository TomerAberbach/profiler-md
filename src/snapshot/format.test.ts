import { describe, expect, test } from 'vitest'
import { normalizeProfileToMdOptions } from '../options.ts'
import {
  categoryTables,
  profileTitles,
  progressionsTables,
  regressionsTables,
  summaryLines,
} from '../testing/markdown.ts'
import { diffAggregatedHeapSnapshots } from './diff.ts'
import { formatHeapSnapshotDiff } from './format.ts'
import {
  makeAggregatedClosure,
  makeAggregatedConstructor,
  makeAggregatedHeapSnapshot,
  makeAggregatedString,
  makeSourceLocation,
} from './testing.ts'

const defaultOptions = normalizeProfileToMdOptions({ baseURL: `/project` })

describe(`formatHeapSnapshotDiff`, () => {
  test(`produces expected title and summary line`, () => {
    const base = makeAggregatedHeapSnapshot({
      totalSize: 1000,
      nodeCount: 10,
      edgeCount: 20,
    })
    const current = makeAggregatedHeapSnapshot({
      totalSize: 1500,
      nodeCount: 12,
      edgeCount: 25,
    })

    const diff = diffAggregatedHeapSnapshots(base, current)
    const md = formatHeapSnapshotDiff(diff, defaultOptions)

    expect(profileTitles(md)).toEqual([`Heap snapshot diff`])
    expect(summaryLines(md)).toEqual([
      `Allocated 1\u00A0kB → 1.5\u00A0kB (+500\u00A0B, +50.0%) across 10 → 12 nodes and 20 → 25 edges.`,
    ])
  })

  test(`includes a category table with change, delta, and node counts`, () => {
    const base = makeAggregatedHeapSnapshot({
      totalSize: 1000,
      nodeCategoryToStats: new Map([
        [`object`, { size: 1000, nodeCount: 10 }],
        [`string`, { size: 100, nodeCount: 2 }],
      ]),
    })
    const current = makeAggregatedHeapSnapshot({
      totalSize: 1500,
      nodeCategoryToStats: new Map([[`object`, { size: 1500, nodeCount: 12 }]]),
    })

    const diff = diffAggregatedHeapSnapshots(base, current)
    const md = formatHeapSnapshotDiff(diff, defaultOptions)

    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `object`,
          Change: `+50.0%`,
          Delta: `+500 B`,
          Base: `1 kB`,
          Current: `1.5 kB`,
          Nodes: `10 → 12`,
        },
        {
          Category: `string`,
          Change: `removed`,
          Delta: `-100 B`,
          Base: `100 B`,
          Current: `0 B`,
          Nodes: `2 → 0`,
        },
      ],
    ])
  })

  test(`lists constructor regressions and progressions for self and retained size`, () => {
    const base = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedConstructor({
          name: `Grew`,
          selfSize: 100,
          retainedSize: 100,
          instanceCount: 1,
        }),
        makeAggregatedConstructor({
          name: `Removed`,
          selfSize: 50,
          retainedSize: 50,
          instanceCount: 1,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedConstructor({
          name: `Grew`,
          selfSize: 200,
          retainedSize: 200,
          instanceCount: 2,
        }),
        makeAggregatedConstructor({
          name: `Added`,
          selfSize: 30,
          retainedSize: 30,
          instanceCount: 1,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current)
    const md = formatHeapSnapshotDiff(diff, defaultOptions)

    const expectedRegressions = [
      {
        Change: `+100.0%`,
        Delta: `+100 B`,
        Base: `100 B`,
        Current: `200 B`,
        Instances: `1 → 2`,
        Constructor: `Grew`,
      },
      {
        Change: `new`,
        Delta: `+30 B`,
        Base: `0 B`,
        Current: `30 B`,
        Instances: `0 → 1`,
        Constructor: `Added`,
      },
    ]
    const expectedProgressions = [
      {
        Change: `removed`,
        Delta: `-50 B`,
        Base: `50 B`,
        Current: `0 B`,
        Instances: `1 → 0`,
        Constructor: `Removed`,
      },
    ]
    expect(regressionsTables(md, `Self size`)).toEqual([expectedRegressions])
    expect(progressionsTables(md, `Self size`)).toEqual([expectedProgressions])
    expect(regressionsTables(md, `Retained size`)).toEqual([
      expectedRegressions,
    ])
    expect(progressionsTables(md, `Retained size`)).toEqual([
      expectedProgressions,
    ])
  })

  test(`lists closure regressions and progressions by retained size`, () => {
    const base = makeAggregatedHeapSnapshot({
      closures: [
        makeAggregatedClosure({
          name: `grewFn`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 5, 10),
          selfSize: 64,
          retainedSize: 100,
        }),
        makeAggregatedClosure({
          name: `shrankFn`,
          location: makeSourceLocation(`file:///project/src/b.ts`, 1, 1),
          selfSize: 64,
          retainedSize: 200,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      closures: [
        makeAggregatedClosure({
          name: `grewFn`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 7, 10),
          selfSize: 64,
          retainedSize: 300,
          instanceCount: 2,
        }),
        makeAggregatedClosure({
          name: `shrankFn`,
          location: makeSourceLocation(`file:///project/src/b.ts`, 1, 1),
          selfSize: 64,
          retainedSize: 50,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current)
    const md = formatHeapSnapshotDiff(diff, defaultOptions)

    expect(regressionsTables(md, `Largest closures`)).toEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+200 B`,
          Base: `100 B`,
          Current: `300 B`,
          Instances: `1 → 2`,
          Name: `grewFn`,
          Location: `src/a.ts:7:10`,
        },
      ],
    ])
    expect(progressionsTables(md, `Largest closures`)).toEqual([
      [
        {
          Change: `-75.0%`,
          Delta: `-150 B`,
          Base: `200 B`,
          Current: `50 B`,
          Instances: `1 → 1`,
          Name: `shrankFn`,
          Location: `src/b.ts:1:1`,
        },
      ],
    ])
  })

  test(`lists string regressions and progressions by size`, () => {
    const base = makeAggregatedHeapSnapshot({
      strings: [makeAggregatedString({ value: `hello`, selfSize: 50 })],
    })
    const current = makeAggregatedHeapSnapshot({
      strings: [
        makeAggregatedString({ value: `hello`, selfSize: 80 }),
        makeAggregatedString({ value: `hello`, selfSize: 80 }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current)
    const md = formatHeapSnapshotDiff(diff, defaultOptions)

    expect(regressionsTables(md, `Largest strings`)).toEqual([
      [
        {
          Change: `+220.0%`,
          Delta: `+110 B`,
          Base: `50 B`,
          Current: `160 B`,
          Instances: `1 → 2`,
          Value: `hello`,
        },
      ],
    ])
    expect(progressionsTables(md, `Largest strings`)).toEqual([])
  })

  test(`omits the location column when nothing has a location`, () => {
    const base = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedConstructor({
          name: `Grew`,
          selfSize: 100,
          retainedSize: 100,
          instanceCount: 1,
        }),
      ],
      closures: [
        makeAggregatedClosure({
          name: `myFn`,
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedConstructor({
          name: `Grew`,
          selfSize: 200,
          retainedSize: 200,
          instanceCount: 1,
        }),
      ],
      closures: [
        makeAggregatedClosure({
          name: `myFn`,
          selfSize: 64,
          retainedSize: 200,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current)
    const md = formatHeapSnapshotDiff(diff, defaultOptions)

    expect(regressionsTables(md, `Self size`)).toEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+100 B`,
          Base: `100 B`,
          Current: `200 B`,
          Instances: `1 → 1`,
          Constructor: `Grew`,
        },
      ],
    ])
    expect(regressionsTables(md, `Largest closures`)).toEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+100 B`,
          Base: `100 B`,
          Current: `200 B`,
          Instances: `1 → 1`,
          Name: `myFn`,
        },
      ],
    ])
  })

  test(`omits entities hidden by showEntry without hiding entities from the other snapshot`, () => {
    const base = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedConstructor({
          name: `Hidden`,
          selfSize: 100,
          retainedSize: 100,
          instanceCount: 1,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedConstructor({
          name: `Hidden`,
          selfSize: 200,
          retainedSize: 200,
          instanceCount: 1,
        }),
        makeAggregatedConstructor({
          name: `Shown`,
          selfSize: 50,
          retainedSize: 50,
          instanceCount: 1,
        }),
      ],
    })
    const options = normalizeProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `Hidden`,
    })

    const diff = diffAggregatedHeapSnapshots(base, current)
    const md = formatHeapSnapshotDiff(diff, options)

    expect(md).not.toContain(`Hidden`)
    expect(regressionsTables(md, `Self size`)).toEqual([
      [
        {
          Change: `new`,
          Delta: `+50 B`,
          Base: `0 B`,
          Current: `50 B`,
          Instances: `0 → 1`,
          Constructor: `Shown`,
        },
      ],
    ])
  })

  test(`omits the entity sections when nothing changed`, () => {
    const snapshot = makeAggregatedHeapSnapshot({
      totalSize: 300,
      nodeCount: 3,
      edgeCount: 2,
      nodeCategoryToStats: new Map([[`object`, { size: 200, nodeCount: 2 }]]),
      constructors: [
        makeAggregatedConstructor({
          name: `MyClass`,
          selfSize: 200,
          retainedSize: 250,
          instanceCount: 2,
        }),
      ],
      closures: [
        makeAggregatedClosure({
          name: `myFn`,
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
      strings: [makeAggregatedString({ value: `hello`, selfSize: 50 })],
    })

    const diff = diffAggregatedHeapSnapshots(snapshot, snapshot)
    const md = formatHeapSnapshotDiff(diff, defaultOptions)

    expect(md).not.toMatch(/Regressions|Progressions/u)
    expect(md).not.toMatch(/Largest/u)

    // The category table still renders with a zero delta.
    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `object`,
          Change: `0.0%`,
          Delta: `0 B`,
          Base: `200 B`,
          Current: `200 B`,
          Nodes: `2 → 2`,
        },
      ],
    ])
  })
})
