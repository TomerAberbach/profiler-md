import type { JsonFormatConverter } from '../../converter.ts'
import { aggregateV8CpuProfile } from './aggregate.ts'
import type { V8CpuProfile } from './parse.ts'

const matchesV8CpuProfile = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const object = json as Record<string, unknown>
  if (!Array.isArray(object.nodes) || !Array.isArray(object.timeDeltas)) {
    return false
  }

  return true
}

export const v8CpuProfileConverter = {
  title: `V8 CPU profile`,
  kind: `json`,
  shape: `profile`,
  matches: matchesV8CpuProfile,
  aggregate: aggregateV8CpuProfile,
} satisfies JsonFormatConverter<V8CpuProfile>
