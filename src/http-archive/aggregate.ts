/** Request timing phases in milliseconds. Unavailable phases are `undefined`. */
export type AggregatedHttpTimings = {
  blocked?: number
  dns?: number
  connect?: number
  send?: number
  wait?: number
  receive?: number
}

/** A single aggregated HTTP request/response pair. */
export type AggregatedHttpRequest = {
  /** Sequential ID that can also be used as an index. */
  id: number

  method: string

  /** The request URL, with sensitive query parameters already redacted. */
  url: string

  status: number
  statusText?: string

  /** Total elapsed time of the request in milliseconds. */
  time: number

  /** Bytes transferred over the wire for the request and response. */
  transferSize: number

  /** The response content MIME type, normalized and without parameters. */
  mimeType: string

  timings: AggregatedHttpTimings
}

/** Aggregated stats for a group of requests sharing a status bucket or host. */
export type HttpArchiveGroupStats = {
  requestCount: number
  time: number
  transferSize: number
}

/** Aggregated stats for a group of requests sharing a MIME type. */
export type HttpArchiveMimeStats = {
  requestCount: number
  transferSize: number
}

export type AggregatedHttpPage = {
  /** Sequential ID that can also be used as an index. */
  id: number

  title: string
  requestCount: number

  /** Milliseconds until `DOMContentLoaded`, or `undefined` if not available. */
  onContentLoad?: number

  /** Milliseconds until the load event, or `undefined` if not available. */
  onLoad?: number
}

/** The aggregated form of an HTTP archive. */
export type AggregatedHttpArchive = {
  type: `http-archive`

  /** Total number of requests in the archive. */
  totalEntryCount: number

  /** Sum of all request times in milliseconds. */
  totalTime: number

  /** Sum of all bytes transferred over the wire. */
  totalTransferSize: number

  /** Stats by status bucket (e.g. `2xx`, `4xx`). */
  statusStats: Map<string, HttpArchiveGroupStats>

  /** Stats by request host. */
  hostStats: Map<string, HttpArchiveGroupStats>

  /** Stats by response MIME type. */
  mimeStats: Map<string, HttpArchiveMimeStats>

  /** Every request, unsorted. Formatting heaps the top-N by time and size. */
  requests: AggregatedHttpRequest[]

  pages: AggregatedHttpPage[]
}

/** Label used when a host or MIME type can't be determined. */
export const UNKNOWN = `(unknown)`

/** Clamps a metric to a non-negative number, treating `-1`/missing as `0`. */
export const clampMetric = (value: number | undefined): number =>
  value !== undefined && value > 0 ? value : 0

/** Buckets an HTTP status code into a `Nxx` group, or `(failed)` for `< 100`. */
export const statusBucket = (status: number): string =>
  status >= 100 ? `${Math.floor(status / 100)}xx` : `(failed)`

/** Normalizes a MIME type by dropping parameters (e.g. `; charset=utf-8`). */
export const normalizeMimeType = (mimeType: string | undefined): string => {
  if (!mimeType) {
    return UNKNOWN
  }
  const type = mimeType.split(`;`, 1)[0]!.trim().toLowerCase()
  return type || UNKNOWN
}

/** The host of a URL, or `(unknown)` if it can't be parsed. */
const hostOf = (url: string): string => {
  try {
    return new URL(url).host || UNKNOWN
  } catch {
    return UNKNOWN
  }
}

/** Accumulates HTTP requests and pages into an {@link AggregatedHttpArchive}. */
export class HttpArchiveAggregator {
  readonly #requests: AggregatedHttpRequest[] = []
  readonly #statusStats = new Map<string, HttpArchiveGroupStats>()
  readonly #hostStats = new Map<string, HttpArchiveGroupStats>()
  readonly #mimeStats = new Map<string, HttpArchiveMimeStats>()
  readonly #pages: AggregatedHttpPage[] = []
  readonly #pageRefToRequestCount = new Map<string, number>()
  #totalTime = 0
  #totalTransferSize = 0

  public addRequest(request: AggregatedHttpRequest, pageRef?: string): void {
    this.#requests.push(request)
    this.#totalTime += request.time
    this.#totalTransferSize += request.transferSize

    addGroupStats(this.#statusStats, statusBucket(request.status), request)
    addGroupStats(this.#hostStats, hostOf(request.url), request)

    let mimeStats = this.#mimeStats.get(request.mimeType)
    if (!mimeStats) {
      mimeStats = { requestCount: 0, transferSize: 0 }
      this.#mimeStats.set(request.mimeType, mimeStats)
    }
    mimeStats.requestCount++
    mimeStats.transferSize += request.transferSize

    if (pageRef !== undefined) {
      this.#pageRefToRequestCount.set(
        pageRef,
        (this.#pageRefToRequestCount.get(pageRef) ?? 0) + 1,
      )
    }
  }

  /** Adds a page. Call after all requests so its request count is resolved. */
  public addPage(page: {
    pageRef: string
    title: string
    onContentLoad?: number
    onLoad?: number
  }): void {
    this.#pages.push({
      id: this.#pages.length,
      title: page.title,
      requestCount: this.#pageRefToRequestCount.get(page.pageRef) ?? 0,
      onContentLoad: page.onContentLoad,
      onLoad: page.onLoad,
    })
  }

  public aggregate(): AggregatedHttpArchive {
    return {
      type: `http-archive`,
      totalEntryCount: this.#requests.length,
      totalTime: this.#totalTime,
      totalTransferSize: this.#totalTransferSize,
      statusStats: this.#statusStats,
      hostStats: this.#hostStats,
      mimeStats: this.#mimeStats,
      requests: this.#requests,
      pages: this.#pages,
    }
  }
}

const addGroupStats = (
  stats: Map<string, HttpArchiveGroupStats>,
  key: string,
  request: AggregatedHttpRequest,
): void => {
  let group = stats.get(key)
  if (!group) {
    group = { requestCount: 0, time: 0, transferSize: 0 }
    stats.set(key, group)
  }
  group.requestCount++
  group.time += request.time
  group.transferSize += request.transferSize
}
