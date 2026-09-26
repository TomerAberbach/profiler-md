import { sourceReferenceId, sourceReferenceKind } from '../../location.ts'
import type { FileReference, SourceLocation } from '../../location.ts'
import type {
  AggregationProfileToMdOptions,
  FormattingProfileToMdOptions,
  ProfileEntry,
  ProfileToMdContext,
} from '../../options.ts'
import { categorizeHeapSnapshotConstructorForOrigin } from '../../origins/index.ts'
import type { Origin, OriginDetector } from '../../origins/index.ts'
import type { InputAggregator } from '../aggregator.ts'
import {
  EntityCategorizer,
  newNodeCategoryResolver,
  NodeCategoryStatsAggregator,
} from './categorize.ts'
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
  UnresolvedHeapSnapshotNodeCategory,
} from './type.ts'

/**
 * Aggregates one {@link HeapSnapshot}.
 *
 * The constructor computes everything that needs no origin, including the
 * entries origin detection reads. {@link aggregate} categorizes under the
 * resolved origin.
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

  readonly #unresolvedCategoryOf: (
    nodeOrdinal: number,
  ) => UnresolvedHeapSnapshotNodeCategory

  #totalSize = 0
  readonly #nodeCategoryStats = new NodeCategoryStatsAggregator()

  readonly #immediateDominatorGraph: ImmediateDominatorGraph
  readonly #nodeOrdinalToRetainedSize: Float64Array

  readonly #constructors: AggregatedHeapSnapshotConstructor[] = []
  readonly #keyToConstructorIndex = new Map<string, number>()
  readonly #nodeOrdinalToConstructorIndex: Int32Array

  readonly #functions: AggregatedHeapSnapshotFunction[] = []
  readonly #keyToFunctionIndex = new Map<string, number>()
  readonly #nodeOrdinalToFunctionIndex: Int32Array

  readonly #strings: AggregatedHeapSnapshotString[] = []

  readonly #entityCategorizer = new EntityCategorizer()

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
      unresolvedCategoryOf,
    } = snapshot
    this.#nodeCount = nodeCount
    this.#edgeCount = edgeCount
    this.#nodeAdjacencyGraph = nodeAdjacencyGraph
    this.#selfSizeOf = selfSizeOf
    this.#formatEdgeLabel = formatEdgeLabel
    this.#formatNodeLabel = formatNodeLabel
    this.#isInternalNode = isInternalNode
    this.#unresolvedCategoryOf = unresolvedCategoryOf

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
          this.#addConstructorNode(nodeOrdinal, node)
          break
        case `function`:
          this.#addFunctionNode(nodeOrdinal, node.name, node.location)
          break
        case `string`:
          this.#addStringNode(nodeOrdinal, node)
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
    node: Extract<HeapSnapshotNode, { type: `constructor` }>,
  ): void {
    const { name, location, nameLocation } = node
    const selfSize = this.#selfSizeOf(nodeOrdinal)
    const retainedSize = this.#nodeOrdinalToRetainedSize[nodeOrdinal]!
    const key = nodeKey(name, location)
    let constructorIndex = this.#keyToConstructorIndex.get(key)
    let constructor: AggregatedHeapSnapshotConstructor
    if (constructorIndex === undefined) {
      constructorIndex = this.#constructors.length
      constructor = {
        type: `node`,
        id: nodeOrdinal,
        name,
        nameLocation,
        location,
        // `aggregate` assigns this once the origin is known.
        category: `object`,
        selfSize: 0,
        retainedSize: 0,
        instances: [],
      }
      this.#constructors.push(constructor)
      this.#keyToConstructorIndex.set(key, constructorIndex)
    } else {
      constructor = this.#constructors[constructorIndex]!
    }

    constructor.selfSize += selfSize
    this.#entityCategorizer.addConstructorNode(constructorIndex, node, selfSize)
    constructor.instances.push({
      type: `node`,
      id: nodeOrdinal,
      name,
      // `aggregate` assigns this once the origin is known.
      category: `object`,
      selfSize,
      retainedSize,
      location,
    })
    this.#nodeOrdinalToConstructorIndex[nodeOrdinal] = constructorIndex
  }

  #addFunctionNode(
    nodeOrdinal: number,
    name: string,
    location?: SourceLocation,
  ): void {
    const key = nodeKey(name, location)
    const retainedSize = this.#nodeOrdinalToRetainedSize[nodeOrdinal]!
    let functionIndex = this.#keyToFunctionIndex.get(key)
    if (functionIndex === undefined) {
      functionIndex = this.#functions.length
      this.#functions.push({
        type: `node`,
        id: nodeOrdinal,
        name,
        location,
        // `aggregate` assigns this once the origin is known.
        category: `function`,
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

  #addStringNode(
    nodeOrdinal: number,
    node: Extract<HeapSnapshotNode, { type: `string` }>,
  ): void {
    const selfSize = this.#selfSizeOf(nodeOrdinal)
    this.#strings.push({
      type: `node`,
      id: nodeOrdinal,
      name: node.name,
      // `aggregate` assigns this once the origin is known.
      category: `string`,
      selfSize,
      retainedSize: selfSize,
    })
    this.#entityCategorizer.addStringNode(node)
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

    const { origin } = context
    this.#entityCategorizer.categorize(
      this.#constructors,
      this.#strings,
      origin,
    )

    const categoryOf = this.#newNodeCategorizer(origin)
    this.#categorizeNodes(categoryOf)

    return {
      type: `heap-snapshot`,
      context,
      totalSize: this.#totalSize,
      nodeCount: this.#nodeCount,
      edgeCount: this.#edgeCount,
      nodeCategoryToStats: this.#nodeCategoryStats.aggregate(origin),
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
          categoryOf,
        ),
    }
  }

  /**
   * Categorizes a node under {@link origin}: the category the origin assigns to
   * the class its constructor defines, falling back to the node's own category.
   */
  #newNodeCategorizer(
    origin: Origin,
  ): (nodeOrdinal: number) => HeapSnapshotNodeCategory {
    const resolveCategory = newNodeCategoryResolver(origin)
    // Resolved per constructor, because a class can have thousands of
    // instances.
    const constructorIndexToNamedCategory = this.#constructors.map(({ name }) =>
      categorizeHeapSnapshotConstructorForOrigin(name, origin),
    )
    return nodeOrdinal => {
      const constructorIndex = this.#nodeOrdinalToConstructorIndex[nodeOrdinal]!
      const namedCategory =
        constructorIndex === -1
          ? undefined
          : constructorIndexToNamedCategory[constructorIndex]
      return (
        namedCategory ??
        resolveCategory(this.#unresolvedCategoryOf(nodeOrdinal))
      )
    }
  }

  #categorizeNodes(
    categoryOf: (nodeOrdinal: number) => HeapSnapshotNodeCategory,
  ): void {
    for (const fn of this.#functions) {
      fn.category = categoryOf(fn.largestInstanceId)
    }
    for (const constructor of this.#constructors) {
      for (const instance of constructor.instances) {
        instance.category = categoryOf(instance.id)
      }
    }
  }
}

