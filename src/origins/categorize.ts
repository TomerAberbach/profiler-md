import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferencePathOrName } from '../location.ts'
import type { FunctionCategory, ProfileEntry } from '../options.ts'
import { hasProtocol } from './origin.ts'

/**
 * Categorizes an engine's synthetic profiler frames, named like `(idle)` or
 * `(garbage collector)`, by the label inside the parentheses.
 *
 * Only a plain word label counts, and only one {@link SYNTHETIC_FRAME_LABEL_CATEGORIES}
 * names. A looser rule would promote arbitrary name fragments in languages whose
 * closure names are themselves parenthesized (Julia's
 * `(::JSON3.var"#f##2#f##3")(::Pair{Symbol, Any})`), and would admit a category
 * only the inventing engine produces, which nothing downstream can partition by.
 *
 * An unlisted label falls through to the remaining rules, which categorize the
 * frame by its location like any other. A pseudo-frame naming where the engine
 * was rather than what it was doing (V8's `(program)`, `(v8 api)`, and `(root)`)
 * has no activity to name and categorizes as `native` there.
 */
export const syntheticFrameCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined => {
  const label = name && SYNTHETIC_FRAME_LABEL.exec(name)?.groups!.label
  return label ? SYNTHETIC_FRAME_LABEL_CATEGORIES.get(label) : undefined
}

/** A whole-name `(label)` of plain words, e.g. `(garbage collector)`. */
const SYNTHETIC_FRAME_LABEL = /^\((?<label>[A-Za-z][A-Za-z0-9 _-]*)\)$/u

/**
 * The category each `(label)` frame name names: the runtime activities an
 * engine reports as a pseudo-frame rather than as a function.
 *
 * An engine spelling an activity differently maps its own vocabulary onto these
 * labels in the format's parser (see the V8 heap profile's VM state frame
 * names). Excludes the categories recording where source code came from
 * (`ours`, `third-party`, `stdlib`), which a frame belonging to no source file
 * can't be, and those an engine names in a frame's location rather than its
 * name (`jit`, `kernel`, `native`).
 */
const SYNTHETIC_FRAME_LABEL_CATEGORIES: ReadonlyMap<string, FunctionCategory> =
  new Map([
    [`garbage collector`, `garbage collector`],
    [`compiler`, `compiler`],
    [`idle`, `idle`],
    [`unknown`, `unknown`],
  ])

/**
 * Categorizes a frame with no source location as `native`, or as `unknown` when
 * the profiler gave it no name either.
 *
 * Across every runtime, a sampled frame the profiler attributed to no source
 * file is compiled code rather than code the profiled language defines, so
 * every origin applies this. A frame with neither a name nor a location is one
 * the profiler recorded nothing about, the weaker claim `unknown` makes. An
 * empty name parses to `(anonymous)`, and a real anonymous function is named
 * `(anonymous)` too, so the missing location separates the two.
 *
 * An origin whose profiler distinguishes compiled code from a frame it could
 * not attribute, for a *named* frame, draws that line itself before reaching
 * this rule.
 */
export const locationlessCategory = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined => {
  if (location) {
    return undefined
  }
  return name === ANONYMOUS_FUNCTION_NAME ? `unknown` : `native`
}

/** The name {@link parseStackFrameFunction} gives a frame the profiler left unnamed. */
const ANONYMOUS_FUNCTION_NAME = `(anonymous)`

/**
 * Categorizes frames whose sources are in OS system directories: toolchain
 * headers (`/usr/include/`) as `stdlib`, and installed system libraries
 * (`/usr/lib/`, `/usr/local/lib/`, `/usr/libexec/`) as `native`.
 *
 * OS-level rather than runtime-specific: native profilers (e.g. gperftools)
 * record libstdc++/libc sources by these installed paths regardless of the
 * language or runtime being observed. Only the header directories are the
 * standard library's own sources. A shared library under `/usr/lib/` may be the
 * C standard library, the dynamic loader, or any installed dependency, and the
 * path alone doesn't distinguish them.
 */
export const systemDirectoryCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined => {
  if (!location) {
    return undefined
  }
  const pathOrName = sourceReferencePathOrName(location)
  if (SYSTEM_INCLUDE_DIRECTORY.test(pathOrName)) {
    return `stdlib`
  }
  return SYSTEM_LIBRARY_DIRECTORY.test(pathOrName) ? `native` : undefined
}

/** An OS toolchain header directory, e.g. `/usr/include/c++/12/`. */
const SYSTEM_INCLUDE_DIRECTORY = /^\/usr\/(?:local\/)?include\//u

/** An OS system library directory, e.g. `/usr/lib/` or `/usr/libexec/`. */
const SYSTEM_LIBRARY_DIRECTORY = /^\/usr\/(?:local\/)?(?:lib|lib64|libexec)\//u

/**
 * Generic primitive: categorizes an entry as {@link category} when its location
 * is an absolute URL with one of {@link protocols}.
 */
export const protocolCategory = (
  { location }: DeepReadonly<ProfileEntry>,
  category: FunctionCategory,
  protocols: string[],
): FunctionCategory | undefined =>
  hasProtocol(location, protocols) ? category : undefined

/**
 * The categorization for origins with no runtime-specific conventions: only
 * the universal rules that hold regardless of which profiler wrote the input.
 */
export const categorizeGenericEntry = (
  entry: DeepReadonly<ProfileEntry>,
): FunctionCategory =>
  syntheticFrameCategory(entry) ??
  systemDirectoryCategory(entry) ??
  locationlessCategory(entry) ??
  `ours`
