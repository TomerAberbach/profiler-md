import { describe, expect, test } from 'vitest'
import {
  functionTables,
  largestStringsTables,
  retainedObjectsTables,
  selfSizeInstancesTables,
  selfSizeTables,
} from '../../../modalities/heap-snapshot/testing.ts'
import { normalizeProfileToMdOptions } from '../../../options.ts'
import { categoryTables, rankingTables } from '../../../testing.ts'
import { diffProfiles } from '../../index.ts'
import { convertJsonToMd } from '../../testing.ts'
import { v8HeapSnapshotConverter } from './index.ts'
import {
  EDGE_TYPE_ELEMENT,
  EDGE_TYPE_HIDDEN,
  EDGE_TYPE_INTERNAL,
  EDGE_TYPE_PROPERTY,
  EDGE_TYPE_WEAK,
  makeV8Edge,
  makeV8Node,
  makeV8Snapshot,
  NODE_TYPE_CLOSURE,
  NODE_TYPE_CODE,
  NODE_TYPE_NATIVE,
  NODE_TYPE_OBJECT,
  NODE_TYPE_STRING,
  NODE_TYPE_SYNTHETIC,
} from './testing.ts'

describe(`matches`, () => {
  test(`accepts valid snapshot`, () => {
    expect(
      v8HeapSnapshotConverter.matches({
        snapshot: { meta: { node_fields: [] } },
        edges: [],
      }),
    ).toBe(true)
  })

  test(`rejects null`, () => {
    expect(v8HeapSnapshotConverter.matches(null)).toBe(false)
  })

  test(`rejects non-objects`, () => {
    expect(v8HeapSnapshotConverter.matches(`string`)).toBe(false)
  })

  test(`rejects missing snapshot`, () => {
    expect(v8HeapSnapshotConverter.matches({ edges: [] })).toBe(false)
  })

  test(`rejects snapshot with null meta`, () => {
    expect(
      v8HeapSnapshotConverter.matches({ snapshot: { meta: null }, edges: [] }),
    ).toBe(false)
  })

  test(`rejects missing node_fields`, () => {
    expect(
      v8HeapSnapshotConverter.matches({ snapshot: { meta: {} }, edges: [] }),
    ).toBe(false)
  })

  test(`rejects missing edges`, () => {
    expect(
      v8HeapSnapshotConverter.matches({
        snapshot: { meta: { node_fields: [] } },
      }),
    ).toBe(false)
  })
})

