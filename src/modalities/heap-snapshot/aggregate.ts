import { sourceReferenceId, sourceReferenceKind } from '../../location.ts'
import type { FileReference, SourceLocation } from '../../location.ts'
import type {
  AggregationProfileToMdOptions,
  FormattingProfileToMdOptions,
  ProfileEntry,
  ProfileToMdContext,
} from '../../options.ts'
import {
  categorizeHeapSnapshotConstructorForOrigin,
  categorizeHeapSnapshotDeclaredTypeForOrigin,
} from '../../origins/index.ts'
import type { Origin, OriginDetector } from '../../origins/index.ts'
import type { InputAggregator } from '../aggregator.ts'
import { computeImmediateDominatorGraph } from './graph.ts'
import type { ImmediateDominatorGraph, NodeAdjacencyGraph } from './graph.ts'
import {
  attributeCategoryRetainedSizes,
  computeNodeOrdinalToRetainedSize,
} from './retained.ts'
import type {
  HeapSnapshot,
  HeapSnapshotNode,
  HeapSnapshotNodeCategory,
} from './type.ts'

/**
 * Aggregates one {@link HeapSnapshot} through the uniform pipeline. The
 * structural part (dominator and retained-size computation, per-node
 * aggregation) needs no origin and runs at construction, deriving the
 * distinct entities' entries origin detection reads; categorization runs
 * under the file's resolved context.
 */
