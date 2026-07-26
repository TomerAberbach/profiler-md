import { execFile } from 'node:child_process'
import {
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { availableParallelism } from 'node:os'
import { join } from 'node:path'
import { promisify } from 'node:util'
import limitConcur from 'limit-concur'

const execFileAsync = promisify(execFile)

const check = process.argv.includes(`--check`)

const inputFilenames = readdirSync(`examples/input`)

// Inputs named `<name>.base.<ext>` and `<name>.current.<ext>` are also diffed
// as a pair into `examples/output/<name>.diff.<ext>.md`. Keyed by `<name>.<ext>`
// since a single `<name>` can have several extensions (e.g. `javascript.node` has
// `.cpuprofile`, `.heapprofile`, and `.heapsnapshot`).
const pairs = new Map<
  string,
  { name: string; ext: string; base?: string; current?: string }
>()
for (const filename of inputFilenames) {
  // `ext` allows dots so multi-segment extensions like `.speedscope.json` pair
  // up (e.g. `ruby.base.speedscope.json` / `ruby.current.speedscope.json`).
  const match = /^(?<name>.+)\.(?<role>base|current)\.(?<ext>.+)$/u.exec(
    filename,
  )
  if (!match) {
    continue
  }

  const { name, role, ext } = match.groups!
  const key = `${name}.${ext}`
  let pair = pairs.get(key)
  if (!pair) {
    pair = { name: name!, ext: ext! }
    pairs.set(key, pair)
  }
  pair[role as `base` | `current`] = filename
}
for (const { name, base, current } of pairs.values()) {
  if (!base || !current) {
    process.stderr.write(
      `examples/input/${base ?? current} is missing its ${
        base ? `current` : `base`
      } counterpart for the "${name}" diff pair.\n`,
    )
    process.exit(1)
  }
}

const markdownFilenames = new Set([
  ...inputFilenames.map(filename => `${filename}.md`),
  ...[...pairs.values()].map(({ name, ext }) => `${name}.diff.${ext}.md`),
])

if (check) {
  for (const filename of readdirSync(`examples/output`)) {
    if (!markdownFilenames.has(filename)) {
      process.stderr.write(
        `examples/output/${filename} has no corresponding input. Run \`pnpm update-examples\` to fix.\n`,
      )
      process.exit(1)
    }
  }
} else {
  for (const filename of readdirSync(`examples/output`)) {
    if (!markdownFilenames.has(filename)) {
      rmSync(join(`examples/output`, filename))
    }
  }
}

const total = inputFilenames.length + pairs.size
let done = 0

const updateExample = limitConcur(
  availableParallelism(),
  async (exampleName: string, inputPaths: string[]): Promise<void> => {
    const examplePath = join(`examples/output`, `${exampleName}.md`)

    const start = performance.now()
    const { stdout: markdown } = await execFileAsync(
      `node`,
      [`src/cli/index.ts`, `--base-url`, `auto`, ...inputPaths],
      { encoding: `utf8`, maxBuffer: 64 * 1024 * 1024 },
    )
    const elapsed = performance.now() - start

    done++
    process.stderr.write(
      `[${done}/${total}] ${exampleName} ${elapsed.toFixed(0)}ms\n`,
    )

    if (check) {
      let existing
      try {
        existing = readFileSync(examplePath, `utf8`)
      } catch {
        process.stderr.write(
          `${examplePath} does not exist. Run \`pnpm update-examples\` to fix.\n`,
        )
        process.exit(1)
      }

      if (existing !== markdown) {
        process.stderr.write(
          `${examplePath} is out of date. Run \`pnpm update-examples\` to fix.\n`,
        )
        process.exit(1)
      }
    } else {
      writeFileSync(examplePath, markdown)
    }
  },
)

const totalInputBytes = (filenames: string[]): number =>
  filenames.reduce(
    (bytes, filename) =>
      bytes + statSync(join(`examples/input`, filename)).size,
    0,
  )

// Conversion cost tracks input size, so the largest examples start first.
// Started last, one would run alone while the other workers sit idle,
// stretching the run past the point everything else finished.
const examples = [
  ...inputFilenames.map(filename => ({ name: filename, inputs: [filename] })),
  ...[...pairs.values()].map(({ name, ext, base, current }) => ({
    name: `${name}.diff.${ext}`,
    inputs: [base!, current!],
  })),
]
  .map(example => ({ ...example, bytes: totalInputBytes(example.inputs) }))
  .sort((example1, example2) => example2.bytes - example1.bytes)

await Promise.all(
  examples.map(({ name, inputs }) =>
    updateExample(
      name,
      inputs.map(filename => join(`examples/input`, filename)),
    ),
  ),
)
