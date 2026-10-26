import type { FormattingProfileToMdOptions } from '../../../options.ts'
import type {
  AggregatedCallStackProfile,
  AggregatedCallStackProfileFunction,
} from '../aggregate.ts'
import { selfValueOf } from '../measure.ts'
import type { Measure } from '../measure.ts'
import { OMITTED_FRAMES_NAME, TRUNCATED_FRAMES_NAME } from '../table.ts'
import {
  isCallTreeNode,
  isFunctionNode,
  keyOf,
  NO_DRAWN_CALLEES,
} from './node.ts'
import type {
  CallTreeNode,
  CallTreeRoot,
  FunctionNode,
  NodeFunction,
  PlaceholderFrames,
} from './node.ts'

/**
 * Merges every call stack into a tree keyed on each path's functions, summing
 * the measure values of the stacks passing through each node, and collects the
 * nodes of each {@link hottest} function.
 */
export const buildCallTree = (
  { callStacks, functions, context }: AggregatedCallStackProfile,
  measure: Measure,
  { showEntry }: FormattingProfileToMdOptions,
  hottest: AggregatedCallStackProfileFunction[],
): {
  root: CallTreeRoot

  /** The node of the call stacks the entry filter hides whole, if any. */
  hiddenStacks: CallTreeNode | undefined

  /** Each of the {@link hottest} functions' nodes, in the same order. */
  nodesOfHottest: FunctionNode[][]
} => {
  const root = newCallTreeRoot()
  // Only the hottest functions' nodes are read, so only theirs are collected.
  const nodesOfHottest = hottest.map((): FunctionNode[] => [])
  const nodesByFunction: NodesByFunction = new Array<
    FunctionNode[] | undefined
  >(functions.length)
  for (const [index, { id }] of hottest.entries()) {
    nodesByFunction[id] = nodesOfHottest[index]
  }
  const path: StackPath = {
    nodes: [],
    positionByFunction: new Int32Array(functions.length).fill(-1),
    omitsCallersAt: new Uint8Array(functions.length),
  }
  let hiddenStacks: CallTreeNode | undefined

  const isShown = (func: AggregatedCallStackProfileFunction): boolean =>
    showEntry(func, context)
  for (const callStack of callStacks) {
    const value = selfValueOf(measure, callStack)
    if (value === 0) {
      continue
    }

    const { frames, truncated } = callStack
    const start = truncated
      ? addPlaceholder(root, TRUNCATED_STACKS, value, nodesByFunction)
      : root
    const node = mergeFrames(
      start,
      frames,
      value,
      isShown,
      nodesByFunction,
      path,
    )
    if (isCallTreeNode(node)) {
      addStackEnd(node, frames[0], value)
    } else {
      hiddenStacks = addPlaceholder(root, HIDDEN_STACKS, value, nodesByFunction)
      hiddenStacks.selfValue += value
    }
  }

  return { root, hiddenStacks, nodesOfHottest }
}

/**
 * The outermost frames the profiler dropped from the truncated call stacks,
 * which the tree draws the stacks under.
 */
const TRUNCATED_STACKS: PlaceholderFrames = {
  type: `placeholder`,
  key: -1,
  name: TRUNCATED_FRAMES_NAME,
  notation: `showsTruncated`,
}

/** The frames of the call stacks the entry filter hides whole. */
const HIDDEN_STACKS: PlaceholderFrames = {
  type: `placeholder`,
  key: -2,
  name: OMITTED_FRAMES_NAME,
  notation: `omitsFrames`,
}

/** The nodes of the functions whose nodes are collected, indexed by ID. */
type NodesByFunction = (FunctionNode[] | undefined)[]

/** Adds {@link value} to {@link root}'s node for {@link frames}, and returns it. */
const addPlaceholder = (
  root: CallTreeRoot,
  frames: PlaceholderFrames,
  value: number,
  nodesByFunction: NodesByFunction,
): CallTreeNode => {
  const node = calleeOf(root, frames, nodesByFunction)
  node.value += value
  root.calleesValue += value
  return node
}

/**
 * Adds a call stack's {@link value} to {@link node}, its path's last node: as
 * self value when the node is the stack's {@link leaf} frame, and otherwise as
 * hidden callees.
 */
const addStackEnd = (
  node: CallTreeNode,
  leaf: AggregatedCallStackProfileFunction | undefined,
  value: number,
): void => {
  if (node.func === leaf) {
    node.selfValue += value
  } else {
    node.hiddenCalleesValue += value
  }
}

/**
 * One call stack's nodes from the outermost down, and each function's position
 * among them, reused across stacks so merging allocates nothing per stack.
 */
