import { normalizeProfileToMdOptions } from '../../../options.ts'
import type {
  AsyncProfileData,
  JsonProfileData,
  ProfileToMdOptions,
} from '../../../options.ts'
import { formatV8CpuProfile } from './format.ts'
import type { V8CpuProfile } from './parse.ts'
import { parseV8CpuProfile, parseV8CpuProfileAsync } from './parse.ts'
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
 * See the [V8 CPU profile docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats/v8-cpu-profile.md)
 * for supported runtimes and generation instructions
 * (`profiler-md --help v8-cpu-profile`).
 */
export const v8CpuProfileToMd = (
  data: JsonProfileData,
  options?: ProfileToMdOptions,
): string => v8CpuProfileToMdInternal(parseV8CpuProfile(data), options)

/**
 * Asynchronously converts the given V8 CPU profile to Markdown.
 *
 * It is assumed that {@link data} is a valid profile. The behavior of this
 * function is undefined for invalid profiles.
 *
 * See the [V8 CPU profile docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats/v8-cpu-profile.md)
 * for supported runtimes and generation instructions
 * (`profiler-md --help v8-cpu-profile`).
 */
export const v8CpuProfileToMdAsync = async (
  data: AsyncProfileData,
  options?: ProfileToMdOptions,
): Promise<string> =>
  v8CpuProfileToMdInternal(await parseV8CpuProfileAsync(data), options)

export const v8CpuProfileToMdInternal = (
  profile: V8CpuProfile,
  options?: ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeProfileToMdOptions(options)
  return formatV8CpuProfile(
    summarizeV8CpuProfile(profile, normalizedOptions),
    normalizedOptions,
  )
}
