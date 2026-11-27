/**
 * Reports the changed lines that converting the committed inputs executes none
 * of, so a change no input exercises is seen before its outputs are trusted.
 *
 * Reports only the directories every conversion goes through the same way,
 * whether it runs from the CLI, synchronously, or from a stream. The report is
 * advisory: the lines for a malformed input are never executed, and a line is
 * executed once any of its code is. The example outputs must be up to date.
 *
 * Usage:
 * - `pnpm uncovered-lines` reports the working copy's commit
 * - `pnpm uncovered-lines <revision>` reports the changes since a revision
 */

import { execFileSync, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { parseAddedLines } from './added-lines.ts'
import type { AddedLine } from './added-lines.ts'
import { readCoverage, uncoveredLines } from './coverage.ts'
import type { ThreadsByPath } from './coverage.ts'

const main = (): void => {
  const [revision = usesJj ? `@-` : `HEAD~1`] = process.argv.slice(2)
  const addedLines = parseAddedLines(readDiff(revision)).filter(({ path }) =>
    COVERED_PATH_REGEX.test(path),
  )
  if (addedLines.length === 0) {
    console.log(`No changed lines to cover.`)
    return
  }

  const pathToUncovered = readUncoveredLines(addedLines)
  const uncovered = addedLines.filter(({ path, line }) =>
    pathToUncovered.get(path)!.has(line),
  )
  console.log(formatReport(uncovered, addedLines.length))
}

const readDiff = (revision: string): string => {
  const [command, args] = usesJj
    ? [`jj`, [`diff`, `--git`, `--context`, `0`, `--from`, revision, `src`]]
    : [
        `git`,
        [`diff`, `--unified=0`, `--default-prefix`, revision, `--`, `src`],
      ]
  return execFileSync(command, args, { encoding: `utf8`, maxBuffer: 2 ** 30 })
}

const readUncoveredLines = (
  addedLines: AddedLine[],
): Map<string, Set<number>> => {
  const pathToThreads = collectCoverage()
  const paths = new Set(addedLines.map(({ path }) => path))
  return new Map(
    [...paths].map(path => [
      path,
      uncoveredLines(readFileSync(path, `utf8`), pathToThreads.get(path) ?? []),
    ]),
  )
}

/** Converts every example in a process that records coverage. */
const collectCoverage = (): ThreadsByPath => {
  const directory = mkdtempSync(join(tmpdir(), `profiler-md-coverage-`))
  try {
    const { status, stderr } = spawnSync(
      process.execPath,
      [`scripts/update-examples/index.ts`, `--check`],
      {
        env: {
          ...process.env,
          NODE_V8_COVERAGE: directory,
          // V8 records no block coverage for a function it read from the cache.
          NODE_DISABLE_COMPILE_CACHE: `1`,
        },
        encoding: `utf8`,
        maxBuffer: 2 ** 30,
      },
    )
    if (status !== 0) {
      process.stderr.write(stderr)
      throw new Error(
        `failed to convert the examples to up-to-date outputs\n  hint: run pnpm update-examples`,
      )
    }
    return readCoverage(directory)
  } finally {
    rmSync(directory, { recursive: true })
  }
}

const formatReport = (uncovered: AddedLine[], total: number): string =>
  [
    `${uncovered.length} of ${total} changed lines executed by no committed input`,
    ...uncovered.map(
      ({ path, line, text }) => `${path}:${line} ${text.trim()}`,
    ),
  ].join(`\n`)

const COVERED_PATH_REGEX =
  /^src\/(?:formats\/[^/]+\/|origins\/|modalities\/).*(?<!\.test|\/testing)\.ts$/u

const usesJj = existsSync(`.jj`)

main()
