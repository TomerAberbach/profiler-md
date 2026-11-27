import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const OUTPUT_DIRECTORY = `examples/output`

export const outputFilenames = readdirSync(OUTPUT_DIRECTORY)

export const readOutput = (filename: string): string =>
  readFileSync(join(OUTPUT_DIRECTORY, filename), `utf8`)
