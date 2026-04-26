export class MaxHeap<Value> {
  readonly #heap: [number, Value][]
  #size: number
  readonly #compare: (
    entry1: [number, Value],
    entry2: [number, Value],
  ) => number

  public constructor(
    values: readonly Value[],
    compare: (value1: Value, value2: Value) => number,
  ) {
    this.#heap = [...values.entries()]
    this.#size = this.#heap.length
    this.#compare = ([index1, value1], [index2, value2]) => {
      const result = compare(value1, value2)
      return result === 0 ? index2 - index1 : result
    }
    for (let i = Math.floor(this.#size / 2) - 1; i >= 0; i--) {
      this.#siftDown(i)
    }
  }

  public get length(): number {
    return this.#size
  }

  public pop(): Value | undefined {
    if (this.#size === 0) {
      return undefined
    }

    const max = this.#heap[0]![1]
    this.#heap[0] = this.#heap[--this.#size]!
    this.#siftDown(0)
    return max
  }

  #siftDown(i: number): void {
    while (true) {
      let largest = 2 * i + 1
      if (largest >= this.#size) {
        break
      }
      const right = largest + 1
      if (
        right < this.#size &&
        this.#compare(this.#heap[right]!, this.#heap[largest]!) > 0
      ) {
        largest = right
      }
      if (this.#compare(this.#heap[largest]!, this.#heap[i]!) <= 0) {
        break
      }
      ;[this.#heap[i], this.#heap[largest]] = [
        this.#heap[largest]!,
        this.#heap[i]!,
      ]
      i = largest
    }
  }
}

export const selectTopN = <Value>(
  values: readonly Value[],
  topN: number,
  compare: (value1: Value, value2: Value) => number,
): Value[] => {
  if (topN === 0) {
    return []
  }
  if (values.length <= topN) {
    return values.toSorted((value1, value2) => compare(value2, value1))
  }

  const heap = new MaxHeap(values, compare)
  return Array.from({ length: topN }, () => heap.pop()!)
}
