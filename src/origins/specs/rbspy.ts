import type { DeepReadonly } from '../../helpers/types.ts'
import { sourceReferencePathOrName } from '../../location.ts'
import type { FunctionCategory, ProfileEntry } from '../../options.ts'
import {
  normalizeSpeedscopeExecutingLine,
  placeholderPathNormalizer,
} from '../origin.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * `rbspy`, the sampling profiler for Ruby.
 *
 * Its collapsed frames are `method - file:line` (e.g.
 * `parse - /app/lib/foo.rb:12`), with a `[c function]` marker for native
 * methods. Its `normalizeStackFrame` splits the trailing `file:line` off the method
 * name. Splitting on the *last* ` - ` keeps a
 * `<module:Foo>`-style method name (which contains its own colon) intact rather
 * than mistaking its colon for the file/line separator.
 */
export const rbspyOriginSpec = {
  id: `rbspy`,
  formats: [`callgrind`, `collapsed`, `pprof`, `speedscope`],
  isMarkerEntry: entry => isRbspyStackFrame(entry.name),
  categorizeEntry: entry =>
    cFunctionCategory(entry) ??
    rubyGemCategory(entry) ??
    rubyStdlibCategory(entry) ??
    unattributedRubyCategory(entry) ??
    `ours`,
  normalizeStackFrame: (input, format) => {
    if (input.location) {
      // Rbspy's speedscope export also emits one frame per sampled line, with
      // the line carried in the location rather than packed into the name.
      return dropPlaceholderPath(
        normalizeSpeedscopeExecutingLine(input, format),
      )
    }

    const name = input.name ?? ``
    const separator = name.lastIndexOf(SEPARATOR)
    if (separator === -1) {
      return input
    }

    const method = name.slice(0, separator)
    const fileLine = FILE_LINE.exec(name.slice(separator + SEPARATOR.length))
    if (!fileLine) {
      // A frame whose path lacks a line, e.g. `(unknown) [c function] - (unknown)`.
      return { name: method }
    }

    return dropPlaceholderPath({
      name: method,
      location: { type: `file`, urlOrPath: fileLine.groups!.file! },
      line: Number(fileLine.groups!.line),
    })
  },
} as const satisfies OriginSpec

/**
 * Whether a raw frame name is rbspy-shaped. Collapsed frames pack the location
 * into the name (` - file:line`); pprof and speedscope exports of the same
 * profiles carry the location separately, leaving rbspy's `[c function]`
 * marker and the Ruby VM's `<main>`/`<top (required)>` toplevel frames bare.
 */
const isRbspyStackFrame = (name: string | undefined): boolean =>
  name !== undefined &&
  (METHOD_FILE_LINE.test(name) ||
    name.includes(C_FUNCTION) ||
    name === `<main>` ||
    name === `<top (required)>` ||
    name.startsWith(`<main> ${SEPARATOR}`) ||
    name.startsWith(`<top (required)> ${SEPARATOR}`))

/** A frame ending in ` - file:line`. */
const METHOD_FILE_LINE = / - .+:\d+$/u

/** Rbspy separates a method name from its `file:line` with ` - `. */
const SEPARATOR = ` - `

/** A `file:line` suffix following the {@link SEPARATOR}. */
const FILE_LINE = /^(?<file>.+):(?<line>\d+)$/u

/**
 * Categorizes rbspy's native `[c function]` frames as `native`.
 *
 * The marker means the method's body is compiled C with no Ruby source. That is
 * all rbspy records, so the method may belong to core Ruby or to a gem's
 * extension.
 */
const cFunctionCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  name?.includes(C_FUNCTION) ? `native` : undefined

/** Rbspy's marker for a native (C) method, which carries no Ruby location. */
const C_FUNCTION = `[c function]`

/** Categorizes frames from an installed gem as `third-party`. */
const rubyGemCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  location && sourceReferencePathOrName(location).includes(`/gems/`)
    ? `third-party`
    : undefined

/** Categorizes frames from the Ruby standard library as `stdlib`. */
const rubyStdlibCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined => {
  if (!location) {
    return undefined
  }
  const path = sourceReferencePathOrName(location)
  return path.startsWith(RUBY_INTERNAL_PREFIX) ||
    path.includes(`/usr/lib/ruby/`) ||
    path.includes(`vendor_ruby`) ||
    RUBY_VERSIONED_LIB.test(path)
    ? `stdlib`
    : undefined
}

/**
 * The prefix Ruby writes on the path of a source compiled into the interpreter,
 * e.g. `<internal:kernel>` for a method written in Ruby inside it, or
 * `<internal:/usr/local/lib/ruby/3.4.0/rubygems/core_ext/kernel_require.rb>`
 * for one of its prelude files.
 */
const RUBY_INTERNAL_PREFIX = `<internal:`

/** A versioned Ruby library directory, e.g. `/ruby/3.1.0/psych.rb`. */
const RUBY_VERSIONED_LIB = /\/ruby\/\d/u

/**
 * Categorizes a remaining location-less frame as `unknown`.
 *
 * Rbspy records a file for every Ruby method and writes `unknown` for one it
 * could not attribute, such as a method defined by `class_eval`. Stripping
 * that placeholder leaves no location, so by this point in the chain the frame
 * is Ruby source rbspy could not place rather than the compiled code
 * `[c function]` marks.
 */
const unattributedRubyCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  location ? undefined : `unknown`

/**
 * The paths rbspy writes for a frame without a source file.
 *
 * `(unknown)` is the path every export writes for a C function it cannot
 * resolve, named `(unknown) [c function]`. `unknown` substitutes for an
 * absolute path Ruby omits, for a method the interpreter compiled from its own
 * prelude or for an `eval`. The collapsed and callgrind exports write the
 * absolute path, so they write `unknown` where the pprof and speedscope
 * exports write the relative path (`<internal:gem_prelude> - unknown:16`
 * against `<internal:gem_prelude>`). The line beside it is still the executing
 * line.
 */
const UNKNOWN_PATHS: ReadonlySet<string> = new Set([`(unknown)`, `unknown`])

const dropPlaceholderPath = placeholderPathNormalizer(UNKNOWN_PATHS)
