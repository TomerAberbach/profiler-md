import { describe, expect, test } from 'vitest'
import { mdastToMarkdown } from '../../helpers/markdown.ts'
import {
  categoryRankingTables,
  categorySectionTables,
  categoryTables,
  profileTitles,
  rankingTables,
  resolveProfileToMdOptions,
  summaryLines,
} from '../../testing.ts'
import { diffAggregatedHeapSnapshots } from './diff.ts'
import { formatHeapSnapshot, formatHeapSnapshotDiff } from './format.ts'
import {
  makeAggregatedHeapSnapshot,
  makeAggregatedHeapSnapshotConstructor,
  makeAggregatedHeapSnapshotFunction,
  makeAggregatedHeapSnapshotString,
  makeSourceLocation,
  retainedSizeTables,
  selfSizeTables,
} from './testing.ts'

const defaultOptions = resolveProfileToMdOptions({ baseURL: `/project` })

describe(`formatHeapSnapshot`, () => {
  test(`shows all nodes when a custom showEntry would hide every one`, () => {
    const snapshot = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `Widget`,
          selfSize: 100,
          retainedSize: 150,
          instanceCount: 1,
        }),
      ],
    })
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: () => false,
    })

    const md = mdastToMarkdown(formatHeapSnapshot(snapshot, options))

    expect(md).toContain(
      `The entry filter hides every node, so all nodes are shown.`,
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
  })

  describe(`category subsections`, () => {
    const snapshot = makeAggregatedHeapSnapshot({
      totalSize: 1000,
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `Widget`,
          selfSize: 600,
          retainedSize: 600,
          instanceCount: 3,
          category: `object`,
        }),
        makeAggregatedHeapSnapshotConstructor({
          name: `Uint8Array`,
          selfSize: 390,
          retainedSize: 390,
          instanceCount: 2,
          category: `array`,
        }),
        makeAggregatedHeapSnapshotConstructor({
          name: `Structure`,
          selfSize: 10,
          retainedSize: 10,
          instanceCount: 1,
          category: `internal`,
        }),
      ],
    })

    test(`splits a ranking into a subsection per covered category`, () => {
      const md = mdastToMarkdown(formatHeapSnapshot(snapshot, defaultOptions))

      expect(categorySectionTables(md, `Self size`)).toEqual({
        Object: [
          {
            '%': `60.0%`,
            Size: `600 B`,
            Instances: `3`,
            Constructor: `Widget`,
          },
        ],
        Array: [
          {
            '%': `39.0%`,
            Size: `390 B`,
            Instances: `2`,
            Constructor: `Uint8Array`,
          },
        ],
        Internal: [
          {
            '%': `1.0%`,
            Size: `10 B`,
            Instances: `1`,
            Constructor: `Structure`,
          },
        ],
      })
    })

    test(`drops a category covering less than minCategoryShare`, () => {
      const md = mdastToMarkdown(
        formatHeapSnapshot(
          snapshot,
          resolveProfileToMdOptions({
            baseURL: `/project`,
            minCategoryShare: 0.05,
          }),
        ),
      )

      expect(Object.keys(categorySectionTables(md, `Self size`))).toEqual([
        `Object`,
        `Array`,
      ])
    })

    test(`splits a ranking whose constructors all fall in one category`, () => {
      const singleCategory = makeAggregatedHeapSnapshot({
        totalSize: 1000,
        constructors: [
          makeAggregatedHeapSnapshotConstructor({
            name: `Widget`,
            selfSize: 1000,
            retainedSize: 1000,
            instanceCount: 3,
            category: `object`,
          }),
        ],
      })

      const md = mdastToMarkdown(
        formatHeapSnapshot(singleCategory, defaultOptions),
      )

      expect(categorySectionTables(md, `Self size`)).toEqual({
        Object: [
          {
            '%': `100.0%`,
            Size: `1000 B`,
            Instances: `3`,
            Constructor: `Widget`,
          },
        ],
      })
    })

    test(`splits the strings ranking by the representation of each string`, () => {
      const strings = makeAggregatedHeapSnapshot({
        strings: [
          makeAggregatedHeapSnapshotString({ value: `flat`, selfSize: 600 }),
          makeAggregatedHeapSnapshotString({
            value: `joined`,
            selfSize: 400,
            category: `concatenated-string`,
          }),
        ],
      })

      const md = mdastToMarkdown(formatHeapSnapshot(strings, defaultOptions))

      expect(categorySectionTables(md, `Largest strings`)).toEqual({
        String: [
          { '%': `60.0%`, Size: `600 B`, Value: `flat`, Path: `(GC root)` },
        ],
        'Concatenated string': [
          { '%': `40.0%`, Size: `400 B`, Value: `joined`, Path: `(GC root)` },
        ],
      })
    })
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
          Category: `Object`,
          Change: `+50.0%`,
          Delta: `+512 B`,
          '%': `100.0%`,
          Size: `1 KiB → 1.5 KiB`,
          Nodes: `10 → 12`,
        },
        {
          Category: `String`,
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
        makeAggregatedHeapSnapshotConstructor({
          name: `Grew`,
          selfSize: 100,
          retainedSize: 100,
          instanceCount: 1,
        }),
        makeAggregatedHeapSnapshotConstructor({
          name: `Removed`,
          selfSize: 50,
          retainedSize: 50,
          instanceCount: 1,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `Grew`,
          selfSize: 200,
          retainedSize: 200,
          instanceCount: 2,
        }),
        makeAggregatedHeapSnapshotConstructor({
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
    expect(rankingTables(md, `Self size`, `Regressions`)).toEqual([
      expectedRegressions,
    ])
    expect(rankingTables(md, `Self size`, `Improvements`)).toEqual([
      expectedImprovements,
    ])
    expect(rankingTables(md, `Retained size`, `Regressions`)).toEqual([
      expectedRegressions,
    ])
    expect(rankingTables(md, `Retained size`, `Improvements`)).toEqual([
      expectedImprovements,
    ])
  })

  test(`lists function regressions and improvements by retained size`, () => {
    const base = makeAggregatedHeapSnapshot({
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `grewFn`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 5, 10),
          selfSize: 64,
          retainedSize: 100,
        }),
        makeAggregatedHeapSnapshotFunction({
          name: `shrankFn`,
          location: makeSourceLocation(`file:///project/src/b.ts`, 1, 1),
          selfSize: 64,
          retainedSize: 200,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `grewFn`,
          location: makeSourceLocation(`file:///project/src/a.ts`, 7, 10),
          selfSize: 64,
          retainedSize: 300,
          instanceCount: 2,
        }),
        makeAggregatedHeapSnapshotFunction({
          name: `shrankFn`,
          location: makeSourceLocation(`file:///project/src/b.ts`, 1, 1),
          selfSize: 64,
          retainedSize: 50,
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
    expect(rankingTables(md, `Largest functions`, `Improvements`)).toEqual([
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
      strings: [
        makeAggregatedHeapSnapshotString({ value: `hello`, selfSize: 50 }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      strings: [
        makeAggregatedHeapSnapshotString({ value: `hello`, selfSize: 80 }),
        makeAggregatedHeapSnapshotString({ value: `hello`, selfSize: 80 }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    expect(rankingTables(md, `Largest strings`, `Regressions`)).toEqual([
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
    expect(rankingTables(md, `Largest strings`, `Improvements`)).toEqual([])
  })

  test(`omits the location column when nothing has a location`, () => {
    const base = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `Grew`,
          selfSize: 100,
          retainedSize: 100,
          instanceCount: 1,
        }),
      ],
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `myFn`,
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `Grew`,
          selfSize: 200,
          retainedSize: 200,
          instanceCount: 1,
        }),
      ],
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `myFn`,
          selfSize: 64,
          retainedSize: 200,
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
          '%': `61.0% → 75.8%`,
          Size: `100 B → 200 B`,
          Instances: `1`,
          Constructor: `Grew`,
        },
      ],
    ])
    expect(rankingTables(md, `Largest functions`, `Regressions`)).toEqual([
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
        makeAggregatedHeapSnapshotConstructor({
          name: `Hidden`,
          selfSize: 100,
          retainedSize: 100,
          instanceCount: 1,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `Hidden`,
          selfSize: 200,
          retainedSize: 200,
          instanceCount: 1,
        }),
        makeAggregatedHeapSnapshotConstructor({
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
    })

    const diff = diffAggregatedHeapSnapshots(base, current, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, options))

    expect(md).not.toContain(`Hidden`)
    expect(rankingTables(md, `Self size`, `Regressions`)).toEqual([
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

  test(`shows all nodes when a custom showEntry would hide every one`, () => {
    const base = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `Widget`,
          selfSize: 100,
          retainedSize: 100,
          instanceCount: 1,
        }),
      ],
    })
    const current = makeAggregatedHeapSnapshot({
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
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
      `The entry filter hides every node, so all nodes are shown.`,
    )
    expect(rankingTables(md, `Self size`, `Regressions`)).toEqual([
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

  test(`notes that each entity section is unchanged when nothing changed`, () => {
    const snapshot = makeAggregatedHeapSnapshot({
      totalSize: 300,
      nodeCount: 3,
      edgeCount: 2,
      nodeCategoryToStats: new Map([[`object`, { size: 200, nodeCount: 2 }]]),
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `MyClass`,
          selfSize: 200,
          retainedSize: 250,
          instanceCount: 2,
        }),
      ],
      functions: [
        makeAggregatedHeapSnapshotFunction({
          name: `myFn`,
          selfSize: 64,
          retainedSize: 100,
        }),
      ],
      strings: [
        makeAggregatedHeapSnapshotString({ value: `hello`, selfSize: 50 }),
      ],
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
      `No function differed in bytes that would be freed if the function were garbage collected.`,
    )
    expect(md).toContain(`No string differed in bytes allocated for it.`)

    // The category table is still formatted with a zero delta.
    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `Object`,
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
    // functions and strings sections entirely.
    const snapshot = makeAggregatedHeapSnapshot({
      totalSize: 300,
      nodeCount: 3,
      edgeCount: 2,
      nodeCategoryToStats: new Map([[`object`, { size: 200, nodeCount: 2 }]]),
      constructors: [
        makeAggregatedHeapSnapshotConstructor({
          name: `MyClass`,
          selfSize: 200,
          retainedSize: 250,
          instanceCount: 2,
        }),
      ],
    })

    const diff = diffAggregatedHeapSnapshots(snapshot, snapshot, defaultOptions)
    const md = mdastToMarkdown(formatHeapSnapshotDiff(diff, defaultOptions))

    // The empty functions and strings sections are dropped rather than noted as
    // unchanged, while the present constructors section keeps its note.
    expect(md).not.toMatch(/^## Largest functions$/mu)
    expect(md).not.toMatch(/^## Largest strings$/mu)
    expect(md).not.toContain(`No function differed`)
    expect(md).not.toContain(`No string differed`)
    expect(md).toContain(
      `No constructor differed in bytes allocated for its instances, excluding nodes kept reachable by them.`,
    )
  })

  describe(`category subsections`, () => {
    /**
     * A snapshot whose size splits between plain objects and a typed array,
     * with a VM bookkeeping constructor too small to cover a hundredth of it.
     */
    const makeMixedSnapshot = (
      widgetSize: number,
      bufferSize: number,
      structureSize: number,
    ) =>
      makeAggregatedHeapSnapshot({
        totalSize: widgetSize + bufferSize + structureSize,
        constructors: [
          makeAggregatedHeapSnapshotConstructor({
            name: `Widget`,
            selfSize: widgetSize,
            retainedSize: widgetSize,
            instanceCount: 3,
            category: `object`,
          }),
          makeAggregatedHeapSnapshotConstructor({
            name: `Uint8Array`,
            selfSize: bufferSize,
            retainedSize: bufferSize,
            instanceCount: 2,
            category: `array`,
          }),
          makeAggregatedHeapSnapshotConstructor({
            name: `Structure`,
            selfSize: structureSize,
            retainedSize: structureSize,
            instanceCount: 1,
            category: `internal`,
          }),
        ],
      })

    const diffMixedSnapshots = (
      base: [number, number, number],
      current: [number, number, number],
    ) =>
      mdastToMarkdown(
        formatHeapSnapshotDiff(
          diffAggregatedHeapSnapshots(
            makeMixedSnapshot(...base),
            makeMixedSnapshot(...current),
            defaultOptions,
          ),
          defaultOptions,
        ),
      )

    test(`splits each ranking into a subsection per covered category`, () => {
      const md = diffMixedSnapshots([600, 390, 10], [300, 700, 10])

      expect(categoryRankingTables(md, `Self size`, `Regressions`)).toEqual({
        Array: [
          {
            Change: `+79.5%`,
            Delta: `+310 B`,
            '%': `39.0% → 69.3%`,
            Size: `390 B → 700 B`,
            Instances: `2`,
            Constructor: `Uint8Array`,
          },
        ],
      })
      expect(categoryRankingTables(md, `Self size`, `Improvements`)).toEqual({
        Object: [
          {
            Change: `-50.0%`,
            Delta: `-300 B`,
            '%': `60.0% → 29.7%`,
            Size: `600 B → 300 B`,
            Instances: `3`,
            Constructor: `Widget`,
          },
        ],
      })
    })

    test(`covers a category by the side it weighs more on`, () => {
      // The typed array's share falls from 39.0% to under 1%, so only its base
      // side clears the threshold.
      const md = diffMixedSnapshots([600, 390, 10], [1000, 1, 10])

      expect(
        Object.keys(categoryRankingTables(md, `Self size`, `Improvements`)),
      ).toEqual([`Array`])
    })

    test(`splits a ranking whose constructors all fall in one category`, () => {
      const md = diffMixedSnapshots([1000, 0, 0], [500, 0, 0])

      expect(categoryRankingTables(md, `Self size`, `Improvements`)).toEqual({
        Object: [
          {
            Change: `-50.0%`,
            Delta: `-500 B`,
            '%': `100.0%`,
            Size: `1000 B → 500 B`,
            Instances: `3`,
            Constructor: `Widget`,
          },
        ],
      })
    })

    test(`splits the strings ranking by the representation of each string`, () => {
      const base = makeAggregatedHeapSnapshot({
        strings: [
          makeAggregatedHeapSnapshotString({ value: `flat`, selfSize: 100 }),
          makeAggregatedHeapSnapshotString({
            value: `joined`,
            selfSize: 100,
            category: `concatenated-string`,
          }),
        ],
      })
      const current = makeAggregatedHeapSnapshot({
        strings: [
          makeAggregatedHeapSnapshotString({ value: `flat`, selfSize: 300 }),
          makeAggregatedHeapSnapshotString({
            value: `joined`,
            selfSize: 200,
            category: `concatenated-string`,
          }),
        ],
      })

      const md = mdastToMarkdown(
        formatHeapSnapshotDiff(
          diffAggregatedHeapSnapshots(base, current, defaultOptions),
          defaultOptions,
        ),
      )

      expect(
        categoryRankingTables(md, `Largest strings`, `Regressions`),
      ).toEqual({
        String: [
          {
            Change: `+200.0%`,
            Delta: `+200 B`,
            '%': `50.0% → 60.0%`,
            Size: `100 B → 300 B`,
            Value: `flat`,
            Path: `(GC root)`,
          },
        ],
        'Concatenated string': [
          {
            Change: `+100.0%`,
            Delta: `+100 B`,
            '%': `50.0% → 40.0%`,
            Size: `100 B → 200 B`,
            Value: `joined`,
            Path: `(GC root)`,
          },
        ],
      })
    })
  })
})
