import { makeProfileLocation } from '../../location.ts'
import type { NormalizedProfileToMdOptions, UniqueProfileEntry } from '../../options.ts'
import { SECONDS } from '../../profile/index.ts'
import type { Profile, ProfileFunction } from '../../profile/index.ts'
import type { PythonProfile } from './parse.ts'

export const summarizePythonProfile = (
  parsed: PythonProfile,
  options: NormalizedProfileToMdOptions,
): Profile => {
  const functions: ProfileFunction[] = []
  const categoryToMetrics = new Map<
    string,
    { sampleCount: number; values: Float64Array }
  >()

  let totalSelfTime = 0
  let totalCallCount = 0

  for (let id = 0; id < parsed.entries.length; id++) {
    const entry = parsed.entries[id]!

    const location =
      entry.filename !== undefined && entry.line !== undefined
        ? makeProfileLocation({ urlOrPath: entry.filename, line: entry.line })
        : undefined

    const uniqueEntry: UniqueProfileEntry = {
      id,
      name: entry.name,
      location,
    }

    const category = categorizePythonFunction(uniqueEntry, options)

    let catMetrics = categoryToMetrics.get(category)
    if (!catMetrics) {
      catMetrics = { sampleCount: 0, values: new Float64Array(1) }
      categoryToMetrics.set(category, catMetrics)
    }
    catMetrics.sampleCount += entry.ncalls
    catMetrics.values[0]! += entry.tottime

    totalSelfTime += entry.tottime
    totalCallCount += entry.ncalls

    functions.push({
      id,
      name: uniqueEntry.name,
      location,
      category,
      selfSampleCount: entry.ncalls,
      totalSampleCount: entry.ncalls,
      selfValues: new Float64Array([entry.tottime]),
      totalValues: new Float64Array([entry.cumtime]),
      lineToMetrics: new Map(),
      callerIdToMetrics: new Map(),
      calleeIdToMetrics: new Map(),
    })
  }

  return {
    metrics: [SECONDS],
    totalSampleCount: totalCallCount,
    totalValues: new Float64Array([totalSelfTime]),
    samplingIntervals: new Float64Array([
      totalCallCount > 0 ? totalSelfTime / totalCallCount : 0,
    ]),
    categoryToMetrics,
    functions,
    callStacks: [],
  }
}

const categorizePythonFunction = (
  entry: UniqueProfileEntry,
  { isThirdPartyEntry }: NormalizedProfileToMdOptions,
): string => {
  if (!entry.location) {
    return `native`
  }
  return isThirdPartyEntry(entry) ? `third-party` : `ours`
}
