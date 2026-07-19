import type { BinaryFormatConverter } from '../converter.ts'
import { matchesCollapsed } from './matches.ts'
import { parseCollapsed, parseCollapsedAsync } from './parse.ts'

export const collapsedConverter = {
  title: `Collapsed stacks`,
  extension: `collapsed`,
  languages: [`elixir`, `java`, `python`, `ruby`],
  fallbackOrigin: `unknown`,
  type: `binary`,
  matches: matchesCollapsed,
  parse: parseCollapsed,
  parseAsync: parseCollapsedAsync,
} as const satisfies BinaryFormatConverter
