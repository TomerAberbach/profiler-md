/**
 * Categorizing a heap snapshot's nodes and the entities they aggregate into.
 *
 * A category resolves only once the origin is known, since the origin
 * categorizes a constructor by the class name its language defines and maps the
 * type names a format declares itself. The aggregators here accumulate sizes
 * under a key while the nodes are consumed, and resolve that key to a category
 * afterwards.
 */

import {
  categorizeHeapSnapshotConstructorForOrigin,
  categorizeHeapSnapshotDeclaredTypeForOrigin,
} from '../../origins/index.ts'
import type { Origin } from '../../origins/index.ts'
import type { NodeCategoryStats } from './aggregate.ts'
import { HEAP_SNAPSHOT_NODE_CATEGORIES } from './type.ts'
import type { HeapSnapshotNode, HeapSnapshotNodeCategory } from './type.ts'

/**
 * Aggregates each node's self size and count into its category's stats.
 *
 * A constructor's stats stay keyed by its name until {@link aggregate}, since
 * the origin categorizes it by the class name its language defines. The origin
 * is detected only after the nodes are consumed.
 */
export class NodeCategoryStatsAggregator {
  /** Stats of the nodes the format categorized, by the category it derived. */
  readonly #byCategory = new KeyedNodeStats<HeapSnapshotNodeCategory>()

  /**
   * The same, for a node the format left uncategorized, by the type name it
   * declared instead.
   *
   * Kept separate from the stats above rather than sharing one map keyed by
   * either, because a format may declare a type name equal to a category name,
   * and the two mean different things.
   */
  readonly #byDeclaredType = new KeyedNodeStats<string>()

  public add(node: HeapSnapshotNode, selfSize: number): void {
    if (node.category === undefined && node.declaredType !== undefined) {
      this.#byDeclaredType.add(node, node.declaredType, selfSize)
    } else {
      this.#byCategory.add(node, node.category ?? `unknown`, selfSize)
    }
  }

  /**
   * Resolves each node's category: the origin categorizes a constructor by the
   * class name its language defines, falling back to the category the format
   * derived from the engine's own node classification.
   */
  public aggregate(
    origin: Origin,
  ): Map<HeapSnapshotNodeCategory, NodeCategoryStats> {
    const nodeCategoryToStats = new Map<
      HeapSnapshotNodeCategory,
      NodeCategoryStats
    >()

    this.#byCategory.aggregateInto(
      nodeCategoryToStats,
      origin,
      category => category,
    )
    this.#byDeclaredType.aggregateInto(
      nodeCategoryToStats,
      origin,
      declaredType =>
        categorizeHeapSnapshotDeclaredTypeForOrigin(declaredType, origin) ??
        `object`,
    )

    return nodeCategoryToStats
  }
}

/**
 * Size and count stats of the nodes sharing a key, which resolves to a category
 * only once the origin is known.
 *
 * A constructor node's stats stay keyed by its name under that key, since the
 * origin categorizes it by the class name its language defines.
 */
class KeyedNodeStats<Key> {
  readonly #keyToStats = new Map<Key, NodeCategoryStats>()
  readonly #keyToConstructorNameToStats = new Map<
    Key,
    Map<string, NodeCategoryStats>
  >()

  public add(node: HeapSnapshotNode, key: Key, selfSize: number): void {
    const stats = this.#statsOf(node, key)
    stats.size += selfSize
    stats.nodeCount++
  }

  /**
   * Adds every key's stats to {@link nodeCategoryToStats} under the category
   * {@link categoryOf} resolves the key to, or the one the origin assigns to a
   * constructor's name.
   */
  public aggregateInto(
    nodeCategoryToStats: Map<HeapSnapshotNodeCategory, NodeCategoryStats>,
    origin: Origin,
    categoryOf: (key: Key) => HeapSnapshotNodeCategory,
  ): void {
    for (const [key, stats] of this.#keyToStats) {
      addStats(nodeCategoryToStats, categoryOf(key), stats)
    }
    for (const [key, nameToStats] of this.#keyToConstructorNameToStats) {
      // `categoryOf` runs once per key rather than per constructor name, since
      // one key can have thousands of them.
      const category = categoryOf(key)
      for (const [name, stats] of nameToStats) {
        addStats(
          nodeCategoryToStats,
          categorizeHeapSnapshotConstructorForOrigin(name, origin) ?? category,
          stats,
        )
      }
    }
  }

