import type { RootContent } from 'mdast'
import { selectTopN } from '../../../helpers/heap.ts'
import { code, paragraph } from '../../../helpers/markdown.ts'
import type { FormattingProfileToMdOptions } from '../../../options.ts'
import { functionIdIndexes } from '../../diff.ts'
import { selectLargestChanges, unchangedDiffSentence } from '../../format.ts'
import type { DiffMeasure, Measure } from '../../function/index.ts'
import type {
  AggregatedCallStackProfile,
  AggregatedCallStackProfileFunction,
} from '../aggregate.ts'
import type { AggregatedCallStackProfileDiff } from '../diff.ts'
import {
  selfRankedFunctions,
  selfValueOf,
  sideSelfValueOf,
} from '../measure.ts'
import type { ShownFrameNotation } from '../table.ts'
import { buildCallTree } from './build.ts'
import type { CallTreeInput } from './build.ts'
import {
  draw,
  drawHottestFunctions,
  drawLargestBranches,
  expandRuns,
  nameLoneCallees,
} from './draw.ts'
import { formatCallTreeLines } from './lines.ts'
import type { FormattedCallTree } from './lines.ts'
import type { CallTreeRoot, FunctionNode, TreeFunction } from './node.ts'
import { isNegligible } from './state.ts'
import type { DrawnCallTree } from './state.ts'

export { calleesOf, undrawnValueOf } from './node.ts'
export type { CallTreeRoot } from './node.ts'

/**
 * How many lines one profile's tree may fill: two per entry a ranking shows,
 * since a path to a function costs about two lines, the frame's and the total
 * of what the path leaves undrawn.
 */
export const lineBudgetOf = ({ topN }: { topN: number }): number => 2 * topN

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
}): RootContent[] =>
  formatDrawnCallTree(
    drawCallTree({ profile, measure, options }).formatted,
    `hottest functions`,
    notation,
  )

/**
 * The diffing counterpart to {@link formatCallTree}: one tree over both sides'
 * call stacks, keyed by the function diffs their frames belong to, with the
 * paths to the functions whose self value changed the most.
 *
 * A frame shows when its function diff shows on either side
 * ({@link shownByIndex}, indexed like the diff's functions).
 */
export const formatDiffCallTree = ({
  diff,
  shownByIndex,
  measure,
  options,
  notation,
}: {
  diff: AggregatedCallStackProfileDiff
  shownByIndex: readonly boolean[]
  measure: DiffMeasure
  options: FormattingProfileToMdOptions
  notation: ShownFrameNotation
}): RootContent[] => {
  const { root, formatted } = drawTree(
    diffCallTreeInput(diff, shownByIndex, measure, options),
    options,
  )
  if (formatted.lines.length > 0 && !hasChangedNode(root)) {
    return [
      paragraph(
        unchangedDiffSentence(
          `call path`,
          measure.metric.phrases.pastParticipleVerbPhrase,
        ),
      ),
    ]
  }
  return formatDrawnCallTree(
    formatted,
    `hottest and most changed functions`,
    notation,
  )
}

/** Whether any node below {@link root} differs in value between the sides. */
const hasChangedNode = (root: CallTreeRoot): boolean => {
  // The root's values stay 0 on both sides.
  const pending: CallTreeRoot[] = [root]
  while (pending.length > 0) {
    const { sideValues, firstCallee, otherCallees } = pending.pop()!
    const [base, current] = sideValues!
    if (base!.value !== current!.value) {
      return true
    }
    if (firstCallee !== undefined) {
      pending.push(firstCallee)
    }
    for (const callee of otherCallees?.values() ?? []) {
      pending.push(callee)
    }
  }
  return false
}

/**
 * The tree's sentence and code block, opening with the paths it draws to
 * {@link terminals}, or nothing when no path is drawn.
 */
const formatDrawnCallTree = (
  formatted: FormattedCallTree,
  terminals: string,
  notation: ShownFrameNotation,
): RootContent[] => {
  if (formatted.lines.length === 0) {
    return []
  }

  notation.omitsFrames ||= formatted.notation.omitsFrames
  notation.showsTruncated ||= formatted.notation.showsTruncated
  return [paragraph(`Call paths to the ${terminals}.`), code(formatted.lines)]
}

