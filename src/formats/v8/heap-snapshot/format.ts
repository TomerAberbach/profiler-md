import {
  formatBytes,
  formatCount,
  formatPercent,
} from '../../../helpers/format.ts'
import { selectTopN } from '../../../helpers/heap.ts'
import { formatTable, inlineCode } from '../../../helpers/markdown.ts'
import { formatProfileLocation } from '../../../location.ts'
import type { NormalizedProfileToMdOptions } from '../../../options.ts'
import type {
  SummarizedClosure,
  SummarizedConstructor,
  SummarizedHeapSnapshot,
  SummarizedSnapshotNode,
} from './summarize.ts'

export const formatV8HeapSnapshot = (
  snapshot: SummarizedHeapSnapshot,
  options: NormalizedProfileToMdOptions,
): string =>
  `${[
    `# Heap snapshot`,
    formatOverallSummary(snapshot),
    formatLargestConstructors(snapshot, options),
    formatLargestClosures(snapshot, options),
    formatLargestStrings(snapshot, options),
  ]
    .filter(Boolean)
    .join(`\n\n`)}\n`

const formatOverallSummary = ({
  totalSize,
  nodeCount,
  edgeCount,
  nodeCategoryToStats,
}: SummarizedHeapSnapshot): string => {
  const hottestObjectCategories = [...nodeCategoryToStats].sort(
    ([, stats1], [, stats2]) => stats2.size - stats1.size,
  )
  return [
    `Allocated ${formatBytes(totalSize)} across ${formatCount(
      nodeCount,
    )} objects and ${formatCount(edgeCount)} references.`,
    formatTable(
      [
        `Category`,
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Objects`, align: `right` },
      ],
      hottestObjectCategories.map(
        ([type, { size, nodeCount: objectCount }]) => [
          type,
          formatPercent(size / totalSize),
          formatBytes(size),
          formatCount(objectCount),
        ],
      ),
    ),
  ].join(`\n\n`)
}

const formatLargestConstructors = (
  snapshot: SummarizedHeapSnapshot,
  options: NormalizedProfileToMdOptions,
): string =>
  [
    `## Largest constructors`,
    formatLargestSelfSizeConstructors(snapshot, options),
    formatLargestRetainedSizeConstructors(snapshot, options),
  ].join(`\n\n`)

const formatLargestSelfSizeConstructors = (
  snapshot: SummarizedHeapSnapshot,
  options: NormalizedProfileToMdOptions,
): string => {
  const { totalSize, constructors } = snapshot

  const largestConstructors = selectTopN(
    constructors.filter(options.includeEntry),
    options.topN,
    (constructor1, constructor2) =>
      constructor2.selfSize - constructor1.selfSize,
  )
  const largestInstanceSections = largestConstructors
    .map(constructor =>
      formatLargestSelfSizeConstructorInstances(constructor, snapshot, options),
    )
    .filter(section => section !== undefined)

  return [
    `### Self size`,
    `Constructors ranked by bytes allocated for their instances, excluding objects kept reachable by them.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Instances`, align: `right` },
        `Constructor`,
        `Location`,
      ],
      largestConstructors.map(constructor => [
        formatPercent(constructor.selfSize / totalSize),
        formatBytes(constructor.selfSize),
        formatCount(constructor.instances.length),
        inlineCode(constructor.name),
        formatProfileLocation(constructor.location, options),
      ]),
    ),
    ...(largestInstanceSections.length > 0
      ? [
          `#### Instances`,
          `Instances ranked by contribution to each constructor's self size.`,
        ]
      : []),
    ...largestInstanceSections,
  ].join(`\n\n`)
}

const formatLargestSelfSizeConstructorInstances = (
  constructor: SummarizedConstructor,
  { retainerPathOf }: SummarizedHeapSnapshot,
  options: NormalizedProfileToMdOptions,
): string | undefined => {
  const largestInstances = selectTopN(
    constructor.instances,
    Math.ceil(options.topN / 4),
    (instance1, instance2) => instance2.selfSize - instance1.selfSize,
  )
  if (largestInstances.length === 0) {
    return undefined
  }

  return [
    `##### ${inlineCode(constructor.name)} (${formatProfileLocation(
      constructor.location,
      options,
    )})`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        `Path`,
      ],
      largestInstances.map(instance => [
        formatPercent(instance.selfSize / constructor.selfSize),
        formatBytes(instance.selfSize),
        inlineCode(retainerPathOf(instance.id)),
      ]),
    ),
  ].join(`\n\n`)
}

