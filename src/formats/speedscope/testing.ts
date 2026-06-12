import type {
  SpeedscopeEvent,
  SpeedscopeEventedProfile,
  SpeedscopeFrame,
  SpeedscopeProfile,
  SpeedscopeSampledProfile,
  SpeedscopeValueUnit,
} from './parse.ts'

export const makeSpeedscopeProfile = ({
  profiles,
  frames,
}: {
  profiles: (SpeedscopeSampledProfile | SpeedscopeEventedProfile)[]
  frames: SpeedscopeFrame[]
}): SpeedscopeProfile => ({
  $schema: `https://www.speedscope.app/file-format-schema.json`,
  profiles,
  shared: { frames },
})

export const makeSampledProfile = ({
  name = `Profile`,
  unit = `milliseconds`,
  samples,
  weights,
}: {
  name?: string
  unit?: SpeedscopeValueUnit
  samples: number[][]
  weights: number[]
}): SpeedscopeSampledProfile => ({
  type: `sampled`,
  name,
  unit,
  samples,
  weights,
})

export const makeEventedProfile = ({
  events,
  name = `Profile`,
  unit = `milliseconds`,
}: {
  events: SpeedscopeEvent[]
  name?: string
  unit?: SpeedscopeValueUnit
}): SpeedscopeEventedProfile => ({ type: `evented`, name, unit, events })
