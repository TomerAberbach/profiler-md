import type { Format } from '../formats/registry.ts'
import type { ProfileEntry } from '../options.ts'
import type { Origin } from './index.ts'
import { OriginDetector } from './index.ts'

/** Detects the origin of the given entries through an {@link OriginDetector}. */
export const determineOrigin = ({
  format,
  entries,
}: {
  format: Format
  entries: readonly ProfileEntry[]
}): Origin => {
  const detector = new OriginDetector({ format, origin: null })
  detector.addAll(entries)
  return detector.resolve()
}

export const relativeEntry = (name: string, path?: string): ProfileEntry => ({
  id: 1,
  name,
  ...(path ? { location: { type: `relative`, path } } : {}),
})

export const absoluteEntry = (name: string, url: string): ProfileEntry => ({
  id: 1,
  name,
  location: { type: `absolute`, url: new URL(url) },
})
