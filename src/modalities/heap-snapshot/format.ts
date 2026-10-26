import type { Heading, PhrasingContent, RootContent } from 'mdast'
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
  sortDiffCategories,
  subsectionCategories,
  subsectionDiffCategories,
} from '../category.ts'
import type { Diff, EntryDiff } from '../diff.ts'
import {
  formatBaseURLNote,
  formatDiffMeasureSections,
  rankingSentence,
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
  RetainerPathEdge,
  RetainerPathStep,
} from './aggregate.ts'
import {
  formatRetainerEdgeLabel,
  formatRetainerLabel,
  formatRetainerName,
  shownRetainedNodes,
} from './aggregate.ts'
import {
  diffRetainerPaths,
  matchConstructorInstanceGroups,
  matchFunctionRetainedNodeGroups,
  RetainerPaths,
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
} from './diff.ts'
import {
  categoryColumns,
  constructorColumns,
  displayName,
  functionColumns,
  instanceGroupColumns,
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
  const sectionOptions = resolveEntryFilter({
    options,
    formatsAnyEntry:
      snapshot.constructors.length > 0 ||
      snapshot.functions.length > 0 ||
      snapshot.strings.length > 0,
    showsAnyEntry: showEntry =>
      snapshot.constructors.some(constructor =>
        showEntry(constructor, snapshot.context),
      ) ||
      snapshot.functions.some(fn =>
        showEntry({ ...fn, id: fn.largestInstanceOrdinal }, snapshot.context),
      ) ||
      snapshot.strings.some(string => showEntry(string, snapshot.context)),
    entities: `node`,
  })
  const { result: sections, edgeTypes } = ShownRetainerPaths.record(
    sectionOptions,
    shownPaths => [
      ...formatLargestConstructors({
        snapshot,
        hasLocation,
        shownPaths,
        options: sectionOptions,
      }),
      ...formatLargestFunctions({
        snapshot,
        hasLocation,
        shownPaths,
        options: sectionOptions,
      }),
      ...formatLargestStrings({
        snapshot,
        shownPaths,
        options: sectionOptions,
      }),
    ],
  )
  return [
    heading(1, `Heap snapshot`),
    ...formatOverallSummary(snapshot),
    ...formatBaseURLNote(options),
    ...formatSeveralPathsNote(edgeTypes),
    ...sections,
  ]
}

const formatOverallSummary = ({
  heldSize,
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
      `Held ${formatBytes(heldSize)} over ${formatCount(
        nodeCount,
      )} nodes and ${formatCount(edgeCount)} edges.`,
    ),
    formatTable(
      categoryColumns,
      largestNodeCategories.map(([category, stats]) => ({
        category,
        size: stats.size,
        nodeCount: stats.nodeCount,
        total: heldSize,
      })),
    ),
  ]
}

