import { parseSystingHeader } from './parse.ts'

export const matchesSysting = (bytes: Uint8Array): boolean => {
  // The signature is entirely in the header line: classify only it, with the
  // parser's own header grammar so detection and parsing agree on what a
  // systing export is
  try {
    parseSystingHeader(decodeHeaderLine(bytes))
    return true
  } catch {
    return false
  }
}

// Decoding stops at the first newline, so detection stays cheap for
// arbitrarily large inputs
const decodeHeaderLine = (bytes: Uint8Array): string => {
  const newlineIndex = bytes.indexOf(NEWLINE)
  const headerBytes =
    newlineIndex === -1 ? bytes : bytes.subarray(0, newlineIndex)
  return (textDecoder ??= new TextDecoder(`utf-8`, { fatal: true })).decode(
    headerBytes,
  )
}

const NEWLINE = 0x0a

let textDecoder: InstanceType<typeof TextDecoder> | undefined
