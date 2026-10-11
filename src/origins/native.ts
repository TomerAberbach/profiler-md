import type { StackFrame } from '../modalities/stack-frame.ts'
import { GO_LOCATION_MATCH_RULES } from './go.ts'
import { RUST_LOCATION_MATCH_RULES } from './rust.ts'
import { matchEntryFromRules } from './spec.ts'
import { swiftPlaceholderPathNormalizer } from './swift.ts'
import { ZIG_NAME_MATCH_RULES } from './zig.ts'

/**
 * Matches a native profiler's entry across profiles by each compiled language's
 * match rules. Each rule matches only a name or path that language's toolchain
 * writes, so it leaves other languages' entries unchanged.
 */
export const nativeMatchEntry = matchEntryFromRules({
  name: ZIG_NAME_MATCH_RULES,
  location: [...RUST_LOCATION_MATCH_RULES, ...GO_LOCATION_MATCH_RULES],
})

/**
 * Normalizes a native profiler's frame by each compiled language's conventions.
 * Each rule matches only a path that language's toolchain writes, so it leaves
 * other languages' frames unchanged.
 */
export const nativeNormalizeStackFrame = (input: StackFrame): StackFrame =>
  swiftPlaceholderPathNormalizer(input)
