import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, test } from 'vitest'
import { FUNCTION_CATEGORY_SET } from './modalities/category-sets.ts'
import { formatCategory } from './modalities/format.ts'
import { HEAP_SNAPSHOT_NODE_CATEGORY_SET } from './modalities/heap-snapshot/type.ts'
import { CATEGORY_SETS } from './modalities/registry.ts'

/**
 * The categories no committed example emits, with the reason nothing reaches
 * each.
 *
 * A category the examples never reach is untested, so give it a line here
 * stating what would produce it. The test fails when a category is neither
 * emitted nor listed, and when a listed category is emitted, because a stale
 * entry hides that an input closed the gap.
 */
const UNEMITTED_CATEGORIES: ReadonlyMap<string, string> = new Map([
  [
    `heap snapshot node unknown`,
    `JavaScriptCore leaves an ordinary cell unflagged and V8 names every type ` +
      `it declares, so no committed input contains a node its format could ` +
      `not classify. A format that declared a type name it then failed to ` +
      `resolve would produce it.`,
  ],
])

const OUTPUT_DIRECTORY = `examples/output`

/** A row of an emitted `| Category | … |` table, which every modality writes. */
const CATEGORY_ROW = /^\| (?<category>[A-Z][A-Za-z0-9 -]*?) +\|/u

/** The categories {@link output} emits, by their displayed name. */
const emittedCategories = (output: string): string[] => {
  const categories: string[] = []
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
      categories.push(category)
    }
  }
  return categories
}

/**
 * The categories the committed examples emit, by modality.
 *
 * A heap snapshot's categories are a set of their own that shares several names
 * with the function categories, so they are counted separately. Read from the
 * generated output rather than by re-running the pipeline, because
 * `pnpm check-examples` already checks that output against the inputs.
 */
const emittedCategoriesByModality = (): Map<string, Map<string, string>> => {
  const modalityToCategoryToFilename = new Map(
    CATEGORY_SETS.map(({ noun }) => [noun, new Map<string, string>()]),
  )
  for (const filename of readdirSync(OUTPUT_DIRECTORY)) {
    if (!filename.endsWith(`.md`)) {
      continue
    }
    const output = readFileSync(join(OUTPUT_DIRECTORY, filename), `utf8`)
    const categoryToFilename = modalityToCategoryToFilename.get(
      output.startsWith(`# Heap snapshot`)
        ? HEAP_SNAPSHOT_NODE_CATEGORY_SET.noun
        : FUNCTION_CATEGORY_SET.noun,
    )!
    for (const category of emittedCategories(output)) {
      if (!categoryToFilename.has(category)) {
        categoryToFilename.set(category, filename)
      }
    }
  }
  return modalityToCategoryToFilename
}

describe.each(
  CATEGORY_SETS.map(({ noun, categories }) => [noun, categories] as const),
)(`every %s category`, (modality, categories) => {
  const emitted = emittedCategoriesByModality().get(modality)!

  test.each(categories)(`%s is emitted by an example, or listed`, category => {
    const reason = UNEMITTED_CATEGORIES.get(`${modality} ${category}`)
    const filename = emitted.get(formatCategory(category))

    if (reason === undefined) {
      expect(
        filename,
        `no example emits it, and nothing records why`,
      ).toBeDefined()
      return
    }

    expect(
      filename,
      `${filename} emits it, so drop its entry, which reads: ${reason}`,
    ).toBeUndefined()
  })
})
