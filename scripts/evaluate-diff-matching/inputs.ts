import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { exampleDiffPairs } from '../../src/formats/examples.ts'
import type { ExampleDiffPair } from '../../src/formats/examples.ts'
import { aggregateDiffSides } from '../../src/formats/index.ts'
import type { SourceLocation } from '../../src/location.ts'
import type { AggregatedCallGraph } from '../../src/modalities/call-graph/aggregate.ts'
import type { AggregatedCallStackProfile } from '../../src/modalities/call-stack-profile/aggregate.ts'
import type { AggregatedHeapSnapshot } from '../../src/modalities/heap-snapshot/aggregate.ts'
import type { AggregatedInput } from '../../src/modalities/registry.ts'
import type {
  FormattingProfileToMdOptions,
  ProfileData,
  ProfileInput,
} from '../../src/options.ts'

const INPUT_DIRECTORY = `examples/input`

export type Func = FunctionInput[`functions`][number]

/** An input of a modality whose diff pairs functions. */
export type FunctionInput = AggregatedCallStackProfile | AggregatedCallGraph

export const committedPairs = (filter?: string): ExampleDiffPair[] =>
  exampleDiffPairs(readdirSync(INPUT_DIRECTORY))
    .filter(({ base }) => !filter || base.includes(filter))
    .sort((left, right) => left.base.localeCompare(right.base))

export type ScoredInputPair =
  | { type: `function`; base: FunctionInput; current: FunctionInput }
  | {
      type: `heap-snapshot`
      base: AggregatedHeapSnapshot
      current: AggregatedHeapSnapshot
    }

/**
 * The aggregated inputs of an example pair whose sides a diff can pair entities
 * of: a function input or a heap snapshot on both sides.
 */
export const scoredInputPairs = (
  pair: ExampleDiffPair,
  options: FormattingProfileToMdOptions,
): ScoredInputPair[] => {
  const [base, current] = aggregateDiffSides(
    readInput(pair.base),
    readInput(pair.current),
    options,
  )
  return base.flatMap((base, index): ScoredInputPair[] => {
    const currentInput = current[index]
    if (!currentInput) {
      return []
    }
    if (isFunctionInput(base) && isFunctionInput(currentInput)) {
      return [{ type: `function`, base, current: currentInput }]
    }
    return base.type === `heap-snapshot` &&
      currentInput.type === `heap-snapshot`
      ? [{ type: `heap-snapshot`, base, current: currentInput }]
      : []
  })
}

/**
 * The input's entities with a location: its functions, and a heap snapshot's
 * constructors, whose locations its retainer paths contain.
 */
export const locatedEntitiesOf = (
  input: FunctionInput | AggregatedHeapSnapshot,
): readonly { location?: SourceLocation }[] =>
  input.type === `heap-snapshot`
    ? [...input.functions, ...input.constructors]
    : input.functions

const readInput = (filename: string): ProfileInput<ProfileData> => ({
  data: readFileSync(join(INPUT_DIRECTORY, filename)),
  name: filename,
})

const isFunctionInput = (input: AggregatedInput): input is FunctionInput =>
  input.type === `call-stack-profile` || input.type === `call-graph`
