import { CallGraphAggregator } from '../modalities/call-graph/index.ts'
import { CallStackProfileAggregator } from '../modalities/call-stack-profile/index.ts'
import { HeapSnapshotAggregator } from '../modalities/heap-snapshot/aggregate.ts'
import type {
  AggregationProfileToMdOptions,
  ProfileToMdContext,
  UnresolvedProfileToMdContext,
} from '../options.ts'
import { OriginDetector } from '../origins/index.ts'
import type { Origin } from '../origins/index.ts'
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
  return aggregators.map(aggregator =>
    aggregator.aggregate(options, resolvedContext),
  )
}

/**
 * Builds the conversion context, which contains the resolved format and the
 * explicit origin (or `null` when none was given).
 */
export const makeContext = (
  format: Format,
  origin: Origin | undefined,
): UnresolvedProfileToMdContext => ({ format, origin: origin ?? null })
