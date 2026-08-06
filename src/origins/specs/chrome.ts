import { protocolCategory } from '../categorize.ts'
import {
  javaScriptConstructorCategory,
  v8JavaScriptCategory,
} from '../javascript.ts'
import { hasProtocol } from '../origin.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * The Chrome browser's DevTools profilers.
 *
 * Detection relies on web-page evidence: scripts loaded over the web or from a
 * browser extension. Runtime-specific markers (`node:`, `ext:`, JSC builtins)
 * outrank this via priority order, so a server-side profile that also loads
 * modules over the web still resolves to its runtime, provided some runtime
 * frame was captured. A profile of exclusively web-loaded code (e.g. one
 * attached mid-run to a Deno process hot-looping in a remote module) carries
 * only web evidence and resolves here; accepted, since the same input is
 * indistinguishable from a browser profile.
 */
export const chromeOriginSpec = {
  id: `chrome`,
  title: `Chrome`,
  formats: [`v8-cpu-profile`, `v8-heap-snapshot`, `v8-heap-profile`],
  // Web-page evidence (scripts loaded over the web, from an extension, or
  // from a Chrome-internal page), or Blink's own natives: its internal C++
  // classes, which browser heap snapshots carry as native node class names,
  // and its DOM functions, which profiles of local scripts carry as
  // location-less frames. Both native sets match only location-less entries,
  // since a Blink native has no script location while a JavaScript function or
  // class sharing the name (e.g. a DOM polyfill like jsdom, which implements
  // the DOM in located JavaScript) always does. The class names
  // are additionally Blink-internal rather than web-standard (`HTMLDocument`,
  // `Window`) so a polyfill can't even define them.
  isMarkerEntry: ({ name, location }) =>
    hasProtocol(location, CHROME_PAGE_PROTOCOLS) ||
    (location === undefined &&
      name !== undefined &&
      (BLINK_INTERNAL_CLASSES.has(name) || BLINK_DOM_FUNCTIONS.has(name))),
  categorizeEntry: entry =>
    v8JavaScriptCategory(entry) ??
    protocolCategory(entry, `third-party`, [EXTENSION_PROTOCOL]) ??
    `ours`,
  categorizeHeapSnapshotConstructor: javaScriptConstructorCategory,
} as const satisfies OriginSpec

/** The protocol a browser extension's injected scripts load from. */
const EXTENSION_PROTOCOL = `chrome-extension:`

/**
 * The protocols a Chrome page's scripts load over: the web, an extension, and
 * the Chrome-internal schemes (`chrome://settings`, sandboxed
 * `chrome-untrusted://` pages, and the DevTools application itself), which no
 * other runtime serves scripts from.
 */
const CHROME_PAGE_PROTOCOLS = [
  `http:`,
  `https:`,
  EXTENSION_PROTOCOL,
  `chrome:`,
  `chrome-untrusted:`,
  `devtools:`,
]

/**
 * Blink-internal C++ classes every page's heap contains. Deliberately excludes
 * JavaScript-visible standard classes (`HTMLDocument`, `Window`, `Navigator`),
 * which a DOM implementation in JavaScript would also define.
 */
const BLINK_INTERNAL_CLASSES = new Set([
  `StyleEngine`,
  `ScriptRunner`,
  `ScriptedAnimationController`,
  `FragmentDirective`,
])

/**
 * DOM tree functions Blink implements natively, appearing as location-less
 * frames when a page's profile samples DOM work. Restricted to functions no
 * server-side runtime implements natively: Node, Deno, and Bun have no DOM,
 * and the set excludes names they do provide natively (e.g. Bun's native
 * `addEventListener`).
 */
const BLINK_DOM_FUNCTIONS = new Set([
  `createElement`,
  `createElementNS`,
  `createTextNode`,
  `appendChild`,
  `insertBefore`,
  `removeChild`,
  `replaceChildren`,
  `querySelector`,
  `querySelectorAll`,
  `getElementById`,
  `getAttribute`,
  `setAttribute`,
])
