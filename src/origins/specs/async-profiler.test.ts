import { describe, expect, test } from 'vitest'
import { determineOrigin, logicalEntry } from '../testing.ts'
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
        entries: [logicalEntry(name)],
      }),
    ).toBe(`async-profiler`)
  })

  test.each([`vtable stub`, `I2C/C2I adapters(0xba)`])(
    `detects async-profiler by the %s HotSpot stub frame`,
    name => {
      expect(
        determineOrigin({
          format: `jfr`,
          entries: [logicalEntry(name)],
        }),
      ).toBe(`async-profiler`)
    },
  )

  test(`detects async-profiler by a native-library frame in a JFR stack`, () => {
    expect(
      determineOrigin({
        format: `jfr`,
        entries: [
          logicalEntry(`put(Object, Object)`, `java.util.HashMap`),
          logicalEntry(`__psynch_cvwait`, `libsystem_kernel.dylib`),
        ],
      }),
    ).toBe(`async-profiler`)
  })

  test(`a Java frame with a signature is not a native-library marker`, () => {
    expect(
      determineOrigin({
        format: `jfr`,
        entries: [logicalEntry(`load()`, `com.acme.so.Helper.dylib`)],
      }),
    ).toBe(`jdk`)
  })
})

describe(`normalizeStackFrame`, () => {
  const { normalizeStackFrame } = asyncProfilerOriginSpec

  test(`turns the slashed class into a dotted location`, () => {
    expect(normalizeStackFrame({ name: `java/util/HashMap.put` })).toEqual({
      name: `put`,
      definition: { type: `logical`, name: `java.util.HashMap` },
    })
  })

  test(`handles a nested class and an <init> method`, () => {
    expect(
      normalizeStackFrame({ name: `java/lang/System$Logger$Level.valueOf` }),
    ).toEqual({
      name: `valueOf`,
      definition: { type: `logical`, name: `java.lang.System$Logger$Level` },
    })
  })

  test(`leaves a native (no-slash) frame location-less`, () => {
    expect(normalizeStackFrame({ name: `Parker::park` })).toEqual({
      name: `Parker::park`,
    })
  })

  test(`drops the thread frame the threads option roots each stack at`, () => {
    expect(
      normalizeStackFrame({ name: `[ForkJoinPool-1-worker-1 tid=35079]` }),
    ).toBeNull()
  })

  test.each([`java.lang.String_[i]`, `byte[]_[i]`, `java.lang.Object[]_[i]`])(
    `drops the %s class frame an allocation event ends its stack with`,
    name => {
      expect(normalizeStackFrame({ name })).toBeNull()
    },
  )

  describe(`with the dot option`, () => {
    test.each([
      `java.lang.String`,
      `java.lang.PublicMethods$Key`,
      `byte[]`,
      `java.lang.Object[][]`,
      `groovy.lang.MetaClassImpl$$Lambda.0x0000007801080990`,
    ])(`drops the %s class frame`, name => {
      expect(normalizeStackFrame({ name })).toBeNull()
    })

    test.each([
      {
        name: `java.util.HashMap.put`,
        expected: { method: `put`, className: `java.util.HashMap` },
      },
      {
        name: `org.jetbrains.kotlin.ir.builders.BuildersKt.IrCallImplWithShape`,
        expected: {
          method: `IrCallImplWithShape`,
          className: `org.jetbrains.kotlin.ir.builders.BuildersKt`,
        },
      },
      {
        name: `org.jetbrains.kotlin.fir.MutableOrEmptyList.box-impl`,
        expected: {
          method: `box-impl`,
          className: `org.jetbrains.kotlin.fir.MutableOrEmptyList`,
        },
      },
      {
        name: `java.lang.invoke.LambdaForm$DMH.0x0000000301008400.invokeStatic`,
        expected: {
          method: `invokeStatic`,
          className: `java.lang.invoke.LambdaForm$DMH.0x0000000301008400`,
        },
      },
      {
        name: `java.util.HashMap.put_[i]`,
        expected: { method: `put`, className: `java.util.HashMap` },
      },
    ])(`locates the $name method frame`, ({ name, expected }) => {
      expect(normalizeStackFrame({ name })).toEqual({
        name: expected.method,
        definition: { type: `logical`, name: expected.className },
      })
    })

    test.each([`tiny_malloc_from_free_list.cold.4`, `Main.main`])(
      `leaves the %s frame location-less because it lacks a package`,
      name => {
        expect(normalizeStackFrame({ name })).toEqual({ name })
      },
    )
  })

  test.each([`_[j]`, `_[i]`, `_[0]`, `_[1]`])(
    `strips the %s compilation annotation`,
    suffix => {
      expect(
        normalizeStackFrame({ name: `java/util/HashMap.put${suffix}` }),
      ).toEqual({
        name: `put`,
        definition: { type: `logical`, name: `java.util.HashMap` },
      })
    },
  )

  test(`formats a signature, restoring the ; the collapsed format escapes as |`, () => {
    expect(
      normalizeStackFrame({
        name: `java/lang/reflect/Method.invoke(Ljava/lang/Object|[Ljava/lang/Object|)Ljava/lang/Object|_[0]`,
      }),
    ).toEqual({
      name: `invoke(Object, Object[])`,
      definition: { type: `logical`, name: `java.lang.reflect.Method` },
    })
  })

  test(`strips the annotation from a native frame without locating it`, () => {
    expect(
      normalizeStackFrame({ name: `Parker::park(bool, long)_[j]` }),
    ).toEqual({ name: `Parker::park(bool, long)` })
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = asyncProfilerOriginSpec

  // A version suffix on the shared object is still a native library.
  test.each([`libjvm.dylib`, `libsystem_kernel.dylib`, `libc.so.6`])(
    `the %s shared library is native`,
    path => {
      expect(categorizeEntry(logicalEntry(`f`, path))).toBe(`native`)
    },
  )

  test(`an extension-less native module without a method signature is native`, () => {
    // A wall profile's native module, distinguished from a default-package
    // class by the missing method signature.
    expect(
      categorizeEntry(logicalEntry(`__CFRunLoopRun`, `CoreFoundation`)),
    ).toBe(`native`)
  })

  test.each([
    `vtable stub`,
    `itable stub`,
    `I2C/C2I adapters(0xba)`,
    `zero_blocks`,
  ])(`the HotSpot %s stub is jit`, name => {
    expect(categorizeEntry(logicalEntry(name))).toBe(`jit`)
  })

  test(`HotSpot GC barrier stubs are the garbage collector`, () => {
    expect(categorizeEntry(logicalEntry(`g1_post_barrier_slow`))).toBe(
      `garbage-collector`,
    )
  })

  test.each([
    [`CompileBroker::compiler_thread_loop`, `libjvm.dylib`],
    [`LinearScan::do_linear_scan`, `libjvm.dylib`],
    [`Compile::Optimize`, undefined],
  ])(`the HotSpot compiler frame %s is compiler`, (name, path) => {
    expect(categorizeEntry(logicalEntry(name, path))).toBe(`compiler`)
  })

  // The compiler rules match a bare symbol, which a Java method name can
  // satisfy, so a declaring class keeps them off the profiled program.
  test.each([
    [`getNode`, `com.acme.Tree`],
    [`removeNode`, `com.acme.LinkedList`],
    [`TypeAdapter`, `com.google.gson.TypeAdapter`],
    [`GraphBuilder`, `com.acme.GraphBuilder`],
  ])(`the Java method %s is ours, not compiler`, (name, path) => {
    const entry = logicalEntry(name, path)
    expect(categorizeEntry(entry)).toBe(`ours`)
    expect(asyncProfilerOriginSpec.isMarkerEntry(entry)).toBe(false)
  })
})
