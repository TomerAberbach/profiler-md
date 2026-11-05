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

/**
 * Adds to each entity's minimum retained size, without double-counting, the
 * retained sizes of the dominator subtrees the entity's instances retain:
 *
 * - Each outermost instance's. An inner instance's retained set is contained in
 *   the outer one's. These are the instances
 *   {@link newOutermostInstanceOrdinalsOf} selects from the entity's
 * - Each node's that no instance dominates, but whose every predecessor is an
 *   instance or a node an instance dominates, so the instances retain it only
 *   together
 *
 * It omits the other nodes the instances retain only together, such as a node
 * one of those nodes references without dominating it, or a cycle of them.
 */
export const attributeEntityMinRetainedSizes = (
  nodeOrdinalToRetainedSize: Float64Array,
  {
    ordinalToPredecessorStartOffset,
    offsetToPredecessorOrdinal,
  }: NodeAdjacencyGraph,
  {
    ordinalToImmediateDominatorOrdinal,
    immediateDominateeOrdinalToStartOffset,
    offsetToImmediateDominateeOrdinal,
  }: ImmediateDominatorGraph,
  nodeOrdinalToEntityIndex: Int32Array,
  entities: { minRetainedSize: number }[],
): void => {
  const nodeCount = nodeOrdinalToRetainedSize.length

  // The instances and jointly retained nodes of each entity on the current
  // dominator tree path.
  const entityPathDepth = new Int32Array(entities.length)
  const jointEntityIndicesOf = newJointEntityIndicesOf(
    { ordinalToPredecessorStartOffset, offsetToPredecessorOrdinal },
    ordinalToImmediateDominatorOrdinal,
    nodeOrdinalToEntityIndex,
    entities.length,
  )
  // The entities that retain a node on the current path only together, and how
  // many each node with an exit on the stack added, the deepest node's last.
  const pathJointEntityIndices: number[] = []
  const pathJointEntityCounts: number[] = []

  // A value >= 0 enters a node, and ~value (always < 0) exits it.
  const stack = new Int32Array(nodeCount * 2 + 1)
  stack[0] = 0
  let topOffset = 1
  do {
    const encodedNodeOrdinal = stack[--topOffset]!
    if (encodedNodeOrdinal < 0) {
      const nodeOrdinal = ~encodedNodeOrdinal
      const entityIndex = nodeOrdinalToEntityIndex[nodeOrdinal]!
      if (entityIndex !== -1) {
        entityPathDepth[entityIndex]!--
      }
      for (
        let jointEntityCount = pathJointEntityCounts.pop()!;
        jointEntityCount > 0;
        jointEntityCount--
      ) {
        entityPathDepth[pathJointEntityIndices.pop()!]!--
      }
      continue
    }

    const nodeOrdinal = encodedNodeOrdinal
    const retainedSize = nodeOrdinalToRetainedSize[nodeOrdinal]!
    const entityIndex = nodeOrdinalToEntityIndex[nodeOrdinal]!
    if (entityIndex !== -1) {
      if (entityPathDepth[entityIndex] === 0) {
        entities[entityIndex]!.minRetainedSize += retainedSize
      }
      entityPathDepth[entityIndex]!++
    }
    let jointEntityCount = 0
    for (const jointEntityIndex of jointEntityIndicesOf(nodeOrdinal)) {
      if (entityPathDepth[jointEntityIndex] === 0) {
        entities[jointEntityIndex]!.minRetainedSize += retainedSize
        entityPathDepth[jointEntityIndex]++
        pathJointEntityIndices.push(jointEntityIndex)
        jointEntityCount++
      }
    }
    if (entityIndex !== -1 || jointEntityCount > 0) {
      pathJointEntityCounts.push(jointEntityCount)
      stack[topOffset++] = ~nodeOrdinal
    }

    const dominateeStartOffset =
      immediateDominateeOrdinalToStartOffset[nodeOrdinal]!
    const dominateeEndOffset =
      immediateDominateeOrdinalToStartOffset[nodeOrdinal + 1]!
    for (
      let offset = dominateeStartOffset;
      offset < dominateeEndOffset;
      offset++
    ) {
      stack[topOffset++] = offsetToImmediateDominateeOrdinal[offset]!
    }
  } while (topOffset > 0)
}

