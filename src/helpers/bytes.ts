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
): Generator<string> {
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

/** A streaming UTF-8 and line-splitting decoder. */
class Utf8LineDecoder {
  // A streaming decoder must be exclusive to this instance, since it buffers
  // bytes across chunks; sharing one would corrupt interleaved iterations.
  readonly #decoder = new TextDecoder(`utf-8`, { fatal: true })
  #pending = ``

  public *push(bytes: Uint8Array): Generator<string> {
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
  public *flush(): Generator<string> {
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
