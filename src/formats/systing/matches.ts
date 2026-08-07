export const matchesSysting = (bytes: Uint8Array): boolean => {
  // The signature is in the header line alone, so classify only it. The check
  // verifies identity alone, leaving the parser to reject an unsupported
  // version or stack order with a reason
  let json: unknown
  try {
    json = JSON.parse(decodeHeaderLine(bytes))
  } catch {
    return false
  }

  if (typeof json !== `object` || json === null || Array.isArray(json)) {
    return false
  }

  return Number.isInteger(
    (json as Record<string, unknown>).systing_profile_export,
  )
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
