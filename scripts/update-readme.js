import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'

const check = process.argv.includes(`--check`)

const help = execSync(`node src/cli.ts --help`, { encoding: `utf8` })

const readme = readFileSync(`readme.md`, `utf8`)
const updated = readme.replace(
  /<!-- CLI_HELP START -->[\S\s]*?<!-- CLI_HELP END -->/u,
  `<!-- CLI_HELP START -->\n\n\`\`\`sh\n$ profiler-md --help\n${help.trimEnd()}\n\`\`\`\n\n<!-- CLI_HELP END -->`,
)

if (!check) {
  writeFileSync(`readme.md`, updated)
} else if (readme !== updated) {
  process.stderr.write(
    `readme.md CLI help section is out of date. Run \`pnpm update-readme\` to fix.\n`,
  )
  process.exit(1)
}
