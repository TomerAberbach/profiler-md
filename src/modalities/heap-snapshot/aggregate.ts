import {
  formatSourceLocation,
  sourceReferenceId,
  sourceReferenceKind,
} from '../../location.ts'
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
  newOutermostInstanceIdsOf,
} from './retained.ts'
import type {
  HeapSnapshot,
  HeapSnapshotNode,
  HeapSnapshotNodeCategory,
  RetainerEdge,
  RetainerNode,
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
  readonly #retainerEdgeOf: HeapSnapshot[`retainerEdgeOf`]
  readonly #retainerOf: HeapSnapshot[`retainerOf`]

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

  readonly #retainerHopOf = (nodeOrdinal: number): RetainerHop | undefined =>
    computeRetainerHop(
      nodeOrdinal,
      this.#nodeAdjacencyGraph,
      this.#immediateDominatorGraph,
      this.#retainerEdgeOf,
      this.#isInternalNode,
    )

  /** The location of the function or constructor the node is an instance of. */
  readonly #entityLocationOf = (
    nodeOrdinal: number,
  ): SourceLocation | undefined => {
    const functionIndex = this.#nodeOrdinalToFunctionIndex[nodeOrdinal]!
    if (functionIndex !== -1) {
      return this.#functions[functionIndex]!.location
    }
    const constructorIndex = this.#nodeOrdinalToConstructorIndex[nodeOrdinal]!
    return constructorIndex === -1
      ? undefined
      : this.#constructors[constructorIndex]!.location
  }

  public constructor(snapshot: HeapSnapshot) {
    const {
      nodeCount,
      edgeCount,
      nodeAdjacencyGraph,
      selfSizeOf,
      nodes,
      retainerEdgeOf,
      retainerOf,
      formatNodeLabel,
      isInternalNode,
      unresolvedCategoryOf,
    } = snapshot
    this.#nodeCount = nodeCount
    this.#edgeCount = edgeCount
    this.#nodeAdjacencyGraph = nodeAdjacencyGraph
    this.#selfSizeOf = selfSizeOf
    this.#retainerEdgeOf = retainerEdgeOf
    this.#retainerOf = retainerOf
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
      outermostInstanceIdsOf: newOutermostInstanceIdsOf(
        this.#immediateDominatorGraph.ordinalToImmediateDominatorOrdinal,
      ),
      retainerHopOf: this.#retainerHopOf,
      retainerOf: this.#retainerOf,
      retainerPathOf: (nodeOrdinal, options) =>
        formatRetainerPath(
          this.#retainerOf(nodeOrdinal),
          computeRetainerSteps(
            nodeOrdinal,
            this.#retainerHopOf,
            this.#retainerOf,
          ),
          options,
        ),
      retainedNodesOf: (nodeOrdinal, options) =>
        computeRetainedNodes(
          nodeOrdinal,
          this.#immediateDominatorGraph,
          this.#nodeOrdinalToRetainedSize,
          this.#selfSizeOf,
          ordinal => this.#formatNodeLabel(ordinal, options),
          this.#isInternalNode,
          this.#entityLocationOf,
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

/** Identifies a node by its name and location. */
export const nodeKey = (
  name: string,
  location: SourceLocation | undefined,
): string =>
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

const computeRetainerHop = (
  nodeOrdinal: number,
  {
    ordinalToPredecessorStartOffset,
    offsetToPredecessorOrdinal,
    offsetToPredecessorEdgeIndex,
  }: NodeAdjacencyGraph,
  { ordinalToImmediateDominatorOrdinal }: ImmediateDominatorGraph,
  retainerEdgeOf: HeapSnapshot[`retainerEdgeOf`],
  isInternalNode: (nodeOrdinal: number) => boolean,
): RetainerHop | undefined => {
  const predecessorStartOffset = ordinalToPredecessorStartOffset[nodeOrdinal]!
  const predecessorEndOffset = ordinalToPredecessorStartOffset[nodeOrdinal + 1]!
  if (predecessorStartOffset === predecessorEndOffset) {
    return undefined
  }

  const dominatorOrdinal = ordinalToImmediateDominatorOrdinal[nodeOrdinal]!
  // An unreachable node has no dominator, and the root dominates itself.
  if (dominatorOrdinal === -1 || dominatorOrdinal === nodeOrdinal) {
    return undefined
  }
  let edge: RetainerPathEdge = SEVERAL_RETAINERS_EDGE
  for (
    let offset = predecessorStartOffset;
    offset < predecessorEndOffset;
    offset++
  ) {
    if (offsetToPredecessorOrdinal[offset] === dominatorOrdinal) {
      edge = retainerEdgeOf(
        dominatorOrdinal,
        offsetToPredecessorEdgeIndex[offset]!,
      )
      break
    }
  }
  return { dominatorOrdinal, edge, internal: isInternalNode(dominatorOrdinal) }
}

const SEVERAL_RETAINERS_EDGE: RetainerPathEdge = { type: `several-retainers` }

const computeRetainerSteps = (
  nodeOrdinal: number,
  retainerHopOf: (nodeOrdinal: number) => RetainerHop | undefined,
  retainerOf: HeapSnapshot[`retainerOf`],
): RetainerPathStep[] => {
  const hops: RetainerHop[] = []
  for (
    let hop = retainerHopOf(nodeOrdinal);
    hop;
    hop = retainerHopOf(hop.dominatorOrdinal)
  ) {
    hops.push(hop)
  }

  const steps: RetainerPathStep[] = []
  for (let index = hops.length - 1; index >= 0; index--) {
    const hop = hops[index]!
    if (keepsRetainerStep(hop.internal, steps.length === 0)) {
      steps.push({ edge: hop.edge, retainer: retainerOf(hop.dominatorOrdinal) })
    }
  }
  return steps.reverse()
}

/**
 * Whether a retainer path keeps a hop's step, given whether the hop's
 * dominator is internal and whether the path from it outward is empty. A path
 * drops its trailing steps through internal nodes, which are VM bookkeeping
 * that never points to user code.
 */
export const keepsRetainerStep = (
  internal: boolean,
  isRestEmpty: boolean,
): boolean => !(isRestEmpty && internal)

/**
 * Formats a retainer path from the node outward, ending at `(GC root)` for a
 * node the GC root holds directly. Each step shows its edge, when it has a
 * label, inside the arrow to its retainer (e.g. `Entry ←.value– Item`).
 */
export const formatRetainerPath = (
  node: { name?: string; nameLocation?: FileReference },
  steps: readonly RetainerPathStep[],
  options: FormattingProfileToMdOptions,
): string => {
  const nodeName =
    formatRetainerName({ ...node, name: node.name ?? `` }, options) ||
    `(unknown)`
  return steps.length === 0
    ? `${nodeName} ← (GC root)`
    : steps.reduce((path, { edge, retainer }) => {
        const edgeLabel = formatRetainerEdgeLabel(edge, options)
        return `${path} ${edgeLabel ? `←${edgeLabel}–` : `←`} ${formatRetainerLabel(retainer, options)}`
      }, nodeName)
}

const formatRetainerName = (
  { name, nameLocation }: Pick<RetainerNode, `name` | `nameLocation`>,
  options: FormattingProfileToMdOptions,
): string => (nameLocation ? formatSourceLocation(nameLocation, options) : name)

export const formatRetainerLabel = (
  retainer: RetainerNode,
  options: FormattingProfileToMdOptions,
): string =>
  `${formatRetainerName(retainer, options)}${
    retainer.location
      ? ` (${formatSourceLocation(retainer.location, options)})`
      : ``
  }`

export const formatRetainerEdgeLabel = (
  edge: RetainerPathEdge,
  options: FormattingProfileToMdOptions,
): string =>
  formatRetainerEdge(edge, ({ name, nameLocation }) =>
    nameLocation ? formatSourceLocation(nameLocation, options) : name,
  )

/**
 * A retainer path step's edge. A path that groups the elements of an array
 * records an element edge as any element. A step whose retainer holds no edge
 * to the node, which it retains through the node's several retainers, records
 * several retainers.
 */
export type RetainerPathEdge =
  RetainerEdge | { type: `any-element` } | { type: `several-retainers` }

/**
 * One step of a retainer path: the edge a retainer holds to the node the path
 * reached so far, and the retainer.
 */
export type RetainerPathStep = {
  edge: RetainerPathEdge
  retainer: RetainerNode
}

export const formatRetainerEdge = (
  edge: RetainerPathEdge,
  propertyName: (edge: Extract<RetainerEdge, { type: `property` }>) => string,
): string => {
  switch (edge.type) {
    case `property`:
      return `.${propertyName(edge)}`
    case `element`:
      return `[${edge.index ?? `<unknown>`}]`
    case `any-element`:
      return `[]`
    case `several-retainers`:
      return `(several paths)`
    case `labeled`:
      return edge.label
    case `unlabeled`:
      return ``
  }
}

/** A shown retained node, and the instance retaining it. */
export type ShownRetainedNode = {
  node: AggregatedHeapSnapshotNode
  instanceId: number
}

/**
 * Yields each shown node the outermost of the distinct {@link instanceIds}
 * retain, and the instance retaining it.
 */
export function* shownRetainedNodes(
  instanceIds: readonly number[],
  {
    outermostInstanceIdsOf,
    retainedNodesOf,
    context,
  }: Pick<
    AggregatedHeapSnapshot,
    `outermostInstanceIdsOf` | `retainedNodesOf` | `context`
  >,
  options: FormattingProfileToMdOptions,
): Iterable<ShownRetainedNode> {
  for (const instanceId of outermostInstanceIdsOf(instanceIds)) {
    for (const node of retainedNodesOf(instanceId, options)) {
      if (options.showEntry(node, context)) {
        yield { node, instanceId }
      }
    }
  }
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
  locationOf: (nodeOrdinal: number) => SourceLocation | undefined,
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
        location: locationOf(current),
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

  /**
   * The reachable instances among distinct instance IDs that no other of them
   * dominates. Their retained nodes are disjoint, and contain every other
   * reachable instance's.
   */
  outermostInstanceIdsOf: (instanceIds: readonly number[]) => readonly number[]

  /**
   * The first hop of a node's retainer path along its dominators, or
   * `undefined` for the GC root, a node without predecessors, and an
   * unreachable node. Following each hop's
   * {@link RetainerHop.dominatorOrdinal} ends at one of them.
   */
  retainerHopOf: (nodeOrdinal: number) => RetainerHop | undefined

  /** The node as a retainer path step shows it. */
  retainerOf: (nodeOrdinal: number) => RetainerNode

  retainerPathOf: (
    nodeOrdinal: number,
    options: FormattingProfileToMdOptions,
  ) => string
  retainedNodesOf: (
    nodeOrdinal: number,
    options: FormattingProfileToMdOptions,
  ) => AggregatedHeapSnapshotNode[]
}

/** A node's immediate dominator, and the dominator's edge to the node. */
export type RetainerHop = {
  dominatorOrdinal: number
  edge: RetainerPathEdge

  /** Whether the dominator is an internal node. */
  internal: boolean
}
