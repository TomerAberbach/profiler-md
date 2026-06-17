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
  // A streaming decoder must be exclusive to this call, since it buffers bytes
  // across chunks; sharing one would corrupt interleaved iterations.
  const decoder = new TextDecoder(`utf-8`, { fatal: true })

  let pending = ``
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    pending += decoder.decode(bytes.subarray(offset, offset + chunkSize), {
      stream: true,
    })

    const lines = pending.split(`\n`)
    // The last element is an as-yet-unterminated line; carry it to the next
    // chunk (or the flush below).
    pending = lines.pop()!
    for (const line of lines) {
      yield stripCarriageReturn(line)
    }
  }

  // Flush buffered bytes; throws under `fatal` if a trailing sequence is
  // truncated.
  pending += decoder.decode()
  yield stripCarriageReturn(pending)
}

/**
 * The number of bytes {@link decodeUtf8Lines} decodes per chunk. Large enough
 * to amortize decode calls, small enough that a chunk's decoded string stays
 * far below the maximum string length.
 */
const DECODE_CHUNK_SIZE = 64 * 1024 * 1024

const stripCarriageReturn = (line: string): string =>
  line.endsWith(`\r`) ? line.slice(0, -1) : line
