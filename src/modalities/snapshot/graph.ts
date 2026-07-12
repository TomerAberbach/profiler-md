/**
 * A successor and predecessor graph between heap snapshot nodes in CSR format.
 *
 * @see https://en.wikipedia.org/wiki/Sparse_matrix#Compressed_sparse_row_(CSR,_CRS_or_Yale_format)
 */
export type NodeAdjacencyGraph = {
  /**
   * Start offset into
   * {@link NodeAdjacencyGraph.offsetToSuccessorOrdinal} and
   * {@link NodeAdjacencyGraph.offsetToSuccessorEdgeIndex} for each
   * node's successors in the graph.
   *
   * Node `i`'s successor ordinals occupy:
   * `[offsetToSuccessorOrdinal[i], offsetToSuccessorOrdinal[i + 1])`.
   *
   * Node `i`'s successor edges occupy:
   * `[offsetToSuccessorEdgeIndex[i], offsetToSuccessorEdgeIndex[i + 1])`.
   */
  ordinalToSuccessorStartOffset: Int32Array

  /**
   * Successor ordinals, packed contiguously and indexed via
   * {@link NodeAdjacencyGraph.ordinalToSuccessorStartOffset}.
   */
  offsetToSuccessorOrdinal: Int32Array

  /**
   * Successor edge indices, packed contiguously and indexed via
   * {@link NodeAdjacencyGraph.ordinalToSuccessorStartOffset}.
   */
  offsetToSuccessorEdgeIndex: Int32Array

  /**
   * Start offset into
   * {@link NodeAdjacencyGraph.offsetToPredecessorOrdinal} and
   * {@link NodeAdjacencyGraph.offsetToPredecessorEdgeIndex} for each
   * node's predecessors in the graph.
   *
   * Node `i`'s predecessor ordinals occupy:
   * `[offsetToPredecessorOrdinal[i], offsetToPredecessorOrdinal[i + 1])`.
   *
   * Node `i`'s predecessor edges occupy:
   * `[offsetToPredecessorEdgeIndex[i], offsetToPredecessorEdgeIndex[i + 1])`.
   */
  ordinalToPredecessorStartOffset: Int32Array

  /**
   * Predecessor ordinals, packed contiguously and indexed via
   * {@link NodeAdjacencyGraph.ordinalToPredecessorStartOffset}.
   */
  offsetToPredecessorOrdinal: Int32Array

  /**
   * Predecessor edge indices, packed contiguously and indexed via
   * {@link NodeAdjacencyGraph.ordinalToPredecessorStartOffset}.
   */
  offsetToPredecessorEdgeIndex: Int32Array
}

/**
 * The immediate dominator graph for a heap snapshot in CSR format.
 *
 * There's a 1:N relationship between immediate dominator and immediate
 * dominatee.
 *
 * @see https://en.wikipedia.org/wiki/Dominator_(graph_theory)
 * @see https://en.wikipedia.org/wiki/Sparse_matrix#Compressed_sparse_row_(CSR,_CRS_or_Yale_format)
 */
export type ImmediateDominatorGraph = {
  /**
   * Node ordinal at each DFS traversal index, enabling bottom-up tree walks by
   * iterating in reverse.
   */
  dfsIndexToOrdinal: Int32Array

  /**
   * The ordinal of each node's immediate dominator.
   *
   * -1 for unreachable nodes, self for the root.
   */
  ordinalToImmediateDominatorOrdinal: Int32Array

  /**
   * Start offset into
   * {@link ImmediateDominatorGraph.offsetToImmediateDominateeOrdinal} for each
   * node's children in the dominator tree.
   *
   * Node `i`'s dominatees occupy:
   * `[immediateDominateeOrdinalToStartOffset[i], immediateDominateeOrdinalToStartOffset[i + 1])`.
   */
  immediateDominateeOrdinalToStartOffset: Int32Array

  /**
   * Dominatee ordinals, packed contiguously and indexed via
   * {@link ImmediateDominatorGraph.immediateDominateeOrdinalToStartOffset}.
   */
  offsetToImmediateDominateeOrdinal: Int32Array
}

/**
 * Computes the immediate dominators of every node.
 *
 * Uses the Lengauer-Tarjan dominator tree algorithm.
 *
 * @see https://en.wikipedia.org/wiki/Dominator_(graph_theory)
 * @see https://www.cs.princeton.edu/courses/archive/fall03/cs528/handouts/a%20fast%20algorithm%20for%20finding.pdf
 */
