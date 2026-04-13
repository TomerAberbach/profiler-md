import { execSync } from 'node:child_process'
import { readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const check = process.argv.includes(`--check`)

const fixtureFilenames = readdirSync(`src/fixtures`)
const markdownFilenames = new Set(
  fixtureFilenames.map(filename => `${filename}.md`),
)

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

for (const filename of fixtureFilenames) {
  const fixturePath = join(`src/fixtures`, filename)
  const examplePath = join(`examples`, `${filename}.md`)

  const markdown = execSync(
    `node src/cli.ts ${fixturePath} --cwd /Users/tomer/Documents/work/code`,
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
