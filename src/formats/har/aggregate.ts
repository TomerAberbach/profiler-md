import type {
  AggregatedHttpArchive,
  AggregatedHttpTimings,
} from '../../http-archive/index.ts'
import {
  clampMetric,
  HttpArchiveAggregator,
  normalizeMimeType,
  redactUrl,
} from '../../http-archive/index.ts'
import type { NormalizedProfileToMdOptions } from '../../options.ts'
import type { HarEntry, HarFile } from './parse.ts'

export const aggregateHar = (
  { log }: HarFile,
  options: NormalizedProfileToMdOptions,
): AggregatedHttpArchive[] => {
  const aggregator = new HttpArchiveAggregator()

  let id = 0
  for (const entry of log.entries) {
    addEntry(aggregator, entry, id++, options)
  }

  for (const page of log.pages ?? []) {
    aggregator.addPage({
      pageRef: page.id,
      title: page.title ?? page.id,
      onContentLoad: normalizeTime(page.pageTimings?.onContentLoad),
      onLoad: normalizeTime(page.pageTimings?.onLoad),
    })
  }

  return [aggregator.aggregate()]
}

const addEntry = (
  aggregator: HttpArchiveAggregator,
  entry: HarEntry,
  id: number,
  options: NormalizedProfileToMdOptions,
): void => {
  aggregator.addRequest(
    {
      id,
      method: entry.request.method,
      url: redactUrl(entry.request.url, options.redact),
      status: entry.response.status,
      statusText: entry.response.statusText,
      time: clampMetric(entry.time),
      transferSize: transferSizeOf(entry),
      mimeType: normalizeMimeType(entry.response.content?.mimeType),
      timings: normalizeTimings(entry),
    },
    entry.pageref,
  )
}

/** Total bytes transferred over the wire for the request and response. */
const transferSizeOf = ({ request, response }: HarEntry): number => {
  // `bodySize` is the on-the-wire (possibly compressed) size; fall back to the
  // uncompressed `content.size` when it isn't available.
  const responseBody =
    response.bodySize !== undefined && response.bodySize >= 0
      ? response.bodySize
      : clampMetric(response.content?.size)
  return (
    clampMetric(request.headersSize) +
    clampMetric(request.bodySize) +
    clampMetric(response.headersSize) +
    responseBody
  )
}

const normalizeTimings = ({ timings }: HarEntry): AggregatedHttpTimings => ({
  blocked: normalizeTime(timings?.blocked),
  dns: normalizeTime(timings?.dns),
  connect: normalizeTime(timings?.connect),
  send: normalizeTime(timings?.send),
  wait: normalizeTime(timings?.wait),
  receive: normalizeTime(timings?.receive),
})

/** Normalizes a HAR time, treating `-1`/missing/negative as unavailable. */
const normalizeTime = (time: number | undefined): number | undefined =>
  time !== undefined && time >= 0 ? time : undefined
