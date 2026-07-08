import type { BinaryFormatConverter } from '../converter.ts'
import { parseSysting, parseSystingAsync, parseSystingHeader } from './parse.ts'

const matchesSysting = (bytes: Uint8Array): boolean => {
  // The signature is entirely in the header line: classify only it, with the
  // parser's own header grammar so detection and parsing agree on what a
  // systing export is. Decoding stops at the first newline, so detection
  // stays cheap for arbitrarily large inputs.
  const newlineIndex = bytes.indexOf(NEWLINE)
  const headerBytes =
    newlineIndex === -1 ? bytes : bytes.subarray(0, newlineIndex)
  try {
    parseSystingHeader(
      (textDecoder ??= new TextDecoder(`utf-8`, { fatal: true })).decode(
        headerBytes,
      ),
    )
    return true
  } catch {
    return false
  }
}

const NEWLINE = 0x0a

let textDecoder: InstanceType<typeof TextDecoder> | undefined

export const systingConverter = {
  title: `systing profile export`,
  extension: `systing`,
  languages: [`c`, `python`, `rust`],
  fallbackOrigin: `systing`,
  type: `binary`,
  shape: `profile`,
  matches: matchesSysting,
  parse: parseSysting,
  parseAsync: parseSystingAsync,
} as const satisfies BinaryFormatConverter
