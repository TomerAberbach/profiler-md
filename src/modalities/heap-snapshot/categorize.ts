/**
 * A category resolves only once the origin is known, because the origin
 * categorizes a constructor by the class name its language defines and maps the
 * type names a format declares itself. The origin is detected only after the
 * nodes are consumed, so the aggregators here accumulate sizes under a key
 * while the nodes are consumed, and resolve that key to a category afterwards.
 */

import {
  categorizeHeapSnapshotConstructorForOrigin,
  categorizeHeapSnapshotDeclaredTypeForOrigin,
} from '../../origins/index.ts'
import type { Origin } from '../../origins/index.ts'
import type { NodeCategoryStats } from './aggregate.ts'
import { HEAP_SNAPSHOT_NODE_CATEGORIES } from './type.ts'
import type {
  HeapSnapshotNode,
  HeapSnapshotNodeCategory,
  UnresolvedHeapSnapshotNodeCategory,
} from './type.ts'

/**
 * Aggregates each node's self size and count into its category's stats, with
 * a constructor node's stats kept by its name so the origin can categorize it
 * by its class.
 */
export class NodeCategoryStatsAggregator {
  readonly #keyToStats = new Map<number, NodeCategoryStats>()
  readonly #keyToConstructorNameToStats = new Map<
    number,
    Map<string, NodeCategoryStats>
  >()

  /** Adds a node under its {@link CategoryKeys} key. */
  public add(node: HeapSnapshotNode, key: number, selfSize: number): void {
    const stats = this.#statsOf(node, key)
    stats.size += selfSize
    stats.nodeCount++
  }

  #statsOf(node: HeapSnapshotNode, key: number): NodeCategoryStats {
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

  public aggregate({
    ofKey,
    ofConstructor,
  }: CategoryResolver): Map<HeapSnapshotNodeCategory, NodeCategoryStats> {
    const nodeCategoryToStats = new Map<
      HeapSnapshotNodeCategory,
      NodeCategoryStats
    >()
    for (const [key, stats] of this.#keyToStats) {
      addStats(nodeCategoryToStats, ofKey(key), stats)
    }
    for (const [key, nameToStats] of this.#keyToConstructorNameToStats) {
      const category = ofKey(key)
      for (const [name, stats] of nameToStats) {
        addStats(nodeCategoryToStats, ofConstructor(name) ?? category, stats)
      }
    }
    return nodeCategoryToStats
  }
}

const addStats = <Key>(
  keyToStats: Map<Key, NodeCategoryStats>,
  key: Key,
  { size, nodeCount }: NodeCategoryStats,
): void => {
  const stats = statsOf(keyToStats, key)
  stats.size += size
  stats.nodeCount += nodeCount
}

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
  readonly #constructorCategories: DominantCategory[] = []
  readonly #stringCategoryKeys: number[] = []

  /** Adds a constructor's node under its {@link CategoryKeys} key. */
  public addConstructorNode(
    constructorIndex: number,
    key: number,
    selfSize: number,
  ): void {
    addCategorySize(
      (this.#constructorCategories[constructorIndex] ??= newDominantCategory()),
      key,
      selfSize,
    )
  }

  /** Records the {@link CategoryKeys} key of the next string added. */
  public addStringNode(key: number): void {
    this.#stringCategoryKeys.push(key)
  }

  /**
   * Assigns each constructor and string the category holding the most of its
   * self size, or a constructor the category the origin assigns its class.
   */
  public categorize(
    constructors: CategorizedConstructor[],
    strings: CategorizedString[],
    { ofKey, ofConstructor }: CategoryResolver,
  ): void {
    for (let index = 0; index < constructors.length; index++) {
      const constructor = constructors[index]!
      constructor.category =
        ofConstructor(constructor.name) ??
        ofKey(this.#constructorCategories[index]!.key)
    }
    for (let index = 0; index < strings.length; index++) {
      strings[index]!.category = ofKey(this.#stringCategoryKeys[index]!)
    }
  }
}

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

const newDominantCategory = (): DominantCategory => ({
  key: NO_CATEGORY_KEY,
  size: 0,
})

/**
 * The key of a {@link DominantCategory} no node has contributed to yet, which
 * {@link CategoryKeys.keyOf} never returns.
 */
const NO_CATEGORY_KEY = 0

/**
 * Numbers the key a node's stats accumulate under: the category the format
 * derived, or the type name it declared when the format categorized nothing.
 *
 * The two share one key space, since an entity's nodes may report either and
 * the entity takes the key holding the most of its self size. A key's sign
 * distinguishes the two, because a format may declare a type name equal to a
 * category name, and the two mean different things.
 */
export class CategoryKeys {
  readonly #declaredTypes: string[] = []
  readonly #declaredTypeToKey = new Map<string, number>()

  public keyOf({
    category,
    declaredType,
  }: UnresolvedHeapSnapshotNodeCategory): number {
    if (category !== undefined || declaredType === undefined) {
      return CATEGORY_TO_KEY.get(category ?? `unknown`)!
    }

    let key = this.#declaredTypeToKey.get(declaredType)
    if (key === undefined) {
      key = -this.#declaredTypes.push(declaredType)
      this.#declaredTypeToKey.set(declaredType, key)
    }
    return key
  }

  /**
   * Resolves keys, unresolved categories, and the class names constructors
   * define to categories under {@link origin}.
   *
   * Memoized by declared type, since a snapshot declaring its own type names
   * can hold thousands of them.
   */
  public newResolver(origin: Origin): CategoryResolver {
    const declaredTypeToCategory = new Map<string, HeapSnapshotNodeCategory>()
    const ofDeclaredType = (declaredType: string): HeapSnapshotNodeCategory => {
      let category = declaredTypeToCategory.get(declaredType)
      if (category === undefined) {
        category =
          categorizeHeapSnapshotDeclaredTypeForOrigin(declaredType, origin) ??
          `object`
        declaredTypeToCategory.set(declaredType, category)
      }
      return category
    }
    return {
      ofKey: key =>
        key > 0
          ? HEAP_SNAPSHOT_NODE_CATEGORIES[key - 1]!
          : ofDeclaredType(this.#declaredTypes[-key - 1]!),
      ofUnresolved: ({ category, declaredType }) =>
        category ??
        (declaredType === undefined ? `unknown` : ofDeclaredType(declaredType)),
      ofConstructor: name =>
        categorizeHeapSnapshotConstructorForOrigin(name, origin),
    }
  }
}

/** The categories under one origin, resolved from what the nodes report. */
export type CategoryResolver = {
  /** The category of a {@link CategoryKeys} key. */
  ofKey: (key: number) => HeapSnapshotNodeCategory

  /** The category of a node's unresolved category, creating no key. */
  ofUnresolved: (
    unresolved: UnresolvedHeapSnapshotNodeCategory,
  ) => HeapSnapshotNodeCategory

  /**
   * The category the origin assigns to a constructor by the class name its
   * language defines, which takes precedence over its nodes' own category.
   */
  ofConstructor: (name: string) => HeapSnapshotNodeCategory | undefined
}

/** The key of each category, numbered from 1 so that no key is 0. */
const CATEGORY_TO_KEY = new Map<HeapSnapshotNodeCategory, number>(
  HEAP_SNAPSHOT_NODE_CATEGORIES.map((category, index) => [category, index + 1]),
)
