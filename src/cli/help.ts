import { readFile } from 'node:fs/promises'
import { cli, topics } from './cli.ts'
import { formats, languageAliasToPrimary, languages } from './formats.ts'
import { highlightMarkdown } from './highlight.ts'
import { writeOutput } from './output.ts'

export type PrintHelpTopicOptions = {
  pager: boolean
  color: boolean | undefined
}

export const printHelpTopic = async (
  topic: string | undefined,
  { pager, color }: PrintHelpTopicOptions,
): Promise<never> => {
  if (topic === undefined) {
    await writeOutput(cli.help, `-`, { pager })
    process.exit(0)
  }

  const language = languages.get(languageAliasToPrimary.get(topic) ?? topic)
  const format = formats.get(topic)
  if (!language && !format) {
    process.stderr.write(
      `error: unknown topic "${topic}"\nAvailable topics: ${topics.join(`, `)}\n`,
    )
    process.exit(2)
  }

  const docURL = new URL(
    `../../docs/${format ? `formats` : `languages`}/${topic}.md`,
    import.meta.url,
  )
  const doc = await readFile(docURL, `utf8`)

  const seeAlso = format
    ? [...languages.entries()].flatMap(([id, language]) => {
        if (!language.formats.includes(topic)) {
          return []
        }
        return [id, ...(language.aliases?.map(alias => alias.id) ?? [])]
      })
    : language
      ? language.formats
      : []
  const seeAlsoSuffix =
    seeAlso.length > 0 ? `\nSee also: ${seeAlso.join(`, `)}\n` : ``

  const outputPath = `-`
  const markdown = await highlightMarkdown(`${doc}${seeAlsoSuffix}`, {
    outputPath,
    color,
  })
  await writeOutput(markdown, outputPath, { pager })
  process.exit(0)
}
