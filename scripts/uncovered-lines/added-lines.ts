export type AddedLine = { path: string; line: number; text: string }

/** Parses the lines a Git diff without context adds. */
export const parseAddedLines = (diff: string): AddedLine[] => {
  const added: AddedLine[] = []
  let path = ``
  let line = 0
  // The hunk's lines left to read, so an added line is never read as a header.
  let remaining = 0
  for (const text of diff.split(`\n`)) {
    if (remaining > 0) {
      if (text.startsWith(NO_FINAL_NEWLINE_PREFIX)) {
        continue
      }
      remaining--
      if (text.startsWith(`+`)) {
        added.push({ path, line, text: text.slice(1) })
        line++
      }
      continue
    }

    const hunk = HUNK_REGEX.exec(text)?.groups
    if (hunk) {
      line = Number(hunk.line)
      remaining = Number(hunk.removed ?? 1) + Number(hunk.added ?? 1)
    } else if (text.startsWith(PATH_PREFIX)) {
      path = text.slice(PATH_PREFIX.length)
    }
  }
  return added
}

const PATH_PREFIX = `+++ b/`

/** Git's note on the line before it, which the hunk's counts exclude. */
const NO_FINAL_NEWLINE_PREFIX = `\\`

const HUNK_REGEX =
  /^@@ -\d+(?:,(?<removed>\d+))? \+(?<line>\d+)(?:,(?<added>\d+))? @@/u
