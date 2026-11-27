import { statSync } from 'node:fs'
import { join } from 'node:path'

export const EXAMPLE_INPUT_DIRECTORY = `examples/input`

export const totalInputBytes = (filenames: string[]): number =>
  filenames.reduce(
    (bytes, filename) =>
      bytes + statSync(join(EXAMPLE_INPUT_DIRECTORY, filename)).size,
    0,
  )
