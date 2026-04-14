import prettyBytes from 'pretty-bytes'
import { formatCount, formatPercent } from '../../internal/format.ts'
import { formatTable, inlineCode } from '../../internal/markdown.ts'
import { findCommonCallStack, formatCallStack } from '../common.ts'
import type { NormalizedV8ProfileToMdOptions } from '../common.ts'
import type {
  SummarizedHeapProfile,
  SummarizedProfileNode,
} from './summarize.ts'

export const formatSummarizedProfile = (
  summary: SummarizedHeapProfile,
  options: NormalizedV8ProfileToMdOptions,
): string =>
  `${[
    `# Heap profile`,
    formatOverallProfileSummary(summary),
    formatHottestFunctions(summary, options),
    formatHottestCallStacks(summary, options),
  ]
    .filter(Boolean)
    .join(`\n\n`)}\n`

const formatOverallProfileSummary = ({
  totalSize,
  sampleCount,
  samplingInterval,
  callFrameCategoryToSize,
}: SummarizedHeapProfile): string =>
  [
    `Allocated ${prettyBytes(
      totalSize,
    )} over ${formatCount(sampleCount)} sample${
      sampleCount === 1 ? `` : `s`
    } (${prettyBytes(samplingInterval)} per sample).`,
    formatTable(
      [`Category`, `Total %`, `Total`],
      [...callFrameCategoryToSize]
        .sort(([, size1], [, size2]) => size2 - size1)
        .map(([category, size]) => [
          category,
          formatPercent(size / totalSize),
          prettyBytes(size),
        ]),
    ),
  ].join(`\n\n`)

const formatHottestFunctions = (
  summary: SummarizedHeapProfile,
  options: NormalizedV8ProfileToMdOptions,
): string =>
  [
    `## Hottest functions`,
    formatHottestSelfSizeFunctions(summary, options),
    formatHottestTotalSizeFunctions(summary, options),
  ].join(`\n\n`)

const formatHottestSelfSizeFunctions = (
  { totalSize, nodes }: SummarizedHeapProfile,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const hottestSelfSizeNodes = nodes
    .filter(options.includeCallFrame)
    .sort((node1, node2) => node2.selfSize - node1.selfSize)
    .slice(0, options.topN)
  const hottestCallerSections = hottestSelfSizeNodes
    .map(node => formatHottestCallers(node, options))
    .filter(section => section !== null)

  return [
    `### Self size`,
    `Functions ranked by bytes allocated directly in the function body, excluding callees.`,
    formatTable(
      [
        { content: `Self %`, align: `right` },
        { content: `Self`, align: `right` },
        { content: `Total %`, align: `right` },
        { content: `Total`, align: `right` },
        `Function`,
        `Location`,
      ],
      hottestSelfSizeNodes.map(node => [
        formatPercent(node.selfSize / totalSize),
        prettyBytes(node.selfSize),
        formatPercent(node.totalSize / totalSize),
        prettyBytes(node.totalSize),
        inlineCode(node.functionName),
        node.location,
      ]),
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
): string | null => {
  const hottestCallers = [...node.callerIdToSelfSize.values()]
    .filter(({ caller }) => options.includeCallFrame(caller))
    .sort((entry1, entry2) => entry2.selfSize - entry1.selfSize)
    .slice(0, Math.ceil(options.topN / 4))
  if (hottestCallers.length === 0) {
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
      hottestCallers.map(({ caller, selfSize }) => [
        formatPercent(selfSize / node.selfSize),
        prettyBytes(selfSize),
        inlineCode(caller.functionName),
        caller.location,
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestTotalSizeFunctions = (
  { totalSize, nodes }: SummarizedHeapProfile,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const hottestTotalSizeNodes = nodes
    .filter(options.includeCallFrame)
    .sort((node1, node2) => node2.totalSize - node1.totalSize)
    .slice(0, options.topN)
  const hottestCalleeSections = hottestTotalSizeNodes
    .map(node => formatHottestCallees(node, options))
    .filter(section => section !== null)

  return [
    `### Total size`,
    `Functions ranked by total bytes allocated in the function and all its callees.`,
    formatTable(
      [
        { content: `Total %`, align: `right` },
        { content: `Total`, align: `right` },
        { content: `Self %`, align: `right` },
        { content: `Self`, align: `right` },
        `Function`,
        `Location`,
      ],
      hottestTotalSizeNodes.map(node => [
        formatPercent(node.totalSize / totalSize),
        prettyBytes(node.totalSize),
        formatPercent(node.selfSize / totalSize),
        prettyBytes(node.selfSize),
        inlineCode(node.functionName),
        node.location,
      ]),
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
): string | null => {
  const hottestCallees = [...node.calleeIdToTotalSize.values()]
    .filter(({ callee }) => options.includeCallFrame(callee))
    .sort((entry1, entry2) => entry2.totalSize - entry1.totalSize)
    .slice(0, Math.ceil(options.topN / 4))
  if (hottestCallees.length === 0) {
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
      hottestCallees.map(({ callee, totalSize }) => [
        formatPercent(totalSize / node.totalSize),
        prettyBytes(totalSize),
        inlineCode(callee.functionName),
        callee.location,
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestCallStacks = (
  summary: SummarizedHeapProfile,
  options: NormalizedV8ProfileToMdOptions,
): string | null => {
  const hottestCallStacks = summary.callStacks
    .map(callStack => ({
      ...callStack,
      nodes: callStack.nodes.filter(options.includeCallFrame),
    }))
    .filter(callStack => callStack.nodes.length > 1)
    .sort((callStack1, callStack2) => callStack2.selfSize - callStack1.selfSize)
    .slice(0, options.topN)
  if (hottestCallStacks.length === 0) {
    return null
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
        { content: `Self %`, align: `right` },
        { content: `Self`, align: `right` },
        `Call stack`,
      ],
      hottestCallStacks.map(callStack => [
        formatPercent(callStack.selfSize / summary.totalSize),
        prettyBytes(callStack.selfSize),
        formatCallStack(
          commonCallStack.length > 0
            ? callStack.nodes.slice(0, -commonCallStack.length)
            : callStack.nodes,
        ),
      ]),
    ),
  ].join(`\n\n`)
}
