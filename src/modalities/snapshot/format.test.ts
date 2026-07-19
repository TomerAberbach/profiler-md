import { describe, expect, test } from 'vitest'
import { mdastToMarkdown } from '../../helpers/markdown.ts'
import {
  categoryTables,
  improvementsTables,
  profileTitles,
  regressionsTables,
  resolveProfileToMdOptions,
  summaryLines,
} from '../../testing.ts'
import { diffAggregatedHeapSnapshots } from './diff.ts'
import { formatHeapSnapshot, formatHeapSnapshotDiff } from './format.ts'
import {
  closureTables,
  makeAggregatedClosure,
  makeAggregatedConstructor,
  makeAggregatedHeapSnapshot,
  makeAggregatedString,
  makeSourceLocation,
  retainedSizeTables,
  retainedTables,
  selfSizeTables,
} from './testing.ts'

const defaultOptions = resolveProfileToMdOptions({ baseURL: `/project` })

describe(`formatHeapSnapshot`, () => {
  test(`admits the largest hidden constructors when a custom showEntry hides every one`, () => {
    // Each group relaxes independently: the constructors and closures groups
    // both fall short and admit their own largest hidden entities.
    const snapshot = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedConstructor({
          name: `Widget`,
          selfSize: 100,
          retainedSize: 150,
          instanceCount: 1,
        }),
      ],
      closures: [
        makeAggregatedClosure({ name: `myFn`, selfSize: 0, retainedSize: 50 }),
      ],
    })
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: () => false,
    })

    const md = mdastToMarkdown(formatHeapSnapshot(snapshot, options))

    expect(md).toContain(
      `Hidden constructors account for 100.0% of the bytes constructors retain, so the largest are also shown.`,
    )
    expect(md).toContain(
      `Hidden closures account for 100.0% of the bytes closures retain, so the largest are also shown.`,
    )
    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `100 B`,
          Instances: `1`,
          Constructor: `Widget`,
        },
      ],
    ])
    expect(retainedSizeTables(md)).toEqual([
      [
        {
          '%': `150.0%`,
          Size: `150 B`,
          Instances: `1`,
          Constructor: `Widget`,
        },
      ],
    ])
    expect(closureTables(md)).toEqual([
      [
        {
          '%': `50.0%`,
          Retained: `50 B`,
          Instances: `1`,
          Paths: `1`,
          Name: `myFn`,
          'Example path': `(GC root)`,
        },
      ],
    ])
  })

  test(`admits hidden constructors by retained size when shown constructors fall short of the target`, () => {
    // BigRetained's retained size alone reaches the coverage target, so
    // BigSelf stays hidden despite its larger self size: coverage is measured
    // on the union of retained sizes.
    const snapshot = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedConstructor({
          name: `Ours`,
          selfSize: 100,
          retainedSize: 100,
          instanceCount: 1,
        }),
        makeAggregatedConstructor({
          name: `BigRetained`,
          selfSize: 50,
          retainedSize: 500,
          instanceCount: 1,
        }),
        makeAggregatedConstructor({
          name: `BigSelf`,
          selfSize: 300,
          retainedSize: 300,
          instanceCount: 1,
        }),
      ],
    })
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name === `Ours`,
    })

    const md = mdastToMarkdown(formatHeapSnapshot(snapshot, options))

    expect(md).toContain(
      `Hidden constructors account for 88.9% of the bytes constructors retain, so the largest are also shown.`,
    )
    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `22.2%`,
          Size: `100 B`,
          Instances: `1`,
          Constructor: `Ours`,
        },
        {
          '%': `11.1%`,
          Size: `50 B`,
          Instances: `1`,
          Constructor: `BigRetained`,
        },
      ],
    ])
    expect(retainedSizeTables(md)).toEqual([
      [
        {
          '%': `111.1%`,
          Size: `500 B`,
          Instances: `1`,
          Constructor: `BigRetained`,
        },
        {
          '%': `22.2%`,
          Size: `100 B`,
          Instances: `1`,
          Constructor: `Ours`,
        },
      ],
    ])
    expect(md).not.toContain(`BigSelf`)
  })

  test(`admits hidden closures independently of shown constructors`, () => {
    // The shown constructor covers its own group, but the closures group has
    // nothing shown, so it admits its largest hidden closure.
    const snapshot = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedConstructor({
          name: `Ours`,
          selfSize: 100,
          retainedSize: 100,
          instanceCount: 1,
        }),
      ],
      closures: [
        makeAggregatedClosure({
          name: `bigClosure`,
          selfSize: 300,
          retainedSize: 400,
        }),
      ],
    })
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name === `Ours`,
    })

    const md = mdastToMarkdown(formatHeapSnapshot(snapshot, options))

    expect(md).not.toContain(`Hidden constructors`)
    expect(md).toContain(
      `Hidden closures account for 100.0% of the bytes closures retain, so the largest are also shown.`,
    )
    expect(closureTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Retained: `400 B`,
          Instances: `1`,
          Paths: `1`,
          Name: `bigClosure`,
          'Example path': `(GC root)`,
        },
      ],
    ])
  })

  test(`admits an admitted closure's hidden retained nodes for coverage`, () => {
    // The filter that hid the admitted closure also hides the nodes it
    // retains; shown nodes cover none of the closure's retained size, so the
    // largest hidden nodes are admitted.
    const snapshot = makeAggregatedHeapSnapshot({
      closures: [
        makeAggregatedClosure({
          name: `bigClosure`,
          selfSize: 300,
          retainedSize: 400,
        }),
      ],
      retainedNodesOf: () => [
        {
          type: `node`,
          id: 1,
          name: `BigBuffer`,
          selfSize: 200,
          retainedSize: 200,
        },
      ],
    })
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: () => false,
    })

    const md = mdastToMarkdown(formatHeapSnapshot(snapshot, options))

    expect(md).toContain(
      `Where shown nodes fell short of the coverage target, the largest hidden nodes are also shown.`,
    )
    expect(retainedTables(md, `bigClosure`)).toEqual([
      [
        {
          '%': `50.0%`,
          Self: `200 B`,
          Name: `BigBuffer`,
          Path: `(GC root)`,
        },
      ],
    ])
  })
})

