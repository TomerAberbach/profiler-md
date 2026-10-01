import { callGraphModalitySpec } from './call-graph/index.ts'
import { callStackProfileModalitySpec } from './call-stack-profile/index.ts'
import { heapSnapshotModalitySpec } from './heap-snapshot/index.ts'
import type { ModalitySpec } from './modality.ts'

const modalitySpecs = [
  callStackProfileModalitySpec,
  callGraphModalitySpec,
  heapSnapshotModalitySpec,
] as const

type RegisteredModalitySpec = (typeof modalitySpecs)[number]

export type Modality = RegisteredModalitySpec[`id`]

/** One input a format's parser produced, in its modality's parsed form. */
export type ParsedInput = Parameters<RegisteredModalitySpec[`aggregator`]>[0]

/** One input aggregated in its modality's form. */
export type AggregatedInput = Parameters<RegisteredModalitySpec[`format`]>[0]

/** An entry of an aggregated input, which `showEntry` filters. */
export type AggregatedProfileEntry =
  ReturnType<RegisteredModalitySpec[`entries`]> extends Iterable<infer Entry>
    ? Entry
    : never

/** Each distinct closed set of categories the modalities draw from. */
export const CATEGORY_SETS: readonly RegisteredModalitySpec[`categorySet`][] = [
  ...new Set(modalitySpecs.map(modalitySpec => modalitySpec.categorySet)),
]

/** A category from any of {@link CATEGORY_SETS}. */
export type EntryCategory =
  RegisteredModalitySpec[`categorySet`][`categories`][number]

type AnyModalitySpec = ModalitySpec<
  ParsedInput,
  AggregatedInput,
  AggregatedProfileEntry
>

const modalityToSpec: ReadonlyMap<Modality, AnyModalitySpec> = new Map(
  modalitySpecs.map(modalitySpec => [
    modalitySpec.id,
    // Each modality's functions accept only its own inputs, which the lookup
    // by `type` guarantees.
    modalitySpec as unknown as AnyModalitySpec,
  ]),
)

/**
 * The spec of {@link input}'s modality.
 *
 * Its functions accept any modality's inputs, so pass them only inputs of
 * {@link input}'s `type`.
 */
export const modalitySpecOf = (
  input: ParsedInput | AggregatedInput,
): AnyModalitySpec => modalityToSpec.get(input.type)!
