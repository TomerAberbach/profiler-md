import {
  formatCount,
  formatMicroseconds,
  formatMilliseconds,
  formatPercent,
} from '../../internal/format.ts'
import { formatTable, inlineCode } from '../../internal/markdown.ts'
import { findCommonCallStack, formatCallStack } from '../common.ts'
import type { NormalizedV8ProfileToMdOptions } from '../common.ts'
import type {
  SummarizedCpuProfile,
  SummarizedProfileNode,
} from './summarize.ts'

export const formatSummarizedProfile = (
  summary: SummarizedCpuProfile,
  options: NormalizedV8ProfileToMdOptions,
): string =>
  `${[
    `# CPU profile`,
    formatOverallProfileSummary(summary),
    formatHottestFunctions(summary, options),
    formatHottestCallStacks(summary, options),
  ]
    .filter(Boolean)
    .join(`\n\n`)}\n`

const formatOverallProfileSummary = ({
  totalTime,
  sampleCount,
  samplingInterval,
  callFrameCategoryToTime,
}: SummarizedCpuProfile): string => {
  const hottestCallFrameCategories = [...callFrameCategoryToTime].sort(
    ([, time1], [, time2]) => time2 - time1,
  )
  return [
    `Took ${formatMilliseconds(
      totalTime,
    )} over ${formatCount(sampleCount)} sample${
      sampleCount > 1 ? `s` : ``
    } (${formatMicroseconds(samplingInterval)} per sample).`,
    formatTable(
      [`Category`, `Total %`, `Total`],
      hottestCallFrameCategories.map(([category, time]) => [
        category,
        formatPercent(time / totalTime),
        formatMilliseconds(time),
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestFunctions = (
  summary: SummarizedCpuProfile,
  options: NormalizedV8ProfileToMdOptions,
): string =>
  [
    `## Hottest functions`,
    formatHottestSelfTimeFunctions(summary, options),
    formatHottestTotalTimeFunctions(summary, options),
  ].join(`\n\n`)

