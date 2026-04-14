import { normalizeV8ProfileToMdOptions } from '../common.ts'
import type { V8ProfileToMdOptions } from '../common.ts'
import { formatSummarizedProfile } from './format.ts'
import { parseProfile } from './parse.ts'
import { summarizeProfile } from './summarize.ts'

/**
 * Converts the given V8 sampling heap profile to Markdown.
 *
 * It is assumed that {@link text} is a valid profile. The behavior of this
 * function is undefined for invalid profiles.
 *
 * You can generate a V8 heap profile in several ways:
 * - [`node --heap-prof`](https://nodejs.org/api/cli.html#--heap-prof)
 * - [`v8.writeHeapProfileSync()`](https://nodejs.org/api/v8.html#v8writeheapprofilesyncfilename)
 *
 * Note that [`bun --heap-prof`](https://bun.com/docs/project/benchmarking#heap-profiling)
 * generates a heap _snapshot_ on exit, not a heap _profile_.
 */
export const v8HeapProfileToMd = (
  text: string,
  options?: V8ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeV8ProfileToMdOptions(options)
  const profile = parseProfile(text)
  const summary = summarizeProfile(profile, normalizedOptions)
  return formatSummarizedProfile(summary, normalizedOptions)
}
