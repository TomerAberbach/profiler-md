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

  test(`a system-directory source is stdlib`, () => {
    expect(
      categorizeEntry(
        relativeEntry(`malloc`, `/usr/lib/system/libsystem_malloc.dylib`),
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

  test(`a locationless frame is stdlib`, () => {
    expect(categorizeEntry(relativeEntry(`__libc_start_main`))).toBe(`stdlib`)
  })
})
