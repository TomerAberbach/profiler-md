import { parseJson } from '../helpers/json.ts'
import type { ProfileToMdOptions } from '../index.ts'
import { CliError } from './error.ts'
import type { BinaryFormat, Format, JsonFormat } from './formats.ts'
import { formats } from './formats.ts'

const jsonFormats = [...formats.entries()].filter(
  (entry): entry is [string, JsonFormat<any>] => entry[1].kind === `json`,
)
const binaryFormats = [...formats.entries()].filter(
  (entry): entry is [string, BinaryFormat<any>] => entry[1].kind === `binary`,
)

export const requireFormat = (formatId: string): Format => {
  const format = formats.get(formatId)
  if (!format) {
    throw new CliError(
      `unknown format "${formatId}"\nRun with --help to see supported formats.`,
      2,
    )
  }
  return format
}

export const convertToMarkdown = (
  data: Uint8Array,
  forcedFormat: Format | undefined,
  options: ProfileToMdOptions,
): string => {
  if (forcedFormat) {
    return forcedFormat.toMd(data, options)
  }

  const markdown = autoDetectAndConvert(data, options)
  if (markdown === undefined) {
    throw new CliError(
      `could not detect profile format from content\nUse --format to specify the format, or run with --help to see supported formats.`,
      2,
    )
  }
  return markdown
}

const autoDetectAndConvert = (
  data: Uint8Array,
  options: ProfileToMdOptions,
): string | undefined => {
  let json: unknown
  try {
    json = parseJson(data)
  } catch {}

  if (json === undefined) {
    for (const [, format] of binaryFormats) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const parsed = format.detect(data)
      if (parsed !== undefined) {
        return format.toMdInternal(parsed, options)
      }
    }
    return undefined
  }

  for (const [, format] of jsonFormats) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsed = format.detect(json)
    if (parsed !== undefined) {
      return format.toMdInternal(parsed, options)
    }
  }
  return undefined
}
