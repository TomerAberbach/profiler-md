import type { DeepReadonly } from '../../helpers/types.ts'
import { fileReferencePath } from '../../location.ts'
import type { EntryCategory, ProfileEntry } from '../../options.ts'
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
    goModuleCacheCategory(entry) ?? goPackageCategory(entry),
} as const satisfies OriginSpec

/**
 * Categorizes a frame resolved from the Go module cache (`$GOPATH/pkg/mod/`),
 * where `go get` downloads dependencies, as `third-party`.
 */
const goModuleCacheCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location && fileReferencePath(location).includes(`/pkg/mod/`)
    ? `third-party`
    : undefined

/** Categorizes a frame by the import path embedded in its function name. */
const goPackageCategory = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory => {
  if (name === undefined) {
    return `ours`
  }
  if (name === `main` || name.startsWith(`main.`)) {
    return `ours`
  }

  const dot = name.indexOf(`.`)
  if (dot === -1) {
    // An unlocated bare symbol without a package (e.g.
    // `gosave_systemstack_switch`) is runtime assembly; a located one is a
    // regular function.
    return location === undefined ? `stdlib` : `ours`
  }

  // A dot inside the first path segment makes it a domain (`github.com/...`),
  // i.e. a downloaded module rather than a standard-library package.
  const slash = name.indexOf(`/`)
  if (slash !== -1 && dot < slash) {
    return `third-party`
  }

  // A dot-less first segment is a standard-library import path, but only
  // trust it for frames actually located in GOROOT (or unlocated runtime
  // internals): a local domain-less module (`mypkg.Func`) is the user's code.
  return location === undefined ||
    fileReferencePath(location).includes(`/go/src/`)
    ? `stdlib`
    : `ours`
}
