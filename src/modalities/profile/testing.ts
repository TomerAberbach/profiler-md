import type { Metric } from '../../metric.ts'
import type { ProfileToMdContext } from '../../options.ts'
import { resolveProfileToMdOptions } from '../../testing/options.ts'
import { ProfileAggregator } from './aggregate.ts'
import type { AggregatedProfile } from './aggregate.ts'

export const makeAggregatedProfile = (
  metrics: Metric[],
  functions: {
    name: string
    url?: string
    line?: number
    selfValues: number[]
    selfSampleCount: number
    /** Leaf-to-caller frame indices of each sample; defaults to the function alone. */
    stack?: number[]
  }[],
  // The forced origin is immaterial for entries with no origin-specific
  // signal; tests exercising origin-aware match normalization pass the
  // relevant context.
  context?: ProfileToMdContext,
): AggregatedProfile => {
  const options = resolveProfileToMdOptions({ baseURL: `/project` })
  const frames = functions.map(func => ({
    name: func.name,
    location: func.url ? { urlOrPath: func.url, line: func.line } : undefined,
  }))
  const samples = functions.flatMap((func, index) =>
    Array.from({ length: func.selfSampleCount }, () => ({
      values: func.selfValues.map(value => value / func.selfSampleCount),
      frameIndices: func.stack ?? [index],
    })),
  )

  return new ProfileAggregator({
    type: `profile`,
    frames,
    metrics,
    samples,
  }).aggregate(
    options,
    context ?? { format: `v8-cpu-profile`, origin: `unknown` },
  )
}
