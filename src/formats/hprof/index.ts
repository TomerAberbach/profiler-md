import type { BinaryFormatConverter } from '../converter.ts'
import { matchesHprof } from './matches.ts'
import { parseHprof, parseHprofAsync } from './parse.ts'

export const hprofConverter = {
  format: `hprof`,
  title: `HPROF`,
  extension: `hprof`,
  languages: [`java`],
  // HotSpot's own heap dumper defines the format, and every other emitter of a
  // JVM heap dump writes what it produces.
  fallbackOrigin: `jdk`,
  type: `binary`,
  matches: matchesHprof,
  parse: parseHprof,
  parseAsync: parseHprofAsync,
} as const satisfies BinaryFormatConverter
