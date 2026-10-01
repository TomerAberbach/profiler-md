import type { BinaryFormatSpec } from '../spec.ts'
import { matchesSysting } from './matches.ts'
import { parseSysting, parseSystingAsync } from './parse.ts'

export const systingFormatSpec = {
  id: `systing`,
  title: `systing`,
  extension: `systing`,
  languages: [`c`, `python`, `rust`],
  fallbackOrigin: `systing`,
  type: `binary`,
  matches: matchesSysting,
  parse: parseSysting,
  parseAsync: parseSystingAsync,
} as const satisfies BinaryFormatSpec
