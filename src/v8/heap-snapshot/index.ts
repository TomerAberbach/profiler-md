import { normalizeV8ProfileToMdOptions } from '../common.ts'
import type { V8ProfileToMdOptions } from '../common.ts'
import { formatSummarizedSnapshot } from './format.ts'
import { parseSnapshot } from './parse.ts'
import { summarizeSnapshot } from './summarize.ts'

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
  options?: V8ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeV8ProfileToMdOptions(options)
  const snapshot = parseSnapshot(data)
  const summary = summarizeSnapshot(snapshot, normalizedOptions)
  return formatSummarizedSnapshot(summary, normalizedOptions)
}
