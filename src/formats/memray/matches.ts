import { startsWith } from '../../helpers/bytes.ts'
import { MEMRAY_MAGIC } from './parse.ts'

/** Whether the bytes are a memray capture. */
export const matchesMemray = (bytes: Uint8Array): boolean =>
  startsWith(bytes, MEMRAY_MAGIC)
