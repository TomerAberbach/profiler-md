import {
  categorizeJvmEntry,
  hotspotRuntimeCategory,
  isJvmStdlibNameStackFrame,
  isNativeLibraryStackFrame,
  jvmMatchEntry,
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

    // A Java frame is named `package/path/Class.method`. Native (C++/JNI)
    // frames have no `/` and stay location-less.
    const name = input.name ?? ``
    const lastDot = name.lastIndexOf(`.`)
    if (lastDot === -1 || !name.includes(`/`)) {
      return input
    }

    return {
      name: name.slice(lastDot + 1),
      location: {
        type: `logical`,
        name: name.slice(0, lastDot).replaceAll(`/`, `.`),
      },
    }
  },
} as const satisfies OriginSpec
