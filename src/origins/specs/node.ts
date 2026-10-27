import type { DeepReadonly } from '../../helpers/types.ts'
import type { SourceLocation } from '../../location.ts'
import type {
  TraceEvent,
  TraceEventCategory,
} from '../../modalities/trace/type.ts'
import { protocolCategory } from '../categorize.ts'
import {
  hasNodeModulesPath,
  javaScriptConstructorCategory,
  javaScriptMatchHeapSnapshotEdgeName,
  v8JavaScriptCategory,
} from '../javascript.ts'
import { hasProtocol } from '../spec.ts'
import type { OriginSpec } from '../spec.ts'
import {
  normalizeV8TraceEvent,
  v8TraceEventCategory,
} from '../v8-trace-events.ts'

export const nodeOriginSpec = {
  id: `node`,
  title: `Node.js`,
  formats: [
    `v8-cpu-profile`,
    `v8-heap-snapshot`,
    `v8-heap-profile`,
    `trace-event`,
  ],
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
  matchHeapSnapshotEdgeName: javaScriptMatchHeapSnapshotEdgeName,
  categorizeTraceEvent: event =>
    v8TraceEventCategory(event) ?? nodeTraceEventCategory(event),
  normalizeTraceEvent: normalizeV8TraceEvent,
} as const satisfies OriginSpec

/**
 * The category of a trace event Node writes under its own `node.*`
 * categories. A span of the `node.async_hooks` category named `*_CALLBACK` is
 * the callback of an async resource running. The category's other events are
 * the resources' lifetimes.
 */
const nodeTraceEventCategory = ({
  name,
  declaredCategories,
}: DeepReadonly<Pick<TraceEvent, `name` | `declaredCategories`>>):
  TraceEventCategory | undefined => {
  if (declaredCategories?.includes(`node.fs`)) {
    return `io`
  }
  return declaredCategories?.includes(`node.async_hooks`) &&
    name.endsWith(`_CALLBACK`)
    ? `script`
    : undefined
}

/** The module specifiers Node resolves to runtime builtins. */
const NODE_PROTOCOLS = [`node:`]

const isFileLocated = (
  location: DeepReadonly<SourceLocation> | undefined,
): boolean => location?.type === `relative` || hasProtocol(location, [`file:`])
