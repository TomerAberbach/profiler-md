import { writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { argv, exit } from 'node:process'
import { typeCheckProject } from './tsc-workload.mjs'

const [projectDir, out] = argv.slice(2)
if (!projectDir || !out) {
  console.error(`usage: datadog-pprof.mjs <project-dir> <out.pprof>`)
  exit(2)
}

// `@datadog/pprof` is installed (pinned) into the workload's node_modules by
// javascript.sh; resolve it from there.
const require = createRequire(`${projectDir}/`)
const pprof = require(`@datadog/pprof`)

// Pprof.time.start({ durationMillis }) sets the total sampling window; we stop
// early once the work is done.
pprof.time.start({ intervalMicros: 1000, durationMillis: 10_000 })
// Type-check the real project several times so the sampler accumulates enough
// samples for a non-empty profile while staying small and deterministic.
for (let i = 0; i < 10; i++) {
  typeCheckProject(projectDir)
}
const profile = pprof.time.stop()

const buffer = await pprof.encode(profile)
await writeFile(out, buffer)
