import {
  formatSourceLocation,
  makeFileReference,
  sourceReferenceToSourceLocation,
} from '../../../location.ts'
import type { FileReference, SourceLocation } from '../../../location.ts'
import { nodeAdjacencyGraphFromSuccessors } from '../../../modalities/heap-snapshot/index.ts'
import type {
  HeapSnapshot,
  HeapSnapshotNode,
  HeapSnapshotNodeCategory,
  NodeAdjacencyGraph,
} from '../../../modalities/heap-snapshot/index.ts'
import type { FormattingProfileToMdOptions } from '../../../options.ts'
import { FormatParseError } from '../../error.ts'

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
      type: `heap-snapshot`,
      nodeCount,
      edgeCount,
      nodeAdjacencyGraph,
      selfSizeOf: nodeOrdinal =>
        nodes[
          nodeOrdinal * fieldLayout.nodeFieldCount +
            fieldLayout.nodeSelfSizeOffset
        ]!,
      nodes: v8SnapshotNodes(snapshot, fieldLayout, nodeOrdinalToLocation),
      formatEdgeLabel: (retainerOrdinal, edgeIndex, options) =>
        formatRetainerEdgeLabel(
          retainerOrdinal,
          edgeIndex,
          snapshot,
          fieldLayout,
          nodeOrdinalToLocation,
          options,
        ),
      formatNodeLabel: (nodeOrdinal, options) =>
        formatNodeLabel(nodeOrdinal, snapshot, fieldLayout, options),
      isInternalNode: nodeOrdinal =>
        isInternalNode(nodeOrdinal, snapshot, fieldLayout),
    },
  ]
}

const isInternalNode = (
  nodeOrdinal: number,
  { nodes }: V8HeapSnapshot,
  fieldLayout: FieldLayout,
): boolean => {
  const nodeIndex = nodeOrdinal * fieldLayout.nodeFieldCount
  const nodeType = nodes[nodeIndex + fieldLayout.nodeTypeOffset]!
  return (
    nodeType === fieldLayout.nodeTypeHidden ||
    nodeType === fieldLayout.nodeTypeSynthetic
  )
}

function* v8SnapshotNodes(
  snapshot: V8HeapSnapshot,
  fieldLayout: FieldLayout,
  nodeOrdinalToLocation: SourceLocation[],
): Iterable<HeapSnapshotNode> {
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
    const category = fieldLayout.nodeTypeToCategory[nodeType]
    // A declared type name that isn't V8's own is kept for an origin to map
    // (see `HeapSnapshotNode.declaredType`).
    const declaredType =
      category === undefined ? nodeTypes[nodeType]! : undefined

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
          declaredType,
          type: `constructor`,
          name,
          location: nodeOrdinalToLocation[nodeOrdinal],
          nameLocation,
        }
        break
      }
      case fieldLayout.nodeTypeClosure:
        yield {
          category,
          declaredType,
          type: `function`,
          name: nodeName(nodeOrdinal, snapshot, fieldLayout).name,
          location: nodeOrdinalToLocation[nodeOrdinal],
        }
        break
      case fieldLayout.nodeTypeString:
      case fieldLayout.nodeTypeSlicedString:
      case fieldLayout.nodeTypeConcatenatedString:
        yield {
          category,
          declaredType,
          type: `string`,
          name: nodeName(nodeOrdinal, snapshot, fieldLayout).name,
        }
        break
      default:
        yield { category, declaredType }
    }
  }
}

