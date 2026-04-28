import { Profile } from 'pprof-format'
import { normalizeProfileToMdOptions } from '../../options.ts'
import type { ProfileToMdOptions } from '../../options.ts'
import { formatPprof } from './format.ts'
import type { Pprof } from './parse.ts'
import { parsePprof, parsePprofInternal } from './parse.ts'
import { summarizePprof } from './summarize.ts'

export const detectPprof = (data: Uint8Array): Pprof | undefined => {
  if (data.length === 0) {
    return undefined
  }

  let profile: Profile
  try {
    profile = Profile.decode(data)
  } catch {
    return undefined
  }

  if (profile.stringTable.strings[0] !== ``) {
    return undefined
  }
  return parsePprofInternal(profile)
}

/**
 * Converts the given pprof to Markdown.
 *
 * It is assumed that {@link data} is a valid pprof (raw protobuf). The behavior
 * of this function is undefined for invalid profiles.
 *
 * See the [pprof docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats/pprof.md)
 * for supported tools and generation instructions (`profiler-md --help pprof`).
 */
export const pprofToMd = (
  data: Uint8Array,
  options?: ProfileToMdOptions,
): string => pprofToMdInternal(parsePprof(data), options)

export const pprofToMdInternal = (
  pprof: Pprof,
  options?: ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeProfileToMdOptions(options)
  return formatPprof(
    summarizePprof(pprof, normalizedOptions),
    normalizedOptions,
  )
}
