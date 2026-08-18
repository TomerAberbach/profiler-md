import {
  categorizeJvmEntry,
  jvmConstructorCategory,
  jvmMatchEntry,
} from '../jvm.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * The JDK's built-in JFR recorder and its heap dumper, which `jmap`, `jcmd`,
 * `HotSpotDiagnosticMXBean`, and `-XX:+HeapDumpOnOutOfMemoryError` all write
 * through.
 *
 * Markerless: JDK JFR stacks are pure Java frames, indistinguishable at the
 * entry level from the Java frames every other JVM recorder emits, and a heap
 * dump names Java classes alone, so JDK inputs resolve here via each format's
 * fallback instead of detection.
 */
export const jdkOriginSpec = {
  id: `jdk`,
  title: `JDK`,
  formats: [`jfr`, `hprof`],
  isMarkerEntry: () => false,
  categorizeEntry: categorizeJvmEntry,
  categorizeHeapSnapshotConstructor: jvmConstructorCategory,
  matchEntry: jvmMatchEntry,
} as const satisfies OriginSpec
