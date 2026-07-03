import {
  bytesCell,
  countCell,
  formatDiffTable,
  formatTable,
  percentCell,
  textCell,
} from '../cell.ts'
import type { Cell } from '../cell.ts'
import type { Diff } from '../diff.ts'
import { DynamicTypedArray } from '../helpers/array.ts'
import {
  formatArrow,
  formatBytes,
  formatChange,
  formatCount,
} from '../helpers/format.ts'
import { MaxHeap, selectTopN } from '../helpers/heap.ts'
import {
  formatHeading,
  formatSectionGroup,
  inlineCode,
} from '../helpers/markdown.ts'
import type { Header } from '../helpers/markdown.ts'
import { formatSourceLocation } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import type {
  AggregatedClosure,
  AggregatedConstructor,
  AggregatedHeapSnapshot,
  AggregatedSnapshotNode,
  NodeCategoryStats,
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
      categoryTableHeaders(),
      hottestObjectCategories.map(([category, stats]) =>
        categoryRow(category, stats, totalSize),
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
    [
      ...formatLargestSelfSizeConstructors(snapshot, hasLocation, options),
      ...formatLargestRetainedSizeConstructors(snapshot, hasLocation, options),
    ],
  )

const formatLargestSelfSizeConstructors = (
  snapshot: AggregatedHeapSnapshot,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const { totalSize, constructors } = snapshot
  const sizeOf = (node: AggregatedSnapshotNode) => node.selfSize

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
    ...formatSelfSizeConstructorsHeading({ isEmptyDiff: false }),
    formatTable(
      constructorTableHeaders(hasLocation),
      largestConstructors.map(constructor =>
        constructorRow(
          constructor,
          sizeOf(constructor),
          constructor.instances.length,
          totalSize,
          hasLocation,
          options,
        ),
      ),
    ),
    ...formatSectionGroup(
      [
        formatHeading(4, `Instances`),
        `Instances ranked by contribution to each constructor's self size.`,
      ],
      largestInstanceSections,
    ),
  ]
}

