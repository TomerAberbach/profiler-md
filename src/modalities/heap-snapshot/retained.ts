import { DynamicTypedArray } from '../../helpers/array.ts'
import { WorkBudget } from '../../helpers/work-budget.ts'
import type { ImmediateDominatorGraph, NodeAdjacencyGraph } from './graph.ts'

export const computeNodeOrdinalToRetainedSize = (
  selfSizeOf: (nodeOrdinal: number) => number,
  {
    dfsIndexToOrdinal,
    ordinalToImmediateDominatorOrdinal,
  }: ImmediateDominatorGraph,
): Float64Array => {
  // Sum retained sizes bottom-up through the dominator tree.
  const nodeOrdinalToRetainedSize = new Float64Array(
    ordinalToImmediateDominatorOrdinal.length,
  )
  for (
    let nodeOrdinal = 0;
    nodeOrdinal < nodeOrdinalToRetainedSize.length;
    nodeOrdinal++
  ) {
    nodeOrdinalToRetainedSize[nodeOrdinal] = selfSizeOf(nodeOrdinal)
  }
  for (let dfsIndex = dfsIndexToOrdinal.length - 1; dfsIndex >= 1; dfsIndex--) {
    const dominateeOrdinal = dfsIndexToOrdinal[dfsIndex]!
    nodeOrdinalToRetainedSize[
      ordinalToImmediateDominatorOrdinal[dominateeOrdinal]!
    ]! += nodeOrdinalToRetainedSize[dominateeOrdinal]!
  }

  return nodeOrdinalToRetainedSize
}

/** What an entity's instances retain, alone or together. */
export type EntityRetention = {
  /**
   * The summed self size of every node that becomes unreachable from the GC
   * root once every instance of the entity is garbage collected.
   */
  retainedSize: number

  /**
   * The instances no other node the entity retains dominates. Their retained
   * nodes are disjoint, and contain those of the entity's instances not listed.
   */
  outermostInstanceOrdinals: number[]
}

type EntityRetentionsArgs = {
  nodeOrdinalToRetainedSize: Float64Array
  nodeAdjacencyGraph: Pick<
    NodeAdjacencyGraph,
    `ordinalToPredecessorStartOffset` | `offsetToPredecessorOrdinal`
  >
  preorder: DominatorTreePreorder

  /** -1 for a node that is no entity's instance. */
  nodeOrdinalToEntityIndex: Int32Array
  entityCount: number

  /**
   * Exhausted once the pass stops finding the nodes instances retain only
   * together, from {@link newEntityRetentionsBudget}.
   */
  budget: WorkBudget
}

/**
 * Computes each entity's {@link EntityRetention}.
 *
 * An entity retains its instances, and each node whose every predecessor it
 * retains, leaving out the predecessors the node dominates, which a path
 * reaches only through the node. The nodes an entity retains are the dominator
 * subtrees of its outermost nodes, the nodes it retains that no other node it
 * retains dominates, so its retained size sums their retained sizes.
 *
 * Computing this exactly can take time quadratic in the graph's size, so the
 * pass stops finding nodes the instances retain only together once it exhausts
 * the budget. Past that, the sizes omit those found later, and count the
 * instances' own retained sizes.
 */
export const computeEntityRetentions = (
  args: EntityRetentionsArgs,
): EntityRetention[] => new OutermostNodeFinder(args).find()

/**
 * A budget far above what the committed inputs need, at most about 0.84 units
 * of work per node and edge, and enough to keep a small graph's sizes exact.
 */
export const newEntityRetentionsBudget = ({
  nodeAdjacencyGraph: { offsetToPredecessorOrdinal },
  preorder: { preorderIndexToOrdinal },
}: Pick<EntityRetentionsArgs, `nodeAdjacencyGraph` | `preorder`>): WorkBudget =>
  new WorkBudget(
    Math.max(
      MIN_WORK_LIMIT,
      WORK_LIMIT_PER_NODE_AND_EDGE *
        (preorderIndexToOrdinal.length + offsetToPredecessorOrdinal.length),
    ),
  )

const MIN_WORK_LIMIT = 2 ** 20
const WORK_LIMIT_PER_NODE_AND_EDGE = 16

