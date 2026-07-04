import { describe, expect, test } from 'vitest'
import type { ProfileEntry } from '../options.ts'
import { beamOriginSpec } from './beam.ts'

const { normalizeFrame } = beamOriginSpec

/** A frame as it looks after normalization: a relative module location. */
const moduleEntry = (name: string, module: string): ProfileEntry => ({
  id: 1,
  name,
  location: { type: `relative`, path: module },
})

const named = (name: string): ProfileEntry => ({ id: 1, name })

describe(`normalizeFrame`, () => {
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

describe(`categorize`, () => {
  const { categorize } = beamOriginSpec

  test(`OTP modules are stdlib`, () => {
    expect(categorize(moduleEntry(`erlang:apply/2`, `erlang`))).toBe(`stdlib`)
    expect(categorize(moduleEntry(`lists:reverse/1`, `lists`))).toBe(`stdlib`)
    expect(
      categorize(moduleEntry(`erts_internal:trace/3`, `erts_internal`)),
    ).toBe(`stdlib`)
    expect(categorize(moduleEntry(`json:encode/1`, `json`))).toBe(`stdlib`)
  })

  test(`Elixir-core modules are stdlib`, () => {
    // The module location arrives with the `Elixir.` prefix already stripped
    // by `normalizeFrame`.
    expect(categorize(moduleEntry(`Elixir.Enum:reduce/3`, `Enum`))).toBe(
      `stdlib`,
    )
    expect(categorize(moduleEntry(`Elixir.String:split/2`, `String`))).toBe(
      `stdlib`,
    )
  })

  test(`the eflambe profiler's own frames are stdlib`, () => {
    expect(categorize(moduleEntry(`eflambe:apply/2`, `eflambe`))).toBe(`stdlib`)
    expect(
      categorize(moduleEntry(`eflambe_server:stop_trace/1`, `eflambe_server`)),
    ).toBe(`stdlib`)
  })

  test(`application modules are ours`, () => {
    expect(
      categorize(
        moduleEntry(`Elixir.Profile:-run/1-fun-0-/2`, `Profile`),
      ),
    ).toBe(`ours`)
  })

  test(`hex dependencies fall to ours (no marker distinguishes them)`, () => {
    expect(
      categorize(moduleEntry(`Elixir.Jason:encode!/1`, `Jason`)),
    ).toBe(`ours`)
  })

  test(`a process id or other location-less frame is stdlib`, () => {
    expect(categorize(named(`<0.94.0>`))).toBe(`stdlib`)
    expect(categorize(named(`sleep`))).toBe(`stdlib`)
  })
})
