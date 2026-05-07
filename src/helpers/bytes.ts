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
