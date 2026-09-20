import type {
  TerminalFormatter,
  TerminalStyle,
  TerminalTheme,
} from '@optique/core/terminal'
import type { ThemeInput } from '@shikijs/core'
import { Ansis } from 'ansis'
import { rgb } from '../helpers/color.ts'
import type { RgbTuple } from '../helpers/color.ts'

const darkSlate = `#2d353b`
const mutedSage = `#859289`
const warmSand = `#d3c6aa`

const dimAmber = `#7a6535`
const amberBrown = `#cb9d68`
const goldenAmber = `#dbbc7f`

const richOrange = `#d98c5a`
const warmOrange = `#e69875`

const terracotta = `#c4907a`
const softRed = `#ca6e63`

/** A terminal style restricted to what both Optique and Ansis render. */
type KindlingStyle = {
  foreground?: RgbTuple
  bold?: boolean
  italic?: boolean
  underline?: boolean
}

const label: KindlingStyle = { foreground: rgb(goldenAmber), bold: true }
const option: KindlingStyle = { foreground: rgb(softRed) }
const metavar: KindlingStyle = { foreground: rgb(amberBrown), italic: true }
const punctuation: KindlingStyle = { foreground: rgb(mutedSage) }
const value: KindlingStyle = { foreground: rgb(richOrange) }
const commandLine: KindlingStyle = { foreground: rgb(amberBrown) }
const url: KindlingStyle = { foreground: rgb(amberBrown), underline: true }
const comment: KindlingStyle = { foreground: rgb(mutedSage), italic: true }
const program: KindlingStyle = { bold: true }
const logLabels = {
  error: { foreground: rgb(softRed), bold: true },
  warning: { foreground: rgb(goldenAmber), bold: true },
  info: { foreground: rgb(amberBrown), bold: true },
  debug: { foreground: rgb(mutedSage), bold: true },
} satisfies Record<string, KindlingStyle>

const styled =
  (style: TerminalStyle): TerminalFormatter =>
  (_, { text }) => ({
    type: `style`,
    style,
    children: [{ type: `text`, text }],
  })

/**
 * Optique's help, usage, and message roles in the Kindling colors. The
 * program name keeps Optique's default, bold.
 */
export const kindlingTerminalTheme: TerminalTheme = {
  label: styled(label),
  optionName: styled(option),
  metavar: styled(metavar),
  syntaxPunctuation: styled(punctuation),
  value: styled(value),
  commandLine: styled(commandLine),
  url: styled(url),
}

type Styler = (text: string) => string

/** The Kindling colors for the CLI's own help lines and log labels. */
export type KindlingPalette = {
  label: Styler
  punctuation: Styler
  comment: Styler
  url: Styler
  /** A shell command with its programs bold and its options colored. */
  command: Styler
  log: {
    error: Styler
    warning: Styler
    info: Styler
    debug: Styler
  }
}

/** The palette, styling nothing when `colors` is false. */
export const makeKindlingPalette = ({
  colors,
}: {
  colors: boolean
}): KindlingPalette => {
  const ansis = new Ansis(colors ? 3 : 0)
  const styleOption = styler(ansis, option)
  const styleProgram = styler(ansis, program)
  return {
    label: styler(ansis, label),
    punctuation: styler(ansis, punctuation),
    comment: styler(ansis, comment),
    url: styler(ansis, url),
    command: command =>
      command.replaceAll(
        /(?<option>(?<![\w.])--?[a-z][\w-]*)|(?:^|(?<=[|&] ))[\w-]+/gu,
        (match, option?: string) =>
          option ? styleOption(option) : styleProgram(match),
      ),
    log: {
      error: styler(ansis, logLabels.error),
      warning: styler(ansis, logLabels.warning),
      info: styler(ansis, logLabels.info),
      debug: styler(ansis, logLabels.debug),
    },
  }
}

