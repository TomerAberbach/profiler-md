import { parseArgs } from './cli.ts'
import { convertToMarkdown } from './convert.ts'
import { reportError } from './error.ts'
import { formats } from './formats.ts'
import { printHelpTopic } from './help.ts'
import { highlightMarkdown } from './highlight.ts'
import { openInputAsBlob } from './input.ts'
import { buildOptions } from './options.ts'
import { writeOutput } from './output.ts'

try {
  const {
    help,
    output: outputPath,
    format: profileFormat,
    topN,
    cwd,
    thirdParty,
    sourceMaps,
    pager,
    color,
    file: filePath,
  } = parseArgs()

  if (help !== undefined) {
    await printHelpTopic(typeof help === `string` ? help : undefined, {
      pager,
      color,
    })
  }

  const forcedFormat =
    profileFormat === undefined ? undefined : formats.get(profileFormat)
  if (!filePath && process.stdin.isTTY) {
    await printHelpTopic(undefined, { pager, color })
  }

  const [data, options] = await Promise.all([
    openInputAsBlob(filePath),
    buildOptions({ topN, cwd, thirdParty, sourceMaps }),
  ])
  const markdown = await convertToMarkdown(data, forcedFormat, options)
  const highlightedMarkdown = await highlightMarkdown(markdown, {
    outputPath,
    color,
  })

  await writeOutput(highlightedMarkdown, outputPath, { pager })
} catch (error) {
  reportError(error)
}
