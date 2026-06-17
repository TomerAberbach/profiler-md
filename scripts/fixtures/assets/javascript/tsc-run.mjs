import { argv, exit } from 'node:process'

import { typeCheckProject } from './tsc-workload.mjs'

const projectDir = argv[2]
if (!projectDir) {
  console.error(`usage: tsc-run.mjs <project-dir>`)
  exit(2)
}

// A few passes so even a short capture accumulates plenty of samples.
for (let i = 0; i < 3; i++) {
  typeCheckProject(projectDir)
}
