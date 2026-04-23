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
  locations: Map<number, PprofLocation>
  functions: Map<number, PprofFunction>
  durationNanos: number
}

export const parsePprof = (data: Buffer): Pprof => {
  const profile = Profile.decode(data)

  const { strings } = profile.stringTable

  const valueTypes = profile.sampleType.map(({ type, unit }) => ({
    type: strings[Number(type)] ?? ``,
    unit: strings[Number(unit)] ?? ``,
  }))

  const functions = new Map<number, PprofFunction>()
  for (const fn of profile.function) {
    const id = Number(fn.id)
    functions.set(id, {
      id,
      name: strings[Number(fn.name)] ?? ``,
      systemName: strings[Number(fn.systemName)] ?? ``,
      filename: strings[Number(fn.filename)] ?? ``,
      startLine: Number(fn.startLine),
    })
  }

  const locations = new Map<number, PprofLocation>()
  for (const loc of profile.location) {
    const id = Number(loc.id)
    locations.set(id, {
      id,
      lines: loc.line.map(({ functionId, line }) => ({
        functionId: Number(functionId),
        line: Number(line),
      })),
    })
  }

  const samples = profile.sample.map(({ locationId, value }) => ({
    locationIds: locationId.map(Number),
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
