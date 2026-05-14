import type { ImmediateDominatorGraph } from './graph.ts'

export const computeNodeOrdinalToRetainedSize = (
  nodes: ArrayLike<number>,
  nodeFieldCount: number,
  selfSizeOffset: number,
  {
    dfsIndexToOrdinal,
    ordinalToImmediateDominatorOrdinal,
  }: ImmediateDominatorGraph,
): Float64Array => {
  // Accumulate retained sizes bottom-up through the dominator tree.
  const nodeOrdinalToRetainedSize = new Float64Array(
    ordinalToImmediateDominatorOrdinal.length,
  )
  for (
    let nodeOrdinal = 0;
    nodeOrdinal < nodeOrdinalToRetainedSize.length;
    nodeOrdinal++
  ) {
    const selfSize = nodes[nodeOrdinal * nodeFieldCount + selfSizeOffset]!
    nodeOrdinalToRetainedSize[nodeOrdinal] = selfSize
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
 * Attributes retained sizes to groups of nodes without double-counting.
 *
 * Summing per-node retained sizes across all instances of a group over-counts
 * when one instance dominates another from the same group (the dominated node's
 * memory is already included in the dominator's retained size).
 *
 * This function correctly attributes by doing a DFS of the dominator tree and
 * only crediting the outermost instance of each group on any root-to-leaf path.
 * Inner instances are entirely contained within the outer one's retained set,
 * so they add nothing.
 */
export const attributeGroupRetainedSizes = (
  nodeOrdinalToRetainedSize: Float64Array,
  {
    immediateDominateeOrdinalToStartOffset,
    offsetToImmediateDominateeOrdinal,
  }: ImmediateDominatorGraph,
  nodeOrdinalToAggregatedNodeIndex: Int32Array,
  aggregatedNodes: { retainedSize: number }[],
): void => {
  const nodeCount = nodeOrdinalToRetainedSize.length

  // Track same-group ancestor depth. Only the outermost (depth=0) instance
  // on any root-to-leaf path contributes its retained size.
  const groupPathDepth = new Int32Array(aggregatedNodes.length)

  // DFS with flat Int32Array stack.
  // Convention: value >= 0 = entering node, ~value (always < 0) = exiting node.
  const stack = new Int32Array(nodeCount * 2 + 1)
  stack[0] = 0
  let topOffset = 1
  do {
    const encodedNodeOrdinal = stack[--topOffset]!
    if (encodedNodeOrdinal < 0) {
      // Exiting a node.
      const nodeOrdinal = ~encodedNodeOrdinal
      const constructorIndex = nodeOrdinalToAggregatedNodeIndex[nodeOrdinal]!
      if (constructorIndex !== -1) {
        groupPathDepth[constructorIndex] = groupPathDepth[constructorIndex]! - 1
      }
      continue
    }

    const nodeOrdinal = encodedNodeOrdinal
    const aggregatedNodeIndex = nodeOrdinalToAggregatedNodeIndex[nodeOrdinal]!
    if (aggregatedNodeIndex !== -1) {
      const depth = groupPathDepth[aggregatedNodeIndex]!
      if (depth === 0) {
        aggregatedNodes[aggregatedNodeIndex]!.retainedSize +=
          nodeOrdinalToRetainedSize[nodeOrdinal]!
      }
      groupPathDepth[aggregatedNodeIndex] = depth + 1
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
