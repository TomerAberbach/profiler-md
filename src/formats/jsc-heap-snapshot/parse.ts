import { computeStartOffsets } from '../../modalities/heap-snapshot/index.ts'
import type {
  HeapSnapshot,
  HeapSnapshotNode,
  HeapSnapshotNodeCategory,
  NodeAdjacencyGraph,
  UnresolvedHeapSnapshotNodeCategory,
} from '../../modalities/heap-snapshot/index.ts'

/**
 * @see https://github.com/WebKit/WebKit/blob/main/Source/JavaScriptCore/heap/HeapSnapshotBuilder.cpp
 */
export type JSCHeapSnapshot = {
  /** Format version. */
  version: number

  /** Format identifier ("Inspector"). */
  type: string

  /**
   * Flat array of nodes.
   *
   * Each consecutive 4 integers represent a single node record:
   * `[id, size, classNameIndex, flags]`.
   *
   * Flags bitset:
   * - `0b0001`: internal instance (VM-internal, not visible in JS)
   * - `0b0010`: Object subclassification
   * - `0b0100`: Element subclassification
   */
  nodes: number[]

  /** String table for node class names, indexed by `classNameIndex`. */
  nodeClassNames: string[]

  /**
   * Flat array of edges.
   *
   * Each consecutive 4 integers represent a single edge record:
   * `[fromNodeOrdinal, toNodeOrdinal, edgeType, edgeNameIndex]`.
   */
  edges: number[]

  /** Edge type names, indexed by the edge type field. */
  edgeTypes: string[]

  /** String table for edge names, indexed by `edgeNameIndex`. */
  edgeNames: string[]
}

export const parseJSCHeapSnapshot = (
  snapshot: JSCHeapSnapshot,
): HeapSnapshot[] => {
  const { nodes, edges, edgeTypes, nodeClassNames } = snapshot
  const nodeCount = nodes.length / NODE_FIELD_COUNT
  const rawEdgeCount = edges.length / EDGE_FIELD_COUNT

  const indexEdgeType = edgeTypes.indexOf(`Index`)
  const internalEdgeType = edgeTypes.indexOf(`Internal`)
  const stringClassNameIndex = nodeClassNames.indexOf(`string`)

  const idToOrdinal = computeIdToOrdinal(nodes, nodeCount)
  const nodeAdjacencyGraph = computeNodeAdjacencyGraph(
    edges,
    idToOrdinal,
    nodeCount,
    rawEdgeCount,
  )

  return [
    {
      type: `heap-snapshot`,
      nodeCount,
      edgeCount: nodeAdjacencyGraph.offsetToSuccessorOrdinal.length,
      nodeAdjacencyGraph,
      selfSizeOf: nodeOrdinal =>
        nodes[nodeOrdinal * NODE_FIELD_COUNT + NODE_SIZE_OFFSET]!,
      nodes: jscSnapshotNodes(snapshot),
      formatEdgeLabel: (retainerOrdinal, edgeIndex) =>
        formatRetainerEdgeLabel(
          retainerOrdinal,
          edgeIndex,
          snapshot,
          indexEdgeType,
          internalEdgeType,
        ),
      formatNodeLabel: nodeOrdinal => formatNodeLabel(nodeOrdinal, snapshot),
      isInternalNode: nodeOrdinal => isInternalNode(nodeOrdinal, snapshot),
      unresolvedCategoryOf: nodeOrdinal =>
        unresolvedCategoryOf(nodeOrdinal, nodes, stringClassNameIndex),
    },
  ]
}

/**
 * Classifies a node by its flags, except for a string, whose class name the
 * snapshot records instead of a flag.
 */
