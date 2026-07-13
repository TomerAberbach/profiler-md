import type { JsonFormatConverter } from '../converter.ts'
import { aggregateJSCHeapSnapshot } from './aggregate.ts'
import type { JSCHeapSnapshot } from './parse.ts'

const matchesJSCHeapSnapshot = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const { version, type, nodes } = json as Record<string, unknown>
  if (
    typeof version !== `number` ||
    type !== `Inspector` ||
    !Array.isArray(nodes)
  ) {
    return false
  }

  return true
}

export const jscHeapSnapshotConverter = {
  title: `JSC heap snapshot`,
  extension: `jsc-heap-snapshot.json`,
  languages: [`javascript`],
  fallbackOrigin: `safari`,
  type: `json`,
  modality: `snapshot`,
  matches: matchesJSCHeapSnapshot,
  aggregate: json => aggregateJSCHeapSnapshot(json as JSCHeapSnapshot),
} as const satisfies JsonFormatConverter
