import type { Root } from 'mdast'
import {
  allTablesAfterHeading,
  allTablesAfterHeadingContaining,
  nodesUnderHeading,
  parseMd,
} from '../../helpers/testing.ts'
import type { Table } from '../../helpers/testing.ts'
import { makeFileReference } from '../../location.ts'
import type { SourceLocation } from '../../location.ts'
import type { ProfileToMdContext } from '../../options.ts'
import type {
  AggregatedClosure,
  AggregatedConstructor,
  AggregatedHeapSnapshot,
  AggregatedSnapshotNode,
  NodeCategoryStats,
  RetainedUnionEntity,
} from './aggregate.ts'

export const makeAggregatedHeapSnapshot = ({
  context = { format: `v8-heap-snapshot`, origin: `node` },
  nodeCount = 0,
  edgeCount = 0,
  nodeCategoryToStats = new Map<string, NodeCategoryStats>(),
  constructors = [],
  closures = [],
  strings = [],
  totalSize = [...constructors, ...closures, ...strings].reduce(
    (totalSize, node) => totalSize + node.selfSize,
    0,
  ),
  retainedNodesOf = () => [],
}: {
  context?: ProfileToMdContext
  totalSize?: number
  nodeCount?: number
  edgeCount?: number
  nodeCategoryToStats?: Map<string, NodeCategoryStats>
  constructors?: AggregatedConstructor[]
  closures?: AggregatedClosure[]
  strings?: AggregatedSnapshotNode[]
  retainedNodesOf?: AggregatedHeapSnapshot[`retainedNodesOf`]
} = {}): AggregatedHeapSnapshot => ({
  type: `snapshot`,
  context,
  totalSize,
  nodeCount,
  edgeCount,
  nodeCategoryToStats,
  constructors,
  closures,
  strings,
  retainerPathOf: () => `(GC root)`,
  retainedNodesOf,
  // Hand-made snapshots have no dominator tree; treat entity retained sets as
  // disjoint.
  retainedUnionOf: (group, isShown) => {
    const entities = group === `constructors` ? constructors : closures
    let denominator = 0
    let shownSize = 0
    for (const entity of entities) {
      denominator += entity.retainedSize
      if (isShown(entity)) {
        shownSize += entity.retainedSize
      }
    }
    const retainedSizeOf = (entity: RetainedUnionEntity) =>
      (entity as { retainedSize?: number }).retainedSize ?? 0
    return {
      denominator,
      shownSize,
      marginalOf: retainedSizeOf,
      admit: retainedSizeOf,
    }
  },
})

export const makeSourceLocation = (
  url: string,
  line?: number,
  column?: number,
): SourceLocation => {
  const fileReference = makeFileReference(url)
  if (!fileReference) {
    throw new Error(`Expected a usable file reference, got: ${url}`)
  }
  return { ...fileReference, line, column }
}

export const makeAggregatedConstructor = ({
  name,
  category = `ours`,
  location,
  selfSize,
  retainedSize,
  instanceCount,
}: {
  name: string
  category?: string
  location?: SourceLocation
  selfSize: number
  retainedSize: number
  instanceCount: number
}): AggregatedConstructor => ({
  type: `node`,
  id: 0,
  name,
  category,
  location,
  selfSize,
  retainedSize,
  instances: Array.from({ length: instanceCount }, (_, index) => ({
    type: `node`,
    id: index,
    name,
    selfSize: 0,
    retainedSize: 0,
  })),
})

export const makeAggregatedClosure = ({
  name,
  category = `ours`,
  location,
  selfSize,
  retainedSize,
  instanceCount = 1,
}: {
  name: string
  category?: string
  location?: SourceLocation
  selfSize: number
  retainedSize: number
  instanceCount?: number
}): AggregatedClosure => ({
  type: `node`,
  id: 0,
  name,
  category,
  location,
  selfSize,
  retainedSize,
  instanceIds: Array.from({ length: instanceCount }, (_, index) => index),
})

export const makeAggregatedString = ({
  value,
  selfSize,
}: {
  value?: string
  selfSize: number
}): AggregatedSnapshotNode => ({
  type: `node`,
  id: 0,
  name: value,
  selfSize,
  retainedSize: selfSize,
})

export const selfSizeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Self size`)

export const totalSizeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Total size`)

export const retainedSizeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Retained size`)

export const selfSizeInstancesTables = (md: string, name: string): Table[] => {
  const selfUnder = nodesUnderHeading(parseMd(md), `Self size`)
  const instUnder = nodesUnderHeading(
    { type: `root`, children: selfUnder } as Root,
    `Instances`,
  )
  return allTablesAfterHeadingContaining(instUnder, name)
}

export const retainedSizeInstancesTables = (
  md: string,
  name: string,
): Table[] => {
  const retainedUnder = nodesUnderHeading(parseMd(md), `Retained size`)
  const instancesUnder = nodesUnderHeading(
    { type: `root`, children: retainedUnder } as Root,
    `Instances`,
  )
  return allTablesAfterHeadingContaining(instancesUnder, name)
}

export const closureTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Largest closures`)

export const retainedTables = (md: string, name: string): Table[] => {
  const under = nodesUnderHeading(parseMd(md), `Retained`)
  return allTablesAfterHeadingContaining(under, name)
}

export const largestStringsTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Largest strings`)
