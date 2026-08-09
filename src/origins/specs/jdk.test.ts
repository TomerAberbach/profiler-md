import { describe, expect, test } from 'vitest'
import { matchEntryForOrigin } from '../index.ts'
import { determineOrigin, logicalEntry } from '../testing.ts'
import { jdkOriginSpec } from './jdk.ts'

describe(`detection`, () => {
  test(`resolves JFR to the jdk origin by fallback`, () => {
    expect(determineOrigin({ format: `jfr`, entries: [] })).toBe(`jdk`)
  })

  test(`resolves a pure-Java JFR stack to the jdk origin`, () => {
    expect(
      determineOrigin({
        format: `jfr`,
        entries: [
          logicalEntry(`put(Object, Object)`, `java.util.HashMap`),
          logicalEntry(`main(String[])`, `Main`),
        ],
      }),
    ).toBe(`jdk`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = jdkOriginSpec

  // The class is carried as the location.
  test.each([
    `java.util.concurrent.ForkJoinPool`,
    `jdk.internal.ref.PhantomCleanable`,
    `sun.nio.ch.FileChannelImpl`,
    `com.sun.crypto.provider.AESCrypt`,
  ])(`the standard-library %s class is stdlib`, path => {
    expect(categorizeEntry(logicalEntry(`f`, path))).toBe(`stdlib`)
  })

  test(`a default-package class with a method signature is ours`, () => {
    expect(categorizeEntry(logicalEntry(`main(String[])`, `Main`))).toBe(`ours`)
  })

  test.each([
    `kotlin.jvm.internal.Intrinsics`,
    `kotlinx.collections.immutable.PersistentList`,
    `scala.collection.SeqOps`,
    `groovy.lang.MetaClassImpl`,
    `groovyjarjarasm.asm.ClassWriter`,
    `org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite`,
    `org.apache.groovy.json.internal.JsonParserCharArray`,
  ])(`the %s language-runtime class is stdlib`, path => {
    expect(categorizeEntry(logicalEntry(`f`, path))).toBe(`stdlib`)
  })

  test.each([`kotlinfoo.Bar`, `groovyfoo.Bar`])(
    `the %s class prefixed by but not inside a runtime package stays ours`,
    path => {
      expect(categorizeEntry(logicalEntry(`f`, path))).toBe(`ours`)
    },
  )

  // A package segment named like a native-library extension (`so`/`dll`/
  // `dylib`) must not be mistaken for a shared object: the extension only
  // counts at the end of the path.
  test.each([`org.renaissance.core.Launcher`, `com.acme.so.Helper`])(
    `the application %s class is ours`,
    path => {
      expect(categorizeEntry(logicalEntry(`f`, path))).toBe(`ours`)
    },
  )
})

describe(`matchEntry`, () => {
  test(`strips a lambda runtime address from the location`, () => {
    expect(
      matchEntryForOrigin(
        logicalEntry(
          `apply(Object, Object)`,
          `JavaKMeans$$Lambda.0x000000b801205218`,
        ),
        `jdk`,
      ),
    ).toEqual({ location: `JavaKMeans$$Lambda` })
  })

  test(`strips an adapter runtime address from the name`, () => {
    expect(
      matchEntryForOrigin(logicalEntry(`I2C/C2I adapters(0xba)`), `jdk`),
    ).toEqual({ name: `I2C/C2I adapters` })
  })
})
