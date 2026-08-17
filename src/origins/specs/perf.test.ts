import { describe, expect, test } from 'vitest'
import { determineOrigin, logicalEntry, relativeEntry } from '../testing.ts'
import { perfOriginSpec } from './perf.ts'

describe(`detection`, () => {
  test(`markerless: a perf.data input falls back to perf`, () => {
    expect(
      determineOrigin({
        format: `perf`,
        entries: [relativeEntry(`0x1234`, `/src/workload`)],
      }),
    ).toBe(`perf`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = perfOriginSpec

  test(`an address in the kernel's own mapping is kernel`, () => {
    expect(
      categorizeEntry(logicalEntry(`0xffff800081000000`, `[kernel.kallsyms]`)),
    ).toBe(`kernel`)
  })

  test(`an address in the kernel-provided vDSO is kernel`, () => {
    expect(categorizeEntry(logicalEntry(`0x7f0`, `[vdso]`))).toBe(`kernel`)
  })

  test(`an address in anonymous memory is jit`, () => {
    expect(categorizeEntry(logicalEntry(`0x1000`, `//anon`))).toBe(`jit`)
    expect(categorizeEntry(logicalEntry(`0x1000`, `/dev/zero (deleted)`))).toBe(
      `jit`,
    )
  })

  test(`an address in an installed system library is native`, () => {
    expect(
      categorizeEntry(
        relativeEntry(`0x9d200`, `/usr/lib/aarch64-linux-gnu/libc.so.6`),
      ),
    ).toBe(`native`)
  })

  test(`an address in the profiled program's own binary is ours`, () => {
    expect(categorizeEntry(relativeEntry(`0x1234`, `/src/workload`))).toBe(
      `ours`,
    )
  })

  // Perf resolves every address it has a mapping for, so one it left
  // unattributed is code the recording captured nothing about.
  test(`an address no mapping covered is unknown`, () => {
    expect(categorizeEntry(relativeEntry(`0x401234`))).toBe(`unknown`)
  })
})
