import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import { hasProtocol } from './origin.ts'

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
 * The categorization for origins with no runtime-specific conventions: only
 * the universal rules that hold regardless of which profiler wrote the input.
 */
export const categorizeGenericEntry = (
  entry: DeepReadonly<ProfileEntry>,
): EntryCategory =>
  syntheticFrameCategory(entry) ??
  systemDirectoryCategory(entry) ??
  locationlessStdlibCategory(entry) ??
  `ours`
