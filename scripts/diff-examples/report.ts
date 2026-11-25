import { createHash } from 'node:crypto'
import { capitalizeFirst, formatCount } from '../../src/helpers/format.ts'
import { changeGroups } from './changes.ts'
import type { ChangeGroup } from './changes.ts'
import { formatExcerpt } from './format-excerpt.ts'
import { formatKinds } from './kinds.ts'
import { formatOutline, formatOutputCount } from './outline.ts'
import { countOf } from './summary.ts'
import type { Summary, SummaryEntry } from './summary.ts'
import { truncate } from './text.ts'

export type CommitReport = {
  id: string
  subject: string
  summary: Summary
  regenerated: string[]
}

type ReportOptions = {
  /**
   * The pull request the report is a comment of. The report then links each
   * output to its diff there, and is cut to the length of a comment.
   */
  pullRequestURL?: string | undefined
}

/** Formats the reports as Markdown. */
export const formatReports = (
  reports: CommitReport[],
  options: ReportOptions = {},
): string => {
  const changed = reports.filter(
    ({ summary, regenerated }) => summary.outputCount + regenerated.length > 0,
  )
  if (changed.length === 0) {
    return `No example output changed.`
  }

  const limits =
    options.pullRequestURL === undefined ? NO_LIMITS : COMMENT_LIMITS
  const budget = new Budget(limits.length)
  const context = { ...options, limits, budget }
  const formatted: string[] = []
  for (const report of changed) {
    if (!budget.hasRoom) {
      break
    }
    formatted.push(formatReport(report, context))
  }
  const omitted = changed.length - formatted.length
  if (omitted > 0) {
    formatted.push(
      `Commits not shown: ${formatCount(omitted)}. Run \`pnpm diff-examples\` with their revisions.`,
    )
  }
  return formatted.join(`\n\n`)
}

type Context = ReportOptions & { limits: Limits; budget: Budget }

type Limits = { length: number; entries: number; outlineLines: number }

// GitHub rejects a comment longer than 65,536 characters.
const COMMENT_LIMITS: Limits = {
  length: 60_000,
  entries: 25,
  outlineLines: 60,
}

const NO_LIMITS: Limits = {
  length: Infinity,
  entries: Infinity,
  outlineLines: Infinity,
}

/** Counts the characters left in a report. */
class Budget {
  #left: number

  public constructor(length: number) {
    this.#left = length
  }

  /** Whether another commit's headings and notices fit. */
  public get hasRoom(): boolean {
    return this.#left >= COMMIT_LENGTH
  }

  /** Spends the length of text that is in the report whether or not it fits. */
  public spend(text: string): string {
    this.#left -= text.length
    return text
  }

  /** Whether the text fits, in which case its length is spent. */
  public trySpend(text: string): boolean {
    if (text.length > this.#left) {
      return false
    }
    this.spend(text)
    return true
  }
}

/** More than a commit's headings and notices ever take. */
const COMMIT_LENGTH = 2000

const formatReport = (
  { id, subject, summary, regenerated }: CommitReport,
  context: Context,
): string => {
  const { limits, budget } = context
  const command = `\`pnpm diff-examples ${id.slice(0, 12)}\``
  const parts = [
    budget.spend(`### ${truncate(subject, MAX_SUBJECT_LENGTH)}`),
    budget.spend(
      [
        `${formatOutputCount(summary.outputCount)} changed at ${id.slice(0, 12)}.`,
        ...(regenerated.length > 0
          ? [
              `${formatOutputCount(regenerated.length)} regenerated from a changed input, not shown.`,
            ]
          : []),
      ].join(` `),
    ),
  ]
  if (summary.entries.length > 0) {
    const outline = [
      `\`\`\`diff`,
      ...formatOutline(summary.changesByPath, limits.outlineLines),
      `\`\`\``,
    ].join(`\n`)
    parts.push(
      budget.trySpend(outline)
        ? outline
        : budget.spend(`Run ${command} for the outline, not shown here.`),
      ...changeGroups.map(group =>
        formatGroup(group, summary.entries, command, context),
      ),
    )
  }
  return parts.join(`\n\n`)
}

const formatGroup = (
  group: ChangeGroup,
  allEntries: SummaryEntry[],
  command: string,
  context: Context,
): string => {
  const { limits, budget } = context
  const entries = allEntries.filter(entry => entry.group === group)
  const heading = budget.spend(`#### ${capitalizeFirst(group)}`)
  if (entries.length === 0) {
    return `${heading}\n\n${budget.spend(`No changes.`)}`
  }

  // Most contents follow from the other groups, unless there are none.
  const onlyGroup = entries.length === allEntries.length
  const formatted: string[] = []
  for (const [index, entry] of entries.slice(0, limits.entries).entries()) {
    const isOpen = group !== `contents` || (onlyGroup && index === 0)
    const text = formatEntry(entry, isOpen, context)
    if (!budget.trySpend(text)) {
      break
    }
    formatted.push(text)
  }
  const omitted = entries.length - formatted.length
  return [
    heading,
    ...formatted,
    ...(omitted > 0
      ? [
          budget.spend(
            `Run ${command} for the changes not shown here: ${formatCount(omitted)}.`,
          ),
        ]
      : []),
  ].join(`\n\n`)
}

const formatEntry = (
  entry: SummaryEntry,
  isOpen: boolean,
  options: ReportOptions,
): string =>
  [
    isOpen ? `<details open>` : `<details>`,
    `<summary>${formatTitle(entry)}</summary>`,
    ``,
    `In ${formatFilename(entry.output, options)}${entry.outputs.size > 1 ? ` and ${formatCount(entry.outputs.size - 1)} more` : ``}:`,
    ``,
    formatExcerpt(entry.excerpt),
    ``,
    `</details>`,
  ].join(`\n`)

const formatTitle = (entry: SummaryEntry): string => {
  const section = entry.section.map(escapeHtml).join(` › `)
  const kinds = escapeHtml(formatKinds(entry.kinds.map(({ kind }) => kind)))
  const title =
    entry.group === `contents`
      ? `<b>${section || `Summary`}</b>: ${kinds}`
      : `<b>${kinds}</b>${section ? ` in ${section}` : ``}`
  return `${title}, ×${formatCount(countOf(entry))} in ${formatOutputCount(entry.outputs.size)}`
}

const formatFilename = (
  filename: string,
  { pullRequestURL }: ReportOptions,
): string => {
  const name = `\`${filename}\``
  if (pullRequestURL === undefined) {
    return name
  }
  const hash = createHash(`sha256`)
    .update(`examples/output/${filename}`)
    .digest(`hex`)
  return `[${name}](${pullRequestURL}/files#diff-${hash})`
}

const escapeHtml = (text: string): string =>
  text.replaceAll(`&`, `&amp;`).replaceAll(`<`, `&lt;`)

const MAX_SUBJECT_LENGTH = 220
