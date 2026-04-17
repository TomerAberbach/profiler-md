import {
  formatBytes,
  formatCount,
  formatPercent,
} from '../../internal/format.ts'
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
      hottestObjectCategories.map(([type, { size, count }]) => [
        type,
        formatPercent(size / totalSize),
        formatBytes(size),
        formatCount(count),
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
  { totalSize, constructors }: SummarizedHeapSnapshot,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const largestConstructors = constructors
    .filter(defaultIncludeConstructor)
    .sort(
      (constructor1, constructor2) =>
        constructor2.selfSize - constructor1.selfSize,
    )
    .slice(0, options.topN)
  const largestInstanceSections = largestConstructors
    .map(constructor =>
      formatLargestSelfSizeConstructorInstances(constructor, options),
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
  options: NormalizedV8ProfileToMdOptions,
): string | undefined => {
  const largestInstances = constructor.instances
    .toSorted((instance1, instance2) => instance2.selfSize - instance1.selfSize)
    .slice(0, Math.ceil(options.topN / 4))
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
        inlineCode(instance.retainerPath),
      ]),
    ),
  ].join(`\n\n`)
}

const formatLargestRetainedSizeConstructors = (
  { totalSize, constructors }: SummarizedHeapSnapshot,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const largestConstructors = constructors
    .filter(defaultIncludeConstructor)
    .sort(
      (constructor1, constructor2) =>
        constructor2.retainedSize - constructor1.retainedSize,
    )
    .slice(0, options.topN)
  const largestInstanceSections = largestConstructors
    .map(constructor =>
      formatLargestRetainedSizeConstructorInstances(constructor, options),
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
  options: NormalizedV8ProfileToMdOptions,
): string | undefined => {
  const largestInstances = constructor.instances
    .toSorted(
      (instance1, instance2) => instance2.retainedSize - instance1.retainedSize,
    )
    .slice(0, Math.ceil(options.topN / 4))
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
        inlineCode(instance.retainerPath),
      ]),
    ),
  ].join(`\n\n`)
}

const defaultIncludeConstructor = (
  constructor: SummarizedConstructor,
): boolean => {
  const { name, location } = constructor

  if (
    name.startsWith(`system /`) ||
    name.startsWith(`Node /`) ||
    (name.startsWith(`(`) && name.endsWith(`)`))
  ) {
    // V8 and Node internals
    return false
  }

  if (name === `ModuleWrap` && !location) {
    return false
  }
  if (name === `Generator` && location?.endsWith(`:1:1`)) {
    // Module eval
    return false
  }

  if (name === `global`) {
    return false
  }

  if (location?.startsWith(`node:internal/`)) {
    return false
  }

  return true
}

const formatLargestStrings = (
  { totalSize, strings }: SummarizedHeapSnapshot,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const largestStrings = strings
    .toSorted((string1, string2) => string2.selfSize - string1.selfSize)
    .slice(0, options.topN)

  return [
    `## Largest strings`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        `Length`,
        `Location`,
      ],
      largestStrings.map(string => [
        formatPercent(string.selfSize / totalSize),
        formatBytes(string.selfSize),
        inlineCode(formatString(string.value)),
        inlineCode(string.retainerPath),
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
