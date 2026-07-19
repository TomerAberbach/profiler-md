import type { BinaryFormatConverter } from '../converter.ts'
import { matchesJfr } from './matches.ts'
import { parseJfr, parseJfrAsync } from './parse.ts'

export const jfrConverter = {
  title: `JFR`,
  extension: `jfr`,
  languages: [`java`],
  fallbackOrigin: `jvm`,
  type: `binary`,
  matches: matchesJfr,
  parse: parseJfr,
  parseAsync: parseJfrAsync,
} as const satisfies BinaryFormatConverter
