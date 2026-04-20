import { readFile } from 'node:fs/promises'
import { pprofToMd } from '../../src/index.ts'
import { fixturePath } from '../../src/testing/fixtures.ts'

const data = await readFile(fixturePath(`example.pprof`))

for (let i = 0; i < 50; i++) {
  pprofToMd(data, { cwd: `/Users/tomer/Documents/work/code` })
}
