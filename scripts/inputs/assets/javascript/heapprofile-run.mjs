import { writeFileSync } from 'node:fs'
import { Session } from 'node:inspector/promises'
import { argv, exit } from 'node:process'
import { typeCheckProject } from './tsc-workload.mjs'

const [projectDir, out] = argv.slice(2)
if (!projectDir || !out) {
  console.error(`usage: heapprofile-run.mjs <project-dir> <out.heapprofile>`)
  exit(2)
}

const session = new Session()
session.connect()

await session.post(`HeapProfiler.enable`)
// The profiler reports only the sampled objects still alive when sampling
// stops, and a type-check pass frees nearly everything it allocates, so the
// include options keep the collected objects too. The interval is Node's
// `--heap-prof-interval` default.
await session.post(`HeapProfiler.startSampling`, {
  samplingInterval: 512 * 1024,
  includeObjectsCollectedByMajorGC: true,
  includeObjectsCollectedByMinorGC: true,
})

// Enough passes to accumulate samples at this interval.
for (let i = 0; i < 3; i++) {
  typeCheckProject(projectDir)
}

const { profile } = await session.post(`HeapProfiler.stopSampling`)
writeFileSync(out, JSON.stringify(profile))
session.disconnect()
