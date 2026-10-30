import { categorizeGenericEntry } from '../categorize.ts'
import type { OriginSpec } from '../spec.ts'

/**
 * Clang's `-ftime-trace`, which traces the compiler compiling one translation
 * unit.
 *
 * Its events have no marker. A trace states its writer in the `process_name`
 * metadata event, which the Trace Event Format parser passes on lowercased as
 * an origin hint.
 */
export const clangOriginSpec = {
  id: `clang`,
  title: `Clang`,
  formats: [`trace-event`],
  isMarkerEntry: () => false,
  isOriginHint: hint => CLANG_EXECUTABLE.test(hint),
  categorizeEntry: categorizeGenericEntry,
  // Every event is the compiler at work. `Source` is the lexing and parsing of
  // one file, and the `Parse*` events are the parsing of one declaration.
  categorizeTraceEvent: ({ name }) =>
    PARSING_EVENT.test(name) ? `parsing` : `compilation`,
  // Clang ends a trace with one `Total <name>` event per event name, each on a
  // thread of its own, stating the summed duration of that name's events. Its
  // `count` and `avg ms` arguments are the only arguments Clang writes as
  // numbers.
  normalizeTraceEvent: event =>
    event.name.startsWith(`Total `) &&
    typeof event.arguments?.count === `number` &&
    typeof event.arguments[`avg ms`] === `number`
      ? null
      : event,
} as const satisfies OriginSpec

// Clang states the filename of its executable with symlinks resolved
// (`llvm/lib/Support/TimeProfiler.cpp`), so the name depends on the install
// layout. LLVM's own install names the executable `clang-<major>` and links
// `clang` and `clang++` to it, Debian's names it `clang`, and the Windows
// installer copies it to `clang++.exe` and `clang-cl.exe`.
const CLANG_EXECUTABLE = /^(?:clang(?:-\d+)?|clang\+\+|clang-cl)(?:\.exe)?$/u

const PARSING_EVENT = /^(?:Source$|Parse)/u
