import {
  fileReferenceToSourceLocation,
  formatSourceLocationPath,
  makeFileReference,
} from '../../../location.ts'
import type { FileReference, SourceLocation } from '../../../location.ts'
import type { ResolvedProfileToMdOptions } from '../../../options.ts'
import { SnapshotAggregator } from '../../../snapshot/index.ts'
import type {
  AggregatedHeapSnapshot,
  NodeAdjacencyGraph,
} from '../../../snapshot/index.ts'
import type { V8HeapSnapshot, V8HeapSnapshotMeta } from './parse.ts'

export const aggregateV8HeapSnapshot = (
  snapshot: V8HeapSnapshot,
): AggregatedHeapSnapshot[] => {
  const {
    snapshot: { meta, node_count: nodeCount, edge_count: edgeCount },
    nodes,
  } = snapshot
  const [nodeTypes] = meta.node_types

  const fieldLayout = computeFieldLayout(meta)
  const nodeAdjacencyGraph = computeNodeAdjacencyGraph(snapshot, fieldLayout)
  const nodeOrdinalToLocation = computeNodeOrdinalToLocation(
    snapshot,
    nodeAdjacencyGraph,
    fieldLayout,
  )

  const snapshotAggregator = new SnapshotAggregator({
    nodeCount,
    edgeCount,
    nodeAdjacencyGraph,
    nodes,
    nodeFieldCount: fieldLayout.nodeFieldCount,
    nodeSelfSizeOffset: fieldLayout.nodeSelfSizeOffset,
    formatEdgeLabel: (retainerOrdinal, edgeIndex, options) => {
      const edgeLabel = formatEdgeLabel(
        edgeIndex,
        snapshot,
        fieldLayout,
        options,
      )
      const retainerLabel = formatNodeLabel(
        retainerOrdinal,
        snapshot,
        fieldLayout,
        options,
      )
      const retainerLocation = nodeOrdinalToLocation[retainerOrdinal]
      return `${edgeLabel} ${retainerLabel}${
        retainerLocation
          ? ` (${formatSourceLocationPath(retainerLocation, options)})`
          : ``
      }`
    },
    formatNodeLabel: (nodeOrdinal, options) =>
      formatNodeLabel(nodeOrdinal, snapshot, fieldLayout, options),
    isInternalNode: nodeOrdinal => {
      const nodeIndex = nodeOrdinal * fieldLayout.nodeFieldCount
      const nodeType = nodes[nodeIndex + fieldLayout.nodeTypeOffset]!
      return (
        nodeType === fieldLayout.nodeTypeHidden ||
        nodeType === fieldLayout.nodeTypeSynthetic
      )
    },
  })

  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * fieldLayout.nodeFieldCount
    const nodeType = nodes[nodeIndex + fieldLayout.nodeTypeOffset]!
    const category = nodeTypes[nodeType]!

    snapshotAggregator.addCategoryNode(nodeOrdinal, category)

    switch (nodeType) {
      case fieldLayout.nodeTypeObject:
      case fieldLayout.nodeTypeNative: {
        const { name, nameLocation } = nodeName(
          nodeOrdinal,
          snapshot,
          fieldLayout,
        )
        snapshotAggregator.addConstructorNode(
          nodeOrdinal,
          name,
          nodeOrdinalToLocation[nodeOrdinal],
          nameLocation,
        )
        break
      }
      case fieldLayout.nodeTypeClosure:
        snapshotAggregator.addClosureNode(
          nodeOrdinal,
          nodeName(nodeOrdinal, snapshot, fieldLayout).name,
          nodeOrdinalToLocation[nodeOrdinal],
        )
        break
      case fieldLayout.nodeTypeString:
      case fieldLayout.nodeTypeSlicedString:
      case fieldLayout.nodeTypeConcatenatedString:
        snapshotAggregator.addStringNode(
          nodeOrdinal,
          nodeName(nodeOrdinal, snapshot, fieldLayout).name,
        )
        break
    }
  }

  return [snapshotAggregator.aggregate()]
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

