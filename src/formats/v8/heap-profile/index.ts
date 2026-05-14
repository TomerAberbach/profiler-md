import { normalizeProfileToMdOptions } from '../../../options.ts'
import type {
  AsyncProfileData,
  JsonProfileData,
  ProfileToMdOptions,
} from '../../../options.ts'
import { aggregateV8HeapProfile } from './aggregate.ts'
import { formatV8HeapProfile } from './format.ts'
import type { V8HeapProfile } from './parse.ts'
import { parseV8HeapProfile, parseV8HeapProfileAsync } from './parse.ts'

export const detectV8HeapProfile = (
  json: unknown,
): V8HeapProfile | undefined => {
  if (typeof json !== `object` || json === null) {
    return undefined
  }

  const object = json as Record<string, unknown>
  if (
    typeof object.head !== `object` ||
    object.head === null ||
    !Array.isArray(object.samples)
  ) {
    return undefined
  }

  return json as V8HeapProfile
}

/**
 * Converts the given V8 sampling heap profile to Markdown.
 *
 * It is assumed that {@link data} is a valid profile. The behavior of this
 * function is undefined for invalid profiles.
 *
 * See the [V8 heap profile docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats/v8-heap-profile.md)
 * for supported runtimes and generation instructions
 * (`profiler-md --help v8-heap-profile`).
 */
export const v8HeapProfileToMd = (
  data: JsonProfileData,
  options?: ProfileToMdOptions,
): string => v8HeapProfileToMdInternal(parseV8HeapProfile(data), options)

/**
 * Asynchronously converts the given V8 sampling heap profile to Markdown.
 *
 * It is assumed that {@link data} is a valid profile. The behavior of this
 * function is undefined for invalid profiles.
 *
 * See the [V8 heap profile docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats/v8-heap-profile.md)
 * for supported runtimes and generation instructions
 * (`profiler-md --help v8-heap-profile`).
 */
export const v8HeapProfileToMdAsync = async (
  data: AsyncProfileData,
  options?: ProfileToMdOptions,
): Promise<string> =>
  v8HeapProfileToMdInternal(await parseV8HeapProfileAsync(data), options)

export const v8HeapProfileToMdInternal = (
  profile: V8HeapProfile,
  options?: ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeProfileToMdOptions(options)
  return formatV8HeapProfile(
    aggregateV8HeapProfile(profile, normalizedOptions),
    normalizedOptions,
  )
}
