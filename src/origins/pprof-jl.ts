import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import type { OriginSpec } from './origin.ts'

/**
 * Julia's builtin `Profile` stdlib exported to pprof by `PProf.jl`.
 *
 * Julia locates every frame by source file: `Base` and the standard library
 * ship inside the install's `share/julia/` tree, depot packages live under
 * `<depot>/packages/<Name>/<slug>/`, and runtime C frames carry the runtime's
 * C/C++ sources or shared libraries.
 */
export const pprofJlOriginSpec = {
  id: `pprof-jl`,
  formats: [`pprof`],
  // Only a Julia install lays out its runtime sources under `share/julia/`,
  // and every Julia profile touches `Base` or standard-library code from
  // there.
  matchesEntry: entry =>
    entry.location !== undefined &&
    fileReferencePath(entry.location).includes(`/share/julia/`),
  categorize: entry =>
    juliaInstallCategory(entry) ??
    juliaDepotPackageCategory(entry) ??
    juliaRuntimeNativeCategory(entry) ??
    (entry.location ? `ours` : `stdlib`),
  // The allocation profiler wraps each sample in a synthetic `Alloc: <Type>`
  // leaf pseudo-frame. It isn't a function: dropping it returns each sample's
  // self value to the function that allocated.
  normalizeFrame: input =>
    input.name?.startsWith(`Alloc: `) === true ? null : input,
} as const satisfies OriginSpec

/**
 * Categorizes frames from the Julia install's `share/julia/` tree (`Base`,
 * the standard library, and the compiler) as `stdlib`.
 */
const juliaInstallCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location && fileReferencePath(location).includes(`/share/julia/`)
    ? `stdlib`
    : undefined

/**
 * Categorizes Julia sources from a depot's package store
 * (`<depot>/packages/<Name>/<slug>/src/...`), where the package manager
 * installs dependencies, as `third-party`.
 */
const juliaDepotPackageCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined => {
  if (!location) {
    return undefined
  }
  const path = fileReferencePath(location)
  return path.includes(`/packages/`) && path.endsWith(`.jl`)
    ? `third-party`
    : undefined
}

/**
 * Categorizes the runtime's own native frames — C/C++ sources from the Julia
 * build (`gc-alloc.c`, `interpreter.c`) and shared libraries (`sys.dylib`) —
 * as `native`. User code is always `.jl`, so a non-Julia source in a Julia
 * profile is runtime internals.
 */
const juliaRuntimeNativeCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location && JULIA_NATIVE_SOURCE.test(fileReferencePath(location))
    ? `native`
    : undefined

const JULIA_NATIVE_SOURCE = /\.(?:c|cpp|h|S|dylib|so|dll)[\d.]*$/u
