import path from 'node:path'
import { createTwoFilesPatch } from 'diff'

export const fixturePath = (filename: string): string =>
  path.join(import.meta.dirname, `../fixtures/${filename}`)

/**
 * Returns a unified diff of `base` vs `modified` with no context lines, so
 * only the lines that actually changed appear.
 */
export const diffMd = (base: string, modified: string): string =>
  createTwoFilesPatch(`base`, `modified`, base, modified, ``, ``, {
    context: 0,
  })
    .split(`\n`)
    .slice(1)
    .join(`\n`)
