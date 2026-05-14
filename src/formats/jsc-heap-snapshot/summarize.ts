import globals from 'globals'
import { SnapshotBuilder } from '../../snapshot/index.ts'
import type {
  NodeAdjacencyGraph,
  SummarizedHeapSnapshot,
} from '../../snapshot/index.ts'
import type { JSCHeapSnapshot } from './parse.ts'

export const summarizeJSCHeapSnapshot = (
  snapshot: JSCHeapSnapshot,
): SummarizedHeapSnapshot => {
  const { nodes, nodeClassNames, edges, edgeTypes, edgeNames } = snapshot
  const nodeCount = nodes.length / NODE_FIELD_COUNT
  const rawEdgeCount = edges.length / EDGE_FIELD_COUNT

  const stringClassNameIndex = nodeClassNames.indexOf(`string`)
  const indexEdgeType = edgeTypes.indexOf(`Index`)

  const classNameIndexToCategoryOrdinal =
    computeClassNameIndexToCategoryOrdinal(nodeClassNames)
  const { nodeAdjacencyGraph, edgeCount } = computeNodeAdjacencyGraph(
    edges,
    nodeCount,
    rawEdgeCount,
  )

  const builder = new SnapshotBuilder({
    nodeCount,
    edgeCount,
    nodeAdjacencyGraph,
    nodes,
    nodeFieldCount: NODE_FIELD_COUNT,
    nodeSelfSizeOffset: NODE_SIZE_OFFSET,
    formatEdgeLabel: (retainerOrdinal, edgeIndex) => {
      const edgeType = edges[edgeIndex + EDGE_TYPE_OFFSET]!
      const edgeName =
        edgeType === indexEdgeType
          ? `[${edges[edgeIndex + EDGE_NAME_OFFSET]!}]`
          : `.${edgeNames[edges[edgeIndex + EDGE_NAME_OFFSET]!]!}`
      const classNameIndex =
        nodes[retainerOrdinal * NODE_FIELD_COUNT + NODE_CLASS_OFFSET]!
      const retainerLabel = nodeClassNames[classNameIndex]!
      return `${edgeName} ${retainerLabel}`
    },
    formatNodeLabel: nodeOrdinal => {
      const classNameIndex =
        nodes[nodeOrdinal * NODE_FIELD_COUNT + NODE_CLASS_OFFSET]!
      return nodeClassNames[classNameIndex]!
    },
    isInternalNode: nodeOrdinal => {
      const flags = nodes[nodeOrdinal * NODE_FIELD_COUNT + NODE_FLAGS_OFFSET]!
      return (flags & NODE_INTERNAL_FLAG) !== 0
    },
  })

  for (let nodeOrdinal = 0; nodeOrdinal < nodeCount; nodeOrdinal++) {
    const nodeIndex = nodeOrdinal * NODE_FIELD_COUNT
    const classNameIndex = nodes[nodeIndex + NODE_CLASS_OFFSET]!
    const flags = nodes[nodeIndex + NODE_FLAGS_OFFSET]!

    builder.addCategoryNode(
      nodeOrdinal,
      categorizeNode(classNameIndex, flags, classNameIndexToCategoryOrdinal),
    )

    if (classNameIndex === stringClassNameIndex) {
      builder.addStringNode(nodeOrdinal)
    } else {
      builder.addConstructorNode(nodeOrdinal)
    }
  }

  return builder.build()
}

const computeClassNameIndexToCategoryOrdinal = (
  nodeClassNames: string[],
): Int8Array => {
  const classNameToCategoryOrdinal = getClassNameToCategoryOrdinal()
  const classNameIndexToCategoryOrdinal = new Int8Array(
    nodeClassNames.length,
  ).fill(-1)
  for (let index = 0; index < nodeClassNames.length; index++) {
    const categoryOrdinal = classNameToCategoryOrdinal[nodeClassNames[index]!]
    if (categoryOrdinal !== undefined) {
      classNameIndexToCategoryOrdinal[index] = categoryOrdinal
    }
  }
  return classNameIndexToCategoryOrdinal
}

