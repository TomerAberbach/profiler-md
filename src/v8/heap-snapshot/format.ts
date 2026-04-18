import {
  formatBytes,
  formatCount,
  formatPercent,
} from '../../internal/format.ts'
import { selectTopN } from '../../internal/heap.ts'
import { formatTable, inlineCode } from '../../internal/markdown.ts'
import type { NormalizedV8ProfileToMdOptions } from '../common.ts'
import type {
  SummarizedConstructor,
  SummarizedHeapSnapshot,
} from './summarize.ts'

export const formatSummarizedSnapshot = (
  snapshot: SummarizedHeapSnapshot,
  options: NormalizedV8ProfileToMdOptions,
): string =>
  `${[
    `# Heap snapshot`,
    formatOverallSummary(snapshot),
    formatLargestConstructors(snapshot, options),
    formatLargestStrings(snapshot, options),
  ]
    .filter(Boolean)
    .join(`\n\n`)}\n`

const formatOverallSummary = ({
  totalSize,
  objectCount,
  referenceCount,
  objectCategoryToSizeStats,
}: SummarizedHeapSnapshot): string => {
  const hottestObjectCategories = [...objectCategoryToSizeStats].sort(
    ([, stats1], [, stats2]) => stats2.size - stats1.size,
  )
  return [
    `Allocated ${formatBytes(totalSize)} across ${formatCount(
      objectCount,
    )} objects and ${formatCount(referenceCount)} references.`,
    formatTable(
      [
        `Category`,
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Objects`, align: `right` },
      ],
      hottestObjectCategories.map(([type, { size, objectCount }]) => [
        type,
        formatPercent(size / totalSize),
        formatBytes(size),
        formatCount(objectCount),
      ]),
    ),
  ].join(`\n\n`)
}

const formatLargestConstructors = (
  snapshot: SummarizedHeapSnapshot,
  options: NormalizedV8ProfileToMdOptions,
): string =>
  [
    `## Largest constructors`,
    formatLargestSelfSizeConstructors(snapshot, options),
    formatLargestRetainedSizeConstructors(snapshot, options),
  ].join(`\n\n`)

const formatLargestSelfSizeConstructors = (
  snapshot: SummarizedHeapSnapshot,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const { totalSize, constructors } = snapshot

  const largestConstructors = selectTopN(
    constructors.filter(options.includeRow),
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
        constructor.location ?? inlineCode(`<native>`),
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
  options: NormalizedV8ProfileToMdOptions,
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
    `##### ${inlineCode(constructor.name)} (${
      constructor.location ?? inlineCode(`<native>`)
    })`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        `Path`,
      ],
      largestInstances.map(instance => [
        formatPercent(instance.selfSize / constructor.selfSize),
        formatBytes(instance.selfSize),
        inlineCode(retainerPathOf(instance.nodeOrdinal)),
      ]),
    ),
  ].join(`\n\n`)
}

const formatLargestRetainedSizeConstructors = (
  snapshot: SummarizedHeapSnapshot,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const { totalSize, constructors } = snapshot

  const largestConstructors = selectTopN(
    constructors.filter(options.includeRow),
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
        `Constructor`,
        `Location`,
      ],
      largestConstructors.map(constructor => [
        formatPercent(constructor.retainedSize / totalSize),
        formatBytes(constructor.retainedSize),
        inlineCode(constructor.name),
        constructor.location ?? inlineCode(`<native>`),
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
  options: NormalizedV8ProfileToMdOptions,
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
    `##### ${inlineCode(constructor.name)} (${
      constructor.location ?? inlineCode(`<native>`)
    })`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        `Path`,
      ],
      largestInstances.map(instance => [
        formatPercent(instance.retainedSize / constructor.retainedSize),
        formatBytes(instance.retainedSize),
        inlineCode(retainerPathOf(instance.nodeOrdinal)),
      ]),
    ),
  ].join(`\n\n`)
}

const formatLargestStrings = (
  { totalSize, strings, retainerPathOf }: SummarizedHeapSnapshot,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const largestStrings = selectTopN(
    strings,
    options.topN,
    (string1, string2) => string2.selfSize - string1.selfSize,
  )

  return [
    `## Largest strings`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        `Data`,
        `Location`,
      ],
      largestStrings.map(string => [
        formatPercent(string.selfSize / totalSize),
        formatBytes(string.selfSize),
        inlineCode(formatString(string.value)),
        inlineCode(retainerPathOf(string.nodeOrdinal)),
      ]),
    ),
  ].join(`\n\n`)
}

const formatString = (string: string): string => {
  if (string.length > MAX_STRING_LENGTH) {
    string = `${string.slice(0, MAX_STRING_LENGTH - 1)}…`
  }
  string = string.replaceAll(`\n`, `\\n`)
  return `"${string}"`
}

const MAX_STRING_LENGTH = 50
