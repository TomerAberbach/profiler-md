import { readFile } from 'node:fs/promises'
import { cli, topics } from './cli.ts'
import { formats, languageAliasToPrimary, languages } from './formats.ts'

export const printHelpTopic = async (
  topic: string | undefined,
): Promise<never> => {
  if (topic === undefined) {
    process.stdout.write(cli.help)
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
  process.stdout.write(await readFile(docURL, `utf8`))

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
  if (seeAlso.length > 0) {
    process.stdout.write(`\nSee also: ${seeAlso.join(`, `)}\n`)
  }

  process.exit(0)
}
