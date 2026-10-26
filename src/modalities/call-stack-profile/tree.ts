import type { RootContent } from 'mdast'
import {
  formatCount,
  formatPercent,
  PERCENT_RESOLUTION,
} from '../../helpers/format.ts'
import { selectTopN } from '../../helpers/heap.ts'
import { code, paragraph } from '../../helpers/markdown.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import { formatProseValue } from '../measure.ts'
import type {
  AggregatedCallStackProfile,
  AggregatedCallStackProfileFunction,
} from './aggregate.ts'
import {
  NEGLIGIBLE_SHARE,
  selfRankedFunctions,
  selfValueOf,
} from './measure.ts'
import type { Measure } from './measure.ts'
import {
  frameLocation,
  newShownFrameNotation,
  OMITTED_FRAMES_NAME,
  TRUNCATED_FRAMES_NAME,
} from './table.ts'
import type { ShownFrameNotation } from './table.ts'

/**
 * How many lines one profile's tree may fill: two per entry a ranking shows,
 * since a path to a function costs about two lines, the frame's and the total
 * of what the path leaves undrawn.
 */
export const lineBudgetOf = ({ topN }: { topN: number }): number => 2 * topN

const BRANCH = `├── `
const LAST_BRANCH = `└── `
const VERTICAL = `│   `
const BLANK = `    `

const glyph = (prefix: string, last: boolean): string =>
  prefix + (last ? LAST_BRANCH : BRANCH)

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
const NO_DRAWN_CALLEES: CallTreeNode[] = Object.freeze([]) as never

/** What a node stands for: a function, or frames no function stands for. */
type NodeFunction = AggregatedCallStackProfileFunction | PlaceholderFrames

/**
 * Frames a node stands for that are no function, which its line names with
 * notation the profile section explains.
 */
type PlaceholderFrames = {
  type: `placeholder`

  /** The key a caller's node for the frames is stored under. */
  key: number

  name: string
  notation: keyof ShownFrameNotation
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
     * reached by returning from a recursive call. {@link omitsCallers} decides
     * whether the node's line omits them.
     */
    omittedCallersValue: number

    /** Whether the node is one of its caller's {@link drawnCallees}. */
    drawn: boolean
  }

type FunctionNode = CallTreeNode<AggregatedCallStackProfileFunction>

/**
 * The profile's largest branches and the paths to its hottest functions,
 * merged into one tree of callers, or nothing when no path is drawn. Records
 * the frame notation the tree uses in {@link notation}.
 */
export const formatCallTree = ({
  profile,
  measure,
  options,
  notation,
}: {
  profile: AggregatedCallStackProfile
  measure: Measure
  options: FormattingProfileToMdOptions
  notation: ShownFrameNotation
}): RootContent[] => {
  const { formatted } = drawCallTree({ profile, measure, options })
  if (formatted.lines.length === 0) {
    return []
  }

  notation.omitsFrames ||= formatted.notation.omitsFrames
  notation.showsTruncated ||= formatted.notation.showsTruncated
  return [
    paragraph(`Call paths to the hottest functions.`),
    code(formatted.lines),
  ]
}

export type CallTree = {
  root: CallTreeRoot
  terminals: ReadonlySet<FunctionNode>

  /** The value below which no line accounts for a node's undrawn callees. */
  negligible: number

  formatted: FormattedCallTree
}

/**
 * Builds the profile's call tree and draws its largest branches and the paths
 * to its hottest functions.
 */
