import { openAsBlob } from 'node:fs'
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

  try {
    return await openAsBlob(filePath)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    throw new CliError(message, 1)
  }
}

const decompressBlob = async (
  data: Blob,
  filePath: string | undefined,
): Promise<Blob> => {
  try {
    if (filePath?.endsWith(`.br`)) {
      return await decompressStream(data, createBrotliDecompress())
    }
    const header = new Uint8Array(await data.slice(0, 2).arrayBuffer())
    if (header[0] === 0x1f && header[1] === 0x8b) {
      return await decompressStream(data, createGunzip())
    }
    return data
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    throw new CliError(`failed to decompress input: ${message}`, 1)
  }
}

const decompressStream = async (
  data: Blob,
  transform: Transform,
): Promise<Blob> => {
  const decompressedData = blob(transform)
  await pipeline(data.stream(), transform)
  return decompressedData
}
