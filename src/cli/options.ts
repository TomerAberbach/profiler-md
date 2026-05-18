import { glob, readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import convertSourceMap from 'convert-source-map'
import picomatch from 'picomatch'
import {
  defaultCategorizeEntries,
  defaultMatchEntry,
  isExternalImplementationDetailEntry,
  isSyntheticEntry,
} from '../index.ts'
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
  showSynthetic?: boolean
  showExternalImplementation?: boolean
  showPaths: readonly string[]
  hidePaths: readonly string[]
  showNames: readonly RegExp[]
  hideNames: readonly RegExp[]
}

export const buildOptions = async (
  options: BuildOptionsFlags,
): Promise<ProfileToMdOptions> => {
  const { topN, baseURL, sourceMaps, match, thirdParty } = options
  return {
    topN,
    // A directory literally named `auto` is still reachable via `./auto`.
    baseURL:
      baseURL !== undefined && baseURL !== `auto` && !URL.canParse(baseURL)
        ? resolve(baseURL)
        : baseURL,
    sourceMaps: await loadSourceMaps(sourceMaps),
    matchEntry: buildMatchEntry(match),
    categorizeEntries: buildCategorizeEntries(thirdParty),
    showEntry: buildShowEntry(options),
  }
}

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

  const isThirdParty = pathsMatcher(thirdPartyPatterns)!
  return (entries, context) => {
    const categories = defaultCategorizeEntries(entries, context)
    return entries.map((entry, index) =>
      entry.location && isThirdParty(fileReferencePath(entry.location))
        ? `third-party`
        : categories[index]!,
    )
  }
}

const buildShowEntry = ({
  showSynthetic,
  showExternalImplementation,
  showPaths,
  hidePaths,
  showNames,
  hideNames,
}: BuildOptionsFlags): ProfileToMdOptions[`showEntry`] => {
  if (
    !showSynthetic &&
    !showExternalImplementation &&
    showPaths.length === 0 &&
    hidePaths.length === 0 &&
    showNames.length === 0 &&
    hideNames.length === 0
  ) {
    return undefined
  }

  const matchesHiddenPath = pathsMatcher(hidePaths)
  const matchesShownPath = pathsMatcher(showPaths)

  return entry => {
    const { name, location } = entry
    const pathname = location && fileReferencePath(location)

    // 1. Hide patterns always win
    if (pathname !== undefined && matchesHiddenPath?.(pathname)) {
      return false
    }
    if (name !== undefined && hideNames.some(regex => regex.test(name))) {
      return false
    }

    // 2. Show patterns restrict output to matching entries, overriding default
    //    hiding; the toggles rescue their whole category alongside them
    if (matchesShownPath !== null || showNames.length > 0) {
      return (
        (pathname !== undefined && (matchesShownPath?.(pathname) ?? false)) ||
        (name !== undefined && showNames.some(regex => regex.test(name))) ||
        (showSynthetic === true && isSyntheticEntry(entry)) ||
        (showExternalImplementation === true &&
          isExternalImplementationDetailEntry(entry))
      )
    }

    // 3. Default hiding, lifted by toggles
    if (!showSynthetic && isSyntheticEntry(entry)) {
      return false
    }
    if (
      !showExternalImplementation &&
      isExternalImplementationDetailEntry(entry)
    ) {
      return false
    }

    return true
  }
}

/**
 * Matches paths gitignore-style: a glob without a leading `/` or `**` matches
 * at any depth, and a glob matching a directory matches everything under it.
 */
const pathsMatcher = (
  globs: readonly string[],
): ((path: string) => boolean) | null => {
  if (globs.length === 0) {
    return null
  }

  return picomatch(
    globs.flatMap(glob =>
      glob.startsWith(`/`) || glob.startsWith(`**`)
        ? [glob, `${glob}/**`]
        : [glob, `${glob}/**`, `**/${glob}`, `**/${glob}/**`],
    ),
    { dot: true },
  )
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
