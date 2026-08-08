import { describe, expect, test } from 'vitest'
import type { ProfileEntry } from '../options.ts'
import { categorizeEntryForOrigin, origins } from './index.ts'
import type { Origin } from './index.ts'

const located = (url: string): ProfileEntry => ({
  id: 1,
  name: `f`,
  location: { type: `absolute`, url: new URL(url) },
})

const relative = (path: string): ProfileEntry => ({
  id: 1,
  name: `f`,
  location: { type: `relative`, path },
})

const named = (name: string): ProfileEntry => ({ id: 1, name })

describe(`every origin`, () => {
  test.each(origins)(`%s`, origin => {
    // A frame with no location is compiled code, except where the profiler
    // says only that it could not attribute the frame.
    expect(categorizeEntryForOrigin(named(`native`), origin)).toBeOneOf([
      `native`,
      `unknown`,
    ])
    // A frame the profiler neither named nor located is unknown everywhere.
    expect(categorizeEntryForOrigin(named(`(anonymous)`), origin)).toBe(
      `unknown`,
    )
    // A located project file is ours.
    expect(
      categorizeEntryForOrigin(located(`file:///app/src/index.ts`), origin),
    ).toBe(`ours`)
    expect(categorizeEntryForOrigin(relative(`src/index.ts`), origin)).toBe(
      `ours`,
    )
  })
})

describe(`synthetic frames (JavaScript runtimes)`, () => {
  const jsEngineOrigins: Origin[] = [`node`, `deno`, `bun`, `safari`]
  test.each(jsEngineOrigins)(`%s`, origin => {
    expect(categorizeEntryForOrigin(named(`(garbage collector)`), origin)).toBe(
      `garbage collector`,
    )
    expect(categorizeEntryForOrigin(named(`(idle)`), origin)).toBe(`idle`)
    // Anonymous functions are real frames, not synthetic ones, so the label
    // names no category and the frame categorizes by its (absent) location.
    expect(
      categorizeEntryForOrigin(named(`(anonymous function)`), origin),
    ).toBe(`native`)
  })
})
