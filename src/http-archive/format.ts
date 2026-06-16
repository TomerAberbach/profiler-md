import {
  bytesCell,
  countCell,
  formatTable,
  numberCell,
  percentCell,
  textCell,
} from '../cell.ts'
import type { Cell } from '../cell.ts'
import {
  formatBytes,
  formatCount,
  formatMilliseconds,
} from '../helpers/format.ts'
import { selectTopN } from '../helpers/heap.ts'
import { formatHeading, inlineCode } from '../helpers/markdown.ts'
import type { Header } from '../helpers/markdown.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import type {
  AggregatedHttpArchive,
  AggregatedHttpTimings,
  HttpArchiveGroupStats,
  HttpArchiveMimeStats,
} from './aggregate.ts'

export const formatHttpArchive = (
  archive: AggregatedHttpArchive,
  options: NormalizedProfileToMdOptions,
): string =>
  `${[
    formatHeading(1, `HTTP archive`),
    formatSummaryLine(archive),
    ...formatByStatus(archive),
    ...formatByHost(archive, options),
    ...formatByType(archive, options),
    ...formatSlowestRequests(archive, options),
    ...formatLargestRequests(archive, options),
    ...formatPages(archive),
  ].join(`\n\n`)}\n`

const formatSummaryLine = ({
  totalEntryCount,
  totalTime,
  totalTransferSize,
}: AggregatedHttpArchive): string => {
  const summary = `${formatCount(
    totalEntryCount,
    `request`,
  )} over ${formatMilliseconds(totalTime)}, ${formatBytes(
    totalTransferSize,
  )} transferred`
  return totalEntryCount === 0
    ? `${summary}.`
    : `${summary} (${formatMilliseconds(
        totalTime / totalEntryCount,
      )} per request).`
}

const formatByStatus = ({
  statusStats,
  totalEntryCount,
}: AggregatedHttpArchive): string[] => {
  if (statusStats.size === 0) {
    return []
  }

  const statuses = [...statusStats].sort(
    ([, left], [, right]) => right.requestCount - left.requestCount,
  )
  return [
    formatHeading(2, `By status`),
    formatTable(
      groupTableHeaders(`Status`),
      statuses.map(([status, stats]) =>
        groupRow(status, stats, totalEntryCount),
      ),
    ),
  ]
}

const formatByHost = (
  { hostStats, totalEntryCount }: AggregatedHttpArchive,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const hosts = selectTopN(
    [...hostStats],
    options.topN,
    ([, stats]) => stats.requestCount,
  )
  if (hosts.length === 0) {
    return []
  }

  return [
    formatHeading(2, `By host`),
    formatTable(
      groupTableHeaders(`Host`),
      hosts.map(([host, stats]) => groupRow(host, stats, totalEntryCount)),
    ),
  ]
}

const formatByType = (
  { mimeStats, totalEntryCount }: AggregatedHttpArchive,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const mimeTypes = selectTopN(
    [...mimeStats],
    options.topN,
    ([, stats]) => stats.requestCount,
  )
  if (mimeTypes.length === 0) {
    return []
  }

  return [
    formatHeading(2, `By type`),
    formatTable(
      [
        `MIME`,
        { content: `%`, align: `right` },
        { content: `Requests`, align: `right` },
        { content: `Size`, align: `right` },
      ],
      mimeTypes.map(([mimeType, stats]) =>
        mimeRow(mimeType, stats, totalEntryCount),
      ),
    ),
  ]
}

const formatSlowestRequests = (
  { requests }: AggregatedHttpArchive,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const slowest = selectTopN(requests, options.topN, request => request.time)
  if (slowest.length === 0) {
    return []
  }

  return [
    formatHeading(2, `Slowest requests`),
    `Requests ranked by total elapsed time.`,
    formatTable(
      [
        `Method`,
        `URL`,
        { content: `Status`, align: `right` },
        { content: `Time`, align: `right` },
        { content: `Blocked`, align: `right` },
        { content: `DNS`, align: `right` },
        { content: `Connect`, align: `right` },
        { content: `Send`, align: `right` },
        { content: `Wait`, align: `right` },
        { content: `Receive`, align: `right` },
      ],
      slowest.map(request => [
        textCell(request.method),
        textCell(inlineCode(request.url)),
        textCell(String(request.status)),
        numberCell(request.time, formatMilliseconds),
        ...timingCells(request.timings),
      ]),
    ),
  ]
}

const formatLargestRequests = (
  { requests }: AggregatedHttpArchive,
  options: NormalizedProfileToMdOptions,
): string[] => {
  const largest = selectTopN(
    requests,
    options.topN,
    request => request.transferSize,
  )
  if (largest.length === 0) {
    return []
  }

  return [
    formatHeading(2, `Largest requests`),
    `Requests ranked by bytes transferred over the wire.`,
    formatTable(
      [
        `Method`,
        `URL`,
        { content: `Status`, align: `right` },
        { content: `Size`, align: `right` },
        `MIME`,
      ],
      largest.map(request => [
        textCell(request.method),
        textCell(inlineCode(request.url)),
        textCell(String(request.status)),
        bytesCell(request.transferSize),
        textCell(request.mimeType),
      ]),
    ),
  ]
}

const formatPages = ({ pages }: AggregatedHttpArchive): string[] => {
  if (pages.length === 0) {
    return []
  }

  return [
    formatHeading(2, `Pages`),
    formatTable(
      [
        `Page`,
        { content: `Requests`, align: `right` },
        { content: `DOMContentLoaded`, align: `right` },
        { content: `Load`, align: `right` },
      ],
      pages.map(page => [
        textCell(page.title),
        countCell(page.requestCount),
        millisecondsCell(page.onContentLoad),
        millisecondsCell(page.onLoad),
      ]),
    ),
  ]
}

/** Shared headers for the status and host breakdown tables. */
const groupTableHeaders = (label: string): Header[] => [
  label,
  { content: `%`, align: `right` },
  { content: `Requests`, align: `right` },
  { content: `Time`, align: `right` },
  { content: `Size`, align: `right` },
]

/** A row of the status or host breakdown table. */
const groupRow = (
  label: string,
  stats: HttpArchiveGroupStats,
  totalEntryCount: number,
): Cell[] => [
  textCell(label),
  percentCell(totalEntryCount ? stats.requestCount / totalEntryCount : 0),
  countCell(stats.requestCount),
  numberCell(stats.time, formatMilliseconds),
  bytesCell(stats.transferSize),
]

/** A row of the MIME type breakdown table. */
const mimeRow = (
  mimeType: string,
  stats: HttpArchiveMimeStats,
  totalEntryCount: number,
): Cell[] => [
  textCell(mimeType),
  percentCell(totalEntryCount ? stats.requestCount / totalEntryCount : 0),
  countCell(stats.requestCount),
  bytesCell(stats.transferSize),
]

/** The six timing phase cells, blank for unavailable phases. */
const timingCells = (timings: AggregatedHttpTimings): Cell[] => [
  millisecondsCell(timings.blocked),
  millisecondsCell(timings.dns),
  millisecondsCell(timings.connect),
  millisecondsCell(timings.send),
  millisecondsCell(timings.wait),
  millisecondsCell(timings.receive),
]

/** A milliseconds cell, blank when the value is unavailable. */
const millisecondsCell = (milliseconds: number | undefined): Cell =>
  milliseconds === undefined
    ? textCell(``)
    : numberCell(milliseconds, formatMilliseconds)
