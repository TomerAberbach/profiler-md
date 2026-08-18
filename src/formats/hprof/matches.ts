import { startsWith } from '../../helpers/bytes.ts'
import { HPROF_MAGIC } from './parse.ts'

/**
 * Whether the bytes are a heap dump.
 *
 * Detection accepts any version following the format name, so that a dump of
 * one the parser rejects reports that reason rather than going undetected.
 */
export const matchesHprof = (bytes: Uint8Array): boolean =>
  startsWith(bytes, HPROF_MAGIC)
