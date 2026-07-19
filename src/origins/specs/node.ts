import {
  locationlessStdlibCategory,
  nodeModulesCategory,
  protocolCategory,
  syntheticFrameCategory,
  v8RegExpCategory,
} from '../categorize.ts'
import { hasNodeModulesPath, hasProtocol } from '../origin.ts'
import type { OriginSpec } from '../origin.ts'

export const nodeOriginSpec = {
  id: `node`,
  formats: [`v8-cpu-profile`, `v8-heap-snapshot`, `v8-heap-profile`],
  isMarkerEntry: ({ location }) =>
    hasProtocol(location, NODE_PROTOCOLS) || hasNodeModulesPath(location),
  categorizeEntry: entry =>
    syntheticFrameCategory(entry) ??
    v8RegExpCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    nodeModulesCategory(entry) ??
    protocolCategory(entry, `stdlib`, NODE_PROTOCOLS) ??
    `ours`,
} as const satisfies OriginSpec

/** The module specifiers Node resolves to runtime builtins. */
const NODE_PROTOCOLS = [`node:`]