export const formatHeapSnapshotDiff = (
  diff: AggregatedHeapSnapshotDiff,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const hasLocation = hasAnyLocation(diff)
  const sectionOptions = resolveEntryFilter({
    options,
    showsAnyEntry: showEntry =>
      [diff.constructors, diff.functions, diff.strings].some(entities =>
        entities.some(entity => showDiffEntity(entity, diff, showEntry)),
      ),
    formatsAnyEntry:
      diff.constructors.length > 0 ||
      diff.functions.length > 0 ||
      diff.strings.length > 0,
    entities: `node`,
  })
  const retainerPaths = diffRetainerPaths(diff, sectionOptions)
  const { result: sections, edgeTypes } = ShownRetainerPaths.record(
    sectionOptions,
    shownPaths => [
      ...formatDiffConstructors({
        diff,
        hasLocation,
        retainerPaths,
        shownPaths,
        options: sectionOptions,
      }),
      ...formatDiffFunctions({
        diff,
        hasLocation,
        retainerPaths,
        shownPaths,
        options: sectionOptions,
      }),
      ...formatDiffStrings({ diff, shownPaths, options: sectionOptions }),
    ],
  )
  return [
    heading(1, `Heap snapshot diff`),
    ...formatDiffSummary(diff),
    ...formatBaseURLNote(options),
    ...formatSeveralPathsNote(edgeTypes),
    ...sections,
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
  `Held ${formatArrow(
    formatBytes(base.heldSize),
    formatBytes(current.heldSize),
  )}${formatChange(
    base.heldSize,
    current.heldSize,
    formatBytesDelta,
  )} over ${formatArrow(
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

  const baseTotal = base.heldSize
  const currentTotal = current.heldSize
  const categories = sortDiffCategories(nodeCategoryToStats, [
    { valueOf: ({ size }) => size, baseTotal, currentTotal },
  ])
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

const hasAnyLocation = ({
  constructors,
  functions,
}: {
  constructors: { location?: SourceLocation }[]
  functions: { location?: SourceLocation }[]
}): boolean =>
  constructors.some(constructor => constructor.location) ||
  functions.some(fn => fn.location)

/** A built value, and the edge types of the paths formatted to build it. */
type RecordedRetainerPaths<Result> = {
  result: Result
  edgeTypes: ReadonlySet<RetainerPathEdgeType>
}

type RetainerPathEdgeType = RetainerPathEdge[`type`]

/**
 * Formats the retainer paths a document shows, recording the types of their
 * edges so the document explains the notation it shows. Path text comes only
 * from here, and only while a recording runs.
 */
class ShownRetainerPaths {
  readonly #options: FormattingProfileToMdOptions
  readonly #recordings: Set<RetainerPathEdgeType>[] = []

  private constructor(options: FormattingProfileToMdOptions) {
    this.#options = options
  }

  /** Runs {@link build} with a new instance, as {@link record} does. */
  public static record<Result>(
    options: FormattingProfileToMdOptions,
    build: (paths: ShownRetainerPaths) => Result,
  ): RecordedRetainerPaths<Result> {
    const paths = new ShownRetainerPaths(options)
    return paths.record(() => build(paths))
  }

  /**
   * Runs {@link build}, recording the edge types of the paths it formats. A
   * path formatted in a nested recording is recorded in every enclosing one.
   */
  public record<Result>(build: () => Result): RecordedRetainerPaths<Result> {
    const edgeTypes = new Set<RetainerPathEdgeType>()
    this.#recordings.push(edgeTypes)
    try {
      return { result: build(), edgeTypes }
    } finally {
      this.#recordings.pop()
    }
  }

  /** Formats the retainer path of a node of {@link snapshot}. */
  public ofNode(
    snapshot: Pick<AggregatedHeapSnapshot, `retainerOf` | `retainerStepsOf`>,
    nodeOrdinal: number,
  ): string {
    return this.ofSteps(
      snapshot.retainerOf(nodeOrdinal),
      snapshot.retainerStepsOf(nodeOrdinal),
    )
  }

  /**
   * Formats a retainer path from {@link node} outward, ending at `(GC root)`
   * for a node the GC root holds directly. Each step shows its edge, when it
   * has a label, inside the arrow to its retainer (e.g. `Entry ←.value– Item`).
   */
  public ofSteps(
    node: { name?: string; nameLocation?: FileReference },
    steps: readonly RetainerPathStep[],
  ): string {
    if (this.#recordings.length === 0) {
      throw new Error(`retainer path formatted outside a recording`)
    }

    const nodeName =
      formatRetainerName({ ...node, name: node.name ?? `` }, this.#options) ||
      `(unknown)`
    return steps.length === 0
      ? `${nodeName} ← (GC root)`
      : steps.reduce((path, { edge, retainer }) => {
          for (const edgeTypes of this.#recordings) {
            edgeTypes.add(edge.type)
          }
          const edgeLabel = formatRetainerEdgeLabel(edge, this.#options)
          return `${path} ${edgeLabel ? `←${edgeLabel}–` : `←`} ${formatRetainerLabel(retainer, this.#options)}`
        }, nodeName)
  }
}

/**
 * The note explaining a step through several retainers, which any section
 * showing retainer paths can contain.
 */
const formatSeveralPathsNote = (
  edgeTypes: ReadonlySet<RetainerPathEdgeType>,
): RootContent[] =>
  edgeTypes.has(`several-retainers`)
    ? [
        paragraph(
          phrasing`${inlineCode(`B ←(several paths)– A`)} means ${inlineCode(`A`)} retains ${inlineCode(`B`)} only through other nodes, along several paths.`,
        ),
      ]
    : []

