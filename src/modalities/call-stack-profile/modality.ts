import { functionEntities } from '../function-entities.ts'
import type { ModalitySpec } from '../spec.ts'
import { CallStackProfileAggregator } from './aggregate.ts'
import type {
  AggregatedCallStackProfile,
  AggregatedCallStackProfileFunction,
} from './aggregate.ts'
import { diffAggregatedCallStackProfiles } from './diff.ts'
import { formatCallStackProfile, formatCallStackProfileDiff } from './format.ts'
import type { CallStackProfile } from './type.ts'

export const callStackProfileModalitySpec = {
  id: `call-stack-profile`,
  aggregator: (profile, reader) =>
    new CallStackProfileAggregator({
      ...profile,
      observations: reader.records(profile.observations),
      ...(profile.lineMetrics && {
        lineMetrics: reader.iterable(profile.lineMetrics),
      }),
    }),
  format: formatCallStackProfile,
  formatDiff: (base, current, options) =>
    formatCallStackProfileDiff(
      diffAggregatedCallStackProfiles(base, current, options),
      options,
    ),
  ...functionEntities<AggregatedCallStackProfileFunction>(),
} as const satisfies ModalitySpec<
  CallStackProfile,
  AggregatedCallStackProfile,
  AggregatedCallStackProfileFunction
>
