import type { EntryMatchRule } from './origin.ts'

/**
 * The version of a module's directory in the module cache, e.g. the `@v1.9.1`
 * of `<GOPATH>/pkg/mod/github.com/spf13/cobra@v1.9.1/command.go`, or of the
 * `github.com/spf13/cobra@v1.9.1/command.go` a `-trimpath` build writes, with
 * any pre-release or pseudo-version suffix after it. The path without the
 * version identifies the file across versions, because the module cache
 * extracts each version of a module to its own `<module>@<version>` directory.
 *
 * Stripping the version gives no two entries of one profile the same match
 * key, because a build selects one version of each module path and a new major
 * version changes the module path (`/v2`).
 */
const MODULE_VERSION_REGEX = /@v\d+\.\d+\.\d+[^/]*(?=\/)/u

export const GO_LOCATION_MATCH_RULES: readonly EntryMatchRule[] = [
  [MODULE_VERSION_REGEX, ``],
]