/**
 * Finds each entity's outermost nodes in one pass over the dominator tree
 * preorder.
 *
 * A node is an outermost node of its instances' entities, and of the entities
 * that retain every predecessor it does not dominate but not its immediate
 * dominator. Those come from the outermost nodes on the dominator tree path
 * from a visited predecessor up to, but excluding, the immediate dominator, and
 * the other predecessors filter them. The preorder visits a predecessor after
 * the node only across an edge that closes a cycle, so a search checks those.
 *
 * A node the budget stops keeps the entities already found to retain it, so
 * every outermost node found is a node the entity retains.
 */
class OutermostNodeFinder {
  readonly #retentions: EntityRetention[]

  readonly #nodeOrdinalToRetainedSize: Float64Array
  readonly #ordinalToPredecessorStartOffset: Int32Array
  readonly #offsetToPredecessorOrdinal: Int32Array
  readonly #ordinalToPreorderIndex: Int32Array
  readonly #preorderIndexToOrdinal: Int32Array
  readonly #preorderIndexToDominatorIndex: Int32Array
  readonly #preorderIndexToEndIndex: Int32Array
  readonly #preorderIndexToDepth: Int32Array
  readonly #nodeOrdinalToEntityIndex: Int32Array
  readonly #budget: WorkBudget

  /** Each entity's indices are ascending. */
  readonly #entityIndexToOutermostPreorderIndices: (number[] | undefined)[]

  /**
   * The entities node `i` is an outermost node of occupy
   * `[#preorderIndexToRetainingEntityStartOffset[i], #preorderIndexToRetainingEntityStartOffset[i + 1])`
   * in `#offsetToRetainingEntityIndex`, whose used length is
   * `#retainingEntityCount`.
   */
  readonly #preorderIndexToRetainingEntityStartOffset: Int32Array
  readonly #offsetToRetainingEntityIndex: DynamicTypedArray<Int32Array>
  #retainingEntityCount = 0

  /**
   * The preorder index of the closest node at or above each node in the
   * dominator tree that is an outermost node of any entity, or -1.
   */
  readonly #preorderIndexToOutermostAncestorIndex: Int32Array

  /** The preorder index + 1 of the last node each entity was considered for. */
  readonly #entityIndexToLastNodeNumber: Int32Array

  /** Distinct, because an entity is considered once per node. */
  readonly #candidateEntityIndices: Int32Array

  #searchState: SearchState | undefined

