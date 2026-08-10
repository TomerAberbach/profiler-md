import { readFileSync, writeFileSync } from 'node:fs'
import { enableCompileCache } from 'node:module'
import { join } from 'node:path'
import { parentPort, workerData } from 'node:worker_threads'
import { brotliDecompressSync, gunzipSync } from 'node:zlib'
import type { ProfileToMdOptions } from '../src/options.ts'

// Reuse compiled bytecode across the worker threads and runs, roughly halving
// each thread's module loading. The dynamic import below runs after the cache
// is enabled, so the conversion modules use it.
enableCompileCache(join(`node_modules`, `.cache`, `node-compile-cache`))

const { profileToMd, diffProfiles } = await import(`../src/index.ts`)

/** One example to convert, sent by the pool. */
export type ExampleTask = {
  exampleName: string
  inputPaths: string[]
}

/** A converted example's outcome, posted back to the pool. */
export type ExampleResult = {
  exampleName: string
  elapsed: number
  /** The message to fail the run with, when `--check` found a problem. */
  failure?: string
}

const { check } = workerData as { check: boolean }

const options: ProfileToMdOptions = { baseURL: `auto` }

// The CLI's decompression rule (`src/cli/input.ts`): brotli by file suffix,
// gzip by magic bytes. Reading and decompressing synchronously keeps the work
// on this thread instead of the process-wide libuv pool the threads would
// contend on.
const readInput = (inputPath: string): Uint8Array => {
  const bytes = readFileSync(inputPath)
  if (inputPath.endsWith(`.br`)) {
    return brotliDecompressSync(bytes)
  }
  if (bytes[0] === 0x1f && bytes[1] === 0x8b) {
    return gunzipSync(bytes)
  }
  return bytes
}

const convertInputs = (inputPaths: string[]): string => {
  const inputs = inputPaths.map(readInput)
  return inputs.length === 1
    ? profileToMd(inputs[0]!, options)
    : diffProfiles(inputs[0]!, inputs[1]!, options)
}

/** Returns the message to fail the run with, or `undefined` when up to date. */
const checkExample = (
  examplePath: string,
  markdown: string,
): string | undefined => {
  let existing
  try {
    existing = readFileSync(examplePath, `utf8`)
  } catch {
    return `${examplePath} does not exist. Run \`pnpm update-examples\` to fix.`
  }

  if (existing !== markdown) {
    return `${examplePath} is out of date. Run \`pnpm update-examples\` to fix.`
  }
  return undefined
}

const updateExample = ({ exampleName, inputPaths }: ExampleTask): void => {
  const examplePath = join(`examples/output`, `${exampleName}.md`)

  const start = performance.now()
  const markdown = convertInputs(inputPaths)
  const elapsed = performance.now() - start

  let failure
  if (check) {
    failure = checkExample(examplePath, markdown)
  } else {
    writeFileSync(examplePath, markdown)
  }

  const result: ExampleResult = { exampleName, elapsed, failure }
  parentPort!.postMessage(result)
}

parentPort!.on(`message`, updateExample)
