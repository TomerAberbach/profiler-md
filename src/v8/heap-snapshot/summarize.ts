import { formatLocation } from '../common.ts'
import type { NormalizedV8ProfileToMdOptions } from '../common.ts'
import type { HeapSnapshot, SnapshotMeta } from './parse.ts'

export type ObjectCategoryStats = {
  /** Size in bytes. */
  size: number

  /** Number of instances contributing to the size. */
  objectCount: number
}

export type SummarizedConstructorInstance = {
  /**
   * Unique ID for this constructor instance that can also be used as an index.
   */
  nodeOrdinal: number

  /** Bytes allocated for this constructor instance. */
  selfSize: number

  /**
   * Bytes allocated for this constructor instance, as well as all objects that
   * would be freed if the instance were garbage collected.
   */
  retainedSize: number
}

export type SummarizedConstructor = {
  /** The human readable name of the constructor. */
  name: string

  /**
   * A string describing the exact location where the constructor was defined.
   */
  location: string | undefined

  /** Bytes allocated for all instances of this constructor. */
  selfSize: number

  /**
   * Bytes allocated for all instances of this constructor, as well as all
   * objects that would be freed if the instances were garbage collected.
   */
  retainedSize: number

  /** Instances of this constructor and their sizes. */
  instances: SummarizedConstructorInstance[]
}

export type SummarizedString = {
  /** Unique ID for this string instance that can also be used as an index. */
  nodeOrdinal: number

  /** The string's value, possibly truncated. */
  value: string

  /** Bytes allocated for this string. */
  selfSize: number
}

export type SummarizedHeapSnapshot = {
  /** Total bytes allocated in the snapshot. */
  totalSize: number

  /** Number of objects allocated in the snapshot. */
  objectCount: number

  /** Number of references in the snapshot. */
  referenceCount: number

  /** Total bytes and count by object category. */
  objectCategoryToSizeStats: Map<string, ObjectCategoryStats>

  /** All summarized constructors. */
  constructors: SummarizedConstructor[]

  /** All summarized strings. */
  strings: SummarizedString[]

  /** Returns the retainer path of the node with the given ordinal. */
  retainerPathOf: (nodeOrdinal: number) => string
}

