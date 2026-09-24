/**
 * Assigns each node its strongly connected component index via iterative
 * Tarjan.
 *
 * A node is an index into {@link nodeToEdges}, which contains its outgoing
 * edges, and {@link select} maps an edge to the node it points to.
 */
export const stronglyConnectedComponents = <Edge>(
  nodeToEdges: readonly (readonly Edge[])[],
  select: (edge: Edge) => number,
): number[] => new ComponentSearch(nodeToEdges, select).search()

type TraversalFrame<Edge> = {
  node: number
  edges: readonly Edge[]

  /** The position in {@link edges} the traversal resumes at. */
  nextEdge: number
}

class ComponentSearch<Edge> {
  readonly #nodeToEdges: readonly (readonly Edge[])[]
  readonly #select: (edge: Edge) => number

  /** Per node, its discovery index, or `-1` before it is reached. */
  readonly #indices: number[]

  /** Per node, the lowest discovery index reachable from it. */
  readonly #lowLinks: number[]

  readonly #componentIndices: number[]

  /** The nodes whose component is still open, and their membership. */
  readonly #stack: number[] = []
  readonly #onStack: boolean[]

  #nextIndex = 0
  #nextComponent = 0

  public constructor(
    nodeToEdges: readonly (readonly Edge[])[],
    select: (edge: Edge) => number,
  ) {
    const count = nodeToEdges.length
    this.#nodeToEdges = nodeToEdges
    this.#select = select
    this.#indices = new Array<number>(count).fill(-1)
    this.#lowLinks = new Array<number>(count).fill(-1)
    this.#componentIndices = new Array<number>(count).fill(-1)
    this.#onStack = new Array<boolean>(count).fill(false)
  }

  public search(): number[] {
    for (let start = 0; start < this.#nodeToEdges.length; start++) {
      if (this.#indices[start] === -1) {
        this.#searchFrom(start)
      }
    }
    return this.#componentIndices
  }

  #searchFrom(start: number): void {
    const traversal = [this.#discover(start)]

    while (traversal.length > 0) {
      const frame = traversal.at(-1)!

      if (frame.nextEdge < frame.edges.length) {
        const target = this.#select(frame.edges[frame.nextEdge++]!)
        if (this.#indices[target] === -1) {
          traversal.push(this.#discover(target))
        } else if (this.#onStack[target]) {
          this.#lowerLink(frame.node, this.#indices[target]!)
        }
        continue
      }

      traversal.pop()
      if (this.#lowLinks[frame.node] === this.#indices[frame.node]) {
        this.#closeComponent(frame.node)
      }
      const source = traversal.at(-1)
      if (source) {
        this.#lowerLink(source.node, this.#lowLinks[frame.node]!)
      }
    }
  }

  #discover(node: number): TraversalFrame<Edge> {
    this.#indices[node] = this.#nextIndex
    this.#lowLinks[node] = this.#nextIndex
    this.#nextIndex++
    this.#stack.push(node)
    this.#onStack[node] = true
    return { node, edges: this.#nodeToEdges[node]!, nextEdge: 0 }
  }

  #lowerLink(node: number, lowLink: number): void {
    this.#lowLinks[node] = Math.min(this.#lowLinks[node]!, lowLink)
  }

  #closeComponent(root: number): void {
    while (true) {
      const member = this.#stack.pop()!
      this.#onStack[member] = false
      this.#componentIndices[member] = this.#nextComponent
      if (member === root) {
        break
      }
    }
    this.#nextComponent++
  }
}