const computeNodeAdjacencyGraph = (
  { snapshot: { node_count: nodeCount }, nodes, edges }: V8HeapSnapshot,
  fieldLayout: FieldLayout,
): NodeAdjacencyGraph => {
  const { nodeFieldCount, nodeEdgeCountOffset, edgeFieldCount } = fieldLayout
  const { edgeTypeOffset, edgeToNodeOffset, edgeTypeWeak } = fieldLayout

  if (edges.length % edgeFieldCount !== 0) {
    throw new FormatParseError(
      `edges length is not a multiple of the ${edgeFieldCount} edge fields, got: ${edges.length}`,
    )
  }

  // Decode the plain JSON `nodes` and `edges` arrays once, recording each
  // retaining (non-weak) edge's successor and edge index in discovery order.
  // Discovery order groups edges by their node, so these arrays are the
  // successor CSR lists. The predecessor side is scattered from them without
  // re-decoding.
  const totalEdgeCount = edges.length / edgeFieldCount
  let offsetToSuccessorOrdinal = new Int32Array(totalEdgeCount)
  let offsetToSuccessorEdgeIndex = new Int32Array(totalEdgeCount)
  const ordinalToSuccessorCount = new Int32Array(nodeCount)
  let retainingEdgeCount = 0
  let nodeEdgesStartIndex = 0
  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * nodeFieldCount
    const nodeEdgeCount = nodes[nodeIndex + nodeEdgeCountOffset]!
    for (let edgeOrdinal = 0; edgeOrdinal < nodeEdgeCount; edgeOrdinal++) {
      const edgeIndex = nodeEdgesStartIndex + edgeOrdinal * edgeFieldCount
      const edgeType = edges[edgeIndex + edgeTypeOffset]!
      if (edgeType === edgeTypeWeak) {
        continue
      }

      const successorOrdinal =
        edges[edgeIndex + edgeToNodeOffset]! / nodeFieldCount
      ordinalToSuccessorCount[nodeOrdinal]!++
      offsetToSuccessorOrdinal[retainingEdgeCount] = successorOrdinal
      offsetToSuccessorEdgeIndex[retainingEdgeCount] = edgeIndex
      retainingEdgeCount++
    }
    nodeEdgesStartIndex += nodeEdgeCount * edgeFieldCount
  }
  if (retainingEdgeCount < totalEdgeCount) {
    // Weak edges left unused entries at the end, so copy to an exact-size
    // array to free them.
    offsetToSuccessorOrdinal = offsetToSuccessorOrdinal.slice(
      0,
      retainingEdgeCount,
    )
    offsetToSuccessorEdgeIndex = offsetToSuccessorEdgeIndex.slice(
      0,
      retainingEdgeCount,
    )
  }

  return nodeAdjacencyGraphFromSuccessors(
    ordinalToSuccessorCount,
    offsetToSuccessorOrdinal,
    offsetToSuccessorEdgeIndex,
  )
}

const computeNodeOrdinalToLocation = (
  snapshot: V8HeapSnapshot,
  nodeAdjacencyGraph: NodeAdjacencyGraph,
  fieldLayout: FieldLayout,
): SourceLocation[] => {
  const {
    snapshot: { node_count: nodeCount },
    locations,
  } = snapshot
  const {
    nodeFieldCount,
    locationFieldCount,
    locationScriptIdOffset,
    locationObjectIndexOffset,
    locationLineOffset,
    locationColumnOffset,
  } = fieldLayout

  // This must be fully resolved before assigning node locations because it's
  // possible a file location is reachable from one node, but not another, even
  // though they share the same script ID.
  const scriptIdToFileLocation = computeScriptIdToFileLocation(
    snapshot,
    nodeAdjacencyGraph,
    fieldLayout,
  )

  const nodeOrdinalToLocation = new Array<SourceLocation>(nodeCount)
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
      sourceReferenceToSourceLocation(fileReference, {
        line: line + 1,
        column: column + 1,
      })
  }

  return nodeOrdinalToLocation
}

/**
 * Resolves each script ID to the script's file location by following one of
 * its closures' "shared" (`SharedFunctionInfo`), then "script" (`Script`),
 * then "name" (`URL`) edges.
 */
const computeScriptIdToFileLocation = (
  { nodes, edges, strings, locations }: V8HeapSnapshot,
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
  }: FieldLayout,
): Map<number, string> => {
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

  return scriptIdToFileLocation
}

/**
 * Formats one step of a retainer path: the edge's label followed by the
 * retaining node's label and, when known, its source location.
 */
const formatRetainerEdgeLabel = (
  retainerOrdinal: number,
  edgeIndex: number,
  snapshot: V8HeapSnapshot,
  fieldLayout: FieldLayout,
  nodeOrdinalToLocation: SourceLocation[],
  options: FormattingProfileToMdOptions,
): string => {
  const edgeLabel = formatEdgeLabel(edgeIndex, snapshot, fieldLayout, options)
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
   * Each declared node type's category, by its index in `meta.node_types`,
   * resolved once so categorizing a node costs a lookup rather than a name
   * comparison.
   *
   * An entry is undefined for a declared type name V8 doesn't define.
   */
  nodeTypeToCategory: (HeapSnapshotNodeCategory | undefined)[]

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

/**
 * The category each type V8 declares in `meta.node_types` names.
 *
 * `hidden` maps to `internal` because V8's name for its bookkeeping nodes is
 * its own. The modality's categories name them the same as JavaScriptCore's.
 */
const V8_NODE_TYPE_TO_CATEGORY = new Map<string, HeapSnapshotNodeCategory>([
  [`object`, `object`],
  [`array`, `array`],
  [`string`, `string`],
  [`concatenated string`, `concatenated string`],
  [`sliced string`, `sliced string`],
  [`closure`, `function`],
  [`code`, `code`],
  [`regexp`, `regexp`],
  [`number`, `number`],
  [`bigint`, `big number`],
  [`symbol`, `symbol`],
  [`native`, `native`],
  [`object shape`, `object shape`],
  [`hidden`, `internal`],
  [`synthetic`, `synthetic`],
])

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
    nodeTypeToCategory: nodeTypes.map(nodeType =>
      V8_NODE_TYPE_TO_CATEGORY.get(nodeType),
    ),
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