const unresolvedCategoryOf = (
  nodeOrdinal: number,
  nodes: number[],
  stringClassNameIndex: number,
): UnresolvedHeapSnapshotNodeCategory => {
  const nodeIndex = nodeOrdinal * NODE_FIELD_COUNT
  const classNameIndex = nodes[nodeIndex + NODE_CLASS_OFFSET]!
  return classNameIndex === stringClassNameIndex
    ? { category: `string` }
    : { category: categorizeNode(nodes[nodeIndex + NODE_FLAGS_OFFSET]!) }
}

const isInternalNode = (
  nodeOrdinal: number,
  { nodes }: JSCHeapSnapshot,
): boolean => {
  const flags = nodes[nodeOrdinal * NODE_FIELD_COUNT + NODE_FLAGS_OFFSET]!
  return (flags & NODE_INTERNAL_FLAG) !== 0
}

function* jscSnapshotNodes({
  nodes,
  nodeClassNames,
}: JSCHeapSnapshot): Iterable<HeapSnapshotNode> {
  const nodeCount = nodes.length / NODE_FIELD_COUNT
  const stringClassNameIndex = nodeClassNames.indexOf(`string`)

  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * NODE_FIELD_COUNT
    const classNameIndex = nodes[nodeIndex + NODE_CLASS_OFFSET]!
    const flags = nodes[nodeIndex + NODE_FLAGS_OFFSET]!

    yield classNameIndex === stringClassNameIndex
      ? { category: `string`, type: `string` }
      : {
          category: categorizeNode(flags),
          type: `constructor`,
          name: nodeClassNames[classNameIndex]!,
        }
  }
}

/**
 * Categorizes a node by its flags, all the snapshot itself defines about a
 * node. The class its name refers to is the engine's or the language's, so the
 * origin categorizes by name instead.
 *
 * An element node is one the host allocated for the document, which V8 declares
 * as `native`. The flags are a bitset, so no flag set means neither internal
 * nor element rather than unclassified. Every remaining node is therefore an
 * ordinary object, and the object flag it also has adds nothing.
 *
 * No committed snapshot sets the element flag. A Safari capture of a page whose
 * heap holds 418 `HTMLDivElement` and 160 `Text` nodes leaves every one of them
 * unflagged, so a Safari snapshot reports the DOM as ordinary objects while a
 * V8 snapshot of a comparable page reports it as `native`. Categorizing those
 * nodes by their class name instead would mean trusting a name a program can
 * define (`Node`, `Range`, `Text`).
 */
const categorizeNode = (flags: number): HeapSnapshotNodeCategory =>
  flags & NODE_INTERNAL_FLAG
    ? `internal`
    : flags & NODE_ELEMENT_FLAG
      ? `native`
      : `object`

/**
 * Maps node identifiers to node ordinals. Edges reference nodes by identifier,
 * and identifiers are not ordinals: nodes appear in traversal order while
 * identifiers reflect allocation order.
 */
const computeIdToOrdinal = (nodes: number[], nodeCount: number): Int32Array => {
  let maxId = 0
  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const id = nodes[nodeOrdinal * NODE_FIELD_COUNT + NODE_ID_OFFSET]!
    if (id > maxId) {
      maxId = id
    }
  }
  const idToOrdinal = new Int32Array(maxId + 1).fill(-1)
  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    idToOrdinal[nodes[nodeOrdinal * NODE_FIELD_COUNT + NODE_ID_OFFSET]!] =
      nodeOrdinal
  }
  return idToOrdinal
}

