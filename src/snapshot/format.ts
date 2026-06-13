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
  formatTable as formatMarkdownTable,
  formatSectionGroup,
  inlineCode,
} from '../helpers/markdown.ts'
import type { Header } from '../helpers/markdown.ts'
import { formatSourceLocation } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import { formatDiffTable, formatTable, percentColumn } from '../table.ts'
import type { Column, DiffRow, LabelColumn, NumericColumn } from '../table.ts'
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
    formatTable({
      columns: categoryColumns,
      rows: hottestObjectCategories.map(
        ([category, { size, nodeCount: count }]) => ({
          present: true,
          label: category,
          total: totalSize,
          size,
          nodeCount: count,
        }),
      ),
    }),
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
    formatTable({
      columns: constructorColumns(sizeOf, hasLocation, options).columns,
      rows: largestConstructors.map(constructor =>
        constructorSide(constructor, totalSize),
      ),
    }),
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
    formatMarkdownTable(
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
    formatTable({
      columns: closureColumns(hasLocation, options).columns,
      rows: largestClosures.map(closure =>
        closureSide(closure, totalSize, retainerPathOf),
      ),
    }),
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
    formatMarkdownTable(
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
    formatTable({
      columns: stringColumns(hasValues).columns,
      rows: largestStrings.map(string => ({
        present: true,
        label: string.name ?? `(unknown)`,
        total: totalSize,
        selfSize: string.selfSize,
        examplePath: retainerPathOf(string.id),
      })),
    }),
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
  base: baseSnapshot,
  current: currentSnapshot,
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
    formatDiffTable({
      columns: categoryColumns,
      primaryColumn: categorySizeColumn,
      changeColumnIndex: categoryChangeColumnIndex,
      rows: categories.map(([category, { base, current }]) => ({
        base: categoryDiffSide(category, base, baseSnapshot.totalSize),
        current: categoryDiffSide(category, current, currentSnapshot.totalSize),
      })),
    }),
  ]
}

const formatDiffConstructors = (
  diff: AggregatedHeapSnapshotDiff,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] =>
  formatSectionGroup(
    [formatHeading(2, `Largest constructors`)],
    constructorsSections.flatMap(({ title, ranking, measure, sizeOf }) => {
      const { columns, value } = constructorColumns(
        sizeOf,
        hasLocation,
        options,
      )
      return formatSectionGroup(
        [formatHeading(3, title), ranking],
        formatDiffDirectionSections(
          diff.constructors,
          sizeOf,
          options,
          4,
          { plural: `Constructors`, description: measure },
          value,
          columns,
          entity => ({
            base: constructorDiffSide(entity, entity.base, diff.base.totalSize),
            current: constructorDiffSide(
              entity,
              entity.current,
              diff.current.totalSize,
            ),
          }),
        ),
      )
    }),
  )

const formatDiffClosures = (
  diff: AggregatedHeapSnapshotDiff,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const { columns, value } = closureColumns(hasLocation, options)
  return formatSectionGroup(
    [formatHeading(2, `Largest closures`), closuresRanking],
    formatDiffDirectionSections(
      diff.closures,
      entity => entity.retainedSize,
      options,
      3,
      { plural: `Closures`, description: `retained size` },
      value,
      columns,
      entity => ({
        base: closureDiffSide(entity, entity.base, diff.base),
        current: closureDiffSide(entity, entity.current, diff.current),
      }),
    ),
  )
}

const formatDiffStrings = (
  diff: AggregatedHeapSnapshotDiff,
  options: NormalizedProfileToMdOptions,
): string[] => {
  // `mergeStrings` excludes nameless strings, so a value is always present.
  const { columns, value } = stringColumns(true)
  return formatSectionGroup(
    [formatHeading(2, `Largest strings`), stringsRanking],
    formatDiffDirectionSections(
      diff.strings,
      entity => entity.selfSize,
      options,
      3,
      { plural: `Strings`, description: `size` },
      value,
      columns,
      entity => ({
        base: stringDiffSide(entity, entity.base, diff.base),
        current: stringDiffSide(entity, entity.current, diff.current),
      }),
    ),
  )
}

