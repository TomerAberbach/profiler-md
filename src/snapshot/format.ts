import { DynamicTypedArray } from '../helpers/array.ts'
import { formatBytes, formatCount, formatPercent } from '../helpers/format.ts'
import { MaxHeap, selectTopN } from '../helpers/heap.ts'
import { formatHeading, formatTable, inlineCode } from '../helpers/markdown.ts'
import { formatProfileLocation } from '../location.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import type {
  AggregatedClosure,
  AggregatedConstructor,
  AggregatedHeapSnapshot,
  AggregatedSnapshotNode,
} from './aggregate.ts'

export const formatHeapSnapshot = (
  snapshot: AggregatedHeapSnapshot,
  options: NormalizedProfileToMdOptions,
): string => {
  // If nothing in the snapshot has a location, then don't output a column for
  // it, since it'd be erroneously filled with `<native>` for every row, which
  // is likely not accurate.
  const hasLocation =
    snapshot.constructors.some(constructor => constructor.location) ||
    snapshot.closures.some(closure => closure.location)

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
): string[] => {
  const largestConstructorsSections = [
    ...formatLargestSelfSizeConstructors(snapshot, hasLocation, options),
    ...formatLargestRetainedSizeConstructors(snapshot, hasLocation, options),
  ]
  if (largestConstructorsSections.length === 0) {
    return []
  }

  return [
    formatHeading(2, `Largest constructors`),
    ...largestConstructorsSections,
  ]
}

const formatLargestSelfSizeConstructors = (
  snapshot: AggregatedHeapSnapshot,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const { totalSize, constructors } = snapshot

  const largestConstructors = selectTopN(
    constructors.filter(options.showEntry),
    options.topN,
    constructor => constructor.selfSize,
  )
  if (largestConstructors.length === 0) {
    return []
  }

  const largestInstanceSections = largestConstructors.flatMap(constructor =>
    formatLargestSelfSizeConstructorInstances(
      constructor,
      snapshot,
      hasLocation,
      options,
    ),
  )

  return [
    formatHeading(3, `Self size`),
    `Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Instances`, align: `right` },
        `Constructor`,
        ...(hasLocation ? [`Location`] : []),
      ],
      largestConstructors.map(constructor => [
        formatPercent(constructor.selfSize / totalSize),
        formatBytes(constructor.selfSize),
        formatCount(constructor.instances.length),
        inlineCode(constructor.name),
        ...(hasLocation
          ? [formatProfileLocation(constructor.location, options)]
          : []),
      ]),
    ),
    ...(largestInstanceSections.length > 0
      ? [
          formatHeading(4, `Instances`),
          `Instances ranked by contribution to each constructor's self size.`,
        ]
      : []),
    ...largestInstanceSections,
  ]
}

const formatLargestSelfSizeConstructorInstances = (
  constructor: AggregatedConstructor,
  { retainerPathOf }: AggregatedHeapSnapshot,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const largestInstanceGroups = selectLargestInstancesByRetainerPath(
    constructor.instances,
    instance => instance.selfSize,
    retainerPathOf,
    Math.ceil(options.topN / 4),
  ).sort((group1, group2) => group2.selfSize - group1.selfSize)
  if (largestInstanceGroups.length === 0) {
    return []
  }

  return [
    formatHeading(
      5,
      `${inlineCode(constructor.name)}${
        hasLocation
          ? ` (${formatProfileLocation(constructor.location, options)})`
          : ``
      }`,
    ),
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Instances`, align: `right` },
        `Path`,
      ],
      largestInstanceGroups.map(group => [
        formatPercent(group.selfSize / constructor.selfSize),
        formatBytes(group.selfSize),
        formatCount(group.instanceCount),
        inlineCode(group.retainerPath),
      ]),
    ),
  ]
}

const formatLargestRetainedSizeConstructors = (
  snapshot: AggregatedHeapSnapshot,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const { totalSize, constructors } = snapshot

  const largestConstructors = selectTopN(
    constructors.filter(options.showEntry),
    options.topN,
    constructor => constructor.retainedSize,
  )
  if (largestConstructors.length === 0) {
    return []
  }

  const largestInstanceSections = largestConstructors.flatMap(constructor =>
    formatLargestRetainedSizeConstructorInstances(
      constructor,
      snapshot,
      hasLocation,
      options,
    ),
  )

  return [
    formatHeading(3, `Retained size`),
    `Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Instances`, align: `right` },
        `Constructor`,
        ...(hasLocation ? [`Location`] : []),
      ],
      largestConstructors.map(constructor => [
        formatPercent(constructor.retainedSize / totalSize),
        formatBytes(constructor.retainedSize),
        formatCount(constructor.instances.length),
        inlineCode(constructor.name),
        ...(hasLocation
          ? [formatProfileLocation(constructor.location, options)]
          : []),
      ]),
    ),
    ...(largestInstanceSections.length > 0
      ? [
          formatHeading(4, `Instances`),
          `Instances ranked by contribution to each constructor's retained size.`,
        ]
      : []),
    ...largestInstanceSections,
  ]
}

