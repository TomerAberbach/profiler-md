import { categorizeFunction, formatLocation } from '../../common.ts'
import type { NormalizedProfileToMdOptions } from '../../common.ts'
import { determineMetric, ProfileBuilder } from '../../profile/index.ts'
import type { Profile } from '../../profile/index.ts'
import type { Pprof, PprofFunction } from './parse.ts'

export const summarizePprof = (
  profile: Pprof,
  options: NormalizedProfileToMdOptions,
): Profile => {
  const { valueTypes, samples, locations, functions } = profile

  const nonCountIndices = valueTypes
    .map((vt, i) => ({ vt, i }))
    .filter(({ vt }) => vt.unit.toLowerCase() !== `count`)
    .map(({ i }) => i)

  const metrics = nonCountIndices.map(i =>
    determineMetric({
      name: valueTypes[i]!.type,
      unit: valueTypes[i]!.unit,
    }),
  )

  const nonCountValues = (sourceAll: number[]): number[] =>
    nonCountIndices.map(i => sourceAll[i]!)

  const profileBuilder = new ProfileBuilder<PprofFunction>({
    metrics,
    functionKey: fn => fn.id,
    functionMetadata: fn => {
      const fileLocation = formatLocation(fn.filename, options)
      return {
        name: fn.name || fn.systemName || `(unknown)`,
        fileLocation,
        location: fileLocation
          ? fn.startLine > 0
            ? `${fileLocation}:${fn.startLine}`
            : fileLocation
          : undefined,
        category: categorizeFunction(fn.filename, options),
      }
    },
  })

  for (const sample of samples) {
    const { locationIds, values } = sample

    const nodes: PprofFunction[] = []
    let leafLine: number | undefined

    for (const locationId of locationIds) {
      const loc = locations.get(locationId)
      if (!loc) {
        continue
      }
      for (const { functionId, line } of loc.lines) {
        const fn = functions.get(functionId)
        if (!fn) {
          continue
        }
        nodes.push(fn)
        leafLine ??= line
      }
    }

    if (nodes.length === 0) {
      continue
    }

    profileBuilder.addSample({
      values: nonCountValues(values),
      nodes,
      line: leafLine,
    })
  }

  return profileBuilder.build()
}
