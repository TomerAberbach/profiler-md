import type { RootContent } from 'mdast'
import { formatCount, formatPercent } from '../../helpers/format.ts'
import { selectTopN } from '../../helpers/heap.ts'
import { code, paragraph } from '../../helpers/markdown.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import { formatProseValue } from '../measure.ts'
import type {
  AggregatedCallStackProfile,
  AggregatedCallStackProfileFunction,
} from './aggregate.ts'
import { selfRankedFunctions, selfValueOf } from './measure.ts'
import type { Measure } from './measure.ts'
import { frameLocation } from './table.ts'

/**
 * How many lines one profile's tree may fill: two per entry a ranking shows,
 * since a path to a function costs about two lines, the frame's and the total
 * of what the path leaves undrawn.
 */
export const lineBudgetOf = ({ topN }: { topN: number }): number => 2 * topN

/**
 * The share of the profile below which a value goes unstated.
 *
 * The tree draws the paths to the hottest functions rather than every path
 * worth a line, so most of what it leaves out is stated as a total instead.
 */
export const NEGLIGIBLE_SHARE = 0.005

/** The smallest share a line states as more than `<0.1%`. */
const SHARE_RESOLUTION = 0.0005

const BRANCH = `├── `
const LAST_BRANCH = `└── `
const VERTICAL = `│   `
const BLANK = `    `

/** The tree's root, which stands for the profile rather than a function. */
type CallTreeRoot = {
  /**
   * The first callee reached, kept apart from the others since most nodes
   * have one callee, so they need no map.
   */
  firstChild: CallTreeNode | undefined

  /** The callees after the first, keyed by function ID. */
  otherChildren: Map<number, CallTreeNode> | undefined

  /** The summed value of the node's callees. */
  childrenValue: number

  /**
   * The children on a path the tree draws, in insertion order, or
   * {@link NO_DRAWN_CHILDREN} until one is drawn.
   */
  drawnChildren: CallTreeNode[]
}

/** The drawn children every node shares until its first is drawn. */
const NO_DRAWN_CHILDREN: CallTreeNode[] = Object.freeze([]) as never

/** One function, reached by one path of callers from the root. */
type CallTreeNode = CallTreeRoot & {
  func: AggregatedCallStackProfileFunction
  caller: CallTreeRoot

  /** The measure value of every call stack passing through this node. */
  value: number

  /** The measure value of the call stacks whose leaf frame is this node. */
  selfValue: number

  /**
   * The measure value of the call stacks whose frames below this node are all
   * hidden, which counts toward its callees' value.
   */
  hiddenCalleesValue: number

  /**
   * For a node its caller reached by returning from a recursive call, the
   * fewest and most frames its call stacks skipped between the two, which the
   * node's line states as hidden callers. Its caller keeps it apart from the
   * node of a direct call, since that call skips nothing.
   */
  skippedFrames: { min: number; max: number } | undefined

  /** Whether the node is one of its caller's {@link drawnChildren}. */
  drawn: boolean
}

/**
 * The paths to the profile's hottest functions, merged into a tree of callers,
 * or nothing when no path is drawn.
 */
