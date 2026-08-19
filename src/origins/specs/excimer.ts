import type { DeepReadonly } from '../../helpers/types.ts'
import { sourceReferencePathOrName } from '../../location.ts'
import type { FunctionCategory, ProfileEntry } from '../../options.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * The Excimer sampling profiler for PHP.
 *
 * Its speedscope output contains plain file paths and its collapsed output
 * contains no location, so {@link CLOSURE_FRAME} is the only evidence in either
 * format. Detection also uses the speedscope parser's origin hint from the
 * file's self-identifying `exporter` field.
 */
export const excimerOriginSpec = {
  id: `excimer`,
  title: `Excimer`,
  formats: [`collapsed`, `speedscope`],
  isMarkerEntry: ({ name }) => name !== undefined && CLOSURE_FRAME.test(name),
  // Excimer records user PHP code alone, because its stack walker skips every
  // frame whose function is not `ZEND_USER_CODE`. A frame with no location is a
  // global function whose file the collapsed format dropped rather than
  // compiled code, so it is `unknown` rather than `native`.
  categorizeEntry: entry =>
    vendorCategory(entry) ?? (entry.location ? `ours` : `unknown`),
  normalizeStackFrame: input => {
    const { name, location } = input
    if (name === undefined) {
      return input
    }

    const closure = CLOSURE_FRAME.exec(name)
    if (closure) {
      const { file, line } = closure.groups!
      return {
        location: { type: `file`, urlOrPath: file!, line: Number(line) },
      }
    }

    // A speedscope frame contains its file, so its name needs no splitting. A
    // file-scope name equals the location, which normalization drops for every
    // origin, and a declaring class stays in the name beside the file.
    if (location) {
      return input
    }

    // A file-scope frame is named by its file. A PHP function name can contain
    // neither a slash nor a colon, and PHP separates a namespace with a
    // backslash, so a slash is the file the collapsed format left out.
    if (name.includes(`/`)) {
      return { location: { type: `file`, urlOrPath: name } }
    }

    // The declaring class is the frame's only source reference, so it becomes
    // the location.
    const separator = name.lastIndexOf(`::`)
    if (separator === -1) {
      return input
    }
    return {
      name: name.slice(separator + 2),
      location: { type: `logical`, name: name.slice(0, separator) },
    }
  },
} as const satisfies OriginSpec

/**
 * An anonymous function, which Excimer names by its file and the line its
 * definition starts on: `{closure:/srv/app/Hooks.php(42)}`.
 *
 * PHP itself writes `{closure}`, and from 8.4 `{closure:/srv/app/Hooks.php:42}`,
 * so the parenthesized line marks Excimer's output in either format.
 */
const CLOSURE_FRAME = /^\{closure:(?<file>.+)\((?<line>\d+)\)\}$/su

/**
 * Categorizes a frame under Composer's `vendor/` as `third-party`.
 *
 * A collapsed frame keeps its declaring class instead of a file, and a class
 * name contains no install directory, so only file-scope and closure frames
 * reach this rule.
 */
const vendorCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  location && VENDOR_DIRECTORY.test(sourceReferencePathOrName(location))
    ? `third-party`
    : undefined

/** Composer's install directory, at the root of a project or of a package. */
const VENDOR_DIRECTORY = /(?:^|\/)vendor\//u