  public constructor({
    nodeOrdinalToRetainedSize,
    nodeAdjacencyGraph: {
      ordinalToPredecessorStartOffset,
      offsetToPredecessorOrdinal,
    },
    preorder: {
      ordinalToPreorderIndex,
      preorderIndexToOrdinal,
      preorderIndexToDominatorIndex,
      preorderIndexToEndIndex,
      preorderIndexToDepth,
    },
    nodeOrdinalToEntityIndex,
    entityCount,
    budget,
  }: EntityRetentionsArgs) {
    this.#nodeOrdinalToRetainedSize = nodeOrdinalToRetainedSize
    this.#ordinalToPredecessorStartOffset = ordinalToPredecessorStartOffset
    this.#offsetToPredecessorOrdinal = offsetToPredecessorOrdinal
    this.#ordinalToPreorderIndex = ordinalToPreorderIndex
    this.#preorderIndexToOrdinal = preorderIndexToOrdinal
    this.#preorderIndexToDominatorIndex = preorderIndexToDominatorIndex
    this.#preorderIndexToEndIndex = preorderIndexToEndIndex
    this.#preorderIndexToDepth = preorderIndexToDepth
    this.#nodeOrdinalToEntityIndex = nodeOrdinalToEntityIndex
    this.#budget = budget

    const reachableCount = preorderIndexToOrdinal.length
    this.#retentions = new Array<EntityRetention>(entityCount)
    for (let entityIndex = 0; entityIndex < entityCount; entityIndex++) {
      this.#retentions[entityIndex] = {
        retainedSize: 0,
        outermostInstanceOrdinals: [],
      }
    }
    this.#entityIndexToOutermostPreorderIndices = new Array<
      number[] | undefined
    >(entityCount)
    this.#preorderIndexToRetainingEntityStartOffset = new Int32Array(
      reachableCount + 1,
    )
    this.#offsetToRetainingEntityIndex = new DynamicTypedArray(
      new Int32Array(reachableCount),
    )
    this.#preorderIndexToOutermostAncestorIndex = new Int32Array(reachableCount)
    this.#entityIndexToLastNodeNumber = new Int32Array(entityCount)
    this.#candidateEntityIndices = new Int32Array(entityCount)
  }

  public find(): EntityRetention[] {
    const reachableCount = this.#preorderIndexToOrdinal.length
    for (
      let preorderIndex = 0;
      preorderIndex < reachableCount;
      preorderIndex++
    ) {
      this.#visitNode(preorderIndex)
    }
    return this.#retentions
  }

  #visitNode(preorderIndex: number): void {
    const startOffset = this.#retainingEntityCount
    this.#preorderIndexToRetainingEntityStartOffset[preorderIndex] = startOffset
    const nodeOrdinal = this.#preorderIndexToOrdinal[preorderIndex]!

    this.#addInstanceEntity(nodeOrdinal, preorderIndex)
    this.#budget.run(() =>
      this.#addJointlyRetainingEntities(nodeOrdinal, preorderIndex),
    )

    const endOffset = this.#retainingEntityCount
    this.#assignOutermostAncestor(preorderIndex, startOffset < endOffset)
    this.#recordOutermostNode(
      nodeOrdinal,
      preorderIndex,
      startOffset,
      endOffset,
    )
  }

  #addInstanceEntity(nodeOrdinal: number, preorderIndex: number): void {
    const entityIndex = this.#nodeOrdinalToEntityIndex[nodeOrdinal]!
    if (entityIndex === -1) {
      return
    }
    this.#entityIndexToLastNodeNumber[entityIndex] = preorderIndex + 1
    if (!this.#isRetained(entityIndex, preorderIndex)) {
      this.#pushRetainingEntity(entityIndex)
      this.#retentions[entityIndex]!.outermostInstanceOrdinals.push(nodeOrdinal)
    }
  }

  #addJointlyRetainingEntities(
    nodeOrdinal: number,
    preorderIndex: number,
  ): void {
    const shallowestPreorderIndex = this.#shallowestVisitedPredecessor(
      nodeOrdinal,
      preorderIndex,
    )
    if (shallowestPreorderIndex === -1) {
      return
    }

    const candidateCount = this.#keepCandidatesRetainingOtherPredecessors(
      nodeOrdinal,
      preorderIndex,
      shallowestPreorderIndex,
      this.#collectCandidateEntities(preorderIndex, shallowestPreorderIndex),
    )
    if (candidateCount === 0) {
      return
    }

    const hasUnvisitedPredecessor = this.#hasUnvisitedPredecessor(
      nodeOrdinal,
      preorderIndex,
    )
    for (let index = 0; index < candidateCount; index++) {
      const entityIndex = this.#candidateEntityIndices[index]!
      if (
        !hasUnvisitedPredecessor ||
        !this.#isReachedAvoiding(entityIndex, nodeOrdinal, preorderIndex)
      ) {
        this.#pushRetainingEntity(entityIndex)
      }
    }
  }

  /**
   * The preorder index of the visited predecessor closest to the GC root in the
   * dominator tree, which has the shortest path to the immediate dominator for
   * `#collectCandidateEntities` to walk. It returns -1 when the node has none or
   * its immediate dominator holds an edge to it, since then an entity retaining
   * the node would retain the immediate dominator too.
   */
  #shallowestVisitedPredecessor(
    nodeOrdinal: number,
    preorderIndex: number,
  ): number {
    const dominatorIndex = this.#preorderIndexToDominatorIndex[preorderIndex]!
    const endOffset = this.#ordinalToPredecessorStartOffset[nodeOrdinal + 1]!
    let shallowestPreorderIndex = -1
    for (
      let offset = this.#ordinalToPredecessorStartOffset[nodeOrdinal]!;
      offset < endOffset;
      offset++
    ) {
      const predecessorPreorderIndex =
        this.#ordinalToPreorderIndex[this.#offsetToPredecessorOrdinal[offset]!]!
      if (predecessorPreorderIndex === dominatorIndex) {
        return -1
      }
      // A predecessor the node dominates is in its subtree, and one the pass has
      // not visited is after the subtree.
      if (
        predecessorPreorderIndex !== -1 &&
        predecessorPreorderIndex < preorderIndex &&
        (shallowestPreorderIndex === -1 ||
          this.#preorderIndexToDepth[predecessorPreorderIndex]! <
            this.#preorderIndexToDepth[shallowestPreorderIndex]!)
      ) {
        shallowestPreorderIndex = predecessorPreorderIndex
      }
    }
    return shallowestPreorderIndex
  }

  /**
   * Collects the entities of the outermost nodes on the dominator tree path
   * from {@link fromPreorderIndex} up to, but excluding, the node's immediate
   * dominator, and returns how many there are.
   */
  #collectCandidateEntities(
    preorderIndex: number,
    fromPreorderIndex: number,
  ): number {
    const offsetToRetainingEntityIndex =
      this.#offsetToRetainingEntityIndex.array
    const nodeNumber = preorderIndex + 1
    // The nodes below the immediate dominator follow it in preorder.
    const dominatorIndex = this.#preorderIndexToDominatorIndex[preorderIndex]!
    let candidateCount = 0
    for (
      let pathPreorderIndex =
        this.#preorderIndexToOutermostAncestorIndex[fromPreorderIndex]!;
      pathPreorderIndex > dominatorIndex;
      pathPreorderIndex =
        this.#preorderIndexToOutermostAncestorIndex[
          this.#preorderIndexToDominatorIndex[pathPreorderIndex]!
        ]!
    ) {
      const startOffset =
        this.#preorderIndexToRetainingEntityStartOffset[pathPreorderIndex]!
      const endOffset =
        this.#preorderIndexToRetainingEntityStartOffset[pathPreorderIndex + 1]!
      this.#budget.spend(1 + endOffset - startOffset)
      for (let offset = startOffset; offset < endOffset; offset++) {
        const entityIndex = offsetToRetainingEntityIndex[offset]!
        if (this.#entityIndexToLastNodeNumber[entityIndex] !== nodeNumber) {
          this.#entityIndexToLastNodeNumber[entityIndex] = nodeNumber
          this.#candidateEntityIndices[candidateCount++] = entityIndex
        }
      }
    }
    return candidateCount
  }

  /**
   * Keeps the candidates that retain every visited predecessor other than the
   * shallowest, which they came from, and returns how many remain.
   */
  #keepCandidatesRetainingOtherPredecessors(
    nodeOrdinal: number,
    preorderIndex: number,
    shallowestPreorderIndex: number,
    candidateCount: number,
  ): number {
    const endOffset = this.#ordinalToPredecessorStartOffset[nodeOrdinal + 1]!
    let keptCount = candidateCount
    for (
      let offset = this.#ordinalToPredecessorStartOffset[nodeOrdinal]!;
      offset < endOffset && keptCount > 0;
      offset++
    ) {
      const predecessorPreorderIndex =
        this.#ordinalToPreorderIndex[this.#offsetToPredecessorOrdinal[offset]!]!
      if (
        predecessorPreorderIndex !== -1 &&
        predecessorPreorderIndex < preorderIndex &&
        predecessorPreorderIndex !== shallowestPreorderIndex
      ) {
        keptCount = this.#keepCandidatesRetaining(
          predecessorPreorderIndex,
          keptCount,
        )
      }
    }
    return keptCount
  }

  /**
   * Keeps the candidates that retain the visited predecessor, and returns how
   * many remain.
   */
  #keepCandidatesRetaining(
    predecessorPreorderIndex: number,
    candidateCount: number,
  ): number {
    this.#budget.spend(candidateCount)
    let keptCount = 0
    for (let index = 0; index < candidateCount; index++) {
      const entityIndex = this.#candidateEntityIndices[index]!
      if (this.#isRetained(entityIndex, predecessorPreorderIndex)) {
        this.#candidateEntityIndices[keptCount++] = entityIndex
      }
    }
    return keptCount
  }

  /**
   * Whether the pass has yet to visit a predecessor the node does not dominate,
   * which is after the node's subtree in preorder.
   */
  #hasUnvisitedPredecessor(
    nodeOrdinal: number,
    preorderIndex: number,
  ): boolean {
    const subtreeEndIndex = this.#preorderIndexToEndIndex[preorderIndex]!
    const endOffset = this.#ordinalToPredecessorStartOffset[nodeOrdinal + 1]!
    for (
      let offset = this.#ordinalToPredecessorStartOffset[nodeOrdinal]!;
      offset < endOffset;
      offset++
    ) {
      const predecessorPreorderIndex =
        this.#ordinalToPreorderIndex[this.#offsetToPredecessorOrdinal[offset]!]!
      if (predecessorPreorderIndex >= subtreeEndIndex) {
        return true
      }
    }
    return false
  }

  /**
   * Whether the entity retains a visited node, which is when one of its
   * outermost nodes dominates the node. Only the last outermost node at or
   * before the node in preorder can, because the subtrees of an entity's
   * outermost nodes are disjoint.
   */
  #isRetained(entityIndex: number, preorderIndex: number): boolean {
    const outermostPreorderIndices =
      this.#entityIndexToOutermostPreorderIndices[entityIndex]
    if (outermostPreorderIndices === undefined) {
      return false
    }
    const outermostNodeCount = countOutermostNodesAtOrBefore(
      outermostPreorderIndices,
      preorderIndex,
    )
    return (
      outermostNodeCount > 0 &&
      preorderIndex <
        this.#preorderIndexToEndIndex[
          outermostPreorderIndices[outermostNodeCount - 1]!
        ]!
    )
  }

  /**
   * Whether a path from the GC root reaches a predecessor of the visited node
   * that the pass has not visited, without passing an instance of the entity
   * or the visited node. It searches backward from those predecessors through
   * the nodes the pass has not visited, up to visited nodes, whose entities
   * are final.
   *
   * When no path does, the entity retains the visited node, and so every node
   * the search expanded, because a path to one of them that avoids the entity
   * would reach the visited node too. When one does, a path from the GC root
   * that avoids the entity reaches every node between the visited node and the
   * search's last node. The search records both, for later searches.
   */
  #isReachedAvoiding(
    entityIndex: number,
    nodeOrdinal: number,
    preorderIndex: number,
  ): boolean {
    this.#searchState ??= newSearchState(this.#nodeOrdinalToEntityIndex.length)
    const state = this.#searchState
    const { stack, expandedOrdinals, ordinalToFinding } = state
    const retainedFinding = entityIndex + 1
    const reachedFinding = -retainedFinding
    const endIndex = this.#preorderIndexToEndIndex[preorderIndex]!
    state.searchNumber++
    state.stackSize = 0

    this.#pushPredecessors(state, nodeOrdinal)
    let expandedCount = 0
    while (state.stackSize > 0) {
      const ordinal = stack[--state.stackSize]!
      const finding = ordinalToFinding[ordinal]!
      if (
        this.#nodeOrdinalToEntityIndex[ordinal] === entityIndex ||
        finding === retainedFinding
      ) {
        continue
      }
      const searchedPreorderIndex = this.#ordinalToPreorderIndex[ordinal]!
      if (
        finding === reachedFinding ||
        (searchedPreorderIndex < preorderIndex &&
          !this.#isRetained(entityIndex, searchedPreorderIndex))
      ) {
        recordReachedPath(state, ordinal, nodeOrdinal, reachedFinding)
        return true
      }
      if (searchedPreorderIndex >= endIndex) {
        expandedOrdinals[expandedCount++] = ordinal
        this.#pushPredecessors(state, ordinal)
      }
    }
    for (let index = 0; index < expandedCount; index++) {
      ordinalToFinding[expandedOrdinals[index]!] = retainedFinding
    }
    return false
  }

  #pushPredecessors(state: SearchState, ordinal: number): void {
    const startOffset = this.#ordinalToPredecessorStartOffset[ordinal]!
    const endOffset = this.#ordinalToPredecessorStartOffset[ordinal + 1]!
    this.#budget.spend(1 + endOffset - startOffset)
    for (let offset = startOffset; offset < endOffset; offset++) {
      const predecessorOrdinal = this.#offsetToPredecessorOrdinal[offset]!
      if (
        this.#ordinalToPreorderIndex[predecessorOrdinal] !== -1 &&
        state.ordinalToSearchNumber[predecessorOrdinal] !== state.searchNumber
      ) {
        state.ordinalToSearchNumber[predecessorOrdinal] = state.searchNumber
        state.ordinalToSearchedFromOrdinal[predecessorOrdinal] = ordinal
        state.stack[state.stackSize++] = predecessorOrdinal
      }
    }
  }

  #pushRetainingEntity(entityIndex: number): void {
    this.#offsetToRetainingEntityIndex.ensureCapacity(
      this.#retainingEntityCount + 1,
    )[this.#retainingEntityCount++] = entityIndex
  }

  #assignOutermostAncestor(
    preorderIndex: number,
    isOutermostNode: boolean,
  ): void {
    if (isOutermostNode) {
      this.#preorderIndexToOutermostAncestorIndex[preorderIndex] = preorderIndex
    } else if (preorderIndex === 0) {
      this.#preorderIndexToOutermostAncestorIndex[preorderIndex] = -1
    } else {
      this.#preorderIndexToOutermostAncestorIndex[preorderIndex] =
        this.#preorderIndexToOutermostAncestorIndex[
          this.#preorderIndexToDominatorIndex[preorderIndex]!
        ]!
    }
  }

  #recordOutermostNode(
    nodeOrdinal: number,
    preorderIndex: number,
    startOffset: number,
    endOffset: number,
  ): void {
    const offsetToRetainingEntityIndex =
      this.#offsetToRetainingEntityIndex.array
    const retainedSize = this.#nodeOrdinalToRetainedSize[nodeOrdinal]!
    for (let offset = startOffset; offset < endOffset; offset++) {
      const retainingEntityIndex = offsetToRetainingEntityIndex[offset]!
      ;(this.#entityIndexToOutermostPreorderIndices[retainingEntityIndex] ??=
        []).push(preorderIndex)
      this.#retentions[retainingEntityIndex]!.retainedSize += retainedSize
    }
  }
}

