import type { BinaryFormatSpec } from '../spec.ts'
import { matchesHprof } from './matches.ts'
import { parseHprof, parseHprofAsync } from './parse.ts'

export const hprofFormatSpec = {
  id: `hprof`,
  title: `HPROF`,
  extension: `hprof`,
  languages: [`java`],
  // HotSpot's own heap dumper defines the format, and every other origin
  // writing a JVM heap dump matches it.
  fallbackOrigin: `jdk`,
  type: `binary`,
  matches: matchesHprof,
  parse: parseHprof,
  parseAsync: parseHprofAsync,
} as const satisfies BinaryFormatSpec
