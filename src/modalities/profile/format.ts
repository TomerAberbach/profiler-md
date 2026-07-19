import type { Heading, RootContent } from 'mdast'
import {
  capitalizeFirst,
  formatArrow,
  formatBytes,
  formatChange,
  formatConjunction,
  formatCount,
  formatMicroseconds,
  formatPercent,
} from '../../helpers/format.ts'
import { selectTopN } from '../../helpers/heap.ts'
import {
  formatSectionGroup,
  heading,
  inlineCode,
  nameLocationPhrasing,
  paragraph,
  phrasing,
} from '../../helpers/markdown.ts'
import { formatSourceLocation } from '../../location.ts'
import { isSyntheticEntry } from '../../options.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import type { Diff } from '../diff.ts'
import {
  admitDiffEntriesForCoverage,
  admitEntriesForCoverage,
  diffSidesOf,
  relaxedOptions,
  selectDiffEntities,
  showDiffEntity,
} from '../format.ts'
import type { CoverageRelaxation } from '../format.ts'
import { formatDiffTable, formatTable } from '../table.ts'
import type { Table } from '../table.ts'
import type {
  AggregatedProfile,
  AggregatedProfileCallStack,
  AggregatedProfileCategoryMetrics,
  AggregatedProfileFunction,
} from './aggregate.ts'
import type {
  AggregatedProfileDiff,
  AggregatedProfileFunctionDiff,
} from './diff.ts'
import {
  diffMeasuresOf,
  formatProseValue,
  formatProseValueDelta,
  measureColumnNoun,
  measureRankedByPhrase,
  measuresOf,
  selfValueOf,
  totalValueOf,
} from './measure.ts'
import type { DiffMeasure, Measure } from './measure.ts'
import type { Metric } from './metric.ts'
import {
  callStackColumns,
  categoryColumns,
  formatCallStack,
  functionColumns,
  lineColumns,
} from './table.ts'
import type { FunctionMeasureRow, NamedFunction } from './table.ts'

export const formatProfile = (
  profile: AggregatedProfile,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const headingLevel = 1
  return [
    heading(headingLevel, formatTitle(profile.metrics)),
    ...formatOverallSummary(profile),
    ...formatMeasureSections(
      measuresOf(profile),
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (measure.total === 0) {
          return [formatZeroTotalNote(measure.metric)]
        }

        const { sectionOptions, notes } = relaxEntryFilterForCoverage({
          measure,
          profile,
          options,
        })
        return [
          ...notes,
          ...formatHottestFunctions({
            measure,
            profile,
            options: sectionOptions,
            headingLevel: sectionHeadingLevel,
          }),
          ...formatHottestCallStacks({
            measure,
            profile,
            options: sectionOptions,
            headingLevel: sectionHeadingLevel,
          }),
        ]
      },
    ),
  ]
}

export const formatProfileDiff = (
  diff: AggregatedProfileDiff,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const headingLevel = 1
  const metrics = diff.metrics.map(({ metric }) => metric)
  return [
    heading(headingLevel, `${formatTitle(metrics)} diff`),
    ...formatDiffSummary(diff),
    ...formatMeasureSections(
      diffMeasuresOf(diff),
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (measure.base.total === 0 && measure.current.total === 0) {
          return [formatZeroTotalNote(measure.metric)]
        }

        const { sectionOptions, relaxation } = relaxDiffEntryFilterForCoverage({
          measure,
          diff,
          options,
        })
        const { content, displayed } = formatDiffFunctions({
          diff,
          measure,
          options: sectionOptions,
          headingLevel: sectionHeadingLevel,
        })
        const notes = relaxation?.admitted.some(pair => displayed.has(pair))
          ? [formatCoverageNote(measure.metric, relaxation.coverage)]
          : []
        return [...notes, ...content]
      },
    ),
  ]
}

/**
 * Relaxes the entry filter when the functions it shows fall short of the
 * coverage target for {@link measure}: the hottest hidden functions are
 * admitted, and a note reporting the pre-relaxation coverage leads the
 * sections. Returns {@link options} unchanged, with no notes, when coverage
 * already suffices.
 */
