import { ProfilerMdError } from '../error.ts'
import { formatConjunction } from '../helpers/format.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferenceId } from '../location.ts'
import type { Logger } from '../logger.ts'
import type { InputAggregator } from '../modalities/aggregator.ts'
import { modalitySpecOf } from '../modalities/registry.ts'
import type {
  AggregatedInput,
  Modality,
  ParsedInput,
} from '../modalities/registry.ts'
import type { DiffedInput, DiffInputMatch } from '../modalities/spec.ts'
import type {
  AggregationProfileToMdOptions,
  ProfileEntry,
  ProfileToMdContext,
} from '../options.ts'
import { OriginDetector } from '../origins/index.ts'
import type { Origin, OriginEvidence } from '../origins/index.ts'
import type { ParseResult } from './parse.ts'
import { formatToSpec } from './registry.ts'
import type { Format } from './registry.ts'

/**
 * A raw input's parsed inputs and their aggregators, under the context its
 * origin detection resolved.
 */
export type PreparedInputs = {
  parsed: ParsedInput[]
  aggregators: InputAggregator<AggregatedInput>[]
  context: ProfileToMdContext
  recordTally: ParseResult[`recordTally`]
}

/** Creates each parsed input's aggregator and detects the origin across them. */
export const prepareParseResult = (
  { parsed, recordTally }: ParseResult,
  options: AggregationProfileToMdOptions,
  format: Format,

  /** The origin the caller specified, if any. */
  origin?: Origin,
): PreparedInputs => {
  const aggregators = parsed.map(input =>
    modalitySpecOf(input).aggregator(input, recordTally),
  )

  const detector = new OriginDetector(formatToSpec[format], origin)
  for (const aggregator of aggregators) {
    aggregator.detectOrigin(detector)
  }

  const resolvedContext: ProfileToMdContext = {
    format,
    origin: detector.resolve(),
  }
  // An input with no profiles has no entries to detect an origin from, and no
  // functions for the origin to categorize.
  if (aggregators.length > 0) {
    logOrigin(detector, resolvedContext, options)
  }
  return { parsed, aggregators, context: resolvedContext, recordTally }
}

/**
 * Pairs each side's inputs with the other side's that a diff can compare them
 * with, and warns about the inputs left unpaired. An input pairs first with
 * its only match where it is that match's only match too, so a side recording
 * different profiles than the other pairs each by what it measures. The rest
 * pair in order, with the first input they match.
 *
 * Returns an error instead when no input pairs, stating why where each side
 * has one, and naming each side's inputs otherwise. Logs why each unpaired
 * input matched none of the other side's at debug level.
 */
export const pairPreparedSides = (
  base: PreparedInputs,
  current: PreparedInputs,
  { logger }: AggregationProfileToMdOptions,
): PairedInputs => {
  const candidates: InputPair[] = []
  const unmatched: UnmatchedInputs[] = []
  for (const [baseIndex, baseInput] of base.parsed.entries()) {
    for (const [currentIndex, currentInput] of current.parsed.entries()) {
      const match = matchDiffedInputs(
        { input: baseInput, context: base.context },
        { input: currentInput, context: current.context },
      )
      if (match.type === `matched`) {
        candidates.push({ baseIndex, currentIndex, match: match.match })
      } else {
        unmatched.push({ baseIndex, currentIndex, reason: match.reason })
      }
    }
  }

  const { pairs, isPairedBase, isPairedCurrent } = pairCandidates(
    candidates,
    base.parsed.length,
    current.parsed.length,
  )

  // With no pairs, a single unmatched pair means each side has one input.
  if (pairs.length === 0 && unmatched.length === 1) {
    return {
      type: `unpaired`,
      error: new ProfilerMdError(unmatched[0]!.reason),
    }
  }

  if (logger.debug) {
    for (const { baseIndex, currentIndex, reason } of unmatched) {
      if (!isPairedBase[baseIndex] || !isPairedCurrent[currentIndex]) {
        logger.debug(
          `the base ${inputName(base.parsed[baseIndex]!, base.context)} and the current ${inputName(current.parsed[currentIndex]!, current.context)} do not pair: ${reason}`,
        )
      }
    }
  }

  if (
    pairs.length === 0 &&
    (base.parsed.length > 0 || current.parsed.length > 0)
  ) {
    return {
      type: `unpaired`,
      error: new ProfilerMdError(
        `cannot diff inputs with no profiles in common, got: ${describeInputs(base)} in the base and ${describeInputs(current)} in the current`,
      ),
    }
  }

  warnUnpairedInputs(`base`, base, isPairedBase, logger)
  warnUnpairedInputs(`current`, current, isPairedCurrent, logger)
  return { type: `paired`, pairs }
}

/** The inputs a diff pairs, or why it can pair none. */
type PairedInputs =
  | { type: `paired`; pairs: InputPair[] }
  | { type: `unpaired`; error: ProfilerMdError }

/**
 * The indexes of a base input and a current input a diff can compare by
 * {@link match}.
 */
type InputPair = {
  baseIndex: number
  currentIndex: number
  match: unknown
}

