import { formatProfileName } from '../format.ts'
import { functionEntities } from '../function/index.ts'
import type { ModalitySpec } from '../spec.ts'
import {
  CallStackProfileAggregator,
  callStackProfileMeasuresOf,
} from './aggregate.ts'
import type {
  AggregatedCallStackProfile,
  AggregatedCallStackProfileFunction,
} from './aggregate.ts'
import {
  diffAggregatedCallStackProfiles,
  matchCallStackProfiles,
} from './diff.ts'
import type { CallStackProfileMatch } from './diff.ts'
import { formatCallStackProfile, formatCallStackProfileDiff } from './format.ts'
import { namingMetricsOf } from './measure.ts'
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
  name: ({ input, context }) =>
    formatProfileName(
      namingMetricsOf(callStackProfileMeasuresOf(input, context)),
    ),
  matchDiffed: (base, current) =>
    matchCallStackProfiles(
      callStackProfileMeasuresOf(base.input, base.context),
      callStackProfileMeasuresOf(current.input, current.context),
    ),
  formatDiff: (base, current, match, options) =>
    formatCallStackProfileDiff(
      diffAggregatedCallStackProfiles(base, current, match, options),
      options,
    ),
  ...functionEntities<AggregatedCallStackProfileFunction>(),
} as const satisfies ModalitySpec<
  CallStackProfile,
  AggregatedCallStackProfile,
  AggregatedCallStackProfileFunction,
  CallStackProfileMatch
>
