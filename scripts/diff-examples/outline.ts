import { formatCount } from '../../src/helpers/format.ts'
import { formatKinds, labelOf } from './kinds.ts'
import type { ChangeKind } from './kinds.ts'
import type { GroupKindCount, PathChanges } from './summary.ts'
import { limitLines } from './text.ts'

/** What changed under a heading or, at the root, under none. */
type OutlineBranch = {
  kinds: Map<string, GroupKindCount>
  children: OutlineNode[]
}

/** A heading, or several that changed alike. */
type OutlineNode = OutlineBranch & { headings: string[] }

/**
 * Formats the headings with a change under them as `diff` code block lines,
 * below each heading what changed. Sibling sections that changed alike share a
 * line, and a heading with one changed subsection shares its line.
 */
export const formatOutline = (
  changes: PathChanges[],
  maxLines: number,
): string[] => {
  const root = mergeAlike(buildTree(changes))
  return limitLines(formatBranch(root, 0), maxLines)
}

const buildTree = (changes: PathChanges[]): OutlineBranch => {
  const root: OutlineBranch = { kinds: new Map(), children: [] }
  for (const { path, kinds } of changes) {
    let branch = root
    for (const heading of path) {
      let child = branch.children.find(
        ({ headings }) => headings[0] === heading,
      )
      if (!child) {
        child = { headings: [heading], kinds: new Map(), children: [] }
        branch.children.push(child)
      }
      branch = child
    }
    branch.kinds = kinds
  }
  return root
}

const mergeAlike = <Branch extends OutlineBranch>(branch: Branch): Branch => {
  const merged = new Map<string, OutlineNode>()
  for (const child of branch.children.map(child => mergeAlike(child))) {
    const shape = shapeOf(child)
    const alike = merged.get(shape)
    merged.set(shape, alike ? mergeNodes(alike, child) : child)
  }
  return { ...branch, children: [...merged.values()] }
}

/** What changed at and below a node, whatever its heading and counts. */
const shapeOf = ({ kinds, children }: OutlineBranch): string =>
  JSON.stringify([
    [...kinds.keys()].sort(),
    children.map(child => [child.headings, shapeOf(child)]),
  ])

const mergeNodes = (first: OutlineNode, second: OutlineNode): OutlineNode => ({
  headings: [...new Set([...first.headings, ...second.headings])],
  kinds: new Map(
    [...first.kinds].map(([key, kindCount]) => {
      const other = second.kinds.get(key)!
      return [
        key,
        {
          ...kindCount,
          count: kindCount.count + other.count,
          outputs: new Set([...kindCount.outputs, ...other.outputs]),
        },
      ]
    }),
  ),
  children: first.children.map((child, index) =>
    mergeNodes(child, second.children[index]!),
  ),
})

/** Formats what changed under a heading, and then its subsections. */
const formatBranch = (
  { kinds, children }: OutlineBranch,
  depth: number,
): string[] => [
  ...formatKindCounts([...kinds.values()], depth),
  ...children.flatMap(child => formatNode(child, depth)),
]

const formatNode = (node: OutlineNode, depth: number): string[] => {
  const names = [formatHeadings(node)]
  let last = node
  while (last.kinds.size === 0 && last.children.length === 1) {
    last = last.children[0]!
    names.push(formatHeadings(last))
  }
  return [line(` `, depth, names.join(` › `)), ...formatBranch(last, depth + 1)]
}

const formatKindCounts = (
  kindCounts: GroupKindCount[],
  depth: number,
): string[] => {
  const lines = kindCounts
    .filter(({ group }) => group !== `contents`)
    .map(kindCount =>
      line(
        signOf(kindCount.kind),
        depth,
        `${labelOf(kindCount.kind)}${formatTally(kindCount)}`,
      ),
    )
  const contents = kindCounts.filter(({ group }) => group === `contents`)
  if (contents.length > 0) {
    const outputs = new Set(contents.flatMap(({ outputs }) => [...outputs]))
    const kinds = formatKinds(contents.map(({ kind }) => kind))
    lines.push(
      line(
        `!`,
        depth,
        `contents: ${kinds} (${formatOutputCount(outputs.size)})`,
      ),
    )
  }
  return lines
}

const formatHeadings = ({ headings }: OutlineNode): string =>
  headings.length <= MAX_HEADINGS
    ? headings.join(` · `)
    : `${headings.slice(0, MAX_HEADINGS).join(` · `)} · ${headings.length - MAX_HEADINGS} more`

const formatTally = ({ count, outputs }: GroupKindCount): string =>
  count === outputs.size
    ? ` (${formatOutputCount(outputs.size)})`
    : ` (${formatCount(count)} in ${formatOutputCount(outputs.size)})`

export const formatOutputCount = (count: number): string =>
  formatCount(count, `output`)

const signOf = ({ verb }: ChangeKind): string =>
  verb === `added` ? `+` : verb === `removed` ? `-` : `!`

const line = (sign: string, depth: number, text: string): string =>
  `${sign} ${`  `.repeat(depth)}${text}`

const MAX_HEADINGS = 3
