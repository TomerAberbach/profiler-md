import type { AggregatedCallStackProfileFunction } from '../aggregate.ts'
import { shareOf } from '../measure.ts'
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
  SideValues,
  TreeFunction,
} from './node.ts'

/**
 * What a tree is built from: one profile's call stacks, or both sides' of a
 * diff, with the tree's functions standing for their frames.
 */
export type CallTreeInput = {
  /**
   * The measure resolved against each side: a profile's own, or a diff's base
   * and current.
   */
  measures: readonly Measure[]

  /** One more than the largest {@link TreeFunction.id}. */
  functionCount: number

  /** The functions the tree draws a path to, in the order it draws them. */
  hottest: readonly TreeFunction[]

  isShown: (func: TreeFunction) => boolean

  /**
   * Calls {@link visit} with each side's call stacks, by the index of their
   * side in {@link measures}.
   */
  forEachCallStack: (
    visit: (
      side: number,
      frames: readonly TreeFunction[],
      truncated: boolean,
      value: number,
    ) => void,
  ) => void

  /** The function each side records for {@link func}, if any. */
  sideFunctionsOf: (
    func: TreeFunction,
  ) => readonly (AggregatedCallStackProfileFunction | undefined)[]
}

/**
 * Merges every call stack into a tree keyed on each path's functions, summing
 * the measure values of the stacks passing through each node, and collects the
 * nodes of each {@link CallTreeInput.hottest} function.
 */
