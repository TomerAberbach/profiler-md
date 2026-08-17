import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferencePathOrName } from '../location.ts'
import type { FunctionCategory, ProfileEntry } from '../options.ts'
import { locationlessCategory } from './categorize.ts'
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
): FunctionCategory =>
  jvmStdlibCategory(entry) ??
  hotspotRuntimeCategory(entry) ??
  unresolvedFrameCategory(entry) ??
  nativeLibraryCategory(entry) ??
  nativeModuleCategory(entry) ??
  // JFR and collapsed both carry a Java frame's declaring class as its
  // location, so a frame with no location is a native symbol (JVM C++
  // internals, malloc, unresolved native code) rather than Java code.
  locationlessCategory(entry) ??
  `ours`

/**
 * Whether a raw async-profiler frame name is in a JVM standard-library package,
 * before its `/`s become `.`s.
 */
export const isJvmStdlibNameStackFrame = (name: string | undefined): boolean =>
  name !== undefined && JVM_STDLIB_PACKAGE.test(name)

/** Categorizes Java standard-library and JDK-internal frames as `stdlib`. */
const jvmStdlibCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  location && JVM_STDLIB_PACKAGE.test(sourceReferencePathOrName(location))
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
 * Categorizes the HotSpot frames async-profiler walks that aren't Java: its
 * generated code stubs, reported by stub name without a location, and its
 * compiler's own C++ frames. Only async-profiler observes either, so a
 * categorized entry is also a marker entry. The JDK's own recorder writes
 * Java-only stacks, and never reaches these rules.
 *
 * A GC write barrier is generated code executed inline in a compiled method, so
 * it satisfies `jit` as literally as the dispatch stubs do. It is
 * `garbage collector` because a named activity takes precedence, leaving `jit`
 * for generated code with no more specific one. Folding it into `jit` would
 * hide the cost of collection and leave `jit` meaning two unrelated things.
 */
export const hotspotRuntimeCategory = (
  entry: DeepReadonly<ProfileEntry>,
): FunctionCategory | undefined => {
  const { name } = entry
  if (name === undefined || !isHotspotNativeStackFrame(entry)) {
    return undefined
  }
  if (JIT_STUB.test(name)) {
    return `jit`
  }
  if (GC_STUB.test(name)) {
    return `garbage collector`
  }
  return HOTSPOT_COMPILER.test(name) ? `compiler` : undefined
}

/**
 * Whether a frame is HotSpot's own compiled code rather than a Java method.
 *
 * The rules below match a bare symbol, which a Java method name can satisfy
 * (`getNode` looks like C2's `*Node` classes), so they need a guard that
 * excludes the profiled program's code. A Java frame's location is always its
 * declaring class, so a frame with none is native. A located native frame
 * reports a shared library or a bare module rather than a package, and its name
 * lacks the parenthesized signature JFR writes for a Java method.
 */
const isHotspotNativeStackFrame = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): boolean => {
  if (!location) {
    return true
  }
  const pathOrName = sourceReferencePathOrName(location)
  return (
    (NATIVE_LIBRARY.test(pathOrName) || !pathOrName.includes(`.`)) &&
    !(name ?? ``).includes(`(`)
  )
}

/**
 * HotSpot's compiler internals: the compile broker and tiering policy, C1's
 * HIR/LIR pipeline and linear-scan allocator, C2's ideal-graph phases, nodes,
 * and types, the compiler interface (`ci*`) both read the class file through,
 * and the assemblers and metadata recorders that emit the resulting nmethod.
 *
 * Matches by name because the frame's own symbol identifies compilation. The
 * stack root (`CompileBroker::compiler_thread_loop`) is the stronger signal but
 * is unavailable to a per-entry rule. Deliberately excludes the symbols the
 * whole VM shares (`Arena`, `Dict`, `BitMap`, `CodeCache`, `InstanceKlass`), and
 * the runtime classes whose names begin like a compiler one (`TypeArrayKlass`
 * allocates arrays, `OopMapCache` serves the interpreter), which all stay
 * `native`.
 *
 * Measured over the committed async-profiler CPU inputs, partitioning leaf
 * frames by whether their stack is rooted at the compile broker: 99.3% of what
 * it matches is compilation, and it matches 74% of compilation's samples. The
 * misses are symbols the whole VM shares, which stay `native`.
 */
const HOTSPOT_COMPILER =
  /^(?:Compil(?:e|ation)(?:Broker|Task|Queue|Policy|Log)?(?:::|$)|AbstractCompiler|C[12]Compiler|C[12]_MacroAssembler|Phase[A-Z]|GraphBuilder|GraphKit|IdealKit|Matcher::|Scheduling::|LinearScan|IntervalWalker|LIR|Canonicalizer|Value(?:Stack|Map)|Block(?:Begin|End|List|_)|ci[A-Z]|Type(?!ArrayKlass)[A-Z]|Type::|[A-Za-z_0-9]*Node(?:::|$)|Node_|NodeHash|Unique_Node_List|IndexSet|RegMask|ConnectionGraph|MethodLiveness|BCEscapeAnalyzer|AbstractAssembler|Assembler::|MacroAssembler|CodeBuffer|CodeSection|DebugInformationRecorder|OopMap(?!Cache)|RelocIterator|AdapterHandlerLibrary|JVMState|OopFlow|NTarjan)/u

/**
 * Categorizes the frames async-profiler emits for a stack entry it could not
 * resolve as `unknown`.
 *
 * These name the failure rather than the code: `[unknown]` for an unwalkable
 * frame and `[stale_jmethodID]` for a method whose ID no longer resolves. The
 * code behind them is as likely to be Java as native.
 */
const unresolvedFrameCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  name !== undefined && UNRESOLVED_FRAME.has(name) ? `unknown` : undefined

/** Async-profiler's markers for a stack entry it could not resolve. */
const UNRESOLVED_FRAME: ReadonlySet<string> = new Set([
  `[unknown]`,
  `[stale_jmethodID]`,
  `[unknown_Java]`,
  `[not_walkable_Java]`,
  `[unknown_not_Java]`,
  `[not_walkable_not_Java]`,
  `[break_deopt]`,
  `[break_stack_range]`,
])

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
export const isNativeLibraryStackFrame = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): boolean =>
  location !== undefined &&
  NATIVE_LIBRARY.test(sourceReferencePathOrName(location)) &&
  !(name ?? ``).includes(`(`)

/** Categorizes native shared-library frames as `native`. */
const nativeLibraryCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  location && NATIVE_LIBRARY.test(sourceReferencePathOrName(location))
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
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  location &&
  !sourceReferencePathOrName(location).includes(`.`) &&
  !(name ?? ``).includes(`(`)
    ? `native`
    : undefined
