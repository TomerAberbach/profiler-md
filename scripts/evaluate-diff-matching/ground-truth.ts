import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { parseExampleFilename } from '../../src/formats/examples.ts'
import type { AggregatedHeapSnapshot } from '../../src/modalities/heap-snapshot/aggregate.ts'
import type { FormattingProfileToMdOptions } from '../../src/options.ts'
import { prefetch, readDownload } from './fetch.ts'
import { diffFile } from './file-diff.ts'
import type { FileDiff } from './file-diff.ts'
import {
  committedPairs,
  locatedEntitiesOf,
  scoredInputPairs,
} from './inputs.ts'
import type { FunctionInput } from './inputs.ts'
import {
  pinProblems,
  UPGRADED_PROJECTS,
  upgradedFileAt,
  upgradedFileKey,
  versionsOf,
} from './upgraded-projects.ts'
import type { Side, UpgradedProject } from './upgraded-projects.ts'

export const GROUND_TRUTH_PATH = `scripts/evaluate-diff-matching/ground-truth.json`

export const UPDATE_HINT = `run pnpm update-diff-matching`

export type GroundTruth = Record<
  string,
  { versions: Record<Side, string>; files: Record<string, FileDiff> }
>

/**
 * Fetches both versions of every upgraded project file an example pair's base
 * side profiles, and writes their file diffs to {@link GROUND_TRUTH_PATH}.
 */
export const updateGroundTruth = (
  options: FormattingProfileToMdOptions,
): void => {
  const upgradedLanguages = new Set(
    UPGRADED_PROJECTS.map(({ script }) => script),
  )
  const projectToPaths = pathsByProject(
    committedPairs()
      .filter(({ base }) =>
        upgradedLanguages.has(parseExampleFilename(base).language),
      )
      .flatMap(pair =>
        profiledUpgradedFiles(
          scoredInputPairs(pair, options).map(({ base }) => base),
        ),
      ),
  )

  const downloadsOf = (project: UpgradedProject, path: string) => {
    const { base, current } = versionsOf(project)
    return {
      base: project.download!(base, path),
      current: project.download!(current, path),
    }
  }
  prefetch(
    [...projectToPaths].flatMap(([project, paths]) =>
      paths.flatMap(path => {
        const { base, current } = downloadsOf(project, path)
        return [base.url, current.url]
      }),
    ),
  )

  const groundTruth: GroundTruth = {}
  for (const [project, paths] of projectToPaths) {
    const versions = versionsOf(project)
    const files: Record<string, FileDiff> = {}
    for (const path of paths) {
      console.log(`diffing ${project.name} ${path}`)
      const { base, current } = downloadsOf(project, path)
      const baseFile = readDownload(base)
      if (baseFile === undefined) {
        throw new Error(
          `${project.name} ${versions.base} has no file ${path}, though a base input profiles it`,
        )
      }
      // A file the current version deleted diffs as every line deleted, so its
      // functions have no known counterpart.
      files[path] = diffFile(
        baseFile,
        readDownload(current) ?? ``,
        project.minified,
      )
    }
    groundTruth[project.name] = { versions, files }
  }
  writeFileSync(GROUND_TRUTH_PATH, serializeGroundTruth(groundTruth))
}

/**
 * Writes one line per file, so a change to the ground truth shows which files'
 * diffs changed.
 */
const serializeGroundTruth = (groundTruth: GroundTruth): string => {
  const projects = Object.entries(groundTruth).map(
    ([name, { versions, files }]) => {
      const fileLines = Object.entries(files).map(
        ([path, hunks]) =>
          `      ${JSON.stringify(path)}: ${JSON.stringify(hunks)}`,
      )
      return [
        `  ${JSON.stringify(name)}: {`,
        `    "versions": ${JSON.stringify(versions)},`,
        `    "files": {`,
        fileLines.join(`,\n`),
        `    }`,
        `  }`,
      ].join(`\n`)
    },
  )
  return `{\n${projects.join(`,\n`)}\n}\n`
}