export const buildCallTree = ({
  measures,
  functionCount,
  hottest,
  isShown,
  forEachCallStack,
}: CallTreeInput): {
  root: CallTreeRoot

  /** The node of the call stacks the entry filter hides whole, if any. */
  hiddenStacks: CallTreeNode | undefined

  /** Each of the hottest functions' nodes, in the same order. */
  nodesOfHottest: FunctionNode[][]
} => {
  const sideCount = measures.length
  const root = newCallTreeRoot(sideCount)
  // Only the hottest functions' nodes are read, so only theirs are collected.
  const nodesOfHottest = hottest.map((): FunctionNode[] => [])
  const nodesByFunction: NodesByFunction = new Array<
    FunctionNode[] | undefined
  >(functionCount)
  for (const [index, { id }] of hottest.entries()) {
    nodesByFunction[id] = nodesOfHottest[index]
  }
  const build: TreeBuild = { nodesByFunction, sideCount }
  const path: StackPath = {
    nodes: [],
    positionByFunction: new Int32Array(functionCount).fill(-1),
    omitsCallersAt: new Uint8Array(functionCount),
  }
  const stack: StackValue = { weight: 0, side: 0, value: 0 }
  let hiddenStacks: CallTreeNode | undefined

  forEachCallStack((side, frames, truncated, value) => {
    if (value === 0) {
      return
    }

    stack.side = side
    stack.value = value
    stack.weight = sideCount === 1 ? value : shareOf(value, measures[side]!)
    const start = truncated
      ? addPlaceholder(root, TRUNCATED_STACKS, stack, build)
      : root
    const node = mergeFrames(start, frames, stack, isShown, build, path)
    if (isCallTreeNode(node)) {
      addStackEnd(node, frames[0], stack)
    } else {
      hiddenStacks = addPlaceholder(root, HIDDEN_STACKS, stack, build)
      addTo(hiddenStacks, `selfValue`, stack)
    }
  })

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

/** What building a tree reads besides the call stack it merges. */
type TreeBuild = {
  nodesByFunction: NodesByFunction

  /** How many sides a node records values for, or 1 for a profile's tree. */
  sideCount: number
}

/** What one call stack adds to the nodes on its path. */
type StackValue = {
  /** The value the nodes are drawn by. */
  weight: number
  side: number
  /** The stack's measure value on {@link side}. */
  value: number
}

/** Adds {@link stack} to {@link root}'s node for {@link frames}, and returns it. */
const addPlaceholder = (
  root: CallTreeRoot,
  frames: PlaceholderFrames,
  stack: StackValue,
  build: TreeBuild,
): CallTreeNode => {
  const node = calleeOf(root, frames, build)
  addValue(node, stack)
  return node
}

/**
 * Adds {@link stack} to {@link node}'s value and its caller's callees' value.
 *
 * It runs for every frame of every call stack, so it writes the fields by
 * name. Building the largest committed input's tree takes about 1.5 times as
 * long when they are written through {@link addTo}'s key.
 */
const addValue = (node: CallTreeNode, { weight, side, value }: StackValue) => {
  node.value += weight
  node.caller.calleesValue += weight
  if (node.sideValues !== undefined) {
    node.sideValues[side]!.value += value
    node.caller.sideValues![side]!.calleesValue += value
  }
}

/**
 * Adds {@link stack} to {@link node}'s {@link field}: its weight to the node's,
 * and its value to its side's.
 */
const addTo = <Field extends keyof SideValues>(
  node: CallTreeRoot & Record<Field, number>,
  field: Field,
  { weight, side, value }: StackValue,
) => {
  const weights: Record<Field, number> = node
  weights[field] += weight
  if (node.sideValues !== undefined) {
    node.sideValues[side]![field] += value
  }
}

/**
 * Adds {@link stack} to {@link node}, its path's last node: as self value when
 * the node is the stack's {@link leaf} frame, and otherwise as hidden callees.
 */
const addStackEnd = (
  node: CallTreeNode,
  leaf: TreeFunction | undefined,
  stack: StackValue,
): void => {
  if (node.func === leaf) {
    addTo(node, `selfValue`, stack)
  } else {
    addTo(node, `hiddenCalleesValue`, stack)
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
 * Adds {@link stack} along the path of {@link frames}' shown functions from
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
  frames: readonly TreeFunction[],
  stack: StackValue,
  isShown: (func: TreeFunction) => boolean,
  build: TreeBuild,
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
    const callee = calleeOf(node, func, build)
    positionByFunction[func.id] = nodes.length
    omitsCallersAt[nodes.length] = Number(omitted)
    nodes.push(callee)
    omitted = false
    node = callee
  }

  for (const [position, pathNode] of nodes.entries()) {
    addValue(pathNode, stack)
    if (omitsCallersAt[position]) {
      addTo(pathNode, `omittedCallersValue`, stack)
    }
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
 * {@link TreeBuild.nodesByFunction} if the function is.
 */
const calleeOf = <Func extends NodeFunction>(
  caller: CallTreeRoot,
  func: Func,
  { nodesByFunction, sideCount }: TreeBuild,
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

  const callee = newCallTreeNode(func, caller, sideCount)
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

const newCallTreeRoot = (sideCount: number): CallTreeRoot => ({
  firstCallee: undefined,
  otherCallees: undefined,
  calleesValue: 0,
  drawnCallees: NO_DRAWN_CALLEES,
  sideValues: newSideValues(sideCount),
})

const newCallTreeNode = <Func extends NodeFunction>(
  func: Func,
  caller: CallTreeRoot,
  sideCount: number,
): CallTreeNode<Func> => ({
  firstCallee: undefined,
  otherCallees: undefined,
  calleesValue: 0,
  drawnCallees: NO_DRAWN_CALLEES,
  sideValues: newSideValues(sideCount),
  func,
  caller,
  value: 0,
  selfValue: 0,
  hiddenCalleesValue: 0,
  omittedCallersValue: 0,
  drawn: false,
})

// A profile's tree has one side, which the node's own values state.
const newSideValues = (sideCount: number): SideValues[] | undefined => {
  if (sideCount === 1) {
    return undefined
  }
  const sides = new Array<SideValues>(sideCount)
  for (let side = 0; side < sideCount; side++) {
    sides[side] = {
      value: 0,
      selfValue: 0,
      calleesValue: 0,
      hiddenCalleesValue: 0,
      omittedCallersValue: 0,
    }
  }
  return sides
}
