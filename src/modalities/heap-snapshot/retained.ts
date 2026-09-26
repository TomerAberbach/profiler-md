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
 * contained in the outer one's.
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
