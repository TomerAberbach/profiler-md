import { protocolCategory } from '../categorize.ts'
import { v8JavaScriptCategory } from '../javascript.ts'
import { hasProtocol } from '../origin.ts'
import type { OriginSpec } from '../origin.ts'

export const denoOriginSpec = {
  id: `deno`,
  title: `Deno`,
  formats: [`v8-cpu-profile`],
  isMarkerEntry: ({ location }) => hasProtocol(location, DENO_DETECT_PROTOCOLS),
  categorizeEntry: entry =>
    v8JavaScriptCategory(entry) ??
    protocolCategory(entry, `stdlib`, DENO_STDLIB_PROTOCOLS) ??
    protocolCategory(entry, `third-party`, DENO_THIRD_PARTY_PROTOCOLS) ??
    `ours`,
} as const satisfies OriginSpec

/** The Deno-only specifiers whose presence identifies a Deno profile. */
const DENO_DETECT_PROTOCOLS = [`ext:`, `deno:`]

/** The module specifiers Deno resolves to runtime builtins. */
const DENO_STDLIB_PROTOCOLS = [`ext:`, `deno:`, `node:`]

/** The module specifiers Deno resolves to external dependencies. */
const DENO_THIRD_PARTY_PROTOCOLS = [`npm:`, `jsr:`]
