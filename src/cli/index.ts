import { diffProfilesAsync, profileToMdAsync } from '../index.ts'
import type { ProfileInput } from '../index.ts'
import { CliError, reportError } from './error.ts'
import { printBriefHelp, printHelpTopic } from './help.ts'
import { highlightMarkdown } from './highlight-markdown.ts'
import { inputName, openInputAsBlob } from './input.ts'
import {
  defaultLogLevel,
  makeCliLogger,
  warnInvalidLogLevelEnv,
} from './log.ts'
import { buildOptions } from './options.ts'
import { checkOutputPath, isTTYOutput, writeOutput } from './output.ts'
import { parseArgs } from './parse-args.ts'

const logger = makeCliLogger()
let logLevel = defaultLogLevel()
try {
  const {
    help,
    output: outputPath,
    format,
    origin,
    topN,
    minCategoryShare,
    baseURL,
    matchName,
    matchLocation,
    category,
    hide,
    show,
    hideCategory,
    showCategory,
    sourceMaps,
    logLevel: logLevelFlag,
    pager,
    input,
  } = parseArgs()
  logLevel = logLevelFlag
  warnInvalidLogLevelEnv(logger, logLevel)
  const [basePath, currentPath] =
    typeof input === `string` || input === undefined
      ? [input, undefined]
      : input

  if (help !== undefined) {
    await printHelpTopic(typeof help === `string` ? help : undefined, { pager })
  }

  // A redirected stdout or an output file means a conversion was intended, so
  // the missing input is an error instead of help written where the Markdown
  // was expected.
  if (basePath === undefined && process.stdin.isTTY) {
    if (isTTYOutput(outputPath)) {
      printBriefHelp()
    }
    throw new CliError(
      `no input given: pass a FILE or pipe a profile to stdin`,
      2,
    )
  }

  await checkOutputPath(outputPath)

  const toInput = <Data>(
    data: Data,
    filePath: string | undefined,
  ): ProfileInput<Data> => ({ data, format, origin, name: inputName(filePath) })
  const builtOptionsPromise = buildOptions({
    topN,
    minCategoryShare,
    baseURL,
    matchName,
    matchLocation,
    category,
    hide,
    show,
    hideCategory,
    showCategory,
    sourceMaps,
    logger,
    logLevel,
    diff: currentPath !== undefined,
  })
  let markdown
  if (currentPath === undefined) {
    const [data, { options }] = await Promise.all([
      openInputAsBlob(basePath),
      builtOptionsPromise,
    ])
    markdown = await profileToMdAsync(toInput(data, basePath), options)
  } else {
    const [baseData, currentData, { options }] = await Promise.all([
      openInputAsBlob(basePath),
      openInputAsBlob(currentPath),
      builtOptionsPromise,
    ])
    markdown = await diffProfilesAsync(
      toInput(baseData, basePath),
      toInput(currentData, currentPath),
      options,
    )
  }
  const { warnUnmatchedRules } = await builtOptionsPromise
  warnUnmatchedRules()
  const highlightedMarkdown = await highlightMarkdown(markdown, { outputPath })

  // Logs and Markdown share the terminal, so a line keeps the heading apart.
  if (isTTYOutput(outputPath)) {
    logger.separate()
  }
  await writeOutput(highlightedMarkdown, outputPath, { pager })
} catch (error) {
  reportError(error, { logger, logLevel })
}
