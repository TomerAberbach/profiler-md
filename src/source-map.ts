import { SourceMapConsumer } from 'source-map-js'
import type { MappedPosition, RawSourceMap as SourceMap } from 'source-map-js'
import { ProfilerMdError, reasonOf } from './error.ts'
import { formatCount } from './helpers/format.ts'
import { makeFileReference, sourceReferenceId } from './location.ts'
import type { FileReference, SourceLocation } from './location.ts'
import type { Logger } from './logger.ts'
import type { FormattingProfileToMdOptions } from './options.ts'

type NormalizedSourceMap = {
  consumer: SourceMapConsumer
  fileReference: FileReference
}

/** The caller's source maps, each keyed by the generated file it maps. */
export type NormalizedSourceMaps = readonly NormalizedSourceMap[]

type GeneratedFileOutcome = UnmappedGeneratedFile | MappedGeneratedFile

/** A generated file no source map matched. */
type UnmappedGeneratedFile = { type: `unmapped` }

/** A generated file a source map matched, and what the map did to its locations. */
type MappedGeneratedFile = {
  type: `mapped`
  sourceMap: NormalizedSourceMap
  /** `line:column` positions the source map had no mapping for. */
  unmappedPositions: Set<string>
  /** Whether the source map mapped a location to a relative source path. */
  relativeSource: boolean
}

const UNMAPPED_GENERATED_FILE: UnmappedGeneratedFile = { type: `unmapped` }

/**
 * Applies the caller's source maps to one conversion's locations, and records
 * each generated file's outcome for {@link SourceMapResolver.report}.
 */
export class SourceMapResolver {
  readonly #sourceMaps: NormalizedSourceMaps
  readonly #logger: Logger
  readonly #generatedFiles = new Map<string, GeneratedFileOutcome>()

  public constructor(sourceMaps: NormalizedSourceMaps, logger: Logger) {
    this.#sourceMaps = sourceMaps
    this.#logger = logger
  }

  /**
   * Records {@link location}'s generated file, so {@link report} counts it
   * whether or not formatting resolves a location in it.
   */
  public addGeneratedFile(location: SourceLocation): void {
    if (this.#sourceMaps.length > 0 && location.type === `absolute`) {
      this.#outcomeFor(location.url)
    }
  }

  /**
   * Applies the matching source map, if any, to {@link location}.
   *
   * A mapped source that is a relative path resolves against the resolved
   * `baseURL`, including one inferred by `baseURL: 'auto'`. The resolved source
   * may then be outside the inferred directory and format with `../`
   * segments. Without a base URL the location stays unmapped.
   */
  public resolve(
    location: SourceLocation,
    baseURL: URL | undefined,
  ): SourceLocation {
    if (this.#sourceMaps.length === 0 || location.type !== `absolute`) {
      // A source map never applies to a relative path, whose target is
      // unknown, or to a logical location, which is not a file.
      return location
    }

    const outcome = this.#outcomeFor(location.url)
    if (outcome.type === `unmapped`) {
      return location
    }

    const mappedPosition = originalPositionOf(
      outcome.sourceMap.consumer,
      location,
    )
    if (!mappedPosition) {
      return this.#unmapped(outcome, location)
    }

    const mappedFileReference = makeSourceMapFileReference(
      mappedPosition.source,
    )
    if (!mappedFileReference) {
      return this.#unmapped(outcome, location)
    }

    if (mappedFileReference.type === `absolute`) {
      return mappedLocation(mappedFileReference.url, mappedPosition)
    }

    outcome.relativeSource = true
    return baseURL
      ? mappedLocation(
          new URL(mappedFileReference.path, baseURL),
          mappedPosition,
        )
      : location
  }

