import { parseDocument } from '../helpers/document.ts'
import type { Block, Section } from '../helpers/document.ts'
import { formatCategory } from '../modalities/format.ts'
import { CATEGORY_SETS } from '../modalities/registry.ts'

/**
 * The sections and columns that only a diff or only its base and current
 * outputs show, as paths of headings ending in the column's name, if any.
 *
 * Compares sections by the headings that name what they show. Which entities,
 * categories, and directions of change a section is divided into depends on the
 * data, so it compares only whether a section is divided by category. A diff
 * shows a sentence in place of a section where nothing differed, so a section
 * there lacks nothing.
 */
export const shownOnOneForm = ({
  singles,
  diff,
}: {
  singles: string[]
  diff: string
}): { onlySingle: string[]; onlyDiff: string[] } => {
  const singleContents = contentsByPath(singles)
  const diffContents = contentsByPath([diff])
  for (const contents of diffContents.values()) {
    for (const column of DIFF_COLUMNS) {
      contents.delete(column)
    }
  }
  return {
    onlySingle: missingFrom(diffContents, singleContents).filter(
      path => !isWithoutDifferences(path, diffContents),
    ),
    onlyDiff: missingFrom(singleContents, diffContents),
  }
}

/** The contents and the sections with contents that another form lacks. */
const missingFrom = (
  other: ContentsByPath,
  pathToContents: ContentsByPath,
): string[] =>
  [...pathToContents].flatMap(([path, contents]) => {
    const shown = other.get(path) ?? new Set<string>()
    const missing = [...contents.difference(shown)]
    return missing.length > 0 && shown.size === 0
      ? path
      : missing.map(content => `${path}${SEPARATOR}${content}`)
  })

/**
 * Whether the section at a path, or one it is nested in, is in the diff but
 * shows nothing other than sentences at any depth.
 */
const isWithoutDifferences = (
  path: string,
  diffContents: ContentsByPath,
): boolean =>
  [...diffContents.keys()].some(
    section =>
      isWithin(path, section) &&
      ![...diffContents].some(
        ([other, contents]) => contents.size > 0 && isWithin(other, section),
      ),
  )

const isWithin = (path: string, section: string): boolean =>
  path === section || path.startsWith(section + SEPARATOR)

type ContentsByPath = Map<string, Set<string>>

/**
 * The columns, code blocks, and division by category that the sections sharing
 * a path show.
 */
const contentsByPath = (markdowns: string[]): ContentsByPath => {
  const pathToContents: ContentsByPath = new Map()
  const visit = (section: Section, parentPath: string[]): void => {
    const path = isDataDependent(section)
      ? parentPath
      : [...parentPath, roleOf(section)]
    const key = path.join(SEPARATOR)
    const contents = pathToContents.get(key) ?? new Set()
    pathToContents.set(key, contents)
    if (CATEGORIES.has(section.heading)) {
      contents.add(`category subsections`)
    }
    for (const content of section.blocks.flatMap(contentsOf)) {
      contents.add(content)
    }
    for (const child of section.children) {
      visit(child, path)
    }
  }
  for (const markdown of markdowns) {
    for (const profile of parseDocument(markdown).children) {
      visit(profile, [])
    }
  }
  return pathToContents
}

const contentsOf = (block: Block): string[] => {
  switch (block.type) {
    case `table`:
      return block.columns.map(({ name }) => name)
    case `code`:
      return [`code block`]
    case `paragraph`:
      return []
  }
}

const isDataDependent = ({ heading }: Section): boolean =>
  heading.startsWith(`\``) || CATEGORIES.has(heading) || PARTITIONS.has(heading)

const roleOf = ({ heading, depth }: Section): string =>
  depth === 1 ? heading.replace(/ diff$/u, ``) : heading

const CATEGORIES: ReadonlySet<string> = new Set(
  CATEGORY_SETS.flatMap(({ categories }) => categories.map(formatCategory)),
)

const PARTITIONS: ReadonlySet<string> = new Set([
  `Categories`,
  `Regressions`,
  `Improvements`,
  `Increases`,
  `Decreases`,
])

const DIFF_COLUMNS = [`Change`, `Delta`]

const SEPARATOR = ` › `
