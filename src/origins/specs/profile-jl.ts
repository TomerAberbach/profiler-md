import { categorizeGenericEntry } from '../categorize.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * Julia's built-in `Profile` standard-library module, which writes V8-format
 * heap snapshots.
 *
 * Detection relies on the synthetic `<generic memory ...>` node names Julia's
 * snapshot writer invents for `Memory{T}` objects. Julia's runtime is the
 * format's sole writer for Julia, so its writer's own labels are origin-level
 * evidence; `.jl` file extensions would be language-level, so detection
 * ignores them.
 */
export const profileJlOriginSpec = {
  id: `profile-jl`,
  title: `Profile`,
  formats: [`v8-heap-snapshot`],
  isMarkerEntry: ({ name, location }) =>
    location === undefined &&
    name !== undefined &&
    JULIA_GENERIC_MEMORY_NODES.has(name),
  categorizeEntry: categorizeGenericEntry,
} as const satisfies OriginSpec

/**
 * The synthetic class names Julia's snapshot writer gives `Memory{T}` buffer
 * nodes. V8's own writers label synthetic nodes with parenthesized or
 * `system /`-prefixed names, never angle brackets.
 */
const JULIA_GENERIC_MEMORY_NODES = new Set([
  `<generic memory - inline alloc>`,
  `<generic memory - malloc>`,
])
