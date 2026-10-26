import type { AggregatedCallStackProfileFunction } from '../aggregate.ts'
import type { ShownFrameNotation } from '../table.ts'

/** The tree's root, which stands for the profile rather than a function. */
export type CallTreeRoot = {
  /**
   * The first callee reached, kept apart from the others since most nodes
   * have one callee, so they need no map.
   */
  firstCallee: CallTreeNode | undefined

  /** The callees after the first, keyed by {@link keyOf}. */
  otherCallees: Map<number, CallTreeNode> | undefined

  /** The summed value of the node's callees, apart from its hidden callees. */
  calleesValue: number

  /**
   * The callees on a path the tree draws, in insertion order, or
   * {@link NO_DRAWN_CALLEES} until one is drawn.
   */
  drawnCallees: CallTreeNode[]
}

/** The drawn callees every node shares until its first is drawn. */
export const NO_DRAWN_CALLEES: CallTreeNode[] = Object.freeze([]) as never

/** What a node stands for: a function, or frames no function stands for. */
export type NodeFunction =
  AggregatedCallStackProfileFunction | PlaceholderFrames

/**
 * Frames a node stands for that are no function, which its line names with
 * notation the profile section explains.
 */
export type PlaceholderFrames = {
  type: `placeholder`

  /** The key a caller's node for the frames is stored under. */
  key: number

  name: string
  notation: keyof ShownFrameNotation
}

/** One {@link NodeFunction}, reached by one path of callers from the root. */
export type CallTreeNode<Func extends NodeFunction = NodeFunction> =
  CallTreeRoot & {
    func: Func
    caller: CallTreeRoot

    /** The measure value of every call stack passing through this node. */
    value: number

    /** The measure value of the call stacks whose leaf frame is this node. */
    selfValue: number

    /**
     * The measure value of the call stacks whose frames below this node are all
     * hidden, which its line states as omitted callees.
     */
    hiddenCalleesValue: number

    /**
     * The measure value of the call stacks that skip frames between its caller
     * and it, because the entry filter hides them or because the caller was
     * reached by returning from a recursive call. Formatting decides from it
     * whether the node's line omits them.
     */
    omittedCallersValue: number

    /** Whether the node is one of its caller's {@link drawnCallees}. */
    drawn: boolean
  }

export type FunctionNode = CallTreeNode<AggregatedCallStackProfileFunction>

/**
 * The key a caller's node for {@link func} is stored under: a function's ID,
 * or for placeholder frames, a negative key no function ID takes.
 */
export const keyOf = (func: NodeFunction): number =>
  func.type === `function` ? func.id : func.key

export const isFunctionNode = (node: CallTreeNode): node is FunctionNode =>
  node.func.type === `function`

/** Every callee of the node, in the order they were reached. */
export const calleesOf = ({
  firstCallee,
  otherCallees,
}: CallTreeRoot): CallTreeNode[] => {
  if (firstCallee === undefined) {
    return []
  }
  return otherCallees === undefined
    ? [firstCallee]
    : [firstCallee, ...otherCallees.values()]
}

export const isCallTreeNode = (node: CallTreeRoot): node is CallTreeNode =>
  `func` in node

/**
 * The summed value of the callees {@link node} draws no path to, apart from
 * its hidden callees, which its line states as omitted.
 */
export const undrawnValueOf = (node: CallTreeRoot): number => {
  let drawnValue = 0
  for (const callee of node.drawnCallees) {
    drawnValue += callee.value
  }
  return node.calleesValue - drawnValue
}
