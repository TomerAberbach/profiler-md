import { formatCount, formatPercent } from '../../../helpers/format.ts'
import type { FormattingProfileToMdOptions } from '../../../options.ts'
import { formatProseValue } from '../../measure.ts'
import type { AggregatedCallStackProfileFunction } from '../aggregate.ts'
import { selfValueOf } from '../measure.ts'
import type { Measure } from '../measure.ts'
import {
  frameLocation,
  newShownFrameNotation,
  OMITTED_FRAMES_NAME,
} from '../table.ts'
import type { ShownFrameNotation } from '../table.ts'
import {
  isCallTreeNode,
  isFunctionNode,
  keyOf,
  undrawnValueOf,
} from './node.ts'
import type { CallTreeNode, CallTreeRoot, NodeFunction } from './node.ts'
import { forEachRun, runFrom, undrawnBranchesOf } from './state.ts'
import type { DrawnCallTree, Run, UndrawnBranches } from './state.ts'

/** The tree's lines, and the frame notation they use. */
export type FormattedCallTree = {
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

export const formatCallTreeLines = (tree: DrawnCallTree): FormattedCallTree => {
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

/**
 * Counts the tree's lines, and formats them into {@link formatted} if given.
 * One walk does both, so a count is the number of lines the tree formats to.
 */
export const countLines = (
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

const BRANCH = `├── `
const LAST_BRANCH = `└── `
const VERTICAL = `│   `
const BLANK = `    `

const glyph = (prefix: string, last: boolean): string =>
  prefix + (last ? LAST_BRANCH : BRANCH)

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
