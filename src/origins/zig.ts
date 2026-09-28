/**
 * Zig registers no origin of its own, because a Zig program compiles to a
 * native binary like any other language.
 */

import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferencePathOrName } from '../location.ts'
import type { FunctionCategory, ProfileEntry } from '../options.ts'
import type { EntryMatchRule } from './origin.ts'

/**
 * Categorizes sources the Zig toolchain ships as `stdlib`: the standard
 * library, the compiler runtime that provides `memcpy` and the other builtins,
 * the bundled libc and C++ runtimes, and the sanitizer runtimes.
 *
 * A Zig program statically links them, so their frames come from the
 * executable's own mapping. Only the source path distinguishes them from user
 * code.
 */
export const zigStdlibCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  location && ZIG_TOOLCHAIN_SOURCE.test(sourceReferencePathOrName(location))
    ? `stdlib`
    : undefined

/**
 * A source under a Zig installation's `lib/` directory, which distribution
 * packages nest one level deeper in `lib/zig/`. The regex matches the subtrees
 * and runtime sources by name rather than the installation root, which varies
 * per install method.
 *
 * A project with a directory of its own under one of those names matches too.
 * `stdlib` still describes a `lib/libc/` freestanding runtime or a `lib/libcxx/`
 * vendored C++ library. The regex miscategorizes a `lib/std/` module of the
 * project's own as `stdlib`, though naming a Zig module
 * `std` collides with the standard library import.
 */
const ZIG_TOOLCHAIN_SOURCE =
  /(?:^|\/)lib\/(?:zig\/)?(?:std\/.+\.zig|(?:c|compiler_rt|fuzzer|ubsan_rt|zigc)\.zig|(?:compiler_rt|fuzzer|libc|libcxx|libcxxabi|libunwind|tsan|ubsan)\/)/u

/**
 * The compiler-assigned ID of a generic function's instantiation
 * (`mem.Allocator.free__anon_10443`) or of an anonymous type
 * (`zig.Ast.TokenList__struct_2756`), which changes between builds when the
 * compiler's numbering shifts. The kept `__anon` or `__struct` marks the name as
 * an instantiation or an anonymous type. The compiler names an anonymous union,
 * enum, or opaque type the same way.
 *
 * Stripping the ID gives every instantiation of one generic the same match key.
 * A diff pairs each instantiation whose ID is unchanged with itself first. It
 * pairs the rest of a generic's instantiations in an arbitrary order, because
 * they share the generic's definition line.
 */
const COMPILER_ASSIGNED_ID_REGEX =
  /(?<kept>__(?:anon|struct|union|enum|opaque))_\d+/gu

/**
 * The rule strips a suffix that occurs only in names the Zig compiler
 * generates.
 */
export const ZIG_NAME_MATCH_RULES: readonly EntryMatchRule[] = [
  [COMPILER_ASSIGNED_ID_REGEX, `$<kept>`],
]
