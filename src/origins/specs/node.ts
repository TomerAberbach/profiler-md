import type { DeepReadonly } from '../../helpers/types.ts'
import type { SourceLocation } from '../../location.ts'
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
    hasProtocol(location, NODE_PROTOCOLS) ||
    // Node loads a dependency from a file. A browser page loads one over
    // `http:` or `https:`, which a development server may serve from a
    // `node_modules/` path (Vite's `/node_modules/.vite/deps/`)
    (isFileLocated(location) && hasNodeModulesPath(location)),
  categorizeEntry: entry =>
    v8JavaScriptCategory(entry) ??
    protocolCategory(entry, `stdlib`, NODE_PROTOCOLS) ??
    `ours`,
  categorizeHeapSnapshotConstructor: javaScriptConstructorCategory,
} as const satisfies OriginSpec

/** The module specifiers Node resolves to runtime builtins. */
const NODE_PROTOCOLS = [`node:`]

const isFileLocated = (
  location: DeepReadonly<SourceLocation> | undefined,
): boolean => location?.type === `relative` || hasProtocol(location, [`file:`])
