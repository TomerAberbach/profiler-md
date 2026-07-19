import { describe, expect, test } from 'vitest'
import { absoluteEntry, determineOrigin, relativeEntry } from '../testing.ts'
import { denoOriginSpec } from './deno.ts'

describe(`detection`, () => {
  test(`prefers Deno over Node when both signals are present`, () => {
    // Deno polyfills `node:` specifiers, so a `node:` entry alone shouldn't beat
    // Deno's `ext:` signal.
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [
          absoluteEntry(`x`, `node:process`),
          absoluteEntry(`y`, `ext:core/01_core.js`),
        ],
      }),
    ).toBe(`deno`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = denoOriginSpec

  test.each([`ext:core/01_core.js`, `deno:runtime`, `node:fs`])(
    `the %s specifier is stdlib`,
    url => {
      expect(categorizeEntry(absoluteEntry(`f`, url))).toBe(`stdlib`)
    },
  )

  test.each([`npm:lodash`, `jsr:@std/path`])(
    `the %s specifier is third-party`,
    url => {
      expect(categorizeEntry(absoluteEntry(`f`, url))).toBe(`third-party`)
    },
  )

  test(`node_modules/ is third-party`, () => {
    expect(
      categorizeEntry(
        absoluteEntry(`f`, `file:///app/node_modules/x/index.js`),
      ),
    ).toBe(`third-party`)
  })

  test(`V8 regexp frames are regexp`, () => {
    expect(categorizeEntry(relativeEntry(`RegExp: /a/`))).toBe(`regexp`)
  })
})