describe(`formatHeapSnapshotDiff`, () => {
  test(`produces expected title and summary line`, () => {
    const base = makeAggregatedHeapSnapshot({
      totalSize: 1024,
      nodeCount: 10,
      edgeCount: 20,
    })
    const current = makeAggregatedHeapSnapshot({
      totalSize: 1536,
      nodeCount: 12,
      edgeCount: 25,
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(profileTitles(md)).toEqual([`Heap snapshot diff`])
    expect(summaryLines(md)).toEqual([
      `Allocated 1\u00A0KiB → 1.5\u00A0KiB (+512\u00A0B, +50.0%) across 10 → 12 nodes and 20 → 25 edges.`,
    ])
  })

  test(`omits the change suffix when the total size is unchanged`, () => {
    const snapshot = makeAggregatedHeapSnapshot({
      totalSize: 1024,
      nodeCount: 10,
      edgeCount: 20,
    })

    const diff = diffAggregatedHeapSnapshots(snapshot, snapshot, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(summaryLines(md)).toEqual([
      `Allocated 1\u00A0KiB across 10 nodes and 20 edges.`,
    ])
  })

  test(`includes a category table with change, delta, and node counts`, () => {
    const base = makeAggregatedHeapSnapshot({
      totalSize: 1024,
      nodeCategoryToStats: new Map([
        [`object`, { size: 1024, nodeCount: 10 }],
        [`string`, { size: 100, nodeCount: 2 }],
      ]),
    })
    const current = makeAggregatedHeapSnapshot({
      totalSize: 1536,
      nodeCategoryToStats: new Map([[`object`, { size: 1536, nodeCount: 12 }]]),
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `object`,
          Change: `+50.0%`,
          Delta: `+512 B`,
          '%': `100.0%`,
          Size: `1 KiB → 1.5 KiB`,
          Nodes: `10 → 12`,
        },
        {
          Category: `string`,
          Change: `removed`,
          Delta: `-100 B`,
          '%': `9.8% → 0.0%`,
          Size: `100 B → 0 B`,
          Nodes: `2 → 0`,
        },
      ],
    ])
  })

  test(`lists constructor regressions and improvements for self and retained size`, () => {
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

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    const expectedRegressions = [
      {
        Change: `+100.0%`,
        Delta: `+100 B`,
        '%': `66.7% → 87.0%`,
        Size: `100 B → 200 B`,
        Instances: `1 → 2`,
        Constructor: `Grew`,
      },
      {
        Change: `new`,
        Delta: `+30 B`,
        '%': `0.0% → 13.0%`,
        Size: `0 B → 30 B`,
        Instances: `0 → 1`,
        Constructor: `Added`,
      },
    ]
    const expectedImprovements = [
      {
        Change: `removed`,
        Delta: `-50 B`,
        '%': `33.3% → 0.0%`,
        Size: `50 B → 0 B`,
        Instances: `1 → 0`,
        Constructor: `Removed`,
      },
    ]
    expect(regressionsTables(md, `Self size`)).toEqual([expectedRegressions])
    expect(improvementsTables(md, `Self size`)).toEqual([expectedImprovements])
    expect(regressionsTables(md, `Retained size`)).toEqual([
      expectedRegressions,
    ])
    expect(improvementsTables(md, `Retained size`)).toEqual([
      expectedImprovements,
    ])
  })

  test(`lists closure regressions and improvements by retained size`, () => {
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

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(regressionsTables(md, `Largest closures`)).toEqual([
      [
        {
          Change: `+200.0%`,
          Delta: `+200 B`,
          '%': `78.1% → 234.4%`,
          Retained: `100 B → 300 B`,
          Instances: `1 → 2`,
          Paths: `1`,
          Name: `grewFn`,
          Location: `src/a.ts:7:10`,
          'Example path': `(GC root)`,
        },
      ],
    ])
    expect(improvementsTables(md, `Largest closures`)).toEqual([
      [
        {
          Change: `-75.0%`,
          Delta: `-150 B`,
          '%': `156.3% → 39.1%`,
          Retained: `200 B → 50 B`,
          Instances: `1`,
          Paths: `1`,
          Name: `shrankFn`,
          Location: `src/b.ts:1:1`,
          'Example path': `(GC root)`,
        },
      ],
    ])
  })

  test(`lists string regressions and improvements by size`, () => {
    const base = makeAggregatedHeapSnapshot({
      strings: [makeAggregatedString({ value: `hello`, selfSize: 50 })],
    })
    const current = makeAggregatedHeapSnapshot({
      strings: [
        makeAggregatedString({ value: `hello`, selfSize: 80 }),
        makeAggregatedString({ value: `hello`, selfSize: 80 }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(regressionsTables(md, `Largest strings`)).toEqual([
      [
        {
          Change: `+220.0%`,
          Delta: `+110 B`,
          '%': `100.0%`,
          Size: `50 B → 160 B`,
          Value: `hello`,
          Path: `(GC root)`,
        },
      ],
    ])
    expect(improvementsTables(md, `Largest strings`)).toEqual([])
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

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(regressionsTables(md, `Self size`)).toEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+100 B`,
          '%': `61.0% → 75.8%`,
          Size: `100 B → 200 B`,
          Instances: `1`,
          Constructor: `Grew`,
        },
      ],
    ])
    expect(regressionsTables(md, `Largest closures`)).toEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+100 B`,
          '%': `61.0% → 75.8%`,
          Retained: `100 B → 200 B`,
          Instances: `1`,
          Paths: `1`,
          Name: `myFn`,
          'Example path': `(GC root)`,
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
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `Hidden`,
      coverageTarget: 0,
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, options))

    expect(md).not.toContain(`Hidden`)
    expect(regressionsTables(md, `Self size`)).toEqual([
      [
        {
          Change: `new`,
          Delta: `+50 B`,
          '%': `0.0% → 20.0%`,
          Size: `0 B → 50 B`,
          Instances: `0 → 1`,
          Constructor: `Shown`,
        },
      ],
    ])
  })

  test(`admits a constructor pair hidden on both sides when coverage falls short`, () => {
    const base = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedConstructor({
          name: `Widget`,
          selfSize: 100,
          retainedSize: 100,
          instanceCount: 1,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedConstructor({
          name: `Widget`,
          selfSize: 200,
          retainedSize: 200,
          instanceCount: 1,
        }),
      ],
    })
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: () => false,
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, options))

    expect(md).toContain(
      `Hidden constructors account for 100.0% of the bytes constructors retain, so the largest are also shown.`,
    )
    expect(regressionsTables(md, `Self size`)).toEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+100 B`,
          '%': `100.0%`,
          Size: `100 B → 200 B`,
          Instances: `1`,
          Constructor: `Widget`,
        },
      ],
    ])
  })

  test(`ignores strings when computing diff coverage`, () => {
    // The shown constructor covers the target among constructors and
    // closures; the hidden string's size counts toward neither side's total,
    // as in single-snapshot coverage.
    const snapshot = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedConstructor({
          name: `Ours`,
          selfSize: 80,
          retainedSize: 80,
          instanceCount: 1,
        }),
      ],
      strings: [makeAggregatedString({ value: `huge`, selfSize: 900 })],
    })
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name === `Ours`,
    })

    const diff = diffAggregatedHeapSnapshots(snapshot, snapshot, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, options))

    expect(md).not.toContain(`account for`)
  })

  test(`notes that each entity section is unchanged when nothing changed`, () => {
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

    const diff = diffAggregatedHeapSnapshots(snapshot, snapshot, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    // The sections are still formatted, with a note in place of empty tables so
    // the output doesn't look broken.
    expect(md).not.toMatch(/Regressions|Improvements/u)
    expect(md).toMatch(/^## Largest constructors$/mu)

    // The note drops the ranking sentence and merges the measure into a single
    // sentence, mirroring the profile diff's "No function differed in …".
    expect(md).not.toMatch(/ranked by/u)
    expect(md).toContain(
      `No constructor differed in bytes allocated for its instances, excluding nodes kept reachable by them.`,
    )
    expect(md).toContain(
      `No constructor differed in bytes allocated for its instances and all nodes that would be freed if its instances were garbage collected.`,
    )
    expect(md).toContain(
      `No closure differed in bytes that would be freed if the closure were garbage collected.`,
    )
    expect(md).toContain(`No string differed in bytes allocated for it.`)

    // The category table is still formatted with a zero delta.
    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `object`,
          Change: `0.0%`,
          Delta: `0 B`,
          '%': `66.7%`,
          Size: `200 B`,
          Nodes: `2`,
        },
      ],
    ])
  })

  test(`omits each entity section a non-diff snapshot would omit instead of noting it`, () => {
    // Only constructors are present, so a non-diff snapshot would omit the
    // closures and strings sections entirely.
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
    })

    const diff = diffAggregatedHeapSnapshots(snapshot, snapshot, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    // The empty closures and strings sections are dropped rather than noted as
    // unchanged, while the present constructors section keeps its note.
    expect(md).not.toMatch(/^## Largest closures$/mu)
    expect(md).not.toMatch(/^## Largest strings$/mu)
    expect(md).not.toContain(`No closure differed`)
    expect(md).not.toContain(`No string differed`)
    expect(md).toContain(
      `No constructor differed in bytes allocated for its instances, excluding nodes kept reachable by them.`,
    )
  })
})
