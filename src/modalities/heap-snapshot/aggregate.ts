import { once } from '../../helpers/once.ts'
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
import type { OriginDetector } from '../../origins/index.ts'
import type { InputAggregator } from '../aggregator.ts'
import {
  CategoryKeys,
  EntityCategorizer,
  NodeCategoryStatsAggregator,
} from './categorize.ts'
import type { CategoryResolver } from './categorize.ts'
import { computeImmediateDominatorGraph } from './graph.ts'
import type { ImmediateDominatorGraph, NodeAdjacencyGraph } from './graph.ts'
import {
  computeDominatorTreePreorder,
  computeEntityRetentions,
  computeNodeOrdinalToRetainedSize,
  newEntityRetentionsBudget,
} from './retained.ts'
import type { DominatorTreePreorder, EntityRetention } from './retained.ts'
import type {
  HeapSnapshot,
  HeapSnapshotNode,
  HeapSnapshotNodeCategory,
  RetainerEdge,
  RetainerNode,
  UnresolvedHeapSnapshotNodeCategory,
} from './type.ts'

export type AggregatedHeapSnapshot = {
  type: `heap-snapshot`

  /**
   * The context this snapshot was aggregated under. Diffed sides that resolved
   * different origins can normalize match keys differently and miss matches.
   */
  context: ProfileToMdContext

  /** The summed self sizes of every node in the snapshot. */
  heldSize: number
  nodeCount: number
  edgeCount: number
  nodeCategoryToStats: Map<HeapSnapshotNodeCategory, NodeCategoryStats>

  constructors: AggregatedHeapSnapshotConstructor[]
  functions: AggregatedHeapSnapshotFunction[]
  strings: AggregatedHeapSnapshotString[]

  /**
   * What each given set of distinct instance ordinals retains, alone or
   * together. No node may be in two sets.
   */
  retentionsOf: (
    instanceOrdinalSets: readonly (readonly number[])[],
  ) => EntityRetention[]

  /**
   * The first hop of a node's retainer path along its dominators, or
   * `undefined` for the GC root, a node without predecessors, and an
   * unreachable node. Following each hop's
   * {@link RetainerHop.dominatorOrdinal} ends at one of them.
   */
  retainerHopOf: (nodeOrdinal: number) => RetainerHop | undefined

  /** The node as a retainer path step shows it. */
  retainerOf: (nodeOrdinal: number) => RetainerNode

  nodeOf: (
    nodeOrdinal: number,
    options: FormattingProfileToMdOptions,
  ) => AggregatedHeapSnapshotNode

  /** The nodes the node dominates. */
  retainedNodesOf: (
    nodeOrdinal: number,
    options: FormattingProfileToMdOptions,
  ) => AggregatedHeapSnapshotNode[]

  /** Whether the node is a bookkeeping node that never points to user code. */
  isInternalNode: (nodeOrdinal: number) => boolean
}

export type NodeCategoryStats = {
  /** Bytes allocated directly for nodes in this category. */
  size: number
  nodeCount: number
}

export type AggregatedHeapSnapshotConstructor = AggregatedHeapSnapshotEntity & {
  name: string

  /**
   * What this constructor's instances hold: the category the origin assigns to
   * its class, falling back to the category holding the most of their self
   * size.
   */
  category: HeapSnapshotNodeCategory
  instances: AggregatedHeapSnapshotNode[]
} & EntityRetention

export type AggregatedHeapSnapshotFunction = AggregatedHeapSnapshotEntity & {
  /**
   * The ordinal of the instance with the largest individual retained size,
   * which is the instance the function's rows show.
   */
  id: number
  name: string

  /** What this function holds, taken from the instance {@link id} identifies. */
  category: HeapSnapshotNodeCategory
  instanceOrdinals: number[]
} & EntityRetention

export type AggregatedHeapSnapshotString = AggregatedHeapSnapshotEntity & {
  /** What this string holds: its representation in the heap. */
  category: HeapSnapshotNodeCategory
}

