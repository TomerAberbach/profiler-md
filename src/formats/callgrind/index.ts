import { decodeUtf8Lines } from '../../helpers/bytes.ts'
import type { BinaryFormatConverter } from '../converter.ts'
import { parseCallgrind, parseCallgrindAsync } from './parse.ts'

const matchesCallgrind = (bytes: Uint8Array): boolean => {
  // A NUL byte never appears in real callgrind text and reveals a binary input
  // that decodes as valid UTF-8.
  if (bytes.includes(0)) {
    return false
  }

  // The optional `# callgrind format` marker, when present, must be the first
  // line and is definitive. Without it, require both an `events:` header and a
  // file/function position spec near the top: `events:` alone could appear in
  // unrelated text, and specs alone could be any key=value text. `parse` is
  // the authoritative check that the whole body follows the grammar.
  let sawEvents = false
  let sawPositionSpec = false
  let index = 0
  try {
    for (const line of decodeUtf8Lines(bytes)) {
      if (index === 0 && line === `# callgrind format`) {
        return true
      }
      if (EVENTS_HEADER.test(line)) {
        sawEvents = true
      } else if (POSITION_SPEC.test(line)) {
        sawPositionSpec = true
      }
      if (sawEvents && sawPositionSpec) {
        return true
      }
      if (++index >= MAX_DETECTION_LINES) {
        break
      }
    }
  } catch {
    // Not UTF-8 text.
    return false
  }
  return false
}

const EVENTS_HEADER = /^events:\s*\S/u
const POSITION_SPEC = /^(?:fl|fn|ob)=./u

/**
 * Real files declare `events:` within the header's first few lines and start
 * position specs right after it; a generous cap keeps detection cheap on large
 * non-callgrind text.
 */
const MAX_DETECTION_LINES = 500

export const callgrindConverter = {
  title: `Callgrind`,
  type: `binary`,
  shape: `profile`,
  matches: matchesCallgrind,
  parse: parseCallgrind,
  parseAsync: parseCallgrindAsync,
} satisfies BinaryFormatConverter
