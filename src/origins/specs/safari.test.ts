import { describe, expect, test } from 'vitest'
import type { Format } from '../../formats/registry.ts'
import type { ProfileEntry } from '../../options.ts'
import { absoluteEntry, determineOrigin, relativeEntry } from '../testing.ts'
import { safariOriginSpec } from './safari.ts'

describe(`detection`, () => {
  test.each<Format>([`jsc-heap-snapshot`, `webkit-timeline-recording`])(
    `resolves %s to safari when no entries match any origin`,
    format => {
      expect(determineOrigin({ format, entries: [] })).toBe(`safari`)
    },
  )
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = safariOriginSpec

  test(`injected WebKit internals are stdlib`, () => {
    expect(categorizeEntry(relativeEntry(`f`, `__InjectedScript_1.js`))).toBe(
      `stdlib`,
    )
  })

  test(`bundled accessory scripts are stdlib`, () => {
    // Safari's own scripts (autofill metadata etc.) run in the page as a bare
    // filename; page code always carries a full URL.
    expect(categorizeEntry(relativeEntry(`f`, `FormMetadata.js`))).toBe(
      `stdlib`,
    )
  })

  test.each<[string, ProfileEntry]>([
    [`a relative path`, relativeEntry(`f`, `assets/app.js`)],
    [`a full URL`, absoluteEntry(`f`, `https://example.com/app.js`)],
  ])(`page code with %s is ours`, (_description, entry) => {
    expect(categorizeEntry(entry)).toBe(`ours`)
  })

  test(`node_modules/ is third-party (dev servers serve it over HTTP)`, () => {
    expect(
      categorizeEntry(
        absoluteEntry(`f`, `file:///app/node_modules/x/index.js`),
      ),
    ).toBe(`third-party`)
  })
})
