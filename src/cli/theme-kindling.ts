import type { ThemeInput } from '@shikijs/core'

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
