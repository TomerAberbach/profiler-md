/**
 * Accumulates integers into a single 32-bit FNV-1a hash. Callers {@link add}
 * each component of a structural key in order and read the combined hash from
 * {@link value}; the seed and mixing constants live here so callers declare only
 * what to hash, not how.
 */
export class HashSink {
  static readonly #OFFSET_BASIS = 0x81_1c_9d_c5
  static readonly #PRIME = 0x01_00_01_93

  #hash = HashSink.#OFFSET_BASIS

  /** Folds {@link value} into the running hash, returning `this` to chain. */
  public add(value: number): this {
    this.#hash = Math.imul(this.#hash ^ value, HashSink.#PRIME)
    return this
  }

  /** Clears the running hash back to the seed for reuse across keys. */
  public reset(): void {
    this.#hash = HashSink.#OFFSET_BASIS
  }

  /** The accumulated hash as an unsigned 32-bit integer. */
  public get value(): number {
    return this.#hash >>> 0
  }
}

/**
 * A deduplicating collection: appends one canonical {@link Value} per distinct
 * structural key and returns its index, merging values whose keys match.
 *
 * Use this over a `Map` when the dedup key is structural: a sequence or tuple,
 * not a primitive. A `Map` keys only on primitives, so deduping by
 * structure forces serializing each key to a string (e.g. `ids.join(',')`) per
 * lookup. That string is allocated and then hashed over its full length, since
 * a freshly built string carries no cached hash; both costs scale with key
 * size, and the allocation feeds GC. This instead folds the key's components
 * into a number directly via a {@link HashSink}, with no string or allocation,
 * and the `Map<number, …>` it indexes by hashes just that one number. The
 * caller's {@link matches} check runs only on a hash collision, which is rare,
 * so distinct keys that hash alike still stay distinct.
 *
 * So it pays off only for structural keys on a path hot enough that the
 * per-lookup string would show; for an already-primitive key a plain `Map` is
 * simpler and just as fast.
 *
 * Owning the backing list keeps it and the hash index in lockstep: every item
 * is appended exactly once, and {@link items} is its canonical order. Callers
 * that key by position (e.g. event stack-trace IDs) use the returned index;
 * callers that want the value read it back from {@link items}.
 */
export class HashInterner<Key, Value> {
  readonly #values: Value[] = []
  readonly #indicesByHash = new Map<number, number | number[]>()

  // Reused across `intern` calls so hashing a key allocates nothing; safe
  // because `intern` is synchronous and never reentrant.
  readonly #sink = new HashSink()

  readonly #hash: (key: Key, sink: HashSink) => void
  readonly #matches: (item: Value, key: Key) => boolean

  public constructor(
    hash: (key: Key, sink: HashSink) => void,
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
    const add = (): number => {
      const index = this.#values.length
      this.#values.push(create())
      return index
    }

    this.#sink.reset()
    this.#hash(key, this.#sink)
    const hash = this.#sink.value
    const bucket = this.#indicesByHash.get(hash)
    if (bucket === undefined) {
      const index = add()
      this.#indicesByHash.set(hash, index)
      return index
    }

    if (typeof bucket === `number`) {
      if (this.#matches(this.#values[bucket]!, key)) {
        return bucket
      }
      const index = add()
      this.#indicesByHash.set(hash, [bucket, index])
      return index
    }

    for (const candidate of bucket) {
      if (this.#matches(this.#values[candidate]!, key)) {
        return candidate
      }
    }
    const index = add()
    bucket.push(index)
    return index
  }
}
