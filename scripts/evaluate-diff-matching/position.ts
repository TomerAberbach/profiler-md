import { sourceReferencePathOrName } from '../../src/location.ts'
import type { SourceLocation } from '../../src/location.ts'

/**
 * Maps a base function's source reference to its source reference on the
 * current side, or to `undefined` when the ground truth leaves it unknown.
 */
export type SourceReferenceMap = (sourceReference: string) => string | undefined

/**
 * Maps a base position to its position on the current side, to `null` when the
 * edit that produced the current side deleted it, so it has no counterpart, or
 * to `undefined` when the edit leaves it unknown. The source reference can
 * differ when its path contains a version.
 */
export type PositionMap = (
  position: SourceReferencePosition,
) => SourceReferencePosition | null | undefined

/** `sourceReference` is the source reference's path or name. */
type SourceReferencePosition = Position & { sourceReference: string }

export type Position = { line: number; column: number | undefined }

export const identity: PositionMap = position => position

export const sourceReferencePositionOf = (
  location: SourceLocation | undefined,
): SourceReferencePosition | undefined => {
  const position = positionOf(location)
  return (
    position && {
      ...position,
      sourceReference: sourceReferencePathOrName(location!),
    }
  )
}

export const positionOf = (
  location: SourceLocation | undefined,
): Position | undefined =>
  location?.line === undefined
    ? undefined
    : { line: location.line, column: location.column }

export const positionKey = (
  name: string,
  { sourceReference, line, column }: SourceReferencePosition,
): string => `${name}\0${sourceReference}\0${line}\0${column ?? ``}`
