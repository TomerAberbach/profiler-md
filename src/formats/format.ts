import type { RootContent } from 'mdast'
import { ProfilerMdError } from '../error.ts'
import { mdastToMarkdown, paragraph } from '../helpers/markdown.ts'
import {
  commonAncestorDirectoryURL,
  isBaseURLInferableLocation,
} from '../location.ts'
import type { SourceLocation } from '../location.ts'
import {
  diffAggregatedCallGraphs,
  formatCallGraph,
  formatCallGraphDiff,
} from '../modalities/call-graph/index.ts'
import { diffAggregatedCallStackProfiles } from '../modalities/call-stack-profile/diff.ts'
import {
  formatCallStackProfile,
  formatCallStackProfileDiff,
} from '../modalities/call-stack-profile/format.ts'
import { entityLocation } from '../modalities/heap-snapshot/aggregate.ts'
import { diffAggregatedHeapSnapshots } from '../modalities/heap-snapshot/diff.ts'
import {
  formatHeapSnapshot,
  formatHeapSnapshotDiff,
} from '../modalities/heap-snapshot/format.ts'
import type {
  FormattingProfileToMdOptions,
  NormalizedProfileToMdOptions,
} from '../options.ts'
import { sourceMapSourceLocation } from '../source-map.ts'
import type { AggregatedInput, ParsedInput } from './converter.ts'

export const formatAggregatedInputs = (
  inputs: AggregatedInput[],
  options: NormalizedProfileToMdOptions,
): string => {
  const formattingOptions = makeFormattingProfileToMdOptions(options, inputs)
  const contents = inputs.flatMap(input => {
    switch (input.type) {
      case `call-stack-profile`:
        return formatCallStackProfile(input, formattingOptions)
      case `call-graph`:
        return formatCallGraph(input, formattingOptions)
      case `heap-snapshot`:
        return formatHeapSnapshot(input, formattingOptions)
    }
  })
  return toMarkdown(contents)
}

/**
 * Diffs the aggregated {@link base} and {@link current} inputs element by
 * element, returning the differences as Markdown.
 *
 * The two sides must have the same length and the same `type` at each index,
 * otherwise they aren't comparable.
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
    if (
      baseInput.type === `call-stack-profile` &&
      currentInput.type === `call-stack-profile`
    ) {
      return formatCallStackProfileDiff(
        diffAggregatedCallStackProfiles(
          baseInput,
          currentInput,
          formattingOptions,
        ),
        formattingOptions,
      )
    }
    if (baseInput.type === `call-graph` && currentInput.type === `call-graph`) {
      return formatCallGraphDiff(
        diffAggregatedCallGraphs(baseInput, currentInput, formattingOptions),
        formattingOptions,
      )
    }
    if (
      baseInput.type === `heap-snapshot` &&
      currentInput.type === `heap-snapshot`
    ) {
      return formatHeapSnapshotDiff(
        diffAggregatedHeapSnapshots(baseInput, currentInput, formattingOptions),
        formattingOptions,
      )
    }
    throw new ProfilerMdError(
      `cannot diff a ${modalityName(baseInput.type)} against a ${modalityName(currentInput.type)}`,
    )
  })
  return toMarkdown(contents)
}

const modalityName = (type: ParsedInput[`type`]): string =>
  type.replaceAll(`-`, ` `)

const toMarkdown = (contents: RootContent[]): string =>
  mdastToMarkdown(
    contents.length > 0 ? contents : [paragraph(`No profiling data found.`)],
  )

/**
 * Resolves a `baseURL` of `'auto'` to the common ancestor directory of the
 * aggregated {@link inputs}.
 *
 * Any other `baseURL` passes through unchanged.
 */
const makeFormattingProfileToMdOptions = (
  options: NormalizedProfileToMdOptions,
  inputs: AggregatedInput[],
): FormattingProfileToMdOptions => {
  const { baseURL } = options
  if (baseURL !== `auto`) {
    return { ...options, baseURL }
  }

  const urls = collectInferableURLs(inputs, { ...options, baseURL: undefined })
  const inferredBaseURL = commonAncestorDirectoryURL(urls)
  logInferredBaseURL(inferredBaseURL, urls, options)
  return { ...options, baseURL: inferredBaseURL }
}

const logInferredBaseURL = (
  inferredBaseURL: URL | undefined,
  urls: readonly URL[],
  { logger }: NormalizedProfileToMdOptions,
): void => {
  if (inferredBaseURL) {
    logger.info?.(
      `base URL: inferred ${inferredBaseURL.href} from ${urls.length} locations`,
    )
  } else {
    logger.warn?.(
      `base URL "auto" inferred no directory, so paths stay absolute: no function categorized as ours has an absolute location`,
    )
  }
}

/**
 * Collects the base-URL-inferable absolute URLs of {@link inputs}' entries.
 *
 * Applies source maps first so the base is inferred from the locations
 * formatting will show.
 */
const collectInferableURLs = (
  inputs: AggregatedInput[],
  options: FormattingProfileToMdOptions,
): URL[] => {
  const urls: URL[] = []
  const collect = (location: SourceLocation | undefined) => {
    if (!location) {
      return
    }
    const mappedLocation = sourceMapSourceLocation(location, options)
    if (isBaseURLInferableLocation(mappedLocation)) {
      urls.push(mappedLocation.url)
    }
  }

  for (const input of inputs) {
    switch (input.type) {
      case `call-stack-profile`:
      case `call-graph`:
        for (const func of input.functions) {
          // Only `ours`-categorized functions contribute, because a
          // dependency's install path can be far outside the source tree and
          // would raise the base to a shared root.
          if (func.category === `ours`) {
            collect(func.location)
          }
        }
        break
      case `heap-snapshot`:
        for (const entity of [...input.constructors, ...input.functions]) {
          collect(entityLocation(entity))
        }
        break
    }
  }
  return urls
}
