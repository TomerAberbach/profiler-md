import { readFile } from 'node:fs/promises'
import { promisify } from 'node:util'
import { brotliDecompress, gunzip } from 'node:zlib'
import { CliError } from './error.ts'

export const readInput = async (
  filePath: string | undefined,
): Promise<Uint8Array> => {
  const data = await readRawInput(filePath)
  return decompress(data, filePath)
}

const readRawInput = async (
  filePath: string | undefined,
): Promise<Uint8Array> => {
  if (!filePath) {
    return Buffer.concat(await Array.fromAsync(process.stdin))
  }

  try {
    return await readFile(filePath)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    throw new CliError(message, 1)
  }
}

const decompress = async (
  data: Uint8Array,
  filePath: string | undefined,
): Promise<Uint8Array> => {
  try {
    if (filePath?.endsWith(`.br`)) {
      return await brotliDecompressAsync(data)
    }
    if (data[0] === 0x1f && data[1] === 0x8b) {
      return await gunzipAsync(data)
    }
    return data
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    throw new CliError(`failed to decompress input: ${message}`, 1)
  }
}

const gunzipAsync = promisify(gunzip)
const brotliDecompressAsync = promisify(brotliDecompress)
