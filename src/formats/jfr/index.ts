import type { BinaryFormatConverter } from '../converter.ts'
import { parseJfr, parseJfrAsync } from './parse.ts'

const matchesJfr = (bytes: Uint8Array): boolean =>
  bytes.length >= 4 &&
  new DataView(bytes.buffer, bytes.byteOffset, 4).getUint32(0) === JFR_MAGIC

/** The 4-byte magic that begins every JFR chunk: `FLR\0`. */
const JFR_MAGIC = 0x464c5200

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
