import { describe, expect, test } from 'vitest'
import { collapsedConverter } from '../../formats/collapsed/index.ts'
import { makeCollapsed } from '../../formats/collapsed/testing.ts'
import { convertBytesToMd } from '../../formats/testing.ts'
import type { StackFrame } from '../../modalities/stack-frame.ts'
import { normalizeProfileToMdOptions } from '../../options.ts'
import type { ProfileEntry } from '../../options.ts'
import { profileTitles, summaryLines } from '../../testing.ts'
import { determineOrigin, relativeEntry } from '../testing.ts'
import { eflambeOriginSpec } from './eflambe.ts'

/** A frame as it looks after normalization: a logical module location. */
const moduleEntry = (name: string, module: string): ProfileEntry => ({
  id: 1,
  name,
  location: { type: `logical`, name: module },
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

describe(`countMetric`, () => {
  const options = normalizeProfileToMdOptions({ baseURL: `/project` })

  test(`counts a collapsed count as a microsecond of wall time`, () => {
    const md = convertBytesToMd(
      collapsedConverter,
      makeCollapsed([
        `<0.94.0>;Elixir.Profile:run/1 1500`,
        `<0.94.0>;Elixir.Profile:run/1;Elixir.Jason:encode!/1 500`,
      ]),
      options,
    )

    expect(profileTitles(md)).toEqual([`Wall time profile`])
    expect(summaryLines(md)).toEqual([`Took 2.0ms.`])
  })

  test(`leaves another origin's collapsed counts as samples`, () => {
    const md = convertBytesToMd(
      collapsedConverter,
      makeCollapsed([`run (script.py:1);work (script.py:5) 1500`]),
      options,
    )

    expect(summaryLines(md)).toEqual([`Collected 1,500 samples.`])
  })
})

describe(`normalizeStackFrame`, () => {
  const { normalizeStackFrame } = eflambeOriginSpec

  test(`lifts an Elixir module out of the name as the location, stripping the Elixir. prefix`, () => {
    expect(normalizeStackFrame({ name: `Elixir.Jason:encode!/1` })).toEqual({
      name: `encode!/1`,
      location: { type: `logical`, name: `Jason` },
    })
  })

  test(`lifts an Erlang module out of the name as the location`, () => {
    expect(normalizeStackFrame({ name: `lists:reverse/1` })).toEqual({
      name: `reverse/1`,
      location: { type: `logical`, name: `lists` },
    })
  })

  test(`splits on the first colon, keeping the rest of the name intact`, () => {
    expect(
      normalizeStackFrame({ name: `json:-do_encode_map/2-lc$^0/1-0-/2` }),
    ).toEqual({
      name: `-do_encode_map/2-lc$^0/1-0-/2`,
      location: { type: `logical`, name: `json` },
    })
  })

  test(`leaves a colon-less process id frame unchanged`, () => {
    expect(normalizeStackFrame({ name: `<0.94.0>` })).toEqual({
      name: `<0.94.0>`,
    })
  })

  test(`leaves an already-located frame unchanged`, () => {
    const input: StackFrame = {
      name: `lists:reverse/1`,
      location: { type: `file`, urlOrPath: `lists.erl` },
    }
    expect(normalizeStackFrame(input)).toBe(input)
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
  // by `normalizeStackFrame`.
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

  // A process id, which has no module.
  test(`the location-less <0.94.0> frame is native`, () => {
    expect(categorizeEntry(named(`<0.94.0>`))).toBe(`native`)
  })

  // Eflambe's leaf marker for a process scheduled out, not a function.
  test(`the sleep frame is idle`, () => {
    expect(categorizeEntry(named(`sleep`))).toBe(`idle`)
  })

  // A real function named `sleep` keeps its module and stays categorized by it.
  test(`a module-qualified sleep is not idle`, () => {
    expect(categorizeEntry(moduleEntry(`timer:sleep/1`, `timer`))).toBe(
      `stdlib`,
    )
  })
})
