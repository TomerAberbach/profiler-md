import type { DeepReadonly } from '../../helpers/types.ts'
import { sourceReferencePathOrName } from '../../location.ts'
import type { FunctionCategory, ProfileEntry } from '../../options.ts'
import { locationlessCategory } from '../categorize.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * Go's builtin `runtime/pprof` profiler (also served over HTTP by
 * `net/http/pprof`).
 *
 * Go function names embed the import path of their package
 * (`encoding/json.Marshal`, `github.com/user/repo/pkg.Func`, `main.work`), so
 * categorization follows Go's own convention: the `main` package is the
 * profiled program, and a first path segment naming a standard-library
 * package is Go's own code where the file agrees. A dependency's location
 * categorizes it, since the profiled program's own import paths may resemble a
 * dependency's.
 *
 * A `-trimpath` build rewrites every file path to the import path alone,
 * stripping the GOROOT prefix from the standard library and the module cache
 * prefix from a downloaded module, and leaves function names unchanged. The
 * profiled program's own packages keep their module path, so under `-trimpath`
 * they take the domain-like shape of a downloaded module. Only the module
 * cache's `@version` segment separates the two.
 *
 * A `GO111MODULE=off` build resolves a dependency and the profiled program's
 * own packages alike under `$GOPATH/src/`, under equally domain-like import
 * paths, so its dependencies are categorized `ours`.
 */
export const goOriginSpec = {
  id: `go`,
  title: `pprof`,
  formats: [`pprof`],
  // Every Go profile contains `runtime.*` frames (stack roots like
  // `runtime.main`/`runtime.goexit` if nothing else), and only Go locates a
  // `runtime.`-prefixed function in a Go source file of its own standard
  // library.
  isMarkerEntry: entry =>
    (entry.name?.startsWith(`runtime.`) ?? false) &&
    isStdlibLocated(entry.location),
  categorizeEntry: entry =>
    goCollectorCategory(entry) ??
    goDependencyCategory(entry) ??
    // Go compiles ahead of time with full symbol information, so a frame with
    // no location is a raw address the profiler never symbolized (the
    // thread-spawn sites a threadcreate profile records).
    locationlessCategory(entry) ??
    goPackageCategory(entry),
} as const satisfies OriginSpec

/**
 * Categorizes Go's collector as `garbage-collector`: the background mark
 * workers and their drain loops, the sweeper, and the assist path a goroutine
 * enters when it allocates faster than the collector reclaims.
 *
 * Excludes `runtime.mallocgc` and the write barriers, which run on the
 * allocation fast path in the middle of the mutator's own work. Counting them
 * would report most of a heap profile as collection cost, a claim the profile
 * doesn't make.
 *
 * The standard-library guard keeps a package of the profiled program named
 * `runtime` from matching, since only the location distinguishes them.
 */
const goCollectorCategory = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  name !== undefined &&
  GO_COLLECTOR.test(name) &&
  (location === undefined || isStdlibLocated(location))
    ? `garbage-collector`
    : undefined

/** Go's collector entry points, all in the `runtime` package. */
const GO_COLLECTOR =
  /^runtime\.(?:gc(?!WriteBarrier)[A-Z]|gcstopm|bgsweep|sweepone|\(\*sweepLocked\)\.sweep)/u

/**
 * Categorizes a frame resolved from a dependency as `third-party`.
 *
 * `go get` writes a downloaded module to `$GOPATH/pkg/mod/`, in a directory
 * whose name ends with `@version`. A `-trimpath` build strips the prefix and
 * leaves the `@version` segment. `go mod vendor` instead copies a dependency
 * into the profiled program's own `vendor/` directory, a path with neither the
 * prefix nor the `@version` segment.
 *
 * The standard library vendors packages of its own, so the standard-library
 * check runs first.
 */
const goDependencyCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined => {
  if (!location || isStdlibLocated(location)) {
    return undefined
  }
  const path = sourceReferencePathOrName(location)
  return path.includes(`/pkg/mod/`) ||
    path.includes(`/vendor/`) ||
    MODULE_CACHE_VERSION.test(path)
    ? `third-party`
    : undefined
}

/**
 * The `@version` a module cache directory name ends with. Every Go module
 * version starts with a `v` followed by the major number, so the pattern
 * distinguishes the segment from an `@` in a directory containing the profiled
 * program.
 */
