import { parseJson } from '../../helpers/json.ts'

export type SpeedscopeFrame = {
  name: string
  file?: string
  line?: number
  col?: number
}

export type SpeedscopeValueUnit =
  | `nanoseconds`
  | `microseconds`
  | `milliseconds`
  | `seconds`
  | `bytes`
  | `none`

export type SpeedscopeSampledProfile = {
  type: `sampled`
  name: string
  unit: SpeedscopeValueUnit
  startValue: number
  endValue: number
  /** Each element is a stack of frame indices (outermost first, leaf last). */
  samples: number[][]
  /** Parallel to samples — the weight (time or count) for each sample. */
  weights: number[]
}

export type SpeedscopeEventedProfile = {
  type: `evented`
  name: string
  unit: SpeedscopeValueUnit
  startValue: number
  endValue: number
  events: { type: `O` | `C`; at: number; frame: number }[]
}

export type SpeedscopeProfile = {
  $schema: `https://www.speedscope.app/file-format-schema.json`
  profiles: (SpeedscopeSampledProfile | SpeedscopeEventedProfile)[]
  shared: { frames: SpeedscopeFrame[] }
  name?: string
  activeProfileIndex?: number
}

export const parseSpeedscopeProfile = (
  data: string | Uint8Array,
): SpeedscopeProfile => parseJson(data) as SpeedscopeProfile
