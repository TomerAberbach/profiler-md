import type { Paragraph, RootContent } from 'mdast'
import { formatCount, formatPercent } from '../../helpers/format.ts'
import { selectTopN } from '../../helpers/heap.ts'
import {
  code,
  inlineCode,
  paragraph,
  phrasing,
} from '../../helpers/markdown.ts'
import { sourceReferenceId } from '../../location.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import { formatProseValue } from '../measure.ts'
import type { Metric } from '../metric.ts'
import type {
  AggregatedCallStackProfile,
  AggregatedCallStackProfileFunction,
} from './aggregate.ts'
import { selfRankedFunctions, selfValueOf } from './measure.ts'
import type { Measure } from './measure.ts'
import { frameLocation } from './table.ts'

/**
 * How many lines one profile's tree may fill: two per entry a ranking shows,
 * since a path to a function costs about two lines.
 */
export const lineBudgetOf = ({ topN }: { topN: number }): number => 2 * topN

/**
 * The share of the profile below which a value goes unstated.
 *
 * The tree draws the paths to the hottest functions rather than every path
 * worth a line, so most of what it leaves out is stated as a total instead.
 */
export const NEGLIGIBLE_SHARE = 0.005

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

  /** The children on a path the tree draws, in insertion order. */
  drawnChildren: CallTreeNode[]
}

/** One function, reached by one path of callers from the root. */
type CallTreeNode = CallTreeRoot & {
  func: AggregatedCallStackProfileFunction
  caller: CallTreeRoot

  /** The measure value of every call stack passing through this node. */
  value: number

  /** The measure value of the call stacks whose leaf frame is this node. */
  selfValue: number

  /**
   * The functions elided from directly below this node, created on the first,
   * since most nodes elide none.
   */
  elidedFunctionIds: Set<number> | undefined

  /** Whether the node is one of its caller's {@link drawnChildren}. */
  drawn: boolean
}

/**
 * The paths to the profile's hottest functions, merged into a tree of callers,
 * and the description of its notation, or nothing when no path is drawn.
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

  return [formatDescription(measure.metric, render), code(render.lines)]
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
  const { root, nodesOfHottest, selfPathsByFunction } = buildCallTree(
    profile,
    measure,
    options,
    hottest,
  )
  const tree: DrawnCallTree = {
    root,
    terminals: new Set(),
    selfPathsByFunction,
    lineBudget,
    negligible: NEGLIGIBLE_SHARE * measure.total,
    measure,
    options,
  }
  drawHottestFunctions(tree, nodesOfHottest)
  nameLoneCallees(tree)
  return {
    root,
    terminals: tree.terminals,
    negligible: tree.negligible,
    render: renderCallTree(tree),
  }
}

/** What the tree shows, and each notation {@link render} used. */
const formatDescription = (
  metric: Metric,
  render: CallTreeRender,
): Paragraph => {
  const noun = metric.phrases.columnNoun.toLowerCase()
  return paragraph([
    ...phrasing`The call paths to the hottest functions by self ${noun}, merged into a tree of callers. Each frame shows the ${metric.phrases.pastParticipleVerbPhrase} in it and its callees, as a share of the profile and as a value.`,
    ...(render.joinedRuns > 0
      ? phrasing` ${inlineCode(`[[n frames hidden]]`)} stands for the callers between two of them, whose share the line above it states.`
      : []),
    ...(render.summaries > 0
      ? phrasing` ${inlineCode(`n more branches`)} counts the callees on no such path, each standing for everything below it, and states their total and the largest of them.`
      : []),
    ...(render.elidedFrames > 0
      ? phrasing` ${inlineCode(`+n hidden frames`)} counts the frames the entry filter hides below a frame, whose share includes them.`
      : []),
    ...(render.splitSelves > 0
      ? phrasing` ${inlineCode(`(n% self across m call paths)`)} states the self ${noun} of a function across every call path to it, where the path drawn to it holds only part.`
      : []),
  ])
}

/** The nodes of the functions whose nodes are collected, indexed by ID. */
type NodesByFunction = (CallTreeNode[] | undefined)[]

