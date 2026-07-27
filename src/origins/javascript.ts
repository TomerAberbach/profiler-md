/**
 * JavaScript ecosystem conventions shared by the origins that observe a
 * JavaScript engine (V8's `RegExp:` frames, the npm package layout every
 * JavaScript runtime installs dependencies into, and the classes the language
 * and the web platform define, which every engine names the same in its heap
 * snapshots).
 */

import globals from 'globals'
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

/**
 * The heap snapshot category of a constructor named {@link name} under
 * JavaScript's own conventions: the classes the language specifies, the
 * built-in globals, and the web platform's natively implemented ones.
 *
 * An engine names these classes after the language, not its own internals, so
 * the same names appear whichever snapshot format it writes. Engine classes
 * (JSC's `FunctionExecutable`, V8's `system / Context`) are the engine's own
 * and categorize in the format's code instead.
 *
 * Returns `undefined` for a name JavaScript doesn't define, leaving the
 * format's category in place.
 */
export const javaScriptConstructorCategory = (
  name: string,
): string | undefined => getConstructorNameToCategory().get(name)

/**
 * Builds the constructor name to category map on first use, since iterating the
 * globals lists costs time an input with no heap snapshot shouldn't spend.
 *
 * The language's classes are listed after the globals so they override the
 * plain `built-in` a global name would otherwise get: `Array` is an array,
 * `Function` a closure, and `Object` an object.
 */
const getConstructorNameToCategory = (): Map<string, string> => {
  if (constructorNameToCategory) {
    return constructorNameToCategory
  }

  constructorNameToCategory = new Map()
  for (const name of Object.keys(globals.builtin)) {
    constructorNameToCategory.set(name, `built-in`)
  }
  for (const name of Object.keys(globals.browser)) {
    constructorNameToCategory.set(name, `native`)
  }
  for (const [category, names] of Object.entries(CATEGORY_TO_CLASS_NAMES)) {
    for (const name of names) {
      constructorNameToCategory.set(name, category)
    }
  }
  return constructorNameToCategory
}

let constructorNameToCategory: Map<string, string> | undefined

/** The classes JavaScript defines, by the category they belong to. */
const CATEGORY_TO_CLASS_NAMES = {
  array: [
    `Array`,
    `Array Iterator`,
    `Int8Array`,
    `Uint8Array`,
    `Uint8ClampedArray`,
    `Int16Array`,
    `Uint16Array`,
    `Int32Array`,
    `Uint32Array`,
    `Float16Array`,
    `Float32Array`,
    `Float64Array`,
    `BigInt64Array`,
    `BigUint64Array`,
  ],
  closure: [
    `Function`,
    `GeneratorFunction`,
    `AsyncFunction`,
    `AsyncGeneratorFunction`,
  ],
  regexp: [`RegExp`],
  number: [`Number`],
  symbol: [`Symbol`],
  bigint: [`BigInt`],
  object: [
    `Object`,
    `Arguments`,
    `Generator`,
    `AsyncGenerator`,
    `Map Iterator`,
    `Set Iterator`,
    `String Iterator`,
    `RegExp String Iterator`,
    `AsyncIterator`,
    `AsyncFromSyncIterator`,
  ],
  // Namespaced classes, whose namespace is the global rather than the class.
  'built-in': [
    `ShadowRealm`,
    `Intl.DurationFormat`,
    `Intl.ListFormat`,
    `Intl.DateTimeFormat`,
  ],
} as const satisfies Record<string, readonly string[]>
