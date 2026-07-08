import { describe, expect, test } from 'vitest'
import { absoluteEntry, determineOrigin, relativeEntry } from '../testing.ts'
import { valgrindOriginSpec } from './valgrind.ts'

describe(`detection`, () => {
  test(`markerless: callgrind frames resolve to the format's fallback origin`, () => {
    // Native frames any profiler could emit are no evidence of valgrind, but
    // valgrind defines the callgrind format, so it is the format's fallback.
    expect(
      determineOrigin({
        format: `callgrind`,
        entries: [
          relativeEntry(`main`, `/src/main.c`),
          absoluteEntry(`memcpy`, `file:///usr/lib/libc.so.6`),
          relativeEntry(`(below main)`),
        ],
      }),
    ).toBe(`valgrind`)
  })

  test(`the callgrind parser's creator origin hint resolves to valgrind`, () => {
    expect(
      determineOrigin({
        format: `callgrind`,
        entries: [relativeEntry(`main`, `/src/main.c`)],
        hint: `valgrind`,
      }),
    ).toBe(`valgrind`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = valgrindOriginSpec

  test(`a system-library object is stdlib`, () => {
    expect(
      categorizeEntry(absoluteEntry(`memcpy`, `file:///usr/lib/libc.so.6`)),
    ).toBe(`stdlib`)
  })

  test(`a located application frame is ours`, () => {
    expect(categorizeEntry(relativeEntry(`main`, `/src/main.c`))).toBe(`ours`)
  })

  test(`a parenthesized synthetic frame becomes its own category`, () => {
    expect(categorizeEntry(relativeEntry(`(below main)`))).toBe(`below main`)
  })
})

describe(`hasRuntimeInsertedArcs`, () => {
  const { hasRuntimeInsertedArcs } = valgrindOriginSpec

  test(`marks the dynamic linker's lazy-binding trampoline's arcs`, () => {
    expect(
      hasRuntimeInsertedArcs(
        absoluteEntry(
          `_dl_runtime_resolve_xsavec`,
          `file:///usr/lib/ld-linux-x86-64.so.2`,
        ),
      ),
    ).toBe(true)
  })

  test(`keeps an ordinary function's arcs`, () => {
    expect(hasRuntimeInsertedArcs(relativeEntry(`main`, `/src/main.c`))).toBe(
      false,
    )
  })

  test(`keeps a nameless frame's arcs`, () => {
    expect(hasRuntimeInsertedArcs({ id: 1 })).toBe(false)
  })
})