// 7 nodes, 9 edges, location on the closure enabling an Instances sub-table.
//
// Node layout (6 fields each: type, name, id, self_size, edge_count, detachedness):
//   0: synthetic root               edges to all other reachable nodes
//   1: object  MyClass       200 B
//   2: closure myFn           64 B  (location: scriptId=1, line=5, col=10)
//   3: string  "hello world" 110 B
//   4: code    myFn (SFI)     48 B  SharedFunctionInfo for the closure
//   5: synthetic (Script)           intermediate node for script name resolution
//   6: string  "" (script name, 0 B) `scriptName`, "file:///project/src/a.ts" by default
//
// Script name resolution path for the closure:
//   node2 -[internal "shared"]-> node4 -[internal "script"]-> node5 -[internal "name"]-> node6
const makeClosureSnapshot = (
  scriptName = `file:///project/src/a.ts`,
  objectName = `MyClass`,
) =>
  makeV8Snapshot({
    nodeCount: 7,
    edgeCount: 9,
    nodes: [
      ...makeV8Node({
        type: NODE_TYPE_SYNTHETIC,
        name: 0,
        id: 1,
        selfSize: 0,
        edgeCount: 4,
      }), // Root
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 1,
        id: 3,
        selfSize: 200,
        edgeCount: 0,
      }), // `MyClass`
      ...makeV8Node({
        type: NODE_TYPE_CLOSURE,
        name: 2,
        id: 5,
        selfSize: 64,
        edgeCount: 3,
      }), // `myFn` closure
      ...makeV8Node({
        type: NODE_TYPE_STRING,
        name: 3,
        id: 7,
        selfSize: 110,
        edgeCount: 0,
      }), // "hello world"
      ...makeV8Node({
        type: NODE_TYPE_CODE,
        name: 2,
        id: 11,
        selfSize: 48,
        edgeCount: 1,
      }), // `SharedFunctionInfo`
      ...makeV8Node({
        type: NODE_TYPE_SYNTHETIC,
        name: 4,
        id: 13,
        selfSize: 0,
        edgeCount: 1,
      }), // `Script`
      ...makeV8Node({
        type: NODE_TYPE_STRING,
        name: 5,
        id: 15,
        selfSize: 0,
        edgeCount: 0,
      }), // Script name
    ],
    edges: [
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 6 }), // Root -> `MyClass` (flat 6)
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 12 }), // Root -> `myFn` (flat 12)
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 18 }), // Root -> string (flat 18)
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 24 }), // Root -> SFI (flat 24)
      ...makeV8Edge({ type: EDGE_TYPE_INTERNAL, nameOrIndex: 6, toNode: 24 }), // `myFn` -[shared]-> SFI
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 30 }), // `myFn` filler
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 30 }), // `myFn` filler
      ...makeV8Edge({ type: EDGE_TYPE_INTERNAL, nameOrIndex: 7, toNode: 30 }), // SFI -[script]-> Script
      ...makeV8Edge({ type: EDGE_TYPE_INTERNAL, nameOrIndex: 8, toNode: 36 }), // Script -[name]-> script name
    ],
    strings: [
      ``, // 0: root name / filler
      objectName, // 1
      `myFn`, // 2
      `hello world`, // 3
      `(Script)`, // 4
      scriptName, // 5: script name
      `shared`, // 6: edge name
      `script`, // 7: edge name
      `name`, // 8: edge name
    ],
    // Closure (flat=12) at scriptId=1, line=5, col=10
    locations: [12, 1, 5, 10],
  })

// A synthetic root retaining two location-less object nodes, whose names are
// used for origin detection and categorization.
const makeObjectSnapshot = (firstName: string, secondName: string) =>
  makeV8Snapshot({
    nodeCount: 3,
    edgeCount: 2,
    nodes: [
      ...makeV8Node({
        type: NODE_TYPE_SYNTHETIC,
        name: 0,
        id: 1,
        selfSize: 0,
        edgeCount: 2,
      }),
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 1,
        id: 3,
        selfSize: 200,
        edgeCount: 0,
      }),
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 2,
        id: 5,
        selfSize: 100,
        edgeCount: 0,
      }),
    ],
    edges: [
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 6 }),
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 12 }),
    ],
    strings: [``, firstName, secondName],
  })

// A synthetic root retaining a closure, which exclusively retains a string, so
// the string appears under the function's retained objects.
const makeRetainingClosureSnapshot = () =>
  makeV8Snapshot({
    nodeCount: 3,
    edgeCount: 2,
    nodes: [
      ...makeV8Node({
        type: NODE_TYPE_SYNTHETIC,
        name: 0,
        id: 1,
        selfSize: 0,
        edgeCount: 1,
      }),
      ...makeV8Node({
        type: NODE_TYPE_CLOSURE,
        name: 1,
        id: 3,
        selfSize: 64,
        edgeCount: 1,
      }),
      ...makeV8Node({
        type: NODE_TYPE_STRING,
        name: 2,
        id: 5,
        selfSize: 128,
        edgeCount: 0,
      }),
    ],
    edges: [
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 6 }),
      ...makeV8Edge({ type: EDGE_TYPE_PROPERTY, nameOrIndex: 3, toNode: 12 }),
    ],
    strings: [``, `myFn`, `payload`, `data`],
  })

