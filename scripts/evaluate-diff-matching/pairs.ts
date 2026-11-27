import { Worker } from 'node:worker_threads'
import type { ExampleDiffPair } from '../../src/formats/examples.ts'
import { totalInputBytes } from '../helpers/example-inputs.ts'
import { runOnWorkers } from '../helpers/worker-pool.ts'
import type { EditOptions, PairEvaluation } from './pair.ts'

/**
 * Evaluates each pair on a worker, starting the largest first so none runs
 * alone at the end. Returns the evaluations in the order of the pairs.
 */
export const evaluatePairs = async (
  pairs: ExampleDiffPair[],
  editOptions: EditOptions,
): Promise<[ExampleDiffPair, PairEvaluation][]> => {
  const evaluations = new Map<ExampleDiffPair, PairEvaluation>()
  const largestFirst = pairs
    .map(pair => ({ pair, bytes: totalInputBytes([pair.base, pair.current]) }))
    .sort((first, second) => second.bytes - first.bytes)
    .map(({ pair }) => pair)
  await runOnWorkers<ExampleDiffPair, PairEvaluation>({
    createWorker: () =>
      new Worker(new URL(`worker.ts`, import.meta.url), {
        workerData: editOptions,
      }),
    maxWorkers: MAX_WORKERS,
    tasks: largestFirst,
    onResult: (evaluation, pair) => {
      evaluations.set(pair, evaluation)
      return true
    },
  })
  return pairs.map(pair => [pair, evaluations.get(pair)!])
}

// Six and ten workers took as long.
const MAX_WORKERS = 4
