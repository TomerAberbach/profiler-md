import { execSync } from 'node:child_process'
import { readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const check = process.argv.includes(`--check`)

const fixtureFilenames = readdirSync(`src/fixtures`)

// Fixtures named `<name>.base.<ext>` and `<name>.current.<ext>` are also diffed
// as a pair into `examples/<name>.diff.<ext>.md`.
const pairs = new Map<
  string,
  { ext: string; base?: string; current?: string }
>()
for (const filename of fixtureFilenames) {
  const match = /^(?<name>.+)\.(?<role>base|current)\.(?<ext>[^.]+)$/u.exec(
    filename,
  )
  if (!match) {
    continue
  }

  const { name, role, ext } = match.groups!
  let pair = pairs.get(name!)
  if (!pair) {
    pair = { ext: ext! }
    pairs.set(name!, pair)
  }
  pair[role as `base` | `current`] = filename
}
for (const [name, { base, current }] of pairs) {
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
  ...[...pairs].map(([name, { ext }]) => `${name}.diff.${ext}.md`),
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

const otherBaseURLs = new Map([
  [`rust.base.pprof`, `/Users/mike/code/mikecluck`],
  [`rust.current.pprof`, `/Users/mike/code/mikecluck`],
  [`webkit-timeline-recording.json`, `https://tomeraberba.ch`],
])

const updateExample = (
  key: string,
  exampleName: string,
  fixturePaths: string[],
): void => {
  const examplePath = join(`examples`, `${exampleName}.md`)

  const markdown = execSync(
    `node src/cli/index.ts ${fixturePaths.join(` `)} --base-url ${
      otherBaseURLs.get(key) ?? `/Users/tomer/Documents/work/code`
    }`,
    { encoding: `utf8` },
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
}

for (const filename of fixtureFilenames) {
  updateExample(filename, filename, [join(`src/fixtures`, filename)])
}
for (const [name, { ext, base, current }] of pairs) {
  updateExample(name, `${name}.diff.${ext}`, [
    join(`src/fixtures`, base!),
    join(`src/fixtures`, current!),
  ])
}
