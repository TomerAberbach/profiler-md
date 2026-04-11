import fs from 'node:fs/promises'
import path from 'node:path'

export const readFixture = (name: string): Promise<string> =>
  fs.readFile(path.join(import.meta.dirname, `../fixtures/${name}`), `utf8`)
