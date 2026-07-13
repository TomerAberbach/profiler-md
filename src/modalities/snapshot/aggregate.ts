import { fileReferenceId } from '../../location.ts'
import type { FileReference, SourceLocation } from '../../location.ts'
import type {
  AggregateProfileToMdOptions,
  ProfileEntry,
  ResolvedProfileToMdOptions,
  UnresolvedProfileToMdContext,
} from '../../options.ts'
import { determineOrigin } from '../../origins/index.ts'
import { computeImmediateDominatorGraph } from './graph.ts'
import type { ImmediateDominatorGraph, NodeAdjacencyGraph } from './graph.ts'
import {
  attributeCategoryRetainedSizes,
  computeNodeOrdinalToRetainedSize,
} from './retained.ts'
import type { HeapSnapshot } from './type.ts'

/**
 * Aggregates one {@link HeapSnapshot} through the uniform pipeline: dominator
 * and retained-size computation, per-node accumulation, then origin detection
 * and categorization. The snapshot analogue of {@link makeAggregateProfile}'s
 * returned function (snapshots share no state, so there is no maker).
 */
export const aggregateHeapSnapshot = (
  snapshot: HeapSnapshot,
  options: AggregateProfileToMdOptions,
  context: UnresolvedProfileToMdContext,
): AggregatedHeapSnapshot => {
  const aggregator = new SnapshotAggregator(snapshot)
  let nodeOrdinal = 0
  for (const node of snapshot.nodes) {
    aggregator.addCategoryNode(nodeOrdinal, node.category)
    switch (node.kind) {
      case `constructor`:
        aggregator.addConstructorNode(
          nodeOrdinal,
          node.name,
          node.location,
          node.nameLocation,
        )
        break
      case `closure`:
        aggregator.addClosureNode(nodeOrdinal, node.name, node.location)
        break
      case `string`:
        aggregator.addStringNode(nodeOrdinal, node.name)
        break
      case undefined:
        break
    }
    nodeOrdinal++
  }
  return categorizeAggregatedHeapSnapshot(
    aggregator.aggregate(),
    options,
    context,
  )
}

class SnapshotAggregator {
  readonly #nodeCount: number
  readonly #edgeCount: number
  readonly #nodeAdjacencyGraph: NodeAdjacencyGraph
  readonly #selfSizeOf: (nodeOrdinal: number) => number
  readonly #formatEdgeLabel: (
    retainerOrdinal: number,
    edgeIndex: number,
    options: ResolvedProfileToMdOptions,
  ) => string

  readonly #formatNodeLabel: (
    nodeOrdinal: number,
    options: ResolvedProfileToMdOptions,
  ) => string

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
    nodeCount,
    edgeCount,
    nodeAdjacencyGraph,
    selfSizeOf,
    formatEdgeLabel,
    formatNodeLabel,
    isInternalNode,
  }: HeapSnapshot) {
    this.#nodeCount = nodeCount
    this.#edgeCount = edgeCount
    this.#nodeAdjacencyGraph = nodeAdjacencyGraph
    this.#selfSizeOf = selfSizeOf
    this.#formatEdgeLabel = formatEdgeLabel
    this.#formatNodeLabel = formatNodeLabel
    this.#isInternalNode = isInternalNode

    this.#immediateDominatorGraph = computeImmediateDominatorGraph(
      nodeCount,
      nodeAdjacencyGraph,
    )
    this.#nodeOrdinalToRetainedSize = computeNodeOrdinalToRetainedSize(
      selfSizeOf,
      this.#immediateDominatorGraph,
    )

    this.#nodeOrdinalToConstructorIndex = new Int32Array(nodeCount).fill(-1)
    this.#nodeOrdinalToClosureIndex = new Int32Array(nodeCount).fill(-1)
  }

  public addCategoryNode(nodeOrdinal: number, category: string): void {
    const selfSize = this.#selfSizeOf(nodeOrdinal)
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
    name: string,
    location?: SourceLocation,
    nameLocation?: FileReference,
  ): void {
    const selfSize = this.#selfSizeOf(nodeOrdinal)
    const retainedSize = this.#nodeOrdinalToRetainedSize[nodeOrdinal]!
    let constructorIndex = this.#nameToConstructorIndex.get(name)
    let constructor: AggregatedConstructor
    if (constructorIndex === undefined) {
      constructorIndex = this.#constructors.length
      constructor = {
        type: `node`,
        id: nodeOrdinal,
        name,
        nameLocation,
        location,
        // Categories are assigned after aggregation, in one pass over the full
        // set of entities (see {@link categorizeAggregatedHeapSnapshot}).
        category: ``,
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
    name: string,
    location?: SourceLocation,
  ): void {
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
        // Categories are assigned after aggregation, in one pass over the full
        // set of entities (see {@link categorizeAggregatedHeapSnapshot}).
        category: ``,
        selfSize: 0,
        retainedSize: 0,
        largestInstanceId: nodeOrdinal,
        instanceIds: [],
      })
      this.#keyToClosureIndex.set(key, closureIndex)
    }

    const closure = this.#closures[closureIndex]!
    closure.selfSize += this.#selfSizeOf(nodeOrdinal)
    closure.instanceIds.push(nodeOrdinal)
    if (
      retainedSize > this.#nodeOrdinalToRetainedSize[closure.largestInstanceId]!
    ) {
      closure.largestInstanceId = nodeOrdinal
    }
    this.#nodeOrdinalToClosureIndex[nodeOrdinal] = closureIndex
  }

  public addStringNode(nodeOrdinal: number, name?: string): void {
    const selfSize = this.#selfSizeOf(nodeOrdinal)
    this.#strings.push({
      type: `node`,
      id: nodeOrdinal,
      name,
      selfSize,
      retainedSize: selfSize,
    })
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
      type: `snapshot`,
      totalSize: this.#totalSize,
      nodeCount: this.#nodeCount,
      edgeCount: this.#edgeCount,
      nodeCategoryToStats: this.#nodeCategoryToStats,
      constructors: this.#constructors,
      closures: this.#closures,
      strings: this.#strings,
      retainerPathOf: (nodeOrdinal, options) =>
        computeRetainerPath(
          nodeOrdinal,
          this.#nodeAdjacencyGraph,
          this.#immediateDominatorGraph,
          (retainerOrdinal, edgeIndex) =>
            this.#formatEdgeLabel(retainerOrdinal, edgeIndex, options),
          this.#isInternalNode,
        ),
      retainedNodesOf: (nodeOrdinal, options) =>
        computeRetainedNodes(
          nodeOrdinal,
          this.#immediateDominatorGraph,
          this.#nodeOrdinalToRetainedSize,
          this.#selfSizeOf,
          ordinal => this.#formatNodeLabel(ordinal, options),
          this.#isInternalNode,
        ),
    }
  }
}

