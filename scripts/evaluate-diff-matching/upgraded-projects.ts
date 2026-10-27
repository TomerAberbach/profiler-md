import { readdirSync, readFileSync } from 'node:fs'
import { sourceReferencePathOrName } from '../../src/location.ts'
import type { SourceLocation } from '../../src/location.ts'
import type { Download } from './fetch.ts'

/**
 * A project whose version the input generation pins per side, so an example
 * pair profiles two versions of it.
 */
export type UpgradedProject = {
  name: string

  /**
   * Matches a profiled path in the project, capturing the file's path within
   * the project as `path`, or as `directory` and `path` where the profiled path
   * separates the two with a version.
   */
  path: RegExp

  /**
   * The workload script under `scripts/inputs/` that pins the versions, named
   * after the language of the example pairs that profile the project.
   */
  script: string

  /**
   * The variable the script pins each side's version with, as
   * `declare -A NAME=([base]=… [current]=…)`, or how to read the versions where
   * the script pins them another way.
   */
  pin: string | ((script: string) => Record<Side, string>)

  /**
   * Where to fetch the file at `path` of `version`, or absent when the
   * project's files have no fetchable version, so their functions are not
   * scored.
   */
  download?: DownloadOf

  /**
   * An edit to a minified file moves the functions after it along one line, so
   * the diff compares characters, not lines.
   */
  minified?: boolean
}

export type Side = `base` | `current`

type DownloadOf = (version: string, path: string) => Download

const npmDownload =
  (name: string): DownloadOf =>
  (version, path) => ({
    url: `https://registry.npmjs.org/${name}/-/${name}-${version}.tgz`,
    member: `package/${path}`,
  })

/**
 * Downloads from the GitHub repository a workload script clones from, which it
 * assigns as `NAME="https://github.com/…"`.
 */
const clonedRepositoryDownload =
  (script: string, variable: string): DownloadOf =>
  (version, path) => {
    const url = shellVariable(script, variable)
    const repository =
      /^https:\/\/github\.com\/(?<repository>[^/]+\/[^/]+)$/u.exec(url)?.groups
        ?.repository
    if (repository === undefined) {
      throw new Error(
        `scripts/inputs/${script}.sh assigns ${variable} no GitHub repository, got: ${url}`,
      )
    }
    return githubDownload(repository)(version, path)
  }

const githubDownload =
  (repository: string, tagPrefix = ``): DownloadOf =>
  (version, path) => ({
    url: `https://raw.githubusercontent.com/${repository}/${tagPrefix}${version}/${path}`,
  })

/** Reads files from one archive per version, because Codeberg rate limits per file. */
const codebergDownload =
  (repository: string): DownloadOf =>
  (version, path) => ({
    url: `https://codeberg.org/${repository}/archive/${version}.tar.gz`,
    member: `${repository.split(`/`)[1]}/${path}`,
  })

const crateDownload =
  (name: string): DownloadOf =>
  (version, path) => ({
    url: `https://static.crates.io/crates/${name}/${name}-${version}.crate`,
    member: `${name}-${version}/${path}`,
  })

