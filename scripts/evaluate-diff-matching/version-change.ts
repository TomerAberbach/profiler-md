import { mapPosition } from './file-diff.ts'
import {
  GROUND_TRUTH_PATH,
  groundTruthOf,
  UPDATE_HINT,
} from './ground-truth.ts'
import type { GroundTruth } from './ground-truth.ts'
import type { FunctionInput } from './inputs.ts'
import type { PositionMap } from './position.ts'
import { upgradedFileAt, upgradedFileOf } from './upgraded-projects.ts'
import type { UpgradedProject } from './upgraded-projects.ts'

/**
 * Maps a base position in an upgraded project's file through the file's diff,
 * and any other position to itself. Returns `undefined` when no base function
 * is in an upgraded project, so the pair profiles the same code.
 */
export const versionChangeMap = (
  base: FunctionInput,
  current: FunctionInput,
  groundTruth: GroundTruth,
): PositionMap | undefined => {
  const upgraded = base.functions.some(
    func => upgradedFileAt(func.location) !== undefined,
  )
  if (!upgraded) {
    return undefined
  }

  const currentPaths = upgradedFileProfiledPaths(current)

  return position => {
    const upgradedFile = upgradedFileOf(position.source)
    if (!upgradedFile) {
      return position
    }
    const { project, path } = upgradedFile
    if (!project.download) {
      return undefined
    }
    const diff = groundTruthOf(groundTruth, project).files[path]
    if (!diff) {
      throw new Error(
        `${GROUND_TRUTH_PATH} has no diff of ${project.name} file ${path}\n  hint: ${UPDATE_HINT}`,
      )
    }
    const mapped = mapPosition(diff, position)
    return (
      mapped && {
        source:
          currentPaths.get(upgradedFileKey(project, path)) ?? position.source,
        ...mapped,
      }
    )
  }
}

/**
 * The input's profiled path of each upgraded project file, keyed by the
 * project's name and the file's path within the project.
 */
const upgradedFileProfiledPaths = (
  input: FunctionInput,
): Map<string, string> => {
  const profiledPaths = new Map<string, string>()
  for (const { location } of input.functions) {
    const upgradedFile = upgradedFileAt(location)
    if (upgradedFile) {
      profiledPaths.set(
        upgradedFileKey(upgradedFile.project, upgradedFile.path),
        upgradedFile.source,
      )
    }
  }
  return profiledPaths
}

const upgradedFileKey = (project: UpgradedProject, path: string): string =>
  `${project.name}\0${path}`
