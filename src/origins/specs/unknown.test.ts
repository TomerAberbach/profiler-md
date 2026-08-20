import { describe, expect, test } from 'vitest'
import type { Format } from '../../formats/registry.ts'
import type { ProfileEntry } from '../../options.ts'
import { matchEntryForOrigin } from '../index.ts'
import { absoluteEntry, determineOrigin, relativeEntry } from '../testing.ts'
import { unknownOriginSpec } from './unknown.ts'

describe(`detection`, () => {
  test.each<[Format, ProfileEntry]>([
    [`pprof`, relativeEntry(`compute`, `compute.c`)],
    [`pprof`, relativeEntry(`compute`, `compute.go`)],
    [`collapsed`, relativeEntry(`frame`)],
    [`collapsed`, relativeEntry(`frame`, `app.rb`)],
    [`speedscope`, relativeEntry(`frame`)],
  ])(`a marker-free %s input falls back to unknown`, (format, entry) => {
    expect(determineOrigin({ format, entries: [entry] })).toBe(`unknown`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = unknownOriginSpec

  test(`synthetic frames are the only recognized labels`, () => {
    // The only conventions recognizable without identifying the runtime.
    expect(categorizeEntry(relativeEntry(`(garbage collector)`))).toBe(
      `garbage-collector`,
    )
  })

  test(`location-less frames are native`, () => {
    expect(categorizeEntry(relativeEntry(`native`))).toBe(`native`)
  })

  test(`a frame with neither a name nor a location is unknown`, () => {
    expect(categorizeEntry(relativeEntry(`(anonymous)`))).toBe(`unknown`)
  })

  test(`parenthesized closure names are not synthetic frame labels`, () => {
    // Julia closure frames are fully parenthesized; their fragments must not
    // be promoted to category names.
    expect(
      categorizeEntry(
        relativeEntry(
          `(::JSON3.var"#defaultminimum##2#defaultminimum##3")(::Pair{Symbol, Any})`,
        ),
      ),
    ).toBe(`native`)
  })

  test(`an OS toolchain header is stdlib`, () => {
    expect(
      categorizeEntry(
        absoluteEntry(`f`, `file:///usr/include/c++/12/bits/basic_string.tcc`),
      ),
    ).toBe(`stdlib`)
  })

  test(`an OS system library is native`, () => {
    expect(
      categorizeEntry(
        absoluteEntry(`f`, `file:///usr/lib/x86_64-linux-gnu/libc.so.6`),
      ),
    ).toBe(`native`)
  })

  test(`a project directory merely named like a system one stays ours`, () => {
    expect(
      categorizeEntry(absoluteEntry(`f`, `file:///home/u/app/usr/include/x.h`)),
    ).toBe(`ours`)
  })

  test(`applies no runtime-specific knowledge`, () => {
    // V8 regexp labels and node_modules need a known runtime, yet appear in
    // undetected profiles. A marker-free pprof profile from a JavaScript
    // runtime, for example, resolves to unknown. A `RegExp:` frame is `native`
    // only because it has no location, not because the label is recognized.
    expect(categorizeEntry(relativeEntry(`RegExp: /a/`))).toBe(`native`)
    expect(
      categorizeEntry(
        absoluteEntry(`f`, `file:///app/node_modules/x/index.js`),
      ),
    ).toBe(`ours`)
  })
})

describe(`matchEntry`, () => {
  test(`an unmarked entry normalizes to undefined`, () => {
    // The unknown origin carries no profiler's rules (see
    // `unknownOriginSpec`), so no entry gets a match normalization.
    expect(
      matchEntryForOrigin(
        absoluteEntry(`main`, `file:///project/src/main.rs`),
        `unknown`,
      ),
    ).toBeUndefined()
  })
})
