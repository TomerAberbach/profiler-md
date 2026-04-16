import { formatURL } from '../common.ts'
import type { NormalizedV8ProfileToMdOptions } from '../common.ts'
import type { HeapSnapshot, SnapshotMeta } from './parse.ts'

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
   * objects that would be freed if their instances were garbage collected.
   */
  retainedSize: number

  /** Instances of this constructor and their sizes. */
  instances: {
    selfSize: number
    retainedSize: number
    retainerPath: string
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
  const objectCategoryToSizeStats = new Map<
    string,
    { size: number; count: number }
  >()
  const nameToConstructor = new Map<string, SummarizedConstructor>()
  const nodeOrdinalToConstructor = new Map<number, SummarizedConstructor>()

  for (let nodeOrdinal = 0; nodeOrdinal < objectCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * fieldLayout.nodeFieldCount

    const selfSize = nodes[nodeIndex + fieldLayout.nodeSelfSizeOffset]!
    totalSize += selfSize

    const nodeType = nodes[nodeIndex + fieldLayout.nodeTypeOffset]!
    const category = nodeTypes[nodeType]!
    let categoryStats = objectCategoryToSizeStats.get(category)
    if (!categoryStats) {
      categoryStats = { size: 0, count: 0 }
      objectCategoryToSizeStats.set(category, categoryStats)
    }
    categoryStats.size += selfSize
    categoryStats.count++

    switch (nodeType) {
      case fieldLayout.nodeTypeObject:
      case fieldLayout.nodeTypeNative: {
        // For these types the names are constructors.
        const name = strings[nodes[nodeIndex + fieldLayout.nodeNameOffset]!]!
        let constructor = nameToConstructor.get(name)
        if (!constructor) {
          constructor = {
            name,
            location: undefined,
            selfSize: 0,
            retainedSize: 0,
            instances: [],
          }
          nameToConstructor.set(name, constructor)
        }
        constructor.selfSize += selfSize
        constructor.location ??= nodeIndexToLocation.get(nodeIndex)
        let retainerPath: string | undefined
        constructor.instances.push({
          selfSize,
          retainedSize: nodeOrdinalToRetainedSize[nodeOrdinal]!,
          get retainerPath() {
            return (retainerPath ??= computeRetainerPath(
              nodeOrdinal,
              snapshot,
              nodeAdjacencyGraph,
              immediateDominatorGraph,
              fieldLayout,
            ))
          },
        })
        nodeOrdinalToConstructor.set(nodeOrdinal, constructor)
        break
      }
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

type NodeAdjacencyGraph = {
  ordinalToSuccessors: NodeEdge[][]
  ordinalToPredecessors: NodeEdge[][]
}

type NodeEdge = {
  edgeIndex: number
  targetNodeOrdinal: number
}

const computeNodeAdjacencyGraph = (
  { snapshot: { node_count: nodeCount }, nodes, edges }: HeapSnapshot,
  fieldLayout: FieldLayout,
): NodeAdjacencyGraph => {
  // Build forward (successor) and reverse (predecessor) adjacency lists,
  // excluding weak edges since they don't keep objects alive.
  const ordinalToSuccessors: NodeEdge[][] = Array.from(
    { length: nodeCount },
    () => [],
  )
  const ordinalToPredecessors: NodeEdge[][] = Array.from(
    { length: nodeCount },
    () => [],
  )
  let nodeEdgesStartIndex = 0
  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * fieldLayout.nodeFieldCount
    const edgeCount = nodes[nodeIndex + fieldLayout.nodeEdgeCountOffset]!
    for (
      let nodeEdgeOrdinal = 0;
      nodeEdgeOrdinal < edgeCount;
      nodeEdgeOrdinal++
    ) {
      const nodeEdgeIndex =
        nodeEdgesStartIndex + nodeEdgeOrdinal * fieldLayout.edgeFieldCount
      const edgeType = edges[nodeEdgeIndex + fieldLayout.edgeTypeOffset]
      if (edgeType === fieldLayout.edgeTypeWeak) {
        continue
      }

      const successorNodeIndex =
        edges[nodeEdgeIndex + fieldLayout.edgeToNodeOffset]!
      const successorNodeOrdinal =
        successorNodeIndex / fieldLayout.nodeFieldCount
      ordinalToSuccessors[nodeOrdinal]!.push({
        targetNodeOrdinal: successorNodeOrdinal,
        edgeIndex: nodeEdgeIndex,
      })
      ordinalToPredecessors[successorNodeOrdinal]!.push({
        targetNodeOrdinal: nodeOrdinal,
        edgeIndex: nodeEdgeIndex,
      })
    }
    nodeEdgesStartIndex += edgeCount * fieldLayout.edgeFieldCount
  }

  return { ordinalToSuccessors, ordinalToPredecessors }
}

const computeNodeIndexToLocation = (
  { nodes, edges, strings, locations }: HeapSnapshot,
  nodeAdjacencyGraph: NodeAdjacencyGraph,
  fieldLayout: FieldLayout,
  options: NormalizedV8ProfileToMdOptions,
): Map<number, string> => {
  const followNamedEdge = (
    nodeIndex: number,
    targetEdgeName: string,
  ): number | undefined => {
    const nodeOrdinal = nodeIndex / fieldLayout.nodeFieldCount
    const successors = nodeAdjacencyGraph.ordinalToSuccessors[nodeOrdinal]!
    for (const { edgeIndex } of successors) {
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
  { ordinalToSuccessors, ordinalToPredecessors }: NodeAdjacencyGraph,
): ImmediateDominatorGraph => {
  const {
    snapshot: { node_count: nodeCount },
  } = snapshot

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
      frame.nextChildIndex === ordinalToSuccessors[frame.nodeOrdinal]!.length
    ) {
      // Done processing this node's children.
      dfsStack.pop()
      continue
    }

    const childOrdinal =
      ordinalToSuccessors[frame.nodeOrdinal]![frame.nextChildIndex]!
        .targetNodeOrdinal
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
    for (const {
      targetNodeOrdinal: predecessorOrdinal,
    } of ordinalToPredecessors[nodeOrdinal]!) {
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
  { ordinalToPredecessors }: NodeAdjacencyGraph,
  { ordinalToImmediateDominatorOrdinal }: ImmediateDominatorGraph,
  fieldLayout: FieldLayout,
): string => {
  // Each hop tracks the formatted label and whether the retaining node is
  // internal. Stored from immediate retainer outward (closest first).
  type Hop = { label: string; internal: boolean }
  const hops: Hop[] = []

  while (true) {
    const predecessors = ordinalToPredecessors[nodeOrdinal]!
    if (predecessors.length === 0) {
      break
    }

    const dominatorOrdinal = ordinalToImmediateDominatorOrdinal[nodeOrdinal]!
    const predecessor = predecessors.find(
      ({ targetNodeOrdinal }) => targetNodeOrdinal === dominatorOrdinal,
    )
    if (!predecessor) {
      nodeOrdinal = dominatorOrdinal
      continue
    }

    const { targetNodeOrdinal, edgeIndex } = predecessor

    // Element edges store the numeric array index directly in `name_or_index`.
    // All other edge types store a string index.
    const edgeType = edges[edgeIndex + fieldLayout.edgeTypeOffset]!
    const edgeNameOrIndex =
      edges[edgeIndex + fieldLayout.edgeNameOrIndexOffset]!
    const edgeLabel =
      edgeType === fieldLayout.edgeTypeElement
        ? `[${edgeNameOrIndex}]`
        : `.${strings[edgeNameOrIndex]!}`

    const retainerNodeIndex = targetNodeOrdinal * fieldLayout.nodeFieldCount
    const retainerType = nodes[retainerNodeIndex + fieldLayout.nodeTypeOffset]!
    const retainerName =
      strings[nodes[retainerNodeIndex + fieldLayout.nodeNameOffset]!]! ||
      nodeTypes[retainerType]!

    hops.push({
      label: `${edgeLabel} ${retainerName}`,
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
  nodeOrdinalToGroup,
}: {
  nodeOrdinalToRetainedSize: Float64Array
  ordinalToImmediateDominatorOrdinal: Int32Array
  nodeOrdinalToGroup: Map<number, { retainedSize: number }>
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
    const group = nodeOrdinalToGroup.get(nodeOrdinal)
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
