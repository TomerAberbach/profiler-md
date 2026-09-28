import { sourceReferencePathOrName } from '../../src/location.ts'
import type { SourceLocation } from '../../src/location.ts'

export type Position = { line: number; column: number | undefined }

/** `source` is the source reference's path or name. */
type SourcePosition = Position & { source: string }

/**
 * Maps a base function's position to its position on the current side, or to
 * `undefined` when the edit that produced the current side leaves it unknown.
 * The source can differ when its path contains a version.
 */
export type PositionMap = (
  position: SourcePosition,
) => SourcePosition | undefined

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
