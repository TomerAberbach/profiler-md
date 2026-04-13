import { formatURL } from '../common.ts'
import type { NormalizedV8ProfileToMdOptions } from '../common.ts'
import type { HeapSnapshot, SnapshotMeta } from './parse.ts'

export type SummarizedConstructor = {
  name: string
  location: string | null
  selfSize: number
  retainedSize: number
  count: number

  instances: {
    selfSize: number
    retainedSize: number
  }[]
}

export type SummarizedHeapSnapshot = {
  /** Total bytes allocated in the snapshot. */
  totalSize: number

  /** Number of objects allocated in the snapshot. */
  objectCount: number

  /** Number of references in the snapshot. */
  referenceCount: number

  /** Total bytes and count by object category. */
  objectCategoryToSizeStats: Map<string, { size: number; count: number }>

  /** All summarized constructors. */
  constructors: SummarizedConstructor[]
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
  const fieldLayout = computeFieldLayout(meta)
  const immediateDominatorGraph = computeImmediateDominatorGraph(
    snapshot,
    fieldLayout,
  )
  const nodeOrdinalToRetainedSize = computeRetainedSizes(
    snapshot,
    immediateDominatorGraph,
    fieldLayout,
  )

  const nodeIndexToLocation = computeNodeIndexToLocation(
    snapshot,
    fieldLayout,
    options,
  )
  const [nodeTypes] = meta.node_types

  let totalSize = 0
  const objectCategoryToSizeStats = new Map<
    string,
    { size: number; count: number }
  >()
  const nameToConstructor = new Map<string, SummarizedConstructor>()
  const nodeOrdinalToConstructor = Array.from<
    SummarizedConstructor | undefined
  >({ length: objectCount })

  for (let nodeOrdinal = 0; nodeOrdinal < objectCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * fieldLayout.nodeFieldCount

    const selfSize = nodes[nodeIndex + fieldLayout.nodeSelfSizeOffset]!
    totalSize += selfSize

    const category = nodeTypes[nodes[nodeIndex + fieldLayout.nodeTypeOffset]!]!
    let categoryStats = objectCategoryToSizeStats.get(category)
    if (!categoryStats) {
      categoryStats = { size: 0, count: 0 }
      objectCategoryToSizeStats.set(category, categoryStats)
    }
    categoryStats.size += selfSize
    categoryStats.count++

    const name = strings[nodes[nodeIndex + fieldLayout.nodeNameOffset]!]!
    if (category === `object` || category === `native`) {
      // For these types the names are constructors.
      let constructor = nameToConstructor.get(name)
      if (!constructor) {
        constructor = {
          name,
          location: null,
          selfSize: 0,
          retainedSize: 0,
          count: 0,
          instances: [],
        }
        nameToConstructor.set(name, constructor)
      }
      constructor.selfSize += selfSize
      constructor.count++
      constructor.location ??= nodeIndexToLocation.get(nodeIndex) ?? null
      constructor.instances.push({
        selfSize,
        retainedSize: nodeOrdinalToRetainedSize[nodeOrdinal]!,
      })
      nodeOrdinalToConstructor[nodeOrdinal] = constructor
    }
  }

  attributeGroupRetainedSizes({
    nodeOrdinalToRetainedSize,
    ordinalToImmediateDominatorOrdinal:
      immediateDominatorGraph.ordinalToImmediateDominatorOrdinal,
    nodeOrdinalToGroup: nodeOrdinalToConstructor,
  })

  const constructors = [...nameToConstructor.values()]

  return {
    totalSize,
    objectCount,
    referenceCount,
    objectCategoryToSizeStats,
    constructors,
  }
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
  fieldLayout: FieldLayout,
): ImmediateDominatorGraph => {
  const {
    snapshot: { node_count: nodeCount },
    nodes,
    edges,
  } = snapshot
  const {
    nodeFieldCount,
    nodeEdgeCountOffset,
    edgeFieldCount,
    edgeToNodeOffset,
    edgeTypeOffset,
    edgeTypeWeak,
  } = fieldLayout

  // Build forward (children) and reverse (parents) adjacency lists, excluding
  // weak edges since they don't keep objects alive.
  const ordinalToChildOrdinals: number[][] = Array.from(
    { length: nodeCount },
    () => [],
  )
  const ordinalToPredecessorOrdinals: number[][] = Array.from(
    { length: nodeCount },
    () => [],
  )
  let nodeEdgeStartIndex = 0
  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * nodeFieldCount
    const edgeCount = nodes[nodeIndex + nodeEdgeCountOffset]!
    for (
      let nodeEdgeOrdinal = 0;
      nodeEdgeOrdinal < edgeCount;
      nodeEdgeOrdinal++
    ) {
      const nodeEdgeIndex =
        nodeEdgeStartIndex + nodeEdgeOrdinal * edgeFieldCount
      const edgeType = edges[nodeEdgeIndex + edgeTypeOffset]
      if (edgeType === edgeTypeWeak) {
        continue
      }

      const childNodeIndex = edges[nodeEdgeIndex + edgeToNodeOffset]!
      const childNodeOrdinal = childNodeIndex / nodeFieldCount
      ordinalToChildOrdinals[nodeOrdinal]!.push(childNodeOrdinal)
      ordinalToPredecessorOrdinals[childNodeOrdinal]!.push(nodeOrdinal)
    }
    nodeEdgeStartIndex += edgeCount * edgeFieldCount
  }

  // Lengauer-Tarjan dominator tree. Node 0 is the GC root super-node.
  const ordinalToDfsIndex = new Int32Array(nodeCount).fill(-1)
  const dfsIndexToOrdinal = new Int32Array(nodeCount)
  const ordinalToParentOrdinal = new Int32Array(nodeCount).fill(-1)
  const ordinalToSemidominatorDfsIndex = new Int32Array(nodeCount)
  const ordinalToImmediateDominatorOrdinal = new Int32Array(nodeCount).fill(-1)
  // Forest used in path compression.
  const ordinalToForestAncestorOrdinal = new Int32Array(nodeCount).fill(-1)
  const ordinalToMinSemiAncestorOrdinal = Int32Array.from(
    { length: nodeCount },
    (_, index) => index,
  )
  const ordinalToPendingOrdinals: number[][] = Array.from(
    { length: nodeCount },
    () => [],
  )

  // Step 1: Iterative DFS from node 0, assigning DFS indices.
  ordinalToDfsIndex[0] = 0
  ordinalToSemidominatorDfsIndex[0] = 0
  dfsIndexToOrdinal[0] = 0
  let dfsIndex = 1
  const dfsStack: { nodeOrdinal: number; nextChildIndex: number }[] = [
    { nodeOrdinal: 0, nextChildIndex: 0 },
  ]
  do {
    const frame = dfsStack.at(-1)!
    if (
      frame.nextChildIndex === ordinalToChildOrdinals[frame.nodeOrdinal]!.length
    ) {
      // Done processing this node's children.
      dfsStack.pop()
      continue
    }

    const childOrdinal =
      ordinalToChildOrdinals[frame.nodeOrdinal]![frame.nextChildIndex]!
    frame.nextChildIndex++
    if (ordinalToDfsIndex[childOrdinal] !== -1) {
      // Already assigned a DFS index.
      continue
    }

    ordinalToParentOrdinal[childOrdinal] = frame.nodeOrdinal
    ordinalToDfsIndex[childOrdinal] = dfsIndex
    ordinalToSemidominatorDfsIndex[childOrdinal] = dfsIndex
    dfsIndexToOrdinal[dfsIndex] = childOrdinal
    dfsIndex++
    dfsStack.push({ nodeOrdinal: childOrdinal, nextChildIndex: 0 })
  } while (dfsStack.length > 0)
  const reachableCount = dfsIndex

  const compressAncestorPath = (startNodeOrdinal: number): void => {
    const nodeOrdinalPath: number[] = []
    let nodeOrdinal = startNodeOrdinal
    while (
      ordinalToForestAncestorOrdinal[nodeOrdinal] !== -1 &&
      ordinalToForestAncestorOrdinal[
        ordinalToForestAncestorOrdinal[nodeOrdinal]!
      ] !== -1
    ) {
      nodeOrdinalPath.push(nodeOrdinal)
      nodeOrdinal = ordinalToForestAncestorOrdinal[nodeOrdinal]!
    }

    for (
      let pathIndex = nodeOrdinalPath.length - 1;
      pathIndex >= 0;
      pathIndex--
    ) {
      const pathNodeOrdinal = nodeOrdinalPath[pathIndex]!
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
  for (let dfsIndex = reachableCount - 1; dfsIndex >= 1; dfsIndex--) {
    const nodeOrdinal = dfsIndexToOrdinal[dfsIndex]!
    for (const predecessorOrdinal of ordinalToPredecessorOrdinals[
      nodeOrdinal
    ]!) {
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
    ordinalToPendingOrdinals[
      dfsIndexToOrdinal[ordinalToSemidominatorDfsIndex[nodeOrdinal]!]!
    ]!.push(nodeOrdinal)
    ordinalToForestAncestorOrdinal[nodeOrdinal] =
      ordinalToParentOrdinal[nodeOrdinal]!
    for (const pendingOrdinal of ordinalToPendingOrdinals[
      ordinalToParentOrdinal[nodeOrdinal]!
    ]!) {
      const ancestorOrdinal = minSemiAncestorOrdinal(pendingOrdinal)
      ordinalToImmediateDominatorOrdinal[pendingOrdinal] =
        ordinalToSemidominatorDfsIndex[ancestorOrdinal]! <
        ordinalToSemidominatorDfsIndex[pendingOrdinal]!
          ? ancestorOrdinal
          : ordinalToParentOrdinal[nodeOrdinal]!
    }
    ordinalToPendingOrdinals[ordinalToParentOrdinal[nodeOrdinal]!]!.length = 0
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

const computeRetainedSizes = (
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
  nodeOrdinalToGroup,
}: {
  nodeOrdinalToRetainedSize: Float64Array
  ordinalToImmediateDominatorOrdinal: Int32Array
  nodeOrdinalToGroup: readonly ({ retainedSize: number } | undefined)[]
}): void => {
  const dominatorOrdinalToChildOrdinals: number[][] = Array.from(
    { length: ordinalToImmediateDominatorOrdinal.length },
    () => [],
  )
  for (
    let nodeOrdinal = 1;
    nodeOrdinal < ordinalToImmediateDominatorOrdinal.length;
    nodeOrdinal++
  ) {
    const dominatorOrdinal = ordinalToImmediateDominatorOrdinal[nodeOrdinal]!
    if (dominatorOrdinal !== -1) {
      dominatorOrdinalToChildOrdinals[dominatorOrdinal]!.push(nodeOrdinal)
    }
  }

  // Track how many same-group ancestors are on the current path. Only the
  // outermost (0-depth) instance contributes its retained size.
  const groupPathDepth = new Map<{ retainedSize: number }, number>()
  const stack: { nodeOrdinal: number; entering: boolean }[] = [
    { nodeOrdinal: 0, entering: true },
  ]
  do {
    const { nodeOrdinal, entering } = stack.pop()!
    const group = nodeOrdinalToGroup[nodeOrdinal]
    if (!entering) {
      if (group) {
        groupPathDepth.set(group, groupPathDepth.get(group)! - 1)
      }
      continue
    }

    if (group) {
      const depth = groupPathDepth.get(group) ?? 0
      if (depth === 0) {
        group.retainedSize += nodeOrdinalToRetainedSize[nodeOrdinal]!
      }
      groupPathDepth.set(group, depth + 1)
      stack.push({ nodeOrdinal, entering: false })
    }

    for (const childOrdinal of dominatorOrdinalToChildOrdinals[nodeOrdinal]!) {
      stack.push({ nodeOrdinal: childOrdinal, entering: true })
    }
  } while (stack.length > 0)
}

type FieldLayout = {
  /**
   * The category of heap object, e.g. "object" (plain JS object), "closure"
   * (function), "native" (DOM/Blink-allocated), "array" (internal V8 array),
   * "hidden" (V8 internal), "string", "regexp", "number", "symbol", "bigint".
   */
  nodeTypeOffset: number

  /**
   * A human-readable label for the node. For plain objects this is the
   * constructor name (e.g. "HTMLDivElement"), for strings it is the string
   * value itself, and for closures it is the function name.
   */
  nodeNameOffset: number

  /**
   * Bytes held exclusively by this object, not counting objects it references.
   */
  nodeSelfSizeOffset: number

  /**
   * How many outgoing references this node has. The node's edges occupy the
   * next `edge_count * edgeFieldCount` slots in the flat `edges` array,
   * immediately following the edges of the previous node.
   */
  nodeEdgeCountOffset: number

  /**
   * Whether the node is reachable from the `window` global. `0` = attached
   * (reachable); `1` = detached (unreachable from `window`, i.e. a potential
   * memory leak if still referenced elsewhere).
   */
  nodeDetachednessOffset: number

  /**
   * Number of fields per node entry; used to stride through the flat `nodes`
   * array.
   */
  nodeFieldCount: number

  /**
   * How the edge relates to its parent node — e.g. "property" (named JS
   * property), "element" (numeric array index), "internal" (V8-internal slot
   * not visible in JS), "weak" (weak reference), "hidden", "shortcut".
   */
  edgeTypeOffset: number

  /**
   * The label identifying which property or slot this edge represents. For
   * named edges (property, internal, etc.) this is a string such as "x" or
   * "context". For element edges it is the numeric array index.
   */
  edgeNameOrIndexOffset: number

  /**
   * The target node this edge points to, expressed as an offset into the flat
   * `nodes` array (i.e. `targetNodeIndex * nodeFieldCount`).
   */
  edgeToNodeOffset: number

  /**
   * Number of fields per edge entry; used to stride through the flat `edges`
   * array.
   */
  edgeFieldCount: number

  /**
   * Which node this location entry describes, as an offset into the flat
   * `nodes` array.
   */
  locationObjectIndexOffset: number

  /**
   * ID of the script (matching `script.id` in the V8 inspector) where the node
   * was allocated.
   */
  locationScriptIdOffset: number

  /** 0-based line number within the script where the node was allocated. */
  locationLineOffset: number

  /** 0-based column number within the script where the node was allocated. */
  locationColumnOffset: number

  /**
   * Number of fields per location entry; used to stride through the flat
   * `locations` array.
   */
  locationFieldCount: number

  /**
   * Numeric array index properties (e.g. `arr[0]`). The edge's `name_or_index`
   * is the integer index.
   */
  edgeTypeElement: number

  /**
   * V8-internal references with no JS-visible name, e.g. a function's captured
   * scope ("context"), hidden class ("map"), or prototype chain slot. Important
   * for tracing retainer paths even though they don't appear in JS.
   */
  edgeTypeInternal: number

  /**
   * Weak references that do not keep the target alive. Objects held only by
   * weak edges can be garbage-collected, so these are excluded from retainer
   * path analysis.
   */
  edgeTypeWeak: number
}

const computeFieldLayout = (meta: SnapshotMeta): FieldLayout => {
  const {
    node_fields: nodeFields,
    edge_fields: edgeFields,
    edge_types: [edgeTypes],
    location_fields: locationFields,
  } = meta

  const nodeFieldToIndex = valueToIndex(nodeFields)
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

    edgeTypeElement: edgeTypeToIndex.get(`element`)!,
    edgeTypeInternal: edgeTypeToIndex.get(`internal`)!,
    edgeTypeWeak: edgeTypeToIndex.get(`weak`)!,
  }
}

const valueToIndex = <T>(values: T[]): Map<T, number> =>
  new Map(values.map((value, index) => [value, index]))

const computeNodeIndexToLocation = (
  {
    snapshot: {
      meta: {
        node_types: [nodeTypes],
      },
    },
    nodes,
    edges,
    strings,
    locations,
  }: HeapSnapshot,
  fieldLayout: FieldLayout,
  options: NormalizedV8ProfileToMdOptions,
): Map<number, string> => {
  const nodeEdgeStartIndex = new Map<number, number>()
  let edgeOffset = 0
  for (
    let nodeIndex = 0;
    nodeIndex < nodes.length;
    nodeIndex += fieldLayout.nodeFieldCount
  ) {
    nodeEdgeStartIndex.set(nodeIndex, edgeOffset)
    const edgeCount = nodes[nodeIndex + fieldLayout.nodeEdgeCountOffset]!
    edgeOffset += edgeCount * fieldLayout.edgeFieldCount
  }

  const followNamedEdge = (
    nodeIndex: number,
    targetEdgeName: string,
  ): number | undefined => {
    const edgeCount = nodes[nodeIndex + fieldLayout.nodeEdgeCountOffset]!
    const edgeStartIndex = nodeEdgeStartIndex.get(nodeIndex)!
    for (let edgeOffset = 0; edgeOffset < edgeCount; edgeOffset++) {
      const edgeIndex = edgeStartIndex + edgeOffset * fieldLayout.edgeFieldCount
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
    const nodeType = nodeTypes[nodes[nodeIndex + fieldLayout.nodeTypeOffset]!]
    if (nodeType !== `closure`) {
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
    const urlNodeIndex = followNamedEdge(scriptNodeIndex, `name`)
    if (urlNodeIndex === undefined) {
      continue
    }

    const url = strings[nodes[urlNodeIndex + fieldLayout.nodeNameOffset]!]
    if (!url) {
      continue
    }

    const fileLocation = formatURL(url, options)
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