type StackPath = {
  nodes: FunctionNode[]
  /** Indexed by function ID, `-1` for a function off the path. */
  positionByFunction: Int32Array
  /** Indexed by position, whether the stack skips frames above the node. */
  omitsCallersAt: Uint8Array
}

/**
 * Adds {@link value} along the path of {@link frames}' shown functions from
 * {@link start}, and returns the path's last node, or {@link start} when the
 * entry filter hides every frame.
 *
 * A hidden frame gets no node, so paths that differ only in which frames are
 * hidden merge into one node, and a node below hidden frames omits them as
 * callers, as {@link CallTreeNode.omittedCallersValue}. Hidden frames above
 * every shown frame are dropped, the way a
 * formatted call stack drops a leading run of hidden frames.
 *
 * A function already on the path takes the frames after its first frame into
 * it, a recursion collapse like the Firefox Profiler's "collapse recursion"
 * transform, so a recursive function is one node per path instead of a chain
 * the line budget is spent on. The callee after a recursion collapse omits the
 * frames between it and its caller. Because a recursion collapse takes the
 * path back, the value is added only once the path is known.
 */
const mergeFrames = (
  start: CallTreeRoot,
  frames: readonly AggregatedCallStackProfileFunction[],
  value: number,
  isShown: (func: AggregatedCallStackProfileFunction) => boolean,
  nodesByFunction: NodesByFunction,
  path: StackPath,
): CallTreeRoot => {
  const { nodes, positionByFunction, omitsCallersAt } = path
  let node = start
  // Whether frames were skipped since the last node the path kept.
  let omitted = false
  // Frames are callee to caller, so the tree grows from the outermost caller
  // down.
  for (let i = frames.length - 1; i >= 0; i--) {
    const func = frames[i]!
    if (!isShown(func)) {
      omitted ||= nodes.length > 0
      continue
    }

    const position = positionByFunction[func.id]!
    if (position !== -1) {
      // The repeated call and the frames between the two calls are skipped.
      omitted = true
      node = returnToRecursiveCall(path, position)
      continue
    }
    const callee = calleeOf(node, func, nodesByFunction)
    positionByFunction[func.id] = nodes.length
    omitsCallersAt[nodes.length] = Number(omitted)
    nodes.push(callee)
    omitted = false
    node = callee
  }

  for (const [position, pathNode] of nodes.entries()) {
    pathNode.value += value
    if (omitsCallersAt[position]) {
      pathNode.omittedCallersValue += value
    }
    pathNode.caller.calleesValue += value
    positionByFunction[pathNode.func.id] = -1
  }
  nodes.length = 0
  return node
}

const returnToRecursiveCall = (
  { nodes, positionByFunction }: StackPath,
  position: number,
): CallTreeNode => {
  for (let i = position + 1; i < nodes.length; i++) {
    positionByFunction[nodes[i]!.func.id] = -1
  }
  nodes.length = position + 1
  return nodes[position]!
}

/**
 * {@link caller}'s node for {@link func}, created on first reach and indexed in
 * {@link nodesByFunction} if the function is.
 */
const calleeOf = <Func extends NodeFunction>(
  caller: CallTreeRoot,
  func: Func,
  nodesByFunction: NodesByFunction,
): CallTreeNode<Func> => {
  const { firstCallee, otherCallees } = caller
  const key = keyOf(func)
  // A node's key is its function's, so a node found by key stands for `func`.
  if (firstCallee !== undefined && keyOf(firstCallee.func) === key) {
    return firstCallee as CallTreeNode<Func>
  }
  const found = otherCallees?.get(key)
  if (found !== undefined) {
    return found as CallTreeNode<Func>
  }

  const callee = newCallTreeNode(func, caller)
  if (firstCallee === undefined) {
    caller.firstCallee = callee
  } else if (otherCallees === undefined) {
    caller.otherCallees = new Map<number, CallTreeNode>().set(key, callee)
  } else {
    otherCallees.set(key, callee)
  }
  if (isFunctionNode(callee)) {
    nodesByFunction[callee.func.id]?.push(callee)
  }
  return callee
}

const newCallTreeRoot = (): CallTreeRoot => ({
  firstCallee: undefined,
  otherCallees: undefined,
  calleesValue: 0,
  drawnCallees: NO_DRAWN_CALLEES,
})

const newCallTreeNode = <Func extends NodeFunction>(
  func: Func,
  caller: CallTreeRoot,
): CallTreeNode<Func> => ({
  firstCallee: undefined,
  otherCallees: undefined,
  calleesValue: 0,
  drawnCallees: NO_DRAWN_CALLEES,
  func,
  caller,
  value: 0,
  selfValue: 0,
  hiddenCalleesValue: 0,
  omittedCallersValue: 0,
  drawn: false,
})
