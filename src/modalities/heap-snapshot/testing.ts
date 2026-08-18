import type { Root } from 'mdast'
import {
  allTablesAfterHeading,
  allTablesAfterHeadingContaining,
  nodesUnderHeading,
  parseMd,
} from '../../helpers/testing.ts'
import type { Table } from '../../helpers/testing.ts'
import { makeFileReference } from '../../location.ts'
import type { SourceLocation } from '../../location.ts'
import type { ProfileToMdContext } from '../../options.ts'
import type {
  AggregatedHeapSnapshot,
  AggregatedHeapSnapshotConstructor,
  AggregatedHeapSnapshotFunction,
  AggregatedHeapSnapshotString,
  NodeCategoryStats,
} from './aggregate.ts'
import { computeStartOffsets } from './graph.ts'
import type { NodeAdjacencyGraph } from './graph.ts'
import type { HeapSnapshotNodeCategory } from './type.ts'

/**
 * Builds a node adjacency graph from `[fromOrdinal, toOrdinal]` edges. A node's
 * successors and predecessors follow the order of the edges that connect them,
 * and each edge's index is its position in `edges`.
 */
export const makeNodeAdjacencyGraph = (
  nodeCount: number,
  edges: readonly (readonly [number, number])[],
): NodeAdjacencyGraph => {
  const ordinalToSuccessorCount = new Int32Array(nodeCount)
  const ordinalToPredecessorCount = new Int32Array(nodeCount)
  for (const [fromOrdinal, toOrdinal] of edges) {
    ordinalToSuccessorCount[fromOrdinal]!++
    ordinalToPredecessorCount[toOrdinal]!++
  }

  const ordinalToSuccessorStartOffset = computeStartOffsets(
    ordinalToSuccessorCount,
  )
  const ordinalToPredecessorStartOffset = computeStartOffsets(
    ordinalToPredecessorCount,
  )
  const offsetToSuccessorOrdinal = new Int32Array(edges.length)
  const offsetToSuccessorEdgeIndex = new Int32Array(edges.length)
  const offsetToPredecessorOrdinal = new Int32Array(edges.length)
  const offsetToPredecessorEdgeIndex = new Int32Array(edges.length)
  const ordinalToSuccessorOffset = ordinalToSuccessorStartOffset.slice(
    0,
    nodeCount,
  )
  const ordinalToPredecessorOffset = ordinalToPredecessorStartOffset.slice(
    0,
    nodeCount,
  )
  for (const [edgeIndex, [fromOrdinal, toOrdinal]] of edges.entries()) {
    const successorOffset = ordinalToSuccessorOffset[fromOrdinal]!++
    offsetToSuccessorOrdinal[successorOffset] = toOrdinal
    offsetToSuccessorEdgeIndex[successorOffset] = edgeIndex

    const predecessorOffset = ordinalToPredecessorOffset[toOrdinal]!++
    offsetToPredecessorOrdinal[predecessorOffset] = fromOrdinal
    offsetToPredecessorEdgeIndex[predecessorOffset] = edgeIndex
  }

  return {
    ordinalToSuccessorStartOffset,
    offsetToSuccessorOrdinal,
    offsetToSuccessorEdgeIndex,
    ordinalToPredecessorStartOffset,
    offsetToPredecessorOrdinal,
    offsetToPredecessorEdgeIndex,
  }
}

