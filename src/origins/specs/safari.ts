import type { DeepReadonly } from '../../helpers/types.ts'
import { fileReferencePath } from '../../location.ts'
import type { ProfileEntry } from '../../options.ts'
import { locationlessCategory, syntheticFrameCategory } from '../categorize.ts'
import {
  ecmaScriptBuiltinCategory,
  javaScriptConstructorCategory,
  nodeModulesCategory,
} from '../javascript.ts'
import { jscConstructorCategory } from '../jsc.ts'
import type { OriginSpec } from '../origin.ts'

/** The marker WebKit gives the scripts it injects (e.g. devtools internals). */
const INJECTED_SCRIPT_MARKER = `__InjectedScript_`

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

export const safariOriginSpec = {
  id: `safari`,
  title: `Safari`,
  formats: [`jsc-heap-snapshot`, `webkit-timeline-recording`],
  isMarkerEntry: isInjectedScript,
  categorizeEntry: entry =>
    syntheticFrameCategory(entry) ??
    ecmaScriptBuiltinCategory(entry) ??
    locationlessCategory(entry) ??
    nodeModulesCategory(entry) ??
    (isInjectedScript(entry) || isBundledAccessoryScript(entry)
      ? `stdlib`
      : undefined) ??
    `ours`,
  categorizeHeapSnapshotConstructor: name =>
    jscConstructorCategory(name) ?? javaScriptConstructorCategory(name),
} as const satisfies OriginSpec

/**
 * Whether the entry comes from a script Safari bundles and runs in the page
 * (e.g. `FormMetadata.js`, its autofill/password metadata classifier). Those
 * scripts appear as a bare filename with no directory or scheme, while page
 * code always carries a full URL, so a bare `*.js` name marks browser work
 * that shouldn't be attributed to the page.
 */
const isBundledAccessoryScript = ({
  location,
}: DeepReadonly<ProfileEntry>): boolean => {
  if (location?.type !== `relative`) {
    return false
  }
  const { path } = location
  return path.endsWith(`.js`) && !path.includes(`/`)
}
