import { readFileSync } from 'node:fs'
import type { SourceLocation } from '../../src/location.ts'
import type { Download } from './fetch.ts'
import { sourcePositionOf } from './position.ts'

export type Side = `base` | `current`

/**
 * A project whose version the input generation pins per side, so a pair
 * profiles two versions of it.
 */
export type UpgradedProject = {
  name: string

  /**
   * Matches a profiled path in the project, capturing the file's path within
   * the project as `path`.
   */
  path: RegExp

  /**
   * The workload script under `scripts/inputs/` that pins the versions, named
   * after the language of the pairs that profile the project.
   */
  script: string

  /** Each side's version, as the input generation pins it. */
  versions: (script: string) => Record<Side, string>

  /**
   * Where to fetch the file at `path` of `version`, or absent when the
   * project's files have no fetchable version, so their functions are not
   * scored.
   */
  download?: (version: string, path: string) => Download

  /**
   * An edit to a minified file moves the functions after it along one line, so
   * the diff compares characters, not lines.
   */
  minified?: boolean
}

const npmDownload =
  (name: string): UpgradedProject[`download`] =>
  (version, path) => ({
    url: `https://registry.npmjs.org/${name}/-/${name}-${version}.tgz`,
    member: `package/${path}`,
  })

const githubDownload =
  (repository: string, tagPrefix = ``): UpgradedProject[`download`] =>
  (version, path) => ({
    url: `https://raw.githubusercontent.com/${repository}/${tagPrefix}${version}/${path}`,
  })

export const UPGRADED_PROJECTS: UpgradedProject[] = [
  {
    name: `typescript`,
    path: /\/node_modules\/typescript\/(?<path>lib\/.+\.js)$/u,
    script: `javascript`,
    versions: script => pinnedVersions(script, `TYPESCRIPT_VERSION`),
    download: npmDownload(`typescript`),
  },
  {
    name: `d3`,
    path: /\/node_modules\/d3\/(?<path>dist\/.+\.js)$/u,
    script: `javascript`,
    versions: script => pinnedVersions(script, `D3_VERSION`),
    download: npmDownload(`d3`),
    minified: true,
  },
  {
    name: `JSON3`,
    path: /\/packages\/JSON3\/[^/]+\/(?<path>src\/.+\.jl)$/u,
    script: `julia`,
    versions: script => pinnedVersions(script, `JSON3_VERSION`),
    download: githubDownload(`quinnj/JSON3.jl`, `v`),
  },
  {
    name: `nixpkgs`,
    path: /^\/nix\/store\/[0-9a-z]{32}-source\/(?<path>.+\.nix)$/u,
    script: `nix`,
    versions: script => ({
      base: flakeLockedRev(`nixpkgs`),
      current: shellVariable(script, `CURRENT_NIXPKGS_REV`),
    }),
    download: githubDownload(`NixOS/nixpkgs`),
  },
  {
    name: `black`,
    path: /^\/src\/black\/(?<path>src\/.+\.py)$/u,
    script: `python`,
    versions: script => pinnedVersions(script, `BLACK_VERSION`),
    download: githubDownload(`psf/black`),
  },
  {
    name: `composer`,
    path: /\/profiler-md-php-workload\/composer\/(?<path>src\/.+\.php)$/u,
    script: `php`,
    versions: script => pinnedVersions(script, `COMPOSER_VERSION`),
    download: githubDownload(`composer/composer`),
  },
  {
    // The phar bundles composer's dependencies, which no tag contains.
    name: `composer vendor`,
    path: /\/profiler-md-php-workload\/composer\/(?<path>vendor\/.+\.php)$/u,
    script: `php`,
    versions: script => pinnedVersions(script, `COMPOSER_VERSION`),
  },
]

const projectVersions = new Map<UpgradedProject, Record<Side, string>>()

export const versionsOf = (project: UpgradedProject): Record<Side, string> => {
  let versions = projectVersions.get(project)
  if (!versions) {
    versions = project.versions(project.script)
    projectVersions.set(project, versions)
  }
  return versions
}

/**
 * The upgraded project a source reference's path is in, and the file's path
 * within it, or `undefined` for a path in no upgraded project.
 */
export const upgradedFileOf = (
  source: string | undefined,
): { project: UpgradedProject; path: string } | undefined => {
  if (source === undefined) {
    return undefined
  }
  for (const project of UPGRADED_PROJECTS) {
    const path = project.path.exec(source)?.groups?.path
    if (path !== undefined) {
      return { project, path }
    }
  }
  return undefined
}

/**
 * The upgraded project file a function is defined in, and its source reference's
 * path, or `undefined` for a function with no line or in no upgraded project.
 */
export const upgradedFileAt = (
  location: SourceLocation | undefined,
): { project: UpgradedProject; path: string; source: string } | undefined => {
  const source = sourcePositionOf(location)?.source
  const upgradedFile = upgradedFileOf(source)
  return upgradedFile && { ...upgradedFile, source: source! }
}

/** The versions a workload script pins with `declare -A NAME=([base]=… [current]=…)`. */
const pinnedVersions = (script: string, name: string): Record<Side, string> => {
  const [, base, current] = matchScript(
    script,
    `declare -A ${name}=\\(\\[base\\]="?([^"\\s]+)"? \\[current\\]="?([^"\\s)]+)"?\\)`,
    `pins no ${name} per side`,
  )
  return { base: base!, current: current! }
}

/** The value a workload script assigns a variable with `NAME="…"`. */
const shellVariable = (script: string, name: string): string =>
  matchScript(script, `^${name}="([^"]+)"`, `assigns no ${name}`)[1]!

const matchScript = (
  script: string,
  pattern: string,
  failure: string,
): RegExpExecArray => {
  const path = `scripts/inputs/${script}.sh`
  const match = new RegExp(pattern, `mu`).exec(readFileSync(path, `utf8`))
  if (!match) {
    throw new Error(`${path} ${failure}`)
  }
  return match
}

const flakeLockedRev = (input: string): string => {
  const lock = JSON.parse(
    readFileSync(`scripts/inputs/flake.lock`, `utf8`),
  ) as { nodes: Record<string, { locked: { rev: string } }> }
  return lock.nodes[input]!.locked.rev
}
