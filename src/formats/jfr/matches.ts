export const matchesJfr = (bytes: Uint8Array): boolean =>
  bytes.length >= 4 &&
  new DataView(bytes.buffer, bytes.byteOffset, 4).getUint32(0) === JFR_MAGIC

/** The 4-byte magic that begins every JFR chunk: `FLR\0`. */
const JFR_MAGIC = 0x464c5200
