import type { RootContent } from 'mdast'
import type { SourceLocation } from '../location.ts'
import type {
  FormattingProfileToMdOptions,
  ProfileEntry,
  ProfileToMdContext,
} from '../options.ts'
import type { InputAggregator } from './aggregator.ts'
import type { CategorySet } from './category-sets.ts'

/**
 * A modality's registered logic: aggregation of its parsed inputs, and
 * formatting of its aggregated inputs, whose entries are {@link Entry}.
 */
export type ModalitySpec<
  Parsed extends { type: string },
  Aggregated extends { type: Parsed[`type`]; context: ProfileToMdContext },
  Entry extends ProfileEntry,
> = {
  /**
   * The modality's ID: the `type` of its parsed and aggregated inputs. Must be
   * unique across modalities.
   */
  id: Parsed[`type`]

  /** The closed set the modality's entities are categorized from. */
  categorySet: CategorySet

  /**
   * Returns the input's aggregator, which reads each lazily consumed iterable
   * of the input through {@link reader}.
   */
  aggregator: (
    input: Parsed,
    reader: RecordReader,
  ) => InputAggregator<Aggregated>

  format: (
    input: Aggregated,
    options: FormattingProfileToMdOptions,
  ) => RootContent[]

  /** Diffs {@link base} against {@link current}, returning the differences. */
  formatDiff: (
    base: Aggregated,
    current: Aggregated,
    options: FormattingProfileToMdOptions,
  ) => RootContent[]

  /**
   * Yields the location of each entity, and whether the location may
   * contribute to base URL inference.
   */
  locations: (input: Aggregated) => Iterable<EntityLocation>

  /** The entries a diff pairs by match key. */
  entries: (input: Aggregated) => Iterable<Entry>

  /** Each category the input assigned to one of its entities. */
  categories: (input: Aggregated) => Iterable<string>
}

export type EntityLocation = { location: SourceLocation; inferable: boolean }

/**
 * Reports what a parsed input's records yield to the conversion pipeline, so it
 * classifies an error the parser throws while aggregation consumes them the
 * same way as one it throws before returning, and rejects an input with no
 * records.
 */
export type RecordReader = {
  /** Returns the lazily consumed {@link records}, noting each it yields. */
  records: <Value>(records: Iterable<Value>) => Iterable<Value>

  /** Returns a lazily consumed {@link iterable} that yields no records. */
  iterable: <Value>(iterable: Iterable<Value>) => Iterable<Value>

  /** Notes {@link count} records the parser read before returning. */
  parsed: (count: number) => void
}
