import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import { hasNodeModulesPath, hasProtocol } from './origin.ts'

/**
 * Categorizes an engine's synthetic profiler frames, named like `(program)`,
 * `(idle)`, or `(garbage collector)`, by the label inside the parentheses.
 *
 * Only a plain word label counts: languages whose closure names are themselves
 * parenthesized (Julia's `(::JSON3.var"#f##2#f##3")(::Pair{Symbol, Any})`)
 * must not have arbitrary name fragments promoted to categories.
 */
export const syntheticFrameCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined => {
  const label = name && SYNTHETIC_FRAME_LABEL.exec(name)?.groups!.label
  return label && label !== `anonymous` && !label.startsWith(`anonymous `)
    ? label
    : undefined
}

/** A whole-name `(label)` of plain words, e.g. `(garbage collector)`. */
const SYNTHETIC_FRAME_LABEL = /^\((?<label>[A-Za-z][A-Za-z0-9 -_]*)\)$/u

/**
 * Categorizes V8's regular-expression frames, labelled `RegExp: <source>`, as
 * `regexp`.
 */
export const v8RegExpCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  name?.startsWith(`RegExp: `) ? `regexp` : undefined

/**
 * Categorizes a frame with no source location as `stdlib`.
 *
 * Universal: across every runtime, a sampled frame without a source location is
 * a runtime or native internal rather than user code, so every origin applies
 * this.
 */
export const locationlessStdlibCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location ? undefined : `stdlib`

/**
 * Categorizes frames whose sources live in OS system directories — toolchain
 * headers (`/usr/include/`) and system libraries (`/usr/lib/`,
 * `/usr/local/lib/`) — as `stdlib`.
 *
 * OS-level rather than runtime-specific: native profilers (e.g. gperftools)
 * record libstdc++/libc sources by these installed paths regardless of the
 * language or runtime being observed.
 */
export const systemDirectoryCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location && SYSTEM_DIRECTORY.test(fileReferencePath(location))
    ? `stdlib`
    : undefined

/** An OS system source directory, e.g. `/usr/include/c++/12/` or `/usr/lib/`. */
const SYSTEM_DIRECTORY = /^\/usr\/(?:local\/)?(?:include|lib|lib64|libexec)\//u

/**
 * Categorizes a frame resolved from a `node_modules/` directory as
 * `third-party`.
 *
 * Specific to the npm package ecosystem, which every JavaScript runtime (Node,
 * Deno, Bun, browsers) installs dependencies into.
 */
export const nodeModulesCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  hasNodeModulesPath(location) ? `third-party` : undefined

/**
 * Generic primitive: categorizes an entry as {@link category} when its location
 * is an absolute URL with one of {@link protocols}.
 */
export const protocolCategory = (
  { location }: DeepReadonly<ProfileEntry>,
  category: EntryCategory,
  protocols: string[],
): EntryCategory | undefined =>
  hasProtocol(location, protocols) ? category : undefined

/**
 * Categorizes CPython standard-library frames, frozen bootstrap modules
 * (`<frozen ...>`) and the interpreter's `lib/pythonX.Y/` sources, as `stdlib`.
 *
 * Shared by the Python collapsed-stack origins (py-spy and tachyon), which carry
 * the same interpreter conventions in differently-shaped frame strings.
 */
export const pythonStdlibCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined => {
  if (!location) {
    return undefined
  }
  const path = fileReferencePath(location)
  return path.startsWith(`<frozen `) || /\/lib\/python\d/u.test(path)
    ? `stdlib`
    : undefined
}

/**
 * The full categorization shared by the CPython collapsed-stack origins
 * (py-spy and tachyon), which observe the same interpreter conventions.
 */
export const categorizeCPythonEntry = (
  entry: DeepReadonly<ProfileEntry>,
): EntryCategory =>
  pythonThirdPartyCategory(entry) ??
  pythonStdlibCategory(entry) ??
  locationlessStdlibCategory(entry) ??
  `ours`

/** Categorizes Python frames from an installed-package directory as `third-party`. */
export const pythonThirdPartyCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined => {
  if (!location) {
    return undefined
  }
  const path = fileReferencePath(location)
  return path.includes(`/site-packages/`) || path.includes(`/dist-packages/`)
    ? `third-party`
    : undefined
}

/**
 * Generic primitive: categorizes an entry as {@link category} when its path
 * starts with one of {@link prefixes}, whether the location is an absolute URL
 * or a relative path.
 */
export const pathPrefixCategory = (
  { location }: DeepReadonly<ProfileEntry>,
  category: EntryCategory,
  ...prefixes: string[]
): EntryCategory | undefined => {
  if (!location) {
    return undefined
  }
  const path = fileReferencePath(location)
  return prefixes.some(prefix => path.startsWith(prefix)) ? category : undefined
}
