import type { BinaryFormatSpec } from '../spec.ts'
import { matchesCallgrind } from './matches.ts'
import { parseCallgrind, parseCallgrindAsync } from './parse.ts'

export const callgrindFormatSpec = {
  id: `callgrind`,
  title: `Callgrind`,
  extension: `callgrind`,
  languages: [`c`, `ruby`],
  // Valgrind's callgrind tool defines the format, and other profilers (e.g.
  // rbspy) export it to match. The parser detects specific emitters from the
  // file's `creator:` header and sets an origin hint.
  fallbackOrigin: `valgrind`,
  type: `binary`,
  matches: matchesCallgrind,
  parse: parseCallgrind,
  parseAsync: parseCallgrindAsync,
} as const satisfies BinaryFormatSpec
