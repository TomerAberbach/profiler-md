import { SourceMapConsumer } from 'source-map-js'
import type { MappedPosition, RawSourceMap as SourceMap } from 'source-map-js'
import { makeFileReference } from './location.ts'
import type { FileReference, SourceLocation } from './location.ts'
import type { ResolvedProfileToMdOptions } from './options.ts'

export type NormalizedSourceMap = {
  consumer: SourceMapConsumer
  fileReference: FileReference
}

export type NormalizedSourceMaps = NormalizedSourceMap[]

export const normalizeSourceMaps = (
  sourceMaps: SourceMap[] | Record<string, SourceMap>,
): NormalizedSourceMaps => {
  if (Array.isArray(sourceMaps)) {
    sourceMaps = Object.fromEntries(
      sourceMaps.flatMap(sourceMap =>
        sourceMap.file ? [[sourceMap.file, sourceMap]] : [],
      ),
    )
  }

  return Object.entries(sourceMaps).flatMap(([urlOrPath, sourceMap]) => {
    const fileReference = makeFileReference(urlOrPath)
    if (!fileReference) {
      return []
    }
    return { consumer: new SourceMapConsumer(sourceMap), fileReference }
  })
}

/**
 * Applies the matching source map, if any, to {@link location}.
 *
 * A mapped source that is a relative path resolves against the resolved
 * `baseURL`, including one inferred by `baseURL: 'auto'`; the resolved source
 * may then fall outside the inferred directory and render with `../` segments.
 */
export const sourceMapSourceLocation = (
  location: SourceLocation,
  { baseURL, sourceMaps }: ResolvedProfileToMdOptions,
): SourceLocation => {
  if (location.type === `relative`) {
    // We never apply source maps to relative paths because we don't know where
    // those paths actually point to.
    return location
  }

  const sourceMap =
    sourceMaps.find(
      sourceMap =>
        sourceMap.fileReference.type === `absolute` &&
        sourceMap.fileReference.url.href === location.url.href,
    ) ??
    sourceMaps.find(
      sourceMap =>
        sourceMap.fileReference.type === `relative` &&
        location.url.pathname.endsWith(`/${sourceMap.fileReference.path}`),
    )
  if (!sourceMap) {
    // No source map is applicable to this location.
    return location
  }

  let mappedPosition: MappedPosition
  try {
    mappedPosition = sourceMap.consumer.originalPositionFor({
      line: location.line ?? 1,
      // Our columns are 1-based, but source map columns are 0-based,
      column: (location.column ?? 1) - 1,
    })
  } catch {
    // `source-map-js` throws when a line has mappings, but none at or before
    // the queried column (no greatest lower bound).
    return location
  }
  if (!mappedPosition.source) {
    return location
  }

  const mappedFileReference = makeFileReference(mappedPosition.source)
  if (!mappedFileReference) {
    return location
  }

  if (mappedFileReference.type === `absolute`) {
    return {
      type: `absolute`,
      url: mappedFileReference.url,
      line: mappedPosition.line,
      // Source map columns are 0-based, but ours are 1-based.
      column: mappedPosition.column + 1,
    }
  }

  if (!baseURL) {
    return location
  }

  return {
    type: `absolute`,
    url: new URL(mappedFileReference.path, baseURL),
    line: mappedPosition.line,
    // Source map columns are 0-based, but ours are 1-based.
    column: mappedPosition.column + 1,
  }
}

export type { RawSourceMap as SourceMap } from 'source-map-js'