/** Identifies a constructor or function by its name and location. */
const nodeKey = (name: string, location: SourceLocation | undefined): string =>
  location
    ? `${name}|${sourceReferenceKind(location)}|${sourceReferenceId(location)}:${location.line}:${location.column}`
    : name

/**
 * An entity's effective location: its explicit location, falling back to its
 * URL-shaped name (e.g. a V8 module namespace object named by its file URL).
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

  // Trailing internal hops are VM bookkeeping that never points to user code.
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
  categoryOf: (nodeOrdinal: number) => HeapSnapshotNodeCategory,
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
        category: categoryOf(current),
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
  nodeCount: number
}

export type AggregatedHeapSnapshotNode = {
  type: `node`

  /** Unique ID for this node that can also be used as an index. */
  id: number
  name?: string

  /**
   * The file reference the {@link name} parses as, when it is URL-shaped
   * (e.g. a V8 module namespace object named by its file URL). Formatting
   * shows it relative to the base URL in place of the raw name.
   */
  nameLocation?: FileReference

  /** Bytes allocated directly for this node. */
  selfSize: number

  category: HeapSnapshotNodeCategory

  /**
   * Bytes allocated for this node, as well as all nodes that would be freed if
   * the node were garbage collected.
   */
  retainedSize: number

  location?: SourceLocation
}

export type AggregatedHeapSnapshotConstructor = AggregatedHeapSnapshotNode & {
  name: string

  /**
   * What this constructor's instances hold: the category the origin assigns to
   * its class, falling back to the category holding the most of their self
   * size.
   */
  category: HeapSnapshotNodeCategory
  instances: AggregatedHeapSnapshotNode[]
}

export type AggregatedHeapSnapshotString = AggregatedHeapSnapshotNode & {
  /** What this string holds: its representation in the heap. */
  category: HeapSnapshotNodeCategory
}

export type AggregatedHeapSnapshotFunction = AggregatedHeapSnapshotNode & {
  name: string

  /**
   * What this function holds, taken from the instance
   * {@link largestInstanceId} identifies, which is the instance its rows show.
   */
  category: HeapSnapshotNodeCategory

  /** Node ordinal of the instance with the largest individual retained size. */
  largestInstanceId: number
  instanceIds: number[]
}

export type AggregatedHeapSnapshot = {
  type: `heap-snapshot`

  /**
   * The context this snapshot was aggregated under. Diffed sides that resolved
   * different origins can normalize match keys differently and miss matches.
   */
  context: ProfileToMdContext

  /** Total bytes allocated in the snapshot. */
  totalSize: number
  nodeCount: number
  edgeCount: number
  nodeCategoryToStats: Map<HeapSnapshotNodeCategory, NodeCategoryStats>

  constructors: AggregatedHeapSnapshotConstructor[]
  functions: AggregatedHeapSnapshotFunction[]
  strings: AggregatedHeapSnapshotString[]

  retainerPathOf: (
    nodeOrdinal: number,
    options: FormattingProfileToMdOptions,
  ) => string
  retainedNodesOf: (
    nodeOrdinal: number,
    options: FormattingProfileToMdOptions,
  ) => AggregatedHeapSnapshotNode[]
}