const relaxEntryFilterForCoverage = ({
  measure,
  profile,
  options,
}: {
  measure: Measure
  profile: AggregatedProfile
  options: FormattingProfileToMdOptions
}): {
  sectionOptions: FormattingProfileToMdOptions
  notes: RootContent[]
} => {
  const relaxation = admitEntriesForCoverage(profile.functions, {
    isShown: options.showEntry,
    isAdmissible: func => !isSyntheticEntry(func),
    selfValueOf: func => selfValueOf(measure, func),
    coverageTarget: options.coverageTarget,
    topN: options.topN,
  })
  return {
    sectionOptions: relaxedOptions(
      options,
      relaxation && new Set(relaxation.admitted),
    ),
    notes: relaxation
      ? [formatCoverageNote(measure.metric, relaxation.coverage)]
      : [],
  }
}

/**
 * The diffing counterpart to {@link relaxEntryFilterForCoverage}, admitting
 * both sides of the admitted function pairs.
 *
 * Returns the relaxation itself instead of notes: the diff tables rank by
 * delta, which admission cannot know, so the caller reports the relaxation
 * only when an admitted pair is actually displayed.
 */
const relaxDiffEntryFilterForCoverage = ({
  measure,
  diff,
  options,
}: {
  measure: DiffMeasure
  diff: AggregatedProfileDiff
  options: FormattingProfileToMdOptions
}): {
  sectionOptions: FormattingProfileToMdOptions
  relaxation: CoverageRelaxation<AggregatedProfileFunctionDiff> | undefined
} => {
  const relaxation = admitDiffEntriesForCoverage(diff.functions, {
    isShown: func => showDiffEntity(func, options),
    isAdmissible: ({ base, current }) => !isSyntheticEntry((base ?? current)!),
    baseSelfValueOf: ({ base }) =>
      base === undefined ? 0 : selfValueOf(measure.base, base),
    currentSelfValueOf: ({ current }) =>
      current === undefined ? 0 : selfValueOf(measure.current, current),
    coverageTarget: options.coverageTarget,
    topN: options.topN,
  })
  return {
    sectionOptions: relaxedOptions(
      options,
      relaxation && new Set(diffSidesOf(relaxation.admitted)),
    ),
    relaxation,
  }
}

/**
 * The note shown before a measure's sections when shown entries fell short of
 * the coverage target and hidden entries were admitted.
 */
const formatCoverageNote = (
  metric: Metric | null,
  coverage: number,
): RootContent =>
  paragraph(
    `Hidden functions account for ${formatPercent(
      1 - coverage,
    )} of ${measureRankedByPhrase(metric)}, so the hottest are also shown.`,
  )

/** The document title for a profile with the given metrics. */
const formatTitle = (metrics: Metric[]): string =>
  metrics.length === 0
    ? `Sampling profile`
    : capitalizeFirst(
        `${formatConjunction(
          metrics.map(metric => metric.phrases.titleNoun),
        )} profile`,
      )

/**
 * Formats a Markdown section per measure in {@link measures} via
 * {@link formatSections}, wrapping each measure's sections in a heading with
 * the metric's name when there are multiple measures.
 */
const formatMeasureSections = <M extends { metric: Metric | null }>(
  measures: M[],
  headingLevel: number,
  formatSections: (measure: M, headingLevel: number) => RootContent[],
): RootContent[] =>
  measures.flatMap(measure =>
    measures.length === 1
      ? formatSections(measure, headingLevel)
      : formatSectionGroup(
          [
            heading(
              headingLevel,
              capitalizeFirst(measure.metric!.phrases.titleNoun),
            ),
          ],
          formatSections(measure, headingLevel + 1),
        ),
  )

/**
 * The note shown in place of a measure's sections when the profile recorded no
 * value for it, e.g. a heap profile dumped when nothing was retained.
 */
const formatZeroTotalNote = (metric: Metric | null): RootContent =>
  paragraph(
    metric === null
      ? `No samples were collected.`
      : `No ${metric.phrases.pastParticipleVerbPhrase} in any sample.`,
  )