  /**
   * The stats {@link node} aggregates into under {@link key}: its constructor
   * name's when it has one, and the key's own otherwise.
   */
  #statsOf(node: HeapSnapshotNode, key: Key): NodeCategoryStats {
    if (node.type !== `constructor`) {
      return statsOf(this.#keyToStats, key)
    }

    let nameToStats = this.#keyToConstructorNameToStats.get(key)
    if (!nameToStats) {
      nameToStats = new Map()
      this.#keyToConstructorNameToStats.set(key, nameToStats)
    }
    return statsOf(nameToStats, node.name)
  }
}

/** Adds {@link stats} to the stats {@link key} aggregates into. */
const addStats = <Key>(
  keyToStats: Map<Key, NodeCategoryStats>,
  key: Key,
  { size, nodeCount }: NodeCategoryStats,
): void => {
  const stats = statsOf(keyToStats, key)
  stats.size += size
  stats.nodeCount += nodeCount
}

/** The stats {@link key} aggregates into, inserted empty when it has none. */
const statsOf = <Key>(
  keyToStats: Map<Key, NodeCategoryStats>,
  key: Key,
): NodeCategoryStats => {
  let stats = keyToStats.get(key)
  if (!stats) {
    stats = { size: 0, nodeCount: 0 }
    keyToStats.set(key, stats)
  }
  return stats
}

type CategorizedConstructor = {
  name: string
  category: HeapSnapshotNodeCategory
}

type CategorizedString = { category: HeapSnapshotNodeCategory }

/**
 * Accumulates the self size each of an entity's nodes contributes to its
 * category, so {@link categorize} assigns the entity the category holding the
 * most of it.
 *
 * A constructor is addressed by the index it was aggregated under, and a string
 * by the order it was added in, so nothing is stored per node.
 */
export class EntityCategorizer {
  readonly #categoryKeys = new CategoryKeys()
  readonly #constructorCategories: DominantCategory[] = []
  readonly #stringCategoryKeys: number[] = []