export const summarizeSnapshot = (
  snapshot: HeapSnapshot,
  options: NormalizedV8ProfileToMdOptions,
): SummarizedHeapSnapshot => {
  const {
    snapshot: { meta, node_count: objectCount, edge_count: referenceCount },
    nodes,
    strings,
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
  const objectCategoryToSizeStats = new Map<string, ObjectCategoryStats>()
  const constructors: SummarizedConstructor[] = []
  const nameToConstructorIndex = new Map<string, number>()
  const nodeOrdinalToConstructorIndex = new Int32Array(objectCount).fill(-1)
  const summarizedStrings: SummarizedString[] = []

  for (let nodeOrdinal = 0; nodeOrdinal < objectCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * fieldLayout.nodeFieldCount

    const selfSize = nodes[nodeIndex + fieldLayout.nodeSelfSizeOffset]!
    totalSize += selfSize

    const nodeType = nodes[nodeIndex + fieldLayout.nodeTypeOffset]!
    const category = nodeTypes[nodeType]!
    let categoryStats = objectCategoryToSizeStats.get(category)
    if (!categoryStats) {
      categoryStats = { size: 0, objectCount: 0 }
      objectCategoryToSizeStats.set(category, categoryStats)
    }
    categoryStats.size += selfSize
    categoryStats.objectCount++

    switch (nodeType) {
      case fieldLayout.nodeTypeObject:
      case fieldLayout.nodeTypeNative: {
        // For these types the names are constructors.
        const name = strings[nodes[nodeIndex + fieldLayout.nodeNameOffset]!]!
        let constructorIndex = nameToConstructorIndex.get(name)
        if (constructorIndex === undefined) {
          constructorIndex = constructors.length
          constructors.push({
            name,
            location: undefined,
            selfSize: 0,
            retainedSize: 0,
            instances: [],
          })
          nameToConstructorIndex.set(name, constructorIndex)
        }
        const constructor = constructors[constructorIndex]!
        constructor.selfSize += selfSize
        constructor.location ??= nodeIndexToLocation.get(nodeIndex)
        constructor.instances.push({
          nodeOrdinal,
          selfSize,
          retainedSize: nodeOrdinalToRetainedSize[nodeOrdinal]!,
        })
        nodeOrdinalToConstructorIndex[nodeOrdinal] = constructorIndex
        break
      }
      case fieldLayout.nodeTypeString:
      case fieldLayout.nodeTypeSlicedString:
      case fieldLayout.nodeTypeConcatenatedString: {
        // For these types the names are the strings.
        const string = strings[nodes[nodeIndex + fieldLayout.nodeNameOffset]!]!
        summarizedStrings.push({
          nodeOrdinal,
          value: string,
          selfSize,
        })
        break
      }
    }
  }

  attributeGroupRetainedSizes({
    nodeOrdinalToRetainedSize,
    ordinalToImmediateDominatorOrdinal:
      immediateDominatorGraph.ordinalToImmediateDominatorOrdinal,
    nodeOrdinalToConstructorIndex,
    constructors,
  })

  return {
    totalSize,
    objectCount,
    referenceCount,
    objectCategoryToSizeStats,
    constructors,
    strings: summarizedStrings,
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
  }
}

/**
 * @see https://en.wikipedia.org/wiki/Sparse_matrix#Compressed_sparse_row_(CSR,_CRS_or_Yale_format)
 */
type NodeAdjacencyGraph = {
  /**
   * Index is node ordinal and value is index in
   * {@link NodeAdjacencyGraph.offsetToSuccessorOrdinal} and
   * {@link NodeAdjacencyGraph.offsetToSuccessorEdgeIndex}.
   */
  ordinalToSuccessorStartOffset: Int32Array
  offsetToSuccessorOrdinal: Int32Array
  offsetToSuccessorEdgeIndex: Int32Array

  /**
   * Index is node ordinal and value is index in
   * {@link NodeAdjacencyGraph.offsetToPredecessorOrdinal} and
   * {@link NodeAdjacencyGraph.offsetToPredecessorEdgeIndex}.
   */
  ordinalToPredecessorStartOffset: Int32Array
  offsetToPredecessorOrdinal: Int32Array
  offsetToPredecessorEdgeIndex: Int32Array
}

const computeNodeAdjacencyGraph = (
  { snapshot: { node_count: nodeCount }, nodes, edges }: HeapSnapshot,
  fieldLayout: FieldLayout,
): NodeAdjacencyGraph => {
  // Pass 1: Count non-weak edges per source and per target node.
  const ordinalToSuccessorCount = new Int32Array(nodeCount)
  const ordinalToPredecessorCount = new Int32Array(nodeCount)
  let nodeEdgesStartIndex = 0
  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * fieldLayout.nodeFieldCount
    const edgeCount = nodes[nodeIndex + fieldLayout.nodeEdgeCountOffset]!
    for (let edgeOrdinal = 0; edgeOrdinal < edgeCount; edgeOrdinal++) {
      const edgeIndex =
        nodeEdgesStartIndex + edgeOrdinal * fieldLayout.edgeFieldCount
      if (
        edges[edgeIndex + fieldLayout.edgeTypeOffset] ===
        fieldLayout.edgeTypeWeak
      ) {
        continue
      }
      const targetNodeOrdinal =
        edges[edgeIndex + fieldLayout.edgeToNodeOffset]! /
        fieldLayout.nodeFieldCount
      ordinalToSuccessorCount[nodeOrdinal]!++
      ordinalToPredecessorCount[targetNodeOrdinal]!++
    }
    nodeEdgesStartIndex += edgeCount * fieldLayout.edgeFieldCount
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
    const edgeCount = nodes[nodeIndex + fieldLayout.nodeEdgeCountOffset]!
    for (let edgeOrdinal = 0; edgeOrdinal < edgeCount; edgeOrdinal++) {
      const edgeIndex =
        nodeEdgesStartIndex + edgeOrdinal * fieldLayout.edgeFieldCount
      if (
        edges[edgeIndex + fieldLayout.edgeTypeOffset] ===
        fieldLayout.edgeTypeWeak
      ) {
        continue
      }
      const targetNodeOrdinal =
        edges[edgeIndex + fieldLayout.edgeToNodeOffset]! /
        fieldLayout.nodeFieldCount

      const successorOffset =
        ordinalToSuccessorStartOffset[nodeOrdinal]! +
        ordinalToSuccessorCount[nodeOrdinal]!
      offsetToSuccessorOrdinal[successorOffset] = targetNodeOrdinal
      offsetToSuccessorEdgeIndex[successorOffset] = edgeIndex
      ordinalToSuccessorCount[nodeOrdinal]!++

      const predecessorOffset =
        ordinalToPredecessorStartOffset[targetNodeOrdinal]! +
        ordinalToPredecessorCount[targetNodeOrdinal]!
      offsetToPredecessorOrdinal[predecessorOffset] = nodeOrdinal
      offsetToPredecessorEdgeIndex[predecessorOffset] = edgeIndex
      ordinalToPredecessorCount[targetNodeOrdinal]!++
    }
    nodeEdgesStartIndex += edgeCount * fieldLayout.edgeFieldCount
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
  { nodes, edges, strings, locations }: HeapSnapshot,
  {
    ordinalToSuccessorStartOffset,
    offsetToSuccessorEdgeIndex,
  }: NodeAdjacencyGraph,
  fieldLayout: FieldLayout,
  options: NormalizedV8ProfileToMdOptions,
): Map<number, string> => {
  const followNamedEdge = (
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
      continue
    }

    const nodeIndex =
      locations[locationIndex + fieldLayout.locationObjectIndexOffset]!
    const nodeType = nodes[nodeIndex + fieldLayout.nodeTypeOffset]
    if (nodeType !== fieldLayout.nodeTypeClosure) {
      // Only closures have location url.
      continue
    }

    // Closure -> shared (SharedFunctionInfo) -> script (Script) → name (URL)
    const sharedNodeIndex = followNamedEdge(nodeIndex, `shared`)
    if (sharedNodeIndex === undefined) {
      continue
    }
    const scriptNodeIndex = followNamedEdge(sharedNodeIndex, `script`)
    if (scriptNodeIndex === undefined) {
      continue
    }
    const locationNodeIndex = followNamedEdge(scriptNodeIndex, `name`)
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

type ImmediateDominatorGraph = {
  ordinalToImmediateDominatorOrdinal: Int32Array
  dfsIndexToOrdinal: Int32Array
}

/**
 * Computes the immediate dominators of every object.
 *
 * Weak edges are excluded because they don't keep objects alive.
 *
 * Uses the Lengauer-Tarjan dominator tree algorithm.
 *
 * @see https://en.wikipedia.org/wiki/Dominator_(graph_theory)
 * @see https://www.cs.princeton.edu/courses/archive/fall03/cs528/handouts/a%20fast%20algorithm%20for%20finding.pdf
 */
const computeImmediateDominatorGraph = (
  snapshot: HeapSnapshot,
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
    dfsStackOffsets[topOffset] = dfsStackOffsets[topOffset]! + 1

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

  return {
    ordinalToImmediateDominatorOrdinal,
    dfsIndexToOrdinal,
  }
}

const computeNodeOrdinalToRetainedSize = (
  { nodes }: HeapSnapshot,
  {
    ordinalToImmediateDominatorOrdinal,
    dfsIndexToOrdinal,
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
    const dominatedNodeOrdinal = dfsIndexToOrdinal[dfsIndex]!
    nodeOrdinalToRetainedSize[
      ordinalToImmediateDominatorOrdinal[dominatedNodeOrdinal]!
    ]! += nodeOrdinalToRetainedSize[dominatedNodeOrdinal]!
  }

  return nodeOrdinalToRetainedSize
}

const computeRetainerPath = (
  nodeOrdinal: number,
  {
    snapshot: {
      meta: {
        node_types: [nodeTypes],
      },
    },
    nodes,
    edges,
    strings,
  }: HeapSnapshot,
  {
    ordinalToPredecessorStartOffset,
    offsetToPredecessorOrdinal,
    offsetToPredecessorEdgeIndex,
  }: NodeAdjacencyGraph,
  nodeIndexToLocation: Map<number, string>,
  { ordinalToImmediateDominatorOrdinal }: ImmediateDominatorGraph,
  fieldLayout: FieldLayout,
  options: NormalizedV8ProfileToMdOptions,
): string => {
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

    const targetNodeOrdinal = offsetToPredecessorOrdinal[predecessorOffset]!
    const edgeIndex = offsetToPredecessorEdgeIndex[predecessorOffset]!

    // Element edges store the numeric array index directly in `name_or_index`.
    // All other edge types store a string index.
    const edgeType = edges[edgeIndex + fieldLayout.edgeTypeOffset]!
    const edgeNameOrIndex =
      edges[edgeIndex + fieldLayout.edgeNameOrIndexOffset]!
    const edgeLabel =
      edgeType === fieldLayout.edgeTypeElement
        ? `[${edgeNameOrIndex}]`
        : `.${strings[edgeNameOrIndex]!}`

    const retainerIndex = targetNodeOrdinal * fieldLayout.nodeFieldCount
    const retainerType = nodes[retainerIndex + fieldLayout.nodeTypeOffset]!
    const rawRetainerName =
      strings[nodes[retainerIndex + fieldLayout.nodeNameOffset]!]! ||
      nodeTypes[retainerType]!
    const retainerName =
      // Sometimes the retainer name is a file URL.
      formatLocation(rawRetainerName, options) ?? rawRetainerName
    const retainerLocation = nodeIndexToLocation.get(retainerIndex)

    hops.push({
      label: `${edgeLabel} ${retainerName}${
        retainerLocation ? ` (${retainerLocation})` : ``
      }`,
      internal:
        retainerType === fieldLayout.nodeTypeSynthetic ||
        retainerType === fieldLayout.nodeTypeHidden,
    })
    nodeOrdinal = targetNodeOrdinal
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
const attributeGroupRetainedSizes = ({
  nodeOrdinalToRetainedSize,
  ordinalToImmediateDominatorOrdinal,
  nodeOrdinalToConstructorIndex,
  constructors,
}: {
  nodeOrdinalToRetainedSize: Float64Array
  ordinalToImmediateDominatorOrdinal: Int32Array
  nodeOrdinalToConstructorIndex: Int32Array
  constructors: SummarizedConstructor[]
}): void => {
  const nodeCount = ordinalToImmediateDominatorOrdinal.length

  // Build CSR children list from the dominator tree.
  const childCounts = new Int32Array(nodeCount)
  for (let nodeOrdinal = 1; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const dominatorOrdinal = ordinalToImmediateDominatorOrdinal[nodeOrdinal]!
    if (dominatorOrdinal !== -1) {
      childCounts[dominatorOrdinal] = childCounts[dominatorOrdinal]! + 1
    }
  }
  const childStartOffsets = new Int32Array(nodeCount + 1)
  for (let i = 0; i < nodeCount; i++) {
    childStartOffsets[i + 1] = childStartOffsets[i]! + childCounts[i]!
  }
  const childOrdinals = new Int32Array(childStartOffsets[nodeCount]!)
  childCounts.fill(0)
  for (let nodeOrdinal = 1; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const dominatorOrdinal = ordinalToImmediateDominatorOrdinal[nodeOrdinal]!
    if (dominatorOrdinal !== -1) {
      childOrdinals[
        childStartOffsets[dominatorOrdinal]! + childCounts[dominatorOrdinal]!
      ] = nodeOrdinal
      childCounts[dominatorOrdinal] = childCounts[dominatorOrdinal]! + 1
    }
  }

  // Track same-group ancestor depth. Only the outermost (depth=0) instance
  // on any root-to-leaf path contributes its retained size.
  const groupPathDepth = new Int32Array(constructors.length)

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
      const constructorIndex = nodeOrdinalToConstructorIndex[nodeOrdinal]!
      if (constructorIndex !== -1) {
        groupPathDepth[constructorIndex] = groupPathDepth[constructorIndex]! - 1
      }
      continue
    }

    const nodeOrdinal = encodedNodeOrdinal
    const constructorIndex = nodeOrdinalToConstructorIndex[nodeOrdinal]!
    if (constructorIndex !== -1) {
      const depth = groupPathDepth[constructorIndex]!
      if (depth === 0) {
        constructors[constructorIndex]!.retainedSize +=
          nodeOrdinalToRetainedSize[nodeOrdinal]!
      }
      groupPathDepth[constructorIndex] = depth + 1
      stack[topOffset++] = ~nodeOrdinal
    }

    const childStart = childStartOffsets[nodeOrdinal]!
    const childEnd = childStartOffsets[nodeOrdinal + 1]!
    for (let offset = childStart; offset < childEnd; offset++) {
      stack[topOffset++] = childOrdinals[offset]!
    }
  } while (topOffset > 0)
}

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

const computeFieldLayout = (meta: SnapshotMeta): FieldLayout => {
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
