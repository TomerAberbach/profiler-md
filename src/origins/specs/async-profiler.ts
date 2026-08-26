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

/** The async-profiler JVM profiler, emitting JFR or collapsed stacks. */
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
    // A located (JFR) frame already carries its declaring class; only
    // collapsed names need splitting.
    if (input.location) {
      return input
    }

    let name = input.name ?? ``
    // A thread frame is not a function.
    if (THREAD_FRAME.test(name)) {
      return null
    }
    // A compilation annotation is not part of the method's identity.
    name = name.replace(COMPILATION_ANNOTATION, ``)

    const [method, descriptor] = splitMethodDescriptor(name)

    // A Java frame is named `package/path/Class.method`. Native (C++/JNI)
    // frames have no `/` and stay location-less.
    const lastDot = method.lastIndexOf(`.`)
    if (lastDot === -1 || !method.includes(`/`)) {
      return name === input.name ? input : { name }
    }

    return {
      name: jvmMethodDisplayName(method.slice(lastDot + 1), descriptor),
      location: {
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
 * The suffix the `ann` option appends to a Java frame: `_[j]` for JIT-compiled,
 * `_[i]` for inlined, `_[0]` for interpreted, and `_[1]` for C1-compiled.
 */
const COMPILATION_ANNOTATION = /_\[[ji01]\]$/u