/** A constructor, function, or string, aggregating the nodes it identifies. */
export type AggregatedHeapSnapshotEntity = {
  type: `node`

  /** The ordinal of one of the entity's nodes. */
  id: number
  name?: string

  /**
   * The file reference the {@link name} parses as, when it is URL-shaped
   * (e.g. a V8 module namespace object named by its file URL). Formatting
   * shows it relative to the base URL in place of the raw name.
   */
  nameLocation?: FileReference

  /** Bytes allocated directly for the entity's nodes. */
  selfSize: number

  category: HeapSnapshotNodeCategory

  /**
   * Bytes allocated for the entity's nodes, as well as all nodes that would be
   * freed if they were garbage collected. A lower bound on a graph that exhausts
   * the budget of {@link computeEntityRetentions}.
   */
  retainedSize: number

  location?: SourceLocation
}

/** A constructor's instance, or a node an instance retains. */
export type AggregatedHeapSnapshotNode = {
  type: `node`

  /** The node's ordinal. */
  id: number

  /** The node's label, which for an instance is its constructor's name. */
  name: string

  /** Bytes allocated directly for this node. */
  selfSize: number

  category: HeapSnapshotNodeCategory

  /**
   * Bytes allocated for this node, as well as all nodes that would be freed if
   * the node were garbage collected.
   */
  retainedSize: number

  /** The location of the constructor or function the node is an instance of. */
  location?: SourceLocation
}

/**
 * One step of a retainer path: the edge a retainer holds to the node the path
 * reached so far, and the retainer.
 */
export type RetainerPathStep = {
  edge: RetainerPathEdge
  retainer: RetainerNode
}

/**
 * A retainer path step's edge. A path that groups the elements of an array
 * records an element edge as any element. A step whose retainer holds no edge
 * to the node, which it retains through the node's several retainers, records
 * several retainers. On a step to a node that an entity's instances retain only
 * together, it records that every path passes through an instance of the entity.
 */
