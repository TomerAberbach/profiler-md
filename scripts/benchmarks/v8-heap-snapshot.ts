import { readFile } from 'node:fs/promises'
import { v8HeapSnapshotToMd } from '../../src/index.ts'
import { fixturePath } from '../../src/testing/fixtures.ts'

const data = await readFile(fixturePath(`example.heapsnapshot`))

for (let i = 0; i < 3; i++) {
  v8HeapSnapshotToMd(data, { cwd: `/Users/tomer/Documents/work/code` })
}