/** {@link outermostPreorderIndices} must be ascending. */
const countOutermostNodesAtOrBefore = (
  outermostPreorderIndices: readonly number[],
  preorderIndex: number,
): number => {
  // The last outermost node is the one at or before the visited node, and
  // often the one at or before a predecessor visited shortly before it.
  let low = 0
  let high = outermostPreorderIndices.length
  if (outermostPreorderIndices[high - 1]! <= preorderIndex) {
    low = high
  }
  while (low < high) {
    const middle = (low + high) >>> 1
    if (outermostPreorderIndices[middle]! <= preorderIndex) {
      low = middle + 1
    } else {
      high = middle
    }
  }
  return low
}

/**
 * An {@link OutermostNodeFinder}'s state for searches, allocated on the first
 * one.
 */
type SearchState = {
  searchNumber: number
  stackSize: number

  /** The number of the last search that pushed each node. */
  ordinalToSearchNumber: Int32Array

  /** The node whose predecessors this search reached each node through. */
  ordinalToSearchedFromOrdinal: Int32Array
  stack: Int32Array
  expandedOrdinals: Int32Array

  /**
   * What a search found about each node the pass has not visited, for one
   * entity: its index + 1 when it retains the node, that value negated when a
   * path avoiding it reaches the node, or 0.
   */
  ordinalToFinding: Int32Array
}

