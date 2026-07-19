import globals from 'globals'
import { computeStartOffsets } from '../../modalities/snapshot/index.ts'
import type {
  HeapSnapshot,
  NodeAdjacencyGraph,
  SnapshotNode,
} from '../../modalities/snapshot/index.ts'

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
  const { nodes, edges, edgeTypes } = snapshot
  const nodeCount = nodes.length / NODE_FIELD_COUNT
  const rawEdgeCount = edges.length / EDGE_FIELD_COUNT

  const indexEdgeType = edgeTypes.indexOf(`Index`)
  const internalEdgeType = edgeTypes.indexOf(`Internal`)

  const idToOrdinal = computeIdToOrdinal(nodes, nodeCount)
  const nodeAdjacencyGraph = computeNodeAdjacencyGraph(
    edges,
    idToOrdinal,
    nodeCount,
    rawEdgeCount,
  )

  return [
    {
      type: `snapshot`,
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
    },
  ]
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
}: JSCHeapSnapshot): Iterable<SnapshotNode> {
  const nodeCount = nodes.length / NODE_FIELD_COUNT
  const stringClassNameIndex = nodeClassNames.indexOf(`string`)
  const classNameIndexToCategoryOrdinal =
    computeClassNameIndexToCategoryOrdinal(nodeClassNames)

  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * NODE_FIELD_COUNT
    const classNameIndex = nodes[nodeIndex + NODE_CLASS_OFFSET]!
    const flags = nodes[nodeIndex + NODE_FLAGS_OFFSET]!
    const category = categorizeNode(
      classNameIndex,
      flags,
      classNameIndexToCategoryOrdinal,
    )

    yield classNameIndex === stringClassNameIndex
      ? { category, type: `string` }
      : {
          category,
          type: `constructor`,
          name: nodeClassNames[classNameIndex]!,
        }
  }
}

const computeClassNameIndexToCategoryOrdinal = (
  nodeClassNames: string[],
): Int8Array => {
  const classNameToCategoryOrdinal = getClassNameToCategoryOrdinal()
  const classNameIndexToCategoryOrdinal = new Int8Array(
    nodeClassNames.length,
  ).fill(-1)
  for (let index = 0; index < nodeClassNames.length; index++) {
    const categoryOrdinal = classNameToCategoryOrdinal.get(
      nodeClassNames[index]!,
    )
    if (categoryOrdinal !== undefined) {
      classNameIndexToCategoryOrdinal[index] = categoryOrdinal
    }
  }
  return classNameIndexToCategoryOrdinal
}

const getClassNameToCategoryOrdinal = (): Map<string, number> => {
  if (classNameToCategoryOrdinal !== undefined) {
    return classNameToCategoryOrdinal
  }

  classNameToCategoryOrdinal = new Map()
  for (const name of Object.keys(globals.builtin)) {
    classNameToCategoryOrdinal.set(name, 12)
  }
  for (const name of Object.keys(globals.browser)) {
    classNameToCategoryOrdinal.set(name, 13)
  }
  for (const [name, ordinal] of Object.entries({
    string: 0,
    // Array
    Array: 1,
    'Array Iterator': 1,
    'Immutable Butterfly': 1,
    SparseArrayValueMap: 1,
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 1,
    Uint16Array: 1,
    Int32Array: 1,
    Uint32Array: 1,
    Float16Array: 1,
    Float32Array: 1,
    Float64Array: 1,
    BigInt64Array: 1,
    BigUint64Array: 1,
    // Closure
    Function: 2,
    GeneratorFunction: 2,
    AsyncFunction: 2,
    AsyncGeneratorFunction: 2,
    Callee: 2,
    CallbackObject: 2,
    // Code
    FunctionExecutable: 3,
    UnlinkedFunctionExecutable: 3,
    NativeExecutable: 3,
    ProgramExecutable: 3,
    ModuleProgramExecutable: 3,
    FunctionCodeBlock: 3,
    UnlinkedFunctionCodeBlock: 3,
    ModuleRecord: 3,
    JSSourceCode: 3,
    // Single entries
    RegExp: 4,
    Number: 5,
    symbol: 6,
    Symbol: 6,
    BigInt: 7,
    // Internal
    JSLexicalEnvironment: 8,
    JSModuleEnvironment: 8,
    JSGlobalLexicalEnvironment: 8,
    JSWindowProxy: 8,
    InjectedScriptHost: 8,
    CommandLineAPIHost: 8,
    '<root>': 8,
    // Object
    Object: 10,
    Prototype: 10,
    Generator: 10,
    AsyncGenerator: 10,
    'Map Iterator': 10,
    'Set Iterator': 10,
    'String Iterator': 10,
    'RegExp String Iterator': 10,
    AsyncFromSyncIterator: 10,
    AsyncIterator: 10,
    Arguments: 10,
    Int8ArrayPrototype: 10,
    Uint8ArrayPrototype: 10,
    Uint8ClampedArrayPrototype: 10,
    Int16ArrayPrototype: 10,
    Uint16ArrayPrototype: 10,
    Int32ArrayPrototype: 10,
    Uint32ArrayPrototype: 10,
    Float32ArrayPrototype: 10,
    Float64ArrayPrototype: 10,
    // Built-in
    InternalPromise: 12,
    InternalPromisePrototype: 12,
    ShadowRealm: 12,
    ModuleNamespaceObject: 12,
    'Intl.DurationFormat': 12,
    'Intl.ListFormat': 12,
    'Intl.DateTimeFormat': 12,
    // Native
    WindowProperties: 13,
    TextEncoderStreamEncoder: 13,
    ModuleLoader: 13,
  })) {
    classNameToCategoryOrdinal.set(name, ordinal)
  }

  return classNameToCategoryOrdinal
}

let classNameToCategoryOrdinal: Map<string, number> | undefined

const categorizeNode = (
  classNameIndex: number,
  flags: number,
  classNameIndexToCategoryOrdinal: Int8Array,
): string => {
  let categoryOrdinal = classNameIndexToCategoryOrdinal[classNameIndex]!
  if (categoryOrdinal === -1) {
    if (flags & NODE_INTERNAL_FLAG) {
      categoryOrdinal = 8
    } else if (flags & NODE_ELEMENT_FLAG) {
      categoryOrdinal = 9
    } else if (flags & NODE_OBJECT_FLAG) {
      categoryOrdinal = 10
    } else {
      categoryOrdinal = 11
    }
  }
  return CATEGORY_ORDINAL_TO_NAME[categoryOrdinal]!
}

const CATEGORY_ORDINAL_TO_NAME = [
  `string`, // 0
  `array`, // 1
  `closure`, // 2
  `code`, // 3
  `regexp`, // 4
  `number`, // 5
  `symbol`, // 6
  `bigint`, // 7
  `internal`, // 8
  `element`, // 9
  `object`, // 10
  `unknown`, // 11
  `built-in`, // 12
  `native`, // 13
]

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
const NODE_OBJECT_FLAG = 0b0010
const NODE_ELEMENT_FLAG = 0b0100
