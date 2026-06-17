import { describe, expect, test } from 'vitest'
import type { ProfileEntry } from '../options.ts'
import { dotnetTraceOriginSpec } from './dotnet-trace.ts'

const { normalizeFrame } = dotnetTraceOriginSpec

/** A frame as it looks after normalization: a relative declaring-type location. */
const typeEntry = (name: string, type: string): ProfileEntry => ({
  id: 1,
  name,
  location: { type: `relative`, path: type },
})

const named = (name: string): ProfileEntry => ({ id: 1, name })

describe(`normalizeFrame`, () => {
  test(`splits a managed frame into method name and declaring-type location`, () => {
    expect(
      normalizeFrame({
        name: `System.Private.CoreLib!System.AppContext.Setup(wchar**,wchar**,int32)`,
      }),
    ).toEqual({
      name: `Setup(wchar**, wchar**, int32)`,
      location: { urlOrPath: `System.AppContext` },
    })
  })

  test(`assembly casing doesn't affect the split (TraceEvent emits both)`, () => {
    expect(
      normalizeFrame({
        name: `system.private.corelib!System.AppContext.Setup(wchar**,wchar**,int32)`,
      }),
    ).toEqual({
      name: `Setup(wchar**, wchar**, int32)`,
      location: { urlOrPath: `System.AppContext` },
    })
  })

  test(`simplifies class parameter types to their simple names`, () => {
    expect(
      normalizeFrame({
        name: `System.Private.CoreLib!System.String.Concat(class System.String,class System.String)`,
      }),
    ).toEqual({
      name: `Concat(String, String)`,
      location: { urlOrPath: `System.String` },
    })
  })

  test(`drops value class modifiers and qualification from struct parameters`, () => {
    expect(
      normalizeFrame({
        name: `System.Private.CoreLib!System.Threading.Tasks.Task.Wait(int32,value class System.Threading.CancellationToken)`,
      }),
    ).toEqual({
      name: `Wait(int32, CancellationToken)`,
      location: { urlOrPath: `System.Threading.Tasks.Task` },
    })
  })

  test(`keeps generic and nested types intact in the location`, () => {
    expect(
      normalizeFrame({
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
      normalizeFrame({
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
      normalizeFrame({
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
  ])(`drops the %s scaffolding frame`, name => {
    expect(normalizeFrame({ name })).toBeNull()
  })

  test(`keeps the unmanaged-time bucket as a location-less frame`, () => {
    const input = { name: `UNMANAGED_CODE_TIME` }

    expect(normalizeFrame(input)).toBe(input)
  })

  test(`leaves an unknown-assembly frame location-less`, () => {
    const input = { name: `?!?` }

    expect(normalizeFrame(input)).toBe(input)
  })

  test(`falls back to the lowercased assembly for a type-less function`, () => {
    expect(normalizeFrame({ name: `Profile!main()` })).toEqual({
      name: `main()`,
      location: { urlOrPath: `profile` },
    })
  })

  test(`leaves an already-located frame unchanged`, () => {
    const input = {
      name: `Profile!Profile.Program.Main()`,
      location: { urlOrPath: `Program.cs` },
    }

    expect(normalizeFrame(input)).toBe(input)
  })
})

describe(`categorize`, () => {
  const { categorize } = dotnetTraceOriginSpec

  test(`runtime and framework namespaces are stdlib`, () => {
    expect(categorize(typeEntry(`Setup`, `System.AppContext`))).toBe(`stdlib`)
    expect(
      categorize(
        typeEntry(
          `FindValue`,
          `System.Collections.Generic.Dictionary\`2[System.__Canon,System.__Canon]`,
        ),
      ),
    ).toBe(`stdlib`)
    expect(
      categorize(
        typeEntry(`ToArray`, `Microsoft.FSharp.Collections.SeqModule`),
      ),
    ).toBe(`stdlib`)
  })

  test(`application namespaces are ours`, () => {
    expect(categorize(typeEntry(`Main`, `Profile.Program`))).toBe(`ours`)
  })

  test(`NuGet dependencies fall to ours (no marker distinguishes them)`, () => {
    expect(
      categorize(typeEntry(`ParseValue`, `Newtonsoft.Json.JsonTextReader`)),
    ).toBe(`ours`)
  })

  test(`a framework-prefix lookalike type is not stdlib`, () => {
    expect(categorize(typeEntry(`Run`, `SystemUtils`))).toBe(`ours`)
  })

  test(`a location-less frame is stdlib`, () => {
    expect(categorize(named(`UNMANAGED_CODE_TIME`))).toBe(`stdlib`)
    expect(categorize(named(`?!?`))).toBe(`stdlib`)
  })
})
