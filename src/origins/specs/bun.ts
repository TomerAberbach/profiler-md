import {
  locationlessCategory,
  protocolCategory,
  syntheticFrameCategory,
} from '../categorize.ts'
import {
  ecmaScriptBuiltinCategory,
  javaScriptConstructorCategory,
  nodeModulesCategory,
} from '../javascript.ts'
import { jscConstructorCategory } from '../jsc.ts'
import type { OriginSpec } from '../origin.ts'

export const bunOriginSpec = {
  id: `bun`,
  title: `Bun`,
  formats: [`v8-cpu-profile`, `jsc-heap-snapshot`, `v8-heap-snapshot`],
  // Both sets are native, so their frames and heap nodes have no source
  // location. In CPU profiles the no-location guard alone excludes user code,
  // since V8 and JSC record every JavaScript function's script location. Heap
  // snapshots are weaker: most nodes are location-less, including instances of
  // user-defined classes, so each marker name must additionally be one no user
  // or library would plausibly define.
  isMarkerEntry: ({ name, location }) =>
    location === undefined &&
    name !== undefined &&
    (JSC_MODULE_LOADER_BUILTINS.has(name) || BUN_RUNTIME_CLASSES.has(name)),
  categorizeEntry: entry =>
    syntheticFrameCategory(entry) ??
    ecmaScriptBuiltinCategory(entry) ??
    locationlessCategory(entry) ??
    nodeModulesCategory(entry) ??
    protocolCategory(entry, `stdlib`, BUN_STDLIB_PROTOCOLS) ??
    `ours`,
  categorizeHeapSnapshotConstructor: name =>
    jscConstructorCategory(name) ?? javaScriptConstructorCategory(name),
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

/**
 * Bun's own runtime C++ classes, which appear as heap-snapshot node class
 * names in both the JSC and V8 snapshot formats Bun writes. Safari (the other
 * JSC snapshot writer) and Node/Chrome (the other V8 snapshot writers) never
 * register these classes. A snapshot node has no location, so a user class
 * sharing a name would match too; the set deliberately excludes names user
 * code might define (`Bun`, `FileSink`, `NextTickQueue`) in favor of ones only
 * Bun's internals spell.
 */
const BUN_RUNTIME_CLASSES = new Set([
  `NodeJSFS`,
  `InternalModuleRegistry`,
  `ProcessBindingConstants`,
  `FileInternalReadableStreamSource`,
])
