import { BYTES } from '../../../modalities/metric.ts'
import type { Profile, Sample } from '../../../modalities/profile/index.ts'
import {
  callFrameToStackFrame,
  makeStackFrameIndicesResolver,
} from '../common.ts'
import type { V8CallFrame } from '../common.ts'

/**
 * @see https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/inspector/v8-heap-profiler-agent-impl.cc
 */
export type V8HeapProfile = {
  /** Root node of the allocation call tree. */
  head: V8HeapProfileNode

  /** Individual allocation samples, each referencing a node in the call tree. */
  samples: V8HeapProfileSample[]
}

export type V8HeapProfileNode = {
  /** The function and source location of this call site. */
  callFrame: V8CallFrame

  /** Total bytes allocated directly at this call site (size × count). */
  selfSize: number

  /** Unique identifier used to correlate samples back to this node. */
  id: number

  /** Child call sites, forming the allocation call tree. */
  children: V8HeapProfileNode[]
}

type V8HeapProfileSample = {
  /** Total bytes for this allocation (size * count). */
  size: number

  /** The node ID in the call tree where this allocation occurred. */
  nodeId: number

  /** Time-ordered sequence number. */
  ordinal: number
}

export const parseV8HeapProfile = (profile: V8HeapProfile): Profile[] => {
  const { flatNodes, idToIndex, indexToParentIndex } = flattenCallTree(profile)
  const frames = flatNodes.map(nodeToStackFrame)

  return [
    {
      type: `profile`,
      frames,
      metrics: [BYTES],
      samples: heapSamples(profile, idToIndex, indexToParentIndex),
    },
  ]
}

/**
 * Flattens the call tree, reindexing each node's ID to its flattened position,
 * which doubles as its frame-universe index, and returns the flattened nodes
 * with the mappings from original ID to position and from position to parent
 * position (`-1` for the root).
 */
const flattenCallTree = (
  profile: V8HeapProfile,
): {
  flatNodes: V8HeapProfileNode[]
  idToIndex: number[]
  indexToParentIndex: number[]
} => {
  const flatNodes: V8HeapProfileNode[] = []
  const idToIndex: number[] = []
  const indexToParentIndex: number[] = []

  const stack: { node: V8HeapProfileNode; parentIndex: number }[] = [
    { node: profile.head, parentIndex: -1 },
  ]
  do {
    const { node, parentIndex } = stack.pop()!

    const index = flatNodes.length
    idToIndex[node.id] = index
    node.id = index
    flatNodes.push(node)
    indexToParentIndex.push(parentIndex)

    for (const child of node.children) {
      stack.push({ node: child, parentIndex: index })
    }
  } while (stack.length > 0)

  return { flatNodes, idToIndex, indexToParentIndex }
}

const nodeToStackFrame = (node: V8HeapProfileNode) => {
  const frame = callFrameToStackFrame(node.callFrame)
  const name = VM_STATE_FRAME_NAMES.get(frame.name ?? ``)
  return name === undefined ? frame : { ...frame, name }
}

/**
 * V8's sampling heap profiler labels an allocation made outside JS execution
 * with the raw `VMState` tag (see v8's `sampling-heap-profiler.cc`). Mapped to
 * the lowercase labels the V8 CPU profiler uses (`(garbage collector)`) so both
 * profile kinds format and categorize consistently.
 */
const VM_STATE_FRAME_NAMES: ReadonlyMap<string, string> = new Map([
  [`(GC)`, `(garbage collector)`],
  [`(PARSER)`, `(parser)`],
  [`(COMPILER)`, `(compiler)`],
  [`(BYTECODE_COMPILER)`, `(bytecode compiler)`],
  [`(ATOMICS_WAIT)`, `(atomics wait)`],
  [`(IDLE)`, `(idle)`],
  [`(V8 API)`, `(v8 api)`],
])

function* heapSamples(
  profile: V8HeapProfile,
  idToIndex: number[],
  indexToParentIndex: number[],
): Iterable<Sample> {
  const resolveFrameIndices = makeStackFrameIndicesResolver(indexToParentIndex)
  for (const { size, nodeId } of profile.samples) {
    const nodeIndex = idToIndex[nodeId]
    if (nodeIndex === undefined) {
      continue
    }

    // The node index is a stable stack ID (a node always denotes the same
    // stack), so the aggregator memoizes repeat stacks by it.
    yield {
      id: nodeIndex,
      values: [size],
      frameIndices: resolveFrameIndices(nodeIndex),
    }
  }
}