const formatHottestSelfTimeFunctions = (
  { totalTime, nodes }: SummarizedCpuProfile,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const hottestSelfTimeNodes = nodes
    .filter(options.includeCallFrame)
    .sort((node1, node2) => node2.selfTime - node1.selfTime)
    .slice(0, options.topN)
  const hottestLinesSections = hottestSelfTimeNodes
    .filter(node => node.lineToHitCount.size > 0)
    .map(node => formatHottestLines(node, options))
  const hottestCallerSections = hottestSelfTimeNodes
    .map(node => formatHottestCallers(node, options))
    .filter(section => section !== null)

  return [
    `### Self time`,
    `Functions ranked by time in the function body, excluding callees.`,
    formatTable(
      [
        { content: `Self %`, align: `right` },
        { content: `Self`, align: `right` },
        { content: `Total %`, align: `right` },
        { content: `Total`, align: `right` },
        `Function`,
        `Location`,
      ],
      hottestSelfTimeNodes.map(node => [
        formatPercent(node.selfTime / totalTime),
        formatMilliseconds(node.selfTime),
        formatPercent(node.totalTime / totalTime),
        formatMilliseconds(node.totalTime),
        inlineCode(node.functionName),
        node.location,
      ]),
    ),
    ...(hottestLinesSections.length > 0
      ? [
          `#### Lines`,
          `Lines ranked by contribution to each function's sample count.`,
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
  const hottestLines = [...node.lineToHitCount]
    .sort(([, hitCount1], [, hitCount2]) => hitCount2 - hitCount1)
    .slice(0, Math.ceil(topN / 4))

  return [
    `##### ${inlineCode(node.functionName)} (${node.location})`,
    formatTable(
      [
        { content: `Count %`, align: `right` },
        { content: `Count`, align: `right` },
        `Location`,
      ],
      hottestLines.map(([line, hitCount]) => [
        formatPercent(hitCount / node.hitCount),
        formatCount(hitCount),
        `${node.fileLocation}:${line + 1}`,
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestCallers = (
  node: SummarizedProfileNode,
  options: NormalizedV8ProfileToMdOptions,
): string | null => {
  const hottestCallerSelfTimes = [...node.callerIdToSelfTime.values()]
    .filter(({ caller }) => options.includeCallFrame(caller))
    .sort((caller1, caller2) => caller2.selfTime - caller1.selfTime)
    .slice(0, Math.ceil(options.topN / 4))
  if (hottestCallerSelfTimes.length === 0) {
    return null
  }

  return [
    `##### ${inlineCode(node.functionName)} (${node.location})`,
    formatTable(
      [
        { content: `Self %`, align: `right` },
        { content: `Self`, align: `right` },
        `Caller`,
        `Location`,
      ],
      hottestCallerSelfTimes.map(({ caller, selfTime }) => [
        formatPercent(selfTime / node.selfTime),
        formatMilliseconds(selfTime),
        inlineCode(caller.functionName),
        caller.location,
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestTotalTimeFunctions = (
  { totalTime, nodes }: SummarizedCpuProfile,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const hottestTotalTimeNodes = nodes
    .filter(options.includeCallFrame)
    .sort((node1, node2) => node2.totalTime - node1.totalTime)
    .slice(0, options.topN)
  const hottestCalleeSections = hottestTotalTimeNodes
    .map(node => formatHottestCallees(node, options))
    .filter(section => section !== null)

  return [
    `### Total time`,
    `Functions ranked by total time in the function and all its callees.`,
    formatTable(
      [
        { content: `Total %`, align: `right` },
        { content: `Total`, align: `right` },
        { content: `Self %`, align: `right` },
        { content: `Self`, align: `right` },
        `Function`,
        `Location`,
      ],
      hottestTotalTimeNodes.map(node => [
        formatPercent(node.totalTime / totalTime),
        formatMilliseconds(node.totalTime),
        formatPercent(node.selfTime / totalTime),
        formatMilliseconds(node.selfTime),
        inlineCode(node.functionName),
        node.location,
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
): string | null => {
  const hottestCalleeTotalTimes = [...node.calleeIdToTotalTime.values()]
    .filter(({ callee }) => options.includeCallFrame(callee))
    .sort((callee1, callee2) => callee2.totalTime - callee1.totalTime)
    .slice(0, Math.ceil(options.topN / 4))
  if (hottestCalleeTotalTimes.length === 0) {
    return null
  }

  return [
    `##### ${inlineCode(node.functionName)} (${node.location})`,
    formatTable(
      [
        { content: `Total %`, align: `right` },
        { content: `Total`, align: `right` },
        `Callee`,
        `Location`,
      ],
      hottestCalleeTotalTimes.map(({ callee, totalTime }) => [
        formatPercent(totalTime / node.totalTime),
        formatMilliseconds(totalTime),
        inlineCode(callee.functionName),
        callee.location,
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestCallStacks = (
  summary: SummarizedCpuProfile,
  options: NormalizedV8ProfileToMdOptions,
): string | null => {
  const hottestCallStacks = summary.callStacks
    .map(callStack => ({
      ...callStack,
      nodes: callStack.nodes.filter(options.includeCallFrame),
    }))
    .filter(callStack => callStack.nodes.length > 1)
    .sort((callStack1, callStack2) => callStack2.selfTime - callStack1.selfTime)
    .slice(0, options.topN)
  if (hottestCallStacks.length === 0) {
    return null
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
        { content: `Self %`, align: `right` },
        { content: `Self`, align: `right` },
        `Call stack`,
      ],
      hottestCallStacks.map(callStack => [
        formatPercent(callStack.selfTime / summary.totalTime),
        formatMilliseconds(callStack.selfTime),
        formatCallStack(
          commonCallStack.length > 0
            ? callStack.nodes.slice(0, -commonCallStack.length)
            : callStack.nodes,
        ),
      ]),
    ),
  ].join(`\n\n`)
}