const formatLargestRetainedSizeConstructorInstances = (
  constructor: AggregatedConstructor,
  { retainerPathOf }: AggregatedHeapSnapshot,
  hasLocation: boolean,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const largestInstanceGroups = selectLargestInstancesByRetainerPath(
    constructor.instances,
    instance => instance.retainedSize,
    retainerPathOf,
    Math.ceil(options.topN / 4),
  ).sort((group1, group2) => group2.retainedSize - group1.retainedSize)
  if (largestInstanceGroups.length === 0) {
    return []
  }

  return [
    formatHeading(
      5,
      `${inlineCode(constructor.name)}${
        hasLocation
          ? ` (${formatProfileLocation(constructor.location, options)})`
          : ``
      }`,
    ),
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Size`, align: `right` },
        { content: `Instances`, align: `right` },
        `Path`,
      ],
      largestInstanceGroups.map(group => [
        formatPercent(group.retainedSize / constructor.retainedSize),
        formatBytes(group.retainedSize),
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

  /** The combined self size of the instances in the group. */
  selfSize: number

  /** The combined retained size of the instances in the group. */
  retainedSize: number
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
      group = {
        retainerPath,
        instanceCount: 0,
        selfSize: 0,
        retainedSize: 0,
      }
      pathToGroup.set(retainerPath, group)
    }

    group.instanceCount++
    group.selfSize += instance.selfSize
    // Safe to sum: same-path instances can't be in a dominator/dominatee
    // relationship, so their retained subtrees are disjoint.
    group.retainedSize += instance.retainedSize
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
    `Closures ranked by bytes that would be freed if the closure were garbage collected.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: `Retained`, align: `right` },
        { content: `Instances`, align: `right` },
        { content: `Paths`, align: `right` },
        `Name`,
        ...(hasLocation ? [`Location`] : []),
        `Example path`,
      ],
      largestClosures.map(closure => [
        formatPercent(closure.retainedSize / totalSize),
        formatBytes(closure.retainedSize),
        formatCount(closure.instanceIds.length),
        formatCount(new Set(closure.instanceIds.map(retainerPathOf)).size),
        inlineCode(closure.name),
        ...(hasLocation
          ? [formatProfileLocation(closure.location, options)]
          : []),
        inlineCode(retainerPathOf(closure.largestInstanceId)),
      ]),
    ),
    ...(retainedSections.length > 0
      ? [
          formatHeading(3, `Retained`),
          `Nodes ranked by contribution to each closure's retained size.`,
        ]
      : []),
    ...retainedSections,
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
    formatHeading(
      4,
      `${inlineCode(closure.name)}${
        hasLocation
          ? ` (${formatProfileLocation(closure.location, options)})`
          : ``
      }`,
    ),
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
    `Strings ranked by bytes allocated for them.`,
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
