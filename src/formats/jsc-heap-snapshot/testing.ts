import type { JSCHeapSnapshot } from './parse.ts'

// Node flags
export const NODE_INTERNAL = 0b0001

// Edge types
export const EDGE_INTERNAL = 0
export const EDGE_PROPERTY = 1
export const EDGE_INDEX = 2
export const EDGE_VARIABLE = 3

export const makeJSCNode = ({
  id,
  size,
  nameIndex,
  flags = 0b0000,
}: {
  id: number
  size: number
  nameIndex: number
  flags?: number
}): number[] => [id, size, nameIndex, flags]

export const makeJSCEdge = ({
  from,
  to,
  type,
  nameIndex,
}: {
  from: number
  to: number
  type: number
  nameIndex: number
}): number[] => [from, to, type, nameIndex]

export const makeJSCSnapshot = ({
  nodes,
  nodeClassNames,
  edges,
  edgeTypes = [`Internal`, `Property`, `Index`, `Variable`],
  edgeNames,
}: {
  nodes: number[]
  nodeClassNames: string[]
  edges: number[]
  edgeTypes?: string[]
  edgeNames: string[]
}): JSCHeapSnapshot => ({
  version: 2,
  type: `Inspector`,
  nodes,
  nodeClassNames,
  edges,
  edgeTypes,
  edgeNames,
})
