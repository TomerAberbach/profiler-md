import { normalizeProfileToMdOptions } from '../../../common.ts'
import type { ProfileToMdOptions } from '../../../common.ts'
import { formatV8HeapProfile } from './format.ts'
import type { V8HeapProfile } from './parse.ts'
import { parseV8HeapProfile } from './parse.ts'
import { summarizeV8HeapProfile } from './summarize.ts'

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
 * You can generate a V8 heap profile in several ways:
 * - [`node --heap-prof`](https://nodejs.org/api/cli.html#--heap-prof)
 * - [`v8.writeHeapProfileSync()`](https://nodejs.org/api/v8.html#v8writeheapprofilesyncfilename)
 *
 * Note that [`bun --heap-prof`](https://bun.com/docs/project/benchmarking#heap-profiling)
 * generates a heap _snapshot_ on exit, not a heap _profile_.
 */
export const v8HeapProfileToMd = (
  data: string | Uint8Array,
  options?: ProfileToMdOptions,
): string => v8HeapProfileToMdInternal(parseV8HeapProfile(data), options)

export const v8HeapProfileToMdInternal = (
  profile: V8HeapProfile,
  options?: ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeProfileToMdOptions(options)
  return formatV8HeapProfile(
    summarizeV8HeapProfile(profile, normalizedOptions),
    normalizedOptions,
  )
}
