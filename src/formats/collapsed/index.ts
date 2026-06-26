import { decodeUtf8Lines } from '../../helpers/bytes.ts'
import type { BinaryFormatConverter } from '../converter.ts'
import {
  parseCollapsed,
  parseCollapsedAsync,
  parseCollapsedLine,
} from './parse.ts'

const matchesCollapsed = (bytes: Uint8Array): boolean => {
  // A NUL byte never appears in real collapsed text and reveals a binary input
  // that decodes as valid UTF-8.
  if (bytes.includes(0)) {
    return false
  }

  // Require at least one stack: empty or comment-only input would otherwise let
  // collapsed claim any blank/unknown text during auto-detection. Classifying
  // the first non-comment line with the parser's own line grammar keeps
  // detection and parsing agreeing on what a stack line is, and stays cheap:
  // it parses only one line.
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

export const collapsedConverter = {
  title: `Collapsed stacks`,
  type: `binary`,
  shape: `profile`,
  matches: matchesCollapsed,
  parse: parseCollapsed,
  parseAsync: parseCollapsedAsync,
} satisfies BinaryFormatConverter
