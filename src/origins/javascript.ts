/**
 * JavaScript ecosystem conventions shared by the origins that observe a
 * JavaScript engine (V8's `RegExp:` frames, the npm package layout every
 * JavaScript runtime installs dependencies into, and the classes the language
 * and the web platform define, which every engine names the same in its heap
 * snapshots).
 */

import globals from 'globals'
import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferencePathOrName } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type { HeapSnapshotNodeCategory } from '../modalities/heap-snapshot/type.ts'
import type { FunctionCategory, ProfileEntry } from '../options.ts'
import { locationlessCategory, syntheticFrameCategory } from './categorize.ts'

/**
 * The categorization rules shared by the origins that observe V8 running
 * JavaScript: synthetic frames, V8's regular-expression frames, location-less
 * standard-library names, and `node_modules/` dependencies. Origin-specific
 * rules (module-specifier protocols) compose after it with `??`.
 */
export const v8JavaScriptCategory = (
  entry: DeepReadonly<ProfileEntry>,
): FunctionCategory | undefined =>
  syntheticFrameCategory(entry) ??
  v8RegExpCategory(entry) ??
  ecmaScriptBuiltinCategory(entry) ??
  locationlessCategory(entry) ??
  nodeModulesCategory(entry)

/**
 * Categorizes V8's regular-expression frames, labelled `RegExp: <source>`, as
 * `regexp`.
 */
export const v8RegExpCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  name?.startsWith(`RegExp: `) ? `regexp` : undefined

/**
 * Categorizes a frame the engine implements itself, named after a global the
 * language defines or a method on one, as `stdlib`.
 *
 * A JavaScript engine records a script location for every function the profiled
 * program defines, so a frame with no location is one the engine implements in
 * its own compiled code. That makes matching a bare name safe only here. The
 * engine's other location-less frames, the DOM and the host's APIs, fall
 * through to `native`, separating the language's own library from the
 * browser's.
 *
 * This also categorizes a runtime function sharing a built-in's name as
 * `stdlib` (Bun's module `resolve`, rather than `Promise.resolve`). The name is
 * the only evidence for either, and both are library code the runtime ships.
 */
export const ecmaScriptBuiltinCategory = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  !location && name !== undefined && getBuiltinNames().has(name)
    ? `stdlib`
    : undefined

/**
 * The names of the globals the language defines and of the methods on them,
 * derived from the running engine rather than listed, so the set matches
 * whatever the engine defines.
 *
 * Built on first use, since walking the globals costs time wasted on an input
 * with no JavaScript frames.
 */
const getBuiltinNames = (): ReadonlySet<string> => {
  if (builtinNames) {
    return builtinNames
  }

  const names = new Set<string>()
  const addMethodNames = (object: object | undefined): void => {
    if (!object) {
      return
    }
    for (const key of Object.getOwnPropertyNames(object)) {
      if (
        typeof Object.getOwnPropertyDescriptor(object, key)?.value ===
        `function`
      ) {
        names.add(key)
      }
    }
  }

  for (const name of Object.keys(globals.builtin)) {
    const value = (globalThis as Record<string, unknown>)[name]
    if (typeof value === `function`) {
      names.add(name)
      addMethodNames(value)
      addMethodNames(value.prototype as object | undefined)
    }
  }

  // The iterator prototypes are intrinsics with no global of their own, so
  // `next` and the other protocol methods are reachable only through an
  // instance.
  for (const iterator of ITERATORS) {
    const prototype = Object.getPrototypeOf(iterator) as object
    addMethodNames(prototype)
    addMethodNames(Object.getPrototypeOf(prototype) as object)
  }

  builtinNames = names
  return names
}

let builtinNames: ReadonlySet<string> | undefined

/** One iterator per intrinsic iterator prototype the language defines. */
const ITERATORS = [
  [][Symbol.iterator](),
  ``[Symbol.iterator](),
  new Map()[Symbol.iterator](),
]

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
  const path = sourceReferencePathOrName(location)
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
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  hasNodeModulesPath(location) ? `third-party` : undefined

/**
 * The heap snapshot category of a constructor named {@link name} under
 * JavaScript's own conventions: the classes the language specifies whose
 * instances a format types as plain objects.
 *
 * An engine names these classes after the language, not its own internals, so
 * the same names appear whichever snapshot format it writes. Engine classes
 * (JSC's `FunctionExecutable`, V8's `system / Context`) are the engine's own
 * and categorize in the format's code instead.
 *
 * Covers only the classes whose category the format gets wrong: an `Array`
 * instance is an `array` though every format types it as an object. A class the
 * host implements natively is left to the format, since a name alone can't
 * establish that the host allocated a node. A program may define a class named
 * `Cache` or `Range` as readily as the web platform does. V8 states host
 * allocation in the `native` node type. JavaScriptCore states nothing, so a
 * Safari snapshot reports the DOM as ordinary objects.
 *
 * Returns `undefined` for every other name, leaving the format's category in
 * place.
 */
export const javaScriptConstructorCategory = (
  name: string,
): HeapSnapshotNodeCategory | undefined =>
  getConstructorNameToCategory().get(name)

/** Builds the constructor name to category map on first use. */
const getConstructorNameToCategory = (): Map<
  string,
  HeapSnapshotNodeCategory
> => {
  constructorNameToCategory ??= new Map(
    (
      Object.entries(CATEGORY_TO_CLASS_NAMES) as [
        HeapSnapshotNodeCategory,
        readonly string[],
      ][]
    ).flatMap(([category, names]) =>
      names.map(name => [name, category] as const),
    ),
  )
  return constructorNameToCategory
}

let constructorNameToCategory: Map<string, HeapSnapshotNodeCategory> | undefined

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
  function: [
    `Function`,
    `GeneratorFunction`,
    `AsyncFunction`,
    `AsyncGeneratorFunction`,
  ],
  regexp: [`RegExp`],
  // The primitive wrappers (`Number`, `String`, `Boolean`, `Symbol`, `BigInt`)
  // are absent: a wrapper is an object holding a primitive, and every format
  // types the primitives themselves directly.
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
} as const satisfies Partial<
  Record<HeapSnapshotNodeCategory, readonly string[]>
>