/** Returns the {@link staleProjects} as a problem, and the {@link pinProblems}. */
export const groundTruthProblems = (
  profiledFiles: ProfiledFile[],
): string[] => {
  const stale = staleProjects(profiledFiles)
  return [
    ...pinProblems(),
    ...(stale.length > 0
      ? [
          `${GROUND_TRUTH_PATH} is out of date for ${stale.join(`, `)}\n  hint: ${UPDATE_HINT}`,
        ]
      : []),
  ]
}

/**
 * Returns the names of the projects {@link GROUND_TRUTH_PATH} is stale for:
 * those whose versions differ from their pins, or whose files differ from the
 * ones the committed inputs profile. A tag or revision's files never change, so
 * matching versions and files mean matching diffs without fetching anything.
 */
export const staleProjects = (profiledFiles: ProfiledFile[]): string[] => {
  const groundTruth = readGroundTruth()
  const expected = new Map(
    [...pathsByProject(profiledFiles)].map(([project, paths]) => [
      project.name,
      { versions: versionsOf(project), paths },
    ]),
  )
  const actual = new Map(
    Object.entries(groundTruth).map(([name, { versions, files }]) => [
      name,
      { versions, paths: Object.keys(files).sort() },
    ]),
  )
  return [...new Set([...expected.keys(), ...actual.keys()])].filter(
    name =>
      JSON.stringify(expected.get(name)) !== JSON.stringify(actual.get(name)),
  )
}

/** A file of an upgraded project with a fetchable version. */
export type ProfiledFile = { project: string; path: string }

/**
 * The upgraded projects' files that an example pair's base inputs profile. The
 * ground truth maps only base positions, so a file only the current side
 * profiles, which may be new in the current version, needs no diff.
 */
export const profiledUpgradedFiles = (
  bases: (FunctionInput | AggregatedHeapSnapshot)[],
): ProfiledFile[] => {
  const files = new Map<string, ProfiledFile>()
  for (const base of bases) {
    for (const { location } of locatedEntitiesOf(base)) {
      const upgradedFile = upgradedFileAt(location)
      if (upgradedFile?.project.download) {
        const { project, path } = upgradedFile
        files.set(upgradedFileKey(project, path), {
          project: project.name,
          path,
        })
      }
    }
  }
  return [...files.values()]
}

/** Each upgraded project with a profiled file, and its sorted files. */
const pathsByProject = (
  profiledFiles: ProfiledFile[],
): Map<UpgradedProject, string[]> =>
  new Map(
    [...Map.groupBy(profiledFiles, projectOf)].map(([project, files]) => [
      project,
      [...new Set(files.map(({ path }) => path))].sort(),
    ]),
  )

const projectOf = ({ project }: ProfiledFile): UpgradedProject =>
  UPGRADED_PROJECTS.find(({ name }) => name === project)!

/** Whether the ground truth has the file's diff between the pinned versions. */
export const hasFileDiff = (
  groundTruth: GroundTruth,
  file: ProfiledFile,
): boolean => {
  const entry = groundTruth[file.project]
  const versions = versionsOf(projectOf(file))
  return (
    entry?.versions.base === versions.base &&
    entry.versions.current === versions.current &&
    entry.files[file.path] !== undefined
  )
}

export const readGroundTruth = (): GroundTruth =>
  existsSync(GROUND_TRUTH_PATH)
    ? (JSON.parse(readFileSync(GROUND_TRUTH_PATH, `utf8`)) as GroundTruth)
    : {}

/** Throws when the project's ground truth is for versions other than its pins. */
export const groundTruthOf = (
  groundTruth: GroundTruth,
  project: UpgradedProject,
): GroundTruth[string] => {
  const entry = groundTruth[project.name]
  const versions = versionsOf(project)
  if (
    entry?.versions.base !== versions.base ||
    entry.versions.current !== versions.current
  ) {
    throw new Error(
      `${GROUND_TRUTH_PATH} is out of date for ${project.name}, got: ${JSON.stringify(entry?.versions)}\n  hint: ${UPDATE_HINT}`,
    )
  }
  return entry
}
