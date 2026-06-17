import { execSync } from 'node:child_process'
import { readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const check = process.argv.includes(`--check`)

const fixtureFilenames = readdirSync(`src/fixtures`)

// Fixtures named `<name>.base.<ext>` and `<name>.current.<ext>` are also diffed
// as a pair into `examples/<name>.diff.<ext>.md`. Keyed by `<name>.<ext>` since
// a single `<name>` can have several extensions (e.g. `javascript.node` has
// `.cpuprofile`, `.heapprofile`, and `.heapsnapshot`).
const pairs = new Map<
  string,
  { name: string; ext: string; base?: string; current?: string }
>()
for (const filename of fixtureFilenames) {
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
      `src/fixtures/${base ?? current} is missing its ${
        base ? `current` : `base`
      } counterpart for the "${name}" diff pair.\n`,
    )
    process.exit(1)
  }
}

const markdownFilenames = new Set([
  ...fixtureFilenames.map(filename => `${filename}.md`),
  ...[...pairs.values()].map(({ name, ext }) => `${name}.diff.${ext}.md`),
])

if (check) {
  for (const filename of readdirSync(`examples`)) {
    if (!markdownFilenames.has(filename)) {
      process.stderr.write(
        `examples/${filename} has no corresponding fixture. Run \`pnpm update-examples\` to fix.\n`,
      )
      process.exit(1)
    }
  }
} else {
  for (const filename of readdirSync(`examples`)) {
    if (!markdownFilenames.has(filename)) {
      rmSync(join(`examples`, filename))
    }
  }
}

const total = fixtureFilenames.length + pairs.size
let done = 0

const updateExample = (
  key: string,
  exampleName: string,
  fixturePaths: string[],
): void => {
  const examplePath = join(`examples`, `${exampleName}.md`)

  done++
  process.stderr.write(`[${done}/${total}] ${exampleName} ... `)

  const start = performance.now()
  const markdown = execSync(`node src/cli/index.ts ${fixturePaths.join(` `)}`, {
    encoding: `utf8`,
  })
  const elapsed = performance.now() - start
  process.stderr.write(`${elapsed.toFixed(0)}ms\n`)

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
}

for (const filename of fixtureFilenames) {
  updateExample(filename, filename, [join(`src/fixtures`, filename)])
}
for (const { name, ext, base, current } of pairs.values()) {
  updateExample(name, `${name}.diff.${ext}`, [
    join(`src/fixtures`, base!),
    join(`src/fixtures`, current!),
  ])
}
