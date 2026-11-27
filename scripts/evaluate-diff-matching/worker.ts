// Present since Node 22.1, though experimental before 24.15.
// eslint-disable-next-line node/no-unsupported-features/node-builtins
import { enableCompileCache } from 'node:module'
import { parentPort, workerData } from 'node:worker_threads'
import type { ExampleDiffPair } from '../../src/formats/examples.ts'
import { compileCachePath } from '../helpers/compile-cache.ts'
import type { EditOptions } from './pair.ts'

// The dynamic imports below run after the cache is enabled, so the modules they
// load use it.
enableCompileCache(compileCachePath)

const { resolveProfileToMdOptions } = await import(`../../src/options.ts`)
const { readGroundTruth } = await import(`./ground-truth.ts`)
const { evaluatePair } = await import(`./pair.ts`)

const editOptions = workerData as EditOptions
const options = resolveProfileToMdOptions({ baseURL: null })
const groundTruth = readGroundTruth()

parentPort!.on(`message`, (pair: ExampleDiffPair) => {
  parentPort!.postMessage(evaluatePair(pair, editOptions, groundTruth, options))
})
