import type {
  AggregateProfileToMdOptions,
  ProfileToMdContext,
} from '../options.ts'
import type { OriginDetector } from '../origins/index.ts'

/**
 * The uniform per-input aggregation contract each modality's aggregator
 * implements. The framework constructs one aggregator per parsed input, feeds
 * them all to one shared {@link OriginDetector}, then aggregates each under
 * the file's single resolved context — with no other per-modality logic.
 */
export type InputAggregator<Aggregated> = {
  /**
   * Feeds this input's origin-detection entries to the file's shared
   * detector. May be skipped entirely when the detector decides early.
   */
  detectOrigin: (detector: OriginDetector) => void

  /** Aggregates the input under the file's resolved context. */
  aggregate: (
    options: AggregateProfileToMdOptions,
    context: ProfileToMdContext,
  ) => Aggregated
}
