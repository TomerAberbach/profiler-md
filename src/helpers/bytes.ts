export const streamToUint8Array = async (
  stream: ReadableStream<Uint8Array>,
): Promise<Uint8Array> => {
  const chunks: Uint8Array[] = []

  const reader = stream.getReader()
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) {
        break
      }

      chunks.push(value)
    }
  } finally {
    reader.releaseLock()
  }

  return concatUint8Arrays(chunks)
}

export const concatUint8Arrays = (arrays: Iterable<Uint8Array>): Uint8Array => {
  const arrayArray: Uint8Array[] = Array.isArray(arrays)
    ? (arrays as Uint8Array[])
    : [...arrays]
  const concatenated = new Uint8Array(
    arrayArray.reduce((size, array) => size + array.length, 0),
  )
  let offset = 0
  for (const array of arrayArray) {
    concatenated.set(array, offset)
    offset += array.length
  }
  return concatenated
}

/**
 * Lazily decodes {@link bytes} as UTF-8 and yields its lines, splitting on `\n`
 * and stripping a trailing `\r`.
 *
 * Decodes in bounded chunks so the full text is never held as a single string,
 * sidestepping the ~512 MiB maximum string length that
 * `new TextDecoder().decode(bytes)` would hit on very large text profiles.
 * Decoding is synchronous and correct across multi-byte sequences split at a
 * chunk boundary.
 *
 * Throws on invalid UTF-8, including a truncated trailing sequence, so a caller
 * can treat a failure as "these bytes aren't this text format".
 *
 * Yields the same lines as `decoder.decode(bytes).split('\n')` would (with `\r`
 * stripped), i.e. a trailing empty line when the input ends with a newline.
 *
 * {@link chunkSize} is exposed mainly for tests; the default suits real inputs.
 */
export function* decodeUtf8Lines(
  bytes: Uint8Array,
  chunkSize: number = DECODE_CHUNK_SIZE,
): Iterable<string> {
  const decoder = new Utf8LineDecoder()
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    yield* decoder.push(bytes.subarray(offset, offset + chunkSize))
  }
  yield* decoder.flush()
}

/**
 * Lazily decodes {@link stream} as UTF-8 and yields its lines, splitting on
 * `\n` and stripping a trailing `\r`.
 *
 * Reads the stream chunk by chunk, decoding lines and discarding raw bytes as
 * it goes, so peak memory is just the lines a caller retains rather than the
 * whole input. Decoding is correct across multi-byte sequences split at a chunk
 * boundary.
 *
 * Throws on invalid UTF-8, including a truncated trailing sequence, so a caller
 * can treat a failure as "these bytes aren't this text format".
 *
 * Yields a trailing empty line when the input ends with a newline.
 */
export async function* decodeUtf8LinesAsync(
  stream: ReadableStream<Uint8Array>,
): AsyncGenerator<string> {
  const decoder = new Utf8LineDecoder()
  const reader = stream.getReader()
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) {
        break
      }

      yield* decoder.push(value)
    }
  } finally {
    reader.releaseLock()
  }

  yield* decoder.flush()
}

/**
 * Whether a NUL byte appears within the input's leading bytes.
 *
 * Text never contains a NUL, while a binary input stores one within its first
 * bytes, in a magic number, a length field, or padding. Bounding the scan
 * rejects a binary input at constant cost instead of reading a large text
 * input end to end.
 */
export const hasLeadingNulByte = (bytes: Uint8Array): boolean =>
  bytes.subarray(0, NUL_SCAN_LENGTH).includes(0)

const NUL_SCAN_LENGTH = 4096

/** A streaming UTF-8 and line-splitting decoder. */
class Utf8LineDecoder {
  // A streaming decoder must be exclusive to this instance, since it buffers
  // bytes across chunks; sharing one would corrupt interleaved iterations.
  readonly #decoder = new TextDecoder(`utf-8`, { fatal: true })
  #pending = ``

  public *push(bytes: Uint8Array): Iterable<string> {
    this.#pending += this.#decoder.decode(bytes, { stream: true })

    const lines = this.#pending.split(`\n`)
    // The last element is an as-yet-unterminated line; carry it to the next
    // chunk (or the flush below).
    this.#pending = lines.pop()!
    for (const line of lines) {
      yield stripCarriageReturn(line)
    }
  }

  /**
   * Flush buffered bytes.
   *
   * @throws if a trailing sequence is truncated.
   */
  public *flush(): Iterable<string> {
    this.#pending += this.#decoder.decode()
    yield stripCarriageReturn(this.#pending)
  }
}

/**
 * The number of bytes {@link decodeUtf8Lines} decodes per chunk. Large enough
 * to amortize decode calls, small enough that a chunk's decoded string stays
 * far below the maximum string length.
 */
const DECODE_CHUNK_SIZE = 64 * 1024 * 1024

const stripCarriageReturn = (line: string): string =>
  line.endsWith(`\r`) ? line.slice(0, -1) : line

/**
 * A FIFO byte buffer that accumulates a stream's reads and hands back whole
 * chunks. Header fields are read in place from the buffered prefix; taking a
 * chunk copies it out and drops it, so only the bytes not yet formed into a
 * chunk are retained.
 */
export class ByteQueue {
  readonly #parts: Uint8Array[] = []
  #length = 0

  public get length(): number {
    return this.#length
  }

  public push(part: Uint8Array): void {
    if (part.length > 0) {
      this.#parts.push(part)
      this.#length += part.length
    }
  }

  /** Reads a big-endian uint32 at `offset`. Requires `length >= offset + 4`. */
  public uint32(offset: number): number {
    return new DataView(this.#head(offset + 4).buffer).getUint32(offset)
  }

  /**
   * Reads a big-endian signed 64-bit integer at `offset` as a number. Requires
   * `length >= offset + 8`.
   */
  public int64(offset: number): number {
    return Number(
      new DataView(this.#head(offset + 8).buffer).getBigInt64(offset),
    )
  }

  /** Removes and returns the first `size` bytes. Requires `length >= size`. */
  public take(size: number): Uint8Array {
    const chunk = new Uint8Array(size)
    let written = 0
    while (written < size) {
      const part = this.#parts[0]!
      const count = Math.min(part.length, size - written)
      chunk.set(part.subarray(0, count), written)
      if (count === part.length) {
        this.#parts.shift()
      } else {
        this.#parts[0] = part.subarray(count)
      }
      written += count
    }
    this.#length -= size
    return chunk
  }

  /** Copies the first `count` buffered bytes into a fresh contiguous array. */
  #head(count: number): Uint8Array {
    const head = new Uint8Array(count)
    let written = 0
    for (const part of this.#parts) {
      if (written >= count) {
        break
      }
      const slice = part.subarray(0, count - written)
      head.set(slice, written)
      written += slice.length
    }
    return head
  }
}
