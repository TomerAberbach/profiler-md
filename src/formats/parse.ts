import { JumboJSON } from 'jumbo-json'
import { ProfilerMdError, reasonOf } from '../error.ts'
import { concatUint8Arrays } from '../helpers/bytes.ts'
import type { AsyncProfileData, ProfileData } from '../options.ts'
import type { FormatConverter, ParsedInput } from './converter.ts'
import { FormatParseError } from './error.ts'

/**
 * Parses the input as the format the caller specified, reporting a rejection
 * as that format's, so the caller receives the reason and the format that
 * rejected the input.
 */
export const parseAsFormat = (
  converter: FormatConverter,
  data: ProfileData,
): ParsedInput[] => {
  try {
    return converter.type === `json`
      ? converter.parse(JumboJSON.parse(data))
      : converter.parse(dataToBytes(data))
  } catch (error: unknown) {
    throw toFormatRejection(converter, error)
  }
}

export const parseAsFormatAsync = async (
  converter: FormatConverter,
  data: AsyncProfileData,
): Promise<ParsedInput[]> => {
  try {
    return converter.type === `json`
      ? converter.parse(await JumboJSON.parseAsync(data))
      : // Stream the binary data when possible.
        await converter.parseAsync(data instanceof Blob ? data.stream() : data)
  } catch (error: unknown) {
    throw toFormatRejection(converter, error)
  }
}

/**
 * Prefixes a {@link FormatParseError} with the format's title. Any other error
 * passes through, because it reports a bug instead of an unusable input.
 */
const toFormatRejection = (
  converter: FormatConverter,
  error: unknown,
): unknown =>
  error instanceof FormatParseError
    ? new ProfilerMdError(`${converter.title}: ${error.message}`, {
        cause: error,
      })
    : error

export const dataToBytes = (data: ProfileData): Uint8Array => {
  if (typeof data === `string`) {
    return (textEncoder ??= new TextEncoder()).encode(data)
  }
  if (ArrayBuffer.isView(data)) {
    return data
  }
  return concatUint8Arrays(data)
}

let textEncoder: InstanceType<typeof TextEncoder> | undefined

/** A parse's failure as `<title>: <reason>`. */
export const describeParseFailure = (
  converter: FormatConverter,
  error: unknown,
): string => `${converter.title}: ${reasonOf(error)}`
