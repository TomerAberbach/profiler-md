import type { BinaryFormatConverter } from '../converter.ts'
import { aggregateCollapsed } from './aggregate.ts'
import { parseCollapsed } from './parse.ts'
import type { CollapsedProfile } from './parse.ts'

const matchesCollapsed = (profile: CollapsedProfile): boolean =>
  // Empty or comment-only input parses to zero stacks. Claiming it would make
  // collapsed swallow any blank/unknown text during auto-detection instead of
  // letting detection fail, so require at least one stack.
  profile.stacks.length > 0 &&
  // No frame contains a NUL byte, which never appears in real collapsed text
  // and betrays a binary input that happened to decode as valid UTF-8.
  !profile.stacks.some(stack =>
    stack.frames.some(frame => frame.includes(`\0`)),
  )

export const collapsedConverter = {
  title: `Collapsed stacks`,
  type: `binary`,
  shape: `profile`,
  parse: parseCollapsed,
  matches: matchesCollapsed,
  aggregate: aggregateCollapsed,
} satisfies BinaryFormatConverter<CollapsedProfile>
