import { JumboJSON } from 'jumbo-json'
import { classifyStreamFailures, concatUint8Arrays } from '../helpers/bytes.ts'
import type { ParsedInput } from '../modalities/registry.ts'
import type { AsyncProfileData, ProfileData } from '../options.ts'
import type { FormatConverter, RecordTally } from './converter.ts'
import { FormatParseError, toFormatRejectionError } from './error.ts'
import { RecordTallyCounts } from './record-tally.ts'

export type ParseResult = {
  parsed: ParsedInput[]
  recordTally: RecordTallyCounts
}

/**
 * Parses the input as the format the caller specified, reporting a failure as
 * that format's rejection, so the caller receives the reason and the format
 * that rejected the input.
 *
 * A failure to read the input is the input's own error, and escapes unwrapped.
 */
export const parseAsFormat = (
  converter: FormatConverter,
  data: ProfileData,
): ParseResult => {
  if (converter.type === `binary`) {
    const bytes = dataToBytes(data)
    try {
      return runParse(converter, recordTally =>
        converter.parse(bytes, recordTally),
      )
    } catch (error: unknown) {
      throw toFormatRejectionError(converter, error)
    }
  }

  try {
    return runParse(converter, recordTally =>
      converter.parse(parseJson(data), recordTally),
    )
  } catch (error: unknown) {
    rethrowInputReadFailure(error)
    throw toFormatRejectionError(converter, error)
  }
}

export const parseAsFormatAsync = async (
  converter: FormatConverter,
  data: AsyncProfileData,
): Promise<ParseResult> => {
  try {
    return await runParseAsync(converter, async recordTally =>
      converter.type === `json`
        ? converter.parse(await parseJsonAsync(data), recordTally)
        : converter.parseAsync(
            guardStreamReads(dataToStream(data)),
            recordTally,
          ),
    )
  } catch (error: unknown) {
    rethrowInputReadFailure(error)
    throw toFormatRejectionError(converter, error)
  }
}

export const runParse = (
  converter: FormatConverter,
  parse: (recordTally: RecordTally) => ParsedInput[],
): ParseResult => {
  const recordTally = new RecordTallyCounts(converter)
  return {
    parsed: parse(recordTally),
    recordTally,
  }
}

export const runParseAsync = async (
  converter: FormatConverter,
  parse: (recordTally: RecordTally) => Promise<ParsedInput[]>,
): Promise<ParseResult> => {
  const recordTally = new RecordTallyCounts(converter)
  return {
    parsed: await parse(recordTally),
    recordTally,
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
    : new FormatParseError(`invalid JSON`, { cause: error })

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
): ReadableStream<Uint8Array> =>
  classifyStreamFailures(stream, error => new InputReadError(error))

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
