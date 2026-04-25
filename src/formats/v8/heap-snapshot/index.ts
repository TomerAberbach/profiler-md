import { normalizeProfileToMdOptions } from '../../../options.ts'
import type { ProfileToMdOptions } from '../../../options.ts'
import { formatV8HeapSnapshot } from './format.ts'
import type { V8HeapSnapshot } from './parse.ts'
import { parseV8HeapSnapshot } from './parse.ts'
import { summarizeV8HeapSnapshot } from './summarize.ts'

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
 * You can generate a V8 heap snapshot in several ways:
 * - [`node --heapsnapshot-signal`](https://nodejs.org/api/cli.html#--heapsnapshot-signalsignal)
 * - [`bun --heap-prof`](https://bun.com/docs/project/benchmarking#heap-profiling)
 * - [`v8.writeHeapSnapshot()`](https://nodejs.org/api/v8.html#v8writeheapsnapshotfilename)
 * - [`node --inspect`](https://nodejs.org/api/debugger.html#v8-inspector-integration-for-nodejs),
 *   [`deno run --inspect`](https://docs.deno.com/runtime/fundamentals/debugging/#--inspect),
 *   or [`bun --inspect`](https://bun.com/docs/runtime/debugger#inspect) with
 *   [Chrome DevTools](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots)
 * - [Chrome DevTools directly](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots)
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
  return formatV8HeapSnapshot(
    summarizeV8HeapSnapshot(snapshot, normalizedOptions),
    normalizedOptions,
  )
}
