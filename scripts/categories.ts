/**
 * Reports how the committed examples are categorized, so a change to a
 * categorization rule can be judged against real inputs rather than by reading
 * the rule.
 *
 * Two modes:
 * - The default report reads the generated `examples/output/` and prints which
 *   categories each example emits, and which no example emits
 * - `--rule <pattern>` runs every `examples/input/` profile through the
 *   pipeline and reports the function names a candidate name-matching rule
 *   matches, grouped by the category each name has today. CLAUDE.md's
 *   categorizing principles require a long-tail rule to record what it matches
 *   and misses
 */

import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { openInputAsBlob } from '../src/cli/input.ts'
import { profileToMdAsync } from '../src/formats/index.ts'
import type { DeepReadonly } from '../src/helpers/types.ts'
import { HEAP_SNAPSHOT_NODE_CATEGORIES } from '../src/modalities/heap-snapshot/type.ts'
import type { FunctionCategory, ProfileEntry } from '../src/options.ts'
import {
  defaultCategorizeFunctions,
  FUNCTION_CATEGORIES,
} from '../src/options.ts'

const OUTPUT_DIRECTORY = `examples/output`
const INPUT_DIRECTORY = `examples/input`

/** The categories the report checks each modality's examples against. */
const MODALITY_TO_CATEGORIES = new Map<string, readonly string[]>([
  [`function`, FUNCTION_CATEGORIES],
  [`heap snapshot node`, HEAP_SNAPSHOT_NODE_CATEGORIES],
])

const reportCategories = (): void => {
  const filenames = readdirSync(OUTPUT_DIRECTORY).filter(filename =>
    filename.endsWith(`.md`),
  )
  const modalityToCategoryToFilenames = groupExamplesByCategory(filenames)

  console.log(`${filenames.length} examples`)
  for (const [modality, categoryToFilenames] of modalityToCategoryToFilenames) {
    console.log(`\n${modality} categories\n`)
    printEmittedCategories(categoryToFilenames)
    printUnemittedCategories(modality, categoryToFilenames)
  }
}

/** The filenames of the examples emitting each category, per modality. */
const groupExamplesByCategory = (
  filenames: readonly string[],
): Map<string, Map<string, string[]>> => {
  const modalityToCategoryToFilenames = new Map<string, Map<string, string[]>>([
    [`function`, new Map()],
    [`heap snapshot node`, new Map()],
  ])
  for (const filename of filenames) {
    const output = readFileSync(join(OUTPUT_DIRECTORY, filename), `utf8`)
    const categoryToFilenames = modalityToCategoryToFilenames.get(
      isHeapSnapshot(output) ? `heap snapshot node` : `function`,
    )!
    for (const category of emittedCategories(output)) {
      let categoryFilenames = categoryToFilenames.get(category)
      if (!categoryFilenames) {
        categoryFilenames = []
        categoryToFilenames.set(category, categoryFilenames)
      }
      categoryFilenames.push(filename)
    }
  }
  return modalityToCategoryToFilenames
}

/**
 * Whether {@link output} is a heap snapshot's, which uses its own set of
 * categories, sharing several names with the function categories.
 */
const isHeapSnapshot = (output: string): boolean =>
  output.startsWith(`# Heap snapshot`)

/** A row of an emitted `| Category | … |` table, which every modality writes. */
const CATEGORY_ROW = /^\| (?<category>[a-z][a-z0-9 -]*?) +\|/u

/**
 * The categories {@link output} emits.
 *
 * Read from the generated Markdown rather than by re-running the pipeline, so
 * the report covers every modality through the table each one writes.
 */
const emittedCategories = (output: string): Set<string> => {
  const categories = new Set<string>()
  let inCategoryTable = false
  for (const line of output.split(`\n`)) {
    if (line.startsWith(`| Category`)) {
      inCategoryTable = true
      continue
    }
    if (!inCategoryTable) {
      continue
    }
    if (!line.startsWith(`|`)) {
      inCategoryTable = false
      continue
    }
    const category = CATEGORY_ROW.exec(line)?.groups!.category
    if (category !== undefined && category !== `-`) {
      categories.add(category)
    }
  }
  return categories
}

const printEmittedCategories = (
  categoryToFilenames: Map<string, string[]>,
): void => {
  const rows = [...categoryToFilenames].sort(
    ([, filenames1], [, filenames2]) => filenames2.length - filenames1.length,
  )
  const width = Math.max(...rows.map(([category]) => category.length))
  for (const [category, filenames] of rows) {
    console.log(
      `  ${category.padEnd(width)}  ${String(filenames.length).padStart(3)} examples  ${filenames[0]}${filenames.length > 1 ? ` …` : ``}`,
    )
  }
}

