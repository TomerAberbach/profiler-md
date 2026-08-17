/**
 * A map from an HPROF object ID to a node ordinal.
 *
 * An object ID is the object's address in the dumped process, so the IDs are
 * 64-bit and sparse: a `Map` would allocate an entry object per heap object,
 * of which a dump holds millions. This stores them in two typed arrays with
 * open addressing and linear probing instead.
 *
 * ID `0` is the null reference, which is never an object, so a zero key marks
 * an empty slot.
 */
export class ObjectIdToOrdinal {
  #objectIds: Float64Array
  #ordinals: Int32Array
  #mask: number
  #size = 0

  /** Grows once the table passes this share of its capacity. */
  static readonly #MAX_LOAD = 0.7

  public constructor(initialCapacity = 1 << 12) {
    const capacity = nextPowerOfTwo(initialCapacity)
    this.#objectIds = new Float64Array(capacity)
    this.#ordinals = new Int32Array(capacity)
    this.#mask = capacity - 1
  }

  /**
   * Assigns {@link ordinal} to {@link objectId}, keeping the ordinal already
   * assigned when the dump repeats an ID.
   */
  public set(objectId: number, ordinal: number): void {
    let slot = hashObjectId(objectId) & this.#mask
    while (this.#objectIds[slot] !== 0) {
      if (this.#objectIds[slot] === objectId) {
        return
      }
      slot = (slot + 1) & this.#mask
    }

    this.#objectIds[slot] = objectId
    this.#ordinals[slot] = ordinal
    if (++this.#size > (this.#mask + 1) * ObjectIdToOrdinal.#MAX_LOAD) {
      this.#grow()
    }
  }

  /** The ordinal of {@link objectId}, or -1 for an ID the dump never defines. */
  public get(objectId: number): number {
    let slot = hashObjectId(objectId) & this.#mask
    while (this.#objectIds[slot] !== 0) {
      if (this.#objectIds[slot] === objectId) {
        return this.#ordinals[slot]!
      }
      slot = (slot + 1) & this.#mask
    }
    return -1
  }

  #grow(): void {
    const objectIds = this.#objectIds
    const ordinals = this.#ordinals
    const capacity = objectIds.length * 2
    this.#objectIds = new Float64Array(capacity)
    this.#ordinals = new Int32Array(capacity)
    this.#mask = capacity - 1
    this.#size = 0
    for (let slot = 0; slot < objectIds.length; slot++) {
      const objectId = objectIds[slot]!
      if (objectId !== 0) {
        this.set(objectId, ordinals[slot]!)
      }
    }
  }
}

/**
 * Mixes an object ID's low and high 32 bits into a 32-bit slot hash.
 *
 * Addresses cluster by allocation, so the low bits alone would probe long runs
 * of neighboring slots.
 */
const hashObjectId = (objectId: number): number => {
  const low = objectId >>> 0
  const high = (objectId / 0x1_00_00_00_00) >>> 0
  return (Math.imul(low ^ high, 0x9e_37_79_b1) >>> 0) ^ (low >>> 16)
}

const nextPowerOfTwo = (value: number): number => {
  let result = 1
  while (result < value) {
    result *= 2
  }
  return result
}
