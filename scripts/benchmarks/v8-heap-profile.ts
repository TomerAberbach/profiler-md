import { readFile } from 'node:fs/promises'
import { fixturePath } from '../../src/testing/fixtures.ts'
import { v8CpuProfileToMd } from '../../src/v8/cpu-profile/index.ts'

const data = await readFile(fixturePath(`example.heapprofile`))

for (let i = 0; i < 50; i++) {
  v8CpuProfileToMd(data, { cwd: `/Users/tomer/Documents/work/code` })
}
