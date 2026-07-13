/**
 * Whether the input could parse as JSON.
 *
 * A JSON value's first non-whitespace character is one of a small set, so
 * anything else (e.g. a binary format's magic bytes) rules JSON out without the
 * parse attempt, which would otherwise decode the entire input to a string
 * before failing on that character.
 *
 * Scans only a bounded prefix; an all-whitespace prefix conservatively reports
 * possible-JSON so the parser makes the call.
 */
export const maybeJson = (data: string | Uint8Array): boolean => {
  // `TextDecoder` strips a UTF-8 byte order mark, so JSON bytes may carry one.
  let start = 0
  if (
    typeof data !== `string` &&
    data[0] === 0xef &&
    data[1] === 0xbb &&
    data[2] === 0xbf
  ) {
    start = 3
  }

  const end = Math.min(data.length, start + MAYBE_JSON_PREFIX_LENGTH)
  for (let i = start; i < end; i++) {
    // Code units, not code points: the loop only advances past ASCII
    // whitespace, so it never steps into the middle of a surrogate pair.
    // eslint-disable-next-line unicorn/prefer-code-point
    const code = typeof data === `string` ? data.charCodeAt(i) : data[i]!
    switch (code) {
      // JSON whitespace: tab, line feed, carriage return, space.
      case 0x09:
      case 0x0a:
      case 0x0d:
      case 0x20:
        continue
      case 0x7b: // {
      case 0x5b: // [
      case 0x22: // "
      case 0x2d: // -
      case 0x74: // `t(rue)`
      case 0x66: // `f(alse)`
      case 0x6e: // `n(ull)`
        return true
      default:
        // 0-9
        return code >= 0x30 && code <= 0x39
    }
  }
  return true
}

/** {@link maybeJson} for a `Blob`, reading only the scanned prefix. */
export const maybeJsonAsync = async (data: Blob): Promise<boolean> =>
  maybeJson(
    new Uint8Array(await data.slice(0, MAYBE_JSON_PREFIX_LENGTH).arrayBuffer()),
  )

const MAYBE_JSON_PREFIX_LENGTH = 1024
