/**
 * JavaScript ecosystem conventions shared by the origins that observe a
 * JavaScript engine (V8's `RegExp:` frames and the npm package layout every
 * JavaScript runtime installs dependencies into).
 */

import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import {
  locationlessStdlibCategory,
  syntheticFrameCategory,
} from './categorize.ts'

/**
 * The categorization rules shared by the origins that observe V8 running
 * JavaScript: synthetic frames, V8's regular-expression frames, location-less
 * standard-library names, and `node_modules/` dependencies. Origin-specific
 * rules (module-specifier protocols) compose after it with `??`.
 */
export const v8JavaScriptCategory = (
  entry: DeepReadonly<ProfileEntry>,
): EntryCategory | undefined =>
  syntheticFrameCategory(entry) ??
  v8RegExpCategory(entry) ??
  locationlessStdlibCategory(entry) ??
  nodeModulesCategory(entry)

/**
 * Categorizes V8's regular-expression frames, labelled `RegExp: <source>`, as
 * `regexp`.
 */
const v8RegExpCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  name?.startsWith(`RegExp: `) ? `regexp` : undefined

/**
 * Returns whether {@link location}'s path lies within a `node_modules/`
 * directory.
 */
export const hasNodeModulesPath = (
  location: DeepReadonly<SourceLocation> | undefined,
): boolean => {
  if (!location) {
    return false
  }
  const path = fileReferencePath(location)
  return path.startsWith(`node_modules/`) || path.includes(`/node_modules/`)
}

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
