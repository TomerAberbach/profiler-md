import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import { locationlessStdlibCategory } from './categorize.ts'
import type { OriginSpec } from './origin.ts'

/**
 * The BEAM virtual machine, observed by stack samplers such as `eflambe` for
 * Erlang and Elixir.
 *
 * BEAM collapsed frames are `module:function/arity` (e.g. `lists:reverse/1`,
 * `Elixir.Enum:reduce/3`) with the module standing in for a source location,
 * rooted at a process id like `<0.94.0>`. Neither Erlang nor Elixir carries a
 * file path, so its `normalizeFrame` lifts the module out of the name to act as
 * the location, JFR-style.
 */
export const beamOriginSpec = {
  id: `beam`,
  // BEAM spans Erlang and Elixir, which categorize identically here.
  language: null,
  formats: [`collapsed`],
  matchesEntry: entry => isBeamFrame(entry.name),
  categorize: entry =>
    beamModuleCategory(entry) ?? locationlessStdlibCategory(entry) ?? `ours`,
  normalizeFrame: input => {
    // A located frame (e.g. from a structured format) already has everything it
    // needs; only a bare `module:function/arity` name needs splitting.
    if (input.location) {
      return input
    }

    const name = input.name ?? ``
    const colon = name.indexOf(`:`)
    if (colon <= 0) {
      // A process id (`<0.94.0>`) or other colon-less frame carries no module.
      return input
    }

    return {
      ...input,
      name: name.slice(colon + 1),
      location: { urlOrPath: name.slice(0, colon) },
    }
  },
} as const satisfies OriginSpec

/**
 * Whether a raw frame name is BEAM-shaped: an Elixir module, a process id, or an
 * Erlang `module:function/arity`.
 */
const isBeamFrame = (name: string | undefined): boolean =>
  name !== undefined &&
  (name.startsWith(`Elixir.`) ||
    BEAM_PROCESS_ID.test(name) ||
    ERLANG_MFA.test(name))

/** A BEAM process id, e.g. `<0.94.0>`, which roots every `eflambe` stack. */
const BEAM_PROCESS_ID = /^<\d+\.\d+\.\d+>$/u

/**
 * An Erlang `module:function/arity` frame, e.g. `lists:reverse/1`. The module is
 * a lowercase atom and the trailing `/arity` distinguishes it from an Elixir
 * `Module:function/arity` (whose module is capitalized and `Elixir.`-prefixed).
 */
const ERLANG_MFA = /^[a-z]\w*:.+\/\d+$/u

/**
 * Categorizes a frame by its BEAM module (the location lifted out by
 * `normalizeFrame`): OTP and Elixir-core modules, plus the `eflambe` profiler's
 * own frames, are `stdlib`; any other module is `ours`.
 *
 * Hex dependencies (e.g. `Elixir.Jason`) carry no marker distinguishing them
 * from application modules, so they fall to `ours`.
 */
const beamModuleCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined => {
  if (!location) {
    return undefined
  }
  const module = fileReferencePath(location)
  return isBeamStdlibModule(module) ? `stdlib` : `ours`
}

const isBeamStdlibModule = (module: string): boolean => {
  if (module.startsWith(`eflambe`)) {
    return true
  }
  return module.startsWith(`Elixir.`)
    ? ELIXIR_CORE_MODULES.has(module)
    : OTP_STDLIB_MODULES.has(module)
}

/** Erlang/OTP standard-library modules. */
const OTP_STDLIB_MODULES = new Set([
  `erlang`,
  `erts_internal`,
  `lists`,
  `maps`,
  `gen`,
  `gen_server`,
  `proc_lib`,
  `supervisor`,
  `application`,
  `ets`,
  `io`,
  `code`,
  `file`,
  `filename`,
  `os`,
  `rand`,
  `crypto`,
  `re`,
  `unicode`,
  `binary`,
  `string`,
  `timer`,
  `queue`,
  `sets`,
  `dict`,
  `array`,
  `json`,
])

/** Elixir standard-library (core) modules. */
const ELIXIR_CORE_MODULES = new Set([
  `Elixir.Enum`,
  `Elixir.Map`,
  `Elixir.String`,
  `Elixir.Kernel`,
  `Elixir.Keyword`,
  `Elixir.Stream`,
  `Elixir.GenServer`,
  `Elixir.Process`,
  `Elixir.Task`,
  `Elixir.List`,
  `Elixir.IO`,
  `Elixir.Agent`,
  `Elixir.Supervisor`,
  `Elixir.Range`,
  `Elixir.Integer`,
])
