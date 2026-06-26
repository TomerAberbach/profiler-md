import type { JsonFormatConverter } from '../../converter.ts'
import { parseV8HeapProfile } from './parse.ts'
import type { V8HeapProfile } from './parse.ts'

const matchesV8HeapProfile = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const object = json as Record<string, unknown>
  if (
    typeof object.head !== `object` ||
    object.head === null ||
    !Array.isArray(object.samples)
  ) {
    return false
  }

  return true
}

export const v8HeapProfileConverter = {
  title: `V8 heap profile`,
  type: `json`,
  shape: `profile`,
  matches: matchesV8HeapProfile,
  parse: json => parseV8HeapProfile(json as V8HeapProfile),
} satisfies JsonFormatConverter
