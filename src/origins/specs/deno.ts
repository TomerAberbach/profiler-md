import { protocolCategory } from '../categorize.ts'
import { NODE_PROTOCOLS, v8JavaScriptCategory } from '../javascript.ts'
import { hasProtocol } from '../spec.ts'
import type { OriginSpec } from '../spec.ts'

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

const DENO_STDLIB_PROTOCOLS = [`ext:`, `deno:`, ...NODE_PROTOCOLS]

const DENO_THIRD_PARTY_PROTOCOLS = [`npm:`, `jsr:`]
