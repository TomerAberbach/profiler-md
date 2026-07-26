import { readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { configDefaults, defineConfig } from 'vitest/config'
import { parseExampleFilename } from './src/cli/examples.ts'
import { formats } from './src/formats/registry.ts'
import type { Format } from './src/formats/registry.ts'

// For tests that run over all inputs, each project takes a partition of them so
// the conversions spread across workers instead of running one at a time.
const inputProcessingFiles = [
  `src/formats/index.test.ts`,
  `src/origins/index.test.ts`,
]

/**
 * The input bytes one project should process. A format holding more splits
 * across several projects, so its inputs never run one at a time in a single
 * worker however large they grow.
 */
const PROJECT_INPUT_BYTES = 64 * 1024 * 1024

const inputDirectory = path.join(import.meta.dirname, `examples/input`)

/**
 * The inputs of one example across its variants, which stay in one project:
 * tests that take only the `base` variant would otherwise land in a project
 * holding just its `current`.
 */
type VariantGroup = { filenames: string[]; bytes: number }

/** Groups every committed input by its format and then by its example. */
const readVariantGroupsByFormat = (): Map<Format, VariantGroup[]> => {
  const groupsByFormat = new Map<Format, Map<string, VariantGroup>>()
  for (const filename of readdirSync(inputDirectory)) {
    const { format, language, origin, config } = parseExampleFilename(filename)
    const groups = groupsByFormat.get(format) ?? new Map<string, VariantGroup>()
    const key = [language, origin, config].join(`.`)
    const group = groups.get(key) ?? { filenames: [], bytes: 0 }
    group.filenames.push(filename)
    group.bytes += statSync(path.join(inputDirectory, filename)).size
    groups.set(key, group)
    groupsByFormat.set(format, groups)
  }

  return new Map(
    [...groupsByFormat].map(([format, groups]) => [
      format,
      [...groups.values()],
    ]),
  )
}

const variantGroupsByFormat = readVariantGroupsByFormat()

/**
 * Splits variant groups into byte-balanced partitions, assigning the largest
 * group first to the smallest partition so a late huge group can't unbalance
 * the totals. Conversion cost tracks input size closely enough within a format
 * to balance on bytes. A group never splits, so a format yields at most one
 * partition per group.
 */
const partitionVariantGroups = (variantGroups: VariantGroup[]): string[][] => {
  const totalBytes = variantGroups.reduce((sum, { bytes }) => sum + bytes, 0)
  const partitionCount = Math.min(
    Math.max(Math.ceil(totalBytes / PROJECT_INPUT_BYTES), 1),
    Math.max(variantGroups.length, 1),
  )

  const partitions = Array.from({ length: partitionCount }, () => ({
    bytes: 0,
    filenames: [] as string[],
  }))
  for (const { filenames, bytes } of [...variantGroups].sort(
    (group1, group2) => group2.bytes - group1.bytes,
  )) {
    const smallest = partitions.reduce((smallest, partition) =>
      partition.bytes < smallest.bytes ? partition : smallest,
    )
    smallest.bytes += bytes
    smallest.filenames.push(...filenames)
  }

  return partitions.map(({ filenames }) => filenames)
}

/**
 * The projects processing one format's inputs, numbered when the format needs
 * more than one.
 */
const formatProjects = (format: Format) => {
  const partitions = partitionVariantGroups(
    variantGroupsByFormat.get(format) ?? [],
  )
  return partitions.map((inputs, index) => ({
    extends: true as const,
    test: {
      name: partitions.length > 1 ? `${format}-${index + 1}` : format,
      include: inputProcessingFiles,
      provide: { format, inputs },
    },
  }))
}

/**
 * The `unit` project runs every input-independent test, since it's the only one
 * without an `include` filter.
 */
export const projects = [
  {
    extends: true as const,
    test: { name: `unit`, provide: { inputs: [] as string[] } },
  },
  ...formats.flatMap(format => formatProjects(format)),
]

export default defineConfig({
  test: {
    environment: `jsdom`,
    exclude: [...configDefaults.exclude, `.claude/worktrees/**`],
    projects,
    coverage: {
      include: [`src`],
      exclude: [`**/testing.ts`, `*.bench.ts`],
    },
  },
})