  public addConstructorNode(
    constructorIndex: number,
    node: HeapSnapshotNode,
    selfSize: number,
  ): void {
    addCategorySize(
      (this.#constructorCategories[constructorIndex] ??= newDominantCategory()),
      this.#categoryKeys.keyOf(node),
      selfSize,
    )
  }

  /** Records the category of the next string added to the snapshot. */
  public addStringNode(node: HeapSnapshotNode): void {
    this.#stringCategoryKeys.push(this.#categoryKeys.keyOf(node))
  }

  /**
   * Assigns each constructor and string the category holding the most of its
   * self size, resolving the key its nodes accumulated under through
   * {@link origin}.
   *
   * A constructor the origin names by the class its language defines takes that
   * category instead, since the class name identifies what its instances hold
   * more precisely than the nodes do.
   */
  public categorize(
    constructors: CategorizedConstructor[],
    strings: CategorizedString[],
    origin: Origin,
  ): void {
    const categoryOf = this.#categoryKeys.newResolver(origin)
    for (let index = 0; index < constructors.length; index++) {
      const constructor = constructors[index]!
      constructor.category =
        categorizeHeapSnapshotConstructorForOrigin(constructor.name, origin) ??
        categoryOf(this.#constructorCategories[index]!.key)
    }
    for (let index = 0; index < strings.length; index++) {
      strings[index]!.category = categoryOf(this.#stringCategoryKeys[index]!)
    }
  }
}

/**
 * Numbers the key an entity's self size accumulates under: the category the
 * format derived, or the type name it declared when the format categorized
 * nothing.
 *
 * The two share one key space, since an entity's nodes may report either and
 * the entity takes the key holding the most of its self size. A category is
 * numbered from {@link HEAP_SNAPSHOT_NODE_CATEGORIES} and a declared type name
 * from the order the snapshot declares them in. A key's sign distinguishes the
 * two, because a format may declare a type name equal to a category name, and
 * the two mean different things.
 */
class CategoryKeys {
  readonly #declaredTypes: string[] = []
  readonly #declaredTypeToKey = new Map<string, number>()

  public keyOf(node: HeapSnapshotNode): number {
    if (node.category !== undefined || node.declaredType === undefined) {
      return CATEGORY_TO_KEY.get(node.category ?? `unknown`)!
    }

    let key = this.#declaredTypeToKey.get(node.declaredType)
    if (key === undefined) {
      key = -this.#declaredTypes.push(node.declaredType)
      this.#declaredTypeToKey.set(node.declaredType, key)
    }
    return key
  }

  /**
   * Resolves a {@link keyOf} key to its category, passing a declared type name
   * through {@link origin} and falling back to `object` for a type name the
   * origin doesn't categorize.
   *
   * Memoized, since a snapshot declaring its own type names can hold thousands
   * of them and every entity resolves one.
   */
  public newResolver(
    origin: Origin,
  ): (key: number) => HeapSnapshotNodeCategory {
    const declaredTypeCategories = new Array<
      HeapSnapshotNodeCategory | undefined
    >(this.#declaredTypes.length)
    return key => {
      if (key > 0) {
        return HEAP_SNAPSHOT_NODE_CATEGORIES[key - 1]!
      }
      const index = -key - 1
      return (declaredTypeCategories[index] ??=
        categorizeHeapSnapshotDeclaredTypeForOrigin(
          this.#declaredTypes[index]!,
          origin,
        ) ?? `object`)
    }
  }
}

/** The key of each category, numbered from 1 so that no key is 0. */
const CATEGORY_TO_KEY = new Map<HeapSnapshotNodeCategory, number>(
  HEAP_SNAPSHOT_NODE_CATEGORIES.map((category, index) => [category, index + 1]),
)

/**
 * Which category holds the most of an entity's self size, tracked as its nodes
 * are accumulated.
 *
 * The nodes of most entities report one category, though a DOM wrapper class
 * exists as both a host-allocated node and a plain object. The sizes of the
 * categories behind the leading one are recorded only once a second category
 * appears.
 */
type DominantCategory = {
  /** The leading category's key, {@link NO_CATEGORY_KEY} until the first node. */
  key: number

  size: number
  otherSizes?: Map<number, number>
}

/**
 * The key of a {@link DominantCategory} no node has contributed to yet, which
 * {@link CategoryKeys.keyOf} never returns.
 */
const NO_CATEGORY_KEY = 0

const newDominantCategory = (): DominantCategory => ({
  key: NO_CATEGORY_KEY,
  size: 0,
})

/**
 * Adds {@link size} to {@link key}'s share of {@link dominant}, promoting
 * {@link key} to the leading category when its share passes the leader's.
 *
 * An entity whose nodes all report a zero self size keeps the key of the first
 * node added, since no later key ever passes a zero share.
 */
const addCategorySize = (
  dominant: DominantCategory,
  key: number,
  size: number,
): void => {
  if (dominant.key === key || dominant.key === NO_CATEGORY_KEY) {
    dominant.key = key
    dominant.size += size
    return
  }

  dominant.otherSizes ??= new Map<number, number>()
  const { otherSizes } = dominant
  const keySize = (otherSizes.get(key) ?? 0) + size
  if (keySize <= dominant.size) {
    otherSizes.set(key, keySize)
    return
  }

  otherSizes.set(dominant.key, dominant.size)
  otherSizes.delete(key)
  dominant.key = key
  dominant.size = keySize
}
