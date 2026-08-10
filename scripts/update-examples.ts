import { readdirSync, rmSync, statSync } from 'node:fs'
import { availableParallelism } from 'node:os'
import { join } from 'node:path'
import { Worker } from 'node:worker_threads'
import type { ExampleResult, ExampleTask } from './update-examples-worker.ts'

const check = process.argv.includes(`--check`)

/** An input pair diffed into a single example. */
type DiffPair = { name: string; ext: string; base: string; current: string }

/** One example to convert: an output name and the inputs converted into it. */
type Example = { name: string; inputs: string[] }

// Inputs named `<name>.base.<ext>` and `<name>.current.<ext>` are also diffed
// as a pair into `examples/output/<name>.diff.<ext>.md`. Keyed by `<name>.<ext>`
// since a single `<name>` can have several extensions (e.g. `javascript.node` has
// `.cpuprofile`, `.heapprofile`, and `.heapsnapshot`).
const findDiffPairs = (inputFilenames: string[]): DiffPair[] => {
  const pairs = new Map<
    string,
    { name: string; ext: string; base?: string; current?: string }
  >()
  for (const filename of inputFilenames) {
    // `ext` allows dots so multi-segment extensions like `.speedscope.json` pair
    // up (e.g. `ruby.base.speedscope.json` / `ruby.current.speedscope.json`).
    const match = /^(?<name>.+)\.(?<role>base|current)\.(?<ext>.+)$/u.exec(
      filename,
    )
    if (!match) {
      continue
    }

    const { name, role, ext } = match.groups!
    const key = `${name}.${ext}`
    let pair = pairs.get(key)
    if (!pair) {
      pair = { name: name!, ext: ext! }
      pairs.set(key, pair)
    }
    pair[role as `base` | `current`] = filename
  }

  return [...pairs.values()].map(({ name, ext, base, current }) => {
    if (!base || !current) {
      process.stderr.write(
        `examples/input/${base ?? current} is missing its ${
          base ? `current` : `base`
        } counterpart for the "${name}" diff pair.\n`,
      )
      process.exit(1)
    }
    return { name, ext, base, current }
  })
}

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
  pairs: DiffPair[],
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

/** Deletes the outputs that no longer have an input, or fails under `--check`. */
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

// Each worker takes the next example as it finishes the one it has.
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

// A pool of worker threads, each converting one example at a time in-process,
// so the module graph loads once per thread instead of once per example.
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
  findDiffPairs(inputFilenames),
)
deleteOutputsWithoutInput(examples)
await convertExamples(examples)
