import type { BinaryFormatConverter } from '../converter.ts'
import { matchesMemray } from './matches.ts'
import { parseMemray, parseMemrayAsync } from './parse.ts'

export const memrayConverter = {
  format: `memray`,
  title: `memray`,
  extension: `memray.bin`,
  languages: [`python`],
  // Only memray writes the format it defines.
  fallbackOrigin: `memray`,
  type: `binary`,
  matches: matchesMemray,
  parse: parseMemray,
  parseAsync: parseMemrayAsync,
} as const satisfies BinaryFormatConverter
