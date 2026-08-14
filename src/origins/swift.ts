import type { DeepReadonly } from '../helpers/types.ts'
import type { FunctionCategory, ProfileEntry } from '../options.ts'

export const swiftStdlibCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  name && SWIFT_STDLIB_MANGLED_NAME.test(name) ? `stdlib` : undefined

/**
 * A Swift 5 mangled name (`$s`) whose leading context is the standard library:
 * the `s` substitution for the `Swift` module, or one of the `S`-prefixed
 * substitutions for a standard library type or protocol (`Sa` for `Array`, `SS`
 * for `String`, `Sw` for `UnsafeMutableRawPointer`). Matches a generic
 * specialization (`…_Tg5`) of a standard library function too, since the
 * specialization is a compiled copy of that function's body, whichever module's
 * type it was specialized for.
 *
 * The standard library is statically specialized and inlined into the
 * executable, so its frames come from the program's own mapping and are
 * attributed to `<compiler-generated>` or to the source file that instantiated
 * them. The mangled name is the remaining evidence.
 *
 * The grammar is the guard that excludes the profiled program's own code: every
 * other module, including the program's, mangles as a length-prefixed
 * identifier (`11SwiftParser`), because the substitutions are reserved.
 *
 * Misses a declaration imported from C, whose module mangles as `So` or `SC`.
 * Misses the core libraries the toolchain ships alongside the standard library
 * (Foundation, Dispatch), which mangle their module as a length-prefixed
 * identifier like any package. Misses an extension of a standard library type
 * declared elsewhere, which mangles the extended type first.
 */
const SWIFT_STDLIB_MANGLED_NAME = /^\$s(?:s|S(?!o|C)[A-Za-z])/u
