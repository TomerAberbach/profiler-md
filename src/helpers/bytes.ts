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

/**
 * Wraps {@link stream} so an error it throws is replaced with the error
 * {@link toError} builds from it.
 *
 * The source is read on the first pull, so a wrapper nothing reads leaves the
 * source unlocked and cancellable.
 */
export const classifyStreamFailures = (
  stream: ReadableStream<Uint8Array>,
  toError: (error: unknown) => Error,
): ReadableStream<Uint8Array> => {
  let reader: ReadableStreamDefaultReader<Uint8Array> | undefined
  return new ReadableStream<Uint8Array>({
    pull: async controller => {
      let result
      try {
        result = await (reader ??= stream.getReader()).read()
      } catch (error: unknown) {
        throw toError(error)
      }
      if (result.done) {
        controller.close()
      } else {
        controller.enqueue(result.value)
      }
    },
    cancel: async reason => await (reader ?? stream).cancel(reason),
  })
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
 * and stripping a trailing `\r`. Yields a trailing empty line when the input
 * ends with a newline.
 *
 * Decodes in bounded chunks so the full text is never held as a single string,
 * sidestepping the ~512 MiB maximum string length that
 * `new TextDecoder().decode(bytes)` would hit on a large input. Decoding is
 * correct across multi-byte sequences split at a chunk boundary.
 *
 * Replaces an invalid sequence, including a truncated trailing one, with
 * U+FFFD.
 *
 * Only tests need to pass {@link chunkSize}.
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
 * `\n` and stripping a trailing `\r`. Yields a trailing empty line when the
 * input ends with a newline.
 *
 * Discards raw bytes as it decodes, so peak memory is the lines a caller
 * retains rather than the whole input. Decoding is correct across multi-byte
 * sequences split at a chunk boundary.
 *
 * Replaces an invalid sequence, including a truncated trailing one, with
 * U+FFFD.
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

export const startsWith = (bytes: Uint8Array, prefix: Uint8Array): boolean => {
  if (bytes.length < prefix.length) {
    return false
  }
  for (let index = 0; index < prefix.length; index++) {
    if (bytes[index] !== prefix[index]) {
      return false
    }
  }
  return true
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

class Utf8LineDecoder {
  // A streaming decoder buffers bytes across chunks, so sharing one would
  // corrupt interleaved iterations
  readonly #decoder = new TextDecoder(`utf-8`)
  #pending = ``

  public *push(bytes: Uint8Array): Iterable<string> {
    this.#pending += this.#decoder.decode(bytes, { stream: true })

    const lines = this.#pending.split(`\n`)
    // The last element is an unterminated line, which the next push or flush
    // completes
    this.#pending = lines.pop()!
    for (const line of lines) {
      yield stripCarriageReturn(line)
    }
  }

  public *flush(): Iterable<string> {
    this.#pending += this.#decoder.decode()
    yield stripCarriageReturn(this.#pending)
  }
}

/**
 * Large enough to amortize decode calls, and small enough that a chunk's
 * decoded string stays far below the maximum string length.
 */
const DECODE_CHUNK_SIZE = 64 * 1024 * 1024

const stripCarriageReturn = (line: string): string =>
  line.endsWith(`\r`) ? line.slice(0, -1) : line

/**
 * A FIFO byte buffer that accumulates a stream's reads and hands back whole
 * chunks. Header fields are read in place from the buffered prefix. Taking a
 * chunk drops it from the queue, so only the bytes not yet formed into a chunk
 * are retained.
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

  /** Reads the byte at `offset`. Requires `length > offset`. */
  public uint8(offset: number): number {
    return this.#head(offset + 1)[offset]!
  }

  /**
   * Reads a uint32 at `offset`, big-endian by default. Requires
   * `length >= offset + 4`.
   */
  public uint32(offset: number, littleEndian = false): number {
    return new DataView(this.#head(offset + 4).buffer).getUint32(
      offset,
      littleEndian,
    )
  }

  /**
   * Reads a signed 64-bit integer at `offset` as a number, big-endian by
   * default. Requires `length >= offset + 8`.
   */
  public int64(offset: number, littleEndian = false): number {
    return Number(
      new DataView(this.#head(offset + 8).buffer).getBigInt64(
        offset,
        littleEndian,
      ),
    )
  }

  /**
   * Reads an unsigned 64-bit integer at `offset` as a number, big-endian by
   * default. A value above 2^53 is rounded to the nearest number. Requires
   * `length >= offset + 8`.
   */
  public uint64(offset: number, littleEndian = false): number {
    return Number(
      new DataView(this.#head(offset + 8).buffer).getBigUint64(
        offset,
        littleEndian,
      ),
    )
  }

  /**
   * Removes and returns the first `size` bytes. Requires `length >= size`.
   *
   * The bytes are a view of the pushed part when one part holds them all, and
   * a copy otherwise.
   */
  public take(size: number): Uint8Array {
    const first = this.#parts[0]
    if (first !== undefined && first.length >= size) {
      if (first.length === size) {
        this.#parts.shift()
      } else {
        this.#parts[0] = first.subarray(size)
      }
      this.#length -= size
      return first.subarray(0, size)
    }

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
