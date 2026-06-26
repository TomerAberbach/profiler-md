import type {
  NormalizedProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import { originNormalizeFrame, resolveOrigin } from '../../origins/index.ts'
import { determineMetric, ProfileAggregator } from '../../profile/index.ts'
import type {
  AggregatedProfile,
  ProfileFunctionInput,
} from '../../profile/index.ts'
import type { Pprof, PprofFunction } from './parse.ts'

export const aggregatePprof = (
  { valueTypes, samples, locations, functions }: Pprof,
  options: NormalizedProfileToMdOptions,
  context: ProfileToMdContext,
): AggregatedProfile[] => {
  const nonCountValueTypes = [...valueTypes.entries()].filter(
    ([, valueType]) => valueType.unit.toLowerCase() !== `count`,
  )
  const metrics = nonCountValueTypes.map(([, valueType]) =>
    determineMetric({ name: valueType.type, unit: valueType.unit }),
  )

  const functionInput = (func: PprofFunction): ProfileFunctionInput => ({
    name: func.name || func.systemName,
    location: {
      urlOrPath: func.filename,
      line: func.startLine > 0 ? func.startLine : undefined,
    },
  })

  const origin = resolveOrigin(
    context.format,
    context,
    functions.map(functionInput),
  )
  const normalizeFrame = originNormalizeFrame(origin)

  const profileAggregator = new ProfileAggregator<PprofFunction>(
    {
      metrics,
      functionKey: func => func.id,
      functionInput: func => normalizeFrame(functionInput(func)),
    },
    options,
    { ...context, origin },
  )

  for (const sample of samples) {
    const { locationIds, values } = sample

    const nodes: PprofFunction[] = []
    let calleeLine: number | undefined

    for (const locationId of locationIds) {
      const location = locations[locationId]!
      for (const { functionId, line } of location.lines) {
        nodes.push(functions[functionId]!)
        calleeLine ??= line
      }
    }
    if (nodes.length === 0) {
      continue
    }

    profileAggregator.addSample({
      values: nonCountValueTypes.map(([index]) => values[index]!),
      nodes,
      line: calleeLine,
    })
  }

  return [profileAggregator.aggregate()]
}
