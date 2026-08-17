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
 * Prefix-sums per-node counts into CSR start offsets, with one extra trailing
 * entry holding the total.
 */
export const computeStartOffsets = (ordinalToCount: Int32Array): Int32Array => {
  const ordinalToStartOffset = new Int32Array(ordinalToCount.length + 1)
  for (let i = 0; i < ordinalToCount.length; i++) {
    ordinalToStartOffset[i + 1] = ordinalToStartOffset[i]! + ordinalToCount[i]!
  }
  return ordinalToStartOffset
}

/**
 * Builds a {@link NodeAdjacencyGraph} from successor lists already grouped by
 * the node holding each edge, scattering the predecessor side from them.
 *
 * The successor lists are kept as they are, so the graph reports the caller's
 * edge order.
 */
export const nodeAdjacencyGraphFromSuccessors = (
  ordinalToSuccessorCount: Int32Array,
  offsetToSuccessorOrdinal: Int32Array,
  offsetToSuccessorEdgeIndex: Int32Array,
): NodeAdjacencyGraph => {
  const nodeCount = ordinalToSuccessorCount.length
  const ordinalToSuccessorStartOffset = computeStartOffsets(
    ordinalToSuccessorCount,
  )

  const ordinalToPredecessorCount = new Int32Array(nodeCount)
  for (const successorOrdinal of offsetToSuccessorOrdinal) {
    ordinalToPredecessorCount[successorOrdinal]!++
  }
  const ordinalToPredecessorStartOffset = computeStartOffsets(
    ordinalToPredecessorCount,
  )

  // Reuse the predecessor count array as write cursors rather than allocating
  // a new one.
  const edgeCount = offsetToSuccessorOrdinal.length
  const offsetToPredecessorOrdinal = new Int32Array(edgeCount)
  const offsetToPredecessorEdgeIndex = new Int32Array(edgeCount)
  const ordinalToPredecessorCursor = ordinalToPredecessorCount
  ordinalToPredecessorCursor.fill(0)
  let successorOffset = 0
  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const successorEndOffset = ordinalToSuccessorStartOffset[nodeOrdinal + 1]!
    for (; successorOffset < successorEndOffset; successorOffset++) {
      const successorOrdinal = offsetToSuccessorOrdinal[successorOffset]!
      const predecessorOffset =
        ordinalToPredecessorStartOffset[successorOrdinal]! +
        ordinalToPredecessorCursor[successorOrdinal]!++
      offsetToPredecessorOrdinal[predecessorOffset] = nodeOrdinal
      offsetToPredecessorEdgeIndex[predecessorOffset] =
        offsetToSuccessorEdgeIndex[successorOffset]!
    }
  }

  return {
    ordinalToSuccessorStartOffset,
    offsetToSuccessorOrdinal,
    offsetToSuccessorEdgeIndex,
    ordinalToPredecessorStartOffset,
    offsetToPredecessorOrdinal,
    offsetToPredecessorEdgeIndex,
  }
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
   *
   * Only nodes reachable from the root have a DFS index, so its length is the
   * reachable node count rather than the node count.
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
 * Uses the semi-NCA dominator tree algorithm: Lengauer-Tarjan semidominators,
 * then immediate dominators from ancestor walks instead of buckets. After the
 * DFS, every table is indexed by DFS index rather than node ordinal. The
 * semidominator pass then reads each node's predecessor list contiguously, and
 * its ancestor walks read only the compact DFS-indexed arrays.
 *
 * @see https://en.wikipedia.org/wiki/Dominator_(graph_theory)
 * @see https://www.cs.princeton.edu/techreports/2005/737.pdf
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
  // Node 0 is the GC root super-node.
  const ordinalToImmediateDominatorOrdinal = new Int32Array(nodeCount).fill(-1)
  const dfsIndexToOrdinal = new Int32Array(nodeCount)

  // Step 1: Iterative DFS from node 0, assigning DFS indices and recording
  // each node's parent as a DFS index.
  const ordinalToDfsIndex = new Int32Array(nodeCount).fill(-1)
  const dfsIndexToParentDfsIndex = new Int32Array(nodeCount)
  ordinalToDfsIndex[0] = 0
  dfsIndexToOrdinal[0] = 0
  const dfsStackDfsIndices = new Int32Array(nodeCount)
  const dfsStackOffsets = new Int32Array(nodeCount)
  dfsStackOffsets[0] = ordinalToSuccessorStartOffset[0]!
  let dfsIndex = 1
  let dfsStackSize = 1
  do {
    const topOffset = dfsStackSize - 1
    const nodeDfsIndex = dfsStackDfsIndices[topOffset]!
    const nodeOrdinal = dfsIndexToOrdinal[nodeDfsIndex]!
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

    ordinalToDfsIndex[childOrdinal] = dfsIndex
    dfsIndexToOrdinal[dfsIndex] = childOrdinal
    dfsIndexToParentDfsIndex[dfsIndex] = nodeDfsIndex
    dfsStackDfsIndices[dfsStackSize] = dfsIndex
    dfsStackOffsets[dfsStackSize] = ordinalToSuccessorStartOffset[childOrdinal]!
    dfsIndex++
    dfsStackSize++
  } while (dfsStackSize > 0)
  const reachableCount = dfsIndex

  // Step 2: Rewrite the predecessor lists into DFS-index space, dropping
  // unreachable predecessors. Appending in DFS order builds the CSR lists in
  // one pass, and the semidominator pass then reads them forward.
  const dfsIndexToPredecessorStartOffset = new Int32Array(reachableCount + 1)
  const offsetToPredecessorDfsIndex = new Int32Array(
    ordinalToPredecessorStartOffset[nodeCount]!,
  )
  let predecessorCount = 0
  for (let toDfsIndex = 0; toDfsIndex < reachableCount; toDfsIndex++) {
    const nodeOrdinal = dfsIndexToOrdinal[toDfsIndex]!
    const endOffset = ordinalToPredecessorStartOffset[nodeOrdinal + 1]!
    for (
      let offset = ordinalToPredecessorStartOffset[nodeOrdinal]!;
      offset < endOffset;
      offset++
    ) {
      const predecessorDfsIndex =
        ordinalToDfsIndex[offsetToPredecessorOrdinal[offset]!]!
      if (predecessorDfsIndex !== -1) {
        offsetToPredecessorDfsIndex[predecessorCount++] = predecessorDfsIndex
      }
    }
    dfsIndexToPredecessorStartOffset[toDfsIndex + 1] = predecessorCount
  }

  // Step 3: Compute semidominators with path-compressed ancestor walks, all in
  // DFS-index space. `semi` values are DFS indices, and `label` contains the
  // node with the smallest semidominator on each compressed forest path.
  const semi = new Int32Array(reachableCount)
  const label = new Int32Array(reachableCount)
  for (let i = 0; i < reachableCount; i++) {
    semi[i] = i
    label[i] = i
  }
  const ancestor = new Int32Array(reachableCount).fill(-1)
  const compressionPath = new Int32Array(reachableCount)
  const compressAncestorPath = (startDfsIndex: number): void => {
    let pathLength = 0
    let current = startDfsIndex
    while (ancestor[current] !== -1 && ancestor[ancestor[current]!]! !== -1) {
      compressionPath[pathLength++] = current
      current = ancestor[current]!
    }

    for (let pathIndex = pathLength - 1; pathIndex >= 0; pathIndex--) {
      const pathDfsIndex = compressionPath[pathIndex]!
      const pathAncestor = ancestor[pathDfsIndex]!
      if (semi[label[pathAncestor]!]! < semi[label[pathDfsIndex]!]!) {
        label[pathDfsIndex] = label[pathAncestor]!
      }
      ancestor[pathDfsIndex] = ancestor[pathAncestor]!
    }
  }
  const minSemiAncestor = (dfsIndex: number): number => {
    if (ancestor[dfsIndex] === -1) {
      return dfsIndex
    }
    compressAncestorPath(dfsIndex)
    return label[dfsIndex]!
  }

  for (
    let nodeDfsIndex = reachableCount - 1;
    nodeDfsIndex >= 1;
    nodeDfsIndex--
  ) {
    const endOffset = dfsIndexToPredecessorStartOffset[nodeDfsIndex + 1]!
    for (
      let offset = dfsIndexToPredecessorStartOffset[nodeDfsIndex]!;
      offset < endOffset;
      offset++
    ) {
      const predecessorDfsIndex = offsetToPredecessorDfsIndex[offset]!
      const candidate = semi[minSemiAncestor(predecessorDfsIndex)]!
      if (candidate < semi[nodeDfsIndex]!) {
        semi[nodeDfsIndex] = candidate
      }
    }
    ancestor[nodeDfsIndex] = dfsIndexToParentDfsIndex[nodeDfsIndex]!
  }

  // Step 4: Derive immediate dominators in preorder. A node's immediate
  // dominator is the first node at or before its semidominator on its parent's
  // dominator chain. Earlier nodes' entries are already final.
  const dfsIndexToImmediateDominator = new Int32Array(reachableCount)
  for (let nodeDfsIndex = 1; nodeDfsIndex < reachableCount; nodeDfsIndex++) {
    let candidate = dfsIndexToParentDfsIndex[nodeDfsIndex]!
    const nodeSemi = semi[nodeDfsIndex]!
    while (candidate > nodeSemi) {
      candidate = dfsIndexToImmediateDominator[candidate]!
    }
    dfsIndexToImmediateDominator[nodeDfsIndex] = candidate
  }

  ordinalToImmediateDominatorOrdinal[0] = 0
  for (let nodeDfsIndex = 1; nodeDfsIndex < reachableCount; nodeDfsIndex++) {
    ordinalToImmediateDominatorOrdinal[dfsIndexToOrdinal[nodeDfsIndex]!] =
      dfsIndexToOrdinal[dfsIndexToImmediateDominator[nodeDfsIndex]!]!
  }

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
    dfsIndexToOrdinal: dfsIndexToOrdinal.subarray(0, reachableCount),
    ordinalToImmediateDominatorOrdinal,
    immediateDominateeOrdinalToStartOffset,
    offsetToImmediateDominateeOrdinal,
  }
}
