import { categorizeFunction, formatLocation } from '../../common.ts'
import type { NormalizedProfileToMdOptions } from '../../common.ts'
import { determineMetric, ProfileBuilder } from '../../profile/index.ts'
import type { Profile } from '../../profile/index.ts'
import type { Pprof, PprofFunction } from './parse.ts'

export const summarizePprof = (
  { valueTypes, samples, locations, functions }: Pprof,
  options: NormalizedProfileToMdOptions,
): Profile => {
  const nonCountValueTypes = [...valueTypes.entries()].filter(
    ([, valueType]) => valueType.unit.toLowerCase() !== `count`,
  )
  const metrics = nonCountValueTypes.map(([, valueType]) =>
    determineMetric({ name: valueType.type, unit: valueType.unit }),
  )

  const profileBuilder = new ProfileBuilder<PprofFunction>({
    metrics,
    functionKey: func => func.id,
    functionMetadata: func => {
      const fileLocation = formatLocation(func.filename, options)
      return {
        name: func.name || func.systemName || `(unknown)`,
        fileLocation,
        location: fileLocation
          ? func.startLine > 0
            ? `${fileLocation}:${func.startLine}`
            : fileLocation
          : undefined,
        category: categorizeFunction(func.filename, options),
      }
    },
  })

  for (const sample of samples) {
    const { locationIds, values } = sample

    const nodes: PprofFunction[] = []
    let leafLine: number | undefined

    for (const locationId of locationIds) {
      const location = locations[locationId]!
      for (const { functionId, line } of location.lines) {
        nodes.push(functions[functionId]!)
        leafLine ??= line
      }
    }
    if (nodes.length === 0) {
      continue
    }

    profileBuilder.addSample({
      values: nonCountValueTypes.map(([index]) => values[index]!),
      nodes,
      line: leafLine,
    })
  }

  return profileBuilder.build()
}
