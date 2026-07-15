import { describe, expect, test } from 'vitest'
import type { Format } from '../formats/registry.ts'
import { nodeOriginSpec } from './node.ts'
import { absoluteEntry, determineOrigin, relativeEntry } from './testing.ts'

describe(`detection`, () => {
  test(`detects Node's native profiler by node: specifiers`, () => {
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [absoluteEntry(`x`, `node:fs`)],
      }),
    ).toBe(`node`)
  })

  test.each<Format>([`v8-heap-profile`, `v8-heap-snapshot`])(
    `resolves %s to node when no entries match any origin`,
    format => {
      expect(determineOrigin({ format, entries: [] })).toBe(`node`)
    },
  )
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = nodeOriginSpec

  test.each([`node:fs`, `node:internal/streams/readable`])(
    `the %s builtin is stdlib`,
    url => {
      expect(categorizeEntry(absoluteEntry(`f`, url))).toBe(`stdlib`)
    },
  )

  test(`bun: specifiers are not treated as Node stdlib`, () => {
    // Reachable: a Bun profile with `node:` entries but no location-less JSC
    // builtin frames resolves to node, whose categorization then sees `bun:`.
    expect(categorizeEntry(absoluteEntry(`f`, `bun:sqlite`))).toBe(`ours`)
  })

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