/**
 * Returns a function listing the entities with an instance on the dominator
 * tree path from each of a reachable node's reachable predecessors up to, but
 * excluding, the node's immediate dominator. Each of them reaches the node
 * through its instances only, unless one of its instances dominates the node.
 *
 * A predecessor's path ends at the immediate dominator, which dominates every
 * predecessor.
 */
const newJointEntityIndicesOf = (
  {
    ordinalToPredecessorStartOffset,
    offsetToPredecessorOrdinal,
  }: Pick<
    NodeAdjacencyGraph,
    `ordinalToPredecessorStartOffset` | `offsetToPredecessorOrdinal`
  >,
  ordinalToImmediateDominatorOrdinal: Int32Array,
  nodeOrdinalToEntityIndex: Int32Array,
  entityCount: number,
): ((nodeOrdinal: number) => readonly number[]) => {
  // Each predecessor's walk stamps the entities it passes with its own number.
  const entityIndexToStamp = new Int32Array(entityCount)
  let stamp = 0
  const none: readonly number[] = []
  return nodeOrdinal => {
    const predecessorStartOffset = ordinalToPredecessorStartOffset[nodeOrdinal]!
    const predecessorEndOffset =
      ordinalToPredecessorStartOffset[nodeOrdinal + 1]!
    const dominatorOrdinal = ordinalToImmediateDominatorOrdinal[nodeOrdinal]!
    // A node with one predecessor is dominated by it, and the GC root has
    // none to walk to.
    if (
      predecessorEndOffset - predecessorStartOffset < 2 ||
      dominatorOrdinal === nodeOrdinal
    ) {
      return none
    }

    let jointEntityIndices: number[] | undefined
    for (
      let offset = predecessorStartOffset;
      offset < predecessorEndOffset;
      offset++
    ) {
      const predecessorOrdinal = offsetToPredecessorOrdinal[offset]!
      if (ordinalToImmediateDominatorOrdinal[predecessorOrdinal] === -1) {
        continue
      }
      stamp++
      const passedEntityIndices: number[] = []
      for (
        let ordinal = predecessorOrdinal;
        ordinal !== dominatorOrdinal;
        ordinal = ordinalToImmediateDominatorOrdinal[ordinal]!
      ) {
        const entityIndex = nodeOrdinalToEntityIndex[ordinal]!
        if (entityIndex !== -1 && entityIndexToStamp[entityIndex] !== stamp) {
          entityIndexToStamp[entityIndex] = stamp
          passedEntityIndices.push(entityIndex)
        }
      }
      jointEntityIndices = jointEntityIndices
        ? jointEntityIndices.filter(
            entityIndex => entityIndexToStamp[entityIndex] === stamp,
          )
        : passedEntityIndices
      if (jointEntityIndices.length === 0) {
        return none
      }
    }
    return jointEntityIndices ?? none
  }
}

/**
 * Returns a function computing the retained size of the given distinct
 * instance ordinals: the summed self size of every node that becomes
 * unreachable from the GC root once every instance is garbage collected. That
 * includes the nodes several instances retain only together, which none of
 * them dominates.
 *
 * The nodes a single outermost instance retains are the nodes it dominates.
 * Several outermost instances take a walk over every node reachable without
 * passing through one of them.
 */
