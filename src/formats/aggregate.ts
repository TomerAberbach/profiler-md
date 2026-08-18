import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferenceId } from '../location.ts'
import { CallGraphAggregator } from '../modalities/call-graph/index.ts'
import { CallStackProfileAggregator } from '../modalities/call-stack-profile/index.ts'
import { HeapSnapshotAggregator } from '../modalities/heap-snapshot/aggregate.ts'
import type {
  AggregationProfileToMdOptions,
  ProfileEntry,
  ProfileToMdContext,
  UnresolvedProfileToMdContext,
} from '../options.ts'
import { OriginDetector, originTitle } from '../origins/index.ts'
import type { Origin, OriginEvidence } from '../origins/index.ts'
import type { AggregatedInput, ParsedInput } from './converter.ts'
import type { Format } from './registry.ts'

/**
 * Aggregates each parsed input through its modality's uniform pipeline.
 *
 * The origin is detected once across all inputs.
 */
export const aggregateParsedInputs = (
  parsed: ParsedInput[],
  options: AggregationProfileToMdOptions,
  context: UnresolvedProfileToMdContext,
): AggregatedInput[] => {
  const aggregators = parsed.map(input => {
    switch (input.type) {
      case `call-stack-profile`:
        return new CallStackProfileAggregator(input)
      case `call-graph`:
        return new CallGraphAggregator(input)
      case `heap-snapshot`:
        return new HeapSnapshotAggregator(input)
    }
  })

  const detector = new OriginDetector(context)
  for (const aggregator of aggregators) {
    aggregator.detectOrigin(detector)
  }

  const resolvedContext: ProfileToMdContext = {
    format: context.format,
    origin: detector.resolve(),
  }
  logOrigin(detector, resolvedContext, options)
  return aggregators.map(aggregator =>
    aggregator.aggregate(options, resolvedContext),
  )
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
  if (evidence.type !== `specified` && candidates.length > 1) {
    debug?.(`origin candidates, in priority order: ${candidates.join(`, `)}`)
  }
  info?.(`origin: ${originTitle(origin)} (${describeOriginEvidence(evidence)})`)
}

const describeOriginEvidence = (evidence: OriginEvidence): string => {
  switch (evidence.type) {
    case `specified`:
      return `specified`
    case `marker`:
      return `detected from the entry ${describeEntry(evidence.entry)}`
    case `hint`:
      return `detected from the format's metadata`
    case `fallback`:
      return `the fallback: no entry marked another origin`
  }
}

const describeEntry = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): string => {
  const described = name ?? `<anonymous>`
  return location ? `${described} (${sourceReferenceId(location)})` : described
}

/**
 * Builds the conversion context, which contains the resolved format and the
 * explicit origin (or `null` when none was given).
 */
export const makeContext = (
  format: Format,
  origin: Origin | undefined,
): UnresolvedProfileToMdContext => ({ format, origin: origin ?? null })
