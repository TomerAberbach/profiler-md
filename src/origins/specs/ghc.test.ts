import { describe, expect, test } from 'vitest'
import type { ProfileEntry } from '../../options.ts'
import { determineOrigin, relativeEntry } from '../testing.ts'
import { ghcOriginSpec } from './ghc.ts'

const located = (name: string, path: string): ProfileEntry => ({
  id: 1,
  name,
  location: { type: `relative`, path },
})

const named = (name: string): ProfileEntry => ({ id: 1, name })

describe(`detection`, () => {
  test.each([`ghc-eventlog`, `ghc-json-profile`] as const)(
    `the runtime's own %s format resolves to GHC`,
    format => {
      expect(determineOrigin({ format, entries: [] })).toBe(`ghc`)
    },
  )

  test(`a cost-centre source span in another format is not GHC`, () => {
    // GHC emits only its own formats, so a converter wrote a speedscope profile
    // with a source span. GHC's conventions are registered for GHC rather than
    // for a converter.
    expect(
      determineOrigin({
        format: `speedscope`,
        entries: [
          relativeEntry(`fromList`, `src/Data/Aeson/KeyMap.hs:247:1-30`),
        ],
      }),
    ).toBe(`unknown`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = ghcOriginSpec

  test(`a cost centre with a source is ours`, () => {
    expect(categorizeEntry(located(`summarize`, `Profile.hs`))).toBe(`ours`)
  })

  test(`a cost centre with a placeholder source is native`, () => {
    expect(categorizeEntry(named(`MAIN.MAIN`))).toBe(`native`)
  })

  test(`the runtime's collector is its own category`, () => {
    expect(categorizeEntry(named(`GC.GC`))).toBe(`garbage-collector`)
  })

  test(`the runtime's idle centre is its own category`, () => {
    expect(categorizeEntry(named(`IDLE.IDLE`))).toBe(`idle`)
  })

  test(`a boot library GHC ships is stdlib`, () => {
    expect(
      categorizeEntry(
        located(`Data.Text.pack`, `libraries/text/src/Data/Text.hs`),
      ),
    ).toBe(`stdlib`)
  })

  test(`a package the program depends on is ours`, () => {
    // Cabal compiles a dependency from paths relative to its own root, so
    // nothing separates aeson's modules from the program's.
    expect(
      categorizeEntry(
        located(`Data.Aeson.KeyMap.fromList`, `src/Data/Aeson/KeyMap.hs`),
      ),
    ).toBe(`ours`)
  })

  test(`a binding of the program's named GC is not the collector`, () => {
    expect(categorizeEntry(located(`GC`, `src/Gc.hs`))).toBe(`ours`)
  })
})
