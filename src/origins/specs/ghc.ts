import type { DeepReadonly } from '../../helpers/types.ts'
import { sourceReferencePathOrName } from '../../location.ts'
import type { FunctionCategory, ProfileEntry } from '../../options.ts'
import { locationlessCategory, systemDirectoryCategory } from '../categorize.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * GHC, whose runtime system samples the cost centres of a program compiled
 * with `-prof`.
 *
 * A cost centre is named for the binding it covers (`lbsToTokens`, `main`) and
 * located by the source span GHC assigns it, which each format's parser splits
 * into a position. The runtime's own cost centres have no source and are
 * located nowhere.
 *
 * A span is the path GHC compiled the module from, which Cabal and Stack make
 * relative to the package being built (`src/Data/Aeson/KeyMap.hs` for the
 * `aeson` package, `Profile.hs` for a program in its own root). A dependency's
 * cost centre is therefore `ours` like the program's own, since the report
 * names no package and a dependency's paths have the same shape as the
 * program's.
 *
 * It emits only its own formats, so detection resolves an input to it by
 * fallback rather than by a marker entry.
 */
export const ghcOriginSpec = {
  id: `ghc`,
  title: `GHC`,
  formats: [`ghc-eventlog`, `ghc-json-profile`],
  isMarkerEntry: () => false,
  categorizeEntry: entry =>
    runtimeActivityCategory(entry) ??
    bootLibraryCategory(entry) ??
    systemDirectoryCategory(entry) ??
    locationlessCategory(entry) ??
    `ours`,
} as const satisfies OriginSpec

/**
 * Categorizes a cost centre GHC compiled from its own source tree as `stdlib`.
 *
 * GHC builds the libraries it ships under `libraries/<package>/`, so a span
 * rooted there (`libraries/text/src/Data/Text.hs`) is a boot library's. A
 * package the program depends on is unpacked into a directory of its own name
 * and compiled from paths relative to it, so nothing a dependency contributes
 * is rooted in `libraries/`.
 */
const bootLibraryCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  location && BOOT_LIBRARY_SOURCE.test(sourceReferencePathOrName(location))
    ? `stdlib`
    : undefined

/** A path under a boot library's directory in GHC's source tree. */
const BOOT_LIBRARY_SOURCE = /^libraries\/[^/]+\//u

/**
 * Categorizes the runtime activities GHC records as a built-in cost centre:
 * `GC.GC` for a tick sampled during collection and `IDLE.IDLE` for one sampled
 * while every capability had no work.
 *
 * The runtime's remaining built-in centres (`MAIN.MAIN`, `SYSTEM.SYSTEM`,
 * `PROFILING.OVERHEAD_of`) name no activity, so they fall through to the
 * location-less rule like the compiled runtime code they attribute ticks to.
 *
 * GHC locates its built-in centres nowhere, and it locates every binding a
 * compiled module defines, so the missing location excludes a binding of the
 * profiled program that happens to be named `GC`.
 */
const runtimeActivityCategory = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  location || name === undefined
    ? undefined
    : RUNTIME_ACTIVITY_CATEGORIES.get(name)

/** The built-in cost centre names that name a runtime activity. */
const RUNTIME_ACTIVITY_CATEGORIES = new Map<string, FunctionCategory>([
  [`GC.GC`, `garbage collector`],
  [`IDLE.IDLE`, `idle`],
])