// A synthetic root retaining two `Widget` nodes the engine classifies
// differently, as it does a host-allocated DOM wrapper class. The constructor
// takes the category holding the most of its self size, and each instance keeps
// its own.
const makeMixedCategoryConstructorSnapshot = () =>
  makeV8Snapshot({
    nodeCount: 3,
    edgeCount: 2,
    nodes: [
      ...makeV8Node({
        type: NODE_TYPE_SYNTHETIC,
        name: 0,
        id: 1,
        selfSize: 0,
        edgeCount: 2,
      }),
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 1,
        id: 3,
        selfSize: 200,
        edgeCount: 0,
      }),
      ...makeV8Node({
        type: NODE_TYPE_NATIVE,
        name: 1,
        id: 5,
        selfSize: 50,
        edgeCount: 0,
      }),
    ],
    edges: [
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 6 }),
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 12 }),
    ],
    strings: [``, `Widget`],
  })

// A synthetic root retaining an object node and a string node holding the
// given value. The object keeps the entry filter from hiding every node,
// because a filter that hides every node is disabled.
const makeStringSnapshot = (value: string) =>
  makeV8Snapshot({
    nodeCount: 3,
    edgeCount: 2,
    nodes: [
      ...makeV8Node({
        type: NODE_TYPE_SYNTHETIC,
        name: 0,
        id: 1,
        selfSize: 0,
        edgeCount: 2,
      }),
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 1,
        id: 3,
        selfSize: 200,
        edgeCount: 0,
      }),
      ...makeV8Node({
        type: NODE_TYPE_STRING,
        name: 2,
        id: 5,
        selfSize: 120,
        edgeCount: 0,
      }),
    ],
    edges: [
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 6 }),
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 12 }),
    ],
    strings: [``, `MyClass`, value],
  })

