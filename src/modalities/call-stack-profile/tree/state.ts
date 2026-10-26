import type { FormattingProfileToMdOptions } from '../../../options.ts'
import type { Measure } from '../measure.ts'
import { isFunctionNode } from './node.ts'
import type { CallTreeNode, CallTreeRoot, FunctionNode } from './node.ts'

/** The tree's drawn frames, and what they are drawn against. */
export type DrawnCallTree = {
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

/** Calls {@link visit} with each of the tree's runs. */
export const forEachRun = (
  tree: DrawnCallTree,
  visit: (run: Run) => void,
): void => {
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
 * The callers from a drawn frame down to the next frame with a line of its own,
 * and that frame, whose line omits them.
 *
 * The frames between are no function a reader came for, so one line omits them
 * however many they are.
 */
export type Run = {
  /** At least two callers, since a lone caller is named instead. */
  omitted: [CallTreeNode, CallTreeNode, ...CallTreeNode[]] | undefined
  deepest: CallTreeNode
}

/**
 * The run from {@link node} down to the first frame that is a hottest
 * function or {@link DrawnCallTree.named}, holds enough self value to state,
 * or leads to more than one drawn callee, or before the run leaves enough
 * undrawn to state.
 */
export const runFrom = (
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
 * The callees of a node on no drawn path: how many functions they are, and the
 * one with the largest value.
 *
 * A total alone states how much a reader is not seeing without stating what
 * any of it is, so the line states the branches worth following first.
 */
export type UndrawnBranches = {
  count: number
  hottest: CallTreeNode
}

export const undrawnBranchesOf = (
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
