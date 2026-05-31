import { describe, expect, test } from 'vitest'
import { normalizeProfileToMdOptions } from '../../../options.ts'
import {
  categoryTables,
  closureTables,
  largestStringsTables,
  selfSizeInstancesTables,
  selfSizeTables,
} from '../../../testing/markdown.ts'
import { matchesV8HeapSnapshot, v8HeapSnapshotToMd } from './index.ts'
import type { V8HeapSnapshot } from './parse.ts'

const NODE_TYPE_STRING = 2
const NODE_TYPE_OBJECT = 3
const NODE_TYPE_CODE = 4
const NODE_TYPE_CLOSURE = 5
const NODE_TYPE_SYNTHETIC = 9

const EDGE_TYPE_INTERNAL = 3
const EDGE_TYPE_HIDDEN = 4
const EDGE_TYPE_WEAK = 6

const makeV8Node = ({
  type,
  name,
  id,
  selfSize,
  edgeCount,
  detachedness = 0,
}: {
  type: number
  name: number
  id: number
  selfSize: number
  edgeCount: number
  detachedness?: number
}): number[] => [type, name, id, selfSize, edgeCount, detachedness]

const makeV8Edge = ({
  type,
  nameOrIndex,
  toNode,
}: {
  type: number
  nameOrIndex: number
  toNode: number
}): number[] => [type, nameOrIndex, toNode]

const makeV8Snapshot = ({
  nodes,
  edges,
  strings,
  locations = [],
  nodeCount,
  edgeCount,
}: {
  nodes: number[]
  edges: number[]
  strings: string[]
  locations?: number[]
  nodeCount: number
  edgeCount: number
}): V8HeapSnapshot => ({
  snapshot: {
    meta: {
      node_fields: [
        `type`,
        `name`,
        `id`,
        `self_size`,
        `edge_count`,
        `detachedness`,
      ],
      node_types: [
        [
          `hidden`,
          `array`,
          `string`,
          `object`,
          `code`,
          `closure`,
          `regexp`,
          `number`,
          `native`,
          `synthetic`,
          `concatenated string`,
          `sliced string`,
          `symbol`,
          `bigint`,
          `object shape`,
        ],
        `string`,
        `number`,
        `number`,
        `number`,
        `number`,
      ],
      edge_fields: [`type`, `name_or_index`, `to_node`],
      edge_types: [
        [
          `context`,
          `element`,
          `property`,
          `internal`,
          `hidden`,
          `shortcut`,
          `weak`,
        ],
        `string_or_number`,
        `node`,
      ],
      location_fields: [`object_index`, `script_id`, `line`, `column`],
    },
    node_count: nodeCount,
    edge_count: edgeCount,
  },
  nodes,
  edges,
  strings,
  locations,
})

describe(`matches`, () => {
  test(`accepts valid snapshot`, () => {
    expect(
      matchesV8HeapSnapshot({
        snapshot: { meta: { node_fields: [] } },
        edges: [],
      }),
    ).toBe(true)
  })

  test(`rejects null`, () => {
    expect(matchesV8HeapSnapshot(null)).toBe(false)
  })

  test(`rejects non-objects`, () => {
    expect(matchesV8HeapSnapshot(`string`)).toBe(false)
  })

  test(`rejects missing snapshot`, () => {
    expect(matchesV8HeapSnapshot({ edges: [] })).toBe(false)
  })

  test(`rejects snapshot with null meta`, () => {
    expect(matchesV8HeapSnapshot({ snapshot: { meta: null }, edges: [] })).toBe(
      false,
    )
  })

  test(`rejects missing node_fields`, () => {
    expect(matchesV8HeapSnapshot({ snapshot: { meta: {} }, edges: [] })).toBe(
      false,
    )
  })

  test(`rejects missing edges`, () => {
    expect(
      matchesV8HeapSnapshot({ snapshot: { meta: { node_fields: [] } } }),
    ).toBe(false)
  })
})

describe(`convert`, () => {
  test(`renders all sections`, () => {
    // 7 nodes, 9 edges, location on the closure enabling an Instances sub-table.
    //
    // Node layout (6 fields each: type, name, id, self_size, edge_count, detachedness):
    //   0: synthetic root               edges to all other reachable nodes
    //   1: object  MyClass       200 B
    //   2: closure myFn           64 B  (location: scriptId=1, line=5, col=10)
    //   3: string  "hello world" 110 B
    //   4: code    myFn (SFI)     48 B  SharedFunctionInfo for the closure
    //   5: synthetic (Script)           intermediate node for script name resolution
    //   6: string  "" (script name, 0 B) "file:///project/src/a.ts"
    //
    // Script name resolution path for the closure:
    //   node2 -[internal "shared"]-> node4 -[internal "script"]-> node5 -[internal "name"]-> node6
    const snapshot = makeV8Snapshot({
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
        `MyClass`, // 1
        `myFn`, // 2
        `hello world`, // 3
        `(Script)`, // 4
        `file:///project/src/a.ts`, // 5: script name
        `shared`, // 6: edge name
        `script`, // 7: edge name
        `name`, // 8: edge name
      ],
      // Closure (flat=12) at scriptId=1, line=5, col=10
      locations: [12, 1, 5, 10],
    })

    const md = v8HeapSnapshotToMd(
      snapshot,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
      }),
    )

    // Category table
    expect(categoryTables(md)).toEqual([
      [
        { Category: `object`, '%': `47.4%`, Size: `200 B`, Nodes: `1` },
        { Category: `string`, '%': `26.1%`, Size: `110 B`, Nodes: `2` },
        { Category: `closure`, '%': `15.2%`, Size: `64 B`, Nodes: `1` },
        { Category: `code`, '%': `11.4%`, Size: `48 B`, Nodes: `1` },
        { Category: `synthetic`, '%': `0.0%`, Size: `0 B`, Nodes: `2` },
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
          Location: `<native>`,
        },
      ],
    ])

    // Self size instances for MyClass
    expect(selfSizeInstancesTables(md, `MyClass`)).toEqual([
      [{ '%': `100.0%`, Size: `200 B`, Instances: `1`, Path: `(GC root)` }],
    ])

    // Closure table
    expect(closureTables(md)).toEqual([
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

    const md = v8HeapSnapshotToMd(snapshot, normalizeProfileToMdOptions())

    expect(selfSizeTables(md)).toEqual([
      [
        expect.objectContaining({ Constructor: `parent` }),
        expect.objectContaining({ Constructor: `child` }),
      ],
    ])
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

    const md = v8HeapSnapshotToMd(snapshot, normalizeProfileToMdOptions())

    expect(md).toContain(`## Largest strings`)
    expect(md).toContain(`hello`)
  })
})