export type RetainerPathEdge =
  | RetainerEdge
  | { type: `any-element` }
  | { type: `several-retainers` }
  | { type: `several-instance-paths`; entityName: string }

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

  readonly #isInternalNode: (nodeOrdinal: number) => boolean

  readonly #unresolvedCategoryOf: (
    nodeOrdinal: number,
  ) => UnresolvedHeapSnapshotNodeCategory

  #heldSize = 0
  readonly #categoryKeys = new CategoryKeys()
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
      isInternalNode,
      unresolvedCategoryOf,
    } = snapshot
    this.#nodeCount = nodeCount
    this.#edgeCount = edgeCount
    this.#nodeAdjacencyGraph = nodeAdjacencyGraph
    this.#selfSizeOf = selfSizeOf
    this.#retainerEdgeOf = retainerEdgeOf
    this.#retainerOf = retainerOf
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
      const categoryKey = this.#categoryKeys.keyOf(node)
      this.#addCategoryNode(nodeOrdinal, node, categoryKey)
      switch (node.type) {
        case `constructor`:
          this.#addConstructorNode(nodeOrdinal, node, categoryKey)
          break
        case `function`:
          this.#addFunctionNode(nodeOrdinal, node.name, node.location)
          break
        case `string`:
          this.#addStringNode(nodeOrdinal, node, categoryKey)
          break
        case undefined:
          break
      }
      nodeOrdinal++
    }

    this.#entries = [...this.#constructors, ...this.#functions].map(entity => ({
      name: entity.name,
      location: entityLocation(entity),
    }))
  }

  public detectOrigin(detector: OriginDetector): void {
    detector.addAll(this.#entries)
  }

  #addCategoryNode(
    nodeOrdinal: number,
    node: HeapSnapshotNode,
    categoryKey: number,
  ): void {
    const selfSize = this.#selfSizeOf(nodeOrdinal)
    this.#heldSize += selfSize
    this.#nodeCategoryStats.add(node, categoryKey, selfSize)
  }

  #addConstructorNode(
    nodeOrdinal: number,
    node: Extract<HeapSnapshotNode, { type: `constructor` }>,
    categoryKey: number,
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
        outermostInstanceOrdinals: [],
        jointlyRetainedOrdinals: [],
      }
      this.#constructors.push(constructor)
      this.#keyToConstructorIndex.set(key, constructorIndex)
    } else {
      constructor = this.#constructors[constructorIndex]!
    }

    constructor.selfSize += selfSize
    this.#entityCategorizer.addConstructorNode(
      constructorIndex,
      categoryKey,
      selfSize,
    )
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
        instanceOrdinals: [],
        outermostInstanceOrdinals: [],
        jointlyRetainedOrdinals: [],
      })
      this.#keyToFunctionIndex.set(key, functionIndex)
    }

    const fn = this.#functions[functionIndex]!
    fn.selfSize += this.#selfSizeOf(nodeOrdinal)
    fn.instanceOrdinals.push(nodeOrdinal)
    if (retainedSize > this.#nodeOrdinalToRetainedSize[fn.id]!) {
      fn.id = nodeOrdinal
    }
    this.#nodeOrdinalToFunctionIndex[nodeOrdinal] = functionIndex
  }

  #addStringNode(
    nodeOrdinal: number,
    node: Extract<HeapSnapshotNode, { type: `string` }>,
    categoryKey: number,
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
    this.#entityCategorizer.addStringNode(categoryKey)
  }

  public aggregate(
    options: AggregationProfileToMdOptions,
    context: ProfileToMdContext,
  ): AggregatedHeapSnapshot {
    const preorder = computeDominatorTreePreorder(this.#immediateDominatorGraph)
    const logLowerBound = once(() =>
      options.logger.info?.(
        `retained sizes are lower bounds because the heap exceeded the work limit for nodes that instances retain only together`,
      ),
    )
    this.#assignRetentions(preorder, logLowerBound)

    const categories = this.#categoryKeys.newResolver(context.origin)
    this.#entityCategorizer.categorize(
      this.#constructors,
      this.#strings,
      categories,
    )

    const categoryOf = this.#newNodeCategorizer(categories)
    this.#categorizeNodes(categoryOf)

    const nodeOf = this.#newNodeBuilder(categoryOf)

    return {
      type: `heap-snapshot`,
      context,
      heldSize: this.#heldSize,
      nodeCount: this.#nodeCount,
      edgeCount: this.#edgeCount,
      nodeCategoryToStats: this.#nodeCategoryStats.aggregate(categories),
      constructors: this.#constructors,
      functions: this.#functions,
      strings: this.#strings,
      retentionsOf: instanceOrdinalSets =>
        this.#computeRetentions(
          preorder,
          this.#newNodeOrdinalToSetIndex(instanceOrdinalSets),
          instanceOrdinalSets.length,
          logLowerBound,
        ),
      retainerHopOf: this.#retainerHopOf,
      retainerOf: this.#retainerOf,
      nodeOf,
      retainedNodesOf: (nodeOrdinal, options) =>
        computeRetainedNodes(
          nodeOrdinal,
          this.#immediateDominatorGraph,
          ordinal => nodeOf(ordinal, options),
        ),
      isInternalNode: this.#isInternalNode,
    }
  }

  /**
   * Assigns the constructors' and functions' retentions from one pass, because
   * a node is an instance of at most one of them.
   */
  #assignRetentions(
    preorder: DominatorTreePreorder,
    logLowerBound: () => void,
  ): void {
    const entities = [...this.#constructors, ...this.#functions]
    const retentions = this.#computeRetentions(
      preorder,
      this.#newNodeOrdinalToEntityIndex(),
      entities.length,
      logLowerBound,
    )
    for (const [index, entity] of entities.entries()) {
      Object.assign(entity, retentions[index])
    }
  }

  /** Indexes the constructors, then the functions, as one list of entities. */
  #newNodeOrdinalToEntityIndex(): Int32Array {
    const constructorCount = this.#constructors.length
    const nodeOrdinalToEntityIndex = new Int32Array(
      this.#nodeOrdinalToConstructorIndex,
    )
    for (let ordinal = 0; ordinal < this.#nodeCount; ordinal++) {
      const functionIndex = this.#nodeOrdinalToFunctionIndex[ordinal]!
      if (functionIndex !== -1) {
        nodeOrdinalToEntityIndex[ordinal] = constructorCount + functionIndex
      }
    }
    return nodeOrdinalToEntityIndex
  }

  #newNodeOrdinalToSetIndex(
    instanceOrdinalSets: readonly (readonly number[])[],
  ): Int32Array {
    const nodeOrdinalToSetIndex = new Int32Array(this.#nodeCount).fill(-1)
    for (const [setIndex, ordinals] of instanceOrdinalSets.entries()) {
      for (const ordinal of ordinals) {
        nodeOrdinalToSetIndex[ordinal] = setIndex
      }
    }
    return nodeOrdinalToSetIndex
  }

  #computeRetentions(
    preorder: DominatorTreePreorder,
    nodeOrdinalToEntityIndex: Int32Array,
    entityCount: number,
    logLowerBound: () => void,
  ): EntityRetention[] {
    const nodeAdjacencyGraph = this.#nodeAdjacencyGraph
    const budget = newEntityRetentionsBudget({ nodeAdjacencyGraph, preorder })
    const retentions = computeEntityRetentions({
      nodeOrdinalToRetainedSize: this.#nodeOrdinalToRetainedSize,
      nodeAdjacencyGraph,
      preorder,
      nodeOrdinalToEntityIndex,
      entityCount,
      budget,
    })
    if (budget.isExhausted) {
      logLowerBound()
    }
    return retentions
  }

  /**
   * Categorizes a node: the category the origin assigns to the class its
   * constructor defines, falling back to the node's own category.
   */
  #newNodeCategorizer({
    ofUnresolved,
    ofConstructor,
  }: CategoryResolver): (nodeOrdinal: number) => HeapSnapshotNodeCategory {
    // Resolved per constructor, so a node reads its class's category by index.
    const constructorIndexToNamedCategory = this.#constructors.map(({ name }) =>
      ofConstructor(name),
    )
    return nodeOrdinal => {
      const constructorIndex = this.#nodeOrdinalToConstructorIndex[nodeOrdinal]!
      const namedCategory =
        constructorIndex === -1
          ? undefined
          : constructorIndexToNamedCategory[constructorIndex]
      return (
        namedCategory ?? ofUnresolved(this.#unresolvedCategoryOf(nodeOrdinal))
      )
    }
  }

  #categorizeNodes(
    categoryOf: (nodeOrdinal: number) => HeapSnapshotNodeCategory,
  ): void {
    for (const fn of this.#functions) {
      fn.category = categoryOf(fn.id)
    }
    for (const constructor of this.#constructors) {
      for (const instance of constructor.instances) {
        instance.category = categoryOf(instance.id)
      }
    }
  }

  #newNodeBuilder(
    categoryOf: (nodeOrdinal: number) => HeapSnapshotNodeCategory,
  ): AggregatedHeapSnapshot[`nodeOf`] {
    return (ordinal, options) => ({
      type: `node`,
      id: ordinal,
      name: formatRetainerName(this.#retainerOf(ordinal), options),
      category: categoryOf(ordinal),
      selfSize: this.#selfSizeOf(ordinal),
      retainedSize: this.#nodeOrdinalToRetainedSize[ordinal]!,
      location: this.#entityLocationOf(ordinal),
    })
  }
}

