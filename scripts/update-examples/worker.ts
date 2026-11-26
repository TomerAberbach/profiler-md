import { readFileSync, writeFileSync } from 'node:fs'
// Present since Node 22.1, though experimental before 24.15.
// eslint-disable-next-line node/no-unsupported-features/node-builtins
import { enableCompileCache } from 'node:module'
import { join } from 'node:path'
import { parentPort, workerData } from 'node:worker_threads'
import type { ProfileToMdOptions } from '../../src/options.ts'
import { compileCachePath } from '../helpers/compile-cache.ts'
import { formatLineDiff } from '../helpers/line-diff.ts'
import { describeReconversion } from './reconversion.ts'

// Reuse compiled bytecode across the worker threads and runs, roughly halving
// each thread's module loading. The dynamic import below runs after the cache
// is enabled, so the conversion modules use it.
enableCompileCache(compileCachePath)

const { profileToMd, diffProfiles } = await import(`../../src/index.ts`)

const options: ProfileToMdOptions = { baseURL: `auto` }

const { check } = workerData as { check: boolean }

export type ExampleTask = {
  exampleName: string
  inputPaths: string[]
}

export type ExampleResult = {
  exampleName: string
  elapsed: number
  /** The message to fail the run with, when `--check` found a problem. */
  failure?: string

  /** The converted Markdown, when `--check` found it out of date. */
  markdown?: string
}

/** The examples this worker converted, in order. */
const convertedExamples: string[] = []

const updateExample = ({ exampleName, inputPaths }: ExampleTask): void => {
  const examplePath = join(`examples/output`, `${exampleName}.md`)

  const start = performance.now()
  const markdown = convertInputs(inputPaths)
  const elapsed = performance.now() - start

  let checked
  if (check) {
    checked = checkExample(examplePath, inputPaths, markdown)
  } else {
    writeFileSync(examplePath, markdown)
  }
  convertedExamples.push(exampleName)

  const result: ExampleResult = { exampleName, elapsed, ...checked }
  parentPort!.postMessage(result)
}

const convertInputs = (inputPaths: string[]): string => {
  const inputs = inputPaths.map(path => readFileSync(path))
  return inputs.length === 1
    ? profileToMd(inputs[0]!, options)
    : diffProfiles(inputs[0]!, inputs[1]!, options)
}

/**
 * Returns the message to fail the run with, and the Markdown when it is out of
 * date. Returns no failure when up to date.
 *
 * An out-of-date example converts again on this worker, and the message lists
 * the examples the worker converted before it, so a failure that depends on
 * the worker's history reads differently from one the inputs determine.
 */
const checkExample = (
  examplePath: string,
  inputPaths: string[],
  markdown: string,
): Pick<ExampleResult, `failure` | `markdown`> => {
  let existing
  try {
    existing = readFileSync(examplePath, `utf8`)
  } catch {
    return {
      failure: `${examplePath} does not exist. Run \`pnpm update-examples\` to fix.`,
    }
  }

  if (existing === markdown) {
    return {}
  }

  const again = describeReconversion({
    again: convertInputs(inputPaths),
    first: markdown,
    committed: existing,
  })
  const failure = [
    `${examplePath} is out of date. Run \`pnpm update-examples\` to fix.`,
    formatLineDiff(existing, markdown),
    `converted again on the same worker: ${again}`,
    `converted earlier on the same worker: ${convertedExamples.join(`, `) || `none`}`,
  ].join(`\n`)
  return { failure, markdown }
}

parentPort!.on(`message`, updateExample)
