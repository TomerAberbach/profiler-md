import { formatProfileName } from '../format.ts'
import { functionEntities } from '../function/index.ts'
import type { ModalitySpec } from '../spec.ts'
import { CallGraphAggregator, callGraphMeasuresOf } from './aggregate.ts'
import type {
  AggregatedCallGraph,
  AggregatedCallGraphFunction,
} from './aggregate.ts'
import { diffAggregatedCallGraphs, matchCallGraphs } from './diff.ts'
import type { CallGraphMatch } from './diff.ts'
import { formatCallGraph, formatCallGraphDiff } from './format.ts'
import type { CallGraph } from './type.ts'

export const callGraphModalitySpec = {
  id: `call-graph`,
  aggregator: (graph, reader) => {
    reader.parsed(graph.functions.length)
    return new CallGraphAggregator(graph)
  },
  format: formatCallGraph,
  name: ({ input }) => formatProfileName(input.metrics),
  matchDiffed: (base, current) =>
    matchCallGraphs(
      callGraphMeasuresOf(base.input, base.context),
      callGraphMeasuresOf(current.input, current.context),
    ),
  formatDiff: (base, current, match, options) =>
    formatCallGraphDiff(
      diffAggregatedCallGraphs(base, current, match, options),
      options,
    ),
  ...functionEntities<AggregatedCallGraphFunction>(),
} as const satisfies ModalitySpec<
  CallGraph,
  AggregatedCallGraph,
  AggregatedCallGraphFunction,
  CallGraphMatch
>
