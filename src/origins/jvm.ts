import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import { locationlessStdlibCategory } from './categorize.ts'
import { someEntry } from './origin.ts'
import type { OriginSpec } from './origin.ts'

export const jvmOriginSpec = {
  id: `jvm`,
  language: `java`,
  formats: [`jfr`, `collapsed`],
  matches: context =>
    someEntry(
      context,
      entry =>
        // JFR carries the class as a location; async-profiler's collapsed stacks
        // carry it in the name (`java/util/HashMap.put`) instead.
        jvmStdlibCategory(entry) !== undefined ||
        isJvmStdlibNameFrame(entry.name),
    ),
  categorize: entry =>
    jvmStdlibCategory(entry) ??
    nativeLibraryCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    `ours`,
  normalizeFrame: input => {
    if (input.location) {
      return input
    }

    // Async-profiler names a Java frame `package/path/Class.method`. Native
    // (C++/JNI) frames have no `/` and stay location-less.
    const name = input.name ?? ``
    const lastDot = name.lastIndexOf(`.`)
    if (lastDot === -1 || !name.includes(`/`)) {
      return input
    }

    return {
      ...input,
      name: name.slice(lastDot + 1),
      location: { urlOrPath: name.slice(0, lastDot).replaceAll(`/`, `.`) },
    }
  },
} as const satisfies OriginSpec

/**
 * Whether a raw async-profiler frame name is in a JVM standard-library package
 * (`java/`, `javax/`, `jdk/`, `sun/`), before its `/`s become `.`s.
 */
const isJvmStdlibNameFrame = (name: string | undefined): boolean =>
  name !== undefined && /^(?:java|javax|jdk|sun)\//u.test(name)

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
