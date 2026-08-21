import { JumboJSON } from 'jumbo-json'
import { reasonOf } from '../error.ts'
import { concatUint8Arrays } from '../helpers/bytes.ts'
import type { AsyncProfileData, ProfileData } from '../options.ts'
import type { FormatConverter, ParsedInput } from './converter.ts'
import { FormatParseError, FormatRejectionError } from './error.ts'

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
): ParsedInput[] => {
  if (converter.type === `binary`) {
    const bytes = dataToBytes(data)
    try {
      return classifyLazyParseFailures(converter, converter.parse(bytes))
    } catch (error: unknown) {
      throw toFormatRejectionError(converter, error)
    }
  }

  try {
    return classifyLazyParseFailures(
      converter,
      converter.parse(parseJson(data)),
    )
  } catch (error: unknown) {
    rethrowInputReadFailure(error)
    throw toFormatRejectionError(converter, error)
  }
}

export const parseAsFormatAsync = async (
  converter: FormatConverter,
  data: AsyncProfileData,
): Promise<ParsedInput[]> => {
  try {
    return classifyLazyParseFailures(
      converter,
      converter.type === `json`
        ? converter.parse(await parseJsonAsync(data))
        : // Stream the binary data when possible.
          await converter.parseAsync(guardStreamReads(dataToStream(data))),
    )
  } catch (error: unknown) {
    rethrowInputReadFailure(error)
    throw toFormatRejectionError(converter, error)
  }
}

/**
 * Wraps each lazily consumed iterable of the parsed inputs, so an error the
 * parser throws while aggregation consumes it is classified the same way as
 * one it throws before returning.
 *
 * The wrapper is a plain iterator object, because a delegating generator costs
 * more per item.
 */
export const classifyLazyParseFailures = (
  converter: FormatConverter,
  parsed: ParsedInput[],
): ParsedInput[] => {
  const toError = (error: unknown): FormatRejectionError =>
    toFormatRejectionError(converter, error)
  return parsed.map(input => {
    switch (input.type) {
      case `call-stack-profile`:
        return {
          ...input,
          observations: classifyIterableFailures(input.observations, toError),
          ...(input.lineMetrics && {
            lineMetrics: classifyIterableFailures(input.lineMetrics, toError),
          }),
        }
      case `call-graph`:
        return input
      case `heap-snapshot`:
        return {
          ...input,
          nodes: classifyIterableFailures(input.nodes, toError),
        }
    }
  })
}

const classifyIterableFailures = <Value>(
  iterable: Iterable<Value>,
  toError: (error: unknown) => Error,
): Iterable<Value> => ({
  [Symbol.iterator]: () => {
    const iterator = iterable[Symbol.iterator]()
    return {
      next: () => {
        try {
          return iterator.next()
        } catch (error: unknown) {
          throw toError(error)
        }
      },
      return: value =>
        iterator.return?.(value) ?? { done: true, value: undefined },
    }
  },
})

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

const toFormatRejectionError = (
  converter: FormatConverter,
  error: unknown,
): FormatRejectionError =>
  new FormatRejectionError(describeParseFailure(converter, error), {
    cause: error,
  })

/**
 * A parse's failure as `<title>: <reason>`.
 *
 * A {@link FormatParseError}'s message states the violation the parser
 * identified. The parser did not classify any other error, so its reason is
 * `failed to parse the input: <message>`.
 */
export const describeParseFailure = (
  converter: FormatConverter,
  error: unknown,
): string =>
  `${converter.title}: ${
    error instanceof FormatParseError
      ? reasonOf(error)
      : `failed to parse the input: ${reasonOf(error)}`
  }`
