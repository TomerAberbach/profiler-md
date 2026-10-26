import { PERCENT_RESOLUTION } from '../../../helpers/format.ts'
import { countLines } from './lines.ts'
import { isCallTreeNode, NO_DRAWN_CALLEES, undrawnValueOf } from './node.ts'
import type { CallTreeNode, CallTreeRoot, FunctionNode } from './node.ts'
import type { DrawnCallTree, Run, UndrawnBranches } from './state.ts'
import { forEachRun, undrawnBranchesOf } from './state.ts'

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
export const drawLargestBranches = (
  tree: DrawnCallTree,
  lineLimit: number,
): void => {
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
 * Draws the callee a summary line was standing in for on its own, wherever one
 * branch is all a summary line stands for and the tree still fits.
 *
 * Summarizing one branch costs the line its function would take, so the
 * summary line states a number where the tree could have stated a function.
 */
export const nameLoneCallees = (
  tree: DrawnCallTree,
  lineLimit: number,
): void => {
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
export const drawHottestFunctions = (
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

export const draw = (node: CallTreeNode): void => {
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
export const expandRuns = (tree: DrawnCallTree): void => {
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
