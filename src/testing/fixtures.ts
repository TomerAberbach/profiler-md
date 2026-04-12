import fs from 'node:fs/promises'
import path from 'node:path'

export const fixturePath = (filename: string): string =>
  path.join(import.meta.dirname, `../fixtures/${filename}`)

export const readFixture = (filename: string): Promise<string> =>
  fs.readFile(fixturePath(filename), `utf8`)
