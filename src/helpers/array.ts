type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array

type TypedArrayConstructor<T extends TypedArray> = new (length: number) => T

/**
 * A {@link TypedArray} wrapper that's growable.
 *
 * It's useful when the maximum length is unknown, whether because the indices
 * are sequential IDs that arrive out of order, or because the elements are
 * appended one batch at a time.
 */
export class DynamicTypedArray<T extends TypedArray> {
  #array: T
  readonly #arrayConstructor: TypedArrayConstructor<T>

  public constructor(initialArray: T) {
    this.#array = initialArray
    this.#arrayConstructor =
      initialArray.constructor as TypedArrayConstructor<T>
  }

  /** The array as it is currently sized. */
  public get array(): T {
    return this.#array
  }

  public ensureCapacity(minLength: number): T {
    if (minLength > this.#array.length) {
      const grown = new this.#arrayConstructor(
        Math.max(minLength, this.#array.length * 2),
      )
      grown.set(this.#array as never)
      this.#array = grown
    }

    return this.#array
  }
}
