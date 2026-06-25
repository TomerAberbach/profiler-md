import type {
  NormalizedProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import type {
  BinaryFormatConverter,
  FormatConverter,
  JsonFormatConverter,
} from '../converter.ts'
import { formatAggregatedInputs, formatConverters } from '../index.ts'
import type { Format } from '../index.ts'

export const convertToMd: {
  <Parsed>(
    converter: BinaryFormatConverter<Parsed>,
    bytes: Uint8Array,
    options: NormalizedProfileToMdOptions,
  ): string
  <Parsed>(
    converter: JsonFormatConverter<Parsed>,
    parsed: Parsed,
    options: NormalizedProfileToMdOptions,
  ): string
} = (
  converter: FormatConverter,
  input: unknown,
  options: NormalizedProfileToMdOptions,
): string => {
  const parsed =
    converter.type === `binary` ? converter.parse(input as Uint8Array) : input
  return formatAggregatedInputs(
    converter.aggregate(parsed, options, profileToMdContext(converter)),
    options,
  )
}

/**
 * The streaming analogue of {@link convertToMd} for binary converters: parses a
 * byte stream via {@link BinaryFormatConverter.parseAsync} before aggregating
 * and formatting.
 */
export const convertToMdAsync = async <Parsed>(
  converter: BinaryFormatConverter<Parsed>,
  stream: ReadableStream<Uint8Array>,
  options: NormalizedProfileToMdOptions,
): Promise<string> => {
  const parsed = await converter.parseAsync(stream)
  return formatAggregatedInputs(
    converter.aggregate(parsed, options, profileToMdContext(converter)),
    options,
  )
}

const profileToMdContext = (
  converter: FormatConverter<any>,
): ProfileToMdContext => ({
  format: formatByConverter.get(converter)!,
  origin: null,
})

const formatByConverter = new Map<FormatConverter, Format>(
  (Object.entries(formatConverters) as [Format, FormatConverter][]).map(
    ([format, converter]) => [converter, format],
  ),
)
