import { DynamicTypedArray } from '../helpers/array.ts'
import {
  formatArrow,
  formatBytes,
  formatCount,
  formatDelta,
  formatPercent,
  formatPercentChange,
} from '../helpers/format.ts'
import { MaxHeap, selectTopN } from '../helpers/heap.ts'
import {
  formatHeading,
  formatSectionGroup,
  formatTable,
  inlineCode,
} from '../helpers/markdown.ts'
import { formatSourceLocation } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import type {
  AggregatedClosure,
  AggregatedConstructor,
  AggregatedHeapSnapshot,
  AggregatedSnapshotNode,
} from './aggregate.ts'
import type {
  AggregatedHeapSnapshotDiff,
  AggregatedSnapshotEntityDiff,
  DiffedSnapshotEntity,
} from './diff.ts'

export const formatHeapSnapshot = (
  snapshot: AggregatedHeapSnapshot,
  options: NormalizedProfileToMdOptions,
): string => {
  const hasLocation = hasAnyLocation(snapshot)
  return `${[
    formatHeading(1, `Heap snapshot`),
    ...formatOverallSummary(snapshot),
    ...formatLargestConstructors(snapshot, hasLocation, options),
    ...formatLargestClosures(snapshot, hasLocation, options),
    ...formatLargestStrings(snapshot, options),
  ].join(`\n\n`)}\n`
}

const formatOverallSummary = ({
  totalSize,
  nodeCount,
  edgeCount,
  nodeCategoryToStats,
}: AggregatedHeapSnapshot): string[] => {
  const hottestObjectCategories = [...nodeCategoryToStats].sort(
    ([, stats1], [, stats2]) => stats2.size - stats1.size,
  )
  if (hottestObjectCategories.length === 0) {
    return []
  }

  return [
    `Allocated ${formatBytes(totalSize)} across ${formatCount(
      nodeCount,
    )} nodes and ${formatCount(edgeCount)} edges.`,
    formatTable(
      [
        `Category`,
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Nodes`, align: `right` },
      ],
      hottestObjectCategories.map(
        ([category, { size, nodeCount: objectCount }]) => [
          category,
          formatPercent(size / totalSize),
          formatBytes(size),
          formatCount(objectCount),
        ],
      ),
    ),
  ]
}

const formatLargestConstructors = (
  snapshot: AggregatedHeapSnapshot,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] =>
  formatSectionGroup(
    [formatHeading(2, `Largest constructors`)],
    constructorsSections.flatMap(section =>
      formatLargestConstructorsBySize(snapshot, section, hasLocation, options),
    ),
  )

const formatLargestConstructorsBySize = (
  snapshot: AggregatedHeapSnapshot,
  { title, ranking, measure, sizeOf }: ConstructorsSection,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const { totalSize, constructors } = snapshot

  const largestConstructors = selectTopN(
    constructors.filter(options.showEntry),
    options.topN,
    sizeOf,
  )
  if (largestConstructors.length === 0) {
    return []
  }

  const largestInstanceSections = largestConstructors.flatMap(constructor =>
    formatLargestConstructorInstances(
      constructor,
      snapshot,
      sizeOf,
      hasLocation,
      options,
    ),
  )

  return [
    formatHeading(3, title),
    ranking,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Instances`, align: `right` },
        ...entityColumns(`Constructor`, hasLocation),
      ],
      largestConstructors.map(constructor => [
        formatPercent(sizeOf(constructor) / totalSize),
        formatBytes(sizeOf(constructor)),
        formatCount(constructor.instances.length),
        ...formatEntityCells(constructor, hasLocation, options),
      ]),
    ),
    ...formatSectionGroup(
      [
        formatHeading(4, `Instances`),
        `Instances ranked by contribution to each constructor's ${measure}.`,
      ],
      largestInstanceSections,
    ),
  ]
}

