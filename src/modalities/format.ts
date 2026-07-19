import type { RootContent } from 'mdast'
import type { Diff } from '../diff.ts'
import { selectTopN } from '../helpers/heap.ts'
import { paragraph } from '../helpers/markdown.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import type {
  AggregatedProfileEntry,
  FormattingProfileToMdOptions,
} from '../options.ts'

/**
 * The options a modality's sections format with. When the entry filter would
 * hide every entry ({@link showsAnyEntry} is false), the filter is disabled
 * and a note saying so ({@link disabledNote}) leads the sections, so the body
 * is shown rather than vanishes.
 */
export const resolveEntryFilter = ({
  options,
  showsAnyEntry,
  disabledNote,
}: {
  options: FormattingProfileToMdOptions
  showsAnyEntry: boolean
  disabledNote: string
}): {
  sectionOptions: FormattingProfileToMdOptions
  notes: RootContent[]
} =>
  showsAnyEntry
    ? { sectionOptions: options, notes: [] }
    : {
        sectionOptions: { ...options, showEntry: () => true },
        notes: [paragraph(disabledNote)],
      }

/** Returns whether either side of the diffed entity should be shown. */
export const showDiffEntity = <
  Entry extends DeepReadonly<AggregatedProfileEntry>,
>(
  { base, current }: Diff<Entry>,
  options: FormattingProfileToMdOptions,
): boolean =>
  (base !== undefined && options.showEntry(base)) ||
  (current !== undefined && options.showEntry(current))

/** A diffed entity paired with its base and current values for one measure. */
export type ActiveDiffEntity<Entity> = {
  entity: Entity
  baseValue: number
  currentValue: number
}

/**
 * Selects the top regressed and improved entities from {@link candidates},
 * keeping only those active on at least one side and shown by {@link options}.
 */
export const selectDiffEntities = <
  Entity extends Diff<DeepReadonly<AggregatedProfileEntry>>,
>(
  candidates: ActiveDiffEntity<Entity>[],
  options: FormattingProfileToMdOptions,
): {
  hasActive: boolean
  regressions: ActiveDiffEntity<Entity>[]
  improvements: ActiveDiffEntity<Entity>[]
} => {
  const active = candidates.filter(
    ({ entity, baseValue, currentValue }) =>
      (baseValue > 0 || currentValue > 0) && showDiffEntity(entity, options),
  )
  return {
    hasActive: active.length > 0,
    regressions: selectTopN(
      active.filter(({ baseValue, currentValue }) => currentValue > baseValue),
      options.topN,
      ({ baseValue, currentValue }) => currentValue - baseValue,
    ),
    improvements: selectTopN(
      active.filter(({ baseValue, currentValue }) => currentValue < baseValue),
      options.topN,
      ({ baseValue, currentValue }) => baseValue - currentValue,
    ),
  }
}
