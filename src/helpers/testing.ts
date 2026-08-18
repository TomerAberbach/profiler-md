import type {
  Heading,
  Table as MdastTable,
  Node,
  Root,
  RootContent,
} from 'mdast'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { gfmFromMarkdown } from 'mdast-util-gfm'
import { gfm } from 'micromark-extension-gfm'
import { DynamicTypedArray } from './array.ts'
import { nodeText } from './markdown.ts'

/** Wraps {@link chunks} in a `ReadableStream`. */
export const streamOf = (...chunks: Uint8Array[]): ReadableStream<Uint8Array> =>
  new ReadableStream({
    start(controller) {
      for (const chunk of chunks) {
        controller.enqueue(chunk)
      }
      controller.close()
    },
  })

/** Splits {@link bytes} into chunks of at most {@link chunkSize} bytes. */
export const chunk = (bytes: Uint8Array, chunkSize: number): Uint8Array[] => {
  const chunks: Uint8Array[] = []
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    chunks.push(bytes.subarray(offset, offset + chunkSize))
  }
  return chunks
}

/**
 * A growable buffer of bytes written for a test.
 *
 * It encodes the parts binary formats share: single bytes, byte runs, and
 * unsigned LEB128. A format's writer wraps it and adds the integer widths,
 * endianness, and record framing its own encoding uses.
 */
export class ByteBuffer {
  readonly #bytes = new DynamicTypedArray(new Uint8Array(1024))
  #length = 0

  public byte(value: number): void {
    this.#bytes.ensureCapacity(this.#length + 1)[this.#length++] = value & 0xff
  }

  public bytes(bytes: Uint8Array): void {
    this.#bytes
      .ensureCapacity(this.#length + bytes.length)
      .set(bytes, this.#length)
    this.#length += bytes.length
  }

  /** Writes an unsigned LEB128 integer, seven bits per byte, low group first. */
  public leb128(value: number): void {
    let remaining = value
    while (remaining >= 0x80) {
      this.byte((remaining % 128) | 0x80)
      remaining = Math.floor(remaining / 128)
    }
    this.byte(remaining)
  }

  /** The bytes written so far, copied so later writes don't change them. */
  public toBytes(): Uint8Array {
    return this.#bytes.array.slice(0, this.#length)
  }
}

type Row = Record<string, string>
export type Table = Row[]

export const parseMd = (markdown: string): Root =>
  fromMarkdown(markdown, {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown()],
  })

/**
 * Each {@link heading} section's ranking table: the first table under the
 * heading, or the first one in a subsection of it when the ranking shows only
 * under the category every ranked entry falls in.
 */
export const allTablesAfterHeading = (root: Root, heading: string): Table[] => {
  const nodes = root.children
  const results: Table[] = []
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]!
    if (node.type === `heading` && nodeText(node) === heading) {
      const table = firstTableInSection(nodes, i + 1, node.depth)
      if (table) {
        results.push(rowsFromTable(table))
      }
    }
  }
  return results
}

const firstTableInSection = (
  nodes: readonly (Node | RootContent)[],
  from: number,
  depth: number,
): MdastTable | undefined => {
  for (let i = from; i < nodes.length; i++) {
    const node = nodes[i]!
    if (node.type === `heading` && (node as Heading).depth <= depth) {
      break
    }
    if (node.type === `table`) {
      return node as MdastTable
    }
  }
  return undefined
}

export const allTablesAfterHeadingContaining = (
  nodes: readonly Node[],
  substring: string,
): Table[] => {
  const results: Table[] = []
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]!
    if (node.type === `heading` && nodeText(node).includes(substring)) {
      const table = firstTableInSection(nodes, i + 1, (node as Heading).depth)
      if (table) {
        results.push(rowsFromTable(table))
      }
    }
  }
  return results
}

export const nodesUnderHeading = (root: Root, heading: string): Node[] =>
  nodesUnderHeadingIn(root.children, heading)

export const nodesUnderHeadingIn = (
  nodes: readonly (Node | RootContent)[],
  heading: string,
): Node[] => {
  let start = -1
  let depth = -1
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]!
    if (node.type === `heading`) {
      const { depth: nodeDepth } = node as Heading
      if (start === -1 && nodeText(node) === heading) {
        start = i + 1
        depth = nodeDepth
      } else if (start !== -1 && nodeDepth <= depth) {
        return nodes.slice(start, i)
      }
    }
  }
  if (start !== -1) {
    return nodes.slice(start)
  }
  return []
}

/** Finds the first table after index `from`, stopping at the next heading. */
export const nextTable = (
  nodes: readonly (Node | RootContent)[],
  from: number,
): MdastTable | undefined => {
  for (let i = from; i < nodes.length; i++) {
    const node = nodes[i]!
    if (node.type === `heading`) {
      break
    }
    if (node.type === `table`) {
      return node as MdastTable
    }
  }
  return undefined
}

export const rowsFromTable = (table: MdastTable): Row[] => {
  const [headerRow, ...dataRows] = table.children
  if (!headerRow) {
    return []
  }
  const headers = headerRow.children.map(cell => nodeText(cell))
  return dataRows.map(row => {
    const record: Row = {}
    for (const [i, cell] of row.children.entries()) {
      const key = headers[i]
      if (key !== undefined) {
        record[key] = nodeText(cell).trim().replaceAll(`\u00A0`, ` `)
      }
    }
    return record
  })
}