const formatLargestConstructorInstances = (
  constructor: AggregatedConstructor,
  { retainerPathOf }: AggregatedHeapSnapshot,
  sizeOf: (node: AggregatedSnapshotNode) => number,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const largestInstanceGroups = selectLargestInstancesByRetainerPath(
    constructor.instances,
    sizeOf,
    retainerPathOf,
    Math.ceil(options.topN / 4),
  ).sort((group1, group2) => group2.size - group1.size)
  if (largestInstanceGroups.length === 0) {
    return []
  }

  const constructorSize = sizeOf(constructor)
  return [
    formatEntityHeading(5, constructor, hasLocation, options),
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Instances`, align: `right` },
        `Path`,
      ],
      largestInstanceGroups.map(group => [
        formatPercent(group.size / constructorSize),
        formatBytes(group.size),
        formatCount(group.instanceCount),
        inlineCode(group.retainerPath),
      ]),
    ),
  ]
}

/** A group of instances with the same retainer path. */
type InstanceGroup = {
  /** The retainer path to every instance in the group. */
  retainerPath: string

  /** The number of instances in the group. */
  instanceCount: number

  /** The combined size of the instances in the group. */
  size: number
}

const selectLargestInstancesByRetainerPath = (
  instances: AggregatedSnapshotNode[],
  sizeOf: (instance: AggregatedSnapshotNode) => number,
  retainerPathOf: (nodeOrdinal: number) => string,
  topN: number,
): InstanceGroup[] => {
  // Process instances in descending size order, stopping once we have `topN`
  // unique paths. Avoids `retainerPathOf` calls for the long tail.
  const heap = new MaxHeap(instances, sizeOf)
  const pathToGroup = new Map<string, InstanceGroup>()

  while (heap.length > 0 && pathToGroup.size < topN) {
    const instance = heap.pop()!

    const retainerPath = retainerPathOf(instance.id)
    let group = pathToGroup.get(retainerPath)
    if (!group) {
      group = { retainerPath, instanceCount: 0, size: 0 }
      pathToGroup.set(retainerPath, group)
    }

    group.instanceCount++
    // Safe to sum retained sizes: same-path instances can't be in a
    // dominator/dominatee relationship, so their retained subtrees are
    // disjoint.
    group.size += sizeOf(instance)
  }

  return [...pathToGroup.values()]
}

const formatLargestClosures = (
  snapshot: AggregatedHeapSnapshot,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const { totalSize, closures, retainerPathOf } = snapshot

  const largestClosures = selectTopN(
    closures.filter(closure =>
      options.showEntry({ ...closure, id: closure.largestInstanceId }),
    ),
    options.topN,
    closure => closure.retainedSize,
  )
  if (largestClosures.length === 0) {
    return []
  }

  const retainedSections = largestClosures.flatMap(closure =>
    formatClosureRetainedObjects(closure, snapshot, hasLocation, options),
  )

  return [
    formatHeading(2, `Largest closures`),
    closuresRanking,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Retained`, align: `right` },
        { content: `Instances`, align: `right` },
        { content: `Paths`, align: `right` },
        ...entityColumns(`Name`, hasLocation),
        `Example path`,
      ],
      largestClosures.map(closure => [
        formatPercent(closure.retainedSize / totalSize),
        formatBytes(closure.retainedSize),
        formatCount(closure.instanceIds.length),
        formatCount(new Set(closure.instanceIds.map(retainerPathOf)).size),
        ...formatEntityCells(closure, hasLocation, options),
        inlineCode(retainerPathOf(closure.largestInstanceId)),
      ]),
    ),
    ...formatSectionGroup(
      [
        formatHeading(3, `Retained`),
        `Nodes ranked by contribution to each closure's retained size.`,
      ],
      retainedSections,
    ),
  ]
}

