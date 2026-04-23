import { readFile } from 'node:fs/promises'
import { v8CpuProfileToMd } from '../../src/index.ts'
import { fixturePath } from '../../src/testing/fixtures.ts'

const data = await readFile(fixturePath(`example.cpuprofile`))

for (let i = 0; i < 50; i++) {
  v8CpuProfileToMd(data, { cwd: `/Users/tomer/Documents/work/code` })
}
