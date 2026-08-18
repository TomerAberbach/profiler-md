import { readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { configDefaults, defineConfig } from 'vitest/config'
import { parseExampleFilename } from './src/cli/examples.ts'
import { formats } from './src/formats/registry.ts'
import type { Format } from './src/formats/registry.ts'

// For tests that run over all inputs, each project takes a partition of them so
// the conversions spread across workers instead of running one at a time.
const inputProcessingFiles = [
  `src/cli/index.test.ts`,
  `src/formats/index.test.ts`,
  `src/origins/index.test.ts`,
]

/**
 * The input bytes one project should process. A format holding more splits
 * across several projects, so its inputs never run one at a time in a single
 * worker however large they grow.
 *
 * Every project transforms and imports the module graph again. This budget
 * yields roughly one partition per core, and more partitions would pay that
 * fixed cost again without running more tests at once.
 */
const PROJECT_INPUT_BYTES = 512 * 1024 * 1024

const inputDirectory = path.join(import.meta.dirname, `examples/input`)

type InputFile = { filename: string; bytes: number }

/**
 * The inputs of one example across its variants. Variants stay in one project
 * while the example fits the project budget, so the `base`-only suites run
 * beside the per-input ones. An oversized example splits per variant, because
 * its suites would otherwise run one at a time in a single worker.
 */
type VariantGroup = { files: InputFile[]; bytes: number }

/** Groups every committed input by its format and then by its example. */
const readVariantGroupsByFormat = (): Map<Format, VariantGroup[]> => {
  const groupsByFormat = new Map<Format, Map<string, VariantGroup>>()
  for (const filename of readdirSync(inputDirectory)) {
    const { format, language, origin, config } = parseExampleFilename(filename)
    const groups = groupsByFormat.get(format) ?? new Map<string, VariantGroup>()
    const key = [language, origin, config].join(`.`)
    const group = groups.get(key) ?? { files: [], bytes: 0 }
    const bytes = statSync(path.join(inputDirectory, filename)).size
    group.files.push({ filename, bytes })
    group.bytes += bytes
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
 * to balance on bytes. A group splits only when it alone exceeds the project
 * budget, so a format yields at most one partition per input file.
 */
const partitionVariantGroups = (
  variantGroups: VariantGroup[],
): { inputs: string[]; bytes: number }[] => {
  const groups = variantGroups.flatMap(group =>
    group.bytes > PROJECT_INPUT_BYTES && group.files.length > 1
      ? group.files.map(file => ({ files: [file], bytes: file.bytes }))
      : [group],
  )

  const totalBytes = groups.reduce((sum, { bytes }) => sum + bytes, 0)
  const partitionCount = Math.min(
    Math.max(Math.ceil(totalBytes / PROJECT_INPUT_BYTES), 1),
    Math.max(groups.length, 1),
  )

  const partitions = Array.from({ length: partitionCount }, () => ({
    bytes: 0,
    filenames: [] as string[],
  }))
  for (const { files, bytes } of [...groups].sort(
    (group1, group2) => group2.bytes - group1.bytes,
  )) {
    const smallest = partitions.reduce((smallest, partition) =>
      partition.bytes < smallest.bytes ? partition : smallest,
    )
    smallest.bytes += bytes
    smallest.filenames.push(...files.map(({ filename }) => filename))
  }

  return partitions
    .map(({ filenames, bytes }) => ({ inputs: filenames, bytes }))
    .filter(({ inputs }) => inputs.length > 0)
}

/**
 * The projects processing one format's inputs, numbered when the format needs
 * more than one.
 */
const formatProjects = (format: Format) => {
  const partitions = partitionVariantGroups(
    variantGroupsByFormat.get(format) ?? [],
  )
  return partitions.map(({ inputs, bytes }, index) => ({
    bytes,
    project: {
      extends: true as const,
      test: {
        name: partitions.length > 1 ? `${format}-${index + 1}` : format,
        include: inputProcessingFiles,
        provide: { format, inputs },
        // A partition holding only `current` variants registers no tests in
        // `src/formats/index.test.ts`, whose suites take each example's `base`.
        passWithNoTests: true,
      },
    },
  }))
}

/**
 * The `unit` project runs every input-independent test, since it's the only one
 * without an `include` filter. Input projects follow largest first, so the
 * longest-running partitions start while workers are free.
 */
export const projects = [
  {
    extends: true as const,
    test: { name: `unit`, provide: { inputs: [] as string[] } },
  },
  ...formats
    .flatMap(format => formatProjects(format))
    .sort((project1, project2) => project2.bytes - project1.bytes)
    .map(({ project }) => project),
]

export default defineConfig({
  test: {
    environment: `node`,
    // Threads over the default forks pool, without per-file isolation. A test
    // mutates only the log buffer, which the setup file resets per test, so a
    // fresh worker and module graph per test file would only slow the run.
    pool: `threads`,
    isolate: false,
    setupFiles: [`src/test-setup.ts`],
    exclude: [...configDefaults.exclude, `.claude/worktrees/**`],
    projects,
    coverage: {
      include: [`src`],
      exclude: [`**/testing.ts`, `src/test-setup.ts`, `*.bench.ts`],
    },
  },
})
