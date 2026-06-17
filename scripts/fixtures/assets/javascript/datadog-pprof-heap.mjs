import { writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { argv, exit } from 'node:process'

import { typeCheckProject } from './tsc-workload.mjs'

const [projectDir, out] = argv.slice(2)
if (!projectDir || !out) {
  console.error(`usage: datadog-pprof-heap.mjs <project-dir> <out.pprof>`)
  exit(2)
}

// `@datadog/pprof` is installed (pinned) into the workload's node_modules by
// javascript.sh; resolve it from there.
const require = createRequire(`${projectDir}/`)
const pprof = require(`@datadog/pprof`)

// Pprof.heap.start(intervalBytes, maxStackDepth) samples allocations; sample
// roughly every 512 KiB allocated, keeping up to 64 stack frames (per docs).
pprof.heap.start(512 * 1024, 64)
// Type-check the real project several times so the sampler accumulates enough
// allocation samples for a non-empty profile while staying small and
// deterministic.
for (let i = 0; i < 10; i++) {
  typeCheckProject(projectDir)
}

const buffer = await pprof.encode(pprof.heap.profile())
await writeFile(out, buffer)
