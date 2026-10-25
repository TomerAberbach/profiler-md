import { readdirSync, rmSync, statSync } from 'node:fs'
import { availableParallelism } from 'node:os'
import { join } from 'node:path'
import { Worker } from 'node:worker_threads'
import { exampleDiffPairs } from '../../src/cli/examples.ts'
import type { ExampleDiffPair } from '../../src/cli/examples.ts'
import type { ExampleResult, ExampleTask } from './worker.ts'

type Example = { name: string; inputs: string[] }

const check = process.argv.includes(`--check`)

// Conversion cost tracks input size, so the largest examples start first.
// Started last, one would run alone while the other workers sit idle,
// stretching the run past the point everything else finished.
const listExamplesLargestFirst = (
  inputFilenames: string[],
  examplePairs: ExampleDiffPair[],
): Example[] =>
  [
    ...inputFilenames.map(filename => ({ name: filename, inputs: [filename] })),
    ...examplePairs.map(({ name, ext, base, current }) => ({
      name: `${name}.diff.${ext}`,
      inputs: [base, current],
    })),
  ]
    .map(example => ({ ...example, bytes: totalInputBytes(example.inputs) }))
    .sort((example1, example2) => example2.bytes - example1.bytes)

const totalInputBytes = (filenames: string[]): number =>
  filenames.reduce(
    (bytes, filename) =>
      bytes + statSync(join(`examples/input`, filename)).size,
    0,
  )

/** Fails under `--check` instead of deleting, returning whether it failed. */
const deleteOutputsWithoutInput = (examples: Example[]): boolean => {
  const expectedFilenames = new Set(examples.map(({ name }) => `${name}.md`))
  for (const filename of readdirSync(`examples/output`)) {
    if (expectedFilenames.has(filename)) {
      continue
    }

    if (check) {
      process.stderr.write(
        `examples/output/${filename} has no corresponding input. Run \`pnpm update-examples\` to fix.\n`,
      )
      return true
    }

    rmSync(join(`examples/output`, filename))
  }
  return false
}

// Worker threads convert in-process, so the module graph loads once per thread
// instead of once per example.
const convertExamples = async (examples: Example[]): Promise<boolean> => {
  if (examples.length === 0) {
    return false
  }

  const workers = Array.from(
    { length: Math.min(availableParallelism(), examples.length) },
    () =>
      new Worker(new URL(`worker.ts`, import.meta.url), {
        workerData: { check },
      }),
  )

  const failed = await convertOnWorkers(workers, examples)

  await Promise.all(workers.map(worker => worker.terminate()))
  return failed
}

/** Stops at the first failed example, resolving to whether one failed. */
const convertOnWorkers = (
  workers: Worker[],
  examples: Example[],
): Promise<boolean> => {
  let nextIndex = 0
  let done = 0
  let failed = false
  return new Promise<boolean>((resolve, reject) => {
    for (const worker of workers) {
      const sendNext = (): void => {
        if (nextIndex >= examples.length) {
          if (done === examples.length) {
            resolve(false)
          }
          return
        }

        const { name, inputs } = examples[nextIndex]!
        nextIndex++
        const task: ExampleTask = {
          exampleName: name,
          inputPaths: inputs.map(filename => join(`examples/input`, filename)),
        }
        worker.postMessage(task)
      }

      worker.on(`message`, (result: ExampleResult) => {
        if (failed) {
          return
        }

        done++
        reportConverted(result, done, examples.length)
        if (result.failure === undefined) {
          sendNext()
          return
        }

        process.stderr.write(
          `${result.exampleName} failed:\n${result.failure}\n`,
        )
        failed = true
        resolve(true)
      })
      worker.on(`error`, reject)
      sendNext()
    }
  })
}

const reportConverted = (
  { exampleName, elapsed }: ExampleResult,
  done: number,
  total: number,
): void => {
  process.stderr.write(
    `[${done}/${total}] ${exampleName} ${elapsed.toFixed(0)}ms\n`,
  )
}

const inputFilenames = readdirSync(`examples/input`)
const examples = listExamplesLargestFirst(
  inputFilenames,
  exampleDiffPairs(inputFilenames),
)
if (deleteOutputsWithoutInput(examples) || (await convertExamples(examples))) {
  process.exitCode = 1
}
