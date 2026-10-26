import {
  formatArrow,
  formatCount,
  formatPercent,
} from '../../../helpers/format.ts'
import { formatSourceLocationDiff } from '../../../location.ts'
import { formatProseValueArrow } from '../../measure.ts'
import type { AggregatedCallStackProfileFunction } from '../aggregate.ts'
import { shareOf, sideSelfValueOf } from '../measure.ts'
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
  sidesOf,
  undrawnValueOf,
} from './node.ts'
import type {
  CallTreeNode,
  CallTreeRoot,
  NodeFunction,
  TreeFunction,
} from './node.ts'
import {
  areNegligible,
  forEachRun,
  isNegligible,
  runFrom,
  summarizedValuesOf,
  undrawnBranchesOf,
} from './state.ts'
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
  let lineCount = 0

  // `namedAbove` is the function on the line above a line's frame,
  // which the frame's location is shortened against.
  const formatCallees = (
    node: CallTreeRoot,
    namedAbove: TreeFunction | undefined,
    prefix: string,
  ): void => {
    const summarizedValues = summarizedValuesOf(tree, node)
    if (formatted) {
      formatCalleeLines(node, namedAbove, prefix, summarizedValues, formatted)
      return
    }
    // A count needs no order, and no line's glyph.
    for (const callee of node.drawnCallees) {
      formatBranch(callee, false, namedAbove, prefix)
    }
    lineCount += Number(summarizedValues !== undefined)
  }

  // Formats `node`'s callees' lines in order, then its summary line.
  const formatCalleeLines = (
    node: CallTreeRoot,
    namedAbove: TreeFunction | undefined,
    prefix: string,
    summarizedValues: readonly number[] | undefined,
    formatted: FormattedCallTree,
  ): void => {
    const undrawn =
      summarizedValues === undefined ? undefined : undrawnBranchesOf(node)
    const lone = undrawn?.count === 1 ? undrawn.hottest : undefined
    const summary = lone === undefined ? undrawn : undefined
    const lines = calleeLinesOf(node, lone, tree)
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
            summarizedValues!,
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
            summarizedValues!,
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
    namedAbove: TreeFunction | undefined,
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

  formatCallees(tree.root, undefined, ``)
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
  tree: DrawnCallTree,
): CalleeLine[] => {
  const lines: CalleeLine[] = node.drawnCallees.map(callee => ({
    type: `branch`,
    callee,
    value: runFrom(callee, tree).deepest.value,
  }))
  if (lone !== undefined) {
    lines.push({ type: `lone`, callee: lone, value: undrawnValueOf(node) })
  }
  return lines.sort((left, right) => right.value - left.value)
}

/**
 * The line of a run's deepest frame, stating the callers it omits, after its
 * glyphs.
 */
const formatFrame = (
  run: Run,
  namedAbove: TreeFunction | undefined,
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
      values: sidesOf(deepest, `value`),
      self: formatSelf(
        deepest,
        formatted.selfNoteFrames.get(keyOf(deepest.func)) === deepest,
        tree,
      ),
      omitsCallers: runOmitsCallers(run, tree),
      omitsCallees: !isNegligible(tree, deepest, `hiddenCalleesValue`),
    },
    namedAbove,
    tree,
    formatted,
  )
}

/**
 * A frame's line after its glyphs: its value on each side and share with
 * {@link self} beside the share, its name and location, and marks for its
 * omitted callers and callees.
 */
const formatFrameLine = (
  {
    func,
    values,
    self,
    omitsCallers,
    omitsCallees,
  }: {
    func: NodeFunction
    values: readonly number[]
    self: string
    omitsCallers: boolean
    omitsCallees: boolean
  },
  namedAbove: TreeFunction | undefined,
  tree: DrawnCallTree,
  formatted: FormattedCallTree,
): string => {
  formatted.notation.omitsFrames ||= omitsCallers || omitsCallees
  // Omitted callers are above the frame, so their mark precedes its numbers.
  return (
    (omitsCallers ? `${OMITTED_FRAMES_NAME} ` : ``) +
    formatMeasured(values, tree.measures, self) +
    nameOf(func, formatted) +
    formatTreeLocation(func, namedAbove, omitsCallers, tree) +
    (omitsCallees ? ` ${OMITTED_FRAMES_NAME}` : ``)
  )
}

/**
 * A frame's value and its share of the profile, with {@link self} beside the
 * share, leading the frame's name. A diff's line states each side's value and
 * share.
 */
