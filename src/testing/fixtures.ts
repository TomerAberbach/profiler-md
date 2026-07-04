import { readFileSync } from 'node:fs'
import path from 'node:path'
import { gunzipSync } from 'node:zlib'
import { createTwoFilesPatch } from 'diff'

export const fixturePath = (filename?: string): string =>
  path.join(import.meta.dirname, `../fixtures`, ...(filename ? [filename] : []))

/**
 * Reads a fixture, transparently gunzipping it like the CLI's input handling
 * does, since the programmatic API expects already-decompressed bytes. Real
 * pprof captures are gzipped; everything else is stored uncompressed.
 */
export const readFixture = (filename: string): Buffer => {
  const data = readFileSync(fixturePath(filename))
  return data[0] === 0x1f && data[1] === 0x8b ? gunzipSync(data) : data
}

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
