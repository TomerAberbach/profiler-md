import { describe, expect, test } from 'vitest'
import { normalizeProfileToMdOptions } from '../../options.ts'
import {
  byHostTables,
  byStatusTables,
  byTypeTables,
  largestRequestsTables,
  pagesTables,
  slowestRequestsTables,
  summaryLines,
} from '../../testing/markdown.ts'
import { convertToMd } from '../testing/convert.ts'
import { harConverter } from './index.ts'
import { makeHarEntry, makeHarFile } from './testing.ts'

describe(`matches`, () => {
  test(`accepts a valid HAR file`, () => {
    expect(harConverter.matches(makeHarFile())).toBe(true)
  })

  test(`rejects null`, () => {
    expect(harConverter.matches(null)).toBe(false)
  })

  test(`rejects non-objects`, () => {
    expect(harConverter.matches(42)).toBe(false)
  })

  test(`rejects a missing log`, () => {
    expect(harConverter.matches({})).toBe(false)
  })

  test(`rejects a log without a version`, () => {
    expect(harConverter.matches({ log: { entries: [] } })).toBe(false)
  })

  test(`rejects a log without an entries array`, () => {
    expect(harConverter.matches({ log: { version: `1.2` } })).toBe(false)
  })
})

const threeEntryArchive = makeHarFile({
  entries: [
    makeHarEntry({
      time: 100,
      request: {
        method: `GET`,
        url: `https://www.example.com/`,
        headersSize: 100,
        bodySize: 0,
      },
      response: {
        status: 200,
        content: { size: 4000, mimeType: `text/html; charset=utf-8` },
        headersSize: 200,
        bodySize: 800,
      },
      timings: {
        blocked: 10,
        dns: 5,
        connect: 15,
        send: 1,
        wait: 60,
        receive: 9,
      },
    }),
    makeHarEntry({
      time: 50,
      request: {
        method: `GET`,
        url: `https://cdn.example.com/app.js`,
        headersSize: 80,
        bodySize: 0,
      },
      response: {
        status: 200,
        content: { size: 5000, mimeType: `application/javascript` },
        headersSize: 120,
        bodySize: 1800,
      },
      timings: {
        blocked: -1,
        dns: -1,
        connect: -1,
        send: 1,
        wait: 30,
        receive: 19,
      },
    }),
    makeHarEntry({
      time: 200,
      request: {
        method: `GET`,
        url: `https://api.example.com/v1/data?access_token=SECRET&user=alice`,
        headersSize: 150,
        bodySize: 0,
      },
      response: {
        status: 500,
        content: { size: 50, mimeType: `application/json` },
        headersSize: 100,
        bodySize: 50,
      },
      timings: {
        blocked: 1,
        dns: 1,
        connect: 1,
        send: 1,
        wait: 195,
        receive: 1,
      },
    }),
  ],
})

