import { writeFileSync } from 'node:fs'
import inspector from 'node:inspector'
import { argv, exit } from 'node:process'

import { typeCheckProject } from './tsc-workload.mjs'

const [projectDir, out] = argv.slice(2)
if (!projectDir || !out) {
  console.error(`usage: cpuprofile-run.mjs <project-dir> <out.cpuprofile>`)
  exit(2)
}

const session = new inspector.Session()
session.connect()
const post = (method, params) =>
  new Promise((resolve, reject) =>
    session.post(method, params, (err, res) => (err ? reject(err) : resolve(res))),
  )

await post(`Profiler.enable`)
// 1 kHz sampling over a single type-check pass keeps the profile a few MB (zod
// is a heavy type-check; more passes / a finer interval balloon it to tens of MB).
await post(`Profiler.setSamplingInterval`, { interval: 1000 })
await post(`Profiler.start`)

typeCheckProject(projectDir)

const { profile } = await post(`Profiler.stop`)
writeFileSync(out, JSON.stringify(profile))
session.disconnect()