/** A node's immediate dominator, and the dominator's edge to the node. */
export type RetainerHop = {
  dominatorOrdinal: number
  edge: RetainerPathEdge

  /** Whether the dominator is an internal node. */
  internal: boolean
}

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
  // An unreachable node has no dominator, and the GC root dominates itself.
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

export const GC_ROOT_NAME = `(GC root)`

const SEVERAL_RETAINERS_EDGE: RetainerPathEdge = {
  type: `several-retainers`,
}

/**
 * An entity's effective location: its explicit location, falling back to its
 * URL-shaped name (e.g. a V8 module namespace object named by its file URL).
 */
export const entityLocation = ({
  location,
  nameLocation,
}: Pick<AggregatedHeapSnapshotEntity, `location` | `nameLocation`>):
  SourceLocation | undefined => location ?? nameLocation

/** Identifies a node by its name and location. */
export const nodeKey = (
  name: string,
  location: SourceLocation | undefined,
): string =>
  location
    ? `${name}|${sourceReferenceKind(location)}|${sourceReferenceId(location)}:${location.line}:${location.column}`
    : name

export const formatRetainerLabel = (
  retainer: RetainerNode,
  options: FormattingProfileToMdOptions,
): string =>
  `${formatRetainerName(retainer, options)}${
    retainer.location
      ? ` (${formatSourceLocation(retainer.location, options)})`
      : ``
  }`

