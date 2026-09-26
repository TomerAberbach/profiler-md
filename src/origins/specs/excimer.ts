import type { DeepReadonly } from '../../helpers/types.ts'
import { sourceReferencePathOrName } from '../../location.ts'
import type { FunctionCategory, ProfileEntry } from '../../options.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * The Excimer sampling profiler for PHP.
 *
 * Its speedscope output contains plain file paths and its collapsed output
 * contains no location, so the evidence in either format is its frame names:
 * {@link CLOSURE_FRAME}, {@link FILE_SCOPE_FRAME}, and
 * {@link TRUNCATION_FRAME}. Detection also uses the speedscope parser's origin
 * hint from the file's self-identifying `exporter` field.
 */
export const excimerOriginSpec = {
  id: `excimer`,
  title: `Excimer`,
  formats: [`collapsed`, `speedscope`],
  isMarkerEntry: ({ name }) =>
    name !== undefined &&
    (CLOSURE_FRAME.test(name) ||
      FILE_SCOPE_FRAME.test(name) ||
      name === TRUNCATION_FRAME),
  // Excimer records user PHP code alone, because its stack walker skips every
  // frame whose function is not `ZEND_USER_CODE`. A frame with no location is a
  // global function whose file the collapsed format dropped rather than
  // compiled code, so it is `unknown` rather than `native`.
  categorizeEntry: entry =>
    vendorCategory(entry) ?? (entry.location ? `ours` : `unknown`),
  normalizeStackFrame: input => {
    const { name, definition } = input
    if (name === undefined) {
      return input
    }

    const closure = CLOSURE_FRAME.exec(name)
    if (closure) {
      // The packed line is where the closure is defined, because Excimer
      // names a closure by its declaration site.
      const { file, line } = closure.groups!
      return {
        definition: {
          type: `file`,
          urlOrPath: file!,
          position: { line: Number(line) },
        },
      }
    }

    // A speedscope frame contains its file, so its name needs no splitting. A
    // file-scope name equals the source, which normalization drops for every
    // origin, and a declaring class stays in the name beside the file.
    if (definition) {
      return input
    }

    // A file-scope frame is named by its file. A PHP function name can contain
    // neither a slash nor a colon, and PHP separates a namespace with a
    // backslash, so a slash is the file the collapsed format left out.
    if (name.includes(`/`)) {
      return { definition: { type: `file`, urlOrPath: name } }
    }

    // The declaring class is the frame's only source reference, so it becomes
    // the source.
    const separator = name.lastIndexOf(`::`)
    if (separator === -1) {
      return input
    }
    return {
      name: name.slice(separator + 2),
      definition: { type: `logical`, name: name.slice(0, separator) },
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
 * Code outside any function, which Excimer names by its absolute file path:
 * `/srv/app/index.php`. The entry script is file-scope code, so its frame is the
 * root of every stack that Excimer did not truncate.
 *
 * phpspy and reli-prof name file-scope code `<main>` instead. Requiring the
 * `.php` extension excludes the bare paths other languages' profilers write, so
 * an entry script without it (e.g. `artisan`) is not a marker, though a `.php`
 * file it includes is.
 */
const FILE_SCOPE_FRAME = /^\/.*\.php$/su

/**
 * The frame Excimer writes in place of the frames toward the root when a stack
 * exceeds the configured maximum depth.
 */
const TRUNCATION_FRAME = `excimer_truncated`

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
