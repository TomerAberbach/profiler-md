/**
 * Zig registers no origin of its own, because a Zig program compiles to a
 * native binary like any other language.
 */

import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferencePathOrName } from '../location.ts'
import type { FunctionCategory, ProfileEntry } from '../options.ts'

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
 * project's own, so the output drops its frames, though naming a Zig module
 * `std` collides with the standard library import.
 */
const ZIG_TOOLCHAIN_SOURCE =
  /(?:^|\/)lib\/(?:zig\/)?(?:std\/.+\.zig|(?:c|compiler_rt|fuzzer|ubsan_rt|zigc)\.zig|(?:compiler_rt|fuzzer|libc|libcxx|libcxxabi|libunwind|tsan|ubsan)\/)/u