const computeNodeOrdinalToLocation = (
  {
    snapshot: { node_count: nodeCount },
    nodes,
    edges,
    strings,
    locations,
  }: V8HeapSnapshot,
  {
    ordinalToSuccessorStartOffset,
    offsetToSuccessorEdgeIndex,
  }: NodeAdjacencyGraph,
  {
    nodeFieldCount,
    nodeTypeOffset,
    nodeNameOffset,
    nodeTypeClosure,
    edgeNameOrIndexOffset,
    edgeToNodeOffset,
    locationFieldCount,
    locationScriptIdOffset,
    locationObjectIndexOffset,
    locationLineOffset,
    locationColumnOffset,
  }: FieldLayout,
): SourceLocation[] => {
  const namedEdgeToNodeIndex = (
    nodeIndex: number,
    targetEdgeName: string,
  ): number | undefined => {
    const nodeOrdinal = nodeIndex / nodeFieldCount
    const successorStartOffset = ordinalToSuccessorStartOffset[nodeOrdinal]!
    const successorEndOffset = ordinalToSuccessorStartOffset[nodeOrdinal + 1]!
    for (
      let successorOffset = successorStartOffset;
      successorOffset < successorEndOffset;
      successorOffset++
    ) {
      const edgeIndex = offsetToSuccessorEdgeIndex[successorOffset]!
      const edgeName = strings[edges[edgeIndex + edgeNameOrIndexOffset]!]!
      if (edgeName === targetEdgeName) {
        return edges[edgeIndex + edgeToNodeOffset]!
      }
    }
    return undefined
  }

  const scriptIdToFileLocation = new Map<number, string>()
  for (
    let locationIndex = 0;
    locationIndex < locations.length;
    locationIndex += locationFieldCount
  ) {
    const scriptId = locations[locationIndex + locationScriptIdOffset]!
    if (scriptIdToFileLocation.has(scriptId)) {
      // We already found the file location for this script ID.
      continue
    }

    const nodeIndex = locations[locationIndex + locationObjectIndexOffset]!
    const nodeType = nodes[nodeIndex + nodeTypeOffset]
    if (nodeType !== nodeTypeClosure) {
      // Only closures have location urls.
      continue
    }

    // "shared" (`SharedFunctionInfo`) -> "script" (`Script`) -> "name" (`URL`)
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
    const location = strings[nodes[locationNodeIndex + nodeNameOffset]!]
    if (!location) {
      continue
    }

    scriptIdToFileLocation.set(scriptId, location)
  }

  // This must be a separate loop from the above because it's possible a file
  // location is reachable from one node, but not another, even though they
  // share the same script ID.
  const nodeOrdinalToLocation = Array.from<SourceLocation>({
    length: nodeCount,
  })
  // Cache `FileReference` per file path to avoid repeated construction.
  const fileLocationToRef = new Map<string, FileReference | null>()
  for (
    let locationIndex = 0;
    locationIndex < locations.length;
    locationIndex += locationFieldCount
  ) {
    const scriptId = locations[locationIndex + locationScriptIdOffset]!
    const fileLocation = scriptIdToFileLocation.get(scriptId)
    if (!fileLocation) {
      continue
    }

    let fileReference = fileLocationToRef.get(fileLocation)
    if (fileReference === undefined) {
      fileReference = makeFileReference(fileLocation)
      fileLocationToRef.set(fileLocation, fileReference ?? null)
    }
    if (!fileReference) {
      continue
    }

    const nodeIndex = locations[locationIndex + locationObjectIndexOffset]!
    const line = locations[locationIndex + locationLineOffset]!
    const column = locations[locationIndex + locationColumnOffset]!
    nodeOrdinalToLocation[nodeIndex / nodeFieldCount] =
      fileReferenceToSourceLocation(fileReference, {
        line: line + 1,
        column: column + 1,
      })
  }

  return nodeOrdinalToLocation
}

