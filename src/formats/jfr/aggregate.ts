import type { NormalizedProfileToMdOptions } from '../../options.ts'
import { determineMetric, ProfileAggregator } from '../../profile/index.ts'
import type { AggregatedProfile, Metric } from '../../profile/index.ts'
import type { Jfr, JfrMethod, JfrSampleEvent, JfrSampleKind } from './parse.ts'

export const aggregateJfr = (
  { methods, stackTraces, events }: Jfr,
  options: NormalizedProfileToMdOptions,
): AggregatedProfile[] => {
  // Resolve a stack's nodes and leaf line lazily, caching by id. Many events
  // share a stack and the same nodes are reused across every kind's profile, so
  // each referenced stack is resolved at most once; stacks no event references
  // are never resolved.
  const resolvedStacks: ResolvedStack[] = []
  const resolveStack = (id: number): ResolvedStack => {
    let resolved = resolvedStacks[id]
    if (!resolved) {
      const { frames } = stackTraces[id]!
      resolved = {
        nodes: frames.map(frame => methods[frame.methodId]!),
        line: frames[0]?.lineNumber,
      }
      resolvedStacks[id] = resolved
    }
    return resolved
  }

  const eventsByKind = new Map<JfrSampleKind, JfrSampleEvent[]>()
  for (const event of events) {
    let kindEvents = eventsByKind.get(event.kind)
    if (!kindEvents) {
      kindEvents = []
      eventsByKind.set(event.kind, kindEvents)
    }
    kindEvents.push(event)
  }

  // A single recording can mix CPU, allocation, and lock events, so emit one
  // aggregated profile per kind that's present, like multi-metric pprof.
  const profiles: AggregatedProfile[] = []
  for (const { kind, metric } of KINDS) {
    const kindEvents = eventsByKind.get(kind)
    if (!kindEvents) {
      continue
    }

    const profileAggregator = new ProfileAggregator<JfrMethod>(
      {
        metrics: metric ? [metric] : [],
        functionKey: method => method.id,
        functionInput: method => ({
          name: method.name,
          location: method.className
            ? { urlOrPath: method.className }
            : undefined,
        }),
      },
      options,
    )

    let hasSamples = false
    for (const event of kindEvents) {
      const { nodes, line } = resolveStack(event.stackTraceId)
      profileAggregator.addSample({
        values: metric ? [event.weight] : [],
        nodes,
        line,
        sampleCount: event.sampleCount,
      })
      hasSamples = true
    }

    if (hasSamples) {
      profiles.push(profileAggregator.aggregate())
    }
  }

  return profiles
}

/** A stack trace's resolved nodes and the leaf frame's self line. */
type ResolvedStack = { nodes: JfrMethod[]; line: number | undefined }

/** Allocation samples are weighted by allocated bytes. */
const ALLOC_METRIC = determineMetric({ name: `alloc_space`, unit: `bytes` })

/** Lock samples are weighted by blocked time in nanoseconds. */
const LOCK_METRIC = determineMetric({ name: `block_time`, unit: `nanoseconds` })

/**
 * The metric for each sample kind, in the order profiles are emitted. CPU/wall
 * samples carry no value in JFR, so that profile has no metric and is ranked
 * purely by sample count.
 */
const KINDS: { kind: JfrSampleKind; metric: Metric | undefined }[] = [
  { kind: `cpu`, metric: undefined },
  { kind: `alloc`, metric: ALLOC_METRIC },
  { kind: `lock`, metric: LOCK_METRIC },
]
