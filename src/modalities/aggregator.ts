import type {
  AggregationProfileToMdOptions,
  ProfileToMdContext,
} from '../options.ts'
import type { OriginDetector } from '../origins/index.ts'

/**
 * The uniform per-input aggregation contract each modality's aggregator
 * implements.
 */
export type InputAggregator<Aggregated> = {
  /**
   * Passes this input's origin-detection entries to the file's shared detector.
   *
   * May be skipped when the detector decides early.
   */
  detectOrigin: (detector: OriginDetector) => void

  /** Aggregates the input under the file's resolved context. */
  aggregate: (
    options: AggregationProfileToMdOptions,
    context: ProfileToMdContext,
  ) => Aggregated
}
