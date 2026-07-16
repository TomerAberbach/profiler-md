import { describe, expect, test } from 'vitest'
import { matchEntryForOrigin } from './index.ts'
import { jvmOriginSpec } from './jvm.ts'
import { determineOrigin, relativeEntry } from './testing.ts'

describe(`detection`, () => {
  // Detection matches raw slash-form names against the same package roots
  // categorization matches dot-form classes against, including `com/sun`.
  test.each([
    `java/util/HashMap.put`,
    `com/sun/crypto/provider/AESCrypt.encrypt`,
  ])(`detects jvm by the %s collapsed class frame`, name => {
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(name)],
      }),
    ).toBe(`jvm`)
  })

  test(`resolves JFR to the jvm origin`, () => {
    expect(determineOrigin({ format: `jfr`, entries: [] })).toBe(`jvm`)
  })
})

describe(`normalizeFrame`, () => {
  const { normalizeFrame } = jvmOriginSpec

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
  const { categorizeEntry } = jvmOriginSpec

  // The class is carried as the location.
  test.each([
    `java.util.concurrent.ForkJoinPool`,
    `jdk.internal.ref.PhantomCleanable`,
    `sun.nio.ch.FileChannelImpl`,
    `com.sun.crypto.provider.AESCrypt`,
  ])(`the standard-library %s class is stdlib`, path => {
    expect(categorizeEntry(relativeEntry(`f`, path))).toBe(`stdlib`)
  })

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

  test(`a default-package class with a method signature is ours`, () => {
    expect(categorizeEntry(relativeEntry(`main(String[])`, `Main`))).toBe(
      `ours`,
    )
  })

  test.each([
    `kotlin.jvm.internal.Intrinsics`,
    `kotlinx.collections.immutable.PersistentList`,
    `scala.collection.SeqOps`,
  ])(`the %s language-runtime class is stdlib`, path => {
    expect(categorizeEntry(relativeEntry(`f`, path))).toBe(`stdlib`)
  })

  test(`a class prefixed by but not inside a runtime package stays ours`, () => {
    expect(categorizeEntry(relativeEntry(`f`, `kotlinfoo.Bar`))).toBe(`ours`)
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

  // A package segment named like a native-library extension (`so`/`dll`/
  // `dylib`) must not be mistaken for a shared object: the extension only
  // counts at the end of the path.
  test.each([`org.renaissance.core.Launcher`, `com.acme.so.Helper`])(
    `the application %s class is ours`,
    path => {
      expect(categorizeEntry(relativeEntry(`f`, path))).toBe(`ours`)
    },
  )
})

describe(`matchEntry`, () => {
  test(`strips a lambda runtime address from the location`, () => {
    expect(
      matchEntryForOrigin(
        relativeEntry(
          `apply(Object, Object)`,
          `JavaKMeans$$Lambda.0x000000b801205218`,
        ),
        `jvm`,
      ),
    ).toEqual({ location: `JavaKMeans$$Lambda` })
  })

  test(`strips an adapter runtime address from the name`, () => {
    expect(
      matchEntryForOrigin(relativeEntry(`I2C/C2I adapters(0xba)`), `jvm`),
    ).toEqual({ name: `I2C/C2I adapters` })
  })
})
