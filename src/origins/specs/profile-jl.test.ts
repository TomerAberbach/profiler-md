import { describe, expect, test } from 'vitest'
import { determineOrigin, relativeEntry } from '../testing.ts'
import { profileJlOriginSpec } from './profile-jl.ts'

describe(`detection`, () => {
  test.each([`<generic memory - inline alloc>`, `<generic memory - malloc>`])(
    `detects profile-jl by the %s synthetic node`,
    name => {
      expect(
        determineOrigin({
          format: `v8-heap-snapshot`,
          entries: [relativeEntry(name)],
        }),
      ).toBe(`profile-jl`)
    },
  )

  test(`a snapshot without Julia's synthetic nodes falls back past profile-jl`, () => {
    expect(
      determineOrigin({
        format: `v8-heap-snapshot`,
        entries: [relativeEntry(`sum`, `/home/user/app/main.jl`)],
      }),
    ).toBe(`node`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = profileJlOriginSpec

  test(`a located frame is ours`, () => {
    expect(categorizeEntry(relativeEntry(`sum`, `/app/main.jl`))).toBe(`ours`)
  })

  test(`a locationless entity is stdlib`, () => {
    expect(categorizeEntry(relativeEntry(`Task`))).toBe(`stdlib`)
  })
})
