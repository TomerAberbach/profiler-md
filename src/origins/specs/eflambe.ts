import type { DeepReadonly } from '../../helpers/types.ts'
import { fileReferencePath } from '../../location.ts'
import type { EntryCategory, ProfileEntry } from '../../options.ts'
import { locationlessStdlibCategory } from '../categorize.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * The BEAM virtual machine, observed by stack samplers such as `eflambe` for
 * Erlang and Elixir.
 *
 * BEAM collapsed frames are `module:function/arity` (e.g. `lists:reverse/1`,
 * `Elixir.Enum:reduce/3`) with the module standing in for a source location,
 * rooted at a process id like `<0.94.0>`. Neither Erlang nor Elixir carries a
 * file path, so its `normalizeStackFrame` lifts the module out of the name to act as
 * the location, JFR-style.
 */
export const eflambeOriginSpec = {
  id: `eflambe`,
  formats: [`collapsed`],
  isMarkerEntry: entry => isBeamStackFrame(entry.name),
  categorizeEntry: entry =>
    beamModuleCategory(entry) ?? locationlessStdlibCategory(entry) ?? `ours`,
  normalizeStackFrame: input => {
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

    // `Elixir.Jason.Encode` is the VM-level atom for what Elixir code writes
    // as `Jason.Encode`, so drop the prefix for the idiomatic reading. A
    // capitalized module remains unambiguously Elixir (Erlang atoms are
    // lowercase).
    let module = name.slice(0, colon)
    if (module.startsWith(ELIXIR_MODULE_PREFIX)) {
      module = module.slice(ELIXIR_MODULE_PREFIX.length)
    }

    return {
      ...input,
      name: name.slice(colon + 1),
      location: { urlOrPath: module },
    }
  },
} as const satisfies OriginSpec

/**
 * Whether a raw frame name is BEAM-shaped: an Elixir module, a process id, or an
 * Erlang `module:function/arity`.
 */
const isBeamStackFrame = (name: string | undefined): boolean =>
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
 * `normalizeStackFrame`): OTP and Elixir-core modules, plus the `eflambe` profiler's
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

/** The atom prefix the Elixir compiler adds to every Elixir module. */
const ELIXIR_MODULE_PREFIX = `Elixir.`

const isBeamStdlibModule = (module: string): boolean => {
  if (module.startsWith(`eflambe`)) {
    return true
  }
  // `normalizeStackFrame` strips the `Elixir.` prefix, so an Elixir module is
  // recognized by its capitalized first letter (Erlang atoms are lowercase).
  return /^[A-Z]/u.test(module)
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

/** Elixir standard-library (core) modules, without the `Elixir.` atom prefix. */
const ELIXIR_CORE_MODULES = new Set([
  `Enum`,
  `Map`,
  `String`,
  `Kernel`,
  `Keyword`,
  `Stream`,
  `GenServer`,
  `Process`,
  `Task`,
  `List`,
  `IO`,
  `Agent`,
  `Supervisor`,
  `Range`,
  `Integer`,
])
