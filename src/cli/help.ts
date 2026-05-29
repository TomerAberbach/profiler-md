import { readFile } from 'node:fs/promises'
import { formatConverters } from '../formats/index.ts'
import type { Format, FormatConverter } from '../formats/index.ts'
import { getHelpText, topics } from './cli.ts'
import { highlightMarkdown } from './highlight.ts'
import { languageAliasToPrimary, languages } from './languages.ts'
import { writeOutput } from './output.ts'

export type PrintHelpTopicOptions = {
  pager: boolean
}

export const printHelpTopic = async (
  topic: string | undefined,
  { pager }: PrintHelpTopicOptions,
): Promise<never> => {
  if (topic === undefined) {
    await writeOutput(getHelpText(), `-`, { pager })
    process.exit(0)
  }

  const language = languages.get(languageAliasToPrimary.get(topic) ?? topic)
  const formatConverter = (formatConverters as Record<string, FormatConverter>)[
    topic
  ]
  if (!language && !formatConverter) {
    process.stderr.write(
      `error: unknown topic "${topic}"\nAvailable topics: ${topics.join(`, `)}\n`,
    )
    process.exit(2)
  }

  const docURL = new URL(
    `../../docs/${formatConverter ? `formats` : `languages`}/${topic}.md`,
    import.meta.url,
  )
  const doc = await readFile(docURL, `utf8`)

  const seeAlso = formatConverter
    ? [...languages.entries()].flatMap(([id, language]) => {
        if (!language.formats.includes(topic as Format)) {
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
  })
  await writeOutput(markdown, outputPath, { pager })
  process.exit(0)
}
