import { describe, expect, test } from 'vitest'
import type { ProfileEntry } from '../../options.ts'
import { determineOrigin, relativeEntry } from '../testing.ts'
import { dotnetTraceOriginSpec } from './dotnet-trace.ts'

/** A frame as it looks after normalization: a relative declaring-type location. */
const typeEntry = (name: string, type: string): ProfileEntry => ({
  id: 1,
  name,
  location: { type: `relative`, path: type },
})

const named = (name: string): ProfileEntry => ({ id: 1, name })

describe(`detection`, () => {
  // An assembly-bang managed frame and a time-bucket marker.
  test.each([
    `System.Private.CoreLib!System.AppContext.Setup(wchar**,wchar**,int32)`,
    `UNMANAGED_CODE_TIME`,
  ])(`detects dotnet-trace by its %s frame`, name => {
    expect(
      determineOrigin({
        format: `speedscope`,
        entries: [relativeEntry(name)],
      }),
    ).toBe(`dotnet-trace`)
  })

  test(`a bang-less speedscope frame doesn't trigger dotnet-trace`, () => {
    expect(
      determineOrigin({
        format: `speedscope`,
        entries: [relativeEntry(`main()`)],
      }),
    ).toBe(`unknown`)
  })
})

describe(`normalizeStackFrame`, () => {
  const { normalizeStackFrame } = dotnetTraceOriginSpec

  test(`splits a managed frame into method name and declaring-type location`, () => {
    expect(
      normalizeStackFrame({
        name: `System.Private.CoreLib!System.AppContext.Setup(wchar**,wchar**,int32)`,
      }),
    ).toEqual({
      name: `Setup(wchar**, wchar**, int32)`,
      location: { urlOrPath: `System.AppContext` },
    })
  })

  test(`assembly casing doesn't affect the split (TraceEvent emits both)`, () => {
    expect(
      normalizeStackFrame({
        name: `system.private.corelib!System.AppContext.Setup(wchar**,wchar**,int32)`,
      }),
    ).toEqual({
      name: `Setup(wchar**, wchar**, int32)`,
      location: { urlOrPath: `System.AppContext` },
    })
  })

  test(`simplifies class parameter types to their simple names`, () => {
    expect(
      normalizeStackFrame({
        name: `System.Private.CoreLib!System.String.Concat(class System.String,class System.String)`,
      }),
    ).toEqual({
      name: `Concat(String, String)`,
      location: { urlOrPath: `System.String` },
    })
  })

  test(`drops value class modifiers and qualification from struct parameters`, () => {
    expect(
      normalizeStackFrame({
        name: `System.Private.CoreLib!System.Threading.Tasks.Task.Wait(int32,value class System.Threading.CancellationToken)`,
      }),
    ).toEqual({
      name: `Wait(int32, CancellationToken)`,
      location: { urlOrPath: `System.Threading.Tasks.Task` },
    })
  })

  test(`keeps generic and nested types intact in the location`, () => {
    expect(
      normalizeStackFrame({
        name: `System.Private.CoreLib!System.Collections.Generic.Dictionary\`2[System.__Canon,System.__Canon].FindValue(!0)`,
      }),
    ).toEqual({
      name: `FindValue(!0)`,
      location: {
        urlOrPath: `System.Collections.Generic.Dictionary\`2[System.__Canon,System.__Canon]`,
      },
    })
  })

  test(`keeps a constructor's leading dot with the method name`, () => {
    expect(
      normalizeStackFrame({
        name: `System.Private.CoreLib!System.Diagnostics.Tracing.NativeRuntimeEventSource..ctor()`,
      }),
    ).toEqual({
      name: `.ctor()`,
      location: {
        urlOrPath: `System.Diagnostics.Tracing.NativeRuntimeEventSource`,
      },
    })
  })

  test(`compiler-generated local functions keep their mangled method name`, () => {
    expect(
      normalizeStackFrame({
        name: `System.Console!System.Console.<get_Out>g__EnsureInitialized|26_0()`,
      }),
    ).toEqual({
      name: `<get_Out>g__EnsureInitialized|26_0()`,
      location: { urlOrPath: `System.Console` },
    })
  })

  test.each([
    `Process64 Process(76492) (76492) Args: `,
    `(Non-Activities)`,
    `Threads`,
    `Thread (22921464)`,
    `CPU_TIME`,
  ])(`drops the %s pseudo-frame`, name => {
    expect(normalizeStackFrame({ name })).toBeNull()
  })

  test(`keeps the unmanaged-time bucket as a location-less frame`, () => {
    const input = { name: `UNMANAGED_CODE_TIME` }

    expect(normalizeStackFrame(input)).toBe(input)
  })

  test(`leaves an unknown-assembly frame location-less`, () => {
    const input = { name: `?!?` }

    expect(normalizeStackFrame(input)).toBe(input)
  })

  test(`falls back to the lowercased assembly for a type-less function`, () => {
    expect(normalizeStackFrame({ name: `Profile!main()` })).toEqual({
      name: `main()`,
      location: { urlOrPath: `profile` },
    })
  })

  test(`leaves an already-located frame unchanged`, () => {
    const input = {
      name: `Profile!Profile.Program.Main()`,
      location: { urlOrPath: `Program.cs` },
    }

    expect(normalizeStackFrame(input)).toBe(input)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = dotnetTraceOriginSpec

  test.each([
    `System.AppContext`,
    `System.Collections.Generic.Dictionary\`2[System.__Canon,System.__Canon]`,
    `Microsoft.FSharp.Collections.SeqModule`,
  ])(`the runtime/framework %s type is stdlib`, type => {
    expect(categorizeEntry(typeEntry(`f`, type))).toBe(`stdlib`)
  })

  test(`application namespaces are ours`, () => {
    expect(categorizeEntry(typeEntry(`Main`, `Profile.Program`))).toBe(`ours`)
  })

  test(`NuGet dependencies fall to ours (no marker distinguishes them)`, () => {
    expect(
      categorizeEntry(
        typeEntry(`ParseValue`, `Newtonsoft.Json.JsonTextReader`),
      ),
    ).toBe(`ours`)
  })

  test(`a framework-prefix lookalike type is not stdlib`, () => {
    expect(categorizeEntry(typeEntry(`Run`, `SystemUtils`))).toBe(`ours`)
  })

  // CoreCLR's own compiled code, outside the managed stack.
  test(`the location-less UNMANAGED_CODE_TIME frame is native`, () => {
    expect(categorizeEntry(named(`UNMANAGED_CODE_TIME`))).toBe(`native`)
  })

  // TraceEvent resolved neither the assembly nor the method, which says
  // nothing about what the code is.
  test(`the unknown-assembly ?!? frame is unknown`, () => {
    expect(categorizeEntry(named(`?!?`))).toBe(`unknown`)
  })
})
