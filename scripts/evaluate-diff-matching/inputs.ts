import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { exampleDiffPairs } from '../../src/cli/examples.ts'
import type { ExampleDiffPair } from '../../src/cli/examples.ts'
import { aggregateInput } from '../../src/formats/index.ts'
import type { AggregatedCallGraph } from '../../src/modalities/call-graph/aggregate.ts'
import type { AggregatedCallStackProfile } from '../../src/modalities/call-stack-profile/aggregate.ts'
import type { AggregatedInput } from '../../src/modalities/registry.ts'
import type { FormattingProfileToMdOptions } from '../../src/options.ts'

const INPUT_DIRECTORY = `examples/input`

/** An input of a modality whose diff pairs functions. */
export type FunctionInput = AggregatedCallStackProfile | AggregatedCallGraph

export type Func = FunctionInput[`functions`][number]

export const committedPairs = (filter?: string): ExampleDiffPair[] =>
  exampleDiffPairs(readdirSync(INPUT_DIRECTORY))
    .filter(({ base }) => !filter || base.includes(filter))
    .sort((left, right) => left.base.localeCompare(right.base))

export const functionInputPairs = (
  pair: ExampleDiffPair,
  options: FormattingProfileToMdOptions,
): [FunctionInput, FunctionInput][] => {
  const current = aggregate(pair.current, options)
  return aggregate(pair.base, options).flatMap((base, index) => {
    const currentInput = current[index]
    return currentInput && hasFunctions(base) && hasFunctions(currentInput)
      ? [[base, currentInput] as [FunctionInput, FunctionInput]]
      : []
  })
}

const aggregate = (
  filename: string,
  options: FormattingProfileToMdOptions,
): AggregatedInput[] =>
  aggregateInput(
    { data: readFileSync(join(INPUT_DIRECTORY, filename)), name: filename },
    options,
  )

const hasFunctions = (input: AggregatedInput): input is FunctionInput =>
  input.type === `call-stack-profile` || input.type === `call-graph`
