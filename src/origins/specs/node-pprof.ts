import type { DeepReadonly } from '../../helpers/types.ts'
import type { EntryCategory, ProfileEntry } from '../../options.ts'
import { locationlessStdlibCategory, protocolCategory } from '../categorize.ts'
import { hasNodeModulesPath, nodeModulesCategory } from '../javascript.ts'
import { hasProtocol } from '../origin.ts'
import type { OriginSpec } from '../origin.ts'

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
    locationlessStdlibCategory(entry) ??
    nodeModulesCategory(entry) ??
    protocolCategory(entry, `stdlib`, NODE_PROTOCOLS) ??
    `ours`,
  normalizeFrame: input => {
    // `dd-trace` heap profiles pack an anonymous function's definition
    // position into its name as `(anonymous:L#122135:C#9)`; move it into the
    // location (which carries the file but no line) so the name formats as
    // plain `(anonymous)` while the position still distinguishes functions.
    const packed =
      input.name === undefined ? null : PACKED_ANONYMOUS.exec(input.name)
    if (!packed) {
      return input
    }

    const { line, column } = packed.groups!
    return {
      ...input,
      name: `(anonymous)`,
      location: input.location && {
        ...input.location,
        line: input.location.line ?? Number(line),
        column: input.location.column ?? Number(column),
      },
    }
  },
} as const satisfies OriginSpec

/** `dd-trace` packed anonymous frame name, e.g. `(anonymous:L#122135:C#9)`. */
const PACKED_ANONYMOUS = /^\(anonymous:L#(?<line>\d+):C#(?<column>\d+)\)$/u

/** The module specifiers Node resolves to runtime builtins. */
const NODE_PROTOCOLS = [`node:`]

/**
 * Categorizes the `pprof` package's garbage-collection frame, labelled
 * `Garbage Collection`, as `garbage collector`.
 */
const garbageCollectionCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  name === `Garbage Collection` ? `garbage collector` : undefined
