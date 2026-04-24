import type { ProfileToMdOptions } from '../../../common.ts'
import { normalizeV8ProfileToMdOptions } from '../common.ts'
import { formatV8CpuProfile } from './format.ts'
import type { V8CpuProfile } from './parse.ts'
import { parseV8CpuProfile } from './parse.ts'
import { summarizeV8CpuProfile } from './summarize.ts'

export const detectV8CpuProfile = (json: unknown): V8CpuProfile | undefined => {
  if (typeof json !== `object` || json === null) {
    return undefined
  }

  const object = json as Record<string, unknown>
  if (!Array.isArray(object.nodes) || !Array.isArray(object.timeDeltas)) {
    return undefined
  }

  return json as V8CpuProfile
}

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
): string => v8CpuProfileToMdInternal(parseV8CpuProfile(data), options)

export const v8CpuProfileToMdInternal = (
  profile: V8CpuProfile,
  options?: ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeV8ProfileToMdOptions(options)
  return formatV8CpuProfile(
    summarizeV8CpuProfile(profile, normalizedOptions),
    normalizedOptions,
  )
}
