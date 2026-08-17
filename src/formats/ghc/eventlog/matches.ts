import { HEADER_BEGIN, MARKER_SIZE } from './parse.ts'

/**
 * Every eventlog begins with the header marker, so detection reads only it and
 * leaves the rest to the parser.
 */
export const matchesGhcEventlog = (bytes: Uint8Array): boolean => {
  if (bytes.length < MARKER_SIZE) {
    return false
  }

  let magic = 0
  for (let index = 0; index < MARKER_SIZE; index++) {
    magic = (magic << 8) | bytes[index]!
  }
  return magic >>> 0 === HEADER_BEGIN
}
