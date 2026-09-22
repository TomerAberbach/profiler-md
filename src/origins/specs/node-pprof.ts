import type { DeepReadonly } from '../../helpers/types.ts'
import type { FunctionCategory, ProfileEntry } from '../../options.ts'
import {
  locationlessCategory,
  protocolCategory,
  syntheticFrameCategory,
} from '../categorize.ts'
import {
  ecmaScriptBuiltinCategory,
  hasNodeModulesPath,
  nodeModulesCategory,
  v8RegExpCategory,
} from '../javascript.ts'
import { hasProtocol } from '../origin.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * Node.js profiled by the `pprof` package or its `@datadog/pprof` fork.
 *
 * The parser reads the package's output as the pprof spec defines it, though
 * the package's serializer violates the spec:
 *
 * - By default it writes V8's definition line into `Line.line`, so a function's
 *   `Lines` section lists its definition line as its only executing line. With
 *   `lineNumbers: true` it writes the executing line
 * - It never sets `Function.start_line`, so every function lacks a definition
 *   line
 * - It keys a named function by script ID and name, so same-named functions in
 *   one script merge into one function
 *
 * Reported upstream as https://github.com/DataDog/dd-trace-js/issues/10415,
 * inherited from https://github.com/google/pprof-nodejs/issues/361.
 */
export const nodePprofOriginSpec = {
  id: `node-pprof`,
  formats: [`pprof`],
  isMarkerEntry: ({ name, location }) =>
    name === `Node.js` ||
    name === `Garbage Collection` ||
    hasProtocol(location, NODE_PROTOCOLS) ||
    hasNodeModulesPath(location),
  categorizeEntry: entry =>
    garbageCollectionCategory(entry) ??
    // Its profiles come from the same engine the `node` origin observes, so
    // they contain V8's pseudo-frames and regular-expression frames too.
    syntheticFrameCategory(entry) ??
    v8RegExpCategory(entry) ??
    ecmaScriptBuiltinCategory(entry) ??
    locationlessCategory(entry) ??
    nodeModulesCategory(entry) ??
    protocolCategory(entry, `stdlib`, NODE_PROTOCOLS) ??
    `ours`,
  normalizeStackFrame: input => {
    // `dd-trace` heap profiles pack an anonymous function's definition
    // position into its name as `(anonymous:L#122135:C#9)`. Move it into the
    // definition's position (the serializer sets no `start_line`) so the name
    // formats as plain `(anonymous)` while the position still distinguishes
    // functions.
    const packed =
      input.name === undefined ? null : PACKED_ANONYMOUS.exec(input.name)
    if (!packed) {
      return input
    }

    const { line, column } = packed.groups!
    return {
      ...input,
      name: `(anonymous)`,
      ...(input.definition
        ? {
            definition: {
              ...input.definition,
              position: {
                line: input.definition.position?.line ?? Number(line),
                column: input.definition.position?.column ?? Number(column),
              },
            },
          }
        : {}),
    }
  },
} as const satisfies OriginSpec

/** `dd-trace` packed anonymous frame name, e.g. `(anonymous:L#122135:C#9)`. */
const PACKED_ANONYMOUS = /^\(anonymous:L#(?<line>\d+):C#(?<column>\d+)\)$/u

/** The module specifiers Node resolves to runtime builtins. */
const NODE_PROTOCOLS = [`node:`]

/**
 * Categorizes the `pprof` package's garbage-collection frame, labelled
 * `Garbage Collection`, as `garbage-collector`.
 */
const garbageCollectionCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  name === `Garbage Collection` ? `garbage-collector` : undefined
