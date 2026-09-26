import { decodeUtf8Lines, hasLeadingNulByte } from '../../helpers/bytes.ts'
import { parseCollapsedLine } from './parse.ts'

export const matchesCollapsed = (bytes: Uint8Array): boolean => {
  // A NUL byte never appears in real collapsed text and reveals a binary input
  // that decodes as valid UTF-8.
  if (hasLeadingNulByte(bytes)) {
    return false
  }

  // Require a stack line, because empty or comment-only input would otherwise
  // let collapsed match any blank or unknown text during auto-detection. The
  // parser's own line grammar keeps detection and parsing agreeing on what a
  // stack line is.
  for (const line of decodeUtf8Lines(bytes)) {
    try {
      if (parseCollapsedLine(line) !== undefined) {
        return true
      }
    } catch {
      return false
    }
  }
  return false
}
