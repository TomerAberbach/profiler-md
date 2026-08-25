import type { Ansis } from 'ansis'
import { makeAnsis } from './ansis.ts'
import { kindlingColors } from './theme-kindling.ts'

export type HighlightOptions = {
  /** Whether to color the text. The text is returned as is otherwise. */
  colors: boolean
}

/**
 * Colors the plain help text in the Kindling theme by re-parsing its layout.
 * Styling after layout keeps the columns aligned.
 */
export const highlightHelp = (
  text: string,
  { colors }: HighlightOptions,
): string => {
  if (!colors) {
    return text
  }

  const palette = makePalette(makeAnsis({ isTTY: true }))
  let section: Section = `entries`
  return text
    .split(`\n`)
    .map(line => {
      if (line === ``) {
        return line
      }

      const label = /^(?<label>[A-Z][A-Za-z ]*):(?<rest>.*)$/u.exec(line)
      if (label) {
        const name = label.groups!.label!
        const rest = label.groups!.rest!
        section = sectionOf(name, rest)
        return highlightLabelLine(name, rest, section, palette)
      }

      switch (section) {
        case `usage`:
          return highlightUsage(line, palette)
        case `examples`:
          return highlightExample(line, palette)
        case `entries`:
          return highlightEntry(line, palette)
      }
    })
    .join(`\n`)
}

const highlightLabelLine = (
  name: string,
  rest: string,
  section: Section,
  palette: Palette,
): string => {
  const styledLabel = palette.label(`${name}:`)
  if (rest === ``) {
    return styledLabel
  }
  const content = rest.slice(1)
  return `${styledLabel} ${section === `usage` ? highlightSyntax(content, palette) : palette.url(content)}`
}

type Section = `usage` | `examples` | `entries`

const sectionOf = (label: string, rest: string): Section => {
  if (label === `Examples`) {
    return `examples`
  }
  if (rest === `` || /^ https?:/u.test(rest)) {
    return `entries`
  }
  return `usage`
}

/** The indentation of Optique's doc page entries. */
export const INDENT = `  `

/** Styles a synopsis line wrapped under the label's content, or the prose after it. */
const highlightUsage = (line: string, palette: Palette): string =>
  /^ +\S/u.test(line)
    ? highlightSyntax(line, palette)
    : highlightProse(line, palette)

const highlightExample = (line: string, palette: Palette): string => {
  const comment = /^(?<indent> *)(?<comment>#.*)$/u.exec(line)
  if (comment) {
    return `${comment.groups!.indent}${palette.comment(comment.groups!.comment!)}`
  }

  const command = /^(?<indent> *)\$ (?<command>.*)$/u.exec(line)
  if (command) {
    return `${command.groups!.indent}${palette.punctuation(`$`)} ${highlightCommand(command.groups!.command!, palette)}`
  }

  return highlightProse(line, palette)
}

const highlightCommand = (command: string, palette: Palette): string =>
  command.replaceAll(
    /(?<option>(?<![\w.])--?[a-z][\w-]*)|(?:^|(?<=[|&] ))[\w-]+/gu,
    (match, option?: string) =>
      option ? palette.option(option) : palette.program(match),
  )

/**
 * Styles a flag or argument entry, a list line, a wrapped description, or the
 * prose between them, told apart by their indentation.
 */
const highlightEntry = (line: string, palette: Palette): string => {
  const body = line.slice(INDENT.length)
  if (line.startsWith(INDENT) && /^[-A-Z]/u.test(body)) {
    return `${INDENT}${highlightTermLine(body, palette)}`
  }

  if (/^ {3,}/u.test(line)) {
    return highlightProse(line, palette)
  }

  if (line.startsWith(INDENT)) {
    return line.replaceAll(`,`, palette.punctuation(`,`))
  }

  return highlightProse(line, palette)
}

/** Styles an entry's term and, after the two-space gap, its description. */
const highlightTermLine = (body: string, palette: Palette): string => {
  const gapIndex = body.search(/ {2}/u)
  const term = gapIndex === -1 ? body : body.slice(0, gapIndex)
  const description = gapIndex === -1 ? `` : body.slice(gapIndex)
  return `${highlightSyntax(term, palette)}${highlightProse(description, palette)}`
}

/** Styles a usage or term's program, options, metavars, and punctuation. */
const highlightSyntax = (line: string, palette: Palette): string => {
  const program = /^(?<indent> *)(?<program>[a-z][\w-]*) /u.exec(line)
  const prefix = program
    ? `${program.groups!.indent}${palette.program(program.groups!.program!)} `
    : ``
  return `${prefix}${line
    .slice(program?.[0].length ?? 0)
    .replaceAll(
      /(?<option>(?<![\w.])--?[a-z][\w-]*)|(?<metavar>\b[A-Z][A-Z-]*\b)|[[\]|=,]/gu,
      (match, option?: string, metavar?: string) => {
        if (option) {
          return palette.option(option)
        }
        if (metavar) {
          return palette.metavar(metavar)
        }
        return palette.punctuation(match)
      },
    )}`
}

const highlightProse = (line: string, palette: Palette): string =>
  line.replaceAll(/(?<quoted>"[^"]*")|`[^`]*`/gu, (match, quoted?: string) =>
    quoted ? palette.quoted(quoted) : palette.code(match.slice(1, -1)),
  )

export const highlightErrorPrefix = (
  text: string,
  { colors }: HighlightOptions,
): string => {
  if (!colors) {
    return text
  }
  const { error } = makePalette(makeAnsis({ isTTY: true }))
  return text.replace(/^error:/u, error(`error:`))
}

type Palette = ReturnType<typeof makePalette>

const makePalette = (ansis: Ansis) => {
  const { mutedSage, amberBrown, goldenAmber, richOrange, softRed } =
    kindlingColors
  return {
    label: ansis.hex(goldenAmber).bold,
    option: ansis.hex(softRed),
    metavar: ansis.hex(amberBrown).italic,
    punctuation: ansis.hex(mutedSage),
    comment: ansis.hex(mutedSage).italic,
    program: ansis.bold,
    quoted: ansis.hex(richOrange),
    code: ansis.hex(amberBrown),
    url: ansis.hex(amberBrown).underline,
    error: ansis.hex(softRed).bold,
  }
}
