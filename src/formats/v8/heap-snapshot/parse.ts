import {
  fileReferenceToSourceLocation,
  formatSourceLocation,
  makeFileReference,
} from '../../../location.ts'
import type { FileReference, SourceLocation } from '../../../location.ts'
import type {
  HeapSnapshot,
  NodeAdjacencyGraph,
  SnapshotNode,
} from '../../../modalities/snapshot/index.ts'
import type { FormattingProfileToMdOptions } from '../../../options.ts'

/**
 * @see https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/profiler/heap-snapshot-generator.cc
 */
export type V8HeapSnapshot = {
  snapshot: {
    /** Describes the structure/encoding of the flat arrays. */
    meta: V8HeapSnapshotMeta

    /** Number of nodes encoded in {@link V8HeapSnapshot.nodes}. */
    node_count: number

    /** Number of edges encoded in {@link V8HeapSnapshot.edges}. */
    edge_count: number
  }

  /**
   * Flat array of nodes.
   *
   * Each consecutive {@link V8HeapSnapshotMeta.node_fields} length integers represent
   * a single node record.
   */
  nodes: number[]

  /**
   * Flat array of edges.
   *
   * Each consecutive {@link V8HeapSnapshotMeta.edge_fields} length integers represent
   * a single edge record.
   */
  edges: number[]

  /** A strings table. Node and edge name fields are indices in this array. */
  strings: string[]

  /**
   * Flat array of locations.
   *
   * Each consecutive {@link V8HeapSnapshotMeta.location_fields} length integers
   * represent a single location record.
   */
  locations: number[]
}

type V8HeapSnapshotMeta = {
  /**
   * Names for each field in a node record.
   *
   * @see {@link V8HeapSnapshot.nodes}
   */
  node_fields: string[]

  /**
   * First element is the array of node type names indexed by the type field.
   * The remaining elements describe encoding for other typed fields.
   */
  node_types: [string[], ...string[]]

  /**
   * Names for each position in an edge record.
   *
   * @see {@link V8HeapSnapshot.edges}
   */
  edge_fields: string[]

  /**
   * First element is the array of edge type names indexed by the type field.
   * The remaining elements describe encoding for other typed fields.
   */
  edge_types: [string[], ...string[]]

  /**
   * Names for each position in a location record.
   *
   * @see {@link V8HeapSnapshot.locations}
   */
  location_fields: string[]
}

export const parseV8HeapSnapshot = (
  snapshot: V8HeapSnapshot,
): HeapSnapshot[] => {
  const {
    snapshot: { node_count: nodeCount, edge_count: edgeCount, meta },
    nodes,
  } = snapshot

  const fieldLayout = computeFieldLayout(meta)
  const nodeAdjacencyGraph = computeNodeAdjacencyGraph(snapshot, fieldLayout)
  const nodeOrdinalToLocation = computeNodeOrdinalToLocation(
    snapshot,
    nodeAdjacencyGraph,
    fieldLayout,
  )

  return [
    {
      type: `snapshot`,
      nodeCount,
      edgeCount,
      nodeAdjacencyGraph,
      selfSizeOf: nodeOrdinal =>
        nodes[
          nodeOrdinal * fieldLayout.nodeFieldCount +
            fieldLayout.nodeSelfSizeOffset
        ]!,
      nodes: v8SnapshotNodes(snapshot, fieldLayout, nodeOrdinalToLocation),
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
            ? ` (${formatSourceLocation(retainerLocation, options)})`
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
    },
  ]
}

function* v8SnapshotNodes(
  snapshot: V8HeapSnapshot,
  fieldLayout: FieldLayout,
  nodeOrdinalToLocation: SourceLocation[],
): Generator<SnapshotNode> {
  const {
    snapshot: {
      node_count: nodeCount,
      meta: {
        node_types: [nodeTypes],
      },
    },
    nodes,
  } = snapshot
  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * fieldLayout.nodeFieldCount
    const nodeType = nodes[nodeIndex + fieldLayout.nodeTypeOffset]!
    const category = nodeTypes[nodeType]!

    switch (nodeType) {
      case fieldLayout.nodeTypeObject:
      case fieldLayout.nodeTypeNative: {
        const { name, nameLocation } = nodeName(
          nodeOrdinal,
          snapshot,
          fieldLayout,
        )
        yield {
          category,
          kind: `constructor`,
          name,
          location: nodeOrdinalToLocation[nodeOrdinal],
          nameLocation,
        }
        break
      }
      case fieldLayout.nodeTypeClosure:
        yield {
          category,
          kind: `closure`,
          name: nodeName(nodeOrdinal, snapshot, fieldLayout).name,
          location: nodeOrdinalToLocation[nodeOrdinal],
        }
        break
      case fieldLayout.nodeTypeString:
      case fieldLayout.nodeTypeSlicedString:
      case fieldLayout.nodeTypeConcatenatedString:
        yield {
          category,
          kind: `string`,
          name: nodeName(nodeOrdinal, snapshot, fieldLayout).name,
        }
        break
      default:
        yield { category }
    }
  }
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
  options: FormattingProfileToMdOptions,
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
    ? formatSourceLocation(fileReference, options)
    : rawEdgeName

  return `.${edgeName}`
}

/**
 * The node's raw, options-independent display name — the (truncated) string
 * value for strings, the function name for closures, and the raw node name
 * otherwise — plus the file reference the name parses as, when it can be one.
 * Sometimes the node name is a file URL (e.g. a module namespace object), and
 * formatting shows it relative to the base URL. A string's value or a
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
  options: FormattingProfileToMdOptions,
): string => {
  const { name, nameLocation } = nodeName(nodeOrdinal, snapshot, fieldLayout)
  return nameLocation ? formatSourceLocation(nameLocation, options) : name
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
   * Weak references that do not keep the target alive.
   *
   * Nodes held only by weak edges can be garbage-collected, so these are
   * excluded from retainer path analysis.
   */
  edgeTypeWeak: number

  /** V8 internal node not visible in JS (e.g. hidden class, map). */
  nodeTypeHidden: number

  /** JS string value. */
  nodeTypeString: number

  /** Plain JS object (constructor name is its class). */
  nodeTypeObject: number

  /** JS function/closure. */
  nodeTypeClosure: number

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
    nodeTypeString: nodeTypeToIndex.get(`string`)!,
    nodeTypeObject: nodeTypeToIndex.get(`object`)!,
    nodeTypeClosure: nodeTypeToIndex.get(`closure`)!,
    nodeTypeNative: nodeTypeToIndex.get(`native`)!,
    nodeTypeSynthetic: nodeTypeToIndex.get(`synthetic`)!,
    nodeTypeConcatenatedString: nodeTypeToIndex.get(`concatenated string`)!,
    nodeTypeSlicedString: nodeTypeToIndex.get(`sliced string`)!,

    edgeTypeElement: edgeTypeToIndex.get(`element`)!,
    edgeTypeWeak: edgeTypeToIndex.get(`weak`)!,
  }
}

const valueToIndex = <T>(values: T[]): Map<T, number> =>
  new Map(values.map((value, index) => [value, index]))