const computeNodeAdjacencyGraph = (
  edges: number[],
  idToOrdinal: Int32Array,
  nodeCount: number,
  rawEdgeCount: number,
): NodeAdjacencyGraph => {
  const { ordinalToSuccessorCount, ordinalToPredecessorCount } =
    countResolvedEdges(edges, idToOrdinal, nodeCount, rawEdgeCount)
  const ordinalToSuccessorStartOffset = computeStartOffsets(
    ordinalToSuccessorCount,
  )
  const ordinalToPredecessorStartOffset = computeStartOffsets(
    ordinalToPredecessorCount,
  )
  const {
    offsetToSuccessorOrdinal,
    offsetToSuccessorEdgeIndex,
    offsetToPredecessorOrdinal,
    offsetToPredecessorEdgeIndex,
  } = computeAdjacencyLists(
    edges,
    idToOrdinal,
    nodeCount,
    rawEdgeCount,
    ordinalToSuccessorStartOffset,
    ordinalToPredecessorStartOffset,
    ordinalToSuccessorCount,
    ordinalToPredecessorCount,
  )

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
 * Counts each node's outgoing (successor) and incoming (predecessor) edges,
 * excluding edges JSC's `HeapSnapshotBuilder` sometimes outputs between nodes
 * that don't exist.
 */
const countResolvedEdges = (
  edges: number[],
  idToOrdinal: Int32Array,
  nodeCount: number,
  rawEdgeCount: number,
): {
  ordinalToSuccessorCount: Int32Array
  ordinalToPredecessorCount: Int32Array
} => {
  const ordinalToSuccessorCount = new Int32Array(nodeCount)
  const ordinalToPredecessorCount = new Int32Array(nodeCount)
  for (let edgeOrdinal = 0; edgeOrdinal < rawEdgeCount; edgeOrdinal++) {
    const edgeIndex = edgeOrdinal * EDGE_FIELD_COUNT
    const fromNodeOrdinal = resolveIdToOrdinal(
      idToOrdinal,
      edges[edgeIndex + EDGE_FROM_OFFSET]!,
    )
    const toNodeOrdinal = resolveIdToOrdinal(
      idToOrdinal,
      edges[edgeIndex + EDGE_TO_OFFSET]!,
    )
    if (fromNodeOrdinal === -1 || toNodeOrdinal === -1) {
      continue
    }

    ordinalToSuccessorCount[fromNodeOrdinal]!++
    ordinalToPredecessorCount[toNodeOrdinal]!++
  }
  return { ordinalToSuccessorCount, ordinalToPredecessorCount }
}

/**
 * Resolves a node id to its ordinal, or -1 for ids of nodes that don't exist,
 * which JSC's `HeapSnapshotBuilder` sometimes outputs edge endpoints for.
 */
const resolveIdToOrdinal = (idToOrdinal: Int32Array, id: number): number =>
  id < idToOrdinal.length ? idToOrdinal[id]! : -1

/**
 * Fills the CSR successor and predecessor lists, excluding edges between nodes
 * that don't exist.
 *
 * Zeroes and reuses the count arrays as write cursors rather than allocating
 * fresh ones.
 */
const computeAdjacencyLists = (
  edges: number[],
  idToOrdinal: Int32Array,
  nodeCount: number,
  rawEdgeCount: number,
  ordinalToSuccessorStartOffset: Int32Array,
  ordinalToPredecessorStartOffset: Int32Array,
  ordinalToSuccessorCursor: Int32Array,
  ordinalToPredecessorCursor: Int32Array,
): {
  offsetToSuccessorOrdinal: Int32Array
  offsetToSuccessorEdgeIndex: Int32Array
  offsetToPredecessorOrdinal: Int32Array
  offsetToPredecessorEdgeIndex: Int32Array
} => {
  const totalEdges = ordinalToSuccessorStartOffset[nodeCount]!
  const offsetToSuccessorOrdinal = new Int32Array(totalEdges)
  const offsetToSuccessorEdgeIndex = new Int32Array(totalEdges)
  const offsetToPredecessorOrdinal = new Int32Array(totalEdges)
  const offsetToPredecessorEdgeIndex = new Int32Array(totalEdges)

  ordinalToSuccessorCursor.fill(0)
  ordinalToPredecessorCursor.fill(0)
  for (let edgeOrdinal = 0; edgeOrdinal < rawEdgeCount; edgeOrdinal++) {
    const edgeIndex = edgeOrdinal * EDGE_FIELD_COUNT
    const fromNodeOrdinal = resolveIdToOrdinal(
      idToOrdinal,
      edges[edgeIndex + EDGE_FROM_OFFSET]!,
    )
    const toNodeOrdinal = resolveIdToOrdinal(
      idToOrdinal,
      edges[edgeIndex + EDGE_TO_OFFSET]!,
    )
    if (fromNodeOrdinal === -1 || toNodeOrdinal === -1) {
      continue
    }

    const successorOffset =
      ordinalToSuccessorStartOffset[fromNodeOrdinal]! +
      ordinalToSuccessorCursor[fromNodeOrdinal]!
    offsetToSuccessorOrdinal[successorOffset] = toNodeOrdinal
    offsetToSuccessorEdgeIndex[successorOffset] = edgeIndex
    ordinalToSuccessorCursor[fromNodeOrdinal]!++

    const predecessorOffset =
      ordinalToPredecessorStartOffset[toNodeOrdinal]! +
      ordinalToPredecessorCursor[toNodeOrdinal]!
    offsetToPredecessorOrdinal[predecessorOffset] = fromNodeOrdinal
    offsetToPredecessorEdgeIndex[predecessorOffset] = edgeIndex
    ordinalToPredecessorCursor[toNodeOrdinal]!++
  }

  return {
    offsetToSuccessorOrdinal,
    offsetToSuccessorEdgeIndex,
    offsetToPredecessorOrdinal,
    offsetToPredecessorEdgeIndex,
  }
}

/**
 * Formats one step of a retainer path: the edge's label, when it has one,
 * followed by the retaining node's label.
 */
const formatRetainerEdgeLabel = (
  retainerOrdinal: number,
  edgeIndex: number,
  snapshot: JSCHeapSnapshot,
  indexEdgeType: number,
  internalEdgeType: number,
): string => {
  const edgeLabel = formatEdgeLabel(
    edgeIndex,
    snapshot,
    indexEdgeType,
    internalEdgeType,
  )
  const retainerLabel = formatNodeLabel(retainerOrdinal, snapshot)
  return edgeLabel ? `${edgeLabel} ${retainerLabel}` : retainerLabel
}

/**
 * The edge's fourth field is type-dependent data: an `edgeNames` index for
 * `Property`/`Variable` edges, the array index for `Index` edges, and unused
 * for `Internal` edges, which carry no name and format as the empty string.
 */
const formatEdgeLabel = (
  edgeIndex: number,
  { edges, edgeNames }: JSCHeapSnapshot,
  indexEdgeType: number,
  internalEdgeType: number,
): string => {
  const edgeType = edges[edgeIndex + EDGE_TYPE_OFFSET]!
  const edgeData = edges[edgeIndex + EDGE_DATA_OFFSET]!
  return edgeType === internalEdgeType
    ? ``
    : edgeType === indexEdgeType
      ? `[${edgeData}]`
      : `.${edgeNames[edgeData]!}`
}

const formatNodeLabel = (
  nodeOrdinal: number,
  { nodes, nodeClassNames }: JSCHeapSnapshot,
): string => {
  const classNameIndex =
    nodes[nodeOrdinal * NODE_FIELD_COUNT + NODE_CLASS_OFFSET]!
  return nodeClassNames[classNameIndex]!
}

const NODE_ID_OFFSET = 0
const NODE_SIZE_OFFSET = 1
const NODE_CLASS_OFFSET = 2
const NODE_FLAGS_OFFSET = 3
const NODE_FIELD_COUNT = 4

const EDGE_FROM_OFFSET = 0
const EDGE_TO_OFFSET = 1
const EDGE_TYPE_OFFSET = 2
const EDGE_DATA_OFFSET = 3
const EDGE_FIELD_COUNT = 4

const NODE_INTERNAL_FLAG = 0b0001
const NODE_ELEMENT_FLAG = 0b0100
