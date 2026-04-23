import type { ProfileToMdOptions } from '../../../common.ts'
import { normalizeV8ProfileToMdOptions } from '../common.ts'
import { formatV8HeapSnapshot } from './format.ts'
import { parseV8HeapSnapshot } from './parse.ts'
import { summarizeV8HeapSnapshot } from './summarize.ts'

/**
 * Converts the given V8 heap snapshot to Markdown.
 *
 * It is assumed that {@link data} is a valid snapshot. The behavior of this
 * function is undefined for invalid snapshots.
 *
 * You can generate a V8 heap snapshot in several ways:
 * - [`node --heapsnapshot-signal`](https://nodejs.org/api/cli.html#--heapsnapshot-signalsignal)
 * - [`v8.writeHeapSnapshot()`](https://nodejs.org/api/v8.html#v8writeheapsnapshotfilename)
 */
export const v8HeapSnapshotToMd = (
  data: string | Buffer,
  options?: ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeV8ProfileToMdOptions(options)
  const rawSnapshot = parseV8HeapSnapshot(data)
  const snapshot = summarizeV8HeapSnapshot(rawSnapshot, normalizedOptions)
  return formatV8HeapSnapshot(snapshot, normalizedOptions)
}
