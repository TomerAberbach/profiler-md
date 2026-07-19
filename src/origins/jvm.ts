/**
 * HotSpot JVM runtime conventions shared by the origins that observe the JVM
 * through different recorders.
 */

import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import { matchEntryFromRules } from './origin.ts'
import type { EntryMatchRule } from './origin.ts'

/**
 * A JVM runtime address embedded in a frame's identity, differing per JVM run:
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

export const jvmMatchEntry = matchEntryFromRules({
  // A runtime address can sit in the name (`I2C/C2I adapters(0xba)`) or in
  // the location (a hidden lambda class reported as the declaring class).
  name: JVM_ENTRY_MATCH_RULES,
  location: JVM_ENTRY_MATCH_RULES,
})

export const categorizeJvmEntry = (
  entry: DeepReadonly<ProfileEntry>,
): EntryCategory =>
  jvmStdlibCategory(entry) ??
  hotspotStubCategory(entry) ??
  nativeLibraryCategory(entry) ??
  nativeModuleCategory(entry) ??
  // JFR and collapsed both carry a Java frame's declaring class as its
  // location, so a frame with no location is a native symbol (JVM C++
  // internals, malloc, unresolved native code) rather than Java code.
  (entry.location ? `ours` : `native`)

/**
 * Whether a raw async-profiler frame name is in a JVM standard-library package,
 * before its `/`s become `.`s.
 */
export const isJvmStdlibNameFrame = (name: string | undefined): boolean =>
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
 * `kotlin`/`kotlinx`, `scala`, and the Groovy runtime (`groovy.*`,
 * `org.codehaus.groovy.*`, `org.apache.groovy.*`, and the `groovyjarjar*`
 * packages Groovy shades its bundled dependencies into) are the JVM guest
 * languages' analogue of `java.*`. Dependency jars (e.g. `com.intellij.*`,
 * `scopt.*`) carry no marker distinguishing them from application packages, so
 * they fall to `ours`, like dotnet-trace's NuGet namespaces.
 */
const JVM_STDLIB_PACKAGE =
  /^(?:(?:java|javax|jdk|sun|com[./]sun|kotlin|kotlinx|scala|groovy|org[./](?:codehaus|apache)[./]groovy)[./]|groovyjarjar)/u

/**
 * Categorizes HotSpot's synthetic code-stub frames, which async-profiler
 * reports by their stub names without a location: JIT dispatch and transition
 * stubs as `jit`, and GC write-barrier stubs executed inline in compiled code
 * as `garbage collector`. Only async-profiler observes these stubs, so a
 * categorized entry is also a marker entry.
 */
export const hotspotStubCategory = ({
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

/**
 * Whether a frame reports a native shared library as its location while its
 * name lacks a Java method's parenthesized signature. Only async-profiler's
 * own stack walker mixes such native frames into JFR or collapsed output; JFR
 * written by the JDK's recorder carries Java-only stacks.
 */
export const isNativeLibraryFrame = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): boolean =>
  location !== undefined &&
  NATIVE_LIBRARY.test(fileReferencePath(location)) &&
  !(name ?? ``).includes(`(`)

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
 * `com.acme.so.Helper`) isn't mistaken for a native library. A class whose
 * simple name is itself `so`/`dll`/`dylib` would still match, but its methods
 * carry parenthesized signatures, which the marker check excludes; real
 * library names can't be required to look different (`libc.so.6` and
 * `libjvm.dylib` are both valid dotted class shapes).
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
