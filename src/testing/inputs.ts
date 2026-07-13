import { readFileSync } from 'node:fs'
import path from 'node:path'
import { gunzipSync } from 'node:zlib'
import { inject } from 'vitest'
import type { Format } from '../formats/registry.ts'

declare module 'vitest' {
  // Module augmentation only merges through an interface.
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface ProvidedContext {
    format: Format | undefined
  }
}

/**
 * The format provided by the current per-format project (see vitest.config.ts),
 * or `undefined` in the `unit` project.
 */
export const injectedFormat = (): Format | undefined => inject(`format`)

export const inputPath = (filename?: string): string =>
  path.join(
    import.meta.dirname,
    `../../examples/input`,
    ...(filename ? [filename] : []),
  )

/**
 * Reads an input, transparently gunzipping it like the CLI's input handling
 * does, since the programmatic API expects already-decompressed bytes. Real
 * pprof captures are gzipped; everything else is stored uncompressed.
 */
export const readInput = (filename: string): Buffer => {
  const data = readFileSync(inputPath(filename))
  return data[0] === 0x1f && data[1] === 0x8b ? gunzipSync(data) : data
}