/** A base input and a current input a diff can't compare, and why. */
type UnmatchedInputs = {
  baseIndex: number
  currentIndex: number
  reason: string
}

const matchDiffedInputs = (
  base: DiffedInput<ParsedInput>,
  current: DiffedInput<ParsedInput>,
): DiffInputMatch<unknown> =>
  base.input.type === current.input.type
    ? modalitySpecOf(base.input).matchDiffed(base, current)
    : {
        type: `unmatched`,
        reason: `cannot diff a ${modalityName(base.input.type)} against a ${modalityName(current.input.type)}`,
      }

const modalityName = (modality: Modality): string =>
  modality.replaceAll(`-`, ` `)

/**
 * Pairs each candidate that is the only one for its base and its current
 * input, then each remaining candidate in order whose inputs are both unpaired.
 * Returns the pairs in base order, with which inputs they pair.
 */
const pairCandidates = (
  candidates: InputPair[],
  baseLength: number,
  currentLength: number,
): {
  pairs: InputPair[]
  isPairedBase: Uint8Array
  isPairedCurrent: Uint8Array
} => {
  const baseCandidateCounts = new Uint32Array(baseLength)
  const currentCandidateCounts = new Uint32Array(currentLength)
  for (const { baseIndex, currentIndex } of candidates) {
    baseCandidateCounts[baseIndex]!++
    currentCandidateCounts[currentIndex]!++
  }

  const isPairedBase = new Uint8Array(baseLength)
  const isPairedCurrent = new Uint8Array(currentLength)
  const pairs: InputPair[] = []
  const addPair = (pair: InputPair): void => {
    pairs.push(pair)
    isPairedBase[pair.baseIndex] = 1
    isPairedCurrent[pair.currentIndex] = 1
  }
  for (const candidate of candidates) {
    if (
      baseCandidateCounts[candidate.baseIndex] === 1 &&
      currentCandidateCounts[candidate.currentIndex] === 1
    ) {
      addPair(candidate)
    }
  }
  for (const candidate of candidates) {
    if (
      !isPairedBase[candidate.baseIndex] &&
      !isPairedCurrent[candidate.currentIndex]
    ) {
      addPair(candidate)
    }
  }
  pairs.sort((pair1, pair2) => pair1.baseIndex - pair2.baseIndex)
  return { pairs, isPairedBase, isPairedCurrent }
}

const describeInputs = ({ parsed, context }: PreparedInputs): string =>
  parsed.length > 0
    ? formatConjunction(parsed.map(input => inputName(input, context)))
    : `no profiles`

const warnUnpairedInputs = (
  side: string,
  { parsed, context }: PreparedInputs,
  isPaired: Uint8Array,
  logger: Logger,
): void => {
  const unpairedNames = parsed
    .filter((_, index) => !isPaired[index])
    .map(input => inputName(input, context))
  if (unpairedNames.length > 0) {
    logger.warn?.(
      `diff omits profiles only the ${side} side records, got: ${formatConjunction(unpairedNames)}`,
    )
  }
}

const inputName = (input: ParsedInput, context: ProfileToMdContext): string =>
  modalitySpecOf(input).name({ input, context })

/**
 * Aggregates each prepared input, then rejects the raw input if the parse left
 * it with no records, or warns about what the parse skipped.
 *
 * On a side of a diff, {@link otherSide} is the other side's prepared inputs.
 */
export const aggregatePreparedInputs = (
  { aggregators, context, recordTally }: PreparedInputs,
  options: AggregationProfileToMdOptions,
  otherSide?: PreparedInputs,
): AggregatedInput[] => {
  const aggregated = aggregators.map((aggregator, index) => {
    const otherSideAggregator = otherSide?.aggregators[index]
    return aggregator.aggregate(
      options,
      context,
      otherSideAggregator && {
        aggregator: otherSideAggregator,
        context: otherSide.context,
      },
    )
  })
  recordTally.throwOrWarn(options)
  return aggregated
}

const logOrigin = (
  detector: OriginDetector,
  { origin }: ProfileToMdContext,
  { logger }: AggregationProfileToMdOptions,
): void => {
  const { info, debug } = logger
  if (!info && !debug) {
    return
  }

  const { evidence, candidates } = detector
  if (evidence.type === `specified`) {
    info?.(`specified origin: ${origin}`)
    return
  }

  debug?.(`origin candidates, in priority order: ${candidates.join(`, `)}`)
  if (evidence.type === `fallback`) {
    info?.(`fallback origin: ${origin}`)
    debug?.(`no entry marked another origin`)
    return
  }

  info?.(`detected origin: ${origin}`)
  debug?.(describeOriginEvidence(origin, evidence))
}

const describeOriginEvidence = (
  origin: Origin,
  evidence: OriginEvidence & { type: `marker` | `hint` },
): string =>
  evidence.type === `marker`
    ? `${origin} is marked by the entry ${describeEntry(evidence.entry)}`
    : `${origin} is named by the format's metadata`

const describeEntry = ({
  name,
  location,
}: DeepReadonly<ProfileEntry>): string => {
  const described = name ?? `<anonymous>`
  return location ? `${described} in ${sourceReferenceId(location)}` : described
}
