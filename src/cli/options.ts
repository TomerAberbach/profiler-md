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
import type {
  AggregatedProfileEntry,
  ProfileToMdOptions,
  SourceLocation,
  SourceMap,
} from '../index.ts'
import {
  makeFileReference,
  sourceReferenceId,
  sourceReferencePathOrName,
} from '../location.ts'
import { normalizeLogger } from '../logger.ts'
import type { Logger, LogLevel } from '../logger.ts'
import { formatRegexRule } from './cli.ts'
import type { EntryCategory, RegexCategory, RegexReplacement } from './cli.ts'
import { CliError } from './error.ts'

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
  logger: Logger
  logLevel: LogLevel
  /** Whether a CURRENT profile was passed to diff against. */
  diff: boolean
}

type BuiltOptions = {
  options: ProfileToMdOptions
  /**
   * Warns about each regex flag rule that changed nothing in the output, and
   * each match flag the conversion ignored, so call it once the conversion
   * finishes.
   */
  warnUnmatchedRules: () => void
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
  logger,
  logLevel,
  diff,
}: BuildOptionsFlags): Promise<BuiltOptions> => {
  const normalizedLogger = normalizeLogger(logger, logLevel)
  const matchEntry = buildMatchEntry(
    matchName,
    matchLocation,
    diff,
    normalizedLogger,
  )
  const categorizeFunctions = buildCategorizeFunctions(
    category,
    normalizedLogger,
  )
  const showEntry = buildShowEntry(
    { hide, show, hideCategory, showCategory },
    normalizedLogger,
  )
  return {
    options: {
      topN,
      minCategoryShare,
      // A directory literally named `auto` is still reachable via `./auto`.
      baseURL:
        baseURL !== undefined && baseURL !== `auto` && !URL.canParse(baseURL)
          ? resolve(baseURL)
          : baseURL,
      sourceMaps: await loadSourceMaps(sourceMaps, normalizedLogger),
      matchEntry: matchEntry.option,
      categorizeFunctions: categorizeFunctions.option,
      showEntry: showEntry.option,
      logger,
      logLevel,
    },
    warnUnmatchedRules: () => {
      matchEntry.warnUnmatched()
      categorizeFunctions.warnUnmatched()
      showEntry.warnUnmatched()
    },
  }
}

const loadSourceMaps = async (
  patterns: readonly string[],
  logger: Logger,
): Promise<SourceMap[]> => {
  const paths = (
    await Promise.all(
      patterns.map(async pattern => {
        const matched = await Array.fromAsync(glob(pattern))
        if (matched.length === 0) {
          logger.warn?.(`--source-maps matched no file, got: ${pattern}`)
        }
        return matched
      }),
    )
  ).flat()

  return Promise.all(
    paths.map(async path => {
      let content
      try {
        content = await readFile(path, `utf8`)
      } catch (error) {
        throw new CliError(`cannot read source map ${path}`, 1, {
          cause: error,
        })
      }

      try {
        return parseSourceMap(content, path, logger)
      } catch (error) {
        throw new CliError(`cannot parse source map ${path}`, 1, {
          cause: error,
        })
      }
    }),
  )
}

