import { streamToUint8Array } from '../../helpers/bytes.ts'
import type { BinaryFormatConverter } from '../converter.ts'
import { matchesMemray } from './matches.ts'
import { parseMemray } from './parse.ts'

export const memrayConverter = {
  title: `memray`,
  extension: `memray.bin`,
  languages: [`python`],
  // Only memray writes the format it defines.
  fallbackOrigin: `memray`,
  type: `binary`,
  matches: matchesMemray,
  parse: parseMemray,
  // A capture is read twice, as a state machine over its whole record stream,
  // so the stream is buffered rather than consumed incrementally.
  parseAsync: async stream => parseMemray(await streamToUint8Array(stream)),
} as const satisfies BinaryFormatConverter
