import type { ProfileToMdOptions } from '../../../common.ts'
import { normalizeV8ProfileToMdOptions } from '../common.ts'
import { formatV8CpuProfile } from './format.ts'
import { parseV8CpuProfile } from './parse.ts'
import { summarizeV8CpuProfile } from './summarize.ts'

/**
 * Converts the given V8 CPU profile to Markdown.
 *
 * It is assumed that {@link data} is a valid profile. The behavior of this
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
  data: string | Buffer,
  options?: ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeV8ProfileToMdOptions(options)
  const rawProfile = parseV8CpuProfile(data)
  const profile = summarizeV8CpuProfile(rawProfile, normalizedOptions)
  return formatV8CpuProfile(profile, normalizedOptions)
}
