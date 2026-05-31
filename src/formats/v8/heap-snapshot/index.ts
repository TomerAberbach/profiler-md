import type { NormalizedProfileToMdOptions } from '../../../options.ts'
import { aggregateV8HeapSnapshot } from './aggregate.ts'
import { formatV8HeapSnapshot } from './format.ts'
import type { V8HeapSnapshot } from './parse.ts'

export const matchesV8HeapSnapshot = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const { snapshot, edges } = json as Record<string, unknown>
  if (typeof snapshot !== `object` || snapshot === null) {
    return false
  }

  const { meta } = snapshot as Record<string, unknown>
  if (
    typeof meta !== `object` ||
    meta === null ||
    !Array.isArray((meta as Record<string, unknown>).node_fields)
  ) {
    return false
  }

  if (!Array.isArray(edges)) {
    return false
  }

  return true
}

export const v8HeapSnapshotToMd = (
  snapshot: V8HeapSnapshot,
  options: NormalizedProfileToMdOptions,
): string =>
  formatV8HeapSnapshot(aggregateV8HeapSnapshot(snapshot, options), options)
