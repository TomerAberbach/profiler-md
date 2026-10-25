import type {
  AggregationProfileToMdOptions,
  ProfileToMdContext,
} from '../options.ts'
import type { OriginDetector } from '../origins/index.ts'

export type InputAggregator<Aggregated> = {
  /**
   * Passes this input's origin-detection entries to the raw input's shared
   * detector.
   *
   * May be skipped when the detector decides early.
   */
  detectOrigin: (detector: OriginDetector) => void

  /**
   * Aggregates the input under the raw input's resolved context. On a side of
   * a diff, {@link otherSide} is the other side's input that the diff pairs
   * with this one.
   */
  aggregate: (
    options: AggregationProfileToMdOptions,
    context: ProfileToMdContext,
    otherSide?: OtherSideInput,
  ) => Aggregated
}

/** An input's aggregator, under the context of the raw input it is part of. */
export type OtherSideInput = {
  aggregator: InputAggregator<unknown>
  context: ProfileToMdContext
}
