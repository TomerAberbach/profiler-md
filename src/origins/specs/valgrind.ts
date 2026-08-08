import { categorizeGenericEntry } from '../categorize.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * Valgrind's callgrind tool, which counts every executed instruction and
 * records the call graph.
 *
 * Markerless: its frames are native symbols with system source paths (plus
 * locationless symbols and quirks like `(below main)`) that any native
 * profiler could emit. Callgrind input with no other origin's marker resolves
 * here anyway, because Valgrind defines the format and is its fallback origin.
 *
 * Categorization is generic, because Valgrind observes native binaries of any
 * language.
 */
export const valgrindOriginSpec = {
  id: `valgrind`,
  title: `Valgrind`,
  formats: [`callgrind`],
  isMarkerEntry: () => false,
  categorizeEntry: categorizeGenericEntry,
  // The dynamic linker's lazy-binding trampoline intersperses real call chains
  // (`X → _dl_runtime_resolve → Y` on each first call), so walking its outgoing
  // arcs joins unrelated functions into a single spurious recursion cycle.
  // Lazy binding resolves each symbol once, so the recursion the cycle
  // analysis then misses cannot repeat.
  hasRuntimeInsertedArcs: ({ name }) =>
    name?.startsWith(LAZY_BINDING_TRAMPOLINE) ?? false,
} as const satisfies OriginSpec

/** Glibc's lazy-binding trampoline, e.g. `_dl_runtime_resolve_xsavec`. */
const LAZY_BINDING_TRAMPOLINE = `_dl_runtime_resolve`
