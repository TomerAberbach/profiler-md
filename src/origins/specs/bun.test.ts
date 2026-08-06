import { describe, expect, test } from 'vitest'
import { absoluteEntry, determineOrigin, relativeEntry } from '../testing.ts'
import { bunOriginSpec } from './bun.ts'

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

  test.each([`jsc-heap-snapshot`, `v8-heap-snapshot`] as const)(
    `detects Bun in a %s by its runtime classes`,
    format => {
      expect(
        determineOrigin({
          format,
          entries: [
            relativeEntry(`Object`),
            relativeEntry(`InternalModuleRegistry`),
          ],
        }),
      ).toBe(`bun`)
    },
  )

  test(`a plausible user class name doesn't trigger Bun`, () => {
    // Snapshot nodes are mostly location-less, including instances of
    // user-defined classes, so a name a user might define is not a marker even
    // without a location.
    expect(
      determineOrigin({
        format: `v8-heap-snapshot`,
        entries: [
          relativeEntry(`FileSink`),
          relativeEntry(`NextTickQueue`),
          absoluteEntry(`Socket`, `file:///app/node_modules/ws/lib/socket.js`),
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
