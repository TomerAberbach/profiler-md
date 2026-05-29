import { fileReferenceId } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import { computeImmediateDominatorGraph } from './graph.ts'
import type { ImmediateDominatorGraph, NodeAdjacencyGraph } from './graph.ts'
import {
  attributeCategoryRetainedSizes,
  computeNodeOrdinalToRetainedSize,
} from './retained.ts'

export type SnapshotAggregatorOptions = {
  nodes: number[]
  nodeCount: number
  edgeCount: number
  nodeFieldCount: number
  nodeSelfSizeOffset: number
  nodeAdjacencyGraph: NodeAdjacencyGraph
  formatEdgeLabel: (retainerOrdinal: number, edgeIndex: number) => string
  formatNodeLabel: (nodeOrdinal: number) => string
  isInternalNode: (nodeOrdinal: number) => boolean
}

export class SnapshotAggregator {
  readonly #nodes: number[]
  readonly #nodeCount: number
  readonly #edgeCount: number
  readonly #nodeFieldCount: number
  readonly #nodeSelfSizeOffset: number
  readonly #nodeAdjacencyGraph: NodeAdjacencyGraph
  readonly #formatEdgeLabel: (
    retainerOrdinal: number,
    edgeIndex: number,
  ) => string

  readonly #formatNodeLabel: (nodeOrdinal: number) => string
  readonly #isInternalNode: (nodeOrdinal: number) => boolean

  #totalSize = 0
  readonly #nodeCategoryToStats = new Map<string, NodeCategoryStats>()
  readonly #immediateDominatorGraph: ImmediateDominatorGraph
  readonly #nodeOrdinalToRetainedSize: Float64Array

  readonly #constructors: AggregatedConstructor[] = []
  readonly #nameToConstructorIndex = new Map<string, number>()
  readonly #nodeOrdinalToConstructorIndex: Int32Array

  readonly #closures: AggregatedClosure[] = []
  readonly #keyToClosureIndex = new Map<string, number>()
  readonly #nodeOrdinalToClosureIndex: Int32Array

  readonly #strings: AggregatedSnapshotNode[] = []

  public constructor({
    nodes,
    nodeCount,
    edgeCount,
    nodeFieldCount,
    nodeSelfSizeOffset,
    nodeAdjacencyGraph,
    formatEdgeLabel,
    formatNodeLabel,
    isInternalNode,
  }: SnapshotAggregatorOptions) {
    this.#nodes = nodes
    this.#nodeCount = nodeCount
    this.#edgeCount = edgeCount
    this.#nodeFieldCount = nodeFieldCount
    this.#nodeSelfSizeOffset = nodeSelfSizeOffset
    this.#nodeAdjacencyGraph = nodeAdjacencyGraph
    this.#formatEdgeLabel = formatEdgeLabel
    this.#formatNodeLabel = formatNodeLabel
    this.#isInternalNode = isInternalNode

    this.#immediateDominatorGraph = computeImmediateDominatorGraph(
      nodeCount,
      nodeAdjacencyGraph,
    )
    this.#nodeOrdinalToRetainedSize = computeNodeOrdinalToRetainedSize(
      nodes,
      nodeFieldCount,
      nodeSelfSizeOffset,
      this.#immediateDominatorGraph,
    )

    this.#nodeOrdinalToConstructorIndex = new Int32Array(nodeCount).fill(-1)
    this.#nodeOrdinalToClosureIndex = new Int32Array(nodeCount).fill(-1)
  }

  public addCategoryNode(nodeOrdinal: number, category: string): void {
    const selfSize = this.#selfSize(nodeOrdinal)
    this.#totalSize += selfSize
    let stats = this.#nodeCategoryToStats.get(category)
    if (!stats) {
      stats = { size: 0, nodeCount: 0 }
      this.#nodeCategoryToStats.set(category, stats)
    }
    stats.size += selfSize
    stats.nodeCount++
  }

  public addConstructorNode(
    nodeOrdinal: number,
    location?: SourceLocation,
  ): void {
    const name = this.#formatNodeLabel(nodeOrdinal)
    const selfSize = this.#selfSize(nodeOrdinal)
    const retainedSize = this.#nodeOrdinalToRetainedSize[nodeOrdinal]!
    let constructorIndex = this.#nameToConstructorIndex.get(name)
    let constructor: AggregatedConstructor
    if (constructorIndex === undefined) {
      constructorIndex = this.#constructors.length
      constructor = {
        type: `node`,
        id: nodeOrdinal,
        name,
        location,
        selfSize: 0,
        retainedSize: 0,
        instances: [],
      }
      this.#constructors.push(constructor)
      this.#nameToConstructorIndex.set(name, constructorIndex)
    } else {
      constructor = this.#constructors[constructorIndex]!
      constructor.location ??= location
    }

    constructor.selfSize += selfSize
    constructor.instances.push({
      type: `node`,
      id: nodeOrdinal,
      name,
      selfSize,
      retainedSize,
      location: constructor.location,
    })
    this.#nodeOrdinalToConstructorIndex[nodeOrdinal] = constructorIndex
  }

  public addClosureNode(
    nodeOrdinal: number,
    location: SourceLocation | undefined,
  ): void {
    const name = this.#formatNodeLabel(nodeOrdinal)
    const key = location
      ? `${name}|${fileReferenceId(location)}:${location.line}:${location.column}`
      : name
    const retainedSize = this.#nodeOrdinalToRetainedSize[nodeOrdinal]!
    let closureIndex = this.#keyToClosureIndex.get(key)
    if (closureIndex === undefined) {
      closureIndex = this.#closures.length
      this.#closures.push({
        type: `node`,
        id: nodeOrdinal,
        name,
        location,
        selfSize: 0,
        retainedSize: 0,
        largestInstanceId: nodeOrdinal,
        instanceIds: [],
      })
      this.#keyToClosureIndex.set(key, closureIndex)
    }

    const closure = this.#closures[closureIndex]!
    closure.selfSize += this.#selfSize(nodeOrdinal)
    closure.instanceIds.push(nodeOrdinal)
    if (
      retainedSize > this.#nodeOrdinalToRetainedSize[closure.largestInstanceId]!
    ) {
      closure.largestInstanceId = nodeOrdinal
    }
    this.#nodeOrdinalToClosureIndex[nodeOrdinal] = closureIndex
  }

  public addStringNode(nodeOrdinal: number, name?: string): void {
    const selfSize = this.#selfSize(nodeOrdinal)
    this.#strings.push({
      type: `node`,
      id: nodeOrdinal,
      name,
      selfSize,
      retainedSize: selfSize,
    })
  }

  #selfSize(nodeOrdinal: number): number {
    return this.#nodes[
      nodeOrdinal * this.#nodeFieldCount + this.#nodeSelfSizeOffset
    ]!
  }

  public aggregate(): AggregatedHeapSnapshot {
    attributeCategoryRetainedSizes(
      this.#nodeOrdinalToRetainedSize,
      this.#immediateDominatorGraph,
      this.#nodeOrdinalToConstructorIndex,
      this.#constructors,
    )
    attributeCategoryRetainedSizes(
      this.#nodeOrdinalToRetainedSize,
      this.#immediateDominatorGraph,
      this.#nodeOrdinalToClosureIndex,
      this.#closures,
    )

    return {
      totalSize: this.#totalSize,
      nodeCount: this.#nodeCount,
      edgeCount: this.#edgeCount,
      nodeCategoryToStats: this.#nodeCategoryToStats,
      constructors: this.#constructors,
      closures: this.#closures,
      strings: this.#strings,
      retainerPathOf: nodeOrdinal =>
        computeRetainerPath(
          nodeOrdinal,
          this.#nodeAdjacencyGraph,
          this.#immediateDominatorGraph,
          this.#formatEdgeLabel,
          this.#isInternalNode,
        ),
      retainedNodesOf: nodeOrdinal =>
        computeRetainedNodes(
          nodeOrdinal,
          this.#immediateDominatorGraph,
          this.#nodeOrdinalToRetainedSize,
          this.#nodes,
          this.#nodeFieldCount,
          this.#nodeSelfSizeOffset,
          this.#formatNodeLabel,
          this.#isInternalNode,
        ),
    }
  }
}

