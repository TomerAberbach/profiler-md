import type { JsonFormatConverter } from '../converter.ts'
import { aggregateJSCHeapSnapshot } from './aggregate.ts'
import type { JSCHeapSnapshot } from './parse.ts'

const matchesJSCHeapSnapshot = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const { version, type, nodes } = json as Record<string, unknown>
  if (version !== 2 || type !== `Inspector` || !Array.isArray(nodes)) {
    return false
  }

  return true
}

export const jscHeapSnapshotConverter = {
  title: `JSC heap snapshot`,
  kind: `json`,
  shape: `snapshot`,
  matches: matchesJSCHeapSnapshot,
  aggregate: aggregateJSCHeapSnapshot,
} satisfies JsonFormatConverter<JSCHeapSnapshot>