const newSearchState = (nodeCount: number): SearchState => ({
  searchNumber: 0,
  stackSize: 0,
  ordinalToSearchNumber: new Int32Array(nodeCount),
  ordinalToSearchedFromOrdinal: new Int32Array(nodeCount),
  stack: new Int32Array(nodeCount),
  expandedOrdinals: new Int32Array(nodeCount),
  ordinalToFinding: new Int32Array(nodeCount),
})

const recordReachedPath = (
  { ordinalToFinding, ordinalToSearchedFromOrdinal }: SearchState,
  reachedOrdinal: number,
  startOrdinal: number,
  reachedFinding: number,
): void => {
  for (
    let ordinal = reachedOrdinal;
    ordinal !== startOrdinal;
    ordinal = ordinalToSearchedFromOrdinal[ordinal]!
  ) {
    ordinalToFinding[ordinal] = reachedFinding
  }
}

/**
 * The reachable nodes in a preorder of the dominator tree that visits each
 * node's dominatees in reverse postorder. It visits each node's predecessors
 * before the node, except a predecessor across an edge that closes a cycle.
 *
 * A predecessor the node does not dominate is in the subtree of another
 * dominatee of the node's immediate dominator, which reverse postorder places
 * first unless the edge closes a cycle.
 */
export type DominatorTreePreorder = {
  /** -1 for an unreachable node. */
  ordinalToPreorderIndex: Int32Array
  preorderIndexToOrdinal: Int32Array

  /** The preorder index of the node's immediate dominator, 0 for the GC root. */
  preorderIndexToDominatorIndex: Int32Array

  /**
   * One past the preorder index of the last node a node dominates, so a node
   * dominates the nodes from its own index up to this one.
   */
  preorderIndexToEndIndex: Int32Array

  /** The node's distance from the GC root in the dominator tree. */
  preorderIndexToDepth: Int32Array
}

