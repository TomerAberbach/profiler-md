import {
  formatCount,
  formatMicroseconds,
  formatMicrosecondsExact,
  formatPercent,
} from '../../internal/format.ts'
import { selectTopN } from '../../internal/heap.ts'
import { formatTable, inlineCode } from '../../internal/markdown.ts'
import { findCommonCallStack, formatCallStack } from '../common.ts'
import type { NormalizedV8ProfileToMdOptions } from '../common.ts'
import type {
  SummarizedCpuProfile,
  SummarizedProfileNode,
} from './summarize.ts'

export const formatSummarizedProfile = (
  profile: SummarizedCpuProfile,
  options: NormalizedV8ProfileToMdOptions,
): string =>
  `${[
    `# CPU profile`,
    formatOverallProfileSummary(profile),
    formatHottestFunctions(profile, options),
    formatHottestCallStacks(profile, options),
  ]
    .filter(Boolean)
    .join(`\n\n`)}\n`

const formatOverallProfileSummary = ({
  totalTime,
  totalSampleCount,
  samplingInterval,
  callFrameCategoryToStats,
}: SummarizedCpuProfile): string => {
  const hottestCallFrameCategories = [...callFrameCategoryToStats].sort(
    ([, stats1], [, stats2]) => stats2.time - stats1.time,
  )

  return [
    `Took ${formatMicroseconds(
      totalTime,
    )} over ${formatCount(totalSampleCount, `sample`)} (${formatMicrosecondsExact(
      samplingInterval,
    )} per sample).`,
    formatTable(
      [`Category`, `%`, `Time`, `Samples`],
      hottestCallFrameCategories.map(([category, { time, sampleCount }]) => [
        category,
        formatPercent(time / totalTime),
        formatMicroseconds(time),
        formatCount(sampleCount),
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestFunctions = (
  profile: SummarizedCpuProfile,
  options: NormalizedV8ProfileToMdOptions,
): string =>
  [
    `## Hottest functions`,
    formatHottestSelfTimeFunctions(profile, options),
    formatHottestTotalTimeFunctions(profile, options),
  ].join(`\n\n`)

const formatHottestSelfTimeFunctions = (
  { totalTime, nodes }: SummarizedCpuProfile,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const hottestSelfTimeNodes = selectTopN(
    nodes.filter(options.includeCallFrame),
    options.topN,
    (node1, node2) => node2.selfTime - node1.selfTime,
  )
  const hottestLinesSections = hottestSelfTimeNodes
    .filter(node => node.lineToStats.size > 0)
    .map(node => formatHottestLines(node, options))
  const hottestCallerSections = hottestSelfTimeNodes
    .map(node => formatHottestCallers(node, options))
    .filter(section => section !== undefined)

  return [
    `### Self time`,
    `Functions ranked by time in the function body, excluding callees.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Time`, align: `right` },
        { content: `Samples`, align: `right` },
        `Function`,
        `Location`,
      ],
      hottestSelfTimeNodes.map(
        ({ functionName, location, selfTime, selfSampleCount }) => [
          formatPercent(selfTime / totalTime),
          formatMicroseconds(selfTime),
          formatCount(selfSampleCount),
          inlineCode(functionName),
          location ?? inlineCode(`<native>`),
        ],
      ),
    ),
    ...(hottestLinesSections.length > 0
      ? [
          `#### Lines`,
          `Lines ranked by contribution to each function's self time.`,
        ]
      : []),
    ...hottestLinesSections,
    ...(hottestCallerSections.length > 0
      ? [
          `#### Callers`,
          `Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.`,
        ]
      : []),
    ...hottestCallerSections,
  ].join(`\n\n`)
}