  #outcomeFor(url: URL): GeneratedFileOutcome {
    let outcome = this.#generatedFiles.get(url.href)
    if (!outcome) {
      const sourceMap = this.#findSourceMap(url)
      outcome = sourceMap
        ? {
            type: `mapped`,
            sourceMap,
            unmappedPositions: new Set(),
            relativeSource: false,
          }
        : UNMAPPED_GENERATED_FILE
      this.#generatedFiles.set(url.href, outcome)
    }
    return outcome
  }

  #findSourceMap(url: URL): NormalizedSourceMap | undefined {
    return (
      this.#sourceMaps.find(
        sourceMap =>
          sourceMap.fileReference.type === `absolute` &&
          sourceMap.fileReference.url.href === url.href,
      ) ??
      this.#sourceMaps.find(
        sourceMap =>
          sourceMap.fileReference.type === `relative` &&
          url.pathname.endsWith(`/${sourceMap.fileReference.path}`),
      )
    )
  }

  #unmapped(
    outcome: MappedGeneratedFile,
    location: SourceLocation & { type: `absolute` },
  ): SourceLocation {
    if (this.#logger.debug) {
      outcome.unmappedPositions.add(
        `${location.line ?? 1}:${location.column ?? 1}`,
      )
    }
    return location
  }

  /**
   * Logs what the source maps did across the generated files recorded so far:
   * a summary of the generated files at `info`, each supplied map that matched
   * no generated file at `warn`, and each generated file's outcome at `debug`.
   *
   * {@link baseURL} is the base URL formatting resolved relative sources
   * against, so the report states which relative sources stayed unmapped.
   */
  public report(baseURL: URL | undefined): void {
    const logger = this.#logger
    if (this.#sourceMaps.length === 0) {
      return
    }

    const mappedFiles = this.#mappedFiles()

    logger.info?.(
      `source maps: ${mappedFiles.length} of ${this.#generatedFiles.size} generated files have a source map`,
    )

    if (logger.warn) {
      const matched = new Set(mappedFiles.map(({ sourceMap }) => sourceMap))
      for (const sourceMap of this.#sourceMaps) {
        if (!matched.has(sourceMap)) {
          logger.warn(
            `source map for ${sourceReferenceId(sourceMap.fileReference)} matched no generated file in the profile, whose generated files are: ${describeGeneratedFiles(this.#generatedFiles.keys())}`,
          )
        }
      }
      if (
        !baseURL &&
        mappedFiles.some(({ relativeSource }) => relativeSource)
      ) {
        logger.warn(
          `source map sources are relative paths, so their locations stay unmapped until baseURL is set`,
        )
      }
    }

    if (logger.debug) {
      for (const [href, outcome] of this.#generatedFiles) {
        logger.debug(`${href}: ${describeGeneratedFile(outcome, baseURL)}`)
      }
    }
  }

  #mappedFiles(): MappedGeneratedFile[] {
    const mappedFiles: MappedGeneratedFile[] = []
    for (const outcome of this.#generatedFiles.values()) {
      if (outcome.type === `mapped`) {
        mappedFiles.push(outcome)
      }
    }
    return mappedFiles
  }
}

/**
 * Keys each of the caller's source maps by the generated file it maps, warning
 * about and dropping each map that identifies no generated file or names the
 * same generated file as an earlier map.
 */
export const normalizeSourceMaps = (
  sourceMaps: SourceMap[] | Record<string, SourceMap>,
  logger: Logger,
): NormalizedSourceMaps => {
  const normalized = new Map<string, NormalizedSourceMap>()

  const add = (
    urlOrPath: string,
    sourceMap: SourceMap,
    describeKey: (rejection: string) => string,
  ): void => {
    const fileReference = makeSourceMapFileReference(urlOrPath)
    if (!fileReference) {
      logger.warn?.(
        `source map ignored: ${describeKey(rejectionReason(urlOrPath))}, got: ${urlOrPath}`,
      )
      return
    }

    const generatedFileId = sourceReferenceId(fileReference)
    if (normalized.has(generatedFileId)) {
      logger.warn?.(
        `source map ignored: ${describeKey(`names the same generated file as an earlier entry`)}, got: ${urlOrPath}`,
      )
      return
    }

    normalized.set(generatedFileId, {
      consumer: makeSourceMapConsumer(urlOrPath, sourceMap),
      fileReference,
    })
  }

  if (Array.isArray(sourceMaps)) {
    for (const [index, sourceMap] of sourceMaps.entries()) {
      if (!sourceMap.file) {
        logger.warn?.(
          `source map ignored: the entry at index ${index} has no "file" field naming the generated file it maps`,
        )
        continue
      }
      add(
        sourceMap.file,
        sourceMap,
        rejection =>
          `the "file" field of the entry at index ${index} ${rejection}`,
      )
    }
  } else {
    for (const [key, sourceMap] of Object.entries(sourceMaps)) {
      add(key, sourceMap, rejection => `its key ${rejection}`)
    }
  }

  return [...normalized.values()]
}

