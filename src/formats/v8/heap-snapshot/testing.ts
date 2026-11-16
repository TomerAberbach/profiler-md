import type { V8HeapSnapshot } from './parse.ts'

export const NODE_TYPE_STRING = 2
export const NODE_TYPE_OBJECT = 3
const NODE_TYPE_CODE = 4
export const NODE_TYPE_CLOSURE = 5
export const NODE_TYPE_NATIVE = 8
export const NODE_TYPE_SYNTHETIC = 9

export const EDGE_TYPE_ELEMENT = 1
export const EDGE_TYPE_PROPERTY = 2
const EDGE_TYPE_INTERNAL = 3
export const EDGE_TYPE_HIDDEN = 4
export const EDGE_TYPE_WEAK = 6

export const makeV8Node = ({
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

export const makeV8Edge = ({
  type,
  nameOrIndex,
  toNode,
}: {
  type: number
  nameOrIndex: number
  toNode: number
}): number[] => [type, nameOrIndex, toNode]

export const makeV8Snapshot = ({
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
export const makeClosureSnapshot = (
  scriptName = `file:///project/src/a.ts`,
  objectName = `MyClass`,
): V8HeapSnapshot =>
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
