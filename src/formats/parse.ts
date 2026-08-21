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
 *
 * A failure to read the input is the input's own error, and escapes unwrapped.
 */
export const parseAsFormat = (
  converter: FormatConverter,
  data: ProfileData,
): ParsedInput[] => {
  if (converter.type === `binary`) {
    const bytes = dataToBytes(data)
    try {
      return converter.parse(bytes)
    } catch (error: unknown) {
      throw toFormatRejection(converter, error)
    }
  }

  try {
    return converter.parse(parseJson(data))
  } catch (error: unknown) {
    rethrowInputReadFailure(error)
    throw toFormatRejection(converter, error)
  }
}

export const parseAsFormatAsync = async (
  converter: FormatConverter,
  data: AsyncProfileData,
): Promise<ParsedInput[]> => {
  try {
    return converter.type === `json`
      ? converter.parse(await parseJsonAsync(data))
      : // Stream the binary data when possible.
        await converter.parseAsync(guardStreamReads(dataToStream(data)))
  } catch (error: unknown) {
    rethrowInputReadFailure(error)
    throw toFormatRejection(converter, error)
  }
}

/**
 * Decodes JSON, wrapping a decoding failure in a {@link FormatParseError}.
 *
 * A JSON format's parser cannot check anything before decoding succeeds, so a
 * decoding failure is the input's, however the decoder reports it. A failure to
 * read the data propagates as an {@link InputReadError} instead.
 */
export const parseJson = (
  data: string | Uint8Array | Iterable<Uint8Array>,
): unknown => {
  try {
    return JumboJSON.parse(
      // Reading an array cannot fail, and the decoder concatenates one up front
      // instead of streaming it.
      typeof data === `string` ||
        ArrayBuffer.isView(data) ||
        Array.isArray(data)
        ? data
        : guardIterableReads(data),
    )
  } catch (error: unknown) {
    throw toInvalidJsonError(error)
  }
}

export const parseJsonAsync = async (
  data: Blob | ReadableStream<Uint8Array>,
): Promise<unknown> => {
  try {
    return await JumboJSON.parseAsync(guardStreamReads(dataToStream(data)), {
      sizeHint: data instanceof Blob ? data.size : undefined,
    })
  } catch (error: unknown) {
    throw toInvalidJsonError(error)
  }
}

const toInvalidJsonError = (error: unknown): unknown =>
  error instanceof InputReadError
    ? error
    : new FormatParseError(`invalid JSON: ${reasonOf(error)}`, { cause: error })

/**
 * Thrown in place of an error the caller's data threw while a parser read it,
 * so a failure to read the data is told apart from a failure to parse it.
 */
class InputReadError extends Error {
  public constructor(cause: unknown) {
    super(`failed to read the input`, { cause })
    // eslint-disable-next-line stylistic/quotes
    this.name = 'InputReadError'
  }
}

/** Rethrows the error the caller's data threw, when the error stands in for one. */
export const rethrowInputReadFailure = (error: unknown): void => {
  if (error instanceof InputReadError) {
    throw error.cause
  }
}

function* guardIterableReads(
  iterable: Iterable<Uint8Array>,
): Iterable<Uint8Array> {
  try {
    yield* iterable
  } catch (error: unknown) {
    throw new InputReadError(error)
  }
}

const guardStreamReads = (
  stream: ReadableStream<Uint8Array>,
): ReadableStream<Uint8Array> => {
  const reader = stream.getReader()
  return new ReadableStream<Uint8Array>({
    pull: async controller => {
      let result
      try {
        result = await reader.read()
      } catch (error: unknown) {
        throw new InputReadError(error)
      }
      if (result.done) {
        controller.close()
      } else {
        controller.enqueue(result.value)
      }
    },
    cancel: reason => reader.cancel(reason),
  })
}

const dataToStream = (data: AsyncProfileData): ReadableStream<Uint8Array> =>
  data instanceof Blob ? data.stream() : data

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

/** A parse's failure as `<title>: <reason>`. */
export const describeParseFailure = (
  converter: FormatConverter,
  error: unknown,
): string => `${converter.title}: ${reasonOf(error)}`
