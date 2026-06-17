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
  // The magic uniquely identifies a JFR recording, so detecting it is enough; a
  // recording can legitimately have no supported sample events (e.g. a capture
  // with only metadata events), and that still converts (to an empty profile).
  matches: jfr => jfr.hasMagic,
  aggregate: aggregateJfr,
} satisfies BinaryFormatConverter<Jfr>
