import { readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { expect, inject } from 'vitest'
import { parseExampleFilename } from '../cli/examples.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import { aggregateParsedInputs } from './aggregate.ts'
import type {
  BinaryFormatConverter,
  FormatConverter,
  JsonFormatConverter,
} from './converter.ts'
import { formatAggregatedInputs } from './format.ts'
import type { Format } from './index.ts'

declare module 'vitest' {
  // Module augmentation only merges through an interface.
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface ProvidedContext {
    format: Format | undefined
    inputs: string[]
  }
}

/**
 * The format provided by the current input-processing project (see
 * vitest.config.ts), or `undefined` in the `unit` project.
 */
export const injectedFormat = (): Format | undefined => inject(`format`)

/**
 * The partition of the injected format's committed inputs the current project
 * handles, or empty in the `unit` project. A format's inputs may span several
 * projects, so a test over them must never read the input directory.
 */
export const injectedInputs = (): string[] => inject(`inputs`)

export const inputPath = (filename?: string): string =>
  path.join(
    import.meta.dirname,
    `../../examples/input`,
    ...(filename ? [filename] : []),
  )

/**
 * Reads an input as committed. The pipeline strips the compression some are
 * committed in (gzipped pprof captures, LZ4 memray captures).
 */
export const readInput = (filename: string): Buffer =>
  readFileSync(inputPath(filename))

/**
 * The lines auto-detecting a committed input logs, given the Markdown it
 * converted to. The origin is the one the filename records, and the evidence
 * for it varies per input. An input with no profiling data logs no origin.
 */
export const detectionLogs = (filename: string, md: string): unknown[] => {
  const { format, origin } = parseExampleFilename(filename)
  const logs: unknown[] = [`info: format: ${format} (detected)`]
  if (!md.startsWith(`No profiling data found.`)) {
    logs.push(
      expect.stringMatching(/^debug: origin candidates, in priority order: /u),
      expect.stringMatching(
        new RegExp(`^info: origin: ${origin} \\(.+\\)$`, `u`),
      ),
    )
  }
  return logs
}

/**
 * The smallest of the given inputs, as a single-element array, or an empty
 * array when there are none. A `test.each` over the result registers nothing in
 * the `unit` project, which receives no inputs.
 */
export const smallestInput = (filenames: string[]): string[] =>
  filenames.length === 0
    ? []
    : [
        filenames.reduce((smallest, filename) =>
          statSync(inputPath(filename)).size <
          statSync(inputPath(smallest)).size
            ? filename
            : smallest,
        ),
      ]

export const convertJsonToMd = (
  converter: JsonFormatConverter,
  json: unknown,
  options: NormalizedProfileToMdOptions,
  // For ad-hoc converters not in the registry, whose format can't be derived.
  format?: Format,
): string =>
  formatAggregatedInputs(
    aggregateParsedInputs(
      converter.parse(json),
      options,
      format ? { format, origin: null } : profileToMdContext(converter),
    ),
    options,
  )

export const convertBytesToMd = (
  converter: BinaryFormatConverter,
  bytes: Uint8Array,
  options: NormalizedProfileToMdOptions,
): string =>
  formatAggregatedInputs(
    aggregateParsedInputs(
      converter.parse(bytes),
      options,
      profileToMdContext(converter),
    ),
    options,
  )

/**
 * The streaming analogue of {@link convertBytesToMd}: parses a byte stream via
 * {@link BinaryFormatConverter.parseAsync} before aggregating and formatting.
 */
export const convertToMdAsync = async (
  converter: BinaryFormatConverter,
  stream: ReadableStream<Uint8Array>,
  options: NormalizedProfileToMdOptions,
): Promise<string> =>
  formatAggregatedInputs(
    aggregateParsedInputs(
      await converter.parseAsync(stream),
      options,
      profileToMdContext(converter),
    ),
    options,
  )

const profileToMdContext = (converter: FormatConverter) => ({
  format: converter.format as Format,
  origin: null,
})
