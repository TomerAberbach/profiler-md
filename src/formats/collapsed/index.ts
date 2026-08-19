import type { BinaryFormatConverter } from '../converter.ts'
import { matchesCollapsed } from './matches.ts'
import { parseCollapsed, parseCollapsedAsync } from './parse.ts'

export const collapsedConverter = {
  title: `Collapsed stacks`,
  extension: `collapsed`,
  languages: [`elixir`, `java`, `php`, `python`, `ruby`],
  // FlameGraph's stack-collapsing scripts define the format and profile nothing
  // themselves, so no emitting origin is canonical.
  fallbackOrigin: `unknown`,
  type: `binary`,
  matches: matchesCollapsed,
  parse: parseCollapsed,
  parseAsync: parseCollapsedAsync,
} as const satisfies BinaryFormatConverter