export const UPGRADED_PROJECTS: UpgradedProject[] = [
  {
    name: `typescript`,
    path: /\/node_modules\/typescript\/(?<path>lib\/.+\.js)$/u,
    script: `javascript`,
    pin: `TYPESCRIPT_VERSION`,
    download: npmDownload(`typescript`),
  },
  {
    name: `d3`,
    path: /\/node_modules\/d3\/(?<path>dist\/.+\.js)$/u,
    script: `javascript`,
    pin: `D3_VERSION`,
    download: npmDownload(`d3`),
    minified: true,
  },
  {
    name: `JSON3`,
    path: /\/packages\/JSON3\/[^/]+\/(?<path>src\/.+\.jl)$/u,
    script: `julia`,
    pin: `JSON3_VERSION`,
    download: githubDownload(`quinnj/JSON3.jl`, `v`),
  },
  {
    name: `nixpkgs`,
    path: /^\/nix\/store\/[0-9a-z]{32}-source\/(?<path>.+\.nix)$/u,
    script: `nix`,
    pin: script => ({
      base: flakeLockedRev(`nixpkgs`),
      current: shellVariable(script, `CURRENT_NIXPKGS_REV`),
    }),
    download: githubDownload(`NixOS/nixpkgs`),
  },
  {
    name: `black`,
    path: /^\/src\/black\/(?<path>src\/.+\.py)$/u,
    script: `python`,
    pin: `BLACK_VERSION`,
    download: githubDownload(`psf/black`),
  },
  {
    // A wheel installs the packages under `src/` at the top level, and a
    // collapsed stack records their paths relative to `site-packages`.
    name: `black wheel`,
    path: /(?:^|\/site-packages\/)(?<path>(?:black|blackd|blib2to3)\/.+\.py)$/u,
    script: `python`,
    pin: `BLACK_VERSION`,
    download: (version, path) =>
      githubDownload(`psf/black`)(version, `src/${path}`),
  },
  {
    name: `json-fortran`,
    path: /^\/src\/json-fortran\/(?<path>src\/.+)$/u,
    script: `fortran`,
    pin: `JSON_FORTRAN_TAG`,
    download: clonedRepositoryDownload(`fortran`, `JSON_FORTRAN_REPO`),
  },
  {
    // The workload profiles the standard library of the Zig release it builds
    // with. The GitHub mirror has no release tag after 0.15.2.
    name: `zig`,
    path: /^\/opt\/zig\/(?<path>lib\/.+\.zig)$/u,
    script: `zig`,
    pin: `ZIG_VERSION`,
    download: codebergDownload(`ziglang/zig`),
  },
  {
    name: `zstd`,
    path: /^\/src\/zstd\/(?<path>(?:lib|programs)\/.+\.[ch])$/u,
    script: `c`,
    pin: `ZSTD_TAG`,
    download: clonedRepositoryDownload(`c`, `ZSTD_REPO`),
  },
  {
    name: `fmt`,
    path: /^\/src\/fmt\/(?<path>(?:include|src)\/.+)$/u,
    script: `cpp`,
    pin: `FMT_TAG`,
    download: clonedRepositoryDownload(`cpp`, `FMT_REPO`),
  },
  {
    // Each gem is installed in a directory named with its version, and is a
    // directory of the Rails repository.
    name: `rails`,
    path: /\/gems\/(?<directory>action(?:cable|mailbox|mailer|pack|text|view)|active(?:job|model|record|storage|support)|railties)-[\d.]+\/(?<path>.+\.rb)$/u,
    script: `ruby`,
    pin: `RAILS_VERSION`,
    download: githubDownload(`rails/rails`, `v`),
  },
  {
    name: `serde_json`,
    path: /\/serde_json-[\d.]+\/(?<path>src\/.+\.rs)$/u,
    script: `rust`,
    pin: `SERDE_JSON_VERSION`,
    download: crateDownload(`serde_json`),
  },
  {
    name: `swift-syntax`,
    path: /^\/src\/\.build\/checkouts\/swift-syntax\/(?<path>Sources\/.+\.swift)$/u,
    script: `swift`,
    pin: `SWIFT_SYNTAX_VERSION`,
    download: githubDownload(`swiftlang/swift-syntax`),
  },
  {
    name: `composer`,
    path: /\/profiler-md-php-workload\/composer\/(?<path>src\/.+\.php)$/u,
    script: `php`,
    pin: `COMPOSER_VERSION`,
    download: githubDownload(`composer/composer`),
  },
  {
    // The phar bundles composer's dependencies, which no tag contains.
    name: `composer vendor`,
    path: /\/profiler-md-php-workload\/composer\/(?<path>vendor\/.+\.php)$/u,
    script: `php`,
    pin: `COMPOSER_VERSION`,
  },
]

const DOTNET_TRACE_REASON = `dotnet-trace records namespaces and classes, which identify no file`
const JVM_REASON = `the JVM profilers record class names, which identify no file`

/**
 * Each per-side pin of a workload script that no upgraded project reads, keyed
 * `script:NAME`, with why its example pairs have no ground truth.
 */
const UNSCORED_PINS: ReadonlyMap<string, string> = new Map([
  [`haskell:SIDE_ITERATIONS`, `it pins how many iterations each side runs`],
  [`elixir:JASON_PIN`, `eflambe records module names, which identify no file`],
  [`csharp:NEWTONSOFT_JSON_VERSION`, DOTNET_TRACE_REASON],
  [`fsharp:ARGU_VERSION`, DOTNET_TRACE_REASON],
  [`groovy:CODENARC_VERSION`, JVM_REASON],
  [`java:RENAISSANCE_VERSION`, JVM_REASON],
  [`python:HYPOTHESIS_VERSION`, `tachyon records file basenames only`],
  [`typescript:ZOD_TAG`, `a trace's events have a name and no location`],
])

/**
 * Describes each per-side pin in `scripts/inputs/` that neither an upgraded
 * project reads nor {@link UNSCORED_PINS} exempts, and each exemption that
 * names no pin, so a version pinned for an example pair has ground truth or a
 * stated reason it has none.
 */
