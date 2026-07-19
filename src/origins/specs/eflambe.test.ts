import { describe, expect, test } from 'vitest'
import type { ProfileEntry } from '../../options.ts'
import { determineOrigin, relativeEntry } from '../testing.ts'
import { eflambeOriginSpec } from './eflambe.ts'

/** A frame as it looks after normalization: a relative module location. */
const moduleEntry = (name: string, module: string): ProfileEntry => ({
  id: 1,
  name,
  location: { type: `relative`, path: module },
})

const named = (name: string): ProfileEntry => ({ id: 1, name })

describe(`detection`, () => {
  // An Elixir module frame, an Erlang `module:function/arity` frame, and a
  // process-id frame.
  test.each([`Elixir.Enum:reduce/3`, `lists:reverse/1`, `<0.94.0>`])(
    `detects BEAM by its %s frame`,
    name => {
      expect(
        determineOrigin({
          format: `collapsed`,
          entries: [relativeEntry(name)],
        }),
      ).toBe(`eflambe`)
    },
  )
})

describe(`normalizeFrame`, () => {
  const { normalizeFrame } = eflambeOriginSpec

  test(`lifts an Elixir module out of the name as the location, stripping the Elixir. prefix`, () => {
    expect(normalizeFrame({ name: `Elixir.Jason:encode!/1` })).toEqual({
      name: `encode!/1`,
      location: { urlOrPath: `Jason` },
    })
  })

  test(`lifts an Erlang module out of the name as the location`, () => {
    expect(normalizeFrame({ name: `lists:reverse/1` })).toEqual({
      name: `reverse/1`,
      location: { urlOrPath: `lists` },
    })
  })

  test(`splits on the first colon, keeping the rest of the name intact`, () => {
    expect(
      normalizeFrame({ name: `json:-do_encode_map/2-lc$^0/1-0-/2` }),
    ).toEqual({
      name: `-do_encode_map/2-lc$^0/1-0-/2`,
      location: { urlOrPath: `json` },
    })
  })

  test(`leaves a colon-less process id frame unchanged`, () => {
    expect(normalizeFrame({ name: `<0.94.0>` })).toEqual({ name: `<0.94.0>` })
  })

  test(`leaves an already-located frame unchanged`, () => {
    const input = {
      name: `lists:reverse/1`,
      location: { urlOrPath: `lists.erl` },
    }
    expect(normalizeFrame(input)).toBe(input)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = eflambeOriginSpec

  test.each([
    [`erlang`, `erlang:apply/2`],
    [`lists`, `lists:reverse/1`],
    [`erts_internal`, `erts_internal:trace/3`],
    [`json`, `json:encode/1`],
  ])(`the OTP %s module is stdlib`, (module, name) => {
    expect(categorizeEntry(moduleEntry(name, module))).toBe(`stdlib`)
  })

  // The module location arrives with the `Elixir.` prefix already stripped
  // by `normalizeFrame`.
  test.each([
    [`Enum`, `Elixir.Enum:reduce/3`],
    [`String`, `Elixir.String:split/2`],
  ])(`the Elixir-core %s module is stdlib`, (module, name) => {
    expect(categorizeEntry(moduleEntry(name, module))).toBe(`stdlib`)
  })

  test.each([
    [`eflambe`, `eflambe:apply/2`],
    [`eflambe_server`, `eflambe_server:stop_trace/1`],
  ])(`the eflambe profiler's own %s module is stdlib`, (module, name) => {
    expect(categorizeEntry(moduleEntry(name, module))).toBe(`stdlib`)
  })

  test(`application modules are ours`, () => {
    expect(
      categorizeEntry(moduleEntry(`Elixir.Profile:-run/1-fun-0-/2`, `Profile`)),
    ).toBe(`ours`)
  })

  test(`hex dependencies fall to ours (no marker distinguishes them)`, () => {
    expect(
      categorizeEntry(moduleEntry(`Elixir.Jason:encode!/1`, `Jason`)),
    ).toBe(`ours`)
  })

  // A process id or other location-less frame.
  test.each([`<0.94.0>`, `sleep`])(
    `the location-less %s frame is stdlib`,
    name => {
      expect(categorizeEntry(named(name))).toBe(`stdlib`)
    },
  )
})
