import { cli } from './cli.ts'
import { convertToMarkdown, requireFormat } from './convert.ts'
import { reportError } from './error.ts'
import { printHelpTopic } from './help.ts'
import { readInput } from './input.ts'
import { buildOptions } from './options.ts'
import { writeOutput } from './output.ts'

try {
  const {
    input: [filePath],
    flags: {
      help,
      output: outputPath,
      format: profileFormat,
      topN,
      cwd,
      thirdParty,
      sourceMaps,
    },
  } = cli

  if (help) {
    await printHelpTopic(filePath)
  }

  const forcedFormat =
    profileFormat === undefined ? undefined : requireFormat(profileFormat)
  if (!filePath && process.stdin.isTTY) {
    await printHelpTopic(undefined)
  }

  const data = await readInput(filePath)
  const options = await buildOptions({ topN, cwd, thirdParty, sourceMaps })
  const markdown = convertToMarkdown(data, forcedFormat, options)
  await writeOutput(markdown, outputPath)
} catch (error) {
  reportError(error)
}
