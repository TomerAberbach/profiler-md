import type { BinaryFormatSpec } from '../spec.ts'
import { matchesPerf } from './matches.ts'
import { parsePerf, parsePerfAsync } from './parse/index.ts'

export const perfFormatSpec = {
  id: `perf`,
  title: `perf.data`,
  extension: `perf.data`,
  languages: [`c`, `zig`],
  // Linux's `perf` defines the format: it is the on-disk form of the kernel's
  // own `perf_event` records, and simpleperf writes files to match it.
  fallbackOrigin: `perf`,
  type: `binary`,
  matches: matchesPerf,
  parse: parsePerf,
  parseAsync: parsePerfAsync,
} as const satisfies BinaryFormatSpec
