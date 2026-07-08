import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import { locationlessStdlibCategory } from './categorize.ts'
import type { OriginSpec } from './origin.ts'

/**
 * `dotnet-trace`, the .NET CLI sampling profiler, whose speedscope export
 * (produced by the TraceEvent library) packs a managed frame's whole identity
 * into its name as `Assembly!Namespace.Type.Method(signature)`.
 *
 * Its `normalizeFrame` splits that JFR-style: the namespace-qualified declaring
 * type becomes the location and the method name with a simplified parameter
 * list the display name, keeping overloads distinguishable the way JFR's
 * `add(Object, Object[], int)` does. The assembly is dropped: TraceEvent emits
 * it in inconsistent casings (`System.Private.CoreLib` and
 * `system.private.corelib`, sometimes for the same method within one profile),
 * while the qualified method is consistently cased.
 *
 * The export also wraps every call stack in scaffolding pseudo-frames
 * (`Process64 Process(1234)…` \> `(Non-Activities)` \> `Threads` \> `Thread (…)`)
 * and buckets each sample's leaf time under a `CPU_TIME` marker, so
 * `normalizeFrame` drops those: they aren't functions, and dropping `CPU_TIME`
 * returns each sample's self time to the method that was executing.
 * `UNMANAGED_CODE_TIME` stays: it's genuine native execution outside the
 * managed stack, kept as a location-less (`stdlib`) frame the way rbspy keeps
 * `[c function]`.
 */
export const dotnetTraceOriginSpec = {
  id: `dotnet-trace`,
  formats: [`speedscope`],
  matchesEntry: entry => isDotnetTraceFrame(entry.name),
  categorize: entry =>
    dotnetNamespaceCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    `ours`,
  normalizeFrame: input => {
    if (input.location) {
      return input
    }

    const name = input.name ?? ``
    if (isScaffoldingFrame(name)) {
      return null
    }

    // `?` is TraceEvent's unknown assembly (a bare `?!?` frame), which carries
    // no location; leave it location-less so it categorizes as a native
    // internal.
    const bang = name.indexOf(`!`)
    if (bang <= 0 || name.startsWith(`?!`)) {
      return input
    }

    const qualified = name.slice(bang + 1)
    const paren = qualified.indexOf(`(`)
    const path = paren === -1 ? qualified : qualified.slice(0, paren)
    const signature =
      paren === -1 ? `` : simplifySignature(qualified.slice(paren))
    let dot = path.lastIndexOf(`.`)
    if (dot === -1) {
      // A type-less function; the assembly is the best location available.
      return {
        name: path + signature,
        location: { urlOrPath: name.slice(0, bang).toLowerCase() },
      }
    }
    // A constructor frame is `Type..ctor()`; keep the leading dot with the
    // method rather than leaving it dangling on the type.
    if (path[dot - 1] === `.`) {
      dot--
    }

    return {
      name: path.slice(dot + 1) + signature,
      location: { urlOrPath: path.slice(0, dot) },
    }
  },
} as const satisfies OriginSpec

/**
 * Rewrites a TraceEvent IL-style parameter list the way JFR renders method
 * parameters: `class`/`value class` modifiers dropped, every
 * namespace-qualified type reduced to its simple name, and parameters separated
 * by `, `, so `(class System.String,value class System.Threading.CancellationToken)`
 * becomes `(String, CancellationToken)`. Pointer/byref suffixes (`wchar**`),
 * IL primitives (`int32`), and generic parameter references (`!0`) pass
 * through unchanged.
 */
const simplifySignature = (signature: string): string =>
  signature
    .replaceAll(/\b(?:value )?class /gu, ``)
    .replaceAll(/[\w.]+\.(?=\w)/gu, ``)
    .replaceAll(`,`, `, `)

/**
 * Whether a raw frame name is dotnet-trace-shaped: an
 * `Assembly!Method(signature)` managed frame or one of TraceEvent's time-bucket
 * markers.
 */
const isDotnetTraceFrame = (name: string | undefined): boolean =>
  name !== undefined &&
  (ASSEMBLY_BANG_METHOD.test(name) ||
    name === `CPU_TIME` ||
    name === `UNMANAGED_CODE_TIME`)

/**
 * A TraceEvent managed frame: a dotted assembly, `!`, and a method whose
 * qualified path contains no spaces, followed by its parenthesized signature.
 */
const ASSEMBLY_BANG_METHOD = /^[\w.]+!\S+\(.*\)$/u

/**
 * Whether a frame is TraceEvent stack scaffolding rather than a function: the
 * process/thread grouping nodes wrapping every stack and the `CPU_TIME` bucket
 * ending every managed stack.
 */
const isScaffoldingFrame = (name: string): boolean =>
  name === `CPU_TIME` ||
  name === `Threads` ||
  name === `(Non-Activities)` ||
  name === `(Activities)` ||
  PROCESS_FRAME.test(name) ||
  THREAD_FRAME.test(name)

/** TraceEvent's process root, e.g. `Process64 Process(76492) (76492) Args: `. */
const PROCESS_FRAME = /^Process(?:32|64)? Process\(\d+\)/u

/** TraceEvent's per-thread node, e.g. `Thread (22921464)`. */
const THREAD_FRAME = /^Thread \(\d+\)$/u

/**
 * Categorizes a frame by its declaring type (the location lifted out by
 * `normalizeFrame`): .NET runtime and framework namespaces are `stdlib`; any
 * other namespace is `ours`.
 *
 * NuGet dependencies (e.g. `Newtonsoft.Json`) carry no marker distinguishing
 * them from application namespaces, so they fall to `ours`.
 */
const dotnetNamespaceCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined => {
  if (!location) {
    return undefined
  }
  return DOTNET_STDLIB_NAMESPACE.test(fileReferencePath(location))
    ? `stdlib`
    : `ours`
}

/**
 * .NET runtime and framework namespace roots: `System.*`, `Microsoft.*`
 * (including F#'s core `Microsoft.FSharp.*`), and CoreLib's `Internal.*`. The
 * root must be followed by a namespace/nested-type separator (or end the type)
 * so an application type like `SystemUtils` isn't mistaken for the framework.
 */
const DOTNET_STDLIB_NAMESPACE = /^(?:System|Microsoft|Internal)(?:[.+`]|$)/u
