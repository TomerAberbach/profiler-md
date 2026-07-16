import { describe, expect, test } from 'vitest'
import { bunOriginSpec } from './bun.ts'
import { absoluteEntry, determineOrigin, relativeEntry } from './testing.ts'

describe(`detection`, () => {
  test(`detects Bun by its JavaScriptCore module-loader builtins`, () => {
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [relativeEntry(`linkAndEvaluateModule`)],
      }),
    ).toBe(`bun`)
  })

  test(`a user function sharing a JSC builtin name doesn't trigger Bun`, () => {
    // The native builtins have no location; a user function named `loadModule`
    // carries one, so a Node profile isn't misdetected as Bun.
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [
          absoluteEntry(`loadModule`, `file:///app/src/loader.ts`),
          absoluteEntry(`x`, `node:fs`),
        ],
      }),
    ).toBe(`node`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = bunOriginSpec

  test.each([`node:fs`, `bun:sqlite`, `bun:ffi`])(
    `the %s builtin is stdlib`,
    url => {
      expect(categorizeEntry(absoluteEntry(`f`, url))).toBe(`stdlib`)
    },
  )

  test.each([`internal:primordials`, `internal:fs/streams`])(
    `the %s bundled runtime module is stdlib`,
    url => {
      expect(categorizeEntry(absoluteEntry(`f`, url))).toBe(`stdlib`)
    },
  )

  test(`node_modules/ is third-party`, () => {
    expect(
      categorizeEntry(
        absoluteEntry(`f`, `file:///app/node_modules/x/index.js`),
      ),
    ).toBe(`third-party`)
  })
})
