import type { DeepReadonly } from '../helpers/types.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import {
  locationlessStdlibCategory,
  nodeModulesCategory,
  protocolCategory,
} from './categorize.ts'
import { hasNodeModulesPath, hasProtocol, someEntry } from './origin.ts'
import type { OriginSpec } from './origin.ts'

export const nodePprofOriginSpec = {
  id: `node-pprof`,
  language: `javascript`,
  formats: [`pprof`],
  matches: context =>
    someEntry(
      context,
      ({ name, location }) =>
        name === `Node.js` ||
        name === `Garbage Collection` ||
        hasProtocol(location, NODE_PROTOCOLS) ||
        hasNodeModulesPath(location),
    ),
  categorize: entry =>
    garbageCollectionCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    nodeModulesCategory(entry) ??
    protocolCategory(entry, `stdlib`, NODE_PROTOCOLS) ??
    `ours`,
} as const satisfies OriginSpec

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
