import type { V8HeapSnapshot } from './parse.ts'

export const NODE_TYPE_STRING = 2
export const NODE_TYPE_OBJECT = 3
export const NODE_TYPE_CODE = 4
export const NODE_TYPE_CLOSURE = 5
export const NODE_TYPE_NATIVE = 8
export const NODE_TYPE_SYNTHETIC = 9

export const EDGE_TYPE_PROPERTY = 2
export const EDGE_TYPE_INTERNAL = 3
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