export const formatCallTree = ({
  profile,
  measure,
  options,
}: {
  profile: AggregatedCallStackProfile
  measure: Measure
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const { render } = drawCallTree({ profile, measure, options })
  if (render.lines.length === 0) {
    return []
  }

  return [paragraph(`Call paths to the hottest functions.`), code(render.lines)]
}

/** A drawn call tree: its rendered lines, and the nodes they draw from. */
type CallTree = {
  root: CallTreeRoot
  terminals: ReadonlySet<CallTreeNode>

  /** The value below which no line accounts for a node's undrawn callees. */
  negligible: number

  render: CallTreeRender
}

/** Builds the profile's call tree and draws the paths to its hottest functions. */
const drawCallTree = ({
  profile,
  measure,
  options,
}: {
  profile: AggregatedCallStackProfile
  measure: Measure
  options: FormattingProfileToMdOptions
}): CallTree => {
  const lineBudget = lineBudgetOf(options)
  const hottest = hottestFunctions(profile, measure, options, lineBudget)
  const { root, nodesOfHottest, selfStacksByFunction } = buildCallTree(
    profile,
    measure,
    options,
    hottest,
  )
  const tree: DrawnCallTree = {
    root,
    terminals: new Set(),
    selfStacksByFunction,
    lineBudget,
    negligible: NEGLIGIBLE_SHARE * measure.total,
    measure,
    options,
  }
  // Half the lines map where the profile's value goes, so the paths to the
  // hottest functions are drawn against branches already stated.
  const structureLines = Math.floor(lineBudget / 2)
  drawLargestBranches(tree, structureLines)
  nameLoneCallees(tree, structureLines)
  drawHottestFunctions(tree, nodesOfHottest)
  drawLargestBranches(tree, lineBudget)
  nameLoneCallees(tree, lineBudget)
  return {
    root,
    terminals: tree.terminals,
    negligible: tree.negligible,
    render: renderCallTree(tree),
  }
}

/** The nodes of the functions whose nodes are collected, indexed by ID. */
type NodesByFunction = (CallTreeNode[] | undefined)[]

/**
 * Merges every call stack into a tree keyed on each path's functions, summing
 * the measure values of the stacks passing through each node, and collects the
 * nodes of each {@link hottest} function.
 *
 * A hidden frame contributes its value to the nearest shown caller instead of
 * a node of its own. One hidden above every shown frame is dropped, the way a
 * formatted call stack drops a leading run of hidden frames.
 *
 * Paths that differ only in hidden frames merge into one node, so the call
 * stacks ending in each function are counted apart from the nodes.
 *
 * A function already on a stack's path collapses the frames after its first
 * frame into it, as the Firefox Profiler's "collapse recursion" transform
 * does, so a recursive function is one node per path instead of a chain the
 * line budget is spent on. The callee after a collapse records the frames it
 * skipped, which its line states as hidden callers.
 */
const buildCallTree = (
  { callStacks, functions, context }: AggregatedCallStackProfile,
  measure: Measure,
  { showEntry }: FormattingProfileToMdOptions,
  hottest: AggregatedCallStackProfileFunction[],
): {
  root: CallTreeRoot
  /** Each of the {@link hottest} functions' nodes, in the same order. */
  nodesOfHottest: CallTreeNode[][]
  selfStacksByFunction: Uint32Array
} => {
  const root = newCallTreeRoot()
  // Only the hottest functions' nodes are read, so only theirs are collected.
  const nodesOfHottest = hottest.map((): CallTreeNode[] => [])
  const nodesByFunction: NodesByFunction = new Array<
    CallTreeNode[] | undefined
  >(functions.length)
  for (const [index, { id }] of hottest.entries()) {
    nodesByFunction[id] = nodesOfHottest[index]
  }
  const selfStacksByFunction = new Uint32Array(functions.length)
  const path: StackPath = {
    nodes: [],
    skipped: [],
    positionByFunction: new Int32Array(functions.length).fill(-1),
  }

  const isShown = (func: AggregatedCallStackProfileFunction): boolean =>
    showEntry(func, context)
  for (const callStack of callStacks) {
    const value = selfValueOf(measure, callStack)
    if (value === 0) {
      continue
    }

    const { frames, truncated } = callStack
    let start: CallTreeRoot = root
    if (truncated) {
      const truncatedNode = childOf(root, TRUNCATED, nodesByFunction)
      truncatedNode.value += value
      root.childrenValue += value
      start = truncatedNode
    }
    const node = mergeFrames(
      start,
      frames,
      value,
      isShown,
      nodesByFunction,
      path,
    )
    if (!isCallTreeNode(node)) {
      continue
    }
    if (node.func === frames[0]) {
      node.selfValue += value
      selfStacksByFunction[node.func.id]!++
    } else {
      // A hidden leaf frame's value is its shown caller's callees', not that
      // caller's self value.
      node.hiddenCalleesValue += value
      node.childrenValue += value
    }
  }

  return { root, nodesOfHottest, selfStacksByFunction }
}

/**
 * One call stack's nodes from the outermost down, and each function's position
 * among them, reused across stacks so merging allocates nothing per stack.
 */
type StackPath = {
  nodes: CallTreeNode[]
  /** How many frames a collapse skipped before each of {@link nodes}. */
  skipped: number[]
  /** Indexed by function ID, `-1` for a function off the path. */
  positionByFunction: Int32Array
}

/**
 * Adds {@link value} along the path of {@link frames}' shown functions from
 * {@link start}, recording each hidden function on its nearest shown caller,
 * and returns the path's last node.
 *
 * A function already on the path takes the path back to its node, so the
 * value is added only once the path is known.
 */
const mergeFrames = (
  start: CallTreeRoot,
  frames: readonly AggregatedCallStackProfileFunction[],
  value: number,
  isShown: (func: AggregatedCallStackProfileFunction) => boolean,
  nodesByFunction: NodesByFunction,
  { nodes, skipped, positionByFunction }: StackPath,
): CallTreeRoot => {
  let node = start
  // The frames skipped since the last node the path kept.
  let pendingSkipped = 0
  // Frames are callee to caller, so the tree grows from the outermost caller
  // down.
  for (let i = frames.length - 1; i >= 0; i--) {
    const func = frames[i]!
    if (!isShown(func)) {
      continue
    }

    const position = positionByFunction[func.id]!
    if (position !== -1) {
      // The repeated call and the frames between the two calls are skipped.
      pendingSkipped += nodes.length - position
      for (let j = position + 1; j < nodes.length; j++) {
        positionByFunction[nodes[j]!.func.id] = -1
      }
      nodes.length = position + 1
      skipped.length = position + 1
      node = nodes[position]!
      continue
    }
    const child = childOf(node, func, nodesByFunction, pendingSkipped > 0)
    positionByFunction[func.id] = nodes.length
    nodes.push(child)
    skipped.push(pendingSkipped)
    pendingSkipped = 0
    node = child
  }

  for (const [index, pathNode] of nodes.entries()) {
    pathNode.value += value
    pathNode.caller.childrenValue += value
    positionByFunction[pathNode.func.id] = -1
    const { skippedFrames } = pathNode
    if (skippedFrames !== undefined) {
      skippedFrames.min = Math.min(skippedFrames.min, skipped[index]!)
      skippedFrames.max = Math.max(skippedFrames.max, skipped[index]!)
    }
  }
  nodes.length = 0
  skipped.length = 0
  return node
}

/**
 * {@link caller}'s node for {@link func}, reached by returning from a
 * recursive call if {@link afterCollapse}, created on first reach and indexed
 * in {@link nodesByFunction} if the function is.
 */
const childOf = (
  caller: CallTreeRoot,
  func: AggregatedCallStackProfileFunction,
  nodesByFunction: NodesByFunction,
  afterCollapse = false,
): CallTreeNode => {
  const { firstChild, otherChildren } = caller
  if (
    firstChild?.func.id === func.id &&
    (firstChild.skippedFrames !== undefined) === afterCollapse
  ) {
    return firstChild
  }
  // A callee reached after a collapse is keyed apart from a direct call, by a
  // negative key that no function ID or the truncated stacks' -1 takes.
  const key = afterCollapse ? collapseKeyOf(func.id) : func.id
  let child = otherChildren?.get(key)
  if (child !== undefined) {
    return child
  }

  child = {
    firstChild: undefined,
    otherChildren: undefined,
    childrenValue: 0,
    drawnChildren: NO_DRAWN_CHILDREN,
    func,
    caller,
    value: 0,
    selfValue: 0,
    hiddenCalleesValue: 0,
    skippedFrames: afterCollapse
      ? { min: Number.POSITIVE_INFINITY, max: 0 }
      : undefined,
    drawn: false,
  }
  if (firstChild === undefined) {
    caller.firstChild = child
  } else if (otherChildren === undefined) {
    caller.otherChildren = new Map([[key, child]])
  } else {
    otherChildren.set(key, child)
  }
  nodesByFunction[func.id]?.push(child)
  return child
}

/**
 * The function standing for the outermost frames the profiler dropped from a
 * truncated call stack, which the tree draws those stacks under. Its ID is no
 * function's.
 */
const TRUNCATED: AggregatedCallStackProfileFunction = {
  type: `function`,
  id: -1,
  name: `[[truncated call stacks]]`,
  category: `unknown`,
  selfCount: 0,
  totalCount: 0,
  selfValues: new Float64Array(),
  totalValues: new Float64Array(),
  lineToMetrics: new Map(),
  callerIdToMetrics: new Map(),
  calleeIdToMetrics: new Map(),
}

const newCallTreeRoot = (): CallTreeRoot => ({
  firstChild: undefined,
  otherChildren: undefined,
  childrenValue: 0,
  drawnChildren: NO_DRAWN_CHILDREN,
})

/**
 * Draws the path to each of the hottest functions in turn, keeping every path
 * that leaves the tree within its line budget.
 *
 * Ranking the functions by self value and drawing them in that order spends
 * the budget on the functions a reader came to find. Merging a path costs
 * about two lines whatever its depth, because a drawn frame's line hides
 * the callers above it, so a hotter function is never passed over for a
 * colder one that happens to sit nearer the root. A path that would overrun
 * the budget is dropped and the next function tried, since a colder function
 * may still fit.
 */
const drawHottestFunctions = (
  tree: DrawnCallTree,
  nodesOfHottest: CallTreeNode[][],
): void => {
  for (const nodes of nodesOfHottest) {
    const terminal = hottestNodeOf(nodes)
    // A function whose value is spread too thin for any path to state more
    // than `<0.1%` is left to the rankings, which state it whole.
    if (
      terminal !== undefined &&
      terminal.value >= SHARE_RESOLUTION * tree.measure.total
    ) {
      drawPathIfItFits(tree, terminal)
    }
  }
}

/** Draws the path to {@link terminal}, and takes it back if it overruns. */
const drawPathIfItFits = (
  tree: DrawnCallTree,
  terminal: CallTreeNode,
): void => {
  const added = drawPath(terminal)
  tree.terminals.add(terminal)
  if (!fitsLineBudget(tree)) {
    tree.terminals.delete(terminal)
    for (const node of added) {
      undrawLast(node)
    }
  }
}

/** The functions the tree draws a path to, hottest by self value first. */
const hottestFunctions = (
  profile: AggregatedCallStackProfile,
  measure: Measure,
  options: FormattingProfileToMdOptions,
  lineBudget: number,
): AggregatedCallStackProfileFunction[] =>
  selectTopN(
    selfRankedFunctions(profile, measure, options),
    // No tree draws more functions than it has lines.
    lineBudget,
    func => selfValueOf(measure, func),
  )

/**
 * The node holding the most of a function's cost, if it has any.
 *
 * Functions are ranked by self value, but the node with the most total value
 * is chosen over the node with the most self value. That node is usually on a
 * path already drawn, so drawing it costs about one line. The node with the most
 * self value is usually on a branch of its own, which costs a frame line and
 * a total, so fewer functions fit the budget. `pnpm evaluate-call-tree`
 * scores fewer functions drawn and a lower share of self value covered when the
 * node is chosen by self value.
 */
const hottestNodeOf = (nodes: CallTreeNode[]): CallTreeNode | undefined =>
  nodes.length === 0
    ? undefined
    : nodes.reduce((hottest, node) =>
        node.value > hottest.value ||
        (node.value === hottest.value && node.selfValue > hottest.selfValue)
          ? node
          : hottest,
      )

/**
 * Draws {@link terminal} and its undrawn callers, returning the nodes that
 * were added so the path can be taken back.
 */
const drawPath = (terminal: CallTreeNode): CallTreeNode[] => {
  const added: CallTreeNode[] = []
  for (
    let node: CallTreeRoot = terminal;
    isCallTreeNode(node) && !node.drawn;
    node = node.caller
  ) {
    draw(node)
    added.push(node)
  }
  return added
}

const draw = (node: CallTreeNode): void => {
  node.drawn = true
  const { caller } = node
  if (caller.drawnChildren === NO_DRAWN_CHILDREN) {
    caller.drawnChildren = []
  }
  caller.drawnChildren.push(node)
}

/** Takes back {@link node}, the last of its caller's drawn children. */
const undrawLast = (node: CallTreeNode): void => {
  node.drawn = false
  node.caller.drawnChildren.pop()
}

const isCallTreeNode = (node: CallTreeRoot): node is CallTreeNode =>
  `func` in node

/**
 * Draws the callee a total was standing in for on its own, wherever one branch
 * is all a total stands for and the tree still fits.
 *
 * Totalling one branch costs the line its function would take, so the total
 * states a number where the tree could have stated a function.
 */
const nameLoneCallees = (tree: DrawnCallTree, lineLimit: number): void => {
  // Naming one callee can leave its own callee as the next lone total, so the
  // pass repeats, bounded by the lines it can add.
  for (let pass = 0; pass < tree.lineBudget; pass++) {
    const callees = loneTotalledCallees(tree)
    if (callees.length === 0) {
      break
    }

    let drewAny = false
    for (const callee of callees) {
      draw(callee)
      if (fitsLines(tree, lineLimit)) {
        drewAny = true
      } else {
        undrawLast(callee)
      }
    }
    if (!drewAny) {
      break
    }
  }
}

/**
 * Draws the largest callee a total stands for, in turn, while the tree fits in
 * {@link lineLimit} lines.
 *
 * Drawing the largest branches first states where most of the profile's value
 * goes, which the paths to the hottest functions alone leave in totals when no
 * hot function sits in a large branch. `pnpm evaluate-call-tree` scores a
 * smaller largest total and the branches' shares read more accurately than
 * when the paths are drawn alone.
 */
const drawLargestBranches = (tree: DrawnCallTree, lineLimit: number): void => {
  const overran = new Set<CallTreeNode>()
  // Each pass draws a callee or rules one out.
  for (let pass = 0; pass < 2 * tree.lineBudget; pass++) {
    const callee = largestTotalledCallee(tree, overran)
    if (callee === undefined) {
      break
    }
    draw(callee)
    if (!fitsLines(tree, lineLimit)) {
      undrawLast(callee)
      overran.add(callee)
    }
  }
}

/**
 * The largest callee a total stands for, other than {@link excluded}, among
 * those whose line would state more than `<0.1%`.
 */
const largestTotalledCallee = (
  { root, negligible, measure }: DrawnCallTree,
  excluded: ReadonlySet<CallTreeNode>,
): CallTreeNode | undefined => {
  const resolution = SHARE_RESOLUTION * measure.total
  let largest: UndrawnBranch | undefined
  const pending: CallTreeRoot[] = [root]
  while (pending.length > 0) {
    const node = pending.pop()!
    pending.push(...node.drawnChildren)
    if (undrawnValueOf(node) < negligible) {
      continue
    }
    // A profile with no value has a negligible value of 0, so a node may
    // total nothing.
    const hottest = undrawnBranchesOf(node)?.hottest
    if (
      hottest !== undefined &&
      hottest.value >= resolution &&
      !excluded.has(hottest.node) &&
      (largest === undefined || hottest.value > largest.value)
    ) {
      largest = hottest
    }
  }
  return largest?.node
}

/**
 * The callees that are the whole of what a total stands for, largest first.
 */
const loneTotalledCallees = ({
  root,
  negligible,
}: DrawnCallTree): CallTreeNode[] => {
  const callees: CallTreeNode[] = []
  const pending: CallTreeRoot[] = [root]
  while (pending.length > 0) {
    const node = pending.pop()!
    pending.push(...node.drawnChildren)
    if (undrawnValueOf(node) < negligible) {
      continue
    }
    const undrawn = undrawnBranchesOf(node)
    if (undrawn?.count === 1) {
      callees.push(undrawn.hottest.node)
    }
  }
  return callees.sort((left, right) => right.value - left.value)
}

/** The tree's drawn frames, and what they are drawn against. */
type DrawnCallTree = Omit<CallTree, `terminals` | `render`> & {
  /** The nodes of the hottest functions, whose paths the tree draws. */
  terminals: Set<CallTreeNode>

  /** How many call stacks end in each function, indexed by its ID. */
  selfStacksByFunction: Uint32Array

  lineBudget: number
  measure: Measure
  options: FormattingProfileToMdOptions
}

/** A rendered tree, and how many of its lines stand for no single function. */
type CallTreeRender = {
  lines: string[]

  /**
   * Each function's line holding the most of its self value, keyed by its ID,
   * which states its self value across every call path to it.
   */
  selfNoteFrames: Map<number, CallTreeNode>

  /** The lines hiding a run of callers. */
  joinedRuns: number

  /** The lines totalling a frame's undrawn callees. */
  summaries: number
}

const renderCallTree = (tree: DrawnCallTree): CallTreeRender => {
  const render: CallTreeRender = {
    lines: [],
    selfNoteFrames: selfNoteFramesOf(tree),
    joinedRuns: 0,
    summaries: 0,
  }
  countLines(tree, render)
  return render
}

/**
 * The drawn frame of each function that holds the most of its self value,
 * among the frames with a line of their own.
 *
 * The tree draws a function on the paths it chooses, so one called from many
 * places would otherwise look as small as its share on those paths.
 */
const selfNoteFramesOf = (tree: DrawnCallTree): Map<number, CallTreeNode> => {
  const frames = new Map<number, CallTreeNode>()
  const pending: CallTreeRoot[] = [tree.root]
  while (pending.length > 0) {
    for (const child of pending.pop()!.drawnChildren) {
      const { deepest } = runFrom(child, tree)
      const noted = frames.get(deepest.func.id)
      if (
        noted === undefined ||
        deepest.selfValue > noted.selfValue ||
        (deepest.selfValue === noted.selfValue && deepest.value > noted.value)
      ) {
        frames.set(deepest.func.id, deepest)
      }
      pending.push(deepest)
    }
  }
  return frames
}

/**
 * Whether the tree as drawn fits its line budget, counted without formatting
 * a line, since a trial drawing checks only that.
 */
const fitsLineBudget = (tree: DrawnCallTree): boolean =>
  fitsLines(tree, tree.lineBudget)

const fitsLines = (tree: DrawnCallTree, lineLimit: number): boolean =>
  countLines(tree, undefined) <= lineLimit

/** Counts the tree's lines, and renders them into {@link render} if given. */
const countLines = (
  tree: DrawnCallTree,
  render: CallTreeRender | undefined,
): number => {
  const { root, negligible } = tree
  let lineCount = 0

  // `namedAbove` is the function on the line above a line's frame,
  // which the frame's location is shortened against.
  const renderChildren = (
    node: CallTreeRoot,
    namedAbove: AggregatedCallStackProfileFunction | undefined,
    prefix: string,
  ): void => {
    // A count needs no order, and no line's glyph.
    const shown = render
      ? byStatedValue(node.drawnChildren, tree)
      : node.drawnChildren
    // Callees' values are positive, so a value left over means a callee went
    // undrawn, and a count needs no scan of a wide node's callees to find it.
    // A profile with no value has a negligible value of 0, so the leftover
    // must also be positive.
    const summarizedValue = undrawnValueOf(node)
    const summarized = summarizedValue > 0 && summarizedValue >= negligible

    for (const [index, child] of shown.entries()) {
      renderBranch(
        child,
        index === shown.length - 1 && !summarized,
        namedAbove,
        prefix,
      )
    }

    if (summarized) {
      lineCount++
      if (render) {
        render.summaries++
        render.lines.push(
          prefix +
            LAST_BRANCH +
            formatSummary(node, summarizedValue, namedAbove, tree),
        )
      }
    }
  }

  // Renders the run from `child` down to the next frame with a line of its
  // own, then that frame's children.
  const renderBranch = (
    child: CallTreeNode,
    last: boolean,
    namedAbove: AggregatedCallStackProfileFunction | undefined,
    prefix: string,
  ): void => {
    const run = runFrom(child, tree)
    const { hidden, deepest } = run

    lineCount++
    if (render) {
      if (hidden !== undefined) {
        render.joinedRuns++
      }
      render.lines.push(
        prefix +
          (last ? LAST_BRANCH : BRANCH) +
          formatFrame(run, namedAbove, tree, render),
      )
    }

    renderChildren(deepest, deepest.func, prefix + (last ? BLANK : VERTICAL))
  }

  renderChildren(root, undefined, ``)
  return lineCount
}

/**
 * {@link children}, largest first by the value each one's line states, which is
 * its run's deepest frame's rather than its own when the line hides callers.
 */
const byStatedValue = (
  children: readonly CallTreeNode[],
  tree: DrawnCallTree,
): CallTreeNode[] =>
  children
    .map(child => ({ child, value: runFrom(child, tree).deepest.value }))
    .sort((left, right) => right.value - left.value)
    .map(({ child }) => child)

/**
 * The line of a run's deepest frame, stating the callers it hides, after its
 * glyphs.
 */
const formatFrame = (
  run: Run,
  namedAbove: AggregatedCallStackProfileFunction | undefined,
  tree: DrawnCallTree,
  { selfNoteFrames }: CallTreeRender,
): string => {
  const { measure, options } = tree
  const { deepest } = run
  const hiddenCallers = formatHiddenCallers(run)
  // The location goes last, since it is the part of a line that runs longest.
  return (
    formatMeasured(deepest.value, measure) +
    hiddenCallers +
    deepest.func.name +
    formatSelf(deepest, selfNoteFrames.get(deepest.func.id) === deepest, tree) +
    // A frame below hidden callers is not below the frame on the line above.
    formatTreeLocation(
      deepest.func,
      hiddenCallers === `` ? namedAbove : undefined,
      options,
    )
  )
}

/**
 * {@link node}'s self value where it is enough to state, and on its function's
 * {@link noted} frame, the function's self value across every call path to it
 * where the other paths hold enough of it to state.
 */
const formatSelf = (
  node: CallTreeNode,
  noted: boolean,
  { negligible, measure, selfStacksByFunction }: DrawnCallTree,
): string => {
  if (node.func === TRUNCATED) {
    return ``
  }
  const parts: string[] = []
  // A frame whose value is all self states it as its value already.
  const statesSelf =
    node.selfValue > 0 &&
    node.selfValue >= negligible &&
    node.selfValue < node.value
  if (statesSelf) {
    parts.push(`self ${formatPercent(node.selfValue / measure.total)}`)
  }
  const value = selfValueOf(measure, node.func)
  if (noted && value >= negligible && value - node.selfValue >= negligible) {
    parts.push(
      `${formatPercent(value / measure.total)}${statesSelf ? `` : ` self`} in ${formatCount(selfStacksByFunction[node.func.id]!, `call stack`)}`,
    )
  }
  return parts.length === 0 ? `` : `  (${parts.join(`; `)})`
}

/**
 * The line totalling {@link node}'s undrawn callees, after its glyphs: how many
 * there are, the largest two of them with their shares, and the largest one's
 * location.
 */
const formatSummary = (
  node: CallTreeRoot,
  summarizedValue: number,
  namedAbove: AggregatedCallStackProfileFunction | undefined,
  { measure, options, negligible }: DrawnCallTree,
): string => {
  const measured = formatMeasured(summarizedValue, measure)
  const share = (value: number) => `(${formatPercent(value / measure.total)})`
  const hiddenCalleesValue = isCallTreeNode(node) ? node.hiddenCalleesValue : 0
  const undrawn = undrawnBranchesOf(node)
  if (undrawn === undefined) {
    return `${measured}${HIDDEN_CALLEES}`
  }
  const hidden =
    hiddenCalleesValue >= negligible
      ? `, plus ${HIDDEN_CALLEES} ${share(hiddenCalleesValue)}`
      : ``

  const { count, hottest, second } = undrawn
  const branches = measured + formatCount(count, `more branch`)
  // A branch below a collapse is not below the frame on the line above.
  const location = formatTreeLocation(
    hottest.node.func,
    hottest.node.skippedFrames === undefined ? namedAbove : undefined,
    options,
  )
  if (count === 1) {
    return `${branches}, ${hottest.node.func.name}${location}${hidden}`
  }
  const secondName =
    second !== undefined && second.value >= negligible
      ? ` and ${second.node.func.name} ${share(second.value)}`
      : ``
  return `${branches}, largest ${hottest.node.func.name} ${share(hottest.value)}${location}${secondName}${hidden}`
}

/** What a summary line calls the frames the entry filter hides below a node. */
const HIDDEN_CALLEES = `hidden callees`

/**
 * The callees of a node on no drawn path: how many functions they are, and the
 * two with the largest values.
 *
 * A total alone states how much a reader is not seeing without stating what
 * any of it is, so the line states the branches worth following first.
 */
type UndrawnBranches = {
  count: number
  hottest: UndrawnBranch
  second: UndrawnBranch | undefined
}

/**
 * One function's undrawn callee nodes: its direct call's and its call after a
 * collapse, summed into {@link value}, with the larger as {@link node}.
 */
type UndrawnBranch = { node: CallTreeNode; value: number }

/** {@link caller}'s undrawn callees, if it has any. */
const undrawnBranchesOf = (
  caller: CallTreeRoot,
): UndrawnBranches | undefined => {
  const branches: Partial<UndrawnBranches> & { count: number } = { count: 0 }
  const add = (child: CallTreeNode): void => {
    if (!isUndrawnBranch(child)) {
      return
    }
    const sibling = collapseSiblingOf(caller, child)
    let branch: UndrawnBranch = { node: child, value: child.value }
    if (sibling !== undefined && isUndrawnBranch(sibling)) {
      // The direct call's node counts both.
      if (child.skippedFrames !== undefined) {
        return
      }
      branch = {
        node: sibling.value > child.value ? sibling : child,
        value: child.value + sibling.value,
      }
    }
    branches.count++
    const { hottest, second } = branches
    if (hottest === undefined || branch.value > hottest.value) {
      branches.second = hottest
      branches.hottest = branch
    } else if (second === undefined || branch.value > second.value) {
      branches.second = branch
    }
  }
  if (caller.firstChild !== undefined) {
    add(caller.firstChild)
  }
  for (const child of caller.otherChildren?.values() ?? []) {
    add(child)
  }
  const { count, hottest, second } = branches
  return hottest && { count, hottest, second }
}

// Collapsed recursion can leave a node no stack's path kept, with no value.
const isUndrawnBranch = (node: CallTreeNode): boolean =>
  !node.drawn && node.value > 0

/**
 * {@link caller}'s other node for {@link child}'s function: the call after a
 * collapse for a direct call, and the direct call for a call after a collapse.
 */
const collapseSiblingOf = (
  caller: CallTreeRoot,
  child: CallTreeNode,
): CallTreeNode | undefined => {
  const { firstChild, otherChildren } = caller
  if (firstChild !== child && firstChild?.func.id === child.func.id) {
    return firstChild
  }
  const { id } = child.func
  const sibling = otherChildren?.get(
    child.skippedFrames === undefined ? collapseKeyOf(id) : id,
  )
  return sibling === child ? undefined : sibling
}

/** The key a caller's node for a call after a collapse is stored under. */
const collapseKeyOf = (id: number): number => -id - 2

/** The summed value of the children {@link node} draws no path to. */
const undrawnValueOf = (node: CallTreeRoot): number => {
  let drawnValue = 0
  for (const child of node.drawnChildren) {
    drawnValue += child.value
  }
  return node.childrenValue - drawnValue
}

/**
 * The callers from a drawn frame down to the next frame with a line of its own,
 * and that frame, whose line hides them.
 *
 * The frames between are no function a reader came for, so the line states how
 * many they are instead of spending a line on each, however many they are.
 */
type Run = {
  /** At least two callers, since a lone caller is named instead. */
  hidden: [CallTreeNode, ...CallTreeNode[]] | undefined
  deepest: CallTreeNode
}

/**
 * The run from {@link node} down to the first frame that is a hottest
 * function, holds enough self value to state, or leads to more than one drawn
 * callee, or before the run leaves enough undrawn to state.
 */
const runFrom = (
  node: CallTreeNode,
  { terminals, negligible }: DrawnCallTree,
): Run => {
  const passed: CallTreeNode[] = []
  let deepest = node
  while (
    !terminals.has(deepest) &&
    deepest.func !== TRUNCATED &&
    deepest.selfValue < negligible &&
    deepest.drawnChildren.length === 1 &&
    // Each frame's undrawn callees may be too small to state, but the line
    // states only the deepest frame's value, so what the run leaves undrawn
    // must be too small to state in total.
    node.value - deepest.drawnChildren[0]!.value < negligible
  ) {
    passed.push(deepest)
    deepest = deepest.drawnChildren[0]!
  }

  const [first, ...rest] = passed
  // Hiding one frame saves no line, so it gets its own.
  return first === undefined || rest.length === 0
    ? { hidden: undefined, deepest: node }
    : { hidden: [first, ...rest], deepest }
}

/** A frame's value and its share of the profile, leading the frame's name. */
const formatMeasured = (value: number, { metric, total }: Measure): string =>
  `${formatProseValue(value, metric)} (${formatPercent(value / total)}) `

/**
 * The callers a run's line hides between its deepest frame and the frame drawn
 * above it: the run's passed callers, and the frames each collapse along it
 * skipped. A collapse merges call stacks that skipped different numbers of
 * frames, so the count is the range between the fewest and the most.
 */
const formatHiddenCallers = ({ hidden, deepest }: Run): string => {
  const passed = hidden ?? []
  let min = passed.length
  let max = passed.length
  let collapsed = false
  for (const { skippedFrames } of [...passed, deepest]) {
    if (skippedFrames !== undefined) {
      min += skippedFrames.min
      max += skippedFrames.max
      collapsed = true
    }
  }
  if (hidden === undefined && !collapsed) {
    return ``
  }
  return min === max
    ? `[[via ${formatCount(min, `frame`)}]] `
    : `[[via ${min}–${max} frames]] `
}

/**
 * {@link func}'s location, separated from its name and shortened to the line
 * and column when {@link namedAbove} is in the same source.
 */
const formatTreeLocation = (
  func: AggregatedCallStackProfileFunction,
  namedAbove: AggregatedCallStackProfileFunction | undefined,
  options: FormattingProfileToMdOptions,
): string => {
  const location = frameLocation(func, namedAbove, options)
  if (location === undefined) {
    return ``
  }
  // A leading colon marks the line as one in the source of the frame above, which
  // a bare number after a name would not.
  return `  ${location.shortened ? `:` : ``}${location.text}`
}
