import type { Root } from 'mdast'
import {
  allTablesAfterHeading,
  allTablesAfterHeadingContaining,
  nodesUnderHeading,
  parseMd,
} from '../../helpers/testing.ts'
import type { Table } from '../../helpers/testing.ts'
import { makeFileReference } from '../../location.ts'
import type { FileReference, SourceLocation } from '../../location.ts'
import type { ProfileToMdContext } from '../../options.ts'
import type {
  AggregatedHeapSnapshot,
  AggregatedHeapSnapshotConstructor,
  AggregatedHeapSnapshotFunction,
  AggregatedHeapSnapshotString,
  NodeCategoryStats,
  RetainerHop,
  RetainerPathStep,
} from './aggregate.ts'
import type { PathSnapshot } from './diff.ts'
import { computeStartOffsets } from './graph.ts'
import type { NodeAdjacencyGraph } from './graph.ts'
import { newOutermostInstanceOrdinalsOf } from './retained.ts'
import type { HeapSnapshotNodeCategory, RetainerNode } from './type.ts'

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
  edgeCount = 0,
  nodeCategoryToStats = new Map<HeapSnapshotNodeCategory, NodeCategoryStats>(),
  constructors = [],
  functions = [],
  strings = [],
  nodeCount = Math.max(
    0,
    ...[...constructors, ...functions, ...strings].map(({ id }) => id + 1),
    ...constructors.flatMap(({ instances }) =>
      instances.map(({ id }) => id + 1),
    ),
    ...functions.flatMap(({ instanceOrdinals }) =>
      instanceOrdinals.map(id => id + 1),
    ),
  ),
  heldSize = [...constructors, ...functions, ...strings].reduce(
    (heldSize, entity) => heldSize + entity.selfSize,
    0,
  ),
}: {
  context?: ProfileToMdContext
  heldSize?: number
  nodeCount?: number
  edgeCount?: number
  nodeCategoryToStats?: Map<HeapSnapshotNodeCategory, NodeCategoryStats>
  constructors?: AggregatedHeapSnapshotConstructor[]
  functions?: AggregatedHeapSnapshotFunction[]
  strings?: AggregatedHeapSnapshotString[]
} = {}): AggregatedHeapSnapshot => ({
  type: `heap-snapshot`,
  context,
  heldSize,
  nodeCount,
  edgeCount,
  nodeCategoryToStats,
  constructors,
  functions,
  strings,
  outermostInstanceOrdinalsOf: instanceOrdinals => instanceOrdinals,
  retainerHopOf: () => undefined,
  retainerOf: nodeOrdinal => ({ id: nodeOrdinal, name: `` }),
  retainedNodesOf: () => [],
})

/**
 * The retainer hops of nodes at the given retainer paths, by node ordinal, and
 * their retainers. Each step's retainer is a node of its own, numbered after
 * the paths' nodes, except that a path's last hop ends at its node in
 * {@link endOrdinals} when given.
 */
export const makeRetainerHops = (
  paths: readonly (readonly RetainerPathStep[])[],
  endOrdinals: readonly (number | undefined)[] = [],
): PathSnapshot &
  Pick<AggregatedHeapSnapshot, `outermostInstanceOrdinalsOf`> => {
  const hops: RetainerHop[] = []
  const retainers: RetainerNode[] = []
  let nodeCount = paths.length
  for (const [nodeOrdinal, steps] of paths.entries()) {
    const endOrdinal = endOrdinals[nodeOrdinal]
    let retainedOrdinal = nodeOrdinal
    for (const [index, step] of steps.entries()) {
      const dominatorOrdinal =
        index === steps.length - 1 && endOrdinal !== undefined
          ? endOrdinal
          : nodeCount++
      hops[retainedOrdinal] = {
        dominatorOrdinal,
        edge: step.edge,
        internal: false,
      }
      retainers[dominatorOrdinal] = step.retainer
      retainedOrdinal = dominatorOrdinal
    }
  }
  // A node without a hop dominates itself, like the GC root.
  const ordinalToImmediateDominatorOrdinal = Int32Array.from(
    { length: nodeCount },
    (_, nodeOrdinal) => hops[nodeOrdinal]?.dominatorOrdinal ?? nodeOrdinal,
  )
  const retainerHopOf = (nodeOrdinal: number) => hops[nodeOrdinal]
  const retainerOf = (nodeOrdinal: number): RetainerNode =>
    retainers[nodeOrdinal] ?? { id: nodeOrdinal, name: `` }
  return {
    nodeCount,
    outermostInstanceOrdinalsOf: newOutermostInstanceOrdinalsOf(
      ordinalToImmediateDominatorOrdinal,
    ),
    retainerHopOf,
    retainerOf,
  }
}

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
  nameLocation,
  location,
  selfSize,
  retainedSize,
  instanceCount,
  category = `object`,
}: {
  name: string
  nameLocation?: FileReference
  location?: SourceLocation
  selfSize: number
  retainedSize: number
  instanceCount: number
  category?: HeapSnapshotNodeCategory
}): AggregatedHeapSnapshotConstructor => ({
  type: `node`,
  id: 0,
  name,
  nameLocation,
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
  instanceOrdinals: Array.from({ length: instanceCount }, (_, index) => index),
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

export const retainedSizeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Retained size`)

export const selfSizeRetainerPathTables = (
  md: string,
  name: string,
): Table[] => {
  const selfUnder = nodesUnderHeading(parseMd(md), `Self size`)
  const instUnder = nodesUnderHeading(
    { type: `root`, children: selfUnder } as Root,
    `Retainer paths`,
  )
  return allTablesAfterHeadingContaining(instUnder, name)
}

export const retainedSizeRetainerPathTables = (
  md: string,
  name: string,
): Table[] => {
  const retainedUnder = nodesUnderHeading(parseMd(md), `Retained size`)
  const instancesUnder = nodesUnderHeading(
    { type: `root`, children: retainedUnder } as Root,
    `Retainer paths`,
  )
  return allTablesAfterHeadingContaining(instancesUnder, name)
}

export const functionTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Largest functions`)

export const retainedNodeTables = (md: string, name: string): Table[] => {
  const functionsUnder = nodesUnderHeading(parseMd(md), `Largest functions`)
  const retainedUnder = nodesUnderHeading(
    { type: `root`, children: functionsUnder } as Root,
    `Retained nodes`,
  )
  return allTablesAfterHeadingContaining(retainedUnder, name)
}

export const largestStringsTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Largest strings`)

export const SEVERAL_PATHS_NOTE = `\`B ←(several paths)– A\` means \`A\` retains \`B\` only through other nodes, along several paths.`
