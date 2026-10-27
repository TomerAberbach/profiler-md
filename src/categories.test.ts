import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, test } from 'vitest'
import { FUNCTION_CATEGORY_SET } from './modalities/category-sets.ts'
import { formatCategory } from './modalities/format.ts'
import { HEAP_SNAPSHOT_NODE_CATEGORY_SET } from './modalities/heap-snapshot/type.ts'
import { CATEGORY_SETS } from './modalities/registry.ts'
import { TRACE_EVENT_CATEGORY_SET } from './modalities/trace/type.ts'

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
  ...[`style`, `layout`, `paint`].map(
    category =>
      [
        `trace event ${category}`,
        `No committed input traces a browser page, so none records the ` +
          `rendering of one. A Chrome DevTools trace or a WebKit timeline ` +
          `recording's layout records would produce it.`,
      ] as const,
  ),
])

/**
 * The categories the committed examples emit, by modality.
 *
 * A heap snapshot's and a trace's categories are sets of their own, and the
 * first shares several names with the function categories, so each set is
 * counted separately. Read from the
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
        : output.startsWith(`# Trace`)
          ? TRACE_EVENT_CATEGORY_SET.noun
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

const OUTPUT_DIRECTORY = `examples/output`

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

/** A row of an emitted `| Category | … |` table, which every modality writes. */
const CATEGORY_ROW =
  /^\| (?<category>[A-Z](?:[A-Za-z0-9 /-]*[A-Za-z0-9/-])?) +\|/u

describe.each(
  CATEGORY_SETS.map(({ noun, categories }) => [noun, categories] as const),
)(`every %s category`, (modality, categories) => {
  const emitted = emittedCategoriesByModality().get(modality)!

  test.each(categories)(`%s is emitted by an example, or listed`, category => {
    const reason = UNEMITTED_CATEGORIES.get(`${modality} ${category}`)
    const filename = emitted.get(formatCategory(category))

    expect(
      filename !== undefined,
      reason === undefined
        ? `no example emits it, and nothing records why`
        : `${filename} emits it, so drop its entry, which reads: ${reason}`,
    ).toBe(reason === undefined)
  })
})
