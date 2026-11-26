import { diffMarkdown, wordingOf } from './changes.ts'
import type { Change, ChangeGroup } from './changes.ts'
import type { Excerpt } from './excerpt.ts'
import { labelOf } from './kinds.ts'
import type { ChangeKind } from './kinds.ts'

/** A commit's changes to the example outputs. */
export type Summary = {
  /** Every change by the path it is under, for an outline. */
  changesByPath: PathChanges[]

  /** The changes a reviewer reads one excerpt of, the most frequent first. */
  entries: SummaryEntry[]
  outputCount: number
}

export type PathChanges = {
  path: string[]

  /** By group and label, because a label can be in several groups. */
  kinds: Map<string, GroupKindCount>
}

type KindCount = { kind: ChangeKind; count: number }

export type GroupKindCount = KindCount & {
  group: ChangeGroup
  outputs: Set<string>
}

export type SummaryEntry = {
  group: ChangeGroup

  /** The headings below the title the changes share, when they do. */
  section: string[]
  kinds: KindCount[]
  outputs: Set<string>
  excerpt: Excerpt

  /** The output the excerpt is from. */
  output: string
}

/** An example output's versions, either missing when the other introduced it. */
export type OutputVersions = {
  filename: string
  before: string | undefined
  after: string | undefined
}

export const summarizeChanges = (
  versions: Iterable<OutputVersions>,
): Summary => {
  const changesByPath = new Map<string, PathChanges>()
  const entries = new Map<string, EntryBuilder>()
  const outputs = new Set<string>()
  for (const { filename, before, after } of versions) {
    for (const change of diffMarkdown(before, after)) {
      outputs.add(filename)
      addToPath(changesByPath, change, filename)
      const key = entryKey(change)
      let entry = entries.get(key)
      if (!entry) {
        entry = new EntryBuilder(change, filename)
        entries.set(key, entry)
      }
      entry.add(change, filename)
    }
  }
  return {
    changesByPath: [...changesByPath.values()],
    entries: [...entries.values()]
      .map(entry => entry.build())
      .sort((first, second) => countOf(second) - countOf(first)),
    outputCount: outputs.size,
  }
}

export const countOf = ({ kinds }: SummaryEntry): number =>
  kinds.reduce((total, { count }) => total + count, 0)

const addToPath = (
  changesByPath: Map<string, PathChanges>,
  { path, kinds, group }: Change,
  output: string,
): void => {
  const key = JSON.stringify(path)
  let changes = changesByPath.get(key)
  if (!changes) {
    changes = { path, kinds: new Map() }
    changesByPath.set(key, changes)
  }
  for (const kind of kinds) {
    const kindKey = `${group} ${labelOf(kind)}`
    let kindCount = changes.kinds.get(kindKey)
    if (!kindCount) {
      kindCount = { group, kind, count: 0, outputs: new Set() }
      changes.kinds.set(kindKey, kindCount)
    }
    kindCount.count++
    kindCount.outputs.add(output)
  }
}

/**
 * Keys a structural change by what it is, wherever it is, a reworded paragraph
 * by both wordings, and the values that differ by the section they are in.
 */
const entryKey = (change: Change): string => {
  const { group, kinds, path } = change
  const labels = kinds.map(labelOf)
  switch (change.group) {
    case `structure`:
      return JSON.stringify([group, labels])
    case `wording`: {
      const { before, after } = change.excerpt()
      return JSON.stringify([
        group,
        labels,
        wordingOf(before),
        wordingOf(after),
      ])
    }
    case `contents`:
      return JSON.stringify([group, sectionOf(path), kinds.some(isOfSections)])
  }
}

/** Omits the title, which differs between profiles with the same sections. */
const sectionOf = (path: string[]): string[] => path.slice(1)

/** Sections come and go with entities, beside the rows of those that stay. */
const isOfSections = ({ noun }: ChangeKind): boolean =>
  noun === `section` || noun === `sections`

/** Keeps the excerpt that shows the most kinds of change. */
class EntryBuilder {
  readonly #group: ChangeGroup
  readonly #section: string[]
  readonly #kinds = new Map<string, KindCount>()
  readonly #outputs = new Set<string>()
  #best: { excerpt: () => Excerpt; output: string; kindCount: number }

  public constructor({ group, path, excerpt }: Change, output: string) {
    this.#group = group
    this.#section = sectionOf(path)
    this.#best = { excerpt, output, kindCount: 0 }
  }

  public add({ kinds, path, excerpt }: Change, output: string): void {
    if (sectionOf(path).join(`\n`) !== this.#section.join(`\n`)) {
      this.#section.length = 0
    }
    this.#outputs.add(output)

    const labels = new Set<string>()
    for (const kind of kinds) {
      const label = labelOf(kind)
      labels.add(label)
      const kindCount = this.#kinds.get(label) ?? { kind, count: 0 }
      kindCount.count++
      this.#kinds.set(label, kindCount)
    }
    if (labels.size > this.#best.kindCount) {
      this.#best = { excerpt, output, kindCount: labels.size }
    }
  }

  public build(): SummaryEntry {
    return {
      group: this.#group,
      section: this.#section,
      kinds: [...this.#kinds.values()],
      outputs: this.#outputs,
      excerpt: this.#best.excerpt(),
      output: this.#best.output,
    }
  }
}