const formatLargestRetainedSizeConstructors = (
  snapshot: SummarizedHeapSnapshot,
  options: NormalizedProfileToMdOptions,
): string => {
  const { totalSize, constructors } = snapshot

  const largestConstructors = selectTopN(
    constructors.filter(options.includeEntry),
    options.topN,
    (constructor1, constructor2) =>
      constructor2.retainedSize - constructor1.retainedSize,
  )
  const largestInstanceSections = largestConstructors
    .map(constructor =>
      formatLargestRetainedSizeConstructorInstances(
        constructor,
        snapshot,
        options,
      ),
    )
    .filter(section => section !== undefined)

  return [
    `### Retained size`,
    `Constructors ranked by bytes allocated for their instances and all objects that would be freed if their instances were garbage collected.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Instances`, align: `right` },
        `Constructor`,
        `Location`,
      ],
      largestConstructors.map(constructor => [
        formatPercent(constructor.retainedSize / totalSize),
        formatBytes(constructor.retainedSize),
        formatCount(constructor.instances.length),
        inlineCode(constructor.name),
        formatProfileLocation(constructor.location, options),
      ]),
    ),
    ...(largestInstanceSections.length > 0
      ? [
          `#### Instances`,
          `Instances ranked by contribution to each constructor's retained size.`,
        ]
      : []),
    ...largestInstanceSections,
  ].join(`\n\n`)
}

const formatLargestRetainedSizeConstructorInstances = (
  constructor: SummarizedConstructor,
  { retainerPathOf }: SummarizedHeapSnapshot,
  options: NormalizedProfileToMdOptions,
): string | undefined => {
  const largestInstances = selectTopN(
    constructor.instances,
    Math.ceil(options.topN / 4),
    (instance1, instance2) => instance2.retainedSize - instance1.retainedSize,
  )
  if (largestInstances.length === 0) {
    return undefined
  }

  return [
    `##### ${inlineCode(constructor.name)} (${formatProfileLocation(
      constructor.location,
      options,
    )})`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        `Path`,
      ],
      largestInstances.map(instance => [
        formatPercent(instance.retainedSize / constructor.retainedSize),
        formatBytes(instance.retainedSize),
        inlineCode(retainerPathOf(instance.id)),
      ]),
    ),
  ].join(`\n\n`)
}

const formatLargestClosures = (
  snapshot: SummarizedHeapSnapshot,
  options: NormalizedProfileToMdOptions,
): string => {
  const { totalSize, closures, retainerPathOf } = snapshot
  const largestClosures = selectTopN(
    closures.filter(closure =>
      options.includeEntry({ ...closure, id: closure.largestInstanceId }),
    ),
    options.topN,
    (closure1, closure2) => closure2.retainedSize - closure1.retainedSize,
  )

  const retainedSections = largestClosures
    .map(closure => formatClosureRetainedObjects(closure, snapshot, options))
    .filter(section => section !== undefined)

  return [
    `## Largest closures`,
    `Closures ranked by bytes that would be freed if the closure were garbage collected.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Retained`, align: `right` },
        { content: `Instances`, align: `right` },
        { content: `Paths`, align: `right` },
        `Name`,
        `Location`,
        `Example path`,
      ],
      largestClosures.map(closure => [
        formatPercent(closure.retainedSize / totalSize),
        formatBytes(closure.retainedSize),
        formatCount(closure.instanceIds.length),
        formatCount(new Set(closure.instanceIds.map(retainerPathOf)).size),
        inlineCode(closure.name),
        formatProfileLocation(closure.location, options),
        inlineCode(retainerPathOf(closure.largestInstanceId)),
      ]),
    ),
    ...(retainedSections.length > 0
      ? [
          `### Retained`,
          `Objects ranked by contribution to each closure's retained size.`,
        ]
      : []),
    ...retainedSections,
  ].join(`\n\n`)
}

const formatClosureRetainedObjects = (
  closure: SummarizedClosure,
  { retainedNodesOf, retainerPathOf }: SummarizedHeapSnapshot,
  options: NormalizedProfileToMdOptions,
): string | undefined => {
  const allRetainedNodes: SummarizedSnapshotNode[] = []
  for (const instanceId of closure.instanceIds) {
    for (const node of retainedNodesOf(instanceId)) {
      allRetainedNodes[node.id] ??= node
    }
  }

  const retainedNodes = selectTopN(
    allRetainedNodes.filter(options.includeEntry),
    Math.ceil(options.topN / 4),
    (node1, node2) => node2.selfSize - node1.selfSize,
  )
  if (retainedNodes.length === 0) {
    return undefined
  }

  return [
    `#### ${inlineCode(closure.name)} (${formatProfileLocation(
      closure.location,
      options,
    )})`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Self`, align: `right` },
        `Name`,
        `Path`,
      ],
      retainedNodes.map(node => [
        formatPercent(node.selfSize / closure.retainedSize),
        formatBytes(node.selfSize),
        inlineCode(node.name || `(unknown)`),
        inlineCode(retainerPathOf(node.id)),
      ]),
    ),
  ].join(`\n\n`)
}

const formatLargestStrings = (
  { totalSize, strings, retainerPathOf }: SummarizedHeapSnapshot,
  options: NormalizedProfileToMdOptions,
): string => {
  const largestStrings = selectTopN(
    strings,
    options.topN,
    (string1, string2) => string2.selfSize - string1.selfSize,
  )

  return [
    `## Largest strings`,
    `Strings ranked by bytes allocated for them.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        `Value`,
        `Path`,
      ],
      largestStrings.map(string => [
        formatPercent(string.selfSize / totalSize),
        formatBytes(string.selfSize),
        inlineCode(string.name),
        inlineCode(retainerPathOf(string.id)),
      ]),
    ),
  ].join(`\n\n`)
}
