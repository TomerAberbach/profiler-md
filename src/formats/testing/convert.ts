import type { NormalizedProfileToMdOptions } from '../../options.ts'
import type {
  BinaryFormatConverter,
  FormatConverter,
  JsonFormatConverter,
} from '../converter.ts'
import { formatAggregatedInputs } from '../index.ts'

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
  return formatAggregatedInputs(converter.aggregate(parsed, options), options)
}
