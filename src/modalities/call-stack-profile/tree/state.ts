import { PERCENT_RESOLUTION } from '../../../helpers/format.ts'
import type { FormattingProfileToMdOptions } from '../../../options.ts'
import type { Measure } from '../../function/index.ts'
import { NEGLIGIBLE_SHARE, shareOf } from '../measure.ts'
import type { CallTreeInput } from './build.ts'
import { isFunctionNode, sideUndrawnValuesOf, sideValueOf } from './node.ts'
import type {
  CallTreeNode,
  CallTreeRoot,
  FunctionNode,
  SideValues,
} from './node.ts'

/** The tree's drawn frames, and what they are drawn against. */
export type DrawnCallTree = {
  root: CallTreeRoot

  /** The nodes of the hottest functions, whose paths the tree draws. */
  terminals: Set<FunctionNode>

  /** The frames a run would omit that have a line of their own instead. */
  named: Set<CallTreeNode>

  lineBudget: number

  /** @see {@link CallTreeInput.measures} */
  measures: readonly Measure[]

  sideFunctionsOf: CallTreeInput[`sideFunctionsOf`]
  options: FormattingProfileToMdOptions
}

/**
 * Whether {@link node}'s {@link field}, less {@link minus}'s
 * {@link minusField} if given, is less than {@link NEGLIGIBLE_SHARE} of its
 * side's total on every side, so no line states it.
 */
export const isNegligible = (
  { measures }: DrawnCallTree,
  node: CallTreeNode,
  field: keyof SideValues,
  minus?: CallTreeNode,
  minusField = field,
): boolean => {
  for (let side = 0; side < measures.length; side++) {
    let value = sideValueOf(node, side, field)
    if (minus !== undefined) {
      value -= sideValueOf(minus, side, minusField)
    }
    if (shareOf(value, measures[side]!) >= NEGLIGIBLE_SHARE) {
      return false
    }
  }
  return true
}

/**
 * Whether {@link values}, one per side of the tree, are each less than
 * {@link NEGLIGIBLE_SHARE} of their side's total, so no line states them.
 */
export const areNegligible = (
  { measures }: DrawnCallTree,
  values: readonly number[],
): boolean =>
  values.every(
    (value, side) => shareOf(value, measures[side]!) < NEGLIGIBLE_SHARE,
  )

/** Whether a line stating {@link node}'s value would state `<0.1%` on every side. */
export const isBelowResolution = (
  { measures }: DrawnCallTree,
  node: CallTreeNode,
): boolean =>
  measures.every(
    (measure, side) =>
      shareOf(sideValueOf(node, side, `value`), measure) < PERCENT_RESOLUTION,
  )

/**
 * {@link node}'s undrawn callees' value on each side, where a summary line or a
 * lone callee's line states it, or nothing where it is negligible.
 */
export const summarizedValuesOf = (
  tree: DrawnCallTree,
  node: CallTreeRoot,
): number[] | undefined => {
  const values = sideUndrawnValuesOf(node)
  return areNegligible(tree, values) ? undefined : values
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
export const runFrom = (node: CallTreeNode, tree: DrawnCallTree): Run => {
  const { terminals, named } = tree
  const passed: CallTreeNode[] = []
  let deepest = node
  while (
    isFunctionNode(deepest) &&
    !terminals.has(deepest) &&
    !named.has(deepest) &&
    isNegligible(tree, deepest, `selfValue`) &&
    deepest.drawnCallees.length === 1 &&
    // Each frame's undrawn callees may be too small to state, but the line
    // states only the deepest frame's value, so what the run leaves undrawn
    // must be too small to state in total.
    isNegligible(tree, node, `value`, deepest.drawnCallees[0])
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
