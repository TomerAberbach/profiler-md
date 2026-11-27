// Experimental, though present since Node 22.15.
// eslint-disable-next-line node/no-unsupported-features/node-builtins
import { diff } from 'node:util'

/**
 * Formats the lines that differ from {@link existing} to {@link updated} as
 * unified diff hunks.
 */
export const formatLineDiff = (existing: string, updated: string): string => {
  const lines = diff(existing.split(`\n`), updated.split(`\n`))
  const changed = lines.map(([operation]) => operation !== 0)
  const shown = changed.map((_, index) =>
    changed
      .slice(Math.max(0, index - CONTEXT_LINES), index + CONTEXT_LINES + 1)
      .includes(true),
  )

  const output: string[] = []
  let existingLine = 1
  let updatedLine = 1
  for (const [index, [operation, line]] of lines.entries()) {
    if (shown[index] && !shown[index - 1]) {
      output.push(`@@ -${existingLine} +${updatedLine} @@`)
    }
    if (shown[index]) {
      output.push(`${OPERATION_PREFIXES[operation]}${line}`)
    }
    if (operation !== -1) {
      existingLine++
    }
    if (operation !== 1) {
      updatedLine++
    }
  }
  return output.join(`\n`)
}

const CONTEXT_LINES = 2

// `util.diff` marks a line only in its first array 1 and only in its second -1.
const OPERATION_PREFIXES = { [-1]: `+`, 0: ` `, 1: `-` }