/** Why {@link makeSourceMapFileReference} rejected {@link urlOrPath}. */
const rejectionReason = (urlOrPath: string): string =>
  urlOrPath === UNKNOWN_FILE
    ? `is the placeholder a compiler writes when given no file name`
    : `is not a URL or file path`

const makeSourceMapConsumer = (
  urlOrPath: string,
  sourceMap: SourceMap,
): SourceMapConsumer => {
  try {
    return new SourceMapConsumer(sourceMap)
  } catch (error) {
    throw new ProfilerMdError(
      `sourceMaps entry for ${urlOrPath} is an invalid source map: ${reasonOf(
        error,
      )}`,
      { cause: error },
    )
  }
}

const originalPositionOf = (
  consumer: SourceMapConsumer,
  location: SourceLocation & { type: `absolute` },
): MappedPosition | undefined => {
  let mappedPosition: MappedPosition
  try {
    mappedPosition = consumer.originalPositionFor({
      line: location.line ?? 1,
      // A SourceLocation's columns are 1-based, but source map columns are 0-based.
      column: (location.column ?? 1) - 1,
    })
  } catch {
    // `source-map-js` throws when a line has mappings, but none at or before
    // the queried column (no greatest lower bound).
    return undefined
  }
  // `source-map-js` types `source` as a string, but returns null for an
  // unmapped position.
  return mappedPosition.source ? mappedPosition : undefined
}

const mappedLocation = (
  url: URL,
  mappedPosition: MappedPosition,
): SourceLocation => ({
  type: `absolute`,
  url,
  line: mappedPosition.line,
  // Source map columns are 0-based, but a SourceLocation's are 1-based.
  column: mappedPosition.column + 1,
})

const describeGeneratedFiles = (hrefs: Iterable<string>): string => {
  const listed = [...hrefs]
  if (listed.length === 0) {
    return `none`
  }
  const shown = listed.slice(0, MAX_LISTED_GENERATED_FILES).join(`, `)
  const rest = listed.length - MAX_LISTED_GENERATED_FILES
  return rest > 0 ? `${shown}, and ${rest} more` : shown
}

const MAX_LISTED_GENERATED_FILES = 5

const describeGeneratedFile = (
  outcome: GeneratedFileOutcome,
  baseURL: URL | undefined,
): string => {
  if (outcome.type === `unmapped`) {
    return `no source map`
  }
  const { sourceMap, unmappedPositions, relativeSource } = outcome
  const described = `mapped by the source map for ${sourceReferenceId(sourceMap.fileReference)}`
  if (relativeSource && !baseURL) {
    return `${described}, whose sources are relative paths and stay unmapped without a base URL`
  }
  if (unmappedPositions.size > 0) {
    return `${described}, which has no mapping for ${formatCount(unmappedPositions.size, `position`)} (e.g. ${[...unmappedPositions].slice(0, MAX_LISTED_POSITIONS).join(`, `)})`
  }
  return described
}

const MAX_LISTED_POSITIONS = 3

/**
 * Applies the matching source map, if any, to {@link location}.
 *
 * @see {@link SourceMapResolver.resolve}
 */
export const sourceMapSourceLocation = (
  location: SourceLocation,
  { baseURL, sourceMaps }: FormattingProfileToMdOptions,
): SourceLocation => sourceMaps.resolve(location, baseURL)

const makeSourceMapFileReference = (
  urlOrPath: string,
): FileReference | undefined =>
  urlOrPath === UNKNOWN_FILE ? undefined : makeFileReference(urlOrPath)

/**
 * The placeholder a compiler writes as a source map's `file` or `sources`
 * entry when it was given no file name. Babel writes `unknown` for code
 * transformed without a `filename` option.
 */
const UNKNOWN_FILE = `unknown`

export type { RawSourceMap as SourceMap } from 'source-map-js'