const formatLargestRetainedSizeConstructors = (
  snapshot: AggregatedHeapSnapshot,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const { totalSize, constructors } = snapshot
  const sizeOf = (node: AggregatedSnapshotNode) => node.retainedSize

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
    ...formatRetainedSizeConstructorsHeading({ isEmptyDiff: false }),
    formatTable(
      constructorTableHeaders(hasLocation),
      largestConstructors.map(constructor =>
        constructorRow(
          constructor,
          sizeOf(constructor),
          constructor.instances.length,
          totalSize,
          hasLocation,
          options,
        ),
      ),
    ),
    ...formatSectionGroup(
      [
        formatHeading(4, `Instances`),
        `Instances ranked by contribution to each constructor's retained size.`,
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
      instanceTableHeaders(),
      largestInstanceGroups.map(group => instanceRow(group, constructorSize)),
    ),
  ]
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
    ...formatLargestClosuresHeading({ isEmptyDiff: false }),
    formatTable(
      closureTableHeaders(hasLocation),
      largestClosures.map(closure =>
        closureRow(
          {
            name: closure.name,
            location: closure.location,
            retainedSize: closure.retainedSize,
            instanceCount: closure.instanceIds.length,
            pathCount: new Set(closure.instanceIds.map(retainerPathOf)).size,
            examplePath: retainerPathOf(closure.largestInstanceId),
          },
          totalSize,
          hasLocation,
          options,
        ),
      ),
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
      retainedTableHeaders(),
      retainedNodes.map(node =>
        retainedRow(
          {
            name: node.name,
            selfSize: node.selfSize,
            path: retainerPathOf(node.id),
          },
          closure.retainedSize,
        ),
      ),
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
    ...formatLargestStringsHeading({ isEmptyDiff: false }),
    formatTable(
      stringTableHeaders(hasValues),
      largestStrings.map(string =>
        stringRow(
          {
            name: string.name,
            selfSize: string.selfSize,
            path: retainerPathOf(string.id),
          },
          totalSize,
          hasValues,
        ),
      ),
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
}: AggregatedHeapSnapshotDiff): string =>
  `Allocated ${formatArrow(
    formatBytes(base.totalSize),
    formatBytes(current.totalSize),
  )}${formatChange(
    base.totalSize,
    current.totalSize,
    formatBytes,
  )} across ${formatArrow(
    formatCount(base.nodeCount),
    formatCount(current.nodeCount),
  )} nodes and ${formatArrow(
    formatCount(base.edgeCount),
    formatCount(current.edgeCount),
  )} edges.`

const formatDiffCategoryTable = (
  diff: AggregatedHeapSnapshotDiff,
): string[] => {
  const { nodeCategoryToStats, base, current } = diff
  if (nodeCategoryToStats.size === 0) {
    return []
  }

  const categories = [...nodeCategoryToStats].sort(
    ([, left], [, right]) =>
      (right.current?.size ?? 0) - (left.current?.size ?? 0),
  )
  const baseTotal = base.totalSize
  const currentTotal = current.totalSize
  return [
    formatDiffTable(
      categoryTableHeaders(),
      categories.map(([category, { base, current }]) => ({
        base: base && categoryRow(category, base, baseTotal),
        current: current && categoryRow(category, current, currentTotal),
      })),
      { primaryIndex: categoryPrimaryIndex, changeDeltaIndex: 1 },
    ),
  ]
}

/** The index of the primary size column in the categories table. */
const categoryPrimaryIndex = 2

/** The headers of the overall largest node categories table. */
const categoryTableHeaders = (): Header[] => [
  `Category`,
  ...sizeHeaders(`Size`),
  { content: `Nodes`, align: `right` },
]

/** A row of the categories table for one category on one side. */
const categoryRow = (
  category: string,
  stats: NodeCategoryStats,
  totalSize: number,
): Cell[] => [
  textCell(category),
  ...sizeCells(stats.size, totalSize),
  countCell(stats.nodeCount),
]

const formatDiffConstructors = (
  diff: AggregatedHeapSnapshotDiff,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] =>
  formatSectionGroup(
    [formatHeading(2, `Largest constructors`)],
    [
      ...formatDiffSelfSizeConstructors(diff, hasLocation, options),
      ...formatDiffRetainedSizeConstructors(diff, hasLocation, options),
    ],
  )

const formatDiffSelfSizeConstructors = (
  diff: AggregatedHeapSnapshotDiff,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const { regressions, progressions, hasActive } = selectDiffEntities(
    diff.constructors.map(entity => ({
      entity,
      baseValue: entity.base ? entity.base.selfSize : 0,
      currentValue: entity.current ? entity.current.selfSize : 0,
    })),
    options,
  )
  const rowOf = (entity: AggregatedSnapshotEntityDiff) => ({
    base:
      entity.base &&
      constructorRow(
        entity.base,
        entity.base.selfSize,
        entity.base.instanceCount,
        diff.base.totalSize,
        hasLocation,
        options,
      ),
    current:
      entity.current &&
      constructorRow(
        entity.current,
        entity.current.selfSize,
        entity.current.instanceCount,
        diff.current.totalSize,
        hasLocation,
        options,
      ),
  })

  return formatDiffEntitySections(
    formatSelfSizeConstructorsHeading,
    4,
    `Constructors`,
    `self size`,
    constructorTableHeaders(hasLocation),
    hasActive,
    regressions.map(({ entity }) => rowOf(entity)),
    progressions.map(({ entity }) => rowOf(entity)),
  )
}

const formatDiffRetainedSizeConstructors = (
  diff: AggregatedHeapSnapshotDiff,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const { regressions, progressions, hasActive } = selectDiffEntities(
    diff.constructors.map(entity => ({
      entity,
      baseValue: entity.base ? entity.base.retainedSize : 0,
      currentValue: entity.current ? entity.current.retainedSize : 0,
    })),
    options,
  )
  const rowOf = (entity: AggregatedSnapshotEntityDiff) => ({
    base:
      entity.base &&
      constructorRow(
        entity.base,
        entity.base.retainedSize,
        entity.base.instanceCount,
        diff.base.totalSize,
        hasLocation,
        options,
      ),
    current:
      entity.current &&
      constructorRow(
        entity.current,
        entity.current.retainedSize,
        entity.current.instanceCount,
        diff.current.totalSize,
        hasLocation,
        options,
      ),
  })

  return formatDiffEntitySections(
    formatRetainedSizeConstructorsHeading,
    4,
    `Constructors`,
    `retained size`,
    constructorTableHeaders(hasLocation),
    hasActive,
    regressions.map(({ entity }) => rowOf(entity)),
    progressions.map(({ entity }) => rowOf(entity)),
  )
}

/** The headers of the largest constructors table. */
const constructorTableHeaders = (hasLocation: boolean): Header[] => [
  ...sizeHeaders(`Size`),
  { content: `Instances`, align: `right` },
  ...entityHeaders(`Constructor`, hasLocation),
]

/** A row of the largest constructors table for one constructor on one side. */
const constructorRow = (
  entity: LabeledEntity,
  size: number,
  instanceCount: number,
  totalSize: number,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): Cell[] => [
  ...sizeCells(size, totalSize),
  countCell(instanceCount),
  ...entityCells(entity, hasLocation, options),
]

/** The headers of the largest instance groups table. */
const instanceTableHeaders = (): Header[] => [
  ...sizeHeaders(`Size`),
  { content: `Instances`, align: `right` },
  `Path`,
]

/** A row of the largest instance groups table for one group on one side. */
const instanceRow = (group: InstanceGroup, totalSize: number): Cell[] => [
  ...sizeCells(group.size, totalSize),
  countCell(group.instanceCount),
  textCell(inlineCode(group.retainerPath)),
]

const formatDiffClosures = (
  diff: AggregatedHeapSnapshotDiff,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const { regressions, progressions, hasActive } = selectDiffEntities(
    diff.closures.map(entity => ({
      entity,
      baseValue: entity.base ? entity.base.retainedSize : 0,
      currentValue: entity.current ? entity.current.retainedSize : 0,
    })),
    options,
  )
  const rowOf = (entity: AggregatedSnapshotEntityDiff) => ({
    base:
      entity.base &&
      closureRow(
        closureRowOf(entity.base, diff.base),
        diff.base.totalSize,
        hasLocation,
        options,
      ),
    current:
      entity.current &&
      closureRow(
        closureRowOf(entity.current, diff.current),
        diff.current.totalSize,
        hasLocation,
        options,
      ),
  })

  return formatDiffEntitySections(
    formatLargestClosuresHeading,
    3,
    `Closures`,
    `retained size`,
    closureTableHeaders(hasLocation),
    hasActive,
    regressions.map(({ entity }) => rowOf(entity)),
    progressions.map(({ entity }) => rowOf(entity)),
  )
}

/** The headers of the largest closures table. */
const closureTableHeaders = (hasLocation: boolean): Header[] => [
  ...sizeHeaders(`Retained`),
  { content: `Instances`, align: `right` },
  { content: `Paths`, align: `right` },
  ...entityHeaders(`Name`, hasLocation),
  `Example path`,
]

/** A row of the largest closures table for one closure on one side. */
const closureRow = (
  row: ClosureRow,
  totalSize: number,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): Cell[] => [
  ...sizeCells(row.retainedSize, totalSize),
  countCell(row.instanceCount),
  countCell(row.pathCount),
  ...entityCells(row, hasLocation, options),
  textCell(inlineCode(row.examplePath)),
]

/** The headers of the largest retained nodes table. */
const retainedTableHeaders = (): Header[] => [
  ...sizeHeaders(`Self`),
  `Name`,
  `Path`,
]

/** A row of the largest retained nodes table for one node on one side. */
const retainedRow = (row: NodeRow, totalSize: number): Cell[] => [
  ...sizeCells(row.selfSize, totalSize),
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  textCell(inlineCode(row.name || `(unknown)`)),
  textCell(inlineCode(row.path)),
]

/** Resolves a diffed closure entity's row using one side's snapshot. */
const closureRowOf = (
  entity: DiffedSnapshotEntity,
  { retainerPathOf }: AggregatedHeapSnapshot,
): ClosureRow => ({
  name: entity.name,
  location: entity.location,
  retainedSize: entity.retainedSize,
  instanceCount: entity.instanceCount,
  pathCount: new Set(entity.instanceIds.map(retainerPathOf)).size,
  examplePath: retainerPathOf(entity.id),
})

const formatDiffStrings = (
  diff: AggregatedHeapSnapshotDiff,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const { regressions, progressions, hasActive } = selectDiffEntities(
    diff.strings.map(entity => ({
      entity,
      baseValue: entity.base ? entity.base.selfSize : 0,
      currentValue: entity.current ? entity.current.selfSize : 0,
    })),
    options,
  )
  const rowOf = (entity: AggregatedSnapshotEntityDiff) => ({
    base:
      entity.base &&
      stringRow(nodeRowOf(entity.base, diff.base), diff.base.totalSize, true),
    current:
      entity.current &&
      stringRow(
        nodeRowOf(entity.current, diff.current),
        diff.current.totalSize,
        true,
      ),
  })

  return formatDiffEntitySections(
    formatLargestStringsHeading,
    3,
    `Strings`,
    `size`,
    // Diffed strings are matched by value, so they always have a value.
    stringTableHeaders(true),
    hasActive,
    regressions.map(({ entity }) => rowOf(entity)),
    progressions.map(({ entity }) => rowOf(entity)),
  )
}

/** The headers of the largest strings table, with a `Value` when {@link hasValues}. */
const stringTableHeaders = (hasValues: boolean): Header[] => [
  ...sizeHeaders(`Size`),
  ...(hasValues ? [`Value`] : []),
  `Path`,
]

/** A row of the largest strings table for one string on one side. */
const stringRow = (
  row: NodeRow,
  totalSize: number,
  hasValues: boolean,
): Cell[] => [
  ...sizeCells(row.selfSize, totalSize),
  ...(hasValues ? [textCell(inlineCode(row.name ?? `(unknown)`))] : []),
  textCell(inlineCode(row.path)),
]

/** Resolves a diffed node entity's row using one side's snapshot. */
const nodeRowOf = (
  entity: DiffedSnapshotEntity,
  { retainerPathOf }: AggregatedHeapSnapshot,
): NodeRow => ({
  name: entity.name,
  selfSize: entity.selfSize,
  path: retainerPathOf(entity.id),
})

/** A diffed entity paired with its base and current values. */
type ActiveDiffEntity = {
  entity: AggregatedSnapshotEntityDiff
  baseValue: number
  currentValue: number
}

/**
 * Selects the top regressed and progressed entities from {@link candidates},
 * keeping only those active on at least one side and shown by {@link options}.
 */
const selectDiffEntities = (
  candidates: ActiveDiffEntity[],
  options: NormalizedProfileToMdOptions,
): {
  hasActive: boolean
  regressions: ActiveDiffEntity[]
  progressions: ActiveDiffEntity[]
} => {
  const active = candidates.filter(
    ({ entity, baseValue, currentValue }) =>
      (baseValue > 0 || currentValue > 0) && showDiffEntity(entity, options),
  )
  return {
    hasActive: active.length > 0,
    regressions: selectTopN(
      active.filter(({ baseValue, currentValue }) => currentValue > baseValue),
      options.topN,
      ({ baseValue, currentValue }) => currentValue - baseValue,
    ),
    progressions: selectTopN(
      active.filter(({ baseValue, currentValue }) => currentValue < baseValue),
      options.topN,
      ({ baseValue, currentValue }) => baseValue - currentValue,
    ),
  }
}

/**
 * Assembles the regressions and progressions subsections for one diffed entity
 * table from its pre-built rows.
 */
const formatDiffEntitySections = (
  formatHeader: (options: { isEmptyDiff: boolean }) => string[],
  headingLevel: number,
  plural: string,
  description: string,
  headers: Header[],
  hasActive: boolean,
  regressions: Diff<Cell[]>[],
  progressions: Diff<Cell[]>[],
): string[] => {
  const sections: string[] = []

  if (regressions.length > 0) {
    sections.push(
      formatHeading(headingLevel, `Regressions`),
      `${plural} with the largest increase in ${description}.`,
      formatDiffTable(headers, regressions, { primaryIndex: 1 }),
    )
  }

  if (progressions.length > 0) {
    sections.push(
      formatHeading(headingLevel, `Progressions`),
      `${plural} with the largest decrease in ${description}.`,
      formatDiffTable(headers, progressions, { primaryIndex: 1 }),
    )
  }

  // With active entities but no change, keep the section and let the header note
  // it didn't differ. With nothing active (the section a non-diff snapshot
  // would have omitted), omit it.
  if (sections.length === 0 && !hasActive) {
    return []
  }

  return [...formatHeader({ isEmptyDiff: sections.length === 0 }), ...sections]
}

/** Returns whether either side of the diffed entity should be shown. */
const showDiffEntity = (
  { base, current }: AggregatedSnapshotEntityDiff,
  options: NormalizedProfileToMdOptions,
): boolean =>
  (base !== undefined && options.showEntry(base)) ||
  (current !== undefined && options.showEntry(current))

/**
 * Returns whether anything in the snapshot or diff has a location. If nothing
 * does, location columns would be noisy and shouldn't be output.
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
 * The heading for the self size constructors section, with a ranking sentence
 * or, for an unchanged diff, a merged "did not differ" note.
 */
const formatSelfSizeConstructorsHeading = ({
  isEmptyDiff,
}: {
  isEmptyDiff: boolean
}): string[] => [
  formatHeading(3, `Self size`),
  isEmptyDiff
    ? `No constructor differed in bytes allocated for its instances, excluding nodes kept reachable by them.`
    : `Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.`,
]

/**
 * The heading for the retained size constructors section, with a ranking
 * sentence or, for an unchanged diff, a merged "did not differ" note.
 */
const formatRetainedSizeConstructorsHeading = ({
  isEmptyDiff,
}: {
  isEmptyDiff: boolean
}): string[] => [
  formatHeading(3, `Retained size`),
  isEmptyDiff
    ? `No constructor differed in bytes allocated for its instances and all nodes that would be freed if its instances were garbage collected.`
    : `Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.`,
]

/**
 * The heading for the largest closures section, with a ranking sentence or, for
 * an unchanged diff, a merged "did not differ" note.
 */
const formatLargestClosuresHeading = ({
  isEmptyDiff,
}: {
  isEmptyDiff: boolean
}): string[] => [
  formatHeading(2, `Largest closures`),
  isEmptyDiff
    ? `No closure differed in bytes that would be freed if the closure were garbage collected.`
    : `Closures ranked by bytes that would be freed if the closure were garbage collected.`,
]

/**
 * The heading for the largest strings section, with a ranking sentence or, for
 * an unchanged diff, a merged "did not differ" note.
 */
const formatLargestStringsHeading = ({
  isEmptyDiff,
}: {
  isEmptyDiff: boolean
}): string[] => [
  formatHeading(2, `Largest strings`),
  isEmptyDiff
    ? `No string differed in bytes allocated for it.`
    : `Strings ranked by bytes allocated for them.`,
]

/** An entity with a name and optional location, shown in tables and headings. */
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

/** A group of instances with the same retainer path. */
type InstanceGroup = {
  /** The retainer path to every instance in the group. */
  retainerPath: string

  /** The number of instances in the group. */
  instanceCount: number

  /** The combined size of the instances in the group. */
  size: number
}

/** An entity labeled by a name and optional location in a table. */
type LabeledEntity = { name?: string; location?: SourceLocation }

/** A closure's row data, with its example path and path count resolved. */
type ClosureRow = LabeledEntity & {
  retainedSize: number
  instanceCount: number
  pathCount: number
  examplePath: string
}

/** A node's row data within a retained or strings table, with its path resolved. */
type NodeRow = {
  name?: string
  selfSize: number
  path: string
}

/** The leading `%` and byte-size headers shared by the size tables. */
const sizeHeaders = (sizeLabel: string): Header[] => [
  { content: `%`, align: `right` },
  { content: sizeLabel, align: `right` },
]

/** The leading `%` and byte-size cells shared by the size tables. */
const sizeCells = (size: number, totalSize: number): Cell[] => [
  percentCell(totalSize ? size / totalSize : 0),
  bytesCell(size),
]

/** The name (and `Location` when {@link hasLocation}) headers labeling an entity. */
const entityHeaders = (nameLabel: string, hasLocation: boolean): Header[] =>
  hasLocation ? [nameLabel, `Location`] : [nameLabel]

/** The name (and location when {@link hasLocation}) cells labeling an entity. */
const entityCells = (
  entity: LabeledEntity,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): Cell[] => [
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  textCell(inlineCode(entity.name || `(unknown)`)),
  ...(hasLocation
    ? [textCell(formatSourceLocation(entity.location, options))]
    : []),
]
