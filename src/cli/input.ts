import { openAsBlob } from 'node:fs'
import { stat } from 'node:fs/promises'
import type { Transform } from 'node:stream'
import { blob } from 'node:stream/consumers'
import { pipeline } from 'node:stream/promises'
import { createBrotliDecompress, createGunzip } from 'node:zlib'
import { CliError } from './error.ts'

export const openInputAsBlob = async (
  filePath: string | undefined,
): Promise<Blob> => decompressBlob(await openRawInputAsBlob(filePath), filePath)

const openRawInputAsBlob = async (
  filePath: string | undefined,
): Promise<Blob> => {
  if (!filePath) {
    return blob(process.stdin)
  }

  // `openAsBlob` reports every failure as `Unable to open file as blob`, so
  // diagnose the common failures upfront for a useful error message.
  let stats
  try {
    stats = await stat(filePath)
  } catch (error) {
    if (error instanceof Error && `code` in error && error.code === `ENOENT`) {
      throw new CliError(`cannot read ${filePath}: no such file`, 1, {
        cause: error,
      })
    }
    throw new CliError(`cannot read ${filePath}: ${reasonOf(error)}`, 1, {
      cause: error,
    })
  }
  if (stats.isDirectory()) {
    throw new CliError(`cannot read ${filePath}: is a directory`, 1)
  }

  try {
    return await openAsBlob(filePath)
  } catch (error) {
    throw new CliError(`cannot read ${filePath}: ${reasonOf(error)}`, 1, {
      cause: error,
    })
  }
}

const decompressBlob = async (
  data: Blob,
  filePath: string | undefined,
): Promise<Blob> => {
  try {
    if (filePath?.endsWith(`.br`)) {
      return await decompressStream(
        data,
        createBrotliDecompress({ chunkSize: DECOMPRESS_CHUNK_SIZE }),
      )
    }
    const header = new Uint8Array(await data.slice(0, 2).arrayBuffer())
    if (header[0] === 0x1f && header[1] === 0x8b) {
      return await decompressStream(
        data,
        createGunzip({ chunkSize: DECOMPRESS_CHUNK_SIZE }),
      )
    }
    return data
  } catch (error) {
    throw new CliError(
      `cannot decompress ${filePath ?? `stdin`}: ${reasonOf(error)}`,
      1,
      { cause: error },
    )
  }
}

const reasonOf = (error: unknown): string =>
  error instanceof Error ? error.message : String(error)

/**
 * The output buffer size for the decompression transforms. With zlib's 16 KiB
 * default, a transform emits a large decompressed input as thousands of
 * chunks, each a separate event-loop hop. A larger buffer keeps the hop count
 * small for the cost of one buffer's memory.
 */
const DECOMPRESS_CHUNK_SIZE = 4 * 1024 * 1024

const decompressStream = async (
  data: Blob,
  transform: Transform,
): Promise<Blob> => {
  const decompressedData = blob(transform)
  await pipeline(data.stream(), transform)
  return decompressedData
}
