import type { DeepReadonly } from '../../helpers/types.ts'
import { fileReferencePath } from '../../location.ts'
import type { FunctionCategory, ProfileEntry } from '../../options.ts'
import { locationlessCategory } from '../categorize.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * Go's builtin `runtime/pprof` profiler (also served over HTTP by
 * `net/http/pprof`).
 *
 * Go function names embed the import path of their package
 * (`encoding/json.Marshal`, `github.com/user/repo/pkg.Func`, `main.work`), so
 * categorization follows Go's own convention: a first path segment without a
 * dot is a standard-library package, a domain-like first segment is a
 * downloaded module, and the `main` package is the profiled program.
 */
export const goOriginSpec = {
  id: `go`,
  title: `pprof`,
  formats: [`pprof`],
  // Every Go profile contains `runtime.*` frames (stack roots like
  // `runtime.main`/`runtime.goexit` if nothing else), and only Go locates a
  // `runtime.`-prefixed function in a GOROOT source tree.
  isMarkerEntry: entry =>
    (entry.name?.startsWith(`runtime.`) ?? false) &&
    entry.location !== undefined &&
    fileReferencePath(entry.location).includes(`/go/src/`),
  categorizeEntry: entry =>
    goCollectorCategory(entry) ??
    goModuleCacheCategory(entry) ??
    // Go compiles ahead of time with full symbol information, so a frame with
    // no location is a raw address the profiler never symbolized (the
    // thread-spawn sites a threadcreate profile records).
    locationlessCategory(entry) ??
    goPackageCategory(entry),
} as const satisfies OriginSpec

/**
 * Categorizes Go's collector as `garbage collector`: the background mark
 * workers and their drain loops, the sweeper, and the assist path a goroutine
 * enters when it allocates faster than the collector reclaims.
 *
 * Excludes `runtime.mallocgc` and the write barriers, which run on the
 * allocation fast path in the middle of the mutator's own work. Counting them
 * would report most of a heap profile as collection cost, a claim the profile
 * doesn't make.
 *
 * The GOROOT guard keeps a package of the profiled program named `runtime` from
 * matching, since the location distinguishes them and the name doesn't.
 */
const goCollectorCategory = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  name !== undefined &&
  GO_COLLECTOR.test(name) &&
  (location === undefined || fileReferencePath(location).includes(`/go/src/`))
    ? `garbage collector`
    : undefined

/** Go's collector entry points, all in the `runtime` package. */
const GO_COLLECTOR =
  /^runtime\.(?:gc(?!WriteBarrier)[A-Z]|gcstopm|bgsweep|sweepone|\(\*sweepLocked\)\.sweep)/u

/**
 * Categorizes a frame resolved from the Go module cache (`$GOPATH/pkg/mod/`),
 * where `go get` downloads dependencies, as `third-party`.
 */
const goModuleCacheCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  location && fileReferencePath(location).includes(`/pkg/mod/`)
    ? `third-party`
    : undefined

/**
 * Categorizes a located frame by the import path embedded in its function name.
 *
 * Reached only with a location, since the chain resolves a location-less frame
 * before here.
 */
const goPackageCategory = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory => {
  if (name === undefined) {
    return `ours`
  }
  if (name === `main` || name.startsWith(`main.`)) {
    return `ours`
  }

  const dot = name.indexOf(`.`)
  if (dot === -1) {
    // A bare symbol without a package is a regular function.
    return `ours`
  }

  // A dot inside the first path segment makes it a domain (`github.com/...`),
  // i.e. a downloaded module rather than a standard-library package.
  const slash = name.indexOf(`/`)
  if (slash !== -1 && dot < slash) {
    return `third-party`
  }

  // A dot-less first segment is a standard-library import path, but only
  // trust it for frames located in GOROOT: a local domain-less module
  // (`mypkg.Func`) is the user's code.
  return location !== undefined &&
    fileReferencePath(location).includes(`/go/src/`)
    ? `stdlib`
    : `ours`
}
