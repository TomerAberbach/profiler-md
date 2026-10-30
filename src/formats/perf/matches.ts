import { startsWith } from '../../helpers/bytes.ts'
import { PERF_MAGIC, SWAPPED_PERF_MAGIC, V1_PERF_MAGIC } from './parse/index.ts'

/**
 * Detects a `perf.data` file by the magic it begins with, accepting the
 * versions and byte orders the parser rejects so the rejection states why.
 */
export const matchesPerf = (bytes: Uint8Array): boolean =>
  startsWith(bytes, PERF_MAGIC) ||
  startsWith(bytes, SWAPPED_PERF_MAGIC) ||
  startsWith(bytes, V1_PERF_MAGIC)
