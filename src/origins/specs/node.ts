import { protocolCategory } from '../categorize.ts'
import {
  hasNodeModulesPath,
  javaScriptConstructorCategory,
  v8JavaScriptCategory,
} from '../javascript.ts'
import { hasProtocol } from '../origin.ts'
import type { OriginSpec } from '../origin.ts'

export const nodeOriginSpec = {
  id: `node`,
  title: `Node.js`,
  formats: [`v8-cpu-profile`, `v8-heap-snapshot`, `v8-heap-profile`],
  isMarkerEntry: ({ location }) =>
    hasProtocol(location, NODE_PROTOCOLS) || hasNodeModulesPath(location),
  categorizeEntry: entry =>
    v8JavaScriptCategory(entry) ??
    protocolCategory(entry, `stdlib`, NODE_PROTOCOLS) ??
    `ours`,
  categorizeSnapshotConstructor: javaScriptConstructorCategory,
} as const satisfies OriginSpec

/** The module specifiers Node resolves to runtime builtins. */
const NODE_PROTOCOLS = [`node:`]
