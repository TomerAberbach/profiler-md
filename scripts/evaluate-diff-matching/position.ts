import { sourceReferencePathOrName } from '../../src/location.ts'
import type { SourceLocation } from '../../src/location.ts'

export type Position = { line: number; column: number | undefined }

/** `source` is the source reference's path or name. */
type SourcePosition = Position & { source: string }

/**
 * Maps a base position to its position on the current side, to `null` when the
 * edit that produced the current side deleted it, so it has no counterpart, or
 * to `undefined` when the edit leaves it unknown. The source can differ when
 * its path contains a version.
 */
export type PositionMap = (
  position: SourcePosition,
) => SourcePosition | null | undefined

/**
 * Maps a base function's source reference to its source reference on the
 * current side, or to `undefined` when the ground truth leaves it unknown.
 */
export type SourceReferenceMap = (source: string) => string | undefined

export const identity: PositionMap = position => position

export const positionOf = (
  location: SourceLocation | undefined,
): Position | undefined =>
  location?.line === undefined
    ? undefined
    : { line: location.line, column: location.column }

export const sourcePositionOf = (
  location: SourceLocation | undefined,
): SourcePosition | undefined => {
  const position = positionOf(location)
  return (
    position && { ...position, source: sourceReferencePathOrName(location!) }
  )
}

export const positionKey = (
  name: string,
  { source, line, column }: SourcePosition,
): string => `${name}\0${source}\0${line}\0${column ?? ``}`
