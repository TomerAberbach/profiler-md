import type { NormalizedProfileToMdOptions } from '../../../options.ts'
import { aggregateV8CpuProfile } from './aggregate.ts'
import { formatV8CpuProfile } from './format.ts'
import type { V8CpuProfile } from './parse.ts'

export const matchesV8CpuProfile = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const object = json as Record<string, unknown>
  if (!Array.isArray(object.nodes) || !Array.isArray(object.timeDeltas)) {
    return false
  }

  return true
}

export const v8CpuProfileToMd = (
  profile: V8CpuProfile,
  options: NormalizedProfileToMdOptions,
): string =>
  formatV8CpuProfile(aggregateV8CpuProfile(profile, options), options)
