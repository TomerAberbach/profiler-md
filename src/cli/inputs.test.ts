import { open } from 'node:fs/promises'
import { expect, test, vi } from 'vitest'
import { injectedInputs, inputPath, smallestInput } from '../formats/testing.ts'
import { runCli } from './testing.ts'

// Each test spawns the CLI in a subprocess, which can outlast the default 5s.
vi.setConfig({ testTimeout: 125_000 })

const inputFilenames = injectedInputs()

const isGzipped = async (filename: string): Promise<boolean> => {
  const magic = Buffer.alloc(2)
  const file = await open(inputPath(filename), `r`)
  try {
    await file.read(magic, 0, 2, 0)
  } finally {
    await file.close()
  }
  return magic[0] === 0x1f && magic[1] === 0x8b
}

/**
 * The inputs the CLI converts: the smallest of each compression scheme the
 * project's inputs use. Reading a file and decompressing its bytes is
 * format-agnostic work the CLI does itself. Below that is the API, which the
 * format and origin suites already run over every committed input, so spawning
 * the CLI for each one would repeat gigabytes of conversion in a subprocess.
 */
const gzippedInputs = await Promise.all(inputFilenames.map(isGzipped))
const cliInputFilenames = [true, false].flatMap(gzipped =>
  smallestInput(
    inputFilenames.filter((_, index) => gzippedInputs[index] === gzipped),
  ),
)

// An input whose profiler recorded nothing (e.g. a lock profile with no
// contention) converts to the no-data message
const MARKDOWN_OR_NO_DATA = /^(?:# |No profiles were recorded\.)/u

test.concurrent.each(cliInputFilenames)(
  `outputs markdown from a %s file`,
  async filename => {
    const { status, stdout } = await runCli([inputPath(filename)])

    expect(status).toBe(0)
    expect(stdout).toMatch(MARKDOWN_OR_NO_DATA)
  },
)