/**
 * Merges every call stack into a tree keyed on each path's functions, summing
 * the measure values of the stacks passing through each node, and collects the
 * nodes of each {@link hottest} function.
 *
 * An elided frame contributes its value to the nearest kept caller instead of
 * a node of its own. One elided above every kept frame is dropped, the way a
 * formatted call stack drops a leading run of hidden frames.
 *
 * Paths that differ only in elided frames merge into one node, so the call
 * stacks ending in each function are counted apart from the nodes.
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
  selfPathsByFunction: Uint32Array
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
  const selfPathsByFunction = new Uint32Array(functions.length)

  const isShown = (func: AggregatedCallStackProfileFunction): boolean =>
    showEntry(func, context)
  for (const callStack of callStacks) {
    const value = selfValueOf(measure, callStack)
    if (value === 0) {
      continue
    }

    const { frames } = callStack
    const node = mergeFrames(root, frames, value, isShown, nodesByFunction)
    // An elided leaf frame's value is its kept caller's, not that caller's
    // self value.
    if (isCallTreeNode(node) && node.func === frames[0]) {
      node.selfValue += value
      selfPathsByFunction[node.func.id]!++
    }
  }

  return { root, nodesOfHottest, selfPathsByFunction }
}

/**
 * Adds {@link value} along the path of {@link frames}' shown functions from
 * {@link root}, recording each hidden function on its nearest shown caller,
 * and returns the path's last node.
 */
const mergeFrames = (
  root: CallTreeRoot,
  frames: readonly AggregatedCallStackProfileFunction[],
  value: number,
  isShown: (func: AggregatedCallStackProfileFunction) => boolean,
  nodesByFunction: NodesByFunction,
): CallTreeRoot => {
  let node = root
  // Frames are callee to caller, so the tree grows from the outermost caller
  // down.
  for (let i = frames.length - 1; i >= 0; i--) {
    const func = frames[i]!
    if (!isShown(func)) {
      if (isCallTreeNode(node)) {
        node.elidedFunctionIds ??= new Set()
        node.elidedFunctionIds.add(func.id)
      }
      continue
    }

    const child = childOf(node, func, nodesByFunction)
    child.value += value
    node.childrenValue += value
    node = child
  }
  return node
}

/**
 * {@link caller}'s node for {@link func}, created on first reach and indexed
 * in {@link nodesByFunction} if the function is.
 */
const childOf = (
  caller: CallTreeRoot,
  func: AggregatedCallStackProfileFunction,
  nodesByFunction: NodesByFunction,
): CallTreeNode => {
  const { firstChild, otherChildren } = caller
  if (firstChild?.func.id === func.id) {
    return firstChild
  }
  let child = otherChildren?.get(func.id)
  if (child !== undefined) {
    return child
  }

  child = {
    firstChild: undefined,
    otherChildren: undefined,
    childrenValue: 0,
    drawnChildren: [],
    func,
    caller,
    value: 0,
    selfValue: 0,
    elidedFunctionIds: undefined,
    drawn: false,
  }
  if (firstChild === undefined) {
    caller.firstChild = child
  } else if (otherChildren === undefined) {
    caller.otherChildren = new Map([[func.id, child]])
  } else {
    otherChildren.set(func.id, child)
  }
  nodesByFunction[func.id]?.push(child)
  return child
}

const newCallTreeRoot = (): CallTreeRoot => ({
  firstChild: undefined,
  otherChildren: undefined,
  childrenValue: 0,
  drawnChildren: [],
})

/**
 * Draws the path to each of the hottest functions in turn, keeping every path
 * that leaves the tree within its line budget.
 *
 * Ranking the functions by self value and drawing them in that order spends
 * the budget on the functions a reader came to find. Merging a path costs
 * about two lines whatever its depth, because the callers between the drawn
 * frames collapse into one line, so a hotter function is never passed over for
 * a colder one that happens to sit nearer the root. A path that would overrun
 * the budget is dropped and the next function tried, since a colder function
 * may still fit.
 */
