import { glob, readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import convertSourceMap from 'convert-source-map'
import type { DeepReadonly } from '../helpers/types.ts'
import {
  defaultCategorizeFunctions,
  defaultMatchEntry,
  defaultShowEntry,
} from '../index.ts'
import type { ProfileToMdOptions, SourceLocation, SourceMap } from '../index.ts'
import {
  makeFileReference,
  sourceReferenceId,
  sourceReferencePathOrName,
} from '../location.ts'
import type { EntryCategory, RegexCategory, RegexReplacement } from './cli.ts'
import { CliError, reasonOf } from './error.ts'

/**
 * Every flag the options are built from, each required so that a flag added to
 * the CLI without being passed here fails to compile.
 */
export type BuildOptionsFlags = {
  topN: number | undefined
  minCategoryShare: number | undefined
  baseURL: string | undefined
  sourceMaps: readonly string[]
  matchName: readonly RegexReplacement[]
  matchLocation: readonly RegexReplacement[]
  category: readonly RegexCategory[]
  hide: readonly RegExp[]
  show: readonly RegExp[]
  hideCategory: readonly EntryCategory[]
  showCategory: readonly EntryCategory[]
}

export const buildOptions = async ({
  topN,
  minCategoryShare,
  baseURL,
  sourceMaps,
  matchName,
  matchLocation,
  category,
  hide,
  show,
  hideCategory,
  showCategory,
}: BuildOptionsFlags): Promise<ProfileToMdOptions> => ({
  topN,
  minCategoryShare,
  // A directory literally named `auto` is still reachable via `./auto`.
  baseURL:
    baseURL !== undefined && baseURL !== `auto` && !URL.canParse(baseURL)
      ? resolve(baseURL)
      : baseURL,
  sourceMaps: await loadSourceMaps(sourceMaps),
  matchEntry: buildMatchEntry(matchName, matchLocation),
  categorizeFunctions: buildCategorizeFunctions(category),
  showEntry: buildShowEntry({ hide, show, hideCategory, showCategory }),
})

const buildMatchEntry = (
  nameRules: readonly RegexReplacement[],
  locationRules: readonly RegexReplacement[],
): ProfileToMdOptions[`matchEntry`] => {
  if (nameRules.length === 0 && locationRules.length === 0) {
    return undefined
  }

  return (entry, context) => {
    const match = defaultMatchEntry(entry, context)
    const name = rewrite(match?.name ?? entry.name, nameRules)
    const location = rewrite(
      match?.location ??
        (entry.location ? sourceReferenceId(entry.location) : undefined),
      locationRules,
    )
    return {
      ...(name === undefined ? {} : { name }),
      ...(location === undefined ? {} : { location }),
    }
  }
}

const rewrite = (
  value: string | undefined,
  rules: readonly RegexReplacement[],
): string | undefined => {
  if (value === undefined) {
    return undefined
  }
  for (const [regex, replacement] of rules) {
    value = value.replace(regex, replacement)
  }
  return value
}

const buildCategorizeFunctions = (
  rules: readonly RegexCategory[],
): ProfileToMdOptions[`categorizeFunctions`] => {
  if (rules.length === 0) {
    return undefined
  }

  return (entries, context) => {
    const categories = defaultCategorizeFunctions(entries, context)
    return entries.map(
      (entry, index) =>
        rules.find(([regex]) => matchesEntry(regex, entry))?.[1] ??
        categories[index]!,
    )
  }
}

const buildShowEntry = ({
  hide,
  show,
  hideCategory,
  showCategory,
}: {
  hide: readonly RegExp[]
  show: readonly RegExp[]
  hideCategory: readonly EntryCategory[]
  showCategory: readonly EntryCategory[]
}): ProfileToMdOptions[`showEntry`] => {
  if (
    hide.length === 0 &&
    show.length === 0 &&
    hideCategory.length === 0 &&
    showCategory.length === 0
  ) {
    return undefined
  }

  const hiddenCategories = new Set<string>(hideCategory)
  const shownCategories = new Set<string>(showCategory)
  return entry =>
    defaultShowEntry(entry) &&
    (show.length === 0 || show.some(regex => matchesEntry(regex, entry))) &&
    (shownCategories.size === 0 || shownCategories.has(entry.category)) &&
    !hide.some(regex => matchesEntry(regex, entry)) &&
    !hiddenCategories.has(entry.category)
}

/**
 * Returns whether the regex matches the entry's name, its location's URL, path,
 * or logical name, or an absolute URL's pathname alone, so a pattern written
 * for a path matches whether or not the reference carries a protocol and host.
 */
const matchesEntry = (
  regex: RegExp,
  {
    name,
    location,
  }: { name?: string; location?: DeepReadonly<SourceLocation> },
): boolean =>
  (name !== undefined && regex.test(name)) ||
  (location !== undefined &&
    (regex.test(sourceReferenceId(location)) ||
      regex.test(sourceReferencePathOrName(location))))

const loadSourceMaps = async (
  patterns: readonly string[],
): Promise<SourceMap[]> => {
  const paths = (
    await Promise.all(patterns.map(pattern => Array.fromAsync(glob(pattern))))
  ).flat()

  return Promise.all(
    paths.map(async path => {
      let content
      try {
        content = await readFile(path, `utf8`)
      } catch (error) {
        throw new CliError(
          `cannot read source map ${path}: ${reasonOf(error)}`,
          1,
          { cause: error },
        )
      }

      try {
        return parseSourceMap(content, path)
      } catch (error) {
        throw new CliError(
          `cannot parse source map ${path}: ${reasonOf(error)}`,
          1,
          { cause: error },
        )
      }
    }),
  )
}

const parseSourceMap = (content: string, path: string): SourceMap => {
  const inlineSourceMap = convertSourceMap.fromSource(content)?.toObject() as
    SourceMap | undefined
  if (!inlineSourceMap) {
    return resolveSourceMapSources(JSON.parse(content) as SourceMap, path)
  }

  // Default `file` to the containing file, so the map matches profile
  // locations that reference that file.
  inlineSourceMap.file ??= pathToFileURL(resolve(path)).href
  return resolveSourceMapSources(inlineSourceMap, path)
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
