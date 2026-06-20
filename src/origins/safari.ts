import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { ProfileEntry } from '../options.ts'
import {
  locationlessStdlibCategory,
  nodeModulesCategory,
  syntheticFrameCategory,
} from './categorize.ts'
import { someEntry } from './origin.ts'
import type { OriginSpec } from './origin.ts'

export const safariOriginSpec = {
  id: `safari`,
  language: `javascript`,
  formats: [`jsc-heap-snapshot`, `webkit-timeline-recording`],
  matches: context => someEntry(context, isInjectedScript),
  categorize: entry =>
    syntheticFrameCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    nodeModulesCategory(entry) ??
    (isInjectedScript(entry) ? `stdlib` : undefined) ??
    `ours`,
} as const satisfies OriginSpec

/**
 * Whether the entry comes from a WebKit-injected script, identified by the
 * {@link INJECTED_SCRIPT_MARKER} in its name or path. Shared by detection and
 * categorization so the two can't disagree on what counts as injected.
 */
const isInjectedScript = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): boolean =>
  name?.startsWith(INJECTED_SCRIPT_MARKER) === true ||
  (location !== undefined &&
    fileReferencePath(location).includes(INJECTED_SCRIPT_MARKER))

/** The marker WebKit gives the scripts it injects (e.g. devtools internals). */
const INJECTED_SCRIPT_MARKER = `__InjectedScript_`
