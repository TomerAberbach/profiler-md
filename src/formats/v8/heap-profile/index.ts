import type { NormalizedProfileToMdOptions } from '../../../options.ts'
import { aggregateV8HeapProfile } from './aggregate.ts'
import { formatV8HeapProfile } from './format.ts'
import type { V8HeapProfile } from './parse.ts'

export const matchesV8HeapProfile = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const object = json as Record<string, unknown>
  if (
    typeof object.head !== `object` ||
    object.head === null ||
    !Array.isArray(object.samples)
  ) {
    return false
  }

  return true
}

export const v8HeapProfileToMd = (
  profile: V8HeapProfile,
  options: NormalizedProfileToMdOptions,
): string =>
  formatV8HeapProfile(aggregateV8HeapProfile(profile, options), options)
