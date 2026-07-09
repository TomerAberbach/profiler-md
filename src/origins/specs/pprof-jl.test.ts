import { describe, expect, test } from 'vitest'
import type { StackFrame } from '../../modalities/stack-frame.ts'
import type { FunctionCategory, ProfileEntry } from '../../options.ts'
import { absoluteEntry, determineOrigin, relativeEntry } from '../testing.ts'
import { pprofJlOriginSpec } from './pprof-jl.ts'

describe(`detection`, () => {
  test(`detects pprof-jl by Base frames in the Julia install layout`, () => {
    expect(
      determineOrigin({
        format: `pprof`,
        entries: [
          relativeEntry(
            `+`,
            `/nix/store/x-julia-bin-1.12.6/share/julia/base/int.jl`,
          ),
        ],
      }),
    ).toBe(`pprof-jl`)
  })
})

describe(`normalizeStackFrame`, () => {
  const { normalizeStackFrame } = pprofJlOriginSpec

  test(`drops the allocation profiler's Alloc: pseudo-frame`, () => {
    expect(normalizeStackFrame({ name: `Alloc: Vector{UInt8}` })).toBeNull()
  })

  test(`leaves a regular frame unchanged`, () => {
    const input: StackFrame = {
      name: `+`,
      location: { type: `file`, urlOrPath: `int.jl` },
    }

    expect(normalizeStackFrame(input)).toBe(input)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = pprofJlOriginSpec

  test.each<{
    description: string
    entry: ProfileEntry
    expected: FunctionCategory
  }>([
    {
      description: `Julia install tree sources are stdlib`,
      entry: absoluteEntry(
        `f`,
        `file:///nix/store/x-julia-bin-1.12.6/share/julia/base/int.jl`,
      ),
      expected: `stdlib`,
    },
    {
      description: `depot packages are third-party`,
      entry: absoluteEntry(
        `f`,
        `file:///depot/packages/JSON3/abc12/src/write.jl`,
      ),
      expected: `third-party`,
    },
    {
      description: `runtime C sources are native`,
      entry: absoluteEntry(`f`, `file:///build/julia/src/interpreter.c`),
      expected: `native`,
    },
    {
      description: `runtime shared libraries are native`,
      entry: relativeEntry(`f`, `sys.dylib`),
      expected: `native`,
    },
    {
      description: `project sources are ours`,
      entry: absoluteEntry(`f`, `file:///work/scripts/profile.jl`),
      expected: `ours`,
    },
  ])(`$description`, ({ entry, expected }) => {
    expect(categorizeEntry(entry)).toBe(expected)
  })
})
