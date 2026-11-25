import { formatSection, parseDocument } from './document.ts'
import type { Block, Section, Table } from './document.ts'
import { excerptOfTables } from './excerpt.ts'
import type { Excerpt, TextExcerpt } from './excerpt.ts'
import type { ChangeKind } from './kinds.ts'
import { isAscending, pairByKey, pairRenamedByKey } from './pairing.ts'
import type { IndexPairs } from './pairing.ts'

/**
 * What a change affects, from the most to the least deliberate: which sections,
 * tables, and columns exist, what the prose says, or the values shown.
 */
export type ChangeGroup = (typeof changeGroups)[number]

export const changeGroups = [`structure`, `wording`, `contents`] as const

/** The changes of one excerpt: those of a table's contents, or any other one. */
export type Change = {
  /** What changed, repeated per occurrence. */
  kinds: ChangeKind[]

  /** The headings the change is under, an entity's written as `…`. */
  path: string[]
} & (
  | { group: `structure` | `contents`; excerpt: () => Excerpt }
  | { group: `wording`; excerpt: () => TextExcerpt }
)

/**
 * The changes between two versions of an example output, either missing when
 * the other introduced it. They are never empty when the versions differ.
 */
export const diffMarkdown = (
  before: string | undefined,
  after: string | undefined,
): Change[] => {
  if (before === after) {
    return []
  }
  if (before === undefined || after === undefined) {
    const verb = before === undefined ? `added` : `removed`
    return [
      textChange(`structure`, { noun: `example`, verb }, [], before, after),
    ]
  }

  const changes: Change[] = []
  diffSections(parseDocument(before), parseDocument(after), [], changes)
  return changes.length === 0
    ? [textChange(`contents`, { noun: `layout`, verb: `changed` }, [])]
    : changes
}

const textChange = (
  group: ChangeGroup,
  kind: ChangeKind,
  path: string[],
  before = ``,
  after = ``,
): Change => ({
  group,
  kinds: [kind],
  path,
  excerpt: () => ({ type: `text`, before, after }),
})

const diffSections = (
  before: Section,
  after: Section,
  path: string[],
  changes: Change[],
): void => {
  diffBlocks(before.blocks, after.blocks, path, changes)

  const { pairs, removed, added } = pairByKey(
    before.children,
    after.children,
    ({ heading }) => heading,
  )
  diffUnpairedSections(
    removed.map(index => before.children[index]!),
    added.map(index => after.children[index]!),
    path,
    changes,
  )
  diffSectionOrder(before, after, pairs, path, changes)
  for (const [beforeIndex, afterIndex] of pairs) {
    const child = before.children[beforeIndex]!
    diffSections(
      child,
      after.children[afterIndex]!,
      [...path, hasCode(child.heading) ? `…` : child.heading],
      changes,
    )
  }
}

/** Pairs sections with the same body, as renamed, before any others. */
const diffUnpairedSections = (
  before: Section[],
  after: Section[],
  path: string[],
  changes: Change[],
): void => {
  const renamed = pairByKey(before, after, sectionBody)
  changes.push(
    ...renamed.pairs.map(([beforeIndex, afterIndex]) =>
      renamedSectionChange(
        before[beforeIndex]!.heading,
        after[afterIndex]!.heading,
        path,
      ),
    ),
    ...renamed.removed.map(index =>
      sectionChange(`removed`, before[index]!, path),
    ),
    ...renamed.added.map(index => sectionChange(`added`, after[index]!, path)),
  )
}

const renamedSectionChange = (
  from: string,
  to: string,
  path: string[],
): Change => {
  const verb = hasCode(from)
    ? (`renamed` as const)
    : (`renamed to ${quote(to)}` as const)
  return textChange(
    sectionGroup(to),
    { noun: `section`, name: sectionName(from), verb },
    path,
    from,
    to,
  )
}

const diffSectionOrder = (
  before: Section,
  after: Section,
  pairs: IndexPairs,
  path: string[],
  changes: Change[],
): void => {
  if (isAscending(pairs)) {
    return
  }
  const beforeHeadings = pairs.map(([index]) => before.children[index]!.heading)
  const afterHeadings = pairs
    .map(([, index]) => index)
    .sort((first, second) => first - second)
    .map(index => after.children[index]!.heading)
  changes.push(
    textChange(
      before.children.some(({ heading }) => hasCode(heading))
        ? `contents`
        : `structure`,
      { noun: `sections`, verb: `reordered` },
      path,
      beforeHeadings.join(`\n`),
      afterHeadings.join(`\n`),
    ),
  )
}

const sectionChange = (
  verb: `added` | `removed`,
  section: Section,
  path: string[],
): Change => ({
  group: sectionGroup(section.heading),
  kinds: [{ noun: `section`, name: sectionName(section.heading), verb }],
  path,
  excerpt: () => {
    const markdown = formatSection(section)
    return verb === `added`
      ? { type: `text`, before: ``, after: markdown }
      : { type: `text`, before: markdown, after: `` }
  },
})

