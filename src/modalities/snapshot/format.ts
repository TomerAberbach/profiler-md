import type { Heading, RootContent } from 'mdast'
import { DynamicTypedArray } from '../../helpers/array.ts'
import {
  formatArrow,
  formatBytes,
  formatBytesDelta,
  formatChange,
  formatCount,
  formatPercent,
} from '../../helpers/format.ts'
import { MaxHeap, selectTopN } from '../../helpers/heap.ts'
import {
  formatSectionGroup,
  heading,
  inlineCode,
  nameLocationPhrasing,
  paragraph,
} from '../../helpers/markdown.ts'
import { formatSourceLocation } from '../../location.ts'
import type { FileReference, SourceLocation } from '../../location.ts'
import { isSyntheticEntry } from '../../options.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import type { Diff } from '../diff.ts'
import {
  admitDiffEntriesForUnionCoverage,
  admitEntriesForCoverage,
  admitEntriesForUnionCoverage,
  diffSidesOf,
  relaxedOptions,
  selectDiffEntities,
  showDiffEntity,
} from '../format.ts'
import type { CoverageRelaxation } from '../format.ts'
import { formatDiffTable, formatTable } from '../table.ts'
import type { Table } from '../table.ts'
import type {
  AggregatedClosure,
  AggregatedConstructor,
  AggregatedHeapSnapshot,
  AggregatedSnapshotNode,
  SnapshotEntityGroup,
} from './aggregate.ts'
import type {
  AggregatedHeapSnapshotDiff,
  AggregatedSnapshotEntityDiff,
  DiffedSnapshotEntity,
} from './diff.ts'
import {
  categoryColumns,
  closureColumns,
  constructorColumns,
  displayName,
  instanceColumns,
  retainedColumns,
  stringColumns,
} from './table.ts'
import type { ClosureRow, NodeRow } from './table.ts'

export const formatHeapSnapshot = (
  snapshot: AggregatedHeapSnapshot,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const hasLocation = hasAnyLocation(snapshot)
  return [
    heading(1, `Heap snapshot`),
    ...formatOverallSummary(snapshot),
    ...formatLargestConstructors({ snapshot, hasLocation, options }),
    ...formatLargestClosures({ snapshot, hasLocation, options }),
    ...formatLargestStrings({ snapshot, options }),
  ]
}

/**
 * Relaxes the entry filter when the group's shown entities fall short of the
 * coverage target: the largest hidden entities are admitted, and a note
 * reporting the pre-relaxation coverage leads the group's sections. Coverage
 * is measured on the union of the group's retained sizes, so nested retained
 * sets never double-count. Returns {@link options} unchanged, with no notes,
 * when coverage already suffices.
 *
 * Each group relaxes independently: strings are excluded entirely (the entry
 * filter targets code entities), and one group's entities never cover for the
 * other's.
 */
const relaxGroupEntityFilter = ({
  snapshot,
  group,
  entities,
  options,
}: {
  snapshot: AggregatedHeapSnapshot
  group: SnapshotEntityGroup
  entities: readonly (AggregatedConstructor | AggregatedClosure)[]
  options: FormattingProfileToMdOptions
}): {
  sectionOptions: FormattingProfileToMdOptions
  notes: RootContent[]
} => {
  const relaxation = admitEntriesForUnionCoverage(entities, {
    isShown: options.showEntry,
    isAdmissible: entity => !isSyntheticEntry(entity),
    staticValueOf: entity => entity.retainedSize,
    union: snapshot.retainedUnionOf(group, options.showEntry),
    coverageTarget: options.coverageTarget,
    topN: options.topN,
  })
  return {
    sectionOptions: relaxedOptions(
      options,
      relaxation && new Set(relaxation.admitted),
    ),
    notes: relaxation ? [formatCoverageNote(group, relaxation.coverage)] : [],
  }
}

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
  const { sectionOptions, notes } = relaxGroupEntityFilter({
    snapshot,
    group: `constructors`,
    entities: snapshot.constructors,
    options,
  })
  return formatSectionGroup(
    [heading(2, `Largest constructors`), ...notes],
    [
      ...formatLargestSizeConstructors({
        snapshot,
        hasLocation,
        options: sectionOptions,
        size: SELF_SIZE,
      }),
      ...formatLargestSizeConstructors({
        snapshot,
        hasLocation,
        options: sectionOptions,
        size: RETAINED_SIZE,
      }),
    ],
  )
}