export const newInstancesRetainedSizeOf = (
  {
    ordinalToSuccessorStartOffset,
    offsetToSuccessorOrdinal,
  }: NodeAdjacencyGraph,
  nodeOrdinalToRetainedSize: Float64Array,
  selfSizeOf: (nodeOrdinal: number) => number,
  outermostInstanceOrdinalsOf: (
    instanceOrdinals: readonly number[],
  ) => readonly number[],
): ((instanceOrdinals: readonly number[]) => number) => {
  const nodeCount = nodeOrdinalToRetainedSize.length
  // Allocated on the first call with several outermost instances, and cleared
  // before each call returns.
  let ordinalToIsVisited: Uint8Array | undefined
  let stack: Int32Array | undefined
  return instanceOrdinals => {
    const outermostInstanceOrdinals =
      outermostInstanceOrdinalsOf(instanceOrdinals)
    if (outermostInstanceOrdinals.length < 2) {
      return outermostInstanceOrdinals.length === 0
        ? 0
        : nodeOrdinalToRetainedSize[outermostInstanceOrdinals[0]!]!
    }

    ordinalToIsVisited ??= new Uint8Array(nodeCount)
    stack ??= new Int32Array(nodeCount)
    const isVisited = ordinalToIsVisited
    // Marking the instances visited keeps the walk from passing through them.
    for (const instanceOrdinal of outermostInstanceOrdinals) {
      isVisited[instanceOrdinal] = 1
    }
    isVisited[0] = 1
    stack[0] = 0
    let topOffset = 1
    let stillReachableSize = 0
    do {
      const nodeOrdinal = stack[--topOffset]!
      stillReachableSize += selfSizeOf(nodeOrdinal)
      const successorEndOffset = ordinalToSuccessorStartOffset[nodeOrdinal + 1]!
      for (
        let offset = ordinalToSuccessorStartOffset[nodeOrdinal]!;
        offset < successorEndOffset;
        offset++
      ) {
        const successorOrdinal = offsetToSuccessorOrdinal[offset]!
        if (isVisited[successorOrdinal] === 0) {
          isVisited[successorOrdinal] = 1
          stack[topOffset++] = successorOrdinal
        }
      }
    } while (topOffset > 0)
    isVisited.fill(0)

    // The GC root retains every reachable node.
    return nodeOrdinalToRetainedSize[0]! - stillReachableSize
  }
}

/**
 * Returns a function selecting, of the given distinct instance ordinals, those
 * of the reachable instances that no other given instance dominates. Their
 * retained nodes are disjoint, and contain every other reachable instance's.
 * {@link attributeEntityMinRetainedSizes} counts the same instances toward an
 * entity's minimum retained size.
 */
export const newOutermostInstanceOrdinalsOf = (
  ordinalToImmediateDominatorOrdinal: Int32Array,
): ((instanceOrdinals: readonly number[]) => readonly number[]) => {
  // Allocated on the first call with several instances, and unmarked before
  // each call returns.
  let ordinalToMark: Uint8Array | undefined
  const markedOrdinals: number[] = []
  const isReachable = (ordinal: number): boolean =>
    ordinalToImmediateDominatorOrdinal[ordinal] !== -1
  return instanceOrdinals => {
    if (instanceOrdinals.length < 2) {
      return instanceOrdinals.filter(isReachable)
    }
    ordinalToMark ??= new Uint8Array(ordinalToImmediateDominatorOrdinal.length)
    const marks = ordinalToMark
    for (const instanceOrdinal of instanceOrdinals) {
      marks[instanceOrdinal] = DOMINATED
      markedOrdinals.push(instanceOrdinal)
    }
    const outermostInstanceOrdinals = instanceOrdinals.filter(
      instanceOrdinal => {
        if (!isReachable(instanceOrdinal)) {
          return false
        }
        const walkStart = markedOrdinals.length
        let mark = NOT_DOMINATED
        // A reachable node's dominators are reachable, and the GC root
        // dominates itself.
        let ordinal = instanceOrdinal
        while (ordinalToImmediateDominatorOrdinal[ordinal] !== ordinal) {
          ordinal = ordinalToImmediateDominatorOrdinal[ordinal]!
          if (marks[ordinal] !== UNMARKED) {
            mark = marks[ordinal]!
            break
          }
          markedOrdinals.push(ordinal)
        }
        for (let index = walkStart; index < markedOrdinals.length; index++) {
          marks[markedOrdinals[index]!] = mark
        }
        return mark === NOT_DOMINATED
      },
    )
    for (const ordinal of markedOrdinals) {
      marks[ordinal] = UNMARKED
    }
    markedOrdinals.length = 0
    return outermostInstanceOrdinals
  }
}

// A node's mark while selecting outermost instances. An instance is marked
// `DOMINATED` before any walk, so a walk reaching it marks its own path so too.
const UNMARKED = 0
const DOMINATED = 1
const NOT_DOMINATED = 2
