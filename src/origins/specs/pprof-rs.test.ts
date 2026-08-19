import { describe, expect, test } from 'vitest'
import type { StackFrame } from '../../modalities/stack-frame.ts'
import type { ProfileEntry } from '../../options.ts'
import { matchEntryForOrigin } from '../index.ts'
import { absoluteEntry, determineOrigin, relativeEntry } from '../testing.ts'
import { pprofRsOriginSpec } from './pprof-rs.ts'

describe(`detection`, () => {
  test.each<[string, ProfileEntry]>([
    [
      `a rustc toolchain path`,
      absoluteEntry(
        `f`,
        `file:///rustc/${`a`.repeat(40)}/library/std/src/rt.rs`,
      ),
    ],
    [`a mangled closure name`, relativeEntry(`compiler::run::{{closure}}`)],
  ])(`detects pprof-rs by %s`, (_description, entry) => {
    expect(determineOrigin({ format: `pprof`, entries: [entry] })).toBe(
      `pprof-rs`,
    )
  })
})

describe(`normalizeStackFrame`, () => {
  const { normalizeStackFrame } = pprofRsOriginSpec

  test(`drops the Unknown placeholder path`, () => {
    expect(
      normalizeStackFrame({
        name: `_main`,
        location: { type: `file`, urlOrPath: `Unknown` },
      }),
    ).toEqual({ name: `_main` })
  })

  test(`leaves a located frame unchanged`, () => {
    const input: StackFrame = {
      name: `compiler::run`,
      location: { type: `file`, urlOrPath: `src/compiler.rs` },
    }

    expect(normalizeStackFrame(input)).toBe(input)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = pprofRsOriginSpec

  test.each([
    `file:///rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/rt.rs`,
    `file:///home/u/.rustup/toolchains/stable/lib/rustlib/src/rust/library/core/src/ops/function.rs`,
  ])(`the %s stdlib source is stdlib`, url => {
    expect(categorizeEntry(absoluteEntry(`f`, url))).toBe(`stdlib`)
  })

  test(`Cargo registry dependencies are third-party`, () => {
    expect(
      categorizeEntry(
        absoluteEntry(
          `f`,
          `file:///home/u/.cargo/registry/src/index.crates.io-abc/lalrpop-0.20/src/lib.rs`,
        ),
      ),
    ).toBe(`third-party`)
  })

  test(`project files are ours`, () => {
    expect(
      categorizeEntry(absoluteEntry(`f`, `file:///app/compiler/src/main.rs`)),
    ).toBe(`ours`)
  })
})

describe(`matchEntry`, () => {
  test(`strips a Cargo build-script hash`, () => {
    expect(
      matchEntryForOrigin(
        absoluteEntry(
          `parse`,
          `file:///app/target/release/build/web-compiler-${`a`.repeat(16)}/out/parser.rs`,
        ),
        `pprof-rs`,
      ),
    ).toEqual({
      location: `file:///app/target/release/build/web-compiler/out/parser.rs`,
    })
  })

  test(`strips a rustc commit hash`, () => {
    expect(
      matchEntryForOrigin(
        absoluteEntry(
          `rt`,
          `file:///rustc/${`a`.repeat(40)}/library/std/src/rt.rs`,
        ),
        `pprof-rs`,
      ),
    ).toEqual({ location: `file:///rustc/library/std/src/rt.rs` })
  })
})