/**
 * Assigns a category to each of the snapshot's constructors and closures.
 *
 * The snapshot analog of the profile pipeline's categorization (see
 * {@link ProfileAggregator}): it runs after aggregation so it sees the full set
 * of entities, from which it detects the origin (when the context's origin is
 * `null`) before categorizing. Each entry's location falls back to its
 * URL-shaped name (e.g. a V8 module namespace object) so those categorize by
 * location too.
 */
const categorizeAggregatedHeapSnapshot = (
  snapshot: AggregatedHeapSnapshot,
  options: AggregateProfileToMdOptions,
  context: UnresolvedProfileToMdContext,
): AggregatedHeapSnapshot => {
  const entities = [...snapshot.constructors, ...snapshot.closures]
  const entries: ProfileEntry[] = entities.map(entity => ({
    id: entity.id,
    name: entity.name,
    location: entityLocation(entity),
  }))
  const { format } = context
  const origin = context.origin ?? determineOrigin({ format, entries })
  const categories = options.categorizeEntries(entries, { format, origin })
  for (let i = 0; i < entities.length; i++) {
    entities[i]!.category = categories[i]!
  }
  return snapshot
}

/**
 * An entity's effective location: its explicit location, falling back to its
 * URL-shaped name (e.g. a V8 module namespace object named by its file URL).
 *
 * Categorization ({@link categorizeAggregatedHeapSnapshot}) and base URL
 * inference agree on an entity's location through this rule.
 */
export const entityLocation = ({
  location,
  nameLocation,
}: Pick<AggregatedSnapshotNode, `location` | `nameLocation`>):
  | SourceLocation
  | undefined => location ?? nameLocation

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
  selfSizeOf: (nodeOrdinal: number) => number,
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
        selfSize: selfSizeOf(current),
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

  /**
   * The file reference the {@link name} parses as, when it is URL-shaped
   * (e.g. a V8 module namespace object named by its file URL). Formatting
   * renders it relative to the base URL in place of the raw name.
   */
  nameLocation?: FileReference

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

  /** The category of code this constructor belongs to. */
  category: string

  /** Instances of this constructor and their sizes. */
  instances: AggregatedSnapshotNode[]
}

export type AggregatedClosure = AggregatedSnapshotNode & {
  /** A human readable label for this closure. */
  name: string

  /** The category of code this closure belongs to. */
  category: string

  /** Node ordinal of the instance with the largest individual retained size. */
  largestInstanceId: number

  /** Node ordinals of all instances, for computing unique retainer path counts. */
  instanceIds: number[]
}

export type AggregatedHeapSnapshot = {
  type: `snapshot`

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

  retainerPathOf: (
    nodeOrdinal: number,
    options: ResolvedProfileToMdOptions,
  ) => string
  retainedNodesOf: (
    nodeOrdinal: number,
    options: ResolvedProfileToMdOptions,
  ) => AggregatedSnapshotNode[]
}
