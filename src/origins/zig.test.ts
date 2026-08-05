import { describe, expect, test } from 'vitest'
import { relativeEntry } from './testing.ts'
import { zigStdlibCategory } from './zig.ts'

describe(`zigStdlibCategory`, () => {
  test.each([
    [`the standard library`, `/opt/zig/lib/std/zig/tokenizer.zig`],
    [`a nested standard library module`, `/opt/zig/lib/std/mem/Allocator.zig`],
    [`the compiler runtime`, `/opt/zig/lib/compiler_rt.zig`],
    [`a compiler runtime module`, `/opt/zig/lib/compiler_rt/memcpy.zig`],
    [`the libc shim`, `/opt/zig/lib/c.zig`],
    [`the bundled libc`, `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`],
    [`the bundled C++ library`, `/opt/zig/lib/libcxx/src/string.cpp`],
    [`the bundled C++ ABI library`, `/opt/zig/lib/libcxxabi/src/cxa_guard.cpp`],
    [`the unwinder`, `/opt/zig/lib/libunwind/src/UnwindLevel1.c`],
    [`the undefined behavior sanitizer runtime`, `/opt/zig/lib/ubsan_rt.zig`],
    [`the thread sanitizer runtime`, `/opt/zig/lib/tsan/rtl/tsan_rtl.cpp`],
    [`the fuzzer runtime`, `/opt/zig/lib/fuzzer.zig`],
    [
      `a standard library module of a distribution package`,
      `/usr/lib/zig/std/mem/Allocator.zig`,
    ],
  ])(`categorizes %s as stdlib`, (_description, path) => {
    expect(zigStdlibCategory(relativeEntry(`work`, path))).toBe(`stdlib`)
  })

  test.each([
    [`an application source`, `/out/profile.zig`],
    [
      `a dependency vendored beside the toolchain's layout`,
      `/src/lib/parse.zig`,
    ],
    [`a non-Zig source under a lib directory`, `/src/lib/std/vector.cc`],
  ])(`leaves %s to the origin`, (_description, path) => {
    expect(zigStdlibCategory(relativeEntry(`work`, path))).toBeUndefined()
  })

  test(`categorizes a project's own lib/std module as stdlib`, () => {
    expect(
      zigStdlibCategory(
        relativeEntry(`work`, `/home/me/proj/lib/std/json.zig`),
      ),
    ).toBe(`stdlib`)
  })

  test(`leaves a locationless frame to the origin`, () => {
    expect(zigStdlibCategory(relativeEntry(`memset`))).toBeUndefined()
  })
})
