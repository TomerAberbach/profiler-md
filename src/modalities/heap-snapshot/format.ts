import type { Heading, RootContent } from 'mdast'
import {
  formatArrow,
  formatBytes,
  formatBytesDelta,
  formatChange,
  formatCount,
} from '../../helpers/format.ts'
import { MaxHeap, selectTopN } from '../../helpers/heap.ts'
import {
  formatSectionGroup,
  heading,
  inlineCode,
  nameLocationPhrasing,
  paragraph,
  phrasing,
} from '../../helpers/markdown.ts'
import { formatSourceLocation } from '../../location.ts'
import type { FileReference, SourceLocation } from '../../location.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import {
  formatRankingTables,
  rankEntities,
  subsectionCategories,
  subsectionDiffCategories,
} from '../category.ts'
import type { Diff, EntryDiff } from '../diff.ts'
import {
  diffRankings,
  diffRankingSentence,
  formatBaseURLNote,
  formatDiffRankingSections,
  resolveEntryFilter,
  selectDiffEntities,
  selectLargestChanges,
  showDiffEntity,
  shownDiffEntities,
} from '../format.ts'
import type { DiffCategoryRanking } from '../format.ts'
import { BYTES_METRIC } from '../metrics.ts'
import { formatDiffTable, formatTable } from '../table.ts'
import type { Table } from '../table.ts'
import type {
  AggregatedHeapSnapshot,
  AggregatedHeapSnapshotConstructor,
  AggregatedHeapSnapshotFunction,
  AggregatedHeapSnapshotNode,
  AggregatedHeapSnapshotString,
} from './aggregate.ts'
import { shownRetainedNodes } from './aggregate.ts'
import {
  diffRetainerPaths,
  matchConstructorInstanceGroups,
  matchFunctionRetainedNodeGroups,
} from './diff.ts'
import type {
  AggregatedHeapSnapshotDiff,
  AggregatedHeapSnapshotEntityDiff,
  DiffedHeapSnapshotConstructor,
  DiffedHeapSnapshotEntity,
  DiffedHeapSnapshotFunction,
  DiffedInstanceGroup,
  DiffRetainerPaths,
  RetainerGroup,
  RetainerPaths,
} from './diff.ts'
import {
  categoryColumns,
  constructorColumns,
  displayName,
  functionColumns,
  instanceColumns,
  retainedColumns,
  stringColumns,
} from './table.ts'
import type { FunctionRow, NodeRow } from './table.ts'
import type { HeapSnapshotNodeCategory } from './type.ts'

export const formatHeapSnapshot = (
  snapshot: AggregatedHeapSnapshot,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const hasLocation = hasAnyLocation(snapshot)
  const { sectionOptions, notes } = resolveEntryFilter({
    options,
    showsAnyEntry:
      snapshot.constructors.some(constructor =>
        options.showEntry(constructor, snapshot.context),
      ) ||
      snapshot.functions.some(fn =>
        options.showEntry(
          { ...fn, id: fn.largestInstanceId },
          snapshot.context,
        ),
      ) ||
      snapshot.strings.some(string =>
        options.showEntry(string, snapshot.context),
      ),
    disabledNote: ENTRY_FILTER_DISABLED_NOTE,
  })
  return [
    heading(1, `Heap snapshot`),
    ...formatOverallSummary(snapshot),
    ...formatBaseURLNote(options),
    ...notes,
    ...formatLargestConstructors({
      snapshot,
      hasLocation,
      options: sectionOptions,
    }),
    ...formatLargestFunctions({
      snapshot,
      hasLocation,
      options: sectionOptions,
    }),
    ...formatLargestStrings({ snapshot, options: sectionOptions }),
  ]
}

const ENTRY_FILTER_DISABLED_NOTE = `The entry filter hides every node, so all nodes are shown.`

const SEVERAL_PATHS_NOTE = phrasing` ${inlineCode(`B ←(several paths)– A`)} means ${inlineCode(`A`)} holds ${inlineCode(`B`)} only through other nodes, along several paths.`

