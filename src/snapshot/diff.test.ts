import { describe, expect, test } from 'vitest'
import { normalizeProfileToMdOptions } from '../options.ts'
import {
  categoryTables,
  progressionsTables,
  regressionsTables,
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

describe(`diffAggregatedHeapSnapshots`, () => {
  test(`reports a constructor only in base as removed`, () => {
    const base = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedConstructor({
          name: `MyClass`,
          selfSize: 200,
          retainedSize: 250,
          instanceCount: 2,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot()

    const diff = diffAggregatedHeapSnapshots(base, current)
    const md = formatHeapSnapshotDiff(diff, defaultOptions)

    expect(regressionsTables(md, `Self size`)).toEqual([])
    expect(progressionsTables(md, `Self size`)).toEqual([
      [
        {
          Change: `removed`,
          Delta: `-200 B`,
          Base: `200 B`,
          Current: `0 B`,
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
        makeAggregatedConstructor({
          name: `MyClass`,
          selfSize: 200,
          retainedSize: 250,
          instanceCount: 2,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current)
    const md = formatHeapSnapshotDiff(diff, defaultOptions)

    expect(regressionsTables(md, `Self size`)).toEqual([
      [
        {
          Change: `new`,
          Delta: `+200 B`,
          Base: `0 B`,
          Current: `200 B`,
          Instances: `0 → 2`,
          Constructor: `MyClass`,
        },
      ],
    ])
    expect(progressionsTables(md, `Self size`)).toEqual([])
  })

  test(`matches constructors by name despite differing locations`, () => {
    const base = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedConstructor({
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
        makeAggregatedConstructor({
          name: `MyClass`,
          location: makeSourceLocation(`file:///project/src/b.ts`, 9, 9),
          selfSize: 200,
          retainedSize: 200,
          instanceCount: 2,
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
          Instances: `1 → 2`,
          Constructor: `MyClass`,
          Location: `src/b.ts:9:9`,
        },
      ],
    ])
    expect(progressionsTables(md, `Self size`)).toEqual([])
  })

  test(`matches closures by name and file despite differing line and column`, () => {
    const base = makeAggregatedHeapSnapshot({
      closures: [
        makeAggregatedClosure({
          name: `myFn`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 5, 10),
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      closures: [
        makeAggregatedClosure({
          name: `myFn`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 25, 3),
          selfSize: 128,
          retainedSize: 300,
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
          Instances: `1 → 1`,
          Name: `myFn`,
          Location: `src/a.ts:25:3`,
        },
      ],
    ])
    expect(progressionsTables(md, `Largest closures`)).toEqual([])
  })

  test(`does not match closures with the same name in different files`, () => {
    const base = makeAggregatedHeapSnapshot({
      closures: [
        makeAggregatedClosure({
          name: `myFn`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 5, 10),
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      closures: [
        makeAggregatedClosure({
          name: `myFn`,
          location: makeSourceLocation(`file:///project/src/b.ts`, 5, 10),
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current)
    const md = formatHeapSnapshotDiff(diff, defaultOptions)

    expect(regressionsTables(md, `Largest closures`)).toEqual([
      [
        {
          Change: `new`,
          Delta: `+100 B`,
          Base: `0 B`,
          Current: `100 B`,
          Instances: `0 → 1`,
          Name: `myFn`,
          Location: `src/b.ts:5:10`,
        },
      ],
    ])
    expect(progressionsTables(md, `Largest closures`)).toEqual([
      [
        {
          Change: `removed`,
          Delta: `-100 B`,
          Base: `100 B`,
          Current: `0 B`,
          Instances: `1 → 0`,
          Name: `myFn`,
          Location: `src/a.ts:5:10`,
        },
      ],
    ])
  })

  test(`merges same-side closures sharing a name and file`, () => {
    const base = makeAggregatedHeapSnapshot({
      closures: [
        makeAggregatedClosure({
          name: `myFn`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 5, 10),
          selfSize: 64,
          retainedSize: 100,
          instanceCount: 2,
        }),
        makeAggregatedClosure({
          name: `myFn`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 25, 3),
          selfSize: 36,
          retainedSize: 50,
          instanceCount: 1,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot()

    const diff = diffAggregatedHeapSnapshots(base, current)
    const md = formatHeapSnapshotDiff(diff, defaultOptions)

    expect(regressionsTables(md, `Largest closures`)).toEqual([])
    expect(progressionsTables(md, `Largest closures`)).toEqual([
      [
        {
          Change: `removed`,
          Delta: `-150 B`,
          Base: `150 B`,
          Current: `0 B`,
          Instances: `3 → 0`,
          Name: `myFn`,
          Location: `src/a.ts:5:10`,
        },
      ],
    ])
  })

  test(`matches closures without locations by name`, () => {
    const base = makeAggregatedHeapSnapshot({
      closures: [
        makeAggregatedClosure({
          name: `myFn`,
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      closures: [
        makeAggregatedClosure({
          name: `myFn`,
          selfSize: 128,
          retainedSize: 200,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current)
    const md = formatHeapSnapshotDiff(diff, defaultOptions)

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
    expect(progressionsTables(md, `Largest closures`)).toEqual([])
  })

  test(`groups strings by value, merging duplicates and excluding unnamed strings`, () => {
    const base = makeAggregatedHeapSnapshot({
      strings: [
        makeAggregatedString({ value: `hello`, selfSize: 50 }),
        makeAggregatedString({ value: `hello`, selfSize: 30 }),
        makeAggregatedString({ selfSize: 999 }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      strings: [makeAggregatedString({ value: `hello`, selfSize: 50 })],
    })

    const diff = diffAggregatedHeapSnapshots(base, current)
    const md = formatHeapSnapshotDiff(diff, defaultOptions)

    expect(regressionsTables(md, `Largest strings`)).toEqual([])
    expect(progressionsTables(md, `Largest strings`)).toEqual([
      [
        {
          Change: `-37.5%`,
          Delta: `-30 B`,
          Base: `80 B`,
          Current: `50 B`,
          Instances: `2 → 1`,
          Value: `hello`,
        },
      ],
    ])
  })

  test(`reports a category present on one side only as new or removed`, () => {
    const base = makeAggregatedHeapSnapshot({
      nodeCategoryToStats: new Map([[`object`, { size: 200, nodeCount: 2 }]]),
    })
    const current = makeAggregatedHeapSnapshot({
      nodeCategoryToStats: new Map([[`string`, { size: 50, nodeCount: 1 }]]),
    })

    const diff = diffAggregatedHeapSnapshots(base, current)
    const md = formatHeapSnapshotDiff(diff, defaultOptions)

    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `string`,
          Change: `new`,
          Delta: `+50 B`,
          Base: `0 B`,
          Current: `50 B`,
          Nodes: `0 → 1`,
        },
        {
          Category: `object`,
          Change: `removed`,
          Delta: `-200 B`,
          Base: `200 B`,
          Current: `0 B`,
          Nodes: `2 → 0`,
        },
      ],
    ])
  })
})
