import type { RootContent } from 'mdast'
import { ProfilerMdError } from '../error.ts'
import { mdastToMarkdown, paragraph } from '../helpers/markdown.ts'
import {
  commonAncestorDirectoryURL,
  isBaseURLInferableLocation,
} from '../location.ts'
import { modalitySpecOf } from '../modalities/registry.ts'
import type { AggregatedInput, Modality } from '../modalities/registry.ts'
import type { EntityLocation } from '../modalities/spec.ts'
import type {
  FormattingProfileToMdOptions,
  NormalizedProfileToMdOptions,
} from '../options.ts'
import { isSameSourceForOrigins } from '../origins/index.ts'
import { SourceMapResolver } from '../source-map.ts'

export const formatAggregatedInputs = (
  inputs: AggregatedInput[],
  options: NormalizedProfileToMdOptions,
): string => {
  const formattingOptions = makeFormattingProfileToMdOptions(options, inputs)
  const contents = inputs.flatMap(input =>
    modalitySpecOf(input).format(input, formattingOptions),
  )
  formattingOptions.sourceMaps.report(formattingOptions.baseURL)
  return toMarkdown(contents)
}

/**
 * Diffs the aggregated {@link base} and {@link current} inputs element by
 * element, returning the differences as Markdown.
 *
 * Throws when the sides differ in length or in modality at an index.
 */
export const formatAggregatedDiff = (
  base: AggregatedInput[],
  current: AggregatedInput[],
  options: NormalizedProfileToMdOptions,
): string => {
  if (base.length !== current.length) {
    throw new ProfilerMdError(
      `cannot diff inputs containing different numbers of profiles, got: ${base.length} in the base and ${current.length} in the current`,
    )
  }

  // Resolve over both sides at once so they share a single inferred base URL
  // and format consistently.
  const formattingOptions = makeFormattingProfileToMdOptions(options, [
    ...base,
    ...current,
  ])
  const contents = base.flatMap((baseInput, index) => {
    const currentInput = current[index]!
    if (baseInput.type !== currentInput.type) {
      throw new ProfilerMdError(
        `cannot diff a ${modalityName(baseInput.type)} against a ${modalityName(currentInput.type)}`,
      )
    }
    return modalitySpecOf(baseInput).formatDiff(baseInput, currentInput, {
      ...formattingOptions,
      isSameMatchedSource: (baseLocation, currentLocation) =>
        isSameSourceForOrigins(
          baseLocation,
          baseInput.context.origin,
          currentLocation,
          currentInput.context.origin,
        ),
    })
  })
  formattingOptions.sourceMaps.report(formattingOptions.baseURL)
  return toMarkdown(contents)
}

const modalityName = (modality: Modality): string =>
  modality.replaceAll(`-`, ` `)

const toMarkdown = (contents: RootContent[]): string =>
  mdastToMarkdown(
    contents.length > 0 ? contents : [paragraph(`No profiling data found.`)],
  )

const makeFormattingProfileToMdOptions = (
  options: NormalizedProfileToMdOptions,
  inputs: AggregatedInput[],
): FormattingProfileToMdOptions => {
  const sourceMaps = new SourceMapResolver(options.sourceMaps, options.logger)
  const { baseURL } = options
  if (baseURL !== `auto`) {
    for (const { location } of locations(inputs)) {
      sourceMaps.addGeneratedFile(location)
    }
    return { ...options, baseURL, sourceMaps }
  }

  // The resolver maps each location first, so the base is inferred from the
  // locations formatting will show. A relative source cannot contribute,
  // because it resolves only against the base being inferred.
  const urls: URL[] = []
  let hasDirectoryURL = false
  for (const { location, inferable } of locations(inputs)) {
    sourceMaps.addGeneratedFile(location)
    hasDirectoryURL ||= isBaseURLInferableLocation(location)
    if (inferable) {
      const mappedLocation = sourceMaps.resolve(location, undefined)
      if (isBaseURLInferableLocation(mappedLocation)) {
        urls.push(mappedLocation.url)
      }
    }
  }
  const inferred = commonAncestorDirectoryURL(urls)
  logInferredBaseURL(inferred, urls, hasDirectoryURL, options)
  return { ...options, baseURL: inferred?.url, sourceMaps }
}

function* locations(inputs: AggregatedInput[]): Iterable<EntityLocation> {
  for (const input of inputs) {
    yield* modalitySpecOf(input).locations(input)
  }
}

const logInferredBaseURL = (
  inferred: { url: URL; urlCount: number } | undefined,
  urls: readonly URL[],
  hasDirectoryURL: boolean,
  { logger }: NormalizedProfileToMdOptions,
): void => {
  if (inferred) {
    logger.info?.(`inferred base URL: ${inferred.url.href}`)
    logger.debug?.(
      `the base URL is the common directory of ${inferred.urlCount} of the ${urls.length} absolute locations categorized as ours, the most that share a top-level directory`,
    )
  } else if (hasDirectoryURL) {
    logger.warn?.(
      `baseURL "auto" inferred no directory because no function categorized as ours has an absolute location, so paths stay absolute`,
    )
  } else {
    logger.warn?.(
      `baseURL "auto" inferred no directory because no location is an absolute path or a URL in a directory`,
    )
  }
}
