import { categorizeGenericEntry } from '../categorize.ts'
import type { OriginSpec } from '../origin.ts'
import { swiftStdlibCategory } from '../swift.ts'
import { zigStdlibCategory } from '../zig.ts'

/**
 * The gperftools CPU profiler for native programs.
 *
 * Markerless: its stacks are native symbols with system source paths that any
 * native profiler could emit. It writes a legacy profile that `pprof` converts
 * to the proto format. Detection relies on the pprof parser's origin hint from
 * the `drop_frames`/`keep_frames` regexes that the conversion fills with
 * gperftools' internal function names.
 *
 * Categorization is generic apart from the observed toolchain's own
 * conventions, because gperftools observes native binaries of any language.
 */
export const gperftoolsOriginSpec = {
  id: `gperftools`,
  formats: [`pprof`],
  isMarkerEntry: () => false,
  categorizeEntry: entry =>
    zigStdlibCategory(entry) ??
    swiftStdlibCategory(entry) ??
    categorizeGenericEntry(entry),
} as const satisfies OriginSpec
