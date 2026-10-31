import type { Heading, PhrasingContent, RootContent } from 'mdast'
import {
  formatArrow,
  formatBytes,
  formatBytesDelta,
  formatCount,
  formatCountArrow,
} from '../../helpers/format.ts'
import { selectTopN } from '../../helpers/heap.ts'
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
import { formatChange } from '../change.ts'
import type { EntryDiff } from '../diff.ts'
import {
  breakdownLimit,
  formatBaseURLNote,
  formatDiffMeasureSections,
  rankDiffEntities,
  rankingSentence,
  resolveEntryFilter,
  selectDiffEntities,
  selectLargestChanges,
  showDiffEntity,
} from '../format.ts'
import type {
  ActiveDiffEntity,
  DiffEntityCategories,
  DiffEntityRanking,
  DiffMeasureSectionsArgs,
} from '../format.ts'
import { BYTES_METRIC } from '../metrics.ts'
import { formatDiffTable, formatTable } from '../table.ts'
import type { Table } from '../table.ts'
import type {
  AggregatedHeapSnapshot,
  AggregatedHeapSnapshotConstructor,
  AggregatedHeapSnapshotFunction,
  AggregatedHeapSnapshotString,
  RetainerPathEdge,
  RetainerPathStep,
  RetainingEntity,
} from './aggregate.ts'
import {
  formatRetainerEdgeLabel,
  formatRetainerLabel,
  formatRetainerName,
  shownRetainedNodes,
} from './aggregate.ts'
import {
  diffRetainerPaths,
  groupInstancesByPath,
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
  PathSnapshot,
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
      snapshot.functions.some(fn => showEntry(fn, snapshot.context)) ||
      snapshot.strings.some(string => showEntry(string, snapshot.context)),
    entities: `node`,
  })
  const { result: sections, edgeTypes } = ShownRetainerPaths.record(
    new RetainerPaths(sectionOptions),
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
        `node`,
      )} and ${formatCount(edgeCount, `edge`)}.`,
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
    retainerPaths.paths,
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
  )} over ${formatCountArrow(
    base.nodeCount,
    current.nodeCount,
    `node`,
  )} and ${formatCountArrow(base.edgeCount, current.edgeCount, `edge`)}.`

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
  readonly #paths: RetainerPaths
  readonly #recordings: Set<RetainerPathEdgeType>[] = []

  private constructor(paths: RetainerPaths) {
    this.#options = paths.options
    this.#paths = paths
  }

  /**
   * Runs {@link build} with a new instance reading nodes' paths from
   * {@link paths} and formatting them under its options, as {@link record}
   * does.
   */
  public static record<Result>(
    paths: RetainerPaths,
    build: (paths: ShownRetainerPaths) => Result,
  ): RecordedRetainerPaths<Result> {
    const shownPaths = new ShownRetainerPaths(paths)
    return shownPaths.record(() => build(shownPaths))
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

  /**
   * Returns the function that interns the retainer path of a node of
   * {@link snapshot}, the path {@link ofNode} formats.
   */
  public pathOf(snapshot: PathSnapshot): (nodeOrdinal: number) => number {
    return this.#paths.pathOfNodeIn(snapshot)
  }

  /** Formats the retainer path of a node of {@link snapshot}. */
  public ofNode(snapshot: PathSnapshot, nodeOrdinal: number): string {
    return this.ofSteps(
      snapshot.retainerOf(nodeOrdinal),
      this.#paths.stepsOf(this.pathOf(snapshot)(nodeOrdinal)),
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
  /** A constructor's size in {@link snapshot}. */
  sizeOf: (
    constructor: SizedEntity,
    snapshot: Pick<AggregatedHeapSnapshot, `retainedSizeOf`>,
  ) => number

  /**
   * A size at most {@link sizeOf}, which selects the constructors a ranking
   * computes {@link sizeOf} for.
   */
  minSizeOf: (constructor: SizedEntity) => number

  groupSizeOf: (group: { selfSize: number; retainedSize: number }) => number
  prose: RankingProse
}

type SizedEntity = RetainingEntity & { selfSize: number }

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
  sizeOf: constructor => constructor.selfSize,
  minSizeOf: constructor => constructor.selfSize,
  groupSizeOf: group => group.selfSize,
  prose: {
    headingLevel: 3,
    title: `Self size`,
    plural: `Constructors`,
    singular: `constructor`,
    description: `instance bytes, excluding referenced nodes`,
  },
}

const RETAINED_SIZE: ConstructorSize = {
  sizeOf: (constructor, snapshot) => snapshot.retainedSizeOf(constructor),
  minSizeOf: constructor => constructor.minRetainedSize,
  groupSizeOf: group => group.retainedSize,
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
  const { prose } = size
  const sizeOf = (constructor: AggregatedHeapSnapshotConstructor) =>
    size.sizeOf(constructor, snapshot)
  const { heldSize, constructors, context } = snapshot

  const ranking = rankEntitiesBySize({
    entities: constructors.filter(constructor =>
      options.showEntry(constructor, context),
    ),
    categories,
    minSizeOf: size.minSizeOf,
    sizeOf,
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
        size,
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
  size,
  shownPaths,
  hasLocation,
  options,
}: {
  constructor: AggregatedHeapSnapshotConstructor
  snapshot: AggregatedHeapSnapshot
  size: ConstructorSize
  shownPaths: ShownRetainerPaths
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const largestInstanceGroups = selectTopN(
    groupInstancesByPath(
      constructor.instances.filter(instance =>
        options.showEntry(instance, snapshot.context),
      ),
      shownPaths.pathOf(snapshot),
    ),
    breakdownLimit(options),
    size.groupSizeOf,
  )
  if (largestInstanceGroups.length === 0) {
    return []
  }

  const constructorSize = size.sizeOf(constructor, snapshot)
  return [
    formatEntityHeading(5, constructor, hasLocation, options),
    formatTable(
      instanceGroupColumns,
      largestInstanceGroups.map(group => ({
        size: size.groupSizeOf(group),
        total: constructorSize,
        instanceCount: group.instanceCount,
        retainerPath: shownPaths.ofNode(snapshot, group.nodeOrdinal),
      })),
    ),
  ]
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
  const { functions, context } = snapshot

  const largestFunctions = selectTopN(
    selectTopN(
      functions.filter(fn => options.showEntry(fn, context)),
      options.topN,
      fn => fn.minRetainedSize,
    ),
    options.topN,
    snapshot.retainedSizeOf,
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

  return [
    ...formatRankingHeader(FUNCTIONS_PROSE),
    formatTable(
      functionColumns(hasLocation, options),
      largestFunctions.map(fn => functionRowOf(fn, snapshot, shownPaths)),
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
    breakdownLimit(options),
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
        total: snapshot.retainedSizeOf(fn),
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
  const { prose } = size
  const ranking = selectDiffEntitiesBySize({
    entities: diff.constructors,
    diff,
    options,
    categories: { categories, categoryOf: entity => entity.category },
    minSizeOf: size.minSizeOf,
    sizeOf: size.sizeOf,
  })

  const sideRowOf = (
    snapshot: AggregatedHeapSnapshot,
    entity?: DiffedHeapSnapshotConstructor,
  ) =>
    entity && {
      entity,
      size: size.sizeOf(entity, snapshot),
      total: snapshot.heldSize,
      instanceCount: entity.instanceCount,
    }
  const rowOf = ({
    base,
    current,
  }: AggregatedHeapSnapshotEntityDiff<DiffedHeapSnapshotConstructor>) => ({
    base: sideRowOf(diff.base, base),
    current: sideRowOf(diff.current, current),
  })

  return formatDiffEntitySections({
    prose,
    columns: constructorColumns(hasLocation, options),
    ranking,
    rowOf,
    formatDetailSections: constructors =>
      formatSectionGroup(
        retainerPathsHeader(size, `with the largest change in`),
        constructors.flatMap(constructor =>
          formatDiffConstructorInstances({
            diff,
            constructor,
            groupDiffs: instanceGroupDiffs(constructor),
            paths,
            size,
            shownPaths,
            hasLocation,
            options,
          }),
        ),
      ),
  })
}

const formatDiffConstructorInstances = ({
  diff,
  constructor,
  groupDiffs,
  paths,
  size,
  shownPaths,
  hasLocation,
  options,
}: {
  diff: AggregatedHeapSnapshotDiff
  constructor: AggregatedHeapSnapshotEntityDiff<DiffedHeapSnapshotConstructor>
  groupDiffs: EntryDiff<DiffedInstanceGroup>[]
  paths: RetainerPaths
  size: ConstructorSize
  shownPaths: ShownRetainerPaths
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] =>
  formatDiffEntityGroups({
    entity: constructor,
    groupDiffs,
    sizeOf: size.groupSizeOf,
    totalOf: side => size.sizeOf(constructor[side]!, diff[side]),
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
  const ranking = selectDiffEntitiesBySize({
    entities: diff.functions,
    diff,
    options,
    minSizeOf: fn => fn.minRetainedSize,
    sizeOf: (fn, snapshot) => snapshot.retainedSizeOf(fn),
  })

  const rowOf = ({
    base,
    current,
  }: AggregatedHeapSnapshotEntityDiff<DiffedHeapSnapshotFunction>) => ({
    base: base && functionRowOf(base, diff.base, shownPaths),
    current: current && functionRowOf(current, diff.current, shownPaths),
  })

  return formatDiffEntitySections({
    prose: FUNCTIONS_PROSE,
    columns: functionColumns(hasLocation, options),
    ranking,
    rowOf,
    formatDetailSections: functions => {
      const retained = shownPaths.record(() =>
        functions.flatMap(fn =>
          formatDiffFunctionRetainedNodes({
            diff,
            fn,
            retainerPaths,
            shownPaths,
            hasLocation,
            options,
          }),
        ),
      )
      return formatSectionGroup(
        retainedNodesHeader(
          `with the largest change in`,
          retained.edgeTypes.has(`any-element`)
            ? phrasing` ${inlineCode(`[]`)} stands for any element of an array.`
            : [],
        ),
        retained.result,
      )
    },
  })
}

/** A function's row on one side, counting its distinct retainer paths. */
const functionRowOf = (
  entity: AggregatedHeapSnapshotFunction | DiffedHeapSnapshotFunction,
  snapshot: AggregatedHeapSnapshot,
  shownPaths: ShownRetainerPaths,
): FunctionRow => ({
  entity,
  size: snapshot.retainedSizeOf(entity),
  total: snapshot.heldSize,
  instanceCount: entity.instanceOrdinals.length,
  pathCount: new Set(entity.instanceOrdinals.map(shownPaths.pathOf(snapshot)))
    .size,
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
    totalOf: side => diff[side].retainedSizeOf(fn[side]!),
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
 * It groups every shown node, because a group's change needs its whole
 * size on both sides. It formats only the paths of the groups it shows.
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

  /** The size a group's share is of, on a side the entity is present on. */
  totalOf: (side: `base` | `current`) => number
  headingLevel: Heading[`depth`]
  columns: Table<Row>
  rowOf: (group: Group, size: number, total: number) => Row
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const changedGroups = selectLargestChanges(
    groupDiffs,
    breakdownLimit(options),
    ({ base, current }) =>
      (current ? sizeOf(current) : 0) - (base ? sizeOf(base) : 0),
  )
  if (changedGroups.length === 0) {
    return []
  }

  const sideRowOf = (side: `base` | `current`, group: Group | undefined) =>
    entity[side] && group && rowOf(group, sizeOf(group), totalOf(side))
  return [
    formatEntityHeading(headingLevel, entity, hasLocation, options),
    formatDiffTable(
      columns,
      changedGroups.map(({ base, current }) => ({
        base: sideRowOf(`base`, base),
        current: sideRowOf(`current`, current),
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

  const ranking = selectDiffEntities(
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
    ranking,
    rowOf,
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
 * Ranks entities by {@link sizeOf}, computing it only for the entities
 * {@link minSizeOf}, a size at most {@link sizeOf}, ranks.
 */
const rankEntitiesBySize = <
  Entity extends { category: HeapSnapshotNodeCategory },
>({
  entities,
  categories,
  minSizeOf,
  sizeOf,
  topN,
}: {
  entities: Entity[]
  categories: HeapSnapshotNodeCategory[]
  minSizeOf: (entity: Entity) => number
  sizeOf: (entity: Entity) => number
  topN: number
}) =>
  rankEntities({
    entities: rankEntities({ entities, categories, valueOf: minSizeOf, topN })
      .displayedEntities,
    categories,
    valueOf: sizeOf,
    topN,
  })

/**
 * Ranks diffed entities by the change in {@link sizeOf}, computing it only for
 * the entities the change in {@link minSizeOf}, a size at most
 * {@link sizeOf}, ranks.
 */
const selectDiffEntitiesBySize = <Entity extends DiffedHeapSnapshotEntity>({
  entities,
  diff,
  options,
  categories,
  minSizeOf,
  sizeOf,
}: {
  entities: AggregatedHeapSnapshotEntityDiff<Entity>[]
  diff: AggregatedHeapSnapshotDiff
  options: FormattingProfileToMdOptions
  categories?: DiffEntityCategories<AggregatedHeapSnapshotEntityDiff<Entity>>
  minSizeOf: (entity: Entity) => number
  sizeOf: (entity: Entity, snapshot: AggregatedHeapSnapshot) => number
}): DiffEntityRanking<AggregatedHeapSnapshotEntityDiff<Entity>> => {
  const selected = selectDiffEntities(
    entities.map(entity => ({
      entity,
      baseValue: entity.base ? minSizeOf(entity.base) : 0,
      currentValue: entity.current ? minSizeOf(entity.current) : 0,
    })),
    diff,
    options,
    categories,
  )
  const displayed = new Set(
    [
      selected.increases,
      selected.decreases,
      ...selected.categoryRankings.flatMap(({ increases, decreases }) => [
        increases,
        decreases,
      ]),
    ].flatMap(items => items.map(({ entity }) => entity)),
  )
  return {
    ...rankDiffEntities(
      Array.from(
        displayed,
        (
          entity,
        ): ActiveDiffEntity<AggregatedHeapSnapshotEntityDiff<Entity>> => ({
          entity,
          baseValue: entity.base ? sizeOf(entity.base, diff.base) : 0,
          currentValue: entity.current
            ? sizeOf(entity.current, diff.current)
            : 0,
        }),
      ),
      options,
      categories,
    ),
    hasActive: selected.hasActive,
  }
}

/**
 * Formats one diffed entity ranking under its {@link RankingProse}.
 *
 * Every heap snapshot ranking measures bytes, so a decrease is an improvement
 * in all of them.
 */
const formatDiffEntitySections = <Entity, Row>({
  prose,
  ...args
}: { prose: RankingProse } & Pick<
  DiffMeasureSectionsArgs<Entity, Row>,
  `columns` | `ranking` | `rowOf` | `formatDetailSections`
>): RootContent[] =>
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
