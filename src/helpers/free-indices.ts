/**
 * Which indices of a range are free, as a disjoint-set forest: a taken index
 * points at the one after it, and walking a path shortens it. A search skips a
 * run of taken indices in one hop once the run has been walked, and visits each
 * index once.
 *
 * This is union-find restricted to unions of adjacent indices, the interval
 * union-find Gabow and Tarjan gave a linear-time algorithm for, exposed as a
 * successor query rather than an equivalence one. A set is a run of taken
 * indices ending at one free index, and a search returns that free index. The
 * free index must be the set's representative, so a union's representative is
 * forced and union by size or rank cannot apply, leaving path compression alone
 * to amortize a search to `O(log n)`.
 *
 * @see https://www.sciencedirect.com/science/article/pii/0022000085900145
 */
export class FreeIndices {
  readonly #next: Int32Array

  /** Takes the number of indices, `0` to {@link count} exclusive, all free. */
  public constructor(count: number) {
    this.#next = new Int32Array(count + 1)
    for (let index = 0; index <= count; index++) {
      this.#next[index] = index
    }
  }

  /**
   * Returns the first free index at or after {@link index}, or the count when
   * every index from there on is taken.
   */
  public firstFrom(index: number): number {
    const next = this.#next
    let root = index
    while (next[root] !== root) {
      root = next[root]!
    }
    while (next[index] !== root) {
      const after = next[index]!
      next[index] = root
      index = after
    }
    return root
  }

  public take(index: number): void {
    this.#next[index] = index + 1
  }
}
