import { readdirSync, readFileSync } from 'node:fs'
// Experimental, though present since Node 22.13.
// eslint-disable-next-line node/no-unsupported-features/node-builtins
import { stripTypeScriptTypes } from 'node:module'
import { join, relative } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

export type CoverageRange = {
  startOffset: number
  endOffset: number
  count: number
}

/** The ranges each thread recorded, by the path of the file they are in. */
export type ThreadsByPath = Map<string, CoverageRange[][]>

/** Reads the files `NODE_V8_COVERAGE` writes, one per thread. */
export const readCoverage = (directory: string): ThreadsByPath => {
  const root = pathToFileURL(`${process.cwd()}/src/`).href
  const pathToThreads: ThreadsByPath = new Map()
  for (const filename of readdirSync(directory)) {
    const { result } = JSON.parse(
      readFileSync(join(directory, filename), `utf8`),
    ) as {
      result: { url: string; functions: { ranges: CoverageRange[] }[] }[]
    }
    for (const { url, functions } of result) {
      if (!url.startsWith(root)) {
        continue
      }
      const path = relative(process.cwd(), fileURLToPath(url))
      const threads = pathToThreads.get(path) ?? []
      pathToThreads.set(path, threads)
      threads.push(functions.flatMap(({ ranges }) => ranges))
    }
  }
  return pathToThreads
}

/**
 * The numbers of the lines whose code no thread executed. A line of only types
 * has no code.
 */
export const uncoveredLines = (
  typescript: string,
  threads: CoverageRange[][],
): Set<number> => {
  // Strips types to whitespace, so offsets stay the same.
  const source = stripTypeScriptTypes(typescript)
  const executed = executedByAnyThread(source.length, threads)
  const lines = new Set<number>()
  let offset = 0
  for (const [index, text] of source.split(`\n`).entries()) {
    const start = offset + text.length - text.trimStart().length
    const end = offset + text.trimEnd().length
    if (
      !NO_CODE_REGEX.test(text) &&
      executed.subarray(start, end).every(value => value === 0)
    ) {
      lines.add(index + 1)
    }
    offset += text.length + 1
  }
  return lines
}

const executedByAnyThread = (
  length: number,
  threads: CoverageRange[][],
): Uint8Array => {
  const executed = new Uint8Array(length)
  for (const ranges of threads) {
    for (const [offset, value] of executedOffsets(length, ranges).entries()) {
      executed[offset]! |= value
    }
  }
  return executed
}

// A nested range overrides the range around it.
const executedOffsets = (
  length: number,
  ranges: CoverageRange[],
): Uint8Array => {
  const executed = new Uint8Array(length)
  const outermostFirst = ranges.toSorted(
    (range1, range2) =>
      range1.startOffset - range2.startOffset ||
      range2.endOffset - range1.endOffset,
  )
  for (const { startOffset, endOffset, count } of outermostFirst) {
    executed.fill(count > 0 ? 1 : 0, startOffset, endOffset)
  }
  return executed
}

/** Matches a line of only whitespace, a comment, or closing punctuation. */
const NO_CODE_REGEX =
  /^\s*(?:$|\/\/|\/\*(?!.*\*\/.*\S)|\*(?:\s|\/|$)|[)\]},;]+\s*$)/u