export const computeImmediateDominatorGraph = (
  nodeCount: number,
  {
    ordinalToSuccessorStartOffset,
    offsetToSuccessorOrdinal,
    ordinalToPredecessorStartOffset,
    offsetToPredecessorOrdinal,
  }: NodeAdjacencyGraph,
): ImmediateDominatorGraph => {
  // Lengauer-Tarjan dominator tree. Node 0 is the GC root super-node.
  const ordinalToImmediateDominatorOrdinal = new Int32Array(nodeCount).fill(-1)
  const dfsIndexToOrdinal = new Int32Array(nodeCount)

  // Step 1: Iterative DFS from node 0, assigning DFS indices.
  const ordinalToParentOrdinal = new Int32Array(nodeCount).fill(-1)
  const ordinalToDfsIndex = new Int32Array(nodeCount).fill(-1)
  const ordinalToSemidominatorDfsIndex = new Int32Array(nodeCount)
  ordinalToDfsIndex[0] = 0
  dfsIndexToOrdinal[0] = 0
  const dfsStackOrdinals = new Int32Array(nodeCount)
  const dfsStackOffsets = new Int32Array(nodeCount)
  dfsStackOffsets[0] = ordinalToSuccessorStartOffset[0]!
  let dfsIndex = 1
  let dfsStackSize = 1
  do {
    const topOffset = dfsStackSize - 1
    const nodeOrdinal = dfsStackOrdinals[topOffset]!
    const nextOffset = dfsStackOffsets[topOffset]!
    const endOffset = ordinalToSuccessorStartOffset[nodeOrdinal + 1]!

    if (nextOffset === endOffset) {
      dfsStackSize--
      continue
    }

    const childOrdinal = offsetToSuccessorOrdinal[nextOffset]!
    dfsStackOffsets[topOffset]!++

    if (ordinalToDfsIndex[childOrdinal] !== -1) {
      continue
    }

    ordinalToParentOrdinal[childOrdinal] = nodeOrdinal
    ordinalToDfsIndex[childOrdinal] = dfsIndex
    ordinalToSemidominatorDfsIndex[childOrdinal] = dfsIndex
    dfsIndexToOrdinal[dfsIndex] = childOrdinal
    dfsIndex++
    dfsStackOrdinals[dfsStackSize] = childOrdinal
    dfsStackOffsets[dfsStackSize] = ordinalToSuccessorStartOffset[childOrdinal]!
    dfsStackSize++
  } while (dfsStackSize > 0)
  const reachableCount = dfsIndex

  const ancestorNodeOrdinalPath = new Int32Array(nodeCount)
  const ordinalToForestAncestorOrdinal = new Int32Array(nodeCount).fill(-1)
  const ordinalToMinSemiAncestorOrdinal = new Int32Array(nodeCount)
  for (let i = 0; i < nodeCount; i++) {
    ordinalToMinSemiAncestorOrdinal[i] = i
  }
  const compressAncestorPath = (startNodeOrdinal: number): void => {
    let pathLength = 0
    let nodeOrdinal = startNodeOrdinal
    while (
      ordinalToForestAncestorOrdinal[nodeOrdinal] !== -1 &&
      ordinalToForestAncestorOrdinal[
        ordinalToForestAncestorOrdinal[nodeOrdinal]!
      ] !== -1
    ) {
      ancestorNodeOrdinalPath[pathLength++] = nodeOrdinal
      nodeOrdinal = ordinalToForestAncestorOrdinal[nodeOrdinal]!
    }

    for (let pathIndex = pathLength - 1; pathIndex >= 0; pathIndex--) {
      const pathNodeOrdinal = ancestorNodeOrdinalPath[pathIndex]!
      const ancestorOrdinal = ordinalToForestAncestorOrdinal[pathNodeOrdinal]!
      if (
        ordinalToSemidominatorDfsIndex[
          ordinalToMinSemiAncestorOrdinal[ancestorOrdinal]!
        ]! <
        ordinalToSemidominatorDfsIndex[
          ordinalToMinSemiAncestorOrdinal[pathNodeOrdinal]!
        ]!
      ) {
        ordinalToMinSemiAncestorOrdinal[pathNodeOrdinal] =
          ordinalToMinSemiAncestorOrdinal[ancestorOrdinal]!
      }
      ordinalToForestAncestorOrdinal[pathNodeOrdinal] =
        ordinalToForestAncestorOrdinal[ancestorOrdinal]!
    }
  }
  const minSemiAncestorOrdinal = (nodeOrdinal: number): number => {
    if (ordinalToForestAncestorOrdinal[nodeOrdinal] === -1) {
      return nodeOrdinal
    }
    compressAncestorPath(nodeOrdinal)
    return ordinalToMinSemiAncestorOrdinal[nodeOrdinal]!
  }

  // Steps 2 & 3: Compute semidominators; derive initial immediate dominators
  // from buckets.
  const pendingHeadOrdinals = new Int32Array(nodeCount).fill(-1)
  const pendingNextOrdinals = new Int32Array(nodeCount).fill(-1)
  for (let dfsIndex = reachableCount - 1; dfsIndex >= 1; dfsIndex--) {
    const nodeOrdinal = dfsIndexToOrdinal[dfsIndex]!
    const predecessorStartOffset = ordinalToPredecessorStartOffset[nodeOrdinal]!
    const predecessorEndOffset =
      ordinalToPredecessorStartOffset[nodeOrdinal + 1]!
    for (
      let predecessorOffset = predecessorStartOffset;
      predecessorOffset < predecessorEndOffset;
      predecessorOffset++
    ) {
      const predecessorOrdinal = offsetToPredecessorOrdinal[predecessorOffset]!
      const predecessorDfsIndex = ordinalToDfsIndex[predecessorOrdinal]
      if (predecessorDfsIndex === -1) {
        continue
      }

      const minAncestorOrdinal = minSemiAncestorOrdinal(predecessorOrdinal)
      if (
        ordinalToSemidominatorDfsIndex[minAncestorOrdinal]! <
        ordinalToSemidominatorDfsIndex[nodeOrdinal]!
      ) {
        ordinalToSemidominatorDfsIndex[nodeOrdinal] =
          ordinalToSemidominatorDfsIndex[minAncestorOrdinal]!
      }
    }

    // Add nodeOrdinal to the pending bucket of its semidominator.
    const semiBucketOrdinal =
      dfsIndexToOrdinal[ordinalToSemidominatorDfsIndex[nodeOrdinal]!]!
    pendingNextOrdinals[nodeOrdinal] = pendingHeadOrdinals[semiBucketOrdinal]!
    pendingHeadOrdinals[semiBucketOrdinal] = nodeOrdinal

    ordinalToForestAncestorOrdinal[nodeOrdinal] =
      ordinalToParentOrdinal[nodeOrdinal]!

    // Process the pending bucket of the parent node.
    const parentOrdinal = ordinalToParentOrdinal[nodeOrdinal]!
    let pendingOrdinal = pendingHeadOrdinals[parentOrdinal]!
    pendingHeadOrdinals[parentOrdinal] = -1
    while (pendingOrdinal !== -1) {
      const nextPending = pendingNextOrdinals[pendingOrdinal]!
      const ancestorOrdinal = minSemiAncestorOrdinal(pendingOrdinal)
      ordinalToImmediateDominatorOrdinal[pendingOrdinal] =
        ordinalToSemidominatorDfsIndex[ancestorOrdinal]! <
        ordinalToSemidominatorDfsIndex[pendingOrdinal]!
          ? ancestorOrdinal
          : parentOrdinal
      pendingOrdinal = nextPending
    }
  }

  // Step 4: Adjust immediate dominators that were set to a semidominator proxy.
  for (let dfsIndex = 1; dfsIndex < reachableCount; dfsIndex++) {
    const nodeOrdinal = dfsIndexToOrdinal[dfsIndex]!
    if (
      ordinalToImmediateDominatorOrdinal[nodeOrdinal]! !==
      dfsIndexToOrdinal[ordinalToSemidominatorDfsIndex[nodeOrdinal]!]!
    ) {
      ordinalToImmediateDominatorOrdinal[nodeOrdinal] =
        ordinalToImmediateDominatorOrdinal[
          ordinalToImmediateDominatorOrdinal[nodeOrdinal]!
        ]!
    }
  }
  ordinalToImmediateDominatorOrdinal[0] = 0

  const dominatorOrdinalToDominateeCount = new Int32Array(nodeCount)
  for (let nodeOrdinal = 1; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const dominatorOrdinal = ordinalToImmediateDominatorOrdinal[nodeOrdinal]!
    if (dominatorOrdinal !== -1) {
      dominatorOrdinalToDominateeCount[dominatorOrdinal]!++
    }
  }
  const immediateDominateeOrdinalToStartOffset = new Int32Array(nodeCount + 1)
  for (let offset = 0; offset < nodeCount; offset++) {
    immediateDominateeOrdinalToStartOffset[offset + 1] =
      immediateDominateeOrdinalToStartOffset[offset]! +
      dominatorOrdinalToDominateeCount[offset]!
  }
  const offsetToImmediateDominateeOrdinal = new Int32Array(
    immediateDominateeOrdinalToStartOffset[nodeCount]!,
  )
  dominatorOrdinalToDominateeCount.fill(0)
  for (let nodeOrdinal = 1; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const dominatorOrdinal = ordinalToImmediateDominatorOrdinal[nodeOrdinal]!
    if (dominatorOrdinal !== -1) {
      offsetToImmediateDominateeOrdinal[
        immediateDominateeOrdinalToStartOffset[dominatorOrdinal]! +
          dominatorOrdinalToDominateeCount[dominatorOrdinal]!
      ] = nodeOrdinal
      dominatorOrdinalToDominateeCount[dominatorOrdinal]!++
    }
  }

  return {
    dfsIndexToOrdinal,
    ordinalToImmediateDominatorOrdinal,
    immediateDominateeOrdinalToStartOffset,
    offsetToImmediateDominateeOrdinal,
  }
}
