import { functionEntities } from '../function-entities.ts'
import type { ModalitySpec } from '../spec.ts'
import { CallGraphAggregator } from './aggregate.ts'
import type {
  AggregatedCallGraph,
  AggregatedCallGraphFunction,
} from './aggregate.ts'
import { diffAggregatedCallGraphs } from './diff.ts'
import { formatCallGraph, formatCallGraphDiff } from './format.ts'
import type { CallGraph } from './type.ts'

export const callGraphModalitySpec = {
  id: `call-graph`,
  aggregator: (graph, reader) => {
    reader.parsed(graph.functions.length)
    return new CallGraphAggregator(graph)
  },
  format: formatCallGraph,
  formatDiff: (base, current, options) =>
    formatCallGraphDiff(
      diffAggregatedCallGraphs(base, current, options),
      options,
    ),
  ...functionEntities<AggregatedCallGraphFunction>(),
} as const satisfies ModalitySpec<
  CallGraph,
  AggregatedCallGraph,
  AggregatedCallGraphFunction
>
