import { glob, readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import convertSourceMap from 'convert-source-map'
import picomatch from 'picomatch'
import { defaultIsThirdPartyEntry } from '../index.ts'
import type { ProfileToMdOptions, SourceMap } from '../index.ts'
import { makeFileReference } from '../location.ts'

export type BuildOptionsFlags = {
  topN?: number
  cwd?: string
  thirdParty: readonly string[]
  sourceMaps: readonly string[]
}

export const buildOptions = async ({
  topN,
  cwd,
  thirdParty,
  sourceMaps,
}: BuildOptionsFlags): Promise<ProfileToMdOptions> => ({
  topN,
  cwd,
  isThirdPartyEntry: buildIsThirdPartyEntry(thirdParty),
  sourceMaps: await loadSourceMaps(sourceMaps),
})

const buildIsThirdPartyEntry = (
  patterns: readonly string[],
): ProfileToMdOptions[`isThirdPartyEntry`] => {
  if (patterns.length === 0) {
    return undefined
  }

  const matchers = patterns.map(pattern => picomatch(pattern, { dot: true }))
  return entry =>
    defaultIsThirdPartyEntry(entry) ||
    (!!entry.location &&
      matchers.some(match => match(entry.location!.url.pathname)))
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