const formatOverallSummary = ({
  totalSize,
  nodeCount,
  edgeCount,
  nodeCategoryToStats,
}: AggregatedHeapSnapshot): RootContent[] => {
  const largestNodeCategories = [...nodeCategoryToStats].sort(
    ([, stats1], [, stats2]) => stats2.size - stats1.size,
  )
  if (largestNodeCategories.length === 0) {
    return []
  }

  return [
    paragraph(
      `Allocated ${formatBytes(totalSize)} across ${formatCount(
        nodeCount,
      )} nodes and ${formatCount(edgeCount)} edges.`,
    ),
    formatTable(
      categoryColumns,
      largestNodeCategories.map(([category, stats]) => ({
        category,
        size: stats.size,
        nodeCount: stats.nodeCount,
        total: totalSize,
      })),
    ),
  ]
}

const formatLargestConstructors = ({
  snapshot,
  hasLocation,
  options,
}: {
  snapshot: AggregatedHeapSnapshot
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  // Resolved once for both rankings: a category qualifies for a subsection by
  // its share of the shown constructors' summed self size, which the ranking it
  // appears under doesn't change.
  const categories = subsectionCategories({
    entries: snapshot.constructors.filter(constructor =>
      options.showEntry(constructor, snapshot.context),
    ),
    selfValueOf: constructor => constructor.selfSize,
    categoryOf: constructor => constructor.category,
    minCategoryShare: options.minCategoryShare,
  })

  return formatSectionGroup(
    [heading(2, `Largest constructors`)],
    [
      ...formatLargestSizeConstructors({
        snapshot,
        hasLocation,
        categories,
        options,
        size: SELF_SIZE,
      }),
      ...formatLargestSizeConstructors({
        snapshot,
        hasLocation,
        categories,
        options,
        size: RETAINED_SIZE,
      }),
    ],
  )
}

/** One constructor size, self or retained. */
type ConstructorSize = {
  sizeOf: (node: { selfSize: number; retainedSize: number }) => number

  /**
   * Formats the section heading, with a ranking sentence or, for an unchanged
   * diff, a merged "did not differ" note.
   */
  formatHeader: (options: { isEmptyDiff: boolean }) => RootContent[]

  /** The phrase naming the size in prose, e.g. "self size". */
  description: string
}

const SELF_SIZE: ConstructorSize = {
  sizeOf: node => node.selfSize,
  formatHeader: ({ isEmptyDiff }) => [
    heading(3, `Self size`),
    paragraph(
      isEmptyDiff
        ? `No constructor differed in bytes allocated for its instances, excluding nodes kept reachable by them.`
        : `Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.`,
    ),
  ],
  description: `self size`,
}

const RETAINED_SIZE: ConstructorSize = {
  sizeOf: node => node.retainedSize,
  formatHeader: ({ isEmptyDiff }) => [
    heading(3, `Retained size`),
    paragraph(
      isEmptyDiff
        ? `No constructor differed in bytes allocated for its instances and all nodes that would be freed if its instances were garbage collected.`
        : `Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.`,
    ),
  ],
  description: `retained size`,
}

const formatLargestSizeConstructors = ({
  snapshot,
  hasLocation,
  categories,
  options,
  size: { sizeOf, formatHeader, description },
}: {
  snapshot: AggregatedHeapSnapshot
  hasLocation: boolean
  categories: HeapSnapshotNodeCategory[]
  options: FormattingProfileToMdOptions
  size: ConstructorSize
}): RootContent[] => {
  const { totalSize, constructors, context } = snapshot

  const ranking = rankEntities({
    entities: constructors.filter(constructor =>
      options.showEntry(constructor, context),
    ),
    categories,
    valueOf: sizeOf,
    topN: options.topN,
  })
  if (ranking.rankedEntities.length === 0) {
    return []
  }

  const largestInstanceSections = ranking.displayedEntities.flatMap(
    constructor =>
      formatLargestConstructorInstances({
        constructor,
        snapshot,
        sizeOf,
        hasLocation,
        options,
      }),
  )

  return [
    ...formatHeader({ isEmptyDiff: false }),
    ...formatRankingTables({
      ranking,
      formatEntityTable: entities =>
        formatTable(
          constructorColumns(hasLocation, options),
          entities.map(constructor => ({
            entity: constructor,
            size: sizeOf(constructor),
            total: totalSize,
            instanceCount: constructor.instances.length,
          })),
        ),
      headingLevel: 4,
    }),
    ...formatSectionGroup(
      [
        heading(4, `Instances`),
        paragraph(
          phrasing`Instances ranked by contribution to each constructor's ${description}.${SEVERAL_PATHS_NOTE}`,
        ),
      ],
      largestInstanceSections,
    ),
  ]
}

const formatLargestConstructorInstances = ({
  constructor,
  snapshot: { retainerPathOf, context },
  sizeOf,
  hasLocation,
  options,
}: {
  constructor: AggregatedHeapSnapshotConstructor
  snapshot: AggregatedHeapSnapshot
  sizeOf: (node: AggregatedHeapSnapshotNode) => number
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const largestInstanceGroups = selectLargestInstancesByRetainerPath({
    instances: constructor.instances.filter(instance =>
      options.showEntry(instance, context),
    ),
    sizeOf,
    retainerPathOf: nodeOrdinal => retainerPathOf(nodeOrdinal, options),
    topN: Math.ceil(options.topN / 4),
  }).sort((group1, group2) => group2.size - group1.size)
  if (largestInstanceGroups.length === 0) {
    return []
  }

  const constructorSize = sizeOf(constructor)
  return [
    formatEntityHeading(5, constructor, hasLocation, options),
    formatTable(
      instanceColumns,
      largestInstanceGroups.map(group => ({
        size: group.size,
        total: constructorSize,
        instanceCount: group.instanceCount,
        retainerPath: group.retainerPath,
      })),
    ),
  ]
}

const selectLargestInstancesByRetainerPath = ({
  instances,
  sizeOf,
  retainerPathOf,
  topN,
}: {
  instances: AggregatedHeapSnapshotNode[]
  sizeOf: (instance: AggregatedHeapSnapshotNode) => number
  retainerPathOf: (nodeOrdinal: number) => string
  topN: number
}): InstanceGroup[] => {
  // Popping by descending size stops at `topN` paths without calling
  // `retainerPathOf` for the long tail.
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

/** A group of instances with the same retainer path. */
type InstanceGroup = {
  retainerPath: string
  instanceCount: number
  size: number
}

const formatLargestFunctions = ({
  snapshot,
  hasLocation,
  options,
}: {
  snapshot: AggregatedHeapSnapshot
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const { totalSize, functions, retainerPathOf, context } = snapshot

  const largestFunctions = selectTopN(
    functions.filter(fn =>
      options.showEntry({ ...fn, id: fn.largestInstanceId }, context),
    ),
    options.topN,
    fn => fn.retainedSize,
  )
  if (largestFunctions.length === 0) {
    return []
  }

  const retainedSections = largestFunctions.flatMap(fn =>
    formatFunctionRetainedNodes({ fn, snapshot, hasLocation, options }),
  )

  return [
    ...formatLargestFunctionsHeading({ isEmptyDiff: false }),
    formatTable(
      functionColumns(hasLocation, options),
      largestFunctions.map(fn => ({
        entity: fn,
        size: fn.retainedSize,
        total: totalSize,
        instanceCount: fn.instanceIds.length,
        pathCount: new Set(
          fn.instanceIds.map(nodeOrdinal =>
            retainerPathOf(nodeOrdinal, options),
          ),
        ).size,
        examplePath: retainerPathOf(fn.largestInstanceId, options),
      })),
    ),
    ...formatSectionGroup(
      [
        heading(3, `Retained`),
        paragraph(
          phrasing`Nodes ranked by contribution to each function's retained size.${SEVERAL_PATHS_NOTE}`,
        ),
      ],
      retainedSections,
    ),
  ]
}

const formatFunctionRetainedNodes = ({
  fn,
  snapshot,
  hasLocation,
  options,
}: {
  fn: AggregatedHeapSnapshotFunction
  snapshot: AggregatedHeapSnapshot
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const retainedNodes = selectTopN(
    Array.from(
      shownRetainedNodes(fn.instanceIds, snapshot, options),
      ({ node }) => node,
    ),
    Math.ceil(options.topN / 4),
    node => node.selfSize,
  )
  if (retainedNodes.length === 0) {
    return []
  }

  return [
    formatEntityHeading(4, fn, hasLocation, options),
    formatTable(
      retainedColumns(`Path`, hasLocation, options),
      retainedNodes.map(node => ({
        entity: node,
        size: node.selfSize,
        total: fn.retainedSize,
        path: snapshot.retainerPathOf(node.id, options),
      })),
    ),
  ]
}

const formatLargestStrings = ({
  snapshot: { totalSize, strings, retainerPathOf, context },
  options,
}: {
  snapshot: AggregatedHeapSnapshot
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const shownStrings = strings.filter(string =>
    options.showEntry(string, context),
  )
  const selfSizeOf = (string: AggregatedHeapSnapshotString) => string.selfSize
  const ranking = rankEntities({
    entities: shownStrings,
    categories: subsectionCategories({
      entries: shownStrings,
      selfValueOf: selfSizeOf,
      categoryOf: string => string.category,
      minCategoryShare: options.minCategoryShare,
    }),
    valueOf: selfSizeOf,
    topN: options.topN,
  })
  if (ranking.rankedEntities.length === 0) {
    return []
  }

  // Resolved across every displayed string, so all the tables share a column.
  const hasValues = ranking.displayedEntities.some(
    string => string.name !== undefined,
  )
  return [
    ...formatLargestStringsHeading({ isEmptyDiff: false }),
    ...formatRankingTables({
      ranking,
      formatEntityTable: entities =>
        formatTable(
          stringColumns(hasValues),
          entities.map(string => ({
            name: string.name,
            size: string.selfSize,
            total: totalSize,
            path: retainerPathOf(string.id, options),
          })),
        ),
      headingLevel: 3,
    }),
  ]
}

export const formatHeapSnapshotDiff = (
  diff: AggregatedHeapSnapshotDiff,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const hasLocation = hasAnyLocation(diff)
  const { sectionOptions, notes } = resolveEntryFilter({
    options,
    showsAnyEntry:
      diff.constructors.some(entity => showDiffEntity(entity, diff, options)) ||
      diff.functions.some(entity => showDiffEntity(entity, diff, options)) ||
      diff.strings.some(entity => showDiffEntity(entity, diff, options)),
    disabledNote: ENTRY_FILTER_DISABLED_NOTE,
  })
  const retainerPaths = diffRetainerPaths(diff, sectionOptions)
  return [
    heading(1, `Heap snapshot diff`),
    ...formatDiffSummary(diff),
    ...formatBaseURLNote(options),
    ...notes,
    ...formatDiffConstructors({
      diff,
      hasLocation,
      retainerPaths,
      options: sectionOptions,
    }),
    ...formatDiffFunctions({
      diff,
      hasLocation,
      retainerPaths,
      options: sectionOptions,
    }),
    ...formatDiffStrings({ diff, options: sectionOptions }),
  ]
}

const formatDiffSummary = (diff: AggregatedHeapSnapshotDiff): RootContent[] => [
  paragraph(formatDiffSummaryLine(diff)),
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
    formatBytesDelta,
  )} across ${formatArrow(
    formatCount(base.nodeCount),
    formatCount(current.nodeCount),
  )} nodes and ${formatArrow(
    formatCount(base.edgeCount),
    formatCount(current.edgeCount),
  )} edges.`

const formatDiffCategoryTable = (
  diff: AggregatedHeapSnapshotDiff,
): RootContent[] => {
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
      categoryColumns,
      categories.map(([category, { base, current }]) => ({
        base: base && {
          category,
          size: base.size,
          nodeCount: base.nodeCount,
          total: baseTotal,
        },
        current: current && {
          category,
          size: current.size,
          nodeCount: current.nodeCount,
          total: currentTotal,
        },
      })),
    ),
  ]
}

const formatDiffConstructors = ({
  diff,
  hasLocation,
  retainerPaths,
  options,
}: {
  diff: AggregatedHeapSnapshotDiff
  hasLocation: boolean
  retainerPaths: DiffRetainerPaths
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  // Resolved once for both rankings: a category qualifies for a subsection by
  // its share of the shown constructors' summed self size, which the ranking it
  // appears under doesn't change.
  const categories = subsectionDiffCategories({
    entries: diff.constructors.filter(entity =>
      showDiffEntity(entity, diff, options),
    ),
    baseSelfValueOf: entity => entity.base?.selfSize ?? 0,
    currentSelfValueOf: entity => entity.current?.selfSize ?? 0,
    categoryOf: entity => entity.category,
    minCategoryShare: options.minCategoryShare,
  })

  const instanceGroupDiffs = memoizeInstanceGroupDiffs(
    diff,
    retainerPaths,
    options,
  )

  return formatSectionGroup(
    [heading(2, `Largest constructors`)],
    [
      ...formatDiffSizeConstructors({
        diff,
        hasLocation,
        categories,
        instanceGroupDiffs,
        paths: retainerPaths.paths,
        options,
        size: SELF_SIZE,
      }),
      ...formatDiffSizeConstructors({
        diff,
        hasLocation,
        categories,
        instanceGroupDiffs,
        paths: retainerPaths.paths,
        options,
        size: RETAINED_SIZE,
      }),
    ],
  )
}

type InstanceGroupDiffs = (
  constructor: AggregatedHeapSnapshotEntityDiff<DiffedHeapSnapshotConstructor>,
) => EntryDiff<DiffedInstanceGroup>[]

/**
 * Pairs each constructor's instance groups once, because both rankings break
 * down the same instances.
 */
const memoizeInstanceGroupDiffs = (
  diff: AggregatedHeapSnapshotDiff,
  retainerPaths: DiffRetainerPaths,
  options: FormattingProfileToMdOptions,
): InstanceGroupDiffs => {
  const constructorToInstanceGroupDiffs = new Map<
    AggregatedHeapSnapshotEntityDiff<DiffedHeapSnapshotConstructor>,
    EntryDiff<DiffedInstanceGroup>[]
  >()
  return constructor => {
    let groupDiffs = constructorToInstanceGroupDiffs.get(constructor)
    if (!groupDiffs) {
      groupDiffs = matchConstructorInstanceGroups(
        diff,
        constructor,
        retainerPaths,
        options,
      )
      constructorToInstanceGroupDiffs.set(constructor, groupDiffs)
    }
    return groupDiffs
  }
}

const formatDiffSizeConstructors = ({
  diff,
  hasLocation,
  categories,
  instanceGroupDiffs,
  paths,
  options,
  size: { sizeOf, formatHeader, description },
}: {
  diff: AggregatedHeapSnapshotDiff
  hasLocation: boolean
  categories: HeapSnapshotNodeCategory[]
  instanceGroupDiffs: InstanceGroupDiffs
  paths: RetainerPaths
  options: FormattingProfileToMdOptions
  size: ConstructorSize
}): RootContent[] => {
  const { increases, decreases, hasActive, categoryRankings } =
    selectDiffEntities(
      diff.constructors.map(entity => ({
        entity,
        baseValue: entity.base ? sizeOf(entity.base) : 0,
        currentValue: entity.current ? sizeOf(entity.current) : 0,
      })),
      diff,
      options,
      { categories, categoryOf: entity => entity.category },
    )

  const sideRowOf = (total: number, entity?: DiffedHeapSnapshotEntity) =>
    entity && {
      entity,
      size: sizeOf(entity),
      total,
      instanceCount: entity.instanceCount,
    }
  const rowOf = ({ base, current }: AggregatedHeapSnapshotEntityDiff) => ({
    base: sideRowOf(diff.base.totalSize, base),
    current: sideRowOf(diff.current.totalSize, current),
  })

  const instanceSections = shownDiffEntities({
    improvement: BYTES_METRIC.improvement,
    increases,
    decreases,
    categoryRankings,
  }).flatMap(({ entity }) =>
    formatDiffConstructorInstances({
      constructor: entity,
      groupDiffs: instanceGroupDiffs(entity),
      paths,
      sizeOf,
      hasLocation,
      options,
    }),
  )

  return formatDiffEntitySections({
    formatHeader,
    headingLevel: 4,
    plural: `Constructors`,
    description,
    columns: constructorColumns(hasLocation, options),
    hasActive,
    increases,
    decreases,
    categoryRankings,
    rowOf: ({ entity }) => rowOf(entity),
    detailSections: formatSectionGroup(
      [
        heading(4, `Instances`),
        paragraph(
          phrasing`Instances with the largest change in contribution to each constructor's ${description}.${SEVERAL_PATHS_NOTE}`,
        ),
      ],
      instanceSections,
    ),
  })
}

