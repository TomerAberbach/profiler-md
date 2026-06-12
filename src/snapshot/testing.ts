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
  totalSize = 0,
  nodeCount = 0,
  edgeCount = 0,
  nodeCategoryToStats = new Map<string, NodeCategoryStats>(),
  constructors = [],
  closures = [],
  strings = [],
}: {
  totalSize?: number
  nodeCount?: number
  edgeCount?: number
  nodeCategoryToStats?: Map<string, NodeCategoryStats>
  constructors?: AggregatedConstructor[]
  closures?: AggregatedClosure[]
  strings?: AggregatedSnapshotNode[]
} = {}): AggregatedHeapSnapshot => ({
  kind: `snapshot`,
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
): SourceLocation => ({ ...makeFileReference(url), line, column })

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
}): AggregatedSnapshotNode => ({
  type: `node`,
  id: 0,
  name: value,
  selfSize,
  retainedSize: selfSize,
})
