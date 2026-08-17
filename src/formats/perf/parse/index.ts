import { streamToUint8Array } from '../../../helpers/bytes.ts'
import type { CallStackProfile } from '../../../modalities/call-stack-profile/index.ts'
import { PerfFile } from './file.ts'

export { hasPerfMagic } from './file.ts'

/**
 * Parses a `perf.data` file into one profile per sampled event.
 *
 * The file is a header naming the recorded events, a stream of kernel records,
 * and metadata feature sections. The records that matter here are the samples,
 * each an instruction pointer and a call chain of return addresses, and the
 * memory mappings that state which file each of those addresses came from.
 *
 * A `perf.data` file carries no symbol tables, so an address resolves no
 * further than the object it fell in. Each frame is one address within one
 * mapped file, named by its file-relative offset, which is both what
 * `perf script` prints for an unsymbolized frame and what `addr2line` takes.
 * The runtime address it was sampled at would pair nothing across a diff, since
 * where a file is mapped in memory varies per run.
 *
 * @see https://github.com/torvalds/linux/blob/master/tools/perf/Documentation/perf.data-file-format.txt
 * @see https://github.com/torvalds/linux/blob/master/include/uapi/linux/perf_event.h
 */
export const parsePerf = (bytes: Uint8Array): CallStackProfile[] =>
  new PerfFile(bytes).toProfiles()

export const parsePerfAsync = async (
  stream: ReadableStream<Uint8Array>,
): Promise<CallStackProfile[]> => parsePerf(await streamToUint8Array(stream))