const sectionBody = ({ blocks, children }: Section): string =>
  JSON.stringify([blocks, children])

/** A section naming an entity comes and goes with the entity. */
const sectionGroup = (heading: string): ChangeGroup =>
  hasCode(heading) ? `contents` : `structure`

const sectionName = (heading: string): string =>
  hasCode(heading) ? `…` : quote(heading)

const diffBlocks = (
  before: Block[],
  after: Block[],
  path: string[],
  changes: Change[],
): void => {
  diffParagraphs(
    textsOf(before, `paragraph`),
    textsOf(after, `paragraph`),
    path,
    changes,
  )
  diffTexts(
    `code block`,
    textsOf(before, `code`),
    textsOf(after, `code`),
    path,
    `contents`,
    changes,
  )

  const beforeTables = before.filter(block => block.type === `table`)
  const afterTables = after.filter(block => block.type === `table`)
  for (const [index, table] of beforeTables.entries()) {
    const afterTable = afterTables[index]
    if (afterTable) {
      diffTables(table, afterTable, path, changes)
    } else {
      changes.push(tableChange(`removed`, table, path))
    }
  }
  for (const table of afterTables.slice(beforeTables.length)) {
    changes.push(tableChange(`added`, table, path))
  }

  diffBlockOrder(before, after, path, changes)
}

/** Where a side has more blocks of a type, their order says nothing more. */
const diffBlockOrder = (
  before: Block[],
  after: Block[],
  path: string[],
  changes: Change[],
): void => {
  const beforeTypes = before.map(({ type }) => type)
  const afterTypes = after.map(({ type }) => type)
  const beforeOrder = beforeTypes.join(`, `)
  const afterOrder = afterTypes.join(`, `)
  if (
    beforeOrder !== afterOrder &&
    beforeTypes.sort().join(`, `) === afterTypes.sort().join(`, `)
  ) {
    changes.push(
      textChange(
        `structure`,
        { noun: `blocks`, verb: `reordered` },
        path,
        beforeOrder,
        afterOrder,
      ),
    )
  }
}

const textsOf = (blocks: Block[], type: `paragraph` | `code`): string[] =>
  blocks
    .filter(block => block.type !== `table`)
    .filter(block => block.type === type)
    .map(({ text }) => text)

const tableChange = (
  verb: `added` | `removed`,
  table: Table,
  path: string[],
): Change => {
  const empty = { ...table, rows: [] }
  const [before, after] = verb === `added` ? [empty, table] : [table, empty]
  return {
    group: `structure`,
    kinds: [{ noun: `table`, verb }],
    path,
    excerpt: () => excerptOfTables(before, after, identityColumns(table), []),
  }
}

const identityColumns = ({ columns }: Table): IndexPairs =>
  columns.map((_, index) => [index, index])

/** Pairs paragraphs that differ only in their values before any others. */
const diffParagraphs = (
  before: string[],
  after: string[],
  path: string[],
  changes: Change[],
): void => {
  const same = pairByKey(before, after, text => text)
  const left = same.removed.map(index => before[index]!)
  const right = same.added.map(index => after[index]!)
  const reworded = pairByKey(left, right, wordingOf)
  for (const [beforeIndex, afterIndex] of reworded.pairs) {
    changes.push(
      textChange(
        `contents`,
        { noun: `values in a paragraph`, verb: `changed` },
        path,
        left[beforeIndex],
        right[afterIndex],
      ),
    )
  }
  pushReorder(`paragraphs`, same.pairs, before, after, path, changes)
  diffTexts(
    `paragraph`,
    reworded.removed.map(index => left[index]!),
    reworded.added.map(index => right[index]!),
    path,
    `wording`,
    changes,
  )
}

/** The paragraph without the numbers and code that differ per profile. */
export const wordingOf = (text: string): string =>
  text
    .replaceAll(/`[^`]*`/gu, `\`…\``)
    .replaceAll(/[+\-<~]?\d[\d,.]*(?:%| ?(?:[KMGT]?i?B|[mnµ]?s)\b)?/gu, `N`)

const pushReorder = (
  noun: `paragraphs` | `code blocks`,
  pairs: IndexPairs,
  before: string[],
  after: string[],
  path: string[],
  changes: Change[],
): void => {
  if (!isAscending(pairs)) {
    changes.push(
      textChange(
        `structure`,
        { noun, verb: `reordered` },
        path,
        before.join(`\n`),
        after.join(`\n`),
      ),
    )
  }
}