const drawHottestFunctions = (
  tree: DrawnCallTree,
  nodesOfHottest: CallTreeNode[][],
): void => {
  for (const nodes of nodesOfHottest) {
    const terminal = hottestNodeOf(nodes)
    if (terminal !== undefined) {
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
 * path already drawn, so naming it costs about one line. The node with the most
 * self value is usually on a branch of its own, which costs a run line and a
 * frame line, so fewer functions fit the budget. `pnpm evaluate-call-tree`
 * scores fewer functions drawn and a lower share of self value covered when the
 * node is chosen by self value.
 */
const hottestNodeOf = (nodes: CallTreeNode[]): CallTreeNode | undefined =>
  nodes.length === 0
    ? undefined
    : nodes.reduce((hottest, node) =>
        node.value > hottest.value ? node : hottest,
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
  node.caller.drawnChildren.push(node)
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
 * Totalling one branch costs the line that names it, so the total states a
 * number where the tree could have stated a function.
 */
const nameLoneCallees = (tree: DrawnCallTree): void => {
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
      if (fitsLineBudget(tree)) {
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
      callees.push(undrawn.hottest)
    }
  }
  return callees.sort((left, right) => right.value - left.value)
}

/** The tree's drawn frames, and what they are drawn against. */
type DrawnCallTree = Omit<CallTree, `terminals` | `render`> & {
  /** The nodes of the hottest functions, whose paths the tree draws. */
  terminals: Set<CallTreeNode>

  /** How many call stacks end in each function, indexed by its ID. */
  selfPathsByFunction: Uint32Array

  lineBudget: number
  measure: Measure
  options: FormattingProfileToMdOptions
}

/**
 * A function's self value across every call path to it, stated on its
 * terminal where the other paths hold enough of it to state.
 *
 * The tree draws one path per function, so a function called from many places
 * would otherwise look as small as its share on that one path.
 */
type SplitSelf = { value: number; paths: number }

const splitSelfOf = (
  terminal: CallTreeNode,
  { selfPathsByFunction, negligible, measure }: DrawnCallTree,
): SplitSelf | undefined => {
  const value = selfValueOf(measure, terminal.func)
  if (value - terminal.selfValue < negligible) {
    return undefined
  }
  return { value, paths: selfPathsByFunction[terminal.func.id]! }
}

/** A rendered tree, and how many times it used each of its notations. */
type CallTreeRender = {
  lines: string[]

  /** The lines standing for a run of hidden callers. */
  joinedRuns: number

  /** The functions the entry filter hid below the drawn frames. */
  elidedFrames: number

  /** The lines totalling a frame's undrawn callees. */
  summaries: number

  /** The terminals stating their function's self value across call paths. */
  splitSelves: number
}

const renderCallTree = (tree: DrawnCallTree): CallTreeRender => {
  const render: CallTreeRender = {
    lines: [],
    joinedRuns: 0,
    elidedFrames: 0,
    summaries: 0,
    splitSelves: 0,
  }
  countLines(tree, render)
  return render
}

/**
 * Whether the tree as drawn fits its line budget, counted without formatting
 * a line, since a trial drawing checks only that.
 */
const fitsLineBudget = (tree: DrawnCallTree): boolean =>
  countLines(tree, undefined) <= tree.lineBudget

/** Counts the tree's lines, and renders them into {@link render} if given. */
const countLines = (
  tree: DrawnCallTree,
  render: CallTreeRender | undefined,
): number => {
  const { root, negligible, measure } = tree
  let lineCount = 0

  // `namedAbove` is the function named on the line above a line's frame,
  // which the frame's location is shortened against.
  const renderChildren = (
    node: CallTreeRoot,
    namedAbove: AggregatedCallStackProfileFunction | undefined,
    prefix: string,
  ): void => {
    // A count needs no order, and no line's glyph.
    const shown = render
      ? node.drawnChildren.toSorted((left, right) => right.value - left.value)
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

  // Renders the run from `child` down to the next frame the tree names, then
  // that frame's children.
  const renderBranch = (
    child: CallTreeNode,
    last: boolean,
    namedAbove: AggregatedCallStackProfileFunction | undefined,
    prefix: string,
  ): void => {
    const run = runFrom(child, tree)
    const { hidden, deepest } = run

    // A run's callers stand on a line of their own, above the frame they lead
    // to, which becomes that line's only callee.
    let framePrefix = prefix + (last ? LAST_BRANCH : BRANCH)
    let calleePrefix = prefix + (last ? BLANK : VERTICAL)
    if (hidden !== undefined) {
      lineCount++
      if (render) {
        render.joinedRuns++
        render.lines.push(framePrefix + formatHidden(hidden, measure))
      }
      framePrefix = calleePrefix + LAST_BRANCH
      calleePrefix += BLANK
      namedAbove = undefined
    }

    lineCount++
    if (render) {
      render.lines.push(
        framePrefix + formatFrame(run, namedAbove, tree, render),
      )
    }

    renderChildren(deepest, deepest.func, calleePrefix)
  }

  renderChildren(root, undefined, ``)
  return lineCount
}

/**
 * The line naming a run's deepest frame, after its glyphs, counting the
 * notations it uses into {@link render}.
 */
const formatFrame = (
  run: Run,
  namedAbove: AggregatedCallStackProfileFunction | undefined,
  tree: DrawnCallTree,
  render: CallTreeRender,
): string => {
  const { terminals, measure, options } = tree
  const { deepest } = run
  const elidedCount = elidedCountOf(run)
  render.elidedFrames += elidedCount
  const split = terminals.has(deepest) ? splitSelfOf(deepest, tree) : undefined
  if (split !== undefined) {
    render.splitSelves++
  }
  return (
    formatMeasured(deepest.value, measure) +
    deepest.func.name +
    formatTreeLocation(deepest.func, namedAbove, options) +
    formatElided(elidedCount) +
    formatSplitSelf(split, measure)
  )
}

/**
 * The line totalling {@link node}'s undrawn callees, after its glyphs: how many
 * there are, and the hottest of them.
 */
const formatSummary = (
  node: CallTreeRoot,
  summarizedValue: number,
  namedAbove: AggregatedCallStackProfileFunction | undefined,
  { measure, options }: DrawnCallTree,
): string => {
  const { count, hottest } = undrawnBranchesOf(node)!
  return `${formatMeasured(summarizedValue, measure)}${formatCount(
    count,
    `more branch`,
  )}, hottest ${hottest.func.name}${formatTreeLocation(
    hottest.func,
    namedAbove,
    options,
  )}`
}

/**
 * The callees of a node on no drawn path: how many there are, and the one with
 * the largest value.
 *
 * A total alone states how much a reader is not seeing without saying what any
 * of it is, so the line names the branch worth following first.
 */
type UndrawnBranches = { count: number; hottest: CallTreeNode }

/** {@link node}'s undrawn callees, if it has any. */
const undrawnBranchesOf = ({
  firstChild,
  otherChildren,
}: CallTreeRoot): UndrawnBranches | undefined => {
  let hottest = firstChild?.drawn === false ? firstChild : undefined
  let count = hottest === undefined ? 0 : 1
  for (const child of otherChildren?.values() ?? []) {
    if (!child.drawn) {
      count++
      if (hottest === undefined || child.value > hottest.value) {
        hottest = child
      }
    }
  }
  return hottest && { count, hottest }
}

/** The summed value of the children {@link node} draws no path to. */
const undrawnValueOf = (node: CallTreeRoot): number => {
  let drawnValue = 0
  for (const child of node.drawnChildren) {
    drawnValue += child.value
  }
  return node.childrenValue - drawnValue
}

/**
 * The callers from a drawn frame down to the next frame the tree names, which
 * the run's line hides, and that frame.
 *
 * The frames between name nothing a reader came for, so the line states how
 * many they are instead of spending a line on each, however many they are.
 */
type Run = {
  /** At least two callers, since hiding one would cost the line naming it. */
  hidden: [CallTreeNode, ...CallTreeNode[]] | undefined
  deepest: CallTreeNode
}

/**
 * The run from {@link node} down to the first frame that is a hottest
 * function, leads to more than one drawn callee, or calls enough undrawn
 * callees to state.
 */
const runFrom = (
  node: CallTreeNode,
  { terminals, negligible }: DrawnCallTree,
): Run => {
  const passed: CallTreeNode[] = []
  let deepest = node
  while (
    !terminals.has(deepest) &&
    deepest.drawnChildren.length === 1 &&
    undrawnValueOf(deepest) < negligible
  ) {
    passed.push(deepest)
    deepest = deepest.drawnChildren[0]!
  }

  const [first, ...rest] = passed
  // Hiding one frame costs the line it would have been named on, so name it.
  return first === undefined || rest.length === 0
    ? { hidden: undefined, deepest: node }
    : { hidden: [first, ...rest], deepest }
}

/**
 * The line standing for a run's {@link passed} callers, after its glyphs: their
 * value, how many they are, and how many sources the located ones were
 * defined in.
 */
const formatHidden = (
  passed: [CallTreeNode, ...CallTreeNode[]],
  measure: Measure,
): string => {
  const sources = new Set<string>()
  let located = 0
  for (const { func } of passed) {
    if (func.location) {
      sources.add(sourceReferenceId(func.location))
      located++
    }
  }
  const frames = formatCount(passed.length, `frame`)
  const inSources = `in ${formatCount(sources.size, `source`)}`
  let hidden: string
  if (located === 0) {
    hidden = `[[${frames} hidden]]`
  } else if (located === passed.length) {
    hidden = `[[${frames} hidden ${inSources}]]`
  } else {
    hidden = `[[${frames} hidden, ${formatCount(located)} ${inSources}]]`
  }
  return formatMeasured(passed[0].value, measure) + hidden
}

/** How many distinct functions were elided from below a run's frames. */
const elidedCountOf = ({ hidden, deepest }: Run): number => {
  const elided = new Set<number>()
  for (const { elidedFunctionIds } of [...(hidden ?? []), deepest]) {
    for (const id of elidedFunctionIds ?? []) {
      elided.add(id)
    }
  }
  return elided.size
}

/** A frame's value and its share of the profile, leading the frame's name. */
const formatMeasured = (value: number, { metric, total }: Measure): string =>
  `${formatProseValue(value, metric)} (${formatPercent(value / total)}) `

/** A function's self value across its call paths, after its terminal. */
const formatSplitSelf = (
  split: SplitSelf | undefined,
  { total }: Measure,
): string =>
  split === undefined
    ? ``
    : `  (${formatPercent(split.value / total)} self across ${formatCount(split.paths, `call path`)})`

/** How many hidden frames a line's frames stand above. */
const formatElided = (count: number): string =>
  count === 0 ? `` : ` +${formatCount(count, `hidden frame`)}`

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
  // A leading colon marks the line as one in the source named above it, which
  // a bare number after a name would not.
  return `  ${location.shortened ? `:` : ``}${location.text}`
}
