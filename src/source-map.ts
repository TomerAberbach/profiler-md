import { SourceMapConsumer } from 'source-map-js'
import type { MappedPosition, RawSourceMap as SourceMap } from 'source-map-js'
import { makeFileReference } from './location.ts'
import type { FileReference, ProfileLocation } from './location.ts'
import type { NormalizedProfileToMdOptions } from './options.ts'

export type NormalizedSourceMap = {
  consumer: SourceMapConsumer
  location: FileReference
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

  return Object.entries(sourceMaps).map(([urlOrPath, sourceMap]) => ({
    consumer: new SourceMapConsumer(sourceMap),
    location: makeFileReference(urlOrPath),
  }))
}

export const sourceMapProfileLocation = (
  location: ProfileLocation,
  { baseURL, sourceMaps }: NormalizedProfileToMdOptions,
): ProfileLocation => {
  const sourceMap =
    sourceMaps.find(
      sourceMap =>
        sourceMap.location.type === `absolute` &&
        sourceMap.location.url.href === location.url.href,
    ) ??
    sourceMaps.find(
      sourceMap =>
        sourceMap.location.type === `relative` &&
        location.url.pathname.endsWith(`/${sourceMap.location.path}`),
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

  const mappedLocation = makeFileReference(mappedPosition.source)
  if (mappedLocation.type === `absolute`) {
    return {
      url: mappedLocation.url,
      line: mappedPosition.line,
      // Source map columns are 0-based, but ours are 1-based.
      column: mappedPosition.column + 1,
    }
  }

  if (!baseURL) {
    return location
  }

  return {
    url: new URL(mappedLocation.path, baseURL),
    line: mappedPosition.line,
    // Source map columns are 0-based, but ours are 1-based.
    column: mappedPosition.column + 1,
  }
}

export type { RawSourceMap as SourceMap } from 'source-map-js'
