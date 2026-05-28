import { Profile } from 'pprof-format'
import type { BinaryFormatConverter } from '../converter.ts'
import { aggregatePprof } from './aggregate.ts'
import { parsePprofInternal } from './parse.ts'

const matchesPprof = (profile: Profile): boolean =>
  profile.stringTable.strings[0] === `` && profile.sampleType.length > 0

export const pprofConverter = {
  title: `pprof`,
  kind: `binary`,
  parse: bytes => Profile.decode(bytes),
  matches: matchesPprof,
  aggregate: (profile, options) =>
    aggregatePprof(parsePprofInternal(profile), options),
} satisfies BinaryFormatConverter<Profile>
