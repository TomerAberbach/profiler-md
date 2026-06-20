import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import { hasNodeModulesPath, hasProtocol } from './origin.ts'

/**
 * Categorizes an engine's synthetic profiler frames, named like `(program)`,
 * `(idle)`, or `(garbage collector)`, by the label inside the parentheses.
 */
export const syntheticFrameCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  name?.startsWith(`(`) && name.endsWith(`)`) && !name.startsWith(`(anonymous`)
    ? name.slice(1, -1)
    : undefined

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