const formatClosureRetainedObjects = (
  closure: AggregatedClosure,
  { retainedNodesOf, retainerPathOf }: AggregatedHeapSnapshot,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const instanceIdToSeen = new DynamicTypedArray(new Uint8Array(256))
  const allRetainedNodes: AggregatedSnapshotNode[] = []
  for (const instanceId of closure.instanceIds) {
    for (const node of retainedNodesOf(instanceId)) {
      const seen = instanceIdToSeen.ensureCapacity(node.id + 1)
      if (seen[node.id]) {
        continue
      }
      seen[node.id] = 1
      if (options.showEntry(node)) {
        allRetainedNodes.push(node)
      }
    }
  }

  const retainedNodes = selectTopN(
    allRetainedNodes,
    Math.ceil(options.topN / 4),
    node => node.selfSize,
  )
  if (retainedNodes.length === 0) {
    return []
  }

  return [
    formatEntityHeading(4, closure, hasLocation, options),
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
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        inlineCode(node.name || `(unknown)`),
        inlineCode(retainerPathOf(node.id)),
      ]),
    ),
  ]
}

const formatLargestStrings = (
  { totalSize, strings, retainerPathOf }: AggregatedHeapSnapshot,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const largestStrings = selectTopN(
    strings,
    options.topN,
    string => string.selfSize,
  )
  if (largestStrings.length === 0) {
    return []
  }

  const hasValues = largestStrings.some(string => string.name !== undefined)
  return [
    formatHeading(2, `Largest strings`),
    stringsRanking,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        ...(hasValues ? [`Value`] : []),
        `Path`,
      ],
      largestStrings.map(string => [
        formatPercent(string.selfSize / totalSize),
        formatBytes(string.selfSize),
        ...(hasValues ? [inlineCode(string.name ?? `(unknown)`)] : []),
        inlineCode(retainerPathOf(string.id)),
      ]),
    ),
  ]
}

export const formatHeapSnapshotDiff = (
  diff: AggregatedHeapSnapshotDiff,
  options: NormalizedProfileToMdOptions,
): string => {
  const hasLocation = hasAnyLocation(diff)
  return `${[
    formatHeading(1, `Heap snapshot diff`),
    ...formatDiffSummary(diff),
    ...formatDiffConstructors(diff, hasLocation, options),
    ...formatDiffClosures(diff, hasLocation, options),
    ...formatDiffStrings(diff, options),
  ].join(`\n\n`)}\n`
}

const formatDiffSummary = (diff: AggregatedHeapSnapshotDiff): string[] => [
  formatDiffSummaryLine(diff),
  ...formatDiffCategoryTable(diff),
]

const formatDiffSummaryLine = ({
  base,
  current,
}: AggregatedHeapSnapshotDiff): string => {
  const delta = current.totalSize - base.totalSize
  return `Allocated ${formatArrow(
    formatBytes(base.totalSize),
    formatBytes(current.totalSize),
  )} (${formatDelta(delta, formatBytes(Math.abs(delta)))}, ${formatPercentChange(
    base.totalSize,
    current.totalSize,
  )}) across ${formatArrow(
    formatCount(base.nodeCount),
    formatCount(current.nodeCount),
  )} nodes and ${formatArrow(
    formatCount(base.edgeCount),
    formatCount(current.edgeCount),
  )} edges.`
}

const formatDiffCategoryTable = ({
  nodeCategoryToStats,
}: AggregatedHeapSnapshotDiff): string[] => {
  if (nodeCategoryToStats.size === 0) {
    return []
  }

  const categories = [...nodeCategoryToStats].sort(
    ([, left], [, right]) =>
      (right.current?.size ?? 0) - (left.current?.size ?? 0),
  )
  return [
    formatTable(
      [
        `Category`,
        { content: `Change`, align: `right` },
        { content: `Delta`, align: `right` },
        { content: `Base`, align: `right` },
        { content: `Current`, align: `right` },
        { content: `Nodes`, align: `right` },
      ],
      categories.map(([category, { base, current }]) => {
        const baseSize = base?.size ?? 0
        const currentSize = current?.size ?? 0
        const delta = currentSize - baseSize
        return [
          category,
          formatPercentChange(baseSize, currentSize),
          formatDelta(delta, formatBytes(Math.abs(delta))),
          formatBytes(baseSize),
          formatBytes(currentSize),
          formatArrow(
            formatCount(base?.nodeCount ?? 0),
            formatCount(current?.nodeCount ?? 0),
          ),
        ]
      }),
    ),
  ]
}

