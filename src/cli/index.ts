import { diffProfilesAsync, profileToMdAsync } from '../index.ts'
import type { ProfileInput } from '../index.ts'
import { reportError } from './error.ts'
import { printHelpTopic } from './help.ts'
import { highlightMarkdown } from './highlight-markdown.ts'
import { openInputAsBlob } from './input.ts'
import { buildOptions } from './options.ts'
import { checkOutputPath, writeOutput } from './output.ts'
import { parseArgs } from './parse-args.ts'

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
    pager,
    input,
  } = parseArgs()
  const [basePath, currentPath] =
    typeof input === `string` || input === undefined
      ? [input, undefined]
      : input

  if (help !== undefined) {
    await printHelpTopic(typeof help === `string` ? help : undefined, { pager })
  }

  if (basePath === undefined && process.stdin.isTTY) {
    await printHelpTopic(undefined, { pager })
  }

  await checkOutputPath(outputPath)

  const toInput = <Data>(data: Data): ProfileInput<Data> =>
    format || origin ? { data, format, origin } : data
  const optionsPromise = buildOptions({
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
  })
  let markdown
  if (currentPath === undefined) {
    const [data, options] = await Promise.all([
      openInputAsBlob(basePath),
      optionsPromise,
    ])
    markdown = await profileToMdAsync(toInput(data), options)
  } else {
    const [baseData, currentData, options] = await Promise.all([
      openInputAsBlob(basePath),
      openInputAsBlob(currentPath),
      optionsPromise,
    ])
    markdown = await diffProfilesAsync(
      toInput(baseData),
      toInput(currentData),
      options,
    )
  }
  const highlightedMarkdown = await highlightMarkdown(markdown, { outputPath })

  await writeOutput(highlightedMarkdown, outputPath, { pager })
} catch (error) {
  reportError(error)
}
