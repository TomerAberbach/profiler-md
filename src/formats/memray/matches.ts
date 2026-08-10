import { startsWith } from '../../helpers/bytes.ts'
import { decompressLz4Frame, isLz4Frame } from '../../helpers/lz4.ts'
import { MEMRAY_MAGIC } from './parse.ts'

/**
 * Whether the bytes are a memray capture.
 *
 * `memray run` compresses its captures unless it is passed `--no-compress`,
 * so the magic is behind an LZ4 frame and only decompressing reaches it. Just
 * enough of the frame is decompressed to read the magic, so an LZ4 file of
 * anything else costs little to reject.
 */
export const matchesMemray = (bytes: Uint8Array): boolean => {
  if (startsWith(bytes, MEMRAY_MAGIC)) {
    return true
  }
  if (!isLz4Frame(bytes)) {
    return false
  }

  try {
    return startsWith(
      decompressLz4Frame(bytes, MEMRAY_MAGIC.length),
      MEMRAY_MAGIC,
    )
  } catch {
    return false
  }
}
