import { readFile } from 'node:fs/promises'
import { v8HeapProfileToMd } from '../../src/index.ts'
import { fixturePath } from '../../src/testing/fixtures.ts'

const data = await readFile(fixturePath(`example.heapprofile`))

for (let i = 0; i < 50; i++) {
  v8HeapProfileToMd(data, { cwd: `/Users/tomer/Documents/work/code` })
}
