import type { Profile } from 'pprof-format'

/** A metric sampled over time in a pprof. */
export type PprofValueType = {
  /** What is being measured (e.g. time) */
  type: string

  /** The metric's unit (e.g. microseconds) */
  unit: string
}

/** A function or method observed during pprof profiling. */
export type PprofFunction = {
  /** Dense, sequential function ID (the function's index in the parsed table). */
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

/** A single pprof sample. */
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

export const parsePprofInternal = (profile: Profile): Pprof => {
  const { strings } = profile.stringTable

  const valueTypes = profile.sampleType.map(({ type, unit }) => ({
    type: strings[Number(type)] ?? ``,
    unit: strings[Number(unit)] ?? ``,
  }))

  // Pprof IDs are arbitrary uint64s. pprof-format surfaces them as `number`
  // when they fit a safe integer and as `bigint` when they don't, so key the ID
  // to index maps by the decimal string to resolve both representations exactly
  // without precision loss. Each table index then doubles as the dense,
  // sequential ID the aggregator expects.
  const functionIdToIndex = new Map<string, number>()
  const functions: PprofFunction[] = []
  for (const func of profile.function) {
    functionIdToIndex.set(String(func.id), functions.length)
    functions.push({
      id: functions.length,
      name: strings[Number(func.name)] ?? ``,
      systemName: strings[Number(func.systemName)] ?? ``,
      filename: strings[Number(func.filename)] ?? ``,
      startLine: Number(func.startLine),
    })
  }

  const locationIdToIndex = new Map<string, number>()
  const locations: PprofLocation[] = []
  for (const location of profile.location) {
    locationIdToIndex.set(String(location.id), locations.length)
    locations.push({
      // Some profilers emit lines whose function ID references a function
      // absent from the function table (unsymbolized frames). Drop those frames
      // rather than carry a dangling reference into aggregation.
      lines: location.line.flatMap(({ functionId, line }) => {
        const index = functionIdToIndex.get(String(functionId))
        return index === undefined
          ? []
          : { functionId: index, line: Number(line) }
      }),
    })
  }

  const samples = profile.sample.map(({ locationId, value }) => ({
    // Drop references to locations absent from the location table for the same
    // reason as above.
    locationIds: locationId.flatMap(
      id => locationIdToIndex.get(String(id)) ?? [],
    ),
    values: value.map(Number),
  }))

  return {
    valueTypes,
    samples,
    locations,
    functions,
  }
}
