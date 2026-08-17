import { describe, expect, test } from 'vitest'
import { mdastToMarkdown } from '../../helpers/markdown.ts'
import type { ProfileToMdContext } from '../../options.ts'
import {
  categoryTables,
  rankingTables,
  resolveProfileToMdOptions,
} from '../../testing.ts'
import { diffAggregatedHeapSnapshots } from './diff.ts'
import { formatHeapSnapshotDiff } from './format.ts'
import {
  makeAggregatedHeapSnapshot,
  makeAggregatedHeapSnapshotConstructor,
  makeAggregatedHeapSnapshotFunction,
  makeAggregatedHeapSnapshotString,
  makeSourceLocation,
} from './testing.ts'

const defaultOptions = resolveProfileToMdOptions({ baseURL: `/project` })

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

    expect(rankingTables(md, `Self size`, `Regressions`)).toEqual([])
    expect(rankingTables(md, `Self size`, `Improvements`)).toEqual([
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

    expect(rankingTables(md, `Self size`, `Regressions`)).toEqual([
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
    expect(rankingTables(md, `Self size`, `Improvements`)).toEqual([])
  })

  test(`matches constructors by name despite differing locations`, () => {
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
          location: makeSourceLocation(`file:///project/src/b.ts`, 9, 9),
          selfSize: 200,
          retainedSize: 200,
          instanceCount: 2,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(rankingTables(md, `Self size`, `Regressions`)).toEqual([
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
    expect(rankingTables(md, `Self size`, `Improvements`)).toEqual([])
  })

  test(`merges and matches constructors whose names differ by a per-run address`, () => {
    // The runtime includes a per-run address in the name. Match normalization
    // strips it so the same class matches across snapshots.
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

    expect(rankingTables(md, `Self size`, `Regressions`)).toEqual([
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
    expect(rankingTables(md, `Self size`, `Improvements`)).toEqual([])
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

    expect(rankingTables(md, `Largest functions`, `Regressions`)).toEqual([
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
    expect(rankingTables(md, `Largest functions`, `Improvements`)).toEqual([])
  })

  test(`keys each side's functions under that snapshot's own context`, () => {
    // Match normalization is origin-aware, so each side's functions must be
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
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `myFn`,
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      context: { format: `jsc-heap-snapshot`, origin: `safari` },
      functions: [
        makeAggregatedHeapSnapshotFunction({
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

    expect(rankingTables(md, `Largest functions`, `Regressions`)).toEqual([
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
    expect(rankingTables(md, `Largest functions`, `Improvements`)).toEqual([
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

  test(`merges same-side functions sharing a name and file`, () => {
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

    expect(rankingTables(md, `Largest functions`, `Regressions`)).toEqual([])
    expect(rankingTables(md, `Largest functions`, `Improvements`)).toEqual([
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

    expect(rankingTables(md, `Largest functions`, `Regressions`)).toEqual([
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
    expect(rankingTables(md, `Largest functions`, `Improvements`)).toEqual([])
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

    expect(rankingTables(md, `Largest strings`, `Regressions`)).toEqual([])
    expect(rankingTables(md, `Largest strings`, `Improvements`)).toEqual([
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
          Delta: `-200 B`,
          '%': `100.0% → 0.0%`,
          Size: `200 B → 0 B`,
          Nodes: `2 → 0`,
        },
      ],
    ])
  })
})