const MODULE_CACHE_VERSION = /@v\d/u

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
  const stdlibLocated = isStdlibLocated(location)
  if (name === undefined) {
    return stdlibLocated ? `stdlib` : `ours`
  }
  if (name === `main` || name.startsWith(`main.`)) {
    return `ours`
  }

  const packagePath = goPackagePath(name)
  if (packagePath === undefined) {
    // A bare linker symbol declares no package, so its location alone
    // categorizes it (the standard library's assembly routines, such as
    // `cmpbody`).
    return stdlibLocated ? `stdlib` : `ours`
  }

  // The location must agree, since a package of the profiled program may take
  // a standard-library package's name.
  return GO_STDLIB_PACKAGES.has(packagePath.split(`/`)[0]!) && stdlibLocated
    ? `stdlib`
    : `ours`
}

/**
 * Returns the import path of the package {@link name} declares, or `undefined`
 * for a bare linker symbol with no package.
 *
 * The symbol follows the import path after a dot, and both may contain further
 * dots (`encoding/json.(*decodeState).value`), so the package ends at the
 * first dot after the last slash. A generic instantiation's type arguments
 * contain import paths of their own
 * (`slices.Sort[go.shape.[]github.com/user/repo.T]`), so they are dropped
 * first.
 */
const goPackagePath = (name: string): string | undefined => {
  const path = name.slice(0, indexOrEnd(name, `[`))
  const dot = path.indexOf(`.`, path.lastIndexOf(`/`) + 1)
  return dot === -1 ? undefined : path.slice(0, dot)
}

const indexOrEnd = (value: string, search: string): number => {
  const index = value.indexOf(search)
  return index === -1 ? value.length : index
}

/**
 * Returns whether {@link location} is in Go's own standard library.
 *
 * An ordinary build locates it in a GOROOT source tree. A `-trimpath` build
 * leaves each file at the relative import path of the package declaring it,
 * which starts with a standard-library package name. The path's own package
 * categorizes the frame, since Go inlines across packages and reports the
 * inlined frame at the file it was inlined into (`reflect.typedmemmove` at
 * `runtime/mbarrier.go`).
 *
 * The extension excludes a relative path another language's profiler wrote,
 * since the Go toolchain compiles Go and assembly sources alone. An absolute
 * path starts with an empty segment, which no package name matches.
 */
const isStdlibLocated = (
  location: DeepReadonly<ProfileEntry>[`location`],
): boolean => {
  if (!location) {
    return false
  }
  const path = sourceReferencePathOrName(location)
  return (
    path.includes(`/go/src/`) ||
    (GO_STDLIB_PACKAGES.has(path.slice(0, indexOrEnd(path, `/`))) &&
      GO_SOURCE_EXTENSION.test(path))
  )
}

/** The extensions of the source files the Go compiler and assembler read. */
const GO_SOURCE_EXTENSION = /\.(?:go|s)$/u

/**
 * Go's top-level standard-library import paths, as reported by `go list std`.
 * A dot-less first segment is reserved for the standard library, but the `go`
 * command still accepts a domain-less module path, so matching the set rather
 * than the shape keeps such a module's packages out of `stdlib`.
 *
 * Keep this set in sync with `go-std-packages.txt`, a pinned `go list std`,
 * since a top-level package a later Go release adds would otherwise be
 * categorized `ours`.
 */
export const GO_STDLIB_PACKAGES = new Set([
  `archive`,
  `bufio`,
  `bytes`,
  `cmp`,
  `compress`,
  `container`,
  `context`,
  `crypto`,
  `database`,
  `debug`,
  `embed`,
  `encoding`,
  `errors`,
  `expvar`,
  `flag`,
  `fmt`,
  `go`,
  `hash`,
  `html`,
  `image`,
  `index`,
  `internal`,
  `io`,
  `iter`,
  `log`,
  `maps`,
  `math`,
  `mime`,
  `net`,
  `os`,
  `path`,
  `plugin`,
  `reflect`,
  `regexp`,
  `runtime`,
  `slices`,
  `sort`,
  `strconv`,
  `strings`,
  `structs`,
  `sync`,
  `syscall`,
  `testing`,
  `text`,
  `time`,
  `unicode`,
  `unique`,
  `unsafe`,
  `vendor`,
  `weak`,
])