const computeRetainerPath = (
  nodeOrdinal: number,
  {
    ordinalToPredecessorStartOffset,
    offsetToPredecessorOrdinal,
    offsetToPredecessorEdgeIndex,
  }: NodeAdjacencyGraph,
  { ordinalToImmediateDominatorOrdinal }: ImmediateDominatorGraph,
  formatEdgeLabel: (retainerOrdinal: number, edgeIndex: number) => string,
  isInternalNode: (nodeOrdinal: number) => boolean,
): string => {
  const hops: { label: string; internal: boolean }[] = []

  while (true) {
    const predecessorStartOffset = ordinalToPredecessorStartOffset[nodeOrdinal]!
    const predecessorEndOffset =
      ordinalToPredecessorStartOffset[nodeOrdinal + 1]!
    if (predecessorStartOffset === predecessorEndOffset) {
      break
    }

    const dominatorOrdinal = ordinalToImmediateDominatorOrdinal[nodeOrdinal]!
    let predecessorOffset = -1
    for (
      let offset = predecessorStartOffset;
      offset < predecessorEndOffset;
      offset++
    ) {
      if (offsetToPredecessorOrdinal[offset] === dominatorOrdinal) {
        predecessorOffset = offset
        break
      }
    }
    if (predecessorOffset === -1) {
      nodeOrdinal = dominatorOrdinal
      continue
    }

    const edgeIndex = offsetToPredecessorEdgeIndex[predecessorOffset]!
    const predecessorOrdinal = offsetToPredecessorOrdinal[predecessorOffset]!
    hops.push({
      label: formatEdgeLabel(predecessorOrdinal, edgeIndex),
      internal: isInternalNode(predecessorOrdinal),
    })
    nodeOrdinal = predecessorOrdinal
  }

  // Trim trailing internal hops (VM pseudo-nodes that never point to user code).
  while (hops.at(-1)?.internal) {
    hops.pop()
  }

  if (hops.length === 0) {
    return `(GC root)`
  }

  return hops.map(hop => hop.label).join(` ← `)
}

