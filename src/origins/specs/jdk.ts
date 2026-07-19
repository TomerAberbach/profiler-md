import { categorizeJvmEntry, jvmMatchEntry } from '../jvm.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * The JDK's built-in JFR recorder.
 *
 * Markerless: JDK JFR stacks are pure Java frames, indistinguishable at the
 * entry level from the Java frames every other JVM recorder emits, so JDK
 * recordings resolve here via the JFR format's fallback instead of detection.
 */
export const jdkOriginSpec = {
  id: `jdk`,
  title: `JDK`,
  formats: [`jfr`],
  isMarkerEntry: () => false,
  categorizeEntry: categorizeJvmEntry,
  matchEntry: jvmMatchEntry,
} as const satisfies OriginSpec
