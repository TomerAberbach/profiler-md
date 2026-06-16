import type {
  HarEntry,
  HarFile,
  HarLog,
  HarRequest,
  HarResponse,
} from './parse.ts'

export const makeHarFile = (log: Partial<HarLog> = {}): HarFile => ({
  log: { version: `1.2`, entries: [], ...log },
})

export const makeHarEntry = (entry: Partial<HarEntry> = {}): HarEntry => ({
  time: 0,
  request: makeHarRequest(),
  response: makeHarResponse(),
  timings: {},
  ...entry,
})

export const makeHarRequest = (
  request: Partial<HarRequest> = {},
): HarRequest => ({
  method: `GET`,
  url: `https://example.com/`,
  ...request,
})

export const makeHarResponse = (
  response: Partial<HarResponse> = {},
): HarResponse => ({
  status: 200,
  content: { size: 0 },
  ...response,
})
