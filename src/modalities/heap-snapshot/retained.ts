import type { ImmediateDominatorGraph } from './graph.ts'

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
 * Adds each node's retained size to its aggregated node without
 * double-counting.
 *
 * Only the outermost instance of an aggregated node on each root-to-leaf path
 * of the dominator tree counts, because an inner instance's retained set is
 * contained in the outer one's. These are the instances
 * {@link newOutermostInstanceIdsOf} selects from the aggregated node's.
 */
export const attributeCategoryRetainedSizes = (
  nodeOrdinalToRetainedSize: Float64Array,
  {
    immediateDominateeOrdinalToStartOffset,
    offsetToImmediateDominateeOrdinal,
  }: ImmediateDominatorGraph,
  nodeOrdinalToAggregatedNodeIndex: Int32Array,
  aggregatedNodes: { retainedSize: number }[],
): void => {
  const nodeCount = nodeOrdinalToRetainedSize.length

  const categoryPathDepth = new Int32Array(aggregatedNodes.length)

  // A value >= 0 enters a node, and ~value (always < 0) exits it.
  const stack = new Int32Array(nodeCount * 2 + 1)
  stack[0] = 0
  let topOffset = 1
  do {
    const encodedNodeOrdinal = stack[--topOffset]!
    if (encodedNodeOrdinal < 0) {
      const nodeOrdinal = ~encodedNodeOrdinal
      const constructorIndex = nodeOrdinalToAggregatedNodeIndex[nodeOrdinal]!
      if (constructorIndex !== -1) {
        categoryPathDepth[constructorIndex] =
          categoryPathDepth[constructorIndex]! - 1
      }
      continue
    }

    const nodeOrdinal = encodedNodeOrdinal
    const aggregatedNodeIndex = nodeOrdinalToAggregatedNodeIndex[nodeOrdinal]!
    if (aggregatedNodeIndex !== -1) {
      const depth = categoryPathDepth[aggregatedNodeIndex]!
      if (depth === 0) {
        aggregatedNodes[aggregatedNodeIndex]!.retainedSize +=
          nodeOrdinalToRetainedSize[nodeOrdinal]!
      }
      categoryPathDepth[aggregatedNodeIndex] = depth + 1
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

// A node's mark while selecting outermost instances. An instance is marked
// `DOMINATED` before any walk, so a walk reaching it marks its own path so too.
const UNMARKED = 0
const DOMINATED = 1
const NOT_DOMINATED = 2

/**
 * Returns a function selecting the reachable instances among distinct instance
 * IDs that no other of them dominates. Their retained nodes are disjoint, and
 * contain every other reachable instance's.
 * {@link attributeCategoryRetainedSizes} counts the same instances toward an
 * aggregated node's retained size.
 */
export const newOutermostInstanceIdsOf = (
  ordinalToImmediateDominatorOrdinal: Int32Array,
): ((instanceIds: readonly number[]) => readonly number[]) => {
  // Allocated on the first call with several instances, and unmarked before
  // each call returns.
  let ordinalToMark: Uint8Array | undefined
  const markedOrdinals: number[] = []
  const isReachable = (ordinal: number): boolean =>
    ordinalToImmediateDominatorOrdinal[ordinal] !== -1
  return instanceIds => {
    if (instanceIds.length < 2) {
      return instanceIds.filter(isReachable)
    }
    ordinalToMark ??= new Uint8Array(ordinalToImmediateDominatorOrdinal.length)
    const marks = ordinalToMark
    for (const instanceId of instanceIds) {
      marks[instanceId] = DOMINATED
      markedOrdinals.push(instanceId)
    }
    const outermostInstanceIds = instanceIds.filter(instanceId => {
      if (!isReachable(instanceId)) {
        return false
      }
      const walkStart = markedOrdinals.length
      let mark = NOT_DOMINATED
      // A reachable node's dominators are reachable, and the GC root dominates
      // itself.
      let ordinal = instanceId
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
    })
    for (const ordinal of markedOrdinals) {
      marks[ordinal] = UNMARKED
    }
    markedOrdinals.length = 0
    return outermostInstanceIds
  }
}