export class HeapSnapshotAggregator implements InputAggregator<AggregatedHeapSnapshot> {
  readonly #nodeCount: number
  readonly #edgeCount: number
  readonly #nodeAdjacencyGraph: NodeAdjacencyGraph
  readonly #selfSizeOf: (nodeOrdinal: number) => number
  readonly #formatEdgeLabel: (
    retainerOrdinal: number,
    edgeIndex: number,
    options: FormattingProfileToMdOptions,
  ) => string

  readonly #formatNodeLabel: (
    nodeOrdinal: number,
    options: FormattingProfileToMdOptions,
  ) => string

  readonly #isInternalNode: (nodeOrdinal: number) => boolean

  #totalSize = 0
  readonly #nodeCategoryStats = new NodeCategoryStatsAggregator()

  readonly #immediateDominatorGraph: ImmediateDominatorGraph
  readonly #nodeOrdinalToRetainedSize: Float64Array

  readonly #constructors: AggregatedHeapSnapshotConstructor[] = []
  readonly #nameToConstructorIndex = new Map<string, number>()
  readonly #nodeOrdinalToConstructorIndex: Int32Array

  readonly #functions: AggregatedHeapSnapshotFunction[] = []
  readonly #keyToFunctionIndex = new Map<string, number>()
  readonly #nodeOrdinalToFunctionIndex: Int32Array

  readonly #strings: AggregatedHeapSnapshotNode[] = []

  readonly #entries: ProfileEntry[]

  public constructor(snapshot: HeapSnapshot) {
    const {
      nodeCount,
      edgeCount,
      nodeAdjacencyGraph,
      selfSizeOf,
      nodes,
      formatEdgeLabel,
      formatNodeLabel,
      isInternalNode,
    } = snapshot
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
    this.#nodeOrdinalToFunctionIndex = new Int32Array(nodeCount).fill(-1)

    let nodeOrdinal = 0
    for (const node of nodes) {
      this.#addCategoryNode(nodeOrdinal, node)
      switch (node.type) {
        case `constructor`:
          this.#addConstructorNode(
            nodeOrdinal,
            node.name,
            node.location,
            node.nameLocation,
          )
          break
        case `function`:
          this.#addFunctionNode(nodeOrdinal, node.name, node.location)
          break
        case `string`:
          this.#addStringNode(nodeOrdinal, node.name)
          break
        case undefined:
          break
      }
      nodeOrdinal++
    }

    this.#entries = [...this.#constructors, ...this.#functions].map(entity => ({
      id: entity.id,
      name: entity.name,
      location: entityLocation(entity),
    }))
  }

  public detectOrigin(detector: OriginDetector): void {
    detector.addAll(this.#entries)
  }

  #addCategoryNode(nodeOrdinal: number, node: HeapSnapshotNode): void {
    const selfSize = this.#selfSizeOf(nodeOrdinal)
    this.#totalSize += selfSize
    this.#nodeCategoryStats.add(node, selfSize)
  }

  #addConstructorNode(
    nodeOrdinal: number,
    name: string,
    location?: SourceLocation,
    nameLocation?: FileReference,
  ): void {
    const selfSize = this.#selfSizeOf(nodeOrdinal)
    const retainedSize = this.#nodeOrdinalToRetainedSize[nodeOrdinal]!
    let constructorIndex = this.#nameToConstructorIndex.get(name)
    let constructor: AggregatedHeapSnapshotConstructor
    if (constructorIndex === undefined) {
      constructorIndex = this.#constructors.length
      constructor = {
        type: `node`,
        id: nodeOrdinal,
        name,
        nameLocation,
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

  #addFunctionNode(
    nodeOrdinal: number,
    name: string,
    location?: SourceLocation,
  ): void {
    const key = location
      ? `${name}|${sourceReferenceKind(location)}|${sourceReferenceId(location)}:${location.line}:${location.column}`
      : name
    const retainedSize = this.#nodeOrdinalToRetainedSize[nodeOrdinal]!
    let functionIndex = this.#keyToFunctionIndex.get(key)
    if (functionIndex === undefined) {
      functionIndex = this.#functions.length
      this.#functions.push({
        type: `node`,
        id: nodeOrdinal,
        name,
        location,
        selfSize: 0,
        retainedSize: 0,
        largestInstanceId: nodeOrdinal,
        instanceIds: [],
      })
      this.#keyToFunctionIndex.set(key, functionIndex)
    }

    const fn = this.#functions[functionIndex]!
    fn.selfSize += this.#selfSizeOf(nodeOrdinal)
    fn.instanceIds.push(nodeOrdinal)
    if (retainedSize > this.#nodeOrdinalToRetainedSize[fn.largestInstanceId]!) {
      fn.largestInstanceId = nodeOrdinal
    }
    this.#nodeOrdinalToFunctionIndex[nodeOrdinal] = functionIndex
  }

  #addStringNode(nodeOrdinal: number, name?: string): void {
    const selfSize = this.#selfSizeOf(nodeOrdinal)
    this.#strings.push({
      type: `node`,
      id: nodeOrdinal,
      name,
      selfSize,
      retainedSize: selfSize,
    })
  }

  public aggregate(
    options: AggregationProfileToMdOptions,
    context: ProfileToMdContext,
  ): AggregatedHeapSnapshot {
    attributeCategoryRetainedSizes(
      this.#nodeOrdinalToRetainedSize,
      this.#immediateDominatorGraph,
      this.#nodeOrdinalToConstructorIndex,
      this.#constructors,
    )
    attributeCategoryRetainedSizes(
      this.#nodeOrdinalToRetainedSize,
      this.#immediateDominatorGraph,
      this.#nodeOrdinalToFunctionIndex,
      this.#functions,
    )

    return {
      type: `heap-snapshot`,
      context,
      totalSize: this.#totalSize,
      nodeCount: this.#nodeCount,
      edgeCount: this.#edgeCount,
      nodeCategoryToStats: this.#nodeCategoryStats.aggregate(context.origin),
      constructors: this.#constructors,
      functions: this.#functions,
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
 * Aggregates each node's self size and count into its category's stats.
 *
 * A constructor's stats stay keyed by its name until {@link aggregate}, since
 * the origin categorizes it by the class name its language defines and is
 * detected only after the nodes are consumed.
 */
class NodeCategoryStatsAggregator {
  /** Stats of the nodes the format categorized, by the category it derived. */
  readonly #byCategory = new KeyedNodeStats<HeapSnapshotNodeCategory>()

  /**
   * The same, for a node the format left uncategorized, by the type name it
   * declared instead.
   *
   * Kept separate from the stats above rather than sharing one map keyed by
   * either, because a format may declare a type name equal to a category name,
   * and the two mean different things.
   */
  readonly #byDeclaredType = new KeyedNodeStats<string>()

  public add(node: HeapSnapshotNode, selfSize: number): void {
    if (node.category === undefined && node.declaredType !== undefined) {
      this.#byDeclaredType.add(node, node.declaredType, selfSize)
    } else {
      this.#byCategory.add(node, node.category ?? `unknown`, selfSize)
    }
  }

  /**
   * Resolves each node's category: the origin categorizes a constructor by the
   * class name its language defines, falling back to the category the format
   * derived from the engine's own node classification.
   */
  public aggregate(
    origin: Origin,
  ): Map<HeapSnapshotNodeCategory, NodeCategoryStats> {
    const nodeCategoryToStats = new Map<
      HeapSnapshotNodeCategory,
      NodeCategoryStats
    >()

    this.#byCategory.aggregateInto(
      nodeCategoryToStats,
      origin,
      category => category,
    )
    this.#byDeclaredType.aggregateInto(
      nodeCategoryToStats,
      origin,
      declaredType =>
        categorizeHeapSnapshotDeclaredTypeForOrigin(declaredType, origin) ??
        `object`,
    )

    return nodeCategoryToStats
  }
}

/**
 * Size and count stats of the nodes sharing a key, which resolves to a category
 * only once the origin is known.
 *
 * A constructor node's stats stay keyed by its name under that key, since the
 * origin categorizes it by the class name its language defines.
 */
class KeyedNodeStats<Key> {
  readonly #keyToStats = new Map<Key, NodeCategoryStats>()
  readonly #keyToConstructorNameToStats = new Map<
    Key,
    Map<string, NodeCategoryStats>
  >()

  public add(node: HeapSnapshotNode, key: Key, selfSize: number): void {
    const stats = this.#statsOf(node, key)
    stats.size += selfSize
    stats.nodeCount++
  }

