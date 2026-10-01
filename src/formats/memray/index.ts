import type { BinaryFormatSpec } from '../spec.ts'
import { matchesMemray } from './matches.ts'
import { parseMemray, parseMemrayAsync } from './parse.ts'

export const memrayFormatSpec = {
  id: `memray`,
  title: `memray`,
  extension: `memray.bin`,
  languages: [`python`],
  // Only memray writes the format it defines.
  fallbackOrigin: `memray`,
  type: `binary`,
  matches: matchesMemray,
  parse: parseMemray,
  parseAsync: parseMemrayAsync,
} as const satisfies BinaryFormatSpec
