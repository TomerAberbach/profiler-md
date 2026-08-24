import type { DeepReadonly } from '../../helpers/types.ts'
import { sourceReferencePathOrName } from '../../location.ts'
import type { StackFrame } from '../../modalities/stack-frame.ts'
import type { FunctionCategory, ProfileEntry } from '../../options.ts'
import { matchEntryFromRules } from '../origin.ts'
import type { EntryMatchRule, OriginSpec } from '../origin.ts'

/**
 * The store hash of a source tree in the Nix store, e.g. the
 * `j2r11kxv91yl5xqppy3vy84klwxjbz1i` of
 * `/nix/store/j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix`. The
 * evaluator reads a flake input or channel from such a tree. The hash changes
 * with every revision, while the path without it,
 * `/nix/store/source/lib/attrsets.nix`, identifies the file across revisions.
 */
const STORE_HASH_REGEX = /(?<prefix>\/nix\/store\/)[0-9a-z]{32}-/u

const NIX_LOCATION_MATCH_RULES: EntryMatchRule[] = [
  [STORE_HASH_REGEX, `$<prefix>`],
]

/**
 * The source the evaluator writes for a call whose position it could not
 * resolve, with line 0 and no column (`«none»:0`). The line is part of the
 * placeholder, so normalization drops it with the path.
 */
const UNKNOWN_PATH = `«none»`

/**
 * The Nix evaluator's built-in sampling profiler, enabled by the
 * `eval-profiler` setting, which samples the Nix function call stack and writes
 * collapsed stacks.
 *
 * Each frame is a function call packed as `source:line:column[:name]`. The
 * position is the call site, the only position the profiler records for a
 * call. The normalizer stores it in `StackFrame.callSite`, which identifies
 * and locates the function as a flame graph of the output does. The call site
 * is there by design: https://github.com/NixOS/nix/pull/13220 specifies "call
 * site location (where the function gets called)" per frame, because a frame
 * per call site shows which caller is hot and most Nix lambdas are anonymous.
 *
 * The name is the lambda's attribute name (`folder`), `functor` for a call of
 * an attribute set with a `__functor` attribute, or `primop <name>` for a
 * builtin implemented in the evaluator. An anonymous lambda has no name. The
 * evaluator writes a builtin whose call site it could not resolve without a
 * position, as a bare `primop <name>`. For a lambda whose call site it could
 * not resolve, it writes the lambda's definition position in the same shape, a
 * fallback the PR chose over emitting `«none»:0`.
 */
export const nixOriginSpec = {
  id: `nix`,
  title: `Nix`,
  formats: [`collapsed`],
  isMarkerEntry: ({ name }) => name !== undefined && isNixStackFrame(name),
  categorizeEntry: entry =>
    primopCategory(entry) ??
    evaluatorSourceCategory(entry) ??
    unattributedNixCategory(entry) ??
    `ours`,
  matchEntry: matchEntryFromRules({ location: NIX_LOCATION_MATCH_RULES }),
  normalizeStackFrame: input => {
    // A sourced frame stores its position in a separate field, so its name
    // isn't packed.
    if (input.definition || input.callSite) {
      return input
    }

    return parsePackedStackFrame(input.name ?? ``) ?? input
  },
  functionIdentity: `call-site`,
} as const satisfies OriginSpec

/**
 * Splits a packed `source:line[:column][:name]` frame into its name and call
 * site, or returns `undefined` for a frame packing no position. The source
 * contains no colon. It is a store path, a `«nix-internal»` path, or a
 * `«none»` placeholder, which the parser drops with its placeholder line. The
 * evaluator omits the column when it recorded none (`«none»:0`). The name is
 * everything after the position, so a `primop derivationStrict:<name>` frame
 * keeps the derivation name the evaluator appends to it.
 */
const parsePackedStackFrame = (frame: string): StackFrame | undefined => {
  const position = POSITION.exec(frame)
  if (!position) {
    return undefined
  }
  const { file, line } = position.groups!

  // The rest is `column`, `name`, `column:name`, or nothing.
  let rest = frame.slice(position[0].length + 1)
  const column = COLUMN.exec(rest)
  let columnNumber
  if (column) {
    columnNumber = Number(column.groups!.column)
    rest = rest.slice(column[0].length)
  }

  const name = rest === `` ? undefined : rest
  if (file === UNKNOWN_PATH) {
    return { name }
  }
  return {
    name,
    callSite: {
      type: `file`,
      urlOrPath: file!,
      position: {
        line: Number(line),
        ...(columnNumber === undefined ? {} : { column: columnNumber }),
      },
    },
  }
}

const POSITION = /^(?<file>[^:]+):(?<line>\d+)(?=:|$)/u

const COLUMN = /^(?<column>\d+)(?::|$)/u

const isNixStackFrame = (name: string): boolean =>
  name.startsWith(PRIMOP_PREFIX) ||
  name.startsWith(`${EVALUATOR_SOURCE_DIRECTORY}/`) ||
  NIX_FILE_POSITION.test(name)

const NIX_FILE_POSITION = /^[^:]+\.nix:\d+:\d+(?::|$)/u

/**
 * A builtin is implemented in the evaluator's C++ and has no Nix source of its
 * own. The position in its frame is where Nix code called it, so this rule
 * precedes the path rules.
 */
const primopCategory = ({
  name,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  name?.startsWith(PRIMOP_PREFIX) ? `native` : undefined

/** The prefix the evaluator writes on every builtin's frame name. */
const PRIMOP_PREFIX = `primop `

/**
 * Categorizes the Nix code the evaluator ships inside itself as `stdlib`: the
 * `derivation` function in `«nix-internal»/derivation-internal.nix`, and the
 * `<nix/fetchurl.nix>` builtin fetcher.
 */
const evaluatorSourceCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined => {
  if (!location) {
    return undefined
  }
  const path = sourceReferencePathOrName(location)
  return path.startsWith(`${EVALUATOR_SOURCE_DIRECTORY}/`) ||
    path.startsWith(`<nix/`)
    ? `stdlib`
    : undefined
}

/** The directory the evaluator reports for the Nix sources compiled into it. */
const EVALUATOR_SOURCE_DIRECTORY = `«nix-internal»`

/**
 * Categorizes a remaining location-less frame as `unknown`.
 *
 * The evaluator records a position for every call, and writes `«none»` where
 * it could not resolve one. Normalization strips that placeholder and leaves
 * no location. A location-less frame that reaches this rule is a call the
 * evaluator could not place, because the `primop` rule already matched the
 * builtins.
 */
const unattributedNixCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  location ? undefined : `unknown`