  /**
   * Adds every key's stats to {@link nodeCategoryToStats} under the category
   * {@link categoryOf} resolves the key to, or the one the origin gives a
   * constructor's name.
   */
  public aggregateInto(
    nodeCategoryToStats: Map<HeapSnapshotNodeCategory, NodeCategoryStats>,
    origin: Origin,
    categoryOf: (key: Key) => HeapSnapshotNodeCategory,
  ): void {
    for (const [key, stats] of this.#keyToStats) {
      addStats(nodeCategoryToStats, categoryOf(key), stats)
    }
    for (const [key, nameToStats] of this.#keyToConstructorNameToStats) {
      // `categoryOf` runs once per key rather than per constructor name, since
      // one key can have thousands of them.
      const category = categoryOf(key)
      for (const [name, stats] of nameToStats) {
        addStats(
          nodeCategoryToStats,
          categorizeHeapSnapshotConstructorForOrigin(name, origin) ?? category,
          stats,
        )
      }
    }
  }

  /**
   * The stats {@link node} aggregates into under {@link key}: its constructor
   * name's when it has one, and the key's own otherwise.
   */
  #statsOf(node: HeapSnapshotNode, key: Key): NodeCategoryStats {
    if (node.type !== `constructor`) {
      return statsOf(this.#keyToStats, key)
    }

    let nameToStats = this.#keyToConstructorNameToStats.get(key)
    if (!nameToStats) {
      nameToStats = new Map()
      this.#keyToConstructorNameToStats.set(key, nameToStats)
    }
    return statsOf(nameToStats, node.name)
  }
}

/** Adds {@link stats} to the stats {@link key} aggregates into. */
const addStats = <Key>(
  keyToStats: Map<Key, NodeCategoryStats>,
  key: Key,
  { size, nodeCount }: NodeCategoryStats,
): void => {
  const stats = statsOf(keyToStats, key)
  stats.size += size
  stats.nodeCount += nodeCount
}

/** The stats {@link key} aggregates into, inserted empty when it has none. */
const statsOf = <Key>(
  keyToStats: Map<Key, NodeCategoryStats>,
  key: Key,
): NodeCategoryStats => {
  let stats = keyToStats.get(key)
  if (!stats) {
    stats = { size: 0, nodeCount: 0 }
    keyToStats.set(key, stats)
  }
  return stats
}

/**
 * An entity's effective location: its explicit location, falling back to its
 * URL-shaped name (e.g. a V8 module namespace object named by its file URL).
 *
 * Origin detection and categorization ({@link HeapSnapshotAggregator}) and base
 * URL inference agree on an entity's location through this rule.
 */
export const entityLocation = ({
  location,
  nameLocation,
}: Pick<AggregatedHeapSnapshotNode, `location` | `nameLocation`>):
  SourceLocation | undefined => location ?? nameLocation

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

  // Trim trailing internal hops (VM bookkeeping nodes that never point to user code).
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
): AggregatedHeapSnapshotNode[] => {
  const retainedNodes: AggregatedHeapSnapshotNode[] = []

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

export type AggregatedHeapSnapshotNode = {
  type: `node`

  /** Unique ID for this node that can also be used as an index. */
  id: number

  /** A human readable label for this node. */
  name?: string

  /**
   * The file reference the {@link name} parses as, when it is URL-shaped
   * (e.g. a V8 module namespace object named by its file URL). Formatting
   * shows it relative to the base URL in place of the raw name.
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

export type AggregatedHeapSnapshotConstructor = AggregatedHeapSnapshotNode & {
  /** A human readable label for this constructor. */
  name: string

  /** Instances of this constructor and their sizes. */
  instances: AggregatedHeapSnapshotNode[]
}

export type AggregatedHeapSnapshotFunction = AggregatedHeapSnapshotNode & {
  /** A human readable label for this function. */
  name: string

  /** Node ordinal of the instance with the largest individual retained size. */
  largestInstanceId: number

  /** Node ordinals of all instances, for computing unique retainer path counts. */
  instanceIds: number[]
}

export type AggregatedHeapSnapshot = {
  type: `heap-snapshot`

  /**
   * The context (format and resolved origin) this snapshot was aggregated
   * under, carried so downstream consumers (e.g. diff matching) can apply
   * origin-aware logic per side. Diffed sides that resolved different origins
   * can normalize match keys differently and miss matches.
   */
  context: ProfileToMdContext

  /** Total bytes allocated in the snapshot. */
  totalSize: number

  /** Number of nodes allocated in the snapshot. */
  nodeCount: number

  /** Number of edges between nodes in the snapshot. */
  edgeCount: number

  /** Size and count stats by node category. */
  nodeCategoryToStats: Map<HeapSnapshotNodeCategory, NodeCategoryStats>

  constructors: AggregatedHeapSnapshotConstructor[]
  functions: AggregatedHeapSnapshotFunction[]
  strings: AggregatedHeapSnapshotNode[]

  retainerPathOf: (
    nodeOrdinal: number,
    options: FormattingProfileToMdOptions,
  ) => string
  retainedNodesOf: (
    nodeOrdinal: number,
    options: FormattingProfileToMdOptions,
  ) => AggregatedHeapSnapshotNode[]
}
