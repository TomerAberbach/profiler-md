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

/** An instruction address in the pprof. */
export type PprofLocation = {
  /** Unique location ID. */
  id: number

  /**
   * The lines corresponding to the location. In most cases it's just an array
   * of length 1, but there can be multiple lines when inlined calls collapse
   * onto one address.
   */
  lines: {
    /** The unique ID of the {@link PprofFunction} that this line is in. */
    functionId: number

    /** The 1-based line number. */
    line: number
  }[]
}

/** A single pprof profiling observation. */
export type PprofSample = {
  /**
   * The call stack at the profile sample in callee-to-caller order.
   *
   * Each ID corresponds to a {@link PprofLocation}.
   */
  locationIds: number[]

  /** The values sampled parallel to {@link Pprof.valueTypes}. */
  values: number[]
}

/** Parsed representation of a pprof. */
export type Pprof = {
  /** The value types at each sample. */
  valueTypes: PprofValueType[]

  /** The samples observed in the pprof. */
  samples: PprofSample[]

  /** All the locations observed and referenced by samples. */
  locations: PprofLocation[]

  /** All the functions referenced by locations. */
  functions: PprofFunction[]
}

export const parsePprof = (data: Uint8Array): Pprof =>
  parsePprofInternal(Profile.decode(data))

export const parsePprofInternal = (profile: Profile): Pprof => {
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
  }
}
