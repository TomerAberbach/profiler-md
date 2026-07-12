import type { JsonFormatConverter } from '../../converter.ts'
import { parseV8CpuProfile } from './parse.ts'
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
  extension: `cpuprofile`,
  languages: [`javascript`],
  fallbackOrigin: `unknown`,
  type: `json`,
  modality: `profile`,
  matches: matchesV8CpuProfile,
  parse: json => parseV8CpuProfile(json as V8CpuProfile),
} as const satisfies JsonFormatConverter
