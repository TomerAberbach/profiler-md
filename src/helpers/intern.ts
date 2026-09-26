const FNV_OFFSET_BASIS = 0x81_1c_9d_c5
const FNV_PRIME = 0x01_00_01_93

/**
 * The seed a structural key's hash starts from. Callers fold each component of
 * the key into it in order with {@link mixHash}.
 */
export const HASH_SEED: number = FNV_OFFSET_BASIS

/**
 * Folds {@link value} into the running 32-bit FNV-1a {@link hash} and returns
 * the new hash. Pure, so a loop over a key's components keeps the running hash
 * in a local instead of a heap field, and the call inlines.
 */
export const mixHash = (hash: number, value: number): number =>
  Math.imul(hash ^ value, FNV_PRIME)

/**
 * A deduplicating collection: appends one canonical {@link Value} per distinct
 * structural key and returns its index.
 *
 * Use it instead of a `Map` when the key is a sequence or tuple on a hot path.
 * A `Map` requires serializing each key to a string (e.g. `ids.join(',')`) per
 * lookup, which allocates the string and hashes it over its full length. This
 * folds the key's components into a number with {@link mixHash} instead, and
 * calls {@link matches} only on a hash collision. For a primitive key, a plain
 * `Map` is simpler and as fast.
 */
export class HashInterner<Key, Value> {
  readonly #values: Value[] = []
  readonly #indicesByHash = new Map<number, number | number[]>()

  readonly #hash: (key: Key) => number
  readonly #matches: (item: Value, key: Key) => boolean

  public constructor(
    /**
     * Folds the key's components into a hash, starting from {@link HASH_SEED}
     * and mixing each with {@link mixHash}.
     */
    hash: (key: Key) => number,
    matches: (item: Value, key: Key) => boolean,
  ) {
    this.#hash = hash
    this.#matches = matches
  }

  /**
   * The interned items in insertion order; index `i` is what {@link intern}
   * returned.
   */
  public get items(): Value[] {
    return this.#values
  }

  /**
   * Returns the index of the item already interned for {@link key}, or appends
   * a fresh one from {@link create} and returns its index when none matches.
   */
  public intern(key: Key, create: () => Value): number {
    const hash = this.#hash(key) >>> 0
    const bucket = this.#indicesByHash.get(hash)
    if (bucket === undefined) {
      const index = this.#add(create)
      this.#indicesByHash.set(hash, index)
      return index
    }

    if (typeof bucket === `number`) {
      if (this.#matches(this.#values[bucket]!, key)) {
        return bucket
      }
      const index = this.#add(create)
      this.#indicesByHash.set(hash, [bucket, index])
      return index
    }

    for (const candidate of bucket) {
      if (this.#matches(this.#values[candidate]!, key)) {
        return candidate
      }
    }
    const index = this.#add(create)
    bucket.push(index)
    return index
  }

  #add(create: () => Value): number {
    const index = this.#values.length
    this.#values.push(create())
    return index
  }
}
