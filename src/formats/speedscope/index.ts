import { normalizeProfileToMdOptions } from '../../options.ts'
import type {
  AsyncProfileData,
  JsonProfileData,
  ProfileToMdOptions,
} from '../../options.ts'
import { formatSpeedscope } from './format.ts'
import { parseSpeedscopeProfile, parseSpeedscopeProfileAsync } from './parse.ts'
import type { SpeedscopeProfile } from './parse.ts'
import { summarizeSpeedscopeProfile } from './summarize.ts'

export const detectSpeedscopeProfile = (
  json: unknown,
): SpeedscopeProfile | undefined => {
  if (typeof json !== `object` || json === null) {
    return undefined
  }

  const object = json as Record<string, unknown>
  if (
    object.$schema !== `https://www.speedscope.app/file-format-schema.json` ||
    !Array.isArray(object.profiles) ||
    typeof object.shared !== `object` ||
    object.shared === null
  ) {
    return undefined
  }

  return json as SpeedscopeProfile
}

/**
 * Converts the given Speedscope profile to Markdown.
 *
 * It is assumed that {@link data} is a valid Speedscope JSON file. The behavior
 * of this function is undefined for invalid profiles.
 *
 * See the [Speedscope docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats/speedscope.md)
 * for supported tools and generation instructions
 * (`profiler-md --help speedscope`).
 */
export const speedscopeProfileToMd = (
  data: JsonProfileData,
  options?: ProfileToMdOptions,
): string =>
  speedscopeProfileToMdInternal(parseSpeedscopeProfile(data), options)

/**
 * Asynchronously converts the given Speedscope profile to Markdown.
 *
 * It is assumed that {@link data} is a valid Speedscope JSON file. The behavior
 * of this function is undefined for invalid profiles.
 *
 * See the [Speedscope docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats/speedscope.md)
 * for supported tools and generation instructions
 * (`profiler-md --help speedscope`).
 */
export const speedscopeProfileToMdAsync = async (
  data: AsyncProfileData,
  options?: ProfileToMdOptions,
): Promise<string> =>
  speedscopeProfileToMdInternal(
    await parseSpeedscopeProfileAsync(data),
    options,
  )

export const speedscopeProfileToMdInternal = (
  profile: SpeedscopeProfile,
  options?: ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeProfileToMdOptions(options)
  return summarizeSpeedscopeProfile(profile, normalizedOptions)
    .map(profile => formatSpeedscope(profile, normalizedOptions))
    .join(`\n\n`)
}
