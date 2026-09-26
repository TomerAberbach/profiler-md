import { writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { argv, exit } from 'node:process'
import { typeCheckProject } from './tsc-workload.mjs'

const [projectDir, out] = argv.slice(2)
if (!projectDir || !out) {
  console.error(`usage: datadog-pprof-heap.mjs <project-dir> <out.pprof>`)
  exit(2)
}

// The pinned `@datadog/pprof` that javascript.sh installs is in the workload's
// node_modules, so resolve it from there.
const require = createRequire(`${projectDir}/`)
const pprof = require(`@datadog/pprof`)

// The arguments are the sampling interval in bytes and the maximum stack
// depth.
pprof.heap.start(512 * 1024, 64)
// Type-check the real project several times so the sampler accumulates enough
// allocation samples for a non-empty profile while staying small and
// deterministic.
for (let i = 0; i < 10; i++) {
  typeCheckProject(projectDir)
}

const buffer = await pprof.encode(pprof.heap.profile())
await writeFile(out, buffer)
