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
 * Attributes retained sizes to categories of nodes without double-counting.
 *
 * Summing per-node retained sizes across all instances of a category
 * over-counts when one instance dominates another from the same category (the
 * dominated node's memory is already included in the dominator's retained
 * size).
 *
 * This function correctly attributes by doing a DFS of the dominator tree and
 * only crediting the outermost instance of each category on any root-to-leaf
 * path. Inner instances are entirely contained within the outer one's retained
 * set, so they add nothing.
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

  // Track same-category ancestor depth. Only the outermost (depth=0) instance
  // on any root-to-leaf path contributes its retained size.
  const categoryPathDepth = new Int32Array(aggregatedNodes.length)

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
