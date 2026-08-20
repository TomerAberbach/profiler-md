import { createReadStream, openAsBlob } from 'node:fs'
import { access, constants, stat } from 'node:fs/promises'
import type { Transform } from 'node:stream'
import { blob } from 'node:stream/consumers'
import { pipeline } from 'node:stream/promises'
import { createBrotliDecompress, createGunzip } from 'node:zlib'
import { CliError, reasonOf } from './error.ts'

export const openInputAsBlob = async (
  filePath: string | undefined,
): Promise<Blob> => decompressBlob(await openRawInputAsBlob(filePath), filePath)

const openRawInputAsBlob = async (
  filePath: string | undefined,
): Promise<Blob> => {
  if (!filePath || STDIN_PATHS.has(filePath)) {
    return await readStreamAsBlob(process.stdin, filePath ?? `stdin`)
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
  // `openAsBlob` opens the file lazily, so an unreadable file fails on the
  // first read instead of here, as a decompression error.
  try {
    await access(filePath, constants.R_OK)
  } catch (error) {
    throw new CliError(`cannot read ${filePath}: permission denied`, 1, {
      cause: error,
    })
  }
  // `openAsBlob` takes the content length from the file's size. For a pipe,
  // terminal, or socket that size is the bytes currently buffered, not the
  // total the stream produces, so reading one returns a truncated blob or
  // fails.
  if (!stats.isFile()) {
    return await readStreamAsBlob(createReadStream(filePath), filePath)
  }

  try {
    return await openAsBlob(filePath)
  } catch (error) {
    throw new CliError(`cannot read ${filePath}: ${reasonOf(error)}`, 1, {
      cause: error,
    })
  }
}

/**
 * The paths that name the process's own standard input.
 *
 * Opening one of these paths creates a second descriptor on the same pipe, and
 * reads on it fail with `EAGAIN`, so read `process.stdin` instead.
 */
const STDIN_PATHS = new Set([`-`, `/dev/stdin`, `/dev/fd/0`, `/proc/self/fd/0`])

const readStreamAsBlob = async (
  stream: NodeJS.ReadableStream,
  source: string,
): Promise<Blob> => {
  try {
    return await blob(stream)
  } catch (error) {
    throw new CliError(`cannot read ${source}: ${reasonOf(error)}`, 1, {
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