/**
 * The size accessor, heading, and phrasing for one constructor size (self or
 * retained).
 */
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
  options,
  size: { sizeOf, formatHeader, description },
}: {
  snapshot: AggregatedHeapSnapshot
  hasLocation: boolean
  options: FormattingProfileToMdOptions
  size: ConstructorSize
}): RootContent[] => {
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
    formatTable(
      constructorColumns(hasLocation, options),
      largestConstructors.map(constructor => ({
        entity: constructor,
        size: sizeOf(constructor),
        total: totalSize,
        instanceCount: constructor.instances.length,
      })),
    ),
    ...formatSectionGroup(
      [
        heading(4, `Instances`),
        paragraph(
          `Instances ranked by contribution to each constructor's ${description}.`,
        ),
      ],
      largestInstanceSections,
    ),
  ]
}

const formatLargestConstructorInstances = ({
  constructor,
  snapshot: { retainerPathOf },
  sizeOf,
  hasLocation,
  options,
}: {
  constructor: AggregatedConstructor
  snapshot: AggregatedHeapSnapshot
  sizeOf: (node: AggregatedSnapshotNode) => number
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const largestInstanceGroups = selectLargestInstancesByRetainerPath({
    instances: constructor.instances,
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
  instances: AggregatedSnapshotNode[]
  sizeOf: (instance: AggregatedSnapshotNode) => number
  retainerPathOf: (nodeOrdinal: number) => string
  topN: number
}): InstanceGroup[] => {
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

/** A group of instances with the same retainer path. */
type InstanceGroup = {
  /** The retainer path to every instance in the group. */
  retainerPath: string

  instanceCount: number

  /** The combined size of the instances in the group. */
  size: number
}

const formatLargestClosures = ({
  snapshot,
  hasLocation,
  options,
}: {
  snapshot: AggregatedHeapSnapshot
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const { totalSize, closures, retainerPathOf } = snapshot
  const { sectionOptions, notes } = relaxGroupEntityFilter({
    snapshot,
    group: `closures`,
    entities: closures,
    options,
  })

  const largestClosures = selectTopN(
    closures.filter(sectionOptions.showEntry),
    sectionOptions.topN,
    closure => closure.retainedSize,
  )
  if (largestClosures.length === 0) {
    return []
  }

  const retainedObjects = largestClosures.map(closure =>
    formatClosureRetainedObjects({
      closure,
      snapshot,
      hasLocation,
      options: sectionOptions,
    }),
  )
  const anyRetainedAdmitted = retainedObjects.some(({ admitted }) => admitted)
  const retainedSections = retainedObjects.flatMap(({ content }) => content)

  return [
    ...formatLargestClosuresHeading({ isEmptyDiff: false }),
    ...notes,
    formatTable(
      closureColumns(hasLocation, sectionOptions),
      largestClosures.map(closure => ({
        entity: closure,
        size: closure.retainedSize,
        total: totalSize,
        instanceCount: closure.instanceIds.length,
        pathCount: new Set(
          closure.instanceIds.map(nodeOrdinal =>
            retainerPathOf(nodeOrdinal, sectionOptions),
          ),
        ).size,
        examplePath: retainerPathOf(closure.id, sectionOptions),
      })),
    ),
    ...formatSectionGroup(
      [
        heading(3, `Retained`),
        paragraph(
          `Nodes ranked by contribution to each closure's retained size.${anyRetainedAdmitted ? ` Where shown nodes fell short of the coverage target, the largest hidden nodes are also shown.` : ``}`,
        ),
      ],
      retainedSections,
    ),
  ]
}

const formatClosureRetainedObjects = ({
  closure,
  snapshot: { retainedNodesOf, retainerPathOf },
  hasLocation,
  options,
}: {
  closure: AggregatedClosure
  snapshot: AggregatedHeapSnapshot
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): { content: RootContent[]; admitted: boolean } => {
  const allRetainedNodes = collectRetainedNodes(
    closure,
    retainedNodesOf,
    options,
  )
  const topN = Math.ceil(options.topN / 4)
  const relaxation = admitEntriesForCoverage(allRetainedNodes, {
    isShown: node => options.showEntry(node),
    isAdmissible: node => !isSyntheticEntry(node),
    selfValueOf: node => node.selfSize,
    coverageTarget: options.coverageTarget,
    topN,
  })
  const shownNodes = allRetainedNodes.filter(node => options.showEntry(node))
  const retainedNodes = selectTopN(
    relaxation ? [...shownNodes, ...relaxation.admitted] : shownNodes,
    topN,
    node => node.selfSize,
  )
  if (retainedNodes.length === 0) {
    return { content: [], admitted: false }
  }

  return {
    content: [
      formatEntityHeading(4, closure, hasLocation, options),
      formatTable(
        retainedColumns,
        retainedNodes.map(node => ({
          name: node.name,
          size: node.selfSize,
          total: closure.retainedSize,
          path: retainerPathOf(node.id, options),
        })),
      ),
    ],
    admitted: relaxation !== undefined,
  }
}

/**
 * The nodes retained by the closure's instances, deduplicated across
 * instances.
 */
const collectRetainedNodes = (
  closure: AggregatedClosure,
  retainedNodesOf: AggregatedHeapSnapshot[`retainedNodesOf`],
  options: FormattingProfileToMdOptions,
): AggregatedSnapshotNode[] => {
  const instanceIdToSeen = new DynamicTypedArray(new Uint8Array(256))
  const retainedNodes: AggregatedSnapshotNode[] = []
  for (const instanceId of closure.instanceIds) {
    for (const node of retainedNodesOf(instanceId, options)) {
      const seen = instanceIdToSeen.ensureCapacity(node.id + 1)
      if (seen[node.id]) {
        continue
      }
      seen[node.id] = 1
      retainedNodes.push(node)
    }
  }
  return retainedNodes
}

const formatLargestStrings = ({
  snapshot: { totalSize, strings, retainerPathOf },
  options,
}: {
  snapshot: AggregatedHeapSnapshot
  options: FormattingProfileToMdOptions
}): RootContent[] => {
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
      stringColumns(hasValues),
      largestStrings.map(string => ({
        name: string.name,
        size: string.selfSize,
        total: totalSize,
        path: retainerPathOf(string.id, options),
      })),
    ),
  ]
}

export const formatHeapSnapshotDiff = (
  diff: AggregatedHeapSnapshotDiff,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const hasLocation = hasAnyLocation(diff)
  return [
    heading(1, `Heap snapshot diff`),
    ...formatDiffSummary(diff),
    ...formatDiffConstructors({ diff, hasLocation, options }),
    ...formatDiffClosures({ diff, hasLocation, options }),
    ...formatDiffStrings({ diff, options }),
  ]
}

/**
 * The diffing counterpart to {@link relaxGroupEntityFilter}, admitting entity
 * pairs and showing both their sides. Each side's coverage is measured on
 * that side's retained-size union.
 *
 * Returns the relaxation itself instead of notes: the diff tables rank by
 * delta, which admission cannot know, so the caller reports the relaxation
 * only when an admitted pair is actually displayed.
 */
const relaxDiffGroupEntityFilter = ({
  diff,
  group,
  pairs,
  sideKeyOf,
  options,
}: {
  diff: AggregatedHeapSnapshotDiff
  group: SnapshotEntityGroup
  pairs: readonly AggregatedSnapshotEntityDiff[]

  /**
   * The key an entity was matched across the diff's sides under, used to map
   * pair-level shown-ness onto each side's own aggregated entities.
   */
  sideKeyOf: (
    entity: AggregatedClosure | AggregatedConstructor | DiffedSnapshotEntity,
    snapshot: AggregatedHeapSnapshot,
  ) => string

  options: FormattingProfileToMdOptions
}): {
  sectionOptions: FormattingProfileToMdOptions
  relaxation: CoverageRelaxation<AggregatedSnapshotEntityDiff> | undefined
} => {
  const shownSideKeys = (
    snapshot: AggregatedHeapSnapshot,
    sideOf: (
      pair: AggregatedSnapshotEntityDiff,
    ) => DiffedSnapshotEntity | undefined,
  ): ReadonlySet<string> => {
    const keys = new Set<string>()
    for (const pair of pairs) {
      const side = sideOf(pair)
      if (side !== undefined && showDiffEntity(pair, options)) {
        keys.add(sideKeyOf(side, snapshot))
      }
    }
    return keys
  }
  const baseShownKeys = shownSideKeys(diff.base, pair => pair.base)
  const currentShownKeys = shownSideKeys(diff.current, pair => pair.current)

  const relaxation = admitDiffEntriesForUnionCoverage(pairs, {
    isShown: pair => showDiffEntity(pair, options),
    isAdmissible: ({ base, current }) => !isSyntheticEntry((base ?? current)!),
    baseSideOf: pair => pair.base,
    currentSideOf: pair => pair.current,
    staticValueOf: side => side.retainedSize,
    baseUnion: diff.base.retainedUnionOf(group, entity =>
      baseShownKeys.has(sideKeyOf(entity, diff.base)),
    ),
    currentUnion: diff.current.retainedUnionOf(group, entity =>
      currentShownKeys.has(sideKeyOf(entity, diff.current)),
    ),
    coverageTarget: options.coverageTarget,
    topN: options.topN,
  })
  return {
    sectionOptions: relaxedOptions(
      options,
      relaxation && new Set(diffSidesOf(relaxation.admitted)),
    ),
    relaxation,
  }
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

/**
 * The note shown before a group's sections when shown entities fell short of
 * the coverage target and hidden entities were admitted.
 */
const formatCoverageNote = (
  group: SnapshotEntityGroup,
  coverage: number,
): RootContent =>
  paragraph(
    `Hidden ${group} account for ${formatPercent(
      1 - coverage,
    )} of the bytes ${group} retain, so the largest are also shown.`,
  )

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
  options,
}: {
  diff: AggregatedHeapSnapshotDiff
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const { sectionOptions, relaxation } = relaxDiffGroupEntityFilter({
    diff,
    group: `constructors`,
    pairs: diff.constructors,
    // Constructors are matched across sides by name.
    sideKeyOf: entity => entity.name ?? ``,
    options,
  })
  const sections = [SELF_SIZE, RETAINED_SIZE].map(size =>
    formatDiffSizeConstructors({
      diff,
      hasLocation,
      options: sectionOptions,
      size,
    }),
  )
  const displayed = new Set(sections.flatMap(({ displayed }) => displayed))
  const notes = relaxation?.admitted.some(pair => displayed.has(pair))
    ? [formatCoverageNote(`constructors`, relaxation.coverage)]
    : []
  return formatSectionGroup(
    [heading(2, `Largest constructors`), ...notes],
    sections.flatMap(({ content }) => content),
  )
}

const formatDiffSizeConstructors = ({
  diff,
  hasLocation,
  options,
  size: { sizeOf, formatHeader, description },
}: {
  diff: AggregatedHeapSnapshotDiff
  hasLocation: boolean
  options: FormattingProfileToMdOptions
  size: ConstructorSize
}): {
  content: RootContent[]
  displayed: AggregatedSnapshotEntityDiff[]
} => {
  const { regressions, improvements, hasActive } = selectDiffEntities(
    diff.constructors.map(entity => ({
      entity,
      baseValue: entity.base ? sizeOf(entity.base) : 0,
      currentValue: entity.current ? sizeOf(entity.current) : 0,
    })),
    options,
  )

  const sideRowOf = (total: number, entity?: DiffedSnapshotEntity) =>
    entity && {
      entity,
      size: sizeOf(entity),
      total,
      instanceCount: entity.instanceCount,
    }
  const rowOf = ({ base, current }: AggregatedSnapshotEntityDiff) => ({
    base: sideRowOf(diff.base.totalSize, base),
    current: sideRowOf(diff.current.totalSize, current),
  })

  return {
    content: formatDiffEntitySections({
      formatHeader,
      headingLevel: 4,
      plural: `Constructors`,
      description,
      columns: constructorColumns(hasLocation, options),
      hasActive,
      regressions: regressions.map(({ entity }) => rowOf(entity)),
      improvements: improvements.map(({ entity }) => rowOf(entity)),
    }),
    displayed: [...regressions, ...improvements].map(({ entity }) => entity),
  }
}

const formatDiffClosures = ({
  diff,
  hasLocation,
  options,
}: {
  diff: AggregatedHeapSnapshotDiff
  hasLocation: boolean
  options: FormattingProfileToMdOptions
}): RootContent[] => {
  const { sectionOptions, relaxation } = relaxDiffGroupEntityFilter({
    diff,
    group: `closures`,
    pairs: diff.closures,
    // Closures are matched across sides by entry match key under each side's
    // own context.
    sideKeyOf: (entity, snapshot) =>
      options.entryMatchKey(entity, snapshot.context),
    options,
  })
  const { regressions, improvements, hasActive } = selectDiffEntities(
    diff.closures.map(entity => ({
      entity,
      baseValue: entity.base ? entity.base.retainedSize : 0,
      currentValue: entity.current ? entity.current.retainedSize : 0,
    })),
    sectionOptions,
  )

  const rowOf = ({ base, current }: AggregatedSnapshotEntityDiff) => ({
    base: base && closureRowOf(base, diff.base, sectionOptions),
    current: current && closureRowOf(current, diff.current, sectionOptions),
  })

  const displayed = new Set(
    [...regressions, ...improvements].map(({ entity }) => entity),
  )
  const notes = relaxation?.admitted.some(pair => displayed.has(pair))
    ? [formatCoverageNote(`closures`, relaxation.coverage)]
    : []

  return formatDiffEntitySections({
    formatHeader: formatLargestClosuresHeading,
    notes,
    headingLevel: 3,
    plural: `Closures`,
    description: `retained size`,
    columns: closureColumns(hasLocation, sectionOptions),
    hasActive,
    regressions: regressions.map(({ entity }) => rowOf(entity)),
    improvements: improvements.map(({ entity }) => rowOf(entity)),
  })
}

/** Resolves a diffed closure entity's row using one side's snapshot. */
const closureRowOf = (
  entity: DiffedSnapshotEntity,
  { retainerPathOf, totalSize }: AggregatedHeapSnapshot,
  options: FormattingProfileToMdOptions,
): ClosureRow => ({
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
  const { regressions, improvements, hasActive } = selectDiffEntities(
    diff.strings.map(entity => ({
      entity,
      baseValue: entity.base ? entity.base.selfSize : 0,
      currentValue: entity.current ? entity.current.selfSize : 0,
    })),
    // The entry filter targets code entities; strings are data and always
    // shown.
    { ...options, showEntry: () => true },
  )

  const rowOf = ({ base, current }: AggregatedSnapshotEntityDiff) => ({
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
    regressions: regressions.map(({ entity }) => rowOf(entity)),
    improvements: improvements.map(({ entity }) => rowOf(entity)),
  })
}

/** Resolves a diffed node entity's row using one side's snapshot. */
const nodeRowOf = (
  entity: DiffedSnapshotEntity,
  { retainerPathOf, totalSize }: AggregatedHeapSnapshot,
  options: FormattingProfileToMdOptions,
): NodeRow => ({
  name: entity.name,
  size: entity.selfSize,
  total: totalSize,
  path: retainerPathOf(entity.id, options),
})

/**
 * Assembles the regressions and improvements subsections for one diffed entity
 * table from its row records, with rows under the given table {@link columns}.
 */
const formatDiffEntitySections = <Row>({
  formatHeader,
  notes = [],
  headingLevel,
  plural,
  description,
  columns,
  hasActive,
  regressions,
  improvements,
}: {
  formatHeader: (options: { isEmptyDiff: boolean }) => RootContent[]

  /** Notes shown between the header and the sections. */
  notes?: RootContent[]

  headingLevel: number
  plural: string
  description: string
  columns: Table<Row>
  hasActive: boolean
  regressions: Diff<Row>[]
  improvements: Diff<Row>[]
}): RootContent[] => {
  const sections: RootContent[] = []

  if (regressions.length > 0) {
    sections.push(
      heading(headingLevel, `Regressions`),
      paragraph(`${plural} with the largest increase in ${description}.`),
      formatDiffTable(columns, regressions),
    )
  }

  if (improvements.length > 0) {
    sections.push(
      heading(headingLevel, `Improvements`),
      paragraph(`${plural} with the largest decrease in ${description}.`),
      formatDiffTable(columns, improvements),
    )
  }

  // With active entities but no change, keep the section and let the header note
  // it didn't differ. With nothing active (the section a non-diff snapshot
  // would have omitted), omit it.
  if (sections.length === 0 && !hasActive) {
    return []
  }

  return [
    ...formatHeader({ isEmptyDiff: sections.length === 0 }),
    ...notes,
    ...sections,
  ]
}

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
 * The heading for the largest closures section, with a ranking sentence or, for
 * an unchanged diff, a merged "did not differ" note.
 */
const formatLargestClosuresHeading = ({
  isEmptyDiff,
}: {
  isEmptyDiff: boolean
}): RootContent[] => [
  heading(2, `Largest closures`),
  paragraph(
    isEmptyDiff
      ? `No closure differed in bytes that would be freed if the closure were garbage collected.`
      : `Closures ranked by bytes that would be freed if the closure were garbage collected.`,
  ),
]

/**
 * The heading for the largest strings section, with a ranking sentence or, for
 * an unchanged diff, a merged "did not differ" note.
 */
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

/** An entity with a name and optional location, shown in tables and headings. */
type NamedEntity = {
  name: string
  nameLocation?: FileReference
  location?: SourceLocation
}

/** Formats a heading for an entity, with its location when {@link hasLocation}. */
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