const formatMeasured = (
  values: readonly number[],
  measures: readonly Measure[],
  self = ``,
): string => {
  const { metric } = measures[0]!
  const stated = formatProseValueArrow(values[0]!, values.at(-1)!, metric)
  return `${stated} (${formatShares(values, measures)}${self}) `
}

/** Each side's share of its total, joined by arrows. */
const formatShares = (
  values: readonly number[],
  measures: readonly Measure[],
): string =>
  values
    .map((value, side) => formatPercent(shareOf(value, measures[side]!)))
    .reduce(formatArrow)

/**
 * {@link node}'s self value where it is enough to state, and on its function's
 * {@link noted} frame, the function's self value across the whole profile
 * where the other paths hold enough of it to state, each after a comma and
 * `self`.
 */
const formatSelf = (
  node: CallTreeNode,
  noted: boolean,
  tree: DrawnCallTree,
): string => {
  if (!isFunctionNode(node)) {
    return ``
  }
  const { measures, sideFunctionsOf } = tree
  let self = ``
  const selfValues = sidesOf(node, `selfValue`)
  // A frame whose value is all self states it as its value already.
  if (!areNegligible(tree, selfValues) && node.selfValue < node.value) {
    self += `, self ${formatShares(selfValues, measures)}`
  }
  if (!noted) {
    return self
  }
  const values = sideFunctionsOf(node.func).map((func, side) =>
    sideSelfValueOf(measures[side]!, func),
  )
  const elsewhere = values.map((value, side) => value - selfValues[side]!)
  if (!areNegligible(tree, values) && !areNegligible(tree, elsewhere)) {
    self += `, self ${formatShares(values, measures)} globally`
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
  tree: DrawnCallTree,
): boolean => omitted !== undefined || omitsCallers(deepest, tree)

/**
 * Whether {@link node}'s line omits callers: when the call stacks skipping
 * frames above it hold enough to state, or all of its value, so the line never
 * states a direct call no stack made.
 */
const omitsCallers = (node: CallTreeNode, tree: DrawnCallTree): boolean =>
  node.omittedCallersValue > 0 &&
  (!isNegligible(tree, node, `omittedCallersValue`) ||
    node.omittedCallersValue === node.value)

/**
 * The line of a lone undrawn callee's frame, after its glyphs, stating
 * {@link stated} and that its callees are omitted.
 */
const formatLoneCallee = (
  node: CallTreeNode,
  stated: readonly number[],
  namedAbove: TreeFunction | undefined,
  tree: DrawnCallTree,
  formatted: FormattedCallTree,
): string =>
  formatFrameLine(
    {
      func: node.func,
      values: stated,
      self: ``,
      omitsCallers: omitsCallers(node, tree),
      omitsCallees: !isNegligible(tree, node, `value`, node, `selfValue`),
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
  summarizedValues: readonly number[],
  namedAbove: TreeFunction | undefined,
  tree: DrawnCallTree,
  formatted: FormattedCallTree,
): string => {
  const { measures } = tree
  const { func } = hottest
  const branches = formatCount(count, `more ${undrawnNounOf(node)}`)
  const share = formatShares(sidesOf(hottest, `value`), measures)
  const location = formatTreeLocation(
    func,
    namedAbove,
    omitsCallers(hottest, tree),
    tree,
  )
  return `${formatMeasured(summarizedValues, measures)}${branches}, led by (${share}) ${nameOf(func, formatted)}${location}`
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
  namedAbove: TreeFunction | undefined,
  omitsCallers: boolean,
  { sideFunctionsOf, options }: DrawnCallTree,
): string => {
  if (func.type === `placeholder`) {
    return ``
  }
  const sides = sideFunctionsOf(func)
  const aboveSides =
    omitsCallers || namedAbove === undefined
      ? undefined
      : sideFunctionsOf(namedAbove)
  const shortened = sides.map((sideFunc, side) =>
    sideFunc === undefined
      ? undefined
      : frameLocation(sideFunc, aboveSides?.[side], options),
  )
  // A function only one side records or locates is located on that side
  // alone. A side whose location is shortened to nothing is in the source of
  // the line above, which the other side's full location may differ from.
  const located = sides.filter(func => func?.location !== undefined).length
  const present = shortened.filter(location => location !== undefined)
  if (
    located < 2 ||
    shortened.every(location => location === undefined || location.shortened)
  ) {
    return present.length === 0
      ? ``
      : ` at ${present.map(({ text }) => text).reduce(formatArrow)}`
  }
  const [base, current] = sides as [
    AggregatedCallStackProfileFunction,
    AggregatedCallStackProfileFunction,
  ]
  return ` at ${formatSourceLocationDiff(base.location, current.location, options)}`
}
