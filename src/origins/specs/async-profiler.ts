import {
  categorizeJvmEntry,
  hotspotRuntimeCategory,
  isJvmStdlibNameStackFrame,
  isNativeLibraryStackFrame,
  jvmMatchEntry,
  jvmMethodDisplayName,
  jvmSourceClassName,
} from '../jvm.ts'
import type { OriginSpec } from '../origin.ts'

export const asyncProfilerOriginSpec = {
  id: `async-profiler`,
  formats: [`jfr`, `collapsed`],
  // Every marker is evidence of async-profiler's own stack walker, which no
  // other JVM recorder writes into either format: raw slash-form Java names
  // (collapsed), HotSpot code stubs, and native shared-library frames mixed
  // into Java stacks (JFR written by the JDK's recorder is Java-only).
  isMarkerEntry: entry =>
    isJvmStdlibNameStackFrame(entry.name) ||
    hotspotRuntimeCategory(entry) !== undefined ||
    isNativeLibraryStackFrame(entry),
  categorizeEntry: categorizeJvmEntry,
  matchEntry: jvmMatchEntry,
  normalizeStackFrame: input => {
    // A sourced (JFR) frame already carries its declaring class; only
    // collapsed names need splitting.
    if (input.definition) {
      return input
    }

    let name = input.name ?? ``
    // A thread frame is not a function.
    if (THREAD_FRAME.test(name)) {
      return null
    }
    // A class frame is not a function.
    if (isClassFrame(name)) {
      return null
    }
    // A compilation annotation is not part of the method's identity.
    name = name.replace(COMPILATION_ANNOTATION, ``)

    const [method, descriptor] = splitMethodDescriptor(name)

    // Native (C++/JNI) frames stay location-less.
    const lastDot = method.lastIndexOf(`.`)
    if (lastDot === -1 || !isJavaMethod(method)) {
      return name === input.name ? input : { name }
    }

    return {
      name: jvmMethodDisplayName(method.slice(lastDot + 1), descriptor),
      definition: {
        type: `logical`,
        name: jvmSourceClassName(method.slice(0, lastDot)),
      },
    }
  },
} as const satisfies OriginSpec

/**
 * Splits a collapsed frame name into the method and the JVM method descriptor
 * the `sig` option appends to it, or an empty descriptor without the option.
 * The descriptor's `;` terminators are written as `|` because `;` separates
 * collapsed frames, so the split restores them.
 */
const splitMethodDescriptor = (
  name: string,
): [method: string, descriptor: string] => {
  const open = name.indexOf(`(`)
  if (open === -1) {
    return [name, ``]
  }
  return [name.slice(0, open), name.slice(open).replaceAll(`|`, `;`)]
}

/**
 * The frame the `threads` option roots every stack at: the thread's name and
 * id, e.g. `[ForkJoinPool-1-worker-1 tid=35079]`.
 */
const THREAD_FRAME = /^\[.* tid=\d+\]$/u

/**
 * Whether a collapsed frame is the class an allocation, lock, or park event ends
 * its stack with (e.g. `java.lang.String_[i]`, or `byte[]` with `dot`). With
 * `dot`, method frames are dotted too, so Java's naming conventions tell them
 * apart. Over the committed inputs, this matches every class frame and no method
 * frame. It misses a class in the default package and matches a capitalized
 * method of a lowercase class.
 */
const isClassFrame = (name: string): boolean => {
  const className = name.endsWith(`_[i]`) ? name.slice(0, -`_[i]`.length) : name
  return ARRAY_CLASS.test(className) || CLASS.test(className)
}

/**
 * Whether a method is `package/path/Class.method`, or dotted with `dot`. A dotted
 * name requires a package, so a native symbol like
 * `tiny_malloc_from_free_list.cold.4` stays native.
 */
const isJavaMethod = (method: string): boolean =>
  method.includes(`/`) || DOTTED_METHOD.test(method)

const IDENTIFIER_REST = String.raw`[\p{L}\p{N}_$]*`
const IDENTIFIER = String.raw`[\p{L}_$]${IDENTIFIER_REST}`
const PACKAGE_PATH = String.raw`(?:${IDENTIFIER}\.)+`
const HIDDEN_CLASS_ADDRESS = String.raw`0x[0-9a-f]+`

/** A dotted array type name, e.g. `byte[]` or `java.lang.Object[][]`. */
const ARRAY_CLASS = new RegExp(
  String.raw`^(?:${IDENTIFIER}\.)*${IDENTIFIER}(?:\[\])+$`,
  `u`,
)

/**
 * A dotted class name ending in a hidden class's address (e.g.
 * `groovy.lang.MetaClassImpl$$Lambda.0x0000007801080990`), or in a capitalized
 * simple name after a lowercase package (e.g. `java.lang.String`).
 */
const CLASS = new RegExp(
  String.raw`^${PACKAGE_PATH}${HIDDEN_CLASS_ADDRESS}$|^(?:${IDENTIFIER}\.)*[\p{Ll}_]${IDENTIFIER_REST}\.\p{Lu}${IDENTIFIER_REST}$`,
  `u`,
)

/**
 * A dotted method name: a package, a class or hidden class address, and a
 * method, to which Kotlin's name mangling can add a `-` (e.g. `box-impl`).
 */
const DOTTED_METHOD = new RegExp(
  String.raw`^${PACKAGE_PATH}(?:${IDENTIFIER}|${HIDDEN_CLASS_ADDRESS})\.(?:<init>|<clinit>|[\p{L}_$][\p{L}\p{N}_$-]*)$`,
  `u`,
)

/**
 * The suffix the `ann` option appends to a Java frame: `_[j]` for JIT-compiled,
 * `_[i]` for inlined, `_[0]` for interpreted, and `_[1]` for C1-compiled.
 */
const COMPILATION_ANNOTATION = /_\[[ji01]\]$/u