const diffTexts = (
  noun: `paragraph` | `code block`,
  before: string[],
  after: string[],
  path: string[],
  group: ChangeGroup,
  changes: Change[],
): void => {
  const { pairs, removed, added } = pairByKey(before, after, text => text)
  pushReorder(`${noun}s`, pairs, before, after, path, changes)
  const count = Math.max(removed.length, added.length)
  for (let index = 0; index < count; index++) {
    const from = before[removed[index] ?? -1]
    const to = after[added[index] ?? -1]
    const verb =
      from === undefined ? `added` : to === undefined ? `removed` : `changed`
    changes.push(textChange(group, { noun, verb }, path, from, to))
  }
}

const diffTables = (
  before: Table,
  after: Table,
  path: string[],
  changes: Change[],
): void => {
  const columns = pairColumns(before, after)
  const rows = pairRows(before, after, columns.pairs)
  const excerpt = (): Excerpt =>
    excerptOfTables(before, after, columns.pairs, rows)
  changes.push(
    ...columns.kinds.map((kind): Change => ({
      group: `structure`,
      kinds: [kind],
      path,
      excerpt,
    })),
  )

  const kinds = rowKinds(before, after, columns.pairs, rows)
  if (kinds.length > 0) {
    changes.push({ group: `contents`, kinds, path, excerpt })
  }
}

const rowKinds = (
  before: Table,
  after: Table,
  columns: IndexPairs,
  rows: IndexPairs,
): ChangeKind[] => {
  const kinds: ChangeKind[] = []
  for (const [beforeIndex, afterIndex] of rows) {
    for (const [beforeColumn, afterColumn] of columns) {
      if (
        before.rows[beforeIndex]![beforeColumn] !==
        after.rows[afterIndex]![afterColumn]
      ) {
        const name = quote(after.columns[afterColumn]!.name)
        kinds.push({ noun: `cells`, name, verb: `changed` })
      }
    }
  }
  if (!isAscending(rows)) {
    kinds.push({ noun: `rows`, verb: `reordered` })
  }
  for (let index = rows.length; index < before.rows.length; index++) {
    kinds.push({ noun: `rows`, verb: `removed` })
  }
  for (let index = rows.length; index < after.rows.length; index++) {
    kinds.push({ noun: `rows`, verb: `added` })
  }
  return kinds
}

/**
 * Pairs each row with the one of the same names. A row with one name changed is
 * the row with the same numbers and other names, where as many unpaired rows
 * have them on each side.
 */
const pairRows = (
  before: Table,
  after: Table,
  columns: IndexPairs,
): IndexPairs => {
  const keyOf =
    (included: IndexPairs) =>
    (index: number, side: `before` | `after`): string => {
      const row = (side === `before` ? before : after).rows[index]!
      return JSON.stringify(
        included.map(
          ([beforeColumn, afterColumn]) =>
            row[side === `before` ? beforeColumn : afterColumn],
        ),
      )
    }

  const names = columns.filter(([, index]) => !after.columns[index]!.numeric)
  const { pairs, removed, added } = pairByKey(
    [...before.rows.keys()],
    [...after.rows.keys()],
    keyOf(names),
  )
  for (const name of names) {
    const renamed = pairRenamedByKey(
      removed.filter(index => !pairs.some(([paired]) => paired === index)),
      added.filter(index => !pairs.some(([, paired]) => paired === index)),
      keyOf(columns.filter(column => column !== name)),
    )
    pairs.push(...renamed)
  }
  return pairs.sort(([first], [second]) => first - second)
}

/** Pairs the columns of two tables, and states how the columns differ. */
const pairColumns = (
  before: Table,
  after: Table,
): { pairs: IndexPairs; kinds: ChangeKind[] } => {
  const { pairs, removed, added } = pairByKey(
    before.columns,
    after.columns,
    ({ name }) => name,
  )
  const kinds: ChangeKind[] = isAscending(pairs)
    ? []
    : [{ noun: `columns`, verb: `reordered` }]
  const push = (
    name: string,
    verb: `added` | `removed` | `realigned` | `renamed to ${string}`,
  ): void => {
    kinds.push({ noun: `column`, name: quote(name), verb })
  }

  // The same number of columns lost and gained is a rename of each in order.
  const renamed = removed.length === added.length ? removed.length : 0
  for (let index = 0; index < renamed; index++) {
    const from = removed[index]!
    const to = added[index]!
    pairs.push([from, to])
    push(
      before.columns[from]!.name,
      `renamed to ${quote(after.columns[to]!.name)}`,
    )
  }
  for (const index of removed.slice(renamed)) {
    push(before.columns[index]!.name, `removed`)
  }
  for (const index of added.slice(renamed)) {
    push(after.columns[index]!.name, `added`)
  }
  for (const [beforeIndex, afterIndex] of pairs) {
    const { name, numeric } = after.columns[afterIndex]!
    if (before.columns[beforeIndex]!.numeric !== numeric) {
      push(name, `realigned`)
    }
  }
  return { pairs, kinds }
}

const hasCode = (heading: string): boolean => heading.includes(`\``)

const quote = (text: string): string => `"${text}"`
