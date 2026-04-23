import { formatLocation } from '../../../common.ts'
import type { NormalizedProfileToMdOptions } from '../../../common.ts'
import type { V8HeapSnapshot, V8HeapSnapshotMeta } from './parse.ts'

export type NodeCategoryStats = {
  /** Bytes allocated directly for nodes in this category. */
  size: number

  /** Number of nodes contributing to the size. */
  nodeCount: number
}

export type SummarizedSnapshotNode = {
  /** Unique ID for this node that can also be used as an index. */
  id: number

  /** A human readable label for this node. */
  name: string

  /** Bytes allocated directly for this node. */
  selfSize: number

  /**
   * Bytes allocated for this node, as well as all nodes that would be freed if
   * the node were garbage collected.
   */
  retainedSize: number

  /** The exact location where the node was defined. */
  location?: string
}

export type SummarizedConstructor = SummarizedSnapshotNode & {
  /** Instances of this constructor and their sizes. */
  instances: SummarizedSnapshotNode[]
}

export type SummarizedHeapSnapshot = {
  /** Total bytes allocated in the snapshot. */
  totalSize: number

  /** Number of nodes allocated in the snapshot. */
  nodeCount: number

  /** Number of edges between nodes in the snapshot. */
  edgeCount: number

  /** Size and count stats by {@link FieldLayout.nodeTypeOffset}. */
  nodeCategoryToStats: Map<string, NodeCategoryStats>

  constructors: SummarizedConstructor[]
  closures: SummarizedSnapshotNode[]
  strings: SummarizedSnapshotNode[]

  retainerPathOf: (nodeOrdinal: number) => string
  retainedNodesOf: (nodeOrdinal: number) => SummarizedSnapshotNode[]
}

export const summarizeV8HeapSnapshot = (
  snapshot: V8HeapSnapshot,
  options: NormalizedProfileToMdOptions,
): SummarizedHeapSnapshot => {
  const {
    snapshot: { meta, node_count: nodeCount, edge_count: edgeCount },
    nodes,
  } = snapshot
  const [nodeTypes] = meta.node_types

  const fieldLayout = computeFieldLayout(meta)
  const nodeAdjacencyGraph = computeNodeAdjacencyGraph(snapshot, fieldLayout)
  const nodeIndexToLocation = computeNodeIndexToLocation(
    snapshot,
    nodeAdjacencyGraph,
    fieldLayout,
    options,
  )
  const immediateDominatorGraph = computeImmediateDominatorGraph(
    snapshot,
    nodeAdjacencyGraph,
  )
  const nodeOrdinalToRetainedSize = computeNodeOrdinalToRetainedSize(
    snapshot,
    immediateDominatorGraph,
    fieldLayout,
  )

  let totalSize = 0
  const nodeCategoryToStats = new Map<string, NodeCategoryStats>()
  const constructors: SummarizedConstructor[] = []
  const nameToConstructorIndex = new Map<string, number>()
  const nodeOrdinalToConstructorIndex = new Int32Array(nodeCount).fill(-1)
  const closures: SummarizedSnapshotNode[] = []
  const strings: SummarizedSnapshotNode[] = []

  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * fieldLayout.nodeFieldCount

    // Node size
    const selfSize = nodes[nodeIndex + fieldLayout.nodeSelfSizeOffset]!
    totalSize += selfSize

    // Node category stats
    const nodeType = nodes[nodeIndex + fieldLayout.nodeTypeOffset]!
    const category = nodeTypes[nodeType]!
    let categoryStats = nodeCategoryToStats.get(category)
    if (!categoryStats) {
      categoryStats = { size: 0, nodeCount: 0 }
      nodeCategoryToStats.set(category, categoryStats)
    }
    categoryStats.size += selfSize
    categoryStats.nodeCount++

    // Summarized snapshot nodes
    switch (nodeType) {
      case fieldLayout.nodeTypeObject:
      case fieldLayout.nodeTypeNative: {
        const name = formatNodeLabel(nodeIndex, snapshot, fieldLayout, options)
        let constructorIndex = nameToConstructorIndex.get(name)
        let constructor: SummarizedConstructor
        if (constructorIndex === undefined) {
          constructorIndex = constructors.length
          constructor = {
            id: nodeOrdinal,
            name,
            location: undefined,
            selfSize: 0,
            retainedSize: 0,
            instances: [],
          }
          constructors.push(constructor)
          nameToConstructorIndex.set(name, constructorIndex)
        } else {
          constructor = constructors[constructorIndex]!
        }

        constructor.selfSize += selfSize
        constructor.location ??= nodeIndexToLocation.get(nodeIndex)
        constructor.instances.push({
          id: nodeOrdinal,
          name: constructor.name,
          selfSize,
          retainedSize: nodeOrdinalToRetainedSize[nodeOrdinal]!,
          location: constructor.location,
        })
        nodeOrdinalToConstructorIndex[nodeOrdinal] = constructorIndex
        break
      }
      case fieldLayout.nodeTypeClosure:
        closures.push({
          id: nodeOrdinal,
          name: formatNodeLabel(nodeIndex, snapshot, fieldLayout, options),
          selfSize,
          retainedSize: nodeOrdinalToRetainedSize[nodeOrdinal]!,
          location: nodeIndexToLocation.get(nodeIndex),
        })
        break
      case fieldLayout.nodeTypeString:
      case fieldLayout.nodeTypeSlicedString:
      case fieldLayout.nodeTypeConcatenatedString:
        strings.push({
          id: nodeOrdinal,
          name: formatNodeLabel(nodeIndex, snapshot, fieldLayout, options),
          selfSize,
          retainedSize: selfSize,
        })
        break
    }
  }

  attributeGroupRetainedSizes(
    nodeOrdinalToRetainedSize,
    immediateDominatorGraph,
    nodeOrdinalToConstructorIndex,
    constructors,
  )

  return {
    totalSize,
    nodeCount,
    edgeCount,
    nodeCategoryToStats,
    constructors,
    closures,
    strings,
    retainerPathOf: nodeOrdinal =>
      computeRetainerPath(
        nodeOrdinal,
        snapshot,
        nodeAdjacencyGraph,
        nodeIndexToLocation,
        immediateDominatorGraph,
        fieldLayout,
        options,
      ),
    retainedNodesOf: nodeOrdinal =>
      computeRetainedNodes(
        nodeOrdinal,
        snapshot,
        nodeOrdinalToRetainedSize,
        immediateDominatorGraph,
        fieldLayout,
        options,
      ),
  }
}

