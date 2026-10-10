import type { AggregatedHeapSnapshot } from '../../src/modalities/heap-snapshot/aggregate.ts'
import { mapPosition } from './file-diff.ts'
import {
  GROUND_TRUTH_PATH,
  groundTruthOf,
  UPDATE_HINT,
} from './ground-truth.ts'
import type { GroundTruth } from './ground-truth.ts'
import { locatedEntitiesOf } from './inputs.ts'
import type { FunctionInput } from './inputs.ts'
import type { PositionMap, SourceReferenceMap } from './position.ts'
import { upgradedFileAt, upgradedFileOf } from './upgraded-projects.ts'
import type { UpgradedProject } from './upgraded-projects.ts'

/**
 * Maps a base position in an upgraded project's file through the file's diff,
 * and any other position to itself, and maps each source reference the same
 * way. Returns `undefined` when no located base entity is in an upgraded
 * project, so the pair profiles the same code.
 */
export const versionChangeMap = (
  base: FunctionInput | AggregatedHeapSnapshot,
  current: FunctionInput | AggregatedHeapSnapshot,
  groundTruth: GroundTruth,
):
  | { positionMap: PositionMap; sourceReferenceMap: SourceReferenceMap }
  | undefined => {
  const upgraded = locatedEntitiesOf(base).some(
    ({ location }) => upgradedFileAt(location) !== undefined,
  )
  if (!upgraded) {
    return undefined
  }

  const currentPaths = upgradedFileProfiledPaths(current)

  /**
   * The current side's source reference of a base one, and the upgraded
   * project file it is, or `undefined` when its project has no fetchable
   * version.
   */
  const currentFileOf = (source: string) => {
    const upgradedFile = upgradedFileOf(source)
    if (!upgradedFile) {
      return { source, upgradedFile }
    }
    const { project, path } = upgradedFile
    return project.download
      ? {
          source: currentPaths.get(upgradedFileKey(project, path)) ?? source,
          upgradedFile,
        }
      : undefined
  }

  return {
    sourceReferenceMap: source => currentFileOf(source)?.source,
    positionMap: position => {
      const currentFile = currentFileOf(position.source)
      if (!currentFile?.upgradedFile) {
        return currentFile && position
      }
      const { project, path } = currentFile.upgradedFile
      const diff = groundTruthOf(groundTruth, project).files[path]
      if (!diff) {
        throw new Error(
          `${GROUND_TRUTH_PATH} has no diff of ${project.name} file ${path}\n  hint: ${UPDATE_HINT}`,
        )
      }
      const mapped = mapPosition(diff, position)
      return mapped && { source: currentFile.source, ...mapped }
    },
  }
}

/**
 * The input's profiled path of each upgraded project file, keyed by the
 * project's name and the file's path within the project.
 */
const upgradedFileProfiledPaths = (
  input: FunctionInput | AggregatedHeapSnapshot,
): Map<string, string> => {
  const profiledPaths = new Map<string, string>()
  for (const { location } of locatedEntitiesOf(input)) {
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
