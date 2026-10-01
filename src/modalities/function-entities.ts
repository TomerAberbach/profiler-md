import type { SourceLocation } from '../location.ts'
import { FUNCTION_CATEGORY_SET } from './category-sets.ts'
import type { FunctionCategory } from './category-sets.ts'
import type { EntityLocation } from './modality.ts'

type CategorizedFunction = {
  location?: SourceLocation
  category: FunctionCategory
}

/**
 * The `ModalitySpec` fields of a modality whose entities are the functions of its
 * aggregated input, of type {@link Func}.
 */
export const functionEntities = <Func extends CategorizedFunction>() =>
  ({
    categorySet: FUNCTION_CATEGORY_SET,
    locations: ({ functions }: { functions: readonly Func[] }) =>
      functionLocations(functions),
    entries: ({ functions }: { functions: readonly Func[] }): Iterable<Func> =>
      functions,
    categories: ({ functions }: { functions: readonly Func[] }) =>
      functions.map(func => func.category),
  }) as const

/**
 * Yields the location of each of {@link functions}, which may contribute to
 * base URL inference only when the function is categorized as ours.
 */
function* functionLocations(
  functions: readonly CategorizedFunction[],
): Iterable<EntityLocation> {
  for (const func of functions) {
    if (func.location) {
      yield {
        location: func.location,
        // A dependency's install path can be far outside the source tree.
        // Including it would move the inferred base up to an ancestor the
        // install path shares with the tree.
        inferable: func.category === `ours`,
      }
    }
  }
}