const formatDiffConstructors = (
  diff: AggregatedHeapSnapshotDiff,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] =>
  formatSectionGroup(
    [formatHeading(2, `Largest constructors`)],
    constructorsSections.flatMap(({ title, ranking, measure, sizeOf }) =>
      formatSectionGroup(
        [formatHeading(3, title), ranking],
        formatDiffDirectionSections(
          diff.constructors,
          sizeOf,
          options,
          4,
          { plural: `Constructors`, description: measure },
          entityColumns(`Constructor`, hasLocation),
          entity => formatEntityCells(entity, hasLocation, options),
        ),
      ),
    ),
  )

const formatDiffClosures = (
  diff: AggregatedHeapSnapshotDiff,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] =>
  formatSectionGroup(
    [formatHeading(2, `Largest closures`), closuresRanking],
    formatDiffDirectionSections(
      diff.closures,
      entity => entity.retainedSize,
      options,
      3,
      { plural: `Closures`, description: `retained size` },
      entityColumns(`Name`, hasLocation),
      entity => formatEntityCells(entity, hasLocation, options),
    ),
  )

const formatDiffStrings = (
  diff: AggregatedHeapSnapshotDiff,
  options: NormalizedProfileToMdOptions,
): string[] =>
  formatSectionGroup(
    [formatHeading(2, `Largest strings`), stringsRanking],
    formatDiffDirectionSections(
      diff.strings,
      entity => entity.selfSize,
      options,
      3,
      { plural: `Strings`, description: `size` },
      [`Value`],
      entity => [inlineCode(entity.name)],
    ),
  )

/**
 * An {@link AggregatedSnapshotEntityDiff} with its sizes resolved for a
 * specific size kind.
 */
type DiffEntityValues = {
  entity: AggregatedSnapshotEntityDiff
  baseValue: number
  currentValue: number
}

const formatDiffDirectionSections = (
  entities: AggregatedSnapshotEntityDiff[],
  sizeOf: (entity: DiffedSnapshotEntity) => number,
  options: NormalizedProfileToMdOptions,
  headingLevel: number,
  phrases: {
    /** The plural noun naming the diffed entities (e.g. `Constructors`). */
    plural: string

    /** A phrase describing what the entities are measured by. */
    description: string
  },
  entityColumns: string[],
  formatEntityCells: (entity: AggregatedSnapshotEntityDiff) => string[],
): string[] => {
  const active = entities
    .map(entity => ({
      entity,
      baseValue: entity.base ? sizeOf(entity.base) : 0,
      currentValue: entity.current ? sizeOf(entity.current) : 0,
    }))
    .filter(
      ({ entity, baseValue, currentValue }) =>
        (baseValue > 0 || currentValue > 0) && showDiffEntity(entity, options),
    )

  const regressions = selectTopN(
    active.filter(({ baseValue, currentValue }) => currentValue > baseValue),
    options.topN,
    ({ baseValue, currentValue }) => currentValue - baseValue,
  )

  const progressions = selectTopN(
    active.filter(({ baseValue, currentValue }) => currentValue < baseValue),
    options.topN,
    ({ baseValue, currentValue }) => baseValue - currentValue,
  )

  if (regressions.length === 0 && progressions.length === 0) {
    return []
  }

  const sections: string[] = []

  if (regressions.length > 0) {
    sections.push(
      formatHeading(headingLevel, `Regressions`),
      `${phrases.plural} with the largest increase in ${phrases.description}.`,
      formatDiffEntityTable(regressions, entityColumns, formatEntityCells),
    )
  }

  if (progressions.length > 0) {
    sections.push(
      formatHeading(headingLevel, `Progressions`),
      `${phrases.plural} with the largest decrease in ${phrases.description}.`,
      formatDiffEntityTable(progressions, entityColumns, formatEntityCells),
    )
  }

  return sections
}

