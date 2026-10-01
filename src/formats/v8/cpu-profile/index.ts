import type { JsonFormatSpec } from '../../spec.ts'
import { matchesV8CpuProfile } from './matches.ts'
import { parseV8CpuProfile } from './parse.ts'
import type { V8CpuProfile } from './parse.ts'

export const v8CpuProfileFormatSpec = {
  id: `v8-cpu-profile`,
  title: `V8 CPU profile`,
  extension: `cpuprofile`,
  languages: [`javascript`],
  // Chrome DevTools defines the format, and the other V8 runtimes write it to
  // be openable there.
  fallbackOrigin: `chrome`,
  type: `json`,
  matches: matchesV8CpuProfile,
  parse: (json, recordTally) =>
    parseV8CpuProfile(json as V8CpuProfile, recordTally),
} as const satisfies JsonFormatSpec