const formatLargestConstructors = ({
  snapshot,
  hasLocation,
  shownPaths,
  options,
}: {
  snapshot: AggregatedHeapSnapshot
  hasLocation: boolean
  shownPaths: ShownRetainerPaths
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
        shownPaths,
        options,
        size: SELF_SIZE,
      }),
      ...formatLargestSizeConstructors({
        snapshot,
        hasLocation,
        categories,
        shownPaths,
        options,
        size: RETAINED_SIZE,
      }),
    ],
  )
}

/** One constructor size, self or retained. */
type ConstructorSize = {
  sizeOf: (node: { selfSize: number; retainedSize: number }) => number
  prose: RankingProse
}

/** A ranking's heading, and the prose naming what it ranks and by what. */
type RankingProse = {
  headingLevel: number
  title: string
  plural: string
  singular: string

  /** What ranks the entities, e.g. "instance bytes, excluding referenced nodes". */
  description: string
}

const RETAINED_DESCRIPTION = `instance bytes, including nodes only the instances keep alive`

const SELF_SIZE: ConstructorSize = {
  sizeOf: node => node.selfSize,
  prose: {
    headingLevel: 3,
    title: `Self size`,
    plural: `Constructors`,
    singular: `constructor`,
    description: `instance bytes, excluding referenced nodes`,
  },
}

const RETAINED_SIZE: ConstructorSize = {
  sizeOf: node => node.retainedSize,
  prose: {
    headingLevel: 3,
    title: `Retained size`,
    plural: `Constructors`,
    singular: `constructor`,
    description: RETAINED_DESCRIPTION,
  },
}

const FUNCTIONS_PROSE: RankingProse = {
  headingLevel: 2,
  title: `Largest functions`,
  plural: `Functions`,
  singular: `function`,
  description: RETAINED_DESCRIPTION,
}

const STRINGS_PROSE: RankingProse = {
  headingLevel: 2,
  title: `Largest strings`,
  plural: `Strings`,
  singular: `string`,
  description: `bytes`,
}

/** A ranking's heading, followed by its ranking sentence. */
const formatRankingHeader = (prose: RankingProse): RootContent[] => [
  heading(prose.headingLevel, prose.title),
  paragraph(rankingSentence(prose.plural, prose.description)),
]

/**
 * The heading and sentence opening the retainer paths of a constructor
 * ranking.
 */
const retainerPathsHeader = (
  size: ConstructorSize,
  ranking: `with the largest` | `with the largest change in`,
): RootContent[] => [
  heading(4, `Retainer paths`),
  paragraph(
    `Retainer paths ${ranking} contribution to each constructor's ${size.prose.title.toLowerCase()}.`,
  ),
]

/**
 * The heading and sentence opening the retained nodes of a function ranking,
 * followed by {@link notes}.
 */
const retainedNodesHeader = (
  ranking: `with the largest` | `with the largest change in`,
  notes: PhrasingContent[] = [],
): RootContent[] => [
  heading(3, `Retained nodes`),
  paragraph(
    phrasing`Retained nodes ${ranking} contribution to each function's retained size.${notes}`,
  ),
]

const formatLargestSizeConstructors = ({
  snapshot,
  hasLocation,
  categories,
  shownPaths,
  options,
  size,
}: {
  snapshot: AggregatedHeapSnapshot
  hasLocation: boolean
  categories: HeapSnapshotNodeCategory[]
  shownPaths: ShownRetainerPaths
  options: FormattingProfileToMdOptions
  size: ConstructorSize
}): RootContent[] => {
  const { sizeOf, prose } = size
  const { heldSize, constructors, context } = snapshot

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
        shownPaths,
        hasLocation,
        options,
      }),
  )

  return [
    ...formatRankingHeader(prose),
    ...formatRankingTables({
      ranking,
      formatEntityTable: entities =>
        formatTable(
          constructorColumns(hasLocation, options),
          entities.map(constructor => ({
            entity: constructor,
            size: sizeOf(constructor),
            total: heldSize,
            instanceCount: constructor.instances.length,
          })),
        ),
      headingLevel: 4,
      selfValueNoun: `self size`,
      minCategoryShare: options.minCategoryShare,
    }),
    ...formatSectionGroup(
      retainerPathsHeader(size, `with the largest`),
      largestInstanceSections,
    ),
  ]
}

