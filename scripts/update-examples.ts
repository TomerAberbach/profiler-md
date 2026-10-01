import { readdirSync, rmSync, statSync } from 'node:fs'
import { availableParallelism } from 'node:os'
import { join } from 'node:path'
import { Worker } from 'node:worker_threads'
import { exampleDiffPairs } from '../src/cli/examples.ts'
import type { ExampleDiffPair } from '../src/cli/examples.ts'
import type { ExampleResult, ExampleTask } from './update-examples-worker.ts'

const check = process.argv.includes(`--check`)

type Example = { name: string; inputs: string[] }

const totalInputBytes = (filenames: string[]): number =>
  filenames.reduce(
    (bytes, filename) =>
      bytes + statSync(join(`examples/input`, filename)).size,
    0,
  )

// Conversion cost tracks input size, so the largest examples start first.
// Started last, one would run alone while the other workers sit idle,
// stretching the run past the point everything else finished.
const listExamplesLargestFirst = (
  inputFilenames: string[],
  pairs: ExampleDiffPair[],
): Example[] =>
  [
    ...inputFilenames.map(filename => ({ name: filename, inputs: [filename] })),
    ...pairs.map(({ name, ext, base, current }) => ({
      name: `${name}.diff.${ext}`,
      inputs: [base, current],
    })),
  ]
    .map(example => ({ ...example, bytes: totalInputBytes(example.inputs) }))
    .sort((example1, example2) => example2.bytes - example1.bytes)

/** Fails under `--check` instead of deleting. */
const deleteOutputsWithoutInput = (examples: Example[]): void => {
  const expectedFilenames = new Set(examples.map(({ name }) => `${name}.md`))
  for (const filename of readdirSync(`examples/output`)) {
    if (expectedFilenames.has(filename)) {
      continue
    }

    if (check) {
      process.stderr.write(
        `examples/output/${filename} has no corresponding input. Run \`pnpm update-examples\` to fix.\n`,
      )
      process.exit(1)
    } else {
      rmSync(join(`examples/output`, filename))
    }
  }
}

const reportConverted = (
  { exampleName, elapsed, failure }: ExampleResult,
  done: number,
  total: number,
): void => {
  process.stderr.write(
    `[${done}/${total}] ${exampleName} ${elapsed.toFixed(0)}ms\n`,
  )
  if (failure !== undefined) {
    process.stderr.write(`${failure}\n`)
    process.exit(1)
  }
}

const convertOnWorkers = (
  workers: Worker[],
  examples: Example[],
): Promise<void> => {
  let nextIndex = 0
  let done = 0
  return new Promise<void>((resolve, reject) => {
    for (const worker of workers) {
      const sendNext = (): void => {
        if (nextIndex >= examples.length) {
          if (done === examples.length) {
            resolve()
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
        done++
        reportConverted(result, done, examples.length)
        sendNext()
      })
      worker.on(`error`, reject)
      sendNext()
    }
  })
}

// Worker threads convert in-process, so the module graph loads once per thread
// instead of once per example.
const convertExamples = async (examples: Example[]): Promise<void> => {
  if (examples.length === 0) {
    return
  }

  const workers = Array.from(
    { length: Math.min(availableParallelism(), examples.length) },
    () =>
      new Worker(new URL(`update-examples-worker.ts`, import.meta.url), {
        workerData: { check },
      }),
  )

  await convertOnWorkers(workers, examples)

  await Promise.all(workers.map(worker => worker.terminate()))
}

const inputFilenames = readdirSync(`examples/input`)
const examples = listExamplesLargestFirst(
  inputFilenames,
  exampleDiffPairs(inputFilenames),
)
deleteOutputsWithoutInput(examples)
await convertExamples(examples)
