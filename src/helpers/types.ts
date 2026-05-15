type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float16Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array

/**
 * Recursively makes all properties of `T` readonly, including nested objects,
 * arrays, and `Map`/`Set` collections.
 */
export type DeepReadonly<T> =
  T extends Map<infer K, infer V>
    ? ReadonlyMap<K, DeepReadonly<V>>
    : T extends Set<infer V>
      ? ReadonlySet<DeepReadonly<V>>
      : T extends TypedArray
        ? Readonly<T>
        : T extends (infer U)[]
          ? readonly DeepReadonly<U>[]
          : T extends object
            ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
            : T