const formatLargestConstructorInstances = ({
  constructor,
  snapshot,
  sizeOf,
  shownPaths,
  hasLocation,
  options,
}: {
  constructor: AggregatedHeapSnapshotConstructor
  snapshot: AggregatedHeapSnapshot
  sizeOf: ConstructorSize[`sizeOf`]
  shownPaths: ShownRetainerPaths
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const largestInstanceGroups = selectLargestInstanceGroups({
    instances: constructor.instances.filter(instance =>
      options.showEntry(instance, snapshot.context),
    ),
    sizeOf,
    retainerPathOf: nodeOrdinal => shownPaths.ofNode(snapshot, nodeOrdinal),
    topN: Math.ceil(options.topN / 4),
  }).sort((group1, group2) => group2.size - group1.size)
  if (largestInstanceGroups.length === 0) {
    return []
  }

  const constructorSize = sizeOf(constructor)
  return [
    formatEntityHeading(5, constructor, hasLocation, options),
    formatTable(
      instanceGroupColumns,
      largestInstanceGroups.map(group => ({
        size: group.size,
        total: constructorSize,
        instanceCount: group.instanceCount,
        retainerPath: group.retainerPath,
      })),
    ),
  ]
}

/** A group of instances with the same retainer path. */
type InstanceGroup = {
  retainerPath: string
  instanceCount: number
  size: number
}

const selectLargestInstanceGroups = ({
  instances,
  sizeOf,
  retainerPathOf,
  topN,
}: {
  instances: AggregatedHeapSnapshotNode[]
  sizeOf: (instance: AggregatedHeapSnapshotNode) => number

  /** Called only for an instance that joins a returned group. */
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

const formatLargestFunctions = ({
  snapshot,
  hasLocation,
  shownPaths,
  options,
}: {
  snapshot: AggregatedHeapSnapshot
  hasLocation: boolean
  shownPaths: ShownRetainerPaths
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const { heldSize, functions, context } = snapshot

  const largestFunctions = selectTopN(
    functions.filter(fn =>
      options.showEntry({ ...fn, id: fn.largestInstanceOrdinal }, context),
    ),
    options.topN,
    fn => fn.retainedSize,
  )
  if (largestFunctions.length === 0) {
    return []
  }

  const retainedSections = largestFunctions.flatMap(fn =>
    formatFunctionRetainedNodes({
      fn,
      snapshot,
      shownPaths,
      hasLocation,
      options,
    }),
  )

  const pathOf = new RetainerPaths(options).pathOfNodeIn(snapshot)
  return [
    ...formatRankingHeader(FUNCTIONS_PROSE),
    formatTable(
      functionColumns(hasLocation, options),
      largestFunctions.map(fn => ({
        entity: fn,
        size: fn.retainedSize,
        total: heldSize,
        instanceCount: fn.instanceOrdinals.length,
        pathCount: new Set(fn.instanceOrdinals.map(pathOf)).size,
        examplePath: shownPaths.ofNode(snapshot, fn.largestInstanceOrdinal),
      })),
    ),
    ...formatSectionGroup(
      retainedNodesHeader(`with the largest`),
      retainedSections,
    ),
  ]
}

const formatFunctionRetainedNodes = ({
  fn,
  snapshot,
  shownPaths,
  hasLocation,
  options,
}: {
  fn: AggregatedHeapSnapshotFunction
  snapshot: AggregatedHeapSnapshot
  shownPaths: ShownRetainerPaths
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const retainedNodes = selectTopN(
    Array.from(
      shownRetainedNodes(fn.instanceOrdinals, snapshot, options),
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
        path: shownPaths.ofNode(snapshot, node.id),
      })),
    ),
  ]
}

const formatLargestStrings = ({
  snapshot,
  shownPaths,
  options,
}: {
  snapshot: AggregatedHeapSnapshot
  shownPaths: ShownRetainerPaths
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const { heldSize, strings, context } = snapshot
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
    ...formatRankingHeader(STRINGS_PROSE),
    ...formatRankingTables({
      ranking,
      formatEntityTable: entities =>
        formatTable(
          stringColumns(hasValues),
          entities.map(string => ({
            name: string.name,
            size: string.selfSize,
            total: heldSize,
            path: shownPaths.ofNode(snapshot, string.id),
          })),
        ),
      headingLevel: 3,
      selfValueNoun: `self size`,
      minCategoryShare: options.minCategoryShare,
    }),
  ]
}

const formatDiffConstructors = ({
  diff,
  hasLocation,
  retainerPaths,
  shownPaths,
  options,
}: {
  diff: AggregatedHeapSnapshotDiff
  hasLocation: boolean
  retainerPaths: DiffRetainerPaths
  shownPaths: ShownRetainerPaths
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  // Resolved once for both rankings: a category qualifies for a subsection by
  // its share of the shown constructors' summed self size, which the ranking it
  // appears under doesn't change.
  const categories = subsectionDiffCategories({
    entries: diff.constructors.filter(entity =>
      showDiffEntity(entity, diff, options.showEntry),
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
        shownPaths,
        options,
        size: SELF_SIZE,
      }),
      ...formatDiffSizeConstructors({
        diff,
        hasLocation,
        categories,
        instanceGroupDiffs,
        paths: retainerPaths.paths,
        shownPaths,
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
  shownPaths,
  options,
  size,
}: {
  diff: AggregatedHeapSnapshotDiff
  hasLocation: boolean
  categories: HeapSnapshotNodeCategory[]
  instanceGroupDiffs: InstanceGroupDiffs
  paths: RetainerPaths
  shownPaths: ShownRetainerPaths
  options: FormattingProfileToMdOptions
  size: ConstructorSize
}): RootContent[] => {
  const { sizeOf, prose } = size
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
    base: sideRowOf(diff.base.heldSize, base),
    current: sideRowOf(diff.current.heldSize, current),
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
      shownPaths,
      hasLocation,
      options,
    }),
  )

  return formatDiffEntitySections({
    prose,
    columns: constructorColumns(hasLocation, options),
    hasActive,
    increases,
    decreases,
    categoryRankings,
    minCategoryShare: options.minCategoryShare,
    rowOf: ({ entity }) => rowOf(entity),
    detailSections: formatSectionGroup(
      retainerPathsHeader(size, `with the largest change in`),
      instanceSections,
    ),
  })
}

const formatDiffConstructorInstances = ({
  constructor,
  groupDiffs,
  paths,
  sizeOf,
  shownPaths,
  hasLocation,
  options,
}: {
  constructor: AggregatedHeapSnapshotEntityDiff<DiffedHeapSnapshotConstructor>
  groupDiffs: EntryDiff<DiffedInstanceGroup>[]
  paths: RetainerPaths
  sizeOf: ConstructorSize[`sizeOf`]
  shownPaths: ShownRetainerPaths
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] =>
  formatDiffEntityGroups({
    entity: constructor,
    groupDiffs,
    sizeOf,
    totalOf: sizeOf,
    headingLevel: 5,
    columns: instanceGroupColumns,
    rowOf: (group, size, total) => ({
      size,
      total,
      instanceCount: group.instanceCount,
      retainerPath: shownPaths.ofSteps(constructor, paths.stepsOf(group.path)),
    }),
    hasLocation,
    options,
  })

const formatDiffFunctions = ({
  diff,
  hasLocation,
  retainerPaths,
  shownPaths,
  options,
}: {
  diff: AggregatedHeapSnapshotDiff
  hasLocation: boolean
  retainerPaths: DiffRetainerPaths
  shownPaths: ShownRetainerPaths
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
    base:
      base && functionRowOf(base, diff.base, retainerPaths.base, shownPaths),
    current:
      current &&
      functionRowOf(current, diff.current, retainerPaths.current, shownPaths),
  })

  const retained = shownPaths.record(() =>
    shownDiffEntities({
      improvement: BYTES_METRIC.improvement,
      increases,
      decreases,
    }).flatMap(({ entity }) =>
      formatDiffFunctionRetainedNodes({
        diff,
        fn: entity,
        retainerPaths,
        shownPaths,
        hasLocation,
        options,
      }),
    ),
  )

  return formatDiffEntitySections({
    prose: FUNCTIONS_PROSE,
    columns: functionColumns(hasLocation, options),
    hasActive,
    increases,
    decreases,
    minCategoryShare: options.minCategoryShare,
    rowOf: ({ entity }) => rowOf(entity),
    detailSections: formatSectionGroup(
      retainedNodesHeader(
        `with the largest change in`,
        retained.edgeTypes.has(`any-element`)
          ? phrasing` ${inlineCode(`[]`)} stands for any element of an array.`
          : [],
      ),
      retained.result,
    ),
  })
}

/** One side's row of a function, counting its distinct paths by {@link pathOf}. */
const functionRowOf = (
  entity: DiffedHeapSnapshotFunction,
  snapshot: AggregatedHeapSnapshot,
  pathOf: (nodeOrdinal: number) => number,
  shownPaths: ShownRetainerPaths,
): FunctionRow => ({
  entity,
  size: entity.retainedSize,
  total: snapshot.heldSize,
  instanceCount: entity.instanceCount,
  pathCount: new Set(entity.instanceOrdinals.map(pathOf)).size,
  examplePath: shownPaths.ofNode(snapshot, entity.id),
})

const formatDiffFunctionRetainedNodes = ({
  diff,
  fn,
  retainerPaths,
  shownPaths,
  hasLocation,
  options,
}: {
  diff: AggregatedHeapSnapshotDiff
  fn: AggregatedHeapSnapshotEntityDiff<DiffedHeapSnapshotFunction>
  retainerPaths: DiffRetainerPaths
  shownPaths: ShownRetainerPaths
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
    columns: retainedColumns(`Path to function`, hasLocation, options),
    rowOf: (group, size, total) => ({
      entity: group.node,
      path: shownPaths.ofSteps(
        group.node,
        retainerPaths.within.paths.stepsOf(group.path),
      ),
      size,
      total,
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

const formatDiffStrings = ({
  diff,
  shownPaths,
  options,
}: {
  diff: AggregatedHeapSnapshotDiff
  shownPaths: ShownRetainerPaths
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const categoryOf = (entity: AggregatedHeapSnapshotEntityDiff) =>
    entity.category
  const categories = subsectionDiffCategories({
    entries: diff.strings.filter(entity =>
      showDiffEntity(entity, diff, options.showEntry),
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
    base: base && nodeRowOf(base, diff.base, shownPaths),
    current: current && nodeRowOf(current, diff.current, shownPaths),
  })

  return formatDiffEntitySections({
    prose: STRINGS_PROSE,
    // Diffed strings are matched by value, so they always have a value.
    columns: stringColumns(true),
    hasActive,
    increases,
    decreases,
    categoryRankings,
    minCategoryShare: options.minCategoryShare,
    rowOf: ({ entity }) => rowOf(entity),
  })
}

const nodeRowOf = (
  entity: DiffedHeapSnapshotEntity,
  snapshot: AggregatedHeapSnapshot,
  shownPaths: ShownRetainerPaths,
): NodeRow => ({
  name: entity.name,
  size: entity.selfSize,
  total: snapshot.heldSize,
  path: shownPaths.ofNode(snapshot, entity.id),
})

/**
 * Formats one diffed entity ranking under its {@link RankingProse}.
 *
 * Every heap snapshot ranking measures bytes, so a decrease is an improvement
 * in all of them.
 */
const formatDiffEntitySections = <Entity, Row>({
  prose,
  ...args
}: {
  prose: RankingProse
  columns: Table<Row>
  hasActive: boolean
  increases: Entity[]
  decreases: Entity[]
  categoryRankings?: DiffCategoryRanking<Entity>[]
  minCategoryShare: number
  rowOf: (entity: Entity) => Diff<Row>
  /** The sections breaking down the entities the rankings show. */
  detailSections?: RootContent[]
}): RootContent[] =>
  formatDiffMeasureSections({
    ...args,
    headingLevel: prose.headingLevel,
    title: prose.title,
    description: prose.description,
    entities: { singular: prose.singular, plural: prose.plural },
    improvement: BYTES_METRIC.improvement,
    selfValueNoun: `self size`,
  })

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
