/** Wraps {@link chunks} in a `ReadableStream`. */
export const streamOf = (...chunks: Uint8Array[]): ReadableStream<Uint8Array> =>
  new ReadableStream({
    start(controller) {
      for (const chunk of chunks) {
        controller.enqueue(chunk)
      }
      controller.close()
    },
  })

/** Splits {@link bytes} into chunks of at most {@link chunkSize} bytes. */
export const chunk = (bytes: Uint8Array, chunkSize: number): Uint8Array[] => {
  const chunks: Uint8Array[] = []
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    chunks.push(bytes.subarray(offset, offset + chunkSize))
  }
  return chunks
}
