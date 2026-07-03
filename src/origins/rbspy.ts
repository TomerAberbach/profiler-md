import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import { locationlessStdlibCategory } from './categorize.ts'
import type { OriginSpec } from './origin.ts'

/**
 * `rbspy`, the sampling profiler for Ruby.
 *
 * Its collapsed frames are `method - file:line` (e.g.
 * `parse - /app/lib/foo.rb:12`), with a `[c function]` marker for native
 * methods. Its `normalizeFrame` splits the trailing `file:line` off the method
 * name. Splitting on the *last* ` - ` keeps a
 * `<module:Foo>`-style method name (which contains its own colon) intact rather
 * than mistaking its colon for the file/line separator.
 */
export const rbspyOriginSpec = {
  id: `rbspy`,
  language: `ruby`,
  formats: [`collapsed`],
  matchesEntry: entry => isRbspyFrame(entry.name),
  categorize: entry =>
    cFunctionCategory(entry) ??
    rubyGemCategory(entry) ??
    rubyStdlibCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    `ours`,
  normalizeFrame: input => {
    if (input.location) {
      return input
    }

    const name = input.name ?? ``
    const separator = name.lastIndexOf(SEPARATOR)
    if (separator === -1) {
      return input
    }

    const method = name.slice(0, separator)
    const fileLine = FILE_LINE.exec(name.slice(separator + SEPARATOR.length))
    if (!fileLine) {
      // A location-less frame, e.g. `(unknown) [c function] - (unknown)`.
      return { name: method }
    }

    return {
      name: method,
      location: { urlOrPath: fileLine.groups!.file! },
      line: Number(fileLine.groups!.line),
    }
  },
} as const satisfies OriginSpec

/** Whether a raw frame name is rbspy-shaped. */
const isRbspyFrame = (name: string | undefined): boolean =>
  name !== undefined &&
  (METHOD_FILE_LINE.test(name) ||
    name.includes(C_FUNCTION) ||
    name.startsWith(`<main> ${SEPARATOR}`) ||
    name.startsWith(`<top (required)> ${SEPARATOR}`))

/** Rbspy separates a method name from its `file:line` with ` - `. */
const SEPARATOR = ` - `

/** A `file:line` suffix following the {@link SEPARATOR}. */
const FILE_LINE = /^(?<file>.+):(?<line>\d+)$/u

/** A frame ending in ` - file:line`. */
const METHOD_FILE_LINE = / - .+:\d+$/u

/** Rbspy's marker for a native (C) method, which carries no Ruby location. */
const C_FUNCTION = `[c function]`

/** Categorizes rbspy's native `[c function]` frames as `stdlib`. */
const cFunctionCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  name?.includes(C_FUNCTION) ? `stdlib` : undefined

/** Categorizes frames from an installed gem as `third-party`. */
const rubyGemCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location && fileReferencePath(location).includes(`/gems/`)
    ? `third-party`
    : undefined

/** Categorizes frames from the Ruby standard library as `stdlib`. */
const rubyStdlibCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined => {
  if (!location) {
    return undefined
  }
  const path = fileReferencePath(location)
  return path.includes(`/usr/lib/ruby/`) ||
    path.includes(`vendor_ruby`) ||
    RUBY_VERSIONED_LIB.test(path)
    ? `stdlib`
    : undefined
}

/** A versioned Ruby library directory, e.g. `/ruby/3.1.0/psych.rb`. */
const RUBY_VERSIONED_LIB = /\/ruby\/\d/u
