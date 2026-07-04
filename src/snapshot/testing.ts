import { makeFileReference } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type {
  AggregatedClosure,
  AggregatedConstructor,
  AggregatedHeapSnapshot,
  AggregatedSnapshotNode,
  NodeCategoryStats,
} from './aggregate.ts'

export const makeAggregatedHeapSnapshot = ({
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
}: {
  totalSize?: number
  nodeCount?: number
  edgeCount?: number
  nodeCategoryToStats?: Map<string, NodeCategoryStats>
  constructors?: AggregatedConstructor[]
  closures?: AggregatedClosure[]
  strings?: AggregatedSnapshotNode[]
} = {}): AggregatedHeapSnapshot => ({
  type: `snapshot`,
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
  largestInstanceId: 0,
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
