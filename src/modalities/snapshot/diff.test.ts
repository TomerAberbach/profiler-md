import { describe, expect, test } from 'vitest'
import { mdastToMarkdown } from '../../helpers/markdown.ts'
import type { ProfileToMdContext } from '../../options.ts'
import {
  categoryTables,
  improvementsTables,
  regressionsTables,
} from '../../testing/markdown.ts'
import { resolveProfileToMdOptions } from '../../testing/options.ts'
import { diffAggregatedHeapSnapshots } from './diff.ts'
import { formatHeapSnapshotDiff } from './format.ts'
import {
  makeAggregatedClosure,
  makeAggregatedConstructor,
  makeAggregatedHeapSnapshot,
  makeAggregatedString,
  makeSourceLocation,
} from './testing.ts'

const defaultOptions = resolveProfileToMdOptions({ baseURL: `/project` })

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

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(regressionsTables(md, `Self size`)).toEqual([])
    expect(improvementsTables(md, `Self size`)).toEqual([
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
        makeAggregatedConstructor({
          name: `MyClass`,
          selfSize: 200,
          retainedSize: 250,
          instanceCount: 2,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(regressionsTables(md, `Self size`)).toEqual([
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
    expect(improvementsTables(md, `Self size`)).toEqual([])
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

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(regressionsTables(md, `Self size`)).toEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+100 B`,
          '%': `100.0%`,
          Size: `100 B → 200 B`,
          Instances: `1 → 2`,
          Constructor: `MyClass`,
          Location: `src/b.ts:9:9`,
        },
      ],
    ])
    expect(improvementsTables(md, `Self size`)).toEqual([])
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

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(regressionsTables(md, `Largest closures`)).toEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+200 B`,
          '%': `156.3% → 234.4%`,
          Retained: `100 B → 300 B`,
          Instances: `1`,
          Paths: `1`,
          Name: `myFn`,
          Location: `src/a.ts:25:3`,
          'Example path': `(GC root)`,
        },
      ],
    ])
    expect(improvementsTables(md, `Largest closures`)).toEqual([])
  })

  test(`keys each side's closures under that snapshot's own context`, () => {
    // Match normalization is origin-aware, so each side's closures must be
    // keyed under the context that side was aggregated with, not a shared one.
    const observedContexts: ProfileToMdContext[] = []
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      matchEntry: (entry, context) => {
        observedContexts.push(context)
        return undefined
      },
    })
    const base = makeAggregatedHeapSnapshot({
      context: { format: `v8-heap-snapshot`, origin: `node` },
      closures: [
        makeAggregatedClosure({
          name: `myFn`,
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      context: { format: `jsc-heap-snapshot`, origin: `safari` },
      closures: [
        makeAggregatedClosure({
          name: `myFn`,
          selfSize: 128,
          retainedSize: 300,
        }),
      ],
    })

    diffAggregatedHeapSnapshots(base, current, options)

    expect(observedContexts).toEqual([
      { format: `v8-heap-snapshot`, origin: `node` },
      { format: `jsc-heap-snapshot`, origin: `safari` },
    ])
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

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(regressionsTables(md, `Largest closures`)).toEqual([
      [
        {
          Change: `new`,
          Delta: `+100 B`,
          '%': `0.0% → 156.3%`,
          Retained: `0 B → 100 B`,
          Instances: `0 → 1`,
          Paths: `0 → 1`,
          Name: `myFn`,
          Location: `src/b.ts:5:10`,
          'Example path': `(GC root)`,
        },
      ],
    ])
    expect(improvementsTables(md, `Largest closures`)).toEqual([
      [
        {
          Change: `removed`,
          Delta: `-100 B`,
          '%': `156.3% → 0.0%`,
          Retained: `100 B → 0 B`,
          Instances: `1 → 0`,
          Paths: `1 → 0`,
          Name: `myFn`,
          Location: `src/a.ts:5:10`,
          'Example path': `(GC root)`,
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

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(regressionsTables(md, `Largest closures`)).toEqual([])
    expect(improvementsTables(md, `Largest closures`)).toEqual([
      [
        {
          Change: `removed`,
          Delta: `-150 B`,
          '%': `150.0% → 0.0%`,
          Retained: `150 B → 0 B`,
          Instances: `3 → 0`,
          Paths: `1 → 0`,
          Name: `myFn`,
          Location: `src/a.ts:5:10`,
          'Example path': `(GC root)`,
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

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(regressionsTables(md, `Largest closures`)).toEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+100 B`,
          '%': `156.3%`,
          Retained: `100 B → 200 B`,
          Instances: `1`,
          Paths: `1`,
          Name: `myFn`,
          'Example path': `(GC root)`,
        },
      ],
    ])
    expect(improvementsTables(md, `Largest closures`)).toEqual([])
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

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(regressionsTables(md, `Largest strings`)).toEqual([])
    expect(improvementsTables(md, `Largest strings`)).toEqual([
      [
        {
          Change: `-37.5%`,
          Delta: `-30 B`,
          '%': `7.4% → 100.0%`,
          Size: `80 B → 50 B`,
          Value: `hello`,
          Path: `(GC root)`,
        },
      ],
    ])
  })

  test(`reports a category present on one side only as new or removed`, () => {
    const base = makeAggregatedHeapSnapshot({
      totalSize: 200,
      nodeCategoryToStats: new Map([[`object`, { size: 200, nodeCount: 2 }]]),
    })
    const current = makeAggregatedHeapSnapshot({
      totalSize: 50,
      nodeCategoryToStats: new Map([[`string`, { size: 50, nodeCount: 1 }]]),
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `string`,
          Change: `new`,
          Delta: `+50 B`,
          '%': `0.0% → 100.0%`,
          Size: `0 B → 50 B`,
          Nodes: `0 → 1`,
        },
        {
          Category: `object`,
          Change: `removed`,
          Delta: `-200 B`,
          '%': `100.0% → 0.0%`,
          Size: `200 B → 0 B`,
          Nodes: `2 → 0`,
        },
      ],
    ])
  })
})
