export class MaxHeap<Value> {
  readonly #keys: Float64Array
  readonly #values: readonly Value[]

  /** Indices into {@link MaxHeap#keys} and {@link MaxHeap#values}. */
  readonly #heap: Int32Array

  #size: number

  public constructor(
    values: readonly Value[],
    select: (value: Value) => number,
  ) {
    const count = values.length
    const heap = new Int32Array(count)
    const keys = new Float64Array(count)
    for (let i = 0; i < count; i++) {
      heap[i] = i
      keys[i] = select(values[i]!)
    }

    this.#keys = keys
    this.#values = values
    this.#heap = heap
    this.#size = count
    for (let i = Math.floor(count / 2) - 1; i >= 0; i--) {
      this.#siftDown(i)
    }
  }

  public get length(): number {
    return this.#size
  }

  /** Returns the values not yet popped, in arbitrary order. */
  public values(): Value[] {
    const values: Value[] = []
    for (let i = 0; i < this.#size; i++) {
      values.push(this.#values[this.#heap[i]!]!)
    }
    return values
  }

  public pop(): Value | undefined {
    if (this.#size === 0) {
      return undefined
    }

    const maxIndex = this.#heap[0]!
    this.#heap[0] = this.#heap[--this.#size]!
    this.#siftDown(0)
    return this.#values[maxIndex]!
  }

  #siftDown(index: number): void {
    while (true) {
      let largest = 2 * index + 1
      if (largest >= this.#size) {
        break
      }
      const right = largest + 1
      if (right < this.#size) {
        const leftKey = this.#keys[this.#heap[largest]!]!
        const rightKey = this.#keys[this.#heap[right]!]!
        // Lower original index wins ties (stable sort).
        if (
          rightKey > leftKey ||
          (rightKey === leftKey && this.#heap[right]! < this.#heap[largest]!)
        ) {
          largest = right
        }
      }
      const largestKey = this.#keys[this.#heap[largest]!]!
      const indexKey = this.#keys[this.#heap[index]!]!
      if (
        largestKey < indexKey ||
        (largestKey === indexKey && this.#heap[largest]! > this.#heap[index]!)
      ) {
        break
      }
      const tmp = this.#heap[index]!
      this.#heap[index] = this.#heap[largest]!
      this.#heap[largest] = tmp
      index = largest
    }
  }
}

/**
 * A max-heap with per-value keys that supports pushing after construction,
 * for consumers that re-insert values under decreased keys.
 */
export class MutableMaxHeap<Value> {
  readonly #values: Value[] = []
  readonly #keys: number[] = []

  public get length(): number {
    return this.#values.length
  }

  /** The largest key, or `-Infinity` when empty. */
  public peekKey(): number {
    return this.#keys.length === 0 ? -Infinity : this.#keys[0]!
  }

  public push(value: Value, key: number): void {
    const values = this.#values
    const keys = this.#keys
    let index = values.length
    values.push(value)
    keys.push(key)
    while (index > 0) {
      const parentIndex = (index - 1) >> 1
      if (keys[parentIndex]! >= key) {
        break
      }
      values[index] = values[parentIndex]!
      keys[index] = keys[parentIndex]!
      index = parentIndex
    }
    values[index] = value
    keys[index] = key
  }

  public pop(): Value | undefined {
    const values = this.#values
    const keys = this.#keys
    if (values.length === 0) {
      return undefined
    }

    const max = values[0]!
    const lastValue = values.pop()!
    const lastKey = keys.pop()!
    if (values.length > 0) {
      let index = 0
      while (true) {
        let largest = 2 * index + 1
        if (largest >= values.length) {
          break
        }
        const right = largest + 1
        if (right < values.length && keys[right]! > keys[largest]!) {
          largest = right
        }
        if (keys[largest]! <= lastKey) {
          break
        }
        values[index] = values[largest]!
        keys[index] = keys[largest]!
        index = largest
      }
      values[index] = lastValue
      keys[index] = lastKey
    }
    return max
  }
}

export const selectTopN = <Value>(
  values: readonly Value[],
  topN: number,
  select: (value: Value) => number,
): Value[] => {
  if (topN === 0) {
    return []
  }
  if (values.length <= topN) {
    return values.toSorted((value1, value2) => select(value2) - select(value1))
  }

  const heap = new MaxHeap(values, select)
  return Array.from({ length: topN }, () => heap.pop()!)
}
