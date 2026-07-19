import type { DeepReadonly } from '../../helpers/types.ts'
import { fileReferencePath } from '../../location.ts'
import type { EntryCategory, ProfileEntry } from '../../options.ts'
import { matchEntryFromRules } from '../origin.ts'
import type { EntryMatchRule, OriginSpec } from '../origin.ts'

/**
 * A JVM runtime address baked into a frame's identity, differing per JVM run:
 * a hidden lambda class (`Foo$$Lambda.0x00000070011868b8`) or HotSpot's
 * interpreter/compiled transition stubs (`I2C/C2I adapters(0xba)`). The kept
 * prefix alone still identifies the function across runs.
 */
const JVM_RUNTIME_ADDRESS_REGEX =
  /(?<kept>\$\$Lambda|I2C\/C2I adapters)(?:\.0x[0-9a-fA-F]+|\(0x[0-9a-fA-F]+\))/gu

/**
 * Match-normalization rules stripping {@link JVM_RUNTIME_ADDRESS_REGEX} from a
 * name or location.
 */
const JVM_ENTRY_MATCH_RULES: EntryMatchRule[] = [
  [JVM_RUNTIME_ADDRESS_REGEX, `$<kept>`],
]

export const jvmOriginSpec = {
  id: `jvm`,
  formats: [`jfr`, `collapsed`],
  isMarkerEntry: entry =>
    // JFR carries the class as a location; async-profiler's collapsed stacks
    // carry it in the name (`java/util/HashMap.put`) instead.
    jvmStdlibCategory(entry) !== undefined || isJvmStdlibNameFrame(entry.name),
  categorizeEntry: entry =>
    jvmStdlibCategory(entry) ??
    hotspotStubCategory(entry) ??
    nativeLibraryCategory(entry) ??
    nativeModuleCategory(entry) ??
    // JFR and collapsed both carry a Java frame's declaring class as its
    // location, so a frame with no location at all is a native symbol (JVM
    // C++ internals, malloc, unresolved native code) rather than Java code.
    (entry.location ? `ours` : `native`),
  matchEntry: matchEntryFromRules({
    // A runtime address can sit in the name (`I2C/C2I adapters(0xba)`) or in
    // the location (a hidden lambda class reported as the declaring class).
    name: JVM_ENTRY_MATCH_RULES,
    location: JVM_ENTRY_MATCH_RULES,
  }),
  normalizeFrame: input => {
    // A located (JFR) frame already carries its declaring class; only
    // async-profiler's collapsed names need splitting.
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
      name: name.slice(lastDot + 1),
      location: { urlOrPath: name.slice(0, lastDot).replaceAll(`/`, `.`) },
    }
  },
} as const satisfies OriginSpec

/**
 * Whether a raw async-profiler frame name is in a JVM standard-library package,
 * before its `/`s become `.`s.
 */
const isJvmStdlibNameFrame = (name: string | undefined): boolean =>
  name !== undefined && JVM_STDLIB_PACKAGE.test(name)

/** Categorizes Java standard-library and JDK-internal frames as `stdlib`. */
const jvmStdlibCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location && JVM_STDLIB_PACKAGE.test(fileReferencePath(location))
    ? `stdlib`
    : undefined

/**
 * JVM standard-library and JDK-internal package roots, in both spellings a
 * frame can carry them: the dot-form fully-qualified class JVM frames report as
 * their location (e.g. `java.util.concurrent.ForkJoinPool`) and the raw
 * slash-form async-profiler collapsed name (e.g. `java/util/HashMap.put`), so
 * detection (over raw names) and categorization (over normalized locations)
 * share one rule.
 *
 * `kotlin`/`kotlinx` and `scala` are the Kotlin and Scala language runtimes,
 * the JVM guest languages' analogue of `java.*`. Dependency jars (e.g.
 * `com.intellij.*`, `scopt.*`) carry no marker distinguishing them from
 * application packages, so they fall to `ours`, like dotnet-trace's NuGet
 * namespaces.
 */
const JVM_STDLIB_PACKAGE =
  /^(?:java|javax|jdk|sun|com[./]sun|kotlin|kotlinx|scala)[./]/u

/**
 * Categorizes HotSpot's synthetic code-stub frames, which async-profiler
 * reports by their stub names without a location: JIT dispatch and transition
 * stubs as `jit`, and GC write-barrier stubs executed inline in compiled code
 * as `garbage collector`.
 */
const hotspotStubCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined => {
  if (name === undefined) {
    return undefined
  }
  if (JIT_STUB.test(name)) {
    return `jit`
  }
  if (GC_STUB.test(name)) {
    return `garbage collector`
  }
  return undefined
}

/**
 * HotSpot JIT stubs: virtual-dispatch stubs (`vtable stub`, `itable stub`),
 * interpreter/compiled transition adapters (`I2C/C2I adapters(0x...)`), the
 * interpreter's entry stub (`call_stub`), and generated intrinsics like
 * `zero_blocks`.
 */
const JIT_STUB =
  /^(?:vtable stub|itable stub|call_stub|zero_blocks|I2C\/C2I adapters)/u

/** HotSpot GC barrier stubs, e.g. `g1_pre_barrier_slow`/`g1_post_barrier_slow`. */
const GC_STUB = /^g1_(?:pre|post)_barrier_slow$/u

/** Categorizes native shared-library frames as `native`. */
const nativeLibraryCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location && NATIVE_LIBRARY.test(fileReferencePath(location))
    ? `native`
    : undefined

/**
 * Native frames report a shared library (e.g. `libjvm.dylib`,
 * `libsystem_kernel.dylib`, or a versioned `libc.so.6`) as their location. The
 * extension is anchored to the end (allowing a trailing version like `.so.6`)
 * so a class whose package contains a segment named `so`/`dll`/`dylib` (e.g.
 * `com.acme.so.Helper`) isn't mistaken for a native library.
 */
const NATIVE_LIBRARY = /\.(?:dylib|so|dll)[\d.]*$/u

/**
 * Categorizes native frames whose location is a bare module name without an
 * extension (e.g. macOS's `CoreFoundation` framework or the `java` launcher
 * binary) as `native`.
 *
 * A dot-less location alone could also be a default-package class, but JFR
 * writes Java method names with their parenthesized signature (`main(String[])`)
 * while native symbols are bare (`__CFRunLoopRun`), so a signature-less name
 * disambiguates.
 */
const nativeModuleCategory = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location &&
  !fileReferencePath(location).includes(`.`) &&
  !(name ?? ``).includes(`(`)
    ? `native`
    : undefined
