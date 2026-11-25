import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import type { OutputVersions } from './summary.ts'

export type Commit = {
  id: string
  subject: string
  outputs: OutputVersions[]

  /** The changed outputs whose own inputs the commit also changes. */
  regenerated: string[]
}

const usesJj = existsSync(`.jj`)

/**
 * Reads each commit of a jj revset, or a git range without jj, oldest first.
 * Reads a commit's outputs only when it is reached, because they can be large.
 */
export function* readCommits(revisions: string): Generator<Commit> {
  const ids = usesJj
    ? run(`jj`, [
        `log`,
        `--reversed`,
        `--no-graph`,
        `--revisions`,
        `(${revisions}) ~ merges()`,
        `--template`,
        String.raw`commit_id ++ "\n"`,
      ])
    : run(`git`, [`rev-list`, `--reverse`, `--no-merges`, revisions])
  for (const id of lines(ids)) {
    yield readCommit(id)
  }
}

/** The revision reported by default. */
export const currentRevision = usesJj ? `@` : `HEAD~1..HEAD`

const readCommit = (id: string): Commit => {
  const { examples, regenerated } = partitionOutputs(id)
  return {
    id,
    subject: git([`log`, `-1`, `--format=%s`, id]).trim(),
    outputs: readVersions(id, examples),
    regenerated,
  }
}

/** Splits the changed outputs by whether the commit changes their inputs. */
const partitionOutputs = (
  id: string,
): { examples: string[]; regenerated: string[] } => {
  const inputs = new Set(changedFiles(id, INPUTS))
  const examples: string[] = []
  const regenerated: string[] = []
  for (const filename of changedFiles(id, OUTPUTS)) {
    const list = inputsOf(filename).some(input => inputs.has(input))
      ? regenerated
      : examples
    list.push(filename)
  }
  return { examples, regenerated }
}

const readVersions = (id: string, filenames: string[]): OutputVersions[] => {
  fetchBlobs(id, filenames)
  const blobs = readBlobs(
    filenames.flatMap(filename => [
      `${id}^:${OUTPUTS}${filename}`,
      `${id}:${OUTPUTS}${filename}`,
    ]),
  )
  return filenames.map((filename, index) => ({
    filename,
    before: blobs[index * 2],
    after: blobs[index * 2 + 1],
  }))
}

const changedFiles = (id: string, directory: string): string[] =>
  lines(
    git([`diff`, `--name-only`, `--no-renames`, `${id}^`, id, `--`, directory]),
  ).map(path => path.slice(directory.length))

/**
 * Fetches the blobs a partial clone lacks. Git fetches them at once for a line
 * count, and one at a time for `cat-file`.
 */
const fetchBlobs = (id: string, outputs: string[]): void => {
  if (isPartialClone && outputs.length > 0) {
    const paths = outputs.map(filename => `${OUTPUTS}${filename}`)
    git([`diff`, `--numstat`, `--no-renames`, `${id}^`, id, `--`, ...paths])
  }
}

/** The filenames of the inputs an output converts. */
const inputsOf = (output: string): string[] => {
  const name = output.slice(0, -`.md`.length)
  return name.includes(`.diff.`)
    ? [`base`, `current`].map(side => name.replace(`.diff.`, `.${side}.`))
    : [name]
}

/** Reads each object, `undefined` where it does not exist. */
const readBlobs = (names: string[]): (string | undefined)[] => {
  if (names.length === 0) {
    return []
  }
  const output = execFileSync(`git`, [`cat-file`, `--batch`], {
    ...options,
    input: names.join(`\n`),
  })
  let offset = 0
  return names.map(() => {
    const headerEnd = output.indexOf(`\n`, offset)
    const header = output.toString(`utf8`, offset, headerEnd)
    offset = headerEnd + 1
    if (header.endsWith(` missing`)) {
      return undefined
    }
    const size = Number(header.split(` `)[2])
    const start = offset
    offset += size + 1
    return output.toString(`utf8`, start, start + size)
  })
}

const lines = (text: string): string[] =>
  text.split(`\n`).filter(line => line !== ``)

const git = (args: string[]): string => run(`git`, args)

const run = (command: string, args: string[]): string =>
  execFileSync(command, args, options).toString()

const options = {
  // A jj workspace other than the first has no `.git` directory of its own.
  env: usesJj
    ? {
        ...process.env,
        GIT_DIR: execFileSync(`jj`, [`git`, `root`]).toString().trim(),
      }
    : process.env,
  maxBuffer: 2 ** 30,
}

const isPartialClone =
  git([
    `config`,
    `--default`,
    `false`,
    `--get`,
    `remote.origin.promisor`,
  ]).trim() === `true`

const INPUTS = `examples/input/`
const OUTPUTS = `examples/output/`