describe(`convert`, () => {
  const md = convertToMd(
    harConverter,
    threeEntryArchive,
    normalizeProfileToMdOptions(),
  )

  test(`summary line`, () => {
    const nbsp = String.fromCodePoint(160)
    expect(summaryLines(md)).toEqual([
      `3 requests over 350.0ms, 3.4${nbsp}kB transferred (116.7ms per request).`,
    ])
  })

  test(`by status`, () => {
    expect(byStatusTables(md)).toEqual([
      [
        {
          Status: `2xx`,
          '%': `66.7%`,
          Requests: `2`,
          Time: `150.0ms`,
          Size: `3.1 kB`,
        },
        {
          Status: `5xx`,
          '%': `33.3%`,
          Requests: `1`,
          Time: `200.0ms`,
          Size: `300 B`,
        },
      ],
    ])
  })

  test(`by host`, () => {
    expect(byHostTables(md)).toEqual([
      [
        {
          Host: `www.example.com`,
          '%': `33.3%`,
          Requests: `1`,
          Time: `100.0ms`,
          Size: `1.1 kB`,
        },
        {
          Host: `cdn.example.com`,
          '%': `33.3%`,
          Requests: `1`,
          Time: `50.0ms`,
          Size: `2 kB`,
        },
        {
          Host: `api.example.com`,
          '%': `33.3%`,
          Requests: `1`,
          Time: `200.0ms`,
          Size: `300 B`,
        },
      ],
    ])
  })

  test(`by type`, () => {
    expect(byTypeTables(md)).toEqual([
      [
        {
          MIME: `text/html`,
          '%': `33.3%`,
          Requests: `1`,
          Size: `1.1 kB`,
        },
        {
          MIME: `application/javascript`,
          '%': `33.3%`,
          Requests: `1`,
          Size: `2 kB`,
        },
        {
          MIME: `application/json`,
          '%': `33.3%`,
          Requests: `1`,
          Size: `300 B`,
        },
      ],
    ])
  })

  test(`slowest requests, with N/A timing phases blank`, () => {
    expect(slowestRequestsTables(md)).toEqual([
      [
        {
          Method: `GET`,
          URL: `https://api.example.com/v1/data?access_token=[REDACTED]&user=alice`,
          Status: `500`,
          Time: `200.0ms`,
          Blocked: `1.0ms`,
          DNS: `1.0ms`,
          Connect: `1.0ms`,
          Send: `1.0ms`,
          Wait: `195.0ms`,
          Receive: `1.0ms`,
        },
        {
          Method: `GET`,
          URL: `https://www.example.com/`,
          Status: `200`,
          Time: `100.0ms`,
          Blocked: `10.0ms`,
          DNS: `5.0ms`,
          Connect: `15.0ms`,
          Send: `1.0ms`,
          Wait: `60.0ms`,
          Receive: `9.0ms`,
        },
        {
          Method: `GET`,
          URL: `https://cdn.example.com/app.js`,
          Status: `200`,
          Time: `50.0ms`,
          Blocked: ``,
          DNS: ``,
          Connect: ``,
          Send: `1.0ms`,
          Wait: `30.0ms`,
          Receive: `19.0ms`,
        },
      ],
    ])
  })

  test(`largest requests`, () => {
    expect(largestRequestsTables(md)).toEqual([
      [
        {
          Method: `GET`,
          URL: `https://cdn.example.com/app.js`,
          Status: `200`,
          Size: `2 kB`,
          MIME: `application/javascript`,
        },
        {
          Method: `GET`,
          URL: `https://www.example.com/`,
          Status: `200`,
          Size: `1.1 kB`,
          MIME: `text/html`,
        },
        {
          Method: `GET`,
          URL: `https://api.example.com/v1/data?access_token=[REDACTED]&user=alice`,
          Status: `500`,
          Size: `300 B`,
          MIME: `application/json`,
        },
      ],
    ])
  })

  test(`no pages section without pages`, () => {
    expect(pagesTables(md)).toEqual([])
  })
})

describe(`redaction`, () => {
  const archive = makeHarFile({
    entries: [
      makeHarEntry({
        time: 1,
        request: {
          method: `GET`,
          url: `https://api.example.com/?access_token=SECRET&user=alice`,
        },
        response: {
          status: 200,
          content: { size: 0, mimeType: `application/json` },
        },
      }),
    ],
  })

  const urlOf = (md: string): string => slowestRequestsTables(md)[0]![0]!.URL!

  test(`redacts sensitive query params by default`, () => {
    const md = convertToMd(harConverter, archive, normalizeProfileToMdOptions())

    expect(urlOf(md)).toBe(
      `https://api.example.com/?access_token=[REDACTED]&user=alice`,
    )
  })

  test(`keeps values when redaction is disabled`, () => {
    const md = convertToMd(
      harConverter,
      archive,
      normalizeProfileToMdOptions({ redact: false }),
    )

    expect(urlOf(md)).toBe(
      `https://api.example.com/?access_token=SECRET&user=alice`,
    )
  })

  test(`substitutes a custom value from a callback`, () => {
    const md = convertToMd(
      harConverter,
      archive,
      normalizeProfileToMdOptions({
        redact: field => (field.name === `access_token` ? `XXX` : false),
      }),
    )

    expect(urlOf(md)).toBe(
      `https://api.example.com/?access_token=XXX&user=alice`,
    )
  })
})

describe(`pages`, () => {
  test(`renders a pages table with resolved request counts`, () => {
    const archive = makeHarFile({
      pages: [
        {
          id: `page_1`,
          title: `Example`,
          pageTimings: { onContentLoad: 120, onLoad: 350 },
        },
        { id: `page_2`, title: `Other`, pageTimings: { onContentLoad: -1 } },
      ],
      entries: [
        makeHarEntry({ time: 10, pageref: `page_1` }),
        makeHarEntry({ time: 20, pageref: `page_1` }),
        makeHarEntry({ time: 30, pageref: `page_2` }),
      ],
    })

    const md = convertToMd(harConverter, archive, normalizeProfileToMdOptions())

    expect(pagesTables(md)).toEqual([
      [
        {
          Page: `Example`,
          Requests: `2`,
          DOMContentLoaded: `120.0ms`,
          Load: `350.0ms`,
        },
        {
          Page: `Other`,
          Requests: `1`,
          DOMContentLoaded: ``,
          Load: ``,
        },
      ],
    ])
  })
})