const getClassNameToCategoryOrdinal = (): Record<string, number> => {
  if (classNameToCategoryOrdinal !== undefined) {
    return classNameToCategoryOrdinal
  }

  classNameToCategoryOrdinal = {}
  for (const name of Object.keys(globals.builtin)) {
    classNameToCategoryOrdinal[name] = 12
  }
  for (const name of Object.keys(globals.browser)) {
    classNameToCategoryOrdinal[name] = 13
  }
  Object.assign(classNameToCategoryOrdinal, {
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
  })

  return classNameToCategoryOrdinal
}

let classNameToCategoryOrdinal: Record<string, number> | undefined

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

const computeNodeAdjacencyGraph = (
  edges: number[],
  nodeCount: number,
  rawEdgeCount: number,
): { nodeAdjacencyGraph: NodeAdjacencyGraph; edgeCount: number } => {
  // Pass 1: Count valid edges per source and per target node.
  const ordinalToSuccessorCount = new Int32Array(nodeCount)
  const ordinalToPredecessorCount = new Int32Array(nodeCount)
  for (let edgeOrdinal = 0; edgeOrdinal < rawEdgeCount; edgeOrdinal++) {
    const edgeIndex = edgeOrdinal * EDGE_FIELD_COUNT
    const fromNodeOrdinal = edges[edgeIndex + EDGE_FROM_OFFSET]!
    const toNodeOrdinal = edges[edgeIndex + EDGE_TO_OFFSET]!
    if (fromNodeOrdinal >= nodeCount || toNodeOrdinal >= nodeCount) {
      // JSC's `HeapSnapshotBuilder` sometimes outputs edges between nodes that
      // don't exist.
      continue
    }

    ordinalToSuccessorCount[fromNodeOrdinal]!++
    ordinalToPredecessorCount[toNodeOrdinal]!++
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
  for (let edgeOrdinal = 0; edgeOrdinal < rawEdgeCount; edgeOrdinal++) {
    const edgeIndex = edgeOrdinal * EDGE_FIELD_COUNT
    const fromNodeOrdinal = edges[edgeIndex + EDGE_FROM_OFFSET]!
    const toNodeOrdinal = edges[edgeIndex + EDGE_TO_OFFSET]!
    if (fromNodeOrdinal >= nodeCount || toNodeOrdinal >= nodeCount) {
      // JSC's `HeapSnapshotBuilder` sometimes outputs edges between nodes that
      // don't exist.
      continue
    }

    const successorOffset =
      ordinalToSuccessorStartOffset[fromNodeOrdinal]! +
      ordinalToSuccessorCount[fromNodeOrdinal]!
    offsetToSuccessorOrdinal[successorOffset] = toNodeOrdinal
    offsetToSuccessorEdgeIndex[successorOffset] = edgeIndex
    ordinalToSuccessorCount[fromNodeOrdinal]!++

    const predecessorOffset =
      ordinalToPredecessorStartOffset[toNodeOrdinal]! +
      ordinalToPredecessorCount[toNodeOrdinal]!
    offsetToPredecessorOrdinal[predecessorOffset] = fromNodeOrdinal
    offsetToPredecessorEdgeIndex[predecessorOffset] = edgeIndex
    ordinalToPredecessorCount[toNodeOrdinal]!++
  }

  return {
    nodeAdjacencyGraph: {
      ordinalToSuccessorStartOffset,
      offsetToSuccessorOrdinal,
      offsetToSuccessorEdgeIndex,
      ordinalToPredecessorStartOffset,
      offsetToPredecessorOrdinal,
      offsetToPredecessorEdgeIndex,
    },
    edgeCount: totalEdges,
  }
}

const NODE_SIZE_OFFSET = 1
const NODE_CLASS_OFFSET = 2
const NODE_FLAGS_OFFSET = 3
const NODE_FIELD_COUNT = 4

const EDGE_FROM_OFFSET = 0
const EDGE_TO_OFFSET = 1
const EDGE_TYPE_OFFSET = 2
const EDGE_NAME_OFFSET = 3
const EDGE_FIELD_COUNT = 4

const NODE_INTERNAL_FLAG = 0b0001
const NODE_OBJECT_FLAG = 0b0010
const NODE_ELEMENT_FLAG = 0b0100
