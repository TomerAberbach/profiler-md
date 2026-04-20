export const selectTopN = <Value>(
  values: readonly Value[],
  topN: number,
  compare: (value1: Value, value2: Value) => number,
): Value[] => {
  if (topN === 0) {
    return []
  }
  if (values.length <= topN) {
    return values.toSorted(compare)
  }

  // Track original indices alongside items so equal-valued elements are ordered
  // by their position in `values`, matching `.sort(...)`'s stability.
  const stableCompare = (
    [index1, value1]: [number, Value],
    [index2, value2]: [number, Value],
  ): number => {
    const result = compare(value1, value2)
    return result === 0 ? index1 - index2 : result
  }

  const heap: [number, Value][] = [...values.entries()]
  for (let i = Math.floor(topN / 2) - 1; i >= 0; i--) {
    siftDown(heap, i, topN, stableCompare)
  }

  for (let i = topN; i < values.length; i++) {
    const candidate: [number, Value] = [i, values[i]!]
    if (stableCompare(candidate, heap[0]!) < 0) {
      heap[0] = candidate
      siftDown(heap, 0, topN, stableCompare)
    }
  }

  return heap
    .slice(0, topN)
    .sort(stableCompare)
    .map(([, value]) => value)
}

const siftDown = <Value>(
  heap: Value[],
  i: number,
  size: number,
  compare: (value1: Value, value2: Value) => number,
): void => {
  while (true) {
    let minChild = 2 * i + 1
    if (minChild >= size) {
      break
    }
    const right = minChild + 1
    if (right < size && compare(heap[minChild]!, heap[right]!) < 0) {
      minChild = right
    }
    if (compare(heap[i]!, heap[minChild]!) >= 0) {
      break
    }
    ;[heap[i], heap[minChild]] = [heap[minChild]!, heap[i]!]
    i = minChild
  }
}
