import { glob, readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import convertSourceMap from 'convert-source-map'
import picomatch from 'picomatch'
import { defaultCategorizeEntries, defaultMatchEntry } from '../index.ts'
import type { ProfileToMdOptions, SourceMap } from '../index.ts'
import {
  fileReferenceId,
  fileReferencePath,
  makeFileReference,
} from '../location.ts'
import type { RegexReplacement } from './cli.ts'

export type BuildOptionsFlags = {
  topN?: number
  baseURL?: string
  sourceMaps: readonly string[]
  match: readonly RegexReplacement[]
  thirdParty: readonly string[]
}

export const buildOptions = async ({
  topN,
  baseURL,
  sourceMaps,
  match,
  thirdParty,
}: BuildOptionsFlags): Promise<ProfileToMdOptions> => ({
  topN,
  baseURL:
    baseURL !== undefined && !URL.canParse(baseURL)
      ? resolve(baseURL)
      : baseURL,
  sourceMaps: await loadSourceMaps(sourceMaps),
  matchEntry: buildMatchEntry(match),
  categorizeEntries: buildCategorizeEntries(thirdParty),
})

const buildMatchEntry = (
  matches: readonly RegexReplacement[],
): ProfileToMdOptions[`matchEntry`] => {
  if (matches.length === 0) {
    return undefined
  }

  return entry => {
    if (!entry.location) {
      return defaultMatchEntry(entry)
    }

    let location =
      defaultMatchEntry(entry)?.location ?? fileReferenceId(entry.location)
    for (const [regex, replacement] of matches) {
      location = location.replace(regex, replacement)
    }
    return { location }
  }
}

const buildCategorizeEntries = (
  thirdPartyPatterns: readonly string[],
): ProfileToMdOptions[`categorizeEntries`] => {
  if (thirdPartyPatterns.length === 0) {
    return undefined
  }

  const isThirdParty = picomatch([...thirdPartyPatterns], { dot: true })
  return (entries, context) => {
    const categories = defaultCategorizeEntries(entries, context)
    return entries.map((entry, index) =>
      entry.location && isThirdParty(fileReferencePath(entry.location))
        ? `third-party`
        : categories[index]!,
    )
  }
}

const loadSourceMaps = async (
  patterns: readonly string[],
): Promise<SourceMap[]> => {
  const paths = (
    await Promise.all(patterns.map(pattern => Array.fromAsync(glob(pattern))))
  ).flat()

  return Promise.all(
    paths.map(async path => {
      const content = await readFile(path, `utf8`)
      const inlineSourceMap = convertSourceMap
        .fromSource(content)
        ?.toObject() as SourceMap | undefined
      if (!inlineSourceMap) {
        return resolveSourceMapSources(JSON.parse(content) as SourceMap, path)
      }

      // Default `file` to the containing file so `normalizeSourceMaps` can
      // associate the map with profile locations referencing this file.
      inlineSourceMap.file ??= pathToFileURL(resolve(path)).href
      return resolveSourceMapSources(inlineSourceMap, path)
    }),
  )
}

/**
 * Pre-resolves relative source paths against the map file's directory so that
 * `source-map-js` returns absolute URLs.
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
      makeFileReference(source)?.type === `absolute`
        ? source
        : new URL(source, pathToFileURL(resolve(dirname(path)))).href,
    ),
  }
}
