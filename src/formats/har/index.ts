import type { JsonFormatConverter } from '../converter.ts'
import { aggregateHar } from './aggregate.ts'
import type { HarFile } from './parse.ts'

/** Whether the JSON looks like a HAR log (`log.version` + `log.entries`). */
const matchesHar = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const { log } = json as { log?: unknown }
  if (typeof log !== `object` || log === null) {
    return false
  }

  const { version, entries } = log as { version?: unknown; entries?: unknown }
  return version !== undefined && Array.isArray(entries)
}

export const harConverter = {
  title: `HTTP archive`,
  type: `json`,
  shape: `http-archive`,
  matches: matchesHar,
  aggregate: aggregateHar,
} satisfies JsonFormatConverter<HarFile>