export const drawCallTree = ({
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
  const { root, hiddenStacks, nodesOfHottest } = buildCallTree(
    profile,
    measure,
    options,
    hottest,
  )
  const tree: DrawnCallTree = {
    root,
    terminals: new Set(),
    named: new Set(),
    lineBudget,
    negligible: NEGLIGIBLE_SHARE * measure.total,
    measure,
    options,
  }
  // The root has no line of its own to mark them on as omitted callees.
  if (hiddenStacks !== undefined && hiddenStacks.value >= tree.negligible) {
    draw(hiddenStacks)
  }
  // Half the lines map where the profile's value goes, so the paths to the
  // hottest functions are drawn against branches already stated.
  const structureLines = Math.floor(lineBudget / 2)
  drawLargestBranches(tree, structureLines)
  nameLoneCallees(tree, structureLines)
  drawHottestFunctions(tree, nodesOfHottest)
  drawLargestBranches(tree, lineBudget)
  nameLoneCallees(tree, lineBudget)
  expandRuns(tree)
  return {
    root,
    terminals: tree.terminals,
    negligible: tree.negligible,
    formatted: formatCallTreeLines(tree),
  }
}

/** The nodes of the functions whose nodes are collected, indexed by ID. */
type NodesByFunction = (FunctionNode[] | undefined)[]

/**
 * Merges every call stack into a tree keyed on each path's functions, summing
 * the measure values of the stacks passing through each node, and collects the
 * nodes of each {@link hottest} function.
 */
const buildCallTree = (
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

/**
 * The key a caller's node for {@link func} is stored under: a function's ID,
 * or for placeholder frames, a negative key no function ID takes.
 */
const keyOf = (func: NodeFunction): number =>
  func.type === `function` ? func.id : func.key

const isFunctionNode = (node: CallTreeNode): node is FunctionNode =>
  node.func.type === `function`

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

/**
 * Draws the path to each of the hottest functions in turn, keeping every path
 * that leaves the tree within its line budget, since a colder function's path
 * may fit where a hotter one's did not.
 *
 * Ranking the functions by self value and drawing them in that order spends
 * the budget on the functions a reader came to find. Merging a path costs
 * about two lines whatever its depth, because a drawn frame's line omits
 * the callers above it, so a hotter function is never passed over for a
 * colder one that happens to sit nearer the root.
 */
const drawHottestFunctions = (
  tree: DrawnCallTree,
  nodesOfHottest: FunctionNode[][],
): void => {
  for (const nodes of nodesOfHottest) {
    const terminal = hottestNodeOf(nodes)
    // A function whose value is spread too thin for any path to state more
    // than `<0.1%` is left to the rankings, which state it whole.
    if (
      terminal !== undefined &&
      terminal.value >= PERCENT_RESOLUTION * tree.measure.total
    ) {
      drawPathIfItFits(tree, terminal)
    }
  }
}

const drawPathIfItFits = (
  tree: DrawnCallTree,
  terminal: FunctionNode,
): void => {
  keepIfFits(tree, tree.lineBudget, () => {
    const added = drawPath(terminal)
    tree.terminals.add(terminal)
    return () => {
      tree.terminals.delete(terminal)
      for (const node of added) {
        undrawLast(node)
      }
    }
  })
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
 * a summary line, so fewer functions fit the budget. `pnpm evaluate-call-tree`
 * scores fewer functions drawn and a lower share of self value covered when the
 * node is chosen by self value.
 */
const hottestNodeOf = (nodes: FunctionNode[]): FunctionNode | undefined =>
  nodes.length === 0
    ? undefined
    : nodes.reduce((hottest, node) =>
        node.value > hottest.value ||
        (node.value === hottest.value && node.selfValue > hottest.selfValue)
          ? node
          : hottest,
      )

/**
 * Draws {@link terminal} and its undrawn callers, and returns them, terminal
 * first.
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
  if (caller.drawnCallees === NO_DRAWN_CALLEES) {
    caller.drawnCallees = []
  }
  caller.drawnCallees.push(node)
}

/** Takes back {@link node}, the last of its caller's drawn callees. */
const undrawLast = (node: CallTreeNode): void => {
  node.drawn = false
  node.caller.drawnCallees.pop()
}

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

const isCallTreeNode = (node: CallTreeRoot): node is CallTreeNode =>
  `func` in node

/**
 * Draws the callee a summary line was standing in for on its own, wherever one
 * branch is all a summary line stands for and the tree still fits.
 *
 * Summarizing one branch costs the line its function would take, so the
 * summary line states a number where the tree could have stated a function.
 */
const nameLoneCallees = (tree: DrawnCallTree, lineLimit: number): void => {
  // Naming one callee can leave its own callee as the next lone total, so the
  // pass repeats, bounded by the lines it can add.
  for (let pass = 0; pass < tree.lineBudget; pass++) {
    const callees = loneSummarizedCallees(tree)
    if (callees.length === 0) {
      break
    }

    let drewAny = false
    for (const callee of callees) {
      drewAny = drawIfFits(tree, callee, lineLimit) || drewAny
    }
    if (!drewAny) {
      break
    }
  }
}

/**
 * Draws the largest callee a summary line stands for, in turn, while the tree
 * fits in {@link lineLimit} lines.
 *
 * Drawing the largest branches first states where most of the profile's value
 * goes, which the paths to the hottest functions alone leave in summary lines
 * when no hot function sits in a large branch. `pnpm evaluate-call-tree` scores
 * a smaller largest summary line and the branches' shares read more accurately
 * than when the paths are drawn alone.
 */
const drawLargestBranches = (tree: DrawnCallTree, lineLimit: number): void => {
  const overran = new Set<CallTreeNode>()
  // Each pass draws a callee or rules one out.
  for (let pass = 0; pass < 2 * tree.lineBudget; pass++) {
    const callee = largestSummarizedCallee(tree, overran)
    if (callee === undefined) {
      break
    }
    if (!drawIfFits(tree, callee, lineLimit)) {
      overran.add(callee)
    }
  }
}

const drawIfFits = (
  tree: DrawnCallTree,
  callee: CallTreeNode,
  lineLimit: number,
): boolean =>
  keepIfFits(tree, lineLimit, () => {
    draw(callee)
    return () => undrawLast(callee)
  })

/**
 * Gives the frames each run omits lines of their own, largest run first, with
 * the lines the tree has left, so a run omits frames only where the line budget
 * requires it.
 *
 * Every run that fits whole expands before any run expands in part, because
 * only a whole expansion removes an `…` from the tree. A run too long for the
 * lines left names its innermost frames, the callers nearest the frame its
 * line draws, and leaves at least two omitted, since one omitted frame saves
 * no line.
 */
const expandRuns = (tree: DrawnCallTree): void => {
  const runs = omittingRunsOf(tree).sort(
    (left, right) => right.deepest.value - left.deepest.value,
  )
  const partialRuns = runs.filter(({ omitted }) => !nameIfFits(tree, omitted))
  for (const { omitted } of partialRuns) {
    const linesLeft = tree.lineBudget - countLines(tree, undefined)
    const count = Math.min(linesLeft, omitted.length - 2)
    if (count > 0) {
      nameIfFits(tree, omitted.slice(-count))
    }
  }
}

/**
 * Adds {@link nodes} to {@link DrawnCallTree.named} if the tree still fits its
 * line budget with them, and returns whether it does.
 */
const nameIfFits = (
  tree: DrawnCallTree,
  nodes: readonly CallTreeNode[],
): boolean =>
  keepIfFits(tree, tree.lineBudget, () => {
    for (const node of nodes) {
      tree.named.add(node)
    }
    return () => {
      for (const node of nodes) {
        tree.named.delete(node)
      }
    }
  })

/** The tree's runs that omit frames. */
const omittingRunsOf = (tree: DrawnCallTree): OmittingRun[] => {
  const runs: OmittingRun[] = []
  forEachRun(tree, ({ omitted, deepest }) => {
    if (omitted !== undefined) {
      runs.push({ omitted, deepest })
    }
  })
  return runs
}

type OmittingRun = Run & { omitted: NonNullable<Run[`omitted`]> }

/**
 * The largest callee a summary line stands for, other than {@link excluded},
 * among those whose line would state more than `<0.1%`.
 */
const largestSummarizedCallee = (
  tree: DrawnCallTree,
  excluded: ReadonlySet<CallTreeNode>,
): CallTreeNode | undefined => {
  const resolution = PERCENT_RESOLUTION * tree.measure.total
  let largest: CallTreeNode | undefined
  for (const { hottest } of summarizedBranchesOf(tree)) {
    if (
      hottest.value >= resolution &&
      !excluded.has(hottest) &&
      (largest === undefined || hottest.value > largest.value)
    ) {
      largest = hottest
    }
  }
  return largest
}

/**
 * The callees that are the whole of what a summary line stands for, largest
 * first.
 */
const loneSummarizedCallees = (tree: DrawnCallTree): CallTreeNode[] =>
  summarizedBranchesOf(tree)
    .filter(({ count }) => count === 1)
    .map(({ hottest }) => hottest)
    .sort((left, right) => right.value - left.value)

/**
 * The undrawn callees of each drawn node with a summary line, in the order a
 * depth-first walk from the root reaches the nodes.
 */
const summarizedBranchesOf = ({
  root,
  negligible,
}: DrawnCallTree): UndrawnBranches[] => {
  const summarized: UndrawnBranches[] = []
  const pending: CallTreeRoot[] = [root]
  while (pending.length > 0) {
    const node = pending.pop()!
    pending.push(...node.drawnCallees)
    if (undrawnValueOf(node) < negligible) {
      continue
    }
    // A profile with no value has a negligible value of 0, so a node may
    // total nothing.
    const undrawn = undrawnBranchesOf(node)
    if (undrawn !== undefined) {
      summarized.push(undrawn)
    }
  }
  return summarized
}

/** The tree's drawn frames, and what they are drawn against. */
type DrawnCallTree = {
  root: CallTreeRoot

  /** The nodes of the hottest functions, whose paths the tree draws. */
  terminals: Set<FunctionNode>

  /** The frames a run would omit that have a line of their own instead. */
  named: Set<CallTreeNode>

  /** The value below which no line accounts for a node's undrawn callees. */
  negligible: number

  lineBudget: number
  measure: Measure
  options: FormattingProfileToMdOptions
}

/** The tree's lines, and the frame notation they use. */
type FormattedCallTree = {
  lines: string[]

  /**
   * Each function's line holding the most of its self value, keyed by
   * {@link keyOf}, which states its self value across the whole profile.
   */
  selfNoteFrames: Map<number, CallTreeNode>

  notation: ShownFrameNotation

  /** How many lines hide a run of callers. */
  joinedRuns: number

  summaries: number
}

const formatCallTreeLines = (tree: DrawnCallTree): FormattedCallTree => {
  const formatted: FormattedCallTree = {
    lines: [],
    selfNoteFrames: selfNoteFramesOf(tree),
    notation: newShownFrameNotation(),
    joinedRuns: 0,
    summaries: 0,
  }
  countLines(tree, formatted)
  return formatted
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
  forEachRun(tree, ({ deepest }) => {
    const noted = frames.get(keyOf(deepest.func))
    if (
      noted === undefined ||
      deepest.selfValue > noted.selfValue ||
      (deepest.selfValue === noted.selfValue && deepest.value > noted.value)
    ) {
      frames.set(keyOf(deepest.func), deepest)
    }
  })
  return frames
}

/** Calls {@link visit} with each of the tree's runs. */
const forEachRun = (tree: DrawnCallTree, visit: (run: Run) => void): void => {
  const pending: CallTreeRoot[] = [tree.root]
  while (pending.length > 0) {
    for (const callee of pending.pop()!.drawnCallees) {
      const run = runFrom(callee, tree)
      visit(run)
      pending.push(run.deepest)
    }
  }
}

/**
 * Applies {@link change}, and undoes it with the function it returns unless the
 * tree still fits in {@link lineLimit} lines. Returns whether the tree fits.
 */
const keepIfFits = (
  tree: DrawnCallTree,
  lineLimit: number,
  change: () => () => void,
): boolean => {
  const undo = change()
  if (fitsLines(tree, lineLimit)) {
    return true
  }
  undo()
  return false
}

const fitsLines = (tree: DrawnCallTree, lineLimit: number): boolean =>
  countLines(tree, undefined) <= lineLimit

/** Counts the tree's lines, and formats them into {@link formatted} if given. */
const countLines = (
  tree: DrawnCallTree,
  formatted: FormattedCallTree | undefined,
): number => {
  const { root, negligible } = tree
  let lineCount = 0

  // `namedAbove` is the function on the line above a line's frame,
  // which the frame's location is shortened against.
  const formatCallees = (
    node: CallTreeRoot,
    namedAbove: AggregatedCallStackProfileFunction | undefined,
    prefix: string,
  ): void => {
    // Callees' values are positive, so a value left over means a callee went
    // undrawn, and a count needs no scan of a wide node's callees to find it.
    // A profile with no value has a negligible value of 0, so the leftover
    // must also be positive.
    const summarizedValue = undrawnValueOf(node)
    const summarized = summarizedValue > 0 && summarizedValue >= negligible

    if (formatted) {
      formatCalleeLines(node, namedAbove, prefix, {
        summarizedValue,
        summarized,
        formatted,
      })
      return
    }
    // A count needs no order, and no line's glyph.
    for (const callee of node.drawnCallees) {
      formatBranch(callee, false, namedAbove, prefix)
    }
    lineCount += Number(summarized)
  }

  // Formats `node`'s callees' lines in order, then its summary line.
  const formatCalleeLines = (
    node: CallTreeRoot,
    namedAbove: AggregatedCallStackProfileFunction | undefined,
    prefix: string,
    {
      summarizedValue,
      summarized,
      formatted,
    }: {
      summarizedValue: number
      summarized: boolean
      formatted: FormattedCallTree
    },
  ): void => {
    const undrawn = summarized ? undrawnBranchesOf(node) : undefined
    const lone = undrawn?.count === 1 ? undrawn.hottest : undefined
    const summary = lone === undefined ? undrawn : undefined
    const lines = calleeLinesOf(node, lone, summarizedValue, tree)
    for (const [index, line] of lines.entries()) {
      const last = index === lines.length - 1 && summary === undefined
      if (line.type === `branch`) {
        formatBranch(line.callee, last, namedAbove, prefix)
        continue
      }
      lineCount++
      formatted.lines.push(
        glyph(prefix, last) +
          formatLoneCallee(
            line.callee,
            line.value,
            namedAbove,
            tree,
            formatted,
          ),
      )
    }
    if (summary !== undefined) {
      lineCount++
      formatted.summaries++
      formatted.lines.push(
        glyph(prefix, true) +
          formatSummary(
            node,
            summary,
            summarizedValue,
            namedAbove,
            tree,
            formatted,
          ),
      )
    }
  }

  // Formats the run from `callee` down to the next frame with a line of its
  // own, then that frame's callees.
  const formatBranch = (
    callee: CallTreeNode,
    last: boolean,
    namedAbove: AggregatedCallStackProfileFunction | undefined,
    prefix: string,
  ): void => {
    const run = runFrom(callee, tree)
    const { deepest } = run

    lineCount++
    if (formatted) {
      formatted.lines.push(
        glyph(prefix, last) + formatFrame(run, namedAbove, tree, formatted),
      )
    }

    formatCallees(
      deepest,
      // A placeholder's line has no source to shorten against.
      isFunctionNode(deepest) ? deepest.func : undefined,
      prefix + (last ? BLANK : VERTICAL),
    )
  }

  formatCallees(root, undefined, ``)
  return lineCount
}

/** A line among a node's callees' lines, which a summary line follows. */
type CalleeLine = {
  type: `branch` | `lone`
  callee: CallTreeNode
  value: number
}

/**
 * {@link node}'s callees' lines, largest first by the value each states: its
 * drawn callees' branches, and its {@link lone} undrawn callee's frame.
 *
 * A branch's line states its run's deepest frame's value rather than its own
 * when the line omits callers. A lone undrawn callee's line is a frame's, so it
 * is ordered among the drawn callees' lines.
 */
const calleeLinesOf = (
  node: CallTreeRoot,
  lone: CallTreeNode | undefined,
  summarizedValue: number,
  tree: DrawnCallTree,
): CalleeLine[] => {
  const lines: CalleeLine[] = node.drawnCallees.map(callee => ({
    type: `branch`,
    callee,
    value: runFrom(callee, tree).deepest.value,
  }))
  if (lone !== undefined) {
    lines.push({ type: `lone`, callee: lone, value: summarizedValue })
  }
  return lines.sort((left, right) => right.value - left.value)
}

/**
 * The line of a run's deepest frame, stating the callers it omits, after its
 * glyphs.
 */
const formatFrame = (
  run: Run,
  namedAbove: AggregatedCallStackProfileFunction | undefined,
  tree: DrawnCallTree,
  formatted: FormattedCallTree,
): string => {
  const { omitted, deepest } = run
  if (omitted !== undefined) {
    formatted.joinedRuns++
  }
  return formatFrameLine(
    {
      func: deepest.func,
      value: deepest.value,
      self: formatSelf(
        deepest,
        formatted.selfNoteFrames.get(keyOf(deepest.func)) === deepest,
        tree,
      ),
      omitsCallers: runOmitsCallers(run, tree.negligible),
      omitsCallees: deepest.hiddenCalleesValue >= tree.negligible,
    },
    namedAbove,
    tree,
    formatted,
  )
}

/**
 * A frame's line after its glyphs: its value and share with {@link self} beside
 * the share, its name and location, and marks for its omitted callers and
 * callees.
 */
const formatFrameLine = (
  {
    func,
    value,
    self,
    omitsCallers,
    omitsCallees,
  }: {
    func: NodeFunction
    value: number
    self: string
    omitsCallers: boolean
    omitsCallees: boolean
  },
  namedAbove: AggregatedCallStackProfileFunction | undefined,
  { measure, options }: DrawnCallTree,
  formatted: FormattedCallTree,
): string => {
  formatted.notation.omitsFrames ||= omitsCallers || omitsCallees
  // Omitted callers are above the frame, so their mark precedes its numbers.
  return (
    (omitsCallers ? `${OMITTED_FRAMES_NAME} ` : ``) +
    formatMeasured(value, measure, self) +
    nameOf(func, formatted) +
    formatTreeLocation(func, namedAbove, omitsCallers, options) +
    (omitsCallees ? ` ${OMITTED_FRAMES_NAME}` : ``)
  )
}

/**
 * {@link func}'s name, noting in {@link formatted} the notation of placeholder
 * frames, so the profile section explains it wherever it is named.
 */
const nameOf = (func: NodeFunction, formatted: FormattedCallTree): string => {
  if (func.type === `placeholder`) {
    formatted.notation[func.notation] = true
  }
  return func.name
}

/**
 * Whether a run's line omits callers between its deepest frame and the frame
 * drawn above it: the run's passed callers, or the frames its deepest frame's
 * call stacks skip.
 */
const runOmitsCallers = (
  { omitted, deepest }: Run,
  negligible: number,
): boolean => omitted !== undefined || omitsCallers(deepest, negligible)

/**
 * Whether {@link node}'s line omits callers: when the call stacks skipping
 * frames above it hold enough to state, or all of its value, so the line never
 * states a direct call no stack made.
 */
const omitsCallers = (
  { omittedCallersValue, value }: CallTreeNode,
  negligible: number,
): boolean =>
  omittedCallersValue > 0 &&
  (omittedCallersValue >= negligible || omittedCallersValue === value)

/**
 * {@link node}'s self value where it is enough to state, and on its function's
 * {@link noted} frame, the function's self value across the whole profile
 * where the other paths hold enough of it to state, each after a comma and
 * `self`.
 */
const formatSelf = (
  node: CallTreeNode,
  noted: boolean,
  { negligible, measure }: DrawnCallTree,
): string => {
  if (!isFunctionNode(node)) {
    return ``
  }
  let self = ``
  // A frame whose value is all self states it as its value already.
  const statesSelf =
    node.selfValue > 0 &&
    node.selfValue >= negligible &&
    node.selfValue < node.value
  if (statesSelf) {
    self += `, self ${formatPercent(node.selfValue / measure.total)}`
  }
  const value = selfValueOf(measure, node.func)
  if (noted && value >= negligible && value - node.selfValue >= negligible) {
    self += `, self ${formatPercent(value / measure.total)} globally`
  }
  return self
}

/**
 * The line of a lone undrawn callee's frame, after its glyphs, stating
 * {@link value} and that its callees are omitted.
 */
const formatLoneCallee = (
  node: CallTreeNode,
  stated: number,
  namedAbove: AggregatedCallStackProfileFunction | undefined,
  tree: DrawnCallTree,
  formatted: FormattedCallTree,
): string =>
  formatFrameLine(
    {
      func: node.func,
      value: stated,
      self: ``,
      omitsCallers: omitsCallers(node, tree.negligible),
      omitsCallees: node.value - node.selfValue >= tree.negligible,
    },
    namedAbove,
    tree,
    formatted,
  )

/**
 * The summary line of {@link node}'s undrawn callees, or the root's undrawn root
 * frames, after its glyphs: how many there are, and the largest one with its
 * share and location, in the order a frame's line states them.
 */
const formatSummary = (
  node: CallTreeRoot,
  { count, hottest }: UndrawnBranches,
  summarizedValue: number,
  namedAbove: AggregatedCallStackProfileFunction | undefined,
  { measure, options, negligible }: DrawnCallTree,
  formatted: FormattedCallTree,
): string => {
  const { func, value } = hottest
  const branches = formatCount(count, `more ${undrawnNounOf(node)}`)
  const share = formatPercent(value / measure.total)
  const location = formatTreeLocation(
    func,
    namedAbove,
    omitsCallers(hottest, negligible),
    options,
  )
  return `${formatMeasured(summarizedValue, measure)}${branches}, led by (${share}) ${nameOf(func, formatted)}${location}`
}

/**
 * What a summary line calls {@link node}'s undrawn callees: the root's and the
 * truncated call stacks' are the stacks' root frames.
 */
const undrawnNounOf = (node: CallTreeRoot): string =>
  isCallTreeNode(node) && isFunctionNode(node) ? `callee` : `root frame`

/**
 * The callees of a node on no drawn path: how many functions they are, and the
 * one with the largest value.
 *
 * A total alone states how much a reader is not seeing without stating what
 * any of it is, so the line states the branches worth following first.
 */
type UndrawnBranches = {
  count: number
  hottest: CallTreeNode
}

const undrawnBranchesOf = (
  caller: CallTreeRoot,
): UndrawnBranches | undefined => {
  let count = 0
  let hottest: CallTreeNode | undefined
  const add = (callee: CallTreeNode): void => {
    if (!isUndrawnBranch(callee)) {
      return
    }
    count++
    if (hottest === undefined || callee.value > hottest.value) {
      hottest = callee
    }
  }
  if (caller.firstCallee !== undefined) {
    add(caller.firstCallee)
  }
  for (const callee of caller.otherCallees?.values() ?? []) {
    add(callee)
  }
  return hottest && { count, hottest }
}

// A recursion collapse can leave a node no stack's path kept, with no value.
const isUndrawnBranch = (node: CallTreeNode): boolean =>
  !node.drawn && node.value > 0

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

/**
 * The callers from a drawn frame down to the next frame with a line of its own,
 * and that frame, whose line omits them.
 *
 * The frames between are no function a reader came for, so one line omits them
 * however many they are.
 */
type Run = {
  /** At least two callers, since a lone caller is named instead. */
  omitted: [CallTreeNode, CallTreeNode, ...CallTreeNode[]] | undefined
  deepest: CallTreeNode
}

/**
 * The run from {@link node} down to the first frame that is a hottest
 * function or {@link DrawnCallTree.named}, holds enough self value to state, or leads to more than one drawn
 * callee, or before the run leaves enough undrawn to state.
 */
const runFrom = (
  node: CallTreeNode,
  { terminals, named, negligible }: DrawnCallTree,
): Run => {
  const passed: CallTreeNode[] = []
  let deepest = node
  while (
    isFunctionNode(deepest) &&
    !terminals.has(deepest) &&
    !named.has(deepest) &&
    deepest.selfValue < negligible &&
    deepest.drawnCallees.length === 1 &&
    // Each frame's undrawn callees may be too small to state, but the line
    // states only the deepest frame's value, so what the run leaves undrawn
    // must be too small to state in total.
    node.value - deepest.drawnCallees[0]!.value < negligible
  ) {
    passed.push(deepest)
    deepest = deepest.drawnCallees[0]!
  }

  // Hiding one frame saves no line, so it gets its own.
  return passed.length < 2
    ? { omitted: undefined, deepest: node }
    : { omitted: passed as NonNullable<Run[`omitted`]>, deepest }
}

/**
 * A frame's value and its share of the profile, with {@link self} beside the
 * share, leading the frame's name.
 */
const formatMeasured = (
  value: number,
  { metric, total }: Measure,
  self = ``,
): string =>
  `${formatProseValue(value, metric)} (${formatPercent(value / total)}${self}) `

/**
 * {@link func}'s location after `at`, shortened to the line and column when
 * {@link namedAbove} is in the same source and the line omits no callers
 * between them, since a frame below omitted callers is not below the frame on
 * the line above.
 *
 * A name in a code block has no code formatting to set it apart, so
 * parentheses around the location would run into a name ending in its
 * parameters.
 */
const formatTreeLocation = (
  func: NodeFunction,
  namedAbove: AggregatedCallStackProfileFunction | undefined,
  omitsCallers: boolean,
  options: FormattingProfileToMdOptions,
): string => {
  if (func.type === `placeholder`) {
    return ``
  }
  const location = frameLocation(
    func,
    omitsCallers ? undefined : namedAbove,
    options,
  )
  if (location === undefined) {
    return ``
  }
  return ` at ${location.text}`
}
