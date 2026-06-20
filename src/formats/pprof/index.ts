import { Profile } from 'pprof-format'
import { streamToUint8Array } from '../../helpers/bytes.ts'
import type { BinaryFormatConverter } from '../converter.ts'
import { aggregatePprof } from './aggregate.ts'
import { parsePprofInternal } from './parse.ts'

const matchesPprof = (profile: Profile): boolean =>
  profile.stringTable.strings[0] === `` && profile.sampleType.length > 0

export const pprofConverter = {
  title: `pprof`,
  type: `binary`,
  shape: `profile`,
  parse: bytes => Profile.decode(bytes),
  // `pprof-format` needs all bytes at once, so buffer the stream then delegate
  // to the sync decode rather than streaming.
  parseAsync: async stream => Profile.decode(await streamToUint8Array(stream)),
  matches: matchesPprof,
  aggregate: (profile, options, context) =>
    aggregatePprof(parsePprofInternal(profile), options, context),
} satisfies BinaryFormatConverter<Profile>
