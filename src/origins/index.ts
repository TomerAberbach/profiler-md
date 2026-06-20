import type { Format } from '../formats/index.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import { bunOriginSpec } from './bun.ts'
import { denoOriginSpec } from './deno.ts'
import { jvmOriginSpec } from './jvm.ts'
import { nodePprofOriginSpec } from './node-pprof.ts'
import { nodeOriginSpec } from './node.ts'
import type { OriginMatchContext } from './origin.ts'
import { pprofRsOriginSpec } from './pprof-rs.ts'
import { pySpyOriginSpec } from './py-spy.ts'
import { safariOriginSpec } from './safari.ts'
import { unknownOriginSpec } from './unknown.ts'

/**
 * A profile or snapshot origin: the thing that generated it, i.e. a profiler
 * paired with a runtime (e.g. `node`, `deno`, `safari`, etc.).
 *
 * Auto-detected from a profile's entries via {@link determineOrigin}, or
 * specified explicitly.
 */
export type Origin = SpecificOriginSpec[`id`]

/**
 * Returns the category of {@link entry} as the given {@link origin} categorizes
 * it (see {@link OriginSpec.categorize}).
 *
 * The origin-aware categorization the library applies by default. Exposed so a
 * custom `categorizeEntries` can reuse the library's categorization for an
 * origin it didn't special-case, rather than reimplementing it.
 */
export const categorizeEntryForOrigin = (
  entry: DeepReadonly<ProfileEntry>,
  origin: Origin,
): EntryCategory => originSpecsById.get(origin)!.categorize(entry)

/**
 * Detects the origin of a profile or snapshot from its {@link format} and
 * aggregated {@link entries}.
 *
 * Tries each origin that can emit {@link format} in priority order, returning
 * the first whose detection signal is present in the entries, and falls back to
 * the format's fallback origin when none match.
 *
 * Exposed so a custom `categorizeEntries` can reuse the library's detection
 * before applying its own categorization, or override it.
 */
export const determineOrigin = ({
  format,
  entries,
}: {
  format: Format
  entries: readonly DeepReadonly<ProfileEntry>[]
}): Origin => {
  const candidates = formatToOriginSpecs.get(format) ?? []
  const fallback = fallbackOriginSpecs[format]
  if (candidates.length === 0) {
    return fallback.id
  }

  // A single candidate that's already the fallback is unconditional (e.g. a
  // single-runtime format), so skip iterating entries to match it.
  if (candidates.length === 1 && candidates[0] === fallback) {
    return fallback.id
  }

  const context: OriginMatchContext = { format, entries }
  const matchingCandidate = candidates.find(candidate =>
    candidate.matches(context),
  )
  return (matchingCandidate ?? fallback).id
}

/**
 * All origin specs in global detection-priority order.
 *
 * Within a format, candidates are tried in the order they appear here, so
 * origins that share a format and whose signals overlap must be ordered
 * carefully (e.g. Deno before Node, since Deno supports `node:` specifiers).
 */
const originSpecs = [
  denoOriginSpec,
  bunOriginSpec,
  nodeOriginSpec,
  nodePprofOriginSpec,
  pprofRsOriginSpec,
  pySpyOriginSpec,
  jvmOriginSpec,
  safariOriginSpec,
  unknownOriginSpec,
]

/** One of the concrete origin specs, with its literal {@link Origin} ID. */
type SpecificOriginSpec = (typeof originSpecs)[number]

/** Every supported origin ID. */
export const origins: Origin[] = originSpecs.map(originSpec => originSpec.id)

const originSpecsById = new Map<Origin, SpecificOriginSpec>(
  originSpecs.map(originSpec => [originSpec.id, originSpec]),
)

const indexOriginSpecsByFormat = (): Map<Format, SpecificOriginSpec[]> => {
  const index = new Map<Format, SpecificOriginSpec[]>()
  for (const originSpec of originSpecs) {
    for (const format of originSpec.formats) {
      let candidates = index.get(format)
      if (!candidates) {
        candidates = []
        index.set(format, candidates)
      }
      candidates.push(originSpec)
    }
  }
  return index
}

const formatToOriginSpecs = indexOriginSpecsByFormat()

/**
 * The origin to resolve to when no specific origin matches.
 *
 * Multi-origin formats fall back to the `unknown` sentinel. Single-runtime
 * formats fall back to their runtime origin, which always emits them.
 */
const fallbackOriginSpecs: Record<Format, SpecificOriginSpec> = {
  collapsed: unknownOriginSpec,
  jfr: jvmOriginSpec,
  pprof: unknownOriginSpec,
  speedscope: unknownOriginSpec,
  'v8-cpu-profile': unknownOriginSpec,
  'v8-heap-snapshot': nodeOriginSpec,
  'v8-heap-profile': nodeOriginSpec,
  'jsc-heap-snapshot': safariOriginSpec,
  'webkit-timeline-recording': safariOriginSpec,
}
