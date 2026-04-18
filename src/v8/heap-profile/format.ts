import {
  formatBytes,
  formatCount,
  formatPercent,
} from '../../internal/format.ts'
import { selectTopN } from '../../internal/heap.ts'
import { formatTable, inlineCode } from '../../internal/markdown.ts'
import { findCommonCallStack, formatCallStack } from '../common.ts'
import type { NormalizedV8ProfileToMdOptions } from '../common.ts'
import type {
  SummarizedHeapProfile,
  SummarizedProfileNode,
} from './summarize.ts'

export const formatSummarizedProfile = (
  profile: SummarizedHeapProfile,
  options: NormalizedV8ProfileToMdOptions,
): string =>
  `${[
    `# Heap profile`,
    formatOverallProfileSummary(profile),
    formatHottestFunctions(profile, options),
    formatHottestCallStacks(profile, options),
  ]
    .filter(Boolean)
    .join(`\n\n`)}\n`

const formatOverallProfileSummary = ({
  totalSize,
  sampleCount,
  samplingInterval,
  callFrameCategoryToStats,
}: SummarizedHeapProfile): string => {
  const hottestCallFrameCategories = [...callFrameCategoryToStats].sort(
    ([, stats1], [, stats2]) => stats2.size - stats1.size,
  )

  return [
    `Allocated ${formatBytes(
      totalSize,
    )} over ${formatCount(sampleCount, `sample`)} (${formatBytes(
      samplingInterval,
    )} per sample).`,
    formatTable(
      [`Category`, `%`, `Size`, `Samples`],
      hottestCallFrameCategories.map(([category, { size, sampleCount }]) => [
        category,
        formatPercent(size / totalSize),
        formatBytes(size),
        formatCount(sampleCount),
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestFunctions = (
  profile: SummarizedHeapProfile,
  options: NormalizedV8ProfileToMdOptions,
): string =>
  [
    `## Hottest functions`,
    formatHottestSelfSizeFunctions(profile, options),
    formatHottestTotalSizeFunctions(profile, options),
  ].join(`\n\n`)

const formatHottestSelfSizeFunctions = (
  { totalSize, nodes }: SummarizedHeapProfile,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const hottestSelfSizeNodes = selectTopN(
    nodes.filter(options.includeRow),
    options.topN,
    (node1, node2) => node2.selfSize - node1.selfSize,
  )
  const hottestCallerSections = hottestSelfSizeNodes
    .map(node => formatHottestCallers(node, options))
    .filter(section => section !== undefined)

  return [
    `### Self size`,
    `Functions ranked by bytes allocated directly in the function body, excluding callees.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Samples`, align: `right` },
        `Function`,
        `Location`,
      ],
      hottestSelfSizeNodes.map(
        ({ name, location, selfSize, selfSampleCount }) => [
          formatPercent(selfSize / totalSize),
          formatBytes(selfSize),
          formatCount(selfSampleCount),
          inlineCode(name),
          location ?? inlineCode(`<native>`),
        ],
      ),
    ),
    ...(hottestCallerSections.length > 0
      ? [
          `#### Callers`,
          `Callers ranked by contribution to each function's self size.`,
        ]
      : []),
    ...hottestCallerSections,
  ].join(`\n\n`)
}

const formatHottestCallers = (
  node: SummarizedProfileNode,
  options: NormalizedV8ProfileToMdOptions,
): string | undefined => {
  const hottestCallers = [...node.callerIdToStats.values()]
    .filter(({ caller }) => options.includeRow(caller))
    .sort((entry1, entry2) => entry2.selfSize - entry1.selfSize)
    .slice(0, Math.ceil(options.topN / 4))
  if (hottestCallers.length === 0) {
    return undefined
  }

  return [
    `##### ${inlineCode(node.name)} (${
      node.location ?? inlineCode(`<native>`)
    })`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Samples`, align: `right` },
        `Caller`,
        `Location`,
      ],
      hottestCallers.map(({ caller, selfSize, selfSampleCount }) => [
        formatPercent(selfSize / node.selfSize),
        formatBytes(selfSize),
        formatCount(selfSampleCount),
        inlineCode(caller.name),
        caller.location ?? inlineCode(`<native>`),
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestTotalSizeFunctions = (
  { totalSize, nodes }: SummarizedHeapProfile,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const hottestTotalSizeNodes = selectTopN(
    nodes.filter(options.includeRow),
    options.topN,
    (node1, node2) => node2.totalSize - node1.totalSize,
  )
  const hottestCalleeSections = hottestTotalSizeNodes
    .map(node => formatHottestCallees(node, options))
    .filter(section => section !== undefined)

  return [
    `### Total size`,
    `Functions ranked by total bytes allocated in the function and all its callees.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Samples`, align: `right` },
        `Function`,
        `Location`,
      ],
      hottestTotalSizeNodes.map(
        ({ name, location, totalSize: nodeTotal, totalSampleCount }) => [
          formatPercent(nodeTotal / totalSize),
          formatBytes(nodeTotal),
          formatCount(totalSampleCount),
          inlineCode(name),
          location ?? inlineCode(`<native>`),
        ],
      ),
    ),
    ...(hottestCalleeSections.length > 0
      ? [
          `#### Callees`,
          `Callees ranked by contribution to each function's total size.`,
        ]
      : []),
    ...hottestCalleeSections,
  ].join(`\n\n`)
}

const formatHottestCallees = (
  node: SummarizedProfileNode,
  options: NormalizedV8ProfileToMdOptions,
): string | undefined => {
  const hottestCallees = [...node.calleeIdToStats.values()]
    .filter(({ callee }) => options.includeRow(callee))
    .sort((entry1, entry2) => entry2.totalSize - entry1.totalSize)
    .slice(0, Math.ceil(options.topN / 4))
  if (hottestCallees.length === 0) {
    return undefined
  }

  return [
    `##### ${inlineCode(node.name)} (${
      node.location ?? inlineCode(`<native>`)
    })`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Samples`, align: `right` },
        `Callee`,
        `Location`,
      ],
      hottestCallees.map(({ callee, totalSize, totalSampleCount }) => [
        formatPercent(totalSize / node.totalSize),
        formatBytes(totalSize),
        formatCount(totalSampleCount),
        inlineCode(callee.name),
        callee.location ?? inlineCode(`<native>`),
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestCallStacks = (
  profile: SummarizedHeapProfile,
  options: NormalizedV8ProfileToMdOptions,
): string | undefined => {
  const hottestCallStacks = selectTopN(
    profile.callStacks
      .map(callStack => ({
        ...callStack,
        nodes: callStack.nodes.filter(options.includeRow),
      }))
      .filter(callStack => callStack.nodes.length > 1),
    options.topN,
    (callStack1, callStack2) => callStack2.selfSize - callStack1.selfSize,
  )
  if (hottestCallStacks.length === 0) {
    return undefined
  }

  const commonCallStack = findCommonCallStack(hottestCallStacks)
  return [
    `## Hottest call stacks`,
    `Call stacks ranked by bytes allocated in their top frame.`,
    ...(commonCallStack.length > 0
      ? [`Common call stack: ${formatCallStack(commonCallStack)}`]
      : []),
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Samples`, align: `right` },
        `Call stack`,
      ],
      hottestCallStacks.map(({ nodes, selfSize, selfSampleCount }) => [
        formatPercent(selfSize / profile.totalSize),
        formatBytes(selfSize),
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
