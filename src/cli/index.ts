import { profileToMdAsync } from '../index.ts'
import { parseArgs } from './cli.ts'
import { reportError } from './error.ts'
import { printHelpTopic } from './help.ts'
import { highlightMarkdown } from './highlight.ts'
import { openInputAsBlob } from './input.ts'
import { buildOptions } from './options.ts'
import { writeOutput } from './output.ts'

try {
  const {
    help,
    output: outputPath,
    format,
    topN,
    baseURL,
    thirdParty,
    sourceMaps,
    pager,
    file: filePath,
  } = parseArgs()

  if (help !== undefined) {
    await printHelpTopic(typeof help === `string` ? help : undefined, { pager })
  }

  if (!filePath && process.stdin.isTTY) {
    await printHelpTopic(undefined, { pager })
  }

  const [data, options] = await Promise.all([
    openInputAsBlob(filePath),
    buildOptions({ topN, baseURL, thirdParty, sourceMaps }),
  ])
  const markdown = await profileToMdAsync(
    format ? { data, format } : data,
    options,
  )
  const highlightedMarkdown = await highlightMarkdown(markdown, { outputPath })

  await writeOutput(highlightedMarkdown, outputPath, { pager })
} catch (error) {
  reportError(error)
}