export type CallTree = {
  root: CallTreeRoot
  terminals: ReadonlySet<FunctionNode>
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
  const { callStacks, functions, context } = profile
  const { showEntry } = options
  return drawTree(
    {
      measures: [measure],
      functionCount: functions.length,
      hottest: hottestFunctions(
        profile,
        measure,
        options,
        lineBudgetOf(options),
      ),
      // A profile's function IDs index its functions.
      isShown: ({ id }) => showEntry(functions[id]!, context),
      forEachCallStack: visit => {
        for (const callStack of callStacks) {
          visit(
            0,
            callStack.frames,
            callStack.truncated,
            selfValueOf(measure, callStack),
          )
        }
      },
      sideFunctionsOf: ({ id }) => [functions[id]],
    },
    options,
  )
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
 * The tree input of a diff, whose tree functions stand for its function diffs,
 * with each function diff's index as its ID.
 */
const diffCallTreeInput = (
  diff: AggregatedCallStackProfileDiff,
  shownByIndex: readonly boolean[],
  measure: DiffMeasure,
  options: FormattingProfileToMdOptions,
): CallTreeInput => {
  const treeFunctions = diff.functions.map(({ name }, id): TreeFunction => ({
    type: `function`,
    id,
    name,
  }))
  const idToIndex = functionIdIndexes(diff.functions)
  const sides = [`base`, `current`] as const
  // Reused across call stacks, so mapping a stack's frames allocates nothing.
  const frames: TreeFunction[] = []
  return {
    measures: [measure.base, measure.current],
    functionCount: treeFunctions.length,
    hottest: largestSelfChanges(
      diff,
      treeFunctions.filter((_, index) => shownByIndex[index]),
      measure,
      lineBudgetOf(options),
    ),
    isShown: func => shownByIndex[func.id]!,
    forEachCallStack: visit => {
      for (const [side, name] of sides.entries()) {
        const sideMeasure = measure[name]
        const sideIdToIndex = idToIndex[name]
        for (const callStack of diff[name].callStacks) {
          frames.length = 0
          for (const frame of callStack.frames) {
            frames.push(treeFunctions[sideIdToIndex[frame.id]!]!)
          }
          visit(
            side,
            frames,
            callStack.truncated,
            selfValueOf(sideMeasure, callStack),
          )
        }
      }
    },
    sideFunctionsOf: ({ id }) => {
      const { base, current } = diff.functions[id]!
      return [base, current]
    },
  }
}

/**
 * The tree functions whose function diffs' self value changed the most in
 * either direction, largest change first, as the diff's rankings rank them.
 */
const largestSelfChanges = (
  { functions }: AggregatedCallStackProfileDiff,
  treeFunctions: TreeFunction[],
  measure: DiffMeasure,
  limit: number,
): TreeFunction[] =>
  selectLargestChanges(treeFunctions, limit, ({ id }) => {
    const { base, current } = functions[id]!
    return (
      sideSelfValueOf(measure.current, current) -
      sideSelfValueOf(measure.base, base)
    )
  })

/**
 * Builds the tree of {@link input}'s call stacks and draws its largest branches
 * and the paths to its hottest functions.
 */
const drawTree = (
  input: CallTreeInput,
  options: FormattingProfileToMdOptions,
): CallTree => {
  const { measures, sideFunctionsOf } = input
  const lineBudget = lineBudgetOf(options)
  const { root, hiddenStacks, nodesOfHottest } = buildCallTree(input)
  const tree: DrawnCallTree = {
    root,
    terminals: new Set(),
    named: new Set(),
    lineBudget,
    measures,
    sideFunctionsOf,
    options,
  }
  // The root has no line of its own to mark them on as omitted callees.
  if (
    hiddenStacks !== undefined &&
    !isNegligible(tree, hiddenStacks, `value`)
  ) {
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
    formatted: formatCallTreeLines(tree),
  }
}
