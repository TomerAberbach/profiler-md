import { Profile } from 'pprof-format'
import type { NormalizedProfileToMdOptions } from '../../options.ts'
import { aggregatePprof } from './aggregate.ts'
import { formatPprof } from './format.ts'
import { parsePprofInternal } from './parse.ts'

export const parsePprof = (bytes: Uint8Array): Profile => Profile.decode(bytes)

export const matchesPprof = (profile: Profile): boolean =>
  profile.stringTable.strings[0] === `` && profile.sampleType.length > 0

export const pprofToMd = (
  pprof: Profile,
  options: NormalizedProfileToMdOptions,
): string =>
  formatPprof(aggregatePprof(parsePprofInternal(pprof), options), options)