/**
 * A successor and predecessor graph between heap snapshot nodes in CSR format.
 *
 * @see https://en.wikipedia.org/wiki/Sparse_matrix#Compressed_sparse_row_(CSR,_CRS_or_Yale_format)
 */
type NodeAdjacencyGraph = {
  /**
   * Start offset into
   * {@link ImmediateDominatorGraph.offsetToSuccessorOrdinal} and
   * {@link ImmediateDominatorGraph.offsetToSuccessorEdgeIndex} for each
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

const computeNodeAdjacencyGraph = (
  { snapshot: { node_count: nodeCount }, nodes, edges }: V8HeapSnapshot,
  fieldLayout: FieldLayout,
): NodeAdjacencyGraph => {
  // Pass 1: Count non-weak edges per source and per target node.
  const ordinalToSuccessorCount = new Int32Array(nodeCount)
  const ordinalToPredecessorCount = new Int32Array(nodeCount)
  let nodeEdgesStartIndex = 0
  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * fieldLayout.nodeFieldCount
    const nodeEdgeCount = nodes[nodeIndex + fieldLayout.nodeEdgeCountOffset]!
    for (let edgeOrdinal = 0; edgeOrdinal < nodeEdgeCount; edgeOrdinal++) {
      const edgeIndex =
        nodeEdgesStartIndex + edgeOrdinal * fieldLayout.edgeFieldCount
      const edgeType = edges[edgeIndex + fieldLayout.edgeTypeOffset]!
      if (edgeType === fieldLayout.edgeTypeWeak) {
        // Ignore weak edges since they don't affect retainment.
        continue
      }

      const successorOrdinal =
        edges[edgeIndex + fieldLayout.edgeToNodeOffset]! /
        fieldLayout.nodeFieldCount
      ordinalToSuccessorCount[nodeOrdinal]!++
      ordinalToPredecessorCount[successorOrdinal]!++
    }
    nodeEdgesStartIndex += nodeEdgeCount * fieldLayout.edgeFieldCount
  }

  // Build prefix-sum offset arrays.
  const ordinalToSuccessorStartOffset = new Int32Array(nodeCount + 1)
  const ordinalToPredecessorStartOffset = new Int32Array(nodeCount + 1)
  for (let i = 0; i < nodeCount; i++) {
    ordinalToSuccessorStartOffset[i + 1] =
      ordinalToSuccessorStartOffset[i]! + ordinalToSuccessorCount[i]!
    ordinalToPredecessorStartOffset[i + 1] =
      ordinalToPredecessorStartOffset[i]! + ordinalToPredecessorCount[i]!
  }
  const totalEdges = ordinalToSuccessorStartOffset[nodeCount]!

  const offsetToSuccessorOrdinal = new Int32Array(totalEdges)
  const offsetToSuccessorEdgeIndex = new Int32Array(totalEdges)
  const offsetToPredecessorOrdinal = new Int32Array(totalEdges)
  const offsetToPredecessorEdgeIndex = new Int32Array(totalEdges)

  // Pass 2: Fill CSR arrays (reuse count arrays as write cursors).
  ordinalToSuccessorCount.fill(0)
  ordinalToPredecessorCount.fill(0)
  nodeEdgesStartIndex = 0
  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * fieldLayout.nodeFieldCount
    const nodeEdgeCount = nodes[nodeIndex + fieldLayout.nodeEdgeCountOffset]!
    for (let edgeOrdinal = 0; edgeOrdinal < nodeEdgeCount; edgeOrdinal++) {
      const edgeIndex =
        nodeEdgesStartIndex + edgeOrdinal * fieldLayout.edgeFieldCount
      const edgeType = edges[edgeIndex + fieldLayout.edgeTypeOffset]!
      if (edgeType === fieldLayout.edgeTypeWeak) {
        // Ignore weak edges since they don't affect retainment.
        continue
      }

      const successorOrdinal =
        edges[edgeIndex + fieldLayout.edgeToNodeOffset]! /
        fieldLayout.nodeFieldCount

      const successorOffset =
        ordinalToSuccessorStartOffset[nodeOrdinal]! +
        ordinalToSuccessorCount[nodeOrdinal]!
      offsetToSuccessorOrdinal[successorOffset] = successorOrdinal
      offsetToSuccessorEdgeIndex[successorOffset] = edgeIndex
      ordinalToSuccessorCount[nodeOrdinal]!++

      const predecessorOffset =
        ordinalToPredecessorStartOffset[successorOrdinal]! +
        ordinalToPredecessorCount[successorOrdinal]!
      offsetToPredecessorOrdinal[predecessorOffset] = nodeOrdinal
      offsetToPredecessorEdgeIndex[predecessorOffset] = edgeIndex
      ordinalToPredecessorCount[successorOrdinal]!++
    }
    nodeEdgesStartIndex += nodeEdgeCount * fieldLayout.edgeFieldCount
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

const computeNodeIndexToLocation = (
  { nodes, edges, strings, locations }: V8HeapSnapshot,
  {
    ordinalToSuccessorStartOffset,
    offsetToSuccessorEdgeIndex,
  }: NodeAdjacencyGraph,
  fieldLayout: FieldLayout,
  options: NormalizedProfileToMdOptions,
): Map<number, string> => {
  const namedEdgeToNodeIndex = (
    nodeIndex: number,
    targetEdgeName: string,
  ): number | undefined => {
    const nodeOrdinal = nodeIndex / fieldLayout.nodeFieldCount
    const successorStartOffset = ordinalToSuccessorStartOffset[nodeOrdinal]!
    const successorEndOffset = ordinalToSuccessorStartOffset[nodeOrdinal + 1]!
    for (
      let successorOffset = successorStartOffset;
      successorOffset < successorEndOffset;
      successorOffset++
    ) {
      const edgeIndex = offsetToSuccessorEdgeIndex[successorOffset]!
      const edgeName =
        strings[edges[edgeIndex + fieldLayout.edgeNameOrIndexOffset]!]!
      if (edgeName === targetEdgeName) {
        return edges[edgeIndex + fieldLayout.edgeToNodeOffset]!
      }
    }
    return undefined
  }

  const scriptIdToFileLocation = new Map<number, string>()
  for (
    let locationIndex = 0;
    locationIndex < locations.length;
    locationIndex += fieldLayout.locationFieldCount
  ) {
    const scriptId =
      locations[locationIndex + fieldLayout.locationScriptIdOffset]!
    if (scriptIdToFileLocation.has(scriptId)) {
      // We already found the file location for this script ID.
      continue
    }

    const nodeIndex =
      locations[locationIndex + fieldLayout.locationObjectIndexOffset]!
    const nodeType = nodes[nodeIndex + fieldLayout.nodeTypeOffset]
    if (nodeType !== fieldLayout.nodeTypeClosure) {
      // Only closures have location urls.
      continue
    }

    // "shared" (`SharedFunctionInfo`) -> "script" (`Script`) → "name" (`URL`)
    const sharedNodeIndex = namedEdgeToNodeIndex(nodeIndex, `shared`)
    if (sharedNodeIndex === undefined) {
      continue
    }
    const scriptNodeIndex = namedEdgeToNodeIndex(sharedNodeIndex, `script`)
    if (scriptNodeIndex === undefined) {
      continue
    }
    const locationNodeIndex = namedEdgeToNodeIndex(scriptNodeIndex, `name`)
    if (locationNodeIndex === undefined) {
      continue
    }
    const location =
      strings[nodes[locationNodeIndex + fieldLayout.nodeNameOffset]!]
    if (!location) {
      continue
    }

    const fileLocation = formatLocation(location, options)
    if (fileLocation) {
      scriptIdToFileLocation.set(scriptId, fileLocation)
    }
  }

  // This must be a separate loop from the above because it's possible a file
  // location is reachable from one node, but not another, even though they
  // share the same script ID.
  const nodeIndexToLocation = new Map<number, string>()
  for (
    let locationIndex = 0;
    locationIndex < locations.length;
    locationIndex += fieldLayout.locationFieldCount
  ) {
    const scriptId =
      locations[locationIndex + fieldLayout.locationScriptIdOffset]!
    const fileLocation = scriptIdToFileLocation.get(scriptId)
    if (!fileLocation) {
      continue
    }

    const nodeIndex =
      locations[locationIndex + fieldLayout.locationObjectIndexOffset]!
    const line = locations[locationIndex + fieldLayout.locationLineOffset]!
    const column = locations[locationIndex + fieldLayout.locationColumnOffset]!
    nodeIndexToLocation.set(
      nodeIndex,
      `${fileLocation}:${line + 1}:${column + 1}`,
    )
  }

  return nodeIndexToLocation
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
type ImmediateDominatorGraph = {
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
 * Weak edges are excluded because they don't keep nodes alive.
 *
 * Uses the Lengauer-Tarjan dominator tree algorithm.
 *
 * @see https://en.wikipedia.org/wiki/Dominator_(graph_theory)
 * @see https://www.cs.princeton.edu/courses/archive/fall03/cs528/handouts/a%20fast%20algorithm%20for%20finding.pdf
 */
const computeImmediateDominatorGraph = (
  snapshot: V8HeapSnapshot,
  {
    ordinalToSuccessorStartOffset,
    offsetToSuccessorOrdinal,
    ordinalToPredecessorStartOffset,
    offsetToPredecessorOrdinal,
  }: NodeAdjacencyGraph,
): ImmediateDominatorGraph => {
  const {
    snapshot: { node_count: nodeCount },
  } = snapshot

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
  const ordinalToMinSemiAncestorOrdinal = Int32Array.from(
    { length: nodeCount },
    (_, index) => index,
  )
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

const computeNodeOrdinalToRetainedSize = (
  { nodes }: V8HeapSnapshot,
  {
    dfsIndexToOrdinal,
    ordinalToImmediateDominatorOrdinal,
  }: ImmediateDominatorGraph,
  { nodeFieldCount, nodeSelfSizeOffset }: FieldLayout,
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
    const selfSize = nodes[nodeOrdinal * nodeFieldCount + nodeSelfSizeOffset]!
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

const computeRetainerPath = (
  nodeOrdinal: number,
  snapshot: V8HeapSnapshot,
  {
    ordinalToPredecessorStartOffset,
    offsetToPredecessorOrdinal,
    offsetToPredecessorEdgeIndex,
  }: NodeAdjacencyGraph,
  nodeIndexToLocation: Map<number, string>,
  { ordinalToImmediateDominatorOrdinal }: ImmediateDominatorGraph,
  fieldLayout: FieldLayout,
  options: NormalizedProfileToMdOptions,
): string => {
  const { nodes } = snapshot

  // Each hop tracks the formatted label and whether the retaining node is
  // internal. Stored from immediate retainer outward (closest first).
  type Hop = { label: string; internal: boolean }
  const hops: Hop[] = []

  while (true) {
    const predecessorStartOffset = ordinalToPredecessorStartOffset[nodeOrdinal]!
    const predecessorEndOffset =
      ordinalToPredecessorStartOffset[nodeOrdinal + 1]!
    if (predecessorStartOffset === predecessorEndOffset) {
      break
    }

    const dominatorOrdinal = ordinalToImmediateDominatorOrdinal[nodeOrdinal]!
    let predecessorOffset = -1
    for (
      let offset = predecessorStartOffset;
      offset < predecessorEndOffset;
      offset++
    ) {
      if (offsetToPredecessorOrdinal[offset] === dominatorOrdinal) {
        predecessorOffset = offset
        break
      }
    }
    if (predecessorOffset === -1) {
      nodeOrdinal = dominatorOrdinal
      continue
    }

    const edgeIndex = offsetToPredecessorEdgeIndex[predecessorOffset]!
    const edgeLabel = formatEdgeLabel(edgeIndex, snapshot, fieldLayout, options)

    const predecessorOrdinal = offsetToPredecessorOrdinal[predecessorOffset]!
    const retainerIndex = predecessorOrdinal * fieldLayout.nodeFieldCount
    const retainerType = nodes[retainerIndex + fieldLayout.nodeTypeOffset]!
    const retainerLabel = formatNodeLabel(
      retainerIndex,
      snapshot,
      fieldLayout,
      options,
    )
    const retainerLocation = nodeIndexToLocation.get(retainerIndex)

    hops.push({
      label: `${edgeLabel} ${retainerLabel}${
        retainerLocation ? ` (${retainerLocation})` : ``
      }`,
      internal: isInternalNodeType(retainerType, fieldLayout),
    })
    nodeOrdinal = predecessorOrdinal
  }

  // Trim trailing internal hops. These are V8 pseudo-nodes (GC roots, stack
  // roots, global handles, etc.) that never point to user code.
  while (hops.at(-1)?.internal) {
    hops.pop()
  }

  if (hops.length === 0) {
    return `(GC root)`
  }

  return hops.map(hop => hop.label).join(` ← `)
}

const computeRetainedNodes = (
  nodeOrdinal: number,
  snapshot: V8HeapSnapshot,
  nodeOrdinalToRetainedSize: Float64Array,
  {
    immediateDominateeOrdinalToStartOffset,
    offsetToImmediateDominateeOrdinal,
  }: ImmediateDominatorGraph,
  fieldLayout: FieldLayout,
  options: NormalizedProfileToMdOptions,
) => {
  const { nodes } = snapshot

  const retainedNodes: SummarizedSnapshotNode[] = []

  const dominateeOrdinals: number[] = []
  const childStartOffset = immediateDominateeOrdinalToStartOffset[nodeOrdinal]!
  const childEndOffset =
    immediateDominateeOrdinalToStartOffset[nodeOrdinal + 1]!
  for (let offset = childStartOffset; offset < childEndOffset; offset++) {
    dominateeOrdinals.push(offsetToImmediateDominateeOrdinal[offset]!)
  }

  while (dominateeOrdinals.length > 0) {
    const nodeOrdinal = dominateeOrdinals.pop()!
    const nodeIndex = nodeOrdinal * fieldLayout.nodeFieldCount
    const nodeType = nodes[nodeIndex + fieldLayout.nodeTypeOffset]!
    if (!isInternalNodeType(nodeType, fieldLayout)) {
      retainedNodes.push({
        id: nodeOrdinal,
        name: formatNodeLabel(nodeIndex, snapshot, fieldLayout, options),
        selfSize: nodes[nodeIndex + fieldLayout.nodeSelfSizeOffset]!,
        retainedSize: nodeOrdinalToRetainedSize[nodeOrdinal]!,
      })
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
      dominateeOrdinals.push(offsetToImmediateDominateeOrdinal[offset]!)
    }
  }

  return retainedNodes
}

const isInternalNodeType = (
  nodeType: number,
  fieldLayout: FieldLayout,
): boolean =>
  nodeType === fieldLayout.nodeTypeHidden ||
  nodeType === fieldLayout.nodeTypeSynthetic

const formatEdgeLabel = (
  edgeIndex: number,
  { edges, strings }: V8HeapSnapshot,
  fieldLayout: FieldLayout,
  options: NormalizedProfileToMdOptions,
) => {
  const edgeType = edges[edgeIndex + fieldLayout.edgeTypeOffset]!
  const edgeNameOrIndex = edges[edgeIndex + fieldLayout.edgeNameOrIndexOffset]!
  if (edgeType === fieldLayout.edgeTypeElement) {
    // In this case, the edge name is an index.
    return `[${edgeNameOrIndex}]`
  }

  const rawEdgeName = strings[edgeNameOrIndex]!
  const edgeName =
    // Sometimes the edge name is a file URL.
    formatLocation(rawEdgeName, options) ?? rawEdgeName

  return `.${edgeName}`
}

const formatNodeLabel = (
  nodeIndex: number,
  {
    snapshot: {
      meta: {
        node_types: [nodeTypes],
      },
    },
    nodes,
    strings,
  }: V8HeapSnapshot,
  fieldLayout: FieldLayout,
  options: NormalizedProfileToMdOptions,
): string => {
  const nodeType = nodes[nodeIndex + fieldLayout.nodeTypeOffset]!
  switch (nodeType) {
    case fieldLayout.nodeTypeString:
    case fieldLayout.nodeTypeSlicedString:
    case fieldLayout.nodeTypeConcatenatedString: {
      const string = strings[nodes[nodeIndex + fieldLayout.nodeNameOffset]!]!
      return formatString(string)
    }
    case fieldLayout.nodeTypeClosure:
      return (
        strings[nodes[nodeIndex + fieldLayout.nodeNameOffset]!]! ||
        `(anonymous)`
      )
    default: {
      const rawNodeName =
        strings[nodes[nodeIndex + fieldLayout.nodeNameOffset]!]! ||
        nodeTypes[nodeType]!
      return (
        // Sometimes the node name is a file URL.
        formatLocation(rawNodeName, options) ?? rawNodeName
      )
    }
  }
}

const formatString = (string: string): string => {
  if (string.length > MAX_STRING_LENGTH) {
    string = `${string.slice(0, MAX_STRING_LENGTH - 1)}…`
  }
  return string.replaceAll(`\n`, `\\n`)
}

const MAX_STRING_LENGTH = 50

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
const attributeGroupRetainedSizes = (
  nodeOrdinalToRetainedSize: Float64Array,
  {
    immediateDominateeOrdinalToStartOffset,
    offsetToImmediateDominateeOrdinal,
  }: ImmediateDominatorGraph,
  nodeOrdinalToSummarizedNodeIndex: Int32Array,
  summarizedNodes: SummarizedSnapshotNode[],
): void => {
  const nodeCount = nodeOrdinalToRetainedSize.length

  // Track same-group ancestor depth. Only the outermost (depth=0) instance
  // on any root-to-leaf path contributes its retained size.
  const groupPathDepth = new Int32Array(summarizedNodes.length)

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
      const constructorIndex = nodeOrdinalToSummarizedNodeIndex[nodeOrdinal]!
      if (constructorIndex !== -1) {
        groupPathDepth[constructorIndex] = groupPathDepth[constructorIndex]! - 1
      }
      continue
    }

    const nodeOrdinal = encodedNodeOrdinal
    const summarizedNodeIndex = nodeOrdinalToSummarizedNodeIndex[nodeOrdinal]!
    if (summarizedNodeIndex !== -1) {
      const depth = groupPathDepth[summarizedNodeIndex]!
      if (depth === 0) {
        summarizedNodes[summarizedNodeIndex]!.retainedSize +=
          nodeOrdinalToRetainedSize[nodeOrdinal]!
      }
      groupPathDepth[summarizedNodeIndex] = depth + 1
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

/** Sentinel offsets and values for accessing data in a {@link V8HeapSnapshot}. */
type FieldLayout = {
  /**
   * The category of heap object.
   *
   * One of `object` (plain JS object), `closure` (function), `native`
   * (DOM-allocated), `array` (internal V8 array), `hidden` (V8 internal),
   * `string`, `regexp`, `number`, `symbol`, and `bigint`.
   */
  nodeTypeOffset: number

  /**
   * A human-readable label for the node.
   *
   * For plain objects this is the constructor name (e.g. `Array`), for strings
   * it is the string value itself, and for closures it is the function name.
   */
  nodeNameOffset: number

  /**
   * Bytes held exclusively by this object, not counting objects it references.
   */
  nodeSelfSizeOffset: number

  /**
   * How many outgoing references this node has.
   *
   * The node's edges occupy the next `edge_count * edgeFieldCount` slots in the
   * flat `edges` array, immediately following the edges of the previous node.
   */
  nodeEdgeCountOffset: number

  /**
   * Whether the node is reachable from the `window` global.
   *
   * `0` = attached (reachable) and `1` = detached (unreachable from `window`).
   */
  nodeDetachednessOffset: number

  /**
   * Number of fields per node entry
   *
   * Used to stride through the flat `nodes` array.
   */
  nodeFieldCount: number

  /**
   * How the edge relates to its parent node.
   *
   * One of `property` (named JS property), `element` (numeric array index),
   * `internal` (V8-internal slot not visible in JS), `weak` (weak reference),
   * `hidden`, and `shortcut`.
   */
  edgeTypeOffset: number

  /**
   * The label identifying which property or slot this edge represents.
   *
   * For named edges (`property`, `internal`, etc.) this is a string such as `x`
   * or `context`. For element edges it is the numeric array index.
   */
  edgeNameOrIndexOffset: number

  /**
   * The target node this edge points to, expressed as an offset into the flat
   * `nodes` array (i.e. `targetNodeIndex * nodeFieldCount`).
   */
  edgeToNodeOffset: number

  /**
   * Number of fields per edge entry.
   *
   * Used to stride through the flat `edges` array.
   */
  edgeFieldCount: number

  /**
   * Which node this location entry describes, as an offset into the flat
   * `nodes` array.
   */
  locationObjectIndexOffset: number

  /** ID of the script where the node was allocated. */
  locationScriptIdOffset: number

  /** 0-based line number within the script where the node was allocated. */
  locationLineOffset: number

  /** 0-based column number within the script where the node was allocated. */
  locationColumnOffset: number

  /**
   * Number of fields per location entry
   *
   * Used to stride through the flat `locations` array.
   */
  locationFieldCount: number

  /**
   * Numeric array index properties (e.g. `arr[0]`).
   *
   * The edge's `name_or_index` is the integer index.
   */
  edgeTypeElement: number

  /**
   * V8-internal references with no JS-visible name.
   *
   * e.g. a function's captured scope (`context`), hidden class (`map`), or
   * prototype chain slot.
   */
  edgeTypeInternal: number

  /**
   * Weak references that do not keep the target alive.
   *
   * Objects held only by weak edges can be garbage-collected, so these are
   * excluded from retainer path analysis.
   */
  edgeTypeWeak: number

  /** V8 internal object not visible in JS (e.g. hidden class, map). */
  nodeTypeHidden: number

  /** V8 internal fixed-length array (e.g. `FixedArray`). */
  nodeTypeArray: number

  /** JS string value. */
  nodeTypeString: number

  /** Plain JS object (constructor name is its class). */
  nodeTypeObject: number

  /** Compiled JS code (e.g. `BytecodeArray`, `Code`). */
  nodeTypeCode: number

  /** JS function/closure. */
  nodeTypeClosure: number

  /** JS `RegExp` instance. */
  nodeTypeRegexp: number

  /** JS number (boxed). */
  nodeTypeNumber: number

  /** Object allocated by native (C++) code, e.g. a DOM node. */
  nodeTypeNative: number

  /**
   * Synthetic root node that V8 uses as a GC entry-point super-node.
   *
   * Not a real heap object.
   */
  nodeTypeSynthetic: number

  /** String formed by concatenating two other strings (lazy, not yet flattened). */
  nodeTypeConcatenatedString: number

  /** String formed by slicing another string (lazy, shares backing store). */
  nodeTypeSlicedString: number

  /** JS `Symbol` value. */
  nodeTypeSymbol: number

  /** JS `BigInt` value. */
  nodeTypeBigint: number

  /** V8 object shape descriptor (hidden class / map metadata). */
  nodeTypeObjectShape: number
}

const computeFieldLayout = (meta: V8HeapSnapshotMeta): FieldLayout => {
  const {
    node_fields: nodeFields,
    node_types: [nodeTypes],
    edge_fields: edgeFields,
    edge_types: [edgeTypes],
    location_fields: locationFields,
  } = meta

  const nodeFieldToIndex = valueToIndex(nodeFields)
  const nodeTypeToIndex = valueToIndex(nodeTypes)
  const edgeFieldToIndex = valueToIndex(edgeFields)
  const locationFieldToIndex = valueToIndex(locationFields)
  const edgeTypeToIndex = valueToIndex(edgeTypes)

  return {
    nodeTypeOffset: nodeFieldToIndex.get(`type`)!,
    nodeNameOffset: nodeFieldToIndex.get(`name`)!,
    nodeSelfSizeOffset: nodeFieldToIndex.get(`self_size`)!,
    nodeEdgeCountOffset: nodeFieldToIndex.get(`edge_count`)!,
    nodeDetachednessOffset: nodeFieldToIndex.get(`detachedness`)!,
    nodeFieldCount: nodeFields.length,

    edgeTypeOffset: edgeFieldToIndex.get(`type`)!,
    edgeNameOrIndexOffset: edgeFieldToIndex.get(`name_or_index`)!,
    edgeToNodeOffset: edgeFieldToIndex.get(`to_node`)!,
    edgeFieldCount: edgeFields.length,

    locationObjectIndexOffset: locationFieldToIndex.get(`object_index`)!,
    locationScriptIdOffset: locationFieldToIndex.get(`script_id`)!,
    locationLineOffset: locationFieldToIndex.get(`line`)!,
    locationColumnOffset: locationFieldToIndex.get(`column`)!,
    locationFieldCount: locationFields.length,

    nodeTypeHidden: nodeTypeToIndex.get(`hidden`)!,
    nodeTypeArray: nodeTypeToIndex.get(`array`)!,
    nodeTypeString: nodeTypeToIndex.get(`string`)!,
    nodeTypeObject: nodeTypeToIndex.get(`object`)!,
    nodeTypeCode: nodeTypeToIndex.get(`code`)!,
    nodeTypeClosure: nodeTypeToIndex.get(`closure`)!,
    nodeTypeRegexp: nodeTypeToIndex.get(`regexp`)!,
    nodeTypeNumber: nodeTypeToIndex.get(`number`)!,
    nodeTypeNative: nodeTypeToIndex.get(`native`)!,
    nodeTypeSynthetic: nodeTypeToIndex.get(`synthetic`)!,
    nodeTypeConcatenatedString: nodeTypeToIndex.get(`concatenated string`)!,
    nodeTypeSlicedString: nodeTypeToIndex.get(`sliced string`)!,
    nodeTypeSymbol: nodeTypeToIndex.get(`symbol`)!,
    nodeTypeBigint: nodeTypeToIndex.get(`bigint`)!,
    nodeTypeObjectShape: nodeTypeToIndex.get(`object shape`)!,

    edgeTypeElement: edgeTypeToIndex.get(`element`)!,
    edgeTypeInternal: edgeTypeToIndex.get(`internal`)!,
    edgeTypeWeak: edgeTypeToIndex.get(`weak`)!,
  }
}

const valueToIndex = <T>(values: T[]): Map<T, number> =>
  new Map(values.map((value, index) => [value, index]))