const formatDiffConstructorInstances = ({
  constructor,
  groupDiffs,
  paths,
  sizeOf,
  hasLocation,
  options,
}: {
  constructor: AggregatedHeapSnapshotEntityDiff<DiffedHeapSnapshotConstructor>
  groupDiffs: EntryDiff<DiffedInstanceGroup>[]
  paths: RetainerPaths
  sizeOf: ConstructorSize[`sizeOf`]
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] =>
  formatDiffEntityGroups({
    entity: constructor,
    groupDiffs,
    sizeOf,
    totalOf: sizeOf,
    headingLevel: 5,
    columns: instanceColumns,
    rowOf: (group, size, total) => ({
      size,
      total,
      instanceCount: group.instanceCount,
      retainerPath: paths.format(group.path, constructor),
    }),
    hasLocation,
    options,
  })

/**
 * An entity's groups whose size changed the most either way, paired across the
 * sides.
 *
 * Unlike the non-diff breakdowns, which stop at the largest nodes, a diff
 * groups every shown node, because a group's change needs its whole size on
 * both sides. It formats only the paths of the groups it shows.
 */
const formatDiffEntityGroups = <
  Entity extends DiffedHeapSnapshotEntity,
  Group extends RetainerGroup,
  Row,
>({
  entity,
  groupDiffs,
  sizeOf,
  totalOf,
  headingLevel,
  columns,
  rowOf,
  hasLocation,
  options,
}: {
  entity: AggregatedHeapSnapshotEntityDiff<Entity>
  groupDiffs: EntryDiff<Group>[]
  sizeOf: (group: Group) => number

  /** The size a group's share is of. */
  totalOf: (entity: Entity) => number
  headingLevel: Heading[`depth`]
  columns: Table<Row>
  rowOf: (group: Group, size: number, total: number) => Row
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const changedGroups = selectLargestChanges(
    groupDiffs,
    Math.ceil(options.topN / 4),
    ({ base, current }) =>
      (current ? sizeOf(current) : 0) - (base ? sizeOf(base) : 0),
  )
  if (changedGroups.length === 0) {
    return []
  }

  const sideRowOf = (side: Entity | undefined, group: Group | undefined) =>
    side && group && rowOf(group, sizeOf(group), totalOf(side))
  return [
    formatEntityHeading(headingLevel, entity, hasLocation, options),
    formatDiffTable(
      columns,
      changedGroups.map(({ base, current }) => ({
        base: sideRowOf(entity.base, base),
        current: sideRowOf(entity.current, current),
      })),
    ),
  ]
}

const formatDiffFunctions = ({
  diff,
  hasLocation,
  retainerPaths,
  options,
}: {
  diff: AggregatedHeapSnapshotDiff
  hasLocation: boolean
  retainerPaths: DiffRetainerPaths
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const { increases, decreases, hasActive } = selectDiffEntities(
    diff.functions.map(entity => ({
      entity,
      baseValue: entity.base ? entity.base.retainedSize : 0,
      currentValue: entity.current ? entity.current.retainedSize : 0,
    })),
    diff,
    options,
  )

  const rowOf = ({
    base,
    current,
  }: AggregatedHeapSnapshotEntityDiff<DiffedHeapSnapshotFunction>) => ({
    base: base && functionRowOf(base, diff.base, options),
    current: current && functionRowOf(current, diff.current, options),
  })

  const retainedSections = shownDiffEntities({
    improvement: BYTES_METRIC.improvement,
    increases,
    decreases,
  }).flatMap(({ entity }) =>
    formatDiffFunctionRetainedNodes({
      diff,
      fn: entity,
      retainerPaths,
      hasLocation,
      options,
    }),
  )

  return formatDiffEntitySections({
    formatHeader: formatLargestFunctionsHeading,
    headingLevel: 3,
    plural: `Functions`,
    description: `retained size`,
    columns: functionColumns(hasLocation, options),
    hasActive,
    increases,
    decreases,
    rowOf: ({ entity }) => rowOf(entity),
    detailSections: formatSectionGroup(
      [
        heading(3, `Retained`),
        paragraph(
          phrasing`Nodes with the largest change in contribution to each function's retained size.${SEVERAL_PATHS_NOTE} ${inlineCode(`[]`)} stands for any element of an array.`,
        ),
      ],
      retainedSections,
    ),
  })
}

const formatDiffFunctionRetainedNodes = ({
  diff,
  fn,
  retainerPaths,
  hasLocation,
  options,
}: {
  diff: AggregatedHeapSnapshotDiff
  fn: AggregatedHeapSnapshotEntityDiff<DiffedHeapSnapshotFunction>
  retainerPaths: DiffRetainerPaths
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] =>
  formatDiffEntityGroups({
    entity: fn,
    groupDiffs: matchFunctionRetainedNodeGroups(
      diff,
      fn,
      retainerPaths,
      options,
    ),
    sizeOf: group => group.selfSize,
    totalOf: side => side.retainedSize,
    headingLevel: 4,
    columns: retainedColumns(`Path within instance`, hasLocation, options),
    rowOf: (group, size, total) => ({
      entity: group.node,
      path: retainerPaths.within.paths.format(group.path, group.node),
      size,
      total,
    }),
    hasLocation,
    options,
  })

const functionRowOf = (
  entity: DiffedHeapSnapshotFunction,
  { retainerPathOf, totalSize }: AggregatedHeapSnapshot,
  options: FormattingProfileToMdOptions,
): FunctionRow => ({
  entity,
  size: entity.retainedSize,
  total: totalSize,
  instanceCount: entity.instanceCount,
  pathCount: new Set(
    entity.instanceIds.map(nodeOrdinal => retainerPathOf(nodeOrdinal, options)),
  ).size,
  examplePath: retainerPathOf(entity.id, options),
})

const formatDiffStrings = ({
  diff,
  options,
}: {
  diff: AggregatedHeapSnapshotDiff
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const categoryOf = (entity: AggregatedHeapSnapshotEntityDiff) =>
    entity.category
  const categories = subsectionDiffCategories({
    entries: diff.strings.filter(entity =>
      showDiffEntity(entity, diff, options),
    ),
    baseSelfValueOf: entity => entity.base?.selfSize ?? 0,
    currentSelfValueOf: entity => entity.current?.selfSize ?? 0,
    categoryOf,
    minCategoryShare: options.minCategoryShare,
  })

  const { increases, decreases, hasActive, categoryRankings } =
    selectDiffEntities(
      diff.strings.map(entity => ({
        entity,
        baseValue: entity.base ? entity.base.selfSize : 0,
        currentValue: entity.current ? entity.current.selfSize : 0,
      })),
      diff,
      options,
      { categories, categoryOf },
    )

  const rowOf = ({ base, current }: AggregatedHeapSnapshotEntityDiff) => ({
    base: base && nodeRowOf(base, diff.base, options),
    current: current && nodeRowOf(current, diff.current, options),
  })

  return formatDiffEntitySections({
    formatHeader: formatLargestStringsHeading,
    headingLevel: 3,
    plural: `Strings`,
    description: `size`,
    // Diffed strings are matched by value, so they always have a value.
    columns: stringColumns(true),
    hasActive,
    increases,
    decreases,
    categoryRankings,
    rowOf: ({ entity }) => rowOf(entity),
  })
}

const nodeRowOf = (
  entity: DiffedHeapSnapshotEntity,
  { retainerPathOf, totalSize }: AggregatedHeapSnapshot,
  options: FormattingProfileToMdOptions,
): NodeRow => ({
  name: entity.name,
  size: entity.selfSize,
  total: totalSize,
  path: retainerPathOf(entity.id, options),
})

/**
 * Formats the increase and decrease subsections of one diffed entity table.
 *
 * Every heap snapshot ranking measures bytes, so a decrease is an improvement
 * in all of them.
 */
const formatDiffEntitySections = <Entity, Row>({
  formatHeader,
  headingLevel,
  plural,
  description,
  columns,
  hasActive,
  increases,
  decreases,
  categoryRankings = [],
  rowOf,
  detailSections = [],
}: {
  formatHeader: (options: { isEmptyDiff: boolean }) => RootContent[]
  headingLevel: number
  plural: string
  description: string
  columns: Table<Row>
  hasActive: boolean
  increases: Entity[]
  decreases: Entity[]
  categoryRankings?: DiffCategoryRanking<Entity>[]
  rowOf: (entity: Entity) => Diff<Row>
  /** The sections breaking down the entities the rankings show. */
  detailSections?: RootContent[]
}): RootContent[] => {
  const sections = diffRankings(BYTES_METRIC.improvement).flatMap(
    ({ change, title: subtitle }) =>
      formatDiffRankingSections({
        headingLevel,
        subtitle,
        sentence: diffRankingSentence(plural, change, description),
        columns,
        entities: change === `increase` ? increases : decreases,
        categoryRankings,
        entitiesOf: categoryRanking =>
          change === `increase`
            ? categoryRanking.increases
            : categoryRanking.decreases,
        rowOf,
      }),
  )

  // With active entities but no change, keep the section and let the header note
  // it didn't differ. With nothing active (the section a non-diff snapshot
  // would have omitted), omit it.
  if (sections.length === 0 && !hasActive) {
    return []
  }

  return [
    ...formatHeader({ isEmptyDiff: sections.length === 0 }),
    ...sections,
    ...detailSections,
  ]
}

const hasAnyLocation = ({
  constructors,
  functions,
}: {
  constructors: { location?: SourceLocation }[]
  functions: { location?: SourceLocation }[]
}): boolean =>
  constructors.some(constructor => constructor.location) ||
  functions.some(fn => fn.location)

const formatLargestFunctionsHeading = ({
  isEmptyDiff,
}: {
  isEmptyDiff: boolean
}): RootContent[] => [
  heading(2, `Largest functions`),
  paragraph(
    isEmptyDiff
      ? `No function differed in bytes that would be freed if the function were garbage collected.`
      : `Functions ranked by bytes that would be freed if the function were garbage collected.`,
  ),
]

const formatLargestStringsHeading = ({
  isEmptyDiff,
}: {
  isEmptyDiff: boolean
}): RootContent[] => [
  heading(2, `Largest strings`),
  paragraph(
    isEmptyDiff
      ? `No string differed in bytes allocated for it.`
      : `Strings ranked by bytes allocated for them.`,
  ),
]

type NamedEntity = {
  name: string
  nameLocation?: FileReference
  location?: SourceLocation
}

const formatEntityHeading = (
  headingLevel: number,
  entity: NamedEntity,
  hasLocation: boolean,
  options: FormattingProfileToMdOptions,
): Heading =>
  heading(
    headingLevel,
    hasLocation
      ? nameLocationPhrasing(
          displayName(entity, options)!,
          inlineCode(formatSourceLocation(entity.location, options)),
        )
      : [inlineCode(displayName(entity, options)!)],
  )