export const computeDominatorTreePreorder = ({
  dfsIndexToOrdinal,
  ordinalToImmediateDominatorOrdinal,
  immediateDominateeOrdinalToStartOffset,
  offsetToImmediateDominateeOrdinal,
}: ImmediateDominatorGraph): DominatorTreePreorder => {
  const nodeCount = ordinalToImmediateDominatorOrdinal.length
  const reachableCount = dfsIndexToOrdinal.length

  const ordinalToPreorderIndex = new Int32Array(nodeCount).fill(-1)
  const preorderIndexToOrdinal = new Int32Array(reachableCount)
  const preorderIndexToDominatorIndex = new Int32Array(reachableCount)
  const preorderIndexToDepth = new Int32Array(reachableCount)
  const stack = new Int32Array(reachableCount)
  stack[0] = 0
  let topOffset = 1
  for (let preorderIndex = 0; topOffset > 0; preorderIndex++) {
    const nodeOrdinal = stack[--topOffset]!
    ordinalToPreorderIndex[nodeOrdinal] = preorderIndex
    preorderIndexToOrdinal[preorderIndex] = nodeOrdinal
    if (nodeOrdinal !== 0) {
      const dominatorIndex =
        ordinalToPreorderIndex[
          ordinalToImmediateDominatorOrdinal[nodeOrdinal]!
        ]!
      preorderIndexToDominatorIndex[preorderIndex] = dominatorIndex
      preorderIndexToDepth[preorderIndex] =
        preorderIndexToDepth[dominatorIndex]! + 1
    }
    for (
      let offset = immediateDominateeOrdinalToStartOffset[nodeOrdinal + 1]! - 1;
      offset >= immediateDominateeOrdinalToStartOffset[nodeOrdinal]!;
      offset--
    ) {
      stack[topOffset++] = offsetToImmediateDominateeOrdinal[offset]!
    }
  }

  return {
    ordinalToPreorderIndex,
    preorderIndexToOrdinal,
    preorderIndexToDominatorIndex,
    preorderIndexToEndIndex: computePreorderIndexToEndIndex(
      preorderIndexToDominatorIndex,
    ),
    preorderIndexToDepth,
  }
}

const computePreorderIndexToEndIndex = (
  preorderIndexToDominatorIndex: Int32Array,
): Int32Array => {
  const reachableCount = preorderIndexToDominatorIndex.length
  const preorderIndexToEndIndex = new Int32Array(reachableCount).fill(1)
  // Every dominatee follows its dominator, so this sums subtree sizes bottom-up.
  for (
    let preorderIndex = reachableCount - 1;
    preorderIndex >= 1;
    preorderIndex--
  ) {
    preorderIndexToEndIndex[preorderIndexToDominatorIndex[preorderIndex]!]! +=
      preorderIndexToEndIndex[preorderIndex]!
  }
  for (let preorderIndex = 0; preorderIndex < reachableCount; preorderIndex++) {
    preorderIndexToEndIndex[preorderIndex]! += preorderIndex
  }
  return preorderIndexToEndIndex
}
