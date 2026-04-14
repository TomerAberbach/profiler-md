import { normalizeV8ProfileToMdOptions } from '../common.ts'
import type { V8ProfileToMdOptions } from '../common.ts'
import { formatSummarizedProfile } from './format.ts'
import { parseProfile } from './parse.ts'
import { summarizeProfile } from './summarize.ts'

/**
 * Converts the given V8 CPU profile to Markdown.
 *
 * It is assumed that {@link content} is a valid profile. The behavior of this
 * function is undefined for invalid profiles.
 *
 * You can generate a V8 CPU profile in several ways:
 * - [`node --cpu-prof`](https://nodejs.org/api/cli.html#cpu-prof)
 * - [`deno --cpu-prof`](https://docs.deno.com/runtime/fundamentals/debugging/#cpu-profiling)
 * - [`bun --cpu-prof`](https://bun.com/docs/project/benchmarking#cpu-profiling)
 *
 * Lower the sampling interval to capture more granular data.
 */
export const v8CpuProfileToMd = (
  text: string,
  options?: V8ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeV8ProfileToMdOptions(options)
  const profile = parseProfile(text)
  const summary = summarizeProfile(profile, normalizedOptions)
  return formatSummarizedProfile(summary, normalizedOptions)
}
