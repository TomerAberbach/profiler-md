import type { BinaryFormatConverter } from '../converter.ts'
import { matchesSysting } from './matches.ts'
import { parseSysting, parseSystingAsync } from './parse.ts'

export const systingConverter = {
  format: `systing`,
  title: `systing`,
  extension: `systing`,
  languages: [`c`, `python`, `rust`],
  fallbackOrigin: `systing`,
  type: `binary`,
  matches: matchesSysting,
  parse: parseSysting,
  parseAsync: parseSystingAsync,
} as const satisfies BinaryFormatConverter
