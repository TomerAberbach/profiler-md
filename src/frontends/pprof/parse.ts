import { Profile } from 'pprof-format'

/** A metric sampled over time in a pprof. */
export type PprofValueType = {
  /** The metric's dimension (e.g. time) */
  type: string

  /** The metric's unit (e.g. microseconds) */
  unit: string
}

/** A function or method observed during pprof profiling. */
export type PprofFunction = {
  /** Unique function ID. */
  id: number

  /** Human-readable name, e.g. `main.myFunc`. */
  name: string

  /** Unmangled symbol name as it appears in the binary. */
  systemName: string

  /** The path to the file where the function is defined. */
  filename: string

  /** The line where the function was defined in its file. */
  startLine: number
}

/**
 * An instruction address in the profiled program.
 *
 * Carries multiple lines when inlined calls collapse onto one address.
 */
export type PprofLocation = {
  id: number
  lines: { functionId: number; line: number }[]
}

/**
 * A single profiling observation.
 *
 * `locationIds` form the call stack (callee first), and each entry in `values`
 * corresponds to the matching `valueType` in the profile.
 */
export type PprofSample = {
  locationIds: number[]
  values: number[]
}

/** Parsed representation of a pprof. */
export type Pprof = {
  valueTypes: PprofValueType[]
  samples: PprofSample[]
  locations: PprofLocation[]
  functions: PprofFunction[]
  durationNanos: number
}

export const parsePprof = (data: Buffer): Pprof => {
  const profile = Profile.decode(data)

  const { strings } = profile.stringTable

  const valueTypes = profile.sampleType.map(({ type, unit }) => ({
    type: strings[Number(type)] ?? ``,
    unit: strings[Number(unit)] ?? ``,
  }))

  const functionIdToIndex: number[] = []
  const functions: PprofFunction[] = []
  for (const func of profile.function) {
    const id = Number(func.id)
    const index = functions.length
    functionIdToIndex[id] = index
    functions.push({
      id,
      name: strings[Number(func.name)] ?? ``,
      systemName: strings[Number(func.systemName)] ?? ``,
      filename: strings[Number(func.filename)] ?? ``,
      startLine: Number(func.startLine),
    })
  }

  const locationIdToIndex: number[] = []
  const locations: PprofLocation[] = []
  for (const location of profile.location) {
    const id = Number(location.id)
    const index = locations.length
    locationIdToIndex[id] = index
    locations.push({
      id,
      lines: location.line.map(({ functionId, line }) => ({
        functionId: functionIdToIndex[Number(functionId)]!,
        line: Number(line),
      })),
    })
  }

  const samples = profile.sample.map(({ locationId, value }) => ({
    locationIds: locationId.map(id => locationIdToIndex[Number(id)]!),
    values: value.map(Number),
  }))

  return {
    valueTypes,
    samples,
    locations,
    functions,
    durationNanos: Number(profile.durationNanos),
  }
}
