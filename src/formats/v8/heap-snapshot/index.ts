import { normalizeProfileToMdOptions } from '../../../options.ts'
import type { ProfileToMdOptions } from '../../../options.ts'
import { aggregateV8HeapSnapshot } from './aggregate.ts'
import type { V8HeapSnapshot } from './parse.ts'
import { parseV8HeapSnapshot } from './parse.ts'
import { renderV8HeapSnapshot } from './render.ts'

export const detectV8HeapSnapshot = (
  json: unknown,
): V8HeapSnapshot | undefined => {
  if (typeof json !== `object` || json === null) {
    return undefined
  }

  const { snapshot, edges } = json as Record<string, unknown>
  if (typeof snapshot !== `object` || snapshot === null) {
    return undefined
  }

  const { meta } = snapshot as Record<string, unknown>
  if (
    typeof meta !== `object` ||
    meta === null ||
    !Array.isArray((meta as Record<string, unknown>).node_fields)
  ) {
    return undefined
  }

  if (!Array.isArray(edges)) {
    return undefined
  }

  return json as V8HeapSnapshot
}

/**
 * Converts the given V8 heap snapshot to Markdown.
 *
 * It is assumed that {@link data} is a valid snapshot. The behavior of this
 * function is undefined for invalid snapshots.
 *
 * See the [V8 heap snapshot docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats/v8-heap-snapshot.md)
 * for supported runtimes and generation instructions
 * (`profiler-md --help v8-heap-snapshot`).
 */
export const v8HeapSnapshotToMd = (
  data: string | Uint8Array,
  options?: ProfileToMdOptions,
): string => v8HeapSnapshotToMdInternal(parseV8HeapSnapshot(data), options)

export const v8HeapSnapshotToMdInternal = (
  snapshot: V8HeapSnapshot,
  options?: ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeProfileToMdOptions(options)
  return renderV8HeapSnapshot(
    aggregateV8HeapSnapshot(snapshot, normalizedOptions),
    normalizedOptions,
  )
}
