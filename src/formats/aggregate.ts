import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferenceId } from '../location.ts'
import { modalitySpecOf } from '../modalities/registry.ts'
import type { AggregatedInput } from '../modalities/registry.ts'
import type {
  AggregationProfileToMdOptions,
  ProfileEntry,
  ProfileToMdContext,
  UnresolvedProfileToMdContext,
} from '../options.ts'
import { OriginDetector } from '../origins/index.ts'
import type { Origin, OriginEvidence } from '../origins/index.ts'
import type { ParseResult } from './parse.ts'
import type { Format } from './registry.ts'

/**
 * Aggregates each parsed input through its modality's uniform pipeline, then
 * rejects the input if the parse left it with no records, or warns about what
 * the parse skipped.
 *
 * The origin is detected once across all inputs.
 */
export const aggregateParseResult = (
  { parsed, recordTally }: ParseResult,
  options: AggregationProfileToMdOptions,
  context: UnresolvedProfileToMdContext,
): AggregatedInput[] => {
  const aggregators = parsed.map(input =>
    modalitySpecOf(input).aggregator(input, recordTally),
  )

  const detector = new OriginDetector(context)
  for (const aggregator of aggregators) {
    aggregator.detectOrigin(detector)
  }

  const resolvedContext: ProfileToMdContext = {
    format: context.format,
    origin: detector.resolve(),
  }
  // An input with no profiles has no entries to detect an origin from, and no
  // functions for the origin to categorize.
  if (aggregators.length > 0) {
    logOrigin(detector, resolvedContext, options)
  }
  const aggregated = aggregators.map(aggregator =>
    aggregator.aggregate(options, resolvedContext),
  )
  recordTally.throwOrWarn(options)
  return aggregated
}

const logOrigin = (
  detector: OriginDetector,
  { origin }: ProfileToMdContext,
  { logger }: AggregationProfileToMdOptions,
): void => {
  const { info, debug } = logger
  if (!info && !debug) {
    return
  }

  const { evidence, candidates } = detector
  if (evidence.type === `specified`) {
    info?.(`specified origin: ${origin}`)
    return
  }

  debug?.(`origin candidates, in priority order: ${candidates.join(`, `)}`)
  if (evidence.type === `fallback`) {
    info?.(`fallback origin: ${origin}`)
    debug?.(`no entry marked another origin`)
    return
  }

  info?.(`detected origin: ${origin}`)
  debug?.(describeOriginEvidence(origin, evidence))
}

const describeOriginEvidence = (
  origin: Origin,
  evidence: OriginEvidence & { type: `marker` | `hint` },
): string =>
  evidence.type === `marker`
    ? `${origin} is marked by the entry ${describeEntry(evidence.entry)}`
    : `${origin} is named by the format's metadata`

const describeEntry = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): string => {
  const described = name ?? `<anonymous>`
  return location ? `${described} in ${sourceReferenceId(location)}` : described
}

export const makeContext = (
  format: Format,
  origin: Origin | undefined,
): UnresolvedProfileToMdContext => ({ format, origin: origin ?? null })