const formatDiffDirectionSections = <Side extends { present: boolean }>(
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
  primary: NumericColumn<Side>,
  columns: Column<Side>[],
  toRow: (entity: AggregatedSnapshotEntityDiff) => DiffRow<Side>,
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
      formatDiffTable({
        primaryColumn: primary,
        columns,
        rows: regressions.map(({ entity }) => toRow(entity)),
      }),
    )
  }

  if (progressions.length > 0) {
    sections.push(
      formatHeading(headingLevel, `Progressions`),
      `${phrases.plural} with the largest decrease in ${phrases.description}.`,
      formatDiffTable({
        primaryColumn: primary,
        columns,
        rows: progressions.map(({ entity }) => toRow(entity)),
      }),
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

// ===========================================================================
// Shared column definitions
//
// Each table declares a `Side` view of one row's data and a list of columns
// over it. `formatColumnsTable` renders the non-diff table and
// `formatDiffColumnsTable` the diff table from the same columns, so a column
// added here appears in both. The generic column constructors below are
// constrained by the `Side` fields they read, so reusing one on a `Side`
// missing that field is a type error.
// ===========================================================================

const instancesColumn = <
  Side extends { instanceCount: number },
>(): NumericColumn<Side> => ({
  type: `numeric`,
  header: { content: `Instances`, align: `right` },
  value: side => side.instanceCount,
  format: formatCount,
})

const nameColumn = <Side extends { label: string }>(
  header: Header,
): LabelColumn<Side> => ({
  type: `label`,
  header,
  format: side => inlineCode(side.label),
})

const locationColumn = <Side extends { location?: SourceLocation }>(
  options: NormalizedProfileToMdOptions,
): LabelColumn<Side> => ({
  type: `label`,
  header: `Location`,
  format: side => formatSourceLocation(side.location, options),
})

const examplePathColumn = <Side extends { examplePath: string }>(
  header: Header,
): LabelColumn<Side> => ({
  type: `label`,
  header,
  format: side => inlineCode(side.examplePath),
})

/** One category's view, shared by the non-diff and diff category tables. */
type CategorySide = {
  present: boolean
  label: string
  total: number
  size: number
  nodeCount: number
}

const categorySizeColumn: NumericColumn<CategorySide> = {
  type: `numeric`,
  header: { content: `Size`, align: `right` },
  value: side => side.size,
  format: formatBytes,
}

// `Change`/`Delta` are inserted after `Category` in the diff table.
const categoryChangeColumnIndex = 1

const categoryColumns: Column<CategorySide>[] = [
  { type: `label`, header: `Category`, format: side => side.label },
  percentColumn(categorySizeColumn),
  categorySizeColumn,
  {
    type: `numeric`,
    header: { content: `Nodes`, align: `right` },
    value: side => side.nodeCount,
    format: formatCount,
  },
]

const categoryDiffSide = (
  label: string,
  stats: { size: number; nodeCount: number } | undefined,
  total: number,
): CategorySide => ({
  present: stats !== undefined,
  label,
  total,
  size: stats?.size ?? 0,
  nodeCount: stats?.nodeCount ?? 0,
})

/** One constructor's view, shared by the non-diff and diff constructor tables. */
type ConstructorSide = {
  present: boolean
  label: string
  location?: SourceLocation
  total: number
  selfSize: number
  retainedSize: number
  instanceCount: number
}

const constructorColumns = (
  sizeOf: (side: ConstructorSide) => number,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): {
  columns: Column<ConstructorSide>[]
  value: NumericColumn<ConstructorSide>
} => {
  const value: NumericColumn<ConstructorSide> = {
    type: `numeric`,
    header: { content: `Size`, align: `right` },
    value: sizeOf,
    format: formatBytes,
  }
  return {
    value,
    columns: [
      percentColumn(value),
      value,
      instancesColumn(),
      nameColumn(`Constructor`),
      ...(hasLocation ? [locationColumn<ConstructorSide>(options)] : []),
    ],
  }
}

const constructorSide = (
  constructor: AggregatedConstructor,
  total: number,
): ConstructorSide => ({
  present: true,
  label: constructor.name,
  location: constructor.location,
  total,
  selfSize: constructor.selfSize,
  retainedSize: constructor.retainedSize,
  instanceCount: constructor.instances.length,
})

const constructorDiffSide = (
  entity: AggregatedSnapshotEntityDiff,
  side: DiffedSnapshotEntity | undefined,
  total: number,
): ConstructorSide => ({
  present: side !== undefined,
  label: entity.name,
  location: entity.location,
  total,
  selfSize: side?.selfSize ?? 0,
  retainedSize: side?.retainedSize ?? 0,
  instanceCount: side?.instanceCount ?? 0,
})

/** One closure's view, shared by the non-diff and diff closure tables. */
type ClosureSide = {
  present: boolean
  label: string
  location?: SourceLocation
  total: number
  retainedSize: number
  instanceCount: number
  pathCount: number
  examplePath: string
}

const closureColumns = (
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): {
  columns: Column<ClosureSide>[]
  value: NumericColumn<ClosureSide>
} => {
  const value: NumericColumn<ClosureSide> = {
    type: `numeric`,
    header: { content: `Retained`, align: `right` },
    value: side => side.retainedSize,
    format: formatBytes,
  }
  return {
    value,
    columns: [
      percentColumn(value),
      value,
      instancesColumn(),
      {
        type: `numeric`,
        header: { content: `Paths`, align: `right` },
        value: side => side.pathCount,
        format: formatCount,
      },
      nameColumn(`Name`),
      ...(hasLocation ? [locationColumn<ClosureSide>(options)] : []),
      examplePathColumn(`Example path`),
    ],
  }
}

const closureSide = (
  closure: AggregatedClosure,
  total: number,
  retainerPathOf: (nodeOrdinal: number) => string,
): ClosureSide => ({
  present: true,
  label: closure.name,
  location: closure.location,
  total,
  retainedSize: closure.retainedSize,
  instanceCount: closure.instanceIds.length,
  pathCount: new Set(closure.instanceIds.map(retainerPathOf)).size,
  examplePath: retainerPathOf(closure.largestInstanceId),
})

const closureDiffSide = (
  entity: AggregatedSnapshotEntityDiff,
  side: DiffedSnapshotEntity | undefined,
  { totalSize, retainerPathOf }: AggregatedHeapSnapshot,
): ClosureSide => ({
  present: side !== undefined,
  label: entity.name,
  location: entity.location,
  total: totalSize,
  retainedSize: side?.retainedSize ?? 0,
  instanceCount: side?.instanceCount ?? 0,
  pathCount: side ? new Set(side.instanceIds!.map(retainerPathOf)).size : 0,
  examplePath: side ? retainerPathOf(side.id) : ``,
})

/** One string's view, shared by the non-diff and diff string tables. */
type StringSide = {
  present: boolean
  label: string
  total: number
  selfSize: number
  examplePath: string
}

const stringColumns = (
  hasValues: boolean,
): {
  columns: Column<StringSide>[]
  value: NumericColumn<StringSide>
} => {
  const value: NumericColumn<StringSide> = {
    type: `numeric`,
    header: { content: `Size`, align: `right` },
    value: side => side.selfSize,
    format: formatBytes,
  }
  return {
    value,
    columns: [
      percentColumn(value),
      value,
      ...(hasValues ? [nameColumn<StringSide>(`Value`)] : []),
      examplePathColumn(`Path`),
    ],
  }
}

const stringDiffSide = (
  entity: AggregatedSnapshotEntityDiff,
  side: DiffedSnapshotEntity | undefined,
  { totalSize, retainerPathOf }: AggregatedHeapSnapshot,
): StringSide => ({
  present: side !== undefined,
  label: entity.name,
  total: totalSize,
  selfSize: side?.selfSize ?? 0,
  examplePath: side ? retainerPathOf(side.id) : ``,
})

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

  /** Returns the size a constructor, instance, or side is measured by. */
  sizeOf: (node: { selfSize: number; retainedSize: number }) => number
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

/** An entity with a name and optional location, shown in headings. */
type NamedEntity = {
  name: string
  location?: SourceLocation
}

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