const formatFunctionHeading = (
  headingLevel: number,
  func: NamedFunction,
  options: FormattingProfileToMdOptions,
): Heading =>
  heading(
    headingLevel,
    nameLocationPhrasing(
      func.name,
      inlineCode(formatSourceLocation(func.location, options)),
    ),
  )

const formatOverallSummary = (profile: AggregatedProfile): RootContent[] => [
  paragraph(formatSummaryLine(profile)),
  ...formatCategoryTable(profile),
]

const formatSummaryLine = ({
  metrics,
  totalSampleCount,
  totalValues,
  samplingRates,
}: AggregatedProfile): string => {
  if (metrics.length === 0) {
    return `Collected ${formatCount(totalSampleCount, `sample`)}.`
  }

  const totalsSummary = capitalizeFirst(
    formatConjunction(
      metrics.map(
        (metric, index) =>
          `${metric.phrases.pastTenseVerb} ${formatProseValue(
            totalValues[index]!,
            metric,
          )}`,
      ),
    ),
  )
  const samplingRatesSummary = `(${formatConjunction(
    Array.from(samplingRates, (rate, index) =>
      formatSamplingRate(rate, metrics[index]!),
    ),
  )} per sample)`

  return `${totalsSummary} over ${formatCount(
    totalSampleCount,
    `sample`,
  )} ${samplingRatesSummary}.`
}

const formatCategoryTable = (profile: AggregatedProfile): RootContent[] => {
  const { metrics, categoryToMetrics } = profile
  // The first metric, or raw sample count when metric-less, determines sorting and %.
  const primaryMeasure = measuresOf(profile)[0]!
  const hottestCategories = [...categoryToMetrics].sort(
    ([, metrics1], [, metrics2]) =>
      primaryMeasure.valueOf(metrics2.values, metrics2.sampleCount) -
      primaryMeasure.valueOf(metrics1.values, metrics1.sampleCount),
  )
  if (hottestCategories.length === 0) {
    return []
  }

  const metricIndices = metrics.map((_, index) => index)
  const firstTotal = primaryMeasure.total
  return [
    formatTable(
      categoryColumns(metrics),
      hottestCategories.map(([category, stats]) => ({
        category,
        stats,
        indices: metricIndices,
        total: firstTotal,
      })),
    ),
  ]
}