const formatHottestLines = (
  node: SummarizedProfileNode,
  { topN }: NormalizedV8ProfileToMdOptions,
): string => {
  const hottestLines = [...node.lineToStats]
    .sort(([, stats1], [, stats2]) => stats2.time - stats1.time)
    .slice(0, Math.ceil(topN / 4))

  return [
    `##### ${inlineCode(node.functionName)} (${
      node.location ?? inlineCode(`<native>`)
    })`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Time`, align: `right` },
        { content: `Samples`, align: `right` },
        `Location`,
      ],
      hottestLines.map(([line, { time, sampleCount }]) => [
        formatPercent(time / node.selfTime),
        formatMicroseconds(time),
        formatCount(sampleCount),
        `${node.fileLocation}:${line + 1}`,
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestCallers = (
  node: SummarizedProfileNode,
  options: NormalizedV8ProfileToMdOptions,
): string | undefined => {
  const hottestCallerSelfTimes = [...node.callerIdToStats.values()]
    .filter(({ caller }) => options.includeCallFrame(caller))
    .sort((caller1, caller2) => caller2.selfTime - caller1.selfTime)
    .slice(0, Math.ceil(options.topN / 4))
  if (hottestCallerSelfTimes.length === 0) {
    return undefined
  }

  return [
    `##### ${inlineCode(node.functionName)} (${
      node.location ?? inlineCode(`<native>`)
    })`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Time`, align: `right` },
        { content: `Samples`, align: `right` },
        `Caller`,
        `Location`,
      ],
      hottestCallerSelfTimes.map(({ caller, selfTime, selfSampleCount }) => [
        formatPercent(selfTime / node.selfTime),
        formatMicroseconds(selfTime),
        formatCount(selfSampleCount),
        inlineCode(caller.functionName),
        caller.location ?? inlineCode(`<native>`),
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestTotalTimeFunctions = (
  { totalTime, nodes }: SummarizedCpuProfile,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const hottestTotalTimeNodes = selectTopN(
    nodes.filter(options.includeCallFrame),
    options.topN,
    (node1, node2) => node2.totalTime - node1.totalTime,
  )
  const hottestCalleeSections = hottestTotalTimeNodes
    .map(node => formatHottestCallees(node, options))
    .filter(section => section !== undefined)

  return [
    `### Total time`,
    `Functions ranked by total time in the function and all its callees.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Time`, align: `right` },
        { content: `Samples`, align: `right` },
        `Function`,
        `Location`,
      ],
      hottestTotalTimeNodes.map(node => [
        formatPercent(node.totalTime / totalTime),
        formatMicroseconds(node.totalTime),
        formatCount(node.totalSampleCount),
        inlineCode(node.functionName),
        node.location ?? inlineCode(`<native>`),
      ]),
    ),
    ...(hottestCalleeSections.length > 0
      ? [
          `#### Callees`,
          `Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.`,
        ]
      : []),
    ...hottestCalleeSections,
  ].join(`\n\n`)
}

const formatHottestCallees = (
  node: SummarizedProfileNode,
  options: NormalizedV8ProfileToMdOptions,
): string | undefined => {
  const hottestCalleeTotalTimes = [...node.calleeIdToStats.values()]
    .filter(({ callee }) => options.includeCallFrame(callee))
    .sort((callee1, callee2) => callee2.totalTime - callee1.totalTime)
    .slice(0, Math.ceil(options.topN / 4))
  if (hottestCalleeTotalTimes.length === 0) {
    return undefined
  }

  return [
    `##### ${inlineCode(node.functionName)} (${
      node.location ?? inlineCode(`<native>`)
    })`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Time`, align: `right` },
        { content: `Samples`, align: `right` },
        `Callee`,
        `Location`,
      ],
      hottestCalleeTotalTimes.map(({ callee, totalTime, totalSampleCount }) => [
        formatPercent(totalTime / node.totalTime),
        formatMicroseconds(totalTime),
        formatCount(totalSampleCount),
        inlineCode(callee.functionName),
        callee.location ?? inlineCode(`<native>`),
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestCallStacks = (
  { totalTime, callStacks }: SummarizedCpuProfile,
  options: NormalizedV8ProfileToMdOptions,
): string | undefined => {
  const hottestCallStacks = selectTopN(
    callStacks
      .map(callStack => ({
        ...callStack,
        nodes: callStack.nodes.filter(options.includeCallFrame),
      }))
      .filter(callStack => callStack.nodes.length > 1),
    options.topN,
    (callStack1, callStack2) => callStack2.selfTime - callStack1.selfTime,
  )
  if (hottestCallStacks.length === 0) {
    return undefined
  }

  const commonCallStack = findCommonCallStack(hottestCallStacks)
  return [
    `## Hottest call stacks`,
    `Call stacks ranked by time spent in their top frame.`,
    ...(commonCallStack.length > 0
      ? [`Common call stack: ${formatCallStack(commonCallStack)}`]
      : []),
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Time`, align: `right` },
        { content: `Samples`, align: `right` },
        `Call stack`,
      ],
      hottestCallStacks.map(({ nodes, selfTime, selfSampleCount }) => [
        formatPercent(selfTime / totalTime),
        formatMicroseconds(selfTime),
        formatCount(selfSampleCount),
        formatCallStack(
          commonCallStack.length > 0
            ? nodes.slice(0, -commonCallStack.length)
            : nodes,
        ),
      ]),
    ),
  ].join(`\n\n`)
}
