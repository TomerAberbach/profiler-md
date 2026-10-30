import { JFR_MAGIC } from './parse.ts'

export const matchesJfr = (bytes: Uint8Array): boolean =>
  bytes.length >= 4 &&
  new DataView(bytes.buffer, bytes.byteOffset, 4).getUint32(0) === JFR_MAGIC
