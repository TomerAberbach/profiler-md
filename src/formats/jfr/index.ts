import type { BinaryFormatConverter } from '../converter.ts'
import { matchesJfr } from './matches.ts'
import { parseJfr, parseJfrAsync } from './parse.ts'

export const jfrConverter = {
  title: `JFR`,
  extension: `jfr`,
  languages: [`java`],
  // The JDK's recorder defines the format; async-profiler recordings are
  // detected by their marker entries instead.
  fallbackOrigin: `jdk`,
  type: `binary`,
  matches: matchesJfr,
  parse: parseJfr,
  parseAsync: parseJfrAsync,
} as const satisfies BinaryFormatConverter
