import { describe, expect, test } from 'vitest'
import { determineOrigin, relativeEntry } from '../testing.ts'
import { gperftoolsOriginSpec } from './gperftools.ts'

describe(`detection`, () => {
  test(`markerless: an undetected pprof input falls back past gperftools`, () => {
    expect(
      determineOrigin({
        format: `pprof`,
        entries: [relativeEntry(`main`, `/home/user/app/main.cc`)],
      }),
    ).toBe(`unknown`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = gperftoolsOriginSpec

  // A shared library under `/usr/lib/` may be the C standard library, the
  // dynamic loader, or any installed dependency, and the path doesn't
  // distinguish them.
  test(`a system-library source is native`, () => {
    expect(
      categorizeEntry(
        relativeEntry(`malloc`, `/usr/lib/system/libsystem_malloc.dylib`),
      ),
    ).toBe(`native`)
  })

  // A toolchain header is the standard library's own source.
  test(`a system-include source is stdlib`, () => {
    expect(
      categorizeEntry(
        relativeEntry(`std::string::size`, `/usr/include/c++/12/string`),
      ),
    ).toBe(`stdlib`)
  })

  test(`a Zig toolchain source is stdlib`, () => {
    expect(
      categorizeEntry(
        relativeEntry(`mem.copyForwards`, `/opt/zig/lib/std/mem.zig`),
      ),
    ).toBe(`stdlib`)
  })

  test(`a located application frame is ours`, () => {
    expect(categorizeEntry(relativeEntry(`main`, `/app/main.cc`))).toBe(`ours`)
  })

  test(`a locationless frame is native`, () => {
    expect(categorizeEntry(relativeEntry(`__libc_start_main`))).toBe(`native`)
  })
})
