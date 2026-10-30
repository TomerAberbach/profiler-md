import type { RootContent } from 'mdast'
import { ProfilerMdError } from '../error.ts'
import { mdastToMarkdown, paragraph } from '../helpers/markdown.ts'
import {
  commonAncestorDirectoryURL,
  isBaseURLInferableLocation,
  isBelowURL,
} from '../location.ts'
import { matchDiffedInputEntries } from '../modalities/diff.ts'
import { modalitySpecOf } from '../modalities/registry.ts'
import type { AggregatedInput, Modality } from '../modalities/registry.ts'
import type { EntityLocation } from '../modalities/spec.ts'
import type {
  FormattingProfileToMdOptions,
  NormalizedProfileToMdOptions,
  ProfileEntry,
  ProfileToMdContext,
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

  const formattingOptions = makeDiffFormattingProfileToMdOptions(
    options,
    base,
    current,
  )
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
    contents.length > 0 ? contents : [paragraph(`No profiles were recorded.`)],
  )

/**
 * Resolves the formatting options for the {@link base} and {@link current}
 * inputs of a diff.
 *
 * `baseURL: 'auto'` infers one base URL across both sides, so a diff's sides
 * format consistently. When each side's own base URL differs only by what
 * `matchEntry` strips, such as a Nix store hash, each side keeps its own,
 * because the shared one would state that identifier in every path.
 */
const makeDiffFormattingProfileToMdOptions = (
  options: NormalizedProfileToMdOptions,
  base: AggregatedInput[],
  current: AggregatedInput[],
): FormattingProfileToMdOptions => {
  if (options.baseURL !== `auto`) {
    return makeFormattingProfileToMdOptions(options, [...base, ...current])
  }

  const sourceMaps = new SourceMapResolver(options.sourceMaps, options.logger)
  const baseInference = inferBaseURL(base, sourceMaps)
  const currentInference = inferBaseURL(current, sourceMaps)
  const baseSideBaseURL = baseInference.inferred?.url
  const currentSideBaseURL = currentInference.inferred?.url
  if (
    baseSideBaseURL &&
    currentSideBaseURL &&
    differOnlyByMatchEntry(
      { baseURL: baseSideBaseURL, inputs: base },
      { baseURL: currentSideBaseURL, inputs: current },
      options,
    )
  ) {
    logInferredBaseURL(baseInference, options, ` of the base`)
    logInferredBaseURL(currentInference, options, ` of the current`)
    options.logger.debug?.(
      `the base and the current each format paths relative to their own base URL because the diff pairs functions below them that differ only by what matchEntry strips`,
    )
    return {
      ...options,
      baseURL: currentSideBaseURL,
      baseSideBaseURL,
      sourceMaps,
    }
  }

  const shared = makeBaseURLInference(
    [...baseInference.urls, ...currentInference.urls],
    baseInference.hasDirectoryURL || currentInference.hasDirectoryURL,
  )
  logInferredBaseURL(shared, options)
  return { ...options, baseURL: shared.inferred?.url, sourceMaps }
}

/** Resolves the formatting options for {@link inputs}. */
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

  const inference = inferBaseURL(inputs, sourceMaps)
  logInferredBaseURL(inference, options)
  return { ...options, baseURL: inference.inferred?.url, sourceMaps }
}

type BaseURLInference = {
  inferred: { url: URL; urlCount: number } | undefined
  urls: URL[]
  hasDirectoryURL: boolean
}

const inferBaseURL = (
  inputs: AggregatedInput[],
  sourceMaps: SourceMapResolver,
): BaseURLInference => {
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
  return makeBaseURLInference(urls, hasDirectoryURL)
}

function* locations(inputs: AggregatedInput[]): Iterable<EntityLocation> {
  for (const input of inputs) {
    yield* modalitySpecOf(input).locations(input)
  }
}

const makeBaseURLInference = (
  urls: URL[],
  hasDirectoryURL: boolean,
): BaseURLInference => ({
  inferred: commonAncestorDirectoryURL(urls),
  urls,
  hasDirectoryURL,
})

const logInferredBaseURL = (
  { inferred, urls, hasDirectoryURL }: BaseURLInference,
  { logger }: NormalizedProfileToMdOptions,
  side = ``,
): void => {
  if (inferred) {
    logger.info?.(`inferred base URL${side}: ${inferred.url.href}`)
    logger.debug?.(
      `the base URL${side} is the common directory of ${inferred.urlCount} of the ${urls.length} absolute locations categorized as ours, the most that share a top-level directory`,
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

/**
 * Whether two different base URLs differ only by what `matchEntry` strips:
 * the diff pairs a function below one with a function below the other by
 * match key, though their own keys differ.
 */
const differOnlyByMatchEntry = (
  base: { baseURL: URL; inputs: AggregatedInput[] },
  current: { baseURL: URL; inputs: AggregatedInput[] },
  options: NormalizedProfileToMdOptions,
): boolean => {
  if (base.baseURL.href === current.baseURL.href) {
    return false
  }

  const { entryMatchKeys } = options
  return base.inputs.some((baseInput, index) => {
    const currentInput = current.inputs[index]!
    return matchDiffedInputEntries(
      entriesBelow(baseInput, base.baseURL),
      entriesBelow(currentInput, current.baseURL),
      ({ entries }) => entries,
      options,
    ).some(
      diff =>
        diff.base &&
        diff.current &&
        entryMatchKeys(diff.base, baseInput.context).ownNameAndLocation !==
          entryMatchKeys(diff.current, currentInput.context).ownNameAndLocation,
    )
  })
}

const entriesBelow = (
  input: AggregatedInput,
  baseURL: URL,
): { entries: ProfileEntry[]; context: ProfileToMdContext } => ({
  entries: Iterator.from(modalitySpecOf(input).entries(input))
    .filter(entry => isBelowURL(entry.location, baseURL))
    .toArray(),
  context: input.context,
})