const formatEdgeLabel = (
  edgeIndex: number,
  { edges, strings }: V8HeapSnapshot,
  fieldLayout: FieldLayout,
  options: ResolvedProfileToMdOptions,
) => {
  const edgeType = edges[edgeIndex + fieldLayout.edgeTypeOffset]!
  const edgeNameOrIndex = edges[edgeIndex + fieldLayout.edgeNameOrIndexOffset]!
  if (edgeType === fieldLayout.edgeTypeElement) {
    // In this case, the edge name is an index.
    return `[${edgeNameOrIndex}]`
  }

  const rawEdgeName = strings[edgeNameOrIndex]!
  // Sometimes the edge name is a file URL. If it's not (or it's an unknown
  // location), then it's shown as-is.
  const fileReference = rawEdgeName ? makeFileReference(rawEdgeName) : undefined
  const edgeName = fileReference
    ? formatSourceLocationPath(fileReference, options)
    : rawEdgeName

  return `.${edgeName}`
}

/**
 * The node's raw, options-independent display name — the (truncated) string
 * value for strings, the function name for closures, and the raw node name
 * otherwise — plus the file reference the name parses as, when it can be one.
 * Sometimes the node name is a file URL (e.g. a module namespace object), and
 * formatting renders it relative to the base URL. A string's value or a
 * closure's name is never a location, even when it happens to be URL-shaped,
 * so those never carry a `nameLocation`. Neither does a bare constructor name
 * (`Object`, `system / Context`), which would otherwise parse as a relative
 * path and pass off a genuinely locationless node as located to
 * categorization.
 */
const nodeName = (
  nodeOrdinal: number,
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
): { name: string; nameLocation?: FileReference } => {
  const nodeIndex = nodeOrdinal * fieldLayout.nodeFieldCount
  const nodeType = nodes[nodeIndex + fieldLayout.nodeTypeOffset]!
  switch (nodeType) {
    case fieldLayout.nodeTypeString:
    case fieldLayout.nodeTypeSlicedString:
    case fieldLayout.nodeTypeConcatenatedString: {
      const string = strings[nodes[nodeIndex + fieldLayout.nodeNameOffset]!]!
      return { name: formatString(string) }
    }
    case fieldLayout.nodeTypeClosure:
      return {
        name:
          strings[nodes[nodeIndex + fieldLayout.nodeNameOffset]!]! ||
          `(anonymous)`,
      }
    default: {
      const name =
        strings[nodes[nodeIndex + fieldLayout.nodeNameOffset]!]! ||
        nodeTypes[nodeType]!
      const fileReference = makeFileReference(name)
      return {
        name,
        nameLocation:
          fileReference?.type === `absolute` ? fileReference : undefined,
      }
    }
  }
}

const formatNodeLabel = (
  nodeOrdinal: number,
  snapshot: V8HeapSnapshot,
  fieldLayout: FieldLayout,
  options: ResolvedProfileToMdOptions,
): string => {
  const { name, nameLocation } = nodeName(nodeOrdinal, snapshot, fieldLayout)
  return nameLocation ? formatSourceLocationPath(nameLocation, options) : name
}

const formatString = (string: string): string => {
  if (string.length > MAX_STRING_LENGTH) {
    string = `${string.slice(0, MAX_STRING_LENGTH - 1)}…`
  }
  return string.replaceAll(`\n`, `\\n`)
}

const MAX_STRING_LENGTH = 50

/** Sentinel offsets and values for accessing data in a {@link V8HeapSnapshot}. */
type FieldLayout = {
  /**
   * The category of heap node.
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

  /** Bytes held exclusively by this node. */
  nodeSelfSizeOffset: number

  /**
   * How many outgoing edges this node has.
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
   * V8-internal edges with no JS-visible name.
   *
   * e.g. a function's captured scope (`context`), hidden class (`map`), or
   * prototype chain slot.
   */
  edgeTypeInternal: number

  /**
   * Weak references that do not keep the target alive.
   *
   * Nodes held only by weak edges can be garbage-collected, so these are
   * excluded from retainer path analysis.
   */
  edgeTypeWeak: number

  /** V8 internal node not visible in JS (e.g. hidden class, map). */
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

  /** Node allocated by native (C++) code, e.g. a DOM node. */
  nodeTypeNative: number

  /**
   * Synthetic root node that V8 uses as a GC entry-point super-node.
   *
   * Not a real heap node.
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
