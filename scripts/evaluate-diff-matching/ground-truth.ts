import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { parseExampleFilename } from '../../src/cli/examples.ts'
import type { FormattingProfileToMdOptions } from '../../src/options.ts'
import { prefetch, readDownload } from './fetch.ts'
import { diffFile } from './file-diff.ts'
import type { FileDiff } from './file-diff.ts'
import { committedPairs, functionInputPairs } from './inputs.ts'
import type { Func } from './inputs.ts'
import {
  UPGRADED_PROJECTS,
  upgradedFileAt,
  versionsOf,
} from './upgraded-projects.ts'
import type { Side, UpgradedProject } from './upgraded-projects.ts'

export const GROUND_TRUTH_PATH = `scripts/evaluate-diff-matching/ground-truth.json`

export const UPDATE_HINT = `run pnpm evaluate-diff-matching --update`

export type GroundTruth = Record<
  string,
  { versions: Record<Side, string>; files: Record<string, FileDiff> }
>

/**
 * Fetches both versions of every upgraded project file a committed pair
 * profiles, and writes their file diffs to {@link GROUND_TRUTH_PATH}.
 */
export const updateGroundTruth = (
  options: FormattingProfileToMdOptions,
): void => {
  const projectToPaths = profiledUpgradedFiles(options)

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
      files[path] = diffFile(
        readDownload(base),
        readDownload(current),
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

/**
 * Fails when {@link GROUND_TRUTH_PATH} is stale: when a project's versions
 * differ from its pins, or its files differ from the ones the committed inputs
 * profile. A tag or revision's files never change, so matching versions and
 * files mean matching diffs without fetching anything.
 */
export const checkGroundTruth = (
  options: FormattingProfileToMdOptions,
): void => {
  const groundTruth = readGroundTruth()
  const expected = new Map(
    [...profiledUpgradedFiles(options)].map(([project, paths]) => [
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
  const stale = [...new Set([...expected.keys(), ...actual.keys()])].filter(
    name =>
      JSON.stringify(expected.get(name)) !== JSON.stringify(actual.get(name)),
  )
  if (stale.length > 0) {
    process.stderr.write(
      `${GROUND_TRUTH_PATH} is out of date for ${stale.join(`, `)}\n  hint: ${UPDATE_HINT}\n`,
    )
    process.exit(1)
  }
}

/**
 * Each upgraded project with a fetchable version, and the sorted files of it
 * that committed pairs profile.
 */
const profiledUpgradedFiles = (
  options: FormattingProfileToMdOptions,
): Map<UpgradedProject, string[]> => {
  const scripts = new Set(UPGRADED_PROJECTS.map(({ script }) => script))
  const projectToPaths = new Map<UpgradedProject, Set<string>>()
  for (const pair of committedPairs()) {
    if (!scripts.has(parseExampleFilename(pair.base).language)) {
      continue
    }
    for (const inputs of functionInputPairs(pair, options)) {
      for (const func of inputs.flatMap(
        (input): readonly Func[] => input.functions,
      )) {
        const upgradedFile = upgradedFileAt(func.location)
        if (upgradedFile?.project.download) {
          const paths = projectToPaths.get(upgradedFile.project) ?? new Set()
          paths.add(upgradedFile.path)
          projectToPaths.set(upgradedFile.project, paths)
        }
      }
    }
  }
  return new Map(
    [...projectToPaths].map(([project, paths]) => [project, [...paths].sort()]),
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
