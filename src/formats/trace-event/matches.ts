export const matchesTraceEvent = (json: unknown): boolean =>
  Array.isArray(json)
    ? // An empty array is valid, but so is every other format's empty array.
      isEvent(json[0])
    : typeof json === `object` &&
      json !== null &&
      Array.isArray((json as Record<string, unknown>).traceEvents)

const isEvent = (value: unknown): boolean =>
  typeof value === `object` &&
  value !== null &&
  typeof (value as Record<string, unknown>).ph === `string`
