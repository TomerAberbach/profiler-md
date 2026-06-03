import { glob, readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import convertSourceMap from 'convert-source-map'
import picomatch from 'picomatch'
import { defaultCategorizeEntry } from '../index.ts'
import type { Format, ProfileToMdOptions, SourceMap } from '../index.ts'
import { fileReferencePath, makeFileReference } from '../location.ts'

export type BuildOptionsFlags = {
  format?: Format
  topN?: number
  baseURL?: string
  thirdParty: readonly string[]
  sourceMaps: readonly string[]
}

export const buildOptions = async ({
  format,
  topN,
  baseURL,
  thirdParty,
  sourceMaps,
}: BuildOptionsFlags): Promise<ProfileToMdOptions> => ({
  format,
  topN,
  baseURL:
    baseURL !== undefined && !URL.canParse(baseURL)
      ? resolve(baseURL)
      : baseURL,
  categorizeEntry: buildCategorizeEntry(thirdParty),
  sourceMaps: await loadSourceMaps(sourceMaps),
})

const buildCategorizeEntry = (
  patterns: readonly string[],
): ProfileToMdOptions[`categorizeEntry`] => {
  if (patterns.length === 0) {
    return undefined
  }

  const isMatch = picomatch([...patterns], { dot: true })
  return entry => {
    if (!entry.location) {
      return defaultCategorizeEntry(entry)
    }

    const path = fileReferencePath(entry.location)
    if (isMatch(path)) {
      return `third-party`
    }

    return defaultCategorizeEntry(entry)
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

      // Default `file` to the containing file so `normalizeSourceMaps` can associate the map with profile
      // locations referencing this file.
      inlineSourceMap.file ??= pathToFileURL(resolve(path)).href
      return resolveSourceMapSources(inlineSourceMap, path)
    }),
  )
}

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
