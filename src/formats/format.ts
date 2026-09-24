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
import { SourceMapResolver } from '../source-map.ts'
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
  formattingOptions.sourceMaps.report(formattingOptions.baseURL)
  return toMarkdown(contents)
}

/**
 * Diffs the aggregated {@link base} and {@link current} inputs element by
 * element, returning the differences as Markdown.
 *
 * Throws when the sides differ in length or in `type` at an index.
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
  formattingOptions.sourceMaps.report(formattingOptions.baseURL)
  return toMarkdown(contents)
}

const modalityName = (type: ParsedInput[`type`]): string =>
  type.replaceAll(`-`, ` `)

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
  for (const { location, inferable } of locations(inputs)) {
    sourceMaps.addGeneratedFile(location)
    if (inferable) {
      const mappedLocation = sourceMaps.resolve(location, undefined)
      if (isBaseURLInferableLocation(mappedLocation)) {
        urls.push(mappedLocation.url)
      }
    }
  }
  const inferredBaseURL = commonAncestorDirectoryURL(urls)
  logInferredBaseURL(inferredBaseURL, urls, options)
  return { ...options, baseURL: inferredBaseURL, sourceMaps }
}

const logInferredBaseURL = (
  inferredBaseURL: URL | undefined,
  urls: readonly URL[],
  { logger }: NormalizedProfileToMdOptions,
): void => {
  if (inferredBaseURL) {
    logger.info?.(`inferred base URL: ${inferredBaseURL.href}`)
    logger.debug?.(
      `the base URL is the common directory of ${urls.length} absolute locations categorized as ours`,
    )
  } else {
    logger.warn?.(
      `baseURL "auto" inferred no directory because no function categorized as ours has an absolute location, so paths stay absolute`,
    )
  }
}

/**
 * Yields the location of each entity in {@link inputs}, and whether the
 * location may contribute to base URL inference.
 */
function* locations(
  inputs: AggregatedInput[],
): Iterable<{ location: SourceLocation; inferable: boolean }> {
  for (const input of inputs) {
    switch (input.type) {
      case `call-stack-profile`:
      case `call-graph`:
        for (const func of input.functions) {
          if (func.location) {
            yield {
              location: func.location,
              // A dependency's install path can be far outside the source
              // tree. Including it would move the inferred base up to an
              // ancestor the install path shares with the tree.
              inferable: func.category === `ours`,
            }
          }
        }
        break
      case `heap-snapshot`:
        for (const entity of [...input.constructors, ...input.functions]) {
          const location = entityLocation(entity)
          if (location) {
            yield { location, inferable: true }
          }
        }
        break
    }
  }
}
