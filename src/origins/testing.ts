import type { Format } from '../formats/registry.ts'
import type { ProfileEntry } from '../options.ts'
import type { Origin } from './index.ts'
import { OriginDetector } from './index.ts'

export const determineOrigin = ({
  format,
  entries,
  hint,
}: {
  format: Format
  entries: readonly ProfileEntry[]
  /** A parser origin hint applied before the entries. */
  hint?: string
}): Origin => {
  const detector = new OriginDetector({ format, origin: null })
  if (hint !== undefined) {
    detector.hint(hint)
  }
  detector.addAll(entries)
  return detector.resolve()
}

export const relativeEntry = (name: string, path?: string): ProfileEntry => ({
  name,
  ...(path ? { location: { type: `relative`, path } } : {}),
})

export const logicalEntry = (
  name: string,
  logicalName?: string,
): ProfileEntry => ({
  name,
  ...(logicalName ? { location: { type: `logical`, name: logicalName } } : {}),
})

export const absoluteEntry = (name: string, url: string): ProfileEntry => ({
  name,
  location: { type: `absolute`, url: new URL(url) },
})
