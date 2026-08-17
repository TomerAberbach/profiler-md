import { hasPerfMagic } from './parse/index.ts'

/**
 * Detects a `perf.data` file by the magic it begins with, accepting the
 * versions and byte orders the parser rejects so the rejection states why.
 */
export const matchesPerf = (bytes: Uint8Array): boolean => hasPerfMagic(bytes)
