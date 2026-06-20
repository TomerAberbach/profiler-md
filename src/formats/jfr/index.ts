import { streamToUint8Array } from '../../helpers/bytes.ts'
import type { BinaryFormatConverter } from '../converter.ts'
import { aggregateJfr } from './aggregate.ts'
import { parseJfr } from './parse.ts'
import type { Jfr } from './parse.ts'

export const jfrConverter = {
  title: `JFR`,
  type: `binary`,
  shape: `profile`,
  parse: parseJfr,
  // `parseJfr` reads chunk headers by absolute offset, so buffer the stream then
  // delegate to the sync parse rather than streaming.
  parseAsync: async stream => parseJfr(await streamToUint8Array(stream)),
  // `parseJfr` already validated the magic, so confirm at least one supported
  // event was found.
  matches: jfr => jfr.events.length > 0,
  aggregate: aggregateJfr,
} satisfies BinaryFormatConverter<Jfr>