export const makeAggregatedHeapSnapshot = ({
  context = { format: `v8-heap-snapshot`, origin: `node` },
  nodeCount = 0,
  edgeCount = 0,
  nodeCategoryToStats = new Map<HeapSnapshotNodeCategory, NodeCategoryStats>(),
  constructors = [],
  functions = [],
  strings = [],
  totalSize = [...constructors, ...functions, ...strings].reduce(
    (totalSize, node) => totalSize + node.selfSize,
    0,
  ),
}: {
  context?: ProfileToMdContext
  totalSize?: number
  nodeCount?: number
  edgeCount?: number
  nodeCategoryToStats?: Map<HeapSnapshotNodeCategory, NodeCategoryStats>
  constructors?: AggregatedHeapSnapshotConstructor[]
  functions?: AggregatedHeapSnapshotFunction[]
  strings?: AggregatedHeapSnapshotString[]
} = {}): AggregatedHeapSnapshot => ({
  type: `heap-snapshot`,
  context,
  totalSize,
  nodeCount,
  edgeCount,
  nodeCategoryToStats,
  constructors,
  functions,
  strings,
  retainerPathOf: () => `(GC root)`,
  retainedNodesOf: () => [],
})

export const makeSourceLocation = (
  url: string,
  line?: number,
  column?: number,
): SourceLocation => {
  const fileReference = makeFileReference(url)
  if (!fileReference) {
    throw new Error(`expected a usable file reference, got: ${url}`)
  }
  return { ...fileReference, line, column }
}

export const makeAggregatedHeapSnapshotConstructor = ({
  name,
  location,
  selfSize,
  retainedSize,
  instanceCount,
  category = `object`,
}: {
  name: string
  location?: SourceLocation
  selfSize: number
  retainedSize: number
  instanceCount: number
  category?: HeapSnapshotNodeCategory
}): AggregatedHeapSnapshotConstructor => ({
  type: `node`,
  id: 0,
  name,
  location,
  category,
  selfSize,
  retainedSize,
  instances: Array.from({ length: instanceCount }, (_, index) => ({
    type: `node`,
    id: index,
    name,
    category,
    selfSize: 0,
    retainedSize: 0,
  })),
})

export const makeAggregatedHeapSnapshotFunction = ({
  name,
  location,
  selfSize,
  retainedSize,
  instanceCount = 1,
  category = `function`,
}: {
  name: string
  location?: SourceLocation
  selfSize: number
  retainedSize: number
  instanceCount?: number
  category?: HeapSnapshotNodeCategory
}): AggregatedHeapSnapshotFunction => ({
  type: `node`,
  id: 0,
  name,
  location,
  category,
  selfSize,
  retainedSize,
  largestInstanceId: 0,
  instanceIds: Array.from({ length: instanceCount }, (_, index) => index),
})

export const makeAggregatedHeapSnapshotString = ({
  value,
  selfSize,
  category = `string`,
}: {
  value?: string
  selfSize: number
  category?: HeapSnapshotNodeCategory
}): AggregatedHeapSnapshotString => ({
  type: `node`,
  id: 0,
  name: value,
  category,
  selfSize,
  retainedSize: selfSize,
})

export const selfSizeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Self size`)

export const totalSizeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Total size`)

export const retainedSizeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Retained size`)

export const selfSizeInstancesTables = (md: string, name: string): Table[] => {
  const selfUnder = nodesUnderHeading(parseMd(md), `Self size`)
  const instUnder = nodesUnderHeading(
    { type: `root`, children: selfUnder } as Root,
    `Instances`,
  )
  return allTablesAfterHeadingContaining(instUnder, name)
}

export const retainedSizeInstancesTables = (
  md: string,
  name: string,
): Table[] => {
  const retainedUnder = nodesUnderHeading(parseMd(md), `Retained size`)
  const instancesUnder = nodesUnderHeading(
    { type: `root`, children: retainedUnder } as Root,
    `Instances`,
  )
  return allTablesAfterHeadingContaining(instancesUnder, name)
}

export const functionTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Largest functions`)

export const retainedObjectsTables = (md: string, name: string): Table[] => {
  const functionsUnder = nodesUnderHeading(parseMd(md), `Largest functions`)
  const retainedUnder = nodesUnderHeading(
    { type: `root`, children: functionsUnder } as Root,
    `Retained`,
  )
  return allTablesAfterHeadingContaining(retainedUnder, name)
}

export const largestStringsTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Largest strings`)