export const pinProblems = (): string[] => {
  const pins = new Set<string>()
  for (const file of readdirSync(`scripts/inputs`)) {
    if (!file.endsWith(`.sh`)) {
      continue
    }
    const script = file.slice(0, -`.sh`.length)
    for (const match of readScript(script).matchAll(
      new RegExp(pinPattern(String.raw`(?<name>[A-Z_\d]+)`), `gmu`),
    )) {
      pins.add(`${script}:${match.groups!.name}`)
    }
  }
  const projectPins = new Set(
    UPGRADED_PROJECTS.flatMap(({ script, pin }) =>
      typeof pin === `string` ? `${script}:${pin}` : [],
    ),
  )
  return [
    ...[...pins]
      .filter(pin => !projectPins.has(pin) && !UNSCORED_PINS.has(pin))
      .map(
        pin =>
          `no upgraded project reads pin ${pin}\n  hint: add a project to UPGRADED_PROJECTS, or the pin and why its example pairs have no ground truth to UNSCORED_PINS`,
      ),
    ...[...UNSCORED_PINS.keys()]
      .filter(pin => !pins.has(pin))
      .map(
        pin => `UNSCORED_PINS exempts a pin no script declares, got: ${pin}`,
      ),
  ]
}

const projectVersions = new Map<UpgradedProject, Record<Side, string>>()

export const versionsOf = (project: UpgradedProject): Record<Side, string> => {
  let versions = projectVersions.get(project)
  if (!versions) {
    versions =
      typeof project.pin === `string`
        ? pinnedVersions(project.script, project.pin)
        : project.pin(project.script)
    projectVersions.set(project, versions)
  }
  return versions
}

/**
 * The upgraded project file a function is defined in, and its source reference's
 * path, or `undefined` for a function with no location or in no upgraded
 * project.
 */
export const upgradedFileAt = (
  location: SourceLocation | undefined,
):
  | { project: UpgradedProject; path: string; sourceReference: string }
  | undefined => {
  const sourceReference = location && sourceReferencePathOrName(location)
  const upgradedFile = upgradedFileOf(sourceReference)
  return upgradedFile && { ...upgradedFile, sourceReference: sourceReference! }
}

/**
 * The upgraded project a source reference's path is in, and the file's path
 * within it, or `undefined` for a path in no upgraded project.
 */
export const upgradedFileOf = (
  sourceReference: string | undefined,
): { project: UpgradedProject; path: string } | undefined => {
  if (sourceReference === undefined) {
    return undefined
  }
  for (const project of UPGRADED_PROJECTS) {
    const groups = project.path.exec(sourceReference)?.groups
    if (groups?.path !== undefined) {
      const path =
        groups.directory === undefined
          ? groups.path
          : `${groups.directory}/${groups.path}`
      // A build can pass the compiler a path with a doubled separator, as
      // zstd's `lib//` does, which is the same file.
      return { project, path: path.replaceAll(/\/{2,}/gu, `/`) }
    }
  }
  return undefined
}

const flakeLockedRev = (input: string): string => {
  const lock = JSON.parse(
    readFileSync(`scripts/inputs/flake.lock`, `utf8`),
  ) as { nodes: Record<string, { locked: { rev: string } }> }
  return lock.nodes[input]!.locked.rev
}

/** The value a workload script assigns a variable with `NAME="…"`. */
const shellVariable = (script: string, name: string): string =>
  matchScript(script, `^${name}="([^"]+)"`, `assigns no ${name}`)[1]!

/** The versions a workload script pins with `declare -A NAME=([base]=… [current]=…)`. */
const pinnedVersions = (script: string, name: string): Record<Side, string> => {
  const [, base, current] = matchScript(
    script,
    String.raw`${pinPattern(name)}"?([^"\s]+)"? \[current\]="?([^"\s)]+)"?\)`,
    `pins no ${name} per side`,
  )
  return { base: base!, current: current! }
}

const pinPattern = (name: string): string =>
  String.raw`^declare -A ${name}=\(\[base\]=`

const matchScript = (
  script: string,
  pattern: string,
  failure: string,
): RegExpExecArray => {
  const match = new RegExp(pattern, `mu`).exec(readScript(script))
  if (!match) {
    throw new Error(`${scriptPath(script)} ${failure}`)
  }
  return match
}

const readScript = (script: string): string =>
  readFileSync(scriptPath(script), `utf8`)

const scriptPath = (script: string): string => `scripts/inputs/${script}.sh`
