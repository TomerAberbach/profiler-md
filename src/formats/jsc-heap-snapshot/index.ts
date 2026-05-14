import { normalizeProfileToMdOptions } from '../../options.ts'
import type {
  AsyncProfileData,
  JsonProfileData,
  ProfileToMdOptions,
} from '../../options.ts'
import { formatJSCHeapSnapshot } from './format.ts'
import type { JSCHeapSnapshot } from './parse.ts'
import { parseJSCHeapSnapshot, parseJSCHeapSnapshotAsync } from './parse.ts'
import { summarizeJSCHeapSnapshot } from './summarize.ts'

export const detectJSCHeapSnapshot = (
  json: unknown,
): JSCHeapSnapshot | undefined => {
  if (typeof json !== `object` || json === null) {
    return undefined
  }

  const { version, type, nodes } = json as Record<string, unknown>
  if (version !== 2 || type !== `Inspector` || !Array.isArray(nodes)) {
    return undefined
  }

  return json as JSCHeapSnapshot
}

/**
 * Converts the given JSC heap snapshot to Markdown.
 *
 * It is assumed that {@link data} is a valid snapshot. The behavior of this
 * function is undefined for invalid snapshots.
 *
 * See the [JSC heap snapshot docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats/jsc-heap-snapshot.md)
 * for supported runtimes and generation instructions
 * (`profiler-md --help jsc-heap-snapshot`).
 */
export const jscHeapSnapshotToMd = (
  data: JsonProfileData,
  options?: ProfileToMdOptions,
): string => jscHeapSnapshotToMdInternal(parseJSCHeapSnapshot(data), options)

/**
 * Asynchronously converts the given JSC heap snapshot to Markdown.
 *
 * It is assumed that {@link data} is a valid snapshot. The behavior of this
 * function is undefined for invalid snapshots.
 *
 * See the [JSC heap snapshot docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats/jsc-heap-snapshot.md)
 * for supported runtimes and generation instructions
 * (`profiler-md --help jsc-heap-snapshot`).
 */
export const jscHeapSnapshotToMdAsync = async (
  data: AsyncProfileData,
  options?: ProfileToMdOptions,
): Promise<string> =>
  jscHeapSnapshotToMdInternal(await parseJSCHeapSnapshotAsync(data), options)

export const jscHeapSnapshotToMdInternal = (
  snapshot: JSCHeapSnapshot,
  options?: ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeProfileToMdOptions(options)
  return formatJSCHeapSnapshot(
    summarizeJSCHeapSnapshot(snapshot),
    normalizedOptions,
  )
}