const computeRetainedNodes = (
  nodeOrdinal: number,
  {
    immediateDominateeOrdinalToStartOffset,
    offsetToImmediateDominateeOrdinal,
  }: ImmediateDominatorGraph,
  nodeOrdinalToRetainedSize: Float64Array,
  nodes: ArrayLike<number>,
  nodeFieldCount: number,
  nodeSelfSizeOffset: number,
  formatNodeLabel: (nodeOrdinal: number) => string,
  isInternalNode: (nodeOrdinal: number) => boolean,
): AggregatedSnapshotNode[] => {
  const retainedNodes: AggregatedSnapshotNode[] = []

  const dominateeOrdinals: number[] = []
  const childStartOffset = immediateDominateeOrdinalToStartOffset[nodeOrdinal]!
  const childEndOffset =
    immediateDominateeOrdinalToStartOffset[nodeOrdinal + 1]!
  for (let offset = childStartOffset; offset < childEndOffset; offset++) {
    dominateeOrdinals.push(offsetToImmediateDominateeOrdinal[offset]!)
  }

  while (dominateeOrdinals.length > 0) {
    const current = dominateeOrdinals.pop()!
    if (!isInternalNode(current)) {
      retainedNodes.push({
        type: `node`,
        id: current,
        name: formatNodeLabel(current),
        selfSize: nodes[current * nodeFieldCount + nodeSelfSizeOffset]!,
        retainedSize: nodeOrdinalToRetainedSize[current]!,
      })
    }

    const dominateeStartOffset =
      immediateDominateeOrdinalToStartOffset[current]!
    const dominateeEndOffset =
      immediateDominateeOrdinalToStartOffset[current + 1]!
    for (
      let offset = dominateeStartOffset;
      offset < dominateeEndOffset;
      offset++
    ) {
      dominateeOrdinals.push(offsetToImmediateDominateeOrdinal[offset]!)
    }
  }

  return retainedNodes
}

export type NodeCategoryStats = {
  /** Bytes allocated directly for nodes in this category. */
  size: number

  /** Number of nodes contributing to the size. */
  nodeCount: number
}

export type AggregatedSnapshotNode = {
  type: `node`

  /** Unique ID for this node that can also be used as an index. */
  id: number

  /** A human readable label for this node. */
  name?: string

  /** Bytes allocated directly for this node. */
  selfSize: number

  /**
   * Bytes allocated for this node, as well as all nodes that would be freed if
   * the node were garbage collected.
   */
  retainedSize: number

  /** The exact location where the node was defined. */
  location?: SourceLocation
}

export type AggregatedConstructor = AggregatedSnapshotNode & {
  /** A human readable label for this constructor. */
  name: string

  /** Instances of this constructor and their sizes. */
  instances: AggregatedSnapshotNode[]
}

export type AggregatedClosure = AggregatedSnapshotNode & {
  /** A human readable label for this closure. */
  name: string

  /** Node ordinal of the instance with the largest individual retained size. */
  largestInstanceId: number

  /** Node ordinals of all instances, for computing unique retainer path counts. */
  instanceIds: number[]
}

export type AggregatedHeapSnapshot = {
  /** Total bytes allocated in the snapshot. */
  totalSize: number

  /** Number of nodes allocated in the snapshot. */
  nodeCount: number

  /** Number of edges between nodes in the snapshot. */
  edgeCount: number

  /** Size and count stats by node category. */
  nodeCategoryToStats: Map<string, NodeCategoryStats>

  constructors: AggregatedConstructor[]
  closures: AggregatedClosure[]
  strings: AggregatedSnapshotNode[]

  retainerPathOf: (nodeOrdinal: number) => string
  retainedNodesOf: (nodeOrdinal: number) => AggregatedSnapshotNode[]
}
