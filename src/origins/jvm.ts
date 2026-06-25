import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import { locationlessStdlibCategory } from './categorize.ts'
import { someEntry } from './origin.ts'
import type { OriginSpec } from './origin.ts'

export const jvmOriginSpec = {
  id: `jvm`,
  language: `java`,
  formats: [`jfr`],
  matches: context =>
    someEntry(context, entry => jvmStdlibCategory(entry) !== undefined),
  categorize: entry =>
    jvmStdlibCategory(entry) ??
    nativeLibraryCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    `ours`,
} as const satisfies OriginSpec

/** Categorizes Java standard-library and JDK-internal frames as `stdlib`. */
const jvmStdlibCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location && JVM_STDLIB_CLASS.test(fileReferencePath(location))
    ? `stdlib`
    : undefined

/**
 * JVM frames carry the fully-qualified class as the location (e.g.
 * `java.util.concurrent.ForkJoinPool`); these package roots are the standard
 * library and JDK internals.
 */
const JVM_STDLIB_CLASS = /^(?:java|javax|jdk|sun|com\.sun)\./u

/** Categorizes native runtime-library frames as `stdlib`. */
const nativeLibraryCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location && NATIVE_LIBRARY.test(fileReferencePath(location))
    ? `stdlib`
    : undefined

/**
 * Native frames report a shared library (e.g. `libjvm.dylib`,
 * `libsystem_kernel.dylib`, or a versioned `libc.so.6`) as their location. The
 * extension is anchored to the end (allowing a trailing version like `.so.6`)
 * so a class whose package contains a segment named `so`/`dll`/`dylib` (e.g.
 * `com.acme.so.Helper`) isn't mistaken for a native library.
 */
const NATIVE_LIBRARY = /\.(?:dylib|so|dll)[\d.]*$/u
