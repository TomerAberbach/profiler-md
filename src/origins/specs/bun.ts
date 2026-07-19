import {
  locationlessStdlibCategory,
  nodeModulesCategory,
  protocolCategory,
  syntheticFrameCategory,
} from '../categorize.ts'
import type { OriginSpec } from '../origin.ts'

export const bunOriginSpec = {
  id: `bun`,
  formats: [`v8-cpu-profile`],
  // The builtins are native, so they have no source location; a user function
  // that happens to share one of these names would carry a location, so
  // requiring none keeps the signal from misfiring on it.
  isMarkerEntry: ({ name, location }) =>
    location === undefined &&
    name !== undefined &&
    JSC_MODULE_LOADER_BUILTINS.has(name),
  categorizeEntry: entry =>
    syntheticFrameCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    nodeModulesCategory(entry) ??
    protocolCategory(entry, `stdlib`, BUN_STDLIB_PROTOCOLS) ??
    `ours`,
} as const satisfies OriginSpec

/**
 * The module specifiers Bun resolves to runtime builtins. `internal:` is the
 * scheme of Bun's own bundled JS modules (`internal:primordials`,
 * `internal:fs/streams`), which back the `node:`/`bun:` builtins.
 */
const BUN_STDLIB_PROTOCOLS = [`node:`, `bun:`, `internal:`]

/**
 * JavaScriptCore module-loader builtins. These appear in Bun profiles (Bun runs
 * on JavaScriptCore) but never in V8 profiles (Node and Deno), so they cleanly
 * distinguish Bun from the other V8 CPU profile origins.
 */
const JSC_MODULE_LOADER_BUILTINS = new Set([
  `linkAndEvaluateModule`,
  `loadAndEvaluateModule`,
  `moduleDeclarationInstantiation`,
  `loadModule`,
  `newRegistryEntry`,
  `cacheSatisfyAndReturn`,
  `ensureRegistered`,
])