const formatHottestFunctions = ({
  measure,
  profile,
  options,
  headingLevel,
}: {
  measure: Measure
  profile: AggregatedProfile
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] =>
  formatSectionGroup(
    [heading(headingLevel, `Hottest functions`)],
    [
      ...formatHottestSelfFunctions({
        measure,
        profile,
        options,
        headingLevel: headingLevel + 1,
      }),
      ...formatHottestTotalFunctions({
        measure,
        profile,
        options,
        headingLevel: headingLevel + 1,
      }),
    ],
  )

const formatHottestSelfFunctions = ({
  measure,
  profile,
  options,
  headingLevel,
}: {
  measure: Measure
  profile: AggregatedProfile
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const hottestFunctions = selectTopN(
    profile.functions.filter(
      func => options.showEntry(func) && selfValueOf(measure, func) > 0,
    ),
    options.topN,
    func => selfValueOf(measure, func),
  )
  if (hottestFunctions.length === 0) {
    return []
  }

  const hottestLinesSections = hottestFunctions
    .filter(func => func.lineToMetrics.size > 0)
    .flatMap(func =>
      formatHottestLines({
        measure,
        func,
        options,
        headingLevel: headingLevel + 2,
      }),
    )
  const hottestCallers = hottestFunctions.map(func =>
    formatHottestCallers({
      measure,
      func,
      options,
      headingLevel: headingLevel + 2,
    }),
  )
  const anyCallersAdmitted = hottestCallers.some(({ admitted }) => admitted)
  const hottestCallersSections = hottestCallers.flatMap(
    ({ content }) => content,
  )

  const { metric, total } = measure
  return [
    heading(headingLevel, `Self ${measureColumnNoun(metric)}`),
    paragraph(
      `Functions ranked by ${measureRankedByPhrase(metric)} directly in the function body, excluding callees.`,
    ),
    formatTable(
      functionColumns(metric, `Function`, options),
      hottestFunctions.map(func => ({
        func,
        value: selfValueOf(measure, func),
        sampleCount: func.selfSampleCount,
        total,
      })),
    ),
    ...formatSectionGroup(
      [
        heading(headingLevel + 1, `Lines`),
        paragraph(
          `Lines ranked by contribution to each function's self ${measureColumnNoun(metric)}.`,
        ),
      ],
      hottestLinesSections,
    ),
    ...formatSectionGroup(
      [
        heading(headingLevel + 1, `Callers`),
        paragraph(
          `Callers ranked by contribution to each function's self ${measureColumnNoun(metric)}. Inlining can make caller attribution imprecise.${anyCallersAdmitted ? ` Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.` : ``}`,
        ),
      ],
      hottestCallersSections,
    ),
  ]
}

const formatHottestLines = ({
  measure,
  func,
  options,
  headingLevel,
}: {
  measure: Measure
  func: AggregatedProfileFunction
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const selfValue = selfValueOf(measure, func)
  const hottestLines = selectTopN(
    [...func.lineToMetrics],
    Math.ceil(options.topN / 4),
    ([, stats]) => measure.valueOf(stats.values, stats.sampleCount),
  )
  if (hottestLines.length === 0) {
    return []
  }

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      lineColumns(measure.metric, func, options),
      hottestLines.map(([line, stats]) => ({
        line,
        value: measure.valueOf(stats.values, stats.sampleCount),
        sampleCount: stats.sampleCount,
        total: selfValue,
      })),
    ),
  ]
}

const formatHottestCallers = ({
  measure,
  func,
  options,
  headingLevel,
}: {
  measure: Measure
  func: AggregatedProfileFunction
  options: FormattingProfileToMdOptions
  headingLevel: number
}): { content: RootContent[]; admitted: boolean } => {
  const selfValue = selfValueOf(measure, func)
  const entries = [...func.callerIdToMetrics.values()]
  const topN = subsectionTopN(options)
  const relaxation = admitEntriesForCoverage(entries, {
    isShown: entry => options.showEntry(entry.caller),
    isAdmissible: entry => !isSyntheticEntry(entry.caller),
    selfValueOf: entry => selfValueOf(measure, entry),
    coverageTarget: options.coverageTarget,
    topN,
  })
  const shownEntries = entries.filter(
    entry => options.showEntry(entry.caller) && selfValueOf(measure, entry) > 0,
  )
  const hottestCallers = selectTopN(
    relaxation ? [...shownEntries, ...relaxation.admitted] : shownEntries,
    topN,
    entry => selfValueOf(measure, entry),
  )
  if (hottestCallers.length === 0) {
    return { content: [], admitted: false }
  }

  const { metric } = measure
  return {
    content: [
      formatFunctionHeading(headingLevel, func, options),
      formatTable(
        functionColumns(metric, `Caller`, options),
        hottestCallers.map(entry => ({
          func: entry.caller,
          value: selfValueOf(measure, entry),
          sampleCount: entry.selfSampleCount,
          total: selfValue,
        })),
      ),
    ],
    admitted: relaxation !== undefined,
  }
}

const formatHottestTotalFunctions = ({
  measure,
  profile,
  options,
  headingLevel,
}: {
  measure: Measure
  profile: AggregatedProfile
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const hottestFunctions = selectTopN(
    profile.functions.filter(
      func => options.showEntry(func) && totalValueOf(measure, func) > 0,
    ),
    options.topN,
    func => totalValueOf(measure, func),
  )
  if (hottestFunctions.length === 0) {
    return []
  }

  const hottestCallees = hottestFunctions.map(func =>
    formatHottestCallees({
      measure,
      func,
      options,
      headingLevel: headingLevel + 2,
    }),
  )
  const anyCalleesAdmitted = hottestCallees.some(({ admitted }) => admitted)
  const calleeSections = hottestCallees.flatMap(({ content }) => content)

  const { metric, total } = measure
  return [
    heading(headingLevel, `Total ${measureColumnNoun(metric)}`),
    paragraph(
      `Functions ranked by total ${measureRankedByPhrase(metric)} in the function and all its callees.`,
    ),
    formatTable(
      functionColumns(metric, `Function`, options),
      hottestFunctions.map(func => ({
        func,
        value: totalValueOf(measure, func),
        sampleCount: func.totalSampleCount,
        total,
      })),
    ),
    ...formatSectionGroup(
      [
        heading(headingLevel + 1, `Callees`),
        paragraph(
          `Callees ranked by contribution to each function's total ${measureColumnNoun(metric)}. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.${anyCalleesAdmitted ? ` Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.` : ``}`,
        ),
      ],
      calleeSections,
    ),
  ]
}

const formatHottestCallees = ({
  measure,
  func,
  options,
  headingLevel,
}: {
  measure: Measure
  func: AggregatedProfileFunction
  options: FormattingProfileToMdOptions
  headingLevel: number
}): { content: RootContent[]; admitted: boolean } => {
  const total = totalValueOf(measure, func)
  const entries = [...func.calleeIdToMetrics.values()]
  const topN = subsectionTopN(options)
  const relaxation = admitEntriesForCoverage(entries, {
    isShown: entry => options.showEntry(entry.callee),
    isAdmissible: entry => !isSyntheticEntry(entry.callee),
    selfValueOf: entry => totalValueOf(measure, entry),
    coverageTarget: options.coverageTarget,
    topN,
  })
  const shownEntries = entries.filter(
    entry =>
      options.showEntry(entry.callee) && totalValueOf(measure, entry) > 0,
  )
  const hottestCallees = selectTopN(
    relaxation ? [...shownEntries, ...relaxation.admitted] : shownEntries,
    topN,
    entry => totalValueOf(measure, entry),
  )
  if (hottestCallees.length === 0) {
    return { content: [], admitted: false }
  }

  const { metric } = measure
  return {
    content: [
      formatFunctionHeading(headingLevel, func, options),
      formatTable(
        functionColumns(metric, `Callee`, options),
        hottestCallees.map(entry => ({
          func: entry.callee,
          value: totalValueOf(measure, entry),
          sampleCount: entry.totalSampleCount,
          total,
        })),
      ),
    ],
    admitted: relaxation !== undefined,
  }
}

/** The per-subsection display cap derived from the top-level top N. */
const subsectionTopN = (options: FormattingProfileToMdOptions): number =>
  Math.ceil(options.topN / 4)

const formatHottestCallStacks = ({
  measure,
  profile,
  options,
  headingLevel,
}: {
  measure: Measure
  profile: AggregatedProfile
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const isShownCallStack = (callStack: MergedCallStack) =>
    callStack.frames.length >= 2
  // A single-frame stack that lost no frames to the filter carries no call
  // structure and nothing is hidden; it is neither displayed nor covered.
  const mergedCallStacks = mergeShownCallStacks(
    profile.callStacks,
    options,
  ).filter(callStack => isShownCallStack(callStack) || callStack.lostFrames)
  const relaxation = admitEntriesForCoverage(mergedCallStacks, {
    isShown: isShownCallStack,
    isAdmissible: callStack => !isSyntheticEntry(callStack.frames[0]!),
    selfValueOf: callStack => selfValueOf(measure, callStack),
    coverageTarget: options.coverageTarget,
    topN: options.topN,
  })
  const shownCallStacks = mergedCallStacks.filter(
    callStack =>
      isShownCallStack(callStack) && selfValueOf(measure, callStack) > 0,
  )
  const hottestCallStacks = selectTopN(
    relaxation ? [...shownCallStacks, ...relaxation.admitted] : shownCallStacks,
    options.topN,
    callStack => selfValueOf(measure, callStack),
  )
  if (hottestCallStacks.length === 0) {
    return []
  }

  const { metric, total } = measure
  const commonCallStack = findCommonCallStack(hottestCallStacks)

  return [
    heading(headingLevel, `Hottest call stacks`),
    paragraph(
      `Call stacks ranked by ${measureRankedByPhrase(metric)} in their leaf frame.`,
    ),
    ...(relaxation
      ? [
          paragraph(
            `Hidden call stacks account for ${formatPercent(
              1 - relaxation.coverage,
            )} of ${measureRankedByPhrase(metric)}, so the hottest are also shown.`,
          ),
        ]
      : []),
    ...(commonCallStack.length > 0
      ? [
          paragraph(
            phrasing`Common call stack: ${formatCallStack(commonCallStack, options)}`,
          ),
        ]
      : []),
    formatTable(
      callStackColumns(metric, commonCallStack, options),
      hottestCallStacks.map(callStack => ({
        frames: callStack.frames,
        value: selfValueOf(measure, callStack),
        sampleCount: callStack.selfSampleCount,
        total,
      })),
    ),
  ]
}

/**
 * Returns the list of callers of {@link callStacks} that is the longest common
 * suffix of their frames, except it never returns a call stack as long as one
 * of the input call stacks.
 *
 * That cap makes it safe to remove the suffix from any call stack and still
 * have a non-empty call stack to format.
 */
const findCommonCallStack = (
  callStacks: { frames: AggregatedProfileFunction[] }[],
): AggregatedProfileFunction[] => {
  if (callStacks.length <= 1) {
    return []
  }

  const minLength = Math.min(...callStacks.map(cs => cs.frames.length))
  const firstFrames = callStacks[0]!.frames
  let suffixLength = 0

  for (let i = 1; i < minLength; i++) {
    const suffix = firstFrames.slice(-i).map(frame => frame.id)
    if (
      callStacks.every(callStack =>
        callStack.frames.slice(-i).every((frame, j) => frame.id === suffix[j]),
      )
    ) {
      suffixLength = i
    } else {
      break
    }
  }

  return suffixLength > 0 ? firstFrames.slice(-suffixLength) : []
}

/** A projected call stack merged with the others sharing its projection. */
type MergedCallStack = AggregatedProfileCallStack & {
  /** Whether the entry filter hid frames of any constituent stack. */
  lostFrames: boolean
}

/**
 * Projects each call stack onto its shown frames and merges the stacks that
 * become identical, summing their self metrics.
 *
 * Without merging, stacks distinct only in hidden frames would format as
 * duplicate rows, and each row would carry only its own slice of the value.
 * The merged row attributes hidden frames' (chiefly elided leaves') values to
 * the nearest shown frame. A single-frame projection carries no call
 * structure, so it is displayed only when admitted for coverage; a zero-frame
 * projection cannot be displayed at all and is dropped.
 */
const mergeShownCallStacks = (
  callStacks: AggregatedProfileCallStack[],
  options: FormattingProfileToMdOptions,
): MergedCallStack[] => {
  const merged = new Map<string, MergedCallStack>()
  for (const callStack of callStacks) {
    const frames = callStack.frames.filter(options.showEntry)
    if (frames.length === 0) {
      continue
    }

    const lostFrames = frames.length < callStack.frames.length
    const key = frames.map(frame => frame.id).join(`,`)
    const existing = merged.get(key)
    if (!existing) {
      merged.set(key, {
        frames,
        selfSampleCount: callStack.selfSampleCount,
        selfValues: new Float64Array(callStack.selfValues),
        lostFrames,
      })
      continue
    }

    existing.selfSampleCount += callStack.selfSampleCount
    for (let i = 0; i < existing.selfValues.length; i++) {
      existing.selfValues[i]! += callStack.selfValues[i]!
    }
    existing.lostFrames ||= lostFrames
  }
  return [...merged.values()]
}

const formatDiffSummary = (diff: AggregatedProfileDiff): RootContent[] => [
  paragraph(formatDiffSummaryLine(diff)),
  ...formatDiffCategoryTable(diff),
]

const formatDiffSummaryLine = (diff: AggregatedProfileDiff): string => {
  if (diff.metrics.length === 0) {
    const baseSamples = diff.base.totalSampleCount
    const currentSamples = diff.current.totalSampleCount
    return `${formatArrow(
      formatCount(baseSamples, `sample`),
      formatCount(currentSamples, `sample`),
    )}${formatChange(baseSamples, currentSamples, magnitude =>
      formatCount(magnitude, `sample`),
    )}.`
  }

  const valueParts = diff.metrics.map(({ metric, baseIndex, currentIndex }) => {
    const baseValue = diff.base.totalValues[baseIndex]!
    const currentValue = diff.current.totalValues[currentIndex]!
    return `${metric.phrases.pastTenseVerb} ${formatArrow(
      formatProseValue(baseValue, metric),
      formatProseValue(currentValue, metric),
    )}${formatChange(baseValue, currentValue, magnitude =>
      formatProseValueDelta(magnitude, metric),
    )}`
  })
  const rateParts = diff.metrics.map(({ metric, baseIndex, currentIndex }) => {
    const baseRate = formatSamplingRate(
      diff.base.samplingRates[baseIndex]!,
      metric,
    )
    const currentRate = formatSamplingRate(
      diff.current.samplingRates[currentIndex]!,
      metric,
    )
    return formatArrow(baseRate, currentRate)
  })

  return `${capitalizeFirst(formatConjunction(valueParts))} over ${formatArrow(formatCount(diff.base.totalSampleCount, `sample`), formatCount(diff.current.totalSampleCount, `sample`))} (${formatConjunction(rateParts)} per sample).`
}

const formatSamplingRate = (samplingRate: number, metric: Metric): string => {
  switch (metric.type) {
    case `time`:
      return formatMicroseconds(samplingRate * 1000 * metric.milliseconds)
    case `size`:
      return formatBytes(samplingRate * metric.bytes)
    case `custom`:
      return formatCount(samplingRate, metric.proseUnit)
  }
}

const formatDiffCategoryTable = (
  diff: AggregatedProfileDiff,
): RootContent[] => {
  if (diff.categoryToMetrics.size === 0) {
    return []
  }

  const metrics = diff.metrics.map(({ metric }) => metric)
  // The first metric, or raw sample count when metric-less, determines sorting and %.
  const primaryMeasure = diffMeasuresOf(diff)[0]!
  const categoryValue = (
    metrics: AggregatedProfileCategoryMetrics | undefined,
  ): number =>
    metrics === undefined
      ? 0
      : primaryMeasure.current.valueOf(metrics.values, metrics.sampleCount)
  const categories = [...diff.categoryToMetrics].sort(
    ([, left], [, right]) =>
      categoryValue(right.current) - categoryValue(left.current),
  )

  const baseIndices = diff.metrics.map(metric => metric.baseIndex)
  const currentIndices = diff.metrics.map(metric => metric.currentIndex)
  const baseTotal = primaryMeasure.base.total
  const currentTotal = primaryMeasure.current.total
  return [
    formatDiffTable(
      categoryColumns(metrics),
      categories.map(([category, { base, current }]) => ({
        base: base && {
          category,
          stats: base,
          indices: baseIndices,
          total: baseTotal,
        },
        current: current && {
          category,
          stats: current,
          indices: currentIndices,
          total: currentTotal,
        },
      })),
    ),
  ]
}

const formatDiffFunctions = ({
  diff,
  measure,
  options,
  headingLevel,
}: {
  diff: AggregatedProfileDiff
  measure: DiffMeasure
  options: FormattingProfileToMdOptions
  headingLevel: number
}): {
  content: RootContent[]
  displayed: ReadonlySet<AggregatedProfileFunctionDiff>
} => {
  const displayed = new Set<AggregatedProfileFunctionDiff>()
  const sections = [SELF_DIRECTION, TOTAL_DIRECTION].flatMap(direction => {
    const { content, displayed: directionDisplayed } =
      formatDiffDirectionFunctions({
        diff,
        measure,
        options,
        headingLevel: headingLevel + 1,
        direction,
      })
    for (const pair of directionDisplayed) {
      displayed.add(pair)
    }
    return content
  })
  return {
    content: formatSectionGroup(
      [heading(headingLevel, `Hottest functions`)],
      sections,
    ),
    displayed,
  }
}

/**
 * The value accessors and phrasing for one function diff direction (self or
 * total).
 */
type DiffFunctionDirection = {
  valueOf: (side: Measure, func: AggregatedProfileFunction) => number
  sampleCountOf: (func: AggregatedProfileFunction) => number
  titleOf: (metric: Metric | null) => string
  descriptionOf: (metric: Metric | null) => string
}

const SELF_DIRECTION: DiffFunctionDirection = {
  valueOf: selfValueOf,
  sampleCountOf: func => func.selfSampleCount,
  titleOf: metric => `Self ${measureColumnNoun(metric)}`,
  descriptionOf: metric =>
    `${measureRankedByPhrase(metric)} directly in the function body, excluding callees`,
}

const TOTAL_DIRECTION: DiffFunctionDirection = {
  valueOf: totalValueOf,
  sampleCountOf: func => func.totalSampleCount,
  titleOf: metric => `Total ${measureColumnNoun(metric)}`,
  descriptionOf: metric =>
    `total ${measureRankedByPhrase(metric)} in the function and all its callees`,
}

const formatDiffDirectionFunctions = ({
  diff,
  measure,
  options,
  headingLevel,
  direction: { valueOf, sampleCountOf, titleOf, descriptionOf },
}: {
  diff: AggregatedProfileDiff
  measure: DiffMeasure
  options: FormattingProfileToMdOptions
  headingLevel: number
  direction: DiffFunctionDirection
}): {
  content: RootContent[]
  displayed: AggregatedProfileFunctionDiff[]
} => {
  const { metric, base: baseMeasure, current: currentMeasure } = measure

  const diffValue = (side: Measure, func?: AggregatedProfileFunction) =>
    func === undefined ? 0 : valueOf(side, func)
  const { regressions, improvements, hasActive } = selectDiffEntities(
    diff.functions.map(func => ({
      entity: func,
      baseValue: diffValue(baseMeasure, func.base),
      currentValue: diffValue(currentMeasure, func.current),
    })),
    options,
  )

  const sideRowOf = (side: Measure, func?: AggregatedProfileFunction) =>
    func && {
      func,
      value: valueOf(side, func),
      sampleCount: sampleCountOf(func),
      total: side.total,
    }
  const rowOf = ({ base, current }: AggregatedProfileFunctionDiff) => ({
    base: sideRowOf(baseMeasure, base),
    current: sideRowOf(currentMeasure, current),
  })

  return {
    content: formatDiffFunctionSections({
      headingLevel,
      title: titleOf(metric),
      description: descriptionOf(metric),
      columns: functionColumns(metric, `Function`, options),
      hasActive,
      regressions: regressions.map(({ entity }) => rowOf(entity)),
      improvements: improvements.map(({ entity }) => rowOf(entity)),
    }),
    displayed: [...regressions, ...improvements].map(({ entity }) => entity),
  }
}

/**
 * Assembles the regressions and improvements subsections for one function
 * direction (self or total) under a {@link title} heading, with rows under the
 * given table {@link columns}.
 *
 * When nothing differed but {@link hasActive} functions exist on either side,
 * the section stays, with a "did not differ" note. When no functions are
 * active (the section a non-diff profile would have omitted), it is omitted.
 */
const formatDiffFunctionSections = ({
  headingLevel,
  title,
  description,
  columns,
  hasActive,
  regressions,
  improvements,
}: {
  headingLevel: number
  title: string
  description: string
  columns: Table<FunctionMeasureRow>
  hasActive: boolean
  regressions: Diff<FunctionMeasureRow>[]
  improvements: Diff<FunctionMeasureRow>[]
}): RootContent[] => {
  const sections: RootContent[] = []

  if (regressions.length > 0) {
    sections.push(
      heading(headingLevel + 1, `Regressions`),
      paragraph(`Functions with the largest increase in ${description}.`),
      formatDiffTable(columns, regressions),
    )
  }

  if (improvements.length > 0) {
    sections.push(
      heading(headingLevel + 1, `Improvements`),
      paragraph(`Functions with the largest decrease in ${description}.`),
      formatDiffTable(columns, improvements),
    )
  }

  if (sections.length === 0) {
    if (!hasActive) {
      return []
    }
    sections.push(paragraph(`No function differed in ${description}.`))
  }

  return formatSectionGroup([heading(headingLevel, title)], sections)
}