const styler = (
  ansis: Ansis,
  { foreground, bold, italic, underline }: KindlingStyle,
): Ansis => {
  let styled = foreground ? ansis.rgb(...foreground) : ansis
  if (bold) {
    styled = styled.bold
  }
  if (italic) {
    styled = styled.italic
  }
  if (underline) {
    styled = styled.underline
  }
  return styled
}

const kindlingTheme: ThemeInput = {
  name: `kindling`,
  displayName: `Kindling`,
  type: `dark`,
  fg: warmSand,
  bg: darkSlate,
  colors: {
    'editor.foreground': warmSand,
    'editor.background': darkSlate,
  },
  settings: [
    {
      scope: `punctuation.definition.heading.markdown`,
      settings: { foreground: dimAmber },
    },
    {
      scope: [
        `heading.1.markdown`,
        `heading.2.markdown`,
        `heading.3.markdown`,
        `heading.4.markdown`,
        `heading.5.markdown`,
        `heading.6.markdown`,
      ],
      settings: { foreground: goldenAmber, fontStyle: `bold` },
    },
    {
      scope: `markup.bold.markdown`,
      settings: { foreground: warmSand, fontStyle: `bold` },
    },
    {
      scope: `markup.italic.markdown`,
      settings: { foreground: warmSand, fontStyle: `italic` },
    },
    {
      scope: [
        `markup.inline.raw.string.markdown`,
        `markup.fenced_code.block.markdown`,
        `string.other.link.description.title.markdown`,
      ],
      settings: { foreground: amberBrown },
    },
    {
      scope: `punctuation.definition.raw.markdown`,
      settings: { foreground: goldenAmber },
    },
    {
      scope: [
        `punctuation.definition.bold.markdown`,
        `punctuation.definition.italic.markdown`,
        `punctuation.definition.markdown`,
        `markup.quote.markdown`,
        `punctuation.definition.quote.begin.markdown`,
        `punctuation.definition.list.begin.markdown`,
        `punctuation.definition.table.markdown`,
        `punctuation.definition.link.markdown`,
      ],
      settings: { foreground: mutedSage },
    },
    {
      scope: [
        `markup.list.unnumbered.markdown`,
        `markup.list.numbered.markdown`,
        `markup.table.markdown`,
      ],
      settings: { foreground: warmSand },
    },
    {
      scope: `meta.separator.markdown`,
      settings: { foreground: mutedSage, fontStyle: `bold` },
    },
    {
      scope: `markup.underline.link.markdown`,
      settings: { foreground: amberBrown, fontStyle: `underline` },
    },
    // Code block syntax
    {
      scope: `comment`,
      settings: { foreground: mutedSage, fontStyle: `italic` },
    },
    {
      scope: [
        `keyword`,
        `keyword.control`,
        `keyword.other`,
        `storage.type`,
        `storage.modifier`,
      ],
      settings: { foreground: goldenAmber },
    },
    {
      scope: [`string`, `string.template`],
      settings: { foreground: richOrange },
    },
    {
      scope: [`constant.numeric`, `constant.language`, `constant.character`],
      settings: { foreground: warmOrange },
    },
    {
      scope: [
        `entity.name.function`,
        `support.function`,
        `meta.function-call entity.name.function`,
      ],
      settings: { foreground: softRed },
    },
    {
      scope: [
        `entity.name.type`,
        `entity.name.class`,
        `support.type`,
        `support.class`,
        `entity.other.inherited-class`,
        `support.variable.property`,
      ],
      settings: { foreground: warmSand },
    },
    {
      scope: `variable.parameter`,
      settings: { foreground: warmSand, fontStyle: `italic` },
    },
    {
      scope: `entity.other.attribute-name`,
      settings: { foreground: amberBrown },
    },
    {
      scope: [`keyword.operator`, `punctuation.accessor`],
      settings: { foreground: mutedSage },
    },
    {
      scope: [`meta.tag`, `entity.name.tag`],
      settings: { foreground: terracotta },
    },
  ],
}

export default kindlingTheme
