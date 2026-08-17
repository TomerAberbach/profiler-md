import { describe, expect, test } from 'vitest'
import { determineOrigin, logicalEntry, relativeEntry } from '../testing.ts'
import { simpleperfOriginSpec } from './simpleperf.ts'

describe(`detection`, () => {
  test(`markerless: the parser's origin hint outranks the format's fallback`, () => {
    expect(
      determineOrigin({
        format: `perf`,
        hint: `simpleperf`,
        entries: [
          relativeEntry(
            `0x1234`,
            `/apex/com.android.runtime/lib64/bionic/libc.so`,
          ),
        ],
      }),
    ).toBe(`simpleperf`)
  })

  test(`without the hint, a recording falls back to perf`, () => {
    expect(
      determineOrigin({
        format: `perf`,
        entries: [relativeEntry(`0x1234`, `/data/app/workload`)],
      }),
    ).toBe(`perf`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = simpleperfOriginSpec

  test(`an address in the kernel's own mapping is kernel`, () => {
    expect(
      categorizeEntry(logicalEntry(`0xffff800081000000`, `[kernel.kallsyms]`)),
    ).toBe(`kernel`)
  })

  test(`an address in the profiled app's own binary is ours`, () => {
    expect(categorizeEntry(relativeEntry(`0x1234`, `/data/app/workload`))).toBe(
      `ours`,
    )
  })

  test(`an address no mapping covered is unknown`, () => {
    expect(categorizeEntry(relativeEntry(`0x401234`))).toBe(`unknown`)
  })
})
