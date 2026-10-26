import type { RootContent } from 'mdast'
import { selectTopN } from '../../../helpers/heap.ts'
import { code, paragraph } from '../../../helpers/markdown.ts'
import type { FormattingProfileToMdOptions } from '../../../options.ts'
import type {
  AggregatedCallStackProfile,
  AggregatedCallStackProfileFunction,
} from '../aggregate.ts'
import {
  NEGLIGIBLE_SHARE,
  selfRankedFunctions,
  selfValueOf,
} from '../measure.ts'
import type { Measure } from '../measure.ts'
import type { ShownFrameNotation } from '../table.ts'
import { buildCallTree } from './build.ts'
import {
  draw,
  drawHottestFunctions,
  drawLargestBranches,
  expandRuns,
  nameLoneCallees,
} from './draw.ts'
import { formatCallTreeLines } from './lines.ts'
import type { FormattedCallTree } from './lines.ts'
import type { CallTreeRoot, FunctionNode } from './node.ts'
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