export const formatRetainerName = (
  { name, nameLocation }: Pick<RetainerNode, `name` | `nameLocation`>,
  options: FormattingProfileToMdOptions,
): string => (nameLocation ? formatSourceLocation(nameLocation, options) : name)

export const formatRetainerEdgeLabel = (
  edge: RetainerPathEdge,
  options: FormattingProfileToMdOptions,
): string =>
  formatRetainerEdge(edge, ({ name, nameLocation }) =>
    nameLocation ? formatSourceLocation(nameLocation, options) : name,
  )

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
    case `several-instance-paths`:
      return `(several ${edge.entityName} paths)`
    case `labeled`:
      return edge.label
    case `unlabeled`:
      return ``
  }
}

const computeRetainedNodes = (
  nodeOrdinal: number,
  {
    immediateDominateeOrdinalToStartOffset,
    offsetToImmediateDominateeOrdinal,
  }: ImmediateDominatorGraph,
  nodeOf: (nodeOrdinal: number) => AggregatedHeapSnapshotNode,
): AggregatedHeapSnapshotNode[] => {
  const retainedNodes: AggregatedHeapSnapshotNode[] = []

  const dominateeOrdinals: number[] = []
  const pushDominatees = (ordinal: number) => {
    const endOffset = immediateDominateeOrdinalToStartOffset[ordinal + 1]!
    for (
      let offset = immediateDominateeOrdinalToStartOffset[ordinal]!;
      offset < endOffset;
      offset++
    ) {
      dominateeOrdinals.push(offsetToImmediateDominateeOrdinal[offset]!)
    }
  }

  pushDominatees(nodeOrdinal)
  while (dominateeOrdinals.length > 0) {
    const current = dominateeOrdinals.pop()!
    retainedNodes.push(nodeOf(current))
    pushDominatees(current)
  }

  return retainedNodes
}

/** A shown retained node, and the outermost node of the entity retaining it. */
export type ShownRetainedNode = {
  node: AggregatedHeapSnapshotNode

  retainingOrdinal: number

  /** Whether {@link retainingOrdinal} is a jointly retained node. */
  isJointlyRetained: boolean
}

/**
 * Yields each shown node the entity retains, other than its outermost instances:
 * those instances' retained nodes, and the entity's jointly retained nodes with
 * their retained nodes.
 */
export function* shownRetainedNodes(
  {
    outermostInstanceOrdinals,
    jointlyRetainedOrdinals,
  }: Pick<
    EntityRetention,
    `outermostInstanceOrdinals` | `jointlyRetainedOrdinals`
  >,
  snapshot: ShownNodeSnapshot &
    Pick<AggregatedHeapSnapshot, `nodeOf` | `retainedNodesOf`>,
  options: FormattingProfileToMdOptions,
): Iterable<ShownRetainedNode> {
  for (const retainingOrdinal of outermostInstanceOrdinals) {
    for (const node of snapshot.retainedNodesOf(retainingOrdinal, options)) {
      if (isShownRetainedNode(node, snapshot, options)) {
        yield { node, retainingOrdinal, isJointlyRetained: false }
      }
    }
  }
  for (const retainingOrdinal of jointlyRetainedOrdinals) {
    for (const node of [
      snapshot.nodeOf(retainingOrdinal, options),
      ...snapshot.retainedNodesOf(retainingOrdinal, options),
    ]) {
      if (isShownRetainedNode(node, snapshot, options)) {
        yield { node, retainingOrdinal, isJointlyRetained: true }
      }
    }
  }
}

type ShownNodeSnapshot = Pick<
  AggregatedHeapSnapshot,
  `isInternalNode` | `context`
>

/**
 * Whether a listing of the nodes an entity retains shows {@link node}: one the
 * entry filter keeps, other than an internal node.
 */
export const isShownRetainedNode = (
  node: AggregatedHeapSnapshotNode,
  { isInternalNode, context }: ShownNodeSnapshot,
  options: FormattingProfileToMdOptions,
): boolean => !isInternalNode(node.id) && options.showEntry(node, context)
