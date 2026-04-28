import { createWriteStream } from 'node:fs'
import { glob, readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import type { Writable } from 'node:stream'
import { pathToFileURL } from 'node:url'
import { promisify } from 'node:util'
import { brotliDecompress, gunzip } from 'node:zlib'
import convertSourceMap from 'convert-source-map'
import meow from 'meow'
import picomatch from 'picomatch'
import { parseJson } from '../helpers/json.ts'
import { defaultIsThirdPartyEntry } from '../index.ts'
import type { ProfileToMdOptions, SourceMap } from '../index.ts'
import { makeFileReference } from '../location.ts'
import type { BinaryFormat, JsonFormat } from './formats.ts'
import { formats, languageAliasToPrimary, languages } from './formats.ts'

const jsonFormats = [...formats.entries()].filter(
  (entry): entry is [string, JsonFormat<any>] => entry[1].kind === `json`,
)
const binaryFormats = [...formats.entries()].filter(
  (entry): entry is [string, BinaryFormat<any>] => entry[1].kind === `binary`,
)

const formatTopics = [...formats.keys()]
const languageTopics = [...languages.entries()].flatMap(([id, { aliases }]) => [
  id,
  ...(aliases?.map(alias => alias.id) ?? []),
])
const topics = [...formatTopics, ...languageTopics]

const cli = meow(
  `
  Usage: profiler-md [options] [file]
         profiler-md --help [format|language]

  Options:
    -f, --format <format> Profile format, auto-detected from content if omitted
    -o, --output <file>   Output file (default: - for stdout)
    --top-n <n>           Number of top entries to show (default: 20)
    --cwd <path>          Working directory for relative file paths in output
    --third-party <glob>  Mark URLs matching this glob as third-party
                          (repeatable; default: node_modules)
    --source-maps <glob>  Apply source maps matching this glob to profile
                          locations; files may be source map JSON or contain
                          inline source map comments (repeatable)
    --help [format|language] Show this help message or topic docs

  Formats: ${formatTopics.join(`, `)}
  Languages: ${languageTopics.join(`, `)}
`,
  {
    importMeta: import.meta,
    autoHelp: false,
    allowUnknownFlags: false,
    flags: {
      help: { type: `boolean`, shortFlag: `h` },
      format: { type: `string`, shortFlag: `f` },
      output: { type: `string`, shortFlag: `o`, default: `-` },
      topN: { type: `number` },
      cwd: { type: `string` },
      thirdParty: { type: `string`, isMultiple: true, default: [] as string[] },
      sourceMaps: { type: `string`, isMultiple: true, default: [] as string[] },
    },
  },
)

const gunzipAsync = promisify(gunzip)
const brotliDecompressAsync = promisify(brotliDecompress)

/**
 * Pre-resolves relative source paths against the map file's directory so that `source-map-js` returns
 * absolute URLs.
 */
const resolveSourceMapSources = (
  sourceMap: SourceMap,
  path: string,
): SourceMap => {
  if (sourceMap.sourceRoot) {
    return sourceMap
  }

  return {
    ...sourceMap,
    sources: sourceMap.sources.map(source =>
      makeFileReference(source).type === `absolute`
        ? source
        : new URL(source, pathToFileURL(resolve(dirname(path)))).href,
    ),
  }
}

const decompressData = async (
  data: Uint8Array,
  filePath?: string,
): Promise<Uint8Array> => {
  if (filePath?.endsWith(`.br`)) {
    return brotliDecompressAsync(data)
  }
  if (data[0] === 0x1f && data[1] === 0x8b) {
    return gunzipAsync(data)
  }
  return data
}

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
      sourceMaps: sourceMapPatterns,
    },
  } = cli

  if (help) {
    if (filePath === undefined) {
      process.stdout.write(cli.help)
      process.exit(0)
    }

    const language = languages.get(
      languageAliasToPrimary.get(filePath) ?? filePath,
    )
    const format = formats.get(filePath)
    if (!language && !format) {
      process.stderr.write(
        `error: unknown topic "${filePath}"\nAvailable topics: ${topics.join(`, `)}\n`,
      )
      process.exit(2)
    }

    const docURL = new URL(
      `../../docs/${format ? `formats` : `languages`}/${filePath}.md`,
      import.meta.url,
    )
    process.stdout.write(await readFile(docURL, `utf8`))

    const seeAlso = format
      ? [...languages.entries()].flatMap(([id, language]) => {
          if (!language.formats.includes(filePath)) {
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

  const forcedFormat =
    profileFormat === undefined ? undefined : formats.get(profileFormat)
  if (profileFormat !== undefined && !forcedFormat) {
    process.stderr.write(
      `error: unknown format "${profileFormat}"\nRun with --help to see supported formats.\n`,
    )
    process.exit(2)
  } else if (!filePath && process.stdin.isTTY) {
    process.stdout.write(cli.help)
    process.exit(0)
  }

  let data: Uint8Array
  if (filePath) {
    try {
      data = await readFile(filePath)
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      process.stderr.write(`error: ${message}\n`)
      process.exit(1)
    }
  } else {
    data = Buffer.concat(await Array.fromAsync(process.stdin))
  }

  try {
    data = await decompressData(data, filePath)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    process.stderr.write(`error: failed to decompress input: ${message}\n`)
    process.exit(1)
  }

  const thirdPartyMatchers = thirdParty.map(pattern =>
    picomatch(pattern, { dot: true }),
  )
  const isThirdPartyEntry: ProfileToMdOptions[`isThirdPartyEntry`] =
    thirdPartyMatchers.length > 0
      ? entry =>
          defaultIsThirdPartyEntry(entry) ||
          (!!entry.location &&
            thirdPartyMatchers.some(match =>
              match(entry.location!.url.pathname),
            ))
      : undefined

  const sourceMapPaths = (
    await Promise.all(
      sourceMapPatterns.map(pattern => Array.fromAsync(glob(pattern))),
    )
  ).flat()
  const sourceMaps = await Promise.all(
    sourceMapPaths.map(async path => {
      const content = await readFile(path, `utf8`)
      const inlineSourceMap = convertSourceMap
        .fromSource(content)
        ?.toObject() as SourceMap | undefined
      if (!inlineSourceMap) {
        return resolveSourceMapSources(JSON.parse(content) as SourceMap, path)
      }

      // Default `file` to the containing file so `normalizeSourceMaps` can associate the map with profile
      // locations referencing this file.
      inlineSourceMap.file ??= pathToFileURL(resolve(path)).href
      return resolveSourceMapSources(inlineSourceMap, path)
    }),
  )

  const options: ProfileToMdOptions = {
    topN,
    cwd,
    isThirdPartyEntry,
    sourceMaps,
  }

  let markdown: string | undefined
  if (forcedFormat) {
    markdown = forcedFormat.toMd(data, options)
  } else {
    let json: unknown
    try {
      json = parseJson(data)
    } catch {}
    if (json === undefined) {
      for (const [, format] of binaryFormats) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const parsed = format.detect(data)
        if (parsed !== undefined) {
          markdown = format.toMdInternal(parsed, options)
          break
        }
      }
    } else {
      for (const [, format] of jsonFormats) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const parsed = format.detect(json)
        if (parsed !== undefined) {
          markdown = format.toMdInternal(parsed, options)
          break
        }
      }
    }

    if (markdown === undefined) {
      process.stderr.write(
        `error: could not detect profile format from content\nUse --format to specify the format, or run with --help to see supported formats.\n`,
      )
      process.exit(2)
    }
  }

  let output: Writable
  if (outputPath === `-`) {
    output = process.stdout
  } else {
    output = createWriteStream(outputPath)
    await new Promise<void>((resolve, reject) => {
      output.once(`open`, () => resolve()).once(`error`, reject)
    })
  }

  await new Promise<void>((resolve, reject) => {
    output.write(markdown, error => {
      if (error) {
        reject(error)
      } else if (output === process.stdout) {
        resolve()
      } else {
        output.end(resolve)
      }
    })
  })
} catch (error) {
  if (error instanceof Error) {
    process.stderr.write(`error: ${error.message}\n`)
    if (error.stack) {
      process.stderr.write(`${error.stack}\n`)
    }
  } else {
    process.stderr.write(`error: ${String(error)}\n`)
  }
  process.exit(1)
}
