import type { JsonFormatConverter } from '../converter.ts'
import { parseJSCHeapSnapshot } from './parse.ts'
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
  matches: matchesJSCHeapSnapshot,
  parse: json => parseJSCHeapSnapshot(json as JSCHeapSnapshot),
} as const satisfies JsonFormatConverter
