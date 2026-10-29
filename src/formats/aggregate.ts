import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferenceId } from '../location.ts'
import type { InputAggregator } from '../modalities/aggregator.ts'
import { modalitySpecOf } from '../modalities/registry.ts'
import type { AggregatedInput } from '../modalities/registry.ts'
import type {
  AggregationProfileToMdOptions,
  ProfileEntry,
  ProfileToMdContext,
} from '../options.ts'
import { OriginDetector } from '../origins/index.ts'
import type { Origin, OriginEvidence } from '../origins/index.ts'
import type { ParseResult } from './parse.ts'
import { formatToSpec } from './registry.ts'
import type { Format } from './registry.ts'

/** A raw input's aggregators, under the context its origin detection resolved. */
export type PreparedInputs = {
  aggregators: InputAggregator<AggregatedInput>[]
  context: ProfileToMdContext
  recordTally: ParseResult[`recordTally`]
}

/** Creates each parsed input's aggregator and detects the origin across them. */
export const prepareParseResult = (
  { parsed, recordTally }: ParseResult,
  options: AggregationProfileToMdOptions,
  format: Format,

  /** The origin the caller specified, if any. */
  origin?: Origin,
): PreparedInputs => {
  const aggregators = parsed.map(input =>
    modalitySpecOf(input).aggregator(input, recordTally),
  )

  const detector = new OriginDetector(formatToSpec[format], origin)
  for (const aggregator of aggregators) {
    aggregator.detectOrigin(detector)
  }

  const resolvedContext: ProfileToMdContext = {
    format,
    origin: detector.resolve(),
  }
  // An input with no profiles has no entries to detect an origin from, and no
  // functions for the origin to categorize.
  if (aggregators.length > 0) {
    logOrigin(detector, resolvedContext, options)
  }
  return { aggregators, context: resolvedContext, recordTally }
}

/**
 * Aggregates each prepared input, then rejects the raw input if the parse left
 * it with no records, or warns about what the parse skipped.
 *
 * On a side of a diff, {@link otherSide} is the other side's prepared inputs.
 */
export const aggregatePreparedInputs = (
  { aggregators, context, recordTally }: PreparedInputs,
  options: AggregationProfileToMdOptions,
  otherSide?: PreparedInputs,
): AggregatedInput[] => {
  const aggregated = aggregators.map((aggregator, index) => {
    const otherSideAggregator = otherSide?.aggregators[index]
    return aggregator.aggregate(
      options,
      context,
      otherSideAggregator && {
        aggregator: otherSideAggregator,
        context: otherSide.context,
      },
    )
  })
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
