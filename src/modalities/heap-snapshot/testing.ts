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
  AggregatedHeapSnapshotNode,
  NodeCategoryStats,
} from './aggregate.ts'
import type { HeapSnapshotNodeCategory } from './type.ts'

export const makeAggregatedHeapSnapshot = ({
  context = { format: `v8-heap-snapshot`, origin: `node` },
  nodeCount = 0,
  edgeCount = 0,
  nodeCategoryToStats = new Map<HeapSnapshotNodeCategory, NodeCategoryStats>(),
  constructors = [],
  closures = [],
  strings = [],
  totalSize = [...constructors, ...closures, ...strings].reduce(
    (totalSize, node) => totalSize + node.selfSize,
    0,
  ),
}: {
  context?: ProfileToMdContext
  totalSize?: number
  nodeCount?: number
  edgeCount?: number
  nodeCategoryToStats?: Map<HeapSnapshotNodeCategory, NodeCategoryStats>
  constructors?: AggregatedConstructor[]
  closures?: AggregatedClosure[]
  strings?: AggregatedHeapSnapshotNode[]
} = {}): AggregatedHeapSnapshot => ({
  type: `heap-snapshot`,
  context,
  totalSize,
  nodeCount,
  edgeCount,
  nodeCategoryToStats,
  constructors,
  closures,
  strings,
  retainerPathOf: () => `(GC root)`,
  retainedNodesOf: () => [],
})

export const makeSourceLocation = (
  url: string,
  line?: number,
  column?: number,
): SourceLocation => {
  const fileReference = makeFileReference(url)
  if (!fileReference) {
    throw new Error(`expected a usable file reference, got: ${url}`)
  }
  return { ...fileReference, line, column }
}

export const makeAggregatedConstructor = ({
  name,
  location,
  selfSize,
  retainedSize,
  instanceCount,
}: {
  name: string
  location?: SourceLocation
  selfSize: number
  retainedSize: number
  instanceCount: number
}): AggregatedConstructor => ({
  type: `node`,
  id: 0,
  name,
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
  location,
  selfSize,
  retainedSize,
  instanceCount = 1,
}: {
  name: string
  location?: SourceLocation
  selfSize: number
  retainedSize: number
  instanceCount?: number
}): AggregatedClosure => ({
  type: `node`,
  id: 0,
  name,
  location,
  selfSize,
  retainedSize,
  largestInstanceId: 0,
  instanceIds: Array.from({ length: instanceCount }, (_, index) => index),
})

export const makeAggregatedString = ({
  value,
  selfSize,
}: {
  value?: string
  selfSize: number
}): AggregatedHeapSnapshotNode => ({
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

export const largestStringsTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Largest strings`)