const parseSourceMap = (
  content: string,
  path: string,
  logger: Logger,
): SourceMap => {
  const inlineSourceMap = convertSourceMap.fromSource(content)?.toObject() as
    SourceMap | undefined
  let sourceMap: SourceMap
  if (inlineSourceMap) {
    // Default `file` to the containing file, so the map matches profile
    // locations that reference that file.
    inlineSourceMap.file ??= pathToFileURL(resolve(path)).href
    sourceMap = resolveSourceMapSources(inlineSourceMap, path)
  } else {
    sourceMap = resolveSourceMapSources(JSON.parse(content) as SourceMap, path)
  }
  logger.debug?.(
    `loaded ${inlineSourceMap ? `inline` : `JSON`} source map from ${path} for generated file ${sourceMap.file ?? `<none>`} with ${sourceMap.sources.length} sources`,
  )
  return sourceMap
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

/**
 * An option built from regex flag rules, with `warnUnmatched` to call once the
 * conversion finishes.
 */
type RuleOption<Option> = {
  option: Option
  /** Warns about each rule that changed nothing in the output. */
  warnUnmatched: () => void
}

/**
 * Builds `matchEntry`, whose `warnUnmatched` warns that the match flags were
 * ignored when there is no diff.
 */
const buildMatchEntry = (
  nameRules: readonly RegexReplacement[],
  locationRules: readonly RegexReplacement[],
  diff: boolean,
  logger: Logger,
): RuleOption<ProfileToMdOptions[`matchEntry`]> => {
  const nameFlagRules = trackFlagRules(
    `--match-name`,
    nameRules,
    formatRegexRule,
    logger,
  )
  const locationFlagRules = trackFlagRules(
    `--match-location`,
    locationRules,
    formatRegexRule,
    logger,
  )
  const warnUnmatched = () => {
    for (const flagRules of [nameFlagRules, locationFlagRules]) {
      if (diff) {
        flagRules.warnUnmatched()
      } else {
        warnIgnoredWithoutDiff(flagRules, logger)
      }
    }
  }
  if (nameRules.length === 0 && locationRules.length === 0) {
    return { option: undefined, warnUnmatched }
  }

  return {
    option: (entry, context) => {
      const match = defaultMatchEntry(entry, context)
      const name = applyReplacements(match?.name ?? entry.name, nameFlagRules)
      const location = applyReplacements(
        match?.location ??
          (entry.location ? sourceReferenceId(entry.location) : undefined),
        locationFlagRules,
      )
      return {
        ...(name === undefined ? {} : { name }),
        ...(location === undefined ? {} : { location }),
      }
    },
    warnUnmatched,
  }
}

const warnIgnoredWithoutDiff = (
  flagRules: FlagRules<RegexReplacement>,
  logger: Logger,
): void => {
  if (flagRules.rules.length > 0) {
    logger.warn?.(
      `${flagRules.flag} ignored because it pairs entries only across a diff\n  hint: pass a CURRENT profile to diff against`,
    )
  }
}

const applyReplacements = (
  value: string | undefined,
  flagRules: FlagRules<RegexReplacement>,
): string | undefined => {
  if (value === undefined) {
    return undefined
  }
  for (const rule of flagRules.rules) {
    const [regex, replacement] = rule
    // `search` ignores the global regex's `lastIndex`, which `test` advances.
    if (flagRules.wouldRecordMatch(rule) && value.search(regex) !== -1) {
      flagRules.recordMatch(rule)
    }
    value = value.replace(regex, replacement)
  }
  return value
}

const buildCategorizeFunctions = (
  rules: readonly RegexCategory[],
  logger: Logger,
): RuleOption<ProfileToMdOptions[`categorizeFunctions`]> => {
  const categoryRules = trackFlagRules(
    `--category`,
    rules,
    formatRegexRule,
    logger,
  )
  const { warnUnmatched } = categoryRules
  if (rules.length === 0) {
    return { option: undefined, warnUnmatched }
  }

  return {
    option: (entries, context) => {
      const categories = defaultCategorizeFunctions(entries, context)
      return entries.map((entry, index) => {
        const rule = rules.find(([regex]) => matchesEntry(regex, entry))
        if (!rule) {
          return categories[index]!
        }
        categoryRules.recordMatch(rule)
        return rule[1]
      })
    },
    warnUnmatched,
  }
}

const buildShowEntry = (
  {
    hide,
    show,
    hideCategory,
    showCategory,
  }: {
    hide: readonly RegExp[]
    show: readonly RegExp[]
    hideCategory: readonly EntryCategory[]
    showCategory: readonly EntryCategory[]
  },
  logger: Logger,
): RuleOption<ProfileToMdOptions[`showEntry`]> => {
  const hideRules = trackFlagRules(`--hide`, hide, formatRegex, logger)
  const showRules = trackFlagRules(`--show`, show, formatRegex, logger)
  const warnUnmatched = () => {
    hideRules.warnUnmatched()
    showRules.warnUnmatched()
  }
  if (
    hide.length === 0 &&
    show.length === 0 &&
    hideCategory.length === 0 &&
    showCategory.length === 0
  ) {
    return { option: undefined, warnUnmatched }
  }

  const hiddenCategories = new Set<string>(hideCategory)
  const shownCategories = new Set<string>(showCategory)
  return {
    option: entry => {
      if (!defaultShowEntry(entry)) {
        return false
      }
      const shown = show.length === 0 || testRules(showRules, entry, false)
      const hidden = testRules(hideRules, entry, !shown)
      return (
        shown &&
        !hidden &&
        (shownCategories.size === 0 || shownCategories.has(entry.category)) &&
        !hiddenCategories.has(entry.category)
      )
    },
    warnUnmatched,
  }
}

/** A flag's rules, and which of them matched during the conversion. */
type FlagRules<Rule> = {
  flag: string
  rules: readonly Rule[]
  /**
   * Returns whether matching the rule would record anything: false once it
   * matched, and always false when warnings are disabled.
   */
  wouldRecordMatch: (rule: Rule) => boolean
  recordMatch: (rule: Rule) => void
  warnUnmatched: () => void
}

/**
 * Tracks which of the flag's rules match, and warns that each rule that
 * matched no entry changed nothing in the output. Tracks nothing when the
 * logger's `warn` is undefined.
 *
 * The warning claims no effect on the output rather than no match in the input,
 * because a formatter tests only the entries it may show.
 */
const trackFlagRules = <Rule>(
  flag: string,
  rules: readonly Rule[],
  format: (rule: Rule) => string,
  logger: Logger,
): FlagRules<Rule> => {
  const { warn } = logger
  if (!warn) {
    return {
      flag,
      rules,
      wouldRecordMatch: () => false,
      recordMatch: () => {},
      warnUnmatched: () => {},
    }
  }

  const matched = new Set<Rule>()
  return {
    flag,
    rules,
    wouldRecordMatch: rule => !matched.has(rule),
    recordMatch: rule => {
      matched.add(rule)
    },
    warnUnmatched: () => {
      for (const rule of rules) {
        if (!matched.has(rule)) {
          warn(`${flag} changed nothing in the output, got: ${format(rule)}`)
        }
      }
    },
  }
}

const formatRegex = (regex: RegExp): string => regex.source

/**
 * Returns whether any rule matches the entry, recording each one that does.
 * Once the result is known, or `resultIgnored` is true, tests only the rules
 * whose match would be recorded. A rule that decides nothing because another
 * rule already did still counts as matched.
 */
const testRules = (
  flagRules: FlagRules<RegExp>,
  entry: DeepReadonly<AggregatedProfileEntry>,
  resultIgnored: boolean,
): boolean => {
  let matched = false
  for (const rule of flagRules.rules) {
    if ((resultIgnored || matched) && !flagRules.wouldRecordMatch(rule)) {
      continue
    }
    if (matchesEntry(rule, entry)) {
      flagRules.recordMatch(rule)
      matched = true
    }
  }
  return matched
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
