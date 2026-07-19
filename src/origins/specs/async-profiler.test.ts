import { describe, expect, test } from 'vitest'
import { determineOrigin, relativeEntry } from '../testing.ts'
import { asyncProfilerOriginSpec } from './async-profiler.ts'

describe(`detection`, () => {
  // Detection matches raw slash-form names against the same package roots
  // categorization matches dot-form classes against, including `com/sun`.
  test.each([
    `java/util/HashMap.put`,
    `com/sun/crypto/provider/AESCrypt.encrypt`,
  ])(`detects async-profiler by the %s collapsed class frame`, name => {
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(name)],
      }),
    ).toBe(`async-profiler`)
  })

  test.each([`vtable stub`, `I2C/C2I adapters(0xba)`])(
    `detects async-profiler by the %s HotSpot stub frame`,
    name => {
      expect(
        determineOrigin({
          format: `jfr`,
          entries: [relativeEntry(name)],
        }),
      ).toBe(`async-profiler`)
    },
  )

  test(`detects async-profiler by a native-library frame in a JFR stack`, () => {
    expect(
      determineOrigin({
        format: `jfr`,
        entries: [
          relativeEntry(`put(Object, Object)`, `java.util.HashMap`),
          relativeEntry(`__psynch_cvwait`, `libsystem_kernel.dylib`),
        ],
      }),
    ).toBe(`async-profiler`)
  })

  test(`a Java frame with a signature is not a native-library marker`, () => {
    expect(
      determineOrigin({
        format: `jfr`,
        entries: [relativeEntry(`load()`, `com.acme.so.Helper.dylib`)],
      }),
    ).toBe(`jdk`)
  })
})

describe(`normalizeFrame`, () => {
  const { normalizeFrame } = asyncProfilerOriginSpec

  test(`turns the slashed class into a dotted location`, () => {
    expect(normalizeFrame({ name: `java/util/HashMap.put` })).toEqual({
      name: `put`,
      location: { urlOrPath: `java.util.HashMap` },
    })
  })

  test(`handles a nested class and an <init> method`, () => {
    expect(
      normalizeFrame({ name: `java/lang/System$Logger$Level.valueOf` }),
    ).toEqual({
      name: `valueOf`,
      location: { urlOrPath: `java.lang.System$Logger$Level` },
    })
  })

  test(`leaves a native (no-slash) frame location-less`, () => {
    expect(normalizeFrame({ name: `Parker::park` })).toEqual({
      name: `Parker::park`,
    })
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = asyncProfilerOriginSpec

  // A version suffix on the shared object is still a native library.
  test.each([`libjvm.dylib`, `libsystem_kernel.dylib`, `libc.so.6`])(
    `the %s shared library is native`,
    path => {
      expect(categorizeEntry(relativeEntry(`f`, path))).toBe(`native`)
    },
  )

  test(`an extension-less native module without a method signature is native`, () => {
    // A wall profile's native module, distinguished from a default-package
    // class by the missing method signature.
    expect(
      categorizeEntry(relativeEntry(`__CFRunLoopRun`, `CoreFoundation`)),
    ).toBe(`native`)
  })

  test.each([
    `vtable stub`,
    `itable stub`,
    `I2C/C2I adapters(0xba)`,
    `zero_blocks`,
  ])(`the HotSpot %s stub is jit`, name => {
    expect(categorizeEntry(relativeEntry(name))).toBe(`jit`)
  })

  test(`HotSpot GC barrier stubs are the garbage collector`, () => {
    expect(categorizeEntry(relativeEntry(`g1_post_barrier_slow`))).toBe(
      `garbage collector`,
    )
  })
})
