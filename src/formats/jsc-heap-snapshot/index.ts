import type { NormalizedProfileToMdOptions } from '../../options.ts'
import { aggregateJSCHeapSnapshot } from './aggregate.ts'
import { formatJSCHeapSnapshot } from './format.ts'
import type { JSCHeapSnapshot } from './parse.ts'

export const matchesJSCHeapSnapshot = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const { version, type, nodes } = json as Record<string, unknown>
  if (version !== 2 || type !== `Inspector` || !Array.isArray(nodes)) {
    return false
  }

  return true
}

export const jscHeapSnapshotToMd = (
  snapshot: JSCHeapSnapshot,
  options: NormalizedProfileToMdOptions,
): string => formatJSCHeapSnapshot(aggregateJSCHeapSnapshot(snapshot), options)
