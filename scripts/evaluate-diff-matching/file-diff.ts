import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { CACHE_DIRECTORY } from './cache.ts'
import type { Position } from './position.ts'

/**
 * A diff's hunk: base start, base count, current start, current count, in lines
 * or in characters.
 */
type Hunk = [number, number, number, number]

/**
 * A file's line diff, or a minified file's character diff with each version's
 * line lengths, including their line breaks.
 */
export type FileDiff =
  | Hunk[]
  | {
      characterHunks: Hunk[]
      baseLineLengths: number[]
      currentLineLengths: number[]
    }

export const diffFile = (
  base: string,
  current: string,
  minified: boolean | undefined,
): FileDiff =>
  minified
    ? {
        characterHunks: diffHunks(
          characterLines(base),
          characterLines(current),
        ),
        baseLineLengths: lineLengths(base),
        currentLineLengths: lineLengths(current),
      }
    : diffHunks(base, current)

const diffHunks = (base: string, current: string): Hunk[] => {
  const hunks: Hunk[] = []
  for (const line of gitDiff(base, current).split(`\n`)) {
    if (!line.startsWith(`@@ -`)) {
      continue
    }
    // `@@ -3,2 +3 @@`, where an omitted count is 1.
    const [, baseRange, currentRange] = line.split(` `)
    const [baseStart, baseCount = `1`] = baseRange!.slice(1).split(`,`)
    const [currentStart, currentCount = `1`] = currentRange!.slice(1).split(`,`)
    hunks.push([
      Number(baseStart),
      Number(baseCount),
      Number(currentStart),
      Number(currentCount),
    ])
  }
  return hunks
}

const gitDiff = (base: string, current: string): string => {
  const directory = join(CACHE_DIRECTORY, `diff`)
  mkdirSync(directory, { recursive: true })
  writeFileSync(join(directory, `base`), base)
  writeFileSync(join(directory, `current`), current)

  try {
    return execFileSync(
      `git`,
      [
        `diff`,
        `--no-index`,
        `--no-ext-diff`,
        `--diff-algorithm=myers`,
        `--indent-heuristic`,
        `--inter-hunk-context=0`,
        `--no-color`,
        `--unified=0`,
        `base`,
        `current`,
      ],
      {
        cwd: directory,
        encoding: `utf8`,
        maxBuffer: 1 << 30,
        // The flags above pin what a repository's config could still change.
        env: {
          ...process.env,
          GIT_CONFIG_GLOBAL: `/dev/null`,
          GIT_CONFIG_NOSYSTEM: `1`,
        },
      },
    )
  } catch (error: unknown) {
    // Git exits 1 when the files differ.
    const { status, stdout } = error as { status?: number; stdout?: string }
    if (status !== 1 || stdout === undefined) {
      throw error
    }
    return stdout
  }
}

/**
 * The text with each UTF-16 code unit on its own line, so a line diff of it is
 * a diff in the units JavaScript engines count columns in. A line break becomes
 * `\\n`, keeping one line per unit.
 */
const characterLines = (text: string): string => {
  const units = new Array<string>(text.length)
  for (let index = 0; index < text.length; index++) {
    const unit = text.charAt(index)
    units[index] = unit === `\n` ? `\\n` : unit
  }
  return `${units.join(`\n`)}\n`
}

/** Each line's length in UTF-16 code units, including its line break. */
const lineLengths = (text: string): number[] =>
  text.split(`\n`).map(line => line.length + 1)

/**
 * Maps a base position through a file's diff, or returns `undefined` for a
 * position the diff changed.
 */
export const mapPosition = (
  diff: FileDiff,
  { line, column }: Position,
): Position | undefined => {
  if (Array.isArray(diff)) {
    const mapped = mapLine(diff, line)
    return mapped === undefined ? undefined : { line: mapped, column }
  }
  return column === undefined
    ? undefined
    : mapCharacterPosition(diff, line, column)
}

const mapCharacterPosition = (
  diff: Exclude<FileDiff, Hunk[]>,
  line: number,
  column: number,
): Position | undefined => {
  const baseLineStarts = prefixSums(diff.baseLineLengths)
  const offset = mapLine(
    diff.characterHunks,
    baseLineStarts[Math.min(line - 1, diff.baseLineLengths.length)]! + column,
  )
  if (offset === undefined) {
    return undefined
  }
  const currentLineStarts = prefixSums(diff.currentLineLengths)
  const index = countLeading(
    diff.currentLineLengths.length,
    index => currentLineStarts[index + 1]! < offset,
  )
  return index === diff.currentLineLengths.length
    ? undefined
    : { line: index + 1, column: offset - currentLineStarts[index]! }
}

/**
 * Maps a base line, or a character offset of a character diff, through a
 * diff's hunks, or returns `undefined` for one the diff changed.
 */
const mapLine = (hunks: readonly Hunk[], line: number): number | undefined => {
  // A hunk that only inserts lines starts after the line it follows.
  const before = countLeading(hunks.length, index => {
    const [baseStart, baseCount] = hunks[index]!
    return baseCount === 0 ? baseStart < line : baseStart + baseCount <= line
  })
  const next = hunks[before]
  if (next && next[1] > 0 && line >= next[0] && line < next[0] + next[1]) {
    return undefined
  }
  return line + hunkOffsets(hunks)[before]!
}

/** The number of leading indices below `length` for which `test` holds. */
const countLeading = (
  length: number,
  test: (index: number) => boolean,
): number => {
  let low = 0
  let high = length
  while (low < high) {
    const middle = (low + high) >>> 1
    if (test(middle)) {
      low = middle + 1
    } else {
      high = middle
    }
  }
  return low
}

const prefixSumsCache = new WeakMap<readonly number[], number[]>()

/** Each index's sum of the values before it, and the sum of all at the end. */
const prefixSums = (values: readonly number[]): number[] => {
  let sums = prefixSumsCache.get(values)
  if (!sums) {
    sums = new Array<number>(values.length + 1)
    sums[0] = 0
    for (const [index, value] of values.entries()) {
      sums[index + 1] = sums[index]! + value
    }
    prefixSumsCache.set(values, sums)
  }
  return sums
}

const hunkOffsetsCache = new WeakMap<readonly Hunk[], number[]>()

/** The net lines or characters the hunks before each index add. */
const hunkOffsets = (hunks: readonly Hunk[]): number[] => {
  let offsets = hunkOffsetsCache.get(hunks)
  if (!offsets) {
    offsets = prefixSums(
      hunks.map(([, baseCount, , currentCount]) => currentCount - baseCount),
    )
    hunkOffsetsCache.set(hunks, offsets)
  }
  return offsets
}