/** Returns whether either side of the diffed entity should be shown. */
const showDiffEntity = (
  { base, current }: AggregatedSnapshotEntityDiff,
  options: NormalizedProfileToMdOptions,
): boolean =>
  (base !== undefined && options.showEntry(base)) ||
  (current !== undefined && options.showEntry(current))

const formatDiffEntityTable = (
  entities: DiffEntityValues[],
  entityColumns: string[],
  formatEntityCells: (entity: AggregatedSnapshotEntityDiff) => string[],
): string =>
  formatTable(
    [
      { content: `Change`, align: `right` },
      { content: `Delta`, align: `right` },
      { content: `Base`, align: `right` },
      { content: `Current`, align: `right` },
      { content: `Instances`, align: `right` },
      ...entityColumns,
    ],
    entities.map(({ entity, baseValue, currentValue }) => {
      const delta = currentValue - baseValue
      return [
        formatPercentChange(baseValue, currentValue),
        formatDelta(delta, formatBytes(Math.abs(delta))),
        formatBytes(baseValue),
        formatBytes(currentValue),
        formatArrow(
          formatCount(entity.base?.instanceCount ?? 0),
          formatCount(entity.current?.instanceCount ?? 0),
        ),
        ...formatEntityCells(entity),
      ]
    }),
  )

/**
 * Returns whether anything in the snapshot or diff has a location. If nothing
 * does, then location columns would be noisy and shouldn't be output.
 */
const hasAnyLocation = ({
  constructors,
  closures,
}: {
  constructors: { location?: SourceLocation }[]
  closures: { location?: SourceLocation }[]
}): boolean =>
  constructors.some(constructor => constructor.location) ||
  closures.some(closure => closure.location)

/**
 * The phrases and size accessor shared by a self or retained size constructors
 * section.
 */
type ConstructorsSection = {
  /** The section's heading title. */
  title: string

  /** A sentence describing how the section's constructors are ranked. */
  ranking: string

  /** A short phrase naming what the constructors are measured by. */
  measure: string

  /** Returns the size a constructor or instance is measured by. */
  sizeOf: (node: AggregatedSnapshotNode) => number
}

/** The self and retained size constructors sections, in output order. */
const constructorsSections: ConstructorsSection[] = [
  {
    title: `Self size`,
    ranking: `Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.`,
    measure: `self size`,
    sizeOf: node => node.selfSize,
  },
  {
    title: `Retained size`,
    ranking: `Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.`,
    measure: `retained size`,
    sizeOf: node => node.retainedSize,
  },
]

const closuresRanking = `Closures ranked by bytes that would be freed if the closure were garbage collected.`

const stringsRanking = `Strings ranked by bytes allocated for them.`

/** An entity with a name and optional location, shown in tables and headings. */
type NamedEntity = {
  name: string
  location?: SourceLocation
}

/**
 * Returns the columns labeling an entity, with a location column when
 * {@link hasLocation}.
 */
const entityColumns = (nameColumn: string, hasLocation: boolean): string[] => [
  nameColumn,
  ...(hasLocation ? [`Location`] : []),
]

/** Returns an entity's cells for the columns from {@link entityColumns}. */
const formatEntityCells = (
  entity: NamedEntity,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => [
  inlineCode(entity.name),
  ...(hasLocation ? [formatSourceLocation(entity.location, options)] : []),
]

/** Formats a heading for an entity, with its location when {@link hasLocation}. */
const formatEntityHeading = (
  headingLevel: number,
  entity: NamedEntity,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string =>
  formatHeading(
    headingLevel,
    `${inlineCode(entity.name)}${
      hasLocation ? ` (${formatSourceLocation(entity.location, options)})` : ``
    }`,
  )