const printUnemittedCategories = (
  modality: string,
  categoryToFilenames: Map<string, string[]>,
): void => {
  const unemitted = MODALITY_TO_CATEGORIES.get(modality)!.filter(
    category => !categoryToFilenames.has(category),
  )
  if (unemitted.length > 0) {
    console.log(`  no example emits: ${unemitted.join(`, `)}`)
  }
}

/**
 * Reports the function names {@link pattern} matches across every committed
 * profile, by the category each name has today.
 *
 * A category the rule matches names in is a category it changes. A rule meant
 * for one category that matches names in several is over-broad.
 */
const reportRuleMatches = async (pattern: string): Promise<void> => {
  const { categoryToNames, withoutFunctions, unparseable } =
    await matchNamesByCategory(new RegExp(pattern, `u`))

  const total = [...categoryToNames.values()].reduce(
    (count, names) => count + names.size,
    0,
  )
  console.log(
    `/${pattern}/ matches ${total} distinct function names, over every committed input but ${withoutFunctions.length + unparseable.length} (${withoutFunctions.length} with no function entries, ${unparseable.length} unparseable)\n`,
  )
  printMatchedNames(categoryToNames)
}

/**
 * The names {@link rule} matches in each category, plus the inputs that
 * contributed no names: those with no function entries, and those this build
 * can't parse.
 *
 * The report includes the counts, since silently skipping inputs would
 * undercount the names the rule matches.
 *
 * Reads the entries through the categorization option, the only place the
 * pipeline exposes them, so it covers functions rather than heap snapshot
 * nodes.
 */
const matchNamesByCategory = async (
  rule: RegExp,
): Promise<{
  categoryToNames: Map<string, Set<string>>
  withoutFunctions: string[]
  unparseable: string[]
}> => {
  const categoryToNames = new Map<string, Set<string>>()
  const withoutFunctions: string[] = []
  const unparseable: string[] = []
  for (const filename of readdirSync(INPUT_DIRECTORY)) {
    try {
      const categorized = await categorizeInput(
        join(INPUT_DIRECTORY, filename),
        (entries, categories) =>
          recordMatchingNames(entries, categories, rule, categoryToNames),
      )
      if (!categorized) {
        withoutFunctions.push(filename)
      }
    } catch {
      unparseable.push(filename)
    }
  }
  return { categoryToNames, withoutFunctions, unparseable }
}

/**
 * Converts the input at {@link path}, reporting the category of each of its
 * functions.
 *
 * Returns whether the input has function entries, which a heap snapshot lacks
 * because it records its own node categories.
 */
const categorizeInput = async (
  path: string,
  onCategorized: (
    entries: readonly DeepReadonly<ProfileEntry>[],
    categories: readonly FunctionCategory[],
  ) => void,
): Promise<boolean> => {
  let categorized = false
  // Through the CLI's reader, since a committed input may be compressed.
  await profileToMdAsync(await openInputAsBlob(path), {
    categorizeFunctions: (entries, context) => {
      const categories = defaultCategorizeFunctions(entries, context)
      onCategorized(entries, categories)
      categorized = true
      return categories
    },
  })
  return categorized
}

const recordMatchingNames = (
  entries: readonly DeepReadonly<ProfileEntry>[],
  categories: readonly FunctionCategory[],
  rule: RegExp,
  categoryToNames: Map<string, Set<string>>,
): void => {
  for (const [index, entry] of entries.entries()) {
    if (entry.name === undefined || !rule.test(entry.name)) {
      continue
    }
    const category = categories[index]!
    let names = categoryToNames.get(category)
    if (!names) {
      names = new Set()
      categoryToNames.set(category, names)
    }
    names.add(entry.name)
  }
}

const printMatchedNames = (categoryToNames: Map<string, Set<string>>): void => {
  for (const [category, names] of [...categoryToNames].sort(
    ([, names1], [, names2]) => names2.size - names1.size,
  )) {
    console.log(`${category} (${names.size})`)
    for (const name of [...names].sort().slice(0, 20)) {
      console.log(`  ${name}`)
    }
    if (names.size > 20) {
      console.log(`  … ${names.size - 20} more`)
    }
  }
}

const ruleIndex = process.argv.indexOf(`--rule`)
if (ruleIndex === -1) {
  reportCategories()
} else {
  const pattern = process.argv[ruleIndex + 1]
  if (pattern === undefined) {
    console.error(`--rule needs a pattern`)
    process.exit(1)
  }
  await reportRuleMatches(pattern)
}
