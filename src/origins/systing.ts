import type { DeepReadonly } from '../helpers/types.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import {
  pythonStdlibCategory,
  pythonThirdPartyCategory,
  systemDirectoryCategory,
} from './categorize.ts'
import type { OriginSpec } from './origin.ts'

export const systingOriginSpec = {
  id: `systing`,
  formats: [`systing`],
  matchesEntry: entry => NATIVE_FRAME.test(entry.name ?? ``),
  categorize: entry =>
    labelModuleCategory(entry) ??
    // Pystacks blend CPython frames into the stacks, carrying the same
    // interpreter path conventions the Python collapsed-stack origins see.
    // Before the system-directory rule so Debian's
    // /usr/lib/python3/dist-packages/ counts as third-party, not stdlib.
    pythonThirdPartyCategory(entry) ??
    pythonStdlibCategory(entry) ??
    systemDirectoryCategory(entry) ??
    // Unlike runtime profilers, a locationless frame here is not necessarily
    // a runtime internal: any native code without debug info (the app's own
    // stripped binary as much as a system library) symbolizes without a
    // source location. `native` states exactly that.
    (entry.location ? `ours` : `native`),
  normalizeFrame: input => {
    // A located frame can't be packed (systing always packs); guard anyway
    // per the normalizeFrame contract.
    if (input.location) {
      return input
    }

    const native = NATIVE_FRAME.exec(input.name ?? ``)
    if (native) {
      const { func, inner } = native.groups!
      // The packed line is where the frame was executing (it comes from the
      // sampled address), so it feeds the per-line breakdown and the name
      // and file alone identify the function. The module is dropped — the
      // source location names the code better — except a bracketed label
      // module, which carries the category signal (kernel code symbolized
      // with kernel debuginfo has both a `[kernel]` label and a source
      // location) and stays in the name like on source-less frames.
      const location =
        MODULE_LOCATION_LINE.exec(inner!) ?? MODULE_LOCATION.exec(inner!)
      if (location) {
        const { module, file, line } = location.groups!
        return {
          name: LABEL.test(module!) ? `${func!} (${module!})` : func!,
          location: { urlOrPath: file! },
          line: line === undefined ? undefined : Number(line),
        }
      }
      // No source info: keep systing's own `name (module)` form, minus
      // the address (which would fragment one function into an entry per
      // sampled address). The module distinguishes same-named symbols across
      // binaries and carries the category signal for label modules.
      return { name: `${func!} (${inner!})` }
    }

    const python =
      PYTHON_FRAME_LINE.exec(input.name ?? ``) ??
      PYTHON_FRAME.exec(input.name ?? ``)
    if (python) {
      const { func, file, line } = python.groups!
      return {
        name: func!,
        location: { urlOrPath: file! },
        line: line === undefined ? undefined : Number(line),
      }
    }

    return input
  },
} as const satisfies OriginSpec

/**
 * Systing's native frame packing: `name (module [file:line]) <0xaddr>`, where
 * ` [file:line]` (or just ` [file]`) appears only when symbolization found
 * source info, and `module` is a binary's basename or a bracketed label
 * (`[kernel]`, `[exited]`, `[vdso]`, `[gvisor:runtime]`, `[gvisor:guest]`,
 * `[jit:<runtime>]`).
 *
 * The parenthesized group forbids parentheses, so a function name containing
 * them (C++ signatures, Rust trait impls) keeps them: the match splits at the
 * last ` (` opening a paren-free tail. The module and optional location
 * inside the parens are separated by {@link MODULE_LOCATION_LINE} /
 * {@link MODULE_LOCATION} in a second pass; splitting the optional pieces
 * across patterns keeps every regex free of nested quantifiers (profile data
 * is untrusted input). The trailing address is the discriminating marker for
 * origin detection — no other supported profiler suffixes every frame with
 * `<0x…>`.
 */
const NATIVE_FRAME = /^(?<func>.+) \((?<inner>[^()]*[^()\s])\) <0x[0-9a-f]+>$/u

/** The ` [file:line]` location suffix inside a frame's parens. */
const MODULE_LOCATION_LINE =
  /^(?<module>.+) \[(?<file>[^\][:]+):(?<line>\d+)\]$/u

/** The line-less ` [file]` location suffix inside a frame's parens. */
const MODULE_LOCATION = /^(?<module>.+) \[(?<file>[^\][:]+)\]$/u

/** A whole-module bracketed label, e.g. `[kernel]`. */
const LABEL = /^\[[^\][]+\]$/u

/**
 * Systing's Python frame packing (pystacks): `name (python) [file.py:line]` —
 * location outside the parens and no address, unlike native frames. Split
 * into with-line and line-less patterns like the native location.
 */
const PYTHON_FRAME_LINE =
  /^(?<func>.+) \(python\) \[(?<file>[^\][:]+):(?<line>\d+)\]$/u

const PYTHON_FRAME = /^(?<func>.+) \(python\) \[(?<file>[^\][:]+)\]$/u

/**
 * Categorizes frames by systing's bracketed label modules, which survive
 * normalization inside the `name (module)` form: kernel code (including
 * the kernel-provided vDSO), gVisor sandbox machinery, and JIT-compiled
 * regions no runtime symbolizer resolved. An `([exited])` frame — the process
 * was gone before symbolization — stays `native` like any other unresolved
 * native code.
 */
const labelModuleCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined => {
  const label = name && LABEL_MODULE.exec(name)?.groups!.label
  if (!label) {
    return undefined
  }
  if (label === `kernel` || label === `vdso`) {
    return `kernel`
  }
  if (label.startsWith(`gvisor:`)) {
    return `sandbox`
  }
  if (label.startsWith(`jit:`)) {
    return `jit`
  }
  return undefined
}

/** A frame name ending in a bracketed label module, e.g. `… ([kernel])`. */
const LABEL_MODULE = /\(\[(?<label>[^\][]+)\]\)$/u