describe(`convert`, () => {
  test(`formats all sections`, () => {
    const md = convertJsonToMd(
      v8HeapSnapshotConverter,
      makeClosureSnapshot(),
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    // Category table
    expect(categoryTables(md)).toEqual([
      [
        { Category: `Object`, '%': `47.4%`, Size: `200 B`, Nodes: `1` },
        { Category: `String`, '%': `26.1%`, Size: `110 B`, Nodes: `2` },
        { Category: `Function`, '%': `15.2%`, Size: `64 B`, Nodes: `1` },
        { Category: `Code`, '%': `11.4%`, Size: `48 B`, Nodes: `1` },
        { Category: `Synthetic`, '%': `0.0%`, Size: `0 B`, Nodes: `2` },
      ],
    ])

    // Self size table: only MyClass (200B) shows because others are filtered
    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `47.4%`,
          Size: `200 B`,
          Instances: `1`,
          Constructor: `MyClass`,
          Location: `<unknown>`,
        },
      ],
    ])

    // Self size instances for MyClass
    expect(selfSizeInstancesTables(md, `MyClass`)).toEqual([
      [{ '%': `100.0%`, Size: `200 B`, Instances: `1`, Path: `(GC root)` }],
    ])

    // Function table
    expect(functionTables(md)).toEqual([
      [
        {
          '%': `15.2%`,
          Retained: `64 B`,
          Instances: `1`,
          Paths: `1`,
          Name: `myFn`,
          Location: `src/a.ts:6:11`,
          'Example path': `(GC root)`,
        },
      ],
    ])

    // Largest strings table
    expect(largestStringsTables(md)).toEqual([
      [
        {
          '%': `26.1%`,
          Size: `110 B`,
          Value: `hello world`,
          Path: `(GC root)`,
        },
        {
          '%': `0.0%`,
          Size: `0 B`,
          Value: `file:///project/src/a.ts`,
          Path: `(GC root)`,
        },
      ],
    ])
  })

  test(`a JavaScript origin categorizes constructors by the language's classes`, () => {
    const snapshot = makeObjectSnapshot(`Array`, `MyClass`)

    const md = convertJsonToMd(
      v8HeapSnapshotConverter,
      snapshot,
      normalizeProfileToMdOptions(),
    )

    // V8 types both nodes `object`. Only the runtime's language states that an
    // `Array` instance is an array.
    expect(categoryTables(md)).toEqual([
      [
        { Category: `Array`, '%': `66.7%`, Size: `200 B`, Nodes: `1` },
        { Category: `Object`, '%': `33.3%`, Size: `100 B`, Nodes: `1` },
        { Category: `Synthetic`, '%': `0.0%`, Size: `0 B`, Nodes: `1` },
      ],
    ])
  })

  test(`an origin observing another language keeps V8's own categories`, () => {
    // Julia's `Profile` writes V8-format snapshots, where a JavaScript class
    // name means nothing.
    const snapshot = makeObjectSnapshot(`Promise`, `<generic memory - malloc>`)

    const md = convertJsonToMd(
      v8HeapSnapshotConverter,
      snapshot,
      normalizeProfileToMdOptions(),
    )

    expect(categoryTables(md)).toEqual([
      [
        { Category: `Object`, '%': `100.0%`, Size: `300 B`, Nodes: `2` },
        { Category: `Synthetic`, '%': `0.0%`, Size: `0 B`, Nodes: `1` },
      ],
    ])
  })

  test(`baseURL: 'auto' infers the base from entity locations and relativizes URL-shaped constructor names`, () => {
    const snapshot = makeClosureSnapshot(
      `file:///home/user/project/lib/a.ts`,
      `file:///home/user/project/src/mod.js`,
    )

    const md = convertJsonToMd(
      v8HeapSnapshotConverter,
      snapshot,
      normalizeProfileToMdOptions({ baseURL: `auto` }),
    )

    // The base is the common ancestor of the closure's location and the
    // constructor's URL-shaped name, so both render relative to it.
    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `47.4%`,
          Size: `200 B`,
          Instances: `1`,
          Constructor: `src/mod.js`,
          Location: `<unknown>`,
        },
      ],
    ])
    expect(functionTables(md)).toEqual([
      [
        {
          '%': `15.2%`,
          Retained: `64 B`,
          Instances: `1`,
          Paths: `1`,
          Name: `myFn`,
          Location: `lib/a.ts:6:11`,
          'Example path': `(GC root)`,
        },
      ],
    ])
    // String values are never locations, so the script name's raw value stays
    // absolute.
    expect(largestStringsTables(md)).toEqual([
      [
        {
          '%': `26.1%`,
          Size: `110 B`,
          Value: `hello world`,
          Path: `(GC root)`,
        },
        {
          '%': `0.0%`,
          Size: `0 B`,
          Value: `file:///home/user/project/lib/a.ts`,
          Path: `(GC root)`,
        },
      ],
    ])
  })

  test(`matchEntry matches functions whose locations differ across snapshots`, () => {
    // The function's script path carries a per-build suffix, so by default the
    // two sides don't match and the function shows as a removed/new pair.
    const base = JSON.stringify(
      makeClosureSnapshot(`file:///project/src/a-111.ts`),
    )
    const current = JSON.stringify(
      makeClosureSnapshot(`file:///project/src/a-222.ts`),
    )

    const unmatchedMd = diffProfiles(
      { data: base, format: `v8-heap-snapshot` },
      { data: current, format: `v8-heap-snapshot` },
      { baseURL: `/project` },
    )
    const matchedMd = diffProfiles(
      { data: base, format: `v8-heap-snapshot` },
      { data: current, format: `v8-heap-snapshot` },
      { baseURL: `/project`, matchEntry: () => ({ location: `src/a.ts` }) },
    )

    const newFunction = {
      Change: `new`,
      Delta: `+64 B`,
      '%': `0.0% → 15.2%`,
      Retained: `0 B → 64 B`,
      Instances: `0 → 1`,
      Paths: `0 → 1`,
      Name: `myFn`,
      Location: `src/a-222.ts:6:11`,
      'Example path': `(GC root)`,
    }
    const removedFunction = {
      Change: `removed`,
      Delta: `-64 B`,
      '%': `15.2% → 0.0%`,
      Retained: `64 B → 0 B`,
      Instances: `1 → 0`,
      Paths: `1 → 0`,
      Name: `myFn`,
      Location: `src/a-111.ts:6:11`,
      'Example path': `(GC root)`,
    }
    expect(
      rankingTables(unmatchedMd, `Largest functions`, `Regressions`),
    ).toEqual([[newFunction]])
    expect(
      rankingTables(unmatchedMd, `Largest functions`, `Improvements`),
    ).toEqual([[removedFunction]])
    // With the hook the function matches across the snapshots and has no delta.
    expect(
      rankingTables(matchedMd, `Largest functions`, `Regressions`),
    ).toEqual([])
    expect(
      rankingTables(matchedMd, `Largest functions`, `Improvements`),
    ).toEqual([])
  })

  test(`weak edges are not followed for retainer paths`, () => {
    // Root -> parent (Object) via HIDDEN, parent -> child (Object) via WEAK only.
    // child's only potential retainer is parent, but the weak edge is excluded
    // from the adjacency graph, so child's path does not mention the parent edge.
    const snapshot = makeV8Snapshot({
      nodeCount: 3,
      edgeCount: 2,
      nodes: [
        ...makeV8Node({
          type: NODE_TYPE_SYNTHETIC,
          name: 0,
          id: 1,
          selfSize: 0,
          edgeCount: 1,
        }), // Root (1 edge)
        ...makeV8Node({
          type: NODE_TYPE_OBJECT,
          name: 1,
          id: 3,
          selfSize: 100,
          edgeCount: 1,
        }), // Parent (1 edge)
        ...makeV8Node({
          type: NODE_TYPE_OBJECT,
          name: 2,
          id: 5,
          selfSize: 50,
          edgeCount: 0,
        }), // Child
      ],
      edges: [
        ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 6 }), // Root -> parent (flat 6)
        ...makeV8Edge({ type: EDGE_TYPE_WEAK, nameOrIndex: 3, toNode: 12 }), // Parent -> child via weak (flat 12)
      ],
      strings: [``, `parent`, `child`, `weakRef`],
    })

    const md = convertJsonToMd(
      v8HeapSnapshotConverter,
      snapshot,
      normalizeProfileToMdOptions(),
    )

    expect(selfSizeTables(md)).toEqual([
      [
        expect.objectContaining({ Constructor: `parent` }),
        expect.objectContaining({ Constructor: `child` }),
      ],
    ])
  })

  test(`edge names that look like unknown locations are shown verbatim`, () => {
    // Root -> parent (Object) via HIDDEN, parent -> child (Object) via a
    // PROPERTY edge literally named `unknown`. The edge name is not a file URL,
    // so it must be shown as-is in child's retainer path rather than collapsing
    // to the `<unknown>` placeholder.
    const snapshot = makeV8Snapshot({
      nodeCount: 3,
      edgeCount: 2,
      nodes: [
        ...makeV8Node({
          type: NODE_TYPE_SYNTHETIC,
          name: 0,
          id: 1,
          selfSize: 0,
          edgeCount: 1,
        }), // Root (1 edge)
        ...makeV8Node({
          type: NODE_TYPE_OBJECT,
          name: 1,
          id: 3,
          selfSize: 100,
          edgeCount: 1,
        }), // Parent (1 edge)
        ...makeV8Node({
          type: NODE_TYPE_OBJECT,
          name: 2,
          id: 5,
          selfSize: 50,
          edgeCount: 0,
        }), // Child
      ],
      edges: [
        ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 6 }), // Root -> parent (flat 6)
        ...makeV8Edge({ type: EDGE_TYPE_PROPERTY, nameOrIndex: 3, toNode: 12 }), // Parent -[unknown]-> child (flat 12)
      ],
      strings: [``, `parent`, `child`, `unknown`],
    })

    const md = convertJsonToMd(
      v8HeapSnapshotConverter,
      snapshot,
      normalizeProfileToMdOptions(),
    )

    expect(selfSizeInstancesTables(md, `child`)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `50 B`,
          Instances: `1`,
          Path: `.unknown parent`,
        },
      ],
    ])
  })

  test(`an element index above the safe integer range is unknown`, () => {
    // Root -> parent (Object) via HIDDEN, parent -> child (Object) via an
    // ELEMENT edge whose index is the `-1` Julia writes as a `size_t`, which
    // JSON parses to 2^64.
    const snapshot = makeV8Snapshot({
      nodeCount: 3,
      edgeCount: 2,
      nodes: [
        ...makeV8Node({
          type: NODE_TYPE_SYNTHETIC,
          name: 0,
          id: 1,
          selfSize: 0,
          edgeCount: 1,
        }), // Root (1 edge)
        ...makeV8Node({
          type: NODE_TYPE_OBJECT,
          name: 1,
          id: 3,
          selfSize: 100,
          edgeCount: 1,
        }), // Parent (1 edge)
        ...makeV8Node({
          type: NODE_TYPE_OBJECT,
          name: 2,
          id: 5,
          selfSize: 50,
          edgeCount: 0,
        }), // Child
      ],
      edges: [
        ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 6 }), // Root -> parent (flat 6)
        ...makeV8Edge({
          type: EDGE_TYPE_ELEMENT,
          nameOrIndex: 2 ** 64,
          toNode: 12,
        }), // Parent -[-1]-> child (flat 12)
      ],
      strings: [``, `parent`, `child`],
    })

    const md = convertJsonToMd(
      v8HeapSnapshotConverter,
      snapshot,
      normalizeProfileToMdOptions(),
    )

    expect(selfSizeInstancesTables(md, `child`)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `50 B`,
          Instances: `1`,
          Path: `[<unknown>] parent`,
        },
      ],
    ])
  })

  test(`rejects an edges array that isn't a multiple of the edge field count`, () => {
    // `meta.edge_fields` declares 3 fields per edge, so a trailing partial
    // record contradicts the declared layout.
    const snapshot = makeV8Snapshot({
      nodeCount: 2,
      edgeCount: 1,
      nodes: [
        ...makeV8Node({
          type: NODE_TYPE_SYNTHETIC,
          name: 0,
          id: 1,
          selfSize: 0,
          edgeCount: 1,
        }), // Root
        ...makeV8Node({
          type: NODE_TYPE_OBJECT,
          name: 1,
          id: 3,
          selfSize: 100,
          edgeCount: 0,
        }), // Object
      ],
      edges: [
        ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 6 }),
        EDGE_TYPE_HIDDEN,
      ],
      strings: [``, `MyClass`],
    })

    expect(() =>
      convertJsonToMd(
        v8HeapSnapshotConverter,
        snapshot,
        normalizeProfileToMdOptions(),
      ),
    ).toThrow(`edges length is not a multiple of the 3 edge fields, got: 4`)
  })

  test(`string nodes appear in the Largest strings section`, () => {
    const snapshot = makeV8Snapshot({
      nodeCount: 2,
      edgeCount: 1,
      nodes: [
        ...makeV8Node({
          type: NODE_TYPE_SYNTHETIC,
          name: 0,
          id: 1,
          selfSize: 0,
          edgeCount: 1,
        }), // Root
        ...makeV8Node({
          type: NODE_TYPE_STRING,
          name: 1,
          id: 3,
          selfSize: 80,
          edgeCount: 0,
        }), // String "hello"
      ],
      edges: [
        ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 6 }), // Root -> string (flat 6)
      ],
      strings: [``, `hello`],
    })

    const md = convertJsonToMd(
      v8HeapSnapshotConverter,
      snapshot,
      normalizeProfileToMdOptions(),
    )

    expect(md).toContain(`## Largest strings`)
    expect(md).toContain(`hello`)
  })

  test(`a category filter hides functions`, () => {
    const md = convertJsonToMd(
      v8HeapSnapshotConverter,
      makeClosureSnapshot(),
      normalizeProfileToMdOptions({
        baseURL: `/project`,
        showEntry: entry => entry.category !== `function`,
      }),
    )

    expect(md).not.toContain(`## Largest functions`)
    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `47.4%`,
          Size: `200 B`,
          Instances: `1`,
          Constructor: `MyClass`,
          Location: `<unknown>`,
        },
      ],
    ])
  })

  test(`a category filter hides a function's retained objects`, () => {
    const shown = convertJsonToMd(
      v8HeapSnapshotConverter,
      makeRetainingClosureSnapshot(),
      normalizeProfileToMdOptions(),
    )

    expect(retainedObjectsTables(shown, `myFn`)).toEqual([
      [{ '%': `66.7%`, Self: `128 B`, Name: `payload`, Path: `.data myFn` }],
    ])

    const hidden = convertJsonToMd(
      v8HeapSnapshotConverter,
      makeRetainingClosureSnapshot(),
      normalizeProfileToMdOptions({
        showEntry: entry => entry.category !== `string`,
      }),
    )

    expect(functionTables(hidden)).toEqual([
      [
        {
          '%': `100.0%`,
          Retained: `192 B`,
          Instances: `1`,
          Paths: `1`,
          Name: `myFn`,
          'Example path': `(GC root)`,
        },
      ],
    ])
    expect(retainedObjectsTables(hidden, `myFn`)).toEqual([])
  })

  test(`a category filter hides strings`, () => {
    const md = convertJsonToMd(
      v8HeapSnapshotConverter,
      makeClosureSnapshot(),
      normalizeProfileToMdOptions({
        baseURL: `/project`,
        showEntry: entry => entry.category !== `string`,
      }),
    )

    expect(md).not.toContain(`## Largest strings`)
    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `47.4%`,
          Size: `200 B`,
          Instances: `1`,
          Constructor: `MyClass`,
          Location: `<unknown>`,
        },
      ],
    ])
  })

  test(`a category filter hides a constructor's instances`, () => {
    const shown = convertJsonToMd(
      v8HeapSnapshotConverter,
      makeMixedCategoryConstructorSnapshot(),
      normalizeProfileToMdOptions(),
    )

    expect(selfSizeInstancesTables(shown, `Widget`)).toEqual([
      [{ '%': `100.0%`, Size: `250 B`, Instances: `2`, Path: `(GC root)` }],
    ])

    const hidden = convertJsonToMd(
      v8HeapSnapshotConverter,
      makeMixedCategoryConstructorSnapshot(),
      normalizeProfileToMdOptions({
        showEntry: entry => entry.category !== `native`,
      }),
    )

    expect(selfSizeInstancesTables(hidden, `Widget`)).toEqual([
      [{ '%': `80.0%`, Size: `200 B`, Instances: `1`, Path: `(GC root)` }],
    ])
  })
  test(`a constructor's instances take the category the origin names for its class`, () => {
    const md = convertJsonToMd(
      v8HeapSnapshotConverter,
      makeObjectSnapshot(`Array`, `Array`),
      normalizeProfileToMdOptions({
        showEntry: entry => entry.category === `array`,
      }),
    )

    expect(selfSizeInstancesTables(md, `Array`)).toEqual([
      [{ '%': `100.0%`, Size: `300 B`, Instances: `2`, Path: `(GC root)` }],
    ])
  })

  test(`a string holding a synthetic entry's name is shown`, () => {
    const md = convertJsonToMd(
      v8HeapSnapshotConverter,
      makeStringSnapshot(`(module)`),
      normalizeProfileToMdOptions(),
    )

    expect(largestStringsTables(md)).toEqual([
      [{ '%': `37.5%`, Size: `120 B`, Value: `(module)`, Path: `(GC root)` }],
    ])
  })
})
