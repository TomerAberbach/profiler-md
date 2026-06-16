/**
 * Hand-rolled HAR 1.2 types.
 *
 * Following the project's parsing principle, the raw JSON is cast to these types
 * rather than validated. Field names mirror the HAR 1.2 spec (and
 * `@types/har-format`). Unknown and underscore-prefixed custom fields are
 * ignored.
 */

/** The root object of a `.har` file. */
export type HarFile = {
  log: HarLog
}

export type HarLog = {
  version?: string
  creator?: HarCreator
  browser?: HarCreator
  pages?: HarPage[]
  entries: HarEntry[]
}

export type HarCreator = {
  name: string
  version: string
}

export type HarPage = {
  id: string
  title?: string
  startedDateTime?: string
  pageTimings?: HarPageTimings
}

export type HarPageTimings = {
  /** Milliseconds until `DOMContentLoaded`, or `-1`/missing if not available. */
  onContentLoad?: number

  /** Milliseconds until the load event, or `-1`/missing if not available. */
  onLoad?: number
}

export type HarEntry = {
  pageref?: string
  startedDateTime?: string

  /** Total elapsed time of the request in milliseconds. */
  time: number

  request: HarRequest
  response: HarResponse

  /** Optional in practice: some exporters omit timing breakdowns. */
  timings?: HarTimings
  serverIPAddress?: string
  connection?: string
}

export type HarRequest = {
  method: string
  url: string
  httpVersion?: string
  cookies?: HarCookie[]
  headers?: HarHeader[]
  queryString?: HarQueryParam[]
  postData?: HarPostData

  /** Bytes of the request headers, or `-1` if not available. */
  headersSize?: number

  /** Bytes of the request body, or `-1` if not available. */
  bodySize?: number
}

export type HarResponse = {
  status: number
  statusText?: string
  httpVersion?: string
  cookies?: HarCookie[]
  headers?: HarHeader[]

  /** Optional in practice: some exporters omit it for empty responses. */
  content?: HarContent
  redirectURL?: string

  /** Bytes of the response headers, or `-1` if not available. */
  headersSize?: number

  /** Bytes of the received response body, or `-1` if not available. */
  bodySize?: number
}

export type HarHeader = {
  name: string
  value: string
}

export type HarQueryParam = {
  name: string
  value: string
}

export type HarCookie = {
  name: string
  value: string
}

export type HarPostData = {
  mimeType?: string

  /** Posted parameters. Mutually exclusive with {@link HarPostData.text}. */
  params?: HarPostParam[]

  /** Posted plain text body. Mutually exclusive with {@link HarPostData.params}. */
  text?: string
}

export type HarPostParam = {
  name: string
  value?: string
  fileName?: string
  contentType?: string
}

export type HarContent = {
  /** Uncompressed bytes of the response body. */
  size: number

  /** Bytes saved by compression, if any. */
  compression?: number

  mimeType?: string

  /** The response body text, possibly {@link HarContent.encoding}-encoded. */
  text?: string

  /** The encoding of {@link HarContent.text}, e.g. `base64`. */
  encoding?: string
}

/**
 * Request timing phases in milliseconds.
 *
 * Optional phases default to `-1` when not applicable. `ssl` is included within
 * `connect`. The entry's `time` is the sum of all non-`-1` phases.
 */
export type HarTimings = {
  blocked?: number
  dns?: number
  connect?: number
  send?: number
  wait?: number
  receive?: number
  ssl?: number
}
