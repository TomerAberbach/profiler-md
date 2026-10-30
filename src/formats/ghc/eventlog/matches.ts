import { HEADER_BEGIN, MARKER_SIZE } from './parse.ts'

/**
 * Every eventlog begins with the header marker, so detection reads only it and
 * leaves the rest to the parser.
 */
export const matchesGhcEventlog = (bytes: Uint8Array): boolean =>
  bytes.length >= MARKER_SIZE &&
  new DataView(bytes.buffer, bytes.byteOffset, MARKER_SIZE).getUint32(0) ===
    HEADER_BEGIN
