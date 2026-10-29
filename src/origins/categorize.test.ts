import { describe, expect, test } from 'vitest'
import type { ProfileEntry } from '../options.ts'
import { origins, originSpecOf } from './index.ts'
import type { Origin } from './index.ts'

const located = (url: string): ProfileEntry => ({
  name: `f`,
  location: { type: `absolute`, url: new URL(url) },
})

const relative = (path: string): ProfileEntry => ({
  name: `f`,
  location: { type: `relative`, path },
})

const named = (name: string): ProfileEntry => ({ name })

describe(`every origin`, () => {
  test.each(origins)(`%s`, origin => {
    const { categorizeEntry } = originSpecOf(origin)
    // A frame with no location is compiled code, except where the profiler
    // says only that it could not attribute the frame.
    expect(categorizeEntry(named(`native`))).toBeOneOf([`native`, `unknown`])
    // A frame the profiler neither named nor located is unknown everywhere.
    expect(categorizeEntry(named(`(anonymous)`))).toBe(`unknown`)
    expect(categorizeEntry(located(`file:///app/src/index.ts`))).toBe(`ours`)
    expect(categorizeEntry(relative(`src/index.ts`))).toBe(`ours`)
  })
})

describe(`synthetic frames (JavaScript runtimes)`, () => {
  const jsEngineOrigins: Origin[] = [`node`, `deno`, `bun`, `safari`]
  test.each(jsEngineOrigins)(`%s`, origin => {
    const { categorizeEntry } = originSpecOf(origin)
    expect(categorizeEntry(named(`(garbage collector)`))).toBe(
      `garbage-collector`,
    )
    expect(categorizeEntry(named(`(idle)`))).toBe(`idle`)
    // Anonymous functions are real frames, not synthetic ones, so the label
    // names no category and the frame categorizes by its (absent) location.
    expect(categorizeEntry(named(`(anonymous function)`))).toBe(`native`)
  })
})
